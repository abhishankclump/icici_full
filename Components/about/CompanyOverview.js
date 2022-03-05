import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity } from 'react-native';

import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Iconic from 'react-native-vector-icons/Entypo';
import { DescriptionCard } from './Showmore';


import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';



const Companyoverview = () => {

    let Text1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ab, vero, mollitia aliquid voluptas voluptate neque repellendus earum similique labore cum assumenda asperiores sint magni rem ducimus, inventore impedit quas! Tempore incidunt reprehenderit.";
    return (
        <View style={{paddingHorizontal:20}}>
            <Text style={{fontSize:16, marginBottom:10}}>{Text1}</Text>
            <Text style={{color:'orange' , fontSize:16, fontWeight:'700' , marginVertical:10}}>Show more</Text>
            <Text style={{fontSize:18, color:'black', fontWeight:'700', marginVertical:10}}>Parent company and sponsors</Text>
            <Text style={{fontSize:18, color:'black', fontWeight:'600', marginVertical:10}}>ICICI bank</Text>
            <Text style={{fontSize:16, marginVertical:10}}>{Text1}</Text>
            <Text style={{fontSize:18, color:'black', fontWeight:'600', marginVertical:10}}>Prudential Pic</Text>
            <Text style={{fontSize:16, marginVertical:10}}>{Text1}</Text>
            <Text style={{color:'orange' , fontSize:16, fontWeight:'700', marginVertical:10}}>Show more</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Companyoverview;
