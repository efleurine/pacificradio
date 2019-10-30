import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {WebView} from "react-native-webview";
import Video from "react-native-video";



const tvStream = "https://hbiptv.live/pacific54/index.m3u8";

const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>Your live TV</title>

  </head>

  <body>
    <div class="plyr__video-embed" id="player">
    <iframe
    src="https://hbiptv.live/pacific54/index.m3u8"
        allowfullscreen
        allowtransparency
        allow="autoplay"
    ></iframe>
  </div>
  </body>
  <script src="https://cdn.plyr.io/3.5.6/plyr.polyfilled.js"></script>
</html>


`;

export default function TvScreen() {
  const webview = React.useRef(null);


  function injectJSFileFromWeb() {

    const fp = `
        var corescript = document.createElement('script');
        corescript.type = 'text/javascript';
        corescript.src = "https://cdn.plyr.io/3.5.6/plyr.js";
        var parent = document.getElementsByTagName('head').item(0);
        parent.appendChild(corescript);
        void(0);
    `;
    webview.current.injectJavaScript(fp);
  }


  return (
    <View style={styles.flex}>
      <WebView
        ref={ ref => webview.current = ref }
        originWhitelist={["*"]}
        source={{html}}
        javaScriptEnabled
        // source={{uri: tvStream}}
        // onLoad={() => { injectJSFileFromWeb() }}
      />
      {/* <Video
        style={styles.backgroundVideo}
        playInBackground
        playWhenInactive
        controls
        source={{uri: tvStream}}
      /> */}
    </View>
  );
}

TvScreen.navigationOptions = {
  title: "Tele Pacific Chaine 54 - Live",
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
