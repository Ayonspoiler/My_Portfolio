"use client";

import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Full-Stack Development",
    description:
      "Building responsive web applications using React.js, Next.js, Spring Boot, MongoDB, PostgreSQL, and MySQL with end-to-end functionality.",
    href: "",
  },
  {
    num: "02",
    title: "Microservices Architecture",
    description:
      "Designing and developing scalable microservices systems using Spring Boot with proper API communication and service decomposition.",
    href: "",
  },
  {
    num: "03",
    title: "Real-Time Applications",
    description:
      "Creating live chat platforms with WebSocket integration, instant messaging, notifications, and status updates.",
    href: "",
  },
  {
    num: "04",
    title: "Machine Learning Solutions",
    description:
      "Building predictive models for classification, regression, and clustering using Python, Pandas, and Scikit-learn.",
    href: "",
  },
];

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
const Services = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            const isActive = activeService === index;

            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group cursor-pointer"
                onClick={() => setActiveService(isActive ? null : index)}
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div
                    className={`text-5xl font-extrabold text-outline text-transparent transition-all duration-500 ${
                      isActive ? "text-accent" : "group-hover:text-accent"
                    }`}
                  >
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className={`w-[70px] h-[70px] rounded-full flex justify-center items-center transition-all duration-500 ${
                      isActive
                        ? "bg-accent hover:-rotate-45"
                        : "bg-white group-hover:bg-accent hover:-rotate-45"
                    }`}
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2
                  className={`text-[42px] font-bold leading-none transition-all duration-500 ${
                    isActive
                      ? "text-accent"
                      : "text-white group-hover:text-accent"
                  }`}
                >
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
