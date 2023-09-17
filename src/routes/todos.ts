import { Router } from "express";

import { createTodo, deleteTodo, getTodos, patchTodo } from "../controllers/todos";

const router = Router();

router.post("/", createTodo);

router.get("/", getTodos);

router.patch("/:id", patchTodo);

router.delete("/:id", deleteTodo);

export default router;
