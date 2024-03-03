import React from "react";
import NavBar from "./NavBar";

function Header() {
  return (
    <>
      <div name="home">
        <div>
          <header className=" top-0 mr-0 flex bg-black justify-between h-25">
            <span className="text-4xl text-yellow-200 font-signature ml-2">
              Famuguru
            </span>
            <NavBar />
          </header>
        </div>
      </div>
    </>
  );
}

export default Header;
