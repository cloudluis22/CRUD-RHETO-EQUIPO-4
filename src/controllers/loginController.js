const controller = {};

// Creando métodos del controlador.

/**
 * Renderiza el view de inicio de sesión.
 */
controller.show = (req, res) => {
  res.render('login');
};

controller.login = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM usuarios WHERE', (err, rows) => {
      console.log(rows);
      res.send('sarahi 2');
    });
  });
};

module.exports = controller;
