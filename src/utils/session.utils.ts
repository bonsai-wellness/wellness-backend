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
});

export default sessionPrisma;
