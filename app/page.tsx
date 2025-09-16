import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { WhatWillYouStudy } from "@/components/what-will-you-study";
import { Scroll } from "lucide-react";
import { ScrollingSction } from "@/components/scrolling-section";
import { StudentTestimonials } from "@/components/students-testimonial";
import { StoriesSection } from "@/components/stories";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ScrollingSction />
      <WhatWillYouStudy />
      <StudentTestimonials />
      <StoriesSection />
    </main>
  );
}
