/* See license.txt for terms of usage */


define(["./array","./sniff"],function(n,t){var r={},i=Object.prototype.toString,e=/^\s*function(\s+[\w_$][\w\d_$]*)?\s*\(/;return r.isFunction=function(n){return!!n&&("[object Function]"===i.call(n)||t.isIE&&"string"!=typeof n&&e.test(String(n)))},r.extend=function(n,t){var i={};return r.append(i,n),r.append(i,t),i},r.append=function(n,t){for(var r in t)n[r]=t[r];return n},r.bind=function(){var t=n.cloneArray(arguments),r=t.shift(),i=t.shift();return function(){var e=t.concat(n.cloneArray(arguments));return r.apply(i,e)}},r.bindFixed=function(){var t=n.cloneArray(arguments),r=t.shift(),i=t.shift();return function(){return r.apply(i,t)}},r});
//# sourceMappingURL=object.js.map