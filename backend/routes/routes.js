


var express = require('express');

const router = express.Router();

var goalController =  require('../controller/goal.controller');

console.log('goalController:', goalController);

router.route('/goal/getAll').get(goalController.getDataControllerfn);

router.route('/goal/create').post(goalController.createGoalControllerFn);

module.exports = router;