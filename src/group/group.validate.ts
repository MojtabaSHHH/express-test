import { body } from "express-validator";
import { isArray } from "lodash";

export const update = [
  body("name").isString().optional(),
  body("status").isString().optional(),
  body("description").isString().optional(),
];

export const create = [
  body("name").isString(),
  body("status").isString().optional(),
  body("description").isString(),
];

export const textInGroup = [
    body("groupId").isString(),
    body("textIds")
      .exists()
      .custom((val) => {
        return isArray(val) && val.length > 0;
      }),
  ];