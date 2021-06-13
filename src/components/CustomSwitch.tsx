import React, { useState } from 'react'
import { Platform, StyleSheet, Switch, Text, View } from 'react-native'

interface Props {
    isOn: boolean;
    onChange:(value: boolean) => void
}

const CustomSwitch = ({isOn, onChange}: Props) => {

    const [isEnabled, setIsEnabled] = useState(isOn)

    const toggleSwitch = () => {
        setIsEnabled( !isEnabled )
        onChange( !isEnabled )
    };

    return (
        <Switch
            trackColor={{false: '#d9d9db', true: '#5856d6'}}
            thumbColor={ (Platform.OS === 'android') ? '#2d2ded' : '' }
            // thumbColor={ isEnabled ? '#f5dd4b' : '#f4f3f4' }
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    )
}

export default CustomSwitch

const styles = StyleSheet.create({})
