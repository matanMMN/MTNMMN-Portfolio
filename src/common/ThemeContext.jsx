import React, {createContext, useContext, useEffect,useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

//theme that we gonna save in our local storage
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(
        () => localStorage.getItem('theme') || 'light'
    );
// way to refrance it in our body to put the actual theme
useEffect (() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}, [theme]);

//method of toggeling that theme
const toggleTheme =() =>{
   
    setTheme ((prevTheme) =>
         (prevTheme === 'light' ? 'dark' : 'light'));
} ;

//use to encapsulat our all app inside of this theme component
return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
          {children}
          </ThemeContext.Provider>
);
};