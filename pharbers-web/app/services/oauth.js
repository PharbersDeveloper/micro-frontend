import Service from '@ember/service';
import { inject as service } from '@ember/service';
//这个版本似乎没法使用ember-ajax，引入后就回报错，暂时没找到解决方案，如果之后使用的话可以使用ember-data或者fetch
export default class OauthService extends Service {
  @service('cookies') cookies;
  @service('router') router;
  @service('store') store;

  judgeAuth() {
    let tokenFlag = false;
    let token = this.cookies.read('access_token');

    if (typeof token !== 'undefined' && token !== null && token !== '') {
      tokenFlag = true;
    }

    return tokenFlag;
  }

  removeAuth() {
    let options = {
      domain: '.pharbers.com',
      path: '/',
    };

    let keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
      keys.forEach((x) => {
        this.cookies.clear(x, options);
      });
    }
    window.location.reload(true);
    window.console.log('clear cookies!');
  }
}
