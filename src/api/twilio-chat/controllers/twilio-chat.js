'use strict';





const AccessToken = require("twilio").jwt.AccessToken
const ChatGrant = AccessToken.ChatGrant

const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID
const twilioApiKey = process.env.TWILIO_API_KEY_SID
const twilioApiSecret = process.env.TWILIO_API_KEY_SECRET


// Used specifically for creating Chat tokens
const serviceSid = process.env.TWILIO_CONVERSATIONS_SERVICE_SID


module.exports = {
  tokenController: async (ctx, next) => {
    try {


      const chatGrant = new ChatGrant({
        serviceSid: serviceSid,
      })
      

       const user = ctx.params.user
 
      const token = new AccessToken(
        twilioAccountSid,
        twilioApiKey,
        twilioApiSecret,
        {identity: user}
    )
    token.addGrant(chatGrant)
    const jwt = token.toJwt()
    console.log(`Token for ${user}: ${jwt}`)
 
      ctx.body = jwt;
    } catch (err) {
      ctx.body = err;
    }
  }
};
