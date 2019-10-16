import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
 
import { SliderBox } from 'react-native-image-slider-box';
import MarqueeText from 'react-native-marquee';
 
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        '../assets/images/sla.png',
        'https://source.unsplash.com/1024x768/?water',
        'https://source.unsplash.com/1024x768/?girl',
        'https://source.unsplash.com/1024x768/?tree'
      ]
    };
  }
 
  render() {
    return (
      <View style={styles.container}>
      <SliderBox
    images={this.state.images}
    onCurrentImagePressed={index =>
        console.warn(`image ${index} pressed`)
    }
    dotColor="#FFEE58"
    inactiveDotColor="#90A4AE"
/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: '30%',  backgroundColor: 'red'}}>
        <MarqueeText
          style={{ fontSize: 20 }}
          duration={6000}
          marqueeOnStart
          loop
          marqueeDelay={2000}
          marqueeResetDelay={2000}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry and typesetting industry.
        </MarqueeText>
      </View>

       <View>

       </View>

      </View>
    );
  };
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
 
    marquee: {
      flex: 1,
      height:250,
      justifyContent: 'center',
      backgroundColor: 'red'
    }
});