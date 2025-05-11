const jwt = require('jsonwebtoken');

function userMiddleware(req, res , next) {
    const token = req.headers.authorization;

    const response = jwt.verify(token, process.env.JWT_USER_SECRET);

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