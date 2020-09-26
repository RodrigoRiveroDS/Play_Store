var express = require('express');
var router = express.Router();
var usersControllers =  require('../controllers/usersControlles');

/* GET users listing. */

router.get('/register', /*guestMiddleware,*/ usersControllers.register);

router.get('/login', usersControllers.login);
//router.post('/login', usersControllers.logued);



module.exports = router;
