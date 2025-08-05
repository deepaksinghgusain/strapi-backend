module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom:  env('EMAIL_FROM'),
          defaultReplyTo:  env('EMAIL_REPLY_TO'),
        //  testAddress: 'juliasedefdjian@strapi.io',
        },
      },     
    },

    slugify: {
      enabled: true,
      config: {
        contentTypes: {
          page: {
            field: 'slug',
            references: 'title',
          },
          course: {
            field: 'slug',
            references: 'title',
          },
          package: {
            field: 'slug',
            references: 'title',
          },
        },
      },
    },
    // ...


    // ...
  });

 