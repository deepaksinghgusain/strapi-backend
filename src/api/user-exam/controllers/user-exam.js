"use strict";

/**
 *  user-exam controller
 */
const { isObject } = require("lodash/fp");
const { createCoreController } = require("@strapi/strapi").factories;
// const {
//   parseBody,
// } = require("'strapi' is not recognized as an internal or external command,");

module.exports = createCoreController(
  "api::user-exam.user-exam",
  ({ strapi }) => ({
    async create(ctx) {
      let query = {};
      const userId = ctx.state.user.id;
      if (!userId) {
        return ctx.unauthorized("User not found");
      }

      let { data } = parseBody(ctx);
      if (!isObject(data)) {
        return ctx.badRequest('Missing "data" payload in the request body');
      }
      const userResponse = data.answerJson;
      if (!userResponse) {
        return ctx.badRequest('Missing "userResponse" in the body');
      }
      // console.log(userResponse,"userResponse")
      const examId = data.exam;
      if (!examId) {
        return ctx.badRequest("Exam id not found");
      }
      // console.log(examId,"examId")

      // query = { select :["score","totalScore"], populate: '*', filters: { user: { id: userId }, exam: { id: examId } } }
      // const examFound = await strapi.services['api::user-exam.user-exam'].find(query);
console.log("console after examId found");
      let scores;
      let totalScores;
      let cId;
      console.log("examId and userId", userId, examId, "payload", data);
      const examsDetail = await strapi.db
        .query("api::user-exam.user-exam")
        .findOne({
          select: ["score", "totalScore"],
          where: {
            $and: [
              {
                user: userId,
              },
              {
                exam: examId,
              },
            ],
          },

          populate: { course: true },
        });

      // console.log(examsDetail,"----- User Exam detail -----")

      //   cId = examsDetail.course.id

      // if (examFound.results.length !== 0) {
      //     return ctx.badRequest('You Have Already Given the Exam')
      // }

      // fetching  exam pass percentag from gloabal ;

      const gData = await strapi.db.query("api::global.global").findOne({
        select: ["examPassPercentage"],
        where: {
          id: 1,
        },
      });
      console.log(gData, "------gData------");
      // fetching the pass percentage

      const ExamPassPercentage = gData.examPassPercentage || 70;

       console.log("examDetail", examsDetail, ExamPassPercentage);
      if (examsDetail && ExamPassPercentage != null) {
        console.log("examDetail found", examsDetail);
        let userExamId = examsDetail.id;

        scores = examsDetail.score;
        totalScores = examsDetail.totalScore;

        if (scores >= totalScores * (ExamPassPercentage / 100.0)) {
          console.log(" exam passed returning");
          return ctx.badRequest("You Have Already Given the Exam");
        } else {
          console.log("last exam failed deleting it");
          await strapi.entityService.delete(
            "api::user-exam.user-exam",
            userExamId
          );
        }
      }

      query = {
        populate: { questions: { populate: "*" }, course: { populate: "*" } },
        filters: { id: examId },
      };
      const { results } = await strapi.services["api::exam.exam"].find(query);
      console.log("results",results);
      if (results.length === 0) {
        return ctx.badRequest("Please Enter Valid ExamId");
      }

      const course = results[0].course;
      const courseId = course.id;
console.log("courseIsd",results[0].course);
      if (!course) {
        return ctx.badRequest("Course not found");
      }

      const loggedInUser = await strapi.entityService.findOne(
        "plugin::users-permissions.user",
        userId,
        {
          populate: { coursePurchased: { populate: "*" } },
        }
      );
      console.log("loggedUdser",loggedInUser);

      const userCourse = loggedInUser.coursePurchased;
       console.log("userCourse",userCourse,courseId);
     const courseFound= userCourse.filter((res)=>{
         if(res.course!=null){
            return res.course.id == courseId
         }
      })
     
      console.log("CourseFound",courseFound);
      // const courseFound = userCourse.find(
      //   (course) => course.course.id === courseId
      // );
      if (!courseFound) {
        return ctx.unauthorized("Course not found in your Cart");
      }

      const questions = results[0].questions;

      let score = 0;
      let totalScore = questions.length;

      userResponse.map((userRes) => {
        const que = questions.find(
          (qst) => qst.title.trim() === userRes.question.trim()
        );
        if (que) {
          const opt = que.options.find(
            (opt) => opt.option.trim() === userRes.answer.trim()
          );
          if (opt) {
            if (opt.isAnswer) {
              score++;
            }
          }
        }
      });

      let storeData = {
        userResponse,
        email: loggedInUser.email,
      };

      ctx.request.body.data.result = storeData;
      ctx.request.body.data.user = userId;
      ctx.request.body.data.course = courseId;
      ctx.request.body.data.score = score;
      ctx.request.body.data.totalScore = totalScore;
      ctx.request.body.data.exam = examId;
      console.log(
        "ctx ",
        ctx.request.body.data.result,
        ctx.request.body.data.user,
        ctx.request.body.data.course,
        ctx.request.body.data.score,
        ctx.request.body.data.totalScore,
        ctx.request.body.data.exam
      );
      //get current date
      let da = new Date();
      let completeDate = da.toISOString().substring(0, 10);

      //update user course to completed
      if (score >= totalScore * (ExamPassPercentage / 100.0)) {
        console.log(" updating usercourse ");
        await strapi.db.query("api::user-course.user-course").update({
          where: {
            course: courseId,
            user: userId,
          },
          data: {
            status: "Completed",
            completedOn: completeDate,
          },
        });
      }

      return super.create(ctx);
    },
  })
);