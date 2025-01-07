import express from "express";
import session from "express-session";
import cors from "cors";
import passport from "passport";

import userRouter from "./routes/user.js";
import menuRouter from "./routes/menu.js";
import authRouter from "./routes/auth.js";
import "./controllers/auth.js";

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
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  }),
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/user", userRouter);
app.use("/api/menu", menuRouter);
app.use("/api/auth", authRouter);

export default app;
