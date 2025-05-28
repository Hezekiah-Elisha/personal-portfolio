import { Globe } from "lucide-react";

export default function page() {
  return (
    <section className="font-space-mono">
      <div className="container mx-auto outline rounded-4xl shadow-2xl  bg-[url('/me.jpg')] bg-cover bg-no-repeat flex flex-row justify-between">
        <div className="flex flex-col justify-center flex-1/2 bg-linear-to-r from-black to-transparent rounded-l-4xl text-left space-y-2 p-10">
          <h1 className="text-3xl font-bold items-center flex">
            <Globe className="inline-block mr-2" />
            About Me
          </h1>
          <h2 className="text-3xl font-bold">Hey, I&apos;m Hezekiah Elisha</h2>
          <p className="text-sm w-full">
            I&apos;m an aspiring Software Engineer From Nairobi, Kenya. I have a
            passion for building web applications and exploring new
            technologies. My journey in software development began with a
            curiosity about how things work, and it has since evolved into a
            full-fledged career path. I enjoy tackling complex problems and
            finding elegant solutions through code.
          </p>
          <br />
          <br />
          <div className="align-bottom backdrop-blur-xl p-4 rounded-lg bg-white/30 flex flex-col space-y-2">
            <h2 className="text-3xl">My Mission</h2>
            <p>
              My mission is to create impactful software that enhances user
              experiences and solves real-world problems. I believe in the power
              of technology to transform lives and communities, and I strive to
              contribute positively to the tech ecosystem.
            </p>
            <p className="italic">Make Software, Great Again!</p>
          </div>
        </div>
        <div className="flex-1/2"></div>
      </div>
    </section>
  );
}
