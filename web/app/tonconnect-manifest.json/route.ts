import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      message: {
        url: "http://localhost:3000",
        name: "TONER",
        iconUrl: "https://ton.vote/logo.png",
      },
    },
    { status: 500 }
  );
}
