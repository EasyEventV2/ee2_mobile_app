import { AsyncStorage } from 'react-native';
import configs from 'configs';

export const KEYS = {
  ACCESS_TOKEN: 'ACCESS_TOKEN',
};

export const setItem = async (key, item) => {
  let stringItem = item;
  if ((typeof item) !== 'string') {
    stringItem = item.toString();
  }
  await AsyncStorage.setItem(`${configs.storagePrefix}${key}`, stringItem);
};

export const getItem = async (key) => {
  const value = await AsyncStorage.getItem(key);
  return value;
};
