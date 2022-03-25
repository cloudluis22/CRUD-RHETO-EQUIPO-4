const controller = {};

// Creando métodos del controlador.

/**
 * Renderiza el view de inicio de sesión.
 */
controller.show = (req, res) => {
  res.render('login');
};

module.exports = controller;
