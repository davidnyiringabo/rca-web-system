'use client'
import Button from "../components/Button";
import Navbar from "../components/Navbar/Navbar";
import '../styles/globals.css'
import risa from '../assets/RISALogo.png'
import rtb from '../assets/logo2.png'
import giz from '../assets/gizLogo.png'
import mineduc from '../assets/mineduc.png'
import minict from '../assets/minict.png'
import koica from '../assets/koica.png'
import nesa from '../assets/nesalogo.png'
import reb from '../assets/rebLogo.png'
import wbank from '../assets/worldBank.png'
import abank from '../assets/africaBank.png'
import Image, { StaticImageData } from "next/image";
import Card from "../components/card";
import mission from '../assets/mission.png'
import vission from '../assets/vision.png'
import goals from '../assets/goal.png'
import mainImg from '../assets/studentOne.jpg'
import img2 from '../assets/newThree.jpg'
import { pathData } from "../data/adminPath";
import Mainarticle from "../components/News/Mainarticle";
import StatView from "../components/stats";
import {FaArrowRight,FaChevronLeft} from 'react-icons/fa'
import NewsComponent from "./news/components/NewsComponent/NewsComponent";
import { SwiperNavigation } from "../utils/swiper";
import {useEffect} from 'react'
import Pathvec from "../assets/vectors/Pathvec";
import Numgraph from "../assets/vectors/Numgraph";
const HomePage = () => {
  const partners: string[] = ["/assets/africaBank.png", "/assets/worldBank.png", "/assets/koica.png", "/assets/nesalogo.png", "/assets/RISALogo.png", "/assets/gizLogo.png", "/assets/rtbLogo.png", "/assets/rebLogo.png", "/assets/mineduc.png", "/assets/minict.png"]
  const sliders:StaticImageData[]= [mainImg,img2]
   const swiper = new SwiperNavigation(sliders);



  return (
    <div className="">
      <div className="bg-purpleColor">
        {/* background */}
        <div className="bg-[url('../assets/background.png')] mx-auto w-[98vw] h-[90vh] bg-50% bg-no-repeat bg-fullcover p-20 space-y-8">
          <p className="text-white">Leading Through Digital Innovation</p>
          <h3 className=" text-outline-white text-5xl font-semibold ">Welcome To</h3>
          <p className="font-semibold text-white text-6xl">Rwanda Coding Academy</p>
          <p className="text-white text-lg">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons adipisci velit, sed quia<br />
            non numquam eius modi ullma tempora incidunt ut labore et dolore magnam aliquam.</p>
          <div className="flex w-1/2 gap-12 translate-y-32">
            <Button text="View Academic Structure" className="bg-purpleColor p-4 px-16 rounded-lg text-white" icon={<FaArrowRight />}/>
            <Button text="Student or Staff? Use Portal" className="text-purpleColor p-4 px-16 rounded-lg bg-[#D9D9D9]  border border-purpleColor" />
          </div>
        </div>
        <div className="h-32 w-full"></div>
      </div>
      {/* Stake holder */}
      <div className="w-full bg-white">
        <div className="space-y-8 py-12">
          <h3 className="text-textGray text-center text-3xl font-medium"> Stakeholders and partners</h3>
          <p className="text-center text-lg text-[#4343436E] px-[450px]">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci veli incidunt ut labore et dolore magnam aliquam.</p>
          <div className=" grid grid-cols-6 space-y-4 mx-40">

            <Image src={abank} alt="partner image" width={100} height={80} />
            <Image src={wbank} alt="partner image" width={100} height={80} />
            <Image src={koica} alt="partner image" width={100} height={80} />
            <Image src={nesa} alt="partner image" width={100} height={80} />

            <Image src={risa} alt="partner image" width={100} height={80} />
            <Image src={giz} alt="partner image" width={100} height={80} />

            <Image src={rtb} alt="partner image" width={100} height={80} />
            <Image src={reb} alt="partner image" width={100} height={80} />
            <Image src={mineduc} alt="partner image" width={100} height={80} />
            <Image src={minict} alt="partner image" width={100} height={80} />
          </div>
        </div>
        <div className="w-full flex">
          <div className="basis-1/2 bg-white relative py-12 px-28" >
            <div className=" h-[630px] w-[481px] relative">
              <Image src={mainImg} fill alt="img1" />
            </div>
            <div className="h-[400px] w-[304px] absolute z-20 -translate-y-[550px] translate-x-[320px] border-8 rounded border-white ">
              <Image src={img2} alt="img2" className="rounded-2xl" fill />
            </div>
          </div>
          {/* about us */}
          <div className="basis-1/2 p-4 space-y-8">
            <p className="text-purpleColor font-medium text-start text-lg">MORE ABOUT US</p>
            <h4 className="text-textGray text-xl font-semibold ">Get To Know More About Our Excellent School</h4>
            <p className="text-[#4343436E] ">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremquelaudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              Quasi architecto beatae vitae dicta sunt explicabo. Quis nostrud kemmith exercitation ullamco laboris nisi ut aliquip.</p>
            <p className="text-[#4343436E]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremquelaudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              Quasi architecto beatae vitae dicta sunt explicabo. Quis nostrud kemmith exercitation ullamco laboris nisi ut aliquip.</p>
            <Button text="Continue Reading" className="bg-purpleColor p-4 rounded-xl text-white "/>
          </div>

        </div>
        <div className="w-full grid grid-cols-3 px-16 z-20 -translate-y-16">
          <Card image={mission} title="Our Mission" description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci veli incidunt ut labore et dolore magnam aliquam." />
          <Card image={vission} title="Our Vision" description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci veli incidunt ut labore et dolore magnam aliquam." />
          <Card image={goals} title="Our Goals" description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci veli incidunt ut labore et dolore magnam aliquam." />
        </div>
      </div>
      <div className="w-full flex relative bg-[#523873]/10  h-[50vh ">
        <div className="basis-1/2 p-8 space-y-6 ">
          <p className="text-purpleColor font-semibold text-md" >INNOVATION HUB</p>
          <p className="text-textGray font-semibold text-lg w-2/4">Get to Know Our Innovation Hub and what Our Community is working on</p>
          <p className="text-textGray">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremquelaudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
            Quasi architecto beatae vitae dicta sunt explicabo. Quis nostrud kemmith exercitation ullamco laboris nisi ut aliquip.</p>
          <p className="text-textGray">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci velit, sed quia non numquam eius modi ullma tempora incidunt ut labore et dolore magnam aliquam</p>
        </div>
        <div className=" h-[50vh] basis-1/2 flex justify-center py-8">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white border border-purpleColor translate-x-6 translate-y-36 z-20">
            <div className="text-purpleColor" onClick={swiper.handleBackward}>
              <FaChevronLeft />
            </div>
          </div>
          <div className="relative bg-white  w-2/3 rounded-lg">
<Image src={sliders[swiper.index]} fill alt="image" />
          </div>
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white border border-purpleColor -translate-x-6 translate-y-36">
            <div className="rotate-180 text-purpleColor" onClick={swiper.handleForward}>
              <FaChevronLeft />
            </div>
          </div>

        </div>
      </div>
      {/* Admission and road map */}
      <div className="w-full bg-white p-4 space-y-8">
        <p className="text-purpleColor font-semibold text-lg text-center">ADMISSION TIMELINE & ROADMAP</p>
        <p className="text-textGray font-semibold text-3xl text-center px-[300px]">Timeline to Get Admitted to This Great
          Community</p>
        <p className="text-[#4343436E] text-lg text-center px-[280px]">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci velit, sed quia non numquam eius modi ullma tempora incidunt ut labore et dolore magnam aliquam</p>
        <div className="flex-col relative">

          <div className="absolute w-3/4 h-2/3 translate-y-[280px] flex items-center justify-start  ml-36 ">
            <Pathvec />
          </div>
          <div className=" px-32 space-y-[200px]">
            {pathData.map((path) => {
              if (path.id % 2 != 0) {
                return (
                  <div key={path.id} className="w-full flex items-center ml-32 gap-12">
                    <div className="w-20 h-20 rounded-full bg-purpleColor border-2 border-white -ml-[125px]"></div>
                    <div className="basis-1/2 space-y-8">
                      <p className="text-purpleColor font-medium text-lg">{path.title}</p>
                      <p className="text-textGray">{path.description}</p>
                    </div>
                    <div className="font-bold text-purpleColor/10 text-6xl text-center basis-1/2">{path.id}</div>
                  </div>
                )
              }
              return (
                <div key={path.id} className="w-full flex items-center gap-20 ">
                  <div className="font-bold text-purpleColor/10 text-6xl basis-1/2 text-end">{path.id}</div>
                  <div className="w-20 h-20 rounded-full bg-purpleColor border-2 border-white flex mx-auto"></div>
                  <div className="basis-1/3 space-y-8">
                    <p className="text-purpleColor font-medium text-lg">{path.title}</p>
                    <p className="text-textGray">{path.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {/* Core study  and research fields */}
      <div className="w-full bg-[#523873]/10 flex px-12 py-8 translate-y-32">
        <div className="basis-1/2 space-y-12">
          <p className="text-purpleColor font-semibold text-md">CORE STUDY AND RESEARCH FILEDS</p>
          <p className="text-textGray font-semibold text-lg w-2/4">Core School Study and Research Fields</p>
          <p className="text-[#4343436E]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremquelaudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et Quasi architecto beatae vitae dicta sunt explicabo. Quis nostrud kemmith exercitation ullamco laboris nisi ut aliquip.</p>
          <p className="text-[#4343436E]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremquelaudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et Quasi architecto beatae vitae dicta sunt explicabo. Quis nostrud kemmith exercitation ullamco laboris nisi ut aliquip.</p>
          <p className="text-[#4343436E]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremquelaudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et Quasi architecto beatae vitae dicta sunt explicabo. Quis nostrud kemmith exercitation ullamco laboris nisi ut aliquip.</p>
          <Button text="Know Even More About Our Curriculium" className="bg-purpleColor p-4 rounded-lg text-white "/>
        </div>
        <div className="space-y-12 basis-1/2 px-auto">
          <div className="bg-white h-32 w-3/4"></div>
          <div className="bg-white h-32 w-3/4"></div>
          <div className="bg-white h-32 w-3/4"></div>
          <div className="bg-white h-32 w-3/4"></div>

        </div>

      </div>
      {/* Our Numbers */}
      <div className="bg-white w-full translate-y-36 ">
        <p className="text-purpleColor font-semibold text-lg pt-6 pl-12">OUR NUMBERS</p>
        <p className="text-textGray font-semibold text-3xl pl-12 pb-6">Lets Get To Numbers</p>
        <div className="bg-purpleColor relative flex-col ">
          <div className="w-full flex justify-end">
          <Numgraph />
          </div>
          <div className="absolute z-20 top-44 w-full px-32 grid grid-cols-4">
<StatView statNo={45} statDesc="Years Of Foundation" />
<StatView statNo={83} statDesc="Stackholders & Partners" />
<StatView statNo={120} statDesc="Students Completed" />
<StatView statNo={75} statDesc="Visible Projects Delivered" />

            </div>
        </div>

      </div>
      {/* Our News */}
      <div className="w-full bg-white p-8 space-y-8 translate-y-36 mb-40">
        <p className="text-purpleColor text-lg font-semibold text-center">OUR NEWS</p>
        <p className="text-textGray font-semibold text-3xl text-center">Our Latest News</p>
        <p className="text-[#4343436E] text-lg text-center px-[280px]">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci velit, sed quia non numquam eius modi ullma tempora incidunt ut labore et dolore magnam aliquam</p>
        <div className="w-full flex h-[560px] ">
          <div className="basis-1/2">
            <Mainarticle newsTitle="Rwanda Coding Academy Get the 5 students in the Daiho Hackerthon" publicationTime="Sunday 24th September, 2020" />
          </div>
          <div className="basis-1/2">
<NewsComponent date={"Sunday 24th September, 2020"} title="RCA wins at the National Level" content={"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci ipsum quia dolor sit amet, cons, adipisci ipsum quia dolor sit amet, cons, adipisci "} image={img2}  />
<NewsComponent date={"Sunday 24th September, 2020"} title="RCA wins at the National Level" content={"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci ipsum quia dolor sit amet, cons, adipisci ipsum quia dolor sit amet, cons, adipisci "} image={img2}  />

          </div>
        </div>
      <Button text="Read More of Our News" className="px-12 space-x-12 py-3 rounded-lg bg-purpleColor mx-auto text-white text-lg" icon={<FaArrowRight />} />
      </div>
      {/* OUR NEWS LETTER */}
      <div className="w-full bg-white p-8 space-y-8 mb-20">
<div className="w-full flex">
  <div className="basis-1/2 space-y-8">
      <p className="text-purpleColor font-semibold text-lg pt-6 pl-12">OUR NEWS LETTER</p>
        <p className="text-textGray font-semibold text-3xl pl-12">Subscribe To Our Daily News
Letter</p>
<p className="text-[#4343436E] text-lg text-start pl-12">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci velit, sed quia non numquam eius modi ullma tempora incidunt ut labore et dolore magnam aliquam</p>

<form className="pl-12 space-y-8 ">
  <input type="email" placeholder="Email Address" className="outline-none py-3 pl-4 bg-textGray/10 w-2/3 rounded-lg border-2 outline-none" />
  <Button text="Subscribe Now" icon={<FaArrowRight />} className="px-12  space-x-12 py-3 rounded-lg bg-purpleColor  text-white text-lg" />
</form>
  </div>
  <div className="basis-1/2 bg-white relative py-12 px-28" >
            <div className="h-[400px] w-[304px] absolute z-20 translate-y-[150px] -translate-x-[180px] border-8 rounded border-white ">
              <Image src={img2} alt="img2" className="rounded-2xl" fill />
            </div>
            <div className=" h-[630px] w-[481px] relative">
              <Image src={mainImg} fill alt="img1" />
            </div>
          </div>

</div>
      </div>
    </div>
  )
}
export default HomePage;