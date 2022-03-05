import React, {useState} from "react";
import { StyleSheet, Text, View,  FlatList,Button, ScrollView,TouchableOpacity } from "react-native";
import Topbar from "../components/Topbar"
export default function App({navigation}) {
  const[people, setPeople] = useState([
    {name: "Statement", key: "1",type:"Edit"},
    {name: "Manage AutoPay Mandates", key: "2",type:"Edit"},
    {name: "Add New Folio", key: "3",type:"Edit"},
    {name: "Update Contact Details", key: "4",type:"View"},
    {name: "Update FATCA", key: "5",type:"Edit"},
    {name: "Update  PAN (redirection)", key: "6",type:"Edit"},
    {name: "FIRC Declaration(redirection)", key: "7",type:"Edit"},
    
 ]);

 return (<>
   <View style={styles.container}>
    <Topbar title="Investor Services" navigation={navigation} />

    <ScrollView style={{width:"100%",height:"100%"}}>
    <FlatList
      data={people}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <View style={styles.item00}>
          <Text style={styles.itemtext}>{item.name}</Text>
          </View>
        <View style={{justifyContent:"center"}}>
         
            <TouchableOpacity 
            onPress={()=>navigation.navigate("Investorone")}
            
            style={{
              borderColor:'darkorange',
              color:'darkorange',
              borderWidth:1,
              borderRadius:22, 
              width:60,
              height:30,
              justifyContent:"center"
            }}>
              <Text style={{textAlign:'center',color:"darkorange",fontWeight:'bold'}}>{item.type}</Text>
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
    fontSize:24,
    marginHorizontal:30,
    marginTop:10,
    borderRadius:13,
    height:80,
    marginBottom:15
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

  }
});