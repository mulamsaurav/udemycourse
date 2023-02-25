import React, {useState} from 'react';
import {Pressable, Text, View, Image} from 'react-native';
import {styles} from './styles';
import Config from 'react-native-config';

const FavoriteItemsList = ({
  title,
  icon,
  price,
  image,
  onPress,
  onIconPress,
}) => {
  console.log('List', title);
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: `${Config.API_URL}/${image?.path}`}}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>

      <Pressable onPress={onIconPress}>
        <Image
          source={icon ? icon : require('../../assets/close.png')}
          style={styles.icon}
        />
      </Pressable>
    </Pressable>
  );
};

export default React.memo(FavoriteItemsList);
