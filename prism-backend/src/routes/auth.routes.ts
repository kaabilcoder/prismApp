import express  from "express";
import { signInHandler, signUpHandler } from "../controller/authHandler";

const router:express.Router = express.Router();

router.post("/signup", signUpHandler as express.RequestHandler);
router.post("/signin", signInHandler as express.RequestHandler);

export default router;