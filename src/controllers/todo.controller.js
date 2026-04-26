const todoService = require('../services/todo.service.js');

class TodoController {
  async getAll(req, res, next) {
    try {
      const todos = await todoService.getAllTodos();
        res.json(todos);
    } catch (err) {
      next(err);
    }
  }

  async getById(req, res, next) {
    try {
      const todo = await todoService.getTodoById(req.params.id);
      res.json(todo);
    } catch (err) {
      next(err);
    }
  }

  async create(req, res, next) {
    try {
      const todo = await todoService.createTodo(req.body.title);
      res.status(201).json(todo);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const { id, title, completed } = req.body;
      const todo = await todoService.updateTodo(req.body);
      res.json(todo);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const todo = await todoService.deleteTodo(req.params.id);
      res.json({ message: 'Todo deleted successfully' });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new TodoController();
