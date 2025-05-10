// Users

const { Router } = require('express');
const { UserModel } = require('../db');
const { z } = require('zod')
const bcrypt = require('bcrypt');
const { error } = require('console');
const userRouter = Router();
const jwt = require('jsonwebtoken');
const JWT_USER_SECRET = "adf9714qfasdf9q72346234";


userRouter.post('/signup', async (req, res) => {

    const requireBody = z.object({
        firstName: z.string().max(100).min(3),
        lastName: z.string().max(100).min(3),
        email: z.string().email().max(100).min(3),
        password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/).max(100).min(8)
    })

    const parsedDataWithSuccess = requireBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        res.json({
            message: "Incorrect Formate",
            error: parsedDataWithSuccess.error
        })
        return
    }

    const {email, password, firstName, lastName } = parsedDataWithSuccess.data
    let errorThrown = false;

    try{
        const hashedPassword = await bcrypt.hash(password, 5);
        await UserModel.create({
        email: email,
        password: hashedPassword,
        firstName: firstName,
        secondName: lastName
        })  
    }catch(e){
        res.json({
            message: "Can't store into db"
        })
        errorThrown = true;
    }

    if(!errorThrown){
        res.json({
            message: "You are signed In"
        })
    }
    
});

userRouter.post('/signin', async (req, res) => {
    const {email, password} = req.body;

    try{
        const user = await UserModel.findOne({
            email: email,
        })

        if(!user){
            return res.json({
                message: "User not found"
            })
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

         
        if(isPasswordCorrect){
            const token = jwt.sign({
                id: user._id
            }, JWT_USER_SECRET)
            
            // do a cookie logic

            res.json({
                token: token
            })
        } else {
            res.status(403).json({
                message: "Incorrect Credentials"
            })
        }

        
    } catch(e) {
        console.error("error: "+ e);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
    
});

userRouter.post('/purchases', (req, res) => {});

module.exports = {
    userRouter: userRouter
}

