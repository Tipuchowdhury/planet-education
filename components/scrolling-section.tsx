"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ScrollingSction() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(sectionId);
  };

  return (
    <>
      <div className="w-full bg-navy-900/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex overflow-x-auto no-scrollbar space-x-6 sm:justify-center">
            <Button
              className={`whitespace-nowrap cursor-pointer text-sm font-medium ${
                activeSection === "courses" ? "text-white" : "text-gray-400"
              }`}
              onClick={() => scrollToSection("courses")}
            >
              COURSES
            </Button>

            <Button
              className={`whitespace-nowrap cursor-pointer text-sm font-medium ${
                activeSection === "campuses" ? "text-white" : "text-gray-400"
              }`}
              onClick={() => scrollToSection("campuses")}
            >
              CAMPUSES
            </Button>

            <Button
              className={`whitespace-nowrap cursor-pointer text-sm font-medium ${
                activeSection === "partner-institutions"
                  ? "text-white"
                  : "text-gray-400"
              }`}
              onClick={() => scrollToSection("partner-institutions")}
            >
              PARTNER INSTITUTIONS
            </Button>

            <Button
              className={`whitespace-nowrap cursor-pointer text-sm font-medium ${
                activeSection === "student-testimonials"
                  ? "text-white"
                  : "text-gray-400"
              }`}
              onClick={() => scrollToSection("student-testimonials")}
            >
              STUDENT TESTIMONIALS
            </Button>

            <Button
              className={`whitespace-nowrap cursor-pointer text-sm font-medium ${
                activeSection === "stories" ? "text-white" : "text-gray-400"
              }`}
              onClick={() => scrollToSection("stories")}
            >
              STORIES
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
