module.exports = {
  // this is test  comment
  async afterCreate(event) {
    const { EMAIL_FROM, EMAIL_REPLY_TO } = process.env;

    try {
      // CALLING  GLOBAL API  FOR NOTIFICATION EMAIL CONTACT

      const gData = await strapi.db.query("api::global.global").findOne({
        where: {
          id: 1,
        },
        select: ["notificationEmail"],
      });

      const { data } = event.params;
      const { message, email, firstName, lastName, qType, phoneNumber} = data;

      if (email && message) {
        let recevier;
        if (gData?.notificationEmail != null) {
          recevier = gData?.notificationEmail;
        } else {
          recevier = EMAIL_FROM;
        }
        let subject = `${firstName} ${lastName} : tried to contact support `;
        let body = `Email : ${email}

                    Question Category : ${qType}
        
                    Name : ${firstName} ${lastName}

                    Phone Number : ${phoneNumber}
        
                    Question:   ${message} `;

        recevier.split(",").map((email) => sendTempEmail(subject, body, email));
      }

      // send mail function
      function sendTempEmail(subject, message, recevier) {
        console.log("Contact Us Mail Sendging....");
        const emailTemplate = {
          subject: subject,
          text: "text",
          html: message,
        };
        const emailRes = strapi.plugins[
          "email"
        ].services.email.sendTemplatedEmail(
          {
            to: recevier,
            replyTo: EMAIL_REPLY_TO,
            from: EMAIL_FROM,
           // bcc: BCC_EMAIL || 'cpewarehouses@gmail.com',
            

            // from: is not specified, so it's the defaultFrom that will be used instead
          },
          emailTemplate,
          {}
        );
        console.log("Contact Us Mail Sent.");
      }
    } catch (error) {
      console.log("error", error);
    }
  },
};
