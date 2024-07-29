import React from "react";
import SocialX from "../../../public/image/social-x.png";
import Trustpilot from "../../../public/image/trustpilot.png";
import Perceptions from "../../../public/image/perception.png";
import Image from "next/image";

const Perception = () => {
  return (
    <div className="relative pl-20 h-screen">
      <div className="relative z-10 flex items-center pr-5">
      <div className="relative z-10">
                <h1 className="text-73px font-bold uppercase leading-5.2rem text-white">
                PERCEPTION
                </h1>
                <p className="text-xl font-semibold text-white">
                  Executive Summary
                </p>
              </div>
              <div className="relative ml-auto max-w-280px space-y-4 mb-4 w-full">
              <div className="w-full rounded-14px bg-card-secondary p-5">
                <div className="flex items-center justify-between">
                  <p className="text-base font-semibold text-white">
                  Perception
                  </p>
                  <div className="w-24 max-w-24 rounded-lg bg-progress-fourth p-2 px-0 text-center">
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
              
              
              <div className="relative  space-y-3 flex -mx-5">
                <div className="w-1/2 px-5">
                <div className="mt-8 mb-10 space-y-4 w-full">
                <div className="relative flex max-w-md items-center">
                  <div className="flex w-1/3 items-center gap-x-9 px-2">
                    <p className="text-base font-medium text-white">
                    Perception
                    </p>
                  </div>
                  <div className="h-5 w-46% rounded-full bg-white shadow-btn-shadow">
                    <div className="h-5 rounded-full bg-progress-fourth"></div>
                  </div>

                  <div className="flex w-1/5 justify-end px-2">
                    <span className="flex h-50px w-50px items-center justify-center rounded-full bg-progress-fourth text-xl font-semibold text-white shadow-btn-shadow">
                      63
                    </span>
                  </div>
                </div>
              </div>
                <p className="text-xl font-light text-white">In this section of the QXI Report, we analyze the perception of your brand over the last 30 days by scraping data from Trustpilot and X.com. This provides a comprehensive overview of how users are discussing and rating your brand online.</p>
                <ul className="list-none text-white gap-10 !mt-2 space-y-3">
                    <li className="space-y-2">                      
                      <p className="text-xl font-light text-white">Bet365:</p>
                        <ul className="list-disc text-white mt-2 pl-8 space-y-1.5">
                            <li><p className="text-xl font-light text-white">Overall Score: 19/100</p></li>
                            <li><p className="text-xl font-light text-white">rustpilot Rating: 1.3/5</p></li>
                            <li><p className="text-xl font-light text-white">X.com Mentions: Recently, we have observed an uptick in positive mentions on X.com. Despite this improvement, Bet365's overall perception score remains low.</p></li>
                        </ul>
                    </li>
                    <li><p className="text-xl font-light text-white">Competitor Comparison:</p>
                        <ul className="list-disc text-white mt-2 pl-8 space-y-1.5">
                            <li><p className="text-xl font-light text-white">Stake:</p>
                            <ul className="list-disc text-white mt-2 pl-8 space-y-1.5">
                              <li><p className="text-xl font-light text-white">Trustpilot Rating: 4.3/5</p></li>
                              <li><p className="text-xl font-light text-white">X.com Engagement: Stake also shows a high level of positive engagement on X.com, reflecting a strong and active presence in addressing customer feedback and concerns.</p></li>
                          </ul>
                            </li>
                        </ul>
                    </li>
                    <li><p className="text-xl font-light text-white">Industry Standard:</p>
                        <ul className="list-disc text-white mt-2 pl-8 space-y-1.5">
                            <li><p className="text-xl font-light text-white">The general perception score in the gambling industry is 56/100, indicating that the industry typically faces challenges in maintaining positive user sentiment.</p></li>
                        </ul>
                    </li>
                    
                </ul>
                </div>
                <div className="w-1/2 px-5">
                <ul className="list-none flex gap-5 mb-5">
                <li className="relative"><Image src={SocialX} alt="SocialX"/></li>
                  <li className="relative"><Image src={Trustpilot} alt="Trustpilot"/></li>
                </ul>
                <p className="text-xl font-light text-white">Key Insights</p>
                <ul className="list-decimal text-white gap-10 !mt-2 space-y-3 pl-4">
                    <li className="space-y-2">                      
                      <p className="text-xl font-light text-white">Trustpilot Performance:</p>
                        <ul className="list-disc text-white mt-2 pl-8 space-y-1.5">
                            <li><p className="text-xl font-light text-white">Bet365's low Trustpilot rating of 1.3/5 highlights significant dissatisfaction among users. This contrasts sharply with Stake’s high rating of 4.3/5, suggesting that Stake is more effective in managing customer relationships and addressing issues promptly.</p></li>
                        </ul>
                    </li>
                    <li><p className="text-xl font-light text-white">Social Media Engagement:</p>
                        <ul className="list-disc text-white mt-2 pl-8 space-y-1.5">
                            <li><p className="text-xl font-light text-white">While Bet365 is seeing a positive trend in mentions on X.com, this is not yet sufficient to offset the negative feedback on Trustpilot. Active and consistent engagement on social media platforms is crucial for improving overall perception.</p>
                            
                            </li>
                        </ul>
                    </li>
                    <li><p className="text-xl font-light text-white">Industry Challenges:</p>
                        <ul className="list-disc text-white mt-2 pl-8 space-y-1.5">
                            <li><p className="text-xl font-light text-white">It is noteworthy that the gambling industry, in general, scores low in user perception with an average score of 56/100. This underscores the importance of proactive customer service and reputation v to stand out positively in a challenging market.</p></li>
                        </ul>
                    </li>
                    
                </ul>
                <div className="mt-8">
                  <Image src={Perceptions} alt="Perception"/>
                  </div>
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

export default Perception;
