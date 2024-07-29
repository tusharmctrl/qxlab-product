import React from 'react'
import sitelogo from "../../../public/image/qxlogo.svg";
import seriveBG from "../../../public/image/ourservice.svg";
import Image from 'next/image';
export const Contact = () => {
  return (
    <div className='relative h-screen flex items-center justify-center overflow-hidden'>
        <div className='absolute -top-444px left-0'>
            <Image src={seriveBG} alt='seriveBG' className='scale-14'/>
        </div>
        <div className='relative max-w-lg w-2/6 text-center'>
            <Image src={sitelogo} alt='sitelogo' className='mx-auto'/>
            <h1 className="text-73px font-bold text-fill-transparent">Synergy</h1>
            <div className='relative space-y-4 mt-8'>
                <p className='text-base font-normal text-white text-left'>QXi is an insight and analysis tool that scores and highlights areas of improvement in your digital experiences.</p>
                <p className='text-base font-normal text-white text-left'>QXc provides the human expertise needed to interpret the scores from QXi and provides tailored strategies and support for continuous improvement.</p>
            </div>
            <div className='mx-auto mt-12'>
            <a href='#' className='text-lg text-white font-bold bg-bg-third rounded-full max-w-280px p-4 inline-block w-full '>Hire a Consultant </a>
            </div>
        </div>
    </div>
  );
};

export default Contact;