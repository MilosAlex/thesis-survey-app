import { Answer } from "@/types";
import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, answers } = body;

  if (!email || !Array.isArray(answers)) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const insertData = answers.map((answer: Answer) => ({
    email,
    chunk_id: answer.chunk_id,
    source: answer.source,
    user_guess: answer.user_guess,
    book_title: answer.book_title,
    time_ms: answer.time_ms,
  }));

  const { error } = await supabase.from("responses").insert(insertData);

  if (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to insert" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
