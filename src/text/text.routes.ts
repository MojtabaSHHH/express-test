import express from "express";
import {
  textCreated,
  textDeleted,
  textGetAll,
  textGetOneById,
  textUpdated,
} from "./text.controller";

const router = express.Router();

router.post("/", textCreated);

router.get("/", textGetAll);

router.put("/:id", textUpdated);

router.delete("/:id", textDeleted);

router.get("/:id", textGetOneById);


export default router;
