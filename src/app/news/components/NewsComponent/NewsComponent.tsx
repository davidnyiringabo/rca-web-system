import Image, { StaticImageData } from "next/image"

interface Props {
    date: String,
    title: string,
    content: String
    image: StaticImageData,
    setNewsPaper: Function
}
const NewsComponent = ({ date, title, content, image, setNewsPaper }: Props) => {
    const newsPaper = {
            image: image,
            title:title,
            content: content,
            date: date
    }
    return (
        <div onClick={()=>setNewsPaper(newsPaper)} className="w-full sm:h-[260px] md:h-[200px] my-4 flex justify-between items-center border border-[#ccc] py-2 px-1 cursor-pointer rounded-lg">
            <div className="w-2/5 h-[100%] rounded-lg bg-slate-100">
                <Image src={image} alt={title} className="w-full h-full rounded-lg" />
            </div>
            <div className="w-3/5 flex flex-col mx-3">
                <h4 className="pb-4 text-[#434343ba]">{date}</h4>
                <h3 className="font-extrabold pb-4 test-[#49494af0]">{title}</h3>
                <h6 className="text-[#434343ba]">{content}</h6>
            </div>
        </div>
    )
}

export default NewsComponent