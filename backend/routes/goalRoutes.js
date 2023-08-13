const express = require('express');
const { getGoal, createGoal, updateGoal, deleteGoal, SearchGoal } = require('../controllers/goalController');
const router = express.Router();

router.get('/',getGoal);

router.post('/',createGoal)

router.put('/:id',updateGoal)

router.delete('/:id',deleteGoal)

router.get('/:id',SearchGoal)

module.exports = router