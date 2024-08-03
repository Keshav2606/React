import React, { useContext } from "react";

const ThemeContext = React.createContext({
    theme: "light",
    lightTheme: () => {},
    darkTheme: () => {},
});

export default ThemeContext;

export const ThemeContextProvider = ThemeContext.Provider

export function useTheme(){
    return useContext(ThemeContext)
}