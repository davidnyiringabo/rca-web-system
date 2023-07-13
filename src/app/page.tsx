import Button from "../components/Button";
import Navbar from "../components/Navbar/Navbar";
import '../styles/globals.css'
// import { HiArrowSmRight } from 'react-icons/hi'
import risa from '../assets/RISALogo.png'
import rtb from '../assets/rtbLogo.png'
import giz from '../assets/gizLogo.png'
import mineduc from '../assets/mineduc.png'
import minict from '../assets/minict.png'
import koica from '../assets/koica.png'
import nesa from '../assets/nesalogo.png'
import reb from '../assets/rebLogo.png'
import wbank from '../assets/worldBank.png'
import abank from '../assets/africaBank.png'
import Image from "next/image";
import Card from "../components/card";
import mission from '../assets/mission 1.png'
import vission from '../assets/vision 1.png'
import goals from '../assets/goal 1.png'
import mainImg from '../assets/Intersect.png'
import img2 from '../assets/Intersect(1).png'
// import { FaChevronLeft } from "react-icons/fa"
import Footer from "../components/Footer/Footer"
import Pathvec from '../assets/vectors/Pathvec'
import { pathData } from "../data/adminPath";
import NumGraph from "../assets/vectors/Numgraph";
import Mainarticle from "../components/News/Mainarticle";
const HomePage = () => {
  const partners: string[] = ["/assets/africaBank.png", "/assets/worldBank.png", "/assets/koica.png", "/assets/nesalogo.png", "/assets/RISALogo.png", "/assets/gizLogo.png", "/assets/rtbLogo.png", "/assets/rebLogo.png", "/assets/mineduc.png", "/assets/minict.png"]
  return (
    <div className="">
      <div className="bg-purpleColor">
        {/* background */}
        <div className="bg-[url('../assets/background.png')] w-[100vw] h-[90vh] bg-50% bg-no-repeat bg-fullcover p-20 space-y-8">
          <p className="text-white">Leading Through Digital Innovation</p>
          <h3 className=" text-outline-white text-5xl font-semibold ">Welcome To</h3>
          <p className="font-semibold text-white text-6xl">Rwanda Coding Academy</p>
          <p className="text-white text-lg">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons adipisci velit, sed quia<br />
            non numquam eius modi ullma tempora incidunt ut labore et dolore magnam aliquam.</p>
          <div className="flex w-1/2 gap-12 translate-y-64">
            <Button text="View Academic Structure" className="bg-purpleColor p-4 rounded-lg text-white "/>
            <Button text="Student or Staff? Use Portal" className="text-purpleColor p-4 rounded-lg bg-[#D9D9D9] border border-purpleColor" />
          </div>
        </div>
        <div className="h-32 w-full"></div>
      </div>
      {/* Stake holder */}
      <div className="w-full bg-white">
        <div className="space-y-8 py-12">
          <h3 className="text-textGray text-center text-3xl font-medium"> Stakeholders and partners</h3>
          <p className="text-center text-gray-400">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci veli <br />incidunt ut labore et dolore magnam aliquam.</p>
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
        <div className="w-full grid grid-cols-3 px-16 z-20 -translate-y-28">
          <Card image={mission} title="Our Mission" description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci veli incidunt ut labore et dolore magnam aliquam." />
          <Card image={vission} title="Our Vision" description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci veli incidunt ut labore et dolore magnam aliquam." />
          <Card image={goals} title="Our Goals" description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci veli incidunt ut labore et dolore magnam aliquam." />
        </div>
      </div>
      <div className="w-full flex relative bg-[#523873]/10  h-[50vh] ">
        <div className="basis-1/2 p-8 space-y-6 ">
          <p className="text-purpleColor font-semibold text-md" >INNOVATION HUB</p>
          <p className="text-textGray font-semibold text-lg w-2/4">Get to Know Our Innovation Hub and what Our Community is working on</p>
          <p className="text-textGray">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremquelaudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
            Quasi architecto beatae vitae dicta sunt explicabo. Quis nostrud kemmith exercitation ullamco laboris nisi ut aliquip.</p>
          <p className="text-textGray">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci velit, sed quia non numquam eius modi ullma tempora incidunt ut labore et dolore magnam aliquam</p>
        </div>
        <div className=" h-[50vh] basis-1/2 flex justify-center py-8">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[url('../assets/trapvec.png')] border border-purpleColor translate-x-6 translate-y-36 z-20">
            <div className="text-purpleColor">
              {/* <FaChevronLeft /> */}
            </div>
          </div>
          <div className="relative bg-white  w-2/3 rounded-lg">

          </div>
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white border border-purpleColor -translate-x-6 translate-y-36">
            <div className="rotate-180 text-purpleColor" >
              {/* <FaChevronLeft /> */}
            </div>
          </div>

        </div>
      </div>
      {/* Admission and road map */}
      <div className="w-full bg-white p-4 space-y-6">
        <p className="text-purpleColor font-semibold text-md text-center">ADMISSION TIMELINE & ROADMAP</p>
        <p className="text-textGray font-semibold text-lg text-center">Timeline to Get Admitted to This Great
          Community</p>
        <p className="text-[#4343436E] text-center">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci velit, sed quia non numquam eius modi ullma tempora incidunt ut labore et dolore magnam aliquam</p>
        <div className="flex-col relative">

          <div className="w-3/4 flex items-center justify-start px-32  ml-32">
            <Pathvec />
          </div>
          <div className="-translate-y-[1450px] px-32 space-y-[230px]">
            {pathData.map((path) => {
              if (path.id % 2 != 0) {
                return (
                  <div key={path.id} className="w-full flex items-center ml-32 gap-12">
                    <div className="w-20 h-20 rounded-full bg-purpleColor border-2 border-white "></div>
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
                  <div className="basis-1/2 space-y-8">
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
      <div className="w-full bg-[#523873]/10 flex px-12 py-8">
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
      <div className="bg-white w-full ">
        <p className="text-purpleColor font-semibold text-md">OUR NUMBERS</p>
        <p className="text-textGray font-semibold text-lg ">Lets Get To Numbers</p>
        <div className="bg-purpleColor relative items-end ">
          <NumGraph />
        </div>

      </div>
      {/* Our News */}
      <div className="w-full bg-white p-8 space-y-8">
        <p className="text-purpleColor text-md font-semibold text-center">OUR NEWS</p>
        <p className="text-textGray font-semibold text-lg text-center">Our Latest News</p>
        <p className="text-[#4343436E] text-center">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci velit, sed quia non numquam eius modi ullma tempora incidunt ut labore et dolore magnam aliquam</p>
        <div className="w-full flex h-[35vh]">
          <div className="basis-1/2">
            <Mainarticle newsTitle="Rwanda Coding Academy Get the 5 students in the Daiho Hackerthon" publicationTime="Sunday 24th September, 2020" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomePage;