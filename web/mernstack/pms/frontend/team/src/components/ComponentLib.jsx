import React from 'react'

export const InputField = ({title="", className, type, hint}) => {
  return (
    <input 
    type={type} 
    className={"transition mb-5 px-3 py-2 w-full rounded outline-1 outline-gray-400 focus:outline-purple-600"} 
    placeholder={hint} />
  )
}

export const Button = ({className, title}) => {
  return (
    <div className={className}>{ title }</div>
  )
}


