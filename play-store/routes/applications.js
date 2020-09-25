var express = require('express');
var router = express.Router();
var applicationsControllers =  require('../controllers/applications');


router.get('/', applicationsControllers.products);
router.get('/alta', applicationsControllers.alta);



module.exports = router;

