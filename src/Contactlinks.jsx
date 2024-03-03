import React from "react";
import { FaFacebook, FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

const Contactlinks = () => {
  const Cont_links = [
    {
      id: 1,
      child: (
        <>
          Facebook
          <FaFacebook />
        </>
      ),
      href: "https://facebook.com/FaMuguru",
      style: "rounded-tr-md bg-blue-800 text-white",
    },
    {
      id: 2,
      child: (
        <>
          Whatsapp
          <FaWhatsapp />
        </>
      ),
      href: "https://wa.me/+2347055450998",
      style: " bg-green-700 text-white",
    },
    {
      id: 3,
      child: (
        <>
          Instagram
          <FaInstagram />
        </>
      ),
      href: "https://www.instagram.com/famugurufashion_empire?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      style: " bg-white text-red-700",
    },
    {
      id: 4,
      child: (
        <>
          Tik - tok
          <FaTiktok />
        </>
      ),
      href: "mailto:famugurufashionworld@gmail.com",
      style: "rounded-br-md bg-black text-white shadow-sm shadow-purple-700 ",
    },
  ];
  return (
    <div name="socials">
      <ul className=" hidden md:flex flex-col bottom-[30%] left-0 fixed ">
        {Cont_links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={
              "flex ml-[-85px] hover:ml-[-10px]  hover:rounded-md duration-300" +
              " " +
              style
            }
          >
            {" "}
            <a
              href={href}
              className=" flex items-center w-fit h-10 px-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contactlinks;
