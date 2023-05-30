import expressSession from "express-session";
import { db } from "./db.server";
import { PrismaSessionStore } from "@quixo3/prisma-session-store";

const sessionPrisma = expressSession({
  secret: "a santa at nasa",
  resave: true,
  saveUninitialized: true,
  store: new PrismaSessionStore(db, {
    dbRecordIdIsSessionId: true,
    dbRecordIdFunction: undefined,
  }),
  cookie: {
    path: "/",
    domain: process.env.CUSTOMCONNSTR_COOKIE_DOMAIN || "localhost",
  }
});

export default sessionPrisma;
