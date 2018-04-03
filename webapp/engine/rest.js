import regeneratorRuntime from '../utils/regenerator-runtime.js';

import Engine from './Engine';

const METHOD = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE'
};

export default class rest {
  static _option = null

  static init = (option) => {
    rest._option = option;
  }

  static get = async (url, params) => {
    return await rest._fetch(METHOD.GET, url, params);
  }

  static put = async (url, params) => {
    return await rest._fetch(METHOD.PUT, url, params);
  }

  static post = async (url, params) => {
    return await rest._fetch(METHOD.POST, url, params);
  }

  static delete = async (url, params) => {
    return await rest._fetch(METHOD.DELETE, url, params);
  }

  static _fetch = (method, url, params) => {
    const request = Engine.getRequest();
    const endpoint = Engine.getEndpoint();

    return new Promise((resolve, reject) => {
      request({
        method,
        url: `${endpoint}/${url}`,
        data: params,
        header: {
            'content-type': 'application/json'
        },
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
