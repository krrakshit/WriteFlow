import React from 'react';
import { Zap, FileText, Search,History, Star, Globe, Shield } from 'lucide-react';
import Link from 'next/link';

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Header */}
      <header className="border-b border-[#1a1a1a] p-4 fixed w-full bg-[#0A0A0A] z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-[#3b82f6]" />
            <h1 className="text-xl font-semibold">WriteFlow</h1>
          </div>
          <Link href="/dashboard">
          <button className="px-4 py-2 bg-[#3b82f6] text-white rounded-lg hover:bg-[#2563eb] transition-colors">
            Get Started
          </button>
          </Link>
        </div>
      </header>

      <section className="pt-32 pb-20 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            AI-Powered Website Content Generator
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Create SEO-optimized, high-quality content effortlessly with  AI.
          </p>
          <Link href="/dashboard">
          
          <button className="px-8 py-4 bg-[#3b82f6] text-white rounded-lg text-lg font-medium hover:bg-[#2563eb] transition-colors">
            Get Started
          </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose WriteFlow?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FileText, title: "AI-Powered Content", desc: "Generate high-quality content instantly." },
              { icon: Search, title: "SEO Optimization", desc: "Boost rankings with AI-driven keyword suggestions." },
              { icon: History, title: "Auto-Save & History", desc: "Never lose progress with auto-save features." },
              { icon: Star, title: "Freemium Model", desc: "Free tier with premium AI features." },
              { icon: Shield, title: "Plagiarism Checker", desc: "Ensure originality with AI-powered scanning." },
              { icon: Globe, title: "Multi-Language Support", desc: "Generate content in multiple languages." }
            ].map((feature, index) => (
              <div key={index} className="bg-[#1a1a1a] p-6 rounded-xl">
                <feature.icon className="w-10 h-10 text-[#3b82f6] mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "This tool saved me hours of content writing!",
              "SEO scores improved instantly!",
              "Best AI content tool out there!",
              "Multi-language support is a game changer!"
            ].map((quote, index) => (
              <div key={index} className="bg-[#1a1a1a] p-6 rounded-xl">
                <p className="text-gray-300">{quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#0A0A0A] border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Start Creating with AI Today!</h2>
          <p className="text-xl text-gray-400 mb-8">Join thousands of creators and businesses using Writeflow</p>
          <Link href="/dashboard">
          <button className="px-8 py-4 bg-[#3b82f6] text-white rounded-lg text-lg font-medium hover:bg-[#2563eb] transition-colors">
            Get Started for Free
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;