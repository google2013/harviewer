/* See license.txt for terms of usage */

define(["core/url"],function(a){return{getLoadOptions:function(r){var t=a.getURLParameter("baseUrl",r);t&&"/"!==t[t.length-1]&&(t+="/");var e=a.getURLParameter("callback",r),n=a.getURLParameter("path",r),i=a.getURLParameters("path",r),l=a.getURLParameters("inputUrl",r).concat(a.getHashParameters("inputUrl",r)),o=i.map(function(a){return t?t+a:a});o=o.concat(l);var s=a.getURLParameters("har",r),c=a.getURLParameters("harp",r).concat(a.getHashParameters("harp",r));return t&&(s=s.map(function(a){return t+a}),c=c.map(function(a){return t+a})),{callbackName:e,baseUrl:t,urls:o,inputUrls:l,hars:s,harps:c,filePath:n}},run:function(a,r){var t=this.getLoadOptions(window.location.href);return t.hars.length>0||t.harps.length>0?this.loadArchives(t.hars,t.harps,t.callbackName,a,r):(t.baseUrl||t.inputUrls.length>0)&&t.urls.length>0?this.loadArchives([],t.urls,t.callbackName,a,r):t.filePath?this.loadArchives([t.filePath],[],t.callbackName,a,r):void 0},loadArchives:function(a,r,t,e,n,i){function l(){i&&i()}function o(){if(a.length+r.length===0)return void l();setTimeout(function(){h.loadArchives(a,r,t,e,n,i)},300)}a=a||[],r=r||[];var s=!1,c=a.shift();if(c||(s=!0,c=r.shift()),!c)return l(),!1;t||(t="onInputData");var h=this,u={url:c,context:this,dataType:"json",beforeSend:function(a,r){a.url=r.url},success:function(){e&&e.apply(this,arguments),o()},error:function(){n&&n.apply(this,arguments),o()}};return s&&(u.dataType="jsonp",u.jsonp="callback",u.jsonpCallback=t),this.ajax(u),!0},ajax:function(a){$.ajax(a)},load:function(a,r,t,e,n,i){function l(r){a.appendPreview&&a.appendPreview(r),n&&n.call(a,r)}function o(r,t,e){a.onLoadError&&a.onLoadError(r,t,e),i&&i.call(a,r,t,e)}var s=[],c=[];return t?c.push(r):s.push(r),this.loadArchives(s,c,e,l,o)}}});