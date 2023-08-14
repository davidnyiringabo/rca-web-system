    import Image from "next/image"
import facebookIcon from "../../assets/facebook.png"
import githubIcon from "../../assets/github.png"
import instagramIcon from "../../assets/instagram.png"
import reditIcon from "../../assets/reddit.png"
import linkedInIcon from "../../assets/linkedin.png"
import slackIcon from "../../assets/slack.png"
import twitterIcon from "../../assets/twitter.png"
import whatsappIcon from "../../assets/whatsapp.png"
import snapchatIcon from "../../assets/snapchat.png"
import productIcon from "../../assets/product.png"
import evernoteIcon from "../../assets/evernote.png"

import Link from "next/link"

const Footer = ()=>{
    return(
        <div className="w-full flex flex-col bg-[#F3F4F8]">
            <div className="upper-container border-b ">
                <div className="linkes-container  flex flex-col md:flex-row w-full items-center md:items-start gap-4 md:justify-evenly p-7 h-[85%]">
                    <div className="flex items-start w-full justify-evenly  md:w-1/3 md:justify-between">
                        <div className="flex flex-col gap-6">
                            <h4 className="font-extrabold text-xl">Support</h4>
                            <Link href={"/"} className=" text-[#4b4b4bad]">Call support now</Link>
                            <Link href={"/"} className=" text-[#4b4b4bad]">Give your feedback</Link>
                            <Link href={"/"} className=" text-[#4b4b4bad]">Cancellation options</Link>
                            <Link href={"/"} className=" text-[#4b4b4bad]">Safety information</Link>
                        </div>

                        <div className="flex flex-col gap-6">
                            <h4 className="font-extrabold text-xl">Company</h4>
                            <Link href={"/about_us"} className=" text-[#4b4b4bad]">About RCA</Link>
                            <Link href={"/news"} className=" text-[#4b4b4bad]">Our News </Link>
                            <Link href={"/campus_life"} className=" text-[#4b4b4bad]">Campus Life</Link>
                            <Link href={"/academics"} className=" text-[#4b4b4bad]">Academics</Link>
                            <Link href={"/news/In"} className=" text-[#4b4b4bad]">Community Blogs</Link>
                            <Link href={"/admissions"} className=" text-[#4b4b4bad]">Admissions</Link>
                        </div>
                    </div>

                    <div className="flex items-start w-full justify-evenly mt-3 md:mt-0  md:w-1/3 md:justify-between">
                        <div className="flex flex-col gap-6">
                            <h4 className="font-extrabold text-xl">Contact</h4>
                            <Link href={"/contact_us"} className=" text-[#4b4b4bad]">Partneship</Link>
                            <Link href={"/contact_us"} className=" text-[#4b4b4bad]">Give your feedback</Link>
                            <Link href={"/contact_us"} className=" text-[#4b4b4bad]">Get in touch</Link>
                            <hr/>
                            <h5 className=" text-[#4b4b4bad]">info@rca.ac.rw</h5>
                            <h5 className=" text-[#4b4b4bad]">(+250)781 294 147</h5>

                        </div>

                        <div className="flex flex-col gap-6">
                            <h4 className="font-extrabold text-xl">Social media</h4>
                            <Link href={"https://www.linkedin.com/company/rwanda-coding-academy"} className=" text-[#4b4b4bad]">LinkedIn</Link>
                            <Link href={"https://www.linkedin.com/company/rwanda-coding-academy"} className=" text-[#4b4b4bad]">Facebook</Link>
                            <Link href={"https://www.linkedin.com/company/rwanda-coding-academy"} className=" text-[#4b4b4bad]">Instagram</Link>
                            <Link href={"https://www.linkedin.com/company/rwanda-coding-academy"} className=" text-[#4b4b4bad]">Twitter</Link>
                            <Link href={"https://www.linkedin.com/company/rwanda-coding-academy"} className=" text-[#4b4b4bad]">Discord</Link>
                            <Link href={"https://www.linkedin.com/company/rwanda-coding-academy"} className=" text-[#4b4b4bad]">Slack</Link>
                        </div>  
                    </div>
                                     
                </div>
                <div className="icons-container flex justify-center gap-4 py-4">
                   <h5><Image src={facebookIcon} alt=""/></h5> 
                   <h5><Image src={githubIcon} alt=""/></h5> 
                   <h5><Image src={instagramIcon} alt=""/></h5> 
                   <h5><Image src={reditIcon} alt=""/></h5> 
                   <h5><Image src={linkedInIcon} alt=""/></h5> 
                   <h5><Image src={slackIcon} alt=""/></h5> 
                   <h5><Image src={twitterIcon} alt=""/></h5> 
                   <h5><Image src={snapchatIcon} alt=""/></h5> 
                   <h5><Image src={whatsappIcon} alt=""/></h5> 
                   <h5><Image src={evernoteIcon} alt=""/></h5> 
                   <h5><Image src={productIcon} alt=""/></h5>
                </div>
            </div>

            <div className="footer-footer w-full py-6 flex justify-between items-center px-12">
                <h5 className="text-sm">Copyright @ Rwanda Coding Academy. All rights reserved</h5>
                <h5>Credits to this Platform <span className="text-[#523873] text-sm font-extrabold cursor-pointer">maintainers</span></h5>
            </div>
        </div>
    )
}
export default Footer