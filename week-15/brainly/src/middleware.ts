import { NextFunction, Request, Response } from "express";
import jwt, {JwtPayload} from "jsonwebtoken";
import { JWT_PASSWORD } from "./config";

interface MyJwtPayload extends JwtPayload {
    id: string,
}

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"];
    const decoded = jwt.verify(header as string, JWT_PASSWORD) as MyJwtPayload
    if(decoded){
        req.userId = decoded.id;
        next()
    } else {
        res.status(403).json({
            message: "You are not logged in"
        })
    }
}

// how to override the types of the express request object ✅
// req.userId = decoded.id ✅