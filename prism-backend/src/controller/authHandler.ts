import type { Request, Response } from "express";
import { UserModel } from "../models/User";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import argon2 from 'argon2'

dotenv.config();

export const signUpHandler = async(req: Request, res:Response) => {
    const {username, password} = req.body;

    const hashedPassword = await argon2.hash(password);

    try{
        await UserModel.create({
            username: username,
            password: password
        })

        res.json({
            message: "User Signed up"
        })

    } catch(e) {
        res.status(411).json({
            message: "User already exists"
        })
    }
}

export const signInHandler = async(req: Request, res: Response) =>{
    const {username, password} = req.body;
    const JWT_PASSWORD = process.env.JWT_SECRET;

    const existingUser = await UserModel.findOne({
            username,
            password
        })
        
        if (existingUser){

            if(!JWT_PASSWORD){
            console.error("JWT_SECRET is not configured in environment variables.");
            return res.status(500).json({message: "server configuration error"});
        }
            const token = jwt.sign({
                id: existingUser._id
            }, JWT_PASSWORD)
    
            res.json({
                token
            })
        } else {
            res.status(403).json({
                message: "Incorrect credentials"
            })
        }
    }