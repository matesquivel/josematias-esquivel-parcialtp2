const servicio = require('../servicio/numeros');

const agregarNumero = (req, res) => {
  const nuevo = servicio.agregarNumero(req.body.numero);
  res.status(201).json(nuevo);
};

const listarNumeros = (req, res) => {
  res.json({ numeros: servicio.listarNumeros() });
};

const obtenerPromedio = (req, res) => {
  res.json({ promedio: servicio.calcularPromedio() });
};

const obtenerMinMax = (req, res) => {
  const { min, max } = servicio.obtenerMinMax();
  res.json({ min, max });
};

const obtenerCantidad = (req, res) => {
  res.json({ cantidad: servicio.obtenerCantidad() });
};

module.exports = {
  agregarNumero,
  listarNumeros,
  obtenerPromedio,
  obtenerMinMax,
  obtenerCantidad
};
