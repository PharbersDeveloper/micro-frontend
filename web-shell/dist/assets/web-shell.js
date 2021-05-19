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
;define("web-shell/adapters/application", ["exports", "web-shell/config/environment", "web-shell/helpers/PhSigV4AWSClientFactory", "web-shell/helpers/PhSigV4ClientUtils", "web-shell/helpers/PhUrlTemplate", "@ember-data/adapter/json-api"], function (_exports, _environment, _PhSigV4AWSClientFactory, _PhSigV4ClientUtils, _PhUrlTemplate, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // eslint-disable-next-line ember/no-classic-classes
  var _default = _jsonApi.default.extend({
    cookies: Ember.inject.service(),
    oauthRequest: false,
    // host: 'http://www.pharbers.com',
    namespace: _environment.default.namespace,

    // 根据后端发布版本修改命名空间, 生产环境用这个，nginx 做了转发
    sortQueryParams(params) {
      this.set("queryParamsAWS", params);
    },

    buildURL: function (modelName, id, snapshot, requestType, query) {
      this.set("modelName", modelName);

      let url = this._super(...arguments);

      const curType = url.split("/").splice(2, 2); // ["activities" , ... ]

      this.set("modelName", modelName);

      if (modelName === "account" || modelName === "applyuser") {
        this.toggleProperty("oauthRequest");
        return "http://oauth.pharbers.com/" + url;
      }

      if (modelName === "cooperation") {
        curType[0] = "cooperation";
        url = url.split("/");
        url[2] = "cooperation";
        url = url.join("/");
      }

      this.set("requestURL", url);
      const curPath = curType.join("/");
      let newUrl = `/${_environment.default.namespace}/offweb/${curPath}`;

      if (query && Object.keys(query).length) {
        let queryString = "";
        const queryParamsArr = Object.keys(query);
        this.set("queryParamsArr", queryParamsArr); // 放进来是因为object没有顺序，参数位置不同，可能导致token错误

        if (queryParamsArr == "ids[]") {
          for (let index = 0; index < query[queryParamsArr[0]].length; index++) {
            const element = queryParamsArr[0]; // console.log('element',element)

            if (index === 0) {
              // console.log('query[element][0]',query[element][index])
              queryString += `${element}=${query[element][index]}`; // console.log(queryString)
            } else {
              queryString += `&${element}=${query[element][index]}`;
            }
          } // queryString = `ids[]=AFxTm_-JK5HX9_Gzu-BS&ids[]=AFxTm_-JK5HX9_Gzu-BS`

        } else {
          for (let index = 0; index < queryParamsArr.length; index++) {
            const element = queryParamsArr[index];

            if (index === 0) {
              queryString += `${element}=${query[element]}`;
            } else {
              queryString += `&${element}=${query[element]}`;
            }
          }
        }

        newUrl += "?" + encodeURI(queryString);
      }

      this.set("newUrl", newUrl); // if(modelName === "zone")
      // 	return "https://2t69b7x032.execute-api.cn-northwest-1.amazonaws.com.cn/v0/offweb/zones?ids%5B%5D=AFxTm_-JK5HX9_Gzu-BS&ids%5B%5D=yhwPulzG0J_2qMnN8PKo&ids%5B%5D=mgFzuAWjaZZcgEdmFD8C&ids%5B%5D=Jbg2caAVuJt6iIjqIQL6"

      return "https://2t69b7x032.execute-api.cn-northwest-1.amazonaws.com.cn" + newUrl;
    },
    headers: Ember.computed("auth", "cookies", "newUrl", "oauthRequest", "oauthRequestComponentQuery", "oauthRequestTokenQuery", "queryParamsAWS", "queryParamsArr", "requestURL", "token", function () {
      const factory = _PhSigV4AWSClientFactory.default;
      const utils = _PhSigV4ClientUtils.default;
      const uriTemp = _PhUrlTemplate.default;
      const config = {
        accessKey: _environment.default.APP.AWS_ACCESS_KEY,
        secretKey: _environment.default.APP.AWS_SECRET_KEY,
        sessionToken: "",
        region: "cn-northwest-1",
        apiKey: undefined,
        defaultContentType: "application/vnd.api+json",
        defaultAcceptType: "application/vnd.api+json"
      }; // extract endpoint and path from url

      const invokeUrl = "https://2t69b7x032.execute-api.cn-northwest-1.amazonaws.com.cn/v0";
      const endpoint = /(^https?:\/\/[^\/]+)/g.exec(invokeUrl)[1];
      const pathComponent = invokeUrl.substring(endpoint.length);
      const sigV4ClientConfig = {
        accessKey: config.accessKey,
        secretKey: config.secretKey,
        sessionToken: config.sessionToken,
        serviceName: "execute-api",
        region: config.region,
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
      };
      const client = factory.PhSigV4AWSClientFactory.newClient(sigV4ClientConfig); // 请求login hbs的时候使用

      if (this.auth && this.oauthRequestComponentQuery) {
        // eslint-disable-next-line ember/no-side-effects
        this.set("auth", 0);
        let req = {
          verb: "get".toUpperCase(),
          path: "/v0/common/components/OXE67oMY7RuFJ_rmBUzL",
          headers: {
            Accept: "text/html"
          },
          queryParams: this.oauthRequestComponentQuery,
          body: {}
        }; // console.log("req", req)

        const request = client.makeRequest(req); // console.log("request", request)

        return request.headers;
      }

      if (this.token && this.oauthRequestTokenQuery) {
        // eslint-disable-next-line ember/no-side-effects
        this.set("token", 0);
        let req = {
          verb: "get".toUpperCase(),
          path: "/v0/oauth/token",
          queryParams: this.oauthRequestTokenQuery,
          body: {}
        }; // console.log("req", req)

        const request = client.makeRequest(req); // console.log("request", request)

        return request.headers;
      } // apiGateway.core.utils.assertParametersDefined(params, ['type', 'Accept'], ['body']);


      const requestURL = this.requestURL.split("/"); // ["", "v0", "accounts", "5d725825bd33a54c8213a5ae"]
      // const curType = requestURL[2]

      const curType = requestURL[2]; // let curId = ""
      // let curRelationship = ""

      let paramsArr = [];
      let urlArr = ["type"]; // type id relationship

      let awsPath = "/offweb/{type}"; // 如果有id 和relationship 加上

      const params = {
        type: curType,
        Accept: "application/vnd.api+json"
      };
      let queryParamsAWS = this.queryParamsAWS;

      if (requestURL.length >= 4) {
        urlArr.push("id");
        params.id = requestURL[3];
        awsPath += "/{id}";
        queryParamsAWS = {}; // 需要修改
      }

      if (Object.keys(queryParamsAWS).length) {
        let queryParamsArr = this.queryParamsArr; // console.log('queryParamsAWS',queryParamsAWS[queryParamsArr[0]])

        if (queryParamsArr == "ids[]") {
          let encodeURIEle = encodeURI(queryParamsArr[0]);
          paramsArr.push(encodeURIEle);
          let paramsString = ``;
          let sortArr = queryParamsAWS[queryParamsArr[0]].sort();

          for (let i = 0; i < sortArr.length - 1; i++) {
            paramsString += `${sortArr[i]}&ids[]=`;
          }

          params[encodeURIEle] = paramsString + sortArr[sortArr.length - 1];
        } else {
          queryParamsArr.forEach(element => {
            let encodeURIEle = encodeURI(element);
            paramsArr.push(encodeURIEle);
            params[encodeURIEle] = queryParamsAWS[element];
          });
        } // Object.assign( params, queryParamsAWS )

      } // { verb: 'GET',
      // path: '/v0/offweb/proposals',
      // headers: { Accept: 'application/vnd.api+json' },
      // queryParams: {},
      // body: {}
      // }


      let req = {
        verb: "get".toUpperCase(),
        path: pathComponent + uriTemp.PhUriTemplate(awsPath).expand(utils.parseParametersToObject(params, urlArr)),
        headers: utils.parseParametersToObject(params, ["Accept"]),
        queryParams: utils.parseParametersToObject(params, paramsArr),
        // queryParams: queryParamsAWS,
        body: {}
      }; // console.log('req.queryParams',req.queryParams)
      // console.log("req", req)
      // if (this.get('modelName') === "zone"){
      // 	let SortArr = ['AFxTm_-JK5HX9_Gzu-BS','yhwPulzG0J_2qMnN8PKo','mgFzuAWjaZZcgEdmFD8C','Jbg2caAVuJt6iIjqIQL6'].sort()
      // 	console.log('SortArr',SortArr)
      // 	req.queryParams = {'ids%5B%5D': `${SortArr[0]}&ids[]=${SortArr[1]}&ids[]=${SortArr[2]}&ids[]=${SortArr[3]}`}
      // }

      const request = client.makeRequest(req); // console.log("request", request)
      // {   method: 'GET',
      // 	url:
      // 	'https://2t69b7x032.execute-api.cn-northwest-1.amazonaws.com.cn/v0/offweb/proposals',
      // 	headers:
      // 	{ Accept: 'application/vnd.api+json',
      // 		'x-amz-date': '20200605T073304Z',
      // 		Authorization:
      // 		'AWS4-HMAC-SHA256 Credential=AKIAWPBDTVEAJ6CCFVCP/20200605/cn-northwest-1/execute-api/aws4_request, SignedHeaders=accept;host;x-amz-date, Signature=1295d2ea428819bc40d6cd35a7dc0dca20d0ef335ccfda5e7e346b17223ae0d9',
      // 		'Content-Type': 'application/vnd.api+json' },
      // 	data: '',
      // 	timeout: 30000
      // }
      // console.log("request", request)

      return request.headers;
    })
  });

  _exports.default = _default;
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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="content">
      {{!-- <h1>Web components inside Ember</h1> --}}
      <div class="ember">
          {{!-- <h2>Ember shell context</h2> --}}
          {{!-- <div class="react">
              <h2>React context</h2>
              <react-example-components
                  {{did-insert this.registerListener}}
                  {{will-destroy this.unregisterListener}} >
              </react-example-components>
          </div>
          <div class="react">
              <h2>Ember context</h2>
              <example-web-component componenttitle="alfred"
                  {{did-insert this.registerListener}}
                  {{will-destroy this.unregisterListener}} >
              </example-web-component>
          </div> --}}
          <div class="react">
              <h2>Vue context</h2>
              <h1>{{t "nav.productAndService"}}</h1>
              <pharbers-bp-input states="info" placeholder="测试">
              </pharbers-bp-input>
              <pharbers-bp-button text="{{buttonText}}" src="assets/abord.svg"
                  {{did-insert this.registerListener}}
                  {{will-destroy this.unregisterListener}} >
              </pharbers-bp-button>
              <pharbers-bp-img src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" text="alfred test"
                  {{did-insert this.registerListener}}
                  {{will-destroy this.unregisterListener}} >
              </pharbers-bp-img>
              <pharbers-bp-label text=arr 
                  {{did-insert this.registerListener}}
                  {{will-destroy this.unregisterListener}}></pharbers-bp-label>
              <pharbers-bp-link text="测试link" 
                  {{did-insert this.registerListener}}
                  {{will-destroy this.unregisterListener}}>
              </pharbers-bp-link>
              <pharbers-bp-text title="bp-text test">
                  这里是bp-text
              </pharbers-bp-text>
              <h1>vue menu</h1>
              <pharbers-bp-menu menu_data={{this.menu_data}} {{did-insert this.transferMenuData}}></pharbers-bp-menu>
  
              <h1>vue select option</h1>
              <pharbers-bp-select choosed_value={{this.choosed_value}} options_data={{this.options_data}} {{did-insert this.transferData}}></pharbers-bp-select>
              <pharbers-bp-status text="这是status" type="in-progress" subtle
                  {{did-insert this.registerListener}}
                  {{will-destroy this.unregisterListener}}>
              </pharbers-bp-status>
              <pharbers-bp-tag text={{this.tag}} type="teals" subtle
                  {{did-insert this.registerListener}}
                  {{will-destroy this.unregisterListener}}>
              </pharbers-bp-tag>
              <pharbers-bp-badge result="100" primary
                  {{did-insert this.registerListener}}
                  {{will-destroy this.unregisterListener}}>
              </pharbers-bp-badge>
              <pharbers-bp-button-group
                  buttonArr={{this.bpButtonGroupdata}}
                  {{did-insert this.registerListener}}
                  {{will-destroy this.unregisterListener}}>
              </pharbers-bp-button-group>
              <div style="width: 1300px">
                  <pharbers-bp-carousel-unit 
                      height="600px"
                      autoplay
                      itemArr={{this.itemArr}}
                      {{did-insert this.registerListener}}
                      {{will-destroy this.unregisterListener}}>
                  </pharbers-bp-carousel-unit>
              </div>
              
          </div>
      </div>
  </div>
  
  */
  {
    "id": "B7/FnZJ6",
    "block": "[[[10,0],[14,0,\"content\"],[12],[1,\"\\n\"],[1,\"    \"],[10,0],[14,0,\"ember\"],[12],[1,\"\\n\"],[1,\"        \"],[10,0],[14,0,\"react\"],[12],[1,\"\\n            \"],[10,\"h2\"],[12],[1,\"Vue context\"],[13],[1,\"\\n            \"],[10,\"h1\"],[12],[1,[28,[35,0],[\"nav.productAndService\"],null]],[13],[1,\"\\n            \"],[10,\"pharbers-bp-input\"],[14,\"states\",\"info\"],[14,\"placeholder\",\"测试\"],[12],[1,\"\\n            \"],[13],[1,\"\\n            \"],[11,\"pharbers-bp-button\"],[16,\"text\",[29,[[36,1]]]],[24,\"src\",\"assets/abord.svg\"],[4,[38,2],[[30,0,[\"registerListener\"]]],null],[4,[38,3],[[30,0,[\"unregisterListener\"]]],null],[12],[1,\"\\n            \"],[13],[1,\"\\n            \"],[11,\"pharbers-bp-img\"],[24,\"src\",\"https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png\"],[24,\"text\",\"alfred test\"],[4,[38,2],[[30,0,[\"registerListener\"]]],null],[4,[38,3],[[30,0,[\"unregisterListener\"]]],null],[12],[1,\"\\n            \"],[13],[1,\"\\n            \"],[11,\"pharbers-bp-label\"],[24,\"text\",\"arr\"],[4,[38,2],[[30,0,[\"registerListener\"]]],null],[4,[38,3],[[30,0,[\"unregisterListener\"]]],null],[12],[13],[1,\"\\n            \"],[11,\"pharbers-bp-link\"],[24,\"text\",\"测试link\"],[4,[38,2],[[30,0,[\"registerListener\"]]],null],[4,[38,3],[[30,0,[\"unregisterListener\"]]],null],[12],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,\"pharbers-bp-text\"],[14,\"title\",\"bp-text test\"],[12],[1,\"\\n                这里是bp-text\\n            \"],[13],[1,\"\\n            \"],[10,\"h1\"],[12],[1,\"vue menu\"],[13],[1,\"\\n            \"],[11,\"pharbers-bp-menu\"],[16,\"menu_data\",[30,0,[\"menu_data\"]]],[4,[38,2],[[30,0,[\"transferMenuData\"]]],null],[12],[13],[1,\"\\n\\n            \"],[10,\"h1\"],[12],[1,\"vue select option\"],[13],[1,\"\\n            \"],[11,\"pharbers-bp-select\"],[16,\"choosed_value\",[30,0,[\"choosed_value\"]]],[16,\"options_data\",[30,0,[\"options_data\"]]],[4,[38,2],[[30,0,[\"transferData\"]]],null],[12],[13],[1,\"\\n            \"],[11,\"pharbers-bp-status\"],[24,\"text\",\"这是status\"],[24,\"subtle\",\"\"],[24,4,\"in-progress\"],[4,[38,2],[[30,0,[\"registerListener\"]]],null],[4,[38,3],[[30,0,[\"unregisterListener\"]]],null],[12],[1,\"\\n            \"],[13],[1,\"\\n            \"],[11,\"pharbers-bp-tag\"],[16,\"text\",[30,0,[\"tag\"]]],[24,\"subtle\",\"\"],[24,4,\"teals\"],[4,[38,2],[[30,0,[\"registerListener\"]]],null],[4,[38,3],[[30,0,[\"unregisterListener\"]]],null],[12],[1,\"\\n            \"],[13],[1,\"\\n            \"],[11,\"pharbers-bp-badge\"],[24,\"result\",\"100\"],[24,\"primary\",\"\"],[4,[38,2],[[30,0,[\"registerListener\"]]],null],[4,[38,3],[[30,0,[\"unregisterListener\"]]],null],[12],[1,\"\\n            \"],[13],[1,\"\\n            \"],[11,\"pharbers-bp-button-group\"],[16,\"buttonArr\",[30,0,[\"bpButtonGroupdata\"]]],[4,[38,2],[[30,0,[\"registerListener\"]]],null],[4,[38,3],[[30,0,[\"unregisterListener\"]]],null],[12],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,5,\"width: 1300px\"],[12],[1,\"\\n                \"],[11,\"pharbers-bp-carousel-unit\"],[24,\"height\",\"600px\"],[24,\"autoplay\",\"\"],[16,\"itemArr\",[30,0,[\"itemArr\"]]],[4,[38,2],[[30,0,[\"registerListener\"]]],null],[4,[38,3],[[30,0,[\"unregisterListener\"]]],null],[12],[1,\"\\n                \"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \\n        \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"t\",\"buttonText\",\"did-insert\",\"will-destroy\"]]",
    "moduleName": "web-shell/components/component-context.hbs",
    "isStrictMode": false
  });

  let ComponentContextComponent = (_dec = Ember._tracked, _dec2 = Ember._tracked, _dec3 = Ember._tracked, _dec4 = Ember._tracked, _dec5 = Ember._tracked, _dec6 = Ember._tracked, _dec7 = Ember._tracked, _dec8 = Ember.inject.service, _dec9 = Ember._action, _dec10 = Ember._action, _dec11 = Ember._action, _dec12 = Ember._action, _dec13 = Ember._action, (_class = class ComponentContextComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "choosed_value", _descriptor, this);

      _initializerDefineProperty(this, "options_data", _descriptor2, this);

      _initializerDefineProperty(this, "menu_data", _descriptor3, this);

      _initializerDefineProperty(this, "bpButtonGroupdata", _descriptor4, this);

      _initializerDefineProperty(this, "tag", _descriptor5, this);

      _initializerDefineProperty(this, "itemArr", _descriptor6, this);

      _initializerDefineProperty(this, "buttonText", _descriptor7, this);

      _initializerDefineProperty(this, "intl", _descriptor8, this);
    }

    listener(e) {
      // coloring ember body
      const newColor = getRandomColor();
      document.body.style.backgroundColor = newColor; // passing color value to react context via props

      const webcomponent = e.target;
      webcomponent.color = newColor;
      webcomponent.msg_title = {
        test: "alfred"
      };
      console.log("alfred listener action");
    }

    registerListener(element) {
      element.addEventListener("click", this.listener);
      element.addEventListener("dbclick", this.listener);
      this.bpButtonGroupdata = [{
        text: "222"
      }, {
        text: "aaa",
        active: true
      }, {
        text: "wode222"
      }];
      this.buttonText = this.intl.t("nav.login");
      this.itemArr = ["https://dgss0.bdstatic.com/5bVWsj_p_tVS5dKfpU_Y_D3/res/r/image/2017-09-27/297f5edb1e984613083a2d3cc0c5bb36.png", "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/head1200_B.png"];
      this.tag = "aaa";
      element.testobject = {
        a: 1,
        b: 2
      };
    }

    unregisterListener(element) {
      element.removeEventListener("example-event", this.listener);
      element.removeEventListener("example-nest-event", this.listener);
    }

    transferData(element) {
      this.choosed_value = "中文";
      this.options_data = [{
        text: "中文",
        second_text: "",
        src: "assets/case.svg",
        click_event: function () {
          console.log("http://www.baidu.com");
        }
      }, {
        text: "英文",
        second_text: "",
        click_event: function () {
          console.log("http://www.google.com");
        }
      }, {
        text: "韩文",
        second_text: "",
        click_event: function () {
          console.log("http://www.jd.com");
        }
      }];
    }

    transferMenuData() {
      this.menu_data = [{
        type: "sub",
        text: "sub1",
        src: "assets/case.svg",
        click_event: function () {},
        item_data: [{
          text: "sub_item1",
          click_event: function () {
            console.log("sub_item1");
          }
        }, {
          text: "sub_item2",
          src: "assets/case.svg",
          click_event: function () {
            console.log("sub_item2");
          }
        }]
      }, {
        type: "item",
        text: "item1",
        src: "assets/case.svg",
        click_event: function () {
          console.log("item1");
        }
      }, {
        type: "item",
        text: "item2",
        click_event: function () {
          console.log("item2");
        }
      }, {
        type: "sub",
        text: "sub2",
        click_event: function () {},
        item_data: [{
          text: "sub_item3",
          click_event: function () {
            console.log("sub_item3");
          }
        }]
      }];
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "choosed_value", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "options_data", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "menu_data", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "bpButtonGroupdata", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "tag", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "itemArr", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "buttonText", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "intl", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "listener", [_dec9], Object.getOwnPropertyDescriptor(_class.prototype, "listener"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "registerListener", [_dec10], Object.getOwnPropertyDescriptor(_class.prototype, "registerListener"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "unregisterListener", [_dec11], Object.getOwnPropertyDescriptor(_class.prototype, "unregisterListener"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "transferData", [_dec12], Object.getOwnPropertyDescriptor(_class.prototype, "transferData"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "transferMenuData", [_dec13], Object.getOwnPropertyDescriptor(_class.prototype, "transferMenuData"), _class.prototype)), _class));
  _exports.default = ComponentContextComponent;

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, ComponentContextComponent);
});
;define("web-shell/components/returned-page", ["exports", "@glimmer/component", "web-shell/templates/components/returned-page"], function (_exports, _component, _returnedPage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _component.default.extend({
    layout: _returnedPage.default,
    elementId: "oauth",
    accountDescribe: "账号",
    passwordDescribe: "密码",
    btnDescribe: "登录",

    didInsertElement() {
      this._super(...arguments);

      const a = Handlebars.compile(this.content)({
        accountDescribe: "账号",
        passwordDescribe: "密码",
        btnDescribe: "登录"
      });
      Ember.$("#oauth").append(a);
      Ember.$("#oauth").width("100%");
    }

  });

  _exports.default = _default;
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
;define("web-shell/helpers/PhSigV4AWSClientFactory", ["exports", "web-shell/helpers/PhSigV4ClientUtils"], function (_exports, _PhSigV4ClientUtils) {
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
  // eslint-disable-next-line no-undef
  const CryptoJS = require("crypto-js"); // const PhSigV4ClientUtils  = require("./PhSigV4ClientUtils").default


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
      } // console.log(4, queryParams)


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

      const datetime = new Date().toISOString().replace(/\.\d{3}Z$/, "Z").replace(/[:\-]|\.\d{3}/g, "");
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
;define("web-shell/helpers/PhSigV4ClientUtils", ["exports"], function (_exports) {
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
        if (additionalProps.hasOwnProperty(attr)) // eslint-disable-next-line no-undef
          merged[attr] = additionalProps[attr];
      }

      return merged;
    }
  }; // module.exports = { PhSigV4ClientUtils }

  _exports.default = PhSigV4ClientUtils;
});
;define("web-shell/helpers/PhUrlTemplate", ["exports"], function (_exports) {
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
      var valueHandler; //, valueModifier;

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

    var TEMPL_RE = /(\{([+#.;?&\/])?(([^.*:,{}|@!=$()][^*:,{}$()]*)(\*|:([0-9]+))?(,([^.*:,{}][^*:,{}]*)(\*|:([0-9]+))?)*)\})/g; // Note: reserved operators: |!@ are left out of the regexp in order to make those templates degrade into literals
    // (as expected by the spec - see tests.html "reserved operators")

    var match2expression = function (m) {
      // var expr = m[0];
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
  Router.map(function () {});
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
      }
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "intl", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ApplicationRoute;
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

  // eslint-disable-next-line ember/no-classic-classes
  var _default = _jsonApi.default.extend({
    modelNameFromPayloadKey(key) {
      return (0, _emberInflector.singularize)(Ember.String.dasherize(key));
    },

    payloadKeyFromModelName(modelName) {
      return (0, _emberInflector.pluralize)(Ember.String.camelize(modelName));
    },

    keyForAttribute(key) {
      return Ember.String.dasherize(key).toLowerCase();
    },

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


  });

  _exports.default = _default;
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

      if (document.readyState === "complete") {
        loadingNum = 1;
      }

      return loadingNum;
    })
  });

  _exports.default = _default;
});
;define("web-shell/services/login", ["exports", "config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  md5.js
  */
  String.prototype.MD5 = function (bit) {
    var sMessage = this;

    function RotateLeft(lValue, iShiftBits) {
      return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
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
        if (lResult & 0x40000000) return lResult ^ 0xc0000000 ^ lX8 ^ lY8;else return lResult ^ 0x40000000 ^ lX8 ^ lY8;
      } else return lResult ^ lX8 ^ lY8;
    }

    function F(x, y, z) {
      return x & y | ~x & z;
    }

    function G(x, y, z) {
      return x & z | y & ~z;
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
      var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
      var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
      var lWordArray = Array(lNumberOfWords - 1);
      var lBytePosition = 0;
      var lByteCount = 0;

      while (lByteCount < lMessageLength) {
        lWordCount = (lByteCount - lByteCount % 4) / 4;
        lBytePosition = lByteCount % 4 * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | sMessage.charCodeAt(lByteCount) << lBytePosition;
        lByteCount++;
      }

      lWordCount = (lByteCount - lByteCount % 4) / 4;
      lBytePosition = lByteCount % 4 * 8;
      lWordArray[lWordCount] = lWordArray[lWordCount] | 0x80 << lBytePosition;
      lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
      lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
      return lWordArray;
    }

    function WordToHex(lValue) {
      var WordToHexValue = "",
          WordToHexValue_temp = "",
          lByte,
          lCount;

      for (lCount = 0; lCount <= 3; lCount++) {
        lByte = lValue >>> lCount * 8 & 255;
        WordToHexValue_temp = "0" + lByte.toString(16);
        WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
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
        S44 = 21; // Steps 1 and 2. Append padding bits and length and convert to words

    x = ConvertToWordArray(sMessage); // Step 3. Initialise

    a = 0x67452301;
    b = 0xefcdab89;
    c = 0x98badcfe;
    d = 0x10325476; // Step 4. Process the message in 16-word blocks

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
  }; // eslint-disable-next-line ember/no-classic-classes


  var _default = Ember.Service.extend({
    // environment: equal(ENV.environment, 'production'),
    environment: Ember.computed.equal(_environment.default.environment, "production"),
    ajax: Ember.inject.service(),
    cookies: Ember.inject.service(),
    router: Ember.inject.service(),
    toast: Ember.inject.service(),
    store: Ember.inject.service(),
    toastOptions: Ember.Object.create({
      closeButton: false,
      positionClass: "toast-top-center",
      progressBar: false,
      timeOut: "2000"
    }),
    loginSuccess: "登录成功",
    loginFail: "登录失败",
    logoutSuceees: "注销成功",
    // host: ENV.host,
    host: "http://oauth.pharbers.com",
    version: "v0",
    // clientId: "5cc54e32ceb3c45854b80e9d", 旧官网
    // clientId: "5e4e14205bb3bc61bcbfc90a", // 新官网
    clientId: "5ed86c5ac4e1f0330eec3d2e",
    // eks-oauth-server暂时使用阿里云数据（mongo&redis）直接外部IP访问
    clientSecret: "5c90db71eeefcc082c0823b2",
    scope: "APP/Pharbers",
    isLogin: false,
    isRegister: false,
    account: null,

    accountLogin(a, p, adapter) {
      // const cookies = this.cookies;
      let loginSuccess = this.loginSuccess;
      let loginFail = this.loginFail; // let logoutSuceees = this.logoutSuceees;

      let host = `${this.host}`,
          version = `${this.version}`,
          resource = "PasswordLogin",
          url = "";
      url = `?client_id=${this.clientId}
                    &client_secret=${this.clientSecret}
                    &scope=${this.scope}`.replace(/\n/gm, "").replace(/ /gm, "").replace(/\t/gm, "");
      this.ajax.request([host, version, resource].join("/") + url, {
        type: "POST",
        contentType: "application/json",
        data: {
          username: a,
          password: p
        }
      }).then(response => {
        if (!this.environment) {
          window.console.log(response);
        }

        if (response.error != undefined) {
          this.toast.error("", loginFail, this.toastOptions);
          this.router.transitionTo("login");
          return Ember.RSVP.reject(response);
        }

        return response;
      }).then(data => {
        this.cookiesOperation(data); // adapter.set('headers', {
        // 	'Authorization': cookies.read('token_type') + ' ' + cookies.read('token')
        // });

        adapter.set("oauthRequest", 1);
        return this.store.findRecord("account", data.account_id);
      }).then(data => {
        if (!this.environment) {
          window.console.log(data);
        }

        this.setProperties({
          account: data,
          isLogin: true
        });
        this.toast.success("", loginSuccess, this.toastOptions);
        this.router.transitionTo("product-list"); // window.location.href = "product-list"
      }, err => {
        if (!this.environment) {
          window.console.log(err);
        }

        this.clearAllCookie(1);
        this.toast.error("", loginFail, this.toastOptions);
        this.router.transitionTo("login");
      }).catch(err => {
        if (!this.environment) {
          window.console.log(err);
        }

        this.toast.error("", loginFail, this.toastOptions);
        this.router.transitionTo("login");
      });
    },

    cookiesOperation(response) {
      // response.scope = "APP/MAXBI,CHC:Nhwa"
      let cookies = this.cookies;
      let expiry = new Date(response.expiry);
      let options = {
        domain: "ph-offweb.s3-website.cn-northwest-1.amazonaws.com.cn",
        path: "/",
        expires: expiry
      };
      cookies.write("token", response.access_token, options);
      cookies.write("account_id", response.account_id, options);
      cookies.write("access_token", response.access_token, options);
      cookies.write("refresh_token", response.refresh_token, options);
      cookies.write("token_type", response.token_type, options);
      cookies.write("scope", response.scope, options);
      cookies.write("expiry", response.expiry, options); // let appScopesList = '';
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
          token = this.cookies.read("token"); // let scope = this.get('cookies').read('scope');
      // let account = this.get('cookies').read('account');

      if (token != undefined && token != null && token != "") {
        this.set("isLogin", true);
        tokenFlag = true;
      } // if(account != undefined && account != null && account != '') {
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
        for (var i = keys.length; i--;) // domains.forEach(elem => {
        // 	document.cookie = keys[i] + '=0;domain=' + elem + ';expires=' + new Date(0).toUTCString()+";path=/";
        // })
        document.cookie = keys[i] + "=0;domain=" + ".pharbers.com" + ";expires=" + new Date(0).toUTCString() + ";path=/";

        document.cookie = keys[i] + "=0;domain=" + "www.pharbers.com" + ";expires=" + new Date(0).toUTCString() + ";path=/";
      }

      this.set("isLogin", false);
      this.store.unloadAll();

      if (param == undefined) {
        this.toast.success("", logoutSuceees, this.toastOptions);
        this.router.transitionTo("login"); // window.location.href = "/login"
      }
    }

  });

  _exports.default = _default;
});
;define("web-shell/services/oauth", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // eslint-disable-next-line ember/no-classic-classes
  var _default = Ember.Service.extend({
    cookies: Ember.inject.service(),
    ajax: Ember.inject.service(),
    router: Ember.inject.service(),
    store: Ember.inject.service(),

    oauthCallback(transition) {
      const cookies = this.cookies;
      const ajax = this.ajax;
      const {
        queryParams
      } = transition.to;
      const applicationAdapter = this.store.adapterFor("application"); // console.log("?", transition, queryParams)

      if (queryParams.code && queryParams.state) {
        // 获取oauth-callback 中的query
        const redirectUri = queryParams.redirect_uri;
        const clientId = queryParams.client_id;
        const code = queryParams.code;
        const grantType = queryParams.grant_type;
        const state = queryParams.state;
        const url = `https://2t69b7x032.execute-api.cn-northwest-1.amazonaws.com.cn/v0/oauth/token?` + `client_id=${clientId}` + `&code=${code}` + `&grant_type=${grantType}` + `&redirect_uri=${redirectUri}` + `&state=${state}`; // adapter 获取对应的header

        applicationAdapter.set("token", 1);
        applicationAdapter.toggleProperty("oauthRequest");
        applicationAdapter.set("oauthRequestTokenQuery", {
          redirect_uri: redirectUri,
          client_id: clientId,
          code: code,
          grant_type: grantType,
          state: state
        });
        const a = applicationAdapter.get("headers");
        ajax.request(url, {
          headers: a
        }).then(response => {
          this.removeAuth();
          let options = {
            domain: ".pharbers.com",
            path: "/",
            maxAge: response.expires_in
          }; // console.log(response)

          cookies.write("access_token", response.access_token, options);
          cookies.write("refresh_token", response.refresh_token, options);
          cookies.write("token_type", response.token_type, options);
          cookies.write("expires_in", response.expires_in, options);
          this.router.transitionTo("product-list");
        }).catch(() => {
          this.router.transitionTo("product-list");
        });
      } else {
        this.router.transitionTo("product-list");
      }
    },

    judgeAuth() {
      let tokenFlag = false;
      let token = this.cookies.read("access_token");

      if (typeof token !== "undefined" && token !== null && token !== "") {
        tokenFlag = true;
      }

      return tokenFlag; // 前端没有scope，能否访问进行对应的query
    },

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
      } // 如果在product list页面，应该跳回到登录页面
      // 其他页面随意了
      // if ( this.get( "router.currentRouteName" ) === "product-list" ) {
      // }
      // this.get( "router" ).transitionTo("home")


      window.location.reload(true);
      window.console.log("clear cookies!");
    }

  });

  _exports.default = _default;
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
;define("web-shell/services/report", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // eslint-disable-next-line ember/no-classic-classes
  var _default = Ember.Service.extend({
    ossService: Ember.inject.service("services/oss"),
    ajax: Ember.inject.service(),
    cookies: Ember.inject.service(),

    downloadURI(urlName) {
      window.console.log(urlName);
      fetch(urlName.url).then(response => {
        if (response.status === 200) {
          return response.blob();
        }

        throw new Error(`status: ${response.status}`);
      }).then(blob => {
        var link = document.createElement("a");
        link.download = urlName.name; // var blob = new Blob([response]);

        link.href = URL.createObjectURL(blob); // link.href = url;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // delete link;

        window.console.log("success");
      }).catch(error => {
        window.console.log("failed. cause:", error);
      });
    },

    genDownloadUrl(index) {
      let curLanguage = window.localStorage.getItem("lang");
      let bookName;
      let uuid;

      if (index == 0) {
        bookName = curLanguage === "中文" ? "广阔市场用药分析及展望" : "Analysis and Prospects for Broad Medication Market";
        uuid = "Blue Book.pdf";
      } else if (index == 1) {
        bookName = curLanguage === "中文" ? "带量采购对中国医药市场格局的影响" : "VBP's impact on the Chinese Pharmaceutical Market";
        uuid = "Blue Book2020.pdf";
      } // let uuid = 'Blue Book.pdf';


      let accept = "pdf";
      let client = this.ossService.get("ossClient");
      let url = client.signatureUrl(accept + "/" + uuid, {
        expires: 43200
      });
      window.console.log(url);
      this.downloadURI({
        url: url,
        name: bookName
      });
      return url;
    }

  });

  _exports.default = _default;
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
    "id": "qCUtcsJJ",
    "block": "[[[1,[28,[35,0],[\"WebShell\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,null,[[\"default\"],[[[],[]]]]],[1,\"\\n\\n\"],[46,[28,[37,3],null,null],null,null,null],[1,\"\\n\"]],[],false,[\"page-title\",\"component-context\",\"component\",\"-outlet\"]]",
    "moduleName": "web-shell/templates/application.hbs",
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
            require("web-shell/app")["default"].create({"name":"web-shell","version":"0.0.0+a83b928a"});
          }
        
//# sourceMappingURL=web-shell.map
