import { NextResponse } from "next/server";
import { Customer } from "@/utils/models/customers";
import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;
export async function GET() {
  try {
    if (!mongoose.connection.readyState) {
      await mongoose.connect(uri, {
        serverSelectionTimeoutMS: 5000,
      });
      console.log("Connected to MongoDB");
    }

    const customersData = await Customer.find({});
    return NextResponse.json({ result: customersData });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const payload = await req.json();

    // Connect to MongoDB if not already connected
    if (!mongoose.connection.readyState) {
      await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
      console.log("Connected to MongoDB");
    }

    // Validate required fields
    if (!payload.name || !payload.number || !payload.email) {
      return NextResponse.json(
        { result: "Required field not found", success: false },
        { status: 400 }
      );
    }

    // Save to MongoDB
    const newCustomer = new Customer(payload);
    const savedCustomer = await newCustomer.save();

    return NextResponse.json(
      { result: "New Customer Created", customer: savedCustomer },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating customer:", error);
    return NextResponse.json(
      { result: "Error creating customer", error: error.message },
      { status: 500 }
    );
  }
}
