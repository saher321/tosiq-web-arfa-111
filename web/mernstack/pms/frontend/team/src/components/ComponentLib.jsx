import React from 'react'

export const InputField = (props) => {
  const {title="", className, type, hint, ...otherProps} = props
  return (
    <input 
    {...otherProps}
    type={type} 
    className={"transition bg-gray-300 mb-5 px-3 py-2 w-full rounded outline-1 outline-gray-400 focus:outline-purple-600"} 
    placeholder={hint} />
  )
}

export const Button = (props) => {
  const { title, className, ...otherProps } = props
  return (
    <button {...otherProps} className={className}>{ title }</button>
  )
}


