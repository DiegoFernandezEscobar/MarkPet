const db = require('../../database/models');


const productsAPIController = {
    list: (req,res) => {
        db.Product
        .findAll()
        .then(products =>{
            return res.json({
                total: products.length,
                data: products,
                status: 200
            })
        })
    },
    LastProduct: async (req, res) => {
        try {
            const products = await db.Product.findAll({
            });

            let lastProd = products.reduce((max, product) => max.id > product.id ? max : product);

            let response = {
                meta: {
                    status: 200,
                    url: "api/products/lastProduct",
                },
                data: lastProd,
            };

            res.json(response);
        }   catch (error) {
            console.log(error);
        }
    },
    show: (req,res)=>{
        db.Product
           .findByPk(req.params.id)
           .then(product=>{
               return res.status(200).json({
                   data: product,
                   status:200
               })

           })
        },
       
    store: (req,res)=> {
        db.Product
           .create(req.body)
           .then(product => {
               return res.status(200).json({ 
                   data: product,
                   status: 200
               })
           })
    },
    delete:(req,res)=>{
        db.Product
           .destroy({
               where: {
                   id: req.params.id
               }
           })
            .then((response)=>{
                return res.json(response)
            })
    }
}


module.exports = productsAPIController;