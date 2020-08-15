import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Home = () => {
  const image = {
    uri:
      'https://images.pexels.com/photos/227417/pexels-photo-227417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  };

  return (
    <View>
      <View>
        <ImageBackground
          source={image}
          style={{width: '100%', height: 270}}
          imageStyle={{borderBottomRightRadius: 65}}>
          <View style={styles.DarkOverlay}></View>
          <View style={styles.SearchContainer}>
            <Text style={styles.UserGreet}>Hi Mitesh ,</Text>
            <Text style={styles.UserText}>
              Where would you like to go today?
            </Text>
          </View>
          <View>
            <TextInput
              style={styles.SearchBox}
              placeholder="Search Destination"
              placeholderTextColor="#666"></TextInput>
          </View>
        </ImageBackground>
        <Icon name="rocket" size={30} color="#000" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  DarkOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: 270,
    backgroundColor: '#000',
    opacity: 0.2,
    borderBottomRightRadius: 65,
  },
  SearchContainer: {
    paddingTop: 100,
    paddingLeft: 16,
  },
  UserGreet: {
    fontSize: 38,
    color: 'white',
    fontWeight: 'bold',
  },
  UserText: {
    fontSize: 16,
    color: 'white',
  },
  SearchBox: {
    marginTop: 16,
    backgroundColor: '#fff',
    paddingLeft: 24,
    padding: 12,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    width: '90%',
  },
});

export default Home;
