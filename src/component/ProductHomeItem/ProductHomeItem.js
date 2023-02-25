import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import Config from 'react-native-config';

import {styles} from './styles';

const ProductHomeItem = ({title, image, onPress, price}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image
        source={{uri: `${Config.API_URL}/${image?.path}`}}
        style={styles.image}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>$ {price}</Text>
    </Pressable>
  );
};

export default React.memo(ProductHomeItem);
