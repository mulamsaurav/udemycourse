import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Dimensions,
  View,
  Pressable,
  Platform,
} from 'react-native';
import {styles} from './styles';
import AndroidBackIcon from '../../assets/android-back.png';
import IosBackIcon from '.././../assets/ios-backIcon.png';

const {width} = Dimensions.get('window');

const ImageCarousel = ({images, navigation}) => {
  console.log('navigation', navigation);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScrollEnd = e => {
    const horizontalOffset = e.nativeEvent.contentOffset.x;
    const index = Math.round(horizontalOffset / width);

    setActiveIndex(index);
  };

  const renderImage = ({item}) => {
    return (
      <ImageBackground
        source={{
          uri: item,
        }}
        style={styles.image}>
        <Pressable
          style={styles.backIconContainer}
          onPress={() => navigation.goBack()}>
          <Image
            source={Platform.OS === 'ios' ? IosBackIcon : AndroidBackIcon}
            style={styles.backIcon}
          />
        </Pressable>
      </ImageBackground>
    );
  };

  return (
    <View>
      <FlatList
        horizontal
        pagingEnabled
        style={styles.list}
        data={images}
        renderItem={renderImage}
        onMomentumScrollEnd={handleScrollEnd}
      />

      <View style={styles.pagination}>
        {images?.map((_, i) => (
          <View
            key={i}
            style={[
              styles.paginationLine,
              i === activeIndex ? styles.activeLine : {},
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default React.memo(ImageCarousel);
