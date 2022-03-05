import React,{useState} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import Topbar from './Topbar';
import MobileTwo from "../../Components/SelectItemToChange"
const Card = () => {
    const [checked, setChecked] = React.useState('');
    return (
        <>   
            <View style={{ margin: 10, paddingHorizontal: 20, paddingVertical: 20, borderWidth: 0, elevation: 20, backgroundColor: 'white', borderRadius: 20 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={styles.headone}>Folio: 123456789</Text>
                    <RadioButton
                        value="first"
                        color='gray'
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                    />
                </View>
                <Text style={styles.headtwo}>₹2,50,000</Text>
                <View style={{ flexDirection: 'row', marginTop: 15, marginBottom: 20 }}>
                    <Text style={{ color: '#8dc45d', fontSize: 16, fontWeight: '500' }}>+₹50,000(25%)</Text>
                    <View style={{ backgroundColor: '#EBEAE9', borderRadius: 30, marginLeft: 15, paddingHorizontal: 10 }}>
                        <Text style={{ color: 'black', fontSize: 16, fontWeight: '500' }}>Share:25%</Text>
                    </View>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                    <View>
                        <Text style={styles.ntone}>Mode</Text>
                        <Text style={styles.nttwo}>Single</Text>
                    </View>
                    <View style={styles.verticalline}></View>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.ntone}>Nominee</Text>

                            <Text style={{ color: 'black', fontSize: 17, fontWeight: '500', marginLeft: 10 }}>(1/3 50%)</Text>
                        </View>
                        <Text style={styles.nttwo}>Ravi Gopalan</Text>
                    </View>
                    <View style={styles.verticalline}></View>
                    <View style={{ flexDirection: 'column', }}>
                        <Text style={[styles.ntone, { textAlign: 'right' }]}>XIRR</Text>
                        <Text style={[styles.nttwo, { textAlign: 'right' }]}>10.5%</Text>
                    </View>
                </View>

            </View>

        </>
    )
}




const Foliolist = ({navigation}) => {
    const [show,setShow]=useState(false)

    return (
        <View>
            <Topbar navigation={navigation} title="Folio list" />
            <View style={{ backgroundColor: 'white', paddingHorizontal: 5 }}>
                <View style={{paddingHorizontal:20, marginVertical:10}}>
                    <Text style={{ fontSize: 22, color: 'black', fontWeight: '700' }}>Rajesh</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 17 }}>AJDB12N123</Text>
                        <View style={{ borderLeftColor: 'gray', borderLeftWidth: 1, marginHorizontal: 10 }}></View>
                        <TouchableOpacity onPress={() => {setShow(true) }}>
                     
                        <Text style={{ fontSize: 17 }}>Share:75%</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <Card />
                <Card />
            </View>
              <MobileTwo visible={show} closeCallback={() =>setShow(false)} navigation={navigation} />
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
        marginTop: -10,
    },
    ntone: {
        fontSize: 17,
    },
    nttwo: {
        fontSize: 18,
        color: 'black',
        fontWeight: '500',
        marginTop: 5,
    },
    verticalline: {
        borderLeftColor: 'gray',
        borderLeftWidth: .9,
        height: '50%',
    }
})

export default Foliolist;
