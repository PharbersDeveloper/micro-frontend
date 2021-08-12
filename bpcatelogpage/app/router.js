import EmberRouter from '@ember/routing/router';
import config from 'bpcatelogpage/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('download', { path: "/download" }, function() {
    this.route('my-data', { path: "/my-data" });
    this.route('enterprise', { path: "/enterprise" });
    this.route('data-directory-table', { path: "/data-directory-table" });
    this.route('project', {path: "/projects"});
  });
  this.route('oauth-callback');
  this.route('dag', {path: "/projects/:project_id"});
});
