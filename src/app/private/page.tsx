import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="font-raleway">
        <div className="flex justify-center items-center mt-16">
          <div className="text-4xl text-center">
            日本語 For <br />
            <span className="text-orange-600"> Private Lessons</span>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex flex-col justify-center items-center space-y-4">
            <div className="text-center mt-6">
              We use Genki textbook.
              <br /> This text book is good for Conversation and Grammar
              Section.
              <br />
              We will also give you more learning materials for practicing
              Hiragana,Katakana,Kanji.
            </div>

            <div className="flex justify-center">
              <Link href="/contact">
                <button className="border border-stone-500 p-4 mt-4 hover:border-stone-900 hover:border-2">
                  Check Free Trial Lesson
                </button>
              </Link>
            </div>
            <div className="text-center pt-8">
              12 weeks plan for 480€ 1 Lesson/ 60 minutes
            </div>
            <div className="text-center mt-2">
              12 weeks plan for 600€ 1 Lesson/ 90 minutes
            </div>
          </div>
          <div className="bg-stone-300 pb-7 mt-16">
            <div className="flex justify-center pt-10 pb-7">
              <h2 className="text-center">
                Let's discuss how you want to learn.
                <br />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
