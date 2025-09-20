module.exports = {
  apps: [
    {
      name: 'your-strapi-app',
      script: 'npm', // or 'yarn'
      args: 'start', // or 'develop' for development
      env: {
        NODE_ENV: 'production', // or 'development'
      },
      instances: 'max', // or a specific number
      exec_mode: 'cluster', // or 'fork'
    },
  ],
};
