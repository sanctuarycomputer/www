import Ember from 'ember';
import dynamics from 'dynamics';
import ResizeAware from 'ember-resize/mixins/resize-aware';

const {
  get,
  set,
  inject,
  Component
} = Ember;

export default Component.extend(ResizeAware, {
  classNames: ['loader-panel'],
  sanctuary: inject.service(),

  revealed: false,

  didInsertElement() {
    get(this, 'sanctuary').on('applicationBecameReady', () => {
      console.log('loader panel became ready');
      this.show(false);
    });
  },

  _animateTo(value=0, element) {
    let options = {
      type: dynamics.gravity,
      duration: 1800,
      bounciness: 800,
      elasticity: 50
    };
    
    dynamics.animate(element, {
      translateY: value,
      translateZ: 0
    }, options);
  },

  show(bool=true) {
    set(this, 'revealed', bool);

    let element = this.$().get(0);
    let animateToHeight = bool ? 0 : element.offsetHeight;
    this._animateTo(animateToHeight, element);
  }
});
