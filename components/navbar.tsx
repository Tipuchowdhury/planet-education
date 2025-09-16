"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full max-w-7xl mx-auto mt-8 px-6 lg:px-0 md:px-0">
      <div className="flex items-center justify-between">
        <Image src="/logo.png" alt="Logo" width={150} height={50} />

        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {isMenuOpen && (
        <div className="mt-4 pb-4 border-t border-white/20">
          <div className="flex flex-col space-y-4 pt-4">
            <a
              href="#programs"
              className="text-white  transition-colors text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </a>
            <a
              href="#about"
              className="text-white  transition-colors text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#admissions"
              className="text-white  transition-colors text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Admissions
            </a>
            <a
              href="#contact"
              className="text-white transition-colors text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="#apply"
              className="text-white transition-colors text-lg font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
