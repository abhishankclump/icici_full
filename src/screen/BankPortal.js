import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button, ScrollView, TouchableOpacity, Image, Switch, TextInput } from "react-native";
import Header from '../components/Topbar';
import { RadioButton } from 'react-native-paper';
import * as Progress from 'react-native-progress';



export default function HolidayPlannerOne({navigation}) {
  const [checked, setChecked] = React.useState();

  return (

    <View style={{marginTop:350}}>

        <Text style={{fontSize:40,color:'#C0C0C0',textAlign:'center',fontWeight:'bold'}}>PORTAL</Text>

        
      

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
    marginTop: 20,
    borderRadius:40,
    fontSize: 18,
    backgroundColor: '#FEF4F5',
    height: 50,
    
    bottom: -250,
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

});