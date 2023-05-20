import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { db } from "./db.server";
import { UserCreate } from "../types";

const GOOGLE_CLIENT_ID =
  "742749423150-tsbpr7gvrqvktg060ls2o2ge3jsqs1pl.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/api/auth/google/callback",
      passReqToCallback: true,
    },
    async function (_req, _accessToken, _refreshToken, profile, done) {
      try {
        // If user exists
        const user = await db.user.findUnique({
          where: { google_id: profile.id },
        });
        if (user) return done(null, user);
        // Else create one
        const { id, displayName, name, emails, photos } = profile;
        const newUser: UserCreate = {
          name: displayName,
          google_id: id,
          email: emails![0].value,
          first_name: name!.givenName,
          last_name: name!.familyName,
          profile_picture: photos![0].value,
          is_admin: "F",
        };
        const dbUser = await db.user.create({ data: newUser });
        return done(null, dbUser);
      } catch (err: any) {
        return done(err);
      }
    }
  )
);

passport.serializeUser(function (user: any, done) {
  done(null, user.google_id);
});

passport.deserializeUser(async function (user: any, done) {
  try {
    const findUser = await db.user.findUnique({
      where: { google_id: user },
    });
    // Pass the retrieved user data to the callback
    done(null, findUser);
  } catch (error) {
    done(error);
  }
});
