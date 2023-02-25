import React, {useContext} from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../component/Header/Header';
import FavoriteItemsList from '../../../component/FavoriteItemsList/FavoriteItemsList';
import {ProfileContext, ServiceContext} from '../../../../App.js';

const MyListings = ({navigation}) => {
  const {services, setServices} = useContext(ServiceContext);
  const {profile} = useContext(ProfileContext);
  const myServices = Array.isArray(services)
    ? services?.filter(service => service?.owner === profile?._id)
    : [];
  console.log('adasd', myServices);
  const renderFavoriteItem = ({item, index}) => {
    const onProductPress = () => {
      navigation.navigate('ProductDetails', {product: item});
    };
    const onRemove = async () => {
      const updatedServices = await deleteService(item?._id);
      setServices(updatedServices);
    };
    return (
      <FavoriteItem
        onIconPress={onRemove}
        icon={require('../../../assets/delete.png')}
        onPress={onProductPress}
        {...item}
      />
    );
  };
  const onHeaderBackPress = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      {/* <ScrollView contentContainerStyle={{flexGrow: 1, padding: 20}}> */}
      <Header title={'My Listings'} showBack onBackPress={onHeaderBackPress} />

      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.productFlatList}
        data={services}
        renderItem={renderFavoriteItem}
        keyExtractor={item => String(item?._id)}
        ListFooterComponent={<View style={{height: 150}} />}
      />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default React.memo(MyListings);
