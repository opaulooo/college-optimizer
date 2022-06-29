const express = require('express')
const router = express.Router()

const resumosController = require("../controllers/resumos")


router.get('/resumos', resumosController.get);
router.post('/resumos', resumosController.post);
router.put('/resumos', resumosController.update);
router.delete('/resumos', resumosController.delete);


module.exports = router;