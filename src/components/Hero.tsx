"use client";
import React, { useState, useEffect } from "react";
import Logo from "./Logo";

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // スクロール位置に応じて白から text-red-800 への色変化を設定
  const textColor = `rgb(${Math.max(255 - scrollY * 0.5, 153)}, ${Math.max(
    255 - scrollY * 0.89,
    27
  )}, ${Math.max(255 - scrollY * 0.89, 27)})`; // 最初は白で、スクロールによって赤に変化

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
          playsInline
        />
      </div>

      {/* Fixed Logo */}
      <div
        className="fixed top-0 left-1/2 transform -translate-x-1/2 z-30 pt-14 bg-transparent"
        style={{ width: "fit-content" }}
      >
        <Logo />
      </div>

      {/* Text above video */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pt-32 md:pt-48">
        <h1
          className="font-serif text-xl font-medium md:text-6xl"
          style={{ color: textColor }} // 最初は白で、スクロールで色が変わる
        >
          Japans Cursus in Amsterdam
        </h1>
      </div>

      {/* Text below video */}
      <div className="relative z-10 flex items-center justify-center pt-9 md:pt-16 mb-8">
        <h2 className="font-serif ralewaytext-xl font-medium text-stone-700 md:text-5xl">
          楽しく日本語を勉強しよう！
        </h2>
      </div>
    </div>
  );
};

export default Hero;
