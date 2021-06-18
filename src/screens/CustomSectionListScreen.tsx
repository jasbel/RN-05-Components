import React from 'react'
import { SectionList, StyleSheet, Text, View } from 'react-native'
import HeaderTitle from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';
import stylesApp from '../theme/appTheme';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
        casa: "DC Comics",
        data: ["Batman", "Superman", "Robin", ]
    },
    {
        casa: "Marvel Comics",
        data: ["Antman", "Thor", "Spiderman","Antman", ]
    },
    {
        casa: "Anime",
        data: ["Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama", ]
    },
    {
        casa: "DC Comics",
        data: ["Batman", "Superman", "Robin", ]
    },
    {
        casa: "Marvel Comics",
        data: ["Antman", "Thor", "Spiderman","Antman", ]
    },
    {
        casa: "Anime",
        data: ["Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama", ]
    }
];

const CustomSectionListScreen = () => {

    const {theme: {colors}} = useContext(ThemeContext)

    return (
        <View style={[stylesApp.globalMargin, {flex:1}]} >


            <SectionList
                sections={casas}
                // keyExtractor={(item, index) => index.toString()}
                keyExtractor={(item, index) => item + index}
                ListHeaderComponent={() => <HeaderTitle title="Section List"/>}
                ListFooterComponent={() => <HeaderTitle title={"Total de casas: " + casas.length}/>}

                renderItem={({item}) => <Text style={{color: colors.text}}>{item}</Text>}
                stickySectionHeadersEnabled
                SectionSeparatorComponent={()=><ItemSeparator />}
                ItemSeparatorComponent={()=><ItemSeparator />}
                renderSectionHeader={({section}) =>(
                    <View style={{backgroundColor: colors.background}}>
                        <HeaderTitle title={section.casa}/>
                    </View>
                )}
                renderSectionFooter={({section}) => (
                    <HeaderTitle title={ 'Total: ' + section.data.length } />
                )}
                showsVerticalScrollIndicator={false}
            />

        </View>
    )
}

export default CustomSectionListScreen

const styles = StyleSheet.create({})
