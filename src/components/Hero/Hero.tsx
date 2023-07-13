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
        </div>
    )
}

export default Hero