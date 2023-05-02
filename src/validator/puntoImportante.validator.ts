import { body } from "express-validator";

export const validator = () => [body("name").isString()];
