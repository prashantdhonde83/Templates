webpackJsonp([0],{100:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(104);var r=n(5),o=function(e){return r.createElement("div",{id:"view1"},r.createElement("h3",null,e.message))};t.default=function(){return r.createElement(o,{message:"This is View 1"})}},101:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),o=function(e){return r.createElement("div",null,r.createElement("h3",null,e.message))};t.default=function(){return r.createElement(o,{message:"This is View 2"})}},102:function(e,t){},103:function(e,t){},104:function(e,t){},105:function(e,t){},106:function(e,t){},107:function(e,t,n){e.exports=n.p+"img/logo.png"},231:function(e,t,n){e.exports=n(96)},64:function(e,t,n){"use strict";(function(e){var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__decorate||function(e,t,n,r){var o,a=arguments.length,c=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(a<3?o(c):a>3?o(t,n,c):o(t,n))||c);return a>3&&c&&Object.defineProperty(t,n,c),c},a=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]]);return n};Object.defineProperty(t,"__esModule",{value:!0});var c=n(5),i=n(60),l=n(34),s=n(63);t.client=new s.JsonServiceClient(e.BaseUrl||"/");var u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e=this.props,t=e.to,n=e.location,r=e.children,o=(a(e,["to","location","children"]),n.pathname===t);return c.createElement("li",{role:"presentation",className:i("nav-item",{active:o})},c.createElement(l.Link,{to:t,className:"nav-link"},r))},t}(c.Component);u=o([l.withRouter],u),t.NavItem=u}).call(t,n(59))},96:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0}),n(102),n(103),n(105),n(61);var o=n(62),a=n(5),c=n(34),i=n(64),l=n(99),s=n(100),u=n(101),p=function(e){function t(t,n){return e.call(this,t,n)||this}return r(t,e),t.prototype.handleAbout=function(){nativeHost.showAbout()},t.prototype.handleToggleWindow=function(){nativeHost.toggleFormBorder()},t.prototype.handleQuit=function(){nativeHost.quit()},t.prototype.render=function(){return a.createElement(c.BrowserRouter,null,a.createElement("div",null,a.createElement("nav",{className:"navbar navbar-toggleable-md navbar-inverse bg-inverse"},a.createElement("div",{className:"container"},a.createElement(c.Link,{to:"/",className:"navbar-brand"},a.createElement("i",{className:"fa fa-code","aria-hidden":"true"}),a.createElement("span",{style:{paddingLeft:5}},"React Desktop Apps!")),a.createElement("div",{className:"collapse navbar-collapse"},a.createElement("ul",{className:"nav navbar-nav mr-auto"},a.createElement(i.NavItem,{to:"/"},"Home"),a.createElement(i.NavItem,{to:"/view1"},"View 1"),a.createElement(i.NavItem,{to:"/view2"},"View 2")),a.createElement("ul",{className:"nav navbar-nav"},a.createElement("li",{className:"nav-item"},a.createElement("a",{className:"nav-link",onClick:this.handleAbout},"About")),a.createElement("li",{className:"nav-item platform winforms"},a.createElement("a",{className:"nav-link",onClick:this.handleToggleWindow},"Toggle Window")),a.createElement("li",{className:"nav-item platform winforms mac console"},a.createElement("a",{className:"nav-link",onClick:this.handleQuit},"Close")))))),a.createElement("div",{className:"container"},a.createElement("div",{className:"row",style:{margin:"10px 0"}},a.createElement("div",{id:"content"},a.createElement(c.Route,{exact:!0,path:"/",render:function(e){return a.createElement(l.default,{name:"React"})},activeClassName:"active"}),a.createElement(c.Route,{path:"/view1",component:s.default,activeClassName:"active"}),a.createElement(c.Route,{path:"/view2",component:u.default,activeClassName:"active"})))),a.createElement("h4",{style:{position:"absolute",bottom:20,width:"100%",textAlign:"center"}},a.createElement("img",{src:n(107)}),a.createElement("a",{href:"https://servicestack.net/vs-templates/ReactDesktopApps"},"Learn about this React Desktop Apps VS.NET template"))))},t}(a.Component);o.render(a.createElement(p,null),document.getElementById("app"))},97:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e}();t.HelloResponse=r;var o=function(){function e(){}return e.prototype.createResponse=function(){return new r},e.prototype.getTypeName=function(){return"Hello"},e}();t.Hello=o},98:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function c(e){try{l(r.next(e))}catch(e){a(e)}}function i(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(c,i)}l((r=r.apply(e,t||[])).next())})},a=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;l;)try{if(o=1,a&&(c=a[2&n[0]?"return":n[0]?"throw":"next"])&&!(c=c.call(a,n[1])).done)return c;switch(a=0,c&&(n=[0,c.value]),n[0]){case 0:case 1:c=n;break;case 4:return l.label++,{value:n[1],done:!1};case 5:l.label++,a=n[1],n=[0];continue;case 7:n=l.ops.pop(),l.trys.pop();continue;default:if(c=l.trys,!(c=c.length>0&&c[c.length-1])&&(6===n[0]||2===n[0])){l=0;continue}if(3===n[0]&&(!c||n[1]>c[0]&&n[1]<c[3])){l.label=n[1];break}if(6===n[0]&&l.label<c[1]){l.label=c[1],c=n;break}if(c&&l.label<c[2]){l.label=c[2],l.ops.push(n);break}c[2]&&l.ops.pop(),l.trys.pop();continue}n=t.call(e,l)}catch(e){n=[6,e],a=0}finally{o=c=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,a,c,i,l={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]};return i={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i};Object.defineProperty(t,"__esModule",{value:!0}),n(106);var c=n(5),i=n(64),l=n(97),s=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.state={result:""},r}return r(t,e),t.prototype.componentDidMount=function(){this.nameChanged(this.props.name)},t.prototype.nameChanged=function(e){return o(this,void 0,void 0,function(){var t,n;return a(this,function(r){switch(r.label){case 0:return e?(t=new l.Hello,t.name=e,[4,i.client.get(t)]):[3,2];case 1:return n=r.sent(),this.setState({result:n.result}),[3,3];case 2:this.setState({result:""}),r.label=3;case 3:return[2]}})})},t.prototype.render=function(){var e=this;return c.createElement("div",{className:"form-group"},c.createElement("input",{className:"form-control",type:"text",placeholder:"Your name",defaultValue:this.props.name,onChange:function(t){return e.nameChanged(t.target.value)}}),c.createElement("h3",{className:"result"},this.state.result))},t}(c.Component);t.default=s},99:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),a=n(98),c=function(e){function t(t,n){return e.call(this,t,n)||this}return r(t,e),t.prototype.render=function(){return o.createElement(a.default,{name:this.props.name})},t}(o.Component);t.default=c}},[231]);
//# sourceMappingURL=app.bundle.js.map