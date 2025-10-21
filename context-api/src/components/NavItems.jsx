import React, { useContext } from 'react'
import { ThemeContextData } from '../ContextData'

const NavItems = () => {
    const [theme,setTheme]=useContext(ThemeContextData)
    
  return (
    <div className='list-items'>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
            <li>{theme}</li>
        </ul>
    </div>
  )
}

export default NavItems