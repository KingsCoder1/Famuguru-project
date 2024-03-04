import React from "react";
import Header from "./Header";
import { Link } from "react-scroll";
import logo from "../Famuguru Project/Famuguru_logo.jpg";
import { MdDoubleArrow } from "react-icons/md";
import Bckgrnd_Vid from "../Famuguru Project/Bckgrnd-vid.mp4";

const Intro = () => {
  return (
    <div
      name="home"
      className=" justify-center items-center text-center place-content-center w-full h-full"
    >
      <header className=" fixed top-0 w-screen z-50">
        <Header />
      </header>

      <div>
        <video
          src={Bckgrnd_Vid}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className=" absolute inset-0 w-full h-full object-cover"
        />

        <div>
          <div className=" flex h-screen backdrop-blur-sm justify-center items-center text-center place-content-center pl-5">
            <span className=" justify-center items-center text-center text-yellow-400 backdrop-blur-sm lg:w-1/4 md:w-1/4">
              <p className=" justify-center text-center">
                <span className="text-3xl font-Dancing font-thin">B</span>ring
                your fashion fantasies to reality at{" "}
                <span className="text-3xl font-Dancing">
                  Famuguru Fashion World.
                </span>
              </p>
              <br />
              <p className=" justify-center text-center">
                Feed your eyes with unique designs from our store
              </p>

              <div className="pl-2 my-4 bg-gradient-to-l from-purple-800 to-purple-500 justify-between items-center w-16 ml-2">
                <Link
                  activeClass="active"
                  to="services"
                  smooth={true}
                  duration={300}
                >
                  <button className="flex justify-center items-center">
                    More
                    <MdDoubleArrow
                      size={30}
                      className="hover:rotate-90 duration-200"
                    />
                  </button>
                </Link>
              </div>
            </span>

            <img
              src={logo}
              alt="Logo"
              className=" lg:w-1/4 sm:w-1/2 h-3/4 w-[-5]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
