import React from "react";
import Deposit  from "../../../public/image/deposit.png";
import Image from "next/image";

const deposit = () => {
  return (
    <div className="relative pl-20 h-screen">
      <div className="relative z-10 flex h-full">
            <div className="w-1/2 py-14 pr-20 h-full">
              {/* text */}
              <div className="relative z-10">
                <h1 className="text-73px font-bold uppercase leading-5.2rem text-white">
                DEPOSIT
                </h1>
                <p className="text-xl font-semibold text-white">
                Usability
                </p>
              </div>
             
              <div className="relative mt-16 space-y-3">
                <h5 className="text-xl font-bold text-white">
                    Detail
                </h5>
                <p className="text-xl font-light text-white">
                In our heuristic analysis of the deposit flow on leading gaming sites, we have observed notable differences in user experience and functionality. Both BetVictor and Stake have implemented pop-up windows for the deposit process, which significantly enhances the user experience by providing a streamlined and intuitive interface. This approach minimizes disruptions, allowing users to complete their transactions swiftly and efficiently.
                </p>
                <p className="text-xl font-light text-white">
                Conversely, Bet365 currently does not utilize pop-up windows for deposits, which can potentially result in a less fluid user experience. Users may find the process more cumbersome, as it requires navigating away from the main interface, potentially leading to increased friction and drop-off rates.
                </p>
                <h6 className="text-xl font-bold text-white">
                    Journey
                </h6>
                <p className="text-xl font-light text-white">Deposit</p>
              </div>
            </div>
            <div className="w-1/2 px-5 h-full flex flex-wrap  justify-end">
            <div className="relative ml-auto max-w-280px space-y-4 mb-4 w-full">
              <div className="w-full rounded-14px bg-card-secondary p-5">
                <div className="flex items-center justify-between">
                  <p className="text-base font-semibold text-white">
                    Usability
                  </p>
                  <div className="w-24 max-w-24 rounded-lg bg-bg-fifth p-2 px-0 text-center">
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
              <div className="flex justify-end w-full px-20">
                <Image src={Deposit} alt="Deposit" className="w-594px h-584px"/>
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

export default deposit;
