const express = require("express")
const router = express.Router()

const homeControler = require("../controllers/homeControllers")

router.get("/",homeControler.index)
router.get("/about",homeControler.nosotros)

// falta el maincontroler . lo que sea 
// falta despues de la barra / la ruta 


module.exports = router