import React, {useContext, useEffect} from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from './src/utils/colors.js';
import Splashscreen from './src/screens/auth/Splash/Splashscreen.js';
import Signup from './src/screens/auth/SignUp/Signup.js';
import Signin from './src/screens/auth/SignIn/Signin.js';
import Home from './src/screens/app/Home/Home.js';
import Profile from './src/screens/app/Profile/Profile.js';
import Favorites from './src/screens/app/Favorites/Favorites.js';
import ProductDetailScreen from './src/component/ProductDetailScreen/ProductDetailScreen.js';
import Settings from './src/screens/app/Settings/Settings.js';
import CreateListing from './src/screens/app/CreateListing/CreateListing.js';
import MyListings from './src/screens/app/MyListings/MyListings.js';
import {UserContext} from './App.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {addAccessTokenToAxios} from './src/utils/request.js';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Routes = () => {
  const Tabs = () => (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let icon;

          if (route.name === 'Home') {
            icon = focused
              ? require('./src/assets/tabs/home_active.png')
              : require('./src/assets/tabs/home.png');
          } else if (route.name === 'ProfileStack') {
            icon = focused
              ? require('./src/assets/tabs/profile_active.png')
              : require('./src/assets/tabs/profile.png');
          } else if (route.name === 'Favorites') {
            icon = focused
              ? require('./src/assets/tabs/bookmark_active.png')
              : require('./src/assets/tabs/bookmark.png');
          }

          // You can return any component that you like here!
          return <Image style={{width: 24, height: 24}} source={icon} />;
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          borderTopColor: colors.lightGrey,
          // height: '10%',
          // width: '100%',
          backgroundColor: 'white',
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
    </Tab.Navigator>
  );

  const ProfileStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateListing"
          component={CreateListing}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyListings"
          component={MyListings}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };
  const {user, setUser} = useContext(UserContext);

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem('auth_token');
      setUser({token});
    })();
  }, []);

  // useEffect(() => {
  //   if (user?.token) {
  //     console.log('accessToken header', user?.token);
  //     addAccessTokenToAxios(user?.token);
  //   }
  // }, [user]);

  const theme = {
    colors: {
      background: colors.white,
    },
  };

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        {user?.token ? (
          <>
            <Stack.Screen
              name="Tabs"
              component={Tabs}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ProductDetailScreen"
              component={ProductDetailScreen}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Splashscreen"
              component={Splashscreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Signin"
              component={Signin}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default React.memo(Routes);
