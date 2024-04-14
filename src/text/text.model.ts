import { Schema, model } from "mongoose";
import { T_Interface } from "./text.interface";

const T_Schema = new Schema<T_Interface>(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    status: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const T_Model = model<T_Interface>("texts", T_Schema);

export default T_Model;
