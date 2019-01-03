/* See license.txt for terms of usage */

define(["./lib","../preview/harModel"],function(e,t){function r(e){return"number"==typeof e?Math.max(0,e):0}function s(e){this.model=e}var i={"text/javascript":1,"text/jscript":1,"application/javascript":1,"application/x-javascript":1,"text/js":1},n={"text/plain":1,"text/html":1},o={"text/css":1},a={"image/png":1,"image/jpeg":1,"image/gif":1},c={"application/x-shockwave-flash":1};return s.prototype={forEachPageEntries:function(e,t){for(var r=0;r<e.length;r++){var s=e[r];t(s?this.model.getPageEntries(s):this.model.getAllEntries(),s,e)}},calcTimingsTotalsForEntries:function(t,s){if(!e.isArray(t))throw new Error("entries must be an array");s=s||{blocked:0,dns:0,ssl:0,connect:0,send:0,wait:0,receive:0};for(var i=0;i<t.length;i++){var n=t[i];n.timings&&(s.blocked+=r(n.timings.blocked),s.dns+=r(n.timings.dns),s.ssl+=r(n.timings.ssl),s.connect+=r(n.timings.connect),s.send+=r(n.timings.send),s.wait+=r(n.timings.wait),s.receive+=r(n.timings.receive),n.timings.ssl>0&&(s.ssl-=n.timings.ssl))}return s},calcTimingsTotalsForPages:function(e){var t,r=this;return this.forEachPageEntries(e,function(e){t=r.calcTimingsTotalsForEntries(e,t)}),t},calcContentTotalsForEntries:function(t,s){if(!e.isArray(t))throw new Error("entries must be an array");s=s||{html:{resBodySize:0,count:0},js:{resBodySize:0,count:0},css:{resBodySize:0,count:0},image:{resBodySize:0,count:0},flash:{resBodySize:0,count:0},other:{resBodySize:0,count:0}};for(var l=0;l<t.length;l++){var d=t[l];if(d.timings){var u=d.response,h=r(u.bodySize),f=u.content.mimeType,g=f?f.match(/^([^;]+)/)[1]:null;f=g||u.content.mimeType,n[f]?(s.html.resBodySize+=h,s.html.count++):i[f]?(s.js.resBodySize+=h,s.js.count++):o[f]?(s.css.resBodySize+=h,s.css.count++):a[f]?(s.image.resBodySize+=h,s.image.count++):c[f]?(s.flash.resBodySize+=h,s.flash.count++):(s.other.resBodySize+=h,s.other.count++)}}return s},calcContentTotalsForPages:function(e){var t,r=this;return this.forEachPageEntries(e,function(e){t=r.calcContentTotalsForEntries(e,t)}),t},calcTrafficTotalsForEntries:function(t,s){if(!e.isArray(t))throw new Error("entries must be an array");s=s||{request:{headersSize:0,bodySize:0},response:{headersSize:0,bodySize:0}};for(var i=0;i<t.length;i++){var n=t[i];if(n.timings){var o=n.response;s.request.headersSize+=r(n.request.headersSize),s.request.bodySize+=r(n.request.bodySize),s.response.headersSize+=r(n.response.headersSize),s.response.bodySize+=r(o.bodySize)}}return s},calcTrafficTotalsForPages:function(e){var t,r=this;return this.forEachPageEntries(e,function(e){t=r.calcTrafficTotalsForEntries(e,t)}),t},calcCacheTotalsForEntries:function(s,i){if(!e.isArray(s))throw new Error("entries must be an array");i=i||{partial:{count:0,resBodySize:0},cached:{count:0,resBodySize:0},downloaded:{count:0,resBodySize:0}};for(var n=0;n<s.length;n++){var o=s[n],a=o.response,c=r(a.bodySize);if(206===o.response.status)i.partial.resBodySize+=c,i.partial.count++;else if(t.isCachedEntry(o)){var l=t.getEntryUncompressedSize(o);i.cached.resBodySize+=l,i.cached.count++}else c>0&&(i.downloaded.resBodySize+=c,i.downloaded.count++)}return i},calcCacheTotalsForPages:function(e){var t,r=this;return this.forEachPageEntries(e,function(e){t=r.calcCacheTotalsForEntries(e,t)}),t}},s});