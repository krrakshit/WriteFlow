"use client"
import React, { useState, useEffect,useRef } from 'react';
import { Zap } from 'lucide-react';
import Link from 'next/link';

function App() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("chatMessages", JSON.stringify(messages));
      scrollToBottom()
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/generate-content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await response.json();
      setMessages([...newMessages, { role: "gemini", content: data.content }]);
    } catch (error) {
      console.error("Error generating response:", error);
    }
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-[#1a1a1a] p-4">
        <div className="max-w-4xl mx-auto flex items-center gap-2">
          <Zap className="w-6 h-6 text-[#3b82f6]" />
          <Link href="/">
          <h1 className="text-xl font-semibold">WriteFlow</h1>
          </Link>
        </div>
      </header>

      {/* Main chat area */}
      <main className="flex-1 overflow-hidden flex flex-col max-w-4xl w-full mx-auto p-4">
        <div className="flex-1 overflow-y-auto space-y-6 pb-6">
          {messages.length === 0 ? (
            <div className="text-center text-gray-500 mt-8">
              <h2 className="text-2xl font-bold mb-2">Generate SEO for your websites</h2>
              <p className="text-sm">Start a conversation to get AI-powered SEO recommendations</p>
            </div>
          ) : (
            messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-4 ${
                    msg.role === "user"
                      ? "bg-[#3b82f6] text-white"
                      : "bg-[#1a1a1a] text-gray-100"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Input area */}
        <div className="mt-auto border-t border-[#1a1a1a] pt-4">
          <div className="flex gap-2 items-end">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 bg-[#1a1a1a] text-white rounded-lg p-3 min-h-[44px] max-h-[200px] resize-none focus:outline-none focus:ring-1 focus:ring-[#3b82f6]"
              style={{ height: '44px' }}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                loading || !input.trim()
                  ? "bg-[#1a1a1a] text-gray-500 cursor-not-allowed"
                  : "bg-[#3b82f6] text-white hover:bg-[#2563eb]"
              }`}
            >
              {loading ? "Thinking..." : "Send"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;