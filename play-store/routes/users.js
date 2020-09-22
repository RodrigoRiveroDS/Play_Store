var express = require('express');
var router = express.Router();
var usersControllers =  require('../controllers/usersControlles');

/* GET users listing. */

router.get('/', usersControllers.login);



module.exports = router;
