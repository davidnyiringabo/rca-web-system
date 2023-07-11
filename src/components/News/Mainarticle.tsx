export type MainarticleProps = {
    newsTitle: string,
    publicationTime: string
}
const Mainarticle = ({ newsTitle, publicationTime }: MainarticleProps) => {
    return (
        <div className=" bg-[#434343]/20 w-3/4 h-full rounded px-12 border border-textGray/20 ">
            <p className="text-textGray font-semibold text-lg translate-y-48">{newsTitle}</p>
            <p className="text-[#434343] translate-y-52">{publicationTime}</p>
        </div>
    )

}
export default Mainarticle;