import Image from 'next/image'
import React from 'react'
import logo from "../../assets/rcalogo.png"

const StudentPortalNavbar = () => {
        return (
                <div className='flex flex-row justify-between items-center m-3 bg-[#D9D9D975] border-2 border-[#43434305] p-1 rounded-md'>
                        <Image alt='Logo' src={logo} width={100} height={60} />
                        <div className='h-11 w-11 bg-[#0828D230] p-2 rounded-full'>
                                <div className="h-7 w-7 rounded-full bg-[#0828D296]"></div>
                        </div>
                </div>
        )
}

export default StudentPortalNavbar