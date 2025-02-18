"use client"
import { useState } from "react";

export default function ContentGenerator() {
  const [topic, setTopic] = useState("");
  const [keywords, setKeywords] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");

  const generateContent = async () => {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic, keywords }),
    });
    const data = await response.json();
    setGeneratedContent(data.content);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">AI-Powered Content Generator</h1>
      <input
        type="text"
        placeholder="Enter topic"
        className="w-full p-2 border rounded mb-2"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter keywords (comma separated)"
        className="w-full p-2 border rounded mb-2"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />
      <button
        onClick={generateContent}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Generate Content
      </button>

      {generatedContent && (
        <div className="mt-4 p-4 border rounded">
          <h2 className="text-lg font-semibold">Generated Content:</h2>
          <p>{generatedContent}</p>
        </div>
      )}
    </div>
  );
}
