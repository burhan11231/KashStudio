import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    status: "stub",
    message: "Checkout session created."
  });
}
