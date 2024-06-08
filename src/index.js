class CacheSystem {
    constructor() {
      this.cache = {};
    }
  
    set(key, value, expiresIn = null) {
      this.cache[key] = {
        value: value,
        expiresIn: expiresIn ? new Date().getTime() + expiresIn : null,
      };
    }
  
    get(key) {
      const item = this.cache[key];
      if (!item) return null;
      if (item.expiresIn && item.expiresIn < new Date().getTime()) {
        delete this.cache[key];
        return null;
      }
      return item.value;
    }
  
    remove(key) {
      delete this.cache[key];
    }
  
    clear() {
      this.cache = {};
    }
  }
  
  module.exports = CacheSystem;