const { body }= require('express-validator');
const db = require('../database/models');

const validations = [
    // Nombre
    body('name').notEmpty().withMessage("Este campo debe estar completo").bail()
    .isLength({min:5}).withMessage("El nombre debe tener al menos 5 caracteres"),

    // Precio
    body('price').notEmpty().withMessage("Este campo debe estar completo"),

    // Stock
    body('stock').notEmpty().withMessage("Este campo debe estar completo"),

    // Categoria Mascota
    body('category').notEmpty().withMessage("Debes elegir una categoria"),

    // Categoria Mascota
    body('category1').notEmpty().withMessage("Debes elegir una categoria"),

    // Descripcion
    body('description').notEmpty().withMessage("Este campo debe estar completo").bail()
    .isLength({min:20}).withMessage("El nombre debe tener al menos 20 caracteres"),

]
    

module.exports =validations;