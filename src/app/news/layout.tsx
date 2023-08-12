import Footer from "@/src/components/Footer/Footer"
import Hero from "@/src/components/Hero/Hero"
import Sidemenu from "@/src/components/Sidemenu/Sidemenu"
import Navbar from "@/src/components/Navbar/Navbar"

export default function PageLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <Hero pageTitle={"RCA NewsPaper"} heroContent={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremquelaudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et Quasi architecto beatae vitae dicta sunt explicabo. Quis nostrud kemmith exercitation ullamco laboris nisi ut aliquip."}/>
        <div className="dynamic-content-container p-12 flex">
                <Sidemenu parent={"news"} tabs={["Campus News", "In The News", "Events", "Free Square", "Notice"]}/>
                
                {children}
        </div>
      </>
    )
  }