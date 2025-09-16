import { Button } from "@/components/ui/button";
import Image from "next/image";

export function StoriesSection() {
  return (
    <section id="stories" className="py-20 px-6 lg:px-8 mb-[100px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-16 font-sans">
          STORIES
        </h2>

        <div className="space-y-16">
          <div className="grid lg:grid-cols-2 gap-8 items-left">
            <div className="relative">
              <Image
                src="/story-1.png"
                alt="VCAD Induction at Canary Wharf Campus"
                width={400}
                height={300}
                className="w-full h-[500px] object-contain rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight font-sans">
                INDUCTION IN VCAD CANARY WHARF CAMPUS
              </h3>
              <p className="text-1xl text-white/90 leading-relaxed">
                If you join Victoria College of Arts and Design, you can expect
                the highest calibre of teaching, cutting-edge facilities, and
                exceptional industry connections, which will help to prepare you
                for a rewarding career in the creative and tech industries.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-secondary cursor-pointer hover:bg-secondary/90 text-background px-6 py-2 text-md font-semibold">
                  Read article
                </Button>
                <Button className="text-secondary cursor-pointer px-6 py-2 text-md font-semibold border-1 border-secondary">
                  View full gallery
                </Button>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-left">
            <div className="relative">
              <Image
                src="/story-2.png"
                alt="Student sketching on tablet for portfolio"
                width={400}
                height={300}
                className="w-full h-[500px] object-contain rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight font-sans">
                BE READY FOR APPLYING! FIVE TIPS TO{" "}
                <span className="text-[#E018E0]">BUILD YOUR PORTFOLIO</span>
              </h3>
              <p className="text-1xl text-white/90 leading-relaxed">
                If you join Victoria College of Arts and Design, you can expect
                the highest calibre of teaching, cutting-edge facilities, and
                exceptional industry connections, which will help to prepare you
                for a rewarding career in the creative and tech industries.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="secondary"
                  className="bg-cyan-400 cursor-pointer hover:bg-cyan-500 text-black font-semibold px-6 py-2"
                >
                  Read article
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
