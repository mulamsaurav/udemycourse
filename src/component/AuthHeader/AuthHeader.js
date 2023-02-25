import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Platform,
} from 'react-native';
import AndroidBackArrow from '../../assets/android-back.png';
import IOSBackArrow from '../../assets/ios-backIcon.png';
import {styles} from '../../component/AuthHeader/styles.js';

const AuthHeader = ({title, onBackPress}) => {
  return (
    <View style={styles.container}>
      <Pressable hitSlop={20} onPress={onBackPress}>
        <Image
          source={Platform.OS === 'ios' ? IOSBackArrow : AndroidBackArrow}
          style={styles.headerbackarrow}
        />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default React.memo(AuthHeader);
