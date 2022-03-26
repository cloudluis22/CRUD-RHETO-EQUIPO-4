const express = require('express');
const router = express.Router();

const addController = require('../controllers/addController');

router.get('/', addController.show);

router.get('/editar', (req, res) => {
  res.render('editar');
});

router.post('/editar', (req, res) => {
  const nombre = req.body.nombre;
  const puesto = req.body.puesto;
  const sueldo = req.body.sueldo;
  const rfc = req.body.rfc;
  const tiempo = req.body.tiempo;

  conexion.query(
    'UPDATE INTO datos SET ?',
    {
      nombre: nombre,
      puesto: puesto,
      sueldo: sueldo,
      rfc: rfc,
      tiempo: tiempo,
    },
    (error, filas) => {
      if (error) throw error;
    }
  );

  res.redirect('/');
});

module.exports = router;
