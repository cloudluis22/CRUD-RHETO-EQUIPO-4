const express = require('express');
const app = express();

// Configuraciones de Express.
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log('Servidor iniciado en el puerto 3000.');
});
