import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('realm', {path: '/realm/:realm_id'});
  this.resource('place', {path: '/place/:place_id'});
});

export default Router;
