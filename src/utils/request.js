import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Config from 'react-native-config';

export const request = ({url, method, data}) => {
  return axios({
    method: method || 'get',
    url: `${Config.API_URL}${url}`,
    data: data,
    // headers,
  });
};

export const addAccessTokenToAxios = async token => {
  axios.defaults.headers.Authorization = token;
};

const API = Config.API_URL;

export const axiosSetup = async () => {
  const token = await AsyncStorage.getItem('auth_token');
  console.log('sadjaksdjaksdha ', token);
  axios.defaults.baseURL = API;
  axios.defaults.withCredentials = true;
  axios.defaults.headers.Authorization = token;
};
