/* See license.txt for terms of usage */

define(["../core/lib","./jsonSchema","./ref","./harSchema","../core/cookies","../core/trace","i18n!../nls/harModel"],function(e,t,r,n,i,o,s){function a(){this.input=null}function u(e,t){return"number"==typeof e?e:"number"==typeof t?t:-1}function p(){var e={};for(var t in this)"toJSON"!==t&&(e[t]=this[t]);return this.text?(e.text=Array.prototype.map.call(this.text,function(e){var t=e.charCodeAt(0);if(t>=32&&t<127||10===t||13===t)return e.charAt(0);for(var r=t.toString(16).toUpperCase();r.length<4;)r="0"+r;return"\\u"+r}).join(""),e):e}return a.prototype={append:function(t){function r(t){t.sort(function(t,r){return e.parseISO8601(t.startedDateTime)-e.parseISO8601(r.startedDateTime)})}if(!t)return void o.error("HarModel.append; Trying to append null input!");if(t.log.pages&&r(t.log.pages),t.log.entries&&r(t.log.entries),this.input){if(!t.log.pages)return o.error("Import of additional data without a page is not yet supported."),null;for(var n=0;n<t.log.pages.length;n++)this.importPage(t.log.pages[n],t.log.entries)}else this.input=e.cloneJSON(t);return this.input},getPages:function(){return this.input&&this.input.log.pages?this.input.log.pages:[]},getFirstPage:function(){var e=this.getPages();return e.length>0?e[0]:null},getPageEntries:function(e){return a.getPageEntries(this.input,e)},getAllEntries:function(e){return this.input?this.input.log.entries:[]},getParentPage:function(e){return a.getParentPage(this.input,e)},importPage:function(e,t){var r=this.getUniquePageID(e.id),n=e.id;e.id=r,this.input.log.pages.push(e);for(var i=0;i<t.length;i++){var o=t[i];o.pageref===n&&(o.pageref=r,this.input.log.entries.push(o))}},getUniquePageID:function(e){for(var t=this.input.log.pages,r={},n=0;n<t.length;n++)r[t[n].id]=!0;if(!r[e])return e;for(var i=1;;){var o=e+i;if(!r[o])return o;i++}},toJSON:function(e){if(e||(e=this.input),!e)return"";for(var t=this.input.log.entries,r=0;r<t.length;r++){var n=t[r];n.response.content.text&&(n.response.content.toJSON=p)}return JSON.stringify(this.input,null,"\t").replace(/\\\\u/g,"\\u")}},a.parse=function(e,i){var s=e;try{"string"==typeof e&&(s=jQuery.parseJSON(e))}catch(e){throw o.exception("HarModel.parse; EXCEPTION",e),{errors:[{message:"Failed to parse JSON",property:"JSON evaluation"}]}}if(!i)return s;var a=r.resolveJson(n),u=t.validate(s,a.logType);if(u.valid)return this.validateRequestTimings(s),s;throw u},a.getPageEntries=function(e,t){var r=[],n=e.log.entries;if(!n)return r;for(var i=0;i<n.length;i++){var o=n[i];o.pageref||t||r.push(o),t&&o.pageref===t.id&&r.push(o)}return r},a.getParentPage=function(e,t){var r=e.log.pages;if(!r)return null;for(var n=0;n<r.length;n++)if(r[n].id===t.pageref)return r[n];return null},a.validateRequestTimings=function(t){for(var r=[],n=t.log.entries,i=0;i<n.length;i++){var o=n[i],a=o.timings;if(a.blocked<-1||a.connect<-1||a.dns<-1||a.receive<-1||a.send<-1||a.wait<-1){var u=e.formatString(s.validationNegativeTimeError,o.request.url,i,o.pageref);r.push({input:t,file:o,message:u,property:s.validationType})}}if(r.length)throw{errors:r,input:t}},a.isCachedEntry=function(e){return 304===e.response.status||!(u(e.response._transferSize)>0)&&(0===Math.max(0,e.response.bodySize)&&e.response.content&&e.response.content.size>0)},a.getEntrySize=function(e){return a.getEntryTransferredSize(e)},a.getEntryUncompressedSize=function(e){var t=u(e.response.content.size);if(t>-1)return t;var r=u(e.response._transferSize);if(r>-1)return r;var n=u(e.response.bodySize);return n>-1?n:-1},a.getEntryTransferredSize=function(e){var t=u(e.response._transferSize);if(t>-1)return t;var r=u(e.response.bodySize);return r>-1?r:-1},a});