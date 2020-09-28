module.exports = (sequelize, dataTypes) => {
    const Users = sequelize.define('Users', {
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
        email : {
            type : dataTypes.STRING(45),
            allowNull : false,

        },
        password : {
            type : dataTypes.STRING(45),
            allowNull : false,

        }       
    },{
        tableName : 'users',
        timestamps : true
    })
    Users.associate = function(models){
        Users.belongsToMany(models.applications, {
            as: "applications",
            foreignKey: "users_id"
        })
    }
    return Users
}