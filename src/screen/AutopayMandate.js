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
} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/EvilIcons';
import { RadioButton, Checkbox } from 'react-native-paper';
import RedirectPage from "./RedirectPage"
//import CheckBox from '@react-native-community/checkbox';



const ShareModal = ({ visible, closeCallback, shareOptionCallback, navigation }) => {
    const [checked, setChecked] = React.useState('');
    const [togle, setTogle] = React.useState(false);
    //const [isSelected, setSelection] = useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [show,setShow]=useState(false)



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
                                height: 500, borderTopLeftRadius: 20,
                                borderTopRightRadius: 20
                            }}>

                            <View style={{ marginTop: 20 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', marginLeft: 120 }}>Autopay Mandate</Text>
                                    <View style={{ marginLeft: 90, borderRadius: 30, backgroundColor: '#paleGrey' }}>
                                        <Icon name='close-outline' size={30}></Icon>
                                    </View>

                                </View>
                                <Text style={{ textAlign: 'center', color: 'black', fontSize: 16, fontWeight: '400', marginTop: 5 }}>How would you like to pay?</Text>

                                <View style={{ borderRadius: 20, padding: 10, marginHorizontal: 20, elevation: 15, backgroundColor: 'white', marginTop: 30, paddingBottom: 40 }}>
                                    <View style={{justifyContent:'center',padding:10,marginTop:10 }}>
                                        <Text onPress={() => { setShow(true)  }} style={{fontSize:16,color:'black',fontWeight:'bold'}}>Pay by Net Banking</Text>
                                        <Text style={{color:'#C0C0C0',marginTop:10}}>Lorem lpsum is simply dummy text of the</Text>
                                        <Text style={{color:'#C0C0C0',marginTop:5}} >printing and typesetting industry.</Text>

                                    </View>

                                    


                                   </View>   


                                   <View style={{ borderRadius: 20, padding: 10, marginHorizontal: 20, elevation: 15, backgroundColor: 'white', marginTop: 30, paddingBottom: 40 }}>
                                    <View style={{justifyContent:'center',padding:10,marginTop:10 }}>
                                        <Text style={{fontSize:16,color:'black',fontWeight:'bold'}}>Pay by UPI Mandate</Text>
                                        <Text style={{color:'#C0C0C0',marginTop:10}}>Lorem lpsum is simply dummy text of the</Text>
                                        <Text style={{color:'#C0C0C0',marginTop:5}} >printing and typesetting industry.</Text>

                                    </View>

                                    


                                   </View>     
  
                                        

                                    

                                    

                                    
                                


                                


                                

                                    
                                    

                                
                                






                            </View>





                            <RedirectPage visible={show} closeCallback={() => {setShow(false) }} navigation={navigation}/>




























                        </View>
                    </View>
                </ScrollView>
            

            </KeyboardAvoidingView>
        </Modal>

        
    );
};
export default ShareModal;
