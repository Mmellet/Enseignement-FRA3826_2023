self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.NotificationBar.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[342],{1140:function(t,e,n){"use strict";var o=n(6),a=n(1),i=n(229),r=n(880),c=n(22),l=new c.c(function(){return n.e(927).then(n.t.bind(null,13641,7))}),s=new c.b(l,function(t){return t.default}),u=n(110);function f(t){if("string"==typeof t||Array.isArray(t))return t;var e=Object(u.f)().UserOptions,n=(void 0===e?{}:e).KeyboardShortcutsMode;switch(void 0===n?"":n){case 0:return t.hotmail;case 2:return t.yahoo;case 3:return t.gmail;case 4:return t.owa;default:return}}function d(t,e){if(t.ctrlKey||t.altKey||t.metaKey||e)return!1;var n=t.target;return"INPUT"==n.tagName||"SELECT"==n.tagName||"TEXTAREA"==n.tagName||n.contentEditable&&"true"==n.contentEditable}var h="__keydownHandlerMap",p="__keydownHandlerHooksAdded";function m(t,e,n,a){return void 0===e&&(e=!0),void 0===n&&(n=!0),void 0===a&&(a=!1),function(c,l,u){if("object"==typeof window&&(c[h]=c[h]||{},c[h][l]={command:Object(r.a)(t),stopPropagation:e,preventDefault:n,allowHotkeyOnTextFields:a},!c[p])){var m=c.componentDidMount;c.componentDidMount=function(){var t=this;m&&m.call(this);var e,n=s.import(),a=function(){t.__mousetrap&&t.__mousetrap.reset(),e&&e()},r=n.then(function(n){t.__mousetrap=new n(i.findDOMNode(t)),e=Object(o.autorun)(function(t){var e=this;this.__mousetrap.reset();for(var n=t[h],o=Object.keys(n),a=function(a){var r=o[a],c=f(n[r].command);c&&i.__mousetrap.bind(c,function(o){d(o,n[r].allowHotkeyOnTextFields)||(n[r].stopPropagation&&o.stopPropagation(),n[r].preventDefault&&o.preventDefault(),t[r].call(e,o))})},i=this,r=0;r<o.length;r++)a(r)}.bind(t,c))}).catch(a);this.__cleanupMousetrap=r.then(function(){return a})};var b=c.componentWillUnmount;c.componentWillUnmount=function(){b&&b.call(this),this.__cleanupMousetrap&&this.__cleanupMousetrap.then(function(t){return t()})},c[p]=!0}}}function b(t,e,n,o){var i=void 0===o?{}:o,r=i.stopPropagation,c=void 0===r||r,l=i.preventDefault,u=void 0===l||l,h=i.allowHotkeyOnTextFields,p=void 0!==h&&h,m=a.useCallback(function(t){d(t,p)||(c&&t.stopPropagation(),u&&t.preventDefault(),n(t))},[n,c,u,p]),b=a.useMemo(function(){return f(e)},[e]),v=s.tryImportForRender();a.useEffect(function(){if(v&&b&&t.current){var e=new v(t.current);return e.bind(b,m),function(){return e.reset()}}},[v,b,t,m])}var v=n(0);function k(t,e,n){var a=void 0===n?{}:n,i=a.allowHotkeyOnTextFields,c=void 0!==i&&i,l=a.isEnabled,u=a.stopPropagation,d=void 0===u||u,h=a.preventDefault,p=void 0===h||h;return Object(v.__awaiter)(this,void 0,void 0,function(){var n,a,i,u;return Object(v.__generator)(this,function(h){switch(h.label){case 0:return[4,s.import()];case 1:return n=h.sent(),a=new n(document.body),i=function(t){return f(t=Object(r.a)(t))}(t),u=Object(o.autorun)(function(){!function(t,e,n){t.reset(),e&&t.bind(e,n)}(a,i,y(c,l,d,p,e))}),[2,function(){a.reset(),u()}]}})})}function y(t,e,n,o,a){return function(i){d(i,t)||e&&!e()||(n&&i.stopPropagation(),o&&i.preventDefault(),a())}}n.d(e,"c",function(){return m}),n.d(e,"d",function(){return b}),n.d(e,"a",function(){return k}),n.d(e,"b",function(){return r.a})},3366:function(t,e,n){"use strict";n.r(e);var o=n(2),a=n(6),i={notificationsMap:new a.ObservableMap,notificationStack:[],notificationBarViewState:{isHovered:!1,autoDismissTimerCompleted:!1,isFocused:!1}},r=Object(o.createStore)("NotificationBarStore",i)(),c=n(25),l=Object(o.mutatorAction)("removeNotification",function(t){var e=r.notificationStack.indexOf(t);if(e<0)return c.d.error("notification id cannot be found in removeNotification"),void r.notificationsMap.delete(t);r.notificationStack.splice(e,1),r.notificationsMap.delete(t)}),s={};function u(t){return s[t]}var f=Object(o.action)("notificationAutoDismissTimerCompleted"),d=Object(o.action)("notificationMouseEnter"),h=Object(o.action)("notificationMouseLeave",function(t){return{notificationId:t}}),p=Object(o.action)("resetNotificationViewState"),m=Object(o.action)("setNotificationIsHovered",function(t){return{isHovered:t}}),b=Object(o.action)("setFocusOnNotificationBar"),v=n(1596),k=1e3,y=null;function g(t){clearTimeout(y),function(t){delete s[t]}(t),l(t),p()}Object(o.orchestrator)(h,function(t){if(r.notificationBarViewState.autoDismissTimerCompleted){var e=u(t.notificationId);g(t.notificationId),e&&e(v.a.MouseLeaveAfterTimerCompleted)}m(!1)}),Object(o.mutator)(f,function(t){r.notificationBarViewState.autoDismissTimerCompleted=!0}),Object(o.mutator)(d,function(t){r.notificationBarViewState.isHovered=!0}),Object(o.mutator)(m,function(t){r.notificationBarViewState.isHovered=t.isHovered}),Object(o.mutator)(p,function(t){r.notificationBarViewState.isHovered=!1,r.notificationBarViewState.autoDismissTimerCompleted=!1,0===r.notificationStack.length&&(r.notificationBarViewState.isFocused=!1)}),Object(o.mutator)(b,function(t){r.notificationBarViewState.isFocused=!0});var x=n(0),B=Object(o.action)("CLEAR_NOTIFICATION_BAR",function(t){return{hostId:t}});Object(o.orchestrator)(B,function(t){var e,n;try{for(var o=Object(x.__values)(r.notificationStack),a=o.next();!a.done;a=o.next()){var i=a.value,c=r.notificationsMap.get(i);c.hostId===t.hostId&&c.allowClear&&g(i)}}catch(t){e={error:t}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}});var w=n(9848),S=n(4),O=n(1),T=n(167),A=n(6896),C={root:{backgroundColor:Object(T.g)().neutralSecondary,marginRight:"8px",borderStyle:"solid",borderWidth:"1px",borderColor:Object(T.g)().white},rootHovered:{backgroundColor:Object(T.g)().neutralPrimaryAlt},rootPressed:{backgroundColor:Object(T.g)().neutralDark},textContainer:{overflow:"hidden"},label:A.actionButtonText},_={root:{marginRight:"8px",color:Object(T.g)().white},rootHovered:{color:Object(T.g)().white,backgroundColor:"transparent"},rootPressed:{color:Object(T.g)().neutralDark,backgroundColor:"transparent"}},j=n(11),E=n(8421),D=n(390),N=n(281),H=n(287),F=n(351),I=n(173),M=n(695),P=n(207),L=n(1140),V=n(6896),W=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.renderSpinnerOrIcon=function(){if(e.props.notification.shouldShowSpinner)return O.createElement(M.a,{className:V.spinner,type:P.b.normal});if(e.props.notification.icon){var t={root:V.iconRoot};return O.createElement(F.a,{styles:t,iconName:e.props.notification.icon})}return O.createElement("div",{className:V.iconSpace})},e.onBeforeUnload=function(){e.closeAndExecuteCallback(v.a.NotificationBarUnmounted)},e.onPrimaryButtonClick=function(){e.closeAndExecuteCallback(v.a.PrimaryActionClicked)},e.onSecondaryButtonClick=function(){e.closeAndExecuteCallback(v.a.SecondaryActionClicked)},e.onDismissClick=function(){e.closeAndExecuteCallback(v.a.DismissClicked)},e.onMouseLeave=function(){h(e.props.notification.id)},e.setPrimaryButtonRef=function(t){e.focusButtonRef=t},e.setDismissButtonRef=function(t){e.props.notification.primaryActionText||(e.focusButtonRef=t)},e.setUpHotkeyFunction=function(){e.props.notification.primaryActionHotKeyCommand&&(e.hotkeyCleanupFunction=Object(L.a)(e.props.notification.primaryActionHotKeyCommand,e.onPrimaryButtonClick))},e.cleanUpHotkeyFunction=function(){e.hotkeyCleanupFunction&&e.hotkeyCleanupFunction.then(function(t){return t()})},e}return Object(x.__extends)(e,t),Object.defineProperty(e.prototype,"shouldFocus",{get:function(){return r.notificationBarViewState.isFocused&&null!==this.focusButtonRef},enumerable:!0,configurable:!0}),e.prototype.componentDidMount=function(){this.setUpHotkeyFunction(),window.addEventListener("beforeunload",this.onBeforeUnload)},e.prototype.componentDidUpdate=function(){this.cleanUpHotkeyFunction(),this.setUpHotkeyFunction(),this.shouldFocus&&this.focusButtonRef.focus()},e.prototype.componentWillUnmount=function(){this.cleanUpHotkeyFunction(),u(this.props.notification.id)&&this.closeAndExecuteCallback(v.a.NotificationBarUnmounted),window.removeEventListener("beforeunload",this.onBeforeUnload)},e.prototype.render=function(){var t=this.props,e=t.notification,n=(t.onNotificationBlur,Object(x.__rest)(t,["notification","onNotificationBlur"]));return O.createElement(E.a,Object(x.__assign)({},n,{timeout:167,classNames:{enter:j.AnimationClassNames.slideUpIn20,exit:j.AnimationClassNames.slideDownOut20}}),O.createElement("div",{className:V.positioningContainer},O.createElement("div",{className:V.notificationBarContainer,style:{minWidth:e.minWidth+"px",maxWidth:e.maxWidth+"px"},onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave},O.createElement("div",{className:V.leftItems},this.renderSpinnerOrIcon(),O.createElement("span",{className:V.contentText},e.contentText)),O.createElement("div",{className:V.rightItems},e.primaryActionText&&O.createElement(D.a,{componentRef:this.setPrimaryButtonRef,onClick:this.onPrimaryButtonClick,text:e.primaryActionText,title:e.primaryActionText,ariaLabel:e.primaryActionText,styles:C,onFocus:this.onButtonFocused}),e.primaryActionText&&e.secondaryActionText&&O.createElement(N.a,{onClick:this.onSecondaryButtonClick,text:e.secondaryActionText,title:e.secondaryActionText,ariaLabel:e.secondaryActionText,styles:C}),O.createElement(H.a,{componentRef:this.setDismissButtonRef,onClick:this.onDismissClick,styles:_,iconProps:{iconName:"Cancel"},onFocus:this.onButtonFocused})))))},e.prototype.closeAndExecuteCallback=function(t){var e=u(this.props.notification.id);g(this.props.notification.id),!r.notificationBarViewState.isFocused&&this.props.onNotificationBlur&&this.props.onNotificationBlur(),e&&e(t)},e.prototype.onMouseEnter=function(){d()},e.prototype.onButtonFocused=function(){b()},Object(x.__decorate)([a.computed],e.prototype,"shouldFocus",null),e=Object(x.__decorate)([I.observer],e)}(O.Component),R=n(262),U=n(8218),q=n(6896),X=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(x.__extends)(e,t),e.prototype.render=function(){if(!this.props.hostId)return null;var t;if(r.notificationStack.length>0){var e=r.notificationStack[r.notificationStack.length-1],n=r.notificationsMap.get(e);if(this.props.hostId===n.hostId){t=n;var o=R.l?Object(S.a)(w.c):Object(S.a)(w.b);this.ariaNotifString=null!==t.primaryActionText?Object(S.b)(Object(S.a)(w.a),t.contentText,o,t.primaryActionText):t.contentText}}return O.createElement(O.Fragment,null,O.createElement(U.a,{className:q.notificationBarHostContainer},t&&O.createElement(W,{notification:Object(a.toJS)(t),key:t.id,onNotificationBlur:this.props.onNotificationBlur})),O.createElement("div",{className:"screenReaderOnly",role:"alert","aria-relevant":"additions",id:"notificationBarText"}))},e.prototype.componentDidUpdate=function(){r.notificationStack.length>0&&this.addAccessibilityNotifBarDiv()},e.prototype.addAccessibilityNotifBarDiv=function(){var t=document.getElementById("notificationBarText");t.firstChild&&t.removeChild(t.firstChild);var e=document.createElement("div");e.innerText=this.ariaNotifString,document.getElementById("notificationBarText").appendChild(e)},e=Object(x.__decorate)([I.observer],e)}(O.Component),Q=Object(o.mutatorAction)("pushNotification",function(t,e){r.notificationsMap.has(t)?c.d.error("cannot add notification with the same id.  Please dismiss the notification before adding it again."):(r.notificationsMap.set(t,e),r.notificationStack.push(t))}),K=n(43),Z=n(5261),G=Object(K.select)({store:function(){return r}})(function(t,e,n,o,a){var i=void 0===o?{}:o,l=i.icon,d=i.primaryActionText,h=i.secondaryActionText,p=i.minWidth,m=void 0===p?400:p,b=i.maxWidth,x=void 0===b?400:b,B=i.shouldShowSpinner,w=void 0!==B&&B,S=i.allowAutoDismiss,O=void 0===S||S,T=i.autoDismissInSeconds,A=void 0===T?7:T,C=i.allowClear,_=void 0!==C&&C,j=(i.isHovered,i.notificationCallback),E=i.primaryActionHotKeyCommand;if(n="function"==typeof n?n():n)if(!d&&!h||j){var D={id:t,contentText:n,hostId:e,icon:l,primaryActionText:d,secondaryActionText:h,minWidth:m,maxWidth:x,shouldShowSpinner:w,allowAutoDismiss:O,autoDismissInSeconds:A,allowClear:_,primaryActionHotKeyCommand:E};if(a.store.notificationStack.length>0){var N=a.store.notificationStack[a.store.notificationStack.length-1];a.store.notificationsMap.get(N).allowAutoDismiss&&g(N)}!function(t,e){if(void 0!==s[t])throw new Error("Cannot over write an existing notification callback.");s[t]=e}(t,j),Q(t,D),O&&!Object(Z.a)(2)&&function(t,e){y=setTimeout(function(){if(f(),!r.notificationBarViewState.isHovered&&!r.notificationBarViewState.isFocused){var e=u(t);g(t),e&&e(v.a.AutoDismissed)}},e*k)}(t,A)}else c.d.error("notification callback must be defined with a primary or secondary action");else c.d.error("contentText is required to show the notification")});n.d(e,"NotificationBarHost",function(){return X}),n.d(e,"showNotification",function(){return G}),n.d(e,"dismissNotification",function(){return g}),n.d(e,"clearNotificationBar",function(){return B})},5261:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var o=n(60);function a(t){return!!(t&Object(o.a)().ViewStateConfiguration.AccessibilityBitFlags)}},6896:function(t,e,n){var o=n(9849),a=n(58);"string"==typeof o&&(o=[[t.i,o]]);for(var i=0;i<o.length;i++)a.loadStyles(o[i][1],!1);o.locals&&(t.exports=o.locals)},880:function(t,e,n){"use strict";var o=n(262);function a(t,e){return t?e(t):t}function i(t){return t.replace(/\bctrl\b/,"command")}var r=[function(t){if(Array.isArray(t)){if(t.includes("del"))return t.concat("backspace")}else if("del"===t)return["del","backspace"];return t},function(t){return Array.isArray(t)?t.map(i):i(t)}];function c(t){return Object(o.j)()?function(t,e){return Array.isArray(t)||"string"==typeof t?e.reduce(function(t,e){return e(t)},t):{hotmail:e.reduce(function(t,e){return a(t,e)},t.hotmail),owa:e.reduce(function(t,e){return a(t,e)},t.owa),gmail:e.reduce(function(t,e){return a(t,e)},t.gmail),yahoo:e.reduce(function(t,e){return a(t,e)},t.yahoo)}}(t,r):t}n.d(e,"a",function(){return c})},9848:function(t){t.exports={c:"Zrb",b:"_rb",a:"$rb"}},9849:function(t,e,n){(e=t.exports=n(57)(!1)).push([t.i,'._3xqEuTlsJbTQdiBbqhDlEy{pointer-events:none;position:absolute;bottom:0;z-index:4}html[dir] ._3xqEuTlsJbTQdiBbqhDlEy{background-color:"[theme:white, default:#ffffff]"}html[dir=ltr] ._3xqEuTlsJbTQdiBbqhDlEy,html[dir=rtl] ._3xqEuTlsJbTQdiBbqhDlEy{left:0;right:0}._394rO9_XIBrDE0VaIH3AWj{width:100%;position:absolute;bottom:0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}._24raGxVN-NYNI6ltdpiov2,._394rO9_XIBrDE0VaIH3AWj{display:-webkit-box;display:-ms-flexbox;display:flex}._24raGxVN-NYNI6ltdpiov2{--themeDarker:var(--fallback-themeDarker);--themeDark:var(--fallback-themeDark);--themeDarkAlt:var(--fallback-themeDarkAlt);--themePrimary:var(--fallback-themePrimary);--themeSecondary:var(--fallback-themeSecondary);--themeTertiary:var(--fallback-themeTertiary);--themeLight:var(--fallback-themeLight);--themeLighter:var(--fallback-themeLighter);--themeLighterAlt:var(--fallback-themeLighterAlt);--headerBrandText:var(--fallback-headerBrandText);--headerTextIcons:var(--fallback-headerTextIcons);--headerSearchBoxIcon:var(--fallback-headerSearchBoxIcon);--headerSearchPlaceholderText:var(--fallback-headerSearchPlaceholderText);--headerSearchButtonIcon:var(--fallback-headerSearchButtonIcon);--headerSearchFilters:var(--fallback-headerSearchFilters);--headerSearchFiltersHover:var(--fallback-headerSearchFiltersHover);--headerBadgeText:var(--fallback-headerBadgeText);--headerSearchIcon:var(--fallback-headerSearchIcon);--black:var(--fallback-black);--blackTranslucent40:var(--fallback-blackTranslucent40);--white:var(--fallback-white);--whiteTranslucent40:var(--fallback-whiteTranslucent40);--whiteTranslucent90:var(--fallback-whiteTranslucent90);--neutralDark:var(--fallback-neutralDark);--neutralPrimary:var(--fallback-neutralPrimary);--neutralPrimaryAlt:var(--fallback-neutralPrimaryAlt);--neutralSecondary:var(--fallback-neutralSecondary);--neutralTertiary:var(--fallback-neutralTertiary);--neutralTertiaryAlt:var(--fallback-neutralTertiaryAlt);--neutralQuaternary:var(--fallback-neutralQuaternary);--neutralQuaternaryAlt:var(--fallback-neutralQuaternaryAlt);--neutralLight:var(--fallback-neutralLight);--neutralLighter:var(--fallback-neutralLighter);--neutralLighterAlt:var(--fallback-neutralLighterAlt);--redDark:var(--fallback-redDark);--flaggedMessage:var(--fallback-flaggedMessage);color:var(--neutralPrimary);height:48px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;pointer-events:auto}html[dir] ._24raGxVN-NYNI6ltdpiov2{--headerBackground:var(--fallback-headerBackground);--headerBackgroundSearch:var(--fallback-headerBackgroundSearch);--headerSearchBoxBackground:var(--fallback-headerSearchBoxBackground);--headerSearchButtonBackground:var(--fallback-headerSearchButtonBackground);--headerSearchButtonBackgroundHover:var(--fallback-headerSearchButtonBackgroundHover);--headerButtonsBackground:var(--fallback-headerButtonsBackground);--headerButtonsBackgroundHover:var(--fallback-headerButtonsBackgroundHover);--headerButtonsBackgroundSearch:var(--fallback-headerButtonsBackgroundSearch);--headerButtonsBackgroundSearchHover:var(--fallback-headerButtonsBackgroundSearchHover);--headerBadgeBackground:var(--fallback-headerBadgeBackground);--searchBoxBackground:var(--fallback-searchBoxBackground);--richUserContentBackground:var(--fallback-richUserContentBackground);background:var(--white);-webkit-box-shadow:0 1px 12px 0 "[theme:blackTranslucent40, default:rgba(0, 0, 0, .4)]";box-shadow:0 1px 12px 0 "[theme:blackTranslucent40, default:rgba(0, 0, 0, .4)]";background-color:"[theme:neutralSecondary, default:#666666]";border-radius:4px 4px 0 0}html[dir=ltr] .HFhW96xMp5v9DXf1mD-gE{margin-left:24px;margin-right:14px}html[dir=rtl] .HFhW96xMp5v9DXf1mD-gE{margin-right:24px;margin-left:14px}._2gL8VTsxpsj9xOhfHX0ARq{color:"[theme:white, default:#ffffff]";font-size:15px}html[dir=ltr] ._2gL8VTsxpsj9xOhfHX0ARq{margin-left:24px;margin-right:16px}html[dir=rtl] ._2gL8VTsxpsj9xOhfHX0ARq{margin-right:24px;margin-left:16px}html[dir=ltr] ._21g8jkqFMZX18DGFuOEVYw{margin-left:48px}html[dir=rtl] ._21g8jkqFMZX18DGFuOEVYw{margin-right:48px}._1HFU5ZOFiIWaCX1sxSRyO1{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden}html[dir=ltr] ._1HFU5ZOFiIWaCX1sxSRyO1{margin-right:8px}html[dir=rtl] ._1HFU5ZOFiIWaCX1sxSRyO1{margin-left:8px}._3Zb1dKENKlm20nLBci9L3G{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;max-width:66%}.e8QWIPW0726cSzB7kykNB{font-size:14px;font-weight:400}.chQAugHvoCEfpy0BOor02,.e8QWIPW0726cSzB7kykNB{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:"[theme:white, default:#ffffff]"}.chQAugHvoCEfpy0BOor02{height:32px;line-height:32px}',""]),e.locals={notificationBarHostContainer:"_3xqEuTlsJbTQdiBbqhDlEy",positioningContainer:"_394rO9_XIBrDE0VaIH3AWj",notificationBarContainer:"_24raGxVN-NYNI6ltdpiov2",spinner:"HFhW96xMp5v9DXf1mD-gE",iconRoot:"_2gL8VTsxpsj9xOhfHX0ARq",iconSpace:"_21g8jkqFMZX18DGFuOEVYw",leftItems:"_1HFU5ZOFiIWaCX1sxSRyO1",rightItems:"_3Zb1dKENKlm20nLBci9L3G",contentText:"e8QWIPW0726cSzB7kykNB",actionButtonText:"chQAugHvoCEfpy0BOor02"}}}]);
//# sourceMappingURL=owa.NotificationBar.js.map
self.scriptsLoaded['owa.NotificationBar.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.NotificationBar.js'] = (new Date()).getTime();