import Link from 'next/link'
import React from 'react'




const Button = ({href, className, children}) => {
  return (
    <button className={`bg-black text-white rounded-lg p-2 border-2 border-white hover:bg-white hover:border-black hover:text-black  duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black transition-all text-lg font-bold ${className}`}>
        <Link href={href}>{children}</Link>
    </button>
  )
}

export default Button