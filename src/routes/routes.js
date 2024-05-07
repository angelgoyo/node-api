import usersRoutes from "./users/index.js";
import meRoutes from "./me/index.js";
import authRoutes from "./auth/index.js";
import rolesRoutes from "./roles/index.js";
import passport from "passport";
import express from "express";

const router = express.Router();

router.use("/", authRoutes);
router.use(
  "/users",
  passport.authenticate("jwt", { session: false }),
  usersRoutes
);
router.use("/me", passport.authenticate("jwt", { session: false }), meRoutes);
router.use(
  "/roles",
  passport.authenticate("jwt", { session: false }),
  rolesRoutes
);

export default router;
