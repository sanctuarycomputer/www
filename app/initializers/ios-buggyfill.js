let initialized = false;
export function initialize() {
  if (initialized) { return; }
  let UA = navigator.userAgent;
  if (UA.match(/(iPod|iPhone|iPad)/) && (!!UA.match(/Version\/[\d\.]+.*Safari/) || !!UA.match(/Twitter for iPhone/))) {
    window.viewportUnitsBuggyfill.init({force: true});
  }
  initialized = true;
}

export default {
  name: 'ios-buggyfill',
  initialize: initialize
};
