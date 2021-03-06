import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('project', {path: '/:project'});
  this.route('project-version', {path: '/:project/:project_version'}, function() {
    this.route('classes-redirect', {path: '/classes'});
    this.route('class', {path: '/classes/:class'});
  });
});

export default Router;
