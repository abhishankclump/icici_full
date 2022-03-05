import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button, ScrollView, TouchableOpacity, Image,Switch } from "react-native";
import Header from '../components/Topbar';
export default function RiskThree({navigation}) {
  



  const [people, setPeople] = useState([
    { name: "Know your inverstent rist", key: "1", type: "Edit" },
    { name: "Understand the riskometer", key: "2", type: "Edit" },
    
    
  ]);
  return (<>

    <View style={styles.container}>
      <Header title="Your risk profile" navigation={navigation} />

      <View style={{elevation:5,backgroundColor:'white',paddingBottom:40,borderRadius:12,marginHorizontal:10}}>

      <View style={{marginHorizontal:40,marginTop:40}}>
        <Text style={{fontSize:18,color:'black',fontWeight:'bold'}}>Hello Imvestor</Text>
      </View>

      <Image
            style={styles.tinyLogo}
            source={require('../../assets/img/bitmap.png')}
          />

          <View style={{marginLeft:18}}>

          <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:5,marginTop:30}}>
            <Text style={{width:'70%',fontSize:16}}>Loren Ipsum is simply dummy text of the</Text>
            <View style={{justifyContent:'center',width:'20%',alignItems:'center',borderRadius:20,borderWidth:1,borderColor:'darkorange',marginRight:20}}>
            <Text style={{fontSize:16,color:'darkorange'}}>Retake</Text>

            </View>

            </View>
          </View>

</View>


      </View>

      
  </>);


}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
  },
  tinyLogo:{
    marginHorizontal:40,
    marginTop:35
  }
});