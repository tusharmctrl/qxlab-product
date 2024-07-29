import React from 'react'
import CardCone from "../../../public/image/cards-c1.svg";
import CardCtwo from "../../../public/image/cards-c2.svg";
import CardCthree from "../../../public/image/cards-c3.svg";
import MainImg from "../../../public/image/main-img.png";
import Image from 'next/image';

const executivesummary = () => {
  return (
    <div className='relative bg-bg-primary px-20 pt-14 h-dvh overflow-hidden'>
        <div className='relative z-10'>
            <h1 className='text-73px font-bold text-white leading-5.2rem'>EXECUTIVE SUMMARY </h1>
        </div>
        <div className='flex z-10 mt-16 -mx-2 relative'>
            <div className='w-1/3 px-2'>
            <div className='space-y-5  '>
                <p className='text-xl font-light text-white'> <span className='font-bold'>William Hill</span> and <span className='font-bold'>Bet Victor</span> scored similarly (79% and 81% respectively)</p>
                <p className='text-xl font-light text-white'>Furthermore, in comparison to the brands measured against, they scored highly.<br/>
                <span className='font-bold'>Stake.com</span> was the highest scoring competitor analysed (91% overall) </p>
                <p className='text-xl font-light text-white'>In regards to usability, your brand scored lowest on: </p>
                <ul className='list-disc text-white ps-4 space-y-1.5'>
                    <li>
                        <p className='text-xl font-light text-white'>Getting Help (74%)</p>
                    </li>
                    <li>
                        <p className='text-xl font-light text-white'>Signing In (63%)</p>
                    </li>
                    <li>
                        <p className='text-xl font-light text-white'>36 improvement initiatives were identified.</p>
                    </li>
                    <li>
                        <p className='text-xl font-light text-white'>Focusing on the two lowest journeys, improvement examples are:</p>
                    </li>
                    <li className='!mt-7'>
                        <p className='text-xl font-light text-white'>Getting Help</p>
                        <ul className='list-disc text-white ps-4 space-y-1.5'>
                            <li className='mt-2'> <p className='text-xl font-light text-white'>Offering 24/7 live chat</p></li>
                            <li> <p className='text-xl font-light text-white'>Easier access to Get Help funnels</p></li>
                        </ul>
                    </li>
                    <li className='!mt-7'>
                        <p className='text-xl font-light text-white'>Signing In</p>
                        <ul className='list-disc text-white ps-4 space-y-1.5'>
                            <li className='mt-2'> <p className='text-xl font-light text-white'>Adding remember me functionality</p></li>
                            <li> <p className='text-xl font-light text-white'>Adding forgot email functionality</p></li>
                        </ul>
                    </li>
                </ul>
                
            </div>
            </div>
            <div className='w-2/3 px-2 '>
                <div className='relative flex -mt-20'>
                <div className=' w-1/4 px-4 mt-8'>
                    <div className='relative'>
                        <Image src={CardCone} alt='CardCone' className='layblur w-24 shadow-card-shadow'/>
                    </div>
                    <div className='relative mt-10'>
                        <Image src={CardCone} alt='CardCtwo' className='w-32 ml-auto layblur shadow-card-shadow'/>
                    </div>

                </div>
                <div className='relative max-w-lg w-1/2 mx-auto px-4 '>
                    <div className='bg-black/10 p-3 rounded-lg relative text-center border-l-8 shadow-btn-shadow border-primary'>
                        <p className='text-base font-medium text-white uppercase'>QXI </p>
                        <p className='text-2xl font-extrabold text-white uppercase'>76 </p>
                        <p className='text-base font-bold text-white uppercase'>Good </p>
                    </div>
                    <div className='space-y-4 mt-6'>
                    <div className='relative flex items-center '>
                        <div className='w-1/3 px-2 gap-x-9 flex items-center'>
                        <p className="text-white text-base font-medium">Performance</p>
                        </div>
                        <div className="w-46% bg-white rounded-full h-5 shadow-btn-shadow">
                            <div className="bg-progress-primary h-5 rounded-full" ></div>
                        </div>
                    
                        <div className='w-1/5 px-2 flex justify-end'>
                            <span className=' w-14 h-14 bg-progress-primary shadow-btn-shadow rounded-full flex items-center justify-center font-semibold text-white text-xl'>63</span>
                        </div>
                    </div>
                    <div className='relative flex items-center '>
                        <div className='w-1/3 px-2 gap-x-9 flex items-center'>
                        <p className="text-white text-base font-medium">Usability</p>
                        </div>
                        <div className="w-46% bg-white rounded-full h-5 shadow-btn-shadow">
                            <div className="bg-progress-secondary h-5 rounded-full" ></div>
                        </div>
                    
                        <div className='w-1/5 px-2 flex justify-end'>
                            <span className=' w-14 h-14 bg-progress-secondary shadow-btn-shadow rounded-full flex items-center justify-center font-semibold text-white text-xl'>80</span>
                        </div>
                    </div>
                    <div className='relative flex items-center '>
                        <div className='w-1/3 px-2 gap-x-9 flex items-center'>
                        <p className="text-white text-base font-medium">Accessibility</p>
                        </div>
                        <div className="w-46% bg-white rounded-full h-5 shadow-btn-shadow">
                            <div className="bg-progress-third h-5 rounded-full" ></div>
                        </div>                   
                        <div className='w-1/5 px-2 flex justify-end'>
                            <span className=' w-14 h-14 bg-progress-third shadow-btn-shadow rounded-full flex items-center justify-center font-semibold text-white text-xl'>52</span>
                        </div>
                    </div>
                    <div className='relative flex items-center '>
                        <div className='w-1/3 px-2 gap-x-9 flex items-center'>
                            <p className="text-white text-base font-medium">Perception</p>
                        </div>
                        <div className="w-46% bg-white rounded-full h-5 shadow-btn-shadow">
                            <div className="bg-progress-fourth h-5 rounded-full" ></div>
                        </div>                   
                        <div className='w-1/5 px-2 flex justify-end'>
                            <span className=' w-14 h-14 bg-progress-fourth shadow-btn-shadow rounded-full flex items-center justify-center font-semibold text-white text-xl'>17</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className=' w-1/4 px-4 mt-8'>
                <div className='relative'>
                        <Image src={CardCone} alt='CardCtwo' className='w-36 mr-auto layblur shadow-card-shadow'/>
                    </div>
                    <div className='relative'>
                        <Image src={CardCone} alt='CardCone' className='layblur w-24 ml-auto shadow-card-shadow'/>
                    </div>
                    

                </div>
                </div>
                <div className='flex mt-10'>
                <div className='relative max-w-lg w-1/4 px-2'>
                    <div className='bg-primary p-5 rounded-t-lg relative text-center '>
                        <p className='text-2xl font-extrabold text-white uppercase'>79 </p>
                        <p className='text-base font-medium text-white uppercase'>Great </p>                        
                        <p className='mt-2 text-base font-semibold text-white'>William Hill </p>
                    </div>
                    <div className='space-y-3 p-6 bg-card-primary/15 rounded-b-lg '>
                    <div className='relative flex items-center justify-between'>
                        <p className="text-white text-base font-medium">Performance</p>
                        <div className=' px-2 flex justify-end'>
                            <span className=' w-8 h-8 bg-primary shadow-btn-shadow rounded-full flex items-center justify-center font-semibold text-white text-xs'>63</span>
                        </div>
                    </div>
                    <div className='relative flex items-center justify-between'>
                        <p className="text-white text-base font-medium">Usability</p>
                        <div className=' px-2 flex justify-end'>
                            <span className=' w-8 h-8 bg-progress-third shadow-btn-shadow rounded-full flex items-center justify-center font-semibold text-white text-xs'>40</span>
                        </div>
                    </div>
                    <div className='relative flex items-center justify-between'>
                        <p className="text-white text-base font-medium">Accessibility</p>
                        <div className=' px-2 flex justify-end'>
                            <span className=' w-8 h-8 bg-primary shadow-btn-shadow rounded-full flex items-center justify-center font-semibold text-white text-xs'>78</span>
                        </div>
                    </div>
                    <div className='relative flex items-center justify-between'>
                        <p className="text-white text-base font-medium">Perception</p>
                        <div className=' px-2 flex justify-end'>
                            <span className=' w-8 h-8 bg-progress-primary shadow-btn-shadow rounded-full flex items-center justify-center font-semibold text-white text-xs'>63</span>
                        </div>
                    </div>
                    </div>
                </div>
                {/* 02 */}
                <div className='relative max-w-lg w-1/4 px-2'>
                    <div className='bg-primary p-5 rounded-t-lg relative text-center '>
                        <p className='text-2xl font-extrabold text-white uppercase'>79 </p>
                        <p className='text-base font-medium text-white uppercase'>Great </p>
                        
                        <p className='mt-2 text-base font-semibold text-white'>Bet Victor</p>
                    </div>
                    <div className='space-y-3 p-6 bg-card-primary/15 rounded-b-lg '>
                    <div className='relative flex items-center justify-between'>
                        <p className="text-white text-base font-medium">Performance</p>
                        <div className=' px-2 flex justify-end'>
                            <span className=' w-8 h-8 bg-primary shadow-btn-shadow rounded-full flex items-center justify-center font-semibold text-white text-xs'>63</span>
                        </div>
                    </div>
                    <div className='relative flex items-center justify-between'>
                        <p className="text-white text-base font-medium">Usability</p>
                        <div className=' px-2 flex justify-end'>
                            <span className=' w-8 h-8 bg-progress-third shadow-btn-shadow rounded-full flex items-center justify-center font-semibold text-white text-xs'>40</span>
                        </div>
                    </div>
                    <div className='relative flex items-center justify-between'>
                        <p className="text-white text-base font-medium">Accessibility</p>
                        <div className=' px-2 flex justify-end'>
                            <span className=' w-8 h-8 bg-primary shadow-btn-shadow rounded-full flex items-center justify-center font-semibold text-white text-xs'>78</span>
                        </div>
                    </div>
                    <div className='relative flex items-center justify-between'>
                        <p className="text-white text-base font-medium">Perception</p>
                        <div className=' px-2 flex justify-end'>
                            <span className=' w-8 h-8 bg-progress-primary shadow-btn-shadow rounded-full flex items-center justify-center font-semibold text-white text-xs'>63</span>
                        </div>
                    </div>
                    </div>
                </div>
                {/* 03 */}
                <div className='relative max-w-lg w-1/4 px-2'>
                    <div className='bg-progress-six/20 p-5 rounded-t-lg relative text-center '>
                        <p className='text-2xl font-extrabold text-white uppercase'>79 </p>
                        <p className='text-base font-medium text-white uppercase'>Great </p>
                        
                        <p className='mt-2 text-base font-semibold text-white'>BetFair</p>
                    </div>
                    <div className='space-y-3 p-6 bg-card-primary/15 rounded-b-lg '>
                    <div className='relative flex items-center justify-between'>
                        <p className="text-white text-base font-medium">Performance</p>
                        <div className=' px-2 flex justify-end'>
                            <span className=' w-8 h-8 bg-primary shadow-btn-shadow rounded-full flex items-center justify-center font-semibold text-white text-xs'>63</span>
                        </div>
                    </div>
                    <div className='relative flex items-center justify-between'>
                        <p className="text-white text-base font-medium">Usability</p>
                        <div className=' px-2 flex justify-end'>
                            <span className=' w-8 h-8 bg-progress-third shadow-btn-shadow rounded-full flex items-center justify-center font-semibold text-white text-xs'>40</span>
                        </div>
                    </div>
                    <div className='relative flex items-center justify-between'>
                        <p className="text-white text-base font-medium">Accessibility</p>
                        <div className=' px-2 flex justify-end'>
                            <span className=' w-8 h-8 bg-primary shadow-btn-shadow rounded-full flex items-center justify-center font-semibold text-white text-xs'>78</span>
                        </div>
                    </div>
                    <div className='relative flex items-center justify-between'>
                        <p className="text-white text-base font-medium">Perception</p>
                        <div className=' px-2 flex justify-end'>
                            <span className=' w-8 h-8 bg-progress-primary shadow-btn-shadow rounded-full flex items-center justify-center font-semibold text-white text-xs'>63</span>
                        </div>
                    </div>
                    </div>
                </div>
                {/* 04 */}
                <div className='relative max-w-lg w-1/4 px-2'>
                    <div className='bg-progress-fifth p-5 rounded-t-lg relative text-center '>
                        <p className='text-2xl font-extrabold text-white uppercase'>79 </p>
                        <p className='text-base font-medium text-white uppercase'>Great </p>
                        
                        <p className='mt-2 text-base font-semibold text-white'>Stake.com </p>
                    </div>
                    <div className='space-y-3 p-6 bg-card-primary/15 rounded-b-lg '>
                    <div className='relative flex items-center justify-between'>
                        <p className="text-white text-base font-medium">Performance</p>
                        <div className=' px-2 flex justify-end'>
                            <span className=' w-8 h-8 bg-primary shadow-btn-shadow rounded-full flex items-center justify-center font-semibold text-white text-xs'>63</span>
                        </div>
                    </div>
                    <div className='relative flex items-center justify-between'>
                        <p className="text-white text-base font-medium">Usability</p>
                        <div className=' px-2 flex justify-end'>
                            <span className=' w-8 h-8 bg-progress-third shadow-btn-shadow rounded-full flex items-center justify-center font-semibold text-white text-xs'>40</span>
                        </div>
                    </div>
                    <div className='relative flex items-center justify-between'>
                        <p className="text-white text-base font-medium">Accessibility</p>
                        <div className=' px-2 flex justify-end'>
                            <span className=' w-8 h-8 bg-primary shadow-btn-shadow rounded-full flex items-center justify-center font-semibold text-white text-xs'>78</span>
                        </div>
                    </div>
                    <div className='relative flex items-center justify-between'>
                        <p className="text-white text-base font-medium">Perception</p>
                        <div className=' px-2 flex justify-end'>
                            <span className=' w-8 h-8 bg-progress-primary shadow-btn-shadow rounded-full flex items-center justify-center font-semibold text-white text-xs'>63</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            
            </div>
        </div>
            <div className='absolute -top-80 z-0'>
                <svg width="1275" height="957" viewBox="0 0 1275 957" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_2808_732)">
                    <path d="M875 478.5C875 521.854 768.668 557 637.5 557C506.332 557 400 521.854 400 478.5C400 435.146 506.332 400 637.5 400C768.668 400 875 435.146 875 478.5Z" fill="#26FFF2" fill-opacity="0.65"/>
                    </g>
                    <defs>
                    <filter id="filter0_f_2808_732" x="0" y="0" width="1275" height="957" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_2808_732"/>
                    </filter>
                    </defs>
                    </svg>
            </div>
            
    </div>
  )
}

export default executivesummary