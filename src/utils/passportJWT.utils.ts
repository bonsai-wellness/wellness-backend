import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { db } from "./db.server";

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.CUSTOMCONNSTR_JWT_SECRET,
};

passport.use(
  new JwtStrategy(opts, async (payload, done) => {
    const user = await db.user.findUnique({
      where: { id_user: payload.id },
    });
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  })
);
