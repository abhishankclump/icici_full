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



const ShareModal = ({ visible, closeCallback, shareOptionCallback, navigation }) => {
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
                                height: 500, borderTopLeftRadius: 20,
                                borderTopRightRadius: 20
                            }}>

                            <View style={{ marginTop: 20 }}>

                            <View style={{borderRadius: 30, backgroundColor: '#paleGrey',alignItems:'flex-end',marginRight:20 }}>
                                        <Icon name='close-outline' size={30}></Icon>
                                    </View>
                                <View style={{ flexDirection: 'row' }}>

                                    <View style={{justifyContent:'center',alignItems:'center',marginLeft:40 }}>
                                        <Image
                                            style={styles.tinyLogo}
                                            source={require('../../assets/img/starmanCuate.png')}
                                        />


                                    </View>



                                    

                                </View>
                                <Text style={{ textAlign: 'center', color: 'black', fontSize: 18, fontWeight: 'bold', marginTop: 5 }}>Hold On!</Text>

                                
                                    <View style={{ justifyContent: 'center', padding: 10, marginTop: 10 }}>
                                        <Text style={{ fontSize: 16, color: '#A9A9A9',textAlign:'center' }}>We are taking you to your Bank's website to</Text>
                                        <Text style={{ color: '#A9A9A9', marginTop: 10,textAlign:'center' }}>Complete your OTM registration</Text>
                                

                                    </View>




                        

                            <TouchableOpacity onPress={()=> navigation.navigate('MainScreen')}>
                                <View style={{borderRadius:30,backgroundColor:'darkorange',padding:15,marginHorizontal:20,marginTop:70}}>

                                <Text style={{textAlign:'center',color:'white',fontWeight:'bold',fontSize:14}}> Okay </Text>


                                </View>

                                </TouchableOpacity>


























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
tinyLogo:{
    width:297,
    height:187,
    marginRight:0,
    alignItems:'center',
    alignContent:'center',
    justifyContent:'center',

    
}

});
