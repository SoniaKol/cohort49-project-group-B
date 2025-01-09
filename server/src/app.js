import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import userRouter from "./routes/user.js";
import menuRouter from "./routes/menu.js";
import authRouter from "./routes/auth.js";
import "./controllers/auth.js";

dotenv.config();

// Create an express server
const app = express();

// Tell express to use the json middleware
app.use(express.json());
// Allow everyone to access our API. In a real application, we would need to restrict this!
app.use(cors());

/****** Attach routes ******/
/**
 * We use /api/ at the start of every route!
 * As we also host our client code on heroku we want to separate the API endpoints.
 */

app.use("/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/menu", menuRouter);

export default app;
