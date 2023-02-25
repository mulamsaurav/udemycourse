import React, {useEffect, useContext, useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../component/Header/Header';
import ListItems from '../../../component/ListItem/ListItems';
import Button from '../../../component/Button/Button';
import {getProfile} from '../../../utils/backEndCalls';

const Profile = ({navigation}) => {
  const num = 10;
  const [values, setValues] = useState({});
  useEffect(() => {
    try {
      (async () => {
        const data = await getProfile();
        setValues(data);
      })();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const onLogout = () => {
    console.log('Logout Click');
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={'Profile'} showLogout onLogout={onLogout} />
      <View style={styles.topContainer}>
        <Text style={styles.name}>{values?.fullName}</Text>
        <Text style={styles.email}>{values?.email}</Text>
        <ListItems
          onPress={() => navigation.navigate('MyListings')}
          title={'My Listing'}
          subtitle={`You already have ${num} Listing`}
        />
        <ListItems
          onPress={() => navigation.navigate('Settings', {profileData: values})}
          title={'Settings'}
          subtitle={'Account, FAQ, Contact Us'}
        />
      </View>
      <Button
        onPress={() => navigation.navigate('CreateListing')}
        style={styles.button}
        title={'Add new Listing'}
      />
    </SafeAreaView>
  );
};

export default React.memo(Profile);
