import AsyncStorage from '@react-native-community/async-storage';
import configs from 'configs';

export const KEYS = {
  ACCESS_TOKEN: 'ACCESS_TOKEN',
  USER_ID: 'USER_ID',
};

export const setItem = async (key, item) => {
  let stringItem = item;
  if ((typeof item) !== 'string') {
    stringItem = item.toString();
  }
  await AsyncStorage.setItem(`${configs.storagePrefix}${key}`, stringItem);
};

export const getItem = async (key) => {
  const value = await AsyncStorage.getItem(`${configs.storagePrefix}${key}`);
  return value;
};
