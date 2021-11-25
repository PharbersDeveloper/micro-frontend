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
  this.route('projects', {path: "/projects"});
  this.route('dag', {path: "/projects/:project_id"});
  // this.route('dag-run', {path: "/projects/:project_id/:execution_id"});
  this.route('overview');
  this.route('dataset');
  this.route('dataset-lst');
  this.route('excel-clean');
  this.route('excel-handler');
  this.route('analyze', {path: "/dataset/:dataset_name"});
  this.route('recipes');
  this.route('codeditor');
});
