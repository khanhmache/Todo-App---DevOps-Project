const pool = require('../config/db');

const initDatabase = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS todos (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      completed BOOLEAN DEFAULT false,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await pool.query(query);
    console.log('✅ Database table "todos" is ready!');
  } catch (err) {
    console.error('❌ Error creating table:', err.message);
    // Không exit(1) để server vẫn chạy được khi dev
  }
};

module.exports = initDatabase();
