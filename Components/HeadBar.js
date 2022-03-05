import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { transparent } from 'react-native-paper/lib/typescript/styles/colors';

const HeadBar = () => {
    return (
        <View style={{elevation:5}}>
            <View style={container.mainview} >
                <Text style={container.headtext}>Help & Support</Text>
            </View>
            <View style={{  borderColor:'black' ,  borderWidth:.1 , elevation:5}}></View>
        </View>
    );
}

const container = StyleSheet.create({
    mainview: {
        paddingHorizontal: 20,
        paddingBottom:20,
    },
    headtext: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
        paddingTop:15,
    }
})

export default HeadBar;
