import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button, ScrollView, TouchableOpacity, Image,Switch } from "react-native";
import Header from '../components/Topbar';

import { useContext } from "react";
//import NoteContext from "../../Context/NoteContext";



export default function Risktwo({navigation}) {


  // let globalTheme = useContext(NoteContext)
  // let Theme = (globalTheme.globalTheme[0])


  const [people, setPeople] = useState([
    { name: "Know your investment risk", key: "1", type: "Edit",nav:"risk" },
    
    { name: "Understand the riskometer", key: "2", type: "Edit",nav:"risk"  },


  ]);
  return (<>

    <View style={styles.container}>
      <Header title="Risk profile" navigation={navigation} />
      <ScrollView style={{ width: "100%", height: "100%" }}>
        <View style={{ marginHorizontal:20 ,height: 300 }}


        >

          <Image
            style={styles.tinyLogo}
            source={require('../../assets/img/risk.png')}
          />
          <View style={{marginTop:30}}>
            <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',color:'black'}}>know your risk profile</Text>
            <Text style={{textAlign:'center',marginTop:12}}>Lorem Ipsum is simply dummy text of the </Text>
          </View>

        </View>
        <FlatList style={{marginTop:50}}
          data={people}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.item00}>
              <TouchableOpacity onPress={()=>navigation.navigate("risk")}>
              <Text style={styles.itemtext}>{item.name}</Text>

              </TouchableOpacity>
              </View>
              <View style={{ justifyContent: "center" }}>

                <TouchableOpacity style={{
                  borderColor: '#ECC816',
                  color: '#ECC816',
               
                  borderRadius: 22,
                  width: 60,
                  height: 30,
                  justifyContent: "center"
                }}>
                  
                </TouchableOpacity>
              </View>
            </View>

          )}
        />
      </ScrollView>
    </View>
  </>);


}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
  },
  item:{
    justifyContent:"center",
    backgroundColor: 'white',
    elevation:15,
    flexDirection:'row',
    fontSize:18,
    marginHorizontal:30,
    marginTop:20,
    borderRadius:13,
    height:80,
    marginBottom:15,
  },
  itemtext:{
    width:"80%",
    backgroundColor:"white",
    fontWeight:'bold',
    color:'black'
  },
  item00:{
   width:"70%",
   height:"100%",
   justifyContent:"center"
  },
  header:{
    width:"100%",
    height:"100%",
    flexDirection:'row',


  },
  headerText:{
    fontWeight:'bold',
    fontSize:20,

  },
  tinyLogo:{
    width:'80%',
    height:'80%',
    marginHorizontal:30,
    marginTop:20
  }
});
