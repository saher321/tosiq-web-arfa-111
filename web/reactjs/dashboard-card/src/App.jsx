import React from 'react'
import DashboardCard from './components/DashboardCard'
import { GoArchive, GoCheckCircle, GoEye, GoListOrdered } from "react-icons/go";
import { GiSandsOfTime } from "react-icons/gi";
import { LuDollarSign } from "react-icons/lu";

const App = () => {
  return (
    <div>
      <span className='font-bold block mb-5'>Dashboard Card</span>
      <div className='m-5 flex items-center gap-4'>
        <DashboardCard total="48" icon={<GoListOrdered size={12} />} text="Total" textColor="#999" color="#F2F2F2" />
        <DashboardCard total="18" icon={<GoCheckCircle size={12} />} text="Done" textColor="#4B836C" color="#DFFDEE" />
        <DashboardCard total="23" icon={<GiSandsOfTime size={12} />} text="In Progress" textColor="#64719B" color="#E7EDFF" />
        <DashboardCard total="56" icon={<GoEye size={12} />} text="Review" textColor="#81769D" color="#EEE8FF" />
        <DashboardCard total="65" icon={<LuDollarSign size={12} />} text="Estimations" textColor="#878259" color="#FEF7D7" />
        <DashboardCard total="0" icon={<GoArchive size={12} />} text="Archived" textColor="#4B836C" color="#D9F9DF" />
      </div>
    </div>
  )
}

export default App
