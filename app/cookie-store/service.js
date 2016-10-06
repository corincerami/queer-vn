import Ember from 'ember';

export default Ember.Service.extend({
  cookieService: Ember.inject.service('cookies'),

  push(key, element) {
    const cookieService = this.get('cookieService');
    let value = this.arrayify(cookieService.read(key));
    value.push(element);
    value = value.join(',');
    cookieService.write(key, value);
  },

  getArray(key) {
    const cookieService = this.get('cookieService');
    return this.arrayify(cookieService.read(key));
  },

  clear(key) {
    const cookieService = this.get('cookieService');
    cookieService.clear(key);
  },

  clearAll() {
    const cookieService = this.get('cookieService');
    Object.keys(cookieService.read()).forEach((key) => {
      this.clear(key);
    });
  },

  arrayify(value) {
    if (value) {
      return value.split(',');
    } else {
      return [];
    }
  }
});