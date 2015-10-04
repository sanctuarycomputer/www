import Ember from 'ember';

const {
  get,
  inject,
  Component
} = Ember;

export default Component.extend({
  tagName: 'nav',
  classNames: ['nav-bar'],
  sanctuary: inject.service(),

  didInsertElement() {
    get(this, 'sanctuary').on('applicationBecameReady', () => {
      console.log('nav became ready');
    });
  }
});
