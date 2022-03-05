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



const GoalSavedSuccesfully = ({ visible, closeCallback, shareOptionCallback, navigation }) => {
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
                                height: 600, borderTopLeftRadius: 20,
                                borderTopRightRadius: 20
                            }}>

                            <View style={{ marginTop: 20 }}>
                                <View style={{ flexDirection: 'row' }}>

                                    <View style={{ marginHorizontal:70,justifyContent:'center' }}>
                                        <Image
                                            style={styles.tinyLogo}
                                            source={require('../../assets/img/man.jpg')}
                                        />


                                    </View>



                                    <View style={{borderRadius: 30, backgroundColor: '#paleGrey' }}>
                                        <Icon name='close-outline' size={30}></Icon>
                                    </View>

                                </View>
                                <Text style={{ textAlign: 'center', color: 'black', fontSize: 16, fontWeight: '500', marginTop: 5 }}>Your goal is saved successfully.</Text>
                                <Text style={{ textAlign: 'center', color: 'black', fontSize: 16, fontWeight: '500', marginTop: 5 }}>Do you want to map an existing investment</Text>
                                <Text style={{ textAlign: 'center', color: 'black', fontSize: 16, fontWeight: '500', marginTop: 5 }}>to yout goal?</Text>

                                
                                    <View style={{justifyContent:'center',flexDirection:'row',marginTop:50}}>

                                        <View style={{borderRadius:30,borderColor:'darkorange',borderWidth:1,padding:20,width:'40%'}}>
                                        <Text style={{textAlign:'center',color:'darkorange',fontWeight:'bold'}}>Skip For Now</Text>
                                        </View>
                                        <View style={{borderRadius:30,borderColor:'darkorange',borderWidth:1,padding:20,width:'40%',marginLeft:30}}>
                                        <Text style={{textAlign:'center',color:'darkorange',fontWeight:'bold'}}>Start Investment</Text>
                                        </View>

                                    </View>




                        


                                <View style={{borderRadius:30,backgroundColor:'darkorange',padding:15,marginHorizontal:20,marginTop:20}}>

                                <Text onPress={()=> navigation.navigate('SelectFolio')} style={{textAlign:'center',color:'white',fontWeight:'bold',fontSize:14}}> Map an Existing Investment </Text>


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
tinyLogo:{
    width:200,
    height:300,
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
    
}

});
