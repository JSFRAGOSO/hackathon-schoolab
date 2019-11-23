const express = require('express');
const routes = express.Router();
const QuestionController = require('./controllers/QuestionController');
const UserController = require('./controllers/UserController');

routes.post('/question',  QuestionController.store);
routes.get('/questions',  QuestionController.index);
routes.post('/user',  UserController.store);
routes.get('/users',  UserController.index);

module.exports = routes;