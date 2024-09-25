"use client";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { fetchRepositories } from "../lib/github";

const Stats = () => {
  const [projectsCount, setProjectsCount] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const repositories = await fetchRepositories();
        setProjectsCount(repositories.length - 1);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const stats = [
    {
      num: 2.5,
      text: "Years of Experience",
    },
    {
      num: projectsCount,
      text: "Github Repositories",
    },
    {
      num: 5,
      text: "Technologies Mastered",
    },
    {
      num: 2100,
      text: "Code Commits",
    },
  ];

  return (
    <section className="pt-4 pb-12 xl:pb-0 xl:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            >
              <CountUp
                end={stat.num}
                duration={5}
                delay={2}
                suffix={stat.num >= 2100 ? "+" : ""}
                className="text-4xl xl:text-6xl font-extrabold"
              />

              <p
                className={`${
                  stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
