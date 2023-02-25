import React, {useContext, useState} from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
import AuthHeader from '../../../component/AuthHeader/AuthHeader';
import Input from '../../../component/Input/Input.js';
import Button from '../../../component/Button/Button.js';
import Separator from '../../../component/Seperator/Seperator.js';
import Googlelogin from '../../../component/GoogleLogin/Googlelogin.js';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {login} from '../../../utils/backEndCalls';
import {UserContext} from '../../../../App';

const Signin = ({navigation}) => {
  const [values, setValues] = useState({});
  const {setUser} = useContext(UserContext);
  const onBack = () => {
    navigation.goBack();
  };
  const onChange = (key, value) => {
    setValues(v => ({...v, [key]: value}));
  };
  const onSignin = async () => {
    try {
      if (!values.email || !values.password) {
        Alert.alert('Alert!', 'Please enter all fields');
        return;
      }
      const token = await login(values);
      setUser({token});
      console.log('token in login', token);
    } catch (e) {
      console.log('Error in Login', e);
    }
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <AuthHeader onBackPress={onBack} title="Sign In" />
        <Input
          value={values.email}
          onChangeText={v => onChange('email', v)}
          lable={'E-mail'}
          placeholder={'example@gmail.com'}
          style={styles.inputText}
        />
        <Input
          value={values.password}
          onChangeText={v => onChange('password', v)}
          isPassword
          lable={'Password'}
          placeholder={'**********'}
          style={styles.inputText}
        />
        <Button style={styles.button} title="Sign In" onPress={onSignin} />
        <Separator text="Or sign in with" />
        <Googlelogin />
        <Text style={styles.footerText}>
          Don't have an account?
          <Text
            onPress={() => navigation.navigate('Signup')}
            style={styles.footerLink}>
            {' '}
            Sign Up
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signin;
