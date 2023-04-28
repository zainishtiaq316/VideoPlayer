import React, { useState } from 'react';
import { Dimensions, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Video from 'react-native-video';

const CustomVideoPlayer = () => {
  const [fullscreen, setFullscreen] = useState(false);
  const { width, height } = Dimensions.get('window');
  const videoWidth = fullscreen ? height : width;
  const videoHeight = fullscreen ? height : height * 0.4;


  const handleFullscreen = () => {
    setFullscreen(!fullscreen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/backward.png')} style={styles.icon} />
        <Image source={require('./assets/logo.jpg')} style={styles.logo} />
        <Image source={require('./assets/share.jpg')} style={styles.icon} />
        <Image source={require('./assets/fav.jpg')} style={styles.icon} />
      </View>
      <Video
  source={require('./assets/dummy_video.mp4')}
  style={[styles.videoPlayer, { width: videoWidth, height: videoHeight }]}
  resizeMode="contain"
  fullscreen={fullscreen}
  controls={true}
  onFullscreenPlayerWillPresent={handleFullscreen}
  onFullscreenPlayerWillDismiss={handleFullscreen}
/>
      <Text style={styles.videoTitle}>This is the title of the video</Text>
      <TouchableOpacity onPress={handleFullscreen}>
        <Text style={styles.fullscreenButton}>Fullscreen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: '#000000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  icon: {
    height: 40,
    width: 40,
  },
  logo: {
    height: 30,
    width: 100,
    resizeMode: 'contain',
  },
  videoTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  videoPlayer: {
    height: '100%',
  },
  fullscreenButton: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 10,
  },
});

export default CustomVideoPlayer;
