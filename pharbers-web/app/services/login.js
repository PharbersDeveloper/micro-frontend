import Service from '@ember/service';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';
import { equal } from '@ember/object/computed';
import { reject } from 'rsvp';
import config from '../../config/environment';
/*
md5.js
*/
String.prototype.MD5 = function (bit) {
  var sMessage = this;

  function RotateLeft(lValue, iShiftBits) {
    return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
  }

  function AddUnsigned(lX, lY) {
    var lX4, lY4, lX8, lY8, lResult;
    lX8 = lX & 0x80000000;
    lY8 = lY & 0x80000000;
    lX4 = lX & 0x40000000;
    lY4 = lY & 0x40000000;
    lResult = (lX & 0x3fffffff) + (lY & 0x3fffffff);
    if (lX4 & lY4) return lResult ^ 0x80000000 ^ lX8 ^ lY8;
    if (lX4 | lY4) {
      if (lResult & 0x40000000) return lResult ^ 0xc0000000 ^ lX8 ^ lY8;
      else return lResult ^ 0x40000000 ^ lX8 ^ lY8;
    } else return lResult ^ lX8 ^ lY8;
  }

  function F(x, y, z) {
    return (x & y) | (~x & z);
  }

  function G(x, y, z) {
    return (x & z) | (y & ~z);
  }

  function H(x, y, z) {
    return x ^ y ^ z;
  }

  function I(x, y, z) {
    return y ^ (x | ~z);
  }

  function FF(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }

  function GG(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }

  function HH(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }

  function II(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }

  function ConvertToWordArray(sMessage) {
    var lWordCount;
    var lMessageLength = sMessage.length;
    var lNumberOfWords_temp1 = lMessageLength + 8;
    var lNumberOfWords_temp2 =
      (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
    var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
    var lWordArray = Array(lNumberOfWords - 1);
    var lBytePosition = 0;
    var lByteCount = 0;
    while (lByteCount < lMessageLength) {
      lWordCount = (lByteCount - (lByteCount % 4)) / 4;
      lBytePosition = (lByteCount % 4) * 8;
      lWordArray[lWordCount] =
        lWordArray[lWordCount] |
        (sMessage.charCodeAt(lByteCount) << lBytePosition);
      lByteCount++;
    }
    lWordCount = (lByteCount - (lByteCount % 4)) / 4;
    lBytePosition = (lByteCount % 4) * 8;
    lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
    return lWordArray;
  }

  function WordToHex(lValue) {
    var WordToHexValue = '',
      WordToHexValue_temp = '',
      lByte,
      lCount;
    for (lCount = 0; lCount <= 3; lCount++) {
      lByte = (lValue >>> (lCount * 8)) & 255;
      WordToHexValue_temp = '0' + lByte.toString(16);
      WordToHexValue =
        WordToHexValue +
        WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
    }
    return WordToHexValue;
  }
  var x = Array();
  var k, AA, BB, CC, DD, a, b, c, d;
  var S11 = 7,
    S12 = 12,
    S13 = 17,
    S14 = 22;
  var S21 = 5,
    S22 = 9,
    S23 = 14,
    S24 = 20;
  var S31 = 4,
    S32 = 11,
    S33 = 16,
    S34 = 23;
  var S41 = 6,
    S42 = 10,
    S43 = 15,
    S44 = 21;
  // Steps 1 and 2. Append padding bits and length and convert to words
  x = ConvertToWordArray(sMessage);
  // Step 3. Initialise
  a = 0x67452301;
  b = 0xefcdab89;
  c = 0x98badcfe;
  d = 0x10325476;
  // Step 4. Process the message in 16-word blocks
  for (k = 0; k < x.length; k += 16) {
    AA = a;
    BB = b;
    CC = c;
    DD = d;
    a = FF(a, b, c, d, x[k + 0], S11, 0xd76aa478);
    d = FF(d, a, b, c, x[k + 1], S12, 0xe8c7b756);
    c = FF(c, d, a, b, x[k + 2], S13, 0x242070db);
    b = FF(b, c, d, a, x[k + 3], S14, 0xc1bdceee);
    a = FF(a, b, c, d, x[k + 4], S11, 0xf57c0faf);
    d = FF(d, a, b, c, x[k + 5], S12, 0x4787c62a);
    c = FF(c, d, a, b, x[k + 6], S13, 0xa8304613);
    b = FF(b, c, d, a, x[k + 7], S14, 0xfd469501);
    a = FF(a, b, c, d, x[k + 8], S11, 0x698098d8);
    d = FF(d, a, b, c, x[k + 9], S12, 0x8b44f7af);
    c = FF(c, d, a, b, x[k + 10], S13, 0xffff5bb1);
    b = FF(b, c, d, a, x[k + 11], S14, 0x895cd7be);
    a = FF(a, b, c, d, x[k + 12], S11, 0x6b901122);
    d = FF(d, a, b, c, x[k + 13], S12, 0xfd987193);
    c = FF(c, d, a, b, x[k + 14], S13, 0xa679438e);
    b = FF(b, c, d, a, x[k + 15], S14, 0x49b40821);
    a = GG(a, b, c, d, x[k + 1], S21, 0xf61e2562);
    d = GG(d, a, b, c, x[k + 6], S22, 0xc040b340);
    c = GG(c, d, a, b, x[k + 11], S23, 0x265e5a51);
    b = GG(b, c, d, a, x[k + 0], S24, 0xe9b6c7aa);
    a = GG(a, b, c, d, x[k + 5], S21, 0xd62f105d);
    d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
    c = GG(c, d, a, b, x[k + 15], S23, 0xd8a1e681);
    b = GG(b, c, d, a, x[k + 4], S24, 0xe7d3fbc8);
    a = GG(a, b, c, d, x[k + 9], S21, 0x21e1cde6);
    d = GG(d, a, b, c, x[k + 14], S22, 0xc33707d6);
    c = GG(c, d, a, b, x[k + 3], S23, 0xf4d50d87);
    b = GG(b, c, d, a, x[k + 8], S24, 0x455a14ed);
    a = GG(a, b, c, d, x[k + 13], S21, 0xa9e3e905);
    d = GG(d, a, b, c, x[k + 2], S22, 0xfcefa3f8);
    c = GG(c, d, a, b, x[k + 7], S23, 0x676f02d9);
    b = GG(b, c, d, a, x[k + 12], S24, 0x8d2a4c8a);
    a = HH(a, b, c, d, x[k + 5], S31, 0xfffa3942);
    d = HH(d, a, b, c, x[k + 8], S32, 0x8771f681);
    c = HH(c, d, a, b, x[k + 11], S33, 0x6d9d6122);
    b = HH(b, c, d, a, x[k + 14], S34, 0xfde5380c);
    a = HH(a, b, c, d, x[k + 1], S31, 0xa4beea44);
    d = HH(d, a, b, c, x[k + 4], S32, 0x4bdecfa9);
    c = HH(c, d, a, b, x[k + 7], S33, 0xf6bb4b60);
    b = HH(b, c, d, a, x[k + 10], S34, 0xbebfbc70);
    a = HH(a, b, c, d, x[k + 13], S31, 0x289b7ec6);
    d = HH(d, a, b, c, x[k + 0], S32, 0xeaa127fa);
    c = HH(c, d, a, b, x[k + 3], S33, 0xd4ef3085);
    b = HH(b, c, d, a, x[k + 6], S34, 0x4881d05);
    a = HH(a, b, c, d, x[k + 9], S31, 0xd9d4d039);
    d = HH(d, a, b, c, x[k + 12], S32, 0xe6db99e5);
    c = HH(c, d, a, b, x[k + 15], S33, 0x1fa27cf8);
    b = HH(b, c, d, a, x[k + 2], S34, 0xc4ac5665);
    a = II(a, b, c, d, x[k + 0], S41, 0xf4292244);
    d = II(d, a, b, c, x[k + 7], S42, 0x432aff97);
    c = II(c, d, a, b, x[k + 14], S43, 0xab9423a7);
    b = II(b, c, d, a, x[k + 5], S44, 0xfc93a039);
    a = II(a, b, c, d, x[k + 12], S41, 0x655b59c3);
    d = II(d, a, b, c, x[k + 3], S42, 0x8f0ccc92);
    c = II(c, d, a, b, x[k + 10], S43, 0xffeff47d);
    b = II(b, c, d, a, x[k + 1], S44, 0x85845dd1);
    a = II(a, b, c, d, x[k + 8], S41, 0x6fa87e4f);
    d = II(d, a, b, c, x[k + 15], S42, 0xfe2ce6e0);
    c = II(c, d, a, b, x[k + 6], S43, 0xa3014314);
    b = II(b, c, d, a, x[k + 13], S44, 0x4e0811a1);
    a = II(a, b, c, d, x[k + 4], S41, 0xf7537e82);
    d = II(d, a, b, c, x[k + 11], S42, 0xbd3af235);
    c = II(c, d, a, b, x[k + 2], S43, 0x2ad7d2bb);
    b = II(b, c, d, a, x[k + 9], S44, 0xeb86d391);
    a = AddUnsigned(a, AA);
    b = AddUnsigned(b, BB);
    c = AddUnsigned(c, CC);
    d = AddUnsigned(d, DD);
  }
  if (bit == 32) {
    return WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
  } else {
    return WordToHex(b) + WordToHex(c);
  }
};

// eslint-disable-next-line ember/no-classic-classes
export default Service.extend({
  // environment: equal(ENV.environment, 'production'),
  environment: equal(config.environment, 'production'),
  ajax: service(),
  cookies: service(),
  router: service(),
  toast: service(),
  store: service(),
  toastOptions: EmberObject.create({
    closeButton: false,
    positionClass: 'toast-top-center',
    progressBar: false,
    timeOut: '2000',
  }),
  loginSuccess: '登录成功',
  loginFail: '登录失败',
  logoutSuceees: '注销成功',

  // host: ENV.host,
  host: 'http://oauth.pharbers.com',
  version: 'v0',
  // clientId: "5cc54e32ceb3c45854b80e9d", 旧官网
  // clientId: "5e4e14205bb3bc61bcbfc90a", // 新官网
  clientId: '5ed86c5ac4e1f0330eec3d2e', // eks-oauth-server暂时使用阿里云数据（mongo&redis）直接外部IP访问
  clientSecret: '5c90db71eeefcc082c0823b2',
  scope: 'APP/Pharbers',

  isLogin: false,
  isRegister: false,
  account: null,

  accountLogin(a, p, adapter) {
    // const cookies = this.cookies;
    let loginSuccess = this.loginSuccess;
    let loginFail = this.loginFail;
    // let logoutSuceees = this.logoutSuceees;

    let host = `${this.host}`,
      version = `${this.version}`,
      resource = 'PasswordLogin',
      url = '';

    url = `?client_id=${this.clientId}
                    &client_secret=${this.clientSecret}
                    &scope=${this.scope}`
      .replace(/\n/gm, '')
      .replace(/ /gm, '')
      .replace(/\t/gm, '');

    this.ajax
      .request([host, version, resource].join('/') + url, {
        type: 'POST',
        contentType: 'application/json',
        data: {
          username: a,
          password: p,
        },
      })
      .then((response) => {
        if (!this.environment) {
          window.console.log(response);
        }
        if (response.error != undefined) {
          this.toast.error('', loginFail, this.toastOptions);

          this.router.transitionTo('login');
          return reject(response);
        }
        return response;
      })
      .then((data) => {
        this.cookiesOperation(data);

        // adapter.set('headers', {
        // 	'Authorization': cookies.read('token_type') + ' ' + cookies.read('token')
        // });
        adapter.set('oauthRequest', 1);
        return this.store.findRecord('account', data.account_id);
      })
      .then(
        (data) => {
          if (!this.environment) {
            window.console.log(data);
          }
          this.setProperties({
            account: data,
            isLogin: true,
          });
          this.toast.success('', loginSuccess, this.toastOptions);
          this.router.transitionTo('product-list');
          // window.location.href = "product-list"
        },
        (err) => {
          if (!this.environment) {
            window.console.log(err);
          }
          this.clearAllCookie(1);

          this.toast.error('', loginFail, this.toastOptions);
          this.router.transitionTo('login');
        }
      )
      .catch((err) => {
        if (!this.environment) {
          window.console.log(err);
        }

        this.toast.error('', loginFail, this.toastOptions);
        this.router.transitionTo('login');
      });
  },

  cookiesOperation(response) {
    // response.scope = "APP/MAXBI,CHC:Nhwa"
    let cookies = this.cookies;

    let expiry = new Date(response.expiry);
    let options = {
      domain: 'ph-offweb.s3-website.cn-northwest-1.amazonaws.com.cn',
      path: '/',
      expires: expiry,
    };
    cookies.write('token', response.access_token, options);
    cookies.write('account_id', response.account_id, options);
    cookies.write('access_token', response.access_token, options);
    cookies.write('refresh_token', response.refresh_token, options);
    cookies.write('token_type', response.token_type, options);
    cookies.write('scope', response.scope, options);
    cookies.write('expiry', response.expiry, options);

    // let appScopesList = '';
    // // let result = response.scope.match(/\[(.+)\]/);
    // let result = response.scope.split("/");
    // let scopes = result[1].split(",");
    // scopes.forEach(elem => {

    // 	let appScope = elem.split(":")

    // 	appScopesList += appScope[0] + ';'
    // 	let appOptions = {
    // 		domain: 'pharbers.com',
    // 		path: '/',
    // 		expires: expiry
    // 	};

    // 	// appOptions.path = "/" + this.appScopeToDomain(appScope[0])
    // 	appOptions.path = "/login"
    // 	if(appOptions.path !== ''){
    // 		cookies.write('token', response.access_token, appOptions);
    // 		cookies.write('scope', 'APP/' + elem, appOptions);
    // 	}

    // })

    // options = {
    // 	domain: '.pharbers.com',
    // 	path: '/',
    // 	expires: expiry
    // }
    // cookies.write('scopes', appScopesList, options);
  },

  // appScopeToDomain(appScope) {
  // 	// if(appScope == 'MAX') {
  // 	// 	return 'max.pharbers.com'
  // 	// } else if (appScope == 'MAXBI') {
  // 	// 	return 'maxview.pharbers.com'
  // 	// } else if (appScope == 'CHC') {
  // 	// 	return 'chc.pharbers.com'
  // 	// } else if (appScope == 'FileUpAndDownLoad') {
  // 	// 	return 'report.pharbers.com'
  // 	// } else if (appScope == 'NTM') {
  // 	// 	return 'ntm.pharbers.com'
  // 	// } else if (appScope == 'UCB') {
  // 	// 	return 'ucb.pharbers.com'
  // 	// } else {
  // 	// 	return '';
  // 	// }
  // 	if(appScope == 'MAX') {
  // 		return 'max'
  // 	} else if (appScope == 'MAXBI') {
  // 		return 'maxview'
  // 	} else if (appScope == 'CHC') {
  // 		return 'chc'
  // 	} else if (appScope == 'FileUpAndDownLoad') {
  // 		return 'report'
  // 	} else if (appScope == 'NTM') {
  // 		return 'ntm'
  // 	} else if (appScope == 'UCB') {
  // 		return 'ucb'
  // 	} else {
  // 		return '';
  // 	}
  // },

  judgeAuth() {
    let tokenFlag = false,
      token = this.cookies.read('token');

    // let scope = this.get('cookies').read('scope');
    // let account = this.get('cookies').read('account');
    if (token != undefined && token != null && token != '') {
      this.set('isLogin', true);
      tokenFlag = true;
    }

    // if(account != undefined && account != null && account != '') {
    // 	this.set('account', account)
    // }

    // if(scope != undefined && scope != null && scope != '') {
    //     let scopeString = scope.split("/")[1];
    //     let scopeGroup = scopeString.split(":")[1];
    //     if(scopeGroup != "" && scopeGroup != undefined) {
    //         scopeFlag = true;
    //     }
    // }

    // if(tokenFlag && scopeFlag) {
    if (tokenFlag) {
      return true;
    } else {
      return false;
    }
  },

  clearAllCookie(param) {
    // let domains = [];
    // let scopes = this.get('cookies').read('scopes').split(';');
    // scopes.forEach(elem => {
    // 	domains.push(this.appScopeToDomain(elem));
    // })
    let keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    let logoutSuceees = this.logoutSuceees;
    if (keys) {
      for (var i = keys.length; i--; )
        // domains.forEach(elem => {
        // 	document.cookie = keys[i] + '=0;domain=' + elem + ';expires=' + new Date(0).toUTCString()+";path=/";
        // })
        document.cookie =
          keys[i] +
          '=0;domain=' +
          '.pharbers.com' +
          ';expires=' +
          new Date(0).toUTCString() +
          ';path=/';
      document.cookie =
        keys[i] +
        '=0;domain=' +
        'www.pharbers.com' +
        ';expires=' +
        new Date(0).toUTCString() +
        ';path=/';
    }
    this.set('isLogin', false);
    this.store.unloadAll();
    if (param == undefined) {
      this.toast.success('', logoutSuceees, this.toastOptions);
      this.router.transitionTo('login');
      // window.location.href = "/login"
    }
  },
});
