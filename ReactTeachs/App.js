import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import {Card} from 'react-native-shadow-cards';

export default class App extends React.Component {


  

    render() {
        return (
          <>
          <View style={styles.containerStyling}>
          <View style={styles.ArrowContainer}>
            <Text style={styles.Arrow}>&#60;</Text>
          </View>
          <View style={styles.textcontainer}>
            <Text style={styles.text}>Teach'rs favoris</Text>
          </View>
        </View>

            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
            <Card  style={{
              borderRadius: 5,
              height: 460,
              width: 270,
              marginLeft: 20,
              marginTop: 20,
              marginRight: 20, }}>
                  <Text
                  style={{
                    position: 'absolute',
                    marginLeft: 110,
                    marginTop: 45,
                  }}>
                  Zoé Renault
                </Text>

                <Image
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 400 / 2,
                    marginTop: 30,
                    marginLeft: 30,
                  }}
                  source={{uri: "https://lh3.googleusercontent.com/X_zWM4wCi1bc3tCd3cRDba_ZNv74MdsSoO_v6PFKysShc3CDu6jSChVmgEZgou-OC0q6GQ=s151"}}
                  alt=""
                />
                <Text style={{marginLeft: 20, marginTop: 30, color: 'grey'}}>
                  Formation
                </Text>
                <Text
                  style={{marginLeft: 20, fontWeight: 'bold', fontSize: 15}}>
                  Université Clermont Auvergne
                </Text>
                <Text style={{marginLeft: 20, marginTop: 30, color: 'grey'}}>
                  description
                </Text>
                <Text
                  style={{
                    marginLeft: 20,
                    marginTop: 5,
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}>
                 Calme et patiente
                </Text>
                <Text
                  style={{marginLeft: 20, fontWeight: 'bold', fontSize: 15}}>
                  m'adapter à l'élève et comprendre
                </Text>
                <Text
                  style={{marginLeft: 20, fontWeight: 'bold', fontSize: 15}}>
                 sa méthode d'apprentissage afin
                </Text>
                <Text
                  style={{marginLeft: 20, fontWeight: 'bold', fontSize: 15}}>
                  de l'aider à progresser au mieux.
                </Text>
                
          </Card>
            </View>
            </>
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
    fontWeight: 'bold',
    color: 'white',
  },
  ArrowContainer: {
    paddingTop: 25,
  },
  Arrow: {
    paddingLeft: 30,
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
  },
});