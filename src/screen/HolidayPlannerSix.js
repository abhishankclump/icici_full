import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button, ScrollView, TouchableOpacity, Image, Switch, TextInput } from "react-native";
import Header from '../components/Topbar';
import { RadioButton } from 'react-native-paper';
import * as Progress from 'react-native-progress';
//import CheckBox from 'react-native-checkbox';
import { CheckBox } from 'react-native-elements';




export default function App({navigation}) {
  //const [checked, setChecked] = React.useState();
  const [checked, setChecked] = React.useState();
  const sentence = "Not sure your risk appetite?\nTake our survey to find out"

 

  return (

    <View style={styles.container}>
      <Header title="Holiday Planner"navigation={navigation} />
      <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginTop: 12,marginRight:12 }}>
     

        <View>
          <Progress.Bar progress={0.2} width={270} color={'orange'} height={6} backgroundColor={'#FFECD5'} borderWidth={0} />
        </View>


        <Text> 7/7 </Text>
      </View>

      

      <View style={{marginHorizontal:40}}>
        <Text style={{fontSize:16,color:'black',fontWeight:'bold',marginTop:20}}>What is your risk appetite? </Text>
        

      

      <View style={{flexDirection:'row'}}>
      <Text style={{fontSize:14,marginTop:20}}>{sentence} </Text>
      <View style={{borderRadius:30,borderColor:'darkorange',borderWidth:1,marginTop:15,marginLeft:20}}>
        <Text style={{marginTop:10,marginHorizontal:20,textAlign:"center",color:'darkorange',fontWeight:'bold'}}>Take survey</Text>
        </View>
      </View>

      </View>

      <View style={{borderBottomWidth:0.5,marginHorizontal:40,marginTop:20,borderBottomColor:'#DCDCDC'}}></View>

      <View style={{borderRadius:12,elevation:10,backgroundColor:'white',height:60,justifyContent:'center',marginTop:20,marginHorizontal:40}}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <View style={{ width: 40, }}>
            <RadioButton color="orange"

              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
          </View>
          <Text style={{ color: 'black', fontWeight: 'bold',fontSize:16 }}>Low Risk</Text>
        </View>
        </View>

        <View style={{borderRadius:12,elevation:10,backgroundColor:'white',height:60,justifyContent:'center',marginTop:10,marginHorizontal:40}}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <View style={{ width: 40, }}>
            <RadioButton color="orange"

              value="first"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
          </View>
          <Text style={{ color: 'black', fontWeight: 'bold',fontSize:16 }}>Moderate Risk</Text>
        </View>
        </View>

        <View style={{borderRadius:12,elevation:10,backgroundColor:'white',height:60,justifyContent:'center',marginHorizontal:40,marginTop:10}}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <View style={{ width: 40, }}>
            <RadioButton color="orange"

              value="first"
              status={checked === 'thired' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
          </View>
          <Text style={{ color: 'black', fontWeight: 'bold',fontSize:16 }}>High Risk</Text>
        </View>
        </View>
      



      
      
     
      

      


      


     <View style={{flexDirection:'row',marginHorizontal:30,marginLeft:25,marginTop:200}}>
                           <View style={{width:'50%',marginRight:10}}>
                            
                            
                            
                            <TouchableOpacity
                                style={{ height: 50,backgroundColor:"white" ,marginTop:10,borderRadius:30,borderColor:'darkorange',borderWidth:1,marginBottom:12,width:'95%' }}>
                            <Text style={{marginTop:12,textAlign:"center",fontWeight:"700",fontSize:14,color:"darkorange",}}>Back</Text>
                              
                            </TouchableOpacity>

                            </View> 

                            <View style={{width:'50%',marginRight:4}}>

                            <TouchableOpacity onPress={()=> navigation.navigate('NewInvestor')}
                                style={{ height: 50,backgroundColor:"orange" ,marginTop:10,borderRadius:30,width:'95%' }}>
                            <Text style={{marginTop:12,textAlign:"center",fontWeight:"700",fontSize:14,color:"#fff"}}>Next</Text>
                              
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
  check:{
    color:'red',
    fontSize:30
  }

});