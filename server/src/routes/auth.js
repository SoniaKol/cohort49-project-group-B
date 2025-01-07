import express from "express";
import passport from "passport";

const authRouter = express.Router();

// Google Authentication
authRouter.get(
  "auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

authRouter.get(
  "auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/signin" }),
  (req, res) => {
    res.redirect("/dashboard");
  },
);

// Logout
authRouter.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect("/signin");
  });
});

export default authRouter;
