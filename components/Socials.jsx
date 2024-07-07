import Link from "next/link";
import path from "path";

import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const socials = [
  {
    icon: FaGithub,
    path: "https://github.com/ahmed-abdelhameed1706",
  },
  {
    icon: FaLinkedinIn,
    path: "https://www.linkedin.com/in/ahmed-abdelhameed1706/",
  },
  {
    icon: FaTwitter,
    path: "https://x.com/AJVHz",
  },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
          >
            <item.icon />
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
