import Hero from "@/components/Hero/Hero"
import Sidemenu from "@/components/Sidemenu/Sidemenu"
import Footer from "@/components/Footer/Footer"
import News from "../components/NewsComponent/NewsComponent"
import facebookIcon from "../../assets/facebook.png"
import Newspaper from "../components/Newspaper/Newspaper"
import Link from "next/link"
const About = ()=>{

    return(
        <>
            <div className="w-2/3 pl-4">

                <h5 className="font-bold mb-4 ml-4">News Papers &gt; <Link href={"/"} className="text-[#523873]">Campus News</Link></h5>
                <Newspaper title={"Rwanda Coding Academy Get the 5 students in the Daiho Hackerthon"} content={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremquelaudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et Quasi architecto beatae vitae dicta sunt explicabo. Quis nostrud kemmith exercitation ullamco laboris nisi ut aliquip.      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci velit, sed quia non numquam eius modi ullma tempora incidunt ut labore et dolore magnam aliquam     Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremquelaudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et Quasi architecto beatae vitae dicta sunt explicabo. Quis nostrud kemmith exercitation ullamco laboris nisi ut aliquip."} date={"Sunday 24th September, 2020"} appreciations={"298"} feedbackMessages={"290"} buttonText={"Write to us about our News"}/>
            </div>
            <div className="flex flex-col gap-4">
                <h4 className="text-[#523873] font-extrabold">Trending News</h4>

                <div>
                    <News date={"Sunday 24th September, 2020"} title={"World Bank Fund RCA tomorrow"} content={"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci . . ."}/>
                    <News date={"Sunday 24th September, 2020"} title={"World Bank Fund RCA tomorrow"} content={"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci . . ."}/>
                    <News date={"Sunday 24th September, 2020"} title={"World Bank Fund RCA tomorrow"} content={"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci . . ."}/>
                    <News date={"Sunday 24th September, 2020"} title={"World Bank Fund RCA tomorrow"} content={"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci . . ."}/>
                    <News date={"Sunday 24th September, 2020"} title={"World Bank Fund RCA tomorrow"} content={"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci . . ."}/>
                    <News date={"Sunday 24th September, 2020"} title={"World Bank Fund RCA tomorrow"} content={"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci . . ."}/>

                </div>
            </div>
        </>
    )
}
export default About