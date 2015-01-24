import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('contacts', function() {
    this.resource('contacts', { path: '/:contact_id' });
  });
  this.route("contact");
});

export default Router;
