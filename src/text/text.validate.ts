import { body } from "express-validator";

export const update = [
  body("title").isString().optional(),
  body("description").isString().optional(),
  body("status").isBoolean().optional(),
];

export const create = [
    body("title").isString(),
    body("description").isString(),
    body("status").isBoolean().optional(),
];
