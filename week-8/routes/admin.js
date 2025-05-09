// Admin

const { Router } = require('express');
const { AdminModel } = require('../db')

const adminRouter = Router();

adminRouter.post('/login', (req, res) => {});

adminRouter.post('/signup', (req, res) => {});

adminRouter.post('/course', (req, res) => {});

adminRouter.delete('/course', (req, res) => {});

adminRouter.put('/course', (req, res) => {});

adminRouter.get('/course/bulk', (req, res) => {})

module.exports = {
    adminRouter: adminRouter
}