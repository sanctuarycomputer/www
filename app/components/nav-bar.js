import Ember from 'ember';

const {
  get,
  set,
  inject,
  Component
} = Ember;

export default Component.extend({
  tagName: 'nav',
  classNames: ['nav-bar'],
  classNameBindings: ['loaded'],

  sanctuary: inject.service(),

  loaded: false,

  didInsertElement() {
    get(this, 'sanctuary').on('applicationBecameReady', () => {
      set(this, 'loaded', true);
    });
  }
});
