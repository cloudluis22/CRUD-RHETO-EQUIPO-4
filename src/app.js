const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

// IMPORTANDO RUTAS
//--------------------------------------------

const userRoutes = require('./routes/user');
const loginRoutes = require('./routes/login');

//--------------------------------------------

// CONFIGURACIONES DE EXPRESS.
//--------------------------------------------

// Puerto
app.set('port', process.env.PORT || 3000);

// Motor de vistas
app.set('view engine', 'ejs');

// Ubicación de las vistas.
app.set('views', path.join(__dirname, 'views'));

//--------------------------------------------

// MIDDLEWARES
//--------------------------------------------

app.use(morgan('dev'));
app.use(
  myConnection(
    mysql,
    {
      host: 'localhost',
      user: 'root',
      password: '',
      port: 3306,
      database: 'retho',
    },
    'single'
  )
);
app.use(express.urlencoded({ extended: false }));

//--------------------------------------------

// ARCHIVOS ESTÁTICOS
//--------------------------------------------
app.use(express.static(path.join(__dirname, 'public')));
//--------------------------------------------

// ROUTES
//--------------------------------------------
app.get('/', (req, res) => {
  return res.redirect('/login');
});
app.use('/login', loginRoutes);
app.use('/user', userRoutes);
//--------------------------------------------

// ARRANCANDO EL SERVIDOR
app.listen(app.get('port'), () => {
  console.log('Servidor iniciado en el puerto 3000.');
});
