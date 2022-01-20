<<<<<<< Updated upstream
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

      _defineProperty(this, "authType", "oauth");
    }

    pathForType(type) {
      let typeArray = ["activity", "cooperation", "event", "image", "page", "participant", "project", "report", "zone"];

      if (typeArray.indexOf(type) !== -1) {
        this.authType = "iam";
        return "phtemplate/" + (0, _emberInflector.pluralize)(Ember.String.dasherize(type));
      } else {
        this.authType = "oauth";
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
    } // eslint-disable-next-line no-unused-vars


    buildURL(modelName, id, snapshot, requestType, query) {
      const url = super.buildURL(...arguments);

      if (this.authType === "iam") {
        this.iamHeaders = (0, _PhIamClicent.ComputeJSONAPIIamHeader)(_environment.default.APP.apiHost, url, {}, query, _environment.default.APP.AWS_ACCESS_KEY, _environment.default.APP.AWS_SECRET_KEY);
      }

      return url;
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
    }

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
      } else if (this.authType === "iam") {
        return this.iamHeaders;
      }
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
;define("web-shell/components/-dynamic-element-alt", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // This component is not needed anymore. However we can only safely remove it once we have an Embroider release that
  // has the special dependency rule for this addon removed:
  // https://github.com/embroider-build/embroider/blob/4fad67f16f811e7f93199a1ee92dba8254c42978/packages/compat/src/addon-dependency-rules/ember-element-helper.ts
  var _default = Ember.Component.extend();

  _exports.default = _default;
});
;define("web-shell/components/-dynamic-element", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // This component is not needed anymore. However we can only safely remove it once we have an Embroider release that
  // has the special dependency rule for this addon removed:
  // https://github.com/embroider-build/embroider/blob/4fad67f16f811e7f93199a1ee92dba8254c42978/packages/compat/src/addon-dependency-rules/ember-element-helper.ts
  var _default = Ember.Component.extend();

  _exports.default = _default;
});
;define("web-shell/components/iframe-context", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <h2>iframe component</h2>
  {{yield}}
  
  */
  {
    "id": "qBmSBU+/",
    "block": "[[[10,\"h2\"],[12],[1,\"iframe component\"],[13],[1,\"\\n\"],[18,1,null],[1,\"\\n\"]],[\"&default\"],false,[\"yield\"]]",
    "moduleName": "web-shell/components/iframe-context.hbs",
    "isStrictMode": false
  });

  class IframeContextComponent extends _component.default {}

  _exports.default = IframeContextComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, IframeContextComponent);
});
;define("web-shell/components/pharbers-footer", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <pharbers-bp-page-bottom {{on "linkToPage" linkToPage}}></pharbers-bp-page-bottom>
  */
  {
    "id": "2cTCYmx2",
    "block": "[[[11,\"pharbers-bp-page-bottom\"],[4,[38,0],[\"linkToPage\",[33,1]],null],[12],[13]],[],false,[\"on\",\"linkToPage\"]]",
    "moduleName": "web-shell/components/pharbers-footer.hbs",
    "isStrictMode": false
  });

  let PharbersFooterComponent = (_dec = Ember.inject.service, _dec2 = Ember._action, (_class = class PharbersFooterComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "router", _descriptor, this);
    }

    linkToPage(data) {
      if (data.detail[0] == "home" && this.router.currentRouteName == "home") {
        window.location.reload();
      } else {
        this.router.transitionTo("shell", data.detail[0]);
      }
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "linkToPage", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "linkToPage"), _class.prototype)), _class));
  _exports.default = PharbersFooterComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, PharbersFooterComponent);
});
;define("web-shell/components/pharbers-nav-top", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{#if @model.inverse}}
  	<pharbers-bp-nav-top 
  		inversebase 
  		{{on "linkToPage" linkToPage}} 
  		{{on "logout" logout}} 
  		is-login={{isLogin}}
  	></pharbers-bp-nav-top>
  {{else}}
  	<pharbers-bp-nav-top 
  		{{on "linkToPage" linkToPage}} 
  		{{on "logout" logout}} 
  		is-login={{isLogin}}
  	></pharbers-bp-nav-top>
  {{/if}}
  
  */
  {
    "id": "U/RQt9av",
    "block": "[[[41,[30,1,[\"inverse\"]],[[[1,\"\\t\"],[11,\"pharbers-bp-nav-top\"],[24,\"inversebase\",\"\"],[16,\"is-login\",[36,1]],[4,[38,2],[\"linkToPage\",[33,3]],null],[4,[38,2],[\"logout\",[33,4]],null],[12],[13],[1,\"\\n\"]],[]],[[[1,\"\\t\"],[11,\"pharbers-bp-nav-top\"],[16,\"is-login\",[36,1]],[4,[38,2],[\"linkToPage\",[33,3]],null],[4,[38,2],[\"logout\",[33,4]],null],[12],[13],[1,\"\\n\"]],[]]]],[\"@model\"],false,[\"if\",\"isLogin\",\"on\",\"linkToPage\",\"logout\"]]",
    "moduleName": "web-shell/components/pharbers-nav-top.hbs",
    "isStrictMode": false
  });

  let PharbersNavTopComponent = (_dec = Ember.inject.service('oauth-service'), _dec2 = Ember._tracked, _dec3 = Ember._tracked, _dec4 = Ember.inject.service, _dec5 = Ember._action, _dec6 = Ember._action, (_class = class PharbersNavTopComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "oauthService", _descriptor, this);

      _initializerDefineProperty(this, "topResponseMini", _descriptor2, this);

      _initializerDefineProperty(this, "isLogin", _descriptor3, this);

      _initializerDefineProperty(this, "router", _descriptor4, this);
    }

    linkToPage(data) {
      this.router.transitionTo("shell", data.detail[0]);
    }

    logout() {
      this.oauthService.removeAuth();
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "oauthService", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "topResponseMini", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "isLogin", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "router", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "linkToPage", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "linkToPage"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "logout", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "logout"), _class.prototype)), _class));
  _exports.default = PharbersNavTopComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, PharbersNavTopComponent);
});
;define("web-shell/components/shell-component", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{#if (eq this.engine "web-component")}}
      <Wc-context @name={{this.name}} @allData={{@model}}/>
  {{else if (eq this.engine "iframe-component")}}
      <Iframe-context></Iframe-context>
  {{else}}
      <h2>not implement shell component</h2>
  {{/if}}
  {{yield}}
  
  */
  {
    "id": "6SHiJWWM",
    "block": "[[[41,[28,[37,1],[[30,0,[\"engine\"]],\"web-component\"],null],[[[1,\"    \"],[8,[39,2],null,[[\"@name\",\"@allData\"],[[30,0,[\"name\"]],[30,1]]],null],[1,\"\\n\"]],[]],[[[41,[28,[37,1],[[30,0,[\"engine\"]],\"iframe-component\"],null],[[[1,\"    \"],[8,[39,3],null,null,[[\"default\"],[[[],[]]]]],[1,\"\\n\"]],[]],[[[1,\"    \"],[10,\"h2\"],[12],[1,\"not implement shell component\"],[13],[1,\"\\n\"]],[]]]],[]]],[18,2,null],[1,\"\\n\"]],[\"@model\",\"&default\"],false,[\"if\",\"eq\",\"wc-context\",\"iframe-context\",\"yield\"]]",
    "moduleName": "web-shell/components/shell-component.hbs",
    "isStrictMode": false
  });

  class ShellComponentComponent extends _component.default {
    /**
     * 3. 动态加载Component, 这里的作用是将事件利用Event隔离
     */
    get engine() {
      return this.args.model.page.engine;
    }

    get name() {
      return this.args.model.page.name;
    }

  }

  _exports.default = ShellComponentComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, ShellComponentComponent);
});
;define("web-shell/components/wc-context", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{#let (element @name) as |E|}}
      <E
  		allData={{@allData}}
          {{did-insert this.registerListener}}
          {{will-destroy this.unregisterListener}}>
      ></E>
  {{/let}}
  {{yield}}
  
  */
  {
    "id": "TIMGW/BO",
    "block": "[[[44,[[50,[28,[37,2],[[28,[37,3],[[30,1]],null]],null],0,null,[[\"tagName\"],[[30,1]]]]],[[[1,\"    \"],[8,[30,2],[[16,\"allData\",[30,3]],[4,[38,4],[[30,0,[\"registerListener\"]]],null],[4,[38,5],[[30,0,[\"unregisterListener\"]]],null]],null,[[\"default\"],[[[[1,\"\\n    >\"]],[]]]]],[1,\"\\n\"]],[2]]],[18,4,null],[1,\"\\n\"]],[\"@name\",\"E\",\"@allData\",\"&default\"],false,[\"let\",\"component\",\"ensure-safe-component\",\"-element\",\"did-insert\",\"will-destroy\",\"yield\"]]",
    "moduleName": "web-shell/components/wc-context.hbs",
    "isStrictMode": false
  });

  let WcContextComponent = (_dec = Ember.inject.service, _dec2 = Ember._action, _dec3 = Ember._action, _dec4 = Ember._action, (_class = class WcContextComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "router", _descriptor, this);
    }

    async listener(e) {
      console.log("alfred listener action");
      let modelName = Ember.String.camelize(this.args.allData.page.name) + "EventHandler";
      await window[this.args.allData.page.clientName][modelName](e, this);
    }

    async registerListener(element) {
      this.args.allData.data._isVue = true;
      element.allData = this.args.allData.data;
      element.addEventListener("event", this.listener);
    }

    unregisterListener(element) {
      element.removeEventListener("event", this.listener);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "listener", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "listener"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "registerListener", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "registerListener"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "unregisterListener", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "unregisterListener"), _class.prototype)), _class));
  _exports.default = WcContextComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, WcContextComponent);
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
;define("web-shell/helpers/-element", ["exports", "ember-element-helper/helpers/-element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
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
;define("web-shell/helpers/element", ["exports", "ember-element-helper/helpers/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("web-shell/helpers/ensure-safe-component", ["exports", "@embroider/util"], function (_exports, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _util.EnsureSafeComponentHelper;
    }
  });
});
;define("web-shell/helpers/eq", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Helper.helper(function eq([left, right]) {
    return left === right;
  });

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
;define("web-shell/lib/PhIamClicent", ["exports", "web-shell/lib/PhSigV4AWSClientFactory"], function (_exports, _PhSigV4AWSClientFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ComputeJSONAPIIamHeader = ComputeJSONAPIIamHeader;

  /**
   *  alfredyang@pharbers.com 2021.12.31
   */
  function ComputeJSONAPIIamHeader(apiHost, path, body, query, ak, sk, ct = "application/vnd.api+json", at = "application/vnd.api+json", method = "GET") {
    const factory = _PhSigV4AWSClientFactory.default;
    const endpoint = /(^https?:\/\/[^\/]+)/g.exec(path)[1];
    const pathComponent = path.substring(endpoint.length);
    let queryURL = pathComponent;
    const queryParamIndex = queryURL.lastIndexOf("?");

    if (queryParamIndex > -1) {
      queryURL = queryURL.substring(0, queryParamIndex);
    }

    const sigV4ClientConfig = {
      accessKey: ak,
      secretKey: sk,
      sessionToken: "",
      serviceName: "execute-api",
      region: "cn-northwest-1",
      endpoint: apiHost,
      defaultContentType: ct,
      defaultAcceptType: at
    };
    const client = factory.PhSigV4AWSClientFactory.newClient(sigV4ClientConfig);
    const queryKeys = Object.keys(query);
    let queryParams = {};

    for (let idx = 0; idx < queryKeys.length; ++idx) {
      const k = encodeURI(queryKeys[idx]); // const v = encodeURI(query[queryKeys[idx]])

      const v = query[queryKeys[idx]];
      queryParams[k] = v;
    }

    let req = {
      verb: method.toUpperCase(),
      path: queryURL,
      queryParams: queryParams,
      body: {}
    };
    const request = client.makeRequest(req);
    return request.headers;
  }
});
;define("web-shell/lib/PhSigV4AWSClientFactory", ["exports", "web-shell/lib/PhSigV4ClientUtils"], function (_exports, _PhSigV4ClientUtils) {
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
  const CryptoJS = require("crypto-js"); // const PhSigV4ClientUtils  = require("./PhSigV4ClientUtils").default


  let PhSigV4AWSClientFactory = {};
  _exports.PhSigV4AWSClientFactory = PhSigV4AWSClientFactory;

  PhSigV4AWSClientFactory.newClient = function (config) {
    const AWS_SHA_256 = 'AWS4-HMAC-SHA256';
    const AWS4_REQUEST = 'aws4_request';
    const AWS4 = 'AWS4';
    const X_AMZ_DATE = 'x-amz-date';
    const X_AMZ_SECURITY_TOKEN = 'x-amz-security-token';
    const HOST = 'host';
    const AUTHORIZATION = 'Authorization';

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
      return method + '\n' + buildCanonicalUri(path) + '\n' + buildCanonicalQueryString(queryParams) + '\n' + buildCanonicalHeaders(headers) + '\n' + buildCanonicalSignedHeaders(headers) + '\n' + hexEncode(hash(payload));
    }

    function hashCanonicalRequest(request) {
      return hexEncode(hash(request));
    }

    function buildCanonicalUri(uri) {
      return encodeURI(uri);
    }

    function buildCanonicalQueryString(queryParams) {
      if (Object.keys(queryParams).length < 1) {
        return '';
      }

      let sortedQueryParams = [];

      for (const property in queryParams) {
        if (queryParams.hasOwnProperty(property)) {
          sortedQueryParams.push(property);
        }
      }

      sortedQueryParams.sort();
      let canonicalQueryString = '';

      for (let i = 0; i < sortedQueryParams.length; i++) {
        if (sortedQueryParams[i] === encodeURI("ids[]")) {
          // let idsArr = queryParams[sortedQueryParams[i]].split(",").sort()
          let idsArr = queryParams[sortedQueryParams[i]].sort();

          for (let j = 0; j < idsArr.length; j++) {
            canonicalQueryString += sortedQueryParams[i] + '=' + fixedEncodeURIComponent(idsArr[j]) + '&';
          }
        } else {
          canonicalQueryString += sortedQueryParams[i] + '=' + fixedEncodeURIComponent(queryParams[sortedQueryParams[i]]) + '&';
        }
      }

      return canonicalQueryString.substr(0, canonicalQueryString.length - 1);
    }

    function fixedEncodeURIComponent(str) {
      let newStr = encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return '%' + c.charCodeAt(0).toString(16).toUpperCase();
      });
      newStr = newStr.replace(/%26/g, "&");
      newStr = newStr.replace(/%3D/g, "=");
      return newStr; //   return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
      //     return '%' + c.charCodeAt(0).toString(16).toUpperCase();
      //   });
    }

    function buildCanonicalHeaders(headers) {
      let canonicalHeaders = '';
      let sortedKeys = [];

      for (const property in headers) {
        if (headers.hasOwnProperty(property)) {
          sortedKeys.push(property);
        }
      }

      sortedKeys.sort();

      for (let i = 0; i < sortedKeys.length; i++) {
        canonicalHeaders += sortedKeys[i].toLowerCase() + ':' + headers[sortedKeys[i]] + '\n';
      }

      return canonicalHeaders;
    }

    function buildCanonicalSignedHeaders(headers) {
      let sortedKeys = [];

      for (const property in headers) {
        if (headers.hasOwnProperty(property)) {
          sortedKeys.push(property.toLowerCase());
        }
      }

      sortedKeys.sort();
      return sortedKeys.join(';');
    }

    function buildStringToSign(datetime, credentialScope, hashedCanonicalRequest) {
      return AWS_SHA_256 + '\n' + datetime + '\n' + credentialScope + '\n' + hashedCanonicalRequest;
    }

    function buildCredentialScope(datetime, region, service) {
      return datetime.substr(0, 8) + '/' + region + '/' + service + '/' + AWS4_REQUEST;
    }

    function calculateSigningKey(secretKey, datetime, region, service) {
      return hmac(hmac(hmac(hmac(AWS4 + secretKey, datetime.substr(0, 8)), region), service), AWS4_REQUEST);
    }

    function calculateSignature(key, stringToSign) {
      return hexEncode(hmac(key, stringToSign));
    }

    function buildAuthorizationHeader(accessKey, credentialScope, headers, signature) {
      return AWS_SHA_256 + ' Credential=' + accessKey + '/' + credentialScope + ', SignedHeaders=' + buildCanonicalSignedHeaders(headers) + ', Signature=' + signature;
    }

    let awsSigV4Client = {};

    if (config.accessKey === undefined || config.secretKey === undefined) {
      return awsSigV4Client;
    }

    awsSigV4Client.accessKey = _PhSigV4ClientUtils.default.assertDefined(config.accessKey, 'accessKey');
    awsSigV4Client.secretKey = _PhSigV4ClientUtils.default.assertDefined(config.secretKey, 'secretKey');
    awsSigV4Client.sessionToken = config.sessionToken;
    awsSigV4Client.serviceName = _PhSigV4ClientUtils.default.assertDefined(config.serviceName, 'serviceName');
    awsSigV4Client.region = _PhSigV4ClientUtils.default.assertDefined(config.region, 'region');
    awsSigV4Client.endpoint = _PhSigV4ClientUtils.default.assertDefined(config.endpoint, 'endpoint');

    awsSigV4Client.makeRequest = function (request) {
      const verb = _PhSigV4ClientUtils.default.assertDefined(request.verb, 'verb');

      const path = _PhSigV4ClientUtils.default.assertDefined(request.path, 'path');

      let queryParams = _PhSigV4ClientUtils.default.copy(request.queryParams);

      if (queryParams === undefined) {
        queryParams = {};
      }

      let headers = _PhSigV4ClientUtils.default.copy(request.headers);

      if (headers === undefined) {
        headers = {};
      } //If the user has not specified an override for Content type the use default


      if (headers['Content-Type'] === undefined) {
        headers['Content-Type'] = config.defaultContentType;
      } //If the user has not specified an override for Accept type the use default


      if (headers['Accept'] === undefined) {
        headers['Accept'] = config.defaultAcceptType;
      }

      let body = _PhSigV4ClientUtils.default.copy(request.body);

      if (body === undefined || verb === 'GET') {
        // override request body and set to empty when signing GET requests
        body = '';
      } else {
        body = JSON.stringify(body);
      } //If there is no body remove the content-type header so it is not included in SigV4 calculation


      if (body === '' || body === undefined || body === null) {
        delete headers['Content-Type'];
      }

      let datetime = new Date().toISOString().replace(/\.\d{3}Z$/, 'Z').replace(/[:\-]|\.\d{3}/g, '');
      headers[X_AMZ_DATE] = datetime; // const parser = document.createElement('a');
      // parser.href = awsSigV4Client.endpoint;
      // headers[HOST] = "2t69b7x032.execute-api.cn-northwest-1.amazonaws.com.cn"

      headers[HOST] = "apiv2.pharbers.com";
      const canonicalRequest = buildCanonicalRequest(verb, path, queryParams, headers, body);
      const hashedCanonicalRequest = hashCanonicalRequest(canonicalRequest);
      const credentialScope = buildCredentialScope(datetime, awsSigV4Client.region, awsSigV4Client.serviceName);
      const stringToSign = buildStringToSign(datetime, credentialScope, hashedCanonicalRequest);
      const signingKey = calculateSigningKey(awsSigV4Client.secretKey, datetime, awsSigV4Client.region, awsSigV4Client.serviceName);
      const signature = calculateSignature(signingKey, stringToSign);
      headers[AUTHORIZATION] = buildAuthorizationHeader(awsSigV4Client.accessKey, credentialScope, headers, signature);

      if (awsSigV4Client.sessionToken !== undefined && awsSigV4Client.sessionToken !== '') {
        headers[X_AMZ_SECURITY_TOKEN] = awsSigV4Client.sessionToken;
      }

      delete headers[HOST];
      let url = config.endpoint + path;
      const queryString = buildCanonicalQueryString(queryParams);

      if (queryString !== '') {
        url += '?' + queryString;
      } //Need to re-attach Content-Type if it is not specified at this point


      if (headers['Content-Type'] === undefined) {
        headers['Content-Type'] = config.defaultContentType;
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
        throw name + ' must be defined';
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
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
      }

      return copy;
    },
    mergeInto: function (baseObj, additionalProps) {
      if (null == baseObj || "object" != typeof baseObj) return baseObj;
      const merged = baseObj.constructor();

      for (const attr in baseObj) {
        if (baseObj.hasOwnProperty(attr)) merged[attr] = baseObj[attr];
      }

      if (null == additionalProps || "object" != typeof additionalProps) return baseObj;

      for (attr in additionalProps) {
        if (additionalProps.hasOwnProperty(attr)) merged[attr] = additionalProps[attr];
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
  ;

  var PhUriTemplate = function () {
    // Below are the functions we originally used from jQuery.
    // The implementations below are often more naive then what is inside jquery, but they suffice for our needs.
    function isFunction(fn) {
      return typeof fn == 'function';
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
        var keyparts = key.split('.');
        var i = 0,
            keysplits = keyparts.length - 1;

        for (i = 0; i < keysplits; i++) {
          var leadKey = keyparts.slice(0, keysplits - i).join('.');
          var trailKey = keyparts.slice(-i - 1).join('.');
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

    var RESERVEDCHARS_RE = new RegExp("[:/?#\\[\\]@!$&()*+,;=']", "g");

    function encodeNormal(val) {
      return encodeURIComponent(val).replace(RESERVEDCHARS_RE, function (s) {
        return escape(s);
      });
    } //var SELECTEDCHARS_RE = new RegExp("[]","g");


    function encodeReserved(val) {
      //return encodeURI(val).replace(SELECTEDCHARS_RE, function(s) {return escape(s)} );
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
      prefix: ";",
      joiner: ";",
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
        case '':
          conf = simpleConf;
          break;

        case '+':
          conf = reservedConf;
          break;

        case '#':
          conf = fragmentConf;
          break;

        case ';':
          conf = pathParamConf;
          break;

        case '?':
          conf = formParamConf;
          break;

        case '&':
          conf = formContinueConf;
          break;

        case '/':
          conf = pathHierarchyConf;
          break;

        case '.':
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
        if (obj.hasOwnProperty(k)) {
          if (obj[k] !== null && obj[k] !== undefined) {
            buffer.append(joiner + k + ',').append(obj[k], encoder);
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
      var valueHandler, valueModifier;

      if (!!expl) {
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

    var TEMPL_RE = /(\{([+#.;?&\/])?(([^.*:,{}|@!=$()][^*:,{}$()]*)(\*|:([0-9]+))?(,([^.*:,{}][^*:,{}]*)(\*|:([0-9]+))?)*)\})/g; // Note: reserved operators: |!@ are left out of the regexp in order to make those templates degrade into literals
    // (as expected by the spec - see tests.html "reserved operators")

    var match2expression = function (m) {
      var expr = m[0];
      var ops = m[2] || '';
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
;define("web-shell/models/activity", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ActivityModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.attr)('date'), _dec4 = (0, _model.attr)('date'), _dec5 = (0, _model.attr)('string'), _dec6 = (0, _model.attr)('string'), _dec7 = (0, _model.attr)('string'), _dec8 = (0, _model.attr)('string'), _dec9 = (0, _model.attr)('string'), _dec10 = (0, _model.hasMany)('image'), _dec11 = (0, _model.hasMany)("report"), _dec12 = (0, _model.hasMany)("zone"), _dec13 = (0, _model.belongsTo)('image'), _dec14 = (0, _model.belongsTo)('image'), _dec15 = (0, _model.hasMany)("cooperation"), _dec16 = (0, _model.attr)('number'), (_class = class ActivityModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "title", _descriptor, this);

      _initializerDefineProperty(this, "subTitle", _descriptor2, this);

      _initializerDefineProperty(this, "startDate", _descriptor3, this);

      _initializerDefineProperty(this, "endDate", _descriptor4, this);

      _initializerDefineProperty(this, "location", _descriptor5, this);

      _initializerDefineProperty(this, "city", _descriptor6, this);

      _initializerDefineProperty(this, "activityType", _descriptor7, this);

      _initializerDefineProperty(this, "contentTitle", _descriptor8, this);

      _initializerDefineProperty(this, "contentDesc", _descriptor9, this);

      _initializerDefineProperty(this, "gallery", _descriptor10, this);

      _initializerDefineProperty(this, "attachments", _descriptor11, this);

      _initializerDefineProperty(this, "agendas", _descriptor12, this);

      _initializerDefineProperty(this, "logo", _descriptor13, this);

      _initializerDefineProperty(this, "logoOnTime", _descriptor14, this);

      _initializerDefineProperty(this, "partners", _descriptor15, this);

      _initializerDefineProperty(this, "language", _descriptor16, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "title", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "subTitle", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "startDate", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "endDate", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "location", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "city", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "activityType", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "contentTitle", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "contentDesc", [_dec9], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "gallery", [_dec10], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "attachments", [_dec11], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "agendas", [_dec12], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "logo", [_dec13], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "logoOnTime", [_dec14], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, "partners", [_dec15], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, "language", [_dec16], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ActivityModel;
});
;define("web-shell/models/cooperation", ["exports", "@ember-data/model"], function (_exports, _model) {
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

  let CooperationModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.attr)('string'), _dec4 = (0, _model.attr)('number'), _dec5 = (0, _model.belongsTo)('image'), (_class = class CooperationModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "name", _descriptor, this);

      _initializerDefineProperty(this, "companyType", _descriptor2, this);

      _initializerDefineProperty(this, "logo", _descriptor3, this);

      _initializerDefineProperty(this, "language", _descriptor4, this);

      _initializerDefineProperty(this, "logo", _descriptor5, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "companyType", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "logo", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "language", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "logo", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = CooperationModel;
});
;define("web-shell/models/event", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let EventModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.attr)('string'), _dec4 = (0, _model.attr)('date'), _dec5 = (0, _model.attr)('date'), _dec6 = (0, _model.attr)('number'), _dec7 = (0, _model.hasMany)("participant"), (_class = class EventModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "title", _descriptor, this);

      _initializerDefineProperty(this, "subTitle", _descriptor2, this);

      _initializerDefineProperty(this, "description", _descriptor3, this);

      _initializerDefineProperty(this, "startDate", _descriptor4, this);

      _initializerDefineProperty(this, "endDate", _descriptor5, this);

      _initializerDefineProperty(this, "language", _descriptor6, this);

      _initializerDefineProperty(this, "speakers", _descriptor7, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "title", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "subTitle", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "description", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "startDate", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "endDate", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "language", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "speakers", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = EventModel;
});
;define("web-shell/models/image", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _descriptor3;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ImageModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.belongsTo)('image'), (_class = class ImageModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "path", _descriptor, this);

      _initializerDefineProperty(this, "tag", _descriptor2, this);

      _initializerDefineProperty(this, "report", _descriptor3, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "path", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "tag", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "report", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ImageModel;
});
;define("web-shell/models/page", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let PageModel = (_dec = (0, _model.attr)("string"), _dec2 = (0, _model.attr)("string"), _dec3 = (0, _model.attr)("string"), _dec4 = (0, _model.attr)("string"), _dec5 = (0, _model.attr)("string"), _dec6 = (0, _model.attr)("string"), _dec7 = (0, _model.attr)("string"), _dec8 = (0, _model.attr)("number"), _dec9 = (0, _model.attr)("string"), (_class = class PageModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "client-id", _descriptor, this);

      _initializerDefineProperty(this, "clientName", _descriptor2, this);

      _initializerDefineProperty(this, "version", _descriptor3, this);

      _initializerDefineProperty(this, "name", _descriptor4, this);

      _initializerDefineProperty(this, "route", _descriptor5, this);

      _initializerDefineProperty(this, "uri", _descriptor6, this);

      _initializerDefineProperty(this, "cat", _descriptor7, this);

      _initializerDefineProperty(this, "level", _descriptor8, this);

      _initializerDefineProperty(this, "engine", _descriptor9, this);
    } // ember, vue, react


  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "client-id", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "clientName", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "version", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "name", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "route", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "uri", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "cat", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "level", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "engine", [_dec9], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = PageModel;
});
;define("web-shell/models/participant", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ReportModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.attr)('string'), _dec4 = (0, _model.attr)('number'), _dec5 = (0, _model.belongsTo)('image'), _dec6 = (0, _model.belongsTo)('event'), _dec7 = (0, _model.belongsTo)('zone'), (_class = class ReportModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "name", _descriptor, this);

      _initializerDefineProperty(this, "title", _descriptor2, this);

      _initializerDefineProperty(this, "occupation", _descriptor3, this);

      _initializerDefineProperty(this, "language", _descriptor4, this);

      _initializerDefineProperty(this, "avatar", _descriptor5, this);

      _initializerDefineProperty(this, "event", _descriptor6, this);

      _initializerDefineProperty(this, "zone", _descriptor7, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "title", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "occupation", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "language", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "avatar", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "event", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "zone", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ReportModel;
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
;define("web-shell/models/report", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ReportModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.attr)('string'), _dec4 = (0, _model.attr)('date'), _dec5 = (0, _model.attr)('date'), _dec6 = (0, _model.attr)('number'), _dec7 = (0, _model.belongsTo)('image'), _dec8 = (0, _model.belongsTo)('activity'), _dec9 = (0, _model.hasMany)("participant"), (_class = class ReportModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "title", _descriptor, this);

      _initializerDefineProperty(this, "subTitle", _descriptor2, this);

      _initializerDefineProperty(this, "description", _descriptor3, this);

      _initializerDefineProperty(this, "startDate", _descriptor4, this);

      _initializerDefineProperty(this, "date", _descriptor5, this);

      _initializerDefineProperty(this, "language", _descriptor6, this);

      _initializerDefineProperty(this, "cover", _descriptor7, this);

      _initializerDefineProperty(this, "actAttachments", _descriptor8, this);

      _initializerDefineProperty(this, "writers", _descriptor9, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "title", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "subTitle", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "description", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "startDate", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "date", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "language", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "cover", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "actAttachments", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "writers", [_dec9], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ReportModel;
});
;define("web-shell/models/zone", ["exports", "@ember-data/model"], function (_exports, _model) {
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

  let ZoneModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.attr)('string'), _dec4 = (0, _model.attr)('date'), _dec5 = (0, _model.attr)('date'), _dec6 = (0, _model.attr)('number'), _dec7 = (0, _model.hasMany)("participant"), _dec8 = (0, _model.hasMany)("event"), (_class = class ZoneModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "title", _descriptor, this);

      _initializerDefineProperty(this, "subTitle", _descriptor2, this);

      _initializerDefineProperty(this, "description", _descriptor3, this);

      _initializerDefineProperty(this, "startDate", _descriptor4, this);

      _initializerDefineProperty(this, "endDate", _descriptor5, this);

      _initializerDefineProperty(this, "language", _descriptor6, this);

      _initializerDefineProperty(this, "hosts", _descriptor7, this);

      _initializerDefineProperty(this, "agendas", _descriptor8, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "title", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "subTitle", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "description", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "startDate", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "endDate", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "language", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "hosts", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "agendas", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ZoneModel;
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
    this.route("shell", {
      path: "/"
    });
    this.route("shell", {
      path: "/*path"
    });
  });
});
;define("web-shell/routes/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _descriptor, _descriptor2, _descriptor3;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ApplicationRoute = (_dec = Ember.inject.service, _dec2 = Ember.inject.service('loading'), _dec3 = Ember._tracked, _dec4 = Ember._action, _dec5 = Ember._action, (_class = class ApplicationRoute extends Ember.Route {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "intl", _descriptor, this);

      _initializerDefineProperty(this, "loadingService", _descriptor2, this);

      _initializerDefineProperty(this, "inverse", _descriptor3, this);
    }

    beforeModel(param) {
      this.loadingService.loading.style.display = 'flex';
      this.loadingService.loading.style['z-index'] = 2;
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
      } //临时解决方案，判断当前route是否为home
      // window.location.href.split("?")[0].indexOf("home")


      let url = param.router.activeTransition.intent.url;

      if (url === "/home" || url === "/") {
        this.inverse = false;
      } else {
        this.inverse = true;
      }
    }

    willTransition(transition) {
      this.loadingService.loading.style.display = 'flex';
      this.loadingService.loading.style['z-index'] = 2;
      let context = transition.router.activeTransition.intent.contexts;

      if (context) {
        if (context[0] === "home" || context[0].indexOf("download-report") != -1 || context[0] === "/") {
          this.inverse = false;
        } else {
          this.inverse = true;
        }
      }

      this.currentModel.inverse = this.inverse;
      this.loadingService.loading.style.display = 'none';
    }

    didTransition() {
      //跳转到页面顶部
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }

    async model() {
      this.afterModel = function () {
        if (this.loadingService.afterLoading) {
          this.loadingService.loading.style.display = 'none';
        }
      };

      return Ember.RSVP.hash({
        inverse: this.inverse
      });
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "intl", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "loadingService", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "inverse", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return true;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "willTransition", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "willTransition"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "didTransition", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "didTransition"), _class.prototype)), _class));
  _exports.default = ApplicationRoute;
});
;define("web-shell/routes/shell", ["exports", "web-shell/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _descriptor3;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ShellRoute = (_dec = Ember.inject.service, _dec2 = Ember.inject.service("remote-loading"), _dec3 = Ember.inject.service("route-parse"), (_class = class ShellRoute extends Ember.Route {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "store", _descriptor, this);

      _initializerDefineProperty(this, "jsl", _descriptor2, this);

      _initializerDefineProperty(this, "rps", _descriptor3, this);
    }

    async model(params) {
      if (Object.keys(params).length === 0) {
        params["path"] = "home";
      }
      /**
       * 1. 第一步，需要从读取JS模版
       */


      let pages = this.store.peekAll("page");
      pages = pages.filter(_ => true);

      if (pages.length === 0) {
        pages = await this.store.query("page", {
          "filter[clientId]": _environment.default.APP.clientId
        });
        pages = pages.filter(_ => true);
      }

      const pageCount = pages.length;
      let curPage = ""; // not found page

      let parseParams;

      for (let idx = 0; idx < pageCount; ++idx) {
        const tmp = pages[idx];
        const [match, result] = this.rps.parse("/" + params.path, tmp.route);

        if (match) {
          curPage = tmp;
          parseParams = result;
          break;
        }
      }
      /**
       * 2. 动态的把需要的JS加载到dom中
       */


      this.jsl.loadRemoteJs(curPage.uri);
      await this.jsl.loadRemoteJsSync(curPage.cat);
      const clientName = curPage.clientName;
      const modelName = Ember.String.camelize(curPage.name) + "RouteModel";
      const data = await window[clientName][modelName](this, parseParams);
      return Ember.RSVP.hash({
        page: curPage,
        data: data ? data : {},
        _isVue: true
      });
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "jsl", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "rps", [_dec3], {
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
;define("web-shell/services/-ensure-registered", ["exports", "@embroider/util/services/ensure-registered"], function (_exports, _ensureRegistered) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ensureRegistered.default;
    }
  });
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
;define("web-shell/services/iot-service", ["exports", "aws-crt", "web-shell/config/environment"], function (_exports, _awsCrt, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class IotServiceService extends Ember.Service {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "client", null);

      _defineProperty(this, "connection", null);

      _defineProperty(this, "config", null);

      _defineProperty(this, "client_id", _environment.default.APP.AWS_IOT_DEFAULT_CLIENT_ID);

      _defineProperty(this, "endpoint", _environment.default.APP.AWS_IOT_ENDPOINT);

      _defineProperty(this, "aws_region", _environment.default.APP.AWS_REGION);

      _defineProperty(this, "aws_access_id", _environment.default.APP.AWS_ACCESS_KEY);

      _defineProperty(this, "aws_secret_key", _environment.default.APP.AWS_SECRET_KEY);

      _defineProperty(this, "client_bootstrap", new _awsCrt.io.ClientBootstrap());

      _defineProperty(this, "qos", _awsCrt.mqtt.QoS.AtLeastOnce);
    }

    setClientId(id) {
      this.client_id = id;
      return this;
    }

    build() {
      const config_builder = _awsCrt.iot.AwsIotMqttConnectionConfigBuilder.new_mtls_builder();

      config_builder.with_credentials(this.aws_region, this.aws_access_id, this.aws_secret_key);
      config_builder.with_clean_session(false); //将 clean_session参数设置为 False即表示连接应该是持久连接

      config_builder.with_client_id(this.client_id);
      config_builder.with_endpoint(this.endpoint);
      config_builder.with_ping_timeout_ms(5000);
      config_builder.with_keep_alive_seconds(5000);
      this.config = config_builder.build();
      this.client = new _awsCrt.mqtt.MqttClient(this.client_bootstrap);
      return this;
    }

    __byteToString(arrayBuffer) {
      return new TextDecoder().decode(arrayBuffer);
    }

    __heartbeat() {
      if (this.connection) {
        let sequence = 0;
        setInterval(() => {
          sequence += 1;
          this.connection.publish("pharbers/heartbeat", JSON.stringify({
            "message": `client_id => ${this.client_id}`,
            "sequence": sequence
          }), _awsCrt.mqtt.QoS.AtMostOnce, false).catch(error => console.log("heartbeat"));
        }, 30 * 1000);
      }
    }

    async connect() {
      if (this.client) {
        this.connection = this.client.new_connection(this.config);
        await this.connection.connect();

        this.__heartbeat();

        console.log("connect");
      }
    }

    disconnect() {
      if (this.connection) {
        this.connection.disconnect();
        this.connection = null;
        console.log("disconnect");
      }
    }

    setSub(topic = "pharbers", func) {
      if (this.connection) {
        if (!func) {
          throw Error("CallBack Is Undefined");
        }

        this.connection.subscribe(topic, this.qos, (_, payload) => {
          func(this.__byteToString(payload));
        });
      }
    }

  }

  _exports.default = IotServiceService;
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
;define("web-shell/services/remote-loading", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class RemoteLoadingService extends Ember.Service {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "loadedJs", []);
    }

    loadRemoteJs(source, callback) {
      let that = this;
      const script = document.createElement("script");

      script.onload = function () {
        that.loadedJs.push(source);

        if (callback) {
          callback();
        }
      };

      if (this.loadedJs.indexOf(source) == -1) {
        script.src = source;
        document.head.appendChild(script);
      }
    }

    loadRemoteJsSync(source) {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = source;

        script.onload = () => {
          resolve();
        };

        script.onerror = () => {
          reject("cannot load script " + source);
        };

        if (this.loadedJs.indexOf(source) == -1) {
          document.body.appendChild(script);
        }
      });
    }

  }

  _exports.default = RemoteLoadingService;
});
;define("web-shell/services/route-parse", ["exports", "ramda"], function (_exports, _ramda) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class RouteParseService extends Ember.Service {
    parse(uri, template) {
      const qIdx = uri.indexOf("?");
      let resourceUri = uri;
      let queryUri = "";

      if (qIdx > -1) {
        resourceUri = uri.substring(0, qIdx);
        queryUri = uri.substring(qIdx + 1);
      }

      const factory = new StageFactory();
      const templateArr = template.split("/");
      const resourceArr = resourceUri.split("/");

      try {
        const isMatch = templateArr.length === resourceArr.length;

        if (!isMatch) {
          throw new Error("not match");
        }

        const paramArr = factory.zip(templateArr, resourceArr);
        let stages = [];

        for (let idx = 0; idx < paramArr.length; ++idx) {
          stages.push(factory.createStageInstance("param", paramArr[idx][0], paramArr[idx][1]));
        }

        let queryArr = queryUri.split("&");
        queryArr = queryArr.map(_ => _.split("="));

        for (let idx = 0; idx < queryArr.length; ++idx) {
          stages.push(factory.createStageInstance("query", queryArr[idx][0], queryArr[idx][1]));
        }

        const byCat = _ramda.default.groupBy(_ => _.cat);

        let reVal = byCat(stages.map(_ => _.parse()));
        const keys = Object.keys(reVal);
        const result = {};

        for (let idx = 0; idx < keys.length; ++idx) {
          result[keys[idx]] = factory.array2Object(reVal[keys[idx]]);
        }

        return [true, result];
      } catch (e) {
        return [false, null];
      }
    }

  }

  _exports.default = RouteParseService;

  class Stage {
    constructor(_t, _r) {
      _defineProperty(this, "template", "");

      _defineProperty(this, "resource", "");

      this.template = _t;
      this.resource = _r;
    }

    parse() {
      throw new Error("not implemented");
    }

  }

  class ParamStage extends Stage {
    constructor(_t, _r) {
      super(_t, _r);
    }

    parse() {
      let tmp = {
        cat: "param"
      };

      if (this.template.startsWith("{") && this.template.endsWith("}")) {
        this.template = this.template.substring(this.template.indexOf("{") + 1, this.template.lastIndexOf("}"));
        tmp[this.template] = this.resource;
      } else {
        if (this.template !== this.resource) {
          throw new Error("not match");
        }
      }

      return tmp;
    }

  }

  class QueryStage extends Stage {
    constructor(_t, _r) {
      super(_t, _r);
    }

    parse() {
      let tmp = {
        cat: "query"
      };
      tmp[this.template] = this.resource;
      return tmp;
    }

  }

  class StageFactory {
    constructor() {
      _defineProperty(this, "zip", (...arr) => Array.from({
        length: Math.max(...arr.map(a => a.length))
      }, (_, i) => arr.map(a => a[i])));
    }

    createStageInstance(category, template, resource) {
      if (category === "param") {
        return new ParamStage(template, resource);
      } else if (category === "query") {
        return new QueryStage(template, resource);
      } else {
        throw new Error("not implemented");
      }
    }

    array2Object(arr) {
      const result = {};
      const length = arr.length;

      for (let idx = 0; idx < length; ++idx) {
        const tmp = arr[idx];
        const keys = Object.keys(tmp);

        for (let ik = 0; ik < keys.length; ++ik) {
          result[keys[ik]] = tmp[keys[ik]];
        }
      }

      return result;
    }

  }
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
    "id": "xNbhUJ8Q",
    "block": "[[[1,[28,[35,0],[\"web shell\"],null]],[1,\"\\n\"],[8,[39,1],null,[[\"@model\"],[[30,1]]],[[\"default\"],[[[],[]]]]],[1,\"\\n\\n\"],[46,[28,[37,3],null,null],null,null,null],[1,\"\\n\\n\"],[8,[39,4],null,null,[[\"default\"],[[[],[]]]]],[1,\"\\n\"]],[\"@model\"],false,[\"page-title\",\"pharbers-nav-top\",\"component\",\"-outlet\",\"pharbers-footer\"]]",
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
    "id": "n5K90ut1",
    "block": "[[[1,[28,[35,0],[\"shell\"],null]],[1,\"\\n\"],[8,[39,1],null,[[\"@model\"],[[30,1]]],null],[1,\"\\n\"],[46,[28,[37,3],null,null],null,null,null],[1,\"\\n\"]],[\"@model\"],false,[\"page-title\",\"shell-component\",\"component\",\"-outlet\"]]",
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
            require("web-shell/app")["default"].create({"redirectUri":"https://general.pharbers.com/oauth-callback","pharbersUri":"https://www.pharbers.com","accountsUri":"https://accounts.pharbers.com","host":"https://oauth.pharbers.com","apiUri":"https://apiv2.pharbers.com","apiHost":"apiv2.pharbers.com","clientId":"fjjnl2uSalHTdrppHG9u","clientSecret":"961ed4ad842147a5c9a1cbc633693438e1f4a8ebb71050d9d9f7c43dbadf9b72","AWS_ACCESS_KEY":"AKIAWPBDTVEAI6LUCLPX","AWS_SECRET_KEY":"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","AWS_IOT_ENDPOINT":"a23ve0kwl75dll-ats.iot.cn-northwest-1.amazonaws.com.cn","AWS_REGION":"cn-northwest-1","AWS_IOT_DEFAULT_CLIENT_ID":"VQ4L9e4RGDZEI2Ln7fvE","scope":"APP|*|R","clientName":"offweb","isNeedMenu":true,"debugToken":"45bb4ba0c3194b2011ec1c976c3b37e9b427df6f6d19767d37e1dea50481e0ba","name":"web-shell","version":"0.0.0+87db6bf6"});
          }
        
