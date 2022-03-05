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
import AutopayMandate from "./AutopayMandate"

const Card = ({navigation}) => {

    // const data = [
    //     {
    //       label: 'data'
    //      },

    //     ];
    const [checked, setChecked] = React.useState('');
    const [togle, setTogle] = React.useState(false);
    const sen = "ICICI bank itd\nA/C no **************123 "
    const aco = "ICICI bank itd A/C no\n**************123 "
    const sym = "Common payment for Lumpsum & SIP"
    const word = "Lorem lpsum is simply dummy text of\nthe printing and typesetting industry."
    const heading = "Seprate payments for Lumpsum % SIP"
    // const last = "Note:you may take 2 years longer to match your\ngoal"
    const last = "Using Net Banking / UPI etc., for\nLumpsum and Biller Registration\nfor SIP"

    const [show,setShow]=useState(false)
    return (

        <>
            <View style={{height:Dimensions.get('window').height}}>
                <ScrollView style={{height:'100%', paddingBottom:100}}>
                    <View style={styles.container}>
                    <Header title="Payment"navigation={navigation} />
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
                                <Text style={{ fontSize: 13 }}>One Time</Text>
                                <Text style={{ fontSize: 10, color: '#C0C0C0' }}>(lumpsum)</Text>
                                <View style={{ borderRadius: 30, borderWidth: 0.5, borderColor: 'black', padding: 10, marginTop: 10, marginRight: 10 }}>
                                    <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>₹ 99,99,99,999</Text>
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
                                    <View style={{ borderRadius: 30, borderWidth: 0.5, borderColor: 'black', padding: 10, marginLeft: 10, marginTop: 10, marginHorizontal: 20 }}>
                                        <View style={{ marginHorizontal: 10 }}>
                                            <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>₹ 10,00,000</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>


                    <View style={{ marginHorizontal: 30, marginTop: 15, flexDirection: 'row' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Select Account</Text>
                        <View style={{ borderRadius: 30, borderColor: 'darkorange', borderWidth: 1, justifyContent: 'center', padding: 10, marginLeft: 120 }}>
                            <Text style={{ fontSize: 14, color: 'darkorange', fontWeight: 'bold' }}>Change</Text>
                        </View>
                    </View>
                    <View style={{ margin: 20, paddingHorizontal: 10, paddingVertical: 20, borderWidth: 0, elevation: 20, backgroundColor: 'white', borderRadius: 20, height: 120, justifyContent: 'center' }}>




                        <View style={{ alignItems: 'flex-start', marginHorizontal: 30, flexDirection: 'row' }}>
                            <Image
                                style={styles.tinyLogo1}
                                source={require('../../assets/img/icici.png')}
                            />

                            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 16, marginLeft: 20 }}>{sen}</Text>
                        </View>

                    </View>

                    <View style={{ marginHorizontal: 30 }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>Select payment mode</Text>
                    </View>

                    <View style={{ margin: 20, paddingHorizontal: 10, paddingVertical: 20, borderWidth: 0, elevation: 20, backgroundColor: 'white', borderRadius: 20, height: 'auto' }}>




                        <View style={{ alignItems: 'flex-start' }}>


                            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 16 }} >{sym}</Text>
                            <Text style={{ fontWeight: 'bold', color: '#C0C0C0', fontSize: 14, marginTop: 10 }} >Autopay mandate</Text>

                        </View>

                        <View style={{ borderRadius: 20, borderWidth: 1, borderColor: '#FFB6C1', justifyContent: 'center', paddingBottom: 30, marginTop: 20 }}>

                            <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 30 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black', marginTop: 10 }}>Use existing Autopay Mandate</Text>
                                {/* <RadioButtonRN style={{marginBottom:20}}
                                    data={data}
                                    selectedBtn={(e) => console.log(e)}
                                    icon={
                                        <Icon
                                            name="check-circle"
                                            size={25}
                                            color="#2c9dd1"
                                        />
                                    }
                                /> */}
                                <View style={{ marginLeft: 30, marginBottom: 20 }}>
                                    <RadioButton
                                        value="first"
                                        status={checked === 'first' ? 'checked' : 'unchecked'}
                                        uncheckedColor={'lightgrey'}
                                        onPress={() => setChecked('first')}
                                        color={'darkorange'}
                                    />

                                </View>

                            </View>

                            <View style={{ marginTop: 10, marginHorizontal: 20 }}>
                                <Text style={{ fontWeight: 'bold', color: '#C0C0C0', fontSize: 16 }}>{aco}</Text>
                                <Text style={{ fontWeight: 'bold', color: '#C0C0C0', fontSize: 16, marginTop: 10 }}>OTM limit : ₹10,000 </Text>
                            </View>

                        </View>




                        <View style={{ borderRadius: 20, borderWidth: 1, borderColor: '#C0C0C0', justifyContent: 'center', padding:10, marginTop: 20,height:"auto" }}>

                            <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop:20 }}>
                                <Text onPress={() => { setShow(true)  }} style={{ fontSize: 16, fontWeight: 'bold', color: 'black',marginTop:5 }}>Create New Autopay Mandate</Text>
                              
                                <View style={{ marginLeft: 30, marginBottom:10 }}>
                                    <RadioButton
                                        value="first"
                                        status={checked === 'first' ? 'checked' : 'unchecked'}
                                        uncheckedColor={'lightgrey'}

                                        onPress={() => setChecked('first')}
                                        color={'#C0C0C0'}

                                    />

                                </View>

                            </View>

                            <View style={{ marginTop: 10, marginHorizontal: 20 }}>
                                <Text style={{ fontWeight: 'bold', color: '#C0C0C0', fontSize: 16 }}>{word}</Text>

                            </View>




                        </View>


                        



                    </View>



 <View style={{ margin: 20, paddingHorizontal: 10, paddingVertical: 20, borderWidth: 0, elevation: 20, backgroundColor: 'white', borderRadius: 20, height:200, justifyContent: 'center' }}>




