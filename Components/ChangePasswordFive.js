import React, { useState, useEffect  } from 'react';
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Topbar from '../src/components/Topbar';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Iconic from 'react-native-vector-icons/Entypo';
// import Cpthree from './ChangePasswordThree';
import Cpsix from './ChangePasswordSuccesful';
import axios from "react-native-axios";
import url from "../src/constant/Api.json"


import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const styles = StyleSheet.create({
    root: { flex: 1 , height:'100%',backgroundColor:"white"},
    title: { textAlign: 'center', fontSize: 30 },
    codeFieldRoot: {},
    cell: {
        width: 45,
        height: 45,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#00000030',
        textAlign: 'center',
        borderRadius: 12,

    },
    focusCell: {
        borderColor: '#FA9000',
    },


    cellbox: {
        backgroundColor: 'white',
        elevation:5,
        borderRadius: 15,
        marginHorizontal: 15,
        marginTop: 20,
        paddingVertical: 25,
        paddingHorizontal: 20,
    }
});





const Cpfive = ({ navigation }) => {
    const [Popup, setPopup] = useState(false);

    const [SecureA, setSecureA] = useState(true);
    const [SecureB, setSecureB] = useState(true);
    const [SecureC, setSecureC] = useState(true);

    const [EyepicA, setEyepicA] = useState("eye-with-line");
    const [EyepicB, setEyepicB] = useState("eye-with-line");
    const [EyepicC, setEyepicC] = useState("eye-with-line");

    const [Valueone, setValueone] = useState({
        npass:"",
        cpass:""
        
    });

    useEffect(() => {
        handleChangePassword()
    }, [])
    const handleChangePassword = () => {
        axios
            .post(url.encryptedJWT, {
                headers: {
                    "Authorization": "Bearer " + "hOlGVWepyl0XvGBwQGVGWnGwqyxI"
                },
                "GUID":"E7E683DE-15F4-4E72-BF85-1D371E8F866B","UserId":"663706",
                "OldPasscode":"",
                "NewPasscode":Valueone.npass,
                "ConfirmPasscode":Valueone.cpass, 
                "Mode":"MP",
                 "Source":"IS"
            },

            )
            .then(response => {
                console.log("response", response.status)
                if(response.status == 200) {

                    axios
                        .post(url.baseUrl + "changepass", {

                            body: response.data,
                            headers: {
                                "Authorization": "Bearer hOlGVWepyl0XvGBwQGVGWnGwqyxI"
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
        <SafeAreaView style={styles.root}>
            <Topbar navigation={navigation} title="Set Password" />
            
            <View style={styles.cellbox}>
            

                <Text style={{ fontWeight: '600', marginBottom: 5, marginLeft:15 }}>Enter new password</Text>

                <View style={{height:60, width:"80%",borderColor:'gray', borderWidth:1 , width:'100%' , flexDirection:'row' , justifyContent:'center' , alignItems:'center',  borderRadius:30}}>
                <View style={{width:'80%'}}>
                    <TextInput value={Valueone.npass} onChangeText={(m) => setValueone({ ...Valueone, npass: m })} secureTextEntry={SecureB} style={{marginLeft:5 , color:'black'}}></TextInput>
                </View>
                <View style={{}}>
                <TouchableOpacity onPress={() => setSecureB(!SecureB)}>
                <Iconic size={25} name="eye" color="black" />
                </TouchableOpacity>
                </View>
               </View>

                <Text style={{ fontWeight: '600', marginTop: 10, marginBottom: 5, marginLeft:15 }}>Confirm new password</Text>

                <View style={{height:60, width:"80%",borderColor:'gray', borderWidth:1 , width:'100%' , flexDirection:'row' , justifyContent:'center' , alignItems:'center',  borderRadius:30}}>
                <View style={{width:'80%'}}>
                    <TextInput value={Valueone.cpass} onChangeText={(m) => setValueone({ ...Valueone, cpass: m })} secureTextEntry={SecureC} style={{marginLeft:5 , color:'black'}}></TextInput>
                </View>
                <View style={{}}>
                <TouchableOpacity onPress={() => setSecureC(!SecureC)}>
                <Iconic size={25} name="eye-with-line" color="black" />
                </TouchableOpacity>
                </View>
               </View>


            </View>
           
            <TouchableOpacity  onPress={()=>setPopup(true)}
                    style={{ marginTop: 380, marginHorizontal: 10, height: 60, backgroundColor: "#FA9000", borderRadius: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: "700", fontSize: 18, color: "#fff" }}>Next</Text>
                </TouchableOpacity>

            <Cpsix visible={Popup} closeCallback={()=>setPopup(false)} navigation={navigation}/>
            
        </SafeAreaView>
    );
};

export default Cpfive;