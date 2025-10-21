
import { createContext,useState } from 'react'

export const ThemeContextData=createContext()

const ContextData = (props) => {
    const [theme, setTheme] = useState('Light')
  return (
    <>
        <ThemeContextData.Provider value={[theme,setTheme]}>
            {props.children}
        </ThemeContextData.Provider>
    </>
  )
}

export default ContextData