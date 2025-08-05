module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  url:env('URL'),
  port: env('PORT'),
  app: {
    keys: env.array("APP_KEYS") ,   
  },
});
