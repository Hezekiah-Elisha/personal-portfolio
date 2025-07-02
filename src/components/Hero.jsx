import { ArrowBigDownDash, Globe, MapPinHouse } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import LoadingAnimation from "./LoadingAnimation";

export default function Hero() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 font-space-mono">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-1">
          <Image
            src="/me.jpg"
            alt="me"
            width={500}
            height={500}
            className="rounded-full border-accent border-8 shadow-2xl"
          />
        </div>
        <div className="flex-1 text-center md:text-left space-y-5 md:space-y-8">
          {/* <h1 className="text-3xl font-bold items-center flex justify-center md:justify-start w-full">
            <Globe className="inline-block mr-2" />
            About Me
          </h1> */}
          <h2 className="text-3xl font-bold">Hey, I&apos;m Hezekiah Elisha</h2>
          <div>
            <MapPinHouse className="inline-block mr-2" />
            <span className="text-sm">Nairobi, Kenya</span>
          </div>
          <p className="text-sm w-full">
            I&apos;m a Software Engineer From Nairobi, Kenya. I have a passion
            for building web and mobile applications, and exploring new
            technologies. My journey in software development began with a
            curiosity about how things work, and it has since evolved into a
            full-fledged career path. I enjoy tackling complex problems and
            finding elegant solutions through code.
          </p>

          <div className="align-bottom backdrop-blur-xl p-4 rounded-lg bg-white/30 flex flex-col space-y-2">
            <h2 className="text-3xl">My Mission</h2>
            <p>
              My mission is to create impactful software that enhances user
              experiences and solves real-world problems. I believe in the power
              of technology to transform lives and communities, and I strive to
              contribute positively to the tech ecosystem.
            </p>
            <p className="italic">
              I can assure you that I am very coachable and I work very hard(and
              smart)
            </p>
          </div>
          <Button>
            <ArrowBigDownDash className="mr-2" />
            <span>Download My Resume</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
