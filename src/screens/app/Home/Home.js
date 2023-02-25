import React, {useCallback, useContext, useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../component/Header/Header.js';
import {categories} from '../../../data/categories.js';
// import {products} from '../../../data/products';
import CategoryBox from '../../../component/CategoryBox/CategoryBox';
import ProductHomeItem from '../../../component/ProductHomeItem/ProductHomeItem';
import {ServiceContext, UserContext} from '../../../../App.js';
import {getServices} from '../../../utils/backEndCalls.js';
import {addAccessTokenToAxios} from '../../../utils/request.js';

const Home = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [keyword, setKeyword] = useState();
  const [products, setProducts] = useState(services);
  const [filteredProduct, setFilteredProduct] = useState(products);
  const {services, setServices} = useContext(ServiceContext);
  const {user, setUser} = useContext(UserContext);
  useEffect(() => {
    (async () => {
      if (user?.token) {
        addAccessTokenToAxios(user?.token);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const data = await getServices();
      setProducts(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (selectedCategory && !keyword) {
        const updatedProduct = products.filter(
          product => String(product.category) === String(selectedCategory),
        );
        setFilteredProduct(updatedProduct);
      } else if (selectedCategory && keyword) {
        const updatedProduct = products.filter(
          product =>
            String(product.category) === String(selectedCategory) &&
            product?.title.toLowerCase().includes(keyword?.toLowerCase()),
        );
        setFilteredProduct(updatedProduct);
      } else if (!selectedCategory && keyword) {
        const updatedProduct = products.filter(product =>
          product?.title.toLowerCase().includes(keyword?.toLowerCase()),
        );
        setFilteredProduct(updatedProduct);
      } else if (!selectedCategory && !keyword) {
        setFilteredProduct(products);
      }
    })();
  }, [selectedCategory, keyword, products]);

  const renderCategoryItem = ({item, index}) => {
    return (
      <CategoryBox
        onPress={() => setSelectedCategory(item?.id)}
        isSelected={item?.id === selectedCategory}
        title={item?.title}
        image={item?.image}
      />
    );
  };
  const renderProductHomeItem = ({item, index}) => {
    return (
      <ProductHomeItem
        onPress={() =>
          navigation.navigate('ProductDetailScreen', {products: item})
        }
        {...item}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header onSearch={setKeyword} title="Find All You Need" showSearch />
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={styles.list}
        horizontal
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item, index) => String(index)}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.productFlatList}
        data={filteredProduct}
        numColumns={2}
        renderItem={renderProductHomeItem}
        keyExtractor={item => String(item?._id)}
        ListFooterComponent={<View style={{height: 150}} />}
      />
    </SafeAreaView>
  );
};

export default Home;
