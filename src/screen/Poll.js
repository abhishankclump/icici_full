import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Button, ScrollView, TouchableOpacity, Image, Switch } from "react-native";
import Header from '../components/Topbar';
import { RadioButton } from 'react-native-paper';
// import * as Progress from 'react-native-progress';
import axios from 'react-native-axios';
import url from "../constant/Api.json";



export default function Poll({navigation}) {
  const [checked, setChecked] = React.useState('first');

  useEffect(() => {
    handleCmsQuiz()
}, [])

const handleCmsQuiz = () => {


    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer pVunGm65Rgl2mzET5WYl4hXIwGNF");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://apigwu.icicipruamc.com/v1/api/cmsquizzespolls", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    




}



  


  return (

    <View style={styles.container}>
      <Header title="Poll"navigation={navigation} />
      <View style={{alignItems:"center",marginTop:10,height:200}}>
      <Image
            style={styles.tinyLogo}
            source={require('../../assets/img/man.jpg')}
          />
      </View>


      <View style={{marginHorizontal:30 }}>

        <Text style={styles.item0}>Who will win IPL cup ?</Text>
        <View style={{borderRadius:12,elevation:10,backgroundColor:'white',height:60,justifyContent:'center'}}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <View style={{ width: 40, }}>
            <RadioButton color="orange"

              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
          </View>
          <Text style={{ color: 'black', fontWeight: 'bold',fontSize:16 }}>Answer</Text>
        </View>
        </View>

        <View style={{borderRadius:12,elevation:10,backgroundColor:'white',height:60,justifyContent:'center',marginTop:18}}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <View style={{ width: 40, }}>
            <RadioButton color="orange"

              value="first"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
          </View>
          <Text style={{ color: 'black', fontWeight: 'bold',fontSize:16 }}>Answer</Text>
        </View>
        </View>


        <View style={{borderRadius:12,elevation:10,backgroundColor:'white',height:60,justifyContent:'center',marginTop:18}}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <View style={{ width: 40, }}>
            <RadioButton color="orange"

              value="first"
              status={checked === 'third' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
          </View>
          <Text style={{ color: 'black', fontWeight: 'bold',fontSize:16 }}>Answer</Text>
        </View>
        </View>


        <View style={{borderRadius:12,elevation:10,backgroundColor:'white',height:60,justifyContent:'center',marginTop:18}}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <View style={{ width: 40, }}>
            <RadioButton color="orange"

              value="first"
              status={checked === 'fourth' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
          </View>
          <Text style={{ color: 'black', fontWeight: 'bold',fontSize:16 }}>Answer</Text>
        </View>
        </View>
      </View>

       <View style={styles.nextbtn}>
        <View style={styles.nextbtn1} elevation={5}>
          <TouchableOpacity onPress={()=>navigation.navigate("pollTwo")}>
          <Text style={{ fontSize: 18, color: 'white', fontFamily: 'MPLUSRounded1c-Medium' }}>Next</Text>

          </TouchableOpacity>
        </View>
     </View> 
      




    </View>


  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //height:"100%",
  },
  item0: {
    fontSize: 18,
    marginTop:11,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 12,
    marginHorizontal:10
  },
  item: {

    backgroundColor: 'white',
    fontSize: 24,


  },
  nextbtn: {
    color: 'black',
    marginTop:120,
    borderRadius:40,
    fontSize: 18,
    backgroundColor: '#FEF4F5',
    height: 50,
    width:'80%',
    marginLeft:40,
  },
  nextbtn1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    color: '#fff',
    // marginTop: 20,
    borderRadius: 40,
    height: 50,


  },
  tinyLogo:{
    height:"100%"
  }
});