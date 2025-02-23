"use client"
import { useState,useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  // Save messages to local storage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("chatMessages", JSON.stringify(messages));
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

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#F0FDF4] p-6">
      <Card className="w-full max-w-2xl shadow-lg border border-[#A7F3D0] bg-white">
        <CardHeader>
          <CardTitle className="text-[#166534] text-center">Generate SEO for your websites</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96 overflow-y-auto p-4 bg-[#ECFDF5] border border-[#A7F3D0] rounded-lg">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 p-2 rounded-lg ${msg.role === "user" ? "bg-[#D1FAE5] text-right" : "bg-[#A7F3D0] text-left"}`}>
                <p className="text-gray-700">{msg.content}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            <Input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-[#ECFDF5] border border-[#A7F3D0] flex-1"
            />
            <Button onClick={sendMessage} className="bg-[#16A34A] text-white hover:bg-[#166534]" disabled={loading}>
              {loading ? "Thinking..." : "Send"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
