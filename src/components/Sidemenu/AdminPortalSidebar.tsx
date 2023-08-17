'use client'
import Link from 'next/link'
import React,{useState} from 'react'
import Image from 'next/image'


const AdminPortalSidebar = () => {
        const [activeLink,setActiveLink] = useState('Dashboard');
        const sidebarLinks = [
                {
                        title: "Dashboard",
                        to: '/admin/',
                        icon: '/svg/dashboard.svg'
                }, {
                        title: "Report-cards",
                        to: '/admin/report-cards',
                        icon: '/svg/reportcards.svg'
                }, {
                        title: "Innovations",
                        to: '/admin/innovations',
                        icon: '/svg/innovations.svg'
                }, {
                        title: "Parents  | Students",
                        to: '/admin/parents-students',
                        icon: '/svg/addInnovations.svg'
                }, {
                        title: "Customizations",
                        to: '/admin/customizations',
                        icon: '/svg/opportunities.svg'
                }, {
                        title: "Profile",
                        to: '/admin/profile',
                        icon: '/svg/profile.svg'
                }
        ]
        const handleStayActive = (current:string)=>{
setActiveLink(current);
        }
        return (
                <div className='bg-[#D9D9D975] border-2 border-[#43434305] p-1 rounded-md h-full  w-fit md:w-[25vw] lg:w-[20vw] text-[#00000075] text-sm'>
                        <p className='font-semibold my-2 mx-3'>Menu</p>
                        <div className='font-medium'>
                                {sidebarLinks.map((link, index) => {
                                        return (
                                                <Link onClick={()=>handleStayActive(link.title)} key={index} href={link.to} className={`flex flex-row gap-5 items-center p-3 rounded-lg hover:bg-[rgba(42,10,82,0.1)] hover:text-[rgba(42,10,82,0.8)] ${activeLink == link.title && 'text-[rgba(42,10,82,0.8)]'}`}>
                                                        <Image  height={20} width={20} src={link.icon} alt={link.title} />
                                                        <p className='hidden md:block'>{link.title}</p>
                                                </Link>
                                        )
                                })}
                        </div>
                </div>
        )
}

export default AdminPortalSidebar