import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Button, ScrollView, TouchableOpacity, Image, Switch } from "react-native";
import Header from '../components/Topbar';
import { RadioButton } from 'react-native-paper';
import * as Progress from 'react-native-progress';
import axios from 'react-native-axios';
import url from "../constant/Api.json";



export default function PollTwo({navigation}) {
  const [checked, setChecked] = React.useState();

  useEffect(() => {
    cmsQuiz()
}, [])

const cmsQuiz = () => {
    axios
        .get(url.baseUrl + 'cmsquizzespolls'
            
        )
        .then(response => {
            console.log(response)

        })
        .catch(error => {
            console.log(error)
        });
};

  return (

    <View style={styles.container}>
      <Header title="Poll" navigation={navigation} />
      


      <View style={{marginHorizontal:30}}>
      <Image
            style={styles.tinyLogo}
            source={require('../../assets/img/man.jpg')}
          />
      </View>


      <View style={{marginHorizontal:15 }}>
        <View style={{marginHorizontal:15,borderBottomWidth:0.5}}>

        <Text style={styles.item0}>Who will will IPL 2021 cup ?</Text>
        </View>
        
       
       

        
              


        <View style={{flexDirection:'row',borderRadius:10,backgroundColor:'white',marginHorizontal:15,height:60,marginTop:10,elevation:10 }}>
      <View style={{width:'80%',justifyContent:'center'}}>
      <Text style={{fontSize:18,fontWeight:'bold',color:'black',marginLeft:12}}>Answer</Text>

      </View>
      <View style={{width:'20%',justifyContent:'center'}}> 
      <Text style={{marginLeft:20}}>19%</Text>
        </View> 
         

        </View>

        <View>
          <Progress.Bar progress={0.2} width={330} color={'orange'} height={6} backgroundColor={'#FFECD5'} borderWidth={0} marginLeft = {14}  elevation = {10}/>
        </View>
          


        <View style={{flexDirection:'row',borderRadius:10,backgroundColor:'white',marginHorizontal:15,height:60,marginTop:10,elevation:10}}>
      <View style={{width:'80%',justifyContent:'center'}}>
      <Text style={{fontSize:18,fontWeight:'bold',color:'black',marginLeft:12}}>Answer</Text>

      </View>
      <View style={{width:'20%',justifyContent:'center'}}> 
      <Text style={{marginLeft:20}}>38%</Text>
        </View> 
         

        </View>

        <View>
          <Progress.Bar progress={0.6} width={330} color={'orange'} height={6} backgroundColor={'#FFECD5'} borderWidth={0} marginLeft = {14}  elevation = {10} />
        </View>

        <View style={{flexDirection:'row',borderRadius:10,backgroundColor:'white',marginHorizontal:15,height:60,marginTop:10,elevation:10}}>
      <View style={{width:'80%',justifyContent:'center'}}>
      <Text style={{fontSize:18,fontWeight:'bold',color:'black',marginLeft:12}}>Answer</Text>

      </View>
      <View style={{width:'20%',justifyContent:'center'}}> 
      <Text style={{marginLeft:20}}>9%</Text>
        </View> 
         

        </View>

        <View>
          <Progress.Bar progress={0.2} width={330} color={'orange'} height={6} backgroundColor={'#FFECD5'} borderWidth={0} marginLeft = {14}  elevation = {10} />
        </View>

        <View style={{flexDirection:'row',borderRadius:10,backgroundColor:'white',marginHorizontal:15,height:60,marginTop:10,elevation:10}}>
      <View style={{width:'80%',justifyContent:'center'}}>
      <Text style={{fontSize:18,fontWeight:'bold',color:'black',marginLeft:12}}>Answer</Text>

      </View>
      <View style={{width:'20%',justifyContent:'center'}}> 
      <Text style={{marginLeft:20}}>34%</Text>
        </View> 
         

        </View>

        <View>
          <Progress.Bar progress={0.4} width={330} color={'orange'} height={6} backgroundColor={'#FFECD5'} borderWidth={0} marginLeft = {14}  elevation = {12} />
        </View>




        


<View style={{justifyContent:'center',backgroundColor:'white'}}>
        <View style={{flexDirection:'row',marginTop:30}}>
                           <View style={{width:'50%',marginRight:10}}>
                            
                            
                            
                            <TouchableOpacity
                                style={{ height: 50,backgroundColor:"white" ,marginTop:10,borderRadius:30,borderColor:'darkorange',borderWidth:1,marginBottom:12,width:'95%' }}>
                            <Text style={{marginTop:7,textAlign:"center",fontWeight:"700",fontSize:20,color:"darkorange",}}>Share</Text>
                              
                            </TouchableOpacity>

                            </View> 

                            <View style={{width:'50%',marginRight:4}}>

                            <TouchableOpacity onPress={()=>navigation.navigate("serveyTwo")}
                                style={{ height: 50,backgroundColor:"orange" ,marginTop:10,borderRadius:30,width:'95%' }}>
                            <Text style={{marginTop:7,textAlign:"center",fontWeight:"700",fontSize:20,color:"#fff"}}>Done</Text>
                              
                            </TouchableOpacity> 

                            </View>
                            
                            
                            </View>


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