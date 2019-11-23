const express = require('express');
const routes = express.Router();
const QuestionController = require('./controllers/QuestionController');

routes.post('/question',  QuestionController.store);
routes.get('/questions',  QuestionController.index);

module.exports = routes;