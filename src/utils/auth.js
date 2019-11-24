import { getItem, setItem, KEYS } from 'utils/storage';

class Authentication {
  constructor() {
    this.accessToken = null;
    this.userId = null;
  }

  async setAuth(token, userId) {
    await setItem(KEYS.ACCESS_TOKEN, token);
    await setItem(KEYS.USER_ID, userId);
    this.accessToken = token;
    this.userId = userId;
  }

  getAccessToken() {
    return this.accessToken;
  }

  getUserId() {
    return this.userId;
  }

  isAuth() {
    return !!this.accessToken;
  }

  async updateAccessToken() {
    const token = await getItem(KEYS.ACCESS_TOKEN);
    this.accessToken = token;
    return token;
  }

  async updateUserId() {
    const userId = await getItem(KEYS.USER_ID);
    this.userId = userId;
    return userId;
  }

  deleteAuth() {
    this.accessToken = null;
    this.userId = null;
    setItem(KEYS.ACCESS_TOKEN, '');
    setItem(KEYS.USER_ID, '');
  }
}

const Auth = new Authentication();
export default Auth;
