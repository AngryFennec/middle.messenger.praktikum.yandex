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
  public get(url: string, options: OptionsType = {}): void {
    this.request(url, { ...options, method: METHODS.GET }, options.timeout);
  }

  public post(url: string, options: OptionsType = {}): void {
    this.request(url, { ...options, method: METHODS.POST }, options.timeout);
  }

  public put(url: string, options: OptionsType = {}): void {
    this.request(url, { ...options, method: METHODS.PUT }, options.timeout);
  }

  public delete(url: string, options: OptionsType = {}) {
    this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);
  }

  public request = (url, options: OptionsType = {}, timeout = 5000) => {
    const { headers = {}, method, data } = options;

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
        isGet && !!data
          ? `${url}${queryStringify(data)}`
          : url,
      );

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
