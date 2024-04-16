import { Schema, model, Types } from "mongoose";
import GroupInterface from "./group.interface";

const GroupSchema = new Schema<GroupInterface>(
  {
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    },
    description: {
      type: String,
    },
    texts: [
      {
        type: Types.ObjectId,
        ref: "texts",
      },
    ],
  },
  { timestamps: true }
);

const Group = model<GroupInterface>("group", GroupSchema);

export default Group;
