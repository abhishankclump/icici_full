
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
import Iconic2 from 'react-native-vector-icons/MaterialCommunityIcons';
import MySearch from '../../Components/MySerach';
import HeadBar from '../components/Topbar';
import Iconic3 from 'react-native-vector-icons/MaterialIcons';

import Myreadmore from '../components/MyReadmore';


const NestedExpandable = ({ item, onClickFunction })=>{
      //Custom Component for the Expandable List
  const [layoutHeight, setLayoutHeight] = useState(0);
 const _renderTruncatedFooter = (handlePress) => {
    return (
      <Text style={{color: Colors.tintColor, marginTop: 5}} onPress={handlePress}>
        Read more
      </Text>
    );
  }
 
  const _renderRevealedFooter = (handlePress) => {
    return (
      <Text style={{color: Colors.tintColor, marginTop: 5}} onPress={handlePress}>
        Show less
      </Text>
    );
  }
 
 const  _handleTextReady = () => {
    // ...
  }


  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);

  return (
    <View style={{ backgroundColor: 'white',  borderRadius: 20 }}>
      {/*Header of the Expandable List Item*/}

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClickFunction}
        style={styles.subheader}>
          {/* <ReadMore
              numberOfLines={3}
              renderTruncatedFooter={_renderTruncatedFooter}
              renderRevealedFooter={_renderRevealedFooter}
              onReady={_handleTextReady}>
            </ReadMore> */}
              <Text style={styles.headerText}>
               {item.val}
             </Text>
             

       {/* <Myreadmore mytext="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui blanditiis illum repudiandae ratione laboriosam voluptates, animi enim rem laborum, soluta provident sapiente eveniet esse recusandae odit excepturi placeat et quis eaque at? Consequuntur, aspernatur maiores." /> */}
              
        {item.isExpanded ? <Text style={{fontSize: 30, color: 'orange', width:15}}>—</Text>
            : <Text style={{fontSize: 30, color: 'orange',}}>+</Text>
        }
      </TouchableOpacity>
      <View
        style={{
          height: layoutHeight,
          overflow: 'hidden',
        }}>
        {/*Content under the header of the Expandable List Item*/}
        {item.nestcategory.map((item, key) => (
          <TouchableOpacity
            key={key}
            style={styles.content}
            onPress={() => alert('Id: ' + item.id + ' val: ' + item.val)}>
            <Text style={styles.text}>
               {item.val}
       {/* <Myreadmore mytext="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui blanditiis illum repudiandae ratione laboriosam voluptates, animi enim rem laborum, soluta provident sapiente eveniet esse recusandae odit excepturi placeat et quis eaque at? Consequuntur, aspernatur maiores." /> */}

            </Text>
          </TouchableOpacity>
        ))}

      </View>
    </View>
  );
}

const ExpandableComponent = ({ item, onClickFunction , Rindex}) => {

    const [NestedlistDataSource, setNestedlistDataSource] = useState(CONTENT);
    const [multiSelect, setMultiSelect] = useState(false);

    const updateNestedLayout = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...NestedlistDataSource];
        if (multiSelect) {
          // If multiple select is enabled
        array[Rindex].subcategory[index]['isExpanded'] = !array[Rindex].subcategory[index]['isExpanded'];
        } else {
          // If single select is enabled
          array[Rindex].subcategory.map((value, placeindex) =>
            placeindex === index
              ? (array[Rindex].subcategory[placeindex]['isExpanded'] =
                !array[Rindex].subcategory[placeindex]['isExpanded'])
              : (array[Rindex].subcategory[placeindex]['isExpanded'] = false),
          );
        }
        setNestedlistDataSource(array);
        // console.log("hello world" , array[Rindex].subcategory[index]['isExpanded'])
      };
    
  //Custom Component for the Expandable List
  const [layoutHeight, setLayoutHeight] = useState(0);
  
  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);

  return (
    <View style={{ marginTop: 20, marginHorizontal: 20, backgroundColor: 'white', elevation: 15, borderRadius: 20 }}>
      {/*Header of the Expandable List Item*/}

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClickFunction}
        style={styles.header}>
        <Text style={styles.FirstheaderText}>
          {item.category_name}
        </Text>
        {item.isExpanded ? <Text style={{fontSize: 30, color: 'orange', width:15}}>—</Text>
            : <Text style={{fontSize: 30, color: 'orange',}}>+</Text>
        }
      </TouchableOpacity>
      <View
        style={{
          height: layoutHeight,
          overflow: 'hidden',
        }}>
        
        {item.subcategory.map((item, key) => (
            <NestedExpandable
              key={key}
              onClickFunction={() => {
                updateNestedLayout(key);
              }}
              item={item}
            />
          ))}
      </View>
    </View>
  );
};

