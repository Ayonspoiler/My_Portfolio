"use client";

import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkedAlt,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import { useEffect, useState } from "react";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+880 1723486580",
    href: "tel:+8801723486580",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ayon4052@gmail.com",
    href: "mailto:ayon4052@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Dhaka, Bangladesh",
    href: null,
  },
];

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const iOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
      const mobile = /iPhone|iPad|iPod|Android/i.test(userAgent);

      setIsIOS(iOS);
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  const handleSocialClick = (e, appUrl, webUrl) => {
    if (isMobile) {
      e.preventDefault();
      window.location.href = appUrl;

      const timeout = setTimeout(() => {
        window.location.href = webUrl;
      }, 2000);

      const handleVisibilityChange = () => {
        if (document.hidden) {
          clearTimeout(timeout);
        }
      };

      document.addEventListener("visibilitychange", handleVisibilityChange);

      setTimeout(() => {
        document.removeEventListener(
          "visibilitychange",
          handleVisibilityChange
        );
      }, 3000);
    }
  };

  const socials = [
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      appUrl: "linkedin://profile/syed-md-shadman-alam-493991268",
      webUrl: "https://www.linkedin.com/in/syed-md-shadman-alam-493991268/",
      path: isMobile
        ? "linkedin://profile/syed-md-shadman-alam-493991268"
        : "https://www.linkedin.com/in/syed-md-shadman-alam-493991268/",
      isSimpleLink: false,
    },
    {
      icon: <FaFacebook />,
      name: "Facebook",
      appUrl: "fb://profile/100015304697499",
      webUrl: "https://www.facebook.com/shadmanalam.ayon",
      path: isMobile
        ? "fb://profile/100015304697499"
        : "https://www.facebook.com/shadmanalam.ayon",
      isSimpleLink: false,
    },
    {
      icon: <FaWhatsapp />,
      name: "WhatsApp",
      appUrl: "whatsapp://send?phone=8801723486580",
      webUrl: "https://wa.me/8801723486580",
      path: isMobile
        ? "whatsapp://send?phone=8801723486580"
        : "https://web.whatsapp.com/send?phone=8801723486580",
      isSimpleLink: false,
    },
    {
      icon: <FaEnvelope />,
      name: "Email",
      appUrl: "mailto:ayon4052@gmail.com",
      webUrl:
        "https://mail.google.com/mail/?view=cm&fs=1&to=ayon4052@gmail.com",
      path: "mailto:ayon4052@gmail.com",
      isSimpleLink: false,
      isEmail: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const socialVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -180 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 18,
      },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.8, ease: "easeOut" },
      }}
      className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#08ff99]">
              Get In Touch
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400/80 max-w-2xl mx-auto font-light">
            Let's connect and create something amazing together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Contact Information
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#08ff99] to-transparent rounded-full" />
            </motion.div>

            {info.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  x: 8,
                  transition: { type: "spring", stiffness: 400 },
                }}
                className="group"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="flex items-center gap-5 p-6 rounded-2xl transition-all duration-500 relative overflow-hidden"
                    style={{
                      background: "rgba(28, 28, 34, 0.4)",
                      border: "1px solid rgba(8, 255, 153, 0.1)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(8, 255, 153, 0.1) 0%, rgba(8, 255, 153, 0.05) 100%)",
                      }}
                    />
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                      className="relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#1c1c22]/80 to-[#2a2a32]/80 text-[#08ff99] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(8,255,153,0.3)] transition-all duration-500"
                      style={{
                        border: "1px solid rgba(8, 255, 153, 0.2)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <div className="text-2xl md:text-3xl">{item.icon}</div>
                    </motion.div>
                    <div className="flex-1 relative z-10">
                      <p className="text-gray-500/80 text-xs md:text-sm mb-1 tracking-wide uppercase">
                        {item.title}
                      </p>
                      <h3 className="text-white text-base md:text-lg font-semibold group-hover:text-[#08ff99] transition-colors duration-300">
                        {item.description}
                      </h3>
                    </div>
                    <motion.div
                      className="absolute top-0 right-0 w-0 h-0 group-hover:w-full group-hover:h-full opacity-0 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(8, 255, 153, 0.1) 0%, transparent 70%)",
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </a>
                ) : (
                  <div
                    className="flex items-center gap-5 p-6 rounded-2xl transition-all duration-500 relative overflow-hidden"
                    style={{
                      background: "rgba(28, 28, 34, 0.4)",
                      border: "1px solid rgba(8, 255, 153, 0.1)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                      className="relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#1c1c22]/80 to-[#2a2a32]/80 text-[#08ff99] rounded-xl flex items-center justify-center shadow-lg"
                      style={{
                        border: "1px solid rgba(8, 255, 153, 0.2)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <div className="text-2xl md:text-3xl">{item.icon}</div>
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-gray-500/80 text-xs md:text-sm mb-1 tracking-wide uppercase">
                        {item.title}
                      </p>
                      <h3 className="text-white text-base md:text-lg font-semibold">
                        {item.description}
                      </h3>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Connect With Me
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#08ff99] to-transparent rounded-full" />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-400/80 text-base md:text-lg mb-12 font-light"
            >
              Find me on these platforms and let's start a conversation
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialVariants}
                  whileHover={{ scale: 1.08, y: -8 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={
                    !social.isSimpleLink && isMobile
                      ? (e) =>
                          handleSocialClick(e, social.appUrl, social.webUrl)
                      : social.isEmail && !isMobile
                      ? (e) => {
                          e.preventDefault();
                          window.open(
                            social.webUrl,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }
                      : undefined
                  }
                  className="group relative overflow-hidden p-8 rounded-2xl transition-all duration-500 h-full flex flex-col items-center justify-center"
                  style={{
                    background: "rgba(28, 28, 34, 0.4)",
                    border: "1px solid rgba(8, 255, 153, 0.15)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(8, 255, 153, 0.15) 0%, rgba(8, 255, 153, 0.05) 100%)",
                    }}
                  />

                  <motion.div
                    whileHover={{ rotate: [0, -12, 12, -8, 0], scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl text-[#08ff99] mb-4 drop-shadow-lg relative z-10 group-hover:drop-shadow-[0_0_20px_rgba(8,255,153,0.6)] transition-all duration-300"
                  >
                    {social.icon}
                  </motion.div>

                  <h3 className="text-xl md:text-2xl font-bold text-white relative z-10 text-center group-hover:text-[#08ff99] transition-colors duration-300">
                    {social.name}
                  </h3>

                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle at center, rgba(8, 255, 153, 0.1) 0%, transparent 70%)",
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.a>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="p-8 rounded-2xl text-center relative overflow-hidden"
              style={{
                background: "rgba(28, 28, 34, 0.4)",
                border: "1px solid rgba(8, 255, 153, 0.2)",
                backdropFilter: "blur(10px)",
              }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(8, 255, 153, 0.1) 0%, rgba(8, 255, 153, 0.05) 100%)",
                }}
              />
              <p className="text-gray-300/90 text-sm md:text-base relative z-10">
                Available for freelance opportunities and collaborations. Let's
                build something great together!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
