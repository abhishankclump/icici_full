import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Button, ScrollView, TouchableOpacity, Image, Switch } from "react-native";
import Topbar from '../components/Topbar';
import Icon from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
export default function SurveyMain({navigation}) {


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
       <Topbar title="Survey"navigation={navigation} />
      <View style={{marginHorizontal:100}}>
      <Image
            style={styles.tinyLogo}
            source={require("../../assets/img/group190.png")}
          />
          
      </View>
      


      <View style={{marginHorizontal:100,marginTop:40}}>
      <Text style={{textAlign:'center',fontSize:18,fontWeight:'bold',color:'black'}}>Woops!</Text>
      
      </View>

      <View style={{marginHorizontal:75}}>
      <Text style={{fontSize:14,color:'#A9A9A9'}}>Your Quiz have been Unsuccessful.</Text>
      </View>

      <View style={{marginTop:15}}>
      <Text style={{textAlign:'center',marginRight:10,fontSize:16,color:'#A9A9A9'}}>Your Score</Text>
      </View>

      <View style={{flexDirection: 'row',justifyContent:'center',marginTop:15,marginRight:15}}>
        <Text style={{color:'darkorange',fontWeight:'bold',fontSize:15}}>15</Text>
        <Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>/30</Text>

      </View>


      <View style={{flexDirection: 'row',justifyContent:'center',marginTop:15,marginRight:15}}>
        <Text style={{color:'darkorange',fontWeight:'bold',fontSize:15,marginRight:15}}>Retry Quiz?</Text>
        <Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>OR</Text>
        <Text style={{color:'darkorange',fontWeight:'bold',fontSize:15,marginLeft:15}}>View Answer</Text>

      </View>



      <View style={{borderBottomWidth:0.5,marginTop:20,borderColor:'lightgrey'}}> 

      </View>

     
     <View style={{flexDirection:'row'}}>
     
      <View style={{flexDirection:'row',marginHorizontal:10,marginTop:60,borderRadius:12,elevation:15,backgroundColor:'white',padding:20}}>
        <Text style={{fontSize:18,color:'black',fontWeight:'bold',marginTop:5}}>Share Score</Text>
        <Icon name="share" size={24} color={'black'} style={{marginLeft:12,marginTop:8}}/>
        



      </View>

     
      <View style={{flexDirection:'row',marginTop:60,marginRight:15,borderRadius:12,elevation:15,backgroundColor:'white',padding:20}}>
        <Text style={{fontSize:18,color:'black',fontWeight:'bold',marginTop:5}}>Invite a Friend</Text>
        <Feather name="user-plus" size={24} color={'black'} style={{marginLeft:12,marginTop:5}}/>
        



      </View>




      </View>


  
      <View style={styles.nextbtn} elevation={5}>
          <Text style={{ fontSize: 18, color: 'white', fontFamily: 'MPLUSRounded1c-Medium',fontWeight:'bold' }}>Okay</Text>
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
  tinyLogo:{
    height:200,
    width:200,
    marginTop:20
  },
  nextbtn:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    color: '#fff',
    // marginTop: 20,
    borderRadius: 40,
    height: 50,
    marginTop:80,
    marginHorizontal:20
    }

});