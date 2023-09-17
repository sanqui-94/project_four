import { RequestHandler } from "express";

import { Todo } from "../models/todos"; 

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string}).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);
  res.status(201).json({ message: "Created new Todo", createTodo: newTodo });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.status(200).json({ todos: TODOS });
};

export const patchTodo: RequestHandler = (req, res, next) => {
  const id = req.params["id"];
  const text = (req.body as { text: string}).text;

  let todoIndex: number;
  todoIndex = TODOS.findIndex(todo => todo.id === id);
  if (todoIndex > -1) {

    TODOS[todoIndex].text =  text;
    res.status(200).json({ message: "success!", updatedTodo: TODOS[todoIndex] });
  } else {
    throw new Error("could not find todo!");
  }

};

export const deleteTodo: RequestHandler = (req, res, next) => {
  const id = req.params["id"];

  let todoIndex: number;
  todoIndex = TODOS.findIndex(todo => todo.id === id);
  if (todoIndex > -1) {

    TODOS.splice(todoIndex, 1);
    res.status(200).json({ message: "todo" });
  } else {
    throw new Error("could not find todo!");
  }
};
