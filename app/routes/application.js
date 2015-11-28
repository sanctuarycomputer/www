import Ember from 'ember';

const {
  get,
  inject,
  Route
} = Ember;

export default Ember.Route.extend({
  sanctuary: inject.service(),

  model() {
    return {
      products: [
        {
          name: "Eames Story",
          builtFor: "Herman Miller",
          builtWith: "Labour NY",
          type: "Client",
          image: "eames-story.jpg"
        },
        {
          name: "Pick PETE",
          builtFor: "Pick Pete, Inc.",
          builtWith: "PlayLab, Inc.",
          type: "Product",
          image: "pick-pete.jpg",
          link: "https://pickpete.com"
        },
        {
          name: "FACE Site",
          builtFor: "FACE Design & Fabrication",
          builtWith: "PlayLab, Inc.",
          type: "Client",
          image: "face-site.jpg",
          link: "http://facedesign.com"
        },
        {
          name: "The Working Pair",
          builtFor: "Rachael Yaeger",
          builtWith: "Human NYC",
          type: "Client",
          image: "the-working-pair.jpg",
          link: "http://theworkingpair.com/"
        },
        {
          name: "The Mainframe Group",
          builtFor: "The Mainframe Group",
          builtWith: "Jonathon O'Brien",
          type: "Client",
          image: "the-mainframe-group.jpg",
          link: "http://www.mainframegroup.co/"
        },
        {
          name: "Calendar Camp",
          builtFor: null,
          builtWith: null,
          type: "Product",
          image: "calendar-camp.jpg",
          link: "http://calendarcamp.co"
        },
        {
          name: "Spree Ember",
          builtFor: "Spree Commerce & Ember CLI",
          builtWith: null,
          type: "Open Source",
          image: "spree-ember.jpg",
          link: "http://spree-ember.com"
        },
        {
          name: "Ember Infinity",
          builtFor: "Ember CLI",
          builtWith: null,
          type: "Open Source",
          image: "ember-infinity.jpg",
          link: "https://github.com/hhff/ember-infinity"
        }
      ],
      clients: [
      
      ]
    } 
  },

  actions: {
    mainVideoDidLoad() {
      
      // TODO: Change this eventually
      window.setTimeout(() => {
        get(this, 'sanctuary').trigger('applicationBecameReady');
      }, 8000);

    } 
  }
});
