"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setFadeIn(true); // メニューが開かれたときにフェードインを開始
    } else {
      setFadeIn(false); // メニューが閉じられたときにフェードインをリセット
    }
  }, [isOpen]);

  return (
    <div className="font-raleway fixed top-0 left-0 w-full z-30 bg-transparent">
      <div className="p-4 flex items-center justify-between">
        {/* ブランド名やロゴのプレースホルダー */}
        <div className="text-white font-bold text-lg">{/* Logo */}</div>
        <div>
          <button onClick={toggleMenu}>
            <HiOutlineBars3CenterLeft
              size={34}
              className="text-red-800 text-3xl"
            />
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          className={`fixed inset-0 bg-red-900 bg-opacity-90 z-40 flex flex-col items-center justify-center transition-opacity duration-1000 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            &times;
          </button>
          <Link
            href="/"
            className={`text-white text-2xl font-thin mb-8 transition-all duration-500 hover:text-3xl ${
              fadeIn ? "opacity-100" : "opacity-0"
            }`}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/#about"
            className={`text-white text-2xl font-thin mb-8 transition-all duration-500 hover:text-3xl ${
              fadeIn ? "opacity-100" : "opacity-0"
            }`}
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/#les"
            className={`text-white text-2xl transition-all mb-8 duration-500 hover:text-3xl ${
              fadeIn ? "opacity-100" : "opacity-0"
            }`}
            onClick={toggleMenu}
          >
            Cursussen Japans
          </Link>
          <Link
            href="/contact"
            className={`text-white text-2xl mb-8 transition-all duration-500 hover:text-3xl ${
              fadeIn ? "opacity-100" : "opacity-0"
            }`}
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
