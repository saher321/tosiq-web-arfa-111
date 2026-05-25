import React from 'react'
import { LuCast, LuFolderClosed } from "react-icons/lu";
import { HiAnnotation } from "react-icons/hi";
import Card from './components/Card';
import { TbCloudNetwork } from "react-icons/tb";
import { AiOutlineArrowRight } from "react-icons/ai";

export const FooterLink = () => {
   return (
   <>
     <span className='underline'>Learn More</span> <AiOutlineArrowRight />
   </>
   )
 }
const App = () => {

  return (
    <>
    <div className='bg-blue-200 m-1 rounded-xl p-4 flex justify-between items-center'>
      <div>
        App
      </div>
      <div className='flex gap-3'>
        <LuFolderClosed /> <LuCast /> <HiAnnotation />
      </div>
    </div>
    <div className='h-screen flex items-center justify-center'>
      <div className='flex gap-3 bg-white w-[540px] rounded-xl p-4 shadow-lg'>
        <Card 
        icon={<TbCloudNetwork size={32} />}
        title="VPN Hosting" 
        description="Power and flexibility for growing websites and personal projects." 
        price="$3.00"
        priceMeta="Starting at: $03/month"
        footerLink={<FooterLink />}
        />
        <Card 
        icon={<TbCloudNetwork size={32} />}
        title="Reseller Hosting" 
        description="Power and flexibility for growing websites and personal projects." 
        price="$3.00"
        footerLink={<FooterLink />}
        />
      </div>
    </div>
    </>
  )
}

export default App