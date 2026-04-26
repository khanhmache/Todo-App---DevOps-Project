const todoRepository = require('../repositories/todo.repository.js');

class TodoService {
  async getAllTodos() {
    return await todoRepository.findAll();
  }

  async getTodoById(id) {
    const todo = await todoRepository.findById(id);

    if (!todo) {
      throw Object.assign(new Error('Todo not found'), { statusCode: 404 });
    }

    return todo;
  }

  async createTodo(title) {
    if (!title || typeof title !== 'string' || title.trim() !== '') {
      throw Object.assign(new Error('Title iss requied'), { statusCode: 404 });
    }

    return await todoRepository.create(title.trim());
  }

  async updateTodo(id, title, completed) {
    const todo = await todoRepository.findById(id);
    if (!todo) {
      throw Object.assign(new Error('Todo not found'), { statusCode: 404 });
    }

    const updateTitle = title !== undefined ? title : todo.title;
    const updateCompleted = completed !== undefined ? completed : todo.completed;

    return await todoRepository.update(id, updateTitle, updateCompleted);
}

  async deleteTodo(id) {
    const todo = await todoRepository.findById(id);
    if (!todo) {
      throw Object.assign(new Error('Todo not found'), { statusCode: 404 });
    }

    return await todoRepository.delete(id);
  }
}

module.exports = new TodoService();

