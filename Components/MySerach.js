import * as React from 'react';
import { Searchbar } from 'react-native-paper';
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

const MySearch = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
      <View style={{borderRadius:30 , marginTop:20 }}>
    <Searchbar
      placeholder="Search Here"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{
          borderRadius:30,
          marginHorizontal:20 ,
          backgroundColor:'#eee',
      }}
    />

      </View>
  );
};

export default MySearch;