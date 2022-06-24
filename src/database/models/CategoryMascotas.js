

module.exports = (sequelize, dataTypes) => {
    let alias = "CategoryMascota";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nameMascota: {
        type: dataTypes.STRING,
        // allowNull: false,
      }
    };
    let config = {
      tableName: "categorymascotas",
      timestamps: false,   
      
    };
    const CategoryMascota = sequelize.define(alias, cols, config);
  
    CategoryMascota.associate = function (models) {
        CategoryMascota.hasMany(models.Product, {
               as: "productsMacotas",
               foreignKey: "categoryMascotas_id"
           })
        }
  
    return CategoryMascota;
  }