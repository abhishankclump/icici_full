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

const Companyglance = () => {
    return (
        <View style={{paddingBottom:20 , paddingHorizontal:20}}>
            <Text style={styles.normaltext}>From our presence to our milestone know everything about us</Text>
            <Text style={styles.heading}>2</Text>
            <Text style={styles.subhead}>Dacades</Text>
            <Text style={styles.normaltext}>worth of rich experience in found management and still going strong</Text>
            <Text style={styles.heading}>40</Text>
            <Text style={styles.subhead}>Lakhs + Investors</Text>
            <Text style={styles.normaltext}>who have trusted us with their finances and still counting</Text>
            <Text style={styles.heading}>₹3,44164 Crores</Text>
            <Text style={styles.subhead}>As on July 31, 2019</Text>
            <Text style={styles.normaltext}>Assets Under managent and still increasing</Text>
            <Text style={styles.heading}>68+</Text>
            <Text style={styles.subhead}>MF Scheme</Text>
            <Text style={styles.normaltext}>offering an array of investment opportunities and still adding!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    heading:{
        fontSize:24,
        color:'black',
        fontWeight:'700',
        marginVertical:5,
    },
    subhead:{
        fontSize:15,
        color:'black',
        fontWeight:'600',
        marginVertical:5,
    },
    normaltext:{
        marginVertical:5,
        paddingRight:20,
    }
})

export default Companyglance;
