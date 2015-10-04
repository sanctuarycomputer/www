import Ember from 'ember';

const {
  inject,
  Controller
} = Ember;

export default Ember.Controller.extend({
  sanctuary: inject.service()
});
