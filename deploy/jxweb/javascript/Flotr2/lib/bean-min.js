!function(e,t,n){"undefined"!=typeof module?module.exports=n(e,t):"function"==typeof define&&"object"==typeof define.amd?define(n):t[e]=n(e,t)}("bean",this,function(e,t){var n=window,r=t[e],o=/over|out/,a=/[^\.]*(?=\..*)\.|.*/,i=/\..*/,u="addEventListener",s="attachEvent",c="removeEventListener",l="detachEvent",p=document||{},f=p.documentElement||{},h=f[u],d=h?u:s,g=Array.prototype.slice,m=/click|mouse|menu|drag|drop/i,v=/^touch|^gesture/i,y={one:1},b=function(e,t,n){for(n=0;n<t.length;n++)e[t[n]]=1;return e}({},("click dblclick mouseup mousedown contextmenu mousewheel DOMMouseScroll mouseover mouseout mousemove selectstart selectend keydown keypress keyup orientationchange focus blur change reset select submit load unload beforeunload resize move DOMContentLoaded readystatechange error abort scroll "+(h?"show input invalid touchstart touchmove touchend touchcancel gesturestart gesturechange gestureend message readystatechange pageshow pagehide popstate hashchange offline online afterprint beforeprint dragstart dragenter dragover dragleave drag drop dragend loadstart progress suspend emptied stalled loadmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate play pause ratechange volumechange cuechange checking noupdate downloading cached updateready obsolete ":"")).split(" ")),w=function(){function e(e,t){for(;null!==(t=t.parentNode);)if(t===e)return!0;return!1}function t(t){var n=t.relatedTarget;return n?n!==this&&"xul"!==n.prefix&&!/document/.test(this.toString())&&!e(this,n):null===n}return{mouseenter:{base:"mouseover",condition:t},mouseleave:{base:"mouseout",condition:t},mousewheel:{base:/Firefox/.test(navigator.userAgent)?"DOMMouseScroll":"mousewheel"}}}(),E=function(){var e="altKey attrChange attrName bubbles cancelable ctrlKey currentTarget detail eventPhase getModifierState isTrusted metaKey relatedNode relatedTarget shiftKey srcElement target timeStamp type view which".split(" "),t=e.concat("button buttons clientX clientY dataTransfer fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" ")),n=e.concat("char charCode key keyCode".split(" ")),r=e.concat("touches targetTouches changedTouches scale rotation".split(" ")),a="preventDefault",i=function(e){return function(){e[a]?e[a]():e.returnValue=!1}},u="stopPropagation",s=function(e){return function(){e[u]?e[u]():e.cancelBubble=!0}},c=function(e){return function(){e[a](),e[u](),e.stopped=!0}},l=function(e,t,n){var r,o;for(r=n.length;r--;)o=n[r],!(o in t)&&o in e&&(t[o]=e[o])};return function(h,d){var g={originalEvent:h,isNative:d};if(!h)return g;var y,b=h.type,w=h.target||h.srcElement;return g[a]=i(h),g[u]=s(h),g.stop=c(g),g.target=w&&3===w.nodeType?w.parentNode:w,d&&(-1!==b.indexOf("key")?(y=n,g.keyCode=h.which||h.keyCode):m.test(b)?(y=t,g.rightClick=3===h.which||2===h.button,g.pos={x:0,y:0},h.pageX||h.pageY?(g.clientX=h.pageX,g.clientY=h.pageY):(h.clientX||h.clientY)&&(g.clientX=h.clientX+p.body.scrollLeft+f.scrollLeft,g.clientY=h.clientY+p.body.scrollTop+f.scrollTop),o.test(b)&&(g.relatedTarget=h.relatedTarget||h[("mouseover"===b?"from":"to")+"Element"])):v.test(b)&&(y=r),l(h,g,y||e)),g}}(),T=function(e,t){return h||t||e!==p&&e!==n?e:f},k=function(){function e(e,t,n,r,o){this.element=e,this.type=t,this.handler=n,this.original=r,this.namespaces=o,this.custom=w[t],this.isNative=b[t]&&e[d],this.eventType=h||this.isNative?t:"propertychange",this.customType=!h&&!this.isNative&&t,this.target=T(e,this.isNative),this.eventSupport=this.target[d]}return e.prototype={inNamespaces:function(e){var t,n;if(!e)return!0;if(!this.namespaces)return!1;for(t=e.length;t--;)for(n=this.namespaces.length;n--;)if(e[t]===this.namespaces[n])return!0;return!1},matches:function(e,t,n){return!(this.element!==e||t&&this.original!==t||n&&this.handler!==n)}},e}(),N=function(){var e={},t=function(n,r,o,a,i){if(r&&"*"!==r){var u,s=0,c=e["$"+r],l="*"===n;if(!c)return;for(u=c.length;u>s;s++)if((l||c[s].matches(n,o,a))&&!i(c[s],c,s,r))return}else for(var p in e)"$"===p.charAt(0)&&t(n,p.substr(1),o,a,i)},n=function(t,n,r){var o,a=e["$"+n];if(a)for(o=a.length;o--;)if(a[o].matches(t,r,null))return!0;return!1},r=function(e,n,r){var o=[];return t(e,n,r,null,function(e){return o.push(e)}),o},o=function(t){return(e["$"+t.type]||(e["$"+t.type]=[])).push(t),t},a=function(n){t(n.element,n.type,null,n.handler,function(t,n,r){return n.splice(r,1),0===n.length&&delete e["$"+t.type],!1})},i=function(){var t,n=[];for(t in e)"$"===t.charAt(0)&&(n=n.concat(e[t]));return n};return{has:n,get:r,put:o,del:a,entries:i}}(),C=h?function(e,t,n,r){e[r?u:c](t,n,!1)}:function(e,t,n,r,o){o&&r&&null===e["_on"+o]&&(e["_on"+o]=0),e[r?s:l]("on"+t,n)},X=function(e,t,r){return function(o){return o=E(o||((this.ownerDocument||this.document||this).parentWindow||n).event,!0),t.apply(e,[o].concat(r))}},Y=function(e,t,r,o,a,i){return function(u){(o?o.apply(this,arguments):h?!0:u&&u.propertyName==="_on"+r||!u)&&(u&&(u=E(u||((this.ownerDocument||this.document||this).parentWindow||n).event,i)),t.apply(e,!u||a&&0!==a.length?g.call(arguments,u?0:1).concat(a):arguments))}},x=function(e,t,n,r,o){return function(){e(t,n,o),r.apply(this,arguments)}},O=function(e,t,n,r){var o,a,u,s=t&&t.replace(i,""),c=N.get(e,s,n);for(o=0,a=c.length;a>o;o++)c[o].inNamespaces(r)&&((u=c[o]).eventSupport&&C(u.target,u.eventType,u.handler,!1,u.type),N.del(u))},S=function(e,t,n,r,o){var u,s=t.replace(i,""),c=t.replace(a,"").split(".");return N.has(e,s,n)?e:("unload"===s&&(n=x(O,e,s,n,r)),w[s]&&(w[s].condition&&(n=Y(e,n,s,w[s].condition,!0)),s=w[s].base||s),u=N.put(new k(e,s,n,r,c[0]&&c)),u.handler=u.isNative?X(e,u.handler,o):Y(e,u.handler,s,!1,o,!1),u.eventSupport&&C(u.target,u.eventType,u.handler,!0,u.customType),void 0)},M=function(e,t,n){return function(r){var o,a,i="string"==typeof e?n(e,this):e;for(o=r.target;o&&o!==this;o=o.parentNode)for(a=i.length;a--;)if(i[a]===o)return t.apply(o,arguments)}},$=function(e,t,n){var r,o,u,s,c=O,l=t&&"string"==typeof t;if(l&&t.indexOf(" ")>0){for(t=t.split(" "),s=t.length;s--;)$(e,t[s],n);return e}if(o=l&&t.replace(i,""),o&&w[o]&&(o=w[o].type),!t||l)(u=l&&t.replace(a,""))&&(u=u.split(".")),c(e,o,n,u);else if("function"==typeof t)c(e,null,t);else for(r in t)t.hasOwnProperty(r)&&$(e,r,t[r]);return e},D=function(e,t,n,r,o){var a,i,u,s,c=n,l=n&&"string"==typeof n;if(t&&!n&&"object"==typeof t)for(a in t)t.hasOwnProperty(a)&&D.apply(this,[e,a,t[a]]);else for(s=arguments.length>3?g.call(arguments,3):[],i=(l?n:t).split(" "),l&&(n=M(t,c=r,o))&&(s=g.call(s,1)),this===y&&(n=x($,e,t,n,c)),u=i.length;u--;)S(e,i[u],n,c,s);return e},L=function(){return D.apply(y,arguments)},A=h?function(e,t,r){var o=p.createEvent(e?"HTMLEvents":"UIEvents");o[e?"initEvent":"initUIEvent"](t,!0,!0,n,1),r.dispatchEvent(o)}:function(e,t,n){n=T(n,e),e?n.fireEvent("on"+t,p.createEventObject()):n["_on"+t]++},K=function(e,t,n){var r,o,u,s,c,l=t.split(" ");for(r=l.length;r--;)if(t=l[r].replace(i,""),(s=l[r].replace(a,""))&&(s=s.split(".")),s||n||!e[d])for(c=N.get(e,t),n=[!1].concat(n),o=0,u=c.length;u>o;o++)c[o].inNamespaces(s)&&c[o].handler.apply(e,n);else A(b[t],t,e);return e},P=function(e,t,n){for(var r=0,o=N.get(t,n),a=o.length;a>r;r++)o[r].original&&D(e,o[r].type,o[r].original);return e},_={add:D,one:L,remove:$,clone:P,fire:K,noConflict:function(){return t[e]=r,this}};if(n[s]){var j=function(){var e,t=N.entries();for(e in t)t[e].type&&"unload"!==t[e].type&&$(t[e].element,t[e].type);n[l]("onunload",j),n.CollectGarbage&&n.CollectGarbage()};n[s]("onunload",j)}return _});