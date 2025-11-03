import Link from "next/link"
import {FaGithub,FaLinkedin,FaFacebook,FaWhatsapp} from "react-icons/fa"

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Ayonspoiler" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/syed-md-shadman-alam-493991268/",
  },
  { icon: <FaFacebook />, path: "https://www.facebook.com/shadmanalam.ayon" },
  { icon: <FaWhatsapp />, path: "https://web.whatsapp.com/send?phone=8801723486580" },
];

const Socials = ({containerStyles,iconStyles}) => {
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
}

export default Socials