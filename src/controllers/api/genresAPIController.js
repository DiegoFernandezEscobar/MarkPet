const DB = require("../../database/models");
const Op = DB.Sequelize.Op;

const productsAPIController = {
  list: (req, res) => {
    DB.CategoryProducts.findAll().then((Products) => {
      return res.json({
        total: Products.length,
        data: Products,
        status: 200,
      });
    });
  },
};

module.exports = productsAPIController