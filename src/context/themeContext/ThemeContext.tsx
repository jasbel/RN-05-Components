import React from 'react';
import { useReducer } from 'react';
import { useEffect } from 'react';
import { createContext } from "react";
import { Appearance, AppState } from 'react-native';
import { useColorScheme } from 'react-native';
import { darkTheme, lightTheme, themeReducer, ThemeState } from './ThemeReducer';

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps)

export const ThemeProvider = ({children}:any) => {

    const colorSchema = useColorScheme();

    const [theme, dispatch] = useReducer(themeReducer, colorSchema === 'dark' ? darkTheme : lightTheme); //TODO: Leer el theme del telefono

    useEffect(() => {
        AppState.addEventListener('change', (status) => {
            if (status === 'active')  {
                Appearance.getColorScheme() === 'dark' ? setDarkTheme() : setLightTheme()
            }
        })
    }, [])

    // useEffect(() => {
    //     colorSchema === 'dark' ? setDarkTheme() : setLightTheme()
    // }, [colorSchema])

    const setDarkTheme = () => {
        dispatch({type: 'set_dark_theme'})
        console.log('setDarkTheme');
    }

    const setLightTheme = () => {
        dispatch({type: 'set_light_theme'})
        console.log('setLightTheme');
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    )
}