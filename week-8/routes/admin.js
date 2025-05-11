// Admin

const JWT_ADMIN_SECRET = "adf98af6adifh*&8sd"
const {z} = require('zod')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const { Router } = require('express');
const { AdminModel, CourseModel } = require('../db');
const { adminMiddleware } = require('../middleware/admin');

const adminRouter = Router();


adminRouter.post('/signup', async (req, res) => {
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
            await AdminModel.create({
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
    
adminRouter.post('/signin', async (req, res) => {
    const {email, password} = req.body;

    try{
        const user = await AdminModel.findOne({
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
            }, process.env.JWT_ADMIN_SECRET)
            
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


adminRouter.post('/course', async (req, res) => {
    const adminId = req.userId;

    const { title, description, imageUrl, price} = req.body;

    const course = await CourseModel.create({
        name: title, 
        detail: description,
        imageUrl: imageUrl,
        price: price,
        creatorId: adminId
    })

    res.json({
        message: "Course Created",
        courseId: course._id
    })
});
    
adminRouter.put('/course',adminMiddleware,  async (req, res) => {
    const adminId = req.userId;

    const { title, description, imageUrl, price, courseId} = req.body;

    const course = await CourseModel.update({
        _id: courseId,
        creatorId: adminId
    },{
        name: title, 
        detail: description,
        imageUrl: imageUrl,
        price: price,
        creatorId: adminId
    })

    res.json({
        message: "Course Updated",
        courseId: course._id
    })
});

adminRouter.delete('/course', (req, res) => {});

adminRouter.get('/course/bulk', adminMiddleware, async (req, res) => {
    const adminId = req.userId

    const course = await CourseModel.find({
        _id: courseId,
        creatorId: adminId
    },{
        name: title, 
        detail: description,
        imageUrl: imageUrl,
        price: price,
        creatorId: adminId
    })

    res.json({
        message: "Course Updated",
        courseId: course._id
    })
})

module.exports = {
    adminRouter: adminRouter
}