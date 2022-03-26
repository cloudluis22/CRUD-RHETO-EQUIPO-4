const controller = {};

controller.show = (req, res) => {
  res.render('add');
};

controller.add = (req, res) => {
  console.log(req.body);
  res.send('Hola a todos');
};

module.exports = controller;
