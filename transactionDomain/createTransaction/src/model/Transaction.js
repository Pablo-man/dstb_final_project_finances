import { Schema, model } from "mongoose";

const TransactionSchema = Schema(
  {
    value: { type: String, required: true, trim: true },
    date: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    user_id: { type: String, required: true, trim: true },
    destination_id: { type: String, required: true, trim: true },
    paymentMethod: { type: String, required: true, trim: true },
    evidence: { type: String, required: true, trim: true },
    category_user_id: { type: String, required: true, trim: true },
  },
  {
    timestamps: true
  }
);

export default model("Transaction", TransactionSchema);