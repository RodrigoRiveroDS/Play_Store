let controller = {
   
    products : function(req, res, next) {
        res.render('detalle');
      },

      alta : function(req, res, next) {
        res.render('alta');
      },
     compra : function(req, res, next) {
        res.render('compra');
      },

      


}
module.exports=controller