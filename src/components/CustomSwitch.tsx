import React, { useState } from 'react'
import { Platform, StyleSheet, Switch, Text, View } from 'react-native'
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    isOn: boolean;
    onChange:(value: boolean) => void
}

const CustomSwitch = ({isOn, onChange}: Props) => {
    const {theme:{colors}} = useContext(ThemeContext)

    const [isEnabled, setIsEnabled] = useState(isOn)

    const toggleSwitch = () => {
        setIsEnabled( !isEnabled )
        onChange( !isEnabled )
    };

    return (
        <Switch
            trackColor={{false: colors.lighter, true: colors.primary}}
            thumbColor={ (Platform.OS === 'android') ? colors.primary : '' }
            // thumbColor={ isEnabled ? '#f5dd4b' : '#f4f3f4' }
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    )
}

export default CustomSwitch

const styles = StyleSheet.create({})
