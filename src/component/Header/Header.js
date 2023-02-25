import React, {useState} from 'react';
import {Image, View, Text, Platform, Pressable} from 'react-native';
import HeaderAndroidBackArrowIcon from '../../assets/android-back.png';
import HeaderIosBackArrowIcon from '../../assets/ios-backIcon.png';
import HeaderSearchIcon from '../../assets/search.png';
import LogoutIcon from '../../assets/logout.png';
import {styles} from '../../component/Header/styles.js';
import Input from '../Input/Input';

const Header = ({
  title,
  onBackPress,
  onLogout,
  showLogout,
  showSearch,
  onSearch,
  showBack,
}) => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const onSearchClick = () => {
    setShowSearchInput(!showSearchInput);
  };
  const onLogoutPress = () => {
    console.log('Logout Icon Press');
  };

  return (
    <View>
      <View style={styles.container}>
        {showBack ? (
          <Pressable hitSlop={20} onPress={onBackPress}>
            <Image
              source={
                Platform.OS === 'ios'
                  ? HeaderIosBackArrowIcon
                  : HeaderAndroidBackArrowIcon
              }
              style={styles.icons}
            />
          </Pressable>
        ) : showSearch ? (
          <Pressable hitSlop={20} onPress={onSearchClick}>
            <Image source={HeaderSearchIcon} style={styles.icons} />
          </Pressable>
        ) : (
          <View style={styles.Empty_Icon_Space} />
        )}
        <Text style={styles.title}>{title}</Text>

        {showLogout ? (
          <Pressable hitSlop={20} onPress={onLogoutPress}>
            <Image source={LogoutIcon} style={styles.icons} />
          </Pressable>
        ) : (
          <View style={styles.Empty_Icon_Space} />
        )}
      </View>
      {showSearchInput ? (
        <Input onChangeText={onSearch} placeholder={'Search...'} />
      ) : null}
    </View>
  );
};

export default React.memo(Header);
