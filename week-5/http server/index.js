const express = require('express')
const app = express()
app.use(express.json())

app.get('/multiply', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a*b
    })
})

app.get('/add', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a+b
    })
})

app.get('/divide', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;
    if(b == 0){
        return res.json({message: "not divisible"})
    }
    res.json({
        ans: a/b
    })
})

app.get('/add/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    if(b == 0){
        return res.json({message: "not divisible"})
    }
    res.json({
        ans: a+b
    })
})

app.get('/subtract', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a-b
    })
})

app.listen(3000)