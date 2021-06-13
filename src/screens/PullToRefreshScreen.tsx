import React from 'react'
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import HeaderTitle from '../components/HeaderTitle';
import stylesApp from '../theme/appTheme';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PullToRefreshScreen = () => {
    const {top}=  useSafeAreaInsets()

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
                    progressBackgroundColor='#5856d6'
                    colors={['red','white','orange']}
                    tintColor='white'
                    title='Refrescando'
                    style={{backgroundColor: '#5856d6'}}
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
