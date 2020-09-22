var express = require('express');
var router = express.Router();
var productsControllers =  require('../controllers/products');

// Home page route
router.get('/', productsControllers.products)



module.exports = router;

