"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

import WorkSliderButtons from "@/components/ui/WorkSliderButtons";

const projects = [
  {
    num: "01",
    category: "Full-Stack",
    title: "Ijar",
    description:
      "Ijar simplifies rentals, whether you're sharing your car or need one. If your car's idle and you want extra cash, or you need a ride for the weekend, Ijar connects owners and renters easily, making the process effortless.",
    stack: [
      { name: "Express.js" },
      { name: "React" },
      { name: "MongoDB" },
      { name: "Node.js" },
      { name: "ShadCN" },
      { name: "PaypalAPI" },
      { name: "Tailwind.css" },
    ],
    image: "/assets/ijar1.png",
    live: "https://ijar.tech",
    github: "https://github.com/ahmed-abdelhameed1706/ijar",
  },
  {
    num: "02",
    category: "Full-Stack",
    title: "ChatMK",
    description:
      "A real-time chat application built using the PERN stack (PostgreSQL, Express.js, React, Node.js). This application allows users to communicate in real-time through web sockets.",
    stack: [
      { name: "TypeScript" },
      { name: "Prisma" },
      { name: "PostgreSQL" },
      { name: "Express.js" },
      { name: "Node.js" },
      { name: "React" },
      { name: "Tailwind.css" },
      { name: "Socket.io" },
    ],
    image: "/assets/chatmk1.png",
    live: "https://chat.eng-ahmed.me",
    github: "https://github.com/ahmed-abdelhameed1706/fullstack-chat",
  },
  {
    num: "03",
    category: "Full-Stack",
    title: "VibeMK",
    description:
      "VibeMK allows users to create or join groups specifically for sharing videos. Whether it's reels, clips, or any other type of video content, VibeMK provides a dedicated space for these interactions, ensuring that chat applications remain focused on communication, free from the clutter of video links.",

    stack: [
      { name: "Express.js" },
      { name: "React" },
      { name: "MongoDB" },
      { name: "Node.js" },
      
    ],
    image: "/assets/vibemk.png",
    live: "https://vibemk.eng-ahmed.me",
    github: "https://github.com/ahmed-abdelhameed1706/VibeMK",
  },
];
const Work = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setActiveProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.6, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {activeProject.num}
              </div>
              {/* category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-300 capitalize">
                {activeProject.category} Project
              </h2>
              {/* project description */}
              <p className="text-white/60">{activeProject.description}</p>
              {/* stack */}
              <ul className="flex gap-4 flex-wrap">
                {activeProject.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== activeProject.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* border  */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                <Link
                  href={activeProject.live}
                  target="_blank"
                  className="order-2"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent transition-all duration-300 group-hover:rotate-45" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Project link</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={activeProject.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent transition-all duration-300 " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Project github</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full  bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                buttonStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-300"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
