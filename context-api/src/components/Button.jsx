import React, { useContext } from 'react'
import { ThemeContextData } from '../ContextData'

const Button = () => {
  const[theme,setTheme]=useContext(ThemeContextData)

  return (
    <>
    <button onClick={()=>{
        if(theme=="Light") setTheme('Dark')
        else setTheme('Light')
    }}
     className='change-btn'>Change Theme - {theme}</button>
    </>
  )
}

export default Button