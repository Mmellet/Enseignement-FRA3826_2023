self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.vendors~TriageAction.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[588],{1012:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"UnifiedGroupIdentity:#Exchange"},e)}},1032:function(e,t,r){var n=r(1197),o=36e5,a=6e4,i=2,s=/[T ]/,u=/:/,c=/^(\d{2})$/,l=[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],d=/^(\d{4})/,f=[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],_=/^-(\d{2})$/,p=/^-?(\d{3})$/,h=/^-?(\d{2})-?(\d{2})$/,v=/^-?W(\d{2})$/,b=/^-?W(\d{2})-?(\d{1})$/,y=/^(\d{2}([.,]\d*)?)$/,g=/^(\d{2}):?(\d{2}([.,]\d*)?)$/,m=/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,x=/([Z+-].*)$/,k=/^(Z)$/,C=/^([+-])(\d{2})$/,S=/^([+-])(\d{2}):?(\d{2})$/;function P(e,t,r){t=t||0,r=r||0;var n=new Date(0);n.setUTCFullYear(e,0,4);var o=7*t+r+1-(n.getUTCDay()||7);return n.setUTCDate(n.getUTCDate()+o),n}e.exports=function(e,t){if(n(e))return new Date(e.getTime());if("string"!=typeof e)return new Date(e);var r=(t||{}).additionalDigits;r=null==r?i:Number(r);var O=function(e){var t,r={},n=e.split(s);if(u.test(n[0])?(r.date=null,t=n[0]):(r.date=n[0],t=n[1]),t){var o=x.exec(t);o?(r.time=t.replace(o[1],""),r.timezone=o[1]):r.time=t}return r}(e),M=function(e,t){var r,n=l[t],o=f[t];if(r=d.exec(e)||o.exec(e)){var a=r[1];return{year:parseInt(a,10),restDateString:e.slice(a.length)}}if(r=c.exec(e)||n.exec(e)){var i=r[1];return{year:100*parseInt(i,10),restDateString:e.slice(i.length)}}return{year:null}}(O.date,r),j=M.year,E=function(e,t){if(null===t)return null;var r,n,o,a;if(0===e.length)return(n=new Date(0)).setUTCFullYear(t),n;if(r=_.exec(e))return n=new Date(0),o=parseInt(r[1],10)-1,n.setUTCFullYear(t,o),n;if(r=p.exec(e)){n=new Date(0);var i=parseInt(r[1],10);return n.setUTCFullYear(t,0,i),n}if(r=h.exec(e)){n=new Date(0),o=parseInt(r[1],10)-1;var s=parseInt(r[2],10);return n.setUTCFullYear(t,o,s),n}if(r=v.exec(e))return a=parseInt(r[1],10)-1,P(t,a);if(r=b.exec(e)){a=parseInt(r[1],10)-1;var u=parseInt(r[2],10)-1;return P(t,a,u)}return null}(M.restDateString,j);if(E){var R,F=E.getTime(),q=0;return O.time&&(q=function(e){var t,r,n;if(t=y.exec(e))return(r=parseFloat(t[1].replace(",",".")))%24*o;if(t=g.exec(e))return r=parseInt(t[1],10),n=parseFloat(t[2].replace(",",".")),r%24*o+n*a;if(t=m.exec(e)){r=parseInt(t[1],10),n=parseInt(t[2],10);var i=parseFloat(t[3].replace(",","."));return r%24*o+n*a+1e3*i}return null}(O.time)),O.timezone?(I=O.timezone,R=(w=k.exec(I))?0:(w=C.exec(I))?(D=60*parseInt(w[2],10),"+"===w[1]?-D:D):(w=S.exec(I))?(D=60*parseInt(w[2],10)+parseInt(w[3],10),"+"===w[1]?-D:D):0):(R=new Date(F+q).getTimezoneOffset(),R=new Date(F+q+R*a).getTimezoneOffset()),new Date(F+q+R*a)}var I,w,D;return new Date(e)}},10870:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(199),o=r(10871);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("ReportMessageToSafetyLibrary",e,t)}},10871:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"ReportMessageToSafetyLibraryRequest:#Exchange"},e)}},10873:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(199),o=r(10874);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("CreateOrUpdateFocusedOtherOverride",e,t)}},10874:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"CreateOrUpdateFocusedOtherOverrideJsonRequest:#Exchange"},e)}},10877:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"CreateSweepRuleForSenderJsonRequest:#Exchange"},e)}},10879:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"LikeItemRequest:#Exchange"},e)}},10880:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(199),o=r(8575);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("LikeItem2",e,t)}},10883:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"MarkAsJunkRequest:#Exchange"},e)}},10884:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(199),o=r(10885);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("MarkAsJunk",e,t)}},10885:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"MarkAsJunkJsonRequest:#Exchange"},e)}},1197:function(e,t){e.exports=function(e){return e instanceof Date}},1215:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"IsEqualTo:#Exchange"},e)}},1280:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"And:#Exchange"},e)}},1416:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"IsLessThanOrEqualTo:#Exchange"},e)}},1417:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"StartSearchSessionJsonRequest:#Exchange"},e)}},1418:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"EndSearchSessionJsonRequest:#Exchange"},e)}},1467:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"IsGreaterThanOrEqualTo:#Exchange"},e)}},1486:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"ItemChange:#Exchange"},e)}},1509:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"DynamicRefinerQueryType:#Exchange"},e)}},1510:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"PrimaryMailboxSearchScopeType:#Exchange"},e)}},1511:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"SingleLargeArchiveSearchScopeType:#Exchange"},e)}},1512:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"SearchFolderScopeType:#Exchange"},e)}},1513:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"SingleGroupSearchScopeType:#Exchange"},e)}},1517:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"ExecuteSearchJsonRequest:#Exchange"},e)}},1518:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"ExecuteSearchRequest:#Exchange"},e)}},1519:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"StartSearchSessionRequest:#Exchange"},e)}},1520:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(199),o=r(1417);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("StartSearchSession",e,t)}},1521:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"EndSearchSessionRequest:#Exchange"},e)}},1522:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(199),o=r(1418);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("EndSearchSession",e,t)}},1533:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"SortResults:#Exchange"},e)}},1597:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"SetItemField:#Exchange"},e)}},1643:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"Message:#Exchange"},e)}},1941:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(199),o=r(2261);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("UpdateItem",e,t)}},1979:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"UpdateItemRequest:#Exchange"},e)}},2034:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"GetAttachmentPreviewsRequest:#Exchange"},e)}},2196:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"DeleteItemField:#Exchange"},e)}},2201:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"SeekToConditionPageView:#Exchange"},e)}},2258:function(e,t,r){var n=r(1032);e.exports=function(e,t){var r=n(e),o=n(t);return r.getTime()-o.getTime()}},2261:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"UpdateItemJsonRequest:#Exchange"},e)}},2429:function(e,t){e.exports=function(e,t){var r=e.length;if(r!==t.length)return!1;for(var n=0;n<r;n++)if(e[n]!==t[n])return!1;return!0}},2512:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(199),o=r(2735);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("MoveItem",e,t)}},2513:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"MoveItemRequest:#Exchange"},e)}},2584:function(e,t,r){var n=r(2258),o=36e5;e.exports=function(e,t){var r=n(e,t)/o;return r>0?Math.floor(r):Math.ceil(r)}},2644:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(199),o=r(2034);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("GetAttachmentPreviews",e,t)}},2735:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"MoveItemJsonRequest:#Exchange"},e)}},2750:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(199),o=r(3763);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("ApplyConversationAction",e,t)}},2751:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"ApplyConversationActionRequest:#Exchange"},e)}},2752:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"ConversationAction:#Exchange"},e)}},2827:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"DeleteItemJsonRequest:#Exchange"},e)}},2921:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"DeleteItemRequest:#Exchange"},e)}},2922:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(199),o=r(2827);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("DeleteItem",e,t)}},2961:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(199),o=r(3180);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("GetFolderChangeDigest",e,t)}},3180:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"GetFolderChangeDigestRequest:#Exchange"},e)}},3439:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(199);t.default=function(e){return n.makeServiceRequest("GetFolderMruConfiguration",{},e)}},3763:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"ApplyConversationActionJsonRequest:#Exchange"},e)}},3961:function(e,t,r){"use strict";var n=r(720),o=r(0),a=r(1),i=r(353),s=r(222),u=r(77),c=r(476),l=r(384),d=r(186),f=r(196),_=r(287),p=r(351),h=Object(i.a)(),v="SearchBox",b=function(e){function t(t){var r=e.call(this,t)||this;return r._rootElement=a.createRef(),r._inputElement=a.createRef(),r._onClickFocus=function(){var e=r._inputElement.current;e&&(r.focus(),e.selectionStart=e.selectionEnd=0)},r._onFocusCapture=function(e){r.setState({hasFocus:!0}),r._events||(r._events=new s.a(r)),r._events.on(e.currentTarget,"blur",r._onBlur,!0),r.props.onFocus&&r.props.onFocus(e)},r._onClearClick=function(e){var t=r.props.clearButtonProps;t&&t.onClick&&t.onClick(e),e.defaultPrevented||r._onClear(e)},r._onKeyDown=function(e){switch(e.which){case u.a.escape:r.props.onEscape&&r.props.onEscape(e),e.defaultPrevented||r._onClear(e);break;case u.a.enter:if(r.props.onSearch){r.props.onSearch(r.state.value);break}return;default:if(r.props.onKeyDown&&r.props.onKeyDown(e),!e.defaultPrevented)return}e.preventDefault(),e.stopPropagation()},r._onBlur=function(e){r._events&&r._events.off(),r.setState({hasFocus:!1}),r.props.onBlur&&r.props.onBlur(e)},r._onInputChange=function(e){var t=e.target.value;t!==r._latestValue&&(r._latestValue=t,r.setState({value:t}),r._callOnChange(e,t))},Object(c.a)(r),Object(l.a)(v,t,{labelText:"placeholder",defaultValue:"value"}),r._latestValue=t.value||"",r._fallbackId=Object(d.c)(v),r.state={value:r._latestValue,hasFocus:!1},r}return o.__extends(t,e),t.prototype.componentWillReceiveProps=function(e){void 0!==e.value&&(this._latestValue=e.value,this.setState({value:e.value||""}))},t.prototype.componentWillMount=function(){this._events&&this._events.dispose()},t.prototype.render=function(){var e=this.props,t=e.ariaLabel,r=e.placeholder,n=e.className,i=e.disabled,s=e.underlined,u=e.styles,c=e.labelText,l=e.theme,d=e.clearButtonProps,v=e.disableAnimation,b=e.iconProps,y=e.id,g=void 0===y?this._fallbackId:y,m=this.state,x=m.value,k=m.hasFocus,C=void 0===c?r:c,S=h(u,{theme:l,className:n,underlined:s,hasFocus:k,disabled:i,hasInput:x.length>0,disableAnimation:v}),P=Object(f.j)(this.props,f.o,["className","placeholder","onFocus","onBlur","value"]);return a.createElement("div",{ref:this._rootElement,className:S.root,onFocusCapture:this._onFocusCapture},a.createElement("div",{className:S.iconContainer,onClick:this._onClickFocus,"aria-hidden":!0},a.createElement(p.a,o.__assign({iconName:"Search"},b,{className:S.icon}))),a.createElement("input",o.__assign({},P,{id:g,className:S.field,placeholder:C,onChange:this._onInputChange,onInput:this._onInputChange,onKeyDown:this._onKeyDown,value:x,disabled:i,"aria-label":t||r,ref:this._inputElement})),x.length>0&&a.createElement("div",{className:S.clearButton},a.createElement(_.a,o.__assign({styles:{root:{height:"auto"},icon:{fontSize:"12px"}},iconProps:{iconName:"Clear"}},d,{onClick:this._onClearClick}))))},t.prototype.focus=function(){this._inputElement.current&&this._inputElement.current.focus()},t.prototype.hasFocus=function(){return!!this.state.hasFocus},t.prototype._onClear=function(e){this.props.onClear&&this.props.onClear(e),e.defaultPrevented||(this._latestValue="",this.setState({value:""}),this._callOnChange(void 0,""),e.stopPropagation(),e.preventDefault(),this.focus())},t.prototype._callOnChange=function(e,t){var r=this.props,n=r.onChange,o=r.onChanged;o&&o(t),n&&n(e,t)},t.defaultProps={disableAnimation:!1,clearButtonProps:{ariaLabel:"Clear text"}},t}(a.Component),y=r(11),g={root:"ms-SearchBox",iconContainer:"ms-SearchBox-iconContainer",icon:"ms-SearchBox-icon",clearButton:"ms-SearchBox-clearButton",field:"ms-SearchBox-field"};r.d(t,"a",function(){return m});var m=Object(n.a)(b,function(e){var t,r,n,o=e.theme,a=e.underlined,i=e.disabled,s=e.hasFocus,u=e.className,c=e.hasInput,l=e.disableAnimation,d=o.palette,f=o.fonts,_=o.semanticColors,p=o.effects,h=Object(y.getGlobalClassNames)(g,o),v={color:_.inputPlaceholderText,opacity:1};return{root:[h.root,f.medium,y.normalize,{color:d.neutralPrimary,backgroundColor:_.inputBackground,display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"stretch",padding:"1px 0 1px 4px",borderRadius:p.roundedCorner2,border:"1px solid "+_.inputBorder,height:32,selectors:(t={},t[y.HighContrastSelector]={border:"1px solid WindowText"},t[":hover"]={borderColor:d.neutralDark,selectors:(r={},r[y.HighContrastSelector]={borderColor:"Highlight"},r)},t[":hover ."+h.iconContainer]={color:d.themeDark},t)},s&&["is-active",{borderColor:d.themePrimary,selectors:(n={":hover":{borderColor:d.themePrimary}},n[y.HighContrastSelector]={borderColor:"Highlight"},n)}],i&&["is-disabled",{borderColor:d.neutralLighter,backgroundColor:d.neutralLighter,pointerEvents:"none",cursor:"default"}],a&&["is-underlined",{borderWidth:"0 0 1px 0",padding:"1px 0 1px 8px"}],a&&i&&{backgroundColor:"transparent"},c&&"can-clear",u],iconContainer:[h.iconContainer,{display:"flex",flexDirection:"column",justifyContent:"center",flexShrink:0,fontSize:16,width:32,textAlign:"center",color:d.themePrimary,cursor:"text"},s&&{width:4},i&&{color:d.neutralTertiary},!l&&{transition:"width "+y.AnimationVariables.durationValue1}],icon:[h.icon,{opacity:1},s&&{opacity:0},!l&&{transition:"opacity "+y.AnimationVariables.durationValue1+" 0s"}],clearButton:[h.clearButton,{display:"flex",flexDirection:"row",alignItems:"stretch",cursor:"pointer",flexBasis:"32px",flexShrink:0,padding:1,color:d.themePrimary}],field:[h.field,y.normalize,Object(y.getPlaceholderStyles)(v),{backgroundColor:"transparent",border:"none",outline:"none",fontWeight:"inherit",fontFamily:"inherit",fontSize:"inherit",color:d.neutralPrimary,flex:"1 1 0px",minWidth:"0px",overflow:"hidden",textOverflow:"ellipsis",paddingBottom:.5,selectors:{"::-ms-clear":{display:"none"}}},i&&{color:d.neutralTertiary}]}},void 0,{scope:"SearchBox"})},4142:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(199),o=r(4484);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("ApplyBulkItemAction",e,t)}},4484:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"ApplyBulkItemActionJsonRequest:#Exchange"},e)}},4485:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"ApplyBulkItemActionRequest:#Exchange"},e)}},4514:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(199),o=r(4515);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("ApplyMessageAction",e,t)}},4515:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"ApplyMessageActionJsonRequest:#Exchange"},e)}},4857:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(199);t.default=function(e){return n.makeServiceRequest("GetMailboxJunkEmailConfiguration",{},e)}},4927:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(199),o=r(7192);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("EmptyFolder",e,t)}},4928:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"EmptyFolderRequest:#Exchange"},e)}},54:function(e,t,r){"use strict";var n,o,a,i;r.d(t,"b",function(){return n}),r.d(t,"d",function(){return o}),r.d(t,"c",function(){return a}),r.d(t,"a",function(){return i}),function(e){e[e.Sunday=0]="Sunday",e[e.Monday=1]="Monday",e[e.Tuesday=2]="Tuesday",e[e.Wednesday=3]="Wednesday",e[e.Thursday=4]="Thursday",e[e.Friday=5]="Friday",e[e.Saturday=6]="Saturday"}(n||(n={})),function(e){e[e.January=0]="January",e[e.February=1]="February",e[e.March=2]="March",e[e.April=3]="April",e[e.May=4]="May",e[e.June=5]="June",e[e.July=6]="July",e[e.August=7]="August",e[e.September=8]="September",e[e.October=9]="October",e[e.November=10]="November",e[e.December=11]="December"}(o||(o={})),function(e){e[e.FirstDay=0]="FirstDay",e[e.FirstFullWeek=1]="FirstFullWeek",e[e.FirstFourDayWeek=2]="FirstFourDayWeek"}(a||(a={})),function(e){e[e.Day=0]="Day",e[e.Week=1]="Week",e[e.Month=2]="Month",e[e.WorkWeek=3]="WorkWeek"}(i||(i={}))},6121:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(199),o=r(6964);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("SetMailboxJunkEmailConfiguration",e,t)}},682:function(e,t,r){"use strict";var n=r(720),o=r(0),a=r(1),i=r(196),s=r(353),u=Object(s.a)({disableCaching:!0}),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.as,r=void 0===t?"label":t,n=e.children,s=e.className,c=e.disabled,l=e.styles,d=e.required,f=e.theme,_=u(l,{className:s,disabled:c,required:d,theme:f});return a.createElement(r,o.__assign({},Object(i.j)(this.props,i.h),{className:_.root}),n)},t}(a.Component),l=r(11);r.d(t,"a",function(){return d});var d=Object(n.a)(c,function(e){var t,r=e.theme,n=e.className,o=e.disabled,a=e.required,i=r.semanticColors,s=l.FontWeights.semibold,u=i.bodyText,c=i.disabledBodyText,d=i.errorText;return{root:["ms-Label",r.fonts.medium,{fontWeight:s,color:u,boxSizing:"border-box",boxShadow:"none",margin:0,display:"block",padding:"5px 0",wordWrap:"break-word",overflowWrap:"break-word"},o&&{color:c,selectors:(t={},t[l.HighContrastSelector]={color:"GrayText"},t)},a&&{selectors:{"::after":{content:"' *'",color:d,paddingRight:12}}},n]}},void 0,{scope:"Label"})},692:function(e,t,r){"use strict";var n=r(720),o=r(0),a=r(1),i=r(353),s=r(476),u=r(186),c=r(508),l=r(351),d=r(398),f=Object(i.a)(),_=function(e){function t(t,r){var n=e.call(this,t,r)||this;return n._checkBox=a.createRef(),n._onFocus=function(e){var t=n.props.inputProps;t&&t.onFocus&&t.onFocus(e)},n._onBlur=function(e){var t=n.props.inputProps;t&&t.onBlur&&t.onBlur(e)},n._onChange=function(e){var t=n.props,r=t.disabled,o=t.onChange,a=n.state.isChecked;r||(o&&o(e,!a),void 0===n.props.checked&&n.setState({isChecked:!a}))},n._onRenderLabel=function(e){var t=e.label;return t?a.createElement("span",{"aria-hidden":"true",className:n._classNames.text},t):null},Object(s.a)(n),n._id=n.props.id||Object(u.c)("checkbox-"),n.state={isChecked:!!(void 0!==t.checked?t.checked:t.defaultChecked)},n}return o.__extends(t,e),t.getDerivedStateFromProps=function(e,t){return void 0!==e.checked?o.__assign({},t,{isChecked:!!e.checked}):t},t.prototype.render=function(){var e=this,t=this.props,r=t.checked,n=t.className,i=t.defaultChecked,s=t.disabled,u=t.inputProps,_=t.name,p=t.boxSide,h=t.theme,v=t.ariaLabel,b=t.ariaLabelledBy,y=t.ariaDescribedBy,g=t.styles,m=t.onRenderLabel,x=void 0===m?this._onRenderLabel:m,k=t.checkmarkIconProps,C=t.ariaPositionInSet,S=t.ariaSetSize,P=t.keytipProps,O=t.title,M=t.label,j=void 0===r?this.state.isChecked:r,E="start"!==p;return this._classNames=f(g,{theme:h,className:n,disabled:s,checked:j,reversed:E,isUsingCustomLabelRender:x!==this._onRenderLabel}),a.createElement(d.a,{keytipProps:P,disabled:s},function(t){return a.createElement("div",{className:e._classNames.root},a.createElement("input",o.__assign({type:"checkbox"},u,{"data-ktp-execute-target":t["data-ktp-execute-target"]},void 0!==r&&{checked:r},void 0!==i&&{defaultChecked:i},{disabled:s,className:e._classNames.input,ref:e._checkBox,name:_,id:e._id,title:O,onChange:e._onChange,onFocus:e._onFocus,onBlur:e._onBlur,"aria-disabled":s,"aria-label":v||M,"aria-labelledby":b,"aria-describedby":Object(c.a)(y,t["aria-describedby"]),"aria-posinset":C,"aria-setsize":S})),a.createElement("label",{className:e._classNames.label,htmlFor:e._id},a.createElement("div",{className:e._classNames.checkbox,"data-ktp-target":t["data-ktp-target"]},a.createElement(l.a,o.__assign({iconName:"CheckMark"},k,{className:e._classNames.checkmark}))),x(e.props,e._onRenderLabel)))})},Object.defineProperty(t.prototype,"checked",{get:function(){return this.state.isChecked},enumerable:!0,configurable:!0}),t.prototype.focus=function(){this._checkBox.current&&this._checkBox.current.focus()},t.defaultProps={boxSide:"start"},t}(a.Component),p=r(11),h=r(331),v={root:"ms-Checkbox",label:"ms-Checkbox-label",checkbox:"ms-Checkbox-checkbox",checkmark:"ms-Checkbox-checkmark",text:"ms-Checkbox-text"};r.d(t,"a",function(){return b});var b=Object(n.a)(_,function(e){var t,r,n,o,a,i,s,u,c,l=e.className,d=e.theme,f=e.reversed,_=e.checked,b=e.disabled,y=e.isUsingCustomLabelRender,g=d.semanticColors,m=d.effects,x=d.palette,k=d.fonts,C=Object(p.getGlobalClassNames)(v,d),S=g.inputForegroundChecked,P=x.neutralSecondary,O=x.neutralPrimary,M=g.inputBackgroundChecked,j=g.disabledBodySubtext,E=g.inputBorderHovered,R=g.inputBackgroundChecked,F=x.themeDark,q=x.themeDark,I=g.inputTextHovered,w=g.disabledBodySubtext,D=g.bodyText,T=g.disabledText;return{root:[C.root,{position:"relative",display:"flex"},f&&"reversed",_&&"is-checked",!b&&"is-enabled",b&&"is-disabled",!b&&[!_&&{selectors:{":hover .ms-Checkbox-checkbox":{borderColor:E,selectors:(t={},t[p.HighContrastSelector]={borderColor:"Highlight"},t)},":focus .ms-Checkbox-checkbox":{borderColor:E},":hover .ms-Checkbox-checkmark":{color:P,opacity:"1",selectors:(r={},r[p.HighContrastSelector]={color:"Highlight"},r)}}},_&&{selectors:(n={":hover .ms-Checkbox-checkbox":{background:F,borderColor:q},":focus .ms-Checkbox-checkbox":{background:F,borderColor:q}},n[p.HighContrastSelector]={selectors:{":hover .ms-Checkbox-checkbox":{background:"Window",borderColor:"Highlight"},":focus .ms-Checkbox-checkbox":{background:"Highlight"},":focus:hover .ms-Checkbox-checkbox":{background:"Highlight"},":focus:hover .ms-Checkbox-checkmark":{color:"Window"},":hover .ms-Checkbox-checkmark":{color:"Highlight"}}},n)},{selectors:{":hover .ms-Checkbox-text":{color:I},":focus .ms-Checkbox-text":{color:I}}}],l],input:{position:"absolute",background:"none",opacity:0,selectors:(o={},o["."+h.a+" &:focus + label::before"]={outline:"1px solid "+d.palette.neutralSecondary,outlineOffset:"2px",selectors:(a={},a[p.HighContrastSelector]={outline:"1px solid ActiveBorder"},a)},o)},label:[C.label,d.fonts.medium,{display:"flex",alignItems:y?"center":"flex-start",cursor:b?"default":"pointer",position:"relative",userSelect:"none",textAlign:"left"},f&&{flexDirection:"row-reverse",justifyContent:"flex-end"},{selectors:{"&::before":{position:"absolute",left:0,right:0,top:0,bottom:0,content:'""',pointerEvents:"none"}}}],checkbox:[C.checkbox,{display:"flex",flexShrink:0,alignItems:"center",justifyContent:"center",height:"20px",width:"20px",border:"1px solid "+O,borderRadius:m.roundedCorner2,boxSizing:"border-box",transitionProperty:"background, border, border-color",transitionDuration:"200ms",transitionTimingFunction:"cubic-bezier(.4, 0, .23, 1)",overflow:"hidden"},f?{marginLeft:4}:{marginRight:4},!b&&_&&{background:R,borderColor:M,selectors:(i={},i[p.HighContrastSelector]={background:"Highlight",borderColor:"Highlight"},i)},b&&{borderColor:j,selectors:(s={},s[p.HighContrastSelector]={borderColor:"InactiveBorder"},s)},_&&b&&{background:w,borderColor:j}],checkmark:[C.checkmark,{opacity:_?"1":"0",color:S,selectors:(u={},u[p.HighContrastSelector]={color:b?"InactiveBorder":"Window",MsHighContrastAdjust:"none"},u)}],text:[C.text,{color:b?T:D,fontSize:k.medium.fontSize,lineHeight:"20px"},f?{marginRight:4}:{marginLeft:4},b&&{selectors:(c={},c[p.HighContrastSelector]={color:"InactiveBorder"},c)}]}},void 0,{scope:"Checkbox"})},6964:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"SetMailboxJunkEmailConfigurationRequest:#Exchange"},e)}},700:function(e,t,r){"use strict";function n(e){throw new Error("Unexpected object: "+e)}r.d(t,"a",function(){return n})},7188:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"CopyItemRequest:#Exchange"},e)}},7189:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(199),o=r(7190);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("CopyItem",e,t)}},7190:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"CopyItemJsonRequest:#Exchange"},e)}},7192:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"EmptyFolderJsonRequest:#Exchange"},e)}},8571:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"ApplyMessageActionRequest:#Exchange"},e)}},8572:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"MessageAction:#Exchange"},e)}},8573:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"CreateSweepRuleForSenderRequest:#Exchange"},e)}},8574:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(199),o=r(10877);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),n.makeServiceRequest("CreateSweepRuleForSender",e,t)}},8575:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"LikeItemJsonRequest:#Exchange"},e)}},951:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"Constant:#Exchange"},e)}},952:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"FieldURIOrConstantType:#Exchange"},e)}},953:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e){return n.__assign({__type:"RestrictionType:#Exchange"},e)}}}]);
//# sourceMappingURL=owa.vendors~TriageAction.js.map
self.scriptsLoaded['owa.vendors~TriageAction.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.vendors~TriageAction.js'] = (new Date()).getTime();