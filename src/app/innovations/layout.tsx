import Footer from "@/components/Footer/Footer"
import Hero from "@/components/Hero/Hero"
import Sidemenu from "@/components/Sidemenu/Sidemenu"
import Navbar from "@/components/Navbar/Navbar"

export default function PageLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        {/* <Navbar/> */}
        <Hero pageTitle={"RCA Innovation Hub"} heroContent={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremquelaudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et Quasi architecto beatae vitae dicta sunt explicabo. Quis nostrud kemmith exercitation ullamco laboris nisi ut aliquip."}/>
        <div className="dynamic-content-container p-12 flex">
                <Sidemenu parent={"innovations"} tabs={["Research and Publications", "Startups", "Research In News", "Fundarisations"]}/>
                
                {children}
        </div>
          
        {/* <Footer/> */}
      </>
    )
  }