import { NextResponse } from "next/server";

export async function GET(req: Request) {
 const { searchParams } = new URL(req.url);
 // const data = await fetch("https://jsonplaceholder.typicode.com/posts");
 // const posts = await data.json();
 const obj = Object.fromEntries(searchParams.entries());
 return NextResponse.json({
  message: "get",
  // posts
  obj,
 });
}
export async function POST(req: Request) {
 const { searchParams } = new URL(req.url);
 const name = searchParams.get("name");
 const email = searchParams.get("email");

 return NextResponse.json({ name, email, message: "post" });
}
