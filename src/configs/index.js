/* eslint-disable import/no-extraneous-dependencies */
import deepFreeze from 'deep-freeze';
import { REACT_APP_ENV } from 'react-native-dotenv';

import baseConfig from './base';
import localConfig from './local';
import devConfig from './dev';
import prodConfig from './prod';

const env = REACT_APP_ENV;
let envConfig = {};
if (env === 'development') {
  envConfig = devConfig;
} else if (env === 'production') {
  envConfig = prodConfig;
} else {
  envConfig = localConfig;
}

const configs = {
  ...baseConfig,
  ...envConfig,
};

deepFreeze(configs);

export default configs;
