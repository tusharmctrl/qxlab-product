import React from "react";
import SiteLogo from "../../../public/image/qx-lab.svg";
import PerformanceBottom from "../../../public/image/performance-bottom.png";
import Image from "next/image";

const performance = () => {
  return (
    <div className="relative pb-14">
      <div className="fixed bottom-6 right-6">
        <Image src={PerformanceBottom} alt="PerformanceBottom"/>
      </div>
        <div className="flex items-start">
        <div className="w-4/5 px-20 py-14">
        <div className="relative z-10">
          <h1 className="text-73px font-bold uppercase leading-5.2rem text-white">
          performance
          </h1>
          <p className="font-semibold text-xl text-white">Summary</p>
          <div className="relative space-y-6 mt-10">
            <p className="font-light text-xl text-white">We present the QXI Score, which offers valuable insights into your brand's performance. 
Utilizing data from Lighthouse, a comprehensive tool for evaluating website performance, we have assessed various aspects of your digital presence. 
This month, your brand has achieved a QXI Score of <span className="font-bold">63/100.</span> This score reflects key performance indicators such as loading speed, interactivity, and visual stability. To provide context, the industry standard for similar businesses stands at 75/100. This comparison highlights areas where improvements can be made to enhance your digital performance and better meet industry benchmarks.</p>
          <p className="font-light text-xl text-white">Stake.com scored 81/100 by far the leading brand in performance.</p>
          </div>
        </div>
        <div className="relative z-10 -mx-4 mt-9 flex">
            <div className="w-1/2 px-4">
                <div className="flex -mx-4">
                    <div className="w-1/4 px-4 space-y-2">
                        <div className="w-32 h-32 rounded-full bg-progress-primary mx-auto flex items-center justify-center">
                            <span className="text-2xl font-semibold text-white">63</span>
                        </div>
                        <p className="text-xl font-semibold text-center text-white">Performance</p>
                    </div>
                    <div className="w-1/4 px-4 space-y-2">
                        <div className="w-32 h-32 rounded-full bg-progress-primary mx-auto flex items-center justify-center">
                            <span className="text-2xl font-semibold text-white">54</span>
                        </div>
                        <p className="text-xl font-semibold text-center text-white">Accessibility</p>
                    </div>
                    <div className="w-1/4 px-4 space-y-2">
                        <div className="w-32 h-32 rounded-full bg-bg-six mx-auto flex items-center justify-center">
                            <span className="text-2xl font-semibold text-white">70</span>
                        </div>
                        <p className="text-xl font-semibold text-center text-white">Best Practices</p>
                    </div>
                    <div className="w-1/4 px-4 space-y-2">
                        <div className="w-32 h-32 rounded-full bg-bg-six mx-auto flex items-center justify-center">
                            <span className="text-2xl font-semibold text-white">74</span>
                        </div>
                        <p className="text-xl font-semibold text-center text-white">SEO</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 mt-24 gap-4 gap-y-5">
                    <div className="relative">
                        <p className="text-xl font-light text-white">First Contentful Paint</p>
                        <h5 className="text-xl font-semibold text-white">1.8s</h5>
                    </div>
                    <div className="relative">
                        <p className="text-xl font-light text-white">Time to interactive</p>
                        <h5 className="text-xl font-semibold text-white">2.1s</h5>
                    </div>
                    <div className="relative">
                        <p className="text-xl font-light text-white">Speed Index</p>
                        <h5 className="text-xl font-semibold text-white">2.0s</h5>
                    </div>
                    <div className="relative">
                        <p className="text-xl font-light text-white">Total blocking time</p>
                        <h5 className="text-xl font-semibold text-white">50ms</h5>
                    </div>
                    <div className="relative">
                        <p className="text-xl font-light text-white">Largest Contentful Paint</p>
                        <h5 className="text-xl font-semibold text-white">2.1s</h5>
                    </div>
                    <div className="relative">
                        <p className="text-xl font-light text-white">Cumulative layout shift</p>
                        <h5 className="text-xl font-semibold text-white">0</h5>
                    </div>
                </div>
            </div>
            <div className="w-1/2 px-4 relative">
            <div className="bg-bg-eight rounded-18px w-486px h-265px absolute -top-8 right-0 px-10 py-5 mt-14 z-20">
            <Image src={SiteLogo} alt="SiteLogo" className="mx-auto"/>
            <div className="relative space-y-5 mt-6">
                <p className="text-xl font-light text-white">The industry standard for similar businesses stands at <span className="font-bold">75/100.</span></p>
                <p className="text-xl font-light text-white">Your brand Under performs in Accessibility and SEO. </p>
            </div>
            </div>
                <div className="bg-bg-seven rounded-18px shadow-card-second w-444px h-250px mx-auto absolute right-4 top-14 z-10"></div>
            </div>
            
            
            
        </div>
      </div>
      <div className="w-1/5">
      <div className="p-5 space-y-4 h-screen overflow-y-auto scroll-bar">
      <div className="bg-card-secondary rounded-14px p-5">
            <div className="flex items-center justify-between">
                <p className="text-base font-semibold text-white">Performance</p>
                <div className="bg-bg-fifth rounded-lg p-2 px-0 max-w-24 w-24 text-center">
                    <p className="text-xs font-normal text-white/90">Average</p>
                    <p className="text-xs font-semibold text-white/90">61-75</p>
                </div>
            </div>
            <div className="mt-4">
                <h5 className="text-xl font-bold text-white">76</h5>
                <p className="text-xs font-normal text-white/70 mt-2.5">72 is the average in your industry.</p>
            </div>
            <div className="flex mt-7 gap-3">
                <div className="relative">
                <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.1129 15.452L20.9175 12.6274L14.9409 6.60805L10.042 11.5419L0.966797 2.38958L2.69366 0.650391L10.042 8.05121L14.9409 3.11733L22.6566 10.8759L25.4613 8.05121V15.452H18.1129Z" fill="#F93C65"/>
                    </svg>

                </div>
                <p className="text-xs font-semibold text-white"><span className="text-secondary">4.3%</span> Down from last month</p>
            </div>
        </div>
        
      </div>
        
      </div>
        </div>
      

      <div className="absolute -top-80 z-0 -left-80">
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

export default performance;
