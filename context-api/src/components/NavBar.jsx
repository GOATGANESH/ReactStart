import React, { useCallback, useContext } from 'react'
import NavItems from './NavItems'
import { ThemeContextData } from '../ContextData'

const NavBar = () => {
    const [theme,setTheme]=useContext(ThemeContextData)
    
    function getClasses(){
        let temp='nav '
        if(theme=='Light')
            temp+='light'
        else
            temp+='dark'
        return temp
    }
  return (
    <div className={getClasses()}>
       <h2>NavBar</h2>
       <NavItems/>
    </div>
  )
}

export default NavBar