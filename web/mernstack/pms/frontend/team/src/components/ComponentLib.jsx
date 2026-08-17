import React from 'react'
import { Link } from 'react-router'

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

export const SelectInput = (props) => {
  const {title="", className, data = [], ...otherProps} = props
  return (
    <select 
    {...otherProps}
    className={"transition bg-gray-200 mb-5 px-3 py-2 w-full rounded outline-1 outline-gray-400 focus:outline-purple-600"}>
      {
        data.length == 0 ?
        <option disabled>No options provided yet</option> :
        <>
          <option disabled selected>Choose one option</option>
          {
            data.map((context, i) => {
              return (
                <option value={context.id}>{context.text}</option>
              )
            })
          }
        </>
      }
    </select>
  )
}

export const Button = (props) => {
  const { title, className, ...otherProps } = props
  return (
    <button {...otherProps} className={className}>{ title }</button>
  )
}

export const NavigateLink = ({ children, url, className, ...otherProps }) => {
  return (
    <Link {...otherProps} to={url} className={className} >
      {children}
    </Link>
  )
}

