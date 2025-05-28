const fs = require('fs');
const path = './numeros.json';

const leerArchivo = () => {
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, '[]');
  }
  const contenido = fs.readFileSync(path, 'utf-8');
  return JSON.parse(contenido);
};

const guardarArchivo = (datos) => {
  fs.writeFileSync(path, JSON.stringify(datos, null, 2));
};

const listar = () => {
  return leerArchivo();
};

const agregar = (numero) => {
  const datos = leerArchivo();
  datos.push(numero);
  guardarArchivo(datos);
  return { numero };
};

module.exports = {
  listar,
  agregar
};
