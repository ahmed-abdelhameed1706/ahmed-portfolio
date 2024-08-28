"use client";

import { title } from "process";
import { FaNodeJs, FaDatabase, FaServer, FaNetworkWired } from "react-icons/fa";
import { SiMongodb, SiExpress, SiPostman, SiLinux } from "react-icons/si";

const about = {
  title: "About Me",
  description:
    "I am a dedicated and skilled MERN stack developer specializing in backend development. With a strong foundation in full-stack development, DevOps, data structures, and algorithms, I am passionate about building robust and scalable applications. I have extensive experience in API development, database management, and continuous integration and delivery.",
  info: [
    {
      name: "Name",
      value: "Ahmed Abd ElHameed",
    },
    {
      name: "Phone",
      value: "(+20) 100 7888 028",
    },
    {
      name: "Experience",
      value: "1 Year",
    },
    {
      name: "Nationality",
      value: "Egyptian",
    },
    {
      name: "Freelance",
      value: "Available",
    },
    {
      name: "Languages",
      value: "Arabic, English",
    },
    {
      name: "Email",
      value: "ahmed.abdelhameed1706@gmail.com",
    },
  ],
};

const experience = {
  icon: "/assets/badge.svg",
  title: "My Experience",
  description:
    "I specialize in building and deploying MERN stack web applications. I have experience in API development, database management, and server management, with proficiency in Node.js, Express.js, MongoDB, and other backend technologies.",
  items: [
    {
      company: "ChatMK",
      position: "Fullstack Software Engineer",
      duration: "May 2024",
    },
    {
      company: "Ijar",
      position: "Fullstack Software Engineer",
      duration: "Dec 2023 - Apr 2024",
    },
    {
      company: "Lyft (Job Simulation)",
      position: "Back-end Software Engineer",
      duration: "Sep 2023",
    },
    {
      company: "J.P. Morgan (Job Simulation)",
      position: "Back-end Software Engineer",
      duration: "Aug 2023",
    },
  ],
};

const education = {
  icon: "/assets/cap.svg",
  title: "My Education",
  description:
    "I hold a Bachelor's degree in Accounting from Future Academy and completed a 14-month software engineering scholarship at Holberton School with the ALX Scholarship Program. I have a strong foundation in software engineering, full-stack development, data structures, and algorithms.",
  items: [
    {
      institution: "Holberton School",
      degree: "Certificate in Software Engineering",
      duration: "14 months",
    },
    {
      institution: "Educative.io",
      degree: "Backend Development with Node.js",
      duration: "2023 - 2024",
    },
    {
      institution: "Frontend Masters",
      degree: "Front-end Development",
      duration: "2023 - 2024",
    },
    {
      institution: "HackerRank",
      degree: "Javascript fundamentals",
      duration: "2023 - 2024",
    },
    {
      institution: "Future Academy",
      degree: "Bachelor's Degree in Accounting",
      duration: "2017 - 2021",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I have experience in backend development, API development, database management, and server management. I am proficient in Node.js, Express.js, MongoDB, and other backend technologies. I also have experience in DevOps, continuous integration and delivery, and cloud computing.",
  items: [
    {
      name: "Node.js",
      icon: <FaNodeJs />,
    },
    {
      name: "Database Management",
      icon: <FaDatabase />,
    },
    {
      name: "Server Management",
      icon: <FaServer />,
    },
    {
      name: "Networking",
      icon: <FaNetworkWired />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
    },
    {
      name: "API Development",
      icon: <SiPostman />,
    },
    {
      name: "Linux",
      icon: <SiLinux />,
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.6, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.items.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>{skill.name}</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4 flex-wrap"
                    >
                      <span className="text-white/60 text-md">{item.name}</span>
                      <span className="text-lg">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
