import express from "express";
import { userMiddleware } from "../middleware/userMiddleware";
import { getSharedContentByHash, toggleBrainShareLink } from "../controller/linkShareHandler";

const router: express.Router = express.Router();

router.route("/brain/share").post(userMiddleware, toggleBrainShareLink);
router.route("/brain/share/:shareLink").get(userMiddleware, getSharedContentByHash);

export default router