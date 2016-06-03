import Ember from 'ember';
import aframe from 'npm:aframe';
import aframeHrefComponent from 'npm:aframe-href-component';

const {
  get,
  inject,
  Route
} = Ember;

export default Ember.Route.extend({
  sanctuary: inject.service(),

  beforeModel() {
    viewportUnitsBuggyfill.init({force: true});
    console.log(aframe);
    console.log(aframeHrefComponent);
  },

  model() {
    return {
      products: [
        {
          name: "Eames Story",
          builtFor: "Herman Miller",
          builtWith: "Labour NY",
          type: "Client",
          link: "http://www.hermanmiller.com/why/serious-fun.html"
        },
        {
          name: "Pick Pete",
          builtFor: "Pick Pete, Inc.",
          builtWith: "PlayLab, Inc.",
          type: "Product",
          link: "https://pickpete.com"
        },
        {
          name: "FACE Site",
          builtFor: "FACE Design & Fabrication",
          builtWith: "PlayLab, Inc.",
          type: "Client",
          link: "http://facedesign.com"
        },
        {
          name: "The Working Pair",
          builtFor: "Rachael Yaeger",
          builtWith: "Human NYC",
          type: "Client",
          link: "http://theworkingpair.com/"
        },
        {
          name: "Mainframe",
          builtFor: "The Mainframe Group",
          builtWith: "Jonathon O'Brien",
          type: "Client",
          link: "http://www.mainframegroup.co/"
        },
        {
          name: "Calendar Camp",
          builtFor: null,
          builtWith: null,
          type: "Product",
          link: "http://calendarcamp.co"
        },
        {
          name: "Spree Ember",
          builtFor: "Spree Commerce & Ember CLI",
          builtWith: null,
          type: "Open Source",
          link: "http://spree-ember.com"
        },
        {
          name: "Ember Infinity",
          builtFor: "Ember CLI",
          builtWith: null,
          type: "Open Source",
          link: "https://github.com/hhff/ember-infinity"
        }
      ],
      clients: [
        {
          name: "PlayLab",
          link: "http://playlab.org/"
        },
        {
          name: "Herman Miller",
          link: "http://www.hermanmiller.com/"
        },
        {
          name: "Sweetgreen",
          link: "http://sweetgreen.com/"
        },
        {
          name: "Gin Lane",
          link: "http://ginlane.com/"
        },
        {
          name: "Human NYC",
          link: "http://human-nyc.com/"
        },
        {
          name: "Pick Pete",
          link: "https://pickpete.com/"
        },
        {
          name: "Labour NY",
          link: "http://labour-ny.com/"
        },
        {
          name: "Antarctic",
          link: "http://antarcti.cc/"
        },
        {
          name: "Dame Products",
          link: "http://www.dameproducts.com/"
        },
        {
          name: "FACE Design & Fabrication",
          link: "http://www.facedesign.com/"
        }
      ]
    } 
  },

  actions: {
    mainVideoDidLoad() {
      // TODO: Change this eventually
      window.setTimeout(() => {
        get(this, 'sanctuary').trigger('applicationBecameReady');
      }, 6500);

    } 
  }
});
