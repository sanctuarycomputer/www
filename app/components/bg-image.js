import Ember from 'ember';

const {
  Component,
  get
} = Ember;

export default Component.extend({
  classNames: ['bg-image'],
  sourceImage: '',
  fadeInClass: 'fade-in',

  didInsertElement() {
    this._super(...arguments);
    this._setupImage();
  },

  _setupImage() {
    let img = new Image();

    img.onload = () => {
      this.$('.fadein-placeholder').addClass(this.get('fadeInClass'));
      this.$().css('background-image', `url(${this.get('sourceImage')})`);
    }

    img.src = this.get('sourceImage');
  }
});
