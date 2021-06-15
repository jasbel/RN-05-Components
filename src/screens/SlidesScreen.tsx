import React from 'react'
import { Image } from 'react-native';
import { Dimensions, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

const {height: screenHeight, width: screenWidth} = Dimensions.get('window')
import HeaderTitle from '../components/HeaderTitle';

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png')
    },
]

const SlidesScreen = () => {

    const _renderItem = (item: Slide) => {
        return (
            <View style={{flex: 1, backgroundColor: 'white', borderRadius: 5, justifyContent: 'center'}}>
                <Image
                    source={item.img}
                    style={{
                        width: 350,
                        height: 400,
                        resizeMode: 'center'
                    }}
                />
                <Text style={ styles.title }>{ item.title }</Text>
                <Text style={ styles.subtitle }>{ item.desc }</Text>
            </View>
        );
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: 'red',
                paddingTop: 50,
            }}
        >
            <Carousel
                // ref={(c) => { _carousel = c; }}
                data={items}
                renderItem={({item}) =>_renderItem(item)}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                layout='default'

            />
        </SafeAreaView>
    )
}

export default SlidesScreen

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#4846d6'
    },
    subtitle: {
        fontSize: 16
    }
})
