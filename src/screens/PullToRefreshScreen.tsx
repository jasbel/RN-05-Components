import React from 'react'
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import HeaderTitle from '../components/HeaderTitle';
import stylesApp from '../theme/appTheme';
import { useState, useContext } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const PullToRefreshScreen = () => {
    const {top}=  useSafeAreaInsets()

    const {theme: {colors, dark}} = useContext(ThemeContext);
    const [refresing, setRefresing] = useState(false);
    const [data, setData] = useState<string>()

    const onRefresh = () => {
        setRefresing(true);

        setTimeout(() => {
            setRefresing(false)
            setData('Hola mundillo')
        }, 2000);
    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refresing}
                    onRefresh={onRefresh}
                    progressViewOffset={10}
                    progressBackgroundColor={colors.primary}
                    colors={['red','white','orange']}
                    tintColor={dark ? 'white': 'black'}
                    title='Refrescando'
                    style={{backgroundColor: colors.primary}}
                />
            }
            style={{marginTop: refresing ? top : 0}}

        >
        <View style={stylesApp.globalMargin}>
            <HeaderTitle title='Pull to Refresh'/>

            { data &&
             <HeaderTitle title={data}/>
            }

        </View>
        </ScrollView>
    )
}

export default PullToRefreshScreen

const styles = StyleSheet.create({})
