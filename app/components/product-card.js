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

  imagePath: computed('product.name', function() {
    return `${String.dasherize(get(this, 'product.name'))}.jpg`;
  }),

  imageStyle: computed('imagePath', function() {
    return new Handlebars.SafeString(`background-image: url(./images/products/${get(this, 'imagePath')})`);
  })
});
