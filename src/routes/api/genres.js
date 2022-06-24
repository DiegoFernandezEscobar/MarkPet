const express = require('express');
const router = express.Router();
const genresApiController = require("../../controllers/api/genresAPIController");

router.get('/', genresApiController.list);

module.exports = router;