import { ExtractJwt } from "passport-jwt";
import passportJWT from "passport-jwt";
import dotenv from "dotenv";
import passport from "passport";

import { userModel } from "./schemas/user.schema.js";
const JWTStrategy = passportJWT.Strategy;
dotenv.config();

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    async function (jwtPayload, done) {
      try {
        const user = await userModel.findOne({ _id: jwtPayload.id });
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);
