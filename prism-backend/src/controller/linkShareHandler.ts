import { Request, Response } from "express";
import mongoose from "mongoose";
import { LinkModel } from "../models/Link";
import { random } from "../config/utils";
import { ContentModel } from "../models/Content";
import { UserModel } from "../models/User";

export const toggleBrainShareLink = async(req: Request, res: Response) => {
    const share = req.body.share;
    if(share) {
        const existingLink = await LinkModel.findOne({
            userId: req.userId
        });

        if (existingLink) {
            res.json({
                hash: existingLink.hash
            })
            return;
        }
        const hash = random(10);
        await LinkModel.create({
            userId: req.userId,
            hash: hash
        })

        res.json({
            hash
        })
    } else {
        await LinkModel.deleteOne({
            userId: req.userId
        });

        res.json({
            message: "Removed Link"
        })
    }
}

export const getSharedContentByHash = async(req:Request, res:Response) => {
    const hash = req.params.shareLink;
    
    const link = await LinkModel.findOne({
        hash
    });

    if(!link) {
        res.status(411).json({
            message: "sorry incorrect input"
        })
        return;                 // early return if you are not using else in this case - typescript error
    }
    //userId
    const content = await ContentModel.find({
        userId: link.userId
    })

    console.log(link);
    const user = await UserModel.findOne({
        _id: link.userId
    })

    if(!user){
        res.status(411).json({
            message: "user not found, error should ideally not happen"
        })
        return;                 // early return if you are not using else in this case - typescript error
    }

    res.json({
        username: user.username,
        content: content
    })
}

