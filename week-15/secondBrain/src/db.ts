const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    username: String,
    password: String,
})

const Content  = new Schema({
    link: String,
    type: String | enum,
    title: String,
    tags: 
})