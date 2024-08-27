import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
interface HomeCardsProps{
    className:string,
    img:string,
    title:string,
    description:string,
    handleClick:()=>void
}
const HomeCards = ({className,img,title,description,handleClick}:HomeCardsProps) => {
  return (
    <div  className={cn(' px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer',className)} onClick={handleClick}>
<Image src={img} alt='meeting-add'
width={26} height={26}/>

        
        <div className='flex flex-col gap-2'>
            <h1 className='text-xl font-bold'>
                {title}
            </h1>
            <p className='text-sm font-normal'>
               {description}
            </p>
        </div>
        </div>
  )
}

export default HomeCards