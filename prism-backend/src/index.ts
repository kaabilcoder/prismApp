import express from 'express';
import mongoose from 'mongoose';
import jwt from "jsonwebtoken";
import { ContentModel, LinkModel, UserModel } from './db';
import { JWT_PASSWORD } from './config';
import { userMiddleware } from './userMiddleware';
import dotenv from 'dotenv'
import { random } from './utils';
import  cors  from 'cors'
dotenv.config()

const app = express();
const PORT = process.env.PORT 

app.use(express.json());
app.use(cors());

app.post("/api/v1/signup", async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;

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
})

app.post("/api/v1/signin", async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await UserModel.findOne({
        username,
        password
    })
    if (existingUser){
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
})

app.post("/api/v1/content", userMiddleware, async(req, res) => {
    const link = req.body.link;
    const type = req.body.type;

    await ContentModel.create({
        link,
        type,
        title: req.body.title,
        userId: req.userId,
        tags: []
    })

    res.json({
        message: "Content Added"
    })
    
})

app.get("/api/v1/content", userMiddleware, async(req, res) => {
    // @ts-ignore
    const userId = req.userId;
    const content = await ContentModel.find({
        userId: userId
    }).populate("userId", "username")
    res.json({
        content
    })
})

app.delete("/api/v1/content", userMiddleware, async(req, res) => {
    // @ts-ignore
    const contentId = req.contentId;
    await ContentModel.deleteOne({
        contentId,
        userId: req.userId
    })

    res.json({
        message: "Deleted"
    })
})

app.post("/api/v1/brain/share", userMiddleware, async(req, res) => {
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
})

app.get("/api/v1/brain/:shareLink", userMiddleware, async(req, res) => {
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
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})