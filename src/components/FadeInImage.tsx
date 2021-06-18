import React, { useState } from 'react'
import { useContext } from 'react';
import { Animated, ActivityIndicator, StyleProp, ImageStyle } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation'

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

const FadeInImage = ({uri, style} : Props) => {

    const {theme: {colors}} = useContext(ThemeContext);
    const {opacity, fadeIn} = useAnimation();
    const [isLoading, setIsLoading] = useState(true);
    const finishLoading = () => {
        setIsLoading(false);
        fadeIn();
    }

    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {
                isLoading && <ActivityIndicator color={colors.primary} size={40} style={{
                    position:'absolute'
                }}/>
            }


            <Animated.Image
                source={{uri}}
                onLoadEnd={() =>finishLoading()}
                style={{...style as any, opacity}}
            />
        </View>
    )
}


export default FadeInImage

const styles = StyleSheet.create({})
