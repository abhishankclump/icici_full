/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect} from 'react';
import {
    View,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import axios from 'react-native-axios';
import url from "../src/constant/Api.json";



const Cpthree = ({ visible, closeCallback, shareOptionCallback }) => {

   
    const [Valueone, setValueone] = useState({
        email: "",  
        userId: ""
    })
    useEffect(() => {
        handleForgotPassword()
    }, [])
    const handleForgotPassword = () => {
        axios
            .post(url.encryptedJWT, {
                headers: {
                    "Authorization": "Bearer " + "SlqaEHtLjwqmj4jlPAgAhq1PUcVN"
                },
                "Type": "U", "FolioNo": "15849205",
                "EmailId": Valueone.email,
                "UserId": Valueone.userId,
                "Source": "IS", "ArnCode": "123"
            },

            )
            .then(response => {
                console.log("response", response.status)
                if(response.status == 200) {

                    axios
                        .post(url.baseUrl + "forgotcredentials", {

                            body: response.data,
                            headers: {
                                "Authorization": "Bearer SlqaEHtLjwqmj4jlPAgAhq1PUcVN"
                            },

                        },

                        )
                        .then(response => {
                            console.log("response main", response)


                        })
                        .catch(error => {
                            console.log("error", error)

                        });



                }

                else {
                    console.log("error")
                }

            })
            .catch(error => {
                () => navigation.navigate("Cpfour")
            });

    }





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
                            backgroundColor: "#fff"
                        }}>

                        <View
                            style={{
                                height: 580, borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                                

                            }}>

                            <ScrollView>
                            <View style={{ flexDirection: 'row' , marginTop:10 }}>
                                <View style={{flexDirection:'row', width:'100%' , justifyContent:'center' , alignItems:'center'}}>
                                <Text style={{width:'70%', marginTop: 15,  textAlign: "center", fontWeight: "700", fontSize: 18, color: 'black' }}>Share the following details about your Account</Text>
                                </View>
                                <TouchableOpacity style={{position:'absolute', right:10,  marginTop: 10, backgroundColor: '#F4F5FA', justifyContent: 'center', alignItems: 'center', borderRadius: 50, height: 40, width: 40, textAlign: 'center' }}>
                                    <Text style={{ fontSize: 19, fontWeight: '700' }}>X</Text>
                                </TouchableOpacity>
                            </View>


                            <View style={{ marginHorizontal:30, flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, paddingHorizontal: 10, marginBottom: 30 }}>
                                <TouchableOpacity onPress={closeCallback}
                                    style={{width:'45%' , height: 40, backgroundColor: "#FA9000", borderRadius: 30, justifyContent: 'center' }}>
                                    <Text style={{ textAlign: "center", fontWeight: "700", fontSize: 15, color: "#fff" }}>Forgot password</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={closeCallback}
                                    style={{width:'45%' , height: 40, backgroundColor: "white", borderRadius: 30, borderWidth: .5, justifyContent: 'center' }}>
                                    <Text style={{  textAlign: "center", fontWeight: "700", fontSize: 15, }}>User Name</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{marginHorizontal:30,}}>
                            <Text style={{ fontWeight: '600', marginTop: 10, marginBottom: 5, marginLeft: 10 }}>Enter email ID</Text>
                            <TextInput onChangeText={(e) => setValueone({...Valueone,email:e})} value={Valueone.email} style={{ borderWidth: 1, borderRadius: 30, fontSize: 18, fontWeight: '700', paddingLeft: 20 }}></TextInput>
                            <Text style={{ fontWeight: '600', marginTop: 25, marginBottom: 5, marginLeft: 10 }}>Enter User ID</Text>
                            <TextInput onChangeText={(e) => setValueone({...Valueone,userId:e})} value={Valueone.userId} style={{ borderWidth: 1, borderRadius: 30, fontSize: 18, fontWeight: '700', paddingLeft: 20 }}></TextInput>
                            </View>
                            </ScrollView>

                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </Modal>
    );
};

export default Cpthree;
