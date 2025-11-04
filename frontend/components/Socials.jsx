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
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Detect iOS devices
      const iOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;

      // Detect mobile devices (including iOS and Android)
      const mobile = /iPhone|iPad|iPod|Android/i.test(userAgent);

      setIsIOS(iOS);
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Handle clicks for apps that might not be installed
  const handleSocialClick = (e, appUrl, webUrl) => {
    if (isMobile) {
      e.preventDefault();

      // Try to open the app
      window.location.href = appUrl;

      // Fallback to web version if app doesn't open (after 2 seconds)
      const timeout = setTimeout(() => {
        window.location.href = webUrl;
      }, 2000);

      // Clear timeout if page is hidden (app opened successfully)
      const handleVisibilityChange = () => {
        if (document.hidden) {
          clearTimeout(timeout);
        }
      };

      document.addEventListener("visibilitychange", handleVisibilityChange);

      // Cleanup
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
      icon: <FaGithub />,
      path: "https://github.com/Ayonspoiler",
      isSimpleLink: true,
    },
    {
      icon: <FaLinkedin />,
      appUrl: isIOS
        ? "linkedin://in/syed-md-shadman-alam-493991268"
        : "linkedin://in/syed-md-shadman-alam-493991268",
      webUrl: "https://www.linkedin.com/in/syed-md-shadman-alam-493991268/",
      path: isMobile
        ? "linkedin://in/syed-md-shadman-alam-493991268"
        : "https://www.linkedin.com/in/syed-md-shadman-alam-493991268/",
      isSimpleLink: false,
    },
    {
      icon: <FaFacebook />,
      appUrl: isIOS
        ? "fb://profile/100015304697499"
        : "fb://profile/100015304697499",
      webUrl: "https://www.facebook.com/shadmanalam.ayon",
      path: isMobile
        ? "fb://profile/100015304697499"
        : "https://www.facebook.com/shadmanalam.ayon",
      isSimpleLink: false,
    },
    {
      icon: <FaWhatsapp />,
      appUrl: isIOS
        ? "whatsapp://send?phone=8801723486580"
        : "whatsapp://send?phone=8801723486580",
      webUrl: "https://wa.me/8801723486580",
      path: isMobile
        ? "whatsapp://send?phone=8801723486580"
        : "https://web.whatsapp.com/send?phone=8801723486580",
      isSimpleLink: false,
    },
    {
      icon: <FaEnvelope />,
      appUrl: "mailto:ayon4052@gmail.com",
      webUrl:
        "https://mail.google.com/mail/?view=cm&fs=1&to=ayon4052@gmail.com",
      path: "mailto:ayon4052@gmail.com",
      isSimpleLink: false,
      isEmail: true,
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
          onClick={
            !item.isSimpleLink && isMobile
              ? (e) => handleSocialClick(e, item.appUrl, item.webUrl)
              : item.isEmail && !isMobile
              ? (e) => {
                  e.preventDefault();
                  window.open(item.webUrl, "_blank", "noopener,noreferrer");
                }
              : undefined
          }
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
