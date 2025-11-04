"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { useEffect, useState } from "react";

const Socials = ({ containerStyles, iconStyles }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  const socials = [
    {
      icon: <FaGithub />,
      path: "https://github.com/Ayonspoiler",
    },
    {
      icon: <FaLinkedin />,
      path: isMobile
        ? "linkedin://profile/syed-md-shadman-alam-493991268"
        : "https://www.linkedin.com/in/syed-md-shadman-alam-493991268/",
    },
    {
      icon: <FaFacebook />,
      path: isMobile
        ? "fb://profile/shadmanalam.ayon"
        : "https://www.facebook.com/shadmanalam.ayon",
    },
    {
      icon: <FaWhatsapp />,
      path: isMobile
        ? "whatsapp://send?phone=8801723486580"
        : "https://web.whatsapp.com/send?phone=8801723486580",
    },
    {
      icon: <FaEnvelope />,
      path: isMobile
        ? "mailto:ayon4052@gmail.com"
        : "https://mail.google.com/mail/?view=cm&fs=1&to=ayon4052@gmail.com",
    },
  ];

  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
