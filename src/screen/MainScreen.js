import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button, ScrollView, TouchableOpacity } from "react-native";
import Header from '../components/Topbar';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ShareModal from "../components/ReferModel"
import Logoutpopup from "../../Components/LogoutPopup";

export default function App({ navigation }) {

  const [people, setPeople] = useState([
    { name: "Goal", key: "1", navigation: "aboutUs" },
    { name: "Risk", key: "2", navigation: "Risktwo" },
    { name: "Investor Services", key: "3", navigation: "Investor" },
    { name: "Security Setting", key: "4", navigation: "SecuritySetting" },
    { name: "Help & Support", key: "5", navigation: "Accordion" },

  ]);
  const [isShareModalVisible, setIsShareModalVisible] = useState(false);
  const [isLoutoutModel, setisLoutoutModel] = useState(false);

  return (<>
    <View style={{ height: '45%', backgroundColor: 'darkorange' }}>


      <View style={{ height: '80%', marginTop: 0 }}>
        <View style={styles.container}>
          <Header navigation={navigation} style={styles.head} title="Profile" />
          <View style={{ height: '65%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <View  style={{ backgroundColor: 'white', height: 80, marginBottom: 12, width: 80, borderRadius: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
              <Text onPress={()=> navigation.navigate('poll')} style={{ fontSize: 28, color: 'black', fontWeight: 'bold' }}>MM</Text>
            </View>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <Text onPress={()=> navigation.navigate('NewOtm')} style={{ color: 'white', fontSize: 18, fontWeight: 'bold', marginTop: 5 }}>Manikandan</Text>
                <Icon name="pen" size={14} color='white' style={{ marginHorizontal: 15, marginTop: 5 }} />

              </View>

              <Text onPress={()=> navigation.navigate('HolidayPlannerOne')} style={{ color: 'white', fontSize: 18, fontWeight: 'bold', marginTop: 5 }}>Proficiency Level - Beginner</Text>
              <Text  style={{ color: 'white', fontSize: 18, fontWeight: 'bold', marginTop: 5 }}>PAN Managed: 02  Folio Managed: 02</Text>

            </View>


          </View>
        </View>
      </View>
    </View>
    <ScrollView style={{ width: "100%", height: "100%", marginTop: -50 }}>
      <FlatList
        data={people}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.item00}>
              <TouchableOpacity onPress={() => navigation.navigate(item.navigation)}>
                <Text style={styles.itemtext}>{item.name}</Text>
              </TouchableOpacity>
            </View>

          </View>

        )}
      />
      <View style={styles.item}>
        <View style={styles.item00}>
          <TouchableOpacity onPress={() => setIsShareModalVisible(true)}>
            <Text style={styles.itemtext}>Refer App</Text>
          </TouchableOpacity>
        </View>

      </View>
      <View style={styles.item}>
        <View style={styles.item00}>
          <TouchableOpacity onPress={() => setisLoutoutModel(true)}>
            <Text style={styles.itemtext}>Logout</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>

    <ShareModal
      visible={isShareModalVisible}
      closeCallback={() => {
        setIsShareModalVisible(false);
      }}
    />

    <Logoutpopup
      visible={isLoutoutModel}
      closeCallback={() => {
        setisLoutoutModel(false);
      }}
    />


  </>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkorange',
    height: '90%',
    alignItems: 'center',
  },
  head: {
    marginTop: 22,
    color: 'white'

  },
  item: {
    justifyContent: "center",
    backgroundColor: 'white',
    elevation: 15,
    flexDirection: 'row',
    fontSize: 24,
    marginHorizontal: 30,
    marginTop: 10,
    borderRadius: 13,
    height: 80,
    marginBottom: 15
  },
  itemtext: {
    width: "80%",
    backgroundColor: "white",
    fontWeight: 'bold',
    color: 'black'
  },
  item00: {
    width: "70%",
    height: "100%",
    justifyContent: "center"
  },
  header: {
    width: "100%",
    height: "100%",
    flexDirection: 'row',

  }
});
