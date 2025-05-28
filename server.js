const express = require('express');
const app = express();
const numerosRouter = require('./router/numeros');

app.use(express.json());
app.use('/numeros', numerosRouter);

const PORT = 3000;

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
