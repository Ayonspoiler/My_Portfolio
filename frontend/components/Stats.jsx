"use client";
import CountUp from "react-countup";

const stats = [
  {
    num: 1,
    text: "Years of Experience",
  },
  {
    num: 10,
    text: "Project Completed",
  },
  {
    num: 8,
    text: "Technologies Learned",
  },
  {
    num: 500,
    text: "Code Commits",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 max-w-[80vw] mx-auto xl:flex xl:max-w-none xl:gap-6">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start xl:flex-row xl:text-left"
              >
                <CountUp
                  end={stat.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-semibold"
                />

                <p className="text-sm xl:text-base leading-snug text-white/80 max-w-[120px]">
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
