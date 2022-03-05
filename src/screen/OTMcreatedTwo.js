import React,{useState} from 'react';
import { View, StyleSheet, Text, Image,ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
//import Topbar from './Topbar';
//import MobileTwo from "../../Components/SelectItemToChange"
//import Header from './Header';
const Card = ({navigation}) => {
    //const [checked, setChecked] = React.useState('');
    const sen = "When you turn 34,the expected value\nof your goal will be"
    const last = "Note:you may take 2 years longer to match your\ngoal"
    const [checked, setChecked] = React.useState('');
    return (

        <>   
        <View> 
          <ScrollView>
          <View style={styles.container}>
      {/* <Header title="Holiday Planner" /> */}
      </View>
        
            <View style={{ margin:20, paddingHorizontal: 20, paddingVertical: 20, borderWidth: 0, elevation: 20, backgroundColor: 'white', borderRadius: 20 }}>
            <Text style={{fontSize:16,fontWeight:'bold',color:'black'}}>Common payment for Lumpsum & SIP</Text>
            <Text style={{fontSize:16,color:'#C0C0C0',marginTop:10}}>Autopay Mandate</Text>

            <View style={{borderRadius:12,borderColor:'#C0C0C0',borderWidth:1,padding:20,marginTop:20}}>
               <View style={{flexDirection:'row'}}>
                <View style={{borderRadius:30,borderColor:'red',justifyContent:'center',padding:10}}>
                <Text style={{color:'#f94279',fontWeight:'bold',fontSize:12}} >
                    Not Valid
                </Text>

                </View>

                <View style={{ marginLeft:160 }}>
                                    <RadioButton
                                        value="first"
                                        status={checked === 'first' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('first')}
                                        color={'darkorange'}
                                    />

                                </View>

                </View>

                <View>

                    <Text style={{fontSize:16,color:'black'}}>Use existing Autopay Mandate</Text>
                    <Text style={{fontSize:16,color:'#C0C0C0',marginTop:10}}>ICICI bank itd A/C no</Text>
                    <Text style={{fontSize:16,color:'#C0C0C0'}}>*************123</Text>

                    <Text style={{fontSize:16,color:'black',fontWeight:'500',marginTop:5}}>OTM limit: ₹10,000</Text>
                    <Text style={{fontSize:16,color:'#f94279',fontWeight:'bold',marginTop:5}}>Validity :01-11-2021</Text>

                    </View>



            </View>

            <View style={{borderRadius:12,borderColor:'#C0C0C0',borderWidth:1,padding:20,marginTop:20}}>
               <View style={{flexDirection:'row'}}>
                <View style={{}}>
                <Text onPress={()=> navigation.navigate('OTMcreatedThree')} style={{fontSize:16,color:'black',fontWeight:'500'}}>
                    Create New Autopay Mandate
                </Text>

                </View>

                <View style={{ marginLeft:20 }}>
                                    <RadioButton
                                        value="first"
                                        status={checked === 'first' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('first')}
                                        color={'darkorange'}
                                    />

                                </View>

                </View>

                <View>

                    <Text  style={{fontSize:14,color:'#C0C0C0'}}>Lorem lpsum is simply dummy text of </Text>
                    <Text style={{fontSize:14,color:'#C0C0C0',marginTop:5}}>the printing and typesetting industry</Text>
                    

                    </View>



            </View>
            
               
                


                

                
                    
                    
                   
                

            </View>

           

            

               

                


               
                            

                            
                            
                            
                            

                            

                            </ScrollView>


                            </View>


      

                



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
                <Card navigation={navigation} />
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
        fontSize: 32,
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
