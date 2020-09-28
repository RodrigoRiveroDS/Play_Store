

let controller = {

  register : function(req, res, next) {
    res.render('register');
  },
    login : function(req, res, next) {
        res.render('login');
      },
      logeado : function(req, res, next) {
        res.render('logeado');
      },
     

     


}
module.exports=controller