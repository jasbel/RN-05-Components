import React, { useRef } from 'react';
import { Animated, Button, Easing, StyleSheet, Text, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { color } from 'react-native-reanimated';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const Animation101Screen = () => {

    const { fadeIn, fadeOut, opacity, position, startMovingPosition } = useAnimation()
    const {theme:{colors}} = useContext(ThemeContext);

    return (
        <View style={styles.container}>
            <Animated.View 
                style={{
                    ...styles.purpleBox,
                    backgroundColor: colors.primary,
                    opacity,
                    transform:[{
                        translateY: position
                    }],
                }}
            />
            <Button 
                title="FadeIn"
                onPress={ () => {
                    fadeIn();
                    startMovingPosition();
                } }
                color={colors.primary}
            />
            <Button 
                title="FadeOut"
                onPress={ () => fadeOut() }
                color={colors.primary}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox: {
        width: 150,
        height: 150,
        marginBottom: 10
    }
});


export default Animation101Screen;