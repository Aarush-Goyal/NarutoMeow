import express from "express";
import { getAmzn, postAmzn } from "../controllers/index.js";
const router = express.Router();

router.get("/amzn", getAmzn);
router.post("/amzn", postAmzn);

export default router;
