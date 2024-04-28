import express from "express";
import {
  textCreated,
  textDeleted,
  textGetAll,
  textGetOneById,
  textUpdated,
} from "./text.controller";
import validator from "../utils/validator";
import { create, update } from "./text.validate";

const router = express.Router();

router.post("/", validator(create),textCreated);

router.get("/", textGetAll);

router.put("/:id",validator(update), textUpdated);

router.delete("/:id", textDeleted);

router.get("/:id", textGetOneById);


export default router;
