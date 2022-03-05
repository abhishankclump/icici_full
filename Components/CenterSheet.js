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
        cmsBlokers()
    }, [])
    const cmsBlokers = () => {
        var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer Iq34vGrJjnP22N2Ac6CbVY46ewOG");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://apigwu.icicipruamc.com/v1/api/cmsblockers", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
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
                                height: 530, borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,


                            }}>


                            <View style={{ flexDirection: 'row', marginTop: 10 }}>

                                <TouchableOpacity style={{ position: 'absolute', right: 10, marginTop: 10, backgroundColor: '#F4F5FA', justifyContent: 'center', alignItems: 'center', borderRadius: 50, height: 40, width: 40, textAlign: 'center' }}>
                                    <Text style={{ fontSize: 19, fontWeight: '700', color: 'black' }}>X</Text>
                                </TouchableOpacity>
                            </View>



                            <View style={{ height: '92%', marginBottom: 20 }}>
                                <Swiper style={styles.wrapper} dotColor="#D8D8D8" activeDotColor="#F97A12">
                                    <View>

                                        <View style={{ marginLeft: 30, marginBottom: 20, marginTop: 20, width: 250 }}>
                                            <Text style={{ color: 'white', fontSize: 20, fontWeight: '700', }}>Lorem Ipsum is simply dummy text</Text>
                                        </View>
                                        <View
                                            style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                            <Image
                                                style={{ height: 220, width: 220 }}
                                                source={require('../assets/img/passchange.png')}
                                            />
                                        </View>
                                        <View style={{ marginHorizontal: 20, marginTop: 20, marginBottom: 30 }}>

                                            <Mylist data={"Lorem Ipsum is simply dummy text"} />
                                            <Mylist data={"Lorem Ipsum is simply dummy text"} />
                                            <Mylist data={"Lorem Ipsum is simply dummy text"} />
                                        </View>



                                    </View>
                                    <View style={styles.slide2}>
                                        <Text style={styles.text}>Slide 2</Text>
                                    </View>
                                    <View style={styles.slide3}>
                                        <Text style={styles.text}>Slide 3</Text>
                                    </View>
                                    <View style={styles.slide4}>
                                        <Text style={styles.text}>Slide 4</Text>
                                    </View>
                                </Swiper>
                            </View>


                            <View style={{ borderBottomLeftRadius: 20, borderBottomEndRadius: 20, position: 'absolute', bottom: 0, width: '100%', height: 40, paddingLeft: 10, backgroundColor: '#F97A12', flexDirection: 'row', alignItems: 'center' }}>
                                <Checkbox
                                    status={checked ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                        setChecked(!checked);
                                    }}
                                    color={'white'}

                                />
                                <Text style={{ marginLeft: 5, color: 'white', fontWeight: '600', fontSize: 16 }}>*Do not show again</Text>
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
