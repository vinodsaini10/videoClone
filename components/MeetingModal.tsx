import React from 'react'
import {
    Dialog,
    DialogContent,
  
  } from "@/components/ui/dialog";
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

interface MeetingModalProps{
    isOpen:boolean;
    onClose:()=>void;
    title:string;
    className?:string;
    children?:React.ReactNode;
    handleClick?:()=>void;
    buttonText?:string;
    image?:string;
    buttonIcon?:string


}
const MeetingModal = ({isOpen,onClose,title,className,children,buttonText,image,handleClick,buttonIcon}:MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="flex w-full max-w-[520px]
    flex-col gap-6 border-none bg-gray-900 px-l py-9 
    ">
        <div className='flex flex-col gap-6'>

            {image && (
                <div className="flex justify-center">

                    <Image src={image} alt="image" width={72} height={72} />
                </div>
            )}
            <h1 className={cn('text-3xl font-bold leading-[42px] text-white',className)}>{title}</h1>
            {children}
            <Button onClick={handleClick} className='bg-blue-600 focus:visible:ring-0 text-white hover:bg-blue-500 focus:visible:ring-offset-0' >
                {buttonIcon && (
                    <Image src={buttonIcon} alt="button Icon" width={13} height={13} />
                )}
                &nbsp;
{buttonText  || 'Schedule Meeting'}

            </Button>
        </div>

        
     
    </DialogContent>
  </Dialog>
  )
}

export default MeetingModal