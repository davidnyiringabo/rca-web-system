import Newspaper from "./../news/components/Newspaper/Newspaper"
import Link from "next/link"
import News from "./components/Publication/Publication"
import newOne from "../../assets/newOne.png"
import newTwo from "../../assets/newTwo.png"
import newThree from "../../assets/newThree.png"
import Image from "next/image"

const Research = ()=>{
    return(
        <div className="w-full">

            <h5 className="font-bold mb-4 ml-4">Innovation Hub &gt; <Link href={"/"} className="text-[#523873]">Fundarisations</Link></h5>
            <div className="w-full md:h-[50vh] flex justify-evenly px-2 flex-col md:flex-row">
                <div className="w-full md:w-1/2 h-full bg-[#f8f8f8] mx-1">
                    <Image src={newTwo} alt="student" className="w-full" />

                </div>
                <div className="w-full md:w-1/2 h-full bg-[#f8f8f8] my-2 md:my-0 mx-1">
                    <Image src={newThree} alt="student" className="w-full" />

                </div>
            </div>
            <div className="w-full pl-3 mt-9 flex flex-col md:flex-row">

                <Newspaper title={"A students makes an AI system to chat and explain different things to fellows"} content={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremquelaudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et Quasi architecto beatae vitae dicta sunt explicabo. Quis nostrud kemmith exercitation ullamco laboris nisi ut aliquip.      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci velit, sed quia non numquam eius modi ullma tempora incidunt ut labore et dolore magnam aliquam     Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremquelaudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et Quasi architecto beatae vitae dicta sunt explicabo. Quis nostrud kemmith exercitation ullamco laboris nisi ut aliquip."} date={"Sunday 24th September, 2020"} appreciations={"298"} feedbackMessages={"290"} buttonText={"Write to us about our News"} />
                <div className="flex flex-col gap-4">
                    <h4 className="text-[#523873] font-extrabold">More Innovations</h4>

                    <div>
                        <News image={newOne} date={"Sunday 24th September, 2020"} title={"World Bank Fund RCA tomorrow"} content={"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci . . ."}/>
                        <News image={newOne} date={"Sunday 24th September, 2020"} title={"World Bank Fund RCA tomorrow"} content={"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci . . ."}/>
                        <News image={newOne} date={"Sunday 24th September, 2020"} title={"World Bank Fund RCA tomorrow"} content={"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci . . ."}/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Research