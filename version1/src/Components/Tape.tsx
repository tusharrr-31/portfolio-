import { Fragment } from "react";
// import StarIcon from "vite.png";
import React from "react";


const words = [
  "Discover",
  "Design",
  "Develop",
  "Discover",
  "Design",
  "Develop",
  "Discover",
  "Design",
  "Develop",
  "Discover",
  "Design",
  "Develop",
  "Discover",
  "Design",
  "Develop",            
];

export default function TapeSection () {
  return (
    <div className=" -mt-16 overflow-x-clip bg">
      <div className=" tapegradient text-white -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none  gap-4 py-3  animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4">
                    <span className="text-white font-secondary uppercase font-bold text-sm tracking-widest">
                      {word}
                    </span>
                    {/* <StarIcon className="size-6 text-gray-900 -rotate-12" /> */}
                    <img src="/star.svg" alt="✨" className="size-6 text-white -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};