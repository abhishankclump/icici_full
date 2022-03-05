/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from "react";
import {
    View,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TouchableOpacity,
    Image,

} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import { Checkbox } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper'

import { Component } from 'react'
import { AppRegistry, StyleSheet } from 'react-native'
import { transparent } from 'react-native-paper/lib/typescript/styles/colors';
import Unorderedlist from 'react-native-unordered-list';
import url from "../src/constant/Api.json";
import axios from 'react-native-axios';

const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    slide4: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})


const Mylist = ({data}) => {

    useEffect(() => {
        cmsBlokers1()
    }, [])
    
    

    const cmsBlokers1 = () => {
        axios
            .get(url.baseUrl + 'cmsblockers'
                
            )
            .then(response => {
                console.log(response)

            })
            .catch(error => {
                console.log(error)
            });
};


    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' , height:30 }}>
            <Text style={{ fontSize:25, color:'white'}}>{'\u2022'}</Text>
            <Text style={{ flex: 1, paddingLeft: 5, color: 'white',  fontSize: 15, fontWeight: '500' }}>{data}</Text>
        </View>
    )
}

const Adblocktwo = ({ visible, closeCallback, shareOptionCallback }) => {

    const [checked, setChecked] = React.useState(false);
    return (
        <Modal
            isVisible={visible}
            statusBarTranslucent
            transparent
            onBackdropPress={closeCallback}
            onBackButtonPress={closeCallback}
            style={{ margin: 0, justifyContent: 'flex-end' }}>
            <KeyboardAvoidingView
                enabled
                behavior={Platform.OS === 'android' ? undefined : 'position'}
                keyboardShouldPersistTaps="handled">
                <ScrollView scrollEnabled={false} keyboardShouldPersistTaps="handled">
                    <View
                        style={{
                            height: 'auto',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            backgroundColor: "#4AA5AB",
                            marginBottom:'25%',
                            borderRadius: 20,
                            width: '85%',
                            marginLeft: '7.5%'
                        }}>

                        <View
                            style={{
                                height: 30, borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,


                            }}>

                            <View style={{ height: '100%', marginBottom: 20 ,justifyContent:"center",alignItems:"center"}}>
                               <Text style={{color:"#fff"}}>Loading...</Text>
                            </View>


                           

                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </Modal>
    );
};

AppRegistry.registerComponent('myproject', () => SwiperComponent)
export default Adblocktwo;
