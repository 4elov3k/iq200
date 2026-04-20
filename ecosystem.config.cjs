module.exports = {
  apps: [
    {
      name: "iq200ru",
      script: ".next/standalone/server.js",
      cwd: "/var/www/iq200ru",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: "production",
        HOSTNAME: "0.0.0.0",
        PORT: 3000,
      },
    },
  ],
};
