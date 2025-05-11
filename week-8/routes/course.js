const { Router } = require('express')
 
const courseRouter = Router();
const {userMiddleware} = require("../middleware/user");
const { PurchaseModel, CourseModel } = require("../db")

courseRouter.get('/purchase', async (req, res) => {
    const userId = req.userId;
    const courseId = req.body.courseId;

    await PurchaseModel.create({
        userId, 
        courseId
    })

    res.json({
        message: "Course preview endpoint"
    })
});

courseRouter.get('/preview', async (req, res) => {

    const userId = req.userId;

    const purchases = await PurchaseModel.find({
        userId,
    });

    res.json({
        message : "kuch toh milla"
    })
});

module.exports =  {
    courseRouter: courseRouter,
}