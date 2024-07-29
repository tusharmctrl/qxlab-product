import React from 'react'
import BgImg from "../../../public/image/svg-shape.png";
import MainImg from "../../../public/image/main-img.png";
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className='relative bg-bg-primary print:bg-bg-primary px-28 py-32 h-dvh overflow-hidden'>
        <div className='relative max-w-6xl z-10'>
            <h1 className='text-83px font-bold text-white leading-5.2rem'>QXi REPORT <span className='text-73px font-normal block'>OCT 2024</span></h1>
            <div className='space-y-5 mt-11 '>
                <p className='text-xl font-light text-white'>We are delighted to present to you the QXI Report for October 2024. This report offers a comprehensive analysis of your business and competitors, providing valuable insights and trends derived from QXi tool. Our goal is to empower you with the knowledge you need to stay ahead in your industry.</p>
                <p className='text-xl font-light text-white'>We hope you find this report insightful and valuable. Our team is dedicated to helping you leverage these insights to optimize your business strategies and achieve greater success.
                Thank you for choosing our services. We look forward to continuing to support your growth and excellence.
                Sincerely,

                QXLab.io</p>
            </div>
            <div className='relative mt-16'>
            <form className="max-w-4xl ">
                <label  className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-5 flex items-center ps-3 pointer-events-none">
                    <svg className='w-9 h-9 fill-white/45' width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.0667 1.4261C20.3955 0.571645 21.6045 0.571648 21.9333 1.4261L24.731 8.6959C24.8325 8.95985 25.0411 9.16844 25.3051 9.27002L32.5749 12.0677C33.4293 12.3965 33.4293 13.6054 32.5749 13.9343L25.3051 16.7319C25.0411 16.8335 24.8325 17.0421 24.731 17.3061L21.9333 24.5759C21.6045 25.4303 20.3955 25.4303 20.0667 24.5758L17.269 17.3061C17.1675 17.0421 16.9589 16.8335 16.6949 16.7319L9.42512 13.9343C8.57067 13.6054 8.57067 12.3965 9.42513 12.0677L16.6949 9.27002C16.9589 9.16844 17.1675 8.95985 17.269 8.6959L20.0667 1.4261Z"/>
                    <path d="M11.7638 28.1675C12.6246 28.4793 12.6485 29.688 11.8007 30.0337L8.88649 31.2218C8.6246 31.3286 8.42017 31.5413 8.32383 31.8072L7.25177 34.7661C6.9399 35.6269 5.73123 35.6508 5.38559 34.803L4.19743 31.8887C4.09066 31.6268 3.87799 31.4224 3.61208 31.3261L0.653161 30.254C-0.207626 29.9421 -0.231519 28.7335 0.616271 28.3878L3.53051 27.1997C3.7924 27.0929 3.99683 26.8802 4.09317 26.6143L5.16523 23.6554C5.4771 22.7946 6.68577 22.7707 7.03141 23.6185L8.21957 26.5328C8.32634 26.7946 8.53901 26.9991 8.80492 27.0954L11.7638 28.1675Z" />
                    </svg>

                    </div>
                    <input type="search" id="default-search" className="block w-full p-6 ps-24 text-lg focus:outline-0 text-white placeholder:text-white/40  rounded-full bg-bg-secondary/65" placeholder="www.bet365.com" required />
                    <button type="submit" className="text-white absolute end-6 bottom-3.5 bg-bg-third font-bold shadow-btn-shadow rounded-full text-lg px-7 py-2.5 ">OCT 2024</button>
                </div>
            </form>
            </div>

        </div>
        <div className='absolute bottom-3 left-1/2 -translate-y-1/2 z-10'>
                <a href='#'>
                <svg className='w-24 h-16' viewBox="0 0 93 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2805_639)">
                    <path d="M46.5 48.2973H36.9439L32.8437 43.5137C29.8229 44.9991 26.434 45.83 22.8442 45.83C10.2506 45.83 0 35.5579 0 22.9192C0 10.2805 10.2506 0 22.8442 0C35.4377 0 45.6967 10.2805 45.6967 22.9192C45.6967 25.8313 45.1528 28.6259 44.157 31.1939H35.2118C36.7933 28.8273 37.7221 25.9823 37.7221 22.9192C37.7221 14.6948 31.053 7.99779 22.8525 7.99779C14.6521 7.99779 7.9829 14.6864 7.9829 22.9192C7.9829 31.152 14.6521 37.8322 22.8525 37.8322C24.4257 37.8322 25.9486 37.5804 27.3795 37.1272L21.5137 30.2792H31.0697L46.5 48.2973Z" fill="#A5FFED"/>
                    <path d="M92.9993 44.9276H83.2763L70.8792 29.047L58.4905 44.9276H48.7676L66.0262 22.8098L49.0922 1.12305H58.8152L92.9993 44.9276ZM81.7213 15.1611H71.9899L82.9517 1.12305H92.6746L81.7213 15.1611Z" fill="#A5FFED"/>
                    <path d="M24.4154 66.6578H15.5039V54.0786H17.8371V64.4806H24.4154V66.6494V66.6578Z" fill="#A5FFED"/>
                    <path d="M38.4825 66.6578H36.1072L34.9617 63.83H28.7708L27.6253 66.6578H25.25L30.329 54.0786H33.395L38.4741 66.6578H38.4825ZM34.111 61.7279L31.862 56.1724L29.6131 61.7279H34.1025H34.111Z" fill="#A5FFED"/>
                    <path d="M51.7138 63.0625C51.7138 65.0478 50.0881 66.6578 48.0835 66.6578H40.4102V54.0786H47.7381C49.6417 54.0786 51.1916 55.6051 51.1916 57.4987C51.1916 58.8083 50.2145 59.7175 49.6923 60.0429C50.3914 60.3682 51.7138 61.3608 51.7138 63.0625ZM47.2833 56.1974H42.6844V59.167H47.2833C48.1172 59.167 48.791 58.5247 48.791 57.6989C48.791 56.8731 48.1172 56.2057 47.2833 56.2057V56.1974ZM49.3638 62.8623C49.3638 61.9364 48.6057 61.194 47.6708 61.194H42.6844V64.5473H47.6708C48.6057 64.5473 49.3638 63.7966 49.3638 62.8707V62.8623Z" fill="#A5FFED"/>
                    <path d="M53.248 65.4903C53.248 64.6561 53.9303 63.9805 54.7726 63.9805C55.6149 63.9805 56.2972 64.6561 56.2972 65.4903C56.2972 66.3245 55.6149 67.0001 54.7726 67.0001C53.9303 67.0001 53.248 66.3245 53.248 65.4903Z" fill="#A5FFED"/>
                    <path d="M58.8223 54.0786H61.1554V66.6578H58.8223V54.0786Z" fill="#A5FFED"/>
                    <path d="M77.1432 60.3684C77.1432 64.022 74.1447 66.9916 70.4554 66.9916C66.7662 66.9916 63.7676 64.022 63.7676 60.3684C63.7676 56.7147 66.7662 53.7451 70.4554 53.7451C74.1447 53.7451 77.1432 56.7147 77.1432 60.3684ZM74.8101 60.3684C74.8101 57.991 72.856 56.0557 70.4554 56.0557C68.0549 56.0557 66.1007 57.991 66.1007 60.3684C66.1007 62.7457 68.0549 64.681 70.4554 64.681C72.856 64.681 74.8101 62.7457 74.8101 60.3684Z" fill="#A5FFED"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_2805_639">
                    <rect width="93" height="67" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>

                </a>
            </div>
            <div className='absolute left-1/2 -translate-x-1/2 -bottom-56'>
            <svg width="1275" height="804" viewBox="0 0 1275 804" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_2805_638)">
                <path d="M875 478.5C875 521.854 768.668 557 637.5 557C506.332 557 400 521.854 400 478.5C400 435.146 506.332 400 637.5 400C768.668 400 875 435.146 875 478.5Z" fill="#26FFF2" fill-opacity="0.65"/>
                </g>
                <defs>
                <filter id="filter0_f_2805_638" x="0" y="0" width="1275" height="957" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_2805_638"/>
                </filter>
                </defs>
                </svg>

            </div>
            <div className='absolute left-28 -top-5'>
                <svg width="1194" height="707" viewBox="0 0 1194 707" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_2805_637)">
                    <path d="M794 228.5C794 271.854 687.668 307 556.5 307C425.332 307 319 271.854 319 228.5C319 185.146 425.332 150 556.5 150C687.668 150 794 185.146 794 228.5Z" fill="#26FFF2" fill-opacity="0.65"/>
                    </g>
                    <defs>
                    <filter id="filter0_f_2805_637" x="-81" y="-250" width="1275" height="957" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_2805_637"/>
                    </filter>
                    </defs>
                </svg>

            </div>

            <div className='absolute qx-bg-imge'>
                <Image src={BgImg} alt='BgImg'/>
            </div>
            <div className='absolute qx-main'>
                <Image src={MainImg} alt='MainImg'/>
            </div>
    </div>
  )
}

export default HomePage