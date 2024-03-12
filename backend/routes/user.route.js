import express from "express";
import {signin} from "../controller/user.controller.js";

const router = express.Router();

router.post("/signin", signin);

export default router;