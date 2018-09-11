const express = require('express');
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');

const todosRouter = require('./routers/todos.router');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(todosRouter);

mongoose.connect('mongodb://localhost/todos', { useNewUrlParser: true });
app.listen(3001, () => console.log('TODO api is listening on port 3001!'));