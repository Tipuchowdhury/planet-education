import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center px-6 lg:px-8 py-12">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-1 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-tight text-balance">
              WELCOME
              <br />
              TO VCAD
            </h1>

            <p className="text-1xl text-white/90 leading-relaxed max-w-lg">
              Our team at Victoria College of Arts and Design is passionate
              about creating innovative projects and generating new ideas. We
              work with a variety of experts and esteemed companies using a
              collaborative approach. Located in London's Design District, we
              have valuable connections within our industry. Search our latest
              courses.
            </p>

            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-background px-6 py-2 text-md font-semibold cursor-pointer"
            >
              Apply Now
            </Button>
          </div>
          <div className="mt-0 lg:mt-[-150px]">
            <Image
              src="/hero_image.png"
              alt="Hero Collage"
              width={600}
              height={800}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
