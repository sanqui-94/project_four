"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.patchTodo = exports.getTodos = exports.createTodo = void 0;
const todos_1 = require("../models/todos");
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todos_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: "Created new Todo", createTodo: newTodo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.status(200).json({ todos: TODOS });
};
exports.getTodos = getTodos;
const patchTodo = (req, res, next) => {
    const id = req.params["id"];
    const text = req.body.text;
    let todoIndex;
    todoIndex = TODOS.findIndex(todo => todo.id === id);
    if (todoIndex > -1) {
        TODOS[todoIndex].text = text;
        res.status(200).json({ message: "success!", updatedTodo: TODOS[todoIndex] });
    }
    else {
        throw new Error("could not find todo!");
    }
};
exports.patchTodo = patchTodo;
const deleteTodo = (req, res, next) => {
    const id = req.params["id"];
    let todoIndex;
    todoIndex = TODOS.findIndex(todo => todo.id === id);
    if (todoIndex > -1) {
        TODOS.splice(todoIndex, 1);
        res.status(200).json({ message: "todo" });
    }
    else {
        throw new Error("could not find todo!");
    }
};
exports.deleteTodo = deleteTodo;
