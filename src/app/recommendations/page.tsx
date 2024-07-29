import React from "react";
import PositiveGraph from "../../../public/image/positive-graph.png";
import Image from "next/image";

const Recommendations = () => {
  return (
    <div className="relative h-screen pl-20">
      <div className="relative z-10 flex items-center pr-5">
        <div className="relative z-10">
          <h1 className="text-73px font-bold uppercase leading-5.2rem text-white">
          RECOMMENDATIONS
          </h1>
         
        </div>
        <div className="relative mb-4 ml-auto w-full max-w-280px space-y-4">
          <div className="w-full rounded-14px bg-card-secondary p-5">
            <div className="flex items-center justify-between">
              <p className="text-base font-semibold text-white">Perception</p>
              <div className="w-24 max-w-24 rounded-lg bg-progress-secondary p-2 px-0 text-center">
                <p className="text-xs font-normal text-white/90">Average</p>
                <p className="text-xs font-semibold text-white/90">61-75</p>
              </div>
            </div>
            <div className="mt-4">
              <h5 className="text-xl font-bold text-white">76</h5>
              <p className="mt-2.5 text-xs font-normal text-white/70">
                72 is the average in your industry.
              </p>
            </div>
            <div className="mt-7 flex gap-3">
              <div className="relative">
                <svg
                  width="26"
                  height="16"
                  viewBox="0 0 26 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.1129 15.452L20.9175 12.6274L14.9409 6.60805L10.042 11.5419L0.966797 2.38958L2.69366 0.650391L10.042 8.05121L14.9409 3.11733L22.6566 10.8759L25.4613 8.05121V15.452H18.1129Z"
                    fill="#F93C65"
                  />
                </svg>
              </div>
              <p className="text-xs font-semibold text-white">
                <span className="text-secondary">4.3%</span> Down from last
                month
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="z-10 h-full w-full py-14 pr-20 pt-0">
        {/* text */}
        <div className="flex flex-wrap justify-between">
          <div className="relative -mx-5 flex space-y-3">
            <div className="w-1/2 px-5">
              <ul className="!mt-2 list-none gap-10 space-y-10 text-white">
                <li className="space-y-1">
                  <p className="text-xl font-bold text-white">
                  Usability Suggestions
                  </p>
                  
                </li>
                <li className="space-y-1">
                  <p className="text-xl font-bold text-white">Introduce a "Need Help?" Link During Registration: </p>
                  
                  <ul className="list-disc pl-4 space-y-3">
                    <li><p className="text-xl font-light text-white">Objective: Provide immediate assistance to reduce user frustration and drop-offs.</p>
                  </li>
                  <li><p className="text-xl font-light text-white">Benefits:</p>
                  <ul className="list-disc pl-4 mt-3">
                    <li><p className="text-xl font-light text-white">Enhanced User Support: Quick resolution of common issues.</p></li>
                    <li><p className="text-xl font-light text-white">Increased Completion Rates: More users completing registration.</p></li>
                    <li><p className="text-xl font-light text-white">Positive Perception: Improved brand reputation for customer care.</p></li>
                    </ul></li>
                  </ul>
                </li>
                <li className="space-y-1">
                  <p className="text-xl font-bold text-white">Implement Pop-Up Windows for Deposit Process: </p>
                  
                  <ul className="list-disc pl-4 space-y-3">
                    <li><p className="text-xl font-light text-white">Objective: Enhance user experience and streamline transactions.</p></li>
                    <li><p className="text-xl font-light text-white">Benefits: Reduces disruptions, minimizes user friction, and lowers drop-off rates by allowing users to complete deposits swiftly and efficiently within the same interface.</p></li>
                  
                  </ul>
                </li>
                <li className="space-y-1">
                  <p className="text-xl font-bold text-white">Improve Search and Filtering, Game Tiles, and Page Layout: </p>
                  <ul className="list-disc pl-4 space-y-3">
                    <li><p className="text-xl font-light text-white">Enhanced Search and Filtering: Implement more intuitive search and filtering options to help users find games quickly.</p></li>
                    <li><p className="text-xl font-light text-white">Informative Game Tiles: Add detailed game descriptions and features to game tiles to improve user experience and SEO.</p></li>
                    <li><p className="text-xl font-light text-white">Well-Structured Layout: Redesign the casino page layout with clear categories and sections for easier navigation and better user engagement.</p></li>
                  
                  </ul>
                  
                </li>
                
              </ul>
            </div>
            <div className="w-1/2 px-5">
              
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -left-80 -top-80 z-0">
        <svg
          width="1275"
          height="957"
          viewBox="0 0 1275 957"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_2808_732)">
            <path
              d="M875 478.5C875 521.854 768.668 557 637.5 557C506.332 557 400 521.854 400 478.5C400 435.146 506.332 400 637.5 400C768.668 400 875 435.146 875 478.5Z"
              fill="#26FFF2"
              fill-opacity="0.65"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_2808_732"
              x="0"
              y="0"
              width="1275"
              height="957"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="200"
                result="effect1_foregroundBlur_2808_732"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Recommendations;
