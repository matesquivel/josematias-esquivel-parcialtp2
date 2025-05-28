const DAO = require('../model/DAOs/numerosFS');

const agregarNumero = (numero) => {
  return DAO.agregar(numero);
};

const listarNumeros = () => {
  return DAO.listar();
};

const calcularPromedio = () => {
  const datos = DAO.listar();
  if (datos.length === 0) return 0;
  const suma = datos.reduce((acc, val) => acc + val, 0);
  return Number((suma / datos.length).toFixed(2));
};


const obtenerMinMax = () => {
  const datos = DAO.listar();
  const min = Math.min(...datos);
  const max = Math.max(...datos);
  return { min, max };
};

const obtenerCantidad = () => {
  return DAO.listar().length;
};

module.exports = {
  agregarNumero,
  listarNumeros,
  calcularPromedio,
  obtenerMinMax,
  obtenerCantidad
};
