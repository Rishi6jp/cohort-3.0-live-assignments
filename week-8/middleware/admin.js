const jwt = require('jsonwebtoken');
const JWT_ADMIN_SECRET = "adf98af6adifh*&8sd"

function adminMiddlewear() {
    const token = req.headers.authorization
    const decoded = jwt.verify(token, JWT_ADMIN_SECRET)

    if(decoded){
        req.userId = decoded.id;
        next()
    }else {
        res.status(403).json({
            message: "You are not signed in"
        })
    }
}

module.exports = {
    adminMiddlewear: adminMiddlewear
}