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
          <Image
            src="/images/japaneseclasses.png"
            height={50}
            width={280}
            alt="Japanese Classes"
          />
          <p className="pt-6 text-center">
            We offer all Japanese classes on Zoom <br />
            and on location in Amsterdam.
          </p>
        </div>
      </div>
      <div className="mt-20 mb-10 flex justify-center">
        <Link href="/contact">
          <button className="border border-stone-500 p-4 hover:border-stone-200 hover:bg-stone-900 hover:text-stone-200">
            Check Free Trial Lesson
          </button>
        </Link>
      </div>
      <div className="text-center mb-8 md:mt-18 md:pt-20">
        <p className="p-2">Please select your level</p>
        <p className="text-xs">
          If you are not sure about your level, <br /> we can check together.
        </p>
      </div>
      <FadeInSection>
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
      </FadeInSection>
    </div>
  );
};

export default Les;
