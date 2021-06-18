import { DarkTheme, DefaultTheme, Theme } from "@react-navigation/native"

type ThemeAction =
    | {type: 'set_light_theme'}
    | {type: 'set_dark_theme'}

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark';
    dividerColor: string;
    colors:{
        primary: string,
        background: string,
        card: string,
        text: string,
        border: string,
        notification: string,
        lighter: string,
        inverse: string,
    }
}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    dividerColor: 'rgba(0,0,0,0.7)',
    colors:{
        // ...DarkTheme.colors,
        // ...DefaultTheme.colors,
        primary: '#5856d6',
        background: 'white',
        card: '#f4f3f4',
        text: 'black',
        border: 'black',
        notification: 'orange',
        lighter: '#f4f3f4',
        inverse: 'black',
    }

}

export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dividerColor: 'rgba(255,255,255,0.7)',
    dark: true,
    colors:{
        // ...DarkTheme.colors,
        // ...DefaultTheme.colors,
        primary: '#11d3dd',
        background: 'black',
        card: 'teal',
        text: 'white',
        border: '#f4f3f4',
        notification: '#f5dd4b',
        lighter: '#040304',
        inverse: 'grey',
    }

}

export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {

    switch (action.type) {
        case 'set_light_theme':
            return {
                ...lightTheme,
            }
        case 'set_dark_theme':
            return {
                ...darkTheme,
            }
        default:
            return state;
    }
}