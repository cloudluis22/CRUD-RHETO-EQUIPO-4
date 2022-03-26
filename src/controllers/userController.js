const controller = {};

// Creando métodos del controlador.

/**
 * Método encargado de hacer una petición a la base de
 * datos SQL y obtener una lista de todos los usuarios.
 */
controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) {
      console.error(err);
      res.json(err);
      return;
    }
    conn.query('SELECT * FROM usuarios', (err, f) => {
      if (err) {
        console.error(err);
        res.json(err);
        return;
      }
      console.log(f);
      res.render('users', {
        filas: f,
      });
    });
  });
};

module.exports = controller;
