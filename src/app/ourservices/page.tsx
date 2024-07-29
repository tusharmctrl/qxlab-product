import React from 'react'
import sitelogo from "../../../public/image/qx-lab.svg";
import seriveBG from "../../../public/image/ourservice.svg";
import Image from 'next/image';
export const OurServices = () => {
  return (
    <div className='relative h-screen flex items-center justify-center overflow-hidden'>
        <div className='absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2'>
        <svg width="1275" height="957" viewBox="0 0 1275 957" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_1659_1885)">
          <path d="M875 478.5C875 521.854 768.668 557 637.5 557C506.332 557 400 521.854 400 478.5C400 435.146 506.332 400 637.5 400C768.668 400 875 435.146 875 478.5Z" fill="#26FFF2" fill-opacity="0.65"/>
          </g>
          <defs>
          <filter id="filter0_f_1659_1885" x="0" y="0" width="1275" height="957" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_1659_1885"/>
          </filter>
          </defs>
          </svg>


        </div>
        <div className='relative max-w-lg w-2/6 text-center'>
            <Image src={sitelogo} alt='sitelogo' className='mx-auto w-20'/>
           <div className='flex justify-center gap-10 mt-12'>
            <div className='relative space-y-1'>
                <p className='text-base font-bold text-white text-left'>Email</p>
                <p className='text-base font-normal text-white text-left'>sales@qxlab.io</p>
            </div>
            <div className='relative space-y-1'>
                <p className='text-base font-bold text-white text-left'>Web</p>
                <p className='text-base font-normal text-white text-left'>www.qxlab.io</p>
            </div>
            </div>
            
        </div>
    </div>
  );
};

export default OurServices;