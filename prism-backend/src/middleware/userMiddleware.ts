import type { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config();

export const userMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const JWT_SECRET = process.env.JWT_SECRET;

    if (!JWT_SECRET) {
        console.error("JWT_SECRET is not configured in environment variables.");
        res.status(500).json({ message: "server configuration error" });
        return;
    }

    const header = req.headers["authorization"];
    const decoded = jwt.verify(header as string, JWT_SECRET);

    if (decoded) {
        if (typeof decoded === "string") {
            res.status(403).json({
                message: "You are logged in"
            })
            return;
        }
        req.userId = (decoded as JwtPayload).id;
        next()
    } else {
        res.status(403).json({
            message: "You are not logged in"
        })
    }
}