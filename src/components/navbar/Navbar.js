import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { navLinksdata } from "../../constants";
import { useTypewriter } from "react-simple-typewriter";
import { kisbg } from "../../assets";

const Navbar = () => {
  const [text] = useTypewriter({
    words: ["Hey Buddy", "Welcome All"],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 2000,
  });
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-24 px-10 top-0 z-50 bg-transparent mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div className="flex items-center gap-4 justify-center">
        <img
          src={kisbg}
          className="w-[50px] h-[50px] object-contain mr-2 rounded-full"
          alt="logo"
        />
        <div className="font-bold sm:text-xl lg:text-3xl">Portfolio</div>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-16" src="/image2.png" alt="logo" />
                <p className="text-sm text-gray-400 mt-2">
                  I'm Hari Prasad J, Dedicated Software Engineer Trainee with a
                  B.E. in Computer Science.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/HariPrasad1302"
                    className="bannerIcon"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hari-prasad-3ba737230/"
                    className="bannerIcon"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://www.instagram.com/hari13_official/"
                    className="bannerIcon"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
