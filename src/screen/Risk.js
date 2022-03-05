import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button, ScrollView, TouchableOpacity, Image, Switch } from "react-native";
import Header from '../components/Topbar';
import { RadioButton } from 'react-native-paper';
import * as Progress from 'react-native-progress';



export default function Risk({navigation}) {
  const [checked, setChecked] = React.useState('first');

  return (

    <View style={styles.container}>
      <Header navigation={navigation} title="Know your investment risk profile" />
    
      <View style={{height:'70%'}}>

      <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginTop: 12, }}>
        <View>
          <Progress.Bar progress={0.1} width={270} color={'orange'} height={6} backgroundColor={'#FFECD5'} borderWidth={0} />
        </View>
        <Text> 1/5 </Text>
      </View>

      <View style={{ backgroundColor: 'white', elevation: 5, marginTop: 25, borderRadius: 15, paddingLeft: 15, paddingBottom: 20,marginHorizontal:20}}>

        <Text style={styles.item0}>1. What is your primary investment objective?</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <View style={{ width: 40, }}>
            <RadioButton color="orange"

              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
          </View>
          <Text style={{ color: 'black', fontWeight: 'bold' }}>Answer</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <View style={{ width: 40, }}>
            <RadioButton color="orange"

              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('second')}
            />
          </View>
          <Text style={{ color: 'black', fontWeight: 'bold' }}>Answer</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <View style={{ width: 40, }}>
            <RadioButton color="orange"

              value="third"
              status={checked === 'third' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('third')}
            />
          </View>
          <Text style={{ color: 'black', fontWeight: 'bold' }}>Answer</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <View style={{ width: 40, alignItems: 'center', justifyContent: 'center' }}>
            <RadioButton color="orange"

              value="fourth"
              status={checked === 'fourth' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('fourth')}
            />
          </View>
          <Text style={{ color: 'black', fontWeight: 'bold' }}>Answer</Text>
        </View>
      </View>
      </View>

      <View style={{height:'30%'}}>

           
       <View style={styles.nextbtn}>
        <View style={styles.nextbtn1} elevation={5}>
         <TouchableOpacity
         onPress={()=>navigation.navigate("RiskThree")}
         >
          <Text style={{ fontSize: 18, color: 'white', fontFamily: 'MPLUSRounded1c-Medium' }}>Next</Text>
          </TouchableOpacity>
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
    marginTop: 20,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 12
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
    marginHorizontal:30,
    marginTop:50,
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