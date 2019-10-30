import React from "react";
import {View, Text} from "react-native";
import {Button} from "react-native-elements";

import Sound from "react-native-sound";

Sound.setCategory("Playback");

const radioStream = "http://108.59.11.81:8339/stream?type=http&nocache=8;";

export default function RadioScreen(props) {
  const ref = React.useRef(null);
  function initAndPlay() {
    const whoosh = new Sound(radioStream, Sound.MAIN_BUNDLE, error => {
      if (error) {
        return;
      }
      ref.current = whoosh;
      whoosh.play();
    });
  }

  React.useEffect(() => {
    const whoosh = new Sound(radioStream, Sound.MAIN_BUNDLE, error => {
      if (error) {
        return;
      }
      ref.current = whoosh;
    });
  }, []);

  function play() {
    const whoosh = ref.current;
    if (!whoosh) {
      initAndPlay();
      return;
    }
    whoosh.play();
  }

  function pause() {
    const whoosh = ref.current;
    if (!whoosh) {
      return;
    }
    whoosh.pause();
  }

  function stop() {
    const whoosh = ref.current;
    whoosh.stop(() => {
      whoosh.release();
      ref.current = null;
    });
  }

  // const whoosh = new Sound(radioStream, Sound.MAIN_BUNDLE)

  return (
    <View>
      <Text>Votre radio 24/24</Text>
      {/* <Video audioOnly playInBackground playWhenInactive source={{uri: radioStream}} /> */}
      <View>
        <Button title="Play" onPress={play} />
        <Button title="Pause" onPress={pause} />
        <Button title="Stop" onPress={stop} />
      </View>
    </View>
  );
}

RadioScreen.navigationOptions = {
  title: "Radio Pacific 101.5 fm - Live",
};

// import React, {Component} from "react";
// import {SafeAreaView, Text, View, Alert, Button, Switch} from "react-native";
// import {Sound} from "react-native-sound";

// class Radio extends React.Component {
//   constructor(props) {
//     super(props);

//     Sound.setCategory("Playback", true); // true = mixWithOthers

//     this.state = {
//       sound: {},
//       isLoop: false,
//     };
//   }

//   componentDidMount() {
//     const testInfo = {
//       title: "wav remote download",
//       url: "http://ia802609.us.archive.org/13/items/quraninindonesia/001AlFaatihah.mp3",
//     };

//     const sound = new Sound(testInfo.url, "", error => {
//       if (error) {
//         Alert.alert("error", error.message);
//       }
//     });

//     this.setState({
//       sound,
//     });
//   }

//   _play = () => {
//     // eslint-disable-next-line react/destructuring-assignment
//     this.state.sound.play(() => {
//       // eslint-disable-next-line react/destructuring-assignment
//       this.state.sound.release();
//     });
//   };

//   _pause = () => {
//     // eslint-disable-next-line react/destructuring-assignment
//     this.state.sound.pause();
//   };

//   _stop = () => {
//     // eslint-disable-next-line react/destructuring-assignment
//     this.state.sound.stop();
//   };

//   _toggleLoop = value => {
//     console.log(value);
//     if (value) {
//       // eslint-disable-next-line react/destructuring-assignment
//       this.state.sound.setNumberOfLoops(-1); // loop infinite
//     } else {
//       // eslint-disable-next-line react/destructuring-assignment
//       this.state.sound.setNumberOfLoops(0); // no loop
//     }

//     this.setState({
//       isLoop: value,
//     });
//   };

//   render() {
//     return (
//       <SafeAreaView style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
//         <Button title="Play" onPress={this._play} />
//         <Button title="Pause" onPress={this._pause} />
//         <Button title="Stop" onPress={this._stop} />
//         <Switch onValueChange={value => this._toggleLoop(value)} value={this.state.isLoop} />
//       </SafeAreaView>
//     );
//   }
// }

// export default Radio;
