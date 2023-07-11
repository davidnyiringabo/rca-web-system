import Link from "next/link"


interface Props {
    tabs: String[],
    parent: String,
}
const Sidemenu = ({tabs, parent}: Props)=>{
    return(
        <div className="w-[30rem] h-fit flex flex-col bg-slate-100">
            {tabs.map(tab =>{
                return(
                    <Link href={`/${parent}/${tab.split(" ")[0]}`} className="py-4 pl-4 border-b border-b-2 hover:bg-[#523873] active:bg-[#523873] active:text-white hover:text-white">
                        {tab}
                    </Link>
                )
            })}
        </div>
    )
}

export default Sidemenu