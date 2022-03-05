/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import {
    View,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import Modal from 'react-native-modal';
import axios from 'react-native-axios';
import url from "../constant/Api.json";
import Iconic from 'react-native-vector-icons/Ionicons';
import { Linking } from 'react-native';
const ShareModal = ({ visible, closeCallback, shareOptionCallback }) => {
    useEffect(()=>{
        handleReffral() 
    },[])
    const handleReffral = () => {
        axios
            .post(url.baseUrl + 'getreferral',{
                "Mode":"S",
                "UserId":"458963",
                "Source":"IS",
                "Flow":"Registration",
                "Folio_No":"5746884",
                "Trxn_Type":"P",
                "Trxn_Date":"01-May-2021"
            })
            .then(response => {
             console.log(response)
            })
            .catch(error => {
             console.log(error)

            });
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
                            backgroundColor: "#fff"
                        }}>

                        <View
                            style={{
                                height: 550, borderTopLeftRadius: 20,
                                borderTopRightRadius: 20
                            }}>
                            <View
                                style={{ height: "40%", backgroundColor: "white", marginHorizontal: 30, marginTop: 30 }}>
                                <Image
                                    style={{ width: 312, height: 163 }}
                                    source={require('../../assets/img/conversationPana.png')}
                                />
                            </View>
                            <Text style={{marginTop:15,marginHorizontal:50,textAlign:"center",fontWeight:"700",height:40,fontSize:20,color:'black'}}>Help someone you know</Text>
                            <Text style={{marginTop:1,marginHorizontal:50,textAlign:"center",fontWeight:"600",height:60,fontSize:16}}>Share with your friends & Earn cash</Text>
                            <TouchableOpacity onPress={closeCallback}
                                style={{justifyContent:"center", height: "10%", marginHorizontal: 40,backgroundColor:"#fff" ,marginTop:10,borderRadius:30,borderBottomColor:"lightgrey",borderWidth:1 }}>
                            <Text style={{textAlign:"center",fontWeight:"700",fontSize:20,color:"lightgrey"}} onPress={() => Linking.openURL('https://www.ICICI.com/')}>https://www.ICICI.com/</Text>
                            {/* <Iconic  size={25} name={EyepicA} color="black" /> */}
                              
                            </TouchableOpacity>
                            <TouchableOpacity onPress={closeCallback}
                                style={{ height: "10%", marginHorizontal: 30,backgroundColor:"orange" ,marginTop:30,borderRadius:30 }}>
                            <Text style={{marginTop:15,marginHorizontal:50,textAlign:"center",fontWeight:"700",fontSize:20,color:"#fff"}}>Share Link</Text>
                              
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </Modal>
    );
};
export default ShareModal;
