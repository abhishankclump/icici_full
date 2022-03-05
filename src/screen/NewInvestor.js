import React,{useState} from 'react';
import { View, StyleSheet, Text, Image,ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
//import Topbar from './Topbar';
//import MobileTwo from "../../Components/SelectItemToChange"
import Header from '../components/Topbar';
import GoalSavedSuccesfully from "./GoalSavedSuccesfully"
const Card = ({navigation}) => {
    const [show,setShow]=useState(false)
    const [checked, setChecked] = React.useState('');
    const sen = "When you turn 34,the expected value\nof your goal will be"
    const last = "Note:you may take 2 years longer to match your\ngoal"
    return (

        <>   
        <View> 
          <ScrollView>
          <View style={styles.container}>
          <Header title="Holiday Planner"navigation={navigation} />
      </View>
        
            <View style={{ margin:20, paddingHorizontal: 20, paddingVertical: 20, borderWidth: 0, elevation: 20, backgroundColor: 'white', borderRadius: 20 }}>
            <View style={{alignItems:'center'}}>
            <Image
            style={styles.tinyLogo}
            source={require('../../assets/img/man.jpg')}
          />
          </View>
               <Text style={{fontSize:16}}>{sen}</Text>
               
                <Text style={styles.headtwo}>₹2,56,750</Text>
                


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                    <View>
                        <Text style={styles.ntone}>Inflation (assumed)</Text>
                        <View style={{flexDirection:'row'}}>
                        <Text style={styles.nttwo}>7.8%</Text>
                        <TouchableOpacity>
                        <Text style={{color:'darkorange',fontWeight:'bold',fontSize:14,marginLeft:60,marginTop:8}}>Edit</Text>
                        </TouchableOpacity>


                        </View>

                    </View>
                    <View style={styles.verticalline}></View>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.ntone}>Returns (assumed)</Text>

                            <Text style={{ color: 'black', fontSize: 17, fontWeight: '500', marginLeft: 10 }}></Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                        <Text style={styles.nttwo}>10.4%</Text>
                        <TouchableOpacity>
                        <Text style={{color:'darkorange',fontWeight:'bold',fontSize:14,marginLeft:40,marginTop:8}}>Edit</Text>
                        </TouchableOpacity>
                        </View>
                        
                    </View>
                   
                </View>

            </View>

            <View style={{ paddingHorizontal: 20, paddingVertical: 20, borderWidth: 0, elevation: 20, backgroundColor: 'white', borderRadius: 20,flexDirection:'row',marginHorizontal:20}}>
              
              <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>Map Existing Investment</Text>
              <View style={{marginLeft:70}}>
                <TouchableOpacity>
              <Text style={{fontSize:14,fontWeight:'bold',color:'darkorange'}}>Add</Text>
              </TouchableOpacity>
              </View>

            </View>

            <View style={{marginHorizontal:20,marginTop:15}}>
              <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>Start investing today to achieve your goal</Text>
            </View>
            <View style={{ margin:20, paddingHorizontal:10, paddingVertical: 20, borderWidth: 0, elevation: 20, backgroundColor: 'white', borderRadius: 20,marginHorizontal:20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                    <View>
                        <Text style={{fontSize:13}}>One Time</Text>
                        <Text style={{fontSize:10,color:'#C0C0C0'}}>(lumpsum)</Text>
                        <View style={{borderRadius:30,borderWidth:0.5,borderColor:'black',padding:10,marginTop:10,marginRight:10}}>
                        <Text style={{fontSize:18,color:'black',fontWeight:'bold'}}>₹ 99,99,99,999</Text>
                        </View>
                    </View>
                   <View style={{borderRadius:1000,borderWidth:1,marginTop:40,width:20,height:20,alignItems:'center'}}>
                     <Text>+</Text>
                   </View>
                    <View>
                        <View style={{ flexDirection: 'row',marginLeft:20 }}>
                            <Text style={{fontSize:13}}>Monthly</Text>

                            
                        </View>
                        <View style={{marginLeft:20}}>
                        <Text style={{fontSize:10,color:'#C0C0C0'}}>(SIP month)</Text>
                        </View>
                        <View style={{marginRight:10}}>
                        <View style={{borderRadius:30,borderWidth:0.5,borderColor:'black',padding:10,marginLeft:10,marginTop:10,marginHorizontal:20}}>
                        <View style={{marginHorizontal:10}}>
                        <Text style={{fontSize:18,color:'black',fontWeight:'bold'}}>₹ 10,00,000</Text>
                        </View>
                        </View>
                    </View>
                    </View>

                   
                   
                </View>

                <View style={{alignItems:'center'}}>
                      <Text style={{color:'#D3D3D3'}}>
                      Reset to recommonded values
                      </Text>
                    </View>

                </View>

                <View style={{marginHorizontal:28,borderRadius:12,backgroundColor:'#FFB6C1',padding:10}}>
                  <Text style={{color:'rgb(224 ,32 ,32)',fontWeight:'bold'}}>{last}</Text>
                </View>



                <View style={{flexDirection:'row',marginHorizontal:30,marginLeft:25,marginTop:50}}>
                           <View style={{width:'50%',marginRight:10}}>
                            
                            
                            
                            <TouchableOpacity 
                                style={{ height: 50,backgroundColor:"white" ,marginTop:10,borderRadius:30,borderColor:'darkorange',borderWidth:1,marginBottom:12,width:'95%' }}>
                            <Text style={{marginTop:12,textAlign:"center",fontWeight:"700",fontSize:14,color:"darkorange",}}>Save Goal</Text>
                              
                            </TouchableOpacity>

                            </View> 

                            <View style={{width:'50%',marginRight:4}}>

                            <TouchableOpacity onPress={()=> navigation.navigate('DreamHouse')}
                                style={{ height: 50,backgroundColor:"white" ,marginTop:10,borderRadius:30,width:'95%',borderColor:'darkorange',borderWidth:1 }}>
                            <Text style={{marginTop:12,textAlign:"center",fontWeight:"700",fontSize:14,color:"darkorange"}}>Start Investment</Text>
                              
                            </TouchableOpacity> 

                            </View>

                            

                            
                            
                            
                            </View>

                            <View style={{marginHorizontal:30}}>

                            <TouchableOpacity 
                                style={{ height: 50,backgroundColor:"darkorange" ,marginTop:10,borderRadius:30,width:'95%',borderColor:'darkorange',borderWidth:1 }}>
                            <Text onPress={() => { setShow(true)  }} style={{marginTop:12,textAlign:"center",fontWeight:"700",fontSize:14,color:"white"}}>Map an Existing Investment</Text>
                              
                            </TouchableOpacity> 

                            </View>


                            </ScrollView>


                            </View>


<GoalSavedSuccesfully visible={show} closeCallback={() => {setShow(false)}} navigation={navigation}/>





      

                



        </>
    )
}




const Foliolist = ({navigation}) => {
    const [show,setShow]=useState(false)

    return (
        <View>
            {/* <Topbar navigation={navigation} title="Folio list" /> */}
            <View style={{ backgroundColor: 'white', paddingHorizontal: 5 }}>

                {/* <View style={{paddingHorizontal:20, marginVertical:10}}>
                    <Text style={{ fontSize: 22, color: 'black', fontWeight: '700' }}>Rajesh</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 17 }}>AJDB12N123</Text>
                        <View style={{ borderLeftColor: 'gray', borderLeftWidth: 1, marginHorizontal: 10 }}></View>
                        <TouchableOpacity onPress={() => {setShow(true) }}>
                     
                        <Text style={{ fontSize: 17 }}>Share:75%</Text>
                        </TouchableOpacity>

                    </View>
                </View> */}
                {/* <Card /> */}
                <Card  navigation={navigation}/>

            </View>
              {/* <MobileTwo visible={show} closeCallback={() =>setShow(false)} navigation={navigation} /> */}
        </View>
    );
}

const styles = StyleSheet.create({

    headone: {
        fontSize: 18,
        color: 'black',
    },
    headtwo: {
        fontSize:28,
        fontWeight: '600',
        color: 'black',
        marginTop: 15,
        textAlign:'center'
    },
    ntone: {
        fontSize:12,
    },
    nttwo: {
        fontSize:14,
        color: 'black',
        fontWeight: '500',
        marginTop: 5,
        
    },
    verticalline: {
        borderLeftColor: 'gray',
        borderLeftWidth: .5,
        height: '50%',
    },
    tinyLogo:{
      width:100,
      height:100,
      alignContent:'center',
      //alignItems:'center',
      justifyContent:'center'
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      //height:"100%",
    },
})

export default Foliolist;
