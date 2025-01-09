import express from "express";
import passport from "passport";
import session from "express-session";
import "../controllers/auth.js";

const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET || "default_secret",
    resave: false,
    saveUninitialized: false,
  }),
);
app.use(passport.initialize());
app.use(passport.session());

// Google Authentication
app.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

app.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/signin" }),
  (req, res) => {
    res.redirect("http://localhost:8080/home");
  },
);

// Logout
app.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect("/signin");
  });
});

export default app;
