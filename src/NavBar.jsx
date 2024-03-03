import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "services",
    },
    {
      id: 3,
      link: "socials",
    },
    {
      id: 4,
      link: "about",
    },
  ];

  return (
    <>
      <div className=" text-1xl mr-2 text-gray-400">
        <ul className="gap-3 hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="py-3 cursor-pointer capitalize font-medium hover:scale-110 duration-200"
            >
              <Link activeClass="active" to={link} smooth={true} duration={300}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-400 py-1 md:hidden"
        >
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>

        <div>
          {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-17 mt-10 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-600 inset-0 z-50">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="py-3 cursor-pointer capitalize font-medium hover:scale-110 duration-200"
                >
                  <Link
                    activeClass="active"
                    to={link}
                    smooth={true}
                    duration={300}
                    onClick={() => setNav(!nav)}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
