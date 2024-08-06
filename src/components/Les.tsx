import React from "react";
import Link from "next/link";
import Image from "next/image";
import FadeInSection from "./FadeInSection";

const Les = () => {
  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row md:justify-evenly mb-8">
        <FadeInSection>
          <div className="flex md:w-1/2">
            <Image
              src="/images/map2.png"
              width={550}
              height={450}
              alt="map"
              className=""
            />
          </div>
        </FadeInSection>
        <div className="flex flex-col justify-center items-center md:w-1/2 pt-8 md:pt-0">
          <Image
            src="/images/japaneseclasses.png"
            height={50}
            width={280}
            alt=""
          />
          <p className="pt-6 text-center">
            We offer all Japanese classes on Zoom <br />
            and on location in Amsterdam.
          </p>
        </div>
      </div>

      <div className="text-center mb-8 md:mt-18 md:pt-20">
        <p className="p-2">Please select your level </p>
        <p className="text-xs">
          {" "}
          If you are not sure about your level,
          <br /> we can check together.
        </p>
      </div>
      <FadeInSection>
        <div className="flex flex-col md:flex-row justify-around items-center gap-4">
          {/* Beginner Class */}
          <Link
            href="/beginner"
            className="relative block text-center mb-4 md:mb-0"
          >
            <Image
              src="/images/totoro.jpeg" // 画像パス
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

          {/* Intermediate Class */}
          <Link
            href="/intermediate"
            className="relative block text-center mb-4 md:mb-0"
          >
            <Image
              src="/images/mononoke.jpg" // 画像パス
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

          {/* Private Class */}
          <Link href="/private" className="relative block text-center">
            <Image
              src="/images/howl.jpeg" // 画像パス
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
