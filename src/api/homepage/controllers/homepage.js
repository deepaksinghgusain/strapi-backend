"use strict";

/**
 *  homepage controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const axios = require("axios");
const { id } = require("date-fns/locale");
const convert = require("xml-js");
module.exports = createCoreController(
  "api::homepage.homepage",
  ({ strapi }) => ({
    async getRssFeed() {
      //find the rssfeedURL
      const gData = await strapi.db.query("api::homepage.homepage").findOne({
        select: ["RssFeedUrl"],
      });

      //convert a comma separated url
      const result = gData.RssFeedUrl.split(",");
      if (!result) {
        return ctx.badRequest("Url Not found");
      }

      const feed = [];
      for (const url of result) {
        //axios to get url

        try {
          const { data } = await axios.get(url);
          if (data) {
            //convert xml to json
            const jsonObj = convert.xml2json(data, {
              compact: true,
              spaces: 4,
            });
            if (jsonObj) {
              let resultObj = {};
              resultObj[url] = JSON.parse(jsonObj);
              feed.push(resultObj);
            }
          }
        } catch (error) {}
      }
      return {
        url: result,
        feeds: feed,
      };
    },
  })
);
