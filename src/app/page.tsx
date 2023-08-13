"use client";
import Button from "../components/Button";
import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";
import risa from "../assets/RISALogo.png";
import rtb from "../assets/logo2.png";
import giz from "../assets/gizLogo.png";
import mineduc from "../assets/mineduc.png";
import minict from "../assets/minict.png";
import koica from "../assets/koica.png";
import nesa from "../assets/nesalogo.png";
import reb from "../assets/rebLogo.png";
import wbank from "../assets/worldBank.png";
import abank from "../assets/africaBank.png";
import Image, { StaticImageData } from "next/image";
import Card from "../components/card";
import mission from "../assets/mission.png";
import vission from "../assets/vision.png";
import goals from "../assets/goal.png";
import mainImg from "../assets/studentOne.png";
import img2 from "../assets/newThree.png";
import { pathData } from "../data/adminPath";
import Mainarticle from "../components/News/Mainarticle";
import StatView from "../components/stats";
import { FaArrowRight, FaChevronLeft } from "react-icons/fa";
import NewsComponent from "./news/components/NewsComponent/NewsComponent";
import { SwiperNavigation } from "../utils/swiper";
import { useEffect, useRef, useState } from "react";
import Pathvec from "../assets/vectors/Pathvec";
import Numgraph from "../assets/vectors/Numgraph";
const HomePage = () => {
  const counterRef = useRef(null)
  const [isInViewPort,setIsInViewPort] = useState(false)
  let[  years,setYears] = useState(0)
  let[  projects,setProjects] = useState(0)
  let[  graduates,setGraduates] = useState(0)
  let[  partner,setPartner] = useState(0)
  const partners: string[] = [
    "/assets/africaBank.png",
    "/assets/worldBank.png",
    "/assets/koica.png",
    "/assets/nesalogo.png",
    "/assets/RISALogo.png",
    "/assets/gizLogo.png",
    "/assets/rtbLogo.png",
    "/assets/rebLogo.png",
    "/assets/mineduc.png",
    "/assets/minict.png",
  ];
  const sliders: StaticImageData[] = [mainImg, img2];
  const swiper = new SwiperNavigation(sliders);
  useEffect(()=>{
  if(isInViewPort){
    setInterval(()=>{
      if(years<6){
        setYears(years++);
      }
    },1100)

  }
  },[isInViewPort])
  useEffect(()=>{
    if(isInViewPort){
      setInterval(()=>{
        if(partner<7){
          setPartner(partner++);
        }
      },1200)

    }
  },[isInViewPort])
  useEffect(()=>{
    if(isInViewPort){
      setInterval(()=>{
        if(graduates<121){
          setGraduates(graduates++);
        }
      },100)

    }
  },[isInViewPort])
  useEffect(()=>{
    if(isInViewPort){
      setInterval(()=>{
        if(projects<15){
          setProjects(projects++);
        }
      },600)

    }
  },[isInViewPort])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewPort(entry.isIntersecting);
      },
      {
        threshold: 0.5, 
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);
  return (
    <div className="">
      <div className="md:bg-purpleColor">
        {/* background */}
        <div className="  motion-safe:animate-pulse md:bg-fixed bg-[url('../assets/background.png')] mx-auto lg:w-[98vw] md:h-[90vh] bg-50% bg-no-repeat bg-fullcover p-6 sm:p-12 md:p-12 sm:space-y-2 md:space-y-8">
          <p className="text-white font-black text-xl animate-bounce">Leading Through Digital Innovation</p>
          <h3 className=" text-outline-white text-lg sm:text-xl md:text-3xl lg:text-5xl font-semibold text-white ">
            Welcome To 
          </h3>
          <p className="font-semibold text-white text-xl sm:text-2xl md:text-4xl lg:text-6xl">
            Rwanda Coding Academy
          </p>
          <p className="text-white text-sm sm:text-sm md:text-md lg:text-lg">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            cons adipisci velit, sed quia
            <br />
            non numquam eius modi ullma tempora incidunt ut labore et dolore
            magnam aliquam.
          </p>
          <div className="md:flex w-full md:w-11/12 lg:w-2/3 xl:w-1/2 gap-12 sm:translate-y-8 md:translate-y-12 lg:-translate-y-8 space-y-2 md:space-y-0 mx-0 ">
            <Button
              text="View Academic Structure"
              className="bg-purpleColor md:p-4 xl:px-16 px-4 sm:px-14 rounded-lg text-white p-2 "
              icon={<FaArrowRight />}
            />
            <Button
              text="Student or Staff? Use Portal"
              className="text-purpleColor md:p-4 p-2 sm:px-16 px-6 rounded-lg bg-[#D9D9D9]  border border-purpleColor"
            />
          </div>
        </div>
        <div className="h-32 w-full hidden sm:block"></div>
      </div>
      {/* Stake holder */}
      <div className="w-full bg-white ">
        <div className="md:space-y-8 space-y-4 py-2 md:py-12">
          <h3 className="text-textGray text-center text-3xl font-medium">
          
            Stakeholders and partners
          </h3>
          <p className="text-start sm:text-center text-lg text-[#4343436E] px-[50px] xl:px-[450px]">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            cons, adipisci veli incidunt ut labore et dolore magnam aliquam.
          </p>
          <div className=" grid grid-cols-3 sm:grid-cols-4  md:grid-cols-5 lg:grid-cols-6 space-y-4 mx-8 sm:mx-40">
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
        <div className="w-full lg:flex ">
          <div className="basis-1/2 bg-white relative py-12 px-12 sm:px-28 ">
            <div className="h-[315px]  sm:h-[450px] md:h-[630px] lg:h-[430px] w-[290px] sm:w-[390px] md:w-[450px] lg:w-[320px] xl:w-[581px] relative">
              <Image src={mainImg} fill alt="img1" />
            </div>
            <div className="h-[200px] sm:h-[320px] lg:h-[200px] md:h-[400px] lg:h-[520px] w-[157px] sm:w-[277px] md:w-[304px] lg:w-[250px] xl:w-[404px] absolute z-20 -translate-y-[270px] lg:-translate-y-[270px] sm:-translate-y-[390px] md:-translate-y-[550px] xl:-translate-y-[550px] translate-x-[175px] md:translate-x-[320px] lg:translate-x-[150px] xl:translate-x-[220px] border-8 rounded border-white ">
              <Image src={img2} alt="img2" className="rounded-2xl" fill />
            </div>
          </div>
          {/* about us */}
          <div className="basis-1/2 p-4 space-y-8">
            <p className="text-purpleColor font-medium text-start text-lg">
              MORE ABOUT US
            </p>
            <h4 className="text-textGray text-xl font-semibold ">
              Get To Know More About Our Excellent School
            </h4>
            <p className="text-[#4343436E] ">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremquelaudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et Quasi architecto beatae vitae
              dicta sunt explicabo. Quis nostrud kemmith exercitation ullamco
              laboris nisi ut aliquip.
            </p>
            <p className="text-[#4343436E]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremquelaudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et Quasi architecto beatae vitae
              dicta sunt explicabo. Quis nostrud kemmith exercitation ullamco
              laboris nisi ut aliquip.
            </p>
            <Button
              text="Continue Reading"
              className="bg-purpleColor p-4 w-full lg:w-2/3 w-3/4 sm:w-1/3 rounded-xl text-white "
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 space-y-6 px-4 lg:px-16 z-20 lg:-translate-y-8 xl:-translate-y-16">
          <Card
          className="mt-6"
            image={mission}
            title="Our Mission"
            description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci veli incidunt ut labore et dolore magnam aliquam."
          />
          <Card
            image={vission}
            title="Our Vision"
            description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci veli incidunt ut labore et dolore magnam aliquam."
          />
          <Card
            image={goals}
            title="Our Goals"
            description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci veli incidunt ut labore et dolore magnam aliquam."
          />
        </div>
      </div>
      <div className="w-full md:flex relative bg-[#523873]/10  md:h-[50vh] translate-y-8 sm:translate-y-12 ">
        <div className="basis-1/2 p-8 space-y-6 ">
          <p className="text-purpleColor font-semibold text-md">
            INNOVATION HUB
          </p>
          <p className="text-textGray font-semibold text-lg xl:w-2/4">
            Get to Know Our Innovation Hub and what Our Community is working on
          </p>
          <p className="text-textGray">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremquelaudantium, totam rem aperiam, eaque ipsa quae
            ab illo inventore veritatis et Quasi architecto beatae vitae dicta
            sunt explicabo. Quis nostrud kemmith exercitation ullamco laboris
            nisi ut aliquip.
          </p>
          <p className="text-textGray">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            cons, adipisci velit, sed quia non numquam eius modi ullma tempora
            incidunt ut labore et dolore magnam aliquam
          </p>
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
            <div
              className="rotate-180 text-purpleColor"
              onClick={swiper.handleForward}
            >
              <FaChevronLeft />
            </div>
          </div>
        </div>
      </div>
      {/* Admission and road map */}
      <div className=" w-full bg-white p-4 space-y-2 translate-y-8 sm:space-y-12 sm:translate-y-12 md:translate-y-8 lg:translate-y-12 ">
        <p className="text-purpleColor font-semibold text-lg text-center">
          ADMISSION TIMELINE & ROADMAP
        </p>
        <p className="text-textGray font-semibold sm:text-xl md:text-3xl text-center xl:px-[300px]">
          Timeline to Get Admitted to This Great Community
        </p>
        <p className="text-[#4343436E] text-lg text-center xl:px-[280px]">
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons,
          adipisci velit, sed quia non numquam eius modi ullma tempora incidunt
          ut labore et dolore magnam aliquam
        </p>
        <div className="flex-col relative">
          <div className="hidden 2xl:flex absolute w-3/4 lg:h-2/3  -translate-y-[70px] xl:translate-y-[280px] flex items-center justify-start ml-4 xl:ml-36 ">
            <Pathvec />
          </div>
          <div className=" px-4 xl:px-32 md:space-y-0 md:space-y-[40px] xl:space-y-[200px]">
            {pathData.map((path) => {
              if (path.id % 2 != 0) {
                return (
                  <div
                    key={path.id}
                    className="w-full flex flex-col-reverse md:flex-row items-center xl:ml-32 gap-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-purpleColor border-2 border-white -ml-[125px] hidden 2xl:block "></div>
                    <div className="basis-1/2 space-y-8">
                      <p className="text-purpleColor font-medium text-lg">
                        {path.title}
                      </p>
                      <p className="text-textGray">{path.description}</p>
                    </div>
                    <div className="font-bold text-purpleColor/10 text-6xl text-center mx-auto basis-1/2 md:border-0 border-2 border-dashed border-purpleColor md:outline-none  flex items-center justify-center rounded-full md:w-0 w-16 md:h-0 h-20">
                      {path.id}
                    </div>
                  </div>
                );
              }
              return (
                <div key={path.id} className="w-full md:flex items-center gap-20 space-y-4 md:space-y-0 ">
                  <div className="font-bold text-purpleColor/10 text-6xl basis-1/2 text-end md:border-0 border-2 border-purpleColor flex items-center justify-center rounded-full md:w-0 w-16 md:h-0 h-16 mx-auto border-dashed">
                    {path.id}
                  </div>
                  <div className="w-20 h-20 rounded-full bg-purpleColor border-2 border-white flex mx-auto hidden 2xl:block"></div>
                  <div className="basis-1/3 space-y-8">
                    <p className="text-purpleColor font-medium text-lg">
                      {path.title}
                    </p>
                    <p className="text-textGray">{path.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Core study  and research fields */}
      <div className="w-full bg-[#523873]/10 md:flex px-12 py-8 translate-y-32">
        <div className="basis-1/2 space-y-12">
          <p className="text-purpleColor font-semibold text-md">
            CORE STUDY AND RESEARCH FILEDS
          </p>
          <p className="text-textGray font-semibold text-sm lg:w-2/4">
            Core School Study and Research Fields
          </p>
          <p className="text-[#4343436E]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremquelaudantium, totam rem aperiam, eaque ipsa quae
            ab illo inventore veritatis et Quasi architecto beatae vitae dicta
            sunt explicabo. Quis nostrud kemmith exercitation ullamco laboris
            nisi ut aliquip.
          </p>
          <p className="text-[#4343436E]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremquelaudantium, totam rem aperiam, eaque ipsa quae
            ab illo inventore veritatis et Quasi architecto beatae vitae dicta
            sunt explicabo. Quis nostrud kemmith exercitation ullamco laboris
            nisi ut aliquip.
          </p>
          <p className="text-[#4343436E]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremquelaudantium, totam rem aperiam, eaque ipsa quae
            ab illo inventore veritatis et Quasi architecto beatae vitae dicta
            sunt explicabo. Quis nostrud kemmith exercitation ullamco laboris
            nisi ut aliquip.
          </p>
          <Button
            text="Know Even More About Our Curriculium"
            className="bg-purpleColor w-full md:w-3/4 md:p-4 py-4 px-0 rounded-lg text-white "
          />
        </div>
        <div className="space-y-12 basis-1/2 sm:grid grid-cols-2 px-auto translate-y-6 md:translate-y-0">
          <div className="bg-white h-32 w-full sm:w-3/4 sm:mt-12"></div>
          <div className="bg-white h-32 w-full sm:w-3/4"></div>
          <div className="bg-white h-32 w-full sm:w-3/4"></div>
          <div className="bg-white h-32 w-full sm:w-3/4"></div>
        </div>
      </div>
      {/* Our Numbers */}
      <div className="bg-white w-full translate-y-36 ">
        <p className="text-purpleColor font-semibold text-lg pt-6 md:pl-12 pl-4">
          OUR NUMBERS
        </p>
        <p className="text-textGray font-semibold md:text-3xl text-lg md:pl-12 pl-4 pb-6">
          Lets Get To Numbers
        </p>
        <div className="bg-purpleColor relative flex-col ">
          <div className="w-full hidden  sm:flex justify-end items-end">
            <Numgraph />
          </div>
          <div className="absolute sm:z-20 top-32 md:top-44 w-full px-4 sm:px-32 grid grid-cols-2 md:grid-cols-4" ref={counterRef}>
            <StatView statNo={years} statDesc="Years Of Foundation" />
            <StatView statNo={partner} statDesc="Stackholders & Partners" />
            <StatView statNo={graduates} statDesc="Students Completed" />
            <StatView statNo={projects} statDesc="Visible Projects Delivered" />
          </div>
        </div>
      </div>
      {/* Our News */}
      <div className="w-full bg-white p-8 space-y-8 translate-y-36 mb-40">
        <p className="text-purpleColor text-lg font-semibold text-center">
          OUR NEWS
        </p>
        <p className="text-textGray font-semibold md:text-3xl text-center">
          Our Latest News
        </p>
        <p className="text-[#4343436E] text-lg text-center px-[0px] xl:px-[280px]">
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons,
          adipisci velit, sed quia non numquam eius modi ullma tempora incidunt
          ut labore et dolore magnam aliquam
        </p>
        <div className="w-full md:flex md:h-[560px] translate-y-40 sm:translate-y-0 ">
          <div className="basis-1/2">
            <Mainarticle
              newsTitle="Rwanda Coding Academy Get the 5 students in the Daiho Hackerthon"
              publicationTime="Sunday 24th September, 2020"
            />
          </div>
          <div className="basis-1/2">
            <NewsComponent
              date={"Sunday 24th September, 2020"}
              title="RCA wins at the National Level"
              content={
                "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci ipsum quia dolor sit amet, cons, adipisci ipsum quia dolor sit amet, cons, adipisci "
              }
              image={img2}
            />
            <NewsComponent
              date={"Sunday 24th September, 2020"}
              title="RCA wins at the National Level"
              content={
                "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci ipsum quia dolor sit amet, cons, adipisci ipsum quia dolor sit amet, cons, adipisci "
              }
              image={img2}
            />
          </div>
        </div>
        <Button
          text="Read More of Our News"
          className="xl:px-12 px-6 w-full sm:w-2/3 md:w-1/3 md:mx-0 lg:w-1/4 space-x-12 py-4 rounded-lg bg-purpleColor mx-auto text-white text-lg translate-y-36 sm:translate-y-0"
          icon={<FaArrowRight />}
        />
      </div>
      {/* OUR NEWS LETTER */}
      <div className="w-full bg-white p-8 space-y-8 mb-20 lg:translate-y-40 ">
        <div className="w-full lg:flex">
          <div className="basis-1/2 space-y-8">
            <p className="text-purpleColor font-semibold text-lg pt-6 xl:pl-12 pl-2">
              OUR NEWS LETTER
            </p>
            <p className="text-textGray font-semibold lg:text-3xl text-lg xl:pl-12 pl-2">
              Subscribe To Our Daily News Letter
            </p>
            <p className="text-[#4343436E] text-lg text-start xl:pl-12 pl-2">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              cons, adipisci velit, sed quia non numquam eius modi ullma tempora
              incidunt ut labore et dolore magnam aliquam
            </p>

            <form className="xl:pl-12 pl-2 space-y-8 ">
              <input
                type="email"
                placeholder="Email Address"
                className="outline-none py-3 pl-4 bg-textGray/10 lg:w-full w-full rounded-lg border-2 outline-none"
              />
              <Button
                text="Subscribe Now"
                icon={<FaArrowRight />}
                className="lg:px-12 px-6 space-x-12 py-3 rounded-lg bg-purpleColor w-3/4 md:w-1/4 lg:w-3/4 text-white text-lg"
              />
            </form>
          </div>
          <div className="basis-1/2 bg-white relative py-12 lg:px-28 px-12">
            <div className="lg:h-[350px] xl:h-[400px] h-[200px] md:h-[350px] md:w-[240px] lg:w-[250px] xl:w-[304px] w-[157px] absolute z-20 translate-y-[50px] md:translate-x-[350px] lg:translate-y-[90px] xl:translate-y-[150px] lg:translate-x-[190px] xl:-translate-x-[80px] translate-x-[150px] border-8 rounded border-white ">
              <Image src={img2} alt="img2" className="rounded-2xl" fill />
            </div>
            <div className=" md:h-[500px] lg:h-[530px] h-[315px] md:w-[400px] lg:w-[350px] w-[245px] relative">
              <Image src={mainImg} fill alt="img1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
