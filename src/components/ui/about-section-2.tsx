"use client";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { Zap, User } from "lucide-react";
import { useRef } from "react";

export default function AboutSection2() {
  const heroRef = useRef<HTMLDivElement>(null);
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 1.5,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: 40,
      opacity: 0,
    },
  };
  const textVariants = {
    visible: (i: number) => ({
      filter: "blur(0px)",
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  };
  return (
    <section id="about" className="py-32 px-4 bg-background text-foreground min-h-screen">
      <div className="max-w-6xl mx-auto" ref={heroRef}>
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Right side - Content */}
          <div className="flex-1">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl sm:text-4xl font-bold flex items-center justify-center gap-2">
                    <User className="text-primary"/>
                    About Me
                </h2>
                <p className="text-muted-foreground mt-2">A little bit about my journey.</p>
            </div>
            <TimelineContent
              as="p"
              animationNum={0}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="sm:text-xl text-lg !leading-[150%] font-normal text-muted-foreground mb-8"
            >
              I am a 3rd year CSE AIML student at Sphoorthy Engineering College. Driven by a passion for building {" "}
              <TimelineContent
                as="span"
                animationNum={1}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="text-primary border-b-2 border-primary/50 border-dotted"
              >
                innovative solutions
              </TimelineContent>
              , I have a strong foundation in both front-end and back-end development. My journey in tech has been fueled by a fascination with {" "}
              <TimelineContent
                as="span"
                animationNum={2}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="text-primary border-b-2 border-primary/50 border-dotted"
              >
                Artificial Intelligence
              </TimelineContent>{" "}
              and its potential to solve real-world problems. I enjoy tackling complex challenges, collaborating with teams, and continuously learning to stay at the forefront of technology.
            </TimelineContent>

            <div className="mt-12 flex gap-2 justify-center">
              <TimelineContent
                as="a"
                animationNum={5}
                href="#projects"
                timelineRef={heroRef}
                customVariants={textVariants}
                className="bg-primary gap-2 font-medium shadow-lg shadow-primary/30 text-primary-foreground h-12 px-6 rounded-full text-sm inline-flex items-center cursor-pointer"
              >
                <Zap fill="currentColor" size={16} />
                View My Work
              </TimelineContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
