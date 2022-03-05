// Example of Expandable ListView in React Native
// https://aboutreact.com/expandable-list-view/

// Import React
import React, { useEffect, useState } from 'react';
// Import required components
import {
  SafeAreaView,
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Iconic from 'react-native-vector-icons/AntDesign';
import Callingcompo from './CallingCompo';
import Companyoverview from './CompanyOverview';
import Companyglance from './CompanyGlance';
import Ourbusiness from './OurBusiness';
import Leadership from './Leadership';
import Aboutvideo from './AboutVideo';
import Topbar from '../../src/components/Topbar';
import url from '../../src/constant/Api';
import axios from "react-native-axios";


const ExpandableComponent = ({ item, onClickFunction }) => {
  //Custom Component for the Expandable List
  const [layoutHeight, setLayoutHeight] = useState(0);
  const [ExpandBtn, setExpandBtn] = useState('+');

  useEffect(() => {
    cmsAbout()
  }, [])

  const cmsAbout = () => {
    axios
      .get(url.baseUrl + 'aboutus', {
        header: {
          "Authorization": "Bearer" + "yjJBhmIcCpcmrNQPUBUCfvNMSz7J"
        }
      })

      .then(response => {
        console.log(response)

      })
      .catch(error => {
        console.log(response)
      });
  };


  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);

  return (
    <View style={{ marginBottom: 20, marginHorizontal: 20, backgroundColor: 'white', elevation: 15, borderRadius: 20 }}>
      {/*Header of the Expandable List Item*/}

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClickFunction}
        style={styles.header}>
        <Text style={styles.headerText}>
          {item.category_name}
        </Text>
        {item.isExpanded ? <Iconic size={20} name="up" color="orange" />
          : <Iconic size={20} name="down" color="orange" />
        }


      </TouchableOpacity>
      <View
        style={{
          height: layoutHeight,
          overflow: 'hidden',
        }}>
        {/*Content under the header of the Expandable List Item*/}
        {item.subcategory.map((item, key) => (
          <View
            key={key}
            style={styles.content}>

            <Callingcompo compNum={item.id} />

            {/* {console.log(item.id)} */}
          </View>
        ))}
      </View>
    </View>
  );
};

const Helpandsupport = ({ navigation }) => {
  const [listDataSource, setListDataSource] = useState(CONTENT);
  const [multiSelect, setMultiSelect] = useState(false);

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    if (multiSelect) {
      // If multiple select is enabled
      array[index]['isExpanded'] = !array[index]['isExpanded'];
    } else {
      // If single select is enabled

      array.map((value, placeindex) =>
        placeindex === index
          ? (array[placeindex]['isExpanded'] =
            !array[placeindex]['isExpanded'])
          : (array[placeindex]['isExpanded'] = false),
      );
    }
    setListDataSource(array);
  };

  return (
    <SafeAreaView style={{ height: '100%' }}>
      <Topbar navigation={navigation} title="About US" />

      <View style={styles.container}>

        <ScrollView >
          {listDataSource.map((item, key) => (
            <ExpandableComponent
              key={item.category_name}
              onClickFunction={() => {
                updateLayout(key);
              }}
              item={item}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Helpandsupport;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff"
  },
  titleText: {
    flex: 1,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: 10,
  },
  header: {
    // backgroundColor: '#eee',
    padding: 30,
    // marginTop:20,
    // marginHorizontal:30,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  headerText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
  separator: {
    height: 0.5,
    backgroundColor: '#808080',
    width: '95%',
    marginLeft: 16,
    marginRight: 16,
  },
  text: {
    fontSize: 16,
    color: '#606070',
    padding: 10,
  },
  content: {
    backgroundColor: 'white',
    // marginHorizontal:30,
    borderRadius: 20,

  },
  myexpandbtn: {


  }
});

//Dummy content to show
//You can also use dynamic data by calling webservice
const CONTENT = [
  {
    isExpanded: false,
    category_name: 'Company overview',
    subcategory: [
      { id: 1, val: (<Companyoverview />) },
    ],
  },
  {
    isExpanded: false,
    category_name: 'Company at a glance',
    subcategory: [
      { id: 2, val: 'Sub Cat 4' },

    ],
  },
  {
    isExpanded: false,
    category_name: 'Our business',
    subcategory: [
      { id: 3, val: 'Sub Cat 7' },

    ],
  },
  {
    isExpanded: false,
    category_name: 'Our leadership',
    subcategory: [
      { id: 4, val: 'Sub Cat 10' },

    ],
  },
  {
    isExpanded: false,
    category_name: 'Video',
    subcategory: [
      { id: 5, val: 'Sub Cat 13' },

    ],
  },

];