import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Get the latest user message
    const userMessage = messages[messages.length - 1].content;

    // Generate a response
    const result = await model.generateContent(userMessage);
    const responseText = result.response.text();

    return NextResponse.json({ content: responseText });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
