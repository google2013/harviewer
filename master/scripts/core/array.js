/* See license.txt for terms of usage */


define(["./trace"],function(r){var n={};return n.isArray=function(r){return Array.isArray(r)},n.cloneArray=function(r,n){var e=[];if(n)for(var t=0;t<r.length;++t)e.push(n(r[t]));else for(var a=0;a<r.length;++a)e.push(r[a]);return e},n.arrayInsert=function(r,n,e){for(var t=0;t<e.length;++t)r.splice(t+n,0,e[t]);return r},n.remove=function(r,n){for(var e=0;e<r.length;++e)if(r[e]===n)return r.splice(e,1),!0;return!1},n});
//# sourceMappingURL=array.js.map