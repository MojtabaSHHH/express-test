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

const router = express.Router();

router.post("/", createGroupsController);

router.get("/", getAllGroupsController);

router.post("/text", addTextToGroupsController);

router.put("/deleteTexts", removeTextFromGroupsController);

router.put("/:id", updateGroupsController);

router.delete("/:id", deleteGroupsController);

router.get("/:id", getGroupsController);

router.get("/:id/texts", getTextsOfGroupsController);

export default router;
