module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/twilio-chat/:user',
     handler: 'twilio-chat.tokenController',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
