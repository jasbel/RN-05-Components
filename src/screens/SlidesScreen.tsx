import React from 'react'
import { Image } from 'react-native';
import { Dimensions, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const {height: screenHeight, width: screenWidth} = Dimensions.get('window')
import HeaderTitle from '../components/HeaderTitle';
import { useState, useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

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

interface Props extends StackScreenProps<any, any> {};

const SlidesScreen = ({navigation}:Props) => {

    const {theme: {colors}} = useContext(ThemeContext);
    const [activeIndex, setActiveIndex] = useState(0)
    // const [isLastCard, setIsLastCard] = useState(false)
    const isLastCard = useRef(false)

    const _renderItem = (item: Slide) => {
        return (
            <View style={{flex: 1, backgroundColor: colors.background, borderRadius: 5, justifyContent: 'center', padding: 40}}>
                <Image
                    source={item.img}
                    style={{
                        width: 350,
                        height: 400,
                        resizeMode: 'center'
                    }}
                />
                <Text style={{...styles.title, color: colors.primary}}>{ item.title }</Text>
                <Text style={{...styles.subtitle, color: colors.text}}>{ item.desc }</Text>
            </View>
        );
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                // paddingTop: 50,
            }}
        >
            <Carousel
                // ref={(c) => { _carousel = c; }}
                data={items}
                renderItem={({item}) =>_renderItem(item)}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                layout='default'
                onSnapToItem={(index) => {
                    setActiveIndex(index);
                    if (items.length - 1 === index) {
                        // setIsLastCard(true)
                        isLastCard.current = true
                    }else{
                        isLastCard.current && (isLastCard.current = false)
                    }
                }}

            />

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 20,
                    alignItems: 'center'
                }}
            >
                <Pagination
                    dotsLength={items.length}
                    activeDotIndex={activeIndex}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 10,
                        backgroundColor: colors.primary
                    }}
                />
                {/* <View> */}
                    {isLastCard.current &&
                        <TouchableOpacity
                            onPress={() => {navigation.navigate('HomeScreen')}}
                            activeOpacity={0.8}
                            style={{
                                flexDirection: 'row',
                                backgroundColor: colors.primary,
                                width: 140,
                                height: 45,
                                borderRadius: 10,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 25,
                                    color: 'white'
                                }}
                            >Entrar</Text>
                            <Icon
                                name='chevron-forward-outline'
                                color='white'
                                size={35}
                            />
                        </TouchableOpacity>
                    }
                {/* </View> */}
            </View>
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
