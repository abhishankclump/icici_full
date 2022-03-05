import React, { useState,useEffect,useRef } from 'react';
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Topbar from '../src/components/Topbar';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Iconic from 'react-native-vector-icons/Ionicons';
import CpThree from './ChangeMpinTwo';
import axios from 'react-native-axios';
import url from "../src/constant/Api.json";
import Loader from "./Loder" 
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const styles = StyleSheet.create({
    root: { flex: 1, height: '100%',backgroundColor:"#fff" },
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
        paddingVertical: 20,
        paddingHorizontal: 20,
    }
});





const Cpone = ({ navigation }) => {
    const [SecureA, setSecureA] = useState(true);
    const [SecureB, setSecureB] = useState(true);
    const [SecureC, setSecureC] = useState(true);

    const [EyepicA, setEyepicA] = useState("ios-eye-off-outline");
    const [EyepicB, setEyepicB] = useState("ios-eye-off-outline");
    const [EyepicC, setEyepicC] = useState("ios-eye-off-outline");


    const [Showvone, setShowvone] = useState(false);
    const [Showvtwo, setShowvtwo] = useState(false);
    const [Showvthree, setShowvthree] = useState(false);
    const [code,setCode]=useState("")
    const [showone,setShowone]= useState(false)
    const f1 =useRef(null)
    const f2 =useRef(null)
    const f3 =useRef(null)

    const [Valueone, setValueone] = useState({
        oldPassword:"",
        newPassword:"",
        confirmPassword:""
        
    });
    const [show,setShow]=useState(false)
    useEffect(()=>{
      
    },[])
    const handleSignIn = () => {
        if(Valueone.oldPassword === ""){
            f1.current.focus()
        }else if(Valueone.newPassword === ""){
            f2.current.focus()
        }else if(Valueone.confirmPassword === ""){
            f3.current.focus()
        }else{
        setShowone(true)
        axios
        .post(url.encryptedJWT ,{
            "GUID":"E7E683DE-15F4-4E72-BF85-1D371E8F866B",
            "UserId":"663706",
            "OldPasscode":Valueone.oldPassword,
            "NewPasscode":Valueone.newPassword,
            "ConfirmPasscode":Valueone.confirmPassword,
            "Mode":"MP", 
            "Source":"IS"
        },{
            header:{
                "Authorization":"Bearer" + "aWAo65fVKgfi9DFFqlmQbnh0cjtH"
            }
        })
        .then(response => {
            // () => navigation.navigate("Cpfour")
            console.log("changepass",response.status)
            setCode(response.data)
            if(response.status == 200){
                setTimeout(()=>{
                    var myHeaders = new Headers();
                    myHeaders.append("Authorization", "Bearer aWAo65fVKgfi9DFFqlmQbnh0cjtH");
                    myHeaders.append("Content-Type", "text/plain");
                    
                    var raw = "eyJ0eXAiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAtMjU2In0.Z4QqZrAtb0isNFcIhUeQkQqLa6I09R_GSlbXFLP7bwn0SS3Xar4dWGwZBD3tDc-sHp5Tl7W4mSXwoYCtvI8GnZBAAWY1uGbu702SPj9jsY330i5xvMMoo3vxKveMz-1DkPhyqcxmv9WrLX3tqyrVdyX5D26_8WwSMnjKWjph-g8kAvoiasvgtbuwwLN4OCVQEtRS8f9WdkrkMibZ0u7Zp3f6g5_VtBgZINNmD4pj2TxXA6TOzNNcKIoosUBBGKEFwHtlegqht-arN-N8VWa4zBfqCp--73T_Cqhd5DQkNi_GtQZqClhrWHY8OHs127BjXlKW7IQfcFNpRSyaFBF7mg.K_INGTBZ3zfkw97q.G4XN82wATlm6oBbnB5GxxHdfKOFxPusuLRjEaSnHXsL8L3zI-Yozz-T_9z4SmMHFjJnpSgCDUHJh6FEN_4ZxZLkQKq7kdejJ_cb54t_9sb1Yh2krizKZWkdMSWmMWZrRNYffFgwm_CYIHXIeTgoBofmgGQNWpyjHvydIOSCdgvdCDJW9x15ak9LY93mwdcRqlZNeupqEJGxwwgGkOcly8cLDIEF80-If3SLBAYIXS6p_pvyDJhvvKnJWWlRtgot8LBCIVKR6qVq2Qv-z9C1-p9aHiDXm4OdKj-TIo8-5dtTvxQo7ENIrWGnqpsqx.N4q9SQhnyN3dnXJOWlKoFw\r\n";
                    
                    var requestOptions = {
                      method: 'POST',
                      headers: myHeaders,
                      body: raw,
                      redirect: 'follow'
                    };
                    
                    fetch("https://apigwu.icicipruamc.com/v1/api/changepass", requestOptions)
                      .then(response => response.json())
                      .then(result => {console.log(result)
                        setShowone(false)
                        if(result.Code == 0){
                            alert("successFull")
                            navigation.navigate("ChangePasswordFour")

                        }else{
                            alert("falied")

                        }
                    
                    })
                      .catch(error => console.log('error', error));
                },2000)
            }

        })
        .catch(error => {
            // () => navigation.navigate("Cpfour")
            console.log("changepasserror",error)

        });
    }
    };
    return (<>
        <SafeAreaView style={styles.root}>
            <Topbar navigation={navigation} title="Change password" />
            <ScrollView>
                <View style={styles.cellbox}>
                    <Text style={{ fontSize: 20, marginBottom: 15, color: 'black', fontWeight: '800' }}>Change password</Text>
                    <Text style={{ fontWeight: '600', marginBottom: 5, marginLeft: 15 }}>Enter Old Password</Text>

                    <View style={{ height:60, width: "80%", borderColor: 'lightgray', borderWidth: 1, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                        <View style={{ width: '80%' }}>
                            <TextInput ref={f1} onChangeText={(e) => setValueone({...Valueone,oldPassword:e})} value={Valueone.oldPassword}  onBlur={()=>{setShowvone(false)}} onFocus={()=>{setShowvone(true)}} secureTextEntry={SecureA} style={{ marginLeft: 5, color: 'black' }}></TextInput>
                        </View>

                        <View>
                            <TouchableOpacity onPress={() => {
                                setSecureA(!SecureA)
                            }}>
                                <Iconic size={25} name={EyepicA} color="black" />
                            </TouchableOpacity>
                        </View>


                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <ValidationPopup showbox={Showvone} value1={Valueone} />
                    </View>
                    <TouchableOpacity onPress={() => {
                                setShow(true)
                            }}>
                    <Text style={{ fontWeight: '600', marginTop: 8, color: '#FA9000', fontSize: 16, fontWeight: '700', marginLeft: 15 }}>Forgot current Mpin?</Text>
                    </TouchableOpacity>
                    
                    <Text style={{ fontWeight: '600', marginTop: 10, marginBottom: 5, marginLeft: 15 }}>Enter New MPIN</Text>

                    <View style={{ height:60, width: "80%", borderWidth: 1, borderColor: 'lightgray', width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                        <View style={{ width: '80%' }}>
                            <TextInput ref={f2} onChangeText={(e) => setValueone({...Valueone,newPassword:e})} value={Valueone.newPassword}  onBlur={()=>{setShowvtwo(false)}} onFocus={()=>{setShowvtwo(true)}} secureTextEntry={SecureB} style={{ marginLeft: 5, color: 'black' }}></TextInput>
                        </View>
                        <View style={{}}>
                            <TouchableOpacity onPress={() => setSecureB(!SecureB)}>
                                <Iconic size={25} name={EyepicB} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <ValidationPopup showbox={Showvtwo}  />
                    </View>

                    <Text style={{ fontWeight: '600', marginTop: 10, marginBottom: 5, marginLeft: 15 }}>Confirm New MPIN</Text>
                    <View style={{height:60, width: "80%", borderColor: 'lightgray', borderWidth: 1, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                        <View style={{ width: '80%' }}>
                            <TextInput ref={f3} onChangeText={(e) => setValueone({...Valueone,confirmPassword:e})} value={Valueone.confirmPassword}  onBlur={()=>{setShowvthree(false)}} onFocus={()=>{setShowvthree(true)}} secureTextEntry={SecureC} style={{ marginLeft: 5, color: 'black' }}></TextInput>
                        </View>
                        <View style={{}}>
                            <TouchableOpacity onPress={() => setSecureC(!SecureC)}>
                                <Iconic size={25} name={EyepicC} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <ValidationPopup showbox={Showvthree} />
                    </View>

                </View>
                <TouchableOpacity onPress={handleSignIn} 
                    style={{ marginTop: 150, marginHorizontal: 10, height: 60, backgroundColor: "#FA9000", borderRadius: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: "700", fontSize: 18, color: "#fff" }}>Next</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
        <CpThree visible={show} closeCallback={() => {setShow(false) }}/>
        <Loader visible={showone}   />

    </>);
};

export default Cpone;


const ValidationPopup = ({ showbox , value1 }) => {
    return (
        <>
            {showbox? 
            (<View style={{ display: 'flex', position: 'absolute', borderRadius: 30, elevation:5, height: 170, alignSelf: "flex-start", backgroundColor: 'white', paddingHorizontal: 30, paddingVertical: 20 }}>
                <Text style={{ lineHeight: 25, fontWeight: '600' }}>Password must include:</Text>
                <Text style={{ lineHeight: 25, color: 'green', fontSize: 15, fontWeight: '700' }}>8-20 Characters</Text>
                <Text style={{ lineHeight: 25, color: 'green', fontSize: 15, fontWeight: '700' }}>At least one capital letter</Text>
                <Text style={{ lineHeight: 25, color: 'green', fontSize: 15, fontWeight: '700' }}>At least one number</Text>
                {/* <Text style={{ lineHeight: 25, color: 'green', fontSize: 15, fontWeight: '700' }}>ii {value1}</Text> */}
                <Text style={{ lineHeight: 25, color: 'green', fontSize: 15, fontWeight: '700' }}>No spaces</Text>
            </View>)
            : null}
        </>
    )
}

function validate({ value }) {

}