const db = require("../database/models");
const path = require('path');


const homeController = {

 index: (req, res) =>{
    res.render("index")
 },

 nosotros:(req,res)=>{
    res.render('about')
 }
}

module.exports = homeController