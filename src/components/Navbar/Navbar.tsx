import Link from "next/link"
import logo from "../../assets/logo.png"
import Image from "next/image"
import search from "../../assets/search.png"

const Navbar = () => {
    return (
        <div className="w-full">
            <div className="upper-container w-full flex justify-between px-9 py-2">
                <Link className="text-lg" href={"/"}>Welcome to <span className="text-purpleColor">Rwanda Coding Academy</span></Link>

                <span className="flex gap-1"><Link href={"/"}>Student</Link> / <Link href={"/"}>Staff Portal</Link></span>
            </div>
            <div className="w-full flex justify-between px-6 lower-navbar py-6 items-center text-white">
                <Link href={"/"}><Image src={logo} alt={""} /></Link>
                <div className="flex gap-6 bg-[#]">
                    <Link href={"/about_us"}>
                        About us
                    </Link>
                    <Link href={"/academics"}>Academics</Link>
                    <Link href={"/news"}>News</Link>
                    <Link href={"/innovations"}>Innovations</Link>
                    <Link href={"/campus_life"}>Campus lfe</Link>
                    <Link href={"/admissions"}>Admissions</Link>
                    <Link href={"/alumni"}>Alumni</Link>
                    <Link href={"/contact_us"}>Contact us</Link>
                </div>

                <div className=" py-2 px-4 bg-[#D9D9D9] rounded-md cursor-pointer">
                    {/* <input className="w-12 py-2 px-4 bg-[#D9D9D9] rounded-md cursor-pointer focus:w-full outline-none text-black" /> */}
                    <Image src={search} alt=""/>
                </div>
                    
                {/* </div> */}
            </div>
        </div>
    )
}

export default Navbar