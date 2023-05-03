import React from 'react'
import { NavLink } from 'react-router-dom'

const ActiveLink = ({to,children}) => {
  return (
        <NavLink to={to}  className={({ isActive}) =>isActive ? "border-b-2 border-orange-500 text-base font-semibold text-black" : "font-semibold text-black"}>{children}</NavLink>
  )
}

export default ActiveLink