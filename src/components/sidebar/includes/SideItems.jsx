import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function SideItem({link, name, icon, icon2, className}) {
    const location = useLocation()
  return (
    <Link to={`${link??location.pathname}`} className={`relative my-1 w-full justify-between flex items-center ${className}`}>
        <div className="flex items-center">
            <small className="mr-3">{icon}</small>
            <p className='text-[1.1rem] sm:block hidden p-0 m-0'>{name}</p>
        </div>
        {icon2 && <small className="mr-2">{icon2}</small>}
    </Link>
  )
}

export default SideItem