const fs = require('fs');
const db = require('../database/models')


  let controller = {
    listado : function(req, res) {
      db.Products.findAll()
      .then(function(products){
        res.render('products', {products:products});
      })
      
    },
    detail : function(req, res, next) {
      res.render('detalle');
    },
    categoria : function(req, res) {
      db.Categories.findAll()
        .then(function(categories){
            return res.render('alta', {categories:categories})
        })
      
    },


}

module.exports = controller