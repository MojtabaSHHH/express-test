import express from "express";
import {
  addTextToGroupsController,
  createGroupsController,
  deleteGroupsController,
  getAllGroupsController,
  getGroupsController,
  getTextsOfGroupsController,
  removeTextFromGroupsController,
  updateGroupsController,
} from "./group.controller";
import validator from "../utils/validator";
import { create, textInGroup, update } from "./group.validate";

const router = express.Router();

router.post("/", validator(create), createGroupsController);

router.get("/", getAllGroupsController);

router.post("/text", validator(textInGroup), addTextToGroupsController);

router.put(
  "/deleteTexts",
  validator(textInGroup),
  removeTextFromGroupsController
);

router.put("/:id", validator(update), updateGroupsController);

router.delete("/:id", deleteGroupsController);

router.get("/:id", getGroupsController);

router.get("/:id/texts", getTextsOfGroupsController);

export default router;
