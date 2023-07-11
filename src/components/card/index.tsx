export type CardProp = {
    image:StaticImageData,
    title:string,
    description:string
}
import Image, { StaticImageData } from "next/image"
const Card = ({image,title,description}:CardProp)=>{
return(
    <div className=" w-11/12 bg-white rounded-2xl shadow-sm shadow-textGray px-8 py-8 space-y-4">
<Image src={image} alt= "card Image" width={40} height={40}/>  
<h2 className="font-semibold text-textGray text-lg ">{title}</h2>
<p className="text-textGray">{description}</p>
    </div>
)
}
export default Card;