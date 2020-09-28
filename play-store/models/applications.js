module.exports = (sequelize, dataTypes) => {
    const applications = sequelize.define('applications', {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        name : {
            type : dataTypes.STRING(45),
            allowNull : false,
        },
        image_url : {
            type : dataTypes.STRING(200),
        },
        description : {
            type : dataTypes.TEXT,
            allowNull : false,
        },
       
        price : {
            type : dataTypes.INTEGER(10).UNSIGNED,
            allowNull : false,
        },
        
              
    },{
        tableName : 'applictions',
        timestamps : true
    })
    applications.associate = function(models){
        applications.belongsTo(models.Categories, {
            as: "categories",
            foreignKey: "category_id"
        })
    }
    applications.associate = function(models){
        applications.belongsToMany(models.users, {
            as : "users",
            //through : "carts_applications",
            foreignKey : "applications_id",
           otherKey : "categories_id",
            timestamps : true
        })
    }
    return applicattions
}