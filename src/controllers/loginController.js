const controller = {};

// Creando métodos del controlador.

/**
 * Método encargado de hacer una petición a la base de
 * datos SQL y obtener una lista de todos los usuarios.
 */
controller.login = (req, res) => {
  res.render('login');
};

module.exports = controller;
