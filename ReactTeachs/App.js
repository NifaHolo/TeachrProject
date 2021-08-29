import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.containerStyling}>
        <View style={styles.ArrowContainer}>
          <View style={{width: 500, backgroundColor: 'rgb(0, 113, 205)'}}>
            <Text style={styles.Arrow}>&#60;</Text>
          </View>
        </View>


        <View style={styles.textcontainer}>
          <View
            style={{
              width: 500,
              height: 100,
              backgroundColor: 'rgb(0, 113, 205)',
            }}>
            <Text style={styles.text}>Teach'rs favoris</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerStyling: {
    backgroundColor: 'rgb(0, 113, 205)',
    height: 200,
  },
  textcontainer: {
    paddingTop: 25,
  },
  text: {
    paddingLeft: 30,
    fontSize: 30,
    color: 'white',
  },
  ArrowContainer: {
    paddingTop: 25,
  },
  Arrow: {
    paddingLeft: 30,
    fontSize: 50,
    color: 'white',
  },
});