const UnderCard = ({shareCallback,navigation}) => {
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

    // console.log("main card", array)
  };

  return (
    <SafeAreaView style={{ height:'100%'}}>
     <HeadBar title="Help & Support" navigation={navigation} />
      <View style={styles.container}>
    
       
        
        <ScrollView >
      <MySearch />

        <View style={{ flexDirection: 'row', padding: 10  }}>
          <Text style={styles.titleText}>Frequently asked question</Text>
        </View>
          {listDataSource.map((item, key) => (
            <ExpandableComponent
              key={item.category_name}
              onClickFunction={() => {
                updateLayout(key);
              }}
              Rindex={key}
              item={item}
            />
          ))}
      
                    <View
                        style={styles.Chat}
                    >
                        <TouchableOpacity onPress={shareCallback}
                        style={{ width: "95%" }}>
                            <Text style={styles.headerTextone}>Get call back</Text>
                        </TouchableOpacity>
                        <Iconic3 name="phone-callback" size={20} color="orange" />
                    </View>
                    <View
                        style={[styles.Chat,{marginBottom:10}]}
                    >
                        <TouchableOpacity onPress={shareCallback}
                        style={{ width: "95%" }}>
                            <Text style={styles.headerTextone}>Chat with us</Text>
                        </TouchableOpacity>
                        <Iconic2 name="message-processing" size={20} color="orange" />

                    </View>
      
                </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default UnderCard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff"
  },
  titleText: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: 12,
  },
  header: {
    // backgroundColor: '#eee',
    // marginTop:20,
    // marginHorizontal:30,
    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  subheader: {
    // backgroundColor: '#eee',
    paddingHorizontal:20,
    // marginTop:20,
    // marginHorizontal:30,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  headerText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
  },
  FirstheaderText: {
    fontSize: 16,
    // fontWeight:'bold',
    fontWeight: '700',
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
    fontSize: 14,
    color: '#606070',
    padding: 10,
  },
  content: {
    backgroundColor: 'white',
    // marginHorizontal:30,
    borderRadius: 20,
    paddingLeft: 10,
  },
  Chat: {
    marginTop:20,
    marginHorizontal:20,
    borderRadius: 20,
    flexDirection: "row",
    elevation: 15,
    backgroundColor: "#fff", 
    padding:25,
    borderRadius: 20,
    flexDirection: 'row',


},
headerTextone: {
    fontSize: 19,
    fontWeight: '700',
    width: "90%",
    color: "#000"
},
  
});

