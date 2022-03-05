import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button, ScrollView, TouchableOpacity, Image, Switch, TextInput } from "react-native";
import Header from '../components/Topbar';
import { RadioButton } from 'react-native-paper';
import * as Progress from 'react-native-progress';



export default function App({navigation}) {
  const [checked, setChecked] = React.useState();

  return (

    <View style={styles.container}>
      <Header title="Holiday Planner"navigation={navigation} />
            <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginTop: 12,marginRight:12 }}>
     

        <View>
          <Progress.Bar progress={0.2} width={270} color={'orange'} height={6} backgroundColor={'#FFECD5'} borderWidth={0} />
        </View>


        <Text> 4/7 </Text>
      </View>

      <View style={{marginHorizontal:30,alignItems:'center',marginTop:20}}>
      <Image
            style={styles.tinyLogo}
            source={require('../../assets/img/scheduleCuate.png')}
          />

          
      </View>

      <View style={{marginHorizontal:50}}>
        <Text style={{fontSize:16,color:'black',fontWeight:'bold'}}>Which year you want to have fund avaliable</Text>
      </View>
      <View style={{borderColor:'orange',borderRadius:30,borderWidth:1,marginHorizontal:40,marginTop:20,width:"75%"}}>
      <TextInput 
      keyboardType="number-pad"
      style={{marginLeft:10,fontSize:16}}>₹ </TextInput>
      </View>
      

      


      


     <View style={{flexDirection:'row',marginHorizontal:30,marginLeft:25,marginTop:20}}>
                           <View style={{width:'50%',marginRight:10}}>
                            
                            
                            
                            <TouchableOpacity
                                style={{ height: 50,backgroundColor:"white" ,marginTop:10,borderRadius:30,borderColor:'darkorange',borderWidth:1,marginBottom:12,width:'95%' }}>
                            <Text style={{marginTop:12,textAlign:"center",fontWeight:"700",fontSize:14,color:"darkorange",}}>Back</Text>
                              
                            </TouchableOpacity>

                            </View> 

                            <View style={{width:'50%',marginRight:4}}>

                            <TouchableOpacity onPress={()=> navigation.navigate('HolidayPlannerFive')}
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

});