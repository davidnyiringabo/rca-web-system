import Image from 'next/image'
import React from 'react'
import logo from "../../assets/rcalogo.png"

interface Props {
        logginPage?: boolean
}

const StudentPortalNavbar: React.FC<Props> = ({ logginPage }) => {
        return (
                <div className='flex flex-row justify-between items-center mx-3 my-1.5 bg-[#D9D9D975] border-2 border-[#43434305] p-1 rounded-md  '>
                        <Image alt='Logo' src={logo} width={100} height={25} />
                        {!logginPage && (
                                <div className="bg-[white]   relative w-[40%]" >
                                        <input type="text" placeholder='Search of pages here  .  .  .' className='h-full w-full px-5 pr-10 py-3 border-[2px] border-[#2A0A52] rounded-md outline-none' />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none" className='absolute right-2 cursor-pointer top-[30%]'>
                                                <path d="M9 0C13.968 0 18 4.032 18 9C18 13.968 13.968 18 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0ZM9 16C12.867 16 16 12.867 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16ZM17.485 16.071L20.314 18.899L18.899 20.314L16.071 17.485L17.485 16.071Z" fill="#434343" fillOpacity="0.71" />
                                        </svg>
                                </div>
                        )}
                        <div className='h-11 w-11 bg-[#0828D230] p-2 rounded-full'>
                                <div className="h-7 w-7 rounded-full bg-[#0828D296]"></div>
                        </div>
                </div>
        )
}

export default StudentPortalNavbar