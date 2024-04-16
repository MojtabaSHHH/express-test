import { Request, Response } from "express";
import {
  addTextToGroupService,
  createGroupsService,
  getAllGroupsService,
  getGroupsService,
  getTextsOfGroupsService,
  removeGroupService,
  removeTextFromGroupService,
  updateGroupsService,
} from "./group.service";

export const addTextToGroupsController = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await addTextToGroupService(
      req.body.textIds,
      req.body.groupId
    );
    res.send({ data: result });
  } catch (err: any) {
    console.log({ err });
    res.status(500).json({ error: err.message });
  }
};

export const createGroupsController = async (req: Request, res: Response) => {
  try {
    const result = await createGroupsService(
      req.body.name,
      req.body.description
    );
    res.send({ data: result });
  } catch (err: any) {
    console.log({ err });
    res.status(500).json({ error: err.message });
  }
};

export const removeTextFromGroupsController = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await removeTextFromGroupService(
      req.body.textIds,
      req.body.groupId
    );
    res.send({ data: result });
  } catch (err: any) {
    console.log({ err });
    res.status(500).json({ error: err.message });
  }
};

export const getAllGroupsController = async (req: Request, res: Response) => {
  try {
    const result = await getAllGroupsService(req.query);
    res.send(result);
    res.send({ data: result });
  } catch (err: any) {
    console.log({ err });
    res.status(500).json({ error: err.message });
  }
};

export const updateGroupsController = async (req: Request, res: Response) => {
  try {
    const result = await updateGroupsService(req.params.id, req.body);
    res.send({ data: result });
  } catch (err: any) {
    console.log({ err });
    res.status(500).json({ error: err.message });
  }
};

export const deleteGroupsController = async (req: Request, res: Response) => {
  try {
    const result = await removeGroupService(req.params.id);
    res.send({ data: result });
  } catch (err: any) {
    console.log({ err });
    res.status(500).json({ error: err.message });
  }
};

export const getTextsOfGroupsController = async (req: Request, res: Response) => {
      try {
        const result = await getTextsOfGroupsService(req.params.id, req.query);
        res.send({ data: result });
      } catch (err: any) {
        console.log({ err });
        res.status(500).json({ error: err.message });
      }
    };


    export const getGroupsController = async (req: Request, res: Response) => {
          try {
            const result = await getGroupsService(req.params.id);
            res.send({ data: result });
          } catch (err: any) {
            console.log({ err });
            res.status(500).json({ error: err.message });
          }
        };