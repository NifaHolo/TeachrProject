import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
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
                  Clame et patiente,
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
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    position: 'absolute',
                    backgroundColor: '#0074e5',
                    padding: 4,
                    height: 30,
                    borderRadius: 5,
                    width: '90%',
                    marginLeft: '5%',
                    marginTop: 350,
                  }}
                  onPress={() =>
                    alert("Vous avez demander un cours avec ce Teach'r")
                  }>
                  <Text style={{color: 'white'}}>Prendre un cours avec ce Teach'r</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    position: 'absolute',
                    backgroundColor: 'white',
                    borderWidth: 2,
                    borderColor: '#fc9177',
                    padding: 4,
                    height: 30,
                    borderRadius: 5,
                    width: '90%',
                    marginLeft: '5%',
                    marginTop: 390,
                  }}
                  onPress={() => alert("Vous avez retirer ce Teach'r")}>
                  <Text style={{color: '#fc9177'}}>Retirer ce Teach'r de mes favoris</Text>
                </TouchableOpacity>
          </Card>
  
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