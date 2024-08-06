import Image from "next/image";
import React from "react";
import FadeInSection from "./FadeInSection";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-800 text-stone-300 min-h-screen flex flex-col justify-between">
        <FadeInSection>
          <div className="flex justify-center items-center pt-20">
            <Image
              src="/images/logowhite.png"
              height={280}
              width={280}
              alt=""
            />
          </div>
        </FadeInSection>

        <div className="pl-4 flex justify-evenly items-center md:space-x-4">
          <div className="flex-shrink-0 bg-stone-50 text-stone-800 leading-tight pl-4 md:ml-10">
            <Image
              src="/images/access.png"
              width={35}
              height={180}
              alt="Access Image"
            />
          </div>
          <div className="flex flex-col space-y-2 justify-center pr-4 md:pr-10">
            <span className="block">Japanese School Moriyama</span>
            <span className="block">Amsterdam 1014ZP</span>
            <span className="block">Tel 0614813044</span>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="border border-stone-200 p-4">Contact Here</button>
        </div>
        <div className="flex justify-center items-center text-sm p-2">
          <span>©MORIYAMA</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
