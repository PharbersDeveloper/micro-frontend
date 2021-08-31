import EmberRouter from '@ember/routing/router';
import config from 'max/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('oauth-callback');
  this.route('max-saas', { path: "/max-saas" }, function() {
    this.route('upload', { path: "/upload" });
  });
});
