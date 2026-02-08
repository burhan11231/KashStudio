import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "signed-url",
    url: "https://storage.example.com/download/placeholder.zip"
  });
}
