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

const LeadersipCard=({title})=>{
    return (
        <View style={{marginBottom:20 , borderWidth:1, borderColor:'lightgray' , borderRadius:20  , padding:30}}>
            <Text style={{color:'black' , fontSize:20, fontWeight:'bold' , marginVertical:10}}>{title}</Text>
            <TouchableOpacity>
            <Text style={{color:"#FFA103", fontSize:16, fontWeight:'bold', marginVertical:10}}>View all</Text>
            </TouchableOpacity>
        </View>
    )
}

const Leadership = () => {
    return (
        <View style={{paddingHorizontal:10}}>
            <LeadersipCard title="Management team" />
            <LeadersipCard title="Investment Management team" />
            <LeadersipCard title="BOD" />
            <LeadersipCard title="BOD" />
            <LeadersipCard title="Directors of the trustee company" />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Leadership;
