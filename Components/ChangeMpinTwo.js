/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect, useRef } from 'react';
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
import Icon from "react-native-vector-icons/AntDesign";
import axios from "react-native-axios";
import url from "../src/constant/Api.json"
const Mpintwo = ({ visible, closeCallback, shareOptionCallback }) => {

    const [Valueone, setValueone] = useState({
        EmailId: "",
        UserId: "",
    
      });
      const [show, setShow] = useState(false)
      const f1 = useRef(null)
      const f2 = useRef(null)
    
    
    
      const handleChangeEmail = () => {
            if(Valueone.newEmail === ""){
                f1.current.focus()
            }else if(Valueone.confirmEmail === ""){
                f2.current.focus()
            }else{
            setShowone(true)
            axios
            .post(url.encryptedJWT ,{
              "strfolio_no":"9927698", 
              "strMail":Valueone.newEmail, 
               "Source": "IS",
               "OTP_ID":"1234"
            },{
                header:{
                    "Authorization":"Bearer" + "guHpIqkad221k3ik5TCBUBgkGG2f"
                }
            })
            .then(response => {
                // () => navigation.navigate("Cpfour")
                console.log("changeEmail",response.status)
                setCode(response.data)
                if(response.status == 200){
                    setTimeout(()=>{
                      var myHeaders = new Headers();
                      myHeaders.append("Authorization", "Bearer guHpIqkad221k3ik5TCBUBgkGG2f");
                      myHeaders.append("Content-Type", "text/plain");
    
                      var raw = "eyJ0eXAiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAtMjU2In0.EErNOwYOOYYo7tRiOGLGSOiT7xGbCY-Wx_haB8X6f7WC2ddTm1u8myJV7AV5DYYD9h8QiPM7pY9klGBYZYQQ8PVUyAfz01UcfDyfLCyVhsBt-nHquB8XTy9UECl3zCwZ5RPYfqEe7IHKPD0hBFznnUfx-9NwrTUwSNK6jXQCRANE2Bnn4Bp9gE9yz5UTLcW8s1CAzAQcLCFU7qzRiwoMaRORBf2iD8rhmJ9KIjpjpNdmrWmY0rwFXzuZDB_7jLUjbqUoHqSQvnZk26hp2LDANk8otYqafhVZvh3Sl0AAEOGUbN60D3O5w6y6xfr-ob3YDAGfAQ710OpdJNI_uYJ6gg.Vocsl6fJuxM-1__d.0jgKMCWuDSaV0qTbPgwpKwNFQLgxyQgymAJKjMU4aHRvDGaMAEqw56MTjKCHcMsjGV1Yw4e5sIobsRm7SJPC35-7Z3ncgPQkRUJ1bvqFacR1OpOs1aINNXlFEO0dLSk0fpLiqa3Ut2O5dJtnK7j_AvLg8YN0xakLAbr5VgBP7x7N1yTnT7z-p6e8VwWBSTyCPJYj-5J1iZ12KnRnFEAhmdDTRprL3f8ijnoE.dgp2aN5QojSyGgyqXcqUZA\r\n";
    
                      var requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: raw,
                        redirect: 'follow'
                      };
    
                      fetch("https://apigwu.icicipruamc.com/v1/api/changeemail", requestOptions)
    
                          .then(response => response.json())
                          .then(result => {console.log(result)
                            setShowone(false)
                            if(result.Code == 0){
                              setModel(true)
    
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
                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ width: '70%', marginTop: 15, textAlign: "center", fontWeight: "700", fontSize: 18, color: 'black' }}>Share the following details about your Account</Text>
                                    </View>
                                    <TouchableOpacity style={{ position: 'absolute', right: 10, marginTop: 10, backgroundColor: '#F4F5FA', justifyContent: 'center', alignItems: 'center', borderRadius: 50, height: 40, width: 40, textAlign: 'center' }}>
                                        <Icon name="close" size={25} color="black" />
                                    </TouchableOpacity>
                                </View>


                                <View style={{ marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, paddingHorizontal: 10, marginBottom: 30 }}>
                                    <TouchableOpacity onPress={closeCallback}
                                        style={{ backgroundColor: "#FA9000", borderRadius: 30, justifyContent: 'center', padding: 10 }}>
                                        <Text style={{ marginHorizontal: 30, textAlign: "center", fontWeight: "700", fontSize: 16, color: "#fff" }}>Forgot MPIN</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={closeCallback}
                                        style={{ backgroundColor: "white", borderRadius: 30, borderWidth: 0.5, justifyContent: 'center', padding: 10, borderColor: "lightgrey" }}>
                                        <Text style={{ marginHorizontal: 30, textAlign: "center", fontWeight: "700", fontSize: 16, }}>User Name</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginHorizontal: 30, }}>
                                    <Text style={{ fontWeight: '600', marginTop: 10, marginBottom: 5, marginLeft: 10 }}>Enter email ID</Text>
                                    <TextInput ref={f1} onChangeText={(e) => setValueone({ ...Valueone, EmailId: e })} value={Valueone.EmailId} style={{ borderWidth: 1, borderRadius: 30, fontSize: 18, fontWeight: '600', paddingLeft: 20, padding: 10, borderColor: "lightgrey" }} />
                                    <Text style={{ fontWeight: '600', marginTop: 25, marginBottom: 5, marginLeft: 10 }}>Enter User ID</Text>
                                    <TextInput ref={f1} onChangeText={(e) => setValueone({ ...Valueone, UserId: e })} value={Valueone.UserId} style={{ borderWidth: 1, borderRadius: 30, fontSize: 18, fontWeight: '600', paddingLeft: 20, padding: 10, borderColor: "lightgrey" }} />
                                </View>
                            </ScrollView>

                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </Modal>
    );
};

export default Mpintwo;
