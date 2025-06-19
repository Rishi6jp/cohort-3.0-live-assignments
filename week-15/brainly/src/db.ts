import mongoose, { model, Schema } from "mongoose";

mongoose.connect("mongodb+srv://rainbro187:test123@cluster0.zronawu.mongodb.net/")
    .then(() => {
        console.log("Mongodb Connected");
    })
    .catch((error) => {
        console.log(`Mongodb Error: ${error}`);
    })

const UserSchema = new Schema({
    username: {type: String, unique: true, },
    password: {type: String}
})

export const UserModel =  model("User", UserSchema)

const ContentSchema = new Schema({
    title: String,
    link: String,
    type: {type: String, enum: ["image", 'video', 'audio', 'article'], required: true},
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tags'}],
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true}
})

export const ContentModel = model("Content",ContentSchema)

const LinkSchema = new Schema({
    hash: {type: String, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
})

export const LinkModel = model("Link", LinkSchema);

const TagSchema = new Schema({
    title: {type: String, required: true, unique: true}
})

export const TagModel = model("Tags", TagSchema)