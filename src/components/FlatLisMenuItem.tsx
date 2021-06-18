import { useNavigation } from '@react-navigation/core';
// import { useTheme } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { MenuItem } from '../interfaces/appInterface';

interface Props {
    menuItem: MenuItem
}

const FlatLisMenuItem = (props : Props) => {

    const { menuItem } = props
    const navigation = useNavigation();
    // const {colors} = useTheme();
    const {theme: {colors}} = useContext(ThemeContext)

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate(menuItem.component)}
        >
            <View style={[styles.container]}>
                <Icon
                    name={menuItem.icon}
                    color={colors.primary}
                    size={23}
                />
                <Text style={[styles.itemText,{color: colors.text}]}>{menuItem.name} </Text>
                <Spacer />
                <Icon
                    name="chevron-forward-outline"
                    color={colors.primary}
                    size={23}
                />
            </View>
        </TouchableOpacity>
    )
}

const Spacer = () => <View style={{flex:1}} />

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 10,
        fontSize: 19
    },
})

export default FlatLisMenuItem;