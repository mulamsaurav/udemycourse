import AsyncStorage from '@react-native-async-storage/async-storage';
import {request} from './request';

export const login = async values => {
  try {
    const response = await request({
      // header: {'Content-Type': 'application/json'},
      url: '/user/login',
      method: 'POST',
      data: values,
    });
    if (response?.data?.token) {
      await AsyncStorage.setItem('auth_token', response?.data?.token);
      return response?.data?.token;
    }
  } catch (e) {
    console.log('error in login', JSON.stringify(e?.response));
    console.log('error in login backend', e);
  }
};
export const signup = async values => {
  try {
    const response = await request({
      // header: {'Content-Type': 'application/json'},
      url: '/user/register',
      method: 'POST',
      data: values,
    });
    if (response) {
      const {email, password} = values;
      const loginResponse = await login({email, password});
      return loginResponse;
    }
  } catch (e) {
    console.log('error in signup', JSON.stringify(e?.response));
    console.log('error in signup backend', e);
  }
};

export const getProfile = async () => {
  try {
    const response = await request({
      url: '/user/profile',
      method: 'get',
    });

    if (response) {
      return response?.data;
    }
  } catch (e) {
    console.log('e profile :>> ', e);
    return e.response?.data;
  }
};

export const updateProfile = async data => {
  try {
    const response = await request({
      url: '/user/profile',
      method: 'patch',
      data,
    });

    if (response) {
      const profile = await getProfile();
      return profile;
    }
  } catch (e) {
    console.log('e profile :>> ', e);
  }
};

export const getServices = async () => {
  try {
    const response = await request({
      url: '/services',
      method: 'get',
    });

    if (response) {
      return response?.data;
    }
  } catch (e) {
    console.log('e services :>> ', e.response);
    return e.response?.data;
  }
};

export const updateService = async (id, data) => {
  try {
    const response = await request({
      url: '/services',
      method: 'patch',
      data: {
        servicesId: id,
        ...data,
      },
    });

    if (response) {
      const services = await getServices();
      return services;
    }
  } catch (e) {
    console.log('e services :>> ', e.response);
  }
};

export const addService = async data => {
  console.log(data);
  try {
    const formData = new FormData();
    const objKeys = Object.keys(data);
    console.log('objKeys :>> ', objKeys);
    objKeys.forEach(key => {
      formData.append(key, data[key]);
    });
    const response = await request({
      url: '/services',
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    });

    if (response) {
      const services = await getServices();
      return services;
    }
  } catch (e) {
    console.log('e add services :>> ', e);
    console.log('e add services :>> ', e.response);
  }
};
