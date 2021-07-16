import EmberRouter from '@ember/routing/router';
import config from 'pharbers-web/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home', { path: '/' });
  this.route('about-us');
  this.route('rw');
  this.route('max');
  this.route('consulting');
  this.route('report-list');
  this.route('download-report', { path: '/download-report/:report_id' });
  this.route('boyunhui', { path: '/boyunhui/:boyunhui_id' });
  this.route('activity-list');
  this.route('above-data-detail', { path: '/above-data-detail/:activity_id' });
  this.route('industry-activity-detail', {
    path: '/industry-activity-detail/:industry_id',
  });
});
