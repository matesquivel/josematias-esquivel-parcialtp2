const express = require('express');
const router = express.Router();
const controlador = require('../controlador/numeros');

router.post('/entrada', controlador.agregarNumero);
router.get('/entrada', controlador.listarNumeros);
router.get('/promedio', controlador.obtenerPromedio);
router.get('/minmax', controlador.obtenerMinMax);
router.get('/cantidad', controlador.obtenerCantidad);

module.exports = router;
