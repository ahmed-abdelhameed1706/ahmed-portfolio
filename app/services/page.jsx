"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Backend Development",
    desc: "Expert in building robust and scalable backend systems using Node.js, Express, and MongoDB.",
    href: "",
  },
  {
    num: "02",
    title: "API Development",
    desc: "Proficient in designing and implementing RESTful APIs with comprehensive documentation.",
    href: "",
  },
  {
    num: "03",
    title: "Database Management",
    desc: "Experienced in working with SQL and NoSQL databases, ensuring data integrity and performance optimization.",
    href: "",
  },
  {
    num: "04",
    title: "DevOps & Deployment",
    desc: "Skilled in deploying applications and managing CI/CD pipelines for continuous integration and delivery.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 1.6,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px] text-white"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-1 flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline group-hover:text-outline-hover text-transparent select-none transition-all duration-300">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-300 flex items-center justify-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-300">
                {service.title}
              </h2>
              <p className="text-white/60">{service.desc}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
