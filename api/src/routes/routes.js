const express = require('express')
const router = express.Router()

const resumosController = require("../controllers/resumos")
const tarefasController = require("../controllers/tarefas")

router.get('/resumos', resumosController.get);
router.post('/resumos', resumosController.post);
router.put('/resumos', resumosController.update);
router.delete('/resumos', resumosController.delete);


router.get('/tarefas', tarefasController.get);
router.post('/tarefas', tarefasController.post);
router.put('/tarefas', tarefasController.update);
router.delete('/tarefas', tarefasController.delete);










module.exports = router;