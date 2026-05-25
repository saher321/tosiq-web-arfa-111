import React from 'react'

const Card = ({ icon, title, description, price, priceMeta, footerLink }) => {
  return (
    <div>
        <div className='text-blue-400'>{icon}</div>
        <div className='my-4 font-bold text-2xl'>{title}</div>
        <div className='text-sm text-gray-400'>{description}</div>
        <div className='mt-4 font-bold text-2xl'>{price}</div>
        <div className='text-sm text-gray-400'>{priceMeta}</div>
        <div className='mt-[56px] flex items-center gap-3'>{footerLink}</div>
    </div>
  )
}

export default Card
