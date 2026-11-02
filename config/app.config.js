const path = require('path');

// Konfigurasi aplikasi. Port bisa diganti lewat environment variable PORT.
module.exports = {
  appName: 'TanyaPAI-Ai',
  port: process.env.PORT || 5173,
  env: process.env.NODE_ENV || 'development',
  logFile: path.join(__dirname, '..', 'log', 'access.log'),
};
