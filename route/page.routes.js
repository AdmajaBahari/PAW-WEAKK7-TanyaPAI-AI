const express = require('express');
const pageController = require('../controller/page.controller');

const router = express.Router();

router.get('/', pageController.home);

module.exports = router;
