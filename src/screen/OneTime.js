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
    StyleSheet
} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/EvilIcons';
import { RadioButton, Checkbox } from 'react-native-paper';
//import CheckBox from '@react-native-community/checkbox';



const ShareModal = ({ visible, closeCallback, shareOptionCallback , navigation}) => {
    const [checked, setChecked] = React.useState('');
    const [togle, setTogle] = React.useState(false);
    //const [isSelected, setSelection] = useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)


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
                                height: 700, borderTopLeftRadius: 20,
                                borderTopRightRadius: 20
                            }}>

                            <View style={{ marginTop: 20 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', marginLeft: 120 }}>One time (Lumpsum)</Text>
                                    {/* <View style={{ marginLeft: 60, borderRadius: 30, backgroundColor: 'lightgrey' }}>
                                        <Icon name='close-outline' size={30}></Icon>
                                    </View> */}
                                    <View>
                                        <Image
                                            style={styles.tinyLogo}
                                            source={require('../../assets/img/group7.png')}
                                        />

                                    </View>

                                </View>
                                <Text style={{ textAlign: 'center', color: 'black', fontSize: 16, fontWeight: '400', marginTop: 5 }}>How would you like to pay?</Text>

                                <View style={{ borderRadius: 20, padding: 10, marginHorizontal: 20, elevation: 15, backgroundColor: 'white', marginTop: 30, paddingBottom: 40 }}>
                                    <View style={{ flexDirection: 'row' }}>


                                        <Text style={{ marginLeft: 10, fontSize: 16, color: 'black', fontWeight: 'bold' }}> Net Banking</Text>
                                        <View style={{ marginLeft: 180 }}>
                                            <RadioButton
                                                value="first"
                                                uncheckedColor='lightgrey'
                                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                                onPress={() => setChecked('first')}
                                            />
                                        </View>

                                    </View>

                                    <View style={{ marginHorizontal: 10, borderRadius: 12, backgroundColor: 'rgb 207 204 202', padding: 5, width: '70%' }}>
                                        <Text style={{ fontSize: 14, color: 'black', fontWeight: 'bold', marginLeft: 10 }}>NAV Applicability:Usually Instant</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginTop: 20, marginHorizontal: 10 }}>
                                        <Checkbox
                                            status={checked ? 'checked' : 'unchecked'}
                                            uncheckedColor='lightgrey'

                                            onPress={() => {
                                                setChecked(!checked);
                                            }}
                                        />

                                         
                                        <View style={{}}>

                                            <Text style={{ marginLeft: 10, fontSize: 14, color: 'black', fontWeight: 'bold' }}>Register for quick checkout</Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={{ marginLeft: 10, fontSize: 14, color: '#C0C0C0', fontWeight: 'bold' }}>Requie only OTP .</Text>
                                                <Text style={{ marginLeft: 5, fontSize: 14, color: 'darkorange', fontWeight: 'bold' }}>Know More</Text>


                                            </View>




                                        </View>

                                    </View>

                                </View>


                                <View style={{ borderRadius: 20, padding: 20, marginHorizontal: 20, elevation: 15, backgroundColor: 'white', marginTop: 30 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity onPress={()=>navigation.navigate("PaymentViaPhonePay")}>

                                        <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginHorizontal: 10 }}>UPI</Text>
                                        </TouchableOpacity>
                                        <View style={{ marginLeft: 220 }}>
                                            <AntIcon name='chevron-down' size={30} color={'darkorange'}></AntIcon>
                                        </View>

                                    </View>
                                    <View style={{ marginHorizontal: 10, borderRadius: 12, backgroundColor: 'lightgrey', padding: 5, width: '75%', marginTop: 10 }}>
                                        <Text onPress={()=>navigation.navigate("")} style={{ fontSize: 14, color: 'black', fontWeight: 'bold', marginLeft: 10 }}>NAV Applicability:Usually Instant</Text>
                                    </View>

                                </View>


                                <View style={{ borderRadius: 20, padding: 20, marginHorizontal: 20, elevation: 15, backgroundColor: 'white', marginTop: 30 }}>

                                    <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', padding: 10 }}>Pay by OTM</Text>



                                </View>

                                <View style={{ borderRadius: 20, padding: 20, marginHorizontal: 20, elevation: 15, backgroundColor: 'white', marginTop: 30 }}>

                                    <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', padding: 10 }}>Pay by NEFT</Text>



                                </View>







                            </View>


































                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </Modal>
    );
};
export default ShareModal;

const styles = StyleSheet.create({

    tinyLogo: {
        width: 32,
        height: 32,
        marginLeft: 70

        //alignItems:'center',

    },
})
