import React from "react";
import { FaLinkedinIn, FaReact, FaGithub, FaInstagram } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFigma,
  SiNextdotjs,
  SiJavascript,
} from "react-icons/si";
import { IoLogoReact } from "react-icons/io5"; // For React Native

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-10 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            href="https://github.com/KishoreNL4"
            className="bannerIcon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kishore-nagarajan-8699051a3/"
            className="bannerIcon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/_vinsmoke_4/?hl=en"
            className="bannerIcon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact /> {/* React */}
          </span>
          <span className="bannerIcon">
            <SiJavascript /> {/* JavaScript */}
          </span>
          <span className="bannerIcon">
            <SiTailwindcss /> {/* Tailwind CSS */}
          </span>
          <span className="bannerIcon">
            <SiFigma /> {/* Figma */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
