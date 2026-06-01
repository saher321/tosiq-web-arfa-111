import React from 'react'

const DashboardCard = ({ total, text, textColor, icon, color }) => {
  return (
    <div className='flex-1 p-3 rounded-lg' style={{backgroundColor: color}}>
      <div className='flex items-center justify-between'>
        <div>{total}</div>
        <div>{icon}</div>
      </div>
      <div style={{color: textColor}} className='mt-5 text-[7px] font-bold'>{text}</div>
    </div>
  )
}

export default DashboardCard
