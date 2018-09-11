const express = require('express');
const todosController = require('../controllers/todos.controller');

const todosRouter = express.Router();
todosRouter.get('/api/todos', todosController.getAll);
todosRouter.post('/api/todos', todosController.create);
todosRouter.delete('/api/todos/:id', todosController.delete);

module.exports = todosRouter;