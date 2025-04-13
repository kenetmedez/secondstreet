import { client } from "@/sanity/lib/client";
import {  NextResponse } from "next/server";
import { POSTS_QUERY } from "../query";

export async function GET() {
  try {
    const documents = await client.fetch(POSTS_QUERY);

    console.log("docs", documents)
    return NextResponse.json({ documents });
  } catch (error) {
    const message =
    error instanceof Error ? error.message : "Unknown server error";
  return NextResponse.json({ message }, { status: 500 });
  }
}
