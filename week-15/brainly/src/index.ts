import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { Content, User } from './db';
import { userMiddleware } from './middleware';
import z from 'zod'
import bcrypt from 'bcrypt'
import express, { Request, Response } from 'express';

import { JWT_PASSWORD } from './config';

const app = express();
app.use(express.json());

app.post('/api/v1/signup',async (req: Request, res: Response): Promise<void> => {
    //Todo: zod validation, hash the password
    const requireBody = z.object({
        username: z.string().max(20).min(3 ),
        password: z.string()
            .max(20)
            .min(8)
            .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/)
    })

    const passDataWithSuccess = requireBody.safeParse(req.body);
    if(!passDataWithSuccess.success){
        return res.status(400).json({
            message: "Incorrect Formate",
            error: passDataWithSuccess.error
        })
    }
    const {username, password} = passDataWithSuccess.data
    try{
        const hashedPassword = await bcrypt.hash(password, 5);
        await User.create({
        username: username,
        password: hashedPassword,
        });
        return res.json({
            message : "User signed up"
        });
    }catch(e){
        return res.status(411).json({
            message: "User Already Exist"
        })
    }
})

app.post('/api/v1/signin', async (req: Request, res: Response): Promise<void> => {
    const singinSchema = z.object({
        username: z.string().max(20).min(3 ),
        password: z.string()
            .max(20)
            .min(8)
            .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/)
    })
    const parsedSigninDataWithSuccess = singinSchema.safeParse(req.body)
    if(!parsedSigninDataWithSuccess.success){
        return res.status(400).json({
            error: parsedSigninDataWithSuccess.error
        })
         
    }

    const { username, password } = parsedSigninDataWithSuccess.data
    
    try{
        const user = await User.findOne({ username })
        if(!user){
            return res.status(403).json({
                message: "Invalid username or password"
            })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch){
            return res.status(403).json({
                message: "Invalid username or password"
            })
        }
        const token = jwt.sign(
           { id: user._id, username: user.username },
           JWT_PASSWORD
        )
        return res.json({
            message: "Signin successful",
            token
        })
    }catch(err){
        console.error("Signin error: ", err);
        return res.status(500).json({
            message: "Internal server error",
        })
    } 
});

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