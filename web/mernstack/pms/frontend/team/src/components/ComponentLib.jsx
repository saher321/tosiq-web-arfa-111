import React from 'react'

export const InputField = (props) => {
  const {title="", className, type, hint, ...otherProps} = props
  return (
    <input 
    {...otherProps}
    type={type} 
    className={"transition bg-gray-200 mb-5 px-3 py-2 w-full rounded outline-1 outline-gray-400 focus:outline-purple-600"} 
    placeholder={hint} />
  )
}

export const Button = ({className, title}) => {
  return (
    <button className={className}>{ title }</button>
  )
}


