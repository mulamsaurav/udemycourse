import React, {useContext, useState} from 'react';
import {Image, Linking, Pressable, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from './../../../component/Header/Header.js';
import ListItem from '../../../component/ListItem/ListItems.js';
import EditableBox from '../../../component/EditableBox/EditableBox.js';
import Button from '../../../component/Button/Button.js';
import {ProfileContext} from '../../../../App.js';
import {updateProfile} from '../../../utils/backEndCalls.js';
import {useRoute} from '@react-navigation/native';

const Settings = ({navigation}) => {
  const route = useRoute();
  const [editing, setEditing] = useState(false);
  const {profileData, setProfile} = useContext(ProfileContext);
  const [values, setValues] = useState({
    _id: route.params.profileData?._id,
    fullName: route.params.profileData?.fullName,
    email: route.params.profileData?.email,
  });

  const onEditPress = () => {
    setEditing(true);
  };

  const onSave = async () => {
    const updatedProfile = await updateProfile(values);
    setProfile(updatedProfile);
    setEditing(false);
  };

  const onChange = (key, value) => {
    setValues(v => ({...v, [key]: value}));
  };

  const onItemPress = () => {
    Linking.openURL('https://google.com');
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header showBack onBackPress={goBack} title="Settings" />
      <ScrollView>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <Pressable onPress={onEditPress}>
            <Image
              style={styles.icon}
              source={require('../../../assets/edit.png')}
            />
          </Pressable>
        </View>
        <EditableBox
          label="Name"
          onChangeText={v => onChange('fullName', v)}
          value={values.fullName}
          editable={editing}
        />
        <EditableBox
          label="Email"
          onChangeText={v => onChange('email', v)}
          value={values.email}
          editable={false}
        />
        {editing ? (
          <Button style={styles.button} onPress={onSave} title="Save" />
        ) : null}

        <Text style={[styles.sectionTitle, {marginTop: 40}]}>Help Center</Text>
        <ListItem onPress={onItemPress} style={styles.item} title="FAQ" />
        <ListItem
          onPress={onItemPress}
          style={styles.item}
          title="Contact Us"
        />
        <ListItem
          onPress={onItemPress}
          style={styles.item}
          title="Privacy & Terms"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Settings);
