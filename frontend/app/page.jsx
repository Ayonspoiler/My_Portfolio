import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Aspiring Software Engineer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">Syed Md Shadman Alam</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              An aspiring software engineer with a passion for turning ideas
              into functional, real-world applications. I enjoy the entire
              process, from solving complex problems to building seamless
              digital experiences that make a difference.
            </p>
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/assets/MY_CV.pdf"
                download="Syed_Md_Shadman_Alam_CV.pdf"
                className="uppercase flex items-center gap-2 border border-accent text-accent hover:bg-accent hover:text-primary rounded-full px-6 py-3 transition-all duration-300"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </a>

              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
