"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Play } from "lucide-react";

export function WhatWillYouStudy() {
  return (
    <section id="courses" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="relative">
            <div className="aspect-square overflow-hidden border-white/20">
              <Image
                src="/study.png"
                alt="Design and typography workspace showing creative materials"
                width={500}
                height={400}
                className="w-100 h-100 lg:w-[90%] lg:h-[85%] object-cover  rounded-lg"
              />
            </div>
          </div>

          <div className="space-y-6 lg:mt-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              WHAT WILL YOU
              <br />
              <span className="text-white">STUDY?</span>
            </h2>

            <p className="text-1xl text-gray-300 leading-relaxed">
              If you join Victoria College of Arts and Design, you can expect
              the highest calibre of teaching, cutting-edge facilities, and
              exceptional industry connections, which will help to prepare you
              for a rewarding career in the creative and tech industries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-secondary cursor-pointer hover:bg-secondary/90 text-background px-6 py-2 text-md font-semibold"
              >
                View Courses
              </Button>

              <Button
                size="lg"
                className=" text-secondary cursor-pointer px-6 py-2 text-md font-semibold border-1 border-secondary"
              >
                Download Prospectus
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative">
              <div className="text-6xl lg:text-8xl text-white/20 font-serif absolute -top-8 -left-4 lg:-left-8">
                "
              </div>

              <blockquote className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                A World where{" "}
                <span className="text-cyan-400">EVERYONE has</span> the{" "}
                <span className="text-cyan-400">opportunity</span> to fulfil
                their <span className="text-white">potential</span>
              </blockquote>

              <div className="text-6xl lg:text-8xl text-white/20 font-serif absolute -bottom-8 -right-4 lg:-right-8">
                "
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between space-y-6 px-4">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/course.png"
                alt="Students collaborating around computer showing Digital Marketing content"
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <Button
                  size="icon"
                  className="w-16 h-16 rounded-full bg-gray-300 hover:bg-gray-400 text-navy-900"
                >
                  <Play className="w-6 h-6 ml-1" />
                </Button>
              </div>
            </div>

            <div className="flex justify-center sm:justify-end mt-[-40px] sm:mt-[-80px] z-30">
              <div className="bg-[#061665] rounded-lg p-6 w-full max-w-[450px]">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight text-center sm:text-left">
                    There's Still Time
                    <br />
                    to Apply for
                    <br />
                    <span className="text-cyan-400">September 2025</span>
                  </h3>

                  <Button
                    className="bg-cyan-400 hover:bg-cyan-500 text-navy-900 px-6 py-2 font-medium w-full sm:w-auto"
                    onClick={() =>
                      document
                        .getElementById("courses")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    View Courses
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
