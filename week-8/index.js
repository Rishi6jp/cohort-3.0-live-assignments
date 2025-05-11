const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');




const app = express();
app.use(express.json());
require('dotenv').config()

const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course')
const { adminRouter } = require('./routes/admin')

app.use('/api/v1/user', userRouter);
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/course', courseRouter);

async function main(){
    await mongoose.connect("").then(() => console.log("MongoDB Connected")).catch((err) => console.error("MongoDb Not Connected"))
    app.listen(3000);

}

main()






