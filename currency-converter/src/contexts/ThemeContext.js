import { useContext, createContext } from "react";

const ThemeContext = createContext({
    theme: "light",
    lightTheme: () => {},
    darkTheme: () => {},
})

export default ThemeContext;

export const ThemeContextProvider = ThemeContext.Provider;

export const useTheme = () => {
    return useContext(ThemeContext)
}