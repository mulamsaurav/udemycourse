import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';
import Routes from './Routes.js';
import {getServices} from './src/utils/backEndCalls.js';
import {addAccessTokenToAxios} from './src/utils/request.js';

export const UserContext = React.createContext();
export const ProfileContext = React.createContext();
export const ServiceContext = React.createContext([]);

const App = () => {
  const [user, setUser] = useState('');
  const [profile, setProfile] = useState('');
  const [services, setServices] = useState('');
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: Config.GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      iosClientId: Config.GOOGLE_IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });

    (async () => {
      const data = await getServices();
      console.log('App.js', data);
      setServices(data);
    })();
  }, []);

  return (
    <SafeAreaProvider>
      <UserContext.Provider value={{user, setUser}}>
        <ProfileContext.Provider value={{profile, setProfile}}>
          <ServiceContext.Provider value={{services, setServices}}>
            <Routes />
          </ServiceContext.Provider>
        </ProfileContext.Provider>
      </UserContext.Provider>
    </SafeAreaProvider>
  );
};
export default App;
