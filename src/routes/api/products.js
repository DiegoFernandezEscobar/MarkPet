const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/productsAPIController');

//Rutas
router.get('/',productsAPIController.list);

router.get('/lastProduct', productsAPIController.LastProduct);

router.get('/:id',productsAPIController.show);

router.post('/',productsAPIController.store);

router.delete('/:id',productsAPIController.delete);

module.exports = router;
