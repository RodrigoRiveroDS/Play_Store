module.exports = (sequelize, dataTypes) => {
    const comments = sequelize.define('comments', {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        rating : {
            type : dataTypes.INTEGER(10),
            allowNull : false,
        }    
    },{
        tableName : 'comments',
        timestamps : true
    })
    comments.associate = function(models){
        comments.belongsTo(models.order, {
            as: "applications",
            foreignKey: "order_id"
        })
    }
    return comments
}