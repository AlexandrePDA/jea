import React from "react";
import ordi from "../assets/fuseeordi.png";

const Accueil = () => {
  return (
    <section className="w-screen flex flex-col items-center justify-center max-w-screen-lg m-auto h-screen lg:flex-row relative">
      <span className="bg-pink-p w-32 h-16 rounded-full blur-3xl absolute top-14 left-16"></span>
      <span className="bg-pink-p w-32 h-16 rounded-full blur-3xl absolute bottom-10 right-10"></span>
      <span className="bg-pink-p w-32 h-16 rounded-full blur-3xl absolute top-16 right-10"></span>
      <div className="text-light-p lg:pt-0">
        <h1 className="text-4xl text-center lg:text-left lg:text-7xl">
          <span className="relative"><span className="absolute w-full lg:h-4 h-2 bg-gradient-to-r from-pink-p to-purple-p  rounded-lg bottom-0"></span> Junior</span>, <br/> et alors ?
        </h1>
        <p className="px-6 pt-8 lg:pt-2 lg:px-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus a
          dolore ad dignissimos veritatis odit, illo quos dicta, debitis
          voluptatem quibusdam minima cum. Doloribus quam quasi repellendus eos
          vel similique!
        </p>
      </div>
      <img src={ordi} alt="ordinateur" className="lg:max-w-xl z-10 " />
    </section>
  );
};

export default Accueil;
