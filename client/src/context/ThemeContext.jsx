import { useState,useEffect,useContext,createContext } from "react";

const themeContext = createContext(null);

export const useTheme=()=>{
    return useContext(themeContext)
}

export const ThemeProvider=({children})=>{
    const getTheme= localStorage.getItem("theme")
    const[theme,setTheme]=useState(getTheme || "light")

    const darkMode=()=>{
        setTheme("dark")
    }
    const lightMode=()=>{
        setTheme("light")
    }
    useEffect(() => {
        document.querySelector('html').classList.remove("light", "dark")
        document.querySelector('html').classList.add(theme)
        console.log(theme)
        localStorage.setItem("theme",theme)
    
      }, [theme])

    return (
        <themeContext.Provider value={{theme,setTheme,darkMode,lightMode}}>
            {children}
        </themeContext.Provider>
    )
}
