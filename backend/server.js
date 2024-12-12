var express = require('express');
var server = express();
var routes = require('./routes/routes');
var mongoose = require('mongoose');
const cors = require('cors');

server.use(express.json()); 
server.use(cors()); 

async function connectToDatabase() {
    try {
        await mongoose.connect("mongodb://localhost:27017/your-goals");
        console.log("DB connected");
    } catch (error) {
        console.log("Error connecting to DB:", error);
    }
}

connectToDatabase();

server.use( routes);

server.listen(8000, function check(error) {
    if (error) {
        console.log("Error starting server:", error);
    } else {
        console.log("Server started");
    }
});
