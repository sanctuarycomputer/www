import Ember from 'ember';

const {
  get,
  inject,
  Route
} = Ember;

export default Ember.Route.extend({
  sanctuary: inject.service(),

  actions: {
    mainVideoDidLoad() {
      
      // TODO: Change this eventually
      window.setTimeout(() => {
        get(this, 'sanctuary').trigger('applicationBecameReady');
      }, 8000);

    } 
  }
});
