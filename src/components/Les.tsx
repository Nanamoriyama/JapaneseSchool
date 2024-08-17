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
          </h2>
        </div>
      </div>
      <div className="mt-20 mb-10 flex justify-center">
        <Link href="/contact">
          <button className="border border-stone-500 p-4 hover:border-stone-200 hover:bg-stone-900 hover:text-stone-200">
            Gratis Trial Les
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
          className="relative block text-center mb-4 md:mb-0"
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
          className="relative block text-center mb-4 md:mb-0"
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

        <Link href="/private" className="relative block text-center">
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
