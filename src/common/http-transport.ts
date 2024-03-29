import { BASE_URL } from './constants';

const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

interface OptionsType {
  method?: string;
  timeout?: number;
  headers?: any;
  data?: any;
}

function queryStringify(data: string): string {
  if (!data) {
    return '';
  }
  const arr = Object.entries(data);
  const res = [];
  arr.forEach((item: [string, any]) => {
    if (typeof item[1] === 'object' && Array.isArray(item[1])) {
      res.push(`${item[0]}=${item[1].join(',')}`);
    } else if (typeof item[1] === 'object') {
      res.push(`${item[0]}=[object Object]`);
    } else {
      res.push(`${item[0]}=${item[1]}`);
    }
  });

  return `?${res.join('&')}`;
}

export default class HTTPTransport {
  private static instance: any;

  private base: string;

  constructor(baseUrl: string = BASE_URL) {
    if (HTTPTransport.instance) {
      return HTTPTransport.instance;
    }
    HTTPTransport.instance = this;
    this.base = baseUrl;
  }

  public get(url: string, options: OptionsType = {}): Promise<any> {
    return this.request(`${this.base}${url}${queryStringify(options.data)}`,
      { ...options, method: METHODS.GET },
      options.timeout);
  }

  public post(url: string, options: OptionsType = {}): Promise<any> {
    return this.request(`${this.base}${url}`, { ...options, method: METHODS.POST }, options.timeout);
  }

  public put(url: string, options: OptionsType = {}): Promise<any> {
    return this.request(`${this.base}${url}`, { ...options, method: METHODS.PUT }, options.timeout);
  }

  public delete(url: string, options: OptionsType = {}): Promise<any> {
    return this.request(`${this.base}${url}`, { ...options, method: METHODS.DELETE }, options.timeout);
  }

  private request(url, options: OptionsType = {}, timeout = 5000): Promise<any> {
    const { headers = { 'content-type': 'application/json' }, method, data } = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('No method');
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      xhr.open(
        method,
        url,
      );
      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.withCredentials = true;
      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;
      xhr.onload = () => {
        resolve(xhr);
      };
      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  }
}
