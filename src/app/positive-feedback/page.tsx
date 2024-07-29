import React from "react";
import PositiveGraph from "../../../public/image/positive-graph.png";
import Image from "next/image";

const PositiveFeedback = () => {
  return (
    <div className="relative h-screen pl-20">
      <div className="relative z-10 flex items-center pr-5">
        <div className="relative z-10">
          <h1 className="text-73px font-bold uppercase leading-5.2rem text-white">
            POSITIVE FEEDBACK
          </h1>
          <p className="text-xl font-semibold text-white">Perception</p>
        </div>
        <div className="relative mb-4 ml-auto w-full max-w-280px space-y-4">
          <div className="w-full rounded-14px bg-card-secondary p-5">
            <div className="flex items-center justify-between">
              <p className="text-base font-semibold text-white">Perception</p>
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
      <div className="z-10 h-full w-full py-14 pr-20 pt-0">
        {/* text */}
        <div className="flex flex-wrap justify-between">
          <div className="relative -mx-5 flex space-y-3">
            <div className="w-1/2 px-5">
              <ul className="!mt-2 list-none gap-10 space-y-6 text-white">
                <li className="space-y-1">
                  <p className="text-xl font-bold text-white">
                    Emerging Postive Topics and illustrative comments{" "}
                  </p>
                  <p className="text-xl font-light text-white">last 30 days</p>
                </li>
                <li className="space-y-1">
                  <p className="text-xl font-bold text-white">Early Payout </p>
                  <p className="text-xl font-light text-white">
                    I would say their early payout is the…
                  </p>
                  <p className="text-xl font-light text-white">
                    I would say their early payout is the best... No other book
                    provides that on every game. Never won a penny since I got
                    banned by them.
                  </p>
                </li>
                <li className="space-y-1">
                  <p className="text-xl font-bold text-white">Deposits </p>
                  <p className="text-xl font-light text-white">
                    I have had no trouble with them
                  </p>
                  <p className="text-xl font-light text-white">
                    I have had no trouble with them . Other casinos seem to have
                    no problem accepting your deposits but when you try and
                    withdraw that's when it becomes tricky with set min
                    withdrawals and having to basically set up a whole new bank
                    account. !!
                  </p>
                </li>
                <li className="space-y-1">
                  <p className="text-xl font-bold text-white">Sports Book </p>
                  <p className="text-xl font-light text-white">
                    The best bookie for me and I have used…
                  </p>
                  <p className="text-xl font-light text-white">
                    The best bookie for me and I have used a few. I’m surprised
                    by the negative reviews. I had no bother verifying my
                    account(a few years ago now). I don’t play the games so
                    can’t comment on that but for sports betting I find their
                    odds on soccer and horse racing to be far superior to paddy
                    power who I also bet with. They throw me a free fiver bet
                    every now and again and have other ways to win free bets.
                    I’m in profit with them and never had any major problems and
                    I have found customer service to be quick responding to any
                    questions.
                  </p>
                </li>
              </ul>
            </div>
            <div className="w-1/2 px-5">
              <div className="mt-5 grid grid-cols-2 gap-4 gap-y-5">
                <div className="relative space-y-2">
                  <p className="text-xl font-light text-white">
                    Trust Pilot Score
                  </p>
                  <h5 className="flex items-center gap-3 text-xl font-semibold text-white">
                    1.3 / 5{" "}
                    <span>
                      <svg
                        width="23"
                        height="16"
                        viewBox="0 0 23 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.5197 15.4525L18.0273 12.6279L12.6836 6.60854L8.30354 11.5424L0.189453 2.39007L1.73343 0.650879L8.30354 8.05169L12.6836 3.11782L19.5822 10.8763L22.0898 8.05169V15.4525H15.5197Z"
                          fill="#F93C65"
                        />
                      </svg>
                    </span>
                  </h5>
                </div>
                <div className="relative space-y-2">
                  <p className="text-xl font-light text-white">
                    Negative Comments{" "}
                  </p>
                  <p className="text-base font-light text-white">
                    (last 30days)
                  </p>
                  <h5 className="flex items-center gap-3 text-xl font-semibold text-white">
                    894{" "}
                    <span>
                      <svg
                        width="23"
                        height="16"
                        viewBox="0 0 23 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.5197 15.4525L18.0273 12.6279L12.6836 6.60854L8.30354 11.5424L0.189453 2.39007L1.73343 0.650879L8.30354 8.05169L12.6836 3.11782L19.5822 10.8763L22.0898 8.05169V15.4525H15.5197Z"
                          fill="#F93C65"
                        />
                      </svg>
                    </span>
                  </h5>
                </div>
                <div className="relative space-y-2">
                  <p className="text-xl font-light text-white">
                    Positive Comments
                  </p>
                  <h5 className="flex items-center gap-3 text-xl font-semibold text-white">
                    78{" "}
                    <span>
                      <svg
                        width="25"
                        height="16"
                        viewBox="0 0 25 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.0986 0.650879L19.8076 3.47552L14.0347 9.49485L9.30288 4.56098L0.537109 13.7133L2.20509 15.4525L9.30288 8.05169L14.0347 12.9856L21.4874 5.22705L24.1964 8.05169V0.650879H17.0986Z"
                          fill="#00B69B"
                        />
                      </svg>
                    </span>
                  </h5>
                </div>
                <div className="relative space-y-2">
                  <p className="text-xl font-light text-white">Perception</p>
                  <h5 className="flex items-center gap-3 text-xl font-semibold text-white">
                    17 😩
                  </h5>
                </div>
                <div className="relative space-y-2">
                  <p className="text-xl font-light text-white">
                    X.com Negative Mentions
                  </p>
                  <h5 className="flex items-center gap-3 text-xl font-semibold text-white">
                    50{" "}
                    <span>
                      <svg
                        width="25"
                        height="16"
                        viewBox="0 0 25 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.0986 0.400879L19.8076 3.22552L14.0347 9.24485L9.30288 4.31098L0.537109 13.4633L2.20509 15.2025L9.30288 7.80169L14.0347 12.7356L21.4874 4.97705L24.1964 7.80169V0.400879H17.0986Z"
                          fill="#00B69B"
                        />
                      </svg>
                    </span>
                  </h5>
                </div>
                <div className="relative space-y-2">
                  <p className="text-xl font-light text-white">
                    X.com Positive Mentions
                  </p>
                  <h5 className="flex items-center gap-3 text-xl font-semibold text-white">
                    134{" "}
                    <span>
                      <svg
                        width="25"
                        height="16"
                        viewBox="0 0 25 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.0986 0.400879L19.8076 3.22552L14.0347 9.24485L9.30288 4.31098L0.537109 13.4633L2.20509 15.2025L9.30288 7.80169L14.0347 12.7356L21.4874 4.97705L24.1964 7.80169V0.400879H17.0986Z"
                          fill="#00B69B"
                        />
                      </svg>
                    </span>
                  </h5>
                </div>
              </div>
              <div className="mt-16">
                <Image src={PositiveGraph} alt="Perception" />
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

export default PositiveFeedback;
