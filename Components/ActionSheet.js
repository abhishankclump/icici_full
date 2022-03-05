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
import url from "../src/constant/Api.json";
import axios from 'react-native-axios';

const styles = StyleSheet.create({
    wrapper: {
        height:'100%',
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


const Adblockone = ({ visible, closeCallback, shareOptionCallback }) => {

    const [checked, setChecked] = React.useState(false);

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
                            backgroundColor: "#4AA5AB"
                        }}>

                        <View
                            style={{
                                height: 450, borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,


                            }}>


                            <View style={{ flexDirection: 'row', marginTop: 10 }}>

                                <TouchableOpacity style={{ position: 'absolute', right: 10, marginTop: 10, backgroundColor: '#F4F5FA', justifyContent: 'center', alignItems: 'center', borderRadius: 50, height: 40, width: 40, textAlign: 'center' }}>
                                    <Text style={{ fontSize: 19, fontWeight: '700', color: 'black' }}>X</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{height:'88%'}}>
                            <Swiper style={styles.wrapper} dotColor="#D8D8D8" activeDotColor="#F97A12">
                                <View>


                                    <View
                                        style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                        <Image
                                            style={{}}
                                            source={require('../assets/img/passchange.png')}
                                        />
                                    </View>
                                    <View style={{ marginHorizontal: 20, marginTop: 30, marginBottom: 30 }}>
                                        <Text style={{ color: 'white', fontSize: 19, fontWeight: '700', textAlign: 'center' }}>Lorem Ipsum is simply dummy text</Text>
                                        <Text style={{ color: 'white', lineHeight: 20, fontSize: 15, marginTop: 10, fontWeight: '500' }}>Lorem ipsum dolor, sit amet elit. Facere quasi corporis vero error ipsam cupiditate molestiae laborum et iure illo tempora sed, repellendus aspernatur, recusandae optio odio sunt quas autem modi ratione in quisquam! </Text>
                                        
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
                            

                            <View style={{ position: 'absolute', bottom: 0, width: '100%', height: 40, paddingLeft: 10, backgroundColor: '#F97A12', flexDirection: 'row', alignItems: 'center' }}>
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
export default Adblockone;
