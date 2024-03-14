import express from "express";
import {signin} from "../controller/user.controller.js";

const router = express.Router();

router.post("/sign-in", signin);

export default router;