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
  classNameBindings: ['loaded', 'transition'],

  sanctuary: inject.service(),

  loaded: false,
  transition: true,

  didInsertElement() {
    get(this, 'sanctuary').on('applicationBecameReady', () => {
      set(this, 'loaded', true);

      window.setTimeout(() => {
        set(this, 'transition', false);
      }, 3600);
    });
  }
});
