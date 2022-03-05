import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, FlatList, Button, ScrollView, TouchableOpacity, Image, Switch, TextInput } from "react-native";
import { Modal } from "react-native-paper";
import Topbar from '../src/components/Topbar';
import Model from './ChangeEmailSuccesful'
import axios from 'react-native-axios';
import url from "../src/constant/Api.json";
import Loader from "./Loder" 
// import { useContext } from "react";
// import NoteContext from "../Context/NoteContext";

export default function ChangeEmail({ navigation }) {

  
  const [model, setModel] = useState(false)
  const [showone,setShowone]= useState(false)
  const [code,setCode]=useState("")

  const [Valueone, setValueone] = useState({
    newEmail: "",
    confirmEmail: "",

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

  return (<>

    <View style={styles.container}>
      {/* //<Header type="Change email address" /> */}
      <Topbar navigation={navigation} title="Change email address" />
      <View style={{ borderRadius: 12, marginHorizontal: 20, elevation: 15, backgroundColor: 'white', paddingBottom: 35, marginTop: 20 }}>
        <View style={{ marginLeft: 35, marginTop: 30 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>Change email address</Text>
          <Text style={{ marginTop: 15, color: '#C0C0C0' }}>Enter new Email</Text>
          <View style={styles.nextbtn1} elevation={5}>
            <TextInput ref={f1} onChangeText={(e) => setValueone({ ...Valueone, newEmail: e })} value={Valueone.newEmail} style={{ fontSize: 15, color: 'black', fontFamily: 'MPLUSRounded1c-Medium', marginLeft: 16, fontWeight: 'bold' }}/>

          </View>

          <Text style={{ marginTop: 15, color: '#C0C0C0' }}>Confirm new Email</Text>
          <View style={styles.nextbtn1} elevation={5}>
            <TextInput ref={f2} onChangeText={(e) => setValueone({ ...Valueone, confirmEmail: e })} value={Valueone.confirmEmail} style={{ fontSize: 15, color: 'black', fontFamily: 'MPLUSRounded1c-Medium', marginLeft: 16, fontWeight: 'bold' }}/>
          </View>




        </View>
      </View>

      <TouchableOpacity onPress={handleChangeEmail}>

        <View style={styles.nextbtn} elevation={5}>
          <Text style={{ fontSize: 18, color: 'white', fontFamily: 'MPLUSRounded1c-Medium', fontWeight: 'bold' }}>Submit</Text>
        </View>

      </TouchableOpacity>

    </View>
    <Model visible={model} closeCallback={() => setModel(false)} navigation={navigation} />
    <Loader visible={showone}   />







  </>);


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  nextbtn1: {
    display: 'flex',
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: 'white',
    color: 'black',
    marginTop: 20,
    borderRadius: 40,
    height: 50,
    marginRight: 16,
    textAlign: 'right',



  },
  nextbtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    color: '#fff',
    // marginTop: 20,
    borderRadius: 40,
    height: 50,
    marginTop: 300,
    marginHorizontal: 20
  }

});