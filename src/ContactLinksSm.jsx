import React from "react";
import { FaFacebook, FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

const ContactLinksSm = () => {
  const Social_links = [
    {
      index: 1,
      tag: "Facebook",
      display_icon: <FaFacebook size={40} />,
      href: "https://facebook.com/FaMuguru",
      styles: " bg-blue-800 text-white hover:bg-blue-900",
      BStyles: " shadow-blue-800",
    },
    {
      index: 2,
      tag: "Whatsapp",
      display_icon: <FaWhatsapp size={40} />,
      href: "https://api.whatsapp.com/send?phone=+2347055450998",
      styles: " bg-green-700 text-white hover:bg-green-800",
      BStyles: " shadow-green-800",
    },
    {
      index: 3,
      tag: "Instagram",
      display_icon: <FaInstagram size={40} />,
      href: "https://www.instagram.com/famugurufashion_empire?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      styles: " bg-white text-red-700 hover:bg-slate-200",
      BStyles: " shadow-white",
    },
    {
      index: 4,
      tag: "Tiktok",
      display_icon: <FaTiktok size={40} />,
      href: "https://vm.tiktok.com/ZMMNW7sEQ/",
      styles: " bg-black text-white ",
      BStyles: " shadow-purple-700",
    },
  ];
  return (
    <div
      name="socials"
      className=" md:hidden justify-center text-center items-center top-0 h-3/4 bg-gradient-to-b from-black via-black to-gray-900"
    >
      <h2 className=" pt-2">
        <span className=" bg-gradient-to-r from-purple-800 to-purple-500 text-yellow-400">
          Socials
        </span>
      </h2>
      <p className=" text-yellow-400 py-3">Follow us on social platforms</p>
      <div className=" grid grid-cols-2 gap-1 px-2 justify-center items-center">
        {Social_links.map(
          ({ index, tag, display_icon, href, styles, BStyles }) => (
            <div
              key={index}
              className={
                " bg-gray-900 shadow-md my-2 mx-2 justify-center items-center" +
                BStyles
              }
            >
              <a
                href={href}
                className={
                  "flex flex-col gap-1 justify-center items-center hover:rounded-lg hover:scale-95 duration-300 " +
                  styles
                }
              >
                {" "}
                {display_icon} {tag}
              </a>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ContactLinksSm;
