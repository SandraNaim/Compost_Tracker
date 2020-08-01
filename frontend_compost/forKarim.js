
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  ListView,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class forKarim extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 40 }}>
          <Text style={{ marginBottom: 10, fontSize: 20, fontWeight: "bold" }}>Offline (3)</Text>
          <View style={styles.box}>
            <Text style={styles.username}>John</Text>
            <View style={{marginLeft: 210}}>
              <Icon.Button
                name='comment'
                backgroundColor='#e67e22'
              >
                <Text style={{ color: 'white' }}>Message</Text>
              </Icon.Button>
            </View>
          </View>
          <View style={styles.box}>
            <Text style={styles.username}>Zienab</Text>
            <View style={{marginLeft: 190}}>
              <Icon.Button
                name='comment'
                backgroundColor='#e67e22'
              >
                <Text style={{ color: 'white' }}>Message</Text>
              </Icon.Button>
            </View>
          </View>
          <View style={styles.box}>
            <Text style={styles.username}>Fadi</Text>
            <View style={{marginLeft: 215}}>
              <Icon.Button
                name='comment'
                backgroundColor='#e67e22'
              >
                <Text style={{ color: 'white' }}>Message</Text>
              </Icon.Button>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 40 }}>
          <Text style={{ marginBottom: 10, fontSize: 20, fontWeight: "bold" }}>Online (0)</Text>
          <View style={styles.box}>
            <Text style={styles.username}></Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10
  },

  box: {
    padding: 5,
    marginTop: 7,
    marginBottom: 5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height: 1,
      width: -2
    },
    elevation: 2
  },
  username: {
    // color: "#20B2AA",
    color: "#e67e22",
    fontSize: 22,
    alignSelf: 'center',
    marginLeft: 10
  },

});
