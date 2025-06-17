import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { Content, User } from './db';
import { userMiddleware } from './middleware';

require('dotenv').config()

const JWT_PASSWORD = "451904570348"

const app = express();
app.use(express.json());

app.post('/api/v1/signup', async (req, res)=> {
    //Todo: zod validation, hash the password
    const username = req.body.username;
    const password = req.body.password;
    try{
        await User.create({
        username: username,
        password: password,
        });
        res.json({
            message : "User signed up"
        });
    }catch(e){
        res.status(411).json({
            message: "User Already Exist"
        })
    }
})

app.post('/api/v1/signin', async (req, res)=> {
    const username = req.body.username;
    const password = req.body.password;
    const existingUser = await User.findOne({
        username,
        password
    });
    if(existingUser){
        const token = jwt.sign({
            id: existingUser._id
        }, JWT_PASSWORD)
        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }
})

app.post('/api/v1/content', userMiddleware ,async (req, res)=> {
    const link = req.body.link;
    const type = req.body.type;
    await Content.create({
        link: link,
        type: type,
        //@ts-ignore
        userId: req.userId,
        tags: []
    })

    res.json({
        message: "Content added"
    })
})

app.get('/api/v1/content', (req, res)=> {
    
})

app.delete('/api/v1/content', (req, res)=> {
    
})

app.post('/api/v1/brain/share', (req, res) => {

})

app.get('/api/v1/brain/:sharelink', (req, res) => {

})

app.listen(3000);