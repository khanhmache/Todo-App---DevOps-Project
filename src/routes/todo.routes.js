const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo.controller.js');

router.get('/', todoController.getAll);
router.get('/', todoController.getById);
router.post('/', todoController.create);
router.put('/', todoController.update);
router.delete('/', todoController.delete);

module.exports = router;
