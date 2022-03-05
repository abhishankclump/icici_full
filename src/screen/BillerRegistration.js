/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
    View,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    TextInput
} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/EvilIcons';
import { RadioButton, Checkbox } from 'react-native-paper';
import ToggleSwitch from 'toggle-switch-react-native'

// import RnIncrementDecrementBtn  from 
// 'react-native-increment-decrement-button';
//import CheckBox from '@react-native-community/checkbox';



const GoalSavedSuccesfully = ({ visible, closeCallback, shareOptionCallback, navigation }) => {
    const [checked, setChecked] = React.useState('');
    const [togle, setTogle] = React.useState(false);
    //const [isSelected, setSelection] = useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const sen = "Browse to the Biller Registraion\nSection"
    const sec = "Register a new biller with following\ndetails"



    return (
        <Modal
            isVisible={visible}
            statusBarTranslucent
            transparent
            onBackdropPress={closeCallback}
            onBackButtonPress={closeCallback}
            style={{ margin: 0, justifyContent: 'flex-end' }}>
            <KeyboardAvoidingView
                enabled
                behavior={Platform.OS === 'android' ? undefined : 'position'}
                keyboardShouldPersistTaps="handled">
                <ScrollView scrollEnabled={false} keyboardShouldPersistTaps="handled">
                    <View
                        style={{
                            height: 'auto',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            backgroundColor: "#fff"
                        }}>

                        <View
                            style={{
                                height: 600, borderTopLeftRadius: 20,
                                borderTopRightRadius: 20
                            }}>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 100, marginTop: 20 }}>
                                <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>Biller Registraion</Text>
                                <Image
                                    style={{marginLeft:90}}
                                    source={require('../../assets/img/group7.png')}
                                />
                            </View>

                            <View style={{ marginHorizontal: 30,marginTop:20 }}>
                                <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>You are 1 step away from completing your SIP</Text>
                                <Text style={{ fontSize: 14, color: '#C0C0C0', fontWeight: 'bold', marginTop: 10 }}>Follow the steps below to complete your SIP </Text>


                            </View>

                            <View style={{  marginTop: 20 }}>
                                <View style={{flexDirection:'row',marginLeft:40}}>

                                    <Image
                                        style={styles.tinyLogo}
                                        source={require('../../assets/img/group131.png')}
                                    />

                                    <Text style={{ fontSize: 16, color: 'black', fontWeight: '600',marginLeft:20 }}>Login to your Bank's Net Banking Portal</Text>


                                </View>
                                <View  style={{flexDirection:'row',marginLeft:40}}>

                                <Image
                                        style={styles.tinyLogo1}
                                        source={require('../../assets/img/shape2.png')}
                                    />


                                <Text style={{ fontSize: 16, color: 'black', fontWeight: '600',marginTop:20,marginLeft:20 }}>{sen}</Text>


                                </View>

                                {/* <View style={{marginLeft:30}}>
                                    <Icon name='chevron-small-down' size={30} color={'darkorange'}></Icon>
                                </View> */}



                            <View style={{flexDirection:'row',marginLeft:40}}>


                            <Image
                                        style={styles.tinyLogo1}
                                        source={require('../../assets/img/group126.png')}
                                    />


                                

                                <Text style={{ fontSize: 16, color: 'black', fontWeight: '600', marginTop: 20,marginLeft:20 }}>{sec}</Text>

                                </View>


                            </View>


                            <View style={{ borderColor: 'darkorange', borderWidth: 1, borderRadius: 12, borderStyle: "dashed", padding: 20, marginHorizontal: 20, marginTop: 30 }}>
                                <Text style={{ color: '#C0C0C0', textAlign: 'center' }}>Biller Name:</Text>
                                <Text style={{ fontSize: 16, color: 'black', fontWeight: '600', marginTop: 10, textAlign: 'center' }}>ICICI Prudrntial Mutual fund</Text>
                                <Text style={{ color: '#C0C0C0', marginTop: 30, textAlign: 'center' }}>Registration Reference Number:</Text>
                                <Text style={{ fontSize: 16, color: 'black', fontWeight: '600', marginTop: 10, textAlign: 'center' }}>URN - 9886889</Text>



                            </View>


                            <View style={{ flexDirection: 'row', marginHorizontal: 30, marginLeft: 25, marginTop: 30 }}>
                                <View style={{ width: '50%', marginRight: 10 }}>



                                    <TouchableOpacity onPress={() => navigation.navigate('SecandTimeTwo')}
                                        style={{ height: 50, backgroundColor: "white", marginTop: 10, borderRadius: 30, borderColor: 'darkorange', borderWidth: 1, marginBottom: 12, width: '95%' }}>
                                        <Text style={{ marginTop: 10, textAlign: "center", fontWeight: "700", fontSize: 16, color: "darkorange", }}>Add later</Text>

                                    </TouchableOpacity>

                                </View>

                                <View style={{ width: '50%', marginRight: 4 }}>

                                    <TouchableOpacity
                                        style={{ height: 50, backgroundColor: "orange", marginTop: 10, borderRadius: 30, width: '95%' }}>
                                        <Text style={{ marginTop: 10, textAlign: "center", fontWeight: "700", fontSize: 16, color: "#fff" }}>Add now</Text>

                                    </TouchableOpacity>

                                </View>


                            </View>



























                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </Modal>
    );
};
export default GoalSavedSuccesfully;

const styles = StyleSheet.create({
    tinyLogo: {
        width: 15,
        height: 24,
        // alignContent: 'center',
        // alignItems: 'center',
        // justifyContent: 'center',

    },
    tinyLogo1: {
        width: 15,
        height: 24,
        marginTop:20
    }

});
