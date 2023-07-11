type ButtonProps = {
    text?:string,
    clickHandler?:()=>void,
    className?:string,
    icon?:any

}
const Button = ({className,text,clickHandler,icon}:ButtonProps)=>{

    return(
<button onClick={clickHandler} className={`${icon && 'flex gap-4 items-center'} ${className} text-sm`}>{text} {icon && (<span className="text-xl ">{icon}</span>)}</button>
    )
}
export default Button;