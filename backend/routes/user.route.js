import express from "express";
import {signUp} from "../controller/user.controller.js";

const router = express.Router();

router.post("/sign-up", signUp);
// router.post("/sign-in", signin);

export default router;