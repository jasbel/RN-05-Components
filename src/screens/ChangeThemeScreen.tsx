import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import HeaderTitle from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import useToggle from '../hooks/useToggle';
import stylesApp from '../theme/appTheme';

const ChangeThemeScreen = () => {

    const { setDarkTheme, setLightTheme, theme: {colors, currentTheme}} = useContext(ThemeContext);
    const[isDark, setIsDark] = useToggle(currentTheme==='dark' ? true : false)


    useEffect(() => {
        isDark && setDarkTheme();
        !isDark && setLightTheme();
    }, [isDark])

    return (
        <View style={stylesApp.globalMargin}>
            <HeaderTitle title='Theme'/>
            <TouchableOpacity
                onPress={setIsDark}
                style={{
                    width: 150,
                    height: 50,
                    borderRadius: 20,
                    backgroundColor: colors.primary,
                    justifyContent: 'center',
                }}
                activeOpacity={0.8}
            >
                <Text
                    style={{color: 'white', textAlign: 'center', fontSize: 22}}
                > {isDark ? 'Light':'Dark'} </Text>

            </TouchableOpacity>
        </View>
    )
}

export default ChangeThemeScreen

const styles = StyleSheet.create({})
