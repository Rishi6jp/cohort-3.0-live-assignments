import mongoose, { mongo } from 'mongoose';

import { Schema, model } from 'mongoose';
import { ObjectId } from 'mongoose';

mongoose.connect("mongodb+srv://rainbro187:test123@cluster0.zronawu.mongodb.net/")

const ObjectId = Schema.ObjectId

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});

const contentType = ["image", 'video', 'article', 'audio'];

const contentSchema = new Schema({
    link: {type: String, required: true},
    type:{type: String, enum:contentType, requiered: true },
    title:{type: String, required: true},
    tags: {type:ObjectId, ref: 'Tag'},
    userId:{type: ObjectId, ref: 'User'},
})

const tagsSchema = new Schema({
    titel: {type: String, required: true, unique: true}
})

const linkSchema = new Schema({
    hash: {type: String, required: true}, 
    userId: {type: ObjectId, ref: 'User'},
})

export const User = model('User', userSchema);
export const Content = model('Content', contentSchema);
export const Tags = model('Tags', tagsSchema);
export const Link = model('Link', linkSchema);

