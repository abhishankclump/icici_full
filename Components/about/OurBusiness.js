import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';

import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Iconic from 'react-native-vector-icons/Entypo';
import { DescriptionCard } from './Showmore';
import {
    SrcOverComposition,
    LinearGradient
} from 'react-native-image-filter-kit'

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const BusinessCard = ({ title , backimage}) => {
    return (
        <View style={{paddingHorizontal:20 , marginBottom:20}}>
            
            <SrcOverComposition
                resizeCanvasTo={'dstImage'}
                dstImage={
                    <Image
                        style={{ width:'100%' , height:150 , borderRadius:10}}
                        source={backimage}
                    />
                }
                srcResizeMode={{ width: 1, height: 0.5 }}
                srcAnchor={{ y: 0 }}
                srcImage={
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: '100h' }}
                        colors={['rgba(0,0,0,0.80)', 'rgba(0,0,0,0.00)']}
                    />
                }
            />
    <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
  <Text style={styles.centertext}>{title}</Text>
</View>

        </View>
    )
}

const Ourbusiness = () => {
    let a = require('../../assets/img/passchange.png');
    let b = require('../../assets/img/passchange.png');
    let c = require('../../assets/img/passchange.png');
    let d = require('../../assets/img/passchange.png');
    let e = require('../../assets/img/passchange.png');
    
    return (
        <View>
            <Text style={{paddingHorizontal:20 , fontWeight:'600', marginBottom:20}}>From our presence to our milestone know everything about us</Text>
            <BusinessCard title="Mutual found" backimage={a} />
            <BusinessCard title="Portfolio management services" backimage={a} />
            <BusinessCard title="Real Estate" backimage={a} />
            <BusinessCard title="Advisory services" backimage={a} />
        </View>
    );
}

const styles = StyleSheet.create({
    linearGradient: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    centertext:{
        color:'white',
        fontWeight:'800',
        fontSize:20,
    }

})

export default Ourbusiness;
