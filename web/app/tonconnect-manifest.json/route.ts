import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      message: {
        url: "https://toner-jet.vercel.app/",
        name: "TONER",
        iconUrl: "https://ton.vote/logo.png",
      },
    },
    { status: 500 }
  );
}
