import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="font-raleway">
        <div className="flex justify-center items-center mt-16">
          <div className="text-4xl text-center">
            日本語 For <br />
            <span className="text-green-600"> Beginner Class</span>
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
                What you will learn for this Beginner 12 weeks course
              </h2>
            </div>
            <ul className="mt-6 space-y-2 mx-auto w-full max-w-md text-left pl-4">
              <li className="pt-3 pb-3">Hiragana</li>
              <li className="pt-3 pb-3">Katakana</li>
              <li className="pt-3 pb-3">XはYです</li>
              <li className="pt-3 pb-3">noun1 の noun2 </li>
              <li className="pt-3">これ　それ　あれ　どれ</li>
              <li className="text-sm pb-3 ">This,That,Where</li>

              <li className="pt-3">この / その / あの / どの + noun</li>
              <li className="text-sm pb-2">This,That,Which</li>
              <li className="pt-3">ここ　そこ　あそこ　どこ</li>
              <li className="text-sm pb-3">Here, There, Where</li>
              <li className="pt-3">noun じゃないです</li>
              <li className="text-sm pb-3">Not〜</li>
              <li className="pt-3 pb-3">〜ね / 〜よ</li>
              <li className="pt-3 pb-3">Verb Conjugation</li>
              <li className="pt-3 pb-3">Verb Types and "Present Tense"</li>
              <li className="pt-3 pb-3">Particles</li>
              <li className="pt-3 pb-3">Time Reference</li>
              <li className="pt-3">〜ませんか</li>
              <li className="text-sm pb-3">How about〜?</li>
              <li className="pt-3 pb-3">Time Reference</li>
              <li className="pt-3">Xがあります / います</li>
              <li className="text-sm pb-3">There is 〜 . THere are 〜.</li>
              <li className="pt-3 pb-3">Describing Where Things Are</li>
              <li className="pt-3 pb-3">Past Tense of です</li>
              <li className="pt-3 pb-3">Past Tense of Verbs</li>
              <li className="pt-3 pb-3">Adjectives</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
