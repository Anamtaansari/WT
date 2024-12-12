var goalModel = require('../models/goal.model');

module.exports.getDataFromDBService = async () => {
    try {
        const goals = await goalModel.find({});
        return goals; 
    } catch (error) {
        console.error('Error fetching goals:', error);
        return null; 
    }
};

module.exports.createGoalDBService = async (goalDetails) => {
    try {
        var goalModelData = new goalModel();

        goalModelData.targetGoal = goalDetails.targetGoal;
        goalModelData.startWeight = goalDetails.startWeight;
        goalModelData.startDate = goalDetails.startDate;
        goalModelData.endDate = goalDetails.endDate;
        goalModelData.status = goalDetails.status;

        await goalModelData.save(); 
        return true; 
    } catch (error) {
        console.error('Error saving goal:', error);
        return false; 
    }
};
