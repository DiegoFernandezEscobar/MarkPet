module.exports = (sequelize, dataTypes) => {
    let alias = 'UserLog';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        token: {
            type: dataTypes.STRING(200)
        },
        user_id:{
            type: dataTypes.INTEGER
        }

    };
    let config = {
        tableName: 'userlog',
        timestamps: false
    };
    
    const UserLog = sequelize.define(alias, cols, config)

    UserLog.associate = (models)=> {
        UserLog.belongsTo(models.User, { 
            as: "User", 
            foreignKey: "user_id"
        })
    }
    return UserLog;
}