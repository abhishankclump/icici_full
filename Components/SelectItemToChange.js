/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    View,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';


const MobileTwo = ({ visible, closeCallback, shareOptionCallback, navigation }) => {
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
                            height: 450,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            backgroundColor: "#fff"
                        }}>

                        <View
                            style={{
                                height: 350, borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                                paddingHorizontal: 15,

                            }}>
                            <View style={{ flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ marginLeft: 10, marginTop: 15, width: '80%', fontWeight: "700", fontSize: 18, color: 'black' }}>You click one of the following to change items already registed</Text>
                                <TouchableOpacity onPress={closeCallback} style={{ marginRight: 10, marginTop: 20, backgroundColor: '#F4F5FA', justifyContent: 'center', alignItems: 'center', borderRadius: 50, height: 40, width: 40, marginTop: 10, textAlign: 'center' }}>
                                    <Text style={{ fontSize: 20, fontWeight: '700', color: 'black' }}>X</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingHorizontal: 20, paddingVertical: 25, marginVertical: 15, borderRadius: 20, backgroundColor: 'white', elevation: 20, marginTop: 20 }}>
                                <View>
                                    <Text style={{ fontSize: 18 }}>Email</Text>
                                    <Text style={{ color: 'black', fontSize: 20, fontWeight: '700', marginTop: 5 }}>Karthik29@gmail.com</Text>
                                </View>
                                <TouchableOpacity onPress={()=>navigation.navigate("changeEmail")}>
                                    <Text style={{ color: '#FA9000', fontSize: 18, fontWeight: '700' }}>Edit</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingHorizontal: 20, paddingVertical: 25, marginVertical: 15, borderRadius: 20, backgroundColor: 'white', elevation: 20, marginBottom: 20 }}>
                                <View>
                                    <Text style={{ fontSize: 18 }}>Mobile number</Text>
                                    <Text style={{ color: 'black', fontSize: 20, fontWeight: '700', marginTop: 5 }}>+91-7795394799</Text>
                                </View>
                                <TouchableOpacity onPress={()=>navigation.navigate("verifyMobile")}>

                                    <Text style={{ color: '#FA9000', fontSize: 18, fontWeight: '700' }}>Edit</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </Modal>
    );
};

export default MobileTwo;







