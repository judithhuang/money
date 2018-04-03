//app.js
import regeneratorRuntime from './utils/regenerator-runtime.js';
import Config from './Config';
import { Engine, Wx } from './engine/index';

App({
  onLaunch: function () {
    Engine.init({
      ajaxDomain: Config.ajaxDomain,
      wx: wx
    });
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo: async function(cb){
    var that = this

    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      await Wx.openSetting();
      const result = await Wx.getUserInfo();
      this.globalData.userInfo = result.userInfo
      typeof cb == "function" && cb(that.globalData.userInfo)
    }
  },
  globalData:{
    userInfo:null
  }
})
