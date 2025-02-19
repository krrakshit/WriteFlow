"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react"

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Signup Data:", form);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F0FDF4]">
      <Card className="w-96 shadow-lg border border-[#A7F3D0] bg-white">
        <CardHeader>
          <CardTitle className="text-[#166534] text-center">Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-gray-700">Full Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                className="mt-1 bg-[#ECFDF5] border border-[#A7F3D0]"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-gray-700">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="johndoe@example.com"
                value={form.email}
                onChange={handleChange}
                className="mt-1 bg-[#ECFDF5] border border-[#A7F3D0]"
              />
            </div>
            <div>
              <Label htmlFor="password" className="text-gray-700">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="********"
                value={form.password}
                onChange={handleChange}
                className="mt-1 bg-[#ECFDF5] border border-[#A7F3D0]"
              />
            </div>
            
            <Button type="submit" className="w-full bg-[#16A34A] text-white hover:bg-[#166534]">
              Sign Up
            </Button>
          </form>
          <p className="mt-4 text-center text-gray-700">
            Already have an account? <a href="/signin" className="text-[#16A34A] hover:underline">Log in</a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
