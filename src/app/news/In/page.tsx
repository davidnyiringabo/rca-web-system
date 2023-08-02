import Hero from "@/src/components/Hero/Hero"
import Sidemenu from "@/src/components/Sidemenu/Sidemenu"
import Footer from "@/src/components/Footer/Footer"
import News from "../components/NewsComponent/NewsComponent"
import facebookIcon from "../../assets/facebook.png"
import Newspaper from "../components/Newspaper/Newspaper"
import Link from "next/link"
import newOne from "../../../assets/newOne.jpg"
import newTwo from "../../../assets/newTwo.jpg"
import newThree from "../../../assets/newThree.jpg"
import newFour from "../../../assets/newFour.jpg"
const About = () => {

    return (
<<<<<<< HEAD
        <div>
            <Hero pageTitle={"RCA NewsPaper"} heroContent={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremquelaudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et Quasi architecto beatae vitae dicta sunt explicabo. Quis nostrud kemmith exercitation ullamco laboris nisi ut aliquip."} />
            <div className="dynamic-content-container p-12 flex">
                <Sidemenu parent={"news"} tabs={["Campus News", "In The News", "Events", "Free Square", "Notice"]} />
=======
        <>
>>>>>>> 89ea40410bd22d86700a2e4ec8fef30476a9d274
                <div className="w-2/3 pl-4">

                    <h5 className="font-bold mb-4 ml-4">News Papers &gt; <Link href={"/"} className="text-[#523873]">Campus News</Link></h5>
                    <Newspaper title={"Rwanda Coding Academy Get the 5 students in the Daiho Hackerthon"} content={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremquelaudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et Quasi architecto beatae vitae dicta sunt explicabo. Quis nostrud kemmith exercitation ullamco laboris nisi ut aliquip.      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci velit, sed quia non numquam eius modi ullma tempora incidunt ut labore et dolore magnam aliquam     Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremquelaudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et Quasi architecto beatae vitae dicta sunt explicabo. Quis nostrud kemmith exercitation ullamco laboris nisi ut aliquip."} date={"Sunday 24th September, 2020"} appreciations={"298"} feedbackMessages={"290"} buttonText={"Write to us about our News"} />
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="text-[#523873] font-extrabold">Trending News</h4>

                    <div>
                        <News image={newOne} date={"Sunday 24th September, 2020"} title={"World Bank Fund RCA tomorrow"} content={"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci . . ."} />
                        <News image={newTwo} date={"Sunday 24th September, 2020"} title={"World Bank Fund RCA tomorrow"} content={"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci . . ."} />
                        <News image={newThree} date={"Sunday 24th September, 2020"} title={"World Bank Fund RCA tomorrow"} content={"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci . . ."} />
                        <News image={newFour} date={"Sunday 24th September, 2020"} title={"World Bank Fund RCA tomorrow"} content={"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci . . ."} />
                        <News image={newOne} date={"Sunday 24th September, 2020"} title={"World Bank Fund RCA tomorrow"} content={"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci . . ."} />
                        <News image={newTwo} date={"Sunday 24th September, 2020"} title={"World Bank Fund RCA tomorrow"} content={"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci . . ."} />

                    </div>
                </div>
<<<<<<< HEAD
            </div>

            <Footer />
        </div>
=======
        </>
>>>>>>> 89ea40410bd22d86700a2e4ec8fef30476a9d274
    )
}
export default About