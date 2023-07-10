import Hero from "@/components/Hero/Hero"
import Sidemenu from "@/components/Sidemenu/Sidemenu"
import Footer from "@/components/Footer/Footer"
const About = ()=>{

    return(
        <div>
            <Hero pageTitle={"About Us"} heroContent={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremquelaudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et Quasi architecto beatae vitae dicta sunt explicabo. Quis nostrud kemmith exercitation ullamco laboris nisi ut aliquip."}/>
            <div className="dynamic-content-container p-12">
                <Sidemenu tabs={["Campuses and Facilities", "StackHolders and Partners", "Organization", "Strategy", "Accreditation", "High Education Ranking", "Facts and Figures"]}/>

            </div>

            <Footer/>
        </div>
    )
}
export default About