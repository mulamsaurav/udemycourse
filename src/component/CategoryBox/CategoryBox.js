import React, {useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';

import {styles} from '../../component/CategoryBox/styles.js';

const CategoryBox = ({title, image, onPress, isSelected}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View
        style={[
          styles.imageContainer,
          isSelected ? {backgroundColor: 'black'} : {},
        ]}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <Text style={[styles.title, isSelected ? {fontWeight: 'bold'} : {}]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default React.memo(CategoryBox);
