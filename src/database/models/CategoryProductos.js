

module.exports = (sequelize, dataTypes) => {
    let alias = "CategoryProducts";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nameProduct: {
        type: dataTypes.STRING,
        // allowNull: false,
      }
    };
    let config = {
      tableName: "categoryproductos",
      timestamps: false,   
      
    };
    const CategoryProducts = sequelize.define(alias, cols, config);
  
    CategoryProducts.associate = function (models) {
        CategoryProducts.hasMany(models.Product, {
               as: "products2",
               foreignKey: "categoryProductos_id"
           })
        }
  
    return CategoryProducts;
  }