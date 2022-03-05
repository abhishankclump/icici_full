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
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/EvilIcons';
import { RadioButton, Checkbox } from 'react-native-paper';
import ToggleSwitch from 'toggle-switch-react-native'
import RnIncrementDecrementBtn  from 'react-native-increment-decrement-button';

// import RnIncrementDecrementBtn  from 
// 'react-native-increment-decrement-button';
//import CheckBox from '@react-native-community/checkbox';



const GoalSavedSuccesfully = ({ visible, closeCallback, shareOptionCallback,navigation }) => {
    const [checked, setChecked] = React.useState('');
    const [togle, setTogle] = React.useState(false);
    //const [isSelected, setSelection] = useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

   



    return (
        <Modal
            isVisible={true}
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
                                
                                <Text style={{ textAlign: 'center', color: 'black', fontSize:18, fontWeight: 'bold', marginTop: 5 }}>Top UP by Amount / Percentage</Text>
                                

                                <View style={{flexDirection:'row',justifyContent:'center',marginTop:30}}>
                                <Text style={{  color: '#C0C0C0', fontSize: 12, fontWeight: '500', marginTop: 5,marginRight:100}}>Top Up Amount </Text>
                                <Text style={{  color: '#C0C0C0', fontSize: 12,fontWeight: '500', marginTop: 5 }}>Top Up Percentage</Text>
                                </View>


                                <View style={{flexDirection:'row',justifyContent:'center',marginTop:30}}>
                                <View style={{borderColor:'#C0C0C0',borderWidth:1,borderRadius:30}}>
                                <TextInput  style={{  color: 'black ', fontSize:15, fontWeight: '500', marginTop: 5,marginRight:80}}>₹ 10,000 </TextInput>
                                </View>

                                <View style={{justifyContent:'center',marginLeft:10}}>
                                    <Text style={{fontSize:14,color:'black',fontWeight:'600'}}>OR</Text>
                                </View>

                                <View style={{borderColor:'#C0C0C0',borderWidth:1,borderRadius:30,marginLeft:20,justifyContent:'center',paddingHorizontal:20}}>
                                    <View style={{flexDirection:'row'}}>


                                    
                                    <Text style={{  color: 'darkorange ', fontSize:20, fontWeight: '500',alignItems:'center',marginRight:20}}>- </Text>
                                <Text style={{  color: 'black ', fontSize:15, fontWeight: '500',alignItems:'center',marginRight:20}}>5% </Text>
                                
                                <Text  style={{  color: 'darkorange ', fontSize:20, fontWeight: '500',alignItems:'center'}}>+ </Text>

                                </View>

                                </View>
                                
                                </View>

                                <View style={{marginHorizontal:40,marginTop:30}}>
                                    <Text style={{color:'#C0C0C0',fontSize:14}}>Select Frequency</Text>
                                </View>


                                
                                    <View style={{justifyContent:'center',flexDirection:'row',marginTop:20}}>

                                        <View style={{borderRadius:30,borderColor:'red',borderWidth:1,padding:20,width:'40%'}}>
                                        <Text style={{textAlign:'left',color:'black',fontWeight:'bold'}}>Half yearly</Text>
                                        </View>
                                        <View style={{borderRadius:30,borderColor:'#C0C0C0',borderWidth:1,padding:20,width:'40%',marginLeft:30}}>
                                        <Text style={{textAlign:'left',color:'#C0C0C0',fontWeight:'bold'}}>Annual</Text>
                                        </View>

                                    </View>


<View style={{flexDirection:'row',marginTop:20,marginHorizontal:20}}>
    <Text onPress={()=> navigation.navigate('CheckOutOne')}
                                
                                style={{  color: 'black', fontSize:18, fontWeight: 'bold',marginHorizontal:30}}>Do you want to set a Cap</Text>


    <ToggleSwitch

    style={{marginLeft:30}}
  isOn={toggleCheckBox}
  onColor="darkorange"
  offColor="lightgrey"
//   label="Do you want to set a Cap"
  labelStyle={{ color: "black", fontWeight: "900" }}
  size='small'
  onToggle={()=>setToggleCheckBox(!toggleCheckBox)}

/>
</View>


<View style={{marginLeft:30}}>

<RnIncrementDecrementBtn
       
      />
    <Text>abhi</Text>
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
