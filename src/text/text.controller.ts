import { Request, Response } from "express";
import {
  textCreatedService,
  textDeleteService,
  textGetAllService,
  textGetOneByIdService,
  textUpdateService,
} from "./text.service";

export const textCreated = async (req: Request, res: Response) => {
  try {
    const result = await textCreatedService({...req.body});
    if (!result) {
      res.json({ message: "The Text was not created" });
    }
    return res.json({ data: result, status: "success" });
  } catch (err: any) {
    console.log({ err });
    res.status(500).json({ error: err.message });
  }
};

export const textUpdated = async (req: Request, res: Response) => {
  const result = await textUpdateService(req.params.id , req.body);
  if (!result) {
    res.send({ message: "The Text was not updated" });
  }
  return res.json({ data: result });
};

export const textDeleted = async (req: Request, res: Response) => {
  const result = await textDeleteService(req.params.id);
  if (!result) {
    res.send({ message: "The Text was not Deleted" });
  }
  return res.send({ data: result });
};

export const textGetOneById = async (req: Request, res: Response) => {
  const result = await textGetOneByIdService(req.params.id);
  if (!result) {
    res.send({ message: "The Text was not received By ID" });
  }
  return res.send({ data: result });
};

export const textGetAll = async (req: Request, res: Response) => {
  const result = await textGetAllService();
  if (!result) {
    res.send({ message: "The Texts was not received" });
  }
  return res.send({ data: result });
};
