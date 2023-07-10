import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface MvgBoxProps {
        icon: StaticImageData; // image URL or import statement for the icon
        title: string;
        description: string;
}

const MvgBox:React.FC<MvgBoxProps> = ({icon,title,description}) => {
        return (
                <div className='rounded-[1.25rem] shadow-[0_0px_9px_1px_#F5F5F5] px-[1.6rem] py-[2rem] text-left bg-white'>
                        <Image src={icon.src} alt={title} width={30} height={40}/>
                        <p className='text-[1.47rem] font-bold text-[#49494AFF]'>{title}</p>
                        <p className='text-[0.9rem] font-medium text-[#4343436E]'>{description}</p>
                </div>
        )
}

export default MvgBox