const fs = require('fs');
const path = require('path');
const db = require("../database/models");
const { Op } = require("sequelize");
const {validationResult}=require('express-validator');


const productsControllers={
    servicios:(req,res)=>{
        res.render('services')},

    servicios:(req,res)=>{
        res.render('services')
    },


    productCart: function(req,res){
        res.render('productCart');
    },

    productDetalle: (req,res)=>{
         db.Product.findByPk(req.params.id)
                
            .then(product=>{
                res.render('productDetail',{product:product})
            } )      
            .catch(error=>console.log(error));
    
    },

    // Shop

    tienda:(req,res)=>{db.Product.findAll()
    .then(products=>res.render('shop',{products}))
    },

// Mascotas Perros
    tiendaPerros:(req,res)=>{db.Product.findAll({where:{categoryMascotas_id:1}})
        .then(products=>res.render('shop',{products}))   
    },
    
    tiendaPerrosAlimentos:(req,res)=>{db.Product.findAll({
        where:{[Op.and]:[{categoryMascotas_id:1},{categoryProductos_id:1}]}
        })
    .then(products=>res.render('shop',{products}))},

    tiendaPerros:(req,res)=>{db.Product.findAll({where:{categoryMascotas_id:1}})
        .then(products=>res.render('shop',{products}))   
    },
    
    tiendaPerrosAlimentos:(req,res)=>{db.Product.findAll({
        where:{[Op.and]:[{categoryMascotas_id:1},{categoryProductos_id:1}]}
        })
    .then(products=>res.render('shop',{products}))},


    tiendaPerrosJuguetesyAccesorios:(req,res)=>{db.Product.findAll({
        where:{[Op.and]:[{categoryMascotas_id:1},{categoryProductos_id:2}]}
        })
        .then(products=>res.render('perrosJuguetes',{products}))},

    tiendaPerrosHigieneyEstetica:(req,res)=>{db.Product.findAll({
        where:{[Op.and]:[{categoryMascotas_id:1},{categoryProductos_id:3}]}
        })
    .then(products=>res.render('perrosHigiene',{products}))},


    tiendaPerrosJuguetesyAccesorios:(req,res)=>{db.Product.findAll({
        where:{[Op.and]:[{categoryMascotas_id:1},{categoryProductos_id:2}]}
        })
        .then(products=>res.render('shop',{products}))},

    tiendaPerrosHigieneyEstetica:(req,res)=>{db.Product.findAll({
        where:{[Op.and]:[{categoryMascotas_id:1},{categoryProductos_id:3}]}
        })
    .then(products=>res.render('shop',{products}))},
    
    tiendaPerrosSalud:(req,res)=>{db.Product.findAll({
        where:{[Op.and]:[{categoryMascotas_id:1},{categoryProductos_id:4}]}
        })
    .then(products=>res.render('shop',{products}))},

// Mascotas Gatos

    tiendaGatos:(req,res)=>{db.Product.findAll({where:{categoryMascotas_id:2}})
        .then(products=>res.render('shop',{products}))   
    },
    
    tiendaGatosAlimentos:(req,res)=>{db.Product.findAll({
        where:{[Op.and]:[{categoryMascotas_id:2},{categoryProductos_id:1}]}
        })
    .then(products=>res.render('shop',{products}))},


    tiendaGatosJuguetesyAccesorios:(req,res)=>{db.Product.findAll({
        where:{[Op.and]:[{categoryMascotas_id:2},{categoryProductos_id:2}]}
        })
        .then(products=>res.render('shop',{products}))},

    tiendaGatosHigieneyEstetica:(req,res)=>{db.Product.findAll({
        where:{[Op.and]:[{categoryMascotas_id:2},{categoryProductos_id:3}]}
        })
    .then(products=>res.render('shop',{products}))},
    
    tiendaGatosSalud:(req,res)=>{db.Product.findAll({
        where:{[Op.and]:[{categoryMascotas_id:2},{categoryProductos_id:4}]}
        })
    .then(products=>res.render('shop',{products}))},

    // Mascotas aves
    tiendaAves:(req,res)=>{db.Product.findAll({where:{categoryMascotas_id:3}})
        .then(products=>res.render('shop',{products}))   
    },
    
    tiendaAvesAlimentos:(req,res)=>{db.Product.findAll({
        where:{[Op.and]:[{categoryMascotas_id:3},{categoryProductos_id:1}]}
        })
    .then(products=>res.render('shop',{products}))},


    tiendaAvesJuguetesyAccesorios:(req,res)=>{db.Product.findAll({
        where:{[Op.and]:[{categoryMascotas_id:3},{categoryProductos_id:2}]}
        })
        .then(products=>res.render('shop',{products}))},

    // Mascotas Peces
    tiendaPeces:(req,res)=>{db.Product.findAll({where:{categoryMascotas_id:4}})
        .then(products=>res.render('shop',{products}))   
    },
    
    tiendaPecesAlimentos:(req,res)=>{db.Product.findAll({
        where:{[Op.and]:[{categoryMascotas_id:4},{categoryProductos_id:1}]}
        })
    .then(products=>res.render('shop',{products}))},


    tiendaPecesJuguetesyAccesorios:(req,res)=>{db.Product.findAll({
        where:{[Op.and]:[{categoryMascotas_id:4},{categoryProductos_id:2}]}
        })
        .then(products=>res.render('shop',{products}))},


    // oferta

    Oferta:(req,res)=>{db.Product.findAll({
        where: {
            discount: {
                [Op.ne]:null
          }
        }
      })
        .then(products=>res.render('shop',{products}))},


    create:function (req,res){
    const mascota= db.CategoryMascota.findAll()
    const product= db.CategoryProducts.findAll()
    Promise.all([mascota,product])
    .then(function([mascota,product]){
       return res.render('productsCreate',{mascota,product})

    })},

    inventario:function (req,res){
        const products=db.Product.findAll()
        const mascota= db.CategoryMascota.findAll()
        const product= db.CategoryProducts.findAll()
        Promise.all([mascota,product,products])
        .then(function([mascota,product,products]){
           return res.render('inventario',{mascota,product,products})
    
        })},

        // let categories = db.Category.findAll()

        // Promise
        // .all([categories])
        // .then(
        //     function(responses){
        //         let category = responses[0];
        //         return res.render('productsCreate',{category})
        //     })
        //     .catch(error=>console.log(error))
    

    
    store:function(req,res){

        const resultValidation = validationResult(req);
        
      if(resultValidation.errors.length > 0){
        const mascota= db.CategoryMascota.findAll()
        const product= db.CategoryProducts.findAll()
        Promise.all([mascota,product])
        .then(function([mascota,product]){
       return res.render('productsCreate',{mascota,product,errors:resultValidation.mapped()})

    })
       } else{
           db.Product.create({
            name: req.body.name,
            price: req.body.price,
            discount:req.body.discount,
            description:req.body.description,
            categoryMascotas_id:req.body.category,
            imagen:req.file ? req.file.filename : 'registroo.jpg',
            stock:req.body.stock,
            categoryProductos_id:req.body.category1
           })
           .catch(error=>console.log(error))

           return res.redirect('/shop')
        }

    },

    
    // store: async  (req,res)=>{
    //     let category = await db.Category.findAll();
        
    //     let imageUpload;
    //     if(!req.file){
    //         imageUpload = 'noImage.jpg'
    //     } else {
    //         imageUpload = req.file.filename
    //     }
    //     try{
    //         const validation = validationResult(req);
            
    //         if(validation.errors.length > 0){
    
    //             return res.render('productsCreate',
    //             {
    //                 errors: validation.mapped(),
    //                 oldData: req.body,
    //                 category,
    //             });
    //         }; 
    //         db.Product.create({                                    
    //                 name: req.body.name,
    //                 price: req.body.price,
    //                 discount:req.body.discount,
    //                 category_id: req.body.category_id, 
    //                 image: imageUpload,
    //                 description:req.body.description
                                 
    //             })
    //             .then(()=>
    //             {res.redirect ("/productDetail")
    
    //             })
    //             .catch(e=>console.log(e))
            
    //     }catch(e){
    //         console.log(e)
    //     }
       
    // },

    // destroy: function(req,res){

    //     db.Product.findByPk(req.params.id)
    //     .then((producto)=>{     
    //         if(producto.imagen != 'noImage.jpg'){
    //         // Usamos try para poder verificar que la ruta funcione correctamente para la eliminación del archivo de imagen del producto
    //         try { 
    //             // Elimina la imagen y luego continúa la secuencia para borrar el producto de la db con destroy()
    //             fs.unlinkSync(path.resolve(__dirname+'../../public/images/productos')+'/'+producto.imagen)
    //         }
    //         catch(e){
    //             console.log(e)
    //         }
    //          }
    //     })
    //     .catch(e=>{
    //         console.log(e)
    //     })  

    //     db.Product.destroy({   
    //         where:{id : req.params.id}  
    //     })
    //     .then(()=>
    //         {res.redirect ("/shop")}
    //         )
    //         .catch(error=>console.log(error))
    // },

    // //codigo profesor 
    // destroy: function (req, res) {
    //     let movieId = req.params.id;
    //     db.Movie
    //     .destroy({where: {id: movieId}, force: true}) // force: true es para asegurar que se ejecute la acción
    //     .then(()=>{
    //         return res.redirect('/movies')})
    //     .catch(error => res.send(error)) 
    // }
            
    // Codigo milagroso 

    destroy:function(req, res) {
        let productoId = req.params.id;
        db.Product.destroy({where:{id:productoId}, force: true})
        .then (()=>{ return res.redirect('/shop')})
        .catch(error => res.send(error))
    },



        //edicion
    edicion: function(req,res){

        let productsId= req.params.id;
        let pushProducts= db.Product.findByPk(productsId,{include:["categorysMascotas1"]})
        let pushCategoryMascota= db.CategoryMascota.findAll();
        let pushCategoryProduct= db.CategoryProducts.findAll()
        Promise
        .all([pushProducts, pushCategoryMascota, pushCategoryProduct])
        .then(([products, categoryMascota, categoryProduct]) => {
            return res.render( 'productEdit', { products, categoryMascota, categoryProduct})
        })
        .catch(error => res.send(error)) 
        
    },

    update: function (req,res){

        let productId = req.params.id;
        db.Product
        .update(
            {
                name: req.body.name,
                price: req.body.price,
                discount:req.body.discount,
                description:req.body.description,
                categoryMascotas_id:req.body.category,
                imagen:req.file.filename,
                stock:req.body.stock,
                categoryProductos_id:req.body.category1
            },
            {
                where: {id: productId}
            })
        .then(()=> {
            return res.redirect('/products/' + productId)})            
        .catch(error => res.send(error))




        // db.Product.findByPk(
        //     req.params.id,
        //     {include:
        //         [
        //             {association: 'category'}, 
        //         ]
        //     })

        // .then(product =>
        //     {
        //         let imageUpload

        //         if(!req.file || !product.image){
        //             imageUpload = 'noImage.jpg'
        //         } else {
        //             imageUpload = req.file.filename
        //         }
                
        //         db.Product.update(
        //         {                                    
        //             name: req.body.name,
        //             price: req.body.price,
        //             discount:req.body.discount,
        //             category_id: req.body.category_id, 
        //             imagen: imageUpload,
        //             description:req.body.description          
        //         },
        //         {
        //             where: {id : req.params.id}
        //         })
        //         .then(()=>
        //         {res.redirect ("/detail/"+req.params.id)}
        //         )
        //         .catch(error=>console.log(error))
        // })
        // .catch(error=>console.log(error))
    
        

    },
    
}
module.exports=productsControllers;




