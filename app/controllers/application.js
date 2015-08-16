import Ember from 'ember';

export default Ember.Controller.extend({
  showContactPanel: false,

  actions: {
    toggleContactUs() {
      this.toggleProperty('showContactPanel');
    } 
  }
});
