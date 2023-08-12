export type MainarticleProps = {
    newsTitle: string,
    publicationTime: string
}
const Mainarticle = ({ newsTitle, publicationTime }: MainarticleProps) => {
    return (
        <div className=" bg-slate-100 w-full md:w-11/12 h-[300px] md:h-[554px] rounded sm:px-12 px-6 border border-slate-100 relative">
            <p className="text-textGray font-semibold text-lg absolute bottom-20 ">{newsTitle}</p>
            <p className="text-[#434343] absolute bottom-8">{publicationTime}</p>
        </div>
    )

}
export default Mainarticle;