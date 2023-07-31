import playButtonImg from "../../assets/playbutton.png"
import Image from "next/image"
interface Props{
    pageTitle: String,
    heroContent: String

}
const Hero = ({pageTitle, heroContent}: Props)=>{
    return(
        <div className="w-full p-24 flex justify-between items-center bg-[url('/images/landingbg.JPG')] relative mt-[-3px]">
            <div className="left-content">
                <h1 className="text-6xl font-extrabold text-white pb-10">{pageTitle}</h1>
                <p 
                className="w-1/2 leading-[2.5rem] 
                    //  text-white
                    ">{heroContent}</p>
            </div>

            <div className="w-24 h-16 rounded-full border border-8 bg-[#523873] border-[#a9b5bd] flex justify-center items-center">
                <Image src={playButtonImg} alt="" className="w-6 h-6"/>
            </div>

            {/* <svg xmlns="http://www.w3.org/2000/svg" className="absolute w-full">
                <path d="M1439.5 0.5H0.5V422L38 482.5L522 484.5L1439.5 382.5V0.5Z" fill="#d9d9d90a" stroke="black"/>
            </svg> */}
        </div>
    )
}

export default Hero