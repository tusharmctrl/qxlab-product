import React from "react";
import SiteLogo from "../../../public/image/qx-lab.svg";
import CardCone from "../../../public/image/cards-c1.svg";
import PerformanceBottom from "../../../public/image/performance-bottom.png";
import Image from "next/image";

const Accessibility = () => {
  return (
    <div className="relative pl-20 h-screen">
      <div className="relative z-10 flex items-center pr-5">
      <div className="relative z-10">
                <h1 className="text-73px font-bold uppercase leading-5.2rem text-white">
                ACCESSIBILITY
                </h1>
                <p className="text-xl font-semibold text-white">
                  Executive Summary
                </p>
              </div>
              <div className="relative ml-auto max-w-280px space-y-4 mb-4 w-full">
              <div className="w-full rounded-14px bg-card-secondary p-5">
                <div className="flex items-center justify-between">
                  <p className="text-base font-semibold text-white">
                  Accessibility
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
              </div>
            <div className="w-full py-14 pr-20 pt-0 h-full z-10">
              {/* text */}
              <div className="flex justify-between flex-wrap">
              
              <div className="mt-14 space-y-4 w-full">
                <div className="relative flex max-w-md items-center">
                  <div className="flex w-1/3 items-center gap-x-9 px-2">
                    <p className="text-base font-medium text-white">
                    Accessibility
                    </p>
                  </div>
                  <div className="h-5 w-46% rounded-full bg-white shadow-btn-shadow">
                    <div className="h-5 rounded-full bg-progress-third"></div>
                  </div>

                  <div className="flex w-1/5 justify-end px-2">
                    <span className="flex h-50px w-50px items-center justify-center rounded-full bg-progress-third text-xl font-semibold text-white shadow-btn-shadow">
                      63
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative mt-10 space-y-3">
                <div className="max-w-5xl">
                <p className="text-xl font-bold text-white">
                Detail
                </p>
                <p className="text-xl font-light text-white">
                In our heuristic analysis of the accessibility features across leading gaming sites, Bet365 scores notably lower compared to competitors such as BetVictor and Stake.com. Both BetVictor and Stake.com have demonstrated a strong commitment to meeting web accessibility standards, particularly in areas such as contrast and font sizing.
                Key Insights:
                </p>
                </div>
                <ul className="list-decimal text-white pl-4 gap-10 grid grid-cols-2 !mt-8 ">
                    <li><p className="text-xl font-light text-white">Contrast and Font Sizing:</p>
                        <ul className="list-disc text-white mt-2 pl-8">
                            <li><p className="text-xl font-light text-white">BetVictor and Stake.com have effectively met web standards for contrast and font sizing. High contrast ratios ensure that text is easily readable against backgrounds, and appropriately sized fonts improve readability for all users, including those with visual impairments. Bet365, on the other hand, falls short in these areas, with lower contrast ratios and smaller font sizes that can hinder readability.</p></li>
                        </ul>
                    </li>
                    <li><p className="text-xl font-light text-white">Keyboard Navigation:</p>
                        <ul className="list-disc text-white mt-2 pl-8">
                            <li><p className="text-xl font-light text-white">Both BetVictor and Stake.com offer robust keyboard navigation, enabling users to navigate through the site using keyboard shortcuts. This feature is crucial for users with motor disabilities who may find it challenging to use a mouse. Bet365’s keyboard navigation could be significantly improved to enhance accessibility.</p></li>
                        </ul>
                    </li>
                    <li><p className="text-xl font-light text-white">Well-Structured Page Layout:</p>
                        <ul className="list-disc text-white mt-2 pl-8">
                            <li><p className="text-xl font-light text-white">The layout of Stake and William Hill's casino pages is well-organized, with clear categories and sections that guide users effortlessly through their game selection. This structured approach enhances navigation and user engagement. Bet365's layout is less structured, which can make the browsing experience more cumbersome for users.</p></li>
                        </ul>
                    </li>
                    <li><p className="text-xl font-light text-white">Screen Reader Compatibility:</p>
                        <ul className="list-disc text-white mt-2 pl-8">
                            <li><p className="text-xl font-light text-white">Stake.com and BetVictor have optimized their sites for screen reader compatibility, ensuring that all content is accessible to visually impaired users. This includes providing alt text for images, proper heading structures, and ARIA (Accessible Rich Internet Applications) labels. Bet365 lags behind in ensuring full screen reader compatibility, which affects the overall user experience for visually impaired users.</p></li>
                        </ul>
                    </li>
                    <li><p className="text-xl font-light text-white">Responsive Design:</p>
                        <ul className="list-disc text-white mt-2 pl-8">
                            <li><p className="text-xl font-light text-white">A responsive design that adapts to different screen sizes and orientations is crucial for accessibility. Both Stake.com and BetVictor excel in providing a seamless experience across various devices, including mobile phones and tablets. Bet365 needs to enhance its responsive design to ensure that all users, regardless of the device they are using, have a consistent and accessible experience.</p></li>
                        </ul>
                    </li>
                </ul>
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

export default Accessibility;
