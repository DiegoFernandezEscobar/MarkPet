const { body }= require('express-validator');
const db = require('../database/models');

const validation=[

//  Nombre   
    body('firstName').notEmpty().withMessage('Debes ingresar un Nombre').bail()
    .isLength({min:2}).withMessage("El nombre debe tener al menos 5 caracteres"),

// Apellido

    body('lastName').notEmpty().withMessage('Debes ingresar un Apellido').bail()
    .isLength({min:2}).withMessage("El nombre debe tener al menos 5 caracteres"),

// Password    
    body('password').notEmpty().withMessage('Debes ingresar una Contraseña').bail()
    .isLength({min:8}).withMessage("La contraseña debe tener al menos 8 caracteres").bail()
    ,

// Repassword
    body('passwordconfirm').notEmpty().withMessage('Debes confirmar tu Contraseña').bail()
    .custom((value,{req})=>{
        if(value!=req.body.password){
            throw new Error("Las contrase; deben ser iguales")
        }
        return true
    }),

// E-mail
    body('email').notEmpty().withMessage('Campo incompleto').bail()
    .isEmail().withMessage("Debes ingrese un formato de email valido").bail()
    

]

module.exports = validation;