module.exports = function(sequelize, datatypes) {
   /* let alias = "comentario";

    let cols = {
         id : {
             type : datatypes.INTEGER,
             primaryKey: true,
             autoIncrement: true
             
         },
         order_id : {

         },
         rating : {
            type : datatypes.INTEGER,

         },
         content : {
            type : datatypes.STRING,

         },
         created_at : {

         },
         updated_at : {

         }
     }
     let config = {
         tableName : "comments",
         timestamps : false
     }*/

    let comments = sequelize.define(alias, cols, config);


    return comments;
}