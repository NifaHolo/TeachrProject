import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,

} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import {Card} from 'react-native-shadow-cards';

export default class App extends React.Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
            {
              src: 'https://lh3.googleusercontent.com/vx6PylwqbgFrKKWoSpUOBqDE241feI84PMQyvyH7VywbU3JRrQoPPQrFLPWgUgqEb-GleA=s95',
              name: 'Evalunna ROCHE',
              formation1: 'Université de nantes',
              Formation: 'Formation',
              Description: 'Description',
              desc1: 'Calme et patiente',
              desc2: "m'adapter à l'élève et comprendre",
              desc3: "sa méthode d'apprentissage afin",
              desc4: "de l'aider à progresser au mieux.",
              btn1: "Prendre un cours avec ce Teach'r",
              btn2: "Retirer ce Teach'r de mes favoris",
              k: '1',
            },
            {
              src: 'https://lh3.googleusercontent.com/tJoFB3vxlrT9cpC3EvNICDoXYDfvMkzl3aLYvwst9d8GxAwQ0-IiGIJY6aC5y-lQ3rL5lQ=s151',
              name: 'Vanessa MORIN',
              formation1: 'IPSSI de marne la valée',
              Formation: 'Formation',
              Description: 'Description',
              desc1: 'Calme et patiente',
              desc2: "m'adapter à l'élève et comprendre",
              desc3: "sa méthode d'apprentissage afin",
              desc4: "de l'aider à progresser au mieux.",
              btn1: "Prendre un cours avec ce Teach'r",
              btn2: "Retirer ce Teach'r de mes favoris",
              k: '2',
            }
        ]
      }
    }

    _renderItem({item,index}){
        return (
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
                  {item.name}
                </Text>

                <Image
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 400 / 2,
                    marginTop: 30,
                    marginLeft: 30,
                  }}
                  source={{uri: item.src}}
                  alt=""
                />
                <Text style={{marginLeft: 20, marginTop: 30, color: 'grey'}}>
                  {item.Formation}
                </Text>
                <Text
                  style={{marginLeft: 20, fontWeight: 'bold', fontSize: 15}}>
                  {item.formation1}
                </Text>
                <Text style={{marginLeft: 20, marginTop: 30, color: 'grey'}}>
                  {item.Description}
                </Text>
                <Text
                  style={{
                    marginLeft: 20,
                    marginTop: 5,
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}>
                  {item.desc1}
                </Text>
                <Text
                  style={{marginLeft: 20, fontWeight: 'bold', fontSize: 15}}>
                  {item.desc2}
                </Text>
                <Text
                  style={{marginLeft: 20, fontWeight: 'bold', fontSize: 15}}>
                  {item.desc3}
                </Text>
                <Text
                  style={{marginLeft: 20, fontWeight: 'bold', fontSize: 15}}>
                  {item.desc4}
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
                  <Text style={{color: 'white'}}>{item.btn1}</Text>
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
                  <Text style={{color: '#fc9177'}}>{item.btn2}</Text>
                </TouchableOpacity>
          </Card>

        )
    }

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
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={300}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
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