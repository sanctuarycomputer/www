import Ember from 'ember';

const {
  get,
  computed,
  String,
  Handlebars,
  Component
} = Ember;

export default Component.extend({
  classNames: ['product-card'],
  classNameBindings: ['showDetails', 'isTouch'],

  showDetails: false,

  isTouch: computed(function() {
    return !!('ontouchstart' in window); 
  }),

  imagePath: computed('product.name', function() {
    return `./images/products/${String.dasherize(get(this, 'product.name'))}.jpg`;
  })
});
