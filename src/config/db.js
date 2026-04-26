const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

pool.on('connect', () => {
  console.log('Connect to Postgres Database');
});

pool.on('error', () => {
  console.log('Unexpected error on idle client', err.message);
});

module.export = pool;
