import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

// List of allowed topics
const ALLOWED_TOPICS = [
  "website development",
  "SEO",
  "seo",
  "web design",
  "frontend",
  "backend",
  "UI/UX",
  "web performance",
  "html",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "server optimization",
  "database",
  "web security",
  "website",
];

function isValidQuery(query: string): boolean {
  return ALLOWED_TOPICS.some((topic) => query.toLowerCase().includes(topic));
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
    }

    const userMessage = messages[messages.length - 1].content;

    // Validate user query
    if (!isValidQuery(userMessage)) {
      return NextResponse.json({
        content: "⚠️ I can only assist with website-related topics like SEO, frontend, backend, and web design.",
      });
    }

    // Call Gemini API
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(userMessage);
    const responseText = result.response.text();

    return NextResponse.json({ content: responseText});
  } catch (error) {
    console.error("Error generating response:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
