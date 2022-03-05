import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, Dimensions  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
//import Topbar from './Topbar';
//import MobileTwo from "../../Components/SelectItemToChange"
 import Header from '../components/Topbar';
// import RadioButtonRN from 'radio-buttons-react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Checkbox } from 'react-native-paper';
import RnIncrementDecrementBtn  from 
'react-native-increment-decrement-button';

const Card = ({navigation}) => {

    // const data = [
    //     {
    //       label: 'data'
    //      },

    //     ];

    
<View>
<RnIncrementDecrementBtn minVal={0} minreq={3} max={10} val={3} />
</View>

    const [checked, setChecked] = React.useState('');
    const [togle, setTogle] = React.useState(false);
    const sen = "ICICI bank itd\nA/C no **************123 "
    const aco = "ICICI bank itd A/C no\n**************123 "
    const sym = "Common payment for Lumpsum & SIP"
    const word = "Lorem lpsum is simply dummy text of\nthe printing and typesetting industry."
    const heading = "Seprate payments for Lumpsum % SIP"
    // const last = "Note:you may take 2 years longer to match your\ngoal"
    const last = "Using Net Banking / UPI etc., for\nLumpsum and Biller Registration\nfor SIP"
    const end = "Higher returns with shortest lock-\n in"
    return (

        <>
            <View style={{height:Dimensions.get('window').height}}>
                <ScrollView style={{height:'100%', paddingBottom:100}}>
                    <View style={styles.container}>
                    <Header title="Dream House"navigation={navigation} />
                    </View>

                    <View style={{ margin: 20, paddingHorizontal: 10, paddingVertical: 20, borderWidth: 0, elevation: 20, backgroundColor: 'white', borderRadius: 20 }}>
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                style={styles.tinyLogo}
                                source={require('../../assets/img/tethheCopy.png')}
                            />
                        </View>
                        {/* <Text style={{fontSize:16}}>{sen}</Text> */}

                        <Text style={styles.headtwo}>₹2,56,750</Text>


                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, marginTop: 20 }}>
                            <View >
                                <Text style={{ fontSize: 13,marginLeft:10 }}>One Time</Text>
                                <Text style={{ fontSize: 10, color: '#C0C0C0',marginLeft:10 }}>(lumpsum)</Text>
                                <View style={{  padding: 10, marginTop: 10, marginRight: 10 }}>
                                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '500' }}>₹ 99,99,99,999</Text>
                                </View>
                            </View>
                            <View style={{ borderRadius: 1000, borderWidth: 1, marginTop: 40, width: 20, height: 20, alignItems: 'center' }}>
                                <Text>+</Text>
                            </View>
                            <View>
                                <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                                    <Text style={{ fontSize: 13 }}>Monthly</Text>


                                </View>
                                <View style={{ marginLeft: 20 }}>
                                    <Text style={{ fontSize: 10, color: '#C0C0C0' }}>(SIP month)</Text>
                                </View>
                                <View style={{ marginRight: 10 }}>
                                    <View style={{padding: 10, marginLeft: 10, marginTop: 10, marginHorizontal: 20 }}>
                                        <View style={{ marginHorizontal:0 }}>
                                            <Text style={{ fontSize: 18, color: 'black', fontWeight: '500' }}>₹ 10,00,000</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>


                    <View style={{borderRadius:12,padding:10,marginHorizontal:20,elevation:10,backgroundColor:'white'}}>
                        <Text style={{color:'black',fontWeight:'bold',fontSize:16}}>Tax saver</Text>

                        <View style={{marginTop:30}}> 

                        <View style={{flexDirection:'row'}}>
                        

                        <Image
                                style={styles.tinyLogo1}
                                source={require('../../assets/img/bita.png')}
                            />

<Text style={{color:'black',fontWeight:'bold',fontSize:14,marginTop:10,marginLeft:10}}>Tax saving with growth</Text>


                        </View>
                        <View style={{marginLeft:50}}>
                        <Text style={{color:'#C0C0C0',fontWeight:'bold'}}>Solves the dilemma of weather you</Text>
                        <Text style={{color:'#C0C0C0',fontWeight:'bold'}}>should save tax or invest money for</Text>
                        <Text style={{color:'#C0C0C0',fontWeight:'bold'}}>your future</Text>

                        </View>



                        </View>



                        

                            <View style={{flexDirection:'row'}}>



                            <Image
                                style={styles.tinyLogo1}
                                source={require('../../assets/img/bit.png')}
                            />


                        <Text style={{color:'black',fontWeight:'bold',fontSize:14,marginLeft:10,marginTop:10}}>Ideal for beginners</Text>

                        </View>

                        <View style={{marginLeft:50}}>
                        <Text style={{color:'#C0C0C0',fontWeight:'bold',marginTop:10}}>build corpus for your future goals by</Text>
                        <Text style={{color:'#C0C0C0',fontWeight:'bold'}}>investing in companies of all sizes as</Text>
                        <Text style={{color:'#C0C0C0',fontWeight:'bold'}}>you save up to 46,800 in taxes</Text>

                        </View>

                        

                    <View style={{flexDirection:'row'}}>

                    <Image
                                style={styles.tinyLogo1}
                                source={require('../../assets/img/map.png')}
                            />
                        
                        <Text style={{color:'black',fontWeight:'bold',fontSize:14,marginLeft:10,marginTop:10}}>{end}</Text>
                        

                        </View>
                        <View style={{marginLeft:50}}>
                        <Text style={{color:'#C0C0C0',fontWeight:'bold',marginTop:10}}>build corpus for your future goals by</Text>
                        <Text style={{color:'#C0C0C0',fontWeight:'bold'}}>investing in companies of all sizes as</Text>
                        <Text style={{color:'#C0C0C0',fontWeight:'bold',marginBottom:10}}>you save up to 46,800 in taxes</Text>
                        </View>


                        
                    </View>




                    
                    

                    
                   



 










<View style={{borderRadius:20,borderWidth:1,borderColor:'darkorange',marginHorizontal:20,justifyContent:'center',alignItems:'center',padding:15,backgroundColor:'darkorange',marginTop:50}}>
    <Text onPress={()=> navigation.navigate('CheckOut')} style={{color:'white',fontWeight:'bold',fontSize:14}}>Proceed</Text>
</View>






                    

                    
                   



                   



               <View style={{height:100,width:100}}>

               </View>
                    </ScrollView>
            </View>
            







        </>
    )
}




const Foliolist = ({ navigation }) => {
    const [show, setShow] = useState(false)

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
        fontSize: 28,
        fontWeight: '600',
        color: 'black',
        marginTop: 15,
        textAlign: 'center'
    },
    ntone: {
        fontSize: 12,
    },
    nttwo: {
        fontSize: 14,
        color: 'black',
        fontWeight: '500',
        marginTop: 5,

    },
    verticalline: {
        borderLeftColor: 'gray',
        borderLeftWidth: .5,
        height: '50%',
    },
    tinyLogo: {
        width: 56,
        height: 50,
        alignContent: 'center',
        //alignItems:'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //height:"100%",
    },
    tinyLogo1: {
        width: 37,
        height: 40
    }
})

export default Foliolist;
