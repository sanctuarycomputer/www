import Ember from 'ember';
import aframe from 'npm:aframe';

const {
  get,
  inject,
  Route
} = Ember;

export default Ember.Route.extend({
  sanctuary: inject.service(),

  beforeModel() {
    console.log(aframe);
  },

  model() {
    return {
      products: [
        {
          name: "Dame",
          builtFor: "Dame Products",
          builtWith: "PlayLab, Inc.",
          type: "Client",
          link: "https://www.dameproducts.com/"
        },
        {
          name: "Pick Pete",
          builtFor: "Pick Pete, Inc.",
          builtWith: "PlayLab, Inc.",
          type: "Product",
          link: "https://pickpete.com"
        },
        {
          name: "Dig Inn",
          builtFor: "Dig Inn",
          builtWith: "PlayLab, Inc.",
          type: "Client",
          link: "https://itunes.apple.com/us/app/dig-inn/id900117346?mt=8"
        },
        {
          name: "Dirt Online",
          builtFor: "Dig Inn",
          builtWith: null,
          type: "Client",
          link: "http://www.dirt.online/"
        },
        {
          name: "Spirit",
          builtFor: "Dig Inn",
          builtWith: null,
          type: "Client",
          link: "http://spirit.dirt.online/"
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
          name: "Dig Inn",
          link: "https://www.diginn.com/"
        },
        {
          name: "JWALK",
          link: "http://www.jwalkny.com/"
        },
        {
          name: "PlayLab",
          link: "http://playlab.org/"
        },
        {
          name: "Herman Miller",
          link: "http://www.hermanmiller.com/"
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
