const controller = {};
const url = require('url');

// Creando métodos del controlador.

/**
 * Renderiza el view de inicio de sesión.
 */
controller.show = (req, res) => {
  console.log(req.query.failed);
  res.render('login', {
    data: {
      failed: req.query.failed,
    },
  });
};

controller.login = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query(
      'SELECT * FROM usuarios WHERE nombre = ? AND password = ?',
      [data.user, data.password],
      (err, rows) => {
        if (rows.length > 0) {
          res.redirect('/user');
        } else {
          res.redirect('/login/?failed=true');
        }
      }
    );
  });
};

module.exports = controller;
