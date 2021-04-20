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
		lX8 = (lX & 0x80000000);
		lY8 = (lY & 0x80000000);
		lX4 = (lX & 0x40000000);
		lY4 = (lY & 0x40000000);
		lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
		if (lX4 & lY4) return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
		if (lX4 | lY4) {
			if (lResult & 0x40000000) return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
			else return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
		} else return (lResult ^ lX8 ^ lY8);
	}

	function F(x, y, z) {
		return (x & y) | ((~x) & z);
	}

	function G(x, y, z) {
		return (x & z) | (y & (~z));
	}

	function H(x, y, z) {
		return (x ^ y ^ z);
	}

	function I(x, y, z) {
		return (y ^ (x | (~z)));
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
		var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
		var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
		var lWordArray = Array(lNumberOfWords - 1);
		var lBytePosition = 0;
		var lByteCount = 0;
		while (lByteCount < lMessageLength) {
			lWordCount = (lByteCount - (lByteCount % 4)) / 4;
			lBytePosition = (lByteCount % 4) * 8;
			lWordArray[lWordCount] = (lWordArray[lWordCount] | (sMessage.charCodeAt(lByteCount) << lBytePosition));
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
		var WordToHexValue = "",
			WordToHexValue_temp = "",
			lByte, lCount;
		for (lCount = 0; lCount <= 3; lCount++) {
			lByte = (lValue >>> (lCount * 8)) & 255;
			WordToHexValue_temp = "0" + lByte.toString(16);
			WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
		}
		return WordToHexValue;
	}
	var x = Array();
	var k, AA, BB, CC, DD, a, b, c, d
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
	b = 0xEFCDAB89;
	c = 0x98BADCFE;
	d = 0x10325476;
	// Step 4. Process the message in 16-word blocks
	for (k = 0; k < x.length; k += 16) {
		AA = a;
		BB = b;
		CC = c;
		DD = d;
		a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
		d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
		c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
		b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
		a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
		d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
		c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
		b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
		a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
		d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
		c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
		b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
		a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
		d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
		c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
		b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
		a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
		d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
		c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
		b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
		a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
		d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
		c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
		b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
		a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
		d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
		c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
		b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
		a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
		d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
		c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
		b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
		a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
		d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
		c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
		b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
		a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
		d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
		c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
		b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
		a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
		d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
		c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
		b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
		a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
		d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
		c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
		b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
		a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
		d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
		c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
		b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
		a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
		d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
		c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
		b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
		a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
		d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
		c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
		b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
		a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
		d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
		c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
		b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
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
}

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
	loginSuccess: "登录成功",
	loginFail: "登录失败",
	logoutSuceees: "注销成功",

	// host: ENV.host,
	host: "http://oauth.pharbers.com",
	version: 'v0',
	// clientId: "5cc54e32ceb3c45854b80e9d", 旧官网
	// clientId: "5e4e14205bb3bc61bcbfc90a", // 新官网
	clientId: "5ed86c5ac4e1f0330eec3d2e", // eks-oauth-server暂时使用阿里云数据（mongo&redis）直接外部IP访问
	clientSecret: '5c90db71eeefcc082c0823b2',
	scope: "APP/Pharbers",

	isLogin: false,
	isRegister: false,
	account: null,

	accountLogin(a, p, adapter) {
		const cookies = this.cookies;
		let loginSuccess = this.loginSuccess;
		let loginFail = this.loginFail;
		let logoutSuceees = this.logoutSuceees;

		let host = `${this.get('host')}`,
			version = `${this.get('version')}`,
			resource = 'PasswordLogin',
			url = '';

		url = `?client_id=${this.get('clientId')}
                    &client_secret=${this.get('clientSecret')}
                    &scope=${this.get('scope')}`.
			replace(/\n/gm, '').
			replace(/ /gm, '').
            replace(/\t/gm, '');

		this.get("ajax").request([host, version, resource].join('/') + url, {
			type: "POST",
			contentType: 'application/json',
			data: {
				username: a,
				password: p
			}
		}).then(response => {
			if (!this.environment) {
				window.console.log(response);
			}
			if (response.error != undefined) {

				this.toast.error('', loginFail, this.toastOptions);

				this.get('router').transitionTo('login');
				return reject(response);
			}
			return response;
		}).then(data => {
			this.cookiesOperation(data);

			// adapter.set('headers', {
			// 	'Authorization': cookies.read('token_type') + ' ' + cookies.read('token')
			// });
			adapter.set("oauthRequest", 1)
			return this.store.findRecord('account', data.account_id);
		}).then(data => {
			if (!this.environment) {
				window.console.log(data);
			}
			this.setProperties({
				account: data,
				isLogin: true
			});
			this.toast.success('', loginSuccess, this.toastOptions);
			this.get('router').transitionTo('product-list');
			// window.location.href = "product-list"
		}, err => {
			if (!this.environment) {
				window.console.log(err);
			}
			this.clearAllCookie(1);

			this.toast.error('', loginFail, this.toastOptions);
			this.get('router').transitionTo('login');
		})
			.catch(err => {
				if (!this.environment) {
					window.console.log(err);
				}

				this.toast.error('', loginFail, this.toastOptions);
				this.get('router').transitionTo('login');
			})
	},

	cookiesOperation(response) {
		// response.scope = "APP/MAXBI,CHC:Nhwa"
		let cookies = this.get('cookies')

		let expiry = new Date(response.expiry);
		let options = {
			domain: 'ph-offweb.s3-website.cn-northwest-1.amazonaws.com.cn',
			path: '/',
			expires: expiry
		}
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
			token = this.get('cookies').read('token');

		// let scope = this.get('cookies').read('scope');
		// let account = this.get('cookies').read('account');
		if (token != undefined && token != null && token != '') {
			this.set('isLogin', true)
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
		let logoutSuceees = this.logoutSuceees
		if (keys) {
			for (var i = keys.length; i--;)
				// domains.forEach(elem => {
				// 	document.cookie = keys[i] + '=0;domain=' + elem + ';expires=' + new Date(0).toUTCString()+";path=/";
				// })
				document.cookie = keys[i] + '=0;domain=' + '.pharbers.com' + ';expires=' + new Date(0).toUTCString() + ";path=/";
			document.cookie = keys[i] + '=0;domain=' + 'www.pharbers.com' + ';expires=' + new Date(0).toUTCString() + ";path=/";
		}
		this.set('isLogin', false);
		this.store.unloadAll();
		if (param == undefined) {
			this.toast.success('', logoutSuceees, this.toastOptions);
			this.get('router').transitionTo('login');
			// window.location.href = "/login"
		}


	},
});
