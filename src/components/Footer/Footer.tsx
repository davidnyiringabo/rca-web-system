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
                <div className="linkes-container  flex flex-col md:flex-row  w-full items-center md:items-start gap-4 md:justify-evenly p-7 h-[85%]">
                    <div className="flex flex-col gap-6">
                        <h4 className="font-extrabold text-xl">Support</h4>
                        <Link href={"support"} className=" text-[#4b4b4bad]">Call support now</Link>
                        <Link href={"support"} className=" text-[#4b4b4bad]">Give your feedback</Link>
                        <Link href={"support"} className=" text-[#4b4b4bad]">Cancellation options</Link>
                        <Link href={"support"} className=" text-[#4b4b4bad]">Safety information</Link>
                    </div> 

                    <div className="flex flex-col gap-6">
                        <h4 className="font-extrabold text-xl">Company</h4>
                        <Link href={"support"} className=" text-[#4b4b4bad]">About RCA</Link>
                        <Link href={"support"} className=" text-[#4b4b4bad]">Our News </Link>
                        <Link href={"support"} className=" text-[#4b4b4bad]">Campus Life</Link>
                        <Link href={"support"} className=" text-[#4b4b4bad]">Academics</Link>
                        <Link href={"support"} className=" text-[#4b4b4bad]">Community Blogs</Link>
                        <Link href={"support"} className=" text-[#4b4b4bad]">Admissions</Link>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="font-extrabold text-xl">Contact</h4>
                        <Link href={"support"} className=" text-[#4b4b4bad]">Partneship</Link>
                        <Link href={"support"} className=" text-[#4b4b4bad]">Give your feedback</Link>
                        <Link href={"support"} className=" text-[#4b4b4bad]">Get in touch</Link>
                        <hr/>
                        <Link href={"support"} className=" text-[#4b4b4bad]">info@rca.ac.rw</Link>
                        <Link href={"support"} className=" text-[#4b4b4bad]">(+250)781 294 147</Link>

                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="font-extrabold text-xl">Social media</h4>
                        <Link href={"support"} className=" text-[#4b4b4bad]">LinkedIn</Link>
                        <Link href={"support"} className=" text-[#4b4b4bad]">Facebook</Link>
                        <Link href={"support"} className=" text-[#4b4b4bad]">Instagram</Link>
                        <Link href={"support"} className=" text-[#4b4b4bad]">Twitter</Link>
                        <Link href={"support"} className=" text-[#4b4b4bad]">Discord</Link>
                        <Link href={"support"} className=" text-[#4b4b4bad]">Slack</Link>
                    </div>                   
                </div>
                <div className="icons-container flex justify-center gap-4 py-4">
                   <Link href={"/"}><Image src={facebookIcon} alt=""/></Link> 
                   <Link href={"/"}><Image src={githubIcon} alt=""/></Link> 
                   <Link href={"/"}><Image src={instagramIcon} alt=""/></Link> 
                   <Link href={"/"}><Image src={reditIcon} alt=""/></Link> 
                   <Link href={"/"}><Image src={linkedInIcon} alt=""/></Link> 
                   <Link href={"/"}><Image src={slackIcon} alt=""/></Link> 
                   <Link href={"/"}><Image src={twitterIcon} alt=""/></Link> 
                   <Link href={"/"}><Image src={snapchatIcon} alt=""/></Link> 
                   <Link href={"/"}><Image src={whatsappIcon} alt=""/></Link> 
                   <Link href={"/"}><Image src={evernoteIcon} alt=""/></Link> 
                   <Link href={"/"}><Image src={productIcon} alt=""/></Link>
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