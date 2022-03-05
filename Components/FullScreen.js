/* eslint-disable react-native/no-inline-styles */
import React from 'react';
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

const styles = StyleSheet.create({
    wrapper: {

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


const Mylist = ({ data }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', height: 30 }}>
            <Text style={{ fontSize: 25, color: 'white' }}>{'\u2022'}</Text>
            <Text style={{ flex: 1, paddingLeft: 5, color: 'white', fontSize: 15, fontWeight: '500' }}>{data}</Text>
        </View>
    )
}

const Adblockthree = ({ visible, closeCallback, shareOptionCallback }) => {

    const [checked, setChecked] = React.useState(false);

    const cmsBlokers = () => {
        axios
            .get(url.baseUrl + 'cmsblockers'
                
            )
            .then(response => {
                console.log(response)

            })
            .catch(error => {
                console.log(response)
            });
};
    return (




        <View
            style={{
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                height: '100%',
                backgroundColor: "#4AA5AB",
            }}>


            <View style={{ flexDirection: 'row', marginTop: 10 }}>

                <TouchableOpacity style={{ position: 'absolute', right: 10, marginTop: 10, backgroundColor: '#F4F5FA', justifyContent: 'center', alignItems: 'center', borderRadius: 50, height: 40, width: 40, textAlign: 'center' }}>
                    <Text style={{ fontSize: 19, fontWeight: '700', color: 'black' }}>X</Text>
                </TouchableOpacity>
            </View>



            <View style={{ height:'90%',  marginBottom: 40 }}>
                <Swiper style={styles.wrapper} dotColor="#D8D8D8" activeDotColor="#F97A12">
                    <View>

                        <View style={{ marginBottom: 20, marginTop: 10, width: 250 }}>
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: '700', marginLeft:30 }}>Lorem Ipsum is simply dummy text</Text>
                        </View>
                        <View
                            style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Image
                                style={{ height: 220, width: 220 }}
                                source={require('../assets/img/passchange.png')}
                            />
                        </View>
                        <View style={{ justifyContent: 'center', marginTop: 20, marginLeft:"15%" }}>

                            <Mylist data={"Lorem Ipsum is simply dummy text"} />
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


            <View style={{  position: 'absolute', bottom:0, width: '100%', height: 40, paddingLeft: 10, backgroundColor: '#F97A12', flexDirection: 'row', alignItems: 'center' }}>
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



    );
};

export default Adblockthree;
