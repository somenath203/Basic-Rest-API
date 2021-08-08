const express = require('express');
require("./db/conn");
const Student = require("./models/students");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
//express.json() is an inbuilt method in express to recognize the incoming request object as a JSON object.


app.post('/student',(req,res) => {
    console.log(req.body);

    const user = new Student(req.body); // we did req.body because under 'body', we wrote the json document in Postman.

    // user,save() is use to save the json data in mongodb database.
    user.save().then(() => {
        res.status(201).send(user);//we use 201 in that case when something is created.
    }).catch((e) => {
        res.status(400).send(e);
    })
})
 
app.listen(port, () => {
    console.log(`server running at port ${port}`);
})
