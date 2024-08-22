import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="font-raleway">
        <div className="flex justify-center items-center mt-16">
          <div className="text-4xl text-center">
            Japanese lessons For <br />
            <span className="text-blue-600"> Intermediate Class</span>
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
                Example of <br />
                What you will learn for this Intermediate 12 weeks course
              </h2>
            </div>
            <ul className="mt-6 space-y-2 mx-auto w-full max-w-md text-left pl-4">
              <li className="pt-3 pb-3">Kanji</li>
              <li className="pt-3 pb-3">Te form</li>
              <li className="pt-3 pb-3">Short Forms</li>
              <li className="pt-3">〜と思います / 〜と言っていました </li>
              <li className="text-sm pb-2">I think〜</li>
              <li className="pt-3">Past Tense and Short Forms</li>

              <li className="pt-3">〜から</li>
              <li className="text-sm pb-3">Because</li>

              <li className="pt-3 pb-3">Comparison</li>
              <li className="pt-3 pb-3">〜つもりだ</li>
              <li className="pt-3 pb-3">adjective + なる</li>
              <li className="pt-3 pb-3">どこかに / どこにも</li>

              <li className="pt-3 pb-3">〜たい</li>
              <li className="pt-3 pb-3">〜たり〜たります</li>
              <li className="pt-3 pb-3">〜んです</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
