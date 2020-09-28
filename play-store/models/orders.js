module.exports = (sequelize, dataTypes) => {
    const orders = sequelize.define('orders', {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        price : {
            type : dataTypes.INTEGER(10).UNSIGNED,
            allowNull : false,
        }  
    },{
        tableName : 'oreders',
        timestamps : false
    })
    orders.associate = function(models){
        orders.belongsTo(models.Users, {
            as: "users",
            foreignKey: "users_id"
        })
    }
    
    orders.associate = function(models){
        orders.belongsToMany(models.applications, {
            as : "applications",
            //through : "orders_applications",
            foreignKey : "orders_id",
           // otherKey : "applications_id",
            timestamps : false
        })
    }
    return orders
}