import React, { useState } from "react";
import logo from "../assets/logojea.png";

const Header = () => {
    const [burger, setBurger] = useState(false);

    const handleClick = () => {
        setBurger(false);
      };

      const links = [
        { name: "RESSOURCES", link: "/ressources" },
        { name: "OUTILS", link: "/outils" },
        { name: "BLOG", link: "/blog" },
      ];

  return (
    <header className="h-16 w-full shadow-md ">
      <div className="mx-8 items-center justify-between md:flex">
        <div className="cursor-pointer flex items-center  text-white">
          <img src={logo} alt="logo jea" className="h-16" />
          <p className="text-base ml-2 md:text-xl">JEA</p>
        </div>
        <div
          onClick={() => setBurger(!burger)}
          className="text-3xl absolute right-8 top-4 text-white cursor-pointer md:hidden"
        >
          <ion-icon name={burger ? "close-circle-sharp" : "grid-outline"}></ion-icon>
        </div>

        <ul className={`bg-dark-p pb-12 pl-12 pt-12 absolute text-center z-[-1] w-full left-0 transition-all duration-300 ease-in ${
            burger ? "top-10 opacity-100" : "top-[-490px]"
          } opacitiy-0 md:opacity-100 md:z-auto md:w-auto md:static md:flex md:items-center md:pt-0 md:pb-0 md:pl-0`}
        >
            
            <li className="my-7 md:ml-8 md:my-0">
              <a
                href="/ressources"
                className="text-white flex items-center hover:bg-slate-blue duration-300"
                onClick={handleClick}
                
              >
                  <ion-icon name="newspaper-sharp"></ion-icon>
                <p className="ml-2">RESSOURCES</p>
                
              </a>
            </li>

            <li className="my-7 md:ml-8 md:my-0">
              <a
                href="/outils"
                className="text-white flex items-center hover: duration-300"
                onClick={handleClick}
                
              >
                  <ion-icon name="hammer-sharp"></ion-icon>
                  <p className="ml-2">OUTILS</p>
              </a>
            </li>

            <li className="my-7 w-1/3 md:ml-8 md:my-0 bg-gradient-to-r from-pink-p to-blue-p py-2 px-4 rounded-xl">
              <a
                href="/blog"
                className="text-white flex items-center hover: duration-300"
                onClick={handleClick}
                
              >
                  <ion-icon name="paper-plane-sharp"></ion-icon>
                  <p className="ml-2">BLOG</p>
              </a>
            </li>
          

        </ul>
      </div>
    </header>
  );
};

export default Header;
