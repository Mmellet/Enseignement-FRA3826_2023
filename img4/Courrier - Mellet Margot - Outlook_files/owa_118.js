self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.648.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[648],{1249:function(e,t,n){"use strict";n.d(t,"d",function(){return u}),n.d(t,"a",function(){return s}),n.d(t,"l",function(){return l}),n.d(t,"m",function(){return f}),n.d(t,"h",function(){return b}),n.d(t,"e",function(){return v}),n.d(t,"i",function(){return m}),n.d(t,"k",function(){return O}),n.d(t,"f",function(){return w}),n.d(t,"g",function(){return I}),n.d(t,"b",function(){return j}),n.d(t,"c",function(){return y}),n.d(t,"j",function(){return S});var r=n(22),a=n(1083),i=n(1901),o=n(1902),c=(n(1558),n(1758),n(853));n.d(t,"n",function(){return c.a});var d=new r.c(function(){return Promise.all([n.e(2),n.e(3),n.e(8),n.e(11),n.e(386)]).then(n.bind(null,3595))}),u=new r.a(d,function(e){return e.loadConversationReadingPane}),s=(new r.a(d,function(e){return e.reloadReadingPane}),new r.a(d,function(e){return e.applyConversationFlagInReadingPane})),l=new r.a(d,function(e){return e.updateLoadedConversation}),f=new r.a(d,function(e){return e.updateOnItemMandatoryPropertiesChange}),b=new r.a(d,function(e){return e.moveReadingPaneToTab}),v=new r.a(d,function(e){return e.loadConversationReadingPaneForSingleMailItemSelected}),m=new r.a(d,function(e){return e.print}),O=new r.a(d,function(e){return e.setItemIdToScrollTo}),w=new r.a(d,function(e){return e.loadItemReadingPane}),I=new r.a(d,function(e){return e.loadItemReadingPaneForSingleMailItemSelected}),p=new r.a(d,function(e){return e.initializeStitches});Object(r.f)(a.a,d,function(e){return e.deleteItemsStoreUpdateOrchestrator}),Object(r.f)(i.a,d,function(e){return e.markConversationsAsReadStoreUpdateOrchestrator}),Object(r.f)(o.a,d,function(e){return e.markItemsAsReadStoreUpdateOrchestrator});var j=new r.b(d,function(e){return e.getLastestNonDraftItemId}),y=new r.b(d,function(e){return e.isUnsupportedItem}),S=(new r.a(d,function(e){return e.setCalendarInlineComposeViewState}),new r.a(d,function(e){return e.replyByMeeting}));p.importAndExecute()},13854:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(755),i=n(1144),o=n(770),c=n(828),d=n(2),u=Object(d.mutatorAction)("removeSingleItemFromConversation",function(e,t){var n,i,c=o.a.tableViews.get(t),d=Object(a.A)([e.itemConversationId.Id],c);try{for(var u=Object(r.__values)(d),l=u.next();!l.done;l=u.next()){s(l.value,e,t)}}catch(e){n={error:e}}finally{try{l&&!l.done&&(i=u.return)&&i.call(u)}finally{if(n)throw n.error}}});function s(e,t,n){var r=Object(i.a)(t.itemConversationId.Id),a=Object(c.a)(e,n),o=a.itemIds.indexOf(t.itemId);o>=0&&(a.itemIds.splice(o,1),t.isRead||a.unreadCount--),(o=r.globalItemIds.indexOf(t.itemId))>=0&&(r.globalItemIds.splice(o,1),t.isRead||r.globalUnreadCount--),(o=a.draftItemIds.indexOf(t.itemId))>=0&&a.draftItemIds.splice(o,1)}var l=n(1853),f=n(929),b=n(1083),v=n(22),m=n(2944),O=Object(v.e)(b.a,"clone_deleteItemsStoreUpdate",function(e){var t,n,a=e.itemContexts[0],i=Object(l.a)(a&&a.mailboxInfo,e.parentFolderId,!0);try{for(var o=Object(r.__values)(i),c=o.next();!c.done;c=o.next()){var d=c.value;1==d.tableQuery.listViewType?w(e.itemContexts,d):0==d.tableQuery.listViewType&&I(e.itemContexts,d)}}catch(e){t={error:e}}finally{try{c&&!c.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}});function w(e,t){var n=e.map(function(e){return e.itemId}),r=Object(a.A)(n,t),i=r.filter(function(e){return t.rowKeys.indexOf(e)>=0});0!=i.length&&(Object(m.a)(i,t),p(t,r))}function I(e,t){var n,i,o,d;try{for(var s=Object(r.__values)(e),l=s.next();!l.done;l=s.next()){var f=l.value,b=Object(a.A)([f.itemConversationId.Id],t);try{for(var v=(o=void 0,Object(r.__values)(b)),O=v.next();!O.done;O=v.next()){var w=O.value,I=Object(c.a)(w,t.id);I&&(1==I.itemIds.length&&I.itemIds[0]==f.itemId?(Object(m.a)([w],t),p(t,[w])):u(f,t.id))}}catch(e){o={error:e}}finally{try{O&&!O.done&&(d=v.return)&&d.call(v)}finally{if(o)throw o.error}}}}catch(e){n={error:e}}finally{try{l&&!l.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}}function p(e,t){0!==e.tableQuery.type&&2!==e.tableQuery.type||f.a.add(t,e.serverFolderId,3)}var j=n(4293),y=n(6035),S=n(790),h=n(6036),g=Object(v.e)(S.f,"clone_mailListItemExpansionOrchestrator",function(e){var t=Object(o.b)().expandedConversationViewState,n=t.selectedNodeIds;n&&-1!=n.indexOf(e.nodeId)||S.q(t.expandedRowKey,e.nodeId,e.allNodeIds,e.tableViewId),Object(j.b)(e.contextMenuAnchor,h.a.All,y.a.MailListItemPart)}),V=n(1824),R=n(2746),P=n(842),x=n(1423),C=n(1163),T=n(934),A=n(1092),M=n(1357),F=n(1040),_=n(43);var U=Object(_.select)({tableViews:function(){return a.N.tableViews}})(function(e,t,n,r,i){var o=i.tableViews.get(t);0===o.tableQuery.type&&(f.a.add(e,o.serverFolderId,1),function(e,t){var n=e[e.length-1];if(t.selectedRowKeys.has(n)){var r=t.rowKeys.indexOf(n);r<t.rowKeys.length-1?Object(P.l)(t,t.rowKeys[r+1],!1,F.a.RowRemoval):Object(P.h)(t,F.a.Reset)}}(e,o)),Object(a.y)(e,t).forEach(function(e){i.tableViews.forEach(function(i){i.tableQuery.folderId==o.tableQuery.folderId&&Object(a.A)([e],i).forEach(function(e){(r(e,i.id,n),0===i.tableQuery.type)&&(Object(C.m)(i,2),function(e,t,n,r,a){var i,o=Object(V.a)(r,n);if(o<0)throw new Error("Row being pinned / unpinnned must exist in the list");var c=a?0:o+1;return o<(i=!a&&Object(M.e)(r,n.id)?Object(T.f)(n,c):Object(R.a)(e,t,n,c,!a))&&i--,-1==i?(Object(x.a)([r],n),!1):(A.a.updateRowPosition(i,r,n),!0)}(a.b.getLastDeliveryOrRenewTimeStamp(e,i),a.b.getLastDeliveryTimeStamp(e,i),i,e,n)||i.id!=t||f.a.add([e],o.serverFolderId,3))})})})}),k=n(2583),L=n(887),E=Object(v.e)(k.a,"clone_markConversationsAsPinnedStoreUpdate",function(e){var t=e.rowKeys,n=e.tableViewId,r=e.shouldMarkAsPinned;U(t,n,r,Q)});function Q(e,t,n){var r=Object(c.a)(e,t);if(r)if(n){var a=Object(L.d)();a&&(r.lastDeliveryOrRenewTimeStamp=a)}else r.lastDeliveryOrRenewTimeStamp=r.lastDeliveryTimeStamp}var D=n(2892),N=n(1901),K=Object(v.e)(N.a,"clone_markConversationAsReadStoreUpdate",function(e){var t=e.conversationIds,n=e.tableViewId,r=e.isReadValue,i=e.isExplicit,o=a.N.tableViews.get(n),c=Object(a.A)(t,o);Object(D.a)(c,r,o,!0),Object(a.P)(o,r,i)?(f.a.add(c,o.serverFolderId,3),Object(x.a)(c,o)):f.a.add(c,o.serverFolderId,2)}),B=n(2582),q=n(759),z=Object(v.e)(B.a,"clone_markItemsAsPinnedStoreUpdate",function(e){var t=e.rowKeys,n=e.tableViewId,r=e.shouldMarkAsPinned;U(t,n,r,H)});function H(e,t,n){var r=Object(a.F)(e,t);if(r){var i=q.H.items.get(r.clientId.Id);if(n){var o=Object(L.d)();o&&(i.ReceivedOrRenewTime=o)}else i.ReceivedOrRenewTime=i.DateTimeReceived}}var $=n(2893),G=n(1902),J=Object(v.e)(G.a,"clone_markItemsAsReadStoreUpdateOrchestrator",function(e){var t=e.itemIds,n=e.isReadValue,r=e.isExplicit,i=e.tableViewId,o=a.N.tableViews.get(i);if(o){Object($.a)(o,t,n);var c=[],d=Object(a.P)(o,n,r);1==o.tableQuery.listViewType?c=Object(a.A)(t,o):t.forEach(function(e){var t=q.H.items.get(e).ConversationId.Id,n=Object(a.A)([t],o);n.forEach(function(e){var t=Object(a.E)(e,i);d&&0!=t.unreadCount||n.push(e)})}),0!=c.length&&(d?(f.a.add(c,o.serverFolderId,3),Object(x.a)(c,o)):f.a.add(c,o.serverFolderId,2))}}),W=n(2623),X=n(888),Y=n(1249),Z=n(1292),ee=n(2519),te=n(1212),ne=n(757),re=Object(v.e)(ee.a,"clone_onListViewTypeOptionSavedOrchestrator",function(e){return Object(r.__awaiter)(void 0,void 0,void 0,function(){var t,n,a,i,o;return Object(r.__generator)(this,function(r){if(t=e.newListViewType,n=Object(X.a)().tableQuery,a=Object(te.a)(),i=a&&a.treeType,1===n.type||i===ne.c||i===ne.l)return[2];switch(o=2===n.type?Object(W.a)(n.folderId,t):Object(C.c)(n.folderId,t,n.scenarioType,n.focusedViewFilter,n.viewFilter,n.categoryName,n.sortBy,n.inboxClassificationFilter),Object(Z.d)(o),t){case 0:Y.n.itemReadingPaneViewState=null;break;case 1:Y.n.conversationReadingPaneViewState=null}return[2]})})});n.d(t,"deleteItemsStoreUpdateOrchestrator",function(){return O}),n.d(t,"mailListItemExpansionOrchestrators",function(){return g}),n.d(t,"markConversationsAsPinnedStoreUpdateOrchestrator",function(){return E}),n.d(t,"markConversationsAsReadStoreUpdateOrchestrator",function(){return K}),n.d(t,"markItemsAsPinnedStoreUpdateOrchestrator",function(){return z}),n.d(t,"markItemsAsReadStoreUpdateOrchestrator",function(){return J}),n.d(t,"onListViewTypeOptionSavedOrchestrator",function(){return re})},1558:function(e,t,n){"use strict";var r=n(853),a=n(43);t.a=Object(a.action)("setItemReadingPaneViewState")(function(e){r.a.itemReadingPaneViewState=e})},1758:function(e,t,n){"use strict";var r=n(853),a=n(43);t.a=Object(a.action)("setItemPrintPaneViewState")(function(e){r.a.itemPrintPaneViewState=e})},2623:function(e,t,n){"use strict";var r=n(755),a=n(759);function i(e,t){var n;switch(t){case 0:n=a.c;break;case 1:n=Object(a.q)()}return{categoryName:null,folderId:e,focusedViewFilter:-1,listViewType:t,viewFilter:"All",sortBy:r.c.getDefaultSortBy(),requestShapeName:n,type:2,shouldTryToUseSessionDataResponse:!1,scenarioType:"group",inboxClassificationFilter:0}}var o=n(60);function c(){var e=Object(o.a)().UserOptions.GlobalListViewTypeReact;return null==e?0:e}n.d(t,"a",function(){return i}),n.d(t,"b",function(){return c})},4293:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return o});var r=n(770),a=n(43),i=Object(a.action)("showMailItemContextMenu")(Object(a.select)({listViewStore:function(){return r.a}})(function(e,t,n,r){r.listViewStore.itemContextMenuState={anchor:e,menuType:t,menuSource:n}})),o=Object(a.action)("hideMailItemContextMenu")(Object(a.select)({listViewStore:function(){return r.a}})(function(e){e.listViewStore.itemContextMenuState=null}))},6035:function(e,t,n){"use strict";var r;!function(e){e[e.MailListItem=0]="MailListItem",e[e.MailListItemPart=1]="MailListItemPart"}(r||(r={})),t.a=r},6036:function(e,t,n){"use strict";var r;!function(e){e[e.All=0]="All",e[e.MoveTo=1]="MoveTo",e[e.Categorize=2]="Categorize"}(r||(r={})),t.a=r},853:function(e,t,n){"use strict";n.d(t,"b",function(){return i});var r=n(1059),a=n(2),i=Object(a.createStore)("readingpane",{conversationReadingPaneViewState:null,floatingActionBarViewState:{isVisible:!1,itemId:""},itemReadingPaneViewState:null,itemPreviewPaneViewState:null,itemPrintPaneViewState:null,deeplinkId:null}),o=i();r.a.registerReference(function(){return o.conversationReadingPaneViewState&&o.conversationReadingPaneViewState.conversationId.Id}),t.a=o}},0,[2,3,8,11,386,22,334,10,579,407,581,412,4,5,328,329,39,88,350,6,7,9,128,0,1,532,182,13,46,124,531,178,564,341,23,119,297,318,327,501]]);
//# sourceMappingURL=owa.648.js.map
self.scriptsLoaded['owa.648.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.648.js'] = (new Date()).getTime();