/*const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productsControllers={
    productCart: (req,res)=>{
        res.render('productCart')
    },
    productDetalle: (req,res)=>{
        let id = req.params.id
		let product = products.find(product => product.id == id)
		res.render('productDetail', {product})
    
    },
    product:(req,res)=>{
        res.render('products')
    },
    servicios:(req,res)=>{
        res.render('services')
    },
    tienda:(req,res)=>{
        let users=products;
    
        
        res.render('shop',{'users':users});
    },
    
    blog:(req,res)=>{
        res.render('blog')
     },

     blog_single:(req,res)=>{
        res.render('blog_single')
     },

    create:(req,res)=>{
         res.render('productsCreate')
     },
     store:(req,res)=>{
        let newProduct = {
            id: products[products.length - 1].id + 1,
            ...req.body,
            image :req.file.filename
        };
         let productsNews = [...products, newProduct]
        fs.writeFileSync(productsFilePath, JSON.stringify(productsNews, null, ' '));
        res.redirect('/shop');

     },

     edicion:(req,res)=>{
        let id = req.params.id
		let edit = products.find(product => product.id == id)
        res.render('productEdit',{edit})
     },
     
     update: (req, res) => {
		let id = req.params.id;
		let productToEdit = products.find(product => product.id == id)
     
        productToEdit = {
			id: productToEdit.id,
			...req.body,
			image:req.filename
		};


     let newProducts = products.map(product => {
        if (product.id == productToEdit.id) {
            return product = {...productToEdit};
        }
        return product;
    })

    fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
    res.redirect('/shop');
},

}


module.exports=productsControllers*/