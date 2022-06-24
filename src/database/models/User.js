module.exports = (sequelize, dataTypes) => {
  let alias = "User"; 
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstname: {
      type: dataTypes.STRING,
      // allowNull: false,
    },
    lastname: {
      type: dataTypes.STRING,
      // allowNull: false,
    },
    email: {
      type: dataTypes.STRING,
      // allowNull: false,
    },
    profileImage: {
      type: dataTypes.STRING,
      // allowNull: false,
    },
    password: {
      type: dataTypes.TEXT,
      // allowNull: false,
    },
    userCategory_id: {
      type: dataTypes.INTEGER,
      // allowNull: false, 
    },
    phone: {
    type: dataTypes.INTEGER,
    // allowNull: false,
    },
    adress: {
    type: dataTypes.STRING,
    // allowNull: false,
    }
  };

  let config = {
    tableName: 'users',
    timestamps: false
};

const User = sequelize.define(alias, cols, config);

User.associate =  function(models){
    User.belongsTo(models.UserCategory, {
        as: "UserCategory",
        foreignKey: "userCategory_id"
    });

    
    User.hasMany(models.UserLog, {
        as: "UserLog",
        foreignKey: "user_id"
    })
}


return User
}


//module.exports = (sequelize, dataTypes) => {
//    let alias = "User"; 
//    let cols = {
//      id: {
//        type: dataTypes.INTEGER,
//        primaryKey: true,
//        autoIncrement: true,
//      },
//      firstname: {
//        type: dataTypes.STRING,
//        // allowNull: false,
//      },
//      lastname: {
//        type: dataTypes.STRING,
//        // allowNull: false,
//      },
//      email: {
//        type: dataTypes.STRING,
//        // allowNull: false,
//      },
//      image: {
//        type: dataTypes.STRING,
//        // allowNull: false,
//      },
//      password: {
//        type: dataTypes.STRING,
//        // allowNull: false,
//    },
//      roles_id: {
//        type: dataTypes.INTEGER,
//        // allowNull: false,
//        
//    }
//    };
//  
//    let config = {
//      tableName: "users",  
//      timestamps: false,
//      // createdAt: "created_at",
//      // updatedAt: "updated_at",
//      // deletedAt: false,
//    };
//    const User = sequelize.define(alias, cols, config);
//
//    // User.associate = function(models){
//        
//    //     User.belongsTo(models.Role, {
//    //         as: "roles",
//    //         foreignKey: "roles_id"
//    //     })
//    // }
//  
//    return User;
//  };