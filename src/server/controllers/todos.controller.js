const Promise = require('bluebird');
const todosService = require('../services/todos.service');

exports.getAll = async (req, res) => {
    try {
        await Promise.delay(1000);
        // throw new Error();
        const todos = await todosService.getAll();
        res.status(200).send(todos);
    } catch (e) {
        res.status(500).send({error: 'Error occurred while getting todos. Please try again later.'});
    }
};

exports.create = async (req, res) => {
    const todoData = req.body;

    try {
        const todo = await todosService.create(todoData);
        res.status(200).send(todo);
    } catch (e) {
        res.status(500).send({error: 'Error occurred while creating todo. Please try again later.'});
    }
};

exports.delete = async (req, res) => {
    const id = req.params.id;

    try {
        const todo = await todosService.delete(id);

        if(!todo) throw new Error();

        res.status(200).send(todo);
    } catch (e) {
        res.status(500).send({error: 'Error occurred while deleting todo. Please try again later.'});
    }
};