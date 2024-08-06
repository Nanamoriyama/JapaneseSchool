"use client";
import React from "react";
import Logo from "./Logo";

interface LoadingScreenProps {
  logoVisible: boolean;
  logoPosition: boolean;
  isVisible: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  logoVisible,
  logoPosition,
  isVisible,
}) => {
  return (
    <div
      className={`fixed inset-0 bg-stone-300 flex items-center justify-center z-50 transition-opacity duration-1500 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`transition-all duration-[3000ms] ease-in-out ${
          logoPosition
            ? "absolute top-0 left-1/2 transform -translate-x-1/2 w-full pt-8"
            : "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-8"
        }`}
        style={{
          opacity: logoVisible ? 1 : 0, // Control logo opacity for fade-in
        }}
      >
        <Logo />
      </div>
    </div>
  );
};

export default LoadingScreen;
