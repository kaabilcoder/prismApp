import express from "express";
import { DeleteContentHandler, GetContentHandler, PostContentHandler } from "../controller/contentHandler";
import { userMiddleware } from "../middleware/userMiddleware";

const router: express.Router = express.Router();

router.get("/content", userMiddleware, GetContentHandler);
router.post("/content", userMiddleware, PostContentHandler);
router.delete("/content/:id", userMiddleware, DeleteContentHandler);

export default router;