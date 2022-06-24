const express = require("express")
const router = express.Router()
const multer= require('multer')
const path=require('path')
const { inventario } = require("../controllers/productsControllers")

const productsControllers=require('../controllers/productsControllers')

let storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        let folder=path.join(__dirname,'../../public/images/productos');
        callback(null,folder);
    },
    filename:(req, file, callback)=>{
        let imageName= "producto-"+Date.now()+path.extname(file.originalname);
        callback(null, imageName);
    }
})

let upload=multer({storage:storage});

const validationProducts=require("../middleware/validationProducts")

const rutaAdmin=require("../middleware/adminRuta")



router.get('/productCart', productsControllers.productCart)
router.get('/shop', productsControllers.tienda)

// Mascota Perro
router.get('/shop/perros', productsControllers.tiendaPerros)
router.get('/shop/perros/Alimentos', productsControllers.tiendaPerrosAlimentos)
router.get('/shop/perros/JuguetesyAccesorios', productsControllers.tiendaPerrosJuguetesyAccesorios)
router.get('/shop/perros/HigieneyEstetica', productsControllers.tiendaPerrosHigieneyEstetica)
router.get('/shop/perros/Salud', productsControllers.tiendaPerrosSalud)

// Mascota Gatos
router.get('/shop/gatos', productsControllers.tiendaGatos)
router.get('/shop/gatos/Alimentos', productsControllers.tiendaGatosAlimentos)
router.get('/shop/gatos/JuguetesyAccesorios', productsControllers.tiendaGatosJuguetesyAccesorios)
router.get('/shop/gatos/HigieneyEstetica', productsControllers.tiendaGatosHigieneyEstetica)
router.get('/shop/gatos/Salud', productsControllers.tiendaGatosSalud)

// Mascotas Aves

router.get('/shop/gatos', productsControllers.tiendaGatos)
router.get('/shop/gatos/Alimentos', productsControllers.tiendaGatosAlimentos)
router.get('/shop/gatos/JuguetesyAccesorios', productsControllers.tiendaGatosJuguetesyAccesorios)
router.get('/shop/gatos/HigieneyEstetica', productsControllers.tiendaGatosHigieneyEstetica)
router.get('/shop/gatos/Salud', productsControllers.tiendaGatosSalud)

// Mascotas Aves

router.get('/shop/Aves', productsControllers.tiendaAves)
router.get('/shop/Aves/Alimentos', productsControllers.tiendaAvesAlimentos)
router.get('/shop/Aves/JuguetesyAccesorios', productsControllers.tiendaAvesJuguetesyAccesorios)

// Mascotas Peces

router.get('/shop/Peces', productsControllers.tiendaPeces)
router.get('/shop/Peces/Alimentos', productsControllers.tiendaPecesAlimentos)
router.get('/shop/Peces/JuguetesyAccesorios', productsControllers.tiendaPecesJuguetesyAccesorios)

// Ofertas
router.get('/shop/Ofertas', productsControllers.Oferta)


// Formulario de creacion y guardado
router.get('/products/create',rutaAdmin,productsControllers.create)
router.post('/products',upload.single('image'),validationProducts,productsControllers.store)

// // Detalle del Producto
router.get('/products/:id',productsControllers.productDetalle)

// // Edicion del Producto

router.get('/products/:id/edit', productsControllers.edicion)
router.put('/products/:id',upload.single('image'),productsControllers.update)

//Borrar Producto
router.post("/products/:id/destroy",rutaAdmin, productsControllers.destroy)


// Inventario
router.get("/inventario",rutaAdmin,productsControllers.inventario)

// router.get('/products',productsControllers.product)
router.get('/services',productsControllers.servicios)

// router.get("/blog", productsControllers.blog)
// router.get("/blog_single", productsControllers.blog_single)

module.exports=router