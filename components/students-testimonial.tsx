"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Linkedin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { testimonialsData, type Testimonial } from "../data/testimonials";

export function StudentTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials] = useState<Testimonial[]>(testimonialsData);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + 3
  );
  if (visibleTestimonials.length < 3) {
    visibleTestimonials.push(
      ...testimonials.slice(0, 3 - visibleTestimonials.length)
    );
  }

  return (
    <section
      id="student-testimonials"
      className="py-10 px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            STUDENT
            <br />
            <span className="text-white">TESTIMONIALS</span>
          </h2>
        </div>

        <div className="relative">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-purple-600 border-purple-500 text-white hover:bg-purple-700"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-purple-600 border-purple-500 text-white hover:bg-purple-700"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          <div className="flex justify-center gap-8 lg:gap-12 px-12">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${currentIndex}`}
                className="rotate-[10deg] hover:rotate-0 transition-transform duration-300 ease-in-out"
              >
                <Card className="w-80 h-96 relative overflow-hidden border-2 border-purple-500 bg-transparent group hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                    <div className="flex-1 flex items-center">
                      <blockquote className="text-lg font-bold leading-tight">
                        "{testimonial.quote}"
                      </blockquote>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <p className="font-bold text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-300">
                          {testimonial.course}
                        </p>
                      </div>
                      <div className="flex space-x-3">
                        <a
                          href={testimonial.socialLinks.facebook}
                          className="text-white hover:text-cyan-400 transition-colors"
                          aria-label="Facebook"
                        >
                          <Facebook size={16} />
                        </a>
                        <a
                          href={testimonial.socialLinks.instagram}
                          className="text-white hover:text-cyan-400 transition-colors"
                          aria-label="Instagram"
                        >
                          <Instagram size={16} />
                        </a>
                        <a
                          href={testimonial.socialLinks.linkedin}
                          className="text-white hover:text-cyan-400 transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: testimonials.length - 2 }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-purple-500" : "bg-gray-600"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
