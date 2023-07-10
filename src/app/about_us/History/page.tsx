import Hero from "@/components/Hero/Hero"
import Sidemenu from "@/components/Sidemenu/Sidemenu"
import Footer from "@/components/Footer/Footer"
const About = ()=>{

    return(
        <div className="w-full px-9">
            <h5 className="font-extrabold mb-9">About   &gt;   <span className="text-[#523873]">History</span></h5>

            <p className="leading-[2rem]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremquelaudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et Quasi architecto beatae vitae dicta sunt explicabo. Quis nostrud kemmith exercitation ullamco laboris nisi ut aliquip.</p>
            <p className="leading-[2rem] my-9">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci velit, sed quia non numquam eius modi ullma tempora incidunt ut labore et dolore magnam aliquam</p>

            <button className="bg-[#523873] px-12 py-3 mb-9 rounded-lg text-white">Visit Program Page</button>

            <div className="w-full flex">
                <div className="w-3/5 flex flex-col justify-between">
                    <p className="leading-[2rem]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremquelaudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et Quasi architecto beatae vitae dicta sunt explicabo. Quis nostrud kemmith exercitation ullamco laboris nisi ut aliquip.</p>
                    <p className="leading-[2rem]">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci velit, sed quia non numquam eius modi ullma tempora incidunt ut labore et dolore magnam aliquam</p>
                </div>

                <div className="w-2/5 h-[45vh] bg-[#f8f8f8]">

                </div>
            </div>

            <div className="w-full bg-[#f8f8f8] h-[45vh] my-5">

            </div>


            <p className="leading-[2rem]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremquelaudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et Quasi architecto beatae vitae dicta sunt explicabo. Quis nostrud kemmith exercitation ullamco laboris nisi ut aliquip.</p>


        </div>
    )
}
export default About