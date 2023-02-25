import React, {useContext, useState} from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
import AuthHeader from '../../../component/AuthHeader/AuthHeader.js';
import Checkbox from '../../../component/Checkbox/Checkbox.js';
import Input from '../../../component/Input/Input.js';
import Button from '../../../component/Button/Button.js';
import {styles} from './styles';
import Separator from '../../../component/Seperator/Seperator.js';
import Googlelogin from '../../../component/GoogleLogin/Googlelogin.js';
import {SafeAreaView} from 'react-native-safe-area-context';
import {UserContext} from '../../../../App.js';
import {signup} from '../../../utils/backEndCalls.js';

const Signup = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const [values, setValues] = useState({});
  const {setUser} = useContext(UserContext);

  const onSignup = async () => {
    try {
      if (
        !values.fullName ||
        !values.email ||
        !values.password ||
        !values.confirmPassword
      ) {
        Alert.alert('Alert!', 'Please enter all fields');
        return;
      }
      if (values.password !== values.confirmPassword) {
        Alert.alert('Alert!', 'Password not match');
        return;
      }
      if (!checked) {
        Alert.alert('Alert!', 'Please check the terms and conditions');
        return;
      }
      const token = await signup(values);
      setUser({token});
      console.log('token in signup', token);
    } catch (e) {
      console.log('Error in Signup', e);
    }
  };
  const onSignIn = () => {
    navigation.navigate('Signin');
  };
  const onBack = () => {
    navigation.goBack();
  };
  const onChange = (key, value) => {
    setValues(v => ({...v, [key]: value}));
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <AuthHeader onBackPress={onBack} title="Sign Up" />
        <Input
          value={values.fullName}
          onChangeText={v => onChange('fullName', v)}
          lable={'Name'}
          placeholder={'John Doe'}
          style={styles.inputText}
        />
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
        <Input
          value={values.confirmpassword}
          onChangeText={v => onChange('confirmPassword', v)}
          isPassword
          lable={'Confrim Password'}
          placeholder={'**********'}
          style={styles.inputText}
        />
        <View style={styles.agreeRow}>
          <Checkbox checked={checked} onCheck={setChecked} />
          <Text style={styles.agreeText}>
            I agree with <Text style={styles.agreeTextBold}>Terms</Text> &{' '}
            <Text style={styles.agreeTextBold}>Privacy</Text>
          </Text>
        </View>
        <Button
          onPress={() => onSignup()}
          style={styles.button}
          title="Sign Up"
        />
        <Separator text="Or sign up with" />
        <Googlelogin />
        <Text style={styles.footerText}>
          Already have an account?
          <Text onPress={onSignIn} style={styles.footerLink}>
            {' '}
            Sign In
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
