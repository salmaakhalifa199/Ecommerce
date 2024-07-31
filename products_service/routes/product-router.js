const express = require('express');
const ProductCtrl = require('../controllers/product-ctrl');
const router = express.Router();

router.get('/products', ProductCtrl.getProducts);
router.get('/product', ProductCtrl.getProduct);
router.get('/', ProductCtrl.checkServiceRunning)

module.exports = router