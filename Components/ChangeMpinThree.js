import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet, View, Image, ScrollView } from 'react-native';
import Topbar from '../src/components/Topbar';
import { TextInput } from 'react-native-gesture-handler';


import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { white } from 'react-native-paper/lib/typescript/styles/colors';
import url from "../src/constant/Api.json";
import axios from "react-native-axios";


// const manimg = require('../assets/img/man.jpg')
const CELL_COUNT = 6;

const Newpin = ({ navigation }) => {
  const [value, setValue] = useState('');

  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  if (value.length > 5) {
    navigation.navigate('ChangeMpinFour')
  }

  useEffect(() => {
    handleOTP()
  }, [])
  const handleOTP = () => {
    axios
      .post(url.encryptedJWT, {
        headers: {
          "Authorization": "Bearer " + "f78qg6MqM70ckGGhAG5GNYMMTRTI"
        },
        "OTP": "11111",
        "EmailId": "Sanket_Surti@icicipruamc.com",
        "MobileNo": "+912014201420",
        "Source": "IS",
        "OtpId": "1102",
        "Mode": "R",
        "RequestFor": "Transaction",
        "TriggerToMode": "E",
        "FOLIO_NO": "",
        "PAN_NO": "AJGPD1405P",
        "ARN": ""
      },

      )
      .then(response => {
        console.log("response", response.status)
        if (response.status == 200) {

          axios
            .post(url.baseUrl + "sendotpmailsms ", {

              body: response.data,
              headers: {
                "Authorization": "Bearer f78qg6MqM70ckGGhAG5GNYMMTRTI"
              },

            },

            )
            .then(response => {
              console.log("response main", response)


            })
            .catch(error => {
              console.log("error", error)

            });



        }

        else {
          console.log("error")
        }

      })
      .catch(error => {
        () => navigation.navigate("Cpfour")
      });

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



const Mpinthree = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Topbar navigation={navigation} title="Change Mpin" />
      <ScrollView>
        <View style={{ elevation: 30, borderRadius: 15, backgroundColor: 'white', marginBottom: 100, marginTop: 10, marginHorizontal: 10, paddingVertical: 25, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>OTP has been sent to the registerd mail mani*****gmail.com</Text>
          <Image source={require('../assets/img/man.jpg')} style={{ height: 200, width: 200, alignSelf: 'center' }} />

          <View style={{ marginTop: 10 }}>
            <Text style={{ fontWeight: '600', marginTop: 5, marginBottom: 15 }}>Enter OTP</Text>
            <Newpin navigation={navigation} />
          </View>
          <Text style={{ marginTop: 15, color: '#FA9000', fontSize: 16, fontWeight: '800' }}>Resend OTP?</Text>
        </View>
      </ScrollView>


    </View>
  );
};

export default Mpinthree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
















