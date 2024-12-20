import express from "express";
import { getItem } from "../controllers/menu.js";

const menuRouter = express.Router();

menuRouter.get("/", getItem);

export default menuRouter;
