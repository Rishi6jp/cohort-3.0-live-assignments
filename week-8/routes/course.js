const { Router } = require('express')
 
const courseRouter = Router();

courseRouter.post('/purchase', (req, res) => {});

courseRouter.post('/preview', (req, res) => {});

module.exports =  {
    courseRouter: courseRouter,
}