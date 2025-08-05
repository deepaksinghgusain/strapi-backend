module.exports = async (policyContext, config, { strapi }) => {
    console.log(policyContext.request.header.authorization, "=policyContext.state.user");
    const authHeader = policyContext.request.header.authorization;

    if (!authHeader) {
        return false;
    }

    const token = authHeader.split(" ")[1];

    console.log(token);
    console.log(strapi.admin.services.token.decodeJwtToken(token));

    const { payload, isValid } = strapi.admin.services.token.decodeJwtToken(token);

    if (!isValid) {
        return { authenticated: false };
    }

    let user = await strapi
        .query('admin::user')
        .findOne({ where: { id: payload.id }, populate: ['roles'] });

    if (!user) {
        return false;
    }

    policyContext.state.user = user;
    policyContext.state.userAbility = await strapi.service('admin::permission').engine.generateUserAbility(user);
    return true;
};

