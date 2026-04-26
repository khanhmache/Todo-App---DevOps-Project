const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cors = require('cors');

const todoRoutes = require('./routes/todo.routes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/todos', todoRoutes);

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

app.get('/', (req, res) => {
  res.json({
    message: "✅ Todo API is running successfully!",
    version: "1.0.0",
    endpoints: {
      health: "/health",
      todos: "/api/todos",
      docs: "Try /api/todos with GET, POST, PUT, DELETE"
    },
    documentation: "See README.md for full API usage"
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('❌ Error:', err.message);

  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    error: statusCode === 500 ? 'Internal Server Error' : err.message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
const startServer = async () => {
  try {
    console.log('🔄 Initializing database...');
    await require('./scripts/init-db');   // Gọi init

    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Server is running on http://0.0.0.0:${PORT}`);
      console.log(`📊 Health check → http://localhost:${PORT}/health`);
      console.log(`📋 API Todos   → http://localhost:${PORT}/api/todos`);
    });
  } catch (err) {
    console.error('❌ Failed to start server:', err.message);
  }
};

startServer();
