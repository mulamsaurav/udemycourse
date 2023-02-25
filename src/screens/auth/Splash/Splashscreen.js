import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import SplashImage from '../../../assets/splash_image.png';
import Button from '../../../component/Button/Button.js';
import {styles} from './styles';

const Splashscreen = ({navigation}) => {
  const onSignup = () => {
    navigation.navigate('Signup');
  };
  return (
    <View style={styles.container}>
      <Image source={SplashImage} resizeMode={'contain'} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>You'll Find</Text>
        <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
        <Text style={styles.title}>Here!</Text>
      </View>
      <Button onPress={onSignup} title="Sign Up" />
      <Pressable
        onPress={() => {
          navigation.navigate('Signin');
        }}>
        <Text style={styles.footerText}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default Splashscreen;
