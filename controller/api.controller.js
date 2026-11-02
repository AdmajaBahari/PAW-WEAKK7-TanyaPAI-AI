const ProdukModel = require('../model/produk.model');
const { appName } = require('../config/app.config');

// GET /api/status
exports.getStatus = (req, res) => {
  res.json({
    status: 'ok',
    app: appName,
    message: 'Server berjalan dengan baik',
    uptime: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
  });
};

// GET /api/produk
exports.getProduk = (req, res) => {
  res.json(ProdukModel.getAll());
};
