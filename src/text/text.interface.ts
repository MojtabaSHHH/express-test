import { Types } from "mongoose";

export interface T_Interface {
  _id?: string | Types.ObjectId;
  title?: string;
  description?: string;
  status?: boolean;
}
