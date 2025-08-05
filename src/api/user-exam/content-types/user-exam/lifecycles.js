fs = require("fs");

module.exports = {
  async afterUpdate(event) {
    console.log("LIFECYCLE>UserExam>>afterUpdate  ");
    var { CLIENT_URL, EMAIL_REPLY_TO, EMAIL_FROM } = process.env;
    const { result, data } = event;

    const { score, totalScore, course } = result;
    console.log("LIFECYCLE>UserEXAM>afterUpdate", event);

    // fetchig the email template and  pass percentage from global

    const gData = await strapi.db.query("api::global.global").findOne({
      select: ["examPassPercentage"],
      where: {
        id: 1,
      },
      select: ["notificationEmail"],
      populate: {
        //  socialLinks: true,
        EmailTemplates: {
          populate: {
            template: true,
          },
        },
      },
    });
    if (gData) {
      let cc = gData.notificationEmail.split(",") || EMAIL_REPLY_TO;

      // fetching the pass percentage

      const examPassPercentage = gData?.examPassPercentage || 70;
      // fetching the email template and subject
      const certTempData = gData.EmailTemplates.filter((value) => {
        return value.templateName === "certificateIssue";
      });

      let subject =
        certTempData[0]?.subject || "Certificate Granted – CPE Warehouse";

      if (result && course) {
        const title = course?.title;
        const surveyLink = course?.surveyLink;
        let surveyLinkDetail = "";
        if(surveyLink==null)
        {
          surveyLinkDetail = "";
        }
        else
        {
          surveyLinkDetail = `<div style='white-space: pre-line;'>We would love to know how we did! Please complete the survey by clicking on the link below. Your responses enable us to improve our product experience and compliance.

                                  <a style=' background-color: blue; color:white;' class="survey-link" href='${surveyLink}'>${surveyLink}</a></div>`;
        }
        const { email } = result?.result;
        if (score >= totalScore * (examPassPercentage / 100.0)) {
          let DashboardLink = `${CLIENT_URL}/learner/dashboard`;
          // reading the html file from url

          if (certTempData && certTempData[0]?.template?.url != null) {
            let certHtmlUrl = `public${certTempData[0]?.template?.url}`;
            console.log("in if");
            let certHtml;

            await fs.readFile(certHtmlUrl, "utf8", function (err, html) {
              if (err) {
                console.log("error=>", err);
              } else {
                certHtml = html
                  .replace("{{title}}", "<%= title %>")
                  .replace("{{surveyLinkDetail}}", "<%= surveyLinkDetail %>")
                  .replace("{{dashboardLink}}", "<%=DashboardLink%>");
                sendEmailWithTemplate(certHtml, subject, cc);
              }
            });
          } else {
            let defaultHtml = `<p>Congratulations! You have successfully completed</p>
                <p style="color: blue";> <%= title %>./p>
                <p> <%= surveyLinkDetail %> </p>
                <p> Log-in to your dashboard below to download your certificate.</p>


                <p ><a style=" background-color: blue; color:white;"  href="<%=DashboardLink%>">DASHBOARD<a/></p>

                <p>Reply to this email if you have any questions.</p>

                <p>Team CPE Warehouse</p>`;
            sendEmailWithTemplate(
              defaultHtml,
              "Certificate Granted – CPE Warehouse"
            );
          }
          // send  email function
          function sendEmailWithTemplate(certHtml, subject) {
            console.log("Certificate Issues Mail Sending (userExam)...");
            console.log(certHtml, subject);
            let emailTemplate = {
              subject: subject,
              text: "text",
              html: certHtml,
            };

            // sending email

            const emailRes = strapi.plugins[
              "email"
            ].services.email.sendTemplatedEmail(
              {
                to: email,
                replyTo: EMAIL_REPLY_TO,
                from: EMAIL_FROM,
                // bcc:BCC_EMAIL || 'cpewarehouses@gmail.com',
                // from: is not specified, so it's the defaultFrom that will be used instead
              },
              emailTemplate,
              {
                title,
                surveyLinkDetail,
                DashboardLink,
              }
            );
            console.log("Certificate Issues Mail Sent (userExam)");
          }
        }
      }
    }
  },
  async beforeCreate(event) {
    const { data } = event.params;
    console.log("LIFECYCLE>UserExam>afterUpdate  ", data);

    console.log("LIFECYCLE>UserExam>afterUpdate finished ");
  },
};
