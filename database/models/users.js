module.exports = (sequelize, dataTypes) => {
    const Users = sequelize.define('Users', {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        user_name : {
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

        },
        created_at: {
            
        },
        updated_at: {
            
        }     
    },{
        tableName : 'users',
        timestamps : false
    })
   
    return Users
}