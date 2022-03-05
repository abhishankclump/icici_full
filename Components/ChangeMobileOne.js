import React, { useState, useEffect, useRef} from 'react';
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity , Image} from 'react-native';
import Topbar from '../src/components/Topbar';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Iconic from 'react-native-vector-icons/Entypo';
import Searchico from 'react-native-vector-icons/Feather';
// import Cpthree from './Cpthree';
import url from "../src/constant/Api.json";
import axios from "react-native-axios";
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import MobileFive from './ChangeEmailSuccesful';
import Loader from "./Loder"

const styles = StyleSheet.create({
    root: { flex: 1, height: '100%' },
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
        elevation: 25,
        borderRadius: 15,
        marginHorizontal: 15,
        marginTop: 20,
        paddingVertical: 20,
        paddingHorizontal: 20,
    }
});





const MobileFour = ({ navigation }) => {
    
    const [SecureB, setSecureB] = useState(true);
    const [SecureC, setSecureC] = useState(true);

    
    const [EyepicB, setEyepicB] = useState("chevron-down");
    const [EyepicC, setEyepicC] = useState("chevron-down");


    
    const [Showvtwo, setShowvtwo] = useState(false);
    const [Showvthree, setShowvthree] = useState(false);

    const [Valueone, setValueone] = useState("devi");
    const [showone,setShowone]= useState(false)


//   const [show,setShow]= useState(false)

const [code,setCode]=useState("")

  const [formData, setformData] = useState({
    newMobile: "",
    confirmMobile: "",

  });
  const [show, setShow] = useState(false)
  const f1 = useRef(null)
  const f2 = useRef(null)



  const handleChangeContact = () => {
        if(Valueone.newMobile === ""){
            f1.current.focus()
        }else if(Valueone.confirmMobile === ""){
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
            console.log("changecontact",response.status)
            setCode(response.data)
            if(response.status == 200){
                setTimeout(()=>{
                  var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer hUnIlRLe9w0xTeUH4Vv1QrMuqiTz");
myHeaders.append("Content-Type", "text/plain");

var raw = "eyJ0eXAiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAtMjU2In0.R8rXvAp-k1TvShlgBNuJIHlNqOlUMIeHGT9vYlGdJg3gDzrjqM6MUja6dEu1EJCAX39mog77vnwP229n2-QoCBOwJwVGKVlCg-mUBsjXmxTmfummX8tmLfDquY1tqMf-Q8MrhnLR4ei8IAv8gfuo4Op3JZcVvfEFYhn3ImNrj758VMQI0nXh7fTd3bcNqYU1FdsrOo9DARcJHqruzhs4m31gDxpMOe_T-oRYJQB1iJA4y4eNSyE7cW_gLc11F7OSR2n2U-64rYm_kPfNRZ9MRZEQvfrWOF2P23cBfOPTuWDcyOAL_UVSDvc5HyPntA8ztA_3rNu6dghLbOqwHzSkvg.4Vh0vpe7IO61YLng.MFgramAh5vLGEfnNTAcmFKneiztqWTadqHTbqvZxIh4eE0TYUMbcMoqKdXMFK6-EnuR6nm_dQ1AUKudk2DBc-yFxTEQDY495c2jMLRqVT_9HIuSLHAK7-LJQo577x1cz3mT76VBHtlAih9tcF7sjSLpSFw2-ipNiiXu1CYKIJG5h5xmrWipFEKDXrSLlyz08jz67g2IffQv5.6Y0Sf407XXn1WFEqwKzKPw\r\n";

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://apigwu.icicipruamc.com/v1/api/changecontactno", requestOptions)
                        .then(response => response.json())
                      .then(result => {console.log(result)
                        setShowone(false)
                        if(result.Code == 0){
                            setShow(true)
                          
                           
                            



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
            console.log("changecontectno",error)

        });
    }
  };



  
    return (
        <SafeAreaView style={styles.root}>
            <Topbar navigation={navigation} title="Change contact number" />
            <ScrollView>
                <View style={styles.cellbox}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '800' }}>Your current mobile number is</Text>
                    <Text style={{ fontSize: 16, marginBottom: 15, marginTop: 5, fontWeight: '400' }}>+91-8664563789</Text>



                    

                    <Text style={{ fontWeight: '600', marginTop: 10, marginBottom: 5, marginLeft: 15 }}>Enter New Mobile Number</Text>

                    <View style={{ height: 60, width:"100%", borderWidth: 1, borderColor: 'lightgray', width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                        
                        <View style={{}}>
                            <TouchableOpacity 
                            onPress={() => {setSecureB(!SecureB)
                                setShowvtwo(!Showvtwo)
                            }} 
                            style={{flexDirection:'row', marginRight:10, alignItems:'center'}} >
                            <Image
                                    style={{ width: 40, height: 20}}
                                    source={require('../assets/img/india.png')}
                                />
                                <Iconic size={25} name={EyepicB} color="#FA9000" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '60%', borderLeftWidth:1, borderLeftColor:'gray' }}>
                            <TextInput ref={f1} onChangeText={(e) => setformData({...formData,newMobile:e})} value={formData.newMobile} onFocus={()=>setShowvtwo(false)} style={{color:'black', marginLeft: 5, color: 'black' }}></TextInput>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <ValidationPopup showbox={Showvtwo} />
                    </View>

                    <Text style={{ fontWeight: '600', marginTop: 10, marginBottom: 5, marginLeft: 15 }}>Confirm New Mobile Number</Text>
                    <View style={{  height: 60, width:"100%",  borderColor: 'lightgray', borderWidth: 1, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                        
                        <View style={{}}>
                            <TouchableOpacity 
                            onPress={() => {setSecureC(!SecureC)
                                setShowvthree(!Showvthree)
                            }}  
                            style={{flexDirection:'row', marginRight:10, alignItems:'center'}} >
                            <Image
                                    style={{ width: 40, height: 20}}
                                    source={require('../assets/img/india.png')}
                                />
                                <Iconic size={25} name={EyepicB} color="#FA9000" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '60%', borderLeftWidth:1, borderLeftColor:'gray' }}>
                            <TextInput ref={f2} onChangeText={(e) => setformData({...formData,confirmMobile:e})} value={formData.confirmMobile} onFocus={() => { setShowvthree(false) }}  style={{ marginLeft: 5, color: 'black' }}></TextInput>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <ValidationPopup showbox={Showvthree} />
                    </View>

                </View>
                <TouchableOpacity onPress={handleChangeContact}
                    style={{ marginTop: 250, marginHorizontal: 10, height: 60, backgroundColor: "#FA9000", borderRadius: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: "700", fontSize: 18, color: "#fff" }}>Update</Text>
                </TouchableOpacity>

            </ScrollView>
            <MobileFive visible={show} closeCallback={() =>setShow(false)} navigation={navigation}/>
            <Loader visible={showone}/>
        </SafeAreaView>
    );
};

export default MobileFour;


const ValidationPopup = ({ showbox, value1 }) => {
    return (
        <>
            {showbox ?
                (<View style={{width:'100%', display: 'flex', position: 'absolute', borderRadius: 30, elevation: 20, height: 170, alignSelf: "flex-start", backgroundColor: 'white', paddingHorizontal: 30, paddingVertical: 20 }}>
                    


                <View style={{ height: 45, width: 50, borderWidth: 1, borderColor: 'gray', width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                        
                        <View style={{}}>
                           
                                <Searchico size={25} name={'search'} color="gray" />
                        </View>
                        <View style={{ width: '80%', }}>
                            <TextInput style={{ marginLeft: 5, color: 'black' }}></TextInput>
                        </View>
                    </View>
                </View>)
                : null}
        </>
    )
}

function validate({ value }) {

}