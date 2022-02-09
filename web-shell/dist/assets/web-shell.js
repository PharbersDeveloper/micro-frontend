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
;define("web-shell/components/main-layout", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{#let (component @layout) as |Layout|}}
      <Layout >
          {{yield}}
      </Layout>
  {{/let}}
  
  */
  {
    "id": "IAfcXorx",
    "block": "[[[44,[[50,[30,1],0,null,null]],[[[1,\"    \"],[8,[30,2],null,null,[[\"default\"],[[[[1,\"\\n        \"],[18,3,null],[1,\"\\n    \"]],[]]]]],[1,\"\\n\"]],[2]]]],[\"@layout\",\"Layout\",\"&default\"],false,[\"let\",\"component\",\"yield\"]]",
    "moduleName": "web-shell/components/main-layout.hbs",
    "isStrictMode": false
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("web-shell/components/ph-tbc-layout", ["exports", "@glimmer/component"], function (_exports, _component) {
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

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{#let (component this.navComponent) as |Nav|}}
      <Nav @inverse=(contains this.needInverse this.activeRoute) />
  {{/let}}
  {{yield}}
  {{#let (component this.footComponent) as |Footer|}}
      <Footer />
  {{/let}}
  
  */
  {
    "id": "CHU0IZ6p",
    "block": "[[[44,[[50,[30,0,[\"navComponent\"]],0,null,null]],[[[1,\"    \"],[8,[30,1],[[24,\"this.needInverse\",\"\"],[24,\"this.activeRoute)\",\"\"]],[[\"@inverse\"],[\"(contains\"]],null],[1,\"\\n\"]],[1]]],[18,3,null],[1,\"\\n\"],[44,[[50,[30,0,[\"footComponent\"]],0,null,null]],[[[1,\"    \"],[8,[30,2],null,null,null],[1,\"\\n\"]],[2]]]],[\"Nav\",\"Footer\",\"&default\"],false,[\"let\",\"component\",\"yield\"]]",
    "moduleName": "web-shell/components/ph-tbc-layout.hbs",
    "isStrictMode": false
  });

  let PhTbcLayoutComponent = (_dec = Ember.inject.service, (_class = class PhTbcLayoutComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "router", _descriptor, this);
    }

    get needInverse() {
      return ["max", "rw", "consulting", "activity-list", "about-us", "report-list", "boyunhui", "download-report", "above-data-detail", "industry-activity-detail"];
    }

    get activeRoute() {
      return this.router.currentRouteName;
    }

    get navComponent() {
      if (this.args.navComponent) {
        return this.args.navComponent;
      } else return "pharbers-nav-top";
    }

    get footComponent() {
      if (this.args.footComponent) {
        return this.args.footComponent;
      } else return "pharbers-footer";
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = PhTbcLayoutComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, PhTbcLayoutComponent);
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
    {{#if @inverse}}
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
    "id": "W1OBTxNC",
    "block": "[[[41,[30,1],[[[1,\"\\t\"],[11,\"pharbers-bp-nav-top\"],[24,\"inversebase\",\"\"],[16,\"is-login\",[36,1]],[4,[38,2],[\"linkToPage\",[33,3]],null],[4,[38,2],[\"logout\",[33,4]],null],[12],[13],[1,\"\\n\"]],[]],[[[1,\"\\t\"],[11,\"pharbers-bp-nav-top\"],[16,\"is-login\",[36,1]],[4,[38,2],[\"linkToPage\",[33,3]],null],[4,[38,2],[\"logout\",[33,4]],null],[12],[13],[1,\"\\n\"]],[]]]],[\"@inverse\"],false,[\"if\",\"isLogin\",\"on\",\"linkToPage\",\"logout\"]]",
    "moduleName": "web-shell/components/pharbers-nav-top.hbs",
    "isStrictMode": false
  });

  let PharbersNavTopComponent = (_dec = Ember.inject.service("oauth-service"), _dec2 = Ember._tracked, _dec3 = Ember._tracked, _dec4 = Ember.inject.service, _dec5 = Ember._action, _dec6 = Ember._action, (_class = class PharbersNavTopComponent extends _component.default {
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

  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _descriptor, _descriptor2;

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
      </E>
  {{/let}}
  {{yield}}
  
  */
  {
    "id": "4D1zd12F",
    "block": "[[[44,[[50,[28,[37,2],[[28,[37,3],[[30,1]],null]],null],0,null,[[\"tagName\"],[[30,1]]]]],[[[1,\"    \"],[8,[30,2],[[16,\"allData\",[30,3]],[4,[38,4],[[30,0,[\"registerListener\"]]],null],[4,[38,5],[[30,0,[\"unregisterListener\"]]],null]],null,[[\"default\"],[[[[1,\"\\n    \"]],[]]]]],[1,\"\\n\"]],[2]]],[18,4,null],[1,\"\\n\"]],[\"@name\",\"E\",\"@allData\",\"&default\"],false,[\"let\",\"component\",\"ensure-safe-component\",\"-element\",\"did-insert\",\"will-destroy\",\"yield\"]]",
    "moduleName": "web-shell/components/wc-context.hbs",
    "isStrictMode": false
  });

  let WcContextComponent = (_dec = Ember.inject.service, _dec2 = Ember.inject.service, _dec3 = Ember._action, _dec4 = Ember._action, _dec5 = Ember._action, (_class = class WcContextComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "router", _descriptor, this);

      _initializerDefineProperty(this, "cookies", _descriptor2, this);
    }

    async listener(e) {
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
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "cookies", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "listener", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "listener"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "registerListener", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "registerListener"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "unregisterListener", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "unregisterListener"), _class.prototype)), _class));
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
;define("web-shell/helpers/contains", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Helper.helper(function tbcNavInverse(arr, cur) {
    return arr.includes(cur);
  });

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
;define("web-shell/models/account", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let AccountModel = (_dec = (0, _model.attr)("string"), _dec2 = (0, _model.attr)("string"), _dec3 = (0, _model.attr)("string"), _dec4 = (0, _model.attr)("string"), _dec5 = (0, _model.attr)("string"), _dec6 = (0, _model.attr)("string"), _dec7 = (0, _model.attr)("string"), _dec8 = (0, _model.attr)("string"), _dec9 = (0, _model.attr)("string"), _dec10 = (0, _model.attr)("date"), _dec11 = (0, _model.attr)("date"), _dec12 = (0, _model.belongsTo)("partner"), (_class = class AccountModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "name", _descriptor, this);

      _initializerDefineProperty(this, "firstName", _descriptor2, this);

      _initializerDefineProperty(this, "lastName", _descriptor3, this);

      _initializerDefineProperty(this, "picture", _descriptor4, this);

      _initializerDefineProperty(this, "wechatOpenId", _descriptor5, this);

      _initializerDefineProperty(this, "password", _descriptor6, this);

      _initializerDefineProperty(this, "phoneNumber", _descriptor7, this);

      _initializerDefineProperty(this, "email", _descriptor8, this);

      _initializerDefineProperty(this, "notification", _descriptor9, this);

      _initializerDefineProperty(this, "created", _descriptor10, this);

      _initializerDefineProperty(this, "modified", _descriptor11, this);

      _initializerDefineProperty(this, "employer", _descriptor12, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "firstName", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "lastName", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "picture", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "wechatOpenId", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "password", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "phoneNumber", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "email", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "notification", [_dec9], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "created", [_dec10], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "modified", [_dec11], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "employer", [_dec12], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = AccountModel;
});
;define("web-shell/models/action", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ActionModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.attr)('string'), _dec4 = (0, _model.attr)('number'), _dec5 = (0, _model.attr)('number'), _dec6 = (0, _model.attr)('string'), _dec7 = (0, _model.attr)('string'), _dec8 = (0, _model.attr)('string'), _dec9 = (0, _model.attr)('string'), _dec10 = (0, _model.attr)('number'), (_class = class ActionModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "projectID", _descriptor, this);

      _initializerDefineProperty(this, "owner", _descriptor2, this);

      _initializerDefineProperty(this, "showName", _descriptor3, this);

      _initializerDefineProperty(this, "time", _descriptor4, this);

      _initializerDefineProperty(this, "code", _descriptor5, this);

      _initializerDefineProperty(this, "jobDesc", _descriptor6, this);

      _initializerDefineProperty(this, "jobCat", _descriptor7, this);

      _initializerDefineProperty(this, "comments", _descriptor8, this);

      _initializerDefineProperty(this, "message", _descriptor9, this);

      _initializerDefineProperty(this, "date", _descriptor10, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "projectID", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "owner", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "showName", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "time", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "code", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "jobDesc", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "jobCat", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "comments", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "message", [_dec9], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "date", [_dec10], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ActionModel;
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
;define("web-shell/models/analysis", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor, _descriptor2;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let AnalysisModel = (_dec = (0, _model.attr)("string"), _dec2 = (0, _model.belongsTo)("project"), (_class = class AnalysisModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "name", _descriptor, this);

      _initializerDefineProperty(this, "project", _descriptor2, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "project", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = AnalysisModel;
});
;define("web-shell/models/chat", ["exports", "@ember-data/model"], function (_exports, _model) {
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

  let ChatModel = (_dec = (0, _model.belongsTo)("slide"), (_class = class ChatModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "slide", _descriptor, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "slide", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ChatModel;
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
;define("web-shell/models/dag-conf", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let DagConfModel = (_dec = (0, _model.attr)("string"), _dec2 = (0, _model.attr)("string"), _dec3 = (0, _model.attr)("string"), _dec4 = (0, _model.attr)("string"), _dec5 = (0, _model.attr)("string"), _dec6 = (0, _model.attr)("string"), _dec7 = (0, _model.attr)("string"), _dec8 = (0, _model.attr)("string"), _dec9 = (0, _model.attr)("string"), _dec10 = (0, _model.attr)("string"), _dec11 = (0, _model.attr)("string"), _dec12 = (0, _model.attr)("string"), _dec13 = (0, _model.attr)("string"), _dec14 = (0, _model.attr)("string"), _dec15 = (0, _model.attr)("string"), _dec16 = (0, _model.attr)("string"), _dec17 = (0, _model.attr)("string"), (_class = class DagConfModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "flowVersion", _descriptor, this);

      _initializerDefineProperty(this, "jobPath", _descriptor2, this);

      _initializerDefineProperty(this, "jobName", _descriptor3, this);

      _initializerDefineProperty(this, "version", _descriptor4, this);

      _initializerDefineProperty(this, "dagName", _descriptor5, this);

      _initializerDefineProperty(this, "jobShowName", _descriptor6, this);

      _initializerDefineProperty(this, "inputs", _descriptor7, this);

      _initializerDefineProperty(this, "jobDisplayName", _descriptor8, this);

      _initializerDefineProperty(this, "jobId", _descriptor9, this);

      _initializerDefineProperty(this, "jobVersion", _descriptor10, this);

      _initializerDefineProperty(this, "outputs", _descriptor11, this);

      _initializerDefineProperty(this, "owner", _descriptor12, this);

      _initializerDefineProperty(this, "projectId", _descriptor13, this);

      _initializerDefineProperty(this, "runtime", _descriptor14, this);

      _initializerDefineProperty(this, "targetJobId", _descriptor15, this);

      _initializerDefineProperty(this, "timeout", _descriptor16, this);

      _initializerDefineProperty(this, "operatorParameters", _descriptor17, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "flowVersion", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "jobPath", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "jobName", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "version", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "dagName", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "jobShowName", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "inputs", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "jobDisplayName", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "jobId", [_dec9], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "jobVersion", [_dec10], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "outputs", [_dec11], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "owner", [_dec12], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "projectId", [_dec13], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "runtime", [_dec14], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, "targetJobId", [_dec15], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, "timeout", [_dec16], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor17 = _applyDecoratedDescriptor(_class.prototype, "operatorParameters", [_dec17], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = DagConfModel;
});
;define("web-shell/models/dash-board", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor, _descriptor2;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let DashBoardModel = (_dec = (0, _model.belongsTo)("project"), _dec2 = (0, _model.hasMany)("slide"), (_class = class DashBoardModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "project", _descriptor, this);

      _initializerDefineProperty(this, "slides", _descriptor2, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "project", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "slides", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = DashBoardModel;
});
;define("web-shell/models/dataset", ["exports", "@ember-data/model"], function (_exports, _model) {
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

  let DatasetModel = (_dec = (0, _model.attr)("string"), _dec2 = (0, _model.attr)("string"), _dec3 = (0, _model.attr)("string"), _dec4 = (0, _model.attr)("string"), _dec5 = (0, _model.attr)("string"), _dec6 = (0, _model.attr)("string"), _dec7 = (0, _model.attr)("string"), _dec8 = (0, _model.attr)("string"), (_class = class DatasetModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "projectId", _descriptor, this);

      _initializerDefineProperty(this, "schema", _descriptor2, this);

      _initializerDefineProperty(this, "version", _descriptor3, this);

      _initializerDefineProperty(this, "name", _descriptor4, this);

      _initializerDefineProperty(this, "label", _descriptor5, this);

      _initializerDefineProperty(this, "cat", _descriptor6, this);

      _initializerDefineProperty(this, "path", _descriptor7, this);

      _initializerDefineProperty(this, "format", _descriptor8, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "projectId", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "schema", [_dec2], {
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
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "label", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "cat", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "path", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "format", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = DatasetModel;
});
;define("web-shell/models/db", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let DbsModel = (_dec = (0, _model.attr)("string"), _dec2 = (0, _model.attr)("string"), _dec3 = (0, _model.hasMany)("table"), (_class = class DbsModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "name", _descriptor, this);

      _initializerDefineProperty(this, "provider", _descriptor2, this);

      _initializerDefineProperty(this, "tables", _descriptor3, this);

      _initializerDefineProperty(this, "owner", _descriptor4, this);
    }

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
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "tables", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "owner", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = DbsModel;
});
;define("web-shell/models/diagram", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let DiagramModel = (_dec = (0, _model.attr)("string"), _dec2 = (0, _model.attr)("string"), _dec3 = (0, _model.attr)("string"), _dec4 = (0, _model.attr)("string"), _dec5 = (0, _model.attr)("string"), _dec6 = (0, _model.attr)("string"), _dec7 = (0, _model.attr)("string"), _dec8 = (0, _model.attr)("string"), _dec9 = (0, _model.attr)("date"), _dec10 = (0, _model.attr)("date"), (_class = class DiagramModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "partner", _descriptor, this);

      _initializerDefineProperty(this, "name", _descriptor2, this);

      _initializerDefineProperty(this, "source", _descriptor3, this);

      _initializerDefineProperty(this, "rid", _descriptor4, this);

      _initializerDefineProperty(this, "gid", _descriptor5, this);

      _initializerDefineProperty(this, "tag", _descriptor6, this);

      _initializerDefineProperty(this, "version", _descriptor7, this);

      _initializerDefineProperty(this, "description", _descriptor8, this);

      _initializerDefineProperty(this, "created", _descriptor9, this);

      _initializerDefineProperty(this, "modified", _descriptor10, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "partner", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "name", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "source", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "rid", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "gid", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "tag", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "version", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "description", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "created", [_dec9], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "modified", [_dec10], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = DiagramModel;
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
;define("web-shell/models/execution", ["exports", "@ember-data/model"], function (_exports, _model) {
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

  let ExecutionModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('number'), _dec3 = (0, _model.attr)('string'), _dec4 = (0, _model.attr)('string'), _dec5 = (0, _model.attr)('number'), _dec6 = (0, _model.attr)('string'), _dec7 = (0, _model.attr)('string'), (_class = class ExecutionModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "input", _descriptor, this);

      _initializerDefineProperty(this, "endTime", _descriptor2, this);

      _initializerDefineProperty(this, "owner", _descriptor3, this);

      _initializerDefineProperty(this, "smId", _descriptor4, this);

      _initializerDefineProperty(this, "startTime", _descriptor5, this);

      _initializerDefineProperty(this, "state", _descriptor6, this);

      _initializerDefineProperty(this, "steps", _descriptor7, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "input", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "endTime", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "owner", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "smId", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "startTime", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "state", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "steps", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ExecutionModel;
});
;define("web-shell/models/file", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let FileModel = (_dec = (0, _model.attr)("string"), _dec2 = (0, _model.attr)("string"), _dec3 = (0, _model.attr)("string"), _dec4 = (0, _model.attr)("number"), _dec5 = (0, _model.attr)("string"), _dec6 = (0, _model.attr)("date"), _dec7 = (0, _model.attr)("date"), _dec8 = (0, _model.attr)("string"), _dec9 = (0, _model.attr)("string"), (_class = class FileModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "name", _descriptor, this);

      _initializerDefineProperty(this, "owner", _descriptor2, this);

      _initializerDefineProperty(this, "extension", _descriptor3, this);

      _initializerDefineProperty(this, "size", _descriptor4, this);

      _initializerDefineProperty(this, "source", _descriptor5, this);

      _initializerDefineProperty(this, "labels", _descriptor6, this);

      _initializerDefineProperty(this, "created", _descriptor7, this);

      _initializerDefineProperty(this, "modified", _descriptor8, this);

      _initializerDefineProperty(this, "version", _descriptor9, this);

      _initializerDefineProperty(this, "description", _descriptor10, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "owner", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "extension", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "size", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "source", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "labels", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "created", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "modified", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "version", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "description", [_dec9], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = FileModel;
});
;define("web-shell/models/flow", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor, _descriptor2;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let FlowModel = (_dec = (0, _model.belongsTo)("project"), _dec2 = (0, _model.hasMany)("stateMachine"), (_class = class FlowModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "project", _descriptor, this);

      _initializerDefineProperty(this, "stateMachines", _descriptor2, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "project", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "stateMachines", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = FlowModel;
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
;define("web-shell/models/layout", ["exports", "@ember-data/model"], function (_exports, _model) {
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

  let LayoutModel = (_dec = (0, _model.attr)("string"), _dec2 = (0, _model.attr)("string"), _dec3 = (0, _model.attr)("string"), _dec4 = (0, _model.attr)("string"), _dec5 = (0, _model.attr)("string"), (_class = class LayoutModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "clientId", _descriptor, this);

      _initializerDefineProperty(this, "clientName", _descriptor2, this);

      _initializerDefineProperty(this, "version", _descriptor3, this);

      _initializerDefineProperty(this, "name", _descriptor4, this);

      _initializerDefineProperty(this, "css", _descriptor5, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "clientId", [_dec], {
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
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "css", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = LayoutModel;
});
;define("web-shell/models/model", ["exports", "@ember-data/model"], function (_exports, _model) {
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

  let ModelModel = (_dec = (0, _model.belongsTo)("project"), _dec2 = (0, _model.attr)("string"), _dec3 = (0, _model.attr)("string"), _dec4 = (0, _model.attr)("string"), _dec5 = (0, _model.attr)("string"), (_class = class ModelModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "project", _descriptor, this);

      _initializerDefineProperty(this, "name", _descriptor2, this);

      _initializerDefineProperty(this, "type", _descriptor3, this);

      _initializerDefineProperty(this, "location", _descriptor4, this);

      _initializerDefineProperty(this, "definition", _descriptor5, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "project", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "name", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "type", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "location", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "definition", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ModelModel;
});
;define("web-shell/models/notebook", ["exports", "@ember-data/model"], function (_exports, _model) {
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

  let NotebookModel = (_dec = (0, _model.attr)("string"), _dec2 = (0, _model.attr)("string"), _dec3 = (0, _model.attr)("string"), _dec4 = (0, _model.attr)("string"), _dec5 = (0, _model.belongsTo)("project"), (_class = class NotebookModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "name", _descriptor, this);

      _initializerDefineProperty(this, "url", _descriptor2, this);

      _initializerDefineProperty(this, "type", _descriptor3, this);

      _initializerDefineProperty(this, "resource", _descriptor4, this);

      _initializerDefineProperty(this, "project", _descriptor5, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "url", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "type", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "resource", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "project", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = NotebookModel;
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
;define("web-shell/models/partition", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let PartitionModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.attr)('number'), _dec4 = (0, _model.attr)('string'), _dec5 = (0, _model.attr)('string'), (_class = class PartitionModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "smID", _descriptor, this);

      _initializerDefineProperty(this, "source", _descriptor2, this);

      _initializerDefineProperty(this, "schema", _descriptor3, this);

      _initializerDefineProperty(this, "date", _descriptor4, this);

      _initializerDefineProperty(this, "partitions", _descriptor5, this);

      _initializerDefineProperty(this, "attribute", _descriptor6, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "smID", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "source", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "schema", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "date", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "partitions", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "attribute", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = PartitionModel;
});
;define("web-shell/models/partner", ["exports", "@ember-data/model"], function (_exports, _model) {
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

  let PartnerModel = (_dec = (0, _model.attr)("string"), _dec2 = (0, _model.attr)("string"), _dec3 = (0, _model.attr)("string"), _dec4 = (0, _model.attr)("string"), _dec5 = (0, _model.attr)("string"), _dec6 = (0, _model.hasMany)("template"), _dec7 = (0, _model.attr)("date"), _dec8 = (0, _model.attr)("date"), _dec9 = (0, _model.hasMany)("account"), (_class = class PartnerModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "name", _descriptor, this);

      _initializerDefineProperty(this, "address", _descriptor2, this);

      _initializerDefineProperty(this, "phoneNumber", _descriptor3, this);

      _initializerDefineProperty(this, "web", _descriptor4, this);

      _initializerDefineProperty(this, "pid", _descriptor5, this);

      _initializerDefineProperty(this, "templates", _descriptor6, this);

      _initializerDefineProperty(this, "created", _descriptor7, this);

      _initializerDefineProperty(this, "modified", _descriptor8, this);

      _initializerDefineProperty(this, "employees", _descriptor9, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "address", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "phoneNumber", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "web", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "pid", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "templates", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "created", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "modified", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "employees", [_dec9], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = PartnerModel;
});
;define("web-shell/models/project-file", ["exports", "@ember-data/model"], function (_exports, _model) {
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

  let ProjectFileModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.attr)('string'), _dec4 = (0, _model.attr)('number'), _dec5 = (0, _model.attr)('number'), _dec6 = (0, _model.attr)('string'), _dec7 = (0, _model.attr)('string'), (_class = class ProjectFileModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "smID", _descriptor, this);

      _initializerDefineProperty(this, "name", _descriptor2, this);

      _initializerDefineProperty(this, "status", _descriptor3, this);

      _initializerDefineProperty(this, "date", _descriptor4, this);

      _initializerDefineProperty(this, "size", _descriptor5, this);

      _initializerDefineProperty(this, "category", _descriptor6, this);

      _initializerDefineProperty(this, "property", _descriptor7, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "smID", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "name", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "status", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "date", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "size", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "category", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "property", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ProjectFileModel;
});
;define("web-shell/models/project", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ProjectModel = (_dec = (0, _model.attr)("string"), _dec2 = (0, _model.attr)("string"), _dec3 = (0, _model.attr)("string"), _dec4 = (0, _model.attr)("string"), _dec5 = (0, _model.attr)("date"), _dec6 = (0, _model.hasMany)("model"), _dec7 = (0, _model.hasMany)("script"), _dec8 = (0, _model.hasMany)("dataset"), _dec9 = (0, _model.belongsTo)("flow"), _dec10 = (0, _model.belongsTo)("analysis"), _dec11 = (0, _model.hasMany)("notebook"), _dec12 = (0, _model.hasMany)("dash-board"), _dec13 = (0, _model.hasMany)("wiki"), (_class = class ProjectModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "name", _descriptor, this);

      _initializerDefineProperty(this, "provider", _descriptor2, this);

      _initializerDefineProperty(this, "owner", _descriptor3, this);

      _initializerDefineProperty(this, "type", _descriptor4, this);

      _initializerDefineProperty(this, "created", _descriptor5, this);

      _initializerDefineProperty(this, "models", _descriptor6, this);

      _initializerDefineProperty(this, "scripts", _descriptor7, this);

      _initializerDefineProperty(this, "datasets", _descriptor8, this);

      _initializerDefineProperty(this, "flow", _descriptor9, this);

      _initializerDefineProperty(this, "analysis", _descriptor10, this);

      _initializerDefineProperty(this, "notebooks", _descriptor11, this);

      _initializerDefineProperty(this, "dashBoards", _descriptor12, this);

      _initializerDefineProperty(this, "wikis", _descriptor13, this);

      _initializerDefineProperty(this, "tasks", _descriptor14, this);

      _initializerDefineProperty(this, "actions", _descriptor15, this);
    }

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
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "models", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "scripts", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "datasets", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "flow", [_dec9], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "analysis", [_dec10], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "notebooks", [_dec11], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "dashBoards", [_dec12], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "wikis", [_dec13], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "tasks", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, "actions", [_model.attr], {
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
;define("web-shell/models/resource", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ResourceModel = (_dec = (0, _model.attr)("string"), _dec2 = (0, _model.attr)("string"), _dec3 = (0, _model.attr)("date"), _dec4 = (0, _model.attr)("string"), (_class = class ResourceModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "name", _descriptor, this);

      _initializerDefineProperty(this, "resourceType", _descriptor2, this);

      _initializerDefineProperty(this, "created", _descriptor3, this);

      _initializerDefineProperty(this, "tenant", _descriptor4, this);

      _initializerDefineProperty(this, "accounts", _descriptor5, this);

      _initializerDefineProperty(this, "concrets", _descriptor6, this);

      _initializerDefineProperty(this, "includes", _descriptor7, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "resourceType", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "created", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "tenant", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "accounts", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "concrets", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "includes", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ResourceModel;
});
;define("web-shell/models/script", ["exports", "@ember-data/model"], function (_exports, _model) {
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

  let ScriptModel = (_dec = (0, _model.belongsTo)("project"), _dec2 = (0, _model.attr)("string"), _dec3 = (0, _model.attr)("string"), _dec4 = (0, _model.attr)("string"), _dec5 = (0, _model.attr)("string"), _dec6 = (0, _model.hasMany)("dataset", {
    inverse: "scriptInput"
  }), _dec7 = (0, _model.hasMany)("dataset", {
    inverse: "scriptOutput"
  }), _dec8 = (0, _model.belongsTo)("stateDisplay"), (_class = class ScriptModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "project", _descriptor, this);

      _initializerDefineProperty(this, "type", _descriptor2, this);

      _initializerDefineProperty(this, "name", _descriptor3, this);

      _initializerDefineProperty(this, "args", _descriptor4, this);

      _initializerDefineProperty(this, "reverse", _descriptor5, this);

      _initializerDefineProperty(this, "inputDfs", _descriptor6, this);

      _initializerDefineProperty(this, "outputDfs", _descriptor7, this);

      _initializerDefineProperty(this, "stateDisplay", _descriptor8, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "project", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "type", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "name", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "args", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "reverse", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "inputDfs", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "outputDfs", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "stateDisplay", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ScriptModel;
});
;define("web-shell/models/slide", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor, _descriptor2;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let SlideModel = (_dec = (0, _model.belongsTo)("dash-board"), _dec2 = (0, _model.hasMany)("chat"), (_class = class SlideModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "dashBoard", _descriptor, this);

      _initializerDefineProperty(this, "chats", _descriptor2, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "dashBoard", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "chats", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = SlideModel;
});
;define("web-shell/models/state-display", ["exports", "@ember-data/model"], function (_exports, _model) {
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

  let StateDisplayModel = (_dec = (0, _model.belongsTo)("stateMachine"), _dec2 = (0, _model.attr)("string"), _dec3 = (0, _model.attr)("string"), _dec4 = (0, _model.hasMany)("script"), (_class = class StateDisplayModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "stateMachine", _descriptor, this);

      _initializerDefineProperty(this, "name", _descriptor2, this);

      _initializerDefineProperty(this, "definition", _descriptor3, this);

      _initializerDefineProperty(this, "startScripts", _descriptor4, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "stateMachine", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "name", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "definition", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "startScripts", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = StateDisplayModel;
});
;define("web-shell/models/state-machine", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let StateMachineModel = (_dec = (0, _model.attr)("string"), _dec2 = (0, _model.attr)("string"), _dec3 = (0, _model.attr)("string"), _dec4 = (0, _model.belongsTo)("flow"), _dec5 = (0, _model.attr)("string"), _dec6 = (0, _model.belongsTo)("stateDisplay"), (_class = class StateMachineModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "name", _descriptor, this);

      _initializerDefineProperty(this, "project", _descriptor2, this);

      _initializerDefineProperty(this, "type", _descriptor3, this);

      _initializerDefineProperty(this, "flow", _descriptor4, this);

      _initializerDefineProperty(this, "displayName", _descriptor5, this);

      _initializerDefineProperty(this, "display", _descriptor6, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "project", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "type", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "flow", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "displayName", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "display", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = StateMachineModel;
});
;define("web-shell/models/step", ["exports", "@ember-data/model"], function (_exports, _model) {
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

  let StepModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.attr)('string'), _dec4 = (0, _model.attr)('string'), _dec5 = (0, _model.attr)('string'), _dec6 = (0, _model.attr)('string'), _dec7 = (0, _model.attr)('number'), _dec8 = (0, _model.attr)('endTime'), (_class = class StepModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "stId", _descriptor, this);

      _initializerDefineProperty(this, "input", _descriptor2, this);

      _initializerDefineProperty(this, "logLocation", _descriptor3, this);

      _initializerDefineProperty(this, "output", _descriptor4, this);

      _initializerDefineProperty(this, "state", _descriptor5, this);

      _initializerDefineProperty(this, "stepLog", _descriptor6, this);

      _initializerDefineProperty(this, "startTime", _descriptor7, this);

      _initializerDefineProperty(this, "startTime", _descriptor8, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "stId", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "input", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "logLocation", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "output", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "state", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "stepLog", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "startTime", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "startTime", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = StepModel;
});
;define("web-shell/models/table", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let TableModel = (_dec = (0, _model.attr)("string"), _dec2 = (0, _model.attr)("string"), _dec3 = (0, _model.attr)("string"), _dec4 = (0, _model.attr)("string"), _dec5 = (0, _model.belongsTo)("db"), (_class = class TableModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "name", _descriptor, this);

      _initializerDefineProperty(this, "database", _descriptor2, this);

      _initializerDefineProperty(this, "provider", _descriptor3, this);

      _initializerDefineProperty(this, "version", _descriptor4, this);

      _initializerDefineProperty(this, "db", _descriptor5, this);

      _initializerDefineProperty(this, "meta", _descriptor6, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "database", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "provider", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "version", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "db", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "meta", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = TableModel;
});
;define("web-shell/models/wiki", ["exports", "@ember-data/model"], function (_exports, _model) {
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

  let WikiModel = (_dec = (0, _model.belongsTo)("project"), _dec2 = (0, _model.attr)("string"), _dec3 = (0, _model.attr)("string"), (_class = class WikiModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "project", _descriptor, this);

      _initializerDefineProperty(this, "type", _descriptor2, this);

      _initializerDefineProperty(this, "location", _descriptor3, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "project", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "type", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "location", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = WikiModel;
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
;define("web-shell/routes/application", ["exports", "web-shell/config/environment"], function (_exports, _environment) {
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

  let ApplicationRoute = (_dec = Ember.inject.service, _dec2 = Ember.inject.service("loading"), _dec3 = Ember.inject.service("ph-menu"), _dec4 = Ember._action, _dec5 = Ember._action, (_class = class ApplicationRoute extends Ember.Route {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "intl", _descriptor, this);

      _initializerDefineProperty(this, "loadingService", _descriptor2, this);

      _initializerDefineProperty(this, "menuService", _descriptor3, this);
    }

    get layoutName() {
      return this.layout.name;
    }

    get clientName() {
      return _environment.default.APP.clientName;
    }

    beforeModel(param) {
      this.loadingService.beforeLoading();
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
      }
    }

    willTransition(_) {
      this.loadingService.beforeLoading();
    }

    didTransition() {
      //跳转到页面顶部
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      this.loadingService.afterLoading();
    }

    async model() {
      this.afterModel = function () {
        this.loadingService.afterLoading();
      };

      return await this.menuService.queryLayoutByClient();
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
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "menuService", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "willTransition", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "willTransition"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "didTransition", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "didTransition"), _class.prototype)), _class));
  _exports.default = ApplicationRoute;
});
;define("web-shell/routes/shell", ["exports", "web-shell/config/environment"], function (_exports, _environment) {
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

  let ShellRoute = (_dec = Ember.inject.service, _dec2 = Ember.inject.service, _dec3 = Ember.inject.service("remote-loading"), _dec4 = Ember.inject.service("route-parse"), _dec5 = Ember.inject.service("ph-menu"), (_class = class ShellRoute extends Ember.Route {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "cookies", _descriptor, this);

      _initializerDefineProperty(this, "store", _descriptor2, this);

      _initializerDefineProperty(this, "jsl", _descriptor3, this);

      _initializerDefineProperty(this, "rps", _descriptor4, this);

      _initializerDefineProperty(this, "ms", _descriptor5, this);
    }

    async model(params) {
      if (Object.keys(params).length === 0) {
        params["path"] = "home";
      }
      /**
       * 1. 第一步，需要从读取JS模版
       */


      const pages = await this.ms.queryClientPages();
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


      await this.jsl.loadRemoteJs(curPage.uri);
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

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "cookies", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "store", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "jsl", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "rps", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "ms", [_dec5], {
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
    body: document.getElementsByTagName("body"),
    beforeLoading: function () {
      this.loading.style["display"] = "flex";
      this.loading.style["z-index"] = 2;
      this.body[0].style["overflow"] = "hidden";
    },
    afterLoading: function () {
      const server = setTimeout(() => {
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
          this.loading.style["display"] = "none";
          this.loading.style["z-index"] = 2;
          this.body[0].style["overflow"] = "auto";
          clearInterval(server);
        }
      }, 100);
    }
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
;define("web-shell/services/ph-menu", ["exports", "web-shell/config/environment"], function (_exports, _environment) {
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

  let PhMenuService = (_dec = Ember.inject.service, (_class = class PhMenuService extends Ember.Service {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "store", _descriptor, this);
    }

    async queryLayoutByClient() {
      let layout = this.store.peekRecord("layout", _environment.default.APP.clientId);

      if (layout === null) {
        layout = await this.store.findRecord("layout", _environment.default.APP.clientId);
      }

      return layout;
    }

    async queryClientPages() {
      let pages = this.store.peekAll("page");
      pages = pages.filter(_ => true);

      if (pages.length === 0) {
        pages = await this.store.query("page", {
          "filter[clientId]": _environment.default.APP.clientId
        });
        pages = pages.filter(_ => true);
      }

      return pages;
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = PhMenuService;
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
    "id": "CG8n8Gu+",
    "block": "[[[1,[28,[35,0],[[30,0,[\"clientName\"]]],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@layout\"],[[30,0,[\"model\",\"name\"]]]],[[\"default\"],[[[[1,\"\\n    \"],[46,[28,[37,3],null,null],null,null,null],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"page-title\",\"main-layout\",\"component\",\"-outlet\"]]",
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
            require("web-shell/app")["default"].create({"redirectUri":"https://general.pharbers.com/oauth-callback","pharbersUri":"https://www.pharbers.com","accountsUri":"https://accounts.pharbers.com","host":"https://oauth.pharbers.com","apiUri":"https://apiv2.pharbers.com","apiHost":"apiv2.pharbers.com","clientId":"fjjnl2uSalHTdrppHG9u","clientName":"offweb","clientSecret":"961ed4ad842147a5c9a1cbc633693438e1f4a8ebb71050d9d9f7c43dbadf9b72","AWS_ACCESS_KEY":"AKIAWPBDTVEAI6LUCLPX","AWS_SECRET_KEY":"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","AWS_IOT_ENDPOINT":"a23ve0kwl75dll-ats.iot.cn-northwest-1.amazonaws.com.cn","AWS_REGION":"cn-northwest-1","AWS_IOT_DEFAULT_CLIENT_ID":"VQ4L9e4RGDZEI2Ln7fvE","scope":"APP|*|R","isNeedMenu":true,"debugToken":"bf6e5cb27179218c0b00efe11e25ddd9acecc2c029902ccced92b2ff3b853def","name":"web-shell","version":"0.0.0+a09adac1"});
          }
        
//# sourceMappingURL=web-shell.map
