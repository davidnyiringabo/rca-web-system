import Link from "next/link"


interface Props {
    tabs: String[]
}
const Sidemenu = ({tabs}: Props)=>{
    return(
        <div className="w-[20rem] h-fit flex flex-col bg-slate-100">
            {tabs.map(tab =>{
                return(
                    <Link href={`${tab.trim()}`} className="py-4 pl-4 border-b border-b-2 hover:bg-[#523873] active:bg-[#523873] active:text-white hover:text-white">{tab}</Link>
                )
            })}
        </div>
    )
}

export default Sidemenu