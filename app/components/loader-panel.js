import Ember from 'ember';
import dynamics from 'dynamics';

const {
  get,
  inject
} = Ember;

export default Ember.Component.extend({
  classNames: ['loader-panel'],
  sanctuary: inject.service(),

  didInsertElement() {
    get(this, 'sanctuary').on('applicationBecameReady', () => {
      console.log('loader panel became ready');
      this.show(false);
    });
  },

  show(bool=true) {
    let element = this.$().get(0);

    let options = {
      type: dynamics.gravity,
      duration: 1800,
      bounciness: 800,
      elasticity: 50
    };
    
    dynamics.animate(element, {
      translateY: bool ? 0 : element.offsetHeight,
      translateZ: 0
    }, options);
  }
});
