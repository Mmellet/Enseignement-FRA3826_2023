/*! Version: 1.0.0; Third Party Notices: https://lpcres.delve.office.com/lpc/versionless/tpn-3d8c2661c41f1e2f07af40844bb9d6ef3708678ee13b469a07a213daea9e8a3c0cd2d4f6176a4cbf49456df901962cf83ec3bdb773f3517e130433c144835e3b.txt */
(window.webpackJsonpLpc=window.webpackJsonpLpc||[]).push([[5],{1662:function(t,e,n){"use strict";n.r(e);var a=n(6),o=n(46),r=n(42),i=n(1),s="ProfilePhotoPicker";function l(t,e){void 0===e&&(e=null);var n=""+s+t+"Action";return Object(i.a)(n,{featureName:s,exportOptions:e?{exportType:"UserInteraction",exportName:e}:void 0})}var p=l("CancelButtonClicked","ProfilePhotoPickerCancelButtonClicked"),u=l("CloseButtonClicked","ProfilePhotoPickerCloseButtonClickedAction"),c=l("DoneButtonClicked","ProfilePhotoPickerDoneButtonClickedAction"),d=l("ImageEditPaneDismissed","ProfilePhotoPickerImageEditPaneDismissed"),h=l("ImageUpdated"),m=l("LoadedCurrentImage"),f=l("LoadedEmptyImage"),g=l("LoadedNewImage"),v=l("SomethingWentWrong"),y=l("UploadStarted","ProfilePhotoPickerApplyButtonClicked"),S=l("UploadProgress"),b=l("UploadSucceeded"),C=l("WarningDismissed"),E={dataUrl:void 0,currentImageDataUrl:void 0,status:"READY",warning:void 0,show:!1,isUpdated:!1,uploadStart:0,uploadDuration:0},w=Object(o.a)().handleAction(p,U).handleAction(u,U).handleAction(c,U).handleAction(d,U).handleAction(C,function(t){return Object(a.l)(t,{status:"READY",warning:void 0})}).handleAction(m,function(t,e){var n=e.payload.dataUrl;return Object(a.l)(t,{dataUrl:t.dataUrl||n,currentImageDataUrl:t.currentImageDataUrl||n,isUpdated:!!e.payload.isSuggestedPhoto})}).handleAction(g,function(t,e){return Object(a.l)(t,{dataUrl:e.payload.dataUrl,status:"READY",warning:void 0,isUpdated:e.payload.dataUrl!==t.currentImageDataUrl})}).handleAction(f,function(t){return Object(a.l)(t,{dataUrl:"",status:"READY",warning:void 0,isUpdated:!!t.currentImageDataUrl})}).handleAction(y,function(t,e){return Object(a.l)(t,{status:"IN_PROGRESS",warning:void 0,uploadStart:e.payload.now,uploadDuration:0})}).handleAction(S,function(t,e){return"IN_PROGRESS"===t.status?Object(a.l)(t,{uploadDuration:e.payload.now-t.uploadStart}):t}).handleAction(b,function(t,e){return Object(a.l)(t,{currentImageDataUrl:e.payload.dataUrl,status:"SUCCESS",warning:void 0})}).handleAction(v,function(t,e){return Object(a.l)(t,{status:"SOMETHING_WENT_WRONG",warning:e.payload.warning})}).handleAction(h,function(t){return Object(a.l)(t,{isUpdated:!0})}).done(E),x=Object(r.a)("ProfilePhotoPickerStore",w,function(t){return t});function U(t){return Object(a.l)(t,{dataUrl:"",currentImageDataUrl:"",status:"READY",warning:void 0,isUpdated:!1})}var P=n(325),I=n.n(P),D=n(246),k=n.n(D),O=n(770),B=n(1136),N=n(988),R=n(1043),_=n(980),A=n(355),L=n(1171),W=n(1173),M=n(618),T=n(588),j=n(2),z=n(244);function H(t){try{return t.toDataURL("image/jpeg")}catch(t){return console.error(t),""}}var G=n(3),F=n.n(G),Y=n(178),X=n(462),K=n(1260),Z=n(110);function V(t){var e=new DataView(function(t){for(var e=t.replace(/^data\:([^\;]+)\;base64,/i,""),n=atob(e),a=n.length,o=new ArrayBuffer(a),r=new Uint8Array(o),i=0;i<a;i++)r[i]=n.charCodeAt(i);return o}(t));if(65496!==e.getUint16(0,!1))return 1;for(var n,a=e.byteLength,o=2;o<a;){var r=e.getUint16(o,!1);if(o+=2,65505===r){if(1165519206!==e.getUint32(o+=2,!1))break;var i=18761===e.getUint16(o+=6,!1);o+=e.getUint32(o+4,i);var s=e.getUint16(o,i);o+=2;for(var l=0;l<s;l++)if(274===e.getUint16(o+12*l,i))return(n=e.getUint16(o+12*l+8,i))<1||n>8?1:n}else{if(65280!=(65280&r))break;o+=e.getUint16(o,!1)}}return 1}var q,J=n(24),Q=n(493),$=function(){return($=F.a||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},tt=Object(Q.b)(function(t,e){var n=t.palette;return Object(J.X)({editControls:{display:"flex",flexDirection:"row",width:"100%",height:54},zoomButton:{selectors:{"&:disabled":{background:n.white}}},editCanvas:{backgroundColor:n.white,cursor:e?"move":"inherit"},invisible:$({clip:"rect(1px, 1px, 1px, 1px)"},{height:1,overflow:"hidden",position:"absolute",whiteSpace:"nowrap",width:1}),slider:{flexGrow:1,marginTop:2,marginBottom:24,selectors:{".ms-Slider-thumb":{border:"2px solid "+n.themePrimary},".ms-Slider-active":{backgroundColor:n.themePrimary},".ms-Slider-inactive":{backgroundColor:n.themeLight}}},canvasContainer:{margin:"0 auto",display:"flex",alignItems:"center",flexDirection:"column",width:256,position:"relative"},textboy:{color:n.white,position:"absolute",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",top:0,left:0,width:256,height:256},initials:{fontSize:128,lineHeight:128}})}),et=(q=function(t,e){return(q=k.a||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}q(t,e),t.prototype=null===e?I()(e):(n.prototype=e.prototype,new n)}),nt={1:[1,0,0,1,0,0],2:[-1,0,0,1,0,0],3:[-1,0,0,-1,0,0],4:[1,0,0,-1,0,0],5:[0,1,1,0,0,0],6:[0,1,-1,0,0,0],7:[0,-1,-1,0,0,0],8:[0,-1,1,0,0,0]},at=function(t,e,n){return Math.min(n,Math.max(t,e))},ot=function(t){function e(e){var n=t.call(this,e)||this;return n.hasUnmounted=!1,n.editorCanvas=null,n.textBoy=null,n.initialState={xpos:0,ypos:0,absoluteScale:1,relativeScale:0,stepSize:.1,orientation:1,maximumScale:1,naturalMin:0,naturalWidth:0,naturalHeight:0,moving:!1,lastMouseX:0,lastMouseY:0,zoomInDisabled:!0,zoomOutDisabled:!0,image:void 0,initialRender:!0},n.state=F()({},n.initialState),n}return et(e,t),e.prototype.render=function(){var t=this,e=!this.state.image||this.state.maximumScale<=1||this.props.progress>0,n=!e||this.state.naturalHeight!==this.state.naturalWidth,a=tt(this.props.theme,n),o=1===this.props.progress?j.createElement("div",{className:a.textboy},j.createElement("span",{className:a.invisible},this.props.strings.success),j.createElement(X.a,{className:a.initials,iconName:"CheckMark"})):null,r=at(2*this.state.stepSize,.1,.2),i=e?j.createElement("div",{className:a.editControls}):j.createElement("div",{className:a.editControls},j.createElement(B.a,{className:a.zoomButton,iconProps:{iconName:"CalculatorSubtract"},title:this.props.strings.zoomOut,ariaLabel:this.props.strings.zoomOut,onClick:function(){return t.zoom(-r,128,128)},disabled:this.state.zoomOutDisabled,tabIndex:-1}),j.createElement(K.a,{ariaValueText:function(e){return Math.round(100*(e*(t.state.maximumScale-1)+1))+"%"},ariaLabel:this.props.strings.zoom,className:a.slider,min:0,max:1,step:at(this.state.stepSize,.05,.1),value:this.state.relativeScale,showValue:!1,onChange:function(e){return t.handleZoomSlider(e)}}),j.createElement(B.a,{className:a.zoomButton,iconProps:{iconName:"CalculatorAddition"},title:this.props.strings.zoomIn,ariaLabel:this.props.strings.zoomIn,onClick:function(){return t.zoom(r,128,128)},disabled:this.state.zoomInDisabled,tabIndex:-1}));return j.createElement("div",{className:a.canvasContainer},j.createElement("canvas",{className:a.editCanvas,role:"img",tabIndex:this.state.image?0:void 0,ref:function(e){return t.editorCanvas=e},width:256,height:256,onKeyDown:function(e){return t.onKeyboardHandler(e)},"aria-label":this.props.strings.dropZone}),j.createElement("div",{className:a.textboy,ref:function(e){return t.textBoy=e}},j.createElement("div",{className:a.initials},this.props.initials),j.createElement("div",null,this.props.strings.dropZone)),j.createElement("div",{role:"region","aria-live":"assertive","aria-atomic":!0},o),i)},e.prototype.componentWillUnmount=function(){this.hasUnmounted=!0},e.prototype.componentDidMount=function(){var t=this;this.props.dataUrl&&setTimeout(function(){return t.props.dataUrl&&t.loadImage(t.props.dataUrl)},0),this.attachEventListeners(),this.renderCanvasContent()},e.prototype.shouldComponentUpdate=function(t,e){return!Object(Y.a)(t,this.props)||!Object(Y.a)(e,this.state)},e.prototype.componentWillReceiveProps=function(t){t.dataUrl&&t.dataUrl!==this.props.dataUrl?this.loadImage(t.dataUrl):t.dataUrl!==this.props.dataUrl&&(this.state=F()({},this.initialState))},e.prototype.componentDidUpdate=function(t){this.renderCanvasContent(),1===this.props.progress&&t.progress!==this.props.progress&&this.props.onRefocus()},e.prototype.getImageDataUrlFromCanvas=function(t){var e=this;if(void 0===t&&(t=648),!this.state.image)return"";var n=document.createElement("canvas"),a=this.state.naturalMin/this.state.absoluteScale;n.width=a,n.height=a;var o=n.getContext("2d");if(!o)return this.props.onError("UNSUPPORTED_BROWSER"),"";o.fillStyle="white",o.fillRect(0,0,n.width,n.height),this.state.image&&this.withCenterRotated(o,n.width,this.state.orientation,this.state.image,function(t,a){return o.drawImage(a,e.state.xpos*n.width/256,e.state.ypos*n.height/256,e.state.naturalWidth,e.state.naturalHeight)});for(var r=1;n.width*r/4>=t;)r/=2,o.drawImage(n,0,0,n.width*r,n.height*r);var i=document.createElement("canvas"),s=Math.min(this.state.naturalMin/this.state.absoluteScale,t);i.width=s,i.height=s;var l=i.getContext("2d");return l?(l.drawImage(n,0,0,n.width*r,n.width*r,0,0,s,s),H(i)):(this.props.onError("UNSUPPORTED_BROWSER"),"")},e.prototype.loadImage=function(t){var e=this;if(t){var n=new Image;n.onload=function(){return e.imageLoaded(n)},n.src=t}else this.setState(this.initialState)},e.prototype.imageLoaded=function(t){var e=this,n=Math.min(t.naturalWidth,t.naturalHeight),o=n/256,r=function(t){return-.5*(t/o-256)},i=Math.min(1,Math.max(.01,256/(2*Math.max(t.naturalWidth,t.naturalHeight)))),s=Object(a.l)(this.initialState,{naturalMin:n,naturalWidth:t.naturalWidth,naturalHeight:t.naturalHeight,stepSize:i,maximumScale:o,orientation:V(t.src),image:t,zoomInDisabled:!1,initialRender:!1,xpos:r(t.naturalWidth),ypos:r(t.naturalHeight)});!this.state.initialRender&&s.maximumScale<1&&setTimeout(function(){return e.props.onError("IMAGE_TOO_SMALL")},0),this.hasUnmounted||this.setState(s)},e.prototype.renderCanvasContent=function(){var t=this,e=this.editorCanvas;if(e&&this.textBoy){var n=e.getContext("2d");if(n){var a=window.getComputedStyle(e);n.fillStyle=a.backgroundColor||"#ffffff",n.fillRect(0,0,1,1);var o=n.getImageData(0,0,1,1).data,r="rgba("+o[0]+", "+o[1]+", "+o[2]+", 0.6)",i="rgba("+o[0]+", "+o[1]+", "+o[2]+", 1)";""===this.props.dataUrl?(n.fillStyle=this.props.textboyColor,this.textBoy.style.display="flex"):(n.fillStyle="white",this.textBoy.style.display="none"),n.fillRect(0,0,256,256),this.state.image&&this.withCenterRotated(n,256,this.state.orientation,this.state.image,function(e,n){return e.drawImage(n,t.state.xpos,t.state.ypos,t.state.naturalWidth*t.state.absoluteScale/t.state.maximumScale,t.state.naturalHeight*t.state.absoluteScale/t.state.maximumScale)}),n.save(),n.beginPath(),n.rect(0,0,256,256),n.arc(128,128,125,0,2*Math.PI,!0),n.clip(),n.fillStyle=r,n.fillRect(0,0,256,256),n.restore(),n.save(),n.beginPath(),n.arc(128,128,126,0,2*Math.PI,!0),n.lineWidth=2,n.strokeStyle=i,n.stroke(),n.restore(),n.save(),n.beginPath(),n.lineWidth=4,n.fillStyle="rgba(0, 120, 215, 0.5)",n.strokeStyle="rgba(0, 120, 215, 0.5)",n.arc(128,128,125,-Math.PI/2,2*this.props.progress*Math.PI-Math.PI/2,!1),1===this.props.progress&&n.fill(),n.stroke(),n.restore()}else this.props.onError("UNSUPPORTED_BROWSER")}},e.prototype.withCenterRotated=function(t,e,n,a,o){t.save(),t.translate(e/2,e/2),t.transform.apply(t,nt[n]),t.translate(-e/2,-e/2),o(t,a),t.restore()},e.prototype.rotate=function(t,e,n){var a=nt[n],o=a[0],r=a[2];return{x:(t-=128)*o+(e-=128)*a[1]+128,y:t*r+e*a[3]+128}},e.prototype.attachEventListeners=function(){var t=this;this.editorCanvas&&this.textBoy&&(this.editorCanvas.addEventListener("dragenter",this.handleDragEnter.bind(this),!1),this.editorCanvas.addEventListener("dragleave",this.handleDragLeave.bind(this),!1),this.editorCanvas.addEventListener("dragover",this.stopEventDefaults.bind(this),!1),this.editorCanvas.addEventListener("drop",this.handleFileDrop.bind(this),!1),this.textBoy.addEventListener("dragenter",this.handleDragEnter.bind(this),!1),this.textBoy.addEventListener("dragleave",this.handleDragLeave.bind(this),!1),this.textBoy.addEventListener("dragover",this.stopEventDefaults.bind(this),!1),this.textBoy.addEventListener("drop",this.handleFileDrop.bind(this),!1),this.editorCanvas.addEventListener("mousedown",this.handleDragStart.bind(this),!1),this.editorCanvas.addEventListener("mousemove",function(e){return t.handleDrag(e,!0)},!1),this.editorCanvas.addEventListener("mouseup",function(e){return t.handleDrag(e,!1)},!1),this.editorCanvas.addEventListener("mouseleave",function(e){return t.handleDrag(e,!1)},!1),this.editorCanvas.addEventListener("wheel",this.handleWheel.bind(this),!1))},e.prototype.stopEventDefaults=function(t){t.stopPropagation(),t.preventDefault()},e.prototype.keepInside=function(t,e){return t>0?0:t+e<256?256-e:t},e.prototype.handleZoomSlider=function(t){!this.state.image||this.state.maximumScale<1||this.zoom(t-this.state.relativeScale,128,128,!1)},e.prototype.newScaledPosition=function(t,e,n,a){var o=t+(e-t)*a/this.state.absoluteScale,r=a*n/this.state.maximumScale;return this.keepInside(o,r)},e.prototype.zoom=function(t,e,n,o){var r=this;if(void 0===o&&(o=!0),this.state.image&&!(this.state.maximumScale<1)){var i=Math.min(1,Math.max(0,this.state.relativeScale+t));if(i!==this.state.relativeScale){var s=Math.exp(i*Math.log(this.state.maximumScale));this.setState(function(t,l){var p=s<=1,u=s>=t.maximumScale;return o&&(p||u)&&r.props.onRefocus(),Object(a.l)(t,{absoluteScale:s,relativeScale:i,zoomOutDisabled:p,zoomInDisabled:u,xpos:r.newScaledPosition(e,r.state.xpos,r.state.naturalWidth,s),ypos:r.newScaledPosition(n,r.state.ypos,r.state.naturalHeight,s)})}),this.props.onUpdate()}}},e.prototype.handleWheel=function(t){if(this.state.image){this.stopEventDefaults(t);var e=t.deltaY>0?-1:1,n=this.rotate(t.offsetX,t.offsetY,this.state.orientation),a=n.x,o=n.y;this.zoom(at(this.state.stepSize,.05,.1)*e,a,o)}},e.prototype.handleDragStart=function(t){var e=this.rotate(t.clientX,t.clientY,this.state.orientation),n=e.x,o=e.y;this.state.image&&(this.stopEventDefaults(t),this.setState(function(t,e){return Object(a.l)(t,{moving:!0,lastMouseX:n,lastMouseY:o})}))},e.prototype.handleDrag=function(t,e){this.stopEventDefaults(t);var n=this.rotate(t.clientX,t.clientY,this.state.orientation),o=n.x,r=n.y;if(this.state.image&&this.state.moving){var i=this.keepInside(this.state.xpos+(o-this.state.lastMouseX),this.state.naturalWidth*this.state.absoluteScale/this.state.maximumScale),s=this.keepInside(this.state.ypos+(r-this.state.lastMouseY),this.state.naturalHeight*this.state.absoluteScale/this.state.maximumScale);(this.state.xpos!==i||this.state.ypos!==s)&&this.props.onUpdate(),this.setState(function(t,n){return Object(a.l)(t,{moving:e,xpos:i,ypos:s,lastMouseX:o,lastMouseY:r})})}},e.prototype.handleDragEnter=function(t){this.stopEventDefaults(t),this.editorCanvas&&(this.editorCanvas.style.outline="1px solid purple")},e.prototype.handleDragLeave=function(t){this.stopEventDefaults(t),this.editorCanvas&&(this.editorCanvas.style.outline="none")},e.prototype.handleFileDrop=function(t){this.handleDragLeave(t),t.dataTransfer&&this.props.onFileSelected(t.dataTransfer.files[0])},e.prototype.onKeyboardHandler=function(t){var e=this;switch(t.key){case"+":return this.zoom(this.state.stepSize,128,128,!1);case"-":return this.zoom(-this.state.stepSize,128,128,!1)}var n=(t.which===Z.a.left?1:t.which===Z.a.right&&-1)||0,o=(t.which===Z.a.up?1:t.which===Z.a.down&&-1)||0,r=this.rotate(n,o,this.state.orientation),i=r.x,s=r.y;this.state.image&&this.setState(function(t,n){var o=i*t.naturalWidth/100,r=s*t.naturalHeight/100;return Object(a.l)(t,{xpos:e.keepInside(t.xpos+o,t.naturalWidth*t.absoluteScale/t.maximumScale),ypos:e.keepInside(t.ypos+r,t.naturalHeight*t.absoluteScale/t.maximumScale)})})},e}(j.Component),rt=n(991),it=n(1257),st=Object(Q.b)(function(t){var e=t.palette;return Object(J.X)({picker:t.fonts.medium,uploadHeader:t.fonts.xLarge,messageBarText:t.fonts.medium},{modal:{width:512,maxWidth:512,margin:0,selectors:{"#lpc-photo-picker .ms-Button-icon":{display:"inline-block",minWidth:16,padding:"0px 4px",backgroundColor:"transparent"},"#lpc-photo-picker .ms-Slider-slideBox:focus":{outline:"transparent"},"#lpc-photo-picker .ms-Button":{height:32,border:"none"},"#lpc-photo-picker .ms-Button--default":{marginLeft:0,backgroundColor:e.neutralLighter},"#lpc-photo-picker .ms-Button--icon &hover":{color:e.themePrimary},"#lpc-photo-picker .ms-Button--icon &active":{color:e.themeDarker},"#lpc-photo-picker .ms-Button--primary &:not([disabled])":{backgroundColor:e.themePrimary},"#lpc-photo-picker .ms-Button--primary &:hover":{backgroundColor:e.themeDarkAlt},"#lpc-photo-picker .ms-Button--primary &:active":{backgroundColor:e.themeDark},"#lpc-photo-picker .ms-Button--default .ms-Button-label":{color:e.neutralDark},"#lpc-photo-picker .ms-Button--default &:hover":{backgroundColor:e.neutralLight},"#lpc-photo-picker .ms-Button--default &:active":{backgroundColor:e.neutralTertiaryAlt}}},picker:{padding:32,overflow:"hidden"},header:{display:"flex",alignContent:"space-between"},uploadHeader:{color:e.neutralPrimary,fontWeight:300,marginBottom:7,flexGrow:1},messageBar:{margin:"7px 0"},messageBarText:{color:e.neutralPrimary},fileInput:{display:"none"},fileInputButton:{color:e.themePrimary,padding:0,margin:"0 0 12px -4px"},closeButton:{float:"right",marginTop:-20,marginRight:-20},removeButton:{marginLeft:"auto"},endActions:{alignItems:"center",display:"flex",selectors:{button:{marginRight:12,minWidth:90,padding:"0px 16px"}}}})}),lt=function(t){var e=st(t.theme),n="UNKNOWN"===t.warning,a=n?rt.a.error:rt.a.warning,o=n?void 0:t.onDismiss;return j.createElement(it.a,{className:e.messageBar,messageBarType:a,onDismiss:o,isMultiline:!0,"aria-live":"polite",role:"region"},j.createElement("div",{className:e.messageBarText},t.warningText))},pt=function(){var t=function(e,n){return(t=k.a||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function a(){this.constructor=e}t(e,n),e.prototype=null===n?I()(n):(a.prototype=n.prototype,new a)}}(),ut=function(t){function e(e){return 1/(1+Math.exp(-t*e))-.5}var n=.5/e(1);return function(t){return t<=0?0:t>1?1:n*e(2*t-1)+.5}}(5),ct=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.editCanvas=null,e.fileInput=null,e.focusTrap=null,e.primaryButton=null,e.handleOnRemoveButtonClicked=function(){e.props.onLoadedEmptyImage()},e.handleOnSaveButtonClicked=function(){switch(e.props.status){case"SUCCESS":return e.props.onDone(),e.props.onDismiss();default:if(!e.editCanvas)return;var t=e.editCanvas.getImageDataUrlFromCanvas();e.props.onStartUpload(performance.now(),t,e.props.onUpload)}},e.handleUploadAnimation=function(){"IN_PROGRESS"===e.props.status&&e.props.onUploadProgress(performance.now())},e.handleOnCancelButtonClicked=function(){e.props.onCancel(),e.props.onDismiss()},e.handleOnCloseButtonClicked=function(){e.props.onClose(),e.props.onDismiss()},e}return pt(e,t),e.prototype.render=function(){var t=this,e=st(this.props.theme),n=this.getSaveButtonText(this.props.status),a=this.getWarningText(this.props.warning),o=Object(A.b)({text:this.props.personDisplayName}),r=Object(M.a)(this.props.personDisplayName,Object(T.a)());return j.createElement(W.a,{className:"lpc_nested_popup",containerClassName:e.modal,isOpen:!0,onDismiss:this.props.onDismiss,titleAriaId:this.props.strings.uploadHeader},j.createElement(L.a,{id:"lpc-photo-picker",className:e.picker,componentRef:function(e){return t.focusTrap=e},firstFocusableSelector:e.fileInputButton},j.createElement(B.a,{className:e.closeButton,iconProps:{iconName:"Cancel"},onClick:this.handleOnCloseButtonClicked,ariaLabel:this.props.strings.cancel}),j.createElement("div",{className:e.header},j.createElement("div",{className:e.uploadHeader},this.props.strings.uploadHeader)),a&&j.createElement(lt,{theme:this.props.theme,warning:this.props.warning,status:this.props.status,warningText:a,onDismiss:this.props.onDismissInfoBar}),j.createElement("input",{role:"button",className:e.fileInput,type:"file",ref:function(e){return t.fileInput=e},onClick:function(t){return t.currentTarget.value=""},onChange:function(e){return e.currentTarget.files&&t.props.onFileSelected(e.currentTarget.files[0])},"data-log-name":"PhotoPickerFileInput",accept:"image/*"}),j.createElement(N.a,{className:e.fileInputButton,iconProps:{iconName:"Add"},onClick:function(){return t.fileInput&&t.fileInput.click()}},this.props.strings.upload),j.createElement(ot,{theme:this.props.theme,ref:function(e){return t.editCanvas=e},dataUrl:this.props.dataUrl,initials:r,textboyColor:o,progress:this.props.progress,warning:a,strings:this.props.strings,onError:this.props.onError,onFileSelected:this.props.onFileSelected,onRefocus:function(){return t.onFocusChange()},onUpdate:this.props.onImageUpdated}),j.createElement("div",{className:e.endActions},j.createElement(R.a,{disabled:!this.props.isUpdated||"IN_PROGRESS"===this.props.status,onClick:this.handleOnSaveButtonClicked,"data-log-name":"PhotoPickerOkay",componentRef:function(e){return t.primaryButton=e}},n),this.props.progress>0?null:j.createElement(_.a,{onClick:this.handleOnCancelButtonClicked,"data-log-name":"PhotoPickerCancel"},this.props.strings.cancel),this.props.isImageRemovable&&j.createElement(N.a,{className:e.removeButton,iconProps:{iconName:"Delete"},onClick:this.handleOnRemoveButtonClicked,"data-log-name":"PhotoPickerDelete"},this.props.strings.remove))))},e.prototype.componentDidMount=function(){var t=this;this.loadCurrentImage(),requestAnimationFrame(function(){return t.focusTrap&&t.focusTrap.focus()})},e.prototype.componentWillUnmount=function(){this.props.onImageEditPaneDismissed()},e.prototype.componentDidUpdate=function(t){"IN_PROGRESS"===this.props.status&&requestAnimationFrame(this.handleUploadAnimation),"IN_PROGRESS"===t.status&&"SUCCESS"===this.props.status&&this.primaryButton&&this.primaryButton.focus()},e.prototype.onFocusChange=function(){"SUCCESS"===this.props.status?this.primaryButton&&this.primaryButton.focus():this.focusTrap&&this.focusTrap.focus()},e.prototype.getSaveButtonText=function(t){switch(t){case"IN_PROGRESS":return this.props.strings.inProgress;case"SUCCESS":return this.props.strings.close;case"READY":case"SOMETHING_WENT_WRONG":return this.props.strings.apply;default:return Object(a.g)(t)}},e.prototype.getWarningText=function(t){switch(t){case"IMAGE_TOO_SMALL":return this.props.strings.imageTooSmall;case"NOT_AN_IMAGE":return this.props.strings.notAnImage;case"UNKNOWN":return this.props.strings.somethingWentWrong;case"UNSUPPORTED_BROWSER":return this.props.strings.unsupportedBrowser;default:return""}},e.prototype.loadCurrentImage=function(){var t=this,e=new Image;e.crossOrigin="Anonymous",e.onload=function(){return t.profileImageLoaded(e)},e.onerror=function(){return t.profileImageLoadFailed()},e.src=this.props.personImageUrl},e.prototype.profileImageLoaded=function(t){var e=document.createElement("canvas");e.width=t.naturalWidth,e.height=t.naturalHeight;var n=e.getContext("2d");n?(n.drawImage(t,0,0),this.props.onLoadedCurrentImage(H(e),!!this.props.isSuggestedPhoto)):this.props.onError("UNSUPPORTED_BROWSER")},e.prototype.profileImageLoadFailed=function(){this.props.onLoadedEmptyImage()},e}(j.Component);var dt=Object(O.a)(Object(z.b)(function(t,e){var n=x.getSelectors(t),o=0;switch(n.status){case"IN_PROGRESS":var r=n.uploadDuration/2e3;o=.999999*ut(r);break;case"SUCCESS":o=1;break;case"READY":case"SOMETHING_WENT_WRONG":o=0;break;default:Object(a.g)(n.status)}return{dataUrl:n.dataUrl,initialImage:n.currentImageDataUrl,warning:n.warning,status:n.status,isUpdated:n.isUpdated,progress:o}},function(t){return{onDismissInfoBar:function(){return t(C())},onError:function(e){return t(v({warning:e}))},onFileSelected:function(e){return function(t,e){var n=new FileReader,a=function(){return t(v({warning:"NOT_AN_IMAGE"}))};n.onerror=a,n.onloadend=function(){var e=document.createElement("img");e.onerror=a,e.onload=function(){return t(g({dataUrl:e.src}))},e.src=String(n.result)},n.readAsDataURL(e)}(t,e)},onCancel:function(){return t(p())},onClose:function(){return t(u())},onDone:function(){return t(c())},onImageEditPaneDismissed:function(){return t(d())},onImageUpdated:function(){return t(h())},onLoadedCurrentImage:function(e,n){return t(m({dataUrl:e,isSuggestedPhoto:n}))},onLoadedEmptyImage:function(){return t(f())},onStartUpload:function(e,n,a){return function(t,e,n,a){t(y({now:e})),a(n,function(){return t(b({dataUrl:n}))},function(){return t(v({warning:"UNKNOWN"}))})}(t,e,n,a)},onUploadProgress:function(e){return t(S({now:e}))}}})(ct)),ht=n(598),mt=n(296),ft=n(600),gt=n(761),vt=n(53),yt=function(){var t=function(e,n){return(t=k.a||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function a(){this.constructor=e}t(e,n),e.prototype=null===n?I()(n):(a.prototype=n.prototype,new a)}}(),St=function(){return(St=F.a||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},bt=!1;function Ct(){bt||(bt=!0,Object(gt.a)(void 0,{disableWarnings:!0}))}var Et=null,wt=0,xt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return yt(e,t),e.prototype.componentWillMount=function(){if(wt>=1)throw new Error("Can only mount one StandaloneProfilePhotoPicker at a time.");if(wt+=1,Ct(),null===Et){var t=Object(vt.createStore)(Object(ht.a)([x]));Et=new mt.a({reduxStore:t})}},e.prototype.componentWillUnmount=function(){wt-=1},e.prototype.render=function(){return Et?j.createElement(ft.a,{context:Et},j.createElement(dt,St({},this.props))):null},e}(j.Component);n.d(e,"ProfilePhotoPickerStore",function(){return x}),n.d(e,"ProfilePhotoPicker",function(){return dt}),n.d(e,"StandaloneProfilePhotoPicker",function(){return xt}),n.d(e,"initIcons",function(){return Ct})}}]);