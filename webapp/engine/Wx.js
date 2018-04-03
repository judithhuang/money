import regeneratorRuntime from '../utils/regenerator-runtime.js';

export default class Wx {
  static _wx = null

  static init = (wx) => {
    Wx._wx = wx
  }

  static checkSession = () => {
    return new Promise((resolve, reject) => {
      Wx._wx.checkSession({
        success: (res) => {
          resolve(res);
        },
        fail: (res) => {
          reject(res);
        }
      })
    });
  }

  static openSetting = () => {
    return new Promise((resolve, reject) => {
      Wx._wx.openSetting({
        success: (res) => {
          resolve(res);
        },
        fail: (res) => {
          reject(res);
        }
      })
    });
  }

  static getUserInfo = () => {
    return new Promise((resolve, reject) => {
      Wx._wx.getUserInfo({
        success: (res) => {
          resolve(res);
        },
        fail: (res) => {
          reject(res);
        }
      })
    });
  }
}
