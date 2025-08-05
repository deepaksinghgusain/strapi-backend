module.exports = {
  routes: [
    {
      method: "GET",
      path: "/video/viewdata/:uploadId",
      handler: "review-exam.getDataFromMux",
    }
  ]

};
