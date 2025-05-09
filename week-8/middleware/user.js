const jwt = require('jsonwebtoken');
const JWT_SECRET = "adfq414dadf"

function userMiddleware(req, res , next) {
    const token = req.headers.authorization;

    const response = jwt.verify(token, JWT_SECRET);

    if(response){
        req.userId = response.indexOf;
        next();
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
}

module.exports = {
    userMiddleware: userMiddleware
}