<View style={{ alignItems: 'flex-start', marginHorizontal:10 }}>
    

    <Text  style={{ fontWeight: 'bold', color: 'black', fontSize: 16 }}>{heading}</Text>
</View>

<View style={{marginHorizontal:5,marginTop:20,flexDirection:'row',borderRadius:20,borderColor:'#C0C0C0',borderWidth:1,padding:20}}>

<Text>{last}</Text>
<View style={{ marginLeft: 30, marginBottom: 20 }}>
                                    <RadioButton
                                        value="first"
                                        status={checked === 'first' ? 'checked' : 'unchecked'}
                                        uncheckedColor={'lightgrey'}

                                        onPress={() => setChecked('first')}
                                        color={'#C0C0C0'}
                                        borderColor={'red'}

                                    />

                                </View>
    
</View>

</View>


<View style={{marginHorizontal:20}}>
<Text  style={{fontSize:20,fontWeight:'bold',color:'black'}}>Terms & Conditions</Text>


</View>

<View style={{ margin: 20, paddingHorizontal: 10, paddingVertical: 20, elevation: 20, backgroundColor: 'white', height:150, justifyContent: 'center',borderRadius:20 }}>
<View style={{flexDirection:'row'}}>
     <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      uncheckedColor={'lightgrey'}

      onPress={() => {
        setChecked(!checked);
      }}
    />    
<View>

<Text style={{marginLeft:10,fontSize:14,color:'black',fontWeight:'bold'}}>Register for quick checkout</Text>
<View style={{flexDirection:'row'}}>
<Text style={{marginLeft:10,fontSize:14,color:'#C0C0C0',fontWeight:'bold'}}>Requie only OTP .</Text>
<Text style={{marginLeft:5,fontSize:14,color:'darkorange',fontWeight:'bold'}}>Know More</Text>


</View>




</View>

</View>


<View style={{flexDirection:'row',marginTop:10}}>
     <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      uncheckedColor={'lightgrey'}

      onPress={() => {
        setChecked(!checked);
      }}
    />    
<View style={{}}>

<Text style={{marginLeft:10,fontSize:14,color:'black',fontWeight:'bold'}}>Register for quick checkout</Text>
<View style={{flexDirection:'row'}}>
<Text style={{marginLeft:10,fontSize:14,color:'#C0C0C0',fontWeight:'bold'}}>Requie only OTP .</Text>
<Text style={{marginLeft:5,fontSize:14,color:'darkorange',fontWeight:'bold'}}>Know More</Text>


</View>




</View>

</View>






</View>








<View style={{borderRadius:20,borderWidth:1,borderColor:'darkorange',marginHorizontal:20,justifyContent:'center',alignItems:'center',padding:15,backgroundColor:'darkorange',marginTop:20}}>
    <TouchableOpacity onPress={()=> navigation.navigate('')}>
    <Text style={{color:'white',fontWeight:'bold',fontSize:14}}>Pay ₹40,000 </Text>
    </TouchableOpacity>
</View>




                    

                    
                   



                   



               <View style={{height:100,width:100}}>

               </View>
                    </ScrollView>
            </View>
            



            <AutopayMandate visible={show} closeCallback={() => {setShow(false) }} navigation={navigation}/>




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
        fontSize: 32,
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
        width: 100,
        height: 100,
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
        width: 40,
        height: 40
    }
})

export default Foliolist;
