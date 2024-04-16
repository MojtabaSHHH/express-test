import { ObjectId } from "mongoose";
import { T_Interface } from "../text/text.interface";

export default interface GroupInterface {
  _id?: string | ObjectId;
  name?: string;
  status?: string;
  description?: string;
  texts: string[] | ObjectId[] | T_Interface[];
  updatedAt?: Date;
}

export type GroupStatus = "pending" | "active" | "inactive";
