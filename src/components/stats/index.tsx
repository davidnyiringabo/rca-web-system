export type StatViewProp = {
    statNo:number,
    statDesc:string
}
const StatView = ({statNo,statDesc}:StatViewProp) =>{
return(
    <div className="space-y-6">
<p className="text-4xl font-bold text-white">{statNo}+</p>
<p className="text-md font-medium text-white">{statDesc}</p>
    </div>
)
}
export default StatView;