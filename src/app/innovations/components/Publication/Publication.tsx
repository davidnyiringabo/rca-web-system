import Image, { StaticImageData } from "next/image"

interface Props{
    date: String,
    title: string, 
    content: String
    image:StaticImageData,
    setPublication: Function
}
const NewsComponent = ({date, title, content,image, setPublication}: Props)=>{
    const publication = {
        date: date,
        title: title, 
        content: content,
        image,
    }
    return(
        <div className="w-full h-[380px] my-4 flex justify-between items-center border border-[#ccc] py-1 px-1 rounded-lg flex-col" onClick={()=> setPublication(publication)}>
            <div className="w-full h-3/5 rounded-lg bg-[#f8f8f8]">
                <Image src={image} alt={title} className="w-full h-full rounded-lg"/>
            </div>
            <div className="w-full flex flex-col mx-3">
                <h4 className="pb-4 text-[#434343ba]">{date}</h4>
                <h3 className="font-extrabold pb-4 test-[#49494af0]">{title}</h3>
                <h6 className="text-[#434343ba]">{content}</h6>
            </div>
        </div>
    )
}

export default NewsComponent