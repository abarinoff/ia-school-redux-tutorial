const Todo = require('../models/todo.model');

exports.getAll = () => Todo.find().lean();

exports.create = todoData => Todo.create(todoData);

exports.delete = id => Todo.findOneAndRemove({_id: id});