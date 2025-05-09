const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    firstName: String, 
    secondName: String,
    email: {type: String, unique: true},
    password: String
})

const Admin = new Schema({
    firstName: String, 
    secondName: String,
    email: {type: String, unique: true},
    password: String,
})

const Course = new Schema({
    name: String, 
    detail: String, 
    price: Number, 
    imageUrl: String,
    creatorId: ObjectId,
})

const Purchase = new Schema({
    courseId: ObjectId,
    userId: ObjectId
})

const UserModel = mongoose.model('Users', User);
const AdminModel = mongoose.model('admin', Admin);
const CourseModel = mongoose.model('course', Course);
const PurchaseModel = mongoose.model('purchase', Purchase);

module.exports = {
    UserModel,
    AdminModel,
    CourseModel,
    PurchaseModel
}


