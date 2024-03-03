import React from "react";
import Tailoring from "./Tailoring";
import Rental from "./Rental";
import Beads from "./Beads";
import Shoes_and_handbags from "./Shoes_and_handbags";
import { useState } from "react";
import Fan_A from "../Famuguru Project/B_with_fan.jpg";
import Fan_B from "../Famuguru Project/B_with_fan2.jpg";
import Fan_C from "../Famuguru Project/B_with_fan3.jpg";
import Outfit_1 from "../Famuguru Project/outfit1.jpg";
import Outfit_2 from "../Famuguru Project/outfit2.jpg";
import Outfit_3 from "../Famuguru Project/outfit3.jpg";
import Outfit_4 from "../Famuguru Project/outfit4.jpg";
import Outfit_5 from "../Famuguru Project/outfit5.jpg";
import Outfit_6 from "../Famuguru Project/outfit6.jpg";
import Outfit_7 from "../Famuguru Project/BlackLace.jpg";
import Outfit_8 from "../Famuguru Project/BlackLace2.jpg";
import Outfit_9 from "../Famuguru Project/BlackLace3.jpg";
import Gown_A from "../Famuguru Project/Wedding_gown.jpg";
import Gown_B from "../Famuguru Project/Wedding_gown2.jpg";
import Gown_C from "../Famuguru Project/Wedding_gown3.jpg";
import Bead_1 from "../Famuguru Project/Bead1.jpg";
import Bead_2 from "../Famuguru Project/Bead2.jpg";
import Bead_3 from "../Famuguru Project/Bead3.jpg";
import Bead_4 from "../Famuguru Project/Bead4.jpg";
import Bead_5 from "../Famuguru Project/Bead5.jpg";
import Bead_6 from "../Famuguru Project/Bead6.jpg";
import Bead_7 from "../Famuguru Project/Bead7.jpg";
import Bead_8 from "../Famuguru Project/Bead8.jpg";
import Bead_9 from "../Famuguru Project/Bead9.jpg";
import Shoe_1 from "../Famuguru Project/Heels1.jpg";
import Shoe_2 from "../Famuguru Project/Heels2.jpeg";
import Shoe_3 from "../Famuguru Project/Heels3.jpeg";
import Shoe_4 from "../Famuguru Project/Heels4.jpeg";
import Shoe_5 from "../Famuguru Project/Heels5.jpeg";
import Bag_1 from "../Famuguru Project/Bag1.jpeg";
import Bag_2 from "../Famuguru Project/Bag2.jpeg";
import Bag_3 from "../Famuguru Project/Bag3.jpeg";
import Bag_4 from "../Famuguru Project/Bag4.jpeg";

