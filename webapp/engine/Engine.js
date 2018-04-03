import Wx from './Wx';

export default class Engine {
  static _option = null

  static init = (option) => {
    Engine._option = option;
    Wx.init(option.wx);
    console.log('engine init success', Engine._option)
  }

  static getWx = () => {
    return Engine._option.wx;
  }

  static getRequest = () => {
    return Engine._option.wx.request;
  }

  static getEndpoint = () => {
    return Engine._option.ajaxDomain;
  }
}
