import React, {Component} from 'react';
import {SafeAreaView, Text, View, Alert, Button, Switch} from 'react-native';
import Sound from 'react-native-sound';

class Radio extends React.Component {
  constructor(props) {
    super(props);

    Sound.setCategory('Playback', true); // true = mixWithOthers

    this.state = {
      sound: {},
      isLoop: false
    };
  }

  componentDidMount() {
    const testInfo = {
      title: 'wav remote download',
      url: 'http://ia802609.us.archive.org/13/items/quraninindonesia/001AlFaatihah.mp3',
    }

    const sound = new Sound(testInfo.url, '', error => {
      if (error) {
        Alert.alert('error', error.message);
      }
    })

    this.setState({
      sound
    })
  }

  _play = () => {
    this.state.sound.play(() => {
      this.state.sound.release();
    });
  }
  _pause = () => {
    this.state.sound.pause()
  }

  _stop = () => {
    this.state.sound.stop()
  }

  _toggleLoop = (value) => {
    console.log(value)
    if (value) {
      this.state.sound.setNumberOfLoops(-1) // loop infinite
    } else {
      this.state.sound.setNumberOfLoops(0) // no loop
    }

    this.setState({
      isLoop: value
    })
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button title={'Play'} onPress={this._play} />
        <Button title={'Pause'} onPress={this._pause} />
        <Button title={'Stop'} onPress={this._stop} />
        <Switch onValueChange={(value) => this._toggleLoop(value)} value={this.state.isLoop} />
      </SafeAreaView>
    );
  }
}

export default App;