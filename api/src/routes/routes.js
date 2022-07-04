const express = require('express')
const router = express.Router()

const resumosController = require("../controllers/resumos")
const tarefasController = require("../controllers/tarefas")
const materiasController = require("../controllers/materias")

router.get('/resumos', resumosController.get);
router.post('/resumos', resumosController.post);
router.put('/resumos', resumosController.update);
router.delete('/resumos/:id', resumosController.delete);


router.get('/tarefas', tarefasController.get);
router.post('/tarefas', tarefasController.post);
router.put('/tarefas', tarefasController.update);
router.delete('/tarefas/:id', tarefasController.delete);


router.get('/materias', materiasController.get);
router.get('/materias-keys', materiasController.getKeys);
router.post('/materias', materiasController.post);
router.put('/materias', materiasController.update);
router.put('/frequencias', materiasController.updatefrequencia);
router.delete('/materias/:id', materiasController.delete);

module.exports = router;