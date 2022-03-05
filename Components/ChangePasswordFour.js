import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, Image , ScrollView } from 'react-native';
import Topbar from '../src/components/Topbar';
import { TextInput } from 'react-native-gesture-handler';


import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { white } from 'react-native-paper/lib/typescript/styles/colors';

// const manimg = require('../assets/img/man.jpg')
const CELL_COUNT = 6;

const Newpin = ({navigation}) => {
  const [value, setValue] = useState('');

  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  if(value.length>5){
    navigation.navigate('Cpfive')
    }

  return (
    <CodeField
      ref={ref}
      {...props}
      // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
      value={value}
      onChangeText={setValue}
      cellCount={CELL_COUNT}
      rootStyle={styles.codeFieldRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      name="newpin"
      renderCell={({ index, symbol, isFocused }) => (
        <TextInput
          secureTextEntry
          key={index}
          style={[styles.cell, isFocused && styles.focusCell]}
          onLayout={getCellOnLayoutHandler(index)}>
          {symbol || (isFocused ? <Cursor /> : null)}
        </TextInput>
      )}
    />
  )
}



const Cpfour = ({navigation}) => {

  return (
    <View style={styles.container}>
      {/* <Topbar title="Change Mpin" /> */}
    <ScrollView>
      <View style={{ elevation:5, borderRadius: 15, backgroundColor: 'white', marginBottom:100 , marginTop: 10, marginHorizontal: 10, paddingVertical: 25, paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>OTP has been sent to the registerd mail mani*****gmail.com</Text>
        <Image source={require('../assets/img/man.jpg')} style={{ height: 200, width: 200, alignSelf: 'center' }} />

        <View style={{ marginTop: 10 }}>
          <Text style={{ fontWeight: '600', marginTop: 5 , marginBottom:15 }}>Enter OTP</Text>
          <Newpin navigation={navigation} />
        </View>
        <Text style={{ marginTop: 15, color: '#FA9000', fontSize: 16, fontWeight: '800' }}>Resend OTP?</Text>
      </View>
    </ScrollView>


    </View>
  );
};

export default Cpfour;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
  },
  root: { flex: 1 },
  title: { textAlign: 'center', fontSize: 30 },
  codeFieldRoot: {},
  cell: {
    width: 45,
    height: 45,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    borderRadius: 12,

  },
  focusCell: {
    borderColor: '#FA9000',
  },


  cellbox: {
    backgroundColor: 'white',
    elevation: 25,
    borderRadius: 15,
    marginHorizontal: 15,
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 60,
  }
});
















