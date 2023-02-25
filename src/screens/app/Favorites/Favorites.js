import React, {useContext} from 'react';
import {Alert, FlatList, Text, View} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../component/Header/Header';
import {products} from '../../../data/products';
import FavoriteItemsList from '../../../component/FavoriteItemsList/FavoriteItemsList';
import {ServiceContext} from '../../../../App.js';
import {getServices, updateService} from '../../../utils/backEndCalls.js';

const Favorites = ({navigation}) => {
  const {services, setServices} = useContext(ServiceContext);
  const likedServices = Array.isArray(services)
    ? services?.filter(service => service?.liked === true)
    : [];

  const renderFavoriteItem = ({item, index}) => {
    const onProductPress = () => {
      navigation.navigate('ProductDetails', {product: item});
    };
    const onRemove = async () => {
      const updatedServices = await updateService(item?._id, {liked: false});
      if (Array.isArray(updatedServices)) {
        setServices(updatedServices);
      }
    };
    const onIconPress = () => {
      Alert.alert(
        'Are you sure you want to remove this item from your favorites?',
        '',
        [{text: 'Yes', onPress: onRemove}, {text: 'Cancel'}],
      );
    };
    return (
      <FavoriteItemsList
        onPress={onProductPress}
        onIconPress={onIconPress}
        {...item}
      />
    );
  };

  return (
    <SafeAreaView>
      {/* <ScrollView contentContainerStyle={{flexGrow: 1, padding: 20}}> */}
      <Header title={'Favorite'} />

      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.productFlatList}
        data={likedServices}
        renderItem={renderFavoriteItem}
        keyExtractor={item => String(item?._id)}
        ListEmptyComponent={
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 20,
            }}>
            <Text style={{color: 'black', fontSize: 20, fontWeight: '500'}}>
              You don't have any Favorite yet!!!
            </Text>
          </View>
        }
        ListFooterComponent={<View style={{height: 50}} />}
      />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default React.memo(Favorites);
