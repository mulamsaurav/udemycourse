import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import Icon from '../../assets/Frame.png';

const ListItems = ({title, subtitle, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Image source={Icon} style={styles.icon} />
    </Pressable>
  );
};

export default React.memo(ListItems);