//Dummy content to show
//You can also use dynamic data by calling webservice
const CONTENT = [
  {
    isExpanded: false,
    category_name: 'Account statment\nLorem Ipsum',
    subcategory: [
          { id: 1, val: 'Second level', isExpanded:false , nestcategory: [
            { id: 104, val: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui blanditiis illum repudiandae ratione laboriosam voluptates, animi enim rem laborum, soluta provident sapiente eveniet esse recusandae odit excepturi placeat et quis eaque at? Consequuntur, aspernatur maiores." },
            // { id: 105, val: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit est sint cupiditate, voluptatibus dolorem aut numquam, explicabo, dignissimos corrupti totam vero? Culpa sed dolorum ad. Sapiente illum dignissimos sint porro totam quisquam facere, modi corporis rerum alias accusamus sequi?" },
          ], },
          { id: 2, val: 'Second level' , isExpanded:false , nestcategory: [
            { id: 104, val: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad cum sapiente impedit illum voluptatem mollitia numquam corrupti a quidem, rerum hic porro eveniet perferendis! Voluptate fuga magnam, culpa minus tempora veniam magni doloremque suscipit vel quia mollitia, repudiandae aspernatur pariatur voluptatum temporibus cum. Culpa veritatis cum voluptatum alias, ex quisquam sed placeat ipsam dicta consectetur!" },
            // { id: 105, val: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, modi quam illum iste at beatae delectus consequuntur. Reiciendis fuga, alias nulla maxime reprehenderit nobis est ullam, aut architecto, earum in! Expedita nobis itaque optio! Voluptatum enim mollitia ex quis, iste, ad rem ipsa quia qui vel aliquid minima, maiores dolor perferendis reiciendis corporis quo? Dicta ex quibusdam consectetur quae? Ab!" },
          ], },
          { id: 3, val: 'Second level', isExpanded:false , nestcategory: [
            { id: 104, val: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui blanditiis illum repudiandae ratione laboriosam voluptates, animi enim rem laborum, soluta provident sapiente eveniet esse recusandae odit excepturi placeat et quis eaque at? Consequuntur, aspernatur maiores." },
            // { id: 105, val: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit est sint cupiditate, voluptatibus dolorem aut numquam, explicabo, dignissimos corrupti totam vero? Culpa sed dolorum ad. Sapiente illum dignissimos sint porro totam quisquam facere, modi corporis rerum alias accusamus sequi?" },
          ], },
          { id: 4, val: 'Second level' , isExpanded:false , nestcategory: [
            { id: 104, val: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad cum sapiente impedit illum voluptatem mollitia numquam corrupti a quidem, rerum hic porro eveniet perferendis! Voluptate fuga magnam, culpa minus tempora veniam magni doloremque suscipit vel quia mollitia, repudiandae aspernatur pariatur voluptatum temporibus cum. Culpa veritatis cum voluptatum alias, ex quisquam sed placeat ipsam dicta consectetur!" },
            // { id: 105, val: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, modi quam illum iste at beatae delectus consequuntur. Reiciendis fuga, alias nulla maxime reprehenderit nobis est ullam, aut architecto, earum in! Expedita nobis itaque optio! Voluptatum enim mollitia ex quis, iste, ad rem ipsa quia qui vel aliquid minima, maiores dolor perferendis reiciendis corporis quo? Dicta ex quibusdam consectetur quae? Ab!" },
          ], },
         ],
  },
  {
    isExpanded: false,
    category_name: 'Centralised KYC',
    subcategory: [
      { id: 5, val: 'Sub Cat 5' , isExpanded:false , nestcategory: [
        { id: 104, val: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe dolore laboriosam explicabo magnam laborum fugit dicta dolorum, voluptatem veritatis beatae. Rem ipsum magnam amet facilis officiis, sapiente totam deleniti labore quasi laborum recusandae?" },
    
      ],},
      { id: 6, val: 'Sub Cat 6' , isExpanded:false , nestcategory: [
        { id: 104, val: 'Sub Cat 104' },
        { id: 105, val: 'Sub Cat 105' },
      ], },
    ],
  },
  {
    isExpanded: false,
    category_name: 'Demat FAQ',
    subcategory: [
      { id: 7, val: 'Sub Cat 7' , isExpanded:false , nestcategory: [
        { id: 104, val: 'Sub Cat 104' },
        { id: 105, val: 'Sub Cat 105' },
      ],},
      { id: 8, val: 'Sub Cat 8' , isExpanded:false , nestcategory: [
        { id: 104, val: 'Sub Cat 104' },
        { id: 105, val: 'Sub Cat 105' },
      ],},
    ],
  },
  {
    isExpanded: false,
    category_name: 'Nomination',
    subcategory: [
      { id: 9, val: 'Sub Cat 9' , isExpanded:false , nestcategory: [
        { id: 104, val: 'Sub Cat 106' },
        { id: 105, val: 'Sub Cat 107' },
      ],},
      { id: 10, val: 'Sub Cat 10' , isExpanded:false , nestcategory: [
        { id: 104, val: 'Sub Cat 108' },
        { id: 105, val: 'Sub Cat 109' },
      ],},
    ],
  },
  {
    isExpanded: false,
    category_name: 'Procedure of unclaimed amount',
    subcategory: [
      { id: 11, val: 'Sub Cat 11' , isExpanded:false , nestcategory: [
        { id: 104, val: 'Sub Cat 110' },
        { id: 105, val: 'Sub Cat 111' },
      ],},
      { id: 12, val: 'Sub Cat 12' , isExpanded:false , nestcategory: [
        { id: 104, val: 'Sub Cat 112' },
        { id: 105, val: 'Sub Cat 113' },
      ],},
    ],
  },
  {
    isExpanded: false,
    category_name: 'Redemption',
    subcategory: [
      { id: 13, val: 'Sub Cat 13' , isExpanded:false , nestcategory: [
        { id: 104, val: 'Sub Cat 114' },
        { id: 105, val: 'Sub Cat 115' },
      ],},
      { id: 14, val: 'Sub Cat 14' , isExpanded:false , nestcategory: [
        { id: 104, val: 'Sub Cat 116' },
        { id: 105, val: 'Sub Cat 117' },
      ],},
    ],
  },
  {
    isExpanded: false,
    category_name: 'Purchase',
    subcategory: [
      { id: 15, val: 'Sub Cat 15' , isExpanded:false , nestcategory: [
        { id: 104, val: 'Sub Cat 118' },
        { id: 105, val: 'Sub Cat 119' },
      ],},
      { id: 16, val: 'Sub Cat 16' , isExpanded:false , nestcategory: [
        { id: 104, val: 'Sub Cat 120' },
        { id: 105, val: 'Sub Cat 121' },
      ],},
    ],
  },
  
 
];