"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export default function Signin() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Signin Data:", form);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F0FDF4]">
      <Card className="w-96 shadow-lg border border-[#A7F3D0] bg-white">
        <CardHeader>
          <CardTitle className="text-[#166534] text-center">Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
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
              Sign In
            </Button>
          </form>
          <p className="mt-4 text-center text-gray-700">
            Dont have an account? <a href="/signup" className="text-[#16A34A] hover:underline">Sign up</a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
