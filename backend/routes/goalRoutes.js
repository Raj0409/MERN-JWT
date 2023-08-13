const express = require('express');
const { getGoal, createGoal, updateGoal, deleteGoal, SearchGoal } = require('../controllers/goalController');
const router = express.Router();
const {protect} = require('../middleware/authMiddlware')

router.get('/',protect,getGoal);

router.post('/',protect,createGoal)

router.put('/:id',protect,updateGoal)

router.delete('/:id',protect,deleteGoal)

router.get('/:id',protect,SearchGoal)

module.exports = router