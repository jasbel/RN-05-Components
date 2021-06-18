import React, { useState } from 'react'
import { Platform, StyleSheet, Switch, Text, View } from 'react-native'
import CustomSwitch from '../components/CustomSwitch';
import HeaderTitle from '../components/HeaderTitle';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const SwitchScreen = () => {

    const {theme: {colors}} = useContext(ThemeContext);
    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true,
    })

    const onChange = ( value: boolean, field: keyof typeof state ) => {
        setState({
            ...state,
            [field]: value
        })
    }

    return (
        <View style={{marginHorizontal: 20}}>
            <HeaderTitle title="Switches"/>
            <View style={styles.switchRow}>
                <Text style={{...styles.switchText, color: colors.text}}> isActive </Text>
                <CustomSwitch isOn={state.isActive} onChange={(value) => onChange(value, 'isActive')}/>
            </View>
            <View style={styles.switchRow}>
                <Text style={{...styles.switchText, color: colors.text}}> isHungry </Text>
                <CustomSwitch isOn={state.isHungry} onChange={(value) => onChange(value, 'isHungry')}/>
            </View>
            <View style={styles.switchRow}>
                <Text style={{...styles.switchText, color: colors.text}}> isHappy </Text>
                <CustomSwitch isOn={state.isHappy} onChange={(value) => onChange(value, 'isHappy')}/>
            </View>

            <Text style={{...styles.switchText, color: colors.text}}>
                {JSON.stringify(state, null, 4)}
            </Text>
        </View>
    )
}

export default SwitchScreen

const styles = StyleSheet.create({
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    },
    switchText: {
        fontSize: 25
    }
})
