import { customers } from "@/utils/db";
import { NextResponse } from "next/server";

export function GET(req, content, params) {
  const customerData = customers.filter((item) => item.id == content.params.id);

  return NextResponse.json(
    customerData.length == 0
      ? { result: "Customer not found", success: false }
      : { result: customerData[0], success: true }
  );
}
