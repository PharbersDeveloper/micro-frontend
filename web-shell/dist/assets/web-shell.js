'use strict';



;define("web-shell/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("web-shell/adapters/application", ["exports", "ember-inflector", "web-shell/config/environment", "@ember-data/adapter/json-api", "web-shell/lib/PhIamClicent"], function (_exports, _emberInflector, _environment, _jsonApi, _PhIamClicent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ApplicationAdapter = (_dec = Ember.inject.service, (_class = class ApplicationAdapter extends _jsonApi.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "cookies", _descriptor, this);

      _defineProperty(this, "host", _environment.default.APP.apiUri);

      _defineProperty(this, "queryParamsAWS", {});

      _defineProperty(this, "authType", "oauth");
    }

    pathForType(type) {
      if (type === "page") {
        return "phtemplate/" + (0, _emberInflector.pluralize)(Ember.String.dasherize(type));
      } else {
        return "phplatform/" + (0, _emberInflector.pluralize)(Ember.String.dasherize(type));
      }
    }

    sortQueryParams(params) {
      let result = {};
      const keys = Object.keys(params).sort();

      for (let index = 0; index < keys.length; ++index) {
        const key = keys[index];
        let cur = params[key];

        if (cur instanceof Array) {
          cur = cur.sort();
        }

        result[key] = cur;
      }

      return result;
    }

    attributesToDeal(data) {
      // data is object
      const keys = Object.keys(data).sort();
      const obj = {};
      keys.forEach(k => {
        const key = Ember.String.dasherize(k);
        obj[key] = data[k];
      });
      return obj;
    } // eslint-disable-next-line no-unused-vars


    handleResponse(status, headers, payload, _) {
      //处理project list(resource)数据
      if (payload && payload.data && payload.data.length > 0 && payload.meta && payload.meta.count > 0) {
        // eslint-disable-next-line no-unused-vars
        payload.data.forEach((item, _) => {
          item.attributes.meta = item.meta;
          item.attributes.includes = payload.included;
        });
      } //处理executions数据


      if (payload && payload.data && payload.data.length > 0 && payload.data[0].meta) {
        // eslint-disable-next-line no-unused-vars
        payload.data.forEach((item, _) => {
          item.attributes.meta = item.meta;
        });
      } //处理dag数据
      else if (payload && payload.data && payload.data.meta) {
          payload.data.attributes.meta = payload.data.meta;
        }

      return payload;
    } // urlForFindHasMany(id, modelName, snapshot) {
    // 	let baseUrl = this.buildURL(modelName, id);
    // 	return `${baseUrl}/relationships`;
    // },


    get headers() {
      if (this.authType === "oauth") {
        if (_environment.default.environment === "development") {
          return {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            Authorization: _environment.default.APP.debugToken
          };
        } else {
          return {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            Authorization: this.cookies.read("access_token")
          };
        }
      } // else if (this.authType === "iam") {
      // ComputeIamHeader(ENV.APP.apiHost, )
      // }

    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "cookies", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ApplicationAdapter;
});
;define("web-shell/app", ["exports", "ember-resolver", "ember-load-initializers", "web-shell/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("web-shell/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("web-shell/components/component-context", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="content">
      {{!-- <h1>Web components inside Ember</h1> --}}
      <div class="ember">
          {{!-- <h2>Ember shell context</h2> --}}
      </div>
  </div>
  
  */
  {
    "id": "qa4ygpAC",
    "block": "[[[10,0],[14,0,\"content\"],[12],[1,\"\\n\"],[1,\"    \"],[10,0],[14,0,\"ember\"],[12],[1,\"\\n\"],[1,\"    \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "web-shell/components/component-context.hbs",
    "isStrictMode": false
  });

  // import { tracked } from "@glimmer/tracking"
  // import { inject as service } from '@ember/service'
  let ComponentContextComponent = (_dec = Ember._action, _dec2 = Ember._action, _dec3 = Ember._action, (_class = class ComponentContextComponent extends _component.default {
    listener(e) {
      // coloring ember body
      // passing color value to react context via props
      // const webcomponent = e.target
      // webcomponent.color = newColor
      // webcomponent.msg_title = { test: "alfred" }
      console.log("alfred listener action");
    }

    registerListener(element) {
      element.addEventListener("event", this.listener);
    }

    unregisterListener(element) {
      element.removeEventListener("event", this.listener);
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "listener", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "listener"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "registerListener", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "registerListener"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "unregisterListener", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "unregisterListener"), _class.prototype)), _class));
  _exports.default = ComponentContextComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, ComponentContextComponent);
});
;define("web-shell/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("web-shell/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("web-shell/formats", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    time: {
      hhmmss: {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }
    },
    date: {
      hhmmss: {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }
    },
    number: {
      compact: {
        notation: 'compact'
      },
      EUR: {
        style: 'currency',
        currency: 'EUR'
      },
      USD: {
        style: 'currency',
        currency: 'USD'
      }
    }
  };
  _exports.default = _default;
});
;define("web-shell/helpers/app-version", ["exports", "web-shell/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("web-shell/helpers/format-date", ["exports", "ember-intl/helpers/format-date"], function (_exports, _formatDate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _formatDate.default;
    }
  });
});
;define("web-shell/helpers/format-message", ["exports", "ember-intl/helpers/format-message"], function (_exports, _formatMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _formatMessage.default;
    }
  });
});
;define("web-shell/helpers/format-number", ["exports", "ember-intl/helpers/format-number"], function (_exports, _formatNumber) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _formatNumber.default;
    }
  });
});
;define("web-shell/helpers/format-relative", ["exports", "ember-intl/helpers/format-relative"], function (_exports, _formatRelative) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _formatRelative.default;
    }
  });
});
;define("web-shell/helpers/format-time", ["exports", "ember-intl/helpers/format-time"], function (_exports, _formatTime) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _formatTime.default;
    }
  });
});
;define("web-shell/helpers/loc", ["exports", "@ember/string/helpers/loc"], function (_exports, _loc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _loc.default;
    }
  });
  Object.defineProperty(_exports, "loc", {
    enumerable: true,
    get: function () {
      return _loc.loc;
    }
  });
});
;define("web-shell/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("web-shell/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("web-shell/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("web-shell/helpers/t", ["exports", "ember-intl/helpers/t"], function (_exports, _t) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _t.default;
    }
  });
});
;define("web-shell/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "web-shell/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("web-shell/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("web-shell/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("web-shell/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("web-shell/initializers/export-application-global", ["exports", "web-shell/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("web-shell/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("web-shell/lib/PhIamClicent", ["exports", "web-shell/lib/PhSigV4AWSClientFactory", "web-shell/lib/PhSigV4ClientUtils", "web-shell/lib/PhUrlTemplate"], function (_exports, _PhSigV4AWSClientFactory, _PhSigV4ClientUtils, _PhUrlTemplate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ComputeIamHeader = ComputeIamHeader;

  /**
   *  alfredyang@pharbers.com 2021.12.31
   */
  function ComputeIamHeader(apiHost, invokeUrl, method, resource, body, queryParams, ak, sk, ct = "application/json", at = "application/json") {
    const factory = _PhSigV4AWSClientFactory.default;
    const utils = _PhSigV4ClientUtils.default;
    const uriTemp = _PhUrlTemplate.default;
    const endpoint = /(^https?:\/\/[^\/]+)/g.exec(invokeUrl)[1];
    const pathComponent = invokeUrl.substring(endpoint.length);
    const sigV4ClientConfig = {
      accessKey: ak,
      secretKey: sk,
      sessionToken: "",
      serviceName: "execute-api",
      region: "cn-northwest-1",
      endpoint: endpoint,
      defaultContentType: ct,
      defaultAcceptType: at
    };
    const client = factory.PhSigV4AWSClientFactory.newClient(sigV4ClientConfig); // apiGateway.core.utils.assertParametersDefined(params, ['type', 'Accept'], ['body']);

    const requestURL = this.requestURL.split("/"); // ["", "v0", "accounts", "5d725825bd33a54c8213a5ae"]
    // const curType = requestURL[2]

    const curType = requestURL[2];
    let urlArr = ["type"]; // type id relationship

    let awsPath = "/" + resource + "/{type}"; // 如果有id 和relationship 加上

    let paramsArr = [];
    const params = {
      type: curType,
      Accept: at
    };
    let queryParamsAWS = queryParams;

    if (requestURL.length >= 4) {
      urlArr.push("id");
      params.id = requestURL[3];
      awsPath += "/{id}";
      queryParamsAWS = {}; // 需要修改
    }

    if (Object.keys(queryParamsAWS).length) {
      let queryParamsArr = Object.keys(queryParamsAWS); // console.log('queryParamsAWS',queryParamsAWS[queryParamsArr[0]])

      queryParamsArr.forEach(element => {
        let encodeURIEle = encodeURI(element);
        paramsArr.push(encodeURIEle);
        params[encodeURIEle] = queryParamsAWS[element];
      }); // Object.assign( params, queryParamsAWS )
    }

    let req = {
      verb: method.toUpperCase(),
      path: pathComponent + uriTemp.PhUriTemplate(awsPath).expand(utils.parseParametersToObject(params, urlArr)),
      headers: utils.parseParametersToObject(params, ["Accept"]),
      queryParams: utils.parseParametersToObject(params, paramsArr),
      // queryParams: queryParamsAWS,
      body: {},
      host: apiHost
    };
    const request = client.makeRequest(req);
    return request.headers;
  }
});
;define("web-shell/lib/PhSigV4AWSClientFactory", ["exports", "web-shell/lib/PhSigV4ClientUtils", "crypto-js"], function (_exports, _PhSigV4ClientUtils, CryptoJS) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.PhSigV4AWSClientFactory = void 0;

  /*
   * Copyright 2010-2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License").
   * You may not use this file except in compliance with the License.
   * A copy of the License is located at
   *
   *  http://aws.amazon.com/apache2.0
   *
   * or in the "license" file accompanying this file. This file is distributed
   * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
   * express or implied. See the License for the specific language governing
   * permissions and limitations under the License.
   */
  // const PhSigV4ClientUtils  = require("./PhSigV4ClientUtils").default
  let PhSigV4AWSClientFactory = {};
  _exports.PhSigV4AWSClientFactory = PhSigV4AWSClientFactory;

  PhSigV4AWSClientFactory.newClient = function (config) {
    const AWS_SHA_256 = "AWS4-HMAC-SHA256";
    const AWS4_REQUEST = "aws4_request";
    const AWS4 = "AWS4";
    const X_AMZ_DATE = "x-amz-date";
    const X_AMZ_SECURITY_TOKEN = "x-amz-security-token";
    const HOST = "host";
    const AUTHORIZATION = "Authorization";

    function hash(value) {
      return CryptoJS.SHA256(value);
    }

    function hexEncode(value) {
      return value.toString(CryptoJS.enc.Hex);
    }

    function hmac(secret, value) {
      return CryptoJS.HmacSHA256(value, secret, {
        asBytes: true
      });
    }

    function buildCanonicalRequest(method, path, queryParams, headers, payload) {
      return method + "\n" + buildCanonicalUri(path) + "\n" + buildCanonicalQueryString(queryParams) + "\n" + buildCanonicalHeaders(headers) + "\n" + buildCanonicalSignedHeaders(headers) + "\n" + hexEncode(hash(payload));
    }

    function hashCanonicalRequest(request) {
      return hexEncode(hash(request));
    }

    function buildCanonicalUri(uri) {
      return encodeURI(uri);
    }

    function buildCanonicalQueryString(queryParams) {
      if (Object.keys(queryParams).length < 1) {
        return "";
      }

      let sortedQueryParams = [];

      for (const property in queryParams) {
        // eslint-disable-next-line no-prototype-builtins
        if (queryParams.hasOwnProperty(property)) {
          sortedQueryParams.push(property);
        }
      }

      sortedQueryParams.sort();
      let canonicalQueryString = "";

      for (let i = 0; i < sortedQueryParams.length; i++) {
        canonicalQueryString += sortedQueryParams[i] + "=" + fixedEncodeURIComponent(queryParams[sortedQueryParams[i]]) + "&";
      }

      return canonicalQueryString.substr(0, canonicalQueryString.length - 1);
    }

    function fixedEncodeURIComponent(str) {
      let newStr = encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return "%" + c.charCodeAt(0).toString(16).toUpperCase();
      });
      newStr = newStr.replace(/%26/g, "&");
      newStr = newStr.replace(/%3D/g, "=");
      return newStr; //   return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
      //     return '%' + c.charCodeAt(0).toString(16).toUpperCase();
      //   });
    }

    function buildCanonicalHeaders(headers) {
      let canonicalHeaders = "";
      let sortedKeys = [];

      for (const property in headers) {
        // eslint-disable-next-line no-prototype-builtins
        if (headers.hasOwnProperty(property)) {
          sortedKeys.push(property);
        }
      }

      sortedKeys.sort();

      for (let i = 0; i < sortedKeys.length; i++) {
        canonicalHeaders += sortedKeys[i].toLowerCase() + ":" + headers[sortedKeys[i]] + "\n";
      }

      return canonicalHeaders;
    }

    function buildCanonicalSignedHeaders(headers) {
      let sortedKeys = [];

      for (const property in headers) {
        // eslint-disable-next-line no-prototype-builtins
        if (headers.hasOwnProperty(property)) {
          sortedKeys.push(property.toLowerCase());
        }
      }

      sortedKeys.sort();
      return sortedKeys.join(";");
    }

    function buildStringToSign(datetime, credentialScope, hashedCanonicalRequest) {
      return AWS_SHA_256 + "\n" + datetime + "\n" + credentialScope + "\n" + hashedCanonicalRequest;
    }

    function buildCredentialScope(datetime, region, service) {
      return datetime.substr(0, 8) + "/" + region + "/" + service + "/" + AWS4_REQUEST;
    }

    function calculateSigningKey(secretKey, datetime, region, service) {
      return hmac(hmac(hmac(hmac(AWS4 + secretKey, datetime.substr(0, 8)), region), service), AWS4_REQUEST);
    }

    function calculateSignature(key, stringToSign) {
      return hexEncode(hmac(key, stringToSign));
    }

    function buildAuthorizationHeader(accessKey, credentialScope, headers, signature) {
      return AWS_SHA_256 + " Credential=" + accessKey + "/" + credentialScope + ", SignedHeaders=" + buildCanonicalSignedHeaders(headers) + ", Signature=" + signature;
    }

    let awsSigV4Client = {};

    if (config.accessKey === undefined || config.secretKey === undefined) {
      return awsSigV4Client;
    }

    awsSigV4Client.accessKey = _PhSigV4ClientUtils.default.assertDefined(config.accessKey, "accessKey");
    awsSigV4Client.secretKey = _PhSigV4ClientUtils.default.assertDefined(config.secretKey, "secretKey");
    awsSigV4Client.sessionToken = config.sessionToken;
    awsSigV4Client.serviceName = _PhSigV4ClientUtils.default.assertDefined(config.serviceName, "serviceName");
    awsSigV4Client.region = _PhSigV4ClientUtils.default.assertDefined(config.region, "region");
    awsSigV4Client.endpoint = _PhSigV4ClientUtils.default.assertDefined(config.endpoint, "endpoint");

    awsSigV4Client.makeRequest = function (request) {
      const verb = _PhSigV4ClientUtils.default.assertDefined(request.verb, "verb");

      const path = _PhSigV4ClientUtils.default.assertDefined(request.path, "path");

      let queryParams = _PhSigV4ClientUtils.default.copy(request.queryParams);

      if (queryParams === undefined) {
        queryParams = {};
      }

      let headers = _PhSigV4ClientUtils.default.copy(request.headers);

      if (headers === undefined) {
        headers = {};
      } //If the user has not specified an override for Content type the use default


      if (headers["Content-Type"] === undefined) {
        headers["Content-Type"] = config.defaultContentType;
      } //If the user has not specified an override for Accept type the use default


      if (headers["Accept"] === undefined) {
        headers["Accept"] = config.defaultAcceptType;
      }

      let body = _PhSigV4ClientUtils.default.copy(request.body);

      if (body === undefined || verb === "GET") {
        // override request body and set to empty when signing GET requests
        body = "";
      } else {
        body = JSON.stringify(body);
      } //If there is no body remove the content-type header so it is not included in SigV4 calculation


      if (body === "" || body === undefined || body === null) {
        delete headers["Content-Type"];
      }

      let datetime = new Date().toISOString().replace(/\.\d{3}Z$/, "Z").replace(/[:\-]|\.\d{3}/g, "");
      headers[X_AMZ_DATE] = datetime; // const parser = document.createElement('a');
      // parser.href = awsSigV4Client.endpoint;

      headers[HOST] = "2t69b7x032.execute-api.cn-northwest-1.amazonaws.com.cn";
      const canonicalRequest = buildCanonicalRequest(verb, path, queryParams, headers, body);
      const hashedCanonicalRequest = hashCanonicalRequest(canonicalRequest);
      const credentialScope = buildCredentialScope(datetime, awsSigV4Client.region, awsSigV4Client.serviceName);
      const stringToSign = buildStringToSign(datetime, credentialScope, hashedCanonicalRequest);
      const signingKey = calculateSigningKey(awsSigV4Client.secretKey, datetime, awsSigV4Client.region, awsSigV4Client.serviceName);
      const signature = calculateSignature(signingKey, stringToSign);
      headers[AUTHORIZATION] = buildAuthorizationHeader(awsSigV4Client.accessKey, credentialScope, headers, signature);

      if (awsSigV4Client.sessionToken !== undefined && awsSigV4Client.sessionToken !== "") {
        headers[X_AMZ_SECURITY_TOKEN] = awsSigV4Client.sessionToken;
      }

      delete headers[HOST];
      let url = config.endpoint + path;
      const queryString = buildCanonicalQueryString(queryParams);

      if (queryString !== "") {
        url += "?" + queryString;
      } //Need to re-attach Content-Type if it is not specified at this point


      if (headers["Content-Type"] === undefined) {
        headers["Content-Type"] = config.defaultContentType;
      }

      return {
        method: verb,
        url: url,
        headers: headers,
        data: body,
        timeout: 30000
      }; // return axios(signedRequest);
    };

    return awsSigV4Client;
  }; // module.exports = { PhSigV4AWSClientFactory }

});
;define("web-shell/lib/PhSigV4ClientUtils", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
   * Copyright 2010-2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License").
   * You may not use this file except in compliance with the License.
   * A copy of the License is located at
   *
   *  http://aws.amazon.com/apache2.0
   *
   * or in the "license" file accompanying this file. This file is distributed
   * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
   * express or implied. See the License for the specific language governing
   * permissions and limitations under the License.
   */
  let PhSigV4ClientUtils = {
    assertDefined: function (object, name) {
      if (object === undefined) {
        throw name + " must be defined";
      } else {
        return object;
      }
    },
    assertParametersDefined: function (params, keys, ignore) {
      if (keys === undefined) {
        return;
      }

      if (keys.length > 0 && params === undefined) {
        params = {};
      }

      for (let i = 0; i < keys.length; i++) {
        if (!this.contains(ignore, keys[i])) {
          this.assertDefined(params[keys[i]], keys[i]);
        }
      }
    },
    parseParametersToObject: function (params, keys) {
      if (params === undefined) {
        return {};
      }

      let object = {};

      for (let i = 0; i < keys.length; i++) {
        object[keys[i]] = params[keys[i]];
      }

      return object;
    },
    contains: function (a, obj) {
      if (a === undefined) {
        return false;
      }

      let i = a.length;

      while (i--) {
        if (a[i] === obj) {
          return true;
        }
      }

      return false;
    },
    copy: function (obj) {
      if (null == obj || "object" != typeof obj) return obj;
      const copy = obj.constructor();

      for (const attr in obj) {
        // eslint-disable-next-line no-prototype-builtins
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
      }

      return copy;
    },
    mergeInto: function (baseObj, additionalProps) {
      if (null == baseObj || "object" != typeof baseObj) return baseObj;
      const merged = baseObj.constructor();

      for (const attr in baseObj) {
        // eslint-disable-next-line no-prototype-builtins
        if (baseObj.hasOwnProperty(attr)) merged[attr] = baseObj[attr];
      }

      if (null == additionalProps || "object" != typeof additionalProps) return baseObj; // eslint-disable-next-line no-undef

      for (attr in additionalProps) {
        // eslint-disable-next-line no-prototype-builtins,no-undef
        if (additionalProps.hasOwnProperty(attr)) {
          // eslint-disable-next-line no-undef
          merged[attr] = additionalProps[attr];
        }
      }

      return merged;
    }
  }; // module.exports = { PhSigV4ClientUtils }

  _exports.default = PhSigV4ClientUtils;
});
;define("web-shell/lib/PhUrlTemplate", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.PhUriTemplate = void 0;

  /*
   UriTemplates Template Processor - Version: @VERSION - Dated: @DATE
   (c) marc.portier@gmail.com - 2011-2012
   Licensed under APLv2 (http://opensource.org/licenses/Apache-2.0)
   */
  var PhUriTemplate = function () {
    // Below are the functions we originally used from jQuery.
    // The implementations below are often more naive then what is inside jquery, but they suffice for our needs.
    function isFunction(fn) {
      return typeof fn == "function";
    }

    function isEmptyObject(obj) {
      for (var name in obj) {
        return false;
      }

      return true;
    }

    function extend(base, newprops) {
      for (var name in newprops) {
        base[name] = newprops[name];
      }

      return base;
    }
    /**
     * Create a runtime cache around retrieved values from the context.
     * This allows for dynamic (function) results to be kept the same for multiple
     * occuring expansions within one template.
     * Note: Uses key-value tupples to be able to cache null values as well.
     */
    //TODO move this into prep-processing


    function CachingContext(context) {
      this.raw = context;
      this.cache = {};
    }

    CachingContext.prototype.get = function (key) {
      var val = this.lookupRaw(key);
      var result = val;

      if (isFunction(val)) {
        // check function-result-cache
        var tupple = this.cache[key];

        if (tupple !== null && tupple !== undefined) {
          result = tupple.val;
        } else {
          result = val(this.raw);
          this.cache[key] = {
            key: key,
            val: result
          }; // NOTE: by storing tupples we make sure a null return is validly consistent too in expansions
        }
      }

      return result;
    };

    CachingContext.prototype.lookupRaw = function (key) {
      return CachingContext.lookup(this, this.raw, key);
    };

    CachingContext.lookup = function (me, context, key) {
      var result = context[key];

      if (result !== undefined) {
        return result;
      } else {
        var keyparts = key.split(".");
        var i = 0,
            keysplits = keyparts.length - 1;

        for (i = 0; i < keysplits; i++) {
          var leadKey = keyparts.slice(0, keysplits - i).join(".");
          var trailKey = keyparts.slice(-i - 1).join(".");
          var leadContext = context[leadKey];

          if (leadContext !== undefined) {
            return CachingContext.lookup(me, leadContext, trailKey);
          }
        }

        return undefined;
      }
    };

    function UriTemplate(set) {
      this.set = set;
    }

    UriTemplate.prototype.expand = function (context) {
      var cache = new CachingContext(context);
      var res = "";
      var i = 0,
          cnt = this.set.length;

      for (i = 0; i < cnt; i++) {
        res += this.set[i].expand(cache);
      }

      return res;
    }; //TODO: change since draft-0.6 about characters in literals

    /* extract:
     The characters outside of expressions in a URI Template string are intended to be copied literally to the URI-reference if the character is allowed in a URI (reserved / unreserved / pct-encoded) or, if not allowed, copied to the URI-reference in its UTF-8 pct-encoded form.
     */


    function Literal(txt) {
      this.txt = txt;
    }

    Literal.prototype.expand = function () {
      return this.txt;
    };

    var RESERVEDCHARS_RE = new RegExp("[:/?#\\[\\]@!$&()*+,=']", "g");

    function encodeNormal(val) {
      return encodeURIComponent(val).replace(RESERVEDCHARS_RE, function (s) {
        return escape(s);
      });
    } //var SELECTEDCHARS_RE = new RegExp("[]","g")


    function encodeReserved(val) {
      //return encodeURI(val).replace(SELECTEDCHARS_RE, function(s) {return escape(s)} )
      return encodeURI(val); // no need for additional replace if selected-chars is empty
    }

    function addUnNamed(name, key, val) {
      return key + (key.length > 0 ? "=" : "") + val;
    }

    function addNamed(name, key, val, noName) {
      noName = noName || false;

      if (noName) {
        name = "";
      }

      if (!key || key.length === 0) {
        key = name;
      }

      return key + (key.length > 0 ? "=" : "") + val;
    }

    function addLabeled(name, key, val, noName) {
      noName = noName || false;

      if (noName) {
        name = "";
      }

      if (!key || key.length === 0) {
        key = name;
      }

      return key + (key.length > 0 && val ? "=" : "") + val;
    }

    var simpleConf = {
      prefix: "",
      joiner: ",",
      encode: encodeNormal,
      builder: addUnNamed
    };
    var reservedConf = {
      prefix: "",
      joiner: ",",
      encode: encodeReserved,
      builder: addUnNamed
    };
    var fragmentConf = {
      prefix: "#",
      joiner: ",",
      encode: encodeReserved,
      builder: addUnNamed
    };
    var pathParamConf = {
      prefix: "",
      joiner: "",
      encode: encodeNormal,
      builder: addLabeled
    };
    var formParamConf = {
      prefix: "?",
      joiner: "&",
      encode: encodeNormal,
      builder: addNamed
    };
    var formContinueConf = {
      prefix: "&",
      joiner: "&",
      encode: encodeNormal,
      builder: addNamed
    };
    var pathHierarchyConf = {
      prefix: "/",
      joiner: "/",
      encode: encodeNormal,
      builder: addUnNamed
    };
    var labelConf = {
      prefix: ".",
      joiner: ".",
      encode: encodeNormal,
      builder: addUnNamed
    };

    function Expression(conf, vars) {
      extend(this, conf);
      this.vars = vars;
    }

    Expression.build = function (ops, vars) {
      var conf;

      switch (ops) {
        case "":
          conf = simpleConf;
          break;

        case "+":
          conf = reservedConf;
          break;

        case "#":
          conf = fragmentConf;
          break;

        case ";":
          conf = pathParamConf;
          break;

        case "?":
          conf = formParamConf;
          break;

        case "&":
          conf = formContinueConf;
          break;

        case "/":
          conf = pathHierarchyConf;
          break;

        case ".":
          conf = labelConf;
          break;

        default:
          throw "Unexpected operator: '" + ops + "'";
      }

      return new Expression(conf, vars);
    };

    Expression.prototype.expand = function (context) {
      var joiner = this.prefix;
      var nextjoiner = this.joiner;
      var buildSegment = this.builder;
      var res = "";
      var i = 0,
          cnt = this.vars.length;

      for (i = 0; i < cnt; i++) {
        var varspec = this.vars[i];
        varspec.addValues(context, this.encode, function (key, val, noName) {
          var segm = buildSegment(varspec.name, key, val, noName);

          if (segm !== null && segm !== undefined) {
            res += joiner + segm;
            joiner = nextjoiner;
          }
        });
      }

      return res;
    };

    var UNBOUND = {};
    /**
     * Helper class to help grow a string of (possibly encoded) parts until limit is reached
     */

    function Buffer(limit) {
      this.str = "";

      if (limit === UNBOUND) {
        this.appender = Buffer.UnboundAppend;
      } else {
        this.len = 0;
        this.limit = limit;
        this.appender = Buffer.BoundAppend;
      }
    }

    Buffer.prototype.append = function (part, encoder) {
      return this.appender(this, part, encoder);
    };

    Buffer.UnboundAppend = function (me, part, encoder) {
      part = encoder ? encoder(part) : part;
      me.str += part;
      return me;
    };

    Buffer.BoundAppend = function (me, part, encoder) {
      part = part.substring(0, me.limit - me.len);
      me.len += part.length;
      part = encoder ? encoder(part) : part;
      me.str += part;
      return me;
    };

    function arrayToString(arr, encoder, maxLength) {
      var buffer = new Buffer(maxLength);
      var joiner = "";
      var i = 0,
          cnt = arr.length;

      for (i = 0; i < cnt; i++) {
        if (arr[i] !== null && arr[i] !== undefined) {
          buffer.append(joiner).append(arr[i], encoder);
          joiner = ",";
        }
      }

      return buffer.str;
    }

    function objectToString(obj, encoder, maxLength) {
      var buffer = new Buffer(maxLength);
      var joiner = "";
      var k;

      for (k in obj) {
        // eslint-disable-next-line no-prototype-builtins
        if (obj.hasOwnProperty(k)) {
          if (obj[k] !== null && obj[k] !== undefined) {
            buffer.append(joiner + k + ",").append(obj[k], encoder);
            joiner = ",";
          }
        }
      }

      return buffer.str;
    }

    function simpleValueHandler(me, val, valprops, encoder, adder) {
      var result;

      if (valprops.isArr) {
        result = arrayToString(val, encoder, me.maxLength);
      } else if (valprops.isObj) {
        result = objectToString(val, encoder, me.maxLength);
      } else {
        var buffer = new Buffer(me.maxLength);
        result = buffer.append(val, encoder).str;
      }

      adder("", result);
    }

    function explodeValueHandler(me, val, valprops, encoder, adder) {
      if (valprops.isArr) {
        var i = 0,
            cnt = val.length;

        for (i = 0; i < cnt; i++) {
          adder("", encoder(val[i]));
        }
      } else if (valprops.isObj) {
        var k;

        for (k in val) {
          // eslint-disable-next-line no-prototype-builtins
          if (val.hasOwnProperty(k)) {
            adder(k, encoder(val[k]));
          }
        }
      } else {
        // explode-requested, but single value
        adder("", encoder(val));
      }
    }

    function valueProperties(val) {
      var isArr = false;
      var isObj = false;
      var isUndef = true; //note: "" is empty but not undef

      if (val !== null && val !== undefined) {
        isArr = val.constructor === Array;
        isObj = val.constructor === Object;
        isUndef = isArr && val.length === 0 || isObj && isEmptyObject(val);
      }

      return {
        isArr: isArr,
        isObj: isObj,
        isUndef: isUndef
      };
    }

    function VarSpec(name, vhfn, nums) {
      this.name = unescape(name);
      this.valueHandler = vhfn;
      this.maxLength = nums;
    }

    VarSpec.build = function (name, expl, part, nums) {
      // eslint-disable-next-line no-unused-vars
      var valueHandler, valueModifier;

      if (expl) {
        //interprete as boolean
        valueHandler = explodeValueHandler;
      } else {
        valueHandler = simpleValueHandler;
      }

      if (!part) {
        nums = UNBOUND;
      }

      return new VarSpec(name, valueHandler, nums);
    };

    VarSpec.prototype.addValues = function (context, encoder, adder) {
      var val = context.get(this.name);
      var valprops = valueProperties(val);

      if (valprops.isUndef) {
        return;
      } // ignore empty values


      this.valueHandler(this, val, valprops, encoder, adder);
    }; //----------------------------------------------parsing logic
    // How each varspec should look like


    var VARSPEC_RE = /([^*:]*)((\*)|(:)([0-9]+))?/;

    var match2varspec = function (m) {
      var name = m[1];
      var expl = m[3];
      var part = m[4];
      var nums = parseInt(m[5], 10);
      return VarSpec.build(name, expl, part, nums);
    }; // Splitting varspecs in list with:


    var LISTSEP = ","; // How each template should look like

    var TEMPL_RE = /(\{([+#.?&\/])?(([^.*:,{}|@!=$()][^*:,{}$()]*)(\*|:([0-9]+))?(,([^.*:,{}][^*:,{}]*)(\*|:([0-9]+))?)*)\})/g; // Note: reserved operators: |!@ are left out of the regexp in order to make those templates degrade into literals
    // (as expected by the spec - see tests.html "reserved operators")

    var match2expression = function (m) {
      // eslint-disable-next-line no-unused-vars
      var expr = m[0];
      var ops = m[2] || "";
      var vars = m[3].split(LISTSEP);
      var i = 0,
          len = vars.length;

      for (i = 0; i < len; i++) {
        var match;

        if ((match = vars[i].match(VARSPEC_RE)) === null) {
          throw "unexpected parse error in varspec: " + vars[i];
        }

        vars[i] = match2varspec(match);
      }

      return Expression.build(ops, vars);
    };

    var pushLiteralSubstr = function (set, src, from, to) {
      if (from < to) {
        var literal = src.substr(from, to - from);
        set.push(new Literal(literal));
      }
    };

    var parse = function (str) {
      var lastpos = 0;
      var comp = [];
      var match;
      var pattern = TEMPL_RE;
      pattern.lastIndex = 0; // just to be sure

      while ((match = pattern.exec(str)) !== null) {
        var newpos = match.index;
        pushLiteralSubstr(comp, str, lastpos, newpos);
        comp.push(match2expression(match));
        lastpos = pattern.lastIndex;
      }

      pushLiteralSubstr(comp, str, lastpos, str.length);
      return new UriTemplate(comp);
    }; //-------------------------------------------comments and ideas
    //TODO: consider building cache of previously parsed uris or even parsed expressions?


    return parse;
  }(); // module.exports = { PhUriTemplate }


  _exports.PhUriTemplate = PhUriTemplate;
});
;define("web-shell/models/page", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let PageModel = (_dec = (0, _model.attr)("string"), _dec2 = (0, _model.attr)("string"), _dec3 = (0, _model.attr)("string"), _dec4 = (0, _model.attr)("string"), _dec5 = (0, _model.attr)("string"), _dec6 = (0, _model.attr)("string"), _dec7 = (0, _model.attr)("number"), _dec8 = (0, _model.attr)("string"), (_class = class PageModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "projectName", _descriptor, this);

      _initializerDefineProperty(this, "version", _descriptor2, this);

      _initializerDefineProperty(this, "name", _descriptor3, this);

      _initializerDefineProperty(this, "route", _descriptor4, this);

      _initializerDefineProperty(this, "uri", _descriptor5, this);

      _initializerDefineProperty(this, "cat", _descriptor6, this);

      _initializerDefineProperty(this, "level", _descriptor7, this);

      _initializerDefineProperty(this, "engine", _descriptor8, this);
    } // ember, vue, react


  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "projectName", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "version", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "name", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "route", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "uri", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "cat", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "level", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "engine", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = PageModel;
});
;define("web-shell/models/project", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ProjectModel = (_dec = (0, _model.attr)("string"), _dec2 = (0, _model.attr)("string"), _dec3 = (0, _model.attr)("string"), _dec4 = (0, _model.attr)("string"), _dec5 = (0, _model.attr)("date"), (_class = class ProjectModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "name", _descriptor, this);

      _initializerDefineProperty(this, "provider", _descriptor2, this);

      _initializerDefineProperty(this, "owner", _descriptor3, this);

      _initializerDefineProperty(this, "type", _descriptor4, this);

      _initializerDefineProperty(this, "created", _descriptor5, this);
    } // @hasMany("model") models
    // @hasMany("script") scripts
    // @hasMany("dataset") datasets
    // @belongsTo("flow") flow
    // @belongsTo("analysis") analysis
    // @hasMany("notebook") notebooks
    // @hasMany("dash-board") dashBoards
    // @hasMany("wiki") wikis
    // @attr tasks
    // @attr actions


  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "provider", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "owner", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "type", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "created", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ProjectModel;
});
;define("web-shell/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
});
;define("web-shell/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
});
;define("web-shell/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
});
;define("web-shell/router", ["exports", "web-shell/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(async function () {
    // let scriptOptions = {
    // 	method: "GET",
    // 	headers: {
    // 		Authorization: config.APP.debugToken,
    // 		Accept: "application/vnd.api+json",
    // 		"Content-Type": "application/vnd.api+json",
    // 	}
    // }
    // const result = await fetch("https://apiv2.pharbers.com/phplatform/projects", scriptOptions).then(res => res.json())
    // console.log(result)
    this.route("shell", {
      path: "/"
    });
  });
});
;define("web-shell/routes/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ApplicationRoute = (_dec = Ember.inject.service, (_class = class ApplicationRoute extends Ember.Route {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "intl", _descriptor, this);
    }

    // @service oauthService
    beforeModel() {
      let curLang = window.localStorage.getItem("lang");

      if (curLang) {
        if (curLang === "中文") {
          this.intl.setLocale(["zh-cn"]);
        } else {
          this.intl.setLocale(["en-us"]);
        }
      } else {
        this.intl.setLocale(["zh-cn"]);
        window.localStorage.setItem("lang", "中文");
      } // TODO: 判断token
      // const judge = this.oauthService.judgeAuth()
      // if (!judge) {
      // 	window.href = ""
      // }

    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "intl", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ApplicationRoute;
});
;define("web-shell/routes/shell", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ShellRoute = (_dec = Ember.inject.service, (_class = class ShellRoute extends Ember.Route {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "store", _descriptor, this);
    }

    model() {
      // return this.store.findAll("project")
      return this.store.query("project", {
        "ids[]": ["jFlL0WS1Qwy5buKh"]
      });
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ShellRoute;
});
;define("web-shell/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("web-shell/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("web-shell/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("web-shell/serializers/application", ["exports", "ember-inflector", "@ember-data/serializer/json-api"], function (_exports, _emberInflector, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ApplicationSerializer extends _jsonApi.default {
    modelNameFromPayloadKey(key) {
      return (0, _emberInflector.singularize)(Ember.String.dasherize(key));
    }

    payloadKeyFromModelName(modelName) {
      return (0, _emberInflector.pluralize)(Ember.String.camelize(modelName));
    }

    keyForAttribute(key) {
      return Ember.String.dasherize(key).toLowerCase();
    }

    keyForRelationship(key) {
      return key;
    } // extractAttributes(modelClass, resourceHash) {
    // 	let keys = Object.keys(resourceHash.attributes)
    // 	let obj = {}
    // 	keys.forEach(ele => {
    // 		let k = camelize(ele)
    // 		obj[k] = resourceHash.attributes[ele]
    // 		if (ele === "start-date" || ele === "end-date" || ele === "date" ) {
    // 			obj[k] = Date.parse(resourceHash.attributes[ele])
    // 		}
    // 	})
    // 	return obj
    // }


  }

  _exports.default = ApplicationSerializer;
});
;define("web-shell/services/ajax", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  // import { computed } from "@ember/object"
  let AjaxService = (_dec = Ember.inject.service("cookies"), (_class = class AjaxService extends Ember.Service {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "cookies", _descriptor, this);
    }

    get headers() {
      let cookies = this.cookies;
      return {
        "Content-Type": "application/json",
        // 默认值
        Accept: "application/json",
        Authorization: `Bearer ${cookies.read("access_token")}`
      };
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "cookies", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = AjaxService;
});
;define("web-shell/services/aws-service", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  // import { computed } from "@ember/object"
  const credentials = {
    accessKeyId: "AKIAWPBDTVEAPOX3QT6U",
    secretAccessKey: "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"
  };

  class AwsServiceService extends Ember.Service {
    get s3Client() {
      AWS.config.update(credentials);
      AWS.config.update({
        region: "cn-northwest-1"
      });
      return new AWS.S3({
        apiVersion: "2006-03-01"
      });
    }

    get s3Avatar() {
      AWS.config.update(credentials);
      AWS.config.update({
        region: "cn-northwest-1"
      });
      return new AWS.S3({
        apiVersion: "2006-03-01",
        params: {
          Bucket: "general.pharbers.com"
        }
      });
    }

  }

  _exports.default = AwsServiceService;
});
;define("web-shell/services/browser-events-service", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _descriptor3;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let BrowserEventsServiceService = (_dec = Ember._tracked, _dec2 = Ember._tracked, _dec3 = Ember.inject.service, _dec4 = Ember._action, (_class = class BrowserEventsServiceService extends Ember.Service {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "param", _descriptor, this);

      _initializerDefineProperty(this, "routeName", _descriptor2, this);

      _initializerDefineProperty(this, "router", _descriptor3, this);
    }

    // 注册浏览器监听事件
    registerListener(route) {
      let that = this; // eslint-disable-next-line no-undef

      $(function () {
        that.param = this.location.href.split("?")[1];
        that.routeName = `/${route}?`; //回退

        if (window.history && window.history.pushState) {
          history.pushState(null, null, document.URL);
          window.addEventListener("popstate", that.popstateFun, false);
        } //关闭&刷新（页面有变动或距上次刷新间隔超过5s时生效）


        window.onbeforeunload = function (e) {
          return false;
        }; //文档加载完成后立即触发


        window.onload = function () {
          // 刷新回到指定页面
          that.router.transitionTo(`${that.routeName}${that.param}`);
        };
      });
    }

    popstateFun() {
      let that = this;
      let sel = confirm("您还没有保存更改，确认返回吗?");

      if (sel) {
        window.removeEventListener("popstate", that.popstateFun);
        that.router.transitionTo(`${that.routeName}${that.param}`);
      } else {
        history.pushState(null, null, document.URL);
      }
    } //清除浏览器监听事件


    clearListener() {
      window.onbeforeunload = undefined;
      window.removeEventListener("popstate", this.popstateFun);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "param", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "routeName", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "router", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "popstateFun", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "popstateFun"), _class.prototype)), _class));
  _exports.default = BrowserEventsServiceService;
});
;define("web-shell/services/cookies", ["exports", "ember-cookies/services/cookies"], function (_exports, _cookies) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _cookies.default;
  _exports.default = _default;
});
;define("web-shell/services/download-file", ["exports", "fetch"], function (_exports, _fetch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let DownloadFileService = (_dec = Ember.inject.service, (_class = class DownloadFileService extends Ember.Service {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "cookies", _descriptor, this);
    }

    downloadFile(param) {
      let source = param;
      let bucket = "";
      let key = "";
      const url = "https://api.pharbers.com/entry/download";

      if (source.indexOf("s3a://") != -1) {
        let str = source.slice(6, source.length);
        let num = str.indexOf("/");
        bucket = str.substring(0, num);
        key = str.substring(num + 1, str.length);
      } else {
        bucket = "ph-origin-files";
        key = source;
      }

      const body = {
        bucket: bucket,
        key: key
      };
      let options = {
        method: "POST",
        headers: {
          authorization: this.cookies.read("access_token"),
          "Content-Type": "application/json",
          accept: "application/json"
        },
        body: JSON.stringify(body)
      };
      (0, _fetch.default)(url, options).then(res => {
        return res.json();
      }).then(response => {
        let url = response.url;
        window.open(url); // let link = document.createElement( "a" )
        // link.download = "filename"
        // link.href = url
        // document.body.appendChild( link )
        // link.click()
        // document.body.removeChild( link )
      });
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "cookies", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = DownloadFileService;
});
;define("web-shell/services/intl", ["exports", "ember-intl/services/intl"], function (_exports, _intl) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _intl.default;
    }
  });
});
;define("web-shell/services/loading", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // eslint-disable-next-line ember/no-classic-classes
  var _default = Ember.Service.extend({
    loading: document.getElementById("loadingio-spinner-double-ring-ho1zizxmctu"),
    afterLoading: Ember.computed(function () {
      let loadingNum = 0;

      if (document.readyState === "complete" || document.readyState === "interactive") {
        loadingNum = 1;
      }

      return loadingNum;
    })
  });

  _exports.default = _default;
});
;define("web-shell/services/notice-service", ["exports", "fetch"], function (_exports, _fetch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let NoticeServiceService = (_dec = Ember.inject.service, _dec2 = Ember._tracked, _dec3 = Ember._tracked, _dec4 = Ember._tracked, (_class = class NoticeServiceService extends Ember.Service {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "cookies", _descriptor, this);

      _initializerDefineProperty(this, "subjectID", _descriptor2, this);

      _initializerDefineProperty(this, "subjectCallback", _descriptor3, this);

      _initializerDefineProperty(this, "uploadStatus", _descriptor4, this);
    }

    register(tableName, id, callback, ele, projectId) {
      // 持续30s，调用unregister删除
      if (this.subjectID.indexOf(id) == -1) {
        this.subjectID.push(id);
        this.subjectCallback.push({
          ele: ele,
          callback: callback,
          tableName: tableName,
          date: new Date().getTime(),
          projectId: projectId
        });
      }
    }

    unregister(id) {
      //删除id和callback函数
      let index = this.subjectID.indexOf(id);
      this.subjectID.splice(index, 1);
      this.subjectCallback.splice(index, 1);
    }

    observer() {
      // 定义timer，5秒请求一次, 无限循环，id数组大于0调用register，无返回不进行处理
      // query notification, id数组大于0时请求数据，超过30秒删除id，用callback进行处理
      let that = this;
      setInterval(async function () {
        let currentTime = new Date().getTime(); // 设置30s超时

        that.subjectCallback.forEach((item, index) => {
          if (currentTime - item.date > 120 * 1000) {
            that.unregister(that.subjectID[index]);
          }
        });

        if (that.subjectID.length > 0) {
          // let url = "https://apiv2.pharbers.com/phdydatasource/query"
          let conditions = [];
          that.subjectID.forEach((item, index) => {
            conditions.push({
              id: item,
              projectId: that.subjectCallback[index].projectId
            });
          });
          let url = "https://apiv2.pharbers.com/phdydatasource/batch_get_item";
          let headers = {
            Authorization: that.cookies.read("access_token"),
            "Content-Type": "application/vnd.api+json",
            Accept: "application/vnd.api+json"
          };
          let statusBody = {
            table: "notification",
            conditions: conditions
          };
          let options = {
            method: "POST",
            headers: headers,
            body: JSON.stringify(statusBody)
          };
          (0, _fetch.default)(url, options).then(res => res.json()).then(response => {
            if (response.data && response.data.length > 0) {
              let status = JSON.parse(response.data[0].attributes.message).cnotification.status;
              console.log(status); //以后会做成进度条

              if (status != "project_file_to_DS_running" && status != "dag_conf insert success") {
                let index = that.subjectID.indexOf(response.data[0].id);
                let targetCallback = that.subjectCallback[index]; // 将消息分发给不同component处理

                targetCallback.callback(response, targetCallback.ele); // 调用unregister

                that.unregister(response.data[0].id);
              }
            }
          });
        } else {
          console.log("notice observer");
        }
      }, 5 * 1000);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "cookies", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "subjectID", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "subjectCallback", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "uploadStatus", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  })), _class));
  _exports.default = NoticeServiceService;
});
;define("web-shell/services/oauth-service", ["exports", "web-shell/config/environment", "fetch"], function (_exports, _environment, _fetch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let OauthServiceService = (_dec = Ember.inject.service, _dec2 = Ember.inject.service, _dec3 = Ember.inject.service, _dec4 = Ember.inject.service, (_class = class OauthServiceService extends Ember.Service {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "cookies", _descriptor, this);

      _initializerDefineProperty(this, "ajax", _descriptor2, this);

      _initializerDefineProperty(this, "router", _descriptor3, this);

      _initializerDefineProperty(this, "store", _descriptor4, this);

      _defineProperty(this, "clientId", _environment.default.APP.clientId);

      _defineProperty(this, "clientSecret", _environment.default.APP.clientSecret);

      _defineProperty(this, "redirectUri", _environment.default.APP.redirectUri);
    }

    oauthCallback(transition) {
      const cookies = this.cookies;
      let that = this; // let urli = window.location.href

      transition.queryParams = {
        // "code": urli.substring(urli.lastIndexOf('code=')+5, urli.lastIndexOf('&state')),
        // "state":urli.substring(urli.lastIndexOf('state=')+6, urli.length),
        code: transition.intent.router._lastQueryParams.code,
        state: transition.intent.router._lastQueryParams.state
      };
      const {
        queryParams
      } = transition;

      if (queryParams.code && queryParams.state) {
        // 获取oauth-callback 中的query
        const redirectUri = this.redirectUri;
        const clientId = this.clientId;
        const secret = this.clientSecret;
        const grantType = "authorization_code";
        const code = queryParams.code; // const url = "https://2t69b7x032.execute-api.cn-northwest-1.amazonaws.com.cn/v0/oauth/token"

        const url = "https://apiv2.pharbers.com/oauth/token";
        const body = `code=${code}&grant_type=${grantType}&redirect_uri=${redirectUri}`; // const data = {
        // 	code: code,
        // 	grant_type: grantType,
        // 	redirect_uri: redirectUri
        // }

        const b64 = window.btoa(`${clientId}:${secret}`);
        const authorization = `Basic ${b64}`;
        let options = {
          method: "POST",
          headers: {
            authorization,
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            accept: "application/json, text/javascript, */*; q=0.01"
          },
          body: body
        };
        (0, _fetch.default)(url, options).then(res => {
          return res.json();
        }).then(async response => {
          this.removeAuth();
          let options = {
            domain: ".pharbers.com",
            path: "/",
            maxAge: response.expiresIn
          };
          cookies.write("access_token", response.access_token, options);
          cookies.write("refresh_token", response.refresh_token, options);
          cookies.write("token_type", response.token_type, options);
          cookies.write("expires_in", response.expiresIn, options);
          cookies.write("user_name", response.user.name, options);
          cookies.write("user_name_show", encodeURI(response.user.lastName + response.user.firstName), options);
          cookies.write("user_email", response.user.email, options);
          cookies.write("company_id", response.user.employerId, options);
          cookies.write("user_name_show", encodeURI(response.user.lastName + response.user.firstName), options);
          cookies.write("account_id", response.user.id, options);
          let userData = await that.store.findRecord("account", that.cookies.read("account_id")); //请求employer的数据

          let employerId = await userData.belongsTo("employer").id();
          let employerData = await that.store.findRecord("partner", employerId);
          cookies.write("company_name_show", encodeURI(employerData.name), options); // this.mqttService.mqttConnect()

          this.router.transitionTo("/download/my-data");
        }).catch(_ => {
          this.router.transitionTo("/download/my-data");
        });
      } else {
        this.router.transitionTo("/download/my-data");
      }
    }

    judgeAuth() {
      let tokenFlag = false;
      let token = this.cookies.read("access_token");

      if (typeof token !== "undefined" && token !== null && token !== "") {
        tokenFlag = true;
      }

      return tokenFlag; // 前端没有scope，能否访问进行对应的query
    }

    removeAuth() {
      let options = {
        domain: ".pharbers.com",
        path: "/"
      };
      let keys = document.cookie.match(/[^ =;]+(?=\=)/g);

      if (keys) {
        keys.forEach(x => {
          this.cookies.clear(x, options);
        });
      }

      window.console.log("clear cookies!");
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "cookies", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "ajax", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "router", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "store", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = OauthServiceService;
});
;define("web-shell/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
});
;define("web-shell/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
});
;define("web-shell/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("web-shell/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "xn46rKZ4",
    "block": "[[[1,[28,[35,0],[\"web shell\"],null]],[1,\"\\n\"],[3,\"<pharbers-bp-nav-top></pharbers-bp-nav-top>\"],[1,\"\\n\\n\"],[46,[28,[37,2],null,null],null,null,null],[1,\"\\n\\n\"],[3,\"<pharbers-bp-page-bottom></pharbers-bp-page-bottom>\"],[1,\"\\n\"]],[],false,[\"page-title\",\"component\",\"-outlet\"]]",
    "moduleName": "web-shell/templates/application.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("web-shell/templates/shell", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "9Lg1le8/",
    "block": "[[[1,[28,[35,0],[\"shell\"],null]],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"model\"]]],null]],null],null,[[[1,\"    \"],[10,\"li\"],[12],[1,[30,1,[\"name\"]]],[13],[1,\"\\n\"]],[1]],null],[46,[28,[37,4],null,null],null,null,null],[1,\"\\n\"]],[\"iter\"],false,[\"page-title\",\"each\",\"-track-array\",\"component\",\"-outlet\"]]",
    "moduleName": "web-shell/templates/shell.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("web-shell/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("web-shell/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("web-shell/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("web-shell/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;define("web-shell/utils/intl/missing-message", ["exports", "ember-intl/-private/utils/missing-message"], function (_exports, _missingMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _missingMessage.default;
    }
  });
});
;

;define('web-shell/config/environment', [], function() {
  var prefix = 'web-shell';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("web-shell/app")["default"].create({"redirectUri":"https://general.pharbers.com/oauth-callback","pharbersUri":"https://www.pharbers.com","accountsUri":"https://accounts.pharbers.com","host":"https://oauth.pharbers.com","apiUri":"https://apiv2.pharbers.com","apiHost":"apiv2.pharbers.com","clientId":"V5I67BHIRVR2Z59kq-a-","clientSecret":"961ed4ad842147a5c9a1cbc633693438e1f4a8ebb71050d9d9f7c43dbadf9b72","scope":"APP|*|R","clientName":"general","isNeedMenu":true,"debugToken":"2409e17c0ee70a7048c585c07c060fad5fc83ccf378ec0e0c80943ddc9cb783a","name":"web-shell","version":"0.0.0+1a1b016b"});
          }
        
//# sourceMappingURL=web-shell.map
