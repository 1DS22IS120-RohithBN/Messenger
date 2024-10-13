'use client'
import { IconType } from 'react-icons'
import React from 'react'

interface AuthButtonProps{
    icon: IconType,
    onClick:()=>void 
    disabled:boolean
}

const AuthSocialButton:React.FC<AuthButtonProps>= ({
    icon:Icon,
    onClick,
    disabled
}) => {
  return (
  <button onClick={onClick}
    type='button'
    className='bg-slate-300 hover:bg-gray-500 shadow-sm border-t-black shadow-black text-white rounded-lg p-4 flex w-full text-center items-center justify-center'
  >
<Icon className='text-black'/>
  </button>
  )
}

export default AuthSocialButton