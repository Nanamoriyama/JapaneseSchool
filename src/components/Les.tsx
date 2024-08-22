"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import FadeInSection from "./FadeInSection";

const Les = () => {
  return (
    <div className="font-raleway p-8 ">
      <div className="flex flex-col md:flex-row md:justify-evenly mb-8 md:pl-10 md:pr-10 md:mt-10">
        <FadeInSection>
          <div className="flex">
            <Image
              src="/images/map2.png"
              width={550}
              height={450}
              alt="map"
              className="w-full h-auto md:w-[600px] md:h-[500px]"
            />
          </div>
        </FadeInSection>

        <div className="flex flex-col justify-center items-center md:w-1/2 pt-8 md:pt-0">
          <h1 className="font-serif text-2xl md:text-3xl">
            Japans Cursussen Volgen
          </h1>
          <h2 className="pt-6 text-center">
            Wij bieden alle Japanse lessen online aan <br />
            en op locatie in Amsterdam.
            <br />
            <br />
            Ben je dol op anime, of wil je gewoon wat Japans leren voordat je op
            reis gaat? <br />
            Iedereen is welkom!
          </h2>
        </div>
      </div>
      <div className="mt-20 mb-10 flex justify-center">
        <Link href="/contact">
          <button className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-mono font-medium tracking-tighter text-black border border-stone-700 bg-white group">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-red-500 rounded-full group-hover:w-56 group-hover:h-56 opacity-30"></span>
            <span className="absolute inset-0 w-full h-full duration-300 ease-in-out bg-gradient-to-r from-red-600 to-red-800 opacity-50 -translate-x-full group-hover:translate-x-0"></span>
            <h3 className="relative">Gratis Trial Les</h3>
          </button>
        </Link>
      </div>
      <div className="text-center mb-8 md:mt-18 md:pt-20">
        <h3 className="p-2">
          Wij bieden lessen op maat aan, <br />
          van beginners tot het verbeteren van je conversatie, aangepast aan elk
          individu.
        </h3>
      </div>

      <div className="flex flex-col md:flex-row justify-around items-center gap-4">
        <Link
          href="/beginner"
          className="relative block text-center mb-4 md:mb-0 transform transition-transform duration-300 ease-in-out hover:-translate-y-2"
        >
          <Image
            src="/images/totoro.jpeg"
            alt="Beginner Class"
            width={400}
            height={400}
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (min-width: 992px) 25vw"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2">
            <p className="text-lg font-bold text-opacity-75">Beginner</p>
          </div>
        </Link>

        <Link
          href="/intermediate"
          className="relative block text-center mb-4 md:mb-0 transform transition-transform duration-300 ease-in-out hover:-translate-y-2"
        >
          <Image
            src="/images/mononoke.jpg"
            alt="Intermediate Class"
            width={400}
            height={400}
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (min-width: 992px) 25vw"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2">
            <p className="text-lg font-bold text-opacity-75">Intermediate</p>
          </div>
        </Link>

        <Link
          href="/private"
          className="relative block text-center transform transition-transform duration-300 ease-in-out hover:-translate-y-2"
        >
          <Image
            src="/images/howl.jpeg"
            alt="Private Class"
            width={400}
            height={400}
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (min-width: 992px) 25vw"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2">
            <p className="text-lg font-bold text-opacity-75">Private</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Les;
