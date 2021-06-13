import React, { useRef } from 'react';
import { Animated, Button, Easing, StyleSheet, Text, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

const Animation101Screen = () => {

    const { fadeIn, fadeOut, opacity, position, startMovingPosition } = useAnimation()

    return (
        <View style={styles.container}>
            <Animated.View 
                style={{
                    ...styles.purpleBox,
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
            />
            <Button 
                title="FadeOut"
                onPress={ fadeOut }
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
        backgroundColor: '#5856d6',
        width: 150,
        height: 150,
        marginBottom: 10
    }
});


export default Animation101Screen;