import Ember from 'ember';

const {
  get,
  Component
} = Ember;

export default Component.extend({
  onLoadAction: null,
  classNames: ['background-video'],

  didInsertElement() {
    let video = this.$('video').coverVid(1280, 720);
    let el    = video.get(0);

    if (this.$('video').length) {
      el.addEventListener('loadeddata', () => {
        if (get(this, 'onLoadAction')) { this.sendAction('onLoadAction'); }
      }, false);
    } else {
      if (get(this, 'onLoadAction')) { this.sendAction('onLoadAction'); }
    }
  }
});
