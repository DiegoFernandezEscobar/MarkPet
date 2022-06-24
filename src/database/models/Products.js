module.exports = (sequelize, dataTypes) => {
  let alias = "Product"; 
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING,
      // allowNull: false,
    },
    description: {
      type: dataTypes.TEXT,
      // allowNull: false,
    },
    price: {
      type: dataTypes.INTEGER,
      // allowNull: false,
    },
    discount: {
      type: dataTypes.INTEGER,
      // allowNull: false,
    },
    imagen: {
      type: dataTypes.STRING,
      // allowNull: false,
    },
 
    stock: {
      type: dataTypes.INTEGER,
      // allowNull: false,
    },
    categoryMascotas_id: {
      type: dataTypes.INTEGER,
      // allowNull: false,
    },
    categoryProductos_id: {
      type: dataTypes.INTEGER,
      // allowNull: false,
    }
  };
  let config = {
    tableName : "products",
  
    timestamps: false,
  //   createdAt: "created_at",
  //   updatedAt: "updated_at",
  //   deletedAt: false,
  };
  const Product = sequelize.define(alias, cols, config);

   Product.associate = function (models) {

    Product.belongsTo(models.CategoryMascota, {
      as: "categorysMascotas1",
      foreignKey: "categoryMascotas_id",
    });

    Product.belongsTo(models.CategoryProducts, {
     as: "categorysProducts1",
     foreignKey: "categoryProductos_id",
   });




     Product.belongsToMany(models.User,{
       as:'users',
       through:'products_users',
       foreignKey:'products_id',
       otherKey:'user_id',
       timestamps:false
     })

     
   };

  return Product;
};

//module.exports = (sequelize, dataTypes) => {
//    let alias = "Product"; 
//    let cols = {
//      id: {
//        type: dataTypes.INTEGER,
//        primaryKey: true,
//        autoIncrement: true,
//      },
//      name: {
//        type: dataTypes.STRING(150),
//        // allowNull: false,
//      },
//      description: {
//        type: dataTypes.TEXT,
//        // allowNull: false,
//      },
//      price: {
//        type: dataTypes.DECIMAL,
//        // allowNull: false,
//      },
//      discount: {
//        type: dataTypes.INTEGER,
//        // allowNull: false,
//      },
//      imagen: {
//        type: dataTypes.TEXT,
//        // allowNull: false,
//      },
//  
//      category_id: {
//      type: dataTypes.INTEGER,
//    //   allowNull: false,
//      },
//    };
//    let config = {
//      tableName : "products",
//    
//      timestamps: false,
//    //   createdAt: "created_at",
//    //   updatedAt: "updated_at",
//    //   deletedAt: false,
//    };
//    const Product = sequelize.define(alias, cols, config);
//  
//    // Product.associate = function (models) {
//    //   Product.belongsTo(models.Category, {
//    //     as: "category",
//    //     foreignKey: "category_id",
//    //   });
//    // };
//  
//    return Product;
//  };