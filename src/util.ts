function filterResponse<T>(response: any, keys: Array<keyof T>): T {
    const filtered: Partial<T> = {};
    keys.forEach(key => {
      if (key in response) {
        filtered[key] = response[key];
      }
    });
    return filtered as T;
  }

export default filterResponse;