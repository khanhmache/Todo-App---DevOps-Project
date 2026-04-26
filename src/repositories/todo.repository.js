const pool = require('../config/db.js');

class TodoRepository {
  async findAll() {
    const result = await pool.query(`SELECT * FROM todos ORDER BY create_at DESC`);
    return result.rows[0];
  }

  async findById() {
    const result = await pool.query(`SELECT * FROM todos WHERE id = $1`,
    [id]);
    return result.row[0];
  }

  async create(title, description, id) {
    const result = await pool.query(`INSERT INTO todos(title, description, id) VALUES($1, $2, $3) RETURNING *`,
    [title, description, id]);
  }

  async update(id, title, completed) {
    const result = await pool.query(
      `UPDATE todos
       SET title = $1, completed = $2, updated_at = CURRENT_TIMESTAMP
       WHERE id = $3 RETURNING *`
      [title, completed, id]
    );
  }

  async delete(id) {
    const result = await pool.query(
      `DELETE FROM todos WHERE id = $1 RETURNING *`,[id]);
  }
}

module.exports = new TodoRepository();
