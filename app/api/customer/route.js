import { NextResponse } from "next/server";
import { Customer } from "@/utils/models/customers";
import mongoose from "mongoose";

export async function GET(request) {
  await mongoose
    .connect(
      "mongodb+srv://admin-bhavik:mongodbpassword@cluster1.hju2b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1/Wpdata"
    )
    .then(async (data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });

  return NextResponse.json({ result: data });
}

export async function POST(req) {
  let payload = await req.json();
  await mongoose
    .connect(
      "mongodb+srv://admin-bhavik:mongodbpassword@cluster1.hju2b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1/Wpdata"
    )
    .then(async (data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });

  if (!payload.name || !payload.number || !payload.email) {
    return NextResponse.json(
      { result: "required field not found", success: false },
      { status: "400" }
    );
  }
  return NextResponse.json(
    { result: "New Customer Created", payload },
    { status: 201 }
  );
}
