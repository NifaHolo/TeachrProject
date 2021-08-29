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
            },
            {
              src: 'https://lh3.googleusercontent.com/TOVD9jE-2sEXF62JQcoUGIsp8PhiLgOe1LuHOVi6A3hadOLsQEsx6TOWpLtKexOGBv_xlw=s128',
              name: 'Camille AUBRY',
              formation1: 'Université de Paris',
              Formation: 'Formation',
              Description: 'Description',
              desc1: 'Calme et patiente',
              desc2: "m'adapter à l'élève et comprendre",
              desc3: "sa méthode d'apprentissage afin",
              desc4: "de l'aider à progresser au mieux.",
              btn1: "Prendre un cours avec ce Teach'r",
              btn2: "Retirer ce Teach'r de mes favoris",
              k: '3',
            },
            {
              src: 'https://lh3.googleusercontent.com/qJP_sjS2Z6HI4xw7SBFvLZyB6g43BuU3TL-23dOkOtmTVEOtJfQJ0aFXJPeyh9hFlWC2bg=s151',
              name: 'Betrand SAMBA',
              formation1: 'Poudlar',
              Formation: 'Formation',
              Description: 'Description',
              desc1: 'Calme et patiente',
              desc2: "m'adapter à l'élève et comprendre",
              desc3: "sa méthode d'apprentissage afin",
              desc4: "de l'aider à progresser au mieux.",
              btn1: "Prendre un cours avec ce Teach'r",
              btn2: "Retirer ce Teach'r de mes favoris",
              k: '4',
            },
            {
              src: 'https://lh3.googleusercontent.com/sMjhDgTIhJnoHPz77EUqKXBc6qqCZGlUhTUkzRhSkM0OYDNCwiYH_CqJbY7jei-P479wJw=s85',
              name: 'Michel Rougnouf',
              formation1: 'Poudlar',
              Formation: 'Formation',
              Description: 'Description',
              desc1: 'Calme et patiente',
              desc2: "m'adapter à l'élève et comprendre",
              desc3: "sa méthode d'apprentissage afin",
              desc4: "de l'aider à progresser au mieux.",
              btn1: "Prendre un cours avec ce Teach'r",
              btn2: "Retirer ce Teach'r de mes favoris",
              k: '5',
            },
            {
              src: 'https://lh3.googleusercontent.com/oNfaengyLJyOXQ-uMiyA3FZ4hoz9Hdfb53QAGLAw7E4P-NqJhlHw8jUIcgyq36yEhEna=s128',
              name: 'Vincent PIERRAUT',
              formation1: 'Aix-Marseille Université',
              Formation: 'Formation',
              Description: 'Description',
              desc1: 'Calme et patiente',
              desc2: "m'adapter à l'élève et comprendre",
              desc3: "sa méthode d'apprentissage afin",
              desc4: "de l'aider à progresser au mieux.",
              btn1: "Prendre un cours avec ce Teach'r",
              btn2: "Retirer ce Teach'r de mes favoris",
              k: '6',
            },
            {
              src: 'https://lh3.googleusercontent.com/-uV5ON9ZwMGvcVnMgRaAeBGEzdU43sHWPOM0jA6ul67tqZQI3b_tTfaq2Z7JjdskHQxTCxI=s85',
              name: 'Mathieu SARAIVA',
              formation1: 'Université de Picardie Jules-Verne ',
              Formation: 'Formation',
              Description: 'Description',
              desc1: 'Calme et patiente',
              desc2: "m'adapter à l'élève et comprendre",
              desc3: "sa méthode d'apprentissage afin",
              desc4: "de l'aider à progresser au mieux.",
              btn1: "Prendre un cours avec ce Teach'r",
              btn2: "Retirer ce Teach'r de mes favoris",
              k: '7',
            },
            {
              src: 'https://lh3.googleusercontent.com/iYFQw7NVhN9iHjlMjkOOdN4MO1kXc_5Y8pUnHPEfrTm9vWkfQ6ESO8tzEKvIR_2mUDlL_1g=s151',
              name: 'Morgane DA SILVA',
              formation1: 'Université Bordeaux Montaigne',
              Formation: 'Formation',
              Description: 'Description',
              desc1: 'Calme et patiente',
              desc2: "m'adapter à l'élève et comprendre",
              desc3: "sa méthode d'apprentissage afin",
              desc4: "de l'aider à progresser au mieux.",
              btn1: "Prendre un cours avec ce Teach'r",
              btn2: "Retirer ce Teach'r de mes favoris",
              k: '8',
            },
            {
              src: 'https://lh3.googleusercontent.com/MpBuCNx7XKyOW9NaDgTKiOZKBn-m5vgdMHC5cRxvzLsYjwSj-hz7u-HAFmJhxy314kAGhA=s152',
              name: 'Mellisa MARTIN',
              formation1: 'Université de Bordeaux',
              Formation: 'Formation',
              Description: 'Description',
              desc1: 'Calme et patiente',
              desc2: "m'adapter à l'élève et comprendre",
              desc3: "sa méthode d'apprentissage afin",
              desc4: "de l'aider à progresser au mieux.",
              btn1: "Prendre un cours avec ce Teach'r",
              btn2: "Retirer ce Teach'r de mes favoris",
              k: '9',
            },
            {
              src: 'https://lh3.googleusercontent.com/X_zWM4wCi1bc3tCd3cRDba_ZNv74MdsSoO_v6PFKysShc3CDu6jSChVmgEZgou-OC0q6GQ=s151',
              name: 'Zoé Renault',
              formation1: 'Université Clermont Auvergne',
              Formation: 'Formation',
              Description: 'Description',
              desc1: 'Calme et patiente',
              desc2: "m'adapter à l'élève et comprendre",
              desc3: "sa méthode d'apprentissage afin",
              desc4: "de l'aider à progresser au mieux.",
              btn1: "Prendre un cours avec ce Teach'r",
              btn2: "Retirer ce Teach'r de mes favoris",
              k: '10',
            },
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