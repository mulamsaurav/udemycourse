import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  Platform,
  Pressable,
  Linking,
} from 'react-native';
import React, {useContext, useState} from 'react';
import AndroidBackIcon from '../../assets/android-back.png';
import IosBackIcon from '.././../assets/ios-backIcon.png';
import ActiveFavIcon from '../../assets/tabs/bookmark_active.png';
import DeactiveFavIcon from '../../assets/tabs/bookmark.png';
import {styles} from './styles';
import Button from '../Button/Button';
import ImageCorousel from '../ImageCurousel/ImageCorousel';
import Config from 'react-native-config';
import {ServiceContext} from '../../../App.js';
import {updateService} from '../../utils/backEndCalls.js';

const ProductDetailScreen = ({navigation, route}) => {
  const {services, setServices} = useContext(ServiceContext);
  const [product, setProduct] = useState(route.params.products);
  const onContact = () => {
    //Make Phone call
    const phone = '1234567790';
    Linking.openURL(`tel:${phone}`);
    //Make mail
    const email = 'support@gmail.com';
    // Linking.openURL(`mailto:${email}`).catch(e => alert('cant Open'));
  };
  const onBookmark = async da => {
    console.log('adasd', product._id);
    const data = await updateService(product?._id, {liked: true});
    setServices(data);
    updateItems(product._id);
  };

  updateItems = _id => {
    services.map(value => {
      if (value?._id === _id) {
        setProduct(value);
      }
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{}}>
        {product?.images?.length ? (
          <ImageBackground
            source={{
              uri: `${Config.API_URL}/${product?.image?.path}`,
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
        ) : (
          // <ImageCorousel
          //   navigation={navigation}
          //   images={`${Config.API_BASE_URL}/${product?.image?.path}`}
          // />
          <ImageBackground
            source={{
              uri: `${Config.API_URL}/${product?.image?.path}`,
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
        )}
        <View style={styles.descContainer}>
          <Text style={styles.title}>{product?.title}</Text>
          <Text style={styles.price}>{product?.price}</Text>
          <Text style={styles.desc}>{product?.description}</Text>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Pressable style={styles.bottomImg} onPress={() => onBookmark()}>
          <Image
            source={product?.liked ? ActiveFavIcon : DeactiveFavIcon}
            style={styles.backIcon}
          />
        </Pressable>
        <Button
          style={styles.bottomBtn}
          title={'Contact Seller'}
          onPress={() => onContact()}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(ProductDetailScreen);
