const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/students-api", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("Connection with MongoDB successful.");
}).catch((e) => {
    console.log("Connection with MongoDB failed.");
})
