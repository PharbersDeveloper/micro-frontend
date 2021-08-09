import EmberRouter from '@ember/routing/router';
import config from 'bpcatelogpage/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('download', { path: "/" }, function() {
    this.route('my-data', { path: "/download/my-data" });
    this.route('enterprise', { path: "/download/enterprise" });
    this.route('data-directory-table', { path: "/download/data-directory-table" });
    this.route('project', {path: "/projects"});
  });
  this.route('oauth-callback');
  this.route('max', {path: "/projects/max-dag"});
  this.route('etl', {path: "/projects/etl-dag"});
  this.route('max-extract', {path: "/projects/extract-dag"});
});
