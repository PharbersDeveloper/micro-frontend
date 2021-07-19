import EmberRouter from '@ember/routing/router';
import config from 'bpcatelogpage/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('download', function() {
    this.route('my-data', { path: "/my-data" });
    this.route('enterprise', { path: "/enterprise" });
  });
  this.route('oauth-callback');
});
