const express = require("express");
const routes = express.Router();
const zapController = require('../zap/zap.controller');

//users routes
// routes.post('/users', userController.new);
// routes.patch('/users/:id', userController.update);
// routes.delete('/users/:id', userController.delete);

routes.get('/zap', zapController.getAll);
// routes.post('/users/auth', userController.auth);
// routes.get('/users',userController.getAll);

module.exports = routes;