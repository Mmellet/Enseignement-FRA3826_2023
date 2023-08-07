self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.LinkedIn.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[304],{13954:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(174),o=n(185),c="ows/api/v1.0/linkedin/bind/url";var u=n(804),a=1e3,s=6e5;function l(e,t){var n=(window.screen.height-700)/2,a=(window.screen.width-600)/2,s=window.open("","_blank","width=600,height=700,top="+n+",left="+a+",menubar=no,status=no,scrollbars=no,titlebar=no,toolbar=no,resizable=yes");(function(){return Object(r.__awaiter)(this,void 0,void 0,function(){var e;return Object(r.__generator)(this,function(t){switch(t.label){case 0:return[4,Object(i.b)(c,void 0,!0)];case 1:return e=t.sent(),Object(o.a)(e.status)?[4,e.json()]:[3,3];case 2:return[2,t.sent()];case 3:return[2,void 0]}})})})().then(function(n){n&&(s.location.href=e?Object(u.t)(n,e):n,t&&d(s,t,0))})}function d(e,t,n){setTimeout(function(e,t,n){return function(){e.closed?(t(),e=null):n<s?d(e,t,n+a):e=null}}(e,t,n),a)}var f=n(276),v=n(502),h="ows/api/v1.0/linkedin/bind/status",b="https://graph.microsoft.com";var _,p=n(1564);function w(){return Object(r.__awaiter)(this,void 0,void 0,function(){return Object(r.__generator)(this,function(e){switch(e.label){case 0:return _||(_=function(){return Object(r.__awaiter)(this,void 0,void 0,function(){var e,t,n;return Object(r.__generator)(this,function(r){switch(r.label){case 0:return Object(f.a)()?[4,Object(v.getDelegationTokenForOwa)("User.Read")]:[3,2];case 1:return t=r.sent(),[3,4];case 2:return[4,Object(v.getAccessTokenforResource)(b)];case 3:t=r.sent(),r.label=4;case 4:return(e=t)?[4,Object(i.d)(h,{token:e},void 0,!0)]:[3,7];case 5:return n=r.sent(),Object(o.a)(n.status)?[4,n.json()]:[3,7];case 6:return[2,r.sent()];case 7:return[2,void 0]}})})}().then(function(e){return Object(p.a)(e)})),[4,_];case 1:return e.sent(),[2]}})})}n.d(t,"connectToLinkedIn",function(){return l}),n.d(t,"initializeBindStatus",function(){return w})},185:function(e,t,n){"use strict";var r=n(370);n.d(t,"a",function(){return r.a})},212:function(e,t,n){"use strict";var r=n(0),i=n(219),o=n(200),c=n(231),u=n(325),a=n.n(u),s=n(73),l=n(373),d=n.n(l),f=500;function v(e){return Object(r.__awaiter)(this,void 0,void 0,function(){var t;return Object(r.__generator)(this,function(n){return t={isUserActivity:!1},[2,d()(a()({Resource:e}),t)]})})}function h(e,t){return Object(r.__awaiter)(this,void 0,void 0,function(){return Object(r.__generator)(this,function(n){return t<1?[2,Promise.reject()]:[2,v(e).catch(function(){return Object(s.a)(f).then(function(){return h(e,t-1)})})]})})}var b,_=n(105),p=n(368),w=3,O=500;function j(e){var t=this,n=null,i=null,o=new Promise(function(e,o){return Object(r.__awaiter)(t,void 0,void 0,function(){return Object(r.__generator)(this,function(t){return n=e,i=o,[2]})})}),c={onFulfilled:n,onRejected:i,resource:e};return(null==b&&(b=new p.a(w,g,O)),b).add(c),o}function g(e){return Object(r.__awaiter)(this,void 0,void 0,function(){return Object(r.__generator)(this,function(t){return D(e.resource).then(function(t){e.onFulfilled(t)}).catch(function(t){e.onRejected(t)}),[2]})})}var m=null;function k(){return null==m&&(m=new i.Cache),m}n.d(t,"e",function(){return C}),n.d(t,"b",function(){return R}),n.d(t,"c",function(){return E}),n.d(t,"a",function(){return D}),n.d(t,"d",function(){return I});var T=1,y=12e4,A=3,x=null;function C(e){x=e}function R(e){return Object(r.__awaiter)(this,void 0,void 0,function(){var t;return Object(r.__generator)(this,function(n){switch(n.label){case 0:return null!=(t=I(z(),e))?[3,2]:[4,D(e)];case 1:t=n.sent(),n.label=2;case 2:return[2,null!=t?t.AccessToken:void 0]}})})}function E(e){var t=I(z(),e);if(t)return[t.AccessToken,void 0];if(Object(_.e)("auth-getAccessTokenQueueEnabled")){var n=function(e){return k().get(e)}(e),r=void 0;return n?r=n:(r=j(e),function(e,t){k().put(e,t)}(e,r)),[void 0,r.then(function(t){return function(e){k().del(e)}(e),t.AccessToken})]}return[void 0,D(e).then(function(e){return e.AccessToken})]}function D(e){return Object(r.__awaiter)(this,void 0,void 0,function(){var t,n,i;return Object(r.__generator)(this,function(r){switch(r.label){case 0:return Object(_.e)("auth-getAccessTokenQueueEnabled")?[4,h(e,A)]:[3,2];case 1:return n=r.sent(),[3,4];case 2:return[4,v(e)];case 3:n=r.sent(),r.label=4;case 4:return null!=(t=n)&&0==t.TokenResultCode&&null!=t.AccessTokenExpiry&&(t.ExpiresIn&&t.ExpiresIn>0&&(t.AccessTokenExpiry=Object(c.a)(Date.now(),t.ExpiresIn).toISOString()),(i=new Date(t.AccessTokenExpiry).getTime()-Date.now()-y)>0&&z().put(e,t,i,function(e,t){D(e).catch(function(){})})),[2,t]}})})}function I(e,t){var n=e.get(t),r=void 0;n&&n.AccessTokenExpiry&&(Object(o.a)(new Date(n.AccessTokenExpiry),-T)>new Date(Date.now())&&(r=n));return r}function z(){return null==x&&(x=new i.Cache),x}},219:function(e,t,n){"use strict";function r(){var e=Object.create(null),t=0,n=0,r=0,i=!1;function o(t){r--,delete e[t]}this.put=function(t,n,i,c){if(void 0!==i&&("number"!=typeof i||isNaN(i)||i<=0))throw new Error("Cache timeout must be a positive number");if(void 0!==c&&"function"!=typeof c)throw new Error("Cache timeout callback must be a function");var u=e[t];u?clearTimeout(u.timeout):r++;var a={value:n,expire:i+Date.now()};return isNaN(a.expire)||(a.timeout=setTimeout(function(){o(t),c&&c(t,n)}.bind(this),i)),e[t]=a,n},this.del=function(t){var n=!0,r=e[t];return r?(clearTimeout(r.timeout),!isNaN(r.expire)&&r.expire<Date.now()&&(n=!1)):n=!1,n&&o(t),n},this.clear=function(){for(var o in e)clearTimeout(e[o].timeout);r=0,e=Object.create(null),i&&(t=0,n=0)},this.get=function(o){var c=e[o];if(void 0!==c){if(isNaN(c.expire)||c.expire>=Date.now())return i&&t++,c.value;i&&n++,r--,delete e[o]}else i&&n++;return null},this.size=function(){return r},this.memsize=function(){var t,n=0;for(t in e)n++;return n},this.debug=function(e){i=e},this.hits=function(){return t},this.misses=function(){return n},this.keys=function(){return Object.keys(e)},this.exportJson=function(){var t={};for(var n in e){var r=e[n];t[n]={value:r.value,expire:r.expire||"NaN"}}return JSON.stringify(t)},this.importJson=function(t,n){var r=JSON.parse(t),i=Date.now(),o=n&&n.skipDuplicates;for(var c in r)if(r.hasOwnProperty(c)){if(o)if(e[c])continue;var u=r[c],a=u.expire-i;if(a<=0){this.del(c);continue}a=a>0?a:void 0,this.put(c,u.value,a)}return this.size()}}e.exports=new r,e.exports.Cache=r},325:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"TokenRequest:#Exchange"},e)}},370:function(e,t,n){"use strict";function r(e){return e>=200&&e<300}n.d(t,"a",function(){return r})},373:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(199),i=n(325);t.default=function(e,t){return void 0===e||e.__type||(e=i.default(e)),r.makeServiceRequest("GetAccessTokenforResource",e,t)}},502:function(e,t,n){"use strict";n.r(t);var r=n(219),i=n(212);function o(e){Object(i.e)(new r.Cache),Object(i.b)(e.location.origin)}var c=n(0),u=n(59),a=n(264),s=n.n(a),l=n(231),d={};function f(e){return Object(c.__awaiter)(this,void 0,void 0,function(){var t,n,r;return Object(c.__generator)(this,function(i){switch(i.label){case 0:t=e.client_id+e.scope,n=encodeURIComponent(t),r={},i.label=1;case 1:return i.trys.push([1,3,4,5]),[4,v(e,window)];case 2:return r=i.sent(),[3,5];case 3:return i.sent(),r.TokenResultCode=2,[3,5];case 4:return function(e,t){var n=t.document.getElementById(e);null!=n&&(n.removeEventListener("load",d[e]),t.document.body.removeChild(n),delete d[e])}(n,window),[7];case 5:return[2,r]}})})}function v(e,t){return Object(c.__awaiter)(this,void 0,void 0,function(){var n,r,i;return Object(c.__generator)(this,function(o){return n=encodeURIComponent(e.client_id+e.scope),r=function(e){var t={response_type:"token",prompt:"none",redirect_uri:e.redirect_uri,scope:e.scope,client_id:e.client_id};return e.authorization_uri+"?"+u.stringify(t)}(e),t.document.getElementById(n)?[2,{TokenResultCode:2}]:((i=t.document.createElement("iframe")).src=r.toString(),i.style.display="none",i.id=n,t.document.body.appendChild(i),[2,new Promise(function(e,r){d[n]=function(n){var o={};try{i.contentWindow&&i.contentWindow.location.origin==t.location.origin&&(o=function(e){var t=u.parse(e),n={};t.access_token?(n.AccessToken=t.access_token,n.AccessTokenExpiry=Object(l.a)(Date.now(),parseInt(t.expires_in)).toISOString(),n.TokenResultCode=0):"login_required"==t.error||"interaction_required"==t.error||"consent_required"==t.error?n.TokenResultCode=3:n.TokenResultCode=2;return n}(i.contentWindow.location.hash.substring(1)))}catch(e){o.TokenResultCode=2,r(o)}e(o)},i.addEventListener("load",d[n],!1)})])})})}var h=null;function b(e){return Object(c.__awaiter)(this,void 0,void 0,function(){var t,n,r,i;return Object(c.__generator)(this,function(o){switch(o.label){case 0:return t={scope:e,client_id:"",authorization_uri:"",redirect_uri:""},n=void 0,[4,s()()];case 1:return 0!=(r=o.sent()).ResultCode||null==r.ImplicitGrantAuthorizationUrl||""==r.ImplicitGrantAuthorizationUrl?[2,n]:(i=u.parse(r.ImplicitGrantAuthorizationUrl.split("?")[1]||"")).client_id&&i.redirect_uri?(t.client_id=i.client_id,t.authorization_uri=r.ImplicitGrantAuthorizationUrl.split("?")[0],t.redirect_uri=i.redirect_uri,[4,_(t)]):[3,3];case 2:n=o.sent(),o.label=3;case 3:return[2,n]}})})}function _(e){return Object(c.__awaiter)(this,void 0,void 0,function(){var t,n;return Object(c.__generator)(this,function(r){switch(r.label){case 0:return t=e.client_id+e.scope,null!=(n=Object(i.d)(p(),t))?[3,2]:[4,f(e)];case 1:n=r.sent(),function(e,t){if(t&&0==t.TokenResultCode&&t.AccessTokenExpiry){var n=new Date(t.AccessTokenExpiry).getTime()-Date.now();n>0&&p().put(e,t,n)}}(t,n),r.label=2;case 2:return[2,0==n.TokenResultCode?n.AccessToken:void 0]}})})}function p(){return null==h&&(h=new r.Cache),h}var w=n(204),O=n(377);var j=!1;function g(e){j||(!function(e){var t=Object(O.a)("/owa",e);Object(w.initializeServiceRequest)({baseUrl:t})}(e),j=!0)}function m(e,t,n,r){n?e.acquireTokenPopup(t,null,n,r):e.acquireToken(t,r)}var k=n(22),T=new k.c(function(){return Promise.all([n.e(520),n.e(108)]).then(n.bind(null,14083))}),y=new k.a(T,function(e){return e.createAdalAuthenticationContext});var A=function(e,t,n,r){return function(i,o){i||!o?r(i,null):(e.getCachedUser(),m(e,t,n,r))}},x="adalIdTokenFrame";function C(e,t,n,r){e.config.displayCall=function(i){!function(e){if(-1==e.indexOf("?"))throw new Error("Invalid Url in Adal Auth Context Display Call")}(i),window.detectUserCachedCallback=A(e,t,n,r),function(e,t){e._addAdalFrame(x).src="about:blank",e._loadFrame(t+"&prompt=none",x)}(e,i)},e.login()}function R(e,t,n,r,i){return Object(c.__awaiter)(this,void 0,void 0,function(){var o;return Object(c.__generator)(this,function(c){switch(c.label){case 0:return"https://login.microsoftonline.com/",[4,y.importAndExecute("https://login.microsoftonline.com/",e,t)];case 1:return o=c.sent(),o.getCachedUser()?m(o,n,r,i):C(o,n,r,i),[2]}})})}n.d(t,"registerTokenProvider",function(){return o}),n.d(t,"getAccessTokenforResource",function(){return i.b}),n.d(t,"getAccessTokenforResourceAsLazy",function(){return i.c}),n.d(t,"getDelegationToken",function(){return _}),n.d(t,"getDelegationTokenForOwa",function(){return b}),n.d(t,"bootstrap",function(){return g}),n.d(t,"getAccessTokenOnBehalfOfResource",function(){return R})}},0,[520,108]]);
//# sourceMappingURL=owa.LinkedIn.js.map
self.scriptsLoaded['owa.LinkedIn.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.LinkedIn.js'] = (new Date()).getTime();