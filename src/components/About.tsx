import Image from "next/image";
import React from "react";
import FadeInSection from "./FadeInSection";

const About = () => {
  return (
    <div className="font-raleway relative mt-8">
      <div className="flex flex-col md:flex-col items-center md:items-start md:w-full">
        <div className="m-8 pt-10 flex justify-center w-full">
          <div className="text-center text-xl">こんにちは。</div>
        </div>
        <div className="relative w-full flex justify-between gap-2">
          <div className="flex flex-col md:w-auto">
            <Image
              src="/images/nanap1.png"
              width={300}
              height={350}
              alt="Nana"
              className="object-left-top mt-6 sm:w-[400px] sm:h-[250px] md:w-[480px] md:h-[330px]"
            />
          </div>
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 pt-8">
            初<br />め<br />ま<br />し<br />て<br />
          </div>
          <div className="hidden md:block absolute right-[40%] transform -translate-x-1/2 pt-16">
            宜<br />し<br />く<br />お<br />願<br />い<br />し<br />ま<br />す
            <br />
          </div>
          <div className="flex flex-col md:w-auto">
            <Image
              src="/images/cat3.png"
              width={200}
              height={200}
              alt="Podu"
              className="mt-32 sm:w-[300px] sm:h-[200px] md:w-[320px] md:h-[280px] md:mt-24 md:pt-6"
            />
          </div>
        </div>
      </div>
      <FadeInSection>
        <div className="mt-6 p-8 md:mt-8 w-full md:w-3/5 md:mx-auto">
          <p className="">
            Hi, I'm Nana from Osaka.
            <br /> I'm so happy that you're interested in Japan! <br />
            For the past seven years, I've been teaching Japanese to students of
            all ages here in the Netherlands. I've learned that everyone has
            their own way of learning and their own pace. That's why I like to
            work closely with my students to find the best way for them to
            learn.
          </p>
          <p className="mt-4 ">
            We can talk together about what you're interested in and how you
            want to study, so the lessons fit your needs and goals.
          </p>
          <p className="mt-4 ">
            Our lessons will be a team effort, where your interests guide what
            we do. I want learning to be fun and exciting.
          </p>
        </div>
      </FadeInSection>
    </div>
  );
};

export default About;
