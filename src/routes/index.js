var express = require('express');
var router = express.Router();
let mainController = require('../controllers/mainController')

/* GET home page. */
/*Bienvenido*/
router.get('/', mainController.bienvenido);

/*Nosotros*/
router.get('/nosotros', mainController.nosotros);

/*Nuestros Programas*/
router.get('/nuestros-programas', mainController.nuestrosProgramas);

/*Educacion*/
router.get('/nuestros-programas/:id', mainController.programas);

/*Resultados*/
router.get('/resultados', mainController.resultados);

/*Contacto*/
router.get('/contacto', mainController.contacto);

module.exports = router;
