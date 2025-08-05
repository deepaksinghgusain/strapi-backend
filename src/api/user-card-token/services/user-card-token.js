'use strict';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

/**
 * user-card-token service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

// module.exports = createCoreService('api::user-card-token.user-card-token');
module.exports = {
  createUpdateCard: async (body) => {
    return new Promise(resolve => {
      // console.log("body = ", body)
      const email = body.data.email;
      const stripeCardId = body.data.stripeCardId;
      const stripeCustomerId = body.data.stripeCustomerId;

      // console.log("SERVICE ::", body, email, token)
      if (stripeCustomerId == "" && stripeCardId == "") {
        checkUser(email).then(resp => {

          if (resp.code == 200) {
            checkCard(resp.customerId[0].id, body.data).then(cardDetail => {
              // console.log("cardDetail = ", cardDetail)
              resolve(cardDetail)
            })
          } else {

            resolve(resp.err)
          }
        })
      } else {

        deleteCard(stripeCustomerId, stripeCardId).then(deleteCardResp => {
          checkCard(stripeCustomerId, body.data).then(cardDetail => {
            // console.log("cardDetail = ", cardDetail)
            resolve(cardDetail)
          })
        })
      }
    })
  },
  getExistingCard: (customerId, sToken,cardid) => {
    return new Promise(async resolve => {
      try {
        // console.log("sToken = ", sToken)
        const token = await stripe.tokens.retrieve(
          sToken
        );
         console.log('input', customerId, cardid )
        const card = await stripe.customers.retrieveSource(
          customerId,
          cardid, 
        );
        
        resolve(card, token?.card?.id)
      } catch (err) {
        resolve(err)
      }
    });
  }
}


/**** CHECK USER EXIST OR NOT IN STRIPE ****/
async function checkUser(email) {
  return new Promise(async resolve => {
    try {
      const customer = await stripe.customers.search({
        query: 'email:"' + email + '"',
      });
      if (customer.data.length > 0) {
        // RETURN CUSTOMER ID
        resolve({ code: 200, customerId: customer.data, err: '' })
      } else {
        // CREATE NEW CUSTOMER AND RETURN CUSTOMER ID
        const newCustomer = await stripe.customers.create({
          email: email,
        });
        resolve({ code: 200, customerId: newCustomer.id, err: '' })
      }
    } catch (err) {
      console.log("check user err = ", err)
      resolve({ code: 400, customerId: '', err: err })
    }
  })
}

/**** CHECK CARD EXIST OR NOT IN STRIPE ****/
async function checkCard(customerId, data) {
  return new Promise(async resolve => {
    // console.log("customerId = ", data, customerId)
    try {
      const customCardData = {
        number: data.cardNumber,
        exp_month: data.expMonth,
        exp_year: data.expYear,
        name: data.name
      };
      const token = await stripe.tokens.create({
        card: customCardData
      });
      console.log("token = ", token)
      let card;
      try {
        card = await stripe.customers.createSource(
          customerId,
          { source: token.id }
        );

      } catch (error) {
        console.log(error, "-----------errr-------------");
      }

      console.log("card = ", card);
      // send all data along with cardId to store in user card token table
      updateCardToken(data, card, token.id);
      resolve(card)
    } catch (err) {
      console.log("add card err = ", err)
      resolve(err)
    }
  })
}

/**** DELETE CARD IN STRIPE ****/
async function deleteCard(customerId, cardId) {
  return new Promise(async resolve => {
    try {
      // Delete card in stripe by cardId and customerId
      const deleted = await stripe.customers.deleteSource(customerId, cardId);
      resolve(deleted)
    } catch (err) {
      console.log("delete card err = ", err)
      resolve(err)
    }
  })
}

/**** UPDATE USER CARD TOKEN ****/
async function updateCardToken(data, card, token) {
  try {
    //Get user card token detail by userId. If its exists then update with new card data else insert in user card token table.
    const userFound = await strapi.db.query('api::user-card-token.user-card-token').findOne({ where: { userId: data.userId } });
    const requestData = { userId: data.userId, email: data.email, stripeCustomerId: card.customer, stripeCardId: card.id, stripeCardToken: token, publishedAt: new Date() };
    if (userFound) {
      // Update card data
      await strapi.db.query('api::user-card-token.user-card-token').update({ where: { userId: data.userId }, data: requestData })
    }
    else {
      // Insert card data
      await strapi.entityService.create('api::user-card-token.user-card-token', { data: requestData })

    }
  } catch (err) {
    console.log("ERR:::", err)
  }
}
