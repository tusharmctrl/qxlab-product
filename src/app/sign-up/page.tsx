import React from "react";
import SignRight from "../../../public/image/sign-up.png";
import Image from "next/image";

const SignUp = () => {
  return (
    <div className="relative pl-20 h-screen">
      <div className="relative z-10 flex h-full">
            <div className="w-1/2 py-14 pr-20 h-full">
              {/* text */}
              <div className="relative z-10">
                <h1 className="text-73px font-bold uppercase leading-5.2rem text-white">
                SIGN UP
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
                In the Usability section of the QXI Report, we delve into the user experience of prominent brands in your industry. This month, Bet365 achieved a commendable QXI Score of 80/100 for overall usability. Stake.com also received a high score, reflecting their commitment to user-friendly interfaces. Both sites excelled by implementing registration processes in pop-up forms, ensuring a seamless and intuitive user experience, and successfully passing all our rigorous heuristics.
                </p>
                <p className="text-xl font-light text-white">
                Despite these strong performances, there is still room for improvement. Adding a "Need Help?" link during the registration process could further enhance usability by assisting users who may face difficulties. It is noteworthy that the industry standard for usability currently stands at 73/100. This indicates that Bet365 and Stake.com are performing well above average, setting a high bar for user-centric design and functionality in the industry.
                </p>
                <h6 className="text-xl font-bold text-white">
                    Journey
                </h6>
                <p className="text-xl font-light text-white">Sign Up</p>
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
                <Image src={SignRight} alt="SignUp" className="w-594px h-584px"/>
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

export default SignUp;
