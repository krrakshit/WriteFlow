import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F0FDF4] text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-20 bg-[#D1FAE5] text-gray-900">
        <h1 className="text-4xl font-bold">AI-Powered Website Content Generator</h1>
        <p className="mt-4 text-lg">Create SEO-optimized, high-quality content effortlessly with ContentCraft AI.</p>
        <Link href="/signup">
        <Button className="mt-6 bg-white text-[#16A34A] hover:bg-gray-200">Get Started</Button>
        </Link>
      </section>

      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10 text-[#166534]">Why Choose WriteFlow?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "AI-Powered Content", desc: "Generate high-quality content instantly." },
            { title: "SEO Optimization", desc: "Boost rankings with AI-driven keyword suggestions." },
            { title: "Custom Templates", desc: "Use pre-built templates for different content types." },
            { title: "Export & Publish", desc: "Save or publish directly to your CMS." },
            { title: "Auto-Save & History", desc: "Never lose progress with auto-save features." },
            { title: "Freemium Model", desc: "Free tier with premium AI features." },
            { title: "Plagiarism Checker", desc: "Ensure originality with AI-powered scanning." },
            { title: "WordPress Integration", desc: "Seamlessly publish to WordPress and other CMS platforms." },
            { title: "Multi-Language Support", desc: "Generate content in multiple languages." }
          ].map((feature, index) => (
            <Card key={index} className="shadow-lg border border-[#A7F3D0] bg-white">
              <CardHeader>
                <CardTitle className="text-[#166534]">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>{feature.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#ECFDF5] text-center">
        <h2 className="text-3xl font-semibold mb-10 text-[#166534]">Choose Your Plan</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {[{ plan: "Free", price: "$0/mo", features: ["Limited content", "Basic AI tools"] },
            { plan: "Pro", price: "$2/mo", features: ["Unlimited content", "SEO analysis", "Export to CMS"] },
            { plan: "Enterprise", price: "$3/mo", features: ["Team collaboration", "Custom AI models", "Dedicated support"] }
          ].map((tier, index) => (
            <Card key={index} className="w-80 shadow-lg border border-[#A7F3D0] bg-white">
              <CardHeader>
                <CardTitle className="text-[#166534]">{tier.plan}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold">{tier.price}</p>
                <ul className="mt-4">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="text-gray-700">• {feature}</li>
                  ))}
                </ul>
                <Button className="mt-4 w-full bg-[#16A34A] text-white hover:bg-[#166534]">Choose {tier.plan}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10 text-[#166534]">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["This tool saved me hours of content writing!", "SEO scores improved instantly!", "Best AI content tool out there!", "Publishing to WordPress has never been easier!", "Multi-language support is a game changer!"].map((quote, index) => (
            <Card key={index} className="shadow-lg p-6 border border-[#A7F3D0] bg-white">
              <CardContent>{quote}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call-to-Action (CTA) */}
      <section className="text-center py-20 bg-[#D1FAE5] text-gray-900">
        <h2 className="text-3xl font-bold">Start Creating with AI Today!</h2>
        <p className="mt-4 text-lg">Join thousands of creators and businesses using Writeflow</p>
        <Button className="mt-6 bg-white text-[#16A34A] hover:bg-gray-200">Get Started for Free</Button>
      </section>
    </div>
  );
}
