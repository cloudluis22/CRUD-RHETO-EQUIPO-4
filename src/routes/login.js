const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController');

router.get('/', loginController.show);
router.post('/iniciar', loginController.login);

module.exports = router;
