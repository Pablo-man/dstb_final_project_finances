import { Schema, model } from "mongoose";

const CategorySchema = Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },    
  },
  {
    timestamps: true
  }
);

export default model("Category", CategorySchema);