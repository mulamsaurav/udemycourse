import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import GoogleIcon from '../../assets/google.png';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const Googlelogin = () => {
    const handleGoogleLogin = async() =>{
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log('userInfo:>>',userInfo);
          } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
              console.log('user cancelled the login flow');
            } else if (error.code === statusCodes.IN_PROGRESS) {
              console.log('operation (e.g. sign in) is in progress already');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
              console.log('play services not available or outdated');
            } else {
              console.log('some other error happened');
            }
          }
    }
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={handleGoogleLogin} style={styles.container}>
            <Image source={GoogleIcon} style={styles.googleicon}/>
        </TouchableOpacity>
    )
}

export default React.memo(Googlelogin);