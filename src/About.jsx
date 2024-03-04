import React from "react";
import About_Photo from "../Famuguru Project/About.jpg";
import { FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <div
      name="about"
      className=" flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-800 via-gray-900 to-black"
    >
      <span className=" w-full justify-center items-center text-center">
        <h2 className=" text-yellow-400 pb-2 pt-8">
          <span className=" bg-gradient-to-r from-purple-800 to-purple-500">
            About
          </span>
        </h2>

        <div className=" flex flex-row justify-center items-center text-center">
          <span className=" justify-center items-center text-center place-content-center md:w-1/4 text-yellow-400">
            Meet the founder of Famuguru Fashion World
            <br />
            Abah O. Blessing
            <p className=" text-sm">
              A talented and certified fashion designer whose concern is to make
              you look good in gorgeous dresses made and designed from our
              store.
            </p>
            For internship, you can send a message to her
            <div className=" h-1/2 justify-center items-center bg-black shadow-md shadow-red-700 my-3 py-5">
              <div className=" justify-center items-center text-center lg:w-3/4 bg-red-700 text-white hover:bg-red-800 hover:rounded-lg duration-300 mx-2">
                <a
                  href="mailto:famugurufashionworld@gmail.com"
                  className=" flex flex-col gap-1 justify-center items-center hover:scale-110 duration-300"
                >
                  <FaEnvelope size={40} /> Send us a message
                </a>
              </div>
            </div>
          </span>
          <img
            src={About_Photo}
            alt="About Photo"
            className=" w-[65%] md:w-1/2 lg:w-1/4"
          />
        </div>
      </span>
    </div>
  );
};

export default About;
