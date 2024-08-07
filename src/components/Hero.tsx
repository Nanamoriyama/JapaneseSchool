"use client";
import React from "react";
import Logo from "./Logo";

const Hero: React.FC = () => {
  return (
    <div className="font-raleway relative w-full h-auto overflow-hidden bg-transparent">
      {/* Video */}
      <div className="relative z-0">
        <video
          className="w-full h-96 md:h-full object-cover"
          src="/videos/desktop.mp4"
          autoPlay
          muted
          loop
        />
      </div>

      {/* Fixed Logo */}
      <div
        className="fixed top-0 left-1/2 transform -translate-x-1/2 z-30 pt-14 bg-transparent"
        style={{ width: "fit-content" }}
      >
        <Logo />
      </div>

      {/* Text */}
      <div className="absolute inset-0 flex items-center justify-center pt-10 text-white z-20">
        <h1 className="text-xl font-thin pt-16 md:pt-20 md:mt-8 md:text-4xl">
          Japanese Lessons in Amsterdam
        </h1>
      </div>
    </div>
  );
};

export default Hero;
