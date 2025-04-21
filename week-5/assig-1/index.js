const express = require('express')
const app = express();

app.use(express.json());

// Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console
let requestCount = 0
app.use(function(req, res, next) {
    requestCount += 1;
    const date = new Date();
    const request = req.method
    const url = req.url
    const timestamp = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
    console.log(`${request} ${url} [${timestamp}]`)
    next();

})

