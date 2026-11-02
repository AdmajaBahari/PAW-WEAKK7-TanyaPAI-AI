const express = require('express');
const apiController = require('../controller/api.controller');

const router = express.Router();

router.get('/status', apiController.getStatus);
router.get('/produk', apiController.getProduk);

module.exports = router;
