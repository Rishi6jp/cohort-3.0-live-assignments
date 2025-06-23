import express from 'express';
import jwt from "jsonwebtoken";
import mongoose from 'mongoose';
import crypto from 'crypto'
import { ContentModel, LinkModel, TagModel, UserModel } from './db';
import { JWT_PASSWORD } from './config';
import { userMiddleware } from './middleware';
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
 

app.post("/api/v1/signup",async (req, res) => {
    //zod validation, hash the password
    const username = req.body.username;
    const password = req.body.password;

    try{

        await UserModel.create({
            username: username,
            password: password
        })

        res.json({
            message: "User Signed Up"
        })
    }catch(err){
        console.log("error: " + err);
        res.status(500).json({
            message: "user already exist"
        })
    }

})

app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.username;
    try{
        const existingUser = await UserModel.findOne({
            username
        })
        if(existingUser){
            const token = jwt.sign({
                id: existingUser._id
            }, JWT_PASSWORD);
            res.json({
                token
            })
        }else{
            res.status(403).json({
                message: "Incorrect Credentials"
            })
        }
    }catch(e){
        console.log("Error: " + e);
        res.json({
            message: "wrong credentials"
        })
    }
})

app.post("/api/v1/content",userMiddleware,async (req, res) => {
    const { title, link , type, tags } = req.body;

    if(!title || !link || !type || !Array.isArray(tags)){
        res.status(400).json({ message: "Missing Data"})
    }

    const tagIds = []

    for (const tagName of tags){
        let tag = await TagModel.findOne({ title: tagName });

        if(!tag){
            tag = await TagModel.create({ title: tagName })
        }

        tagIds.push(tag._id);
    }

    await ContentModel.create({
        link,
        type,
        title,
        userId: req.userId,
        tags: tagIds,
    })

    res.json({
        message: "Content added"
    })
    
})

app.get("/api/v1/content", userMiddleware,async (req, res) => {
    const userId = req.userId;
    const content = await ContentModel.find({
        userId: userId,
    }).populate("userId", "username").populate("tags", "title")
    res.json({
        content
    })
})

app.delete("/api/v1/content",userMiddleware, async (req, res) => {
    const contentId = req.body.contentId;
    await ContentModel.deleteOne({
        userId: req.userId,
        _id: contentId
    })

    res.json({
        message: "Deleted"
    })
})

app.post("/api/v1/brain/share",userMiddleware, async (req, res) => {
    const userId = req.userId;
    const share = req.body.share;
    if(share){
        const hash = crypto.randomBytes(5).toString('hex');
        await LinkModel.create({
            hash,
            userId,
        })
        res.json({
            hash
        })
    } else {
        await LinkModel.deleteOne({
            userId: userId,
        })
        res.status(400).json({
            success: false,
            message: "Removed link"
        })
    }
})

app.get("/api/v1/brain/:shareLink", async(req, res) => {
    const shareLink = req.params.shareLink;

    const brain = await LinkModel.findOne({
        hash: shareLink
    })

    const content = await ContentModel.find({
        userId: brain!.userId
    }).populate("userId", "username").populate("tags", "title")

    res.status(200).json({
        username: (content[0].userId as any).username,
        content: content.map((item)=>({
            id: item._id,
            link: item.link,
            title: item.title,
            tags: item.tags.map((tag: any)=>tag.title)
        }))
    })

})

app.listen(3000)
  