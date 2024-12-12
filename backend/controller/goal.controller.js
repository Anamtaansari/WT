
var goalService = require('../services/goal.service')


var createGoalControllerFn = async (req, res) => 
    {
        console.log(req.body);
        
        var status = await goalService.createGoalDBService(req.body);
        if (status) {
            res.send({ "status": true, "message": "goal created successfully" });
        } else {
            res.send({ "status": false, "message": "Error creating goal" });
        }
    }
var getDataControllerfn = async (req,res) =>
{
    var goal = await goalService.getDataFromDBService();
    res.send({"status":true, "data":goal});
}


module.exports = { getDataControllerfn, createGoalControllerFn};