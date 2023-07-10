
interface Props{
    date: String,
    title: String, 
    content: String
}
const NewsComponent = ({date, title, content}: Props)=>{
    return(
        <div className="w-full h-[198px] my-4 flex justify-between items-center border border-[#ccc] py-2 px-1 rounded-lg flex-col">
            <div className="w-2/5 h-full rounded-lg bg-slate-100">

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