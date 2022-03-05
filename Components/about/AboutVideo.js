import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';

import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Iconic from 'react-native-vector-icons/Entypo';
import { DescriptionCard } from './Showmore';
import Myvideo from './Myvideo';


import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const Aboutvideo = () => {
    return (
        <View style={{ marginHorizontal: 20 , paddingBottom:20}}>
            <Text style={{marginHorizontal:10}}>We have a lot to share with you, about us and our offerings!</Text> 
            <Text style={{marginHorizontal:5}}> watch this space for more!</Text>

            {/*Video Section here ................*/}
            <Myvideo />

        </View>
    );
}

const styles = StyleSheet.create({})

export default Aboutvideo;
