import { NextResponse } from "next/server";

export const GET = () => {
  return new NextResponse(JSON.stringify({ message: "success" }));
};

export const POST = (request: Request) => {
  const body = request.body;

  console.log("body: ", body)

  return new NextResponse(JSON.stringify({body}));
};
