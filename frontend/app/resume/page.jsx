"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiCplusplus } from "react-icons/si";

// about data

const about = {
  title: "About me",
  description:
    "A passionate and proactive Software Engineering student with a strong foundation in full-stack development. I specialize in building dynamic web applications using modern technologies like React, Spring Boot, and Node.js, with experience in creating real-time systems and machine learning solutions. A quick learner and problem-solver, I enjoy tackling technical challenges and building efficient, scalable software",
  info: [
    {
      fieldname: "Name",
      fieldValue: "Syed Md Shadman Alam",
    },
    {
      fieldname: "Phone",
      fieldValue: "+880 1723486580",
    },
    {
      fieldname: "Experience",
      fieldValue: "1 Years",
    },
    {
      fieldname: "Nationality",
      fieldValue: "Bangladeshi",
    },
    {
      fieldname: "Email",
      fieldValue: "ayon4052@gmail.com",
    },
  ],
};

const experience = {
  icon: "assets/resume/badge.svg",
  title: "My experience",
  description:
    "A dedicated Software Engineering student with over a year of hands-on experience in full-stack development, gained through building complex university projects and a professional internship. I have successfully developed and deployed real-world applications, including e-commerce platforms and real-time chat systems, using technologies like React, Spring Boot, and Node.js. Passionate about transforming ideas into functional and efficient software solutions.",

    items:[
      {
        company: "Bangladesh ICT & Innovation Network",
        position: "Software Developer Intern",
        duration: "Sept 2025 - Jan 2026",
 }
    ]

};
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "My academic journey and continuous learning through specialized courses and certifications.",

  items: [
    {
      institution: "Islamic University of Technology",
      degree: "Bachelor of Science in Software Engineering",
      duration: "Aug 2022 – Oct 2026 (Expected)",
    },
    {
      institution: "Rajuk Uttara Model College",
      degree: "Higher Secondary Certificate (HSC)",
      duration: "2019 – 2021",
    },
    {
      institution: "Rajuk Uttara Model College",
      degree: "Secondary School Certificate (SSC)",
      duration: "2017 – 2019",
    },
    {
      institution: "Programming Hero",
      degree: "Complete Web Development Course",
      duration: "June 2024",
    },
    {
      institution: "Udemy",
      degree: "Fundamentals of Machine Learning",
      duration: "Aug 2024",
    },
    {
      institution: "Udemy",
      degree: "Java Spring Framework 6 with Spring Boot 3",
      duration: "Mar 2025",
    },
  ],
};
const skills = {
  title: "My Skills",
  description:
    "Full-stack developer skilled in modern web technologies including React, Next.js, and Spring Boot. Experienced in building scalable microservices architecture, REST APIs, and real-time applications using Node.js/Express.js. Proficient in backend development with Java Spring Boot, Node.js, and multiple programming languages (Java, JavaScript, Python, C++). Strong problem-solving skills with C++ and interest in competitive programming. Skilled in database management (MySQL, MongoDB, PostgreSQL) and machine learning with data analysis, predictive modeling using Python libraries.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <SiCplusplus />,
      name: "C++",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaDatabase />,
      name: "SQL",
    },
  ],
};

import {Tabs,TabsContent,TabsList,TabsTrigger} from "@/components/ui/tabs"
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import {motion,animate} from "framer-motion";
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <Tabs
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px] w-full max-w-7xl mx-auto px-4 "
      >
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About me</TabsTrigger>
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
              <ScrollArea className="h-[480px]">
                <ul className="flex justify-center lg:justify-start flex-col gap-2 mt-8">
                  {experience.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329]  min-h-[184px] py-8 px-10 rounded-xl flex flex-col justify-center lg:items-start gap-2 w-full max-w-[500px] mx-auto lg:mx-0"
                      >
                        <span className="text-accent text-center lg:text-left">
                          {item.duration}
                        </span>
                        <h3 className="text-xl text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3 justify-center lg:justify-start w-full">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent flex-shrink-0"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    );
                  })}
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
              <ScrollArea className="h-[480px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329]  min-h-[184px] py-8 px-10 rounded-xl flex flex-col justify-center lg:items-start gap-2 w-full max-w-[500px] mx-auto lg:mx-0"
                      >
                        <span className="text-accent text-center lg:text-left">
                          {item.duration}
                        </span>
                        <h3 className="text-xl text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3 justify-center lg:justify-start w-full">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent flex-shrink-0"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          {/* Skills */}
          <TabsContent value="skills" className="w-full h-full">
           <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{skills.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
              {
                skills.skillList.map((skill,index)=>{
                  return(
                    <li key={index} className="">
                       <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                        
                            </TooltipProvider>
                    </li>
                  )
                })
              }
            </ul>
           </div>
          </TabsContent>
          {/* about */}
          <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[670px] mx-auto xl:mx-0">
                {about.info.map((info, index) => {
                  return (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-2">
                      <span className="text-white/60">{info.fieldname}: </span>
                      <span className="text-xl">{info.fieldValue}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </motion.div>
  );
};

export default Resume;
