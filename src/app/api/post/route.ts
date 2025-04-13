import { client } from "@/sanity/lib/client";
import {  NextResponse } from "next/server";
import { POSTS_QUERY } from "../query";

export async function GET() {
  try {
    const documents = await client.fetch(POSTS_QUERY);
    return NextResponse.json({ documents });
  } catch  {
  return NextResponse.json({ message: "Fail fetching posts" }, { status: 500 });
  }
}
