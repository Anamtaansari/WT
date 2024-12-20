var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var goalSchema = new Schema({
    targetGoal: {
        type: String,
        required: true
    },
    startWeight: {
        type: String, 
        required: true
    },
    startDate: {
        type: Date, 
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['in progress', 'completed', 'not started'], 
        required: true
    }
});

module.exports = mongoose.model('goals', goalSchema);
