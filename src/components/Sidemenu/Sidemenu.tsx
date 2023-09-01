"use client"
import Link from "next/link"
import { useState } from "react"

interface Props {
    tabs: String[],
    parent: String,
}
const Sidemenu = ({tabs, parent}: Props)=>{

    const [activeTab, setActiveTab] = useState(tabs[0])
    console.log(activeTab)

    return(
        <div className="hidden md:flex w-[30vw] h-fit flex flex-col bg-slate-100">
            {tabs.map((tab,index) =>{
                return(
                    <Link href={`/${parent}/${tab.split(" ")[0]}`} onClick={()=> setActiveTab(tab)} className={activeTab == tab ? "py-4 pl-4 border-b border-b-2 hover:bg-[#523873] text-white hover:text-white bg-[#523873]" : "py-4 pl-4 border-b border-b-2 hover:bg-[#523873] active:bg-[#523873] active:text-white hover:text-white"} key={index}>
                        {tab}
                    </Link>
                )
            })}
        </div>
    )
}

export default Sidemenu