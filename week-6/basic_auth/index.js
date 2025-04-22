const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()

app.use(express.json())

JWT_SECRET = "abcd"

const users = []

const auth = (req, res, next) => {
    const token = req.headers.token
    if(token){
    const decoded = jwt.verify(token, JWT_SECRET, (err, data) => {
        if (err) {
            res.status(401).send({
                message: "Unauthorized"
            })
        } else {
            req.user = decoded;
            next();
        }
    })
    }else {
        res.status(401).send({
            message: "Unauthorized"
    })
}}

app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password; 

    users.push({username, password})

    res.json({
        message: "signed in successfully"
    })
})

app.post('/signin', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    

    let user = users.find(u => u.username === username && u.password === password)

    if(user) {
        const token = jwt.sign({username: username}, JWT_SECRET)
        user.token = token
        res.json({
            token: token
        })
}
    
})

app.get('/me',auth,  (req, res) => {
    const token = req.headers.token

    const decodedInfo = jwt.verify(token, JWT_SECRET)
    const username = decodedInfo.username;

    let user = users.find(u => u.username === username)

    if(user){
        res.json({
            username: user.username, password: user.password
        })
    } else {
        res.json({
            message: "Invalid token"
        })
    }
})

app.listen(3000)
