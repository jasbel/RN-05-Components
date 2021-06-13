import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/appInterface';

interface Props {
    menuItem: MenuItem
}

const FlatLisMenuItem = (props : Props) => {

    const { menuItem } = props
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate(menuItem.component)}
        >
            <View style={[styles.container]}>
                <Icon
                    name={menuItem.icon}
                    color='#5856d6'
                    size={23}
                />
                <Text style={styles.itemText}>{menuItem.name} </Text>
                <Spacer />
                <Icon
                    name="chevron-forward-outline"
                    color='#5856d6'
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