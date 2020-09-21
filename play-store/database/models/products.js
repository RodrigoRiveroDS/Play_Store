module.exports = (sequelize, dataTypes) => {
    const Products = sequelize.define('products', {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        product_name : {
            type : dataTypes.STRING(45),
            allowNull : false,
        },
        stock : {
            type : dataTypes.INTEGER(10).UNSIGNED,
        },
        price : {
            type : dataTypes.INTEGER(10).UNSIGNED,
            allowNull : false,
        },
        description : {
            type : dataTypes.TEXT,
            allowNull : false,
        },
        image : {
            type : dataTypes.STRING(200),
        }      
    },{
        tableName : 'products',
        timestamps : true
    })
    applications.associate = function(models){
        Products.belongsTo(models.Categories, {
            as: "categories",
            foreignKey: "category_id"
        })
    }
    Products.associate = function(models){
        Products.belongsToMany(models.users, {
            as : "users",
            //through : "carts_products",
            foreignKey : "products_id",
           // otherKey : "carts_id",
            timestamps : true
        })
    }
    return aplicattions
}