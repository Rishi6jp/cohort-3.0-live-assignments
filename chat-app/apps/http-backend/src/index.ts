import express from "express";
import jwt from "jsonwebtoken"
import { middleware } from "./middleware";
import { JWT_SECRET } from "@repo/backend-common/config";
import { CreateRoomSchema, CreateUserSchema, SigninSchema } from "@repo/common/config";
import { prismaClient } from "@repo/db/client"
import { AuthenticationRequest } from "./@types/express/types";



const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
    const parsedData = CreateUserSchema.safeParse(req.body);
    if(!parsedData.success) {
        res.json({
            message: "Incorrect inputs"
        })
        return ;
    }
    try{
        await prismaClient.user.create({
            data: {
                email: parsedData.data?.username,
                // hash password
                password: parsedData.data.password,
                name: parsedData.data.name
            }
        })
        res.json({
            message: "You'are singned up"
        })
    } catch(e) {
        res.status(411).json({
            message: "Email already Exist"
        })
    }

});

app.post("/signin", async (req, res) => {
    const parsedData = SigninSchema.safeParse(req.body);
    if(!parsedData.success){
        res.json({
            message: "Incorrect Credentials"
        })
        return;
    }

    //Todo compare the hashed pws here
    const user = await prismaClient.user.findFirst({
        where:{
            email: parsedData.data.username,
            password: parsedData.data.password
        }
    })
    
    if(!user){
        res.status(403).json({
            message: "Not authorized"
        })
        return;
    }

    const token = jwt.sign({
        userId: user?.id
    }, JWT_SECRET)
    res.json({
        token
    })
})

app.post("/room",middleware,async (req: AuthenticationRequest, res) => {
    const parsedData = CreateRoomSchema.safeParse(req.body);
    if(!parsedData.success){
        res.json({
            message: "Incorrect inputs"
        })
        return;
    }

    const userId = req.userId

    if(!userId){
        res.status(403).json({
            message: "Unauthorized: Please signin"
        })
        return
    }

    try{
    const room = await prismaClient.room.create({
        data: {
            slug: parsedData.data.roomName,
            adminId: userId
        }
    })

    res.json({
        roomId: room.id
    })
}catch(e){
    res.status(411).json({
        message: "Room already exists with the name"
    })
} 

})



app.listen(3001)