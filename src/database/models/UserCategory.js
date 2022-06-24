module.exports = (sequelize, dataTypes) => {
    let alias = 'UserCategory';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(10)
        }
    };
    let config = {
        tableName: 'usercategory',
        timestamps: false
    };

    const UserCategory = sequelize.define(alias, cols, config)

    UserCategory.associate =function(models){
        UserCategory.hasMany(models.User, { 
            as: "users", 
            foreignKey: "userCategory_id"
        })
    }
    return UserCategory
}