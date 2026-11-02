const ProdukModel = require('../model/produk.model');
const { appName } = require('../config/app.config');

// Mengubah detik menjadi format "Xj Ym Zd"
const formatUptime = (detik) => {
  const h = Math.floor(detik / 3600);
  const m = Math.floor((detik % 3600) / 60);
  const s = Math.floor(detik % 60);
  return `${h}j ${m}m ${s}d`;
};

// GET /  -> halaman frontend (EJS) dengan data produk dari Model
exports.home = (req, res) => {
  res.render('index', {
    title: appName,
    produk: ProdukModel.getAll(),
    uptime: formatUptime(process.uptime()),
  });
};

// 404 untuk halaman yang tidak ditemukan
exports.notFound = (req, res) => {
  res.status(404).render('404', { title: 'Halaman tidak ditemukan', path: req.originalUrl });
};
