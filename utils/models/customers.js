import mongoose from "mongoose";

const customerModel = new mongoose.Schema(
  {
    name: String,
    email: String,
    number: String,
  },
  {
    collection: "customers",
  }
);

export const Customer =
  mongoose.models.customers || mongoose.model("customers", customerModel);