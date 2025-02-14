import { Schema, model } from "mongoose";

const UserCategorySchema = Schema(
  {
    user_id: { type: String, required: true, trim: true },
    category_id: { type: String, required: true, trim: true },    
  },
  {
    timestamps: true
  }
);

export default model("UserCategory", UserCategorySchema);