const Services = () => {
  const [TailoringMore, setTailoringMore] = useState(false);
  const [RentalMore, setRentalMore] = useState(false);
  const [BeadsMore, setBeadsMore] = useState(false);
  const [Shoes_n_HandbagsMore, setShoes_n_HandbagsMore] = useState(false);

  const Tailoring_links = [
    {
      index: 1,
      tag: "Green Native",
      display_photo: [
        <img src={Fan_A} alt="Fan_A" />,
        <img src={Fan_B} alt="Fan_B" />,
        <img src={Fan_C} alt="Fan_C" />,
      ],
    },
    {
      index: 2,
      tag: "Black Ivory",
      display_photo: [
        <img src={Outfit_1} alt="Outfit_1" />,
        <img src={Outfit_2} alt="Outfit_2" />,
        <img src={Outfit_3} alt="Outfit_3" />,
      ],
    },
    {
      index: 3,
      tag: "Ash Sleek",
      display_photo: [
        <img src={Outfit_4} alt="Outfit_4" />,
        <img src={Outfit_5} alt="Outfit_5" />,
        <img src={Outfit_6} alt="Outfit_6" />,
      ],
    },
    {
      index: 4,
      tag: "Black Diamond",
      display_photo: [
        <img src={Outfit_7} alt="Outfit_7" />,
        <img src={Outfit_8} alt="Outfit_8" />,
        <img src={Outfit_9} alt="Outfit_9" />,
      ],
    },
  ];

  const Beads_links = [
    {
      index: 1,
      tag: "By-01",
      display_photo: <img src={Bead_1} alt="Bead-1" />,
    },
    {
      index: 2,
      tag: "Bg-02",
      display_photo: <img src={Bead_2} alt="Bead-2" />,
    },
    {
      index: 3,
      tag: "Rb-03",
      display_photo: <img src={Bead_3} alt="Bead-3" />,
    },
    {
      index: 4,
      tag: "Ab-04",
      display_photo: <img src={Bead_4} alt="Bag-4" />,
    },
    {
      index: 5,
      tag: "Sp-05",
      display_photo: <img src={Bead_5} alt="Bead-5" />,
    },
    {
      index: 6,
      tag: "Ps-06",
      display_photo: <img src={Bead_6} alt="Bead-6" />,
    },
    {
      index: 7,
      tag: "Sb-07",
      display_photo: <img src={Bead_7} alt="Bead-7" />,
    },
    {
      index: 8,
      tag: "Ay-07",
      display_photo: <img src={Bead_8} alt="Bead-8" />,
    },
    {
      index: 9,
      tag: "Bp-09",
      display_photo: <img src={Bead_9} alt="Bead-9" />,
    },
  ];

  const Shoes_links = [
    {
      index: 1,
      tag: "Ss-00",
      display_photo: <img src={Shoe_1} alt="Shoe-01" />,
    },
    {
      index: 2,
      tag: "Wb-01",
      display_photo: <img src={Bag_1} alt="Bag-01" />,
    },
    {
      index: 3,
      tag: "Th-02",
      display_photo: <img src={Shoe_2} alt="Shoe-02" />,
    },
    {
      index: 4,
      tag: "Bb-03",
      display_photo: <img src={Bag_2} alt="Bag-02" />,
    },
    {
      index: 5,
      tag: "Bs-04",
      display_photo: <img src={Shoe_3} alt="Shoe-03" />,
    },
    {
      index: 6,
      tag: "Ab-05",
      display_photo: <img src={Bag_3} alt="Bag-03" />,
    },
    {
      index: 7,
      tag: "Wh-06",
      display_photo: <img src={Shoe_4} alt="Shoe-04" />,
    },
    {
      index: 8,
      tag: "Bl-07",
      display_photo: <img src={Bag_4} alt="Bag-04" />,
    },
    {
      index: 9,
      tag: "Tb-08",
      display_photo: <img src={Shoe_5} alt="Shoe-05" />,
    },
  ];
  return (
    <div
      name="services"
      className=" px-20 justify-items-center items-center bg-gradient-to-b from-gray-800 to-black"
    >
      <header className=" justify-center text-2xl text-yellow-200 text-center catitalize rounded-0.5xl">
        <span className=" bg-gradient-to-l from-purple-950 to-purple-600">
          <span className="text-3xl font-Dancing">S</span>ervices
        </span>
      </header>
      <div className=" lg:grid md:grid grid-cols-2 grid-rows-2 justify-center gap-3">
        <div className=" my-2 text-bold shadow-lg p-6 mb-6 backdrop-blur-lg ring-1 ring-yellow-200 px-10 py-5 justify-center items-center lg:w-full">
          <span className=" justify-center text-center text-gray-400 text-1xl">
            <header>Tailoring</header>
            <span className=" bg-gray-800 text-1xl">
              <button onClick={() => setTailoringMore(true)}>Show all</button>
            </span>
          </span>

          {!TailoringMore && <Tailoring />}
          {TailoringMore && (
            <div>
              <div className=" bg-gradient-to-b from-black to-gray-800 w-full">
                <header className=" justify-center items-center text-center">
                  {" "}
                  <button
                    className=" bg-slate-400 text-gray-900"
                    onClick={() => setTailoringMore(!TailoringMore)}
                  >
                    Show less
                  </button>
                  <span className=" text-yellow-200 mt-3">
                    <h4>
                      Check out our unique designs inspired and tailored from us
                    </h4>
                  </span>
                </header>
                <div className="gap-3">
                  {Tailoring_links.map(({ index, tag, display_photo }) => (
                    <div key={index} className=" pb-1">
                      <header className=" justify-center text-center backdrop-blur-lg ring-1 ring-yellow-200 text-yellow-200">
                        {tag}
                      </header>
                      <span className=" justify-center grid grid-cols-3 grid-rows-1 w-full">
                        {display_photo}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className=" my-2 text-bold shadow-lg p-6 mb-6 backdrop-blur-lg ring-1 ring-yellow-200 px-10 py-5 justify-center items-center lg:w-full">
          <span className=" justify-center text-center text-gray-400 text-1xl">
            <header>Rental</header>
            <span className=" bg-gray-800 text-1xl">
              <button onClick={() => setRentalMore(true)}>Show all</button>
            </span>
          </span>
          {!RentalMore && <Rental />}
          {RentalMore && (
            <div>
              <div className=" bg-gradient-to-b from-black to-gray-800 w-full">
                <header className=" justify-center items-center text-center">
                  {" "}
                  <button
                    className=" bg-slate-400 text-gray-900"
                    onClick={() => setRentalMore(!RentalMore)}
                  >
                    Show less
                  </button>
                  <span className=" text-yellow-200 mt-3">
                    <h4>All of these are available for rent fron our store</h4>
                  </span>
                </header>
                <div className=" gap-3">
                  <div>
                    <header className=" justify-center text-center backdrop-blur-lg ring-1 ring-yellow-200 text-yellow-200">
                      Splendid Wedding Gown
                    </header>
                    <span className=" justify-center grid grid-cols-3 grid-rows-1 w-full">
                      <img src={Gown_A} alt="Gown_A" />
                      <img src={Gown_B} alt="GOWN_B" />
                      <img src={Gown_C} alt="GOWN_C" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className=" my-2 text-bold shadow-lg p-6 mb-6 backdrop-blur-lg ring-1 ring-yellow-200 px-10 py-5 justify-center items-center lg:w-full">
          <span className=" justify-center text-center text-gray-400 text-1xl">
            <header>Beads/Jewelries</header>
            <span className=" bg-gray-800 text-1xl">
              <button onClick={() => setBeadsMore(true)}>Show all</button>
            </span>
          </span>
          {!BeadsMore && <Beads />}
          {BeadsMore && (
            <div>
              <div className=" bg-gradient-to-b from-black to-gray-800 w-full md:h-screen overflow-scroll">
                <header className=" justify-center items-center text-center">
                  {" "}
                  <button
                    className=" bg-slate-400 text-gray-900"
                    onClick={() => setBeadsMore(!BeadsMore)}
                  >
                    Show less
                  </button>
                  <span className=" text-yellow-200 mt-3">
                    <h4>Beautiful Jewelries up for grab at our store</h4>
                  </span>
                </header>
                <div className=" gap-1 grid grid-cols-2">
                  {Beads_links.map(({ index, tag, display_photo }) => (
                    <div key={index}>
                      <header className=" justify-center text-center backdrop-blur-lg ring-1 ring-yellow-200 text-yellow-200">
                        {tag}
                      </header>
                      <span className=" justify-center w-full">
                        {display_photo}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className=" mt-2 text-bold shadow-lg p-6 md:mb-6 backdrop-blur-lg ring-1 ring-yellow-200 px-10 py-5 justify-center items-center lg:w-full">
          <span className=" justify-center text-center text-gray-400 text-1xl">
            <header>Shoes and Handbags</header>
            <span className=" bg-gray-800 text-1xl">
              <button onClick={() => setShoes_n_HandbagsMore(true)}>
                Show all
              </button>
            </span>
          </span>
          {!Shoes_n_HandbagsMore && <Shoes_and_handbags />}
          {Shoes_n_HandbagsMore && (
            <div>
              <div className=" bg-gradient-to-b from-black to-gray-800 w-full md:h-screen overflow-scroll">
                <header className=" justify-center items-center text-center">
                  {" "}
                  <button
                    className=" bg-slate-400 text-gray-900"
                    onClick={() =>
                      setShoes_n_HandbagsMore(!Shoes_n_HandbagsMore)
                    }
                  >
                    Show less
                  </button>
                  <span className=" text-yellow-200 mt-3">
                    <h4>
                      These exciting shoes and handbags are available as seen
                    </h4>
                  </span>
                </header>
                <div className=" gap-1 grid grid-cols-2">
                  {Shoes_links.map(({ index, tag, display_photo }) => (
                    <div key={index}>
                      <header className=" justify-center text-center backdrop-blur-lg ring-1 ring-yellow-200 text-yellow-200">
                        {tag}
                      </header>
                      <span className=" justify-center w-full">
                        {display_photo}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
