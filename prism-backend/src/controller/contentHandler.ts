import { Request, Response } from "express";
import mongoose from "mongoose";
import { ContentModel } from "../models/Content";

export const GetContentHandler = async (req: Request, res: Response): Promise<void> => {

    const userId = req.userId;
    const typeParam = req.query.type;

    const type = Array.isArray(typeParam) ? typeParam[0] : typeParam;

    const filter: any = { userId };

    if (typeof type === "string" && type !== "all") {
        filter.type = type.toString();
    }
    const content = await ContentModel.find(filter).populate("userId", "username")
    res.json({
        content
    })
}

export const PostContentHandler = async(req: Request, res: Response) => {
    const { link, type, title } = req.body
    if(!link || !type || !title) {
        res.status(400).json({
            message: "Missing Required filled"
        })
        return;
    }

    await ContentModel.create({
        link,
        type,
        title: req.body.title,
        userId: req.userId,
    })

    res.json({
        message: "Content Added"
    })
    
}

export const DeleteContentHandler = async (req: Request, res: Response): Promise<void> => {

    const contentId = req.params.id;
    const userId = req.userId;

    if (!contentId) {
        res.status(400).json({ message: "Content Id missing from request" })
        return;
    }

    const result = await ContentModel.deleteOne({
        _id: new mongoose.Types.ObjectId(contentId),
        userId: userId
    });

    if (result.deletedCount === 0) {
        res.status(404).json({ message: "Content not found or unauthorized." });
        return;
    }
    res.json({
        message: "Deleted"
    })
}

