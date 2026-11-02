// Middleware logger: mencatat method, path, status response, dan timestamp.
// Status baru diketahui setelah response selesai, jadi dicatat lewat event 'finish'.
// Log ditampilkan di terminal dan disimpan ke file log/access.log.
const fs = require('fs');
const path = require('path');
const { logFile } = require('../config/app.config');

fs.mkdirSync(path.dirname(logFile), { recursive: true });

const logger = (req, res, next) => {
  const mulai = Date.now();

  res.on('finish', () => {
    const waktu = new Date().toISOString();
    const durasi = Date.now() - mulai;
    const baris = `[${waktu}] ${req.method} ${req.originalUrl} -> ${res.statusCode} (${durasi}ms)`;

    console.log(baris);
    fs.appendFile(logFile, baris + '\n', (err) => {
      if (err) console.error('Gagal menulis log:', err.message);
    });
  });

  next();
};

module.exports = logger;
