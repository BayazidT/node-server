import express from "express";
const router = express.Router();

import { signin } from "../controllers/user.js";

router.post("/signin", signin);
// router.get('/', getPosts);

export default router;