//# sourceMappingURL=web-shell.map
=======
"use strict"
function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}define("web-shell/adapters/-json-api",["exports","@ember-data/adapter/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-shell/adapters/application",["exports","ember-inflector","web-shell/config/environment","@ember-data/adapter/json-api","web-shell/lib/PhIamClicent"],(function(e,t,n,r,o){var i,a,u
function l(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}(e,t)
if(r){var o=Object.getOwnPropertyDescriptor(r,t)
return o.get?o.get.call(n):o.value}})(e,t,n||e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=m(e)
if(t){var o=m(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return y(this,n)}}function y(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var v,g,w,_,O,j,P=(i=Ember.inject.service,a=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)})(v,e)
var r,i,a,y=b(v)
function v(){var e
c(this,v)
for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o]
return l(d(e=y.call.apply(y,[this].concat(r))),"cookies",u,d(e)),h(d(e),"host",n.default.APP.apiUri),h(d(e),"authType","oauth"),e}return r=v,(i=[{key:"pathForType",value:function(e){return-1!==["activity","cooperation","event","image","page","participant","project","report","zone"].indexOf(e)?(this.authType="iam","phtemplate/"+(0,t.pluralize)(Ember.String.dasherize(e))):(this.authType="oauth","phplatform/"+(0,t.pluralize)(Ember.String.dasherize(e)))}},{key:"sortQueryParams",value:function(e){for(var t={},n=Object.keys(e).sort(),r=0;r<n.length;++r){var o=n[r],i=e[o]
i instanceof Array&&(i=i.sort()),t[o]=i}return t}},{key:"buildURL",value:function(e,t,r,i,a){var u=s(m(v.prototype),"buildURL",this).apply(this,arguments)
return"iam"===this.authType&&(this.iamHeaders=(0,o.ComputeJSONAPIIamHeader)(n.default.APP.apiHost,u,{},a,n.default.APP.AWS_ACCESS_KEY,n.default.APP.AWS_SECRET_KEY)),u}},{key:"attributesToDeal",value:function(e){var t=Object.keys(e).sort(),n={}
return t.forEach((function(t){var r=Ember.String.dasherize(t)
n[r]=e[t]})),n}},{key:"handleResponse",value:function(e,t,n,r){return n&&n.data&&n.data.length>0&&n.meta&&n.meta.count>0&&n.data.forEach((function(e,t){e.attributes.meta=e.meta,e.attributes.includes=n.included})),n&&n.data&&n.data.length>0&&n.data[0].meta?n.data.forEach((function(e,t){e.attributes.meta=e.meta})):n&&n.data&&n.data.meta&&(n.data.attributes.meta=n.data.meta),n}},{key:"headers",get:function(){return"oauth"===this.authType?"development"===n.default.environment?{Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json",Authorization:n.default.APP.debugToken}:{Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json",Authorization:this.cookies.read("access_token")}:"iam"===this.authType?this.iamHeaders:void 0}}])&&f(r.prototype,i),a&&f(r,a),v}(r.default),v=a.prototype,g="cookies",w=[i],_={configurable:!0,enumerable:!0,writable:!0,initializer:null},j={},Object.keys(_).forEach((function(e){j[e]=_[e]})),j.enumerable=!!j.enumerable,j.configurable=!!j.configurable,("value"in j||j.initializer)&&(j.writable=!0),j=w.slice().reverse().reduce((function(e,t){return t(v,g,e)||e}),j),O&&void 0!==j.initializer&&(j.value=j.initializer?j.initializer.call(O):void 0,j.initializer=void 0),void 0===j.initializer&&(Object.defineProperty(v,g,j),j=null),u=j,a)
e.default=P})),define("web-shell/app",["exports","ember-resolver","ember-load-initializers","web-shell/config/environment"],(function(e,t,n,r){function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=c(e)
if(t){var o=c(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return u(this,n)}}function u(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var s=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)})(u,Ember.Application)
var n=a(u)
function u(){var e
o(this,u)
for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c]
return f(l(e=n.call.apply(n,[this].concat(a))),"modulePrefix",r.default.modulePrefix),f(l(e),"podModulePrefix",r.default.podModulePrefix),f(l(e),"Resolver",t.default),e}return u}()
e.default=s,(0,n.default)(s,r.default.modulePrefix)})),define("web-shell/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-shell/components/-dynamic-element-alt",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend()
e.default=t})),define("web-shell/components/-dynamic-element",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend()
e.default=t})),define("web-shell/components/iframe-context",["exports","@glimmer/component"],(function(e,t){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=a(e)
if(t){var o=a(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return i(this,n)}}function i(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var u=Ember.HTMLBars.template({id:"qBmSBU+/",block:'[[[10,"h2"],[12],[1,"iframe component"],[13],[1,"\\n"],[18,1,null],[1,"\\n"]],["&default"],false,["yield"]]',moduleName:"web-shell/components/iframe-context.hbs",isStrictMode:!1}),l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)})(i,e)
var t=o(i)
function i(){return n(this,i),t.apply(this,arguments)}return i}(t.default)
e.default=l,Ember._setComponentTemplate(u,l)})),define("web-shell/components/pharbers-footer",["exports","@glimmer/component"],(function(e,t){var n,r,o,i
function a(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=b(e)
if(t){var o=b(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return s(this,n)}}function s(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var d=Ember.HTMLBars.template({id:"2cTCYmx2",block:'[[[11,"pharbers-bp-page-bottom"],[4,[38,0],["linkToPage",[33,1]],null],[12],[13]],[],false,["on","linkToPage"]]',moduleName:"web-shell/components/pharbers-footer.hbs",isStrictMode:!1}),m=(n=Ember.inject.service,r=Ember._action,o=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)})(s,e)
var t,n,r,o=f(s)
function s(){var e
u(this,s)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return a(p(e=o.call.apply(o,[this].concat(n))),"router",i,p(e)),e}return t=s,(n=[{key:"linkToPage",value:function(e){"home"==e.detail[0]&&"home"==this.router.currentRouteName?window.location.reload():this.router.transitionTo("shell",e.detail[0])}}])&&l(t.prototype,n),r&&l(t,r),s}(t.default),i=y(o.prototype,"router",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y(o.prototype,"linkToPage",[r],Object.getOwnPropertyDescriptor(o.prototype,"linkToPage"),o.prototype),o)
e.default=m,Ember._setComponentTemplate(d,m)})),define("web-shell/components/pharbers-nav-top",["exports","@glimmer/component"],(function(e,t){var n,r,o,i,a,u,l,c,f,s,p
function b(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=w(e)
if(t){var o=w(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return v(this,n)}}function v(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var O=Ember.HTMLBars.template({id:"U/RQt9av",block:'[[[41,[30,1,["inverse"]],[[[1,"\\t"],[11,"pharbers-bp-nav-top"],[24,"inversebase",""],[16,"is-login",[36,1]],[4,[38,2],["linkToPage",[33,3]],null],[4,[38,2],["logout",[33,4]],null],[12],[13],[1,"\\n"]],[]],[[[1,"\\t"],[11,"pharbers-bp-nav-top"],[16,"is-login",[36,1]],[4,[38,2],["linkToPage",[33,3]],null],[4,[38,2],["logout",[33,4]],null],[12],[13],[1,"\\n"]],[]]]],["@model"],false,["if","isLogin","on","linkToPage","logout"]]',moduleName:"web-shell/components/pharbers-nav-top.hbs",isStrictMode:!1}),j=(n=Ember.inject.service("oauth-service"),r=Ember._tracked,o=Ember._tracked,i=Ember.inject.service,a=Ember._action,u=Ember._action,l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)})(i,e)
var t,n,r,o=h(i)
function i(){var e
y(this,i)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return b(g(e=o.call.apply(o,[this].concat(n))),"oauthService",c,g(e)),b(g(e),"topResponseMini",f,g(e)),b(g(e),"isLogin",s,g(e)),b(g(e),"router",p,g(e)),e}return t=i,(n=[{key:"linkToPage",value:function(e){this.router.transitionTo("shell",e.detail[0])}},{key:"logout",value:function(){this.oauthService.removeAuth()}}])&&d(t.prototype,n),r&&d(t,r),i}(t.default),c=_(l.prototype,"oauthService",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=_(l.prototype,"topResponseMini",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=_(l.prototype,"isLogin",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),p=_(l.prototype,"router",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_(l.prototype,"linkToPage",[a],Object.getOwnPropertyDescriptor(l.prototype,"linkToPage"),l.prototype),_(l.prototype,"logout",[u],Object.getOwnPropertyDescriptor(l.prototype,"logout"),l.prototype),l)
e.default=j,Ember._setComponentTemplate(O,j)})),define("web-shell/components/shell-component",["exports","@glimmer/component"],(function(e,t){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=u(e)
if(t){var o=u(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return a(this,n)}}function a(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=Ember.HTMLBars.template({id:"6SHiJWWM",block:'[[[41,[28,[37,1],[[30,0,["engine"]],"web-component"],null],[[[1,"    "],[8,[39,2],null,[["@name","@allData"],[[30,0,["name"]],[30,1]]],null],[1,"\\n"]],[]],[[[41,[28,[37,1],[[30,0,["engine"]],"iframe-component"],null],[[[1,"    "],[8,[39,3],null,null,[["default"],[[[],[]]]]],[1,"\\n"]],[]],[[[1,"    "],[10,"h2"],[12],[1,"not implement shell component"],[13],[1,"\\n"]],[]]]],[]]],[18,2,null],[1,"\\n"]],["@model","&default"],false,["if","eq","wc-context","iframe-context","yield"]]',moduleName:"web-shell/components/shell-component.hbs",isStrictMode:!1}),c=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)})(c,e)
var t,a,u,l=i(c)
function c(){return n(this,c),l.apply(this,arguments)}return t=c,(a=[{key:"engine",get:function(){return this.args.model.page.engine}},{key:"name",get:function(){return this.args.model.page.name}}])&&r(t.prototype,a),u&&r(t,u),c}(t.default)
e.default=c,Ember._setComponentTemplate(l,c)})),define("web-shell/components/wc-context",["exports","@glimmer/component"],(function(e,t){var n,r,o,i,a,u
function l(e,t,n,r,o,i,a){try{var u=e[i](a),l=u.value}catch(c){return void n(c)}u.done?t(l):Promise.resolve(l).then(r,o)}function c(e){return function(){var t=this,n=arguments
return new Promise((function(r,o){var i=e.apply(t,n)
function a(e){l(i,r,o,a,u,"next",e)}function u(e){l(i,r,o,a,u,"throw",e)}a(void 0)}))}}function f(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=h(e)
if(t){var o=h(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return d(this,n)}}function d(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var g=Ember.HTMLBars.template({id:"TIMGW/BO",block:'[[[44,[[50,[28,[37,2],[[28,[37,3],[[30,1]],null]],null],0,null,[["tagName"],[[30,1]]]]],[[[1,"    "],[8,[30,2],[[16,"allData",[30,3]],[4,[38,4],[[30,0,["registerListener"]]],null],[4,[38,5],[[30,0,["unregisterListener"]]],null]],null,[["default"],[[[[1,"\\n    >"]],[]]]]],[1,"\\n"]],[2]]],[18,4,null],[1,"\\n"]],["@name","E","@allData","&default"],false,["let","component","ensure-safe-component","-element","did-insert","will-destroy","yield"]]',moduleName:"web-shell/components/wc-context.hbs",isStrictMode:!1}),w=(n=Ember.inject.service,r=Ember._action,o=Ember._action,i=Ember._action,a=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)})(l,e)
var t,n,r,o,i,a=y(l)
function l(){var e
s(this,l)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return f(m(e=a.call.apply(a,[this].concat(n))),"router",u,m(e)),e}return t=l,(n=[{key:"listener",value:(i=c(regeneratorRuntime.mark((function e(t){var n
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("alfred listener action"),n=Ember.String.camelize(this.args.allData.page.name)+"EventHandler",e.next=4,window[this.args.allData.page.clientName][n](t,this)
case 4:case"end":return e.stop()}}),e,this)}))),function(e){return i.apply(this,arguments)})},{key:"registerListener",value:(o=c(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.args.allData.data._isVue=!0,t.allData=this.args.allData.data,t.addEventListener("event",this.listener)
case 3:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)})},{key:"unregisterListener",value:function(e){e.removeEventListener("event",this.listener)}}])&&p(t.prototype,n),r&&p(t,r),l}(t.default),u=v(a.prototype,"router",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v(a.prototype,"listener",[r],Object.getOwnPropertyDescriptor(a.prototype,"listener"),a.prototype),v(a.prototype,"registerListener",[o],Object.getOwnPropertyDescriptor(a.prototype,"registerListener"),a.prototype),v(a.prototype,"unregisterListener",[i],Object.getOwnPropertyDescriptor(a.prototype,"unregisterListener"),a.prototype),a)
e.default=w,Ember._setComponentTemplate(g,w)})),define("web-shell/data-adapter",["exports","@ember-data/debug"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-shell/formats",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={time:{hhmmss:{hour:"numeric",minute:"numeric",second:"numeric"}},date:{hhmmss:{hour:"numeric",minute:"numeric",second:"numeric"}},number:{compact:{notation:"compact"},EUR:{style:"currency",currency:"EUR"},USD:{style:"currency",currency:"USD"}}}})),define("web-shell/helpers/-element",["exports","ember-element-helper/helpers/-element"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-shell/helpers/app-version",["exports","web-shell/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,n){function r(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.default.APP.version,i=r.versionOnly||r.hideSha,a=r.shaOnly||r.hideVersion,u=null
return i&&(r.showExtended&&(u=o.match(n.versionExtendedRegExp)),u||(u=o.match(n.versionRegExp))),a&&(u=o.match(n.shaRegExp)),u?u[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=r,e.default=void 0
var o=Ember.Helper.helper(r)
e.default=o})),define("web-shell/helpers/element",["exports","ember-element-helper/helpers/element"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-shell/helpers/ensure-safe-component",["exports","@embroider/util"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.EnsureSafeComponentHelper}})})),define("web-shell/helpers/eq",["exports"],(function(e){function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"])
if(null==n)return
var r,o,i=[],a=!0,u=!1
try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){u=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return n(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n]
return r}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=Ember.Helper.helper((function(e){var n=t(e,2)
return n[0]===n[1]}))
e.default=r})),define("web-shell/helpers/format-date",["exports","ember-intl/helpers/format-date"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-shell/helpers/format-message",["exports","ember-intl/helpers/format-message"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-shell/helpers/format-number",["exports","ember-intl/helpers/format-number"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-shell/helpers/format-relative",["exports","ember-intl/helpers/format-relative"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-shell/helpers/format-time",["exports","ember-intl/helpers/format-time"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-shell/helpers/loc",["exports","@ember/string/helpers/loc"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"loc",{enumerable:!0,get:function(){return t.loc}})})),define("web-shell/helpers/page-title",["exports","ember-page-title/helpers/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("web-shell/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("web-shell/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("web-shell/helpers/t",["exports","ember-intl/helpers/t"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-shell/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","web-shell/config/environment"],(function(e,t,n){var r,o
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n.default.APP&&(r=n.default.APP.name,o=n.default.APP.version)
var i={name:"App Version",initialize:(0,t.default)(r,o)}
e.default=i})),define("web-shell/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=n}))
function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}define("web-shell/initializers/ember-data-data-adapter",["exports","@ember-data/debug/setup"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-shell/initializers/ember-data",["exports","ember-data","ember-data/setup-container"],(function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"ember-data",initialize:n.default}
e.default=r})),define("web-shell/initializers/export-application-global",["exports","web-shell/config/environment"],(function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var r,o=t.default.exportApplicationGlobal
r="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),n[r]||(n[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[r]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default=void 0
var r={name:"export-application-global",initialize:n}
e.default=r})),define("web-shell/instance-initializers/ember-data",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={name:"ember-data",initialize:function(){}}})),define("web-shell/lib/PhIamClicent",["exports","web-shell/lib/PhSigV4AWSClientFactory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.ComputeJSONAPIIamHeader=function(e,n,r,o,i,a){var u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"application/vnd.api+json",l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"application/vnd.api+json",c=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"GET",f=t.default,s=/(^https?:\/\/[^\/]+)/g.exec(n)[1],p=n.substring(s.length),b=p,y=b.lastIndexOf("?")
y>-1&&(b=b.substring(0,y))
for(var d={accessKey:i,secretKey:a,sessionToken:"",serviceName:"execute-api",region:"cn-northwest-1",endpoint:e,defaultContentType:u,defaultAcceptType:l},m=f.PhSigV4AWSClientFactory.newClient(d),h=Object.keys(o),v={},g=0;g<h.length;++g){var w=encodeURI(h[g]),_=encodeURI(o[h[g]])
v[w]=_}var O={verb:c.toUpperCase(),path:b,queryParams:v,body:{}},j=m.makeRequest(O)
return j.headers}})),define("web-shell/lib/PhSigV4AWSClientFactory",["exports","web-shell/lib/PhSigV4ClientUtils"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.PhSigV4AWSClientFactory=void 0
var n=require("crypto-js"),r={}
e.PhSigV4AWSClientFactory=r,r.newClient=function(e){var r="AWS4-HMAC-SHA256",o="aws4_request"
function i(e){return n.SHA256(e)}function a(e){return e.toString(n.enc.Hex)}function u(e,t){return n.HmacSHA256(t,e,{asBytes:!0})}function l(e,t,n,r,o){return e+"\n"+(encodeURI(t)+"\n")+c(n)+"\n"+function(e){var t="",n=[]
for(var r in e)e.hasOwnProperty(r)&&n.push(r)
n.sort()
for(var o=0;o<n.length;o++)t+=n[o].toLowerCase()+":"+e[n[o]]+"\n"
return t}(r)+"\n"+s(r)+"\n"+a(i(o))}function c(e){if(Object.keys(e).length<1)return""
var t=[]
for(var n in e)e.hasOwnProperty(n)&&t.push(n)
t.sort()
for(var r="",o=0;o<t.length;o++)if(t[o]===encodeURI("ids[]"))for(var i=e[t[o]].split(",").sort(),a=0;a<i.length;a++)r+=t[o]+"="+f(i[a])+"&"
else r+=t[o]+"="+f(e[t[o]])+"&"
return r.substr(0,r.length-1)}function f(e){var t=encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))
return t=(t=t.replace(/%26/g,"&")).replace(/%3D/g,"=")}function s(e){var t=[]
for(var n in e)e.hasOwnProperty(n)&&t.push(n.toLowerCase())
return t.sort(),t.join(";")}var p={}
return void 0===e.accessKey||void 0===e.secretKey||(p.accessKey=t.default.assertDefined(e.accessKey,"accessKey"),p.secretKey=t.default.assertDefined(e.secretKey,"secretKey"),p.sessionToken=e.sessionToken,p.serviceName=t.default.assertDefined(e.serviceName,"serviceName"),p.region=t.default.assertDefined(e.region,"region"),p.endpoint=t.default.assertDefined(e.endpoint,"endpoint"),p.makeRequest=function(n){var f=t.default.assertDefined(n.verb,"verb"),b=t.default.assertDefined(n.path,"path"),y=t.default.copy(n.queryParams)
void 0===y&&(y={})
var d=t.default.copy(n.headers)
void 0===d&&(d={}),void 0===d["Content-Type"]&&(d["Content-Type"]=e.defaultContentType),void 0===d.Accept&&(d.Accept=e.defaultAcceptType)
var m=t.default.copy(n.body)
""!==(m=void 0===m||"GET"===f?"":JSON.stringify(m))&&null!=m||delete d["Content-Type"]
var h=(new Date).toISOString().replace(/\.\d{3}Z$/,"Z").replace(/[:\-]|\.\d{3}/g,"")
d["x-amz-date"]=h,d.host="apiv2.pharbers.com"
var v=function(e){return a(i(e))}(l(f,b,y,d,m)),g=function(e,t,n){return e.substr(0,8)+"/"+t+"/"+n+"/"+o}(h,p.region,p.serviceName),w=function(e,t,n){return r+"\n"+e+"\n"+t+"\n"+n}(h,g,v),_=function(e,t){return a(u(e,t))}(function(e,t,n,r){return u(u(u(u("AWS4"+e,t.substr(0,8)),n),r),o)}(p.secretKey,h,p.region,p.serviceName),w)
d.Authorization=function(e,t,n,o){return r+" Credential="+e+"/"+t+", SignedHeaders="+s(n)+", Signature="+o}(p.accessKey,g,d,_),void 0!==p.sessionToken&&""!==p.sessionToken&&(d["x-amz-security-token"]=p.sessionToken),delete d.host
var O=e.endpoint+b,j=c(y)
return""!==j&&(O+="?"+j),void 0===d["Content-Type"]&&(d["Content-Type"]=e.defaultContentType),{method:f,url:O,headers:d,data:m,timeout:3e4}}),p}})),define("web-shell/lib/PhSigV4ClientUtils",["exports"],(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={assertDefined:function(e,t){if(void 0===e)throw t+" must be defined"
return e},assertParametersDefined:function(e,t,n){if(void 0!==t){t.length>0&&void 0===e&&(e={})
for(var r=0;r<t.length;r++)this.contains(n,t[r])||this.assertDefined(e[t[r]],t[r])}},parseParametersToObject:function(e,t){if(void 0===e)return{}
for(var n={},r=0;r<t.length;r++)n[t[r]]=e[t[r]]
return n},contains:function(e,t){if(void 0===e)return!1
for(var n=e.length;n--;)if(e[n]===t)return!0
return!1},copy:function(e){if(null==e||"object"!=t(e))return e
var n=e.constructor()
for(var r in e)e.hasOwnProperty(r)&&(n[r]=e[r])
return n},mergeInto:function(e,n){if(null==e||"object"!=t(e))return e
var r=e.constructor()
for(var o in e)e.hasOwnProperty(o)&&(r[o]=e[o])
if(null==n||"object"!=t(n))return e
for(attr in n)n.hasOwnProperty(attr)&&(r[attr]=n[attr])
return r}}
e.default=n})),define("web-shell/lib/PhUrlTemplate",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.PhUriTemplate=void 0
var t=function(){function e(e){this.raw=e,this.cache={}}function t(e){this.set=e}function n(e){this.txt=e}e.prototype.get=function(e){var t=this.lookupRaw(e),n=t
if("function"==typeof t){var r=this.cache[e]
null!=r?n=r.val:(n=t(this.raw),this.cache[e]={key:e,val:n})}return n},e.prototype.lookupRaw=function(t){return e.lookup(this,this.raw,t)},e.lookup=function(t,n,r){var o=n[r]
if(void 0!==o)return o
var i=r.split("."),a=0,u=i.length-1
for(a=0;a<u;a++){var l=i.slice(0,u-a).join("."),c=i.slice(-a-1).join("."),f=n[l]
if(void 0!==f)return e.lookup(t,f,c)}},t.prototype.expand=function(t){var n=new e(t),r="",o=0,i=this.set.length
for(o=0;o<i;o++)r+=this.set[o].expand(n)
return r},n.prototype.expand=function(){return this.txt}
var r=new RegExp("[:/?#\\[\\]@!$&()*+,;=']","g")
function o(e){return encodeURIComponent(e).replace(r,(function(e){return escape(e)}))}function i(e){return encodeURI(e)}function a(e,t,n){return t+(t.length>0?"=":"")+n}function u(e,t,n,r){return(r=r||!1)&&(e=""),t&&0!==t.length||(t=e),t+(t.length>0?"=":"")+n}var l={prefix:"",joiner:",",encode:o,builder:a},c={prefix:"",joiner:",",encode:i,builder:a},f={prefix:"#",joiner:",",encode:i,builder:a},s={prefix:";",joiner:";",encode:o,builder:function(e,t,n,r){return(r=r||!1)&&(e=""),t&&0!==t.length||(t=e),t+(t.length>0&&n?"=":"")+n}},p={prefix:"?",joiner:"&",encode:o,builder:u},b={prefix:"&",joiner:"&",encode:o,builder:u},y={prefix:"/",joiner:"/",encode:o,builder:a},d={prefix:".",joiner:".",encode:o,builder:a}
function m(e,t){(function(e,t){for(var n in t)e[n]=t[n]})(this,e),this.vars=t}m.build=function(e,t){var n
switch(e){case"":n=l
break
case"+":n=c
break
case"#":n=f
break
case";":n=s
break
case"?":n=p
break
case"&":n=b
break
case"/":n=y
break
case".":n=d
break
default:throw"Unexpected operator: '"+e+"'"}return new m(n,t)},m.prototype.expand=function(e){var t=this.prefix,n=this.joiner,r=this.builder,o="",i=0,a=this.vars.length
for(i=0;i<a;i++){var u=this.vars[i]
u.addValues(e,this.encode,(function(e,i,a){var l=r(u.name,e,i,a)
null!=l&&(o+=t+l,t=n)}))}return o}
var h={}
function v(e){this.str="",e===h?this.appender=v.UnboundAppend:(this.len=0,this.limit=e,this.appender=v.BoundAppend)}function g(e,t,n,r,o){var i
if(n.isArr)i=function(e,t,n){var r=new v(n),o="",i=0,a=e.length
for(i=0;i<a;i++)null!==e[i]&&void 0!==e[i]&&(r.append(o).append(e[i],t),o=",")
return r.str}(t,r,e.maxLength)
else if(n.isObj)i=function(e,t,n){var r,o=new v(n),i=""
for(r in e)e.hasOwnProperty(r)&&null!==e[r]&&void 0!==e[r]&&(o.append(i+r+",").append(e[r],t),i=",")
return o.str}(t,r,e.maxLength)
else{i=new v(e.maxLength).append(t,r).str}o("",i)}function w(e,t,n,r,o){if(n.isArr){var i=0,a=t.length
for(i=0;i<a;i++)o("",r(t[i]))}else if(n.isObj){var u
for(u in t)t.hasOwnProperty(u)&&o(u,r(t[u]))}else o("",r(t))}function _(e,t,n){this.name=unescape(e),this.valueHandler=t,this.maxLength=n}v.prototype.append=function(e,t){return this.appender(this,e,t)},v.UnboundAppend=function(e,t,n){return t=n?n(t):t,e.str+=t,e},v.BoundAppend=function(e,t,n){return t=t.substring(0,e.limit-e.len),e.len+=t.length,t=n?n(t):t,e.str+=t,e},_.build=function(e,t,n,r){return n||(r=h),new _(e,t?w:g,r)},_.prototype.addValues=function(e,t,n){var r=e.get(this.name),o=function(e){var t=!1,n=!1,r=!0
return null!=e&&(t=e.constructor===Array,n=e.constructor===Object,r=t&&0===e.length||n&&function(e){for(var t in e)return!1
return!0}(e)),{isArr:t,isObj:n,isUndef:r}}(r)
o.isUndef||this.valueHandler(this,r,o,t,n)}
var O=/([^*:]*)((\*)|(:)([0-9]+))?/,j=function(e){var t=e[1],n=e[3],r=e[4],o=parseInt(e[5],10)
return _.build(t,n,r,o)},P=/(\{([+#.;?&\/])?(([^.*:,{}|@!=$()][^*:,{}$()]*)(\*|:([0-9]+))?(,([^.*:,{}][^*:,{}]*)(\*|:([0-9]+))?)*)\})/g,S=function(e){e[0]
var t=e[2]||"",n=e[3].split(","),r=0,o=n.length
for(r=0;r<o;r++){var i
if(null===(i=n[r].match(O)))throw"unexpected parse error in varspec: "+n[r]
n[r]=j(i)}return m.build(t,n)},z=function(e,t,r,o){if(r<o){var i=t.substr(r,o-r)
e.push(new n(i))}}
return function(e){var n,r=0,o=[],i=P
for(i.lastIndex=0;null!==(n=i.exec(e));){var a=n.index
z(o,e,r,a),o.push(S(n)),r=i.lastIndex}return z(o,e,r,e.length),new t(o)}}()
e.PhUriTemplate=t})),define("web-shell/models/activity",["exports","@ember-data/model"],(function(e,t){var n,r,o,i,a,u,l,c,f,s,p,b,y,d,m,h,v,g,w,_,O,j,P,S,z,x,E,R,k,T,A,M,C
function I(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function B(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function U(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=W(e)
if(t){var o=W(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return L(this,n)}}function L(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?N(e):t}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var K=(n=(0,t.attr)("string"),r=(0,t.attr)("string"),o=(0,t.attr)("date"),i=(0,t.attr)("date"),a=(0,t.attr)("string"),u=(0,t.attr)("string"),l=(0,t.attr)("string"),c=(0,t.attr)("string"),f=(0,t.attr)("string"),s=(0,t.hasMany)("image"),p=(0,t.hasMany)("report"),b=(0,t.hasMany)("zone"),y=(0,t.belongsTo)("image"),d=(0,t.belongsTo)("image"),m=(0,t.hasMany)("cooperation"),h=(0,t.attr)("number"),v=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)})(n,e)
var t=U(n)
function n(){var e
B(this,n)
for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i]
return I(N(e=t.call.apply(t,[this].concat(o))),"title",g,N(e)),I(N(e),"subTitle",w,N(e)),I(N(e),"startDate",_,N(e)),I(N(e),"endDate",O,N(e)),I(N(e),"location",j,N(e)),I(N(e),"city",P,N(e)),I(N(e),"activityType",S,N(e)),I(N(e),"contentTitle",z,N(e)),I(N(e),"contentDesc",x,N(e)),I(N(e),"gallery",E,N(e)),I(N(e),"attachments",R,N(e)),I(N(e),"agendas",k,N(e)),I(N(e),"logo",T,N(e)),I(N(e),"logoOnTime",A,N(e)),I(N(e),"partners",M,N(e)),I(N(e),"language",C,N(e)),e}return n}(t.default),g=H(v.prototype,"title",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=H(v.prototype,"subTitle",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=H(v.prototype,"startDate",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O=H(v.prototype,"endDate",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),j=H(v.prototype,"location",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=H(v.prototype,"city",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=H(v.prototype,"activityType",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=H(v.prototype,"contentTitle",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=H(v.prototype,"contentDesc",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),E=H(v.prototype,"gallery",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R=H(v.prototype,"attachments",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=H(v.prototype,"agendas",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T=H(v.prototype,"logo",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),A=H(v.prototype,"logoOnTime",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),M=H(v.prototype,"partners",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=H(v.prototype,"language",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v)
e.default=K})),define("web-shell/models/cooperation",["exports","@ember-data/model"],(function(e,t){var n,r,o,i,a,u,l,c,f,s,p
function b(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=g(e)
if(t){var o=g(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return h(this,n)}}function h(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var _=(n=(0,t.attr)("string"),r=(0,t.attr)("string"),o=(0,t.attr)("string"),i=(0,t.attr)("number"),a=(0,t.belongsTo)("image"),u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)})(n,e)
var t=m(n)
function n(){var e
y(this,n)
for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i]
return b(v(e=t.call.apply(t,[this].concat(o))),"name",l,v(e)),b(v(e),"companyType",c,v(e)),b(v(e),"logo",f,v(e)),b(v(e),"language",s,v(e)),b(v(e),"logo",p,v(e)),e}return n}(t.default),l=w(u.prototype,"name",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=w(u.prototype,"companyType",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=w(u.prototype,"logo",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=w(u.prototype,"language",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=w(u.prototype,"logo",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u)
e.default=_})),define("web-shell/models/event",["exports","@ember-data/model"],(function(e,t){var n,r,o,i,a,u,l,c,f,s,p,b,y,d,m
function h(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=j(e)
if(t){var o=j(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return _(this,n)}}function _(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var S=(n=(0,t.attr)("string"),r=(0,t.attr)("string"),o=(0,t.attr)("string"),i=(0,t.attr)("date"),a=(0,t.attr)("date"),u=(0,t.attr)("number"),l=(0,t.hasMany)("participant"),c=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)})(n,e)
var t=w(n)
function n(){var e
v(this,n)
for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i]
return h(O(e=t.call.apply(t,[this].concat(o))),"title",f,O(e)),h(O(e),"subTitle",s,O(e)),h(O(e),"description",p,O(e)),h(O(e),"startDate",b,O(e)),h(O(e),"endDate",y,O(e)),h(O(e),"language",d,O(e)),h(O(e),"speakers",m,O(e)),e}return n}(t.default),f=P(c.prototype,"title",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=P(c.prototype,"subTitle",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=P(c.prototype,"description",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=P(c.prototype,"startDate",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=P(c.prototype,"endDate",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=P(c.prototype,"language",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=P(c.prototype,"speakers",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c)
e.default=S})),define("web-shell/models/image",["exports","@ember-data/model"],(function(e,t){var n,r,o,i,a,u,l
function c(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=d(e)
if(t){var o=d(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return b(this,n)}}function b(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var h=(n=(0,t.attr)("string"),r=(0,t.attr)("string"),o=(0,t.belongsTo)("image"),i=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)})(n,e)
var t=p(n)
function n(){var e
f(this,n)
for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i]
return c(y(e=t.call.apply(t,[this].concat(o))),"path",a,y(e)),c(y(e),"tag",u,y(e)),c(y(e),"report",l,y(e)),e}return n}(t.default),a=m(i.prototype,"path",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u=m(i.prototype,"tag",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l=m(i.prototype,"report",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),i)
e.default=h})),define("web-shell/models/page",["exports","@ember-data/model"],(function(e,t){var n,r,o,i,a,u,l,c,f,s,p,b,y,d,m,h,v,g,w
function _(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=x(e)
if(t){var o=x(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return S(this,n)}}function S(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?z(e):t}function z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var R=(n=(0,t.attr)("string"),r=(0,t.attr)("string"),o=(0,t.attr)("string"),i=(0,t.attr)("string"),a=(0,t.attr)("string"),u=(0,t.attr)("string"),l=(0,t.attr)("string"),c=(0,t.attr)("number"),f=(0,t.attr)("string"),s=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)})(n,e)
var t=P(n)
function n(){var e
O(this,n)
for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i]
return _(z(e=t.call.apply(t,[this].concat(o))),"client-id",p,z(e)),_(z(e),"clientName",b,z(e)),_(z(e),"version",y,z(e)),_(z(e),"name",d,z(e)),_(z(e),"route",m,z(e)),_(z(e),"uri",h,z(e)),_(z(e),"cat",v,z(e)),_(z(e),"level",g,z(e)),_(z(e),"engine",w,z(e)),e}return n}(t.default),p=E(s.prototype,"client-id",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=E(s.prototype,"clientName",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=E(s.prototype,"version",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=E(s.prototype,"name",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=E(s.prototype,"route",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=E(s.prototype,"uri",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=E(s.prototype,"cat",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=E(s.prototype,"level",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=E(s.prototype,"engine",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s)
e.default=R})),define("web-shell/models/participant",["exports","@ember-data/model"],(function(e,t){var n,r,o,i,a,u,l,c,f,s,p,b,y,d,m
function h(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=j(e)
if(t){var o=j(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return _(this,n)}}function _(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var S=(n=(0,t.attr)("string"),r=(0,t.attr)("string"),o=(0,t.attr)("string"),i=(0,t.attr)("number"),a=(0,t.belongsTo)("image"),u=(0,t.belongsTo)("event"),l=(0,t.belongsTo)("zone"),c=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)})(n,e)
var t=w(n)
function n(){var e
v(this,n)
for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i]
return h(O(e=t.call.apply(t,[this].concat(o))),"name",f,O(e)),h(O(e),"title",s,O(e)),h(O(e),"occupation",p,O(e)),h(O(e),"language",b,O(e)),h(O(e),"avatar",y,O(e)),h(O(e),"event",d,O(e)),h(O(e),"zone",m,O(e)),e}return n}(t.default),f=P(c.prototype,"name",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=P(c.prototype,"title",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=P(c.prototype,"occupation",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=P(c.prototype,"language",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=P(c.prototype,"avatar",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=P(c.prototype,"event",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=P(c.prototype,"zone",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c)
e.default=S})),define("web-shell/models/project",["exports","@ember-data/model"],(function(e,t){var n,r,o,i,a,u,l,c,f,s,p
function b(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=g(e)
if(t){var o=g(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return h(this,n)}}function h(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var _=(n=(0,t.attr)("string"),r=(0,t.attr)("string"),o=(0,t.attr)("string"),i=(0,t.attr)("string"),a=(0,t.attr)("date"),u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)})(n,e)
var t=m(n)
function n(){var e
y(this,n)
for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i]
return b(v(e=t.call.apply(t,[this].concat(o))),"name",l,v(e)),b(v(e),"provider",c,v(e)),b(v(e),"owner",f,v(e)),b(v(e),"type",s,v(e)),b(v(e),"created",p,v(e)),e}return n}(t.default),l=w(u.prototype,"name",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=w(u.prototype,"provider",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=w(u.prototype,"owner",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=w(u.prototype,"type",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=w(u.prototype,"created",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u)
e.default=_})),define("web-shell/models/report",["exports","@ember-data/model"],(function(e,t){var n,r,o,i,a,u,l,c,f,s,p,b,y,d,m,h,v,g,w
function _(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=x(e)
if(t){var o=x(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return S(this,n)}}function S(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?z(e):t}function z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var R=(n=(0,t.attr)("string"),r=(0,t.attr)("string"),o=(0,t.attr)("string"),i=(0,t.attr)("date"),a=(0,t.attr)("date"),u=(0,t.attr)("number"),l=(0,t.belongsTo)("image"),c=(0,t.belongsTo)("activity"),f=(0,t.hasMany)("participant"),s=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)})(n,e)
var t=P(n)
function n(){var e
O(this,n)
for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i]
return _(z(e=t.call.apply(t,[this].concat(o))),"title",p,z(e)),_(z(e),"subTitle",b,z(e)),_(z(e),"description",y,z(e)),_(z(e),"startDate",d,z(e)),_(z(e),"date",m,z(e)),_(z(e),"language",h,z(e)),_(z(e),"cover",v,z(e)),_(z(e),"actAttachments",g,z(e)),_(z(e),"writers",w,z(e)),e}return n}(t.default),p=E(s.prototype,"title",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=E(s.prototype,"subTitle",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=E(s.prototype,"description",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=E(s.prototype,"startDate",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=E(s.prototype,"date",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=E(s.prototype,"language",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=E(s.prototype,"cover",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=E(s.prototype,"actAttachments",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=E(s.prototype,"writers",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s)
e.default=R})),define("web-shell/models/zone",["exports","@ember-data/model"],(function(e,t){var n,r,o,i,a,u,l,c,f,s,p,b,y,d,m,h,v
function g(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=S(e)
if(t){var o=S(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return j(this,n)}}function j(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?P(e):t}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var x=(n=(0,t.attr)("string"),r=(0,t.attr)("string"),o=(0,t.attr)("string"),i=(0,t.attr)("date"),a=(0,t.attr)("date"),u=(0,t.attr)("number"),l=(0,t.hasMany)("participant"),c=(0,t.hasMany)("event"),f=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)})(n,e)
var t=O(n)
function n(){var e
w(this,n)
for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i]
return g(P(e=t.call.apply(t,[this].concat(o))),"title",s,P(e)),g(P(e),"subTitle",p,P(e)),g(P(e),"description",b,P(e)),g(P(e),"startDate",y,P(e)),g(P(e),"endDate",d,P(e)),g(P(e),"language",m,P(e)),g(P(e),"hosts",h,P(e)),g(P(e),"agendas",v,P(e)),e}return n}(t.default),s=z(f.prototype,"title",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=z(f.prototype,"subTitle",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=z(f.prototype,"description",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=z(f.prototype,"startDate",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=z(f.prototype,"endDate",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=z(f.prototype,"language",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=z(f.prototype,"hosts",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=z(f.prototype,"agendas",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f)
e.default=x})),define("web-shell/modifiers/did-insert",["exports","@ember/render-modifiers/modifiers/did-insert"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-shell/modifiers/did-update",["exports","@ember/render-modifiers/modifiers/did-update"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-shell/modifiers/will-destroy",["exports","@ember/render-modifiers/modifiers/will-destroy"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-shell/router",["exports","web-shell/config/environment"],(function(e,t){function n(e,t,n,r,o,i,a){try{var u=e[i](a),l=u.value}catch(c){return void n(c)}u.done?t(l):Promise.resolve(l).then(r,o)}function r(e){return function(){var t=this,r=arguments
return new Promise((function(o,i){var a=e.apply(t,r)
function u(e){n(a,o,i,u,l,"next",e)}function l(e){n(a,o,i,u,l,"throw",e)}u(void 0)}))}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=c(e)
if(t){var o=c(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return u(this,n)}}function u(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var s=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)})(r,Ember.Router)
var n=a(r)
function r(){var e
o(this,r)
for(var i=arguments.length,a=new Array(i),u=0;u<i;u++)a[u]=arguments[u]
return f(l(e=n.call.apply(n,[this].concat(a))),"location",t.default.locationType),f(l(e),"rootURL",t.default.rootURL),e}return r}()
e.default=s,s.map(r(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.route("shell",{path:"/"}),this.route("shell",{path:"/*path"})
case 2:case"end":return e.stop()}}),e,this)}))))})),define("web-shell/routes/application",["exports"],(function(e){var t,n,r,o,i,a,u,l,c
function f(e,t,n,r,o,i,a){try{var u=e[i](a),l=u.value}catch(c){return void n(c)}u.done?t(l):Promise.resolve(l).then(r,o)}function s(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=v(e)
if(t){var o=v(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return m(this,n)}}function m(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var w=(t=Ember.inject.service,n=Ember.inject.service("loading"),r=Ember._tracked,o=Ember._action,i=Ember._action,u=g((a=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)})(m,Ember.Route)
var t,n,r,o,i,a=d(m)
function m(){var e
p(this,m)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return s(h(e=a.call.apply(a,[this].concat(n))),"intl",u,h(e)),s(h(e),"loadingService",l,h(e)),s(h(e),"inverse",c,h(e)),e}return t=m,(n=[{key:"beforeModel",value:function(e){this.loadingService.loading.style.display="flex",this.loadingService.loading.style["z-index"]=2
var t=window.localStorage.getItem("lang")
t?"中文"===t?this.intl.setLocale(["zh-cn"]):this.intl.setLocale(["en-us"]):(this.intl.setLocale(["zh-cn"]),window.localStorage.setItem("lang","中文"))
var n=e.router.activeTransition.intent.url
this.inverse="/home"!==n&&"/"!==n}},{key:"willTransition",value:function(e){this.loadingService.loading.style.display="flex",this.loadingService.loading.style["z-index"]=2
var t=e.router.activeTransition.intent.contexts
t&&("home"===t[0]||-1!=t[0].indexOf("download-report")||"/"===t[0]?this.inverse=!1:this.inverse=!0),this.currentModel.inverse=this.inverse,this.loadingService.loading.style.display="none"}},{key:"didTransition",value:function(){document.documentElement.scrollTop=0,document.body.scrollTop=0}},{key:"model",value:(o=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.afterModel=function(){this.loadingService.afterLoading&&(this.loadingService.loading.style.display="none")},e.abrupt("return",Ember.RSVP.hash({inverse:this.inverse}))
case 2:case"end":return e.stop()}}),e,this)})),i=function(){var e=this,t=arguments
return new Promise((function(n,r){var i=o.apply(e,t)
function a(e){f(i,n,r,a,u,"next",e)}function u(e){f(i,n,r,a,u,"throw",e)}a(void 0)}))},function(){return i.apply(this,arguments)})}])&&b(t.prototype,n),r&&b(t,r),m}()).prototype,"intl",[t],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l=g(a.prototype,"loadingService",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=g(a.prototype,"inverse",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),g(a.prototype,"willTransition",[o],Object.getOwnPropertyDescriptor(a.prototype,"willTransition"),a.prototype),g(a.prototype,"didTransition",[i],Object.getOwnPropertyDescriptor(a.prototype,"didTransition"),a.prototype),a)
e.default=w})),define("web-shell/routes/shell",["exports","web-shell/config/environment"],(function(e,t){var n,r,o,i,a,u,l
function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"])
if(null==n)return
var r,o,i=[],a=!0,u=!1
try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){u=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return f(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
"Object"===n&&e.constructor&&(n=e.constructor.name)
if("Map"===n||"Set"===n)return Array.from(e)
if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n]
return r}function s(e,t,n,r,o,i,a){try{var u=e[i](a),l=u.value}catch(c){return void n(c)}u.done?t(l):Promise.resolve(l).then(r,o)}function p(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=g(e)
if(t){var o=g(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return h(this,n)}}function h(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var _=(n=Ember.inject.service,r=Ember.inject.service("remote-loading"),o=Ember.inject.service("route-parse"),a=w((i=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)})(g,Ember.Route)
var n,r,o,i,f,h=m(g)
function g(){var e
b(this,g)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return p(v(e=h.call.apply(h,[this].concat(n))),"store",a,v(e)),p(v(e),"jsl",u,v(e)),p(v(e),"rps",l,v(e)),e}return n=g,(r=[{key:"model",value:(i=regeneratorRuntime.mark((function e(n){var r,o,i,a,u,l,f,s,p,b,y,d,m
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===Object.keys(n).length&&(n.path="home"),0!==(r=(r=this.store.peekAll("page")).filter((function(e){return!0}))).length){e.next=8
break}return e.next=6,this.store.query("page",{"filter[clientId]":t.default.APP.clientId})
case 6:r=(r=e.sent).filter((function(e){return!0}))
case 8:o=r.length,i="",u=0
case 11:if(!(u<o)){e.next=21
break}if(l=r[u],f=this.rps.parse("/"+n.path,l.route),s=c(f,2),p=s[0],b=s[1],!p){e.next=18
break}return i=l,a=b,e.abrupt("break",21)
case 18:++u,e.next=11
break
case 21:return this.jsl.loadRemoteJs(i.uri),e.next=24,this.jsl.loadRemoteJsSync(i.cat)
case 24:return y=i.clientName,d=Ember.String.camelize(i.name)+"RouteModel",e.next=28,window[y][d](this,a)
case 28:return m=e.sent,e.abrupt("return",Ember.RSVP.hash({page:i,data:m||{},_isVue:!0}))
case 30:case"end":return e.stop()}}),e,this)})),f=function(){var e=this,t=arguments
return new Promise((function(n,r){var o=i.apply(e,t)
function a(e){s(o,n,r,a,u,"next",e)}function u(e){s(o,n,r,a,u,"throw",e)}a(void 0)}))},function(e){return f.apply(this,arguments)})}])&&y(n.prototype,r),o&&y(n,o),g}()).prototype,"store",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u=w(i.prototype,"jsl",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l=w(i.prototype,"rps",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),i)
e.default=_})),define("web-shell/serializers/-default",["exports","@ember-data/serializer/json"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-shell/serializers/-json-api",["exports","@ember-data/serializer/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-shell/serializers/-rest",["exports","@ember-data/serializer/rest"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-shell/serializers/application",["exports","ember-inflector","@ember-data/serializer/json-api"],(function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=l(e)
if(t){var o=l(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return u(this,n)}}function u(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var c=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)})(f,e)
var n,u,l,c=a(f)
function f(){return r(this,f),c.apply(this,arguments)}return n=f,(u=[{key:"modelNameFromPayloadKey",value:function(e){return(0,t.singularize)(Ember.String.dasherize(e))}},{key:"payloadKeyFromModelName",value:function(e){return(0,t.pluralize)(Ember.String.camelize(e))}},{key:"keyForAttribute",value:function(e){return Ember.String.dasherize(e).toLowerCase()}},{key:"keyForRelationship",value:function(e){return e}}])&&o(n.prototype,u),l&&o(n,l),f}(n.default)
e.default=c})),define("web-shell/services/-ensure-registered",["exports","@embroider/util/services/ensure-registered"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-shell/services/aws-service",["exports"],(function(e){function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=a(e)
if(t){var o=a(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return i(this,n)}}function i(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var u={accessKeyId:"AKIAWPBDTVEAPOX3QT6U",secretAccessKey:"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"},l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)})(f,Ember.Service)
var i,a,l,c=o(f)
function f(){return t(this,f),c.apply(this,arguments)}return i=f,(a=[{key:"s3Client",get:function(){return AWS.config.update(u),AWS.config.update({region:"cn-northwest-1"}),new AWS.S3({apiVersion:"2006-03-01"})}},{key:"s3Avatar",get:function(){return AWS.config.update(u),AWS.config.update({region:"cn-northwest-1"}),new AWS.S3({apiVersion:"2006-03-01",params:{Bucket:"general.pharbers.com"}})}}])&&n(i.prototype,a),l&&n(i,l),f}()
e.default=l})),define("web-shell/services/browser-events-service",["exports"],(function(e){var t,n,r,o,i,a,u,l
function c(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=m(e)
if(t){var o=m(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return y(this,n)}}function y(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var v=(t=Ember._tracked,n=Ember._tracked,r=Ember.inject.service,o=Ember._action,a=h((i=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)})(i,Ember.Service)
var t,n,r,o=b(i)
function i(){var e
f(this,i)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return c(d(e=o.call.apply(o,[this].concat(n))),"param",a,d(e)),c(d(e),"routeName",u,d(e)),c(d(e),"router",l,d(e)),e}return t=i,(n=[{key:"registerListener",value:function(e){var t=this
$((function(){t.param=this.location.href.split("?")[1],t.routeName="/".concat(e,"?"),window.history&&window.history.pushState&&(history.pushState(null,null,document.URL),window.addEventListener("popstate",t.popstateFun,!1)),window.onbeforeunload=function(e){return!1},window.onload=function(){t.router.transitionTo("".concat(t.routeName).concat(t.param))}}))}},{key:"popstateFun",value:function(){var e=this
confirm("您还没有保存更改，确认返回吗?")?(window.removeEventListener("popstate",e.popstateFun),e.router.transitionTo("".concat(e.routeName).concat(e.param))):history.pushState(null,null,document.URL)}},{key:"clearListener",value:function(){window.onbeforeunload=void 0,window.removeEventListener("popstate",this.popstateFun)}}])&&s(t.prototype,n),r&&s(t,r),i}()).prototype,"param",[t],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u=h(i.prototype,"routeName",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l=h(i.prototype,"router",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h(i.prototype,"popstateFun",[o],Object.getOwnPropertyDescriptor(i.prototype,"popstateFun"),i.prototype),i)
e.default=v}))
define("web-shell/services/cookies",["exports","ember-cookies/services/cookies"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("web-shell/services/download-file",["exports","fetch"],(function(e,t){var n,r,o
function i(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=p(e)
if(t){var o=p(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return f(this,n)}}function f(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?s(e):t}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var b,y,d,m,h,v,g=(n=Ember.inject.service,b=(r=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)})(b,Ember.Service)
var n,r,f,p=c(b)
function b(){var e
a(this,b)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return i(s(e=p.call.apply(p,[this].concat(n))),"cookies",o,s(e)),e}return n=b,(r=[{key:"downloadFile",value:function(e){var n=e,r="",o=""
if(-1!=n.indexOf("s3a://")){var i=n.slice(6,n.length),a=i.indexOf("/")
r=i.substring(0,a),o=i.substring(a+1,i.length)}else r="ph-origin-files",o=n
var u={bucket:r,key:o},l={method:"POST",headers:{authorization:this.cookies.read("access_token"),"Content-Type":"application/json",accept:"application/json"},body:JSON.stringify(u)};(0,t.default)("https://api.pharbers.com/entry/download",l).then((function(e){return e.json()})).then((function(e){var t=e.url
window.open(t)}))}}])&&u(n.prototype,r),f&&u(n,f),b}()).prototype,y="cookies",d=[n],m={configurable:!0,enumerable:!0,writable:!0,initializer:null},v={},Object.keys(m).forEach((function(e){v[e]=m[e]})),v.enumerable=!!v.enumerable,v.configurable=!!v.configurable,("value"in v||v.initializer)&&(v.writable=!0),v=d.slice().reverse().reduce((function(e,t){return t(b,y,e)||e}),v),h&&void 0!==v.initializer&&(v.value=v.initializer?v.initializer.call(h):void 0,v.initializer=void 0),void 0===v.initializer&&(Object.defineProperty(b,y,v),v=null),o=v,r)
e.default=g})),define("web-shell/services/intl",["exports","ember-intl/services/intl"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-shell/services/iot-service",["exports","aws-crt","web-shell/config/environment"],(function(e,t,n){function r(e,t,n,r,o,i,a){try{var u=e[i](a),l=u.value}catch(c){return void n(c)}u.done?t(l):Promise.resolve(l).then(r,o)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=f(e)
if(t){var o=f(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return l(this,n)}}function l(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?c(e):t}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var p=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)})(m,Ember.Service)
var l,f,p,b,y,d=u(m)
function m(){var e
o(this,m)
for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a]
return s(c(e=d.call.apply(d,[this].concat(i))),"client",null),s(c(e),"connection",null),s(c(e),"config",null),s(c(e),"client_id",n.default.APP.AWS_IOT_DEFAULT_CLIENT_ID),s(c(e),"endpoint",n.default.APP.AWS_IOT_ENDPOINT),s(c(e),"aws_region",n.default.APP.AWS_REGION),s(c(e),"aws_access_id",n.default.APP.AWS_ACCESS_KEY),s(c(e),"aws_secret_key",n.default.APP.AWS_SECRET_KEY),s(c(e),"client_bootstrap",new t.io.ClientBootstrap),s(c(e),"qos",t.mqtt.QoS.AtLeastOnce),e}return l=m,(f=[{key:"setClientId",value:function(e){return this.client_id=e,this}},{key:"build",value:function(){var e=t.iot.AwsIotMqttConnectionConfigBuilder.new_mtls_builder()
return e.with_credentials(this.aws_region,this.aws_access_id,this.aws_secret_key),e.with_clean_session(!1),e.with_client_id(this.client_id),e.with_endpoint(this.endpoint),e.with_ping_timeout_ms(5e3),e.with_keep_alive_seconds(5e3),this.config=e.build(),this.client=new t.mqtt.MqttClient(this.client_bootstrap),this}},{key:"__byteToString",value:function(e){return(new TextDecoder).decode(e)}},{key:"__heartbeat",value:function(){var e=this
if(this.connection){var n=0
setInterval((function(){n+=1,e.connection.publish("pharbers/heartbeat",JSON.stringify({message:"client_id => ".concat(e.client_id),sequence:n}),t.mqtt.QoS.AtMostOnce,!1).catch((function(e){return console.log("heartbeat")}))}),3e4)}}},{key:"connect",value:(b=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.client){e.next=6
break}return this.connection=this.client.new_connection(this.config),e.next=4,this.connection.connect()
case 4:this.__heartbeat(),console.log("connect")
case 6:case"end":return e.stop()}}),e,this)})),y=function(){var e=this,t=arguments
return new Promise((function(n,o){var i=b.apply(e,t)
function a(e){r(i,n,o,a,u,"next",e)}function u(e){r(i,n,o,a,u,"throw",e)}a(void 0)}))},function(){return y.apply(this,arguments)})},{key:"disconnect",value:function(){this.connection&&(this.connection.disconnect(),this.connection=null,console.log("disconnect"))}},{key:"setSub",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"pharbers",n=arguments.length>1?arguments[1]:void 0
if(this.connection){if(!n)throw Error("CallBack Is Undefined")
this.connection.subscribe(t,this.qos,(function(t,r){n(e.__byteToString(r))}))}}}])&&i(l.prototype,f),p&&i(l,p),m}()
e.default=p})),define("web-shell/services/loading",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Service.extend({loading:document.getElementById("loadingio-spinner-double-ring-ho1zizxmctu"),afterLoading:Ember.computed((function(){var e=0
return"complete"!==document.readyState&&"interactive"!==document.readyState||(e=1),e}))})
e.default=t})),define("web-shell/services/notice-service",["exports","fetch"],(function(e,t){var n,r,o,i,a,u,l,c,f
function s(e,t,n,r,o,i,a){try{var u=e[i](a),l=u.value}catch(c){return void n(c)}u.done?t(l):Promise.resolve(l).then(r,o)}function p(e){return function(){var t=this,n=arguments
return new Promise((function(r,o){var i=e.apply(t,n)
function a(e){s(i,r,o,a,u,"next",e)}function u(e){s(i,r,o,a,u,"throw",e)}a(void 0)}))}}function b(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=w(e)
if(t){var o=w(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return v(this,n)}}function v(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var O=(n=Ember.inject.service,r=Ember._tracked,o=Ember._tracked,i=Ember._tracked,u=_((a=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)})(a,Ember.Service)
var n,r,o,i=h(a)
function a(){var e
y(this,a)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return b(g(e=i.call.apply(i,[this].concat(n))),"cookies",u,g(e)),b(g(e),"subjectID",l,g(e)),b(g(e),"subjectCallback",c,g(e)),b(g(e),"uploadStatus",f,g(e)),e}return n=a,(r=[{key:"register",value:function(e,t,n,r,o){-1==this.subjectID.indexOf(t)&&(this.subjectID.push(t),this.subjectCallback.push({ele:r,callback:n,tableName:e,date:(new Date).getTime(),projectId:o}))}},{key:"unregister",value:function(e){var t=this.subjectID.indexOf(e)
this.subjectID.splice(t,1),this.subjectCallback.splice(t,1)}},{key:"observer",value:function(){var e=this
setInterval(p(regeneratorRuntime.mark((function n(){var r,o,i,a,u
return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=(new Date).getTime(),e.subjectCallback.forEach((function(t,n){r-t.date>12e4&&e.unregister(e.subjectID[n])})),e.subjectID.length>0?(o=[],e.subjectID.forEach((function(t,n){o.push({id:t,projectId:e.subjectCallback[n].projectId})})),i={Authorization:e.cookies.read("access_token"),"Content-Type":"application/vnd.api+json",Accept:"application/vnd.api+json"},a={table:"notification",conditions:o},u={method:"POST",headers:i,body:JSON.stringify(a)},(0,t.default)("https://apiv2.pharbers.com/phdydatasource/batch_get_item",u).then((function(e){return e.json()})).then((function(t){if(t.data&&t.data.length>0){var n=JSON.parse(t.data[0].attributes.message).cnotification.status
if(console.log(n),"project_file_to_DS_running"!=n&&"dag_conf insert success"!=n){var r=e.subjectID.indexOf(t.data[0].id),o=e.subjectCallback[r]
o.callback(t,o.ele),e.unregister(t.data[0].id)}}}))):console.log("notice observer")
case 3:case"end":return n.stop()}}),n)}))),5e3)}}])&&d(n.prototype,r),o&&d(n,o),a}()).prototype,"cookies",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l=_(a.prototype,"subjectID",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),c=_(a.prototype,"subjectCallback",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),f=_(a.prototype,"uploadStatus",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),a)
e.default=O})),define("web-shell/services/oauth-service",["exports","web-shell/config/environment","fetch"],(function(e,t,n){var r,o,i,a,u,l,c,f,s
function p(e,t,n,r,o,i,a){try{var u=e[i](a),l=u.value}catch(c){return void n(c)}u.done?t(l):Promise.resolve(l).then(r,o)}function b(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=w(e)
if(t){var o=w(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return v(this,n)}}function v(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var j=(r=Ember.inject.service,o=Ember.inject.service,i=Ember.inject.service,a=Ember.inject.service,l=O((u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)})(u,Ember.Service)
var r,o,i,a=h(u)
function u(){var e
y(this,u)
for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o]
return b(g(e=a.call.apply(a,[this].concat(r))),"cookies",l,g(e)),b(g(e),"ajax",c,g(e)),b(g(e),"router",f,g(e)),b(g(e),"store",s,g(e)),_(g(e),"clientId",t.default.APP.clientId),_(g(e),"clientSecret",t.default.APP.clientSecret),_(g(e),"redirectUri",t.default.APP.redirectUri),e}return r=u,(o=[{key:"oauthCallback",value:function(e){var t=this,r=this.cookies,o=this
e.queryParams={code:e.intent.router._lastQueryParams.code,state:e.intent.router._lastQueryParams.state}
var i=e.queryParams
if(i.code&&i.state){var a=this.redirectUri,u=this.clientId,l=this.clientSecret,c=i.code,f="code=".concat(c,"&grant_type=").concat("authorization_code","&redirect_uri=").concat(a),s=window.btoa("".concat(u,":").concat(l)),b={method:"POST",headers:{authorization:"Basic ".concat(s),"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",accept:"application/json, text/javascript, */*; q=0.01"},body:f};(0,n.default)("https://apiv2.pharbers.com/oauth/token",b).then((function(e){return e.json()})).then(function(){var e,n=(e=regeneratorRuntime.mark((function e(n){var i,a,u,l
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.removeAuth(),i={domain:".pharbers.com",path:"/",maxAge:n.expiresIn},r.write("access_token",n.access_token,i),r.write("refresh_token",n.refresh_token,i),r.write("token_type",n.token_type,i),r.write("expires_in",n.expiresIn,i),r.write("user_name",n.user.name,i),r.write("user_name_show",encodeURI(n.user.lastName+n.user.firstName),i),r.write("user_email",n.user.email,i),r.write("company_id",n.user.employerId,i),r.write("user_name_show",encodeURI(n.user.lastName+n.user.firstName),i),r.write("account_id",n.user.id,i),e.next=14,o.store.findRecord("account",o.cookies.read("account_id"))
case 14:return a=e.sent,e.next=17,a.belongsTo("employer").id()
case 17:return u=e.sent,e.next=20,o.store.findRecord("partner",u)
case 20:l=e.sent,r.write("company_name_show",encodeURI(l.name),i),t.router.transitionTo("/download/my-data")
case 23:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments
return new Promise((function(r,o){var i=e.apply(t,n)
function a(e){p(i,r,o,a,u,"next",e)}function u(e){p(i,r,o,a,u,"throw",e)}a(void 0)}))})
return function(e){return n.apply(this,arguments)}}()).catch((function(e){t.router.transitionTo("/download/my-data")}))}else this.router.transitionTo("/download/my-data")}},{key:"judgeAuth",value:function(){var e=!1,t=this.cookies.read("access_token")
return null!=t&&""!==t&&(e=!0),e}},{key:"removeAuth",value:function(){var e=this,t={domain:".pharbers.com",path:"/"},n=document.cookie.match(/[^ =;]+(?=\=)/g)
n&&n.forEach((function(n){e.cookies.clear(n,t)})),window.console.log("clear cookies!")}}])&&d(r.prototype,o),i&&d(r,i),u}()).prototype,"cookies",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=O(u.prototype,"ajax",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=O(u.prototype,"router",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=O(u.prototype,"store",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u)
e.default=j})),define("web-shell/services/page-title-list",["exports","ember-page-title/services/page-title-list"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-shell/services/page-title",["exports","ember-page-title/services/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-shell/services/remote-loading",["exports"],(function(e){function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=u(e)
if(t){var o=u(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return i(this,n)}}function i(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?a(e):t}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var c=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)})(s,Ember.Service)
var i,u,c,f=o(s)
function s(){var e
t(this,s)
for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o]
return l(a(e=f.call.apply(f,[this].concat(r))),"loadedJs",[]),e}return i=s,(u=[{key:"loadRemoteJs",value:function(e,t){var n=this,r=document.createElement("script")
r.onload=function(){n.loadedJs.push(e),t&&t()},-1==this.loadedJs.indexOf(e)&&(r.src=e,document.head.appendChild(r))}},{key:"loadRemoteJsSync",value:function(e){var t=this
return new Promise((function(n,r){var o=document.createElement("script")
o.src=e,o.onload=function(){n()},o.onerror=function(){r("cannot load script "+e)},-1==t.loadedJs.indexOf(e)&&document.body.appendChild(o)}))}}])&&n(i.prototype,u),c&&n(i,c),s}()
e.default=c})),define("web-shell/services/route-parse",["exports","ramda"],(function(e,t){function n(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return
if("string"==typeof e)return r(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
"Object"===n&&e.constructor&&(n=e.constructor.name)
if("Map"===n||"Set"===n)return Array.from(e)
if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n]
return r}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=p(e)
if(t){var o=p(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return s(this,n)}}function s(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var b=function(e){l(r,Ember.Service)
var n=f(r)
function r(){return i(this,r),n.apply(this,arguments)}return u(r,[{key:"parse",value:function(e,n){var r=e.indexOf("?"),o=e,i=""
r>-1&&(o=e.substring(0,r),i=e.substring(r+1))
var a=new h,u=n.split("/"),l=o.split("/")
try{if(!(u.length===l.length))throw new Error("not match")
for(var c=a.zip(u,l),f=[],s=0;s<c.length;++s)f.push(a.createStageInstance("param",c[s][0],c[s][1]))
var p=i.split("&")
p=p.map((function(e){return e.split("=")}))
for(var b=0;b<p.length;++b)f.push(a.createStageInstance("query",p[b][0],p[b][1]))
for(var y=t.default.groupBy((function(e){return e.cat}))(f.map((function(e){return e.parse()}))),d=Object.keys(y),m={},v=0;v<d.length;++v)m[d[v]]=a.array2Object(y[d[v]])
return[!0,m]}catch(g){return[!1,null]}}}]),r}()
e.default=b
var y=function(){function e(t,n){i(this,e),o(this,"template",""),o(this,"resource",""),this.template=t,this.resource=n}return u(e,[{key:"parse",value:function(){throw new Error("not implemented")}}]),e}(),d=function(e){l(n,e)
var t=f(n)
function n(e,r){return i(this,n),t.call(this,e,r)}return u(n,[{key:"parse",value:function(){var e={cat:"param"}
if(this.template.startsWith("{")&&this.template.endsWith("}"))this.template=this.template.substring(this.template.indexOf("{")+1,this.template.lastIndexOf("}")),e[this.template]=this.resource
else if(this.template!==this.resource)throw new Error("not match")
return e}}]),n}(y),m=function(e){l(n,e)
var t=f(n)
function n(e,r){return i(this,n),t.call(this,e,r)}return u(n,[{key:"parse",value:function(){var e={cat:"query"}
return e[this.template]=this.resource,e}}]),n}(y),h=function(){function e(){i(this,e),o(this,"zip",(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return Array.from({length:Math.max.apply(Math,n(t.map((function(e){return e.length}))))},(function(e,n){return t.map((function(e){return e[n]}))}))}))}return u(e,[{key:"createStageInstance",value:function(e,t,n){if("param"===e)return new d(t,n)
if("query"===e)return new m(t,n)
throw new Error("not implemented")}},{key:"array2Object",value:function(e){for(var t={},n=e.length,r=0;r<n;++r)for(var o=e[r],i=Object.keys(o),a=0;a<i.length;++a)t[i[a]]=o[i[a]]
return t}}]),e}()})),define("web-shell/services/store",["exports","ember-data/store"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-shell/templates/application",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"xNbhUJ8Q",block:'[[[1,[28,[35,0],["web shell"],null]],[1,"\\n"],[8,[39,1],null,[["@model"],[[30,1]]],[["default"],[[[],[]]]]],[1,"\\n\\n"],[46,[28,[37,3],null,null],null,null,null],[1,"\\n\\n"],[8,[39,4],null,null,[["default"],[[[],[]]]]],[1,"\\n"]],["@model"],false,["page-title","pharbers-nav-top","component","-outlet","pharbers-footer"]]',moduleName:"web-shell/templates/application.hbs",isStrictMode:!1})
e.default=t})),define("web-shell/templates/shell",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"n5K90ut1",block:'[[[1,[28,[35,0],["shell"],null]],[1,"\\n"],[8,[39,1],null,[["@model"],[[30,1]]],null],[1,"\\n"],[46,[28,[37,3],null,null],null,null,null],[1,"\\n"]],["@model"],false,["page-title","shell-component","component","-outlet"]]',moduleName:"web-shell/templates/shell.hbs",isStrictMode:!1})
e.default=t})),define("web-shell/transforms/boolean",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.BooleanTransform}})})),define("web-shell/transforms/date",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.DateTransform}})})),define("web-shell/transforms/number",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.NumberTransform}})})),define("web-shell/transforms/string",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.StringTransform}})})),define("web-shell/utils/intl/missing-message",["exports","ember-intl/-private/utils/missing-message"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-shell/config/environment",[],(function(){try{var e="web-shell/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(r){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("web-shell/app").default.create({redirectUri:"https://general.pharbers.com/oauth-callback",pharbersUri:"https://www.pharbers.com",accountsUri:"https://accounts.pharbers.com",host:"https://oauth.pharbers.com",apiUri:"https://apiv2.pharbers.com",apiHost:"apiv2.pharbers.com",clientId:"fjjnl2uSalHTdrppHG9u",clientSecret:"961ed4ad842147a5c9a1cbc633693438e1f4a8ebb71050d9d9f7c43dbadf9b72",AWS_ACCESS_KEY:"AKIAWPBDTVEAI6LUCLPX",AWS_SECRET_KEY:"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",AWS_IOT_ENDPOINT:"a23ve0kwl75dll-ats.iot.cn-northwest-1.amazonaws.com.cn",AWS_REGION:"cn-northwest-1",AWS_IOT_DEFAULT_CLIENT_ID:"VQ4L9e4RGDZEI2Ln7fvE",scope:"APP|*|R",clientName:"offweb",isNeedMenu:!0,name:"web-shell",version:"0.0.0+5cff1c3e"})
>>>>>>> Stashed changes
