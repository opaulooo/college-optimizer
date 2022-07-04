const express = require('express')
const router = express.Router()

const resumosController = require("../controllers/resumos")
const materiasController = require("../controllers/materias")
const usuariosController = require("../controllers/usuarios")



router.get('/resumos', resumosController.get);
router.post('/resumos', resumosController.post);
router.put('/resumos', resumosController.update);
router.delete('/resumos/:id', resumosController.delete);

router.get('/usuarios', usuariosController.get);
router.get('/usuarios/:id', usuariosController.getbyid);
router.post('/usuarios', usuariosController.post);
router.delete('/usuarios/:id', usuariosController.delete);


router.get('/materias', materiasController.get);
router.post('/materias', materiasController.post);
router.put('/materias', materiasController.update);
router.put('/frequencias', materiasController.updatefrequencia);
router.delete('/materias/:id', materiasController.delete);

module.exports = router;