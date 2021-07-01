import Service from '@ember/service';
import { inject as service } from '@ember/service';
//这个版本似乎没法使用ember-ajax，引入后就回报错，暂时没找到解决方案，如果之后使用的话可以使用ember-data或者fetch
export default class OauthService extends Service {
  @service('cookies') cookies;
  @service('router') router;
  @service('store') store;

  oauthCallback(transition) {
    const cookies = this.cookies;
    const ajax = this.ajax;
    const { queryParams } = transition.to;
    const applicationAdapter = this.store.adapterFor('application');

    // console.log("?", transition, queryParams)
    if (queryParams.code && queryParams.state) {
      // 获取oauth-callback 中的query
      const redirectUri = queryParams.redirect_uri;
      const clientId = queryParams.client_id;
      const code = queryParams.code;
      const grantType = queryParams.grant_type;
      const state = queryParams.state;
      const url =
        `https://2t69b7x032.execute-api.cn-northwest-1.amazonaws.com.cn/v0/oauth/token?` +
        `client_id=${clientId}` +
        `&code=${code}` +
        `&grant_type=${grantType}` +
        `&redirect_uri=${redirectUri}` +
        `&state=${state}`;

      // adapter 获取对应的header
      applicationAdapter.set('token', 1);

      applicationAdapter.toggleProperty('oauthRequest');
      applicationAdapter.set('oauthRequestTokenQuery', {
        redirect_uri: redirectUri,
        client_id: clientId,
        code: code,
        grant_type: grantType,
        state: state,
      });

      const a = applicationAdapter.get('headers');

      ajax
        .request(url, {
          headers: a,
        })
        .then((response) => {
          this.removeAuth();
          let options = {
            domain: '.pharbers.com',
            path: '/',
            maxAge: response.expires_in,
          };

          // console.log(response)

          cookies.write('access_token', response.access_token, options);
          cookies.write('refresh_token', response.refresh_token, options);
          cookies.write('token_type', response.token_type, options);
          cookies.write('expires_in', response.expires_in, options);

          this.router.transitionTo('product-list');
        })
        .catch(() => {
          this.router.transitionTo('product-list');
        });
    } else {
      this.router.transitionTo('product-list');
    }
  }

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
