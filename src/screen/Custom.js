import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
//import Topbar from './Topbar';
//import MobileTwo from "../../Components/SelectItemToChange"
import Header from '../components/Topbar';
// import RadioButtonRN from 'radio-buttons-react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Checkbox } from 'react-native-paper';
import TopUp from "./TopUpAmount"

const Card = ({ navigation }) => {

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
    return (

        <>
             <View style={{ borderRadius: 12, elevation: 20, backgroundColor: 'white', padding: 10, marginHorizontal: 20, marginTop: 20 }}>

<View style={{ marginHorizontal: 10 }}>
    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Select SIP Details </Text>


</View>

<View style={{ flexDirection: 'row', marginTop: 20 }}>
    <Text style={{ fontSize: 12, color: '#C0C0C0', marginLeft: 40 }}>Start Date</Text>
    <Text style={{ fontSize: 12, color: '#C0C0C0', marginLeft: 90 }}> End Date</Text>

</View>



    <View style={{}}>

    <View style={{ flexDirection: 'row',marginTop:10 }}>

        <Text style={{ fontWeight: 'bold', color: 'black', marginLeft: 30,textAlign:'center' }}>01-01-2020</Text>

        <Image
            style={styles.tinyLogo1}
            source={require('../../assets/img/shape.png')}
        />

<Text style={{ fontWeight: 'bold', color: 'black', marginLeft: 30,textAlign:'center' }}>01-01-2020</Text>

<Image
            style={styles.tinyLogo1}
            source={require('../../assets/img/shape.png')}
        />

        

    </View>

    


</View>







<View style={{ flexDirection: 'row' }}>
    <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        uncheckedColor={'lightgrey'}

        onPress={() => {
            setChecked(!checked);
        }}
    />
    <View>





        <Text style={{ marginLeft: 10, fontSize: 14, color: '#C0C0C0', fontWeight: 'bold', marginTop: 10 }}>I would like my first SIP payment to</Text>

        <Text style={{ marginLeft: 10, fontSize: 14, color: '#C0C0C0', fontWeight: 'bold' }}>happen immediately</Text>








    </View>

</View>


<View style={{ flexDirection: 'row', marginTop: 10 }}>
    <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        boxStyle={ 'red' }
        uncheckedColor={'lightgrey'}
        color={'darkorange'}
        onPress={() => {
            setChecked(!checked);
        }}
    />
    <View style={{}}>

        <Text style={{ marginLeft: 10, fontSize: 14, color: '#C0C0C0', fontWeight: 'bold' }}>Add the top up to achieve your </Text>
        <Text style={{ marginLeft: 10, fontSize: 14, color: '#C0C0C0', fontWeight: 'bold' }}>goal faster</Text>








    </View>

    

</View>

<View>
        <Text style={{ marginLeft: 10, fontSize: 14, color: '#C0C0C0', fontWeight: 'bold' }} >increase my SIP amount every year for the</Text>
        <Text style={{ marginLeft: 10, fontSize: 14, color: '#C0C0C0', fontWeight: 'bold' }}>above mentioned scheme by</Text>

    </View>

    <View style={{flexDirection:'row',marginTop:20,marginBottom:20}}>

    <View style={{borderWidth:1,borderColor:'lightgrey',borderRadius:20,justifyContent:'center',padding:5,paddingHorizontal:20,marginLeft:10}}>
    <Text style={{ marginLeft: 10, fontSize: 16, color: '#C0C0C0', fontWeight: 'bold',textAlign:'center',paddingHorizontal:10 }}>5%</Text>

    </View>

    <View style={{borderWidth:1,borderColor:'lightgrey',borderRadius:20,justifyContent:'center',padding:5,marginLeft:10,paddingHorizontal:20}}>
    <Text  style={{ marginLeft: 10, fontSize: 16, color: '#C0C0C0', fontWeight: 'bold',textAlign:'center',paddingHorizontal:10 }}>10%</Text>

    </View>

    <View style={{borderWidth:1,borderColor:'lightgrey',borderRadius:20,justifyContent:'center',padding:5,marginLeft:10}}>
    <Text onPress={()=> navigation.navigate('TopUpAmount')} style={{ marginLeft: 10, fontSize: 16, color: 'darkorange', fontWeight: 'bold',textAlign:'center' }}>Custom</Text>

    </View>


    
    

        
    </View>






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
                <Card  navigation={navigation} />
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
        height: '80%',
        marginLeft: 20
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
        width: 18,
        height: 20,
       // position:"absolute",
       marginLeft:10
    }
})

export default Foliolist;
