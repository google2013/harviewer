/**
 * @license i18n 2.0.6 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/i18n/LICENSE
 */


!function(){"use strict";function o(o,n,e,a,t,r){n[o]&&(e.push(o),!0!==n[o]&&1!==n[o]||a.push(t+o+"/"+r))}function n(o,n,e,a,t){var r=a+n+"/"+t;require._fileExists(o.toUrl(r+".js"))&&e.push(r)}function e(o,n,a){var t;for(t in n)!n.hasOwnProperty(t)||o.hasOwnProperty(t)&&!a?"object"==typeof n[t]&&(!o[t]&&n[t]&&(o[t]={}),e(o[t],n[t],a)):o[t]=n[t]}var a=/(^.*(^|\/)nls(\/|$))([^\/]*)\/?([^\/]*)/;define(["module"],function(t){var r=t.config?t.config():{};return{version:"2.0.6",load:function(t,i,l,u){u=u||{},u.locale&&(r.locale=u.locale);var f,s,c,g=a.exec(t),v=g[1],p=g[4],h=g[5],d=p.split("-"),y=[],w={},j="";if(g[5]?(v=g[1],f=v+h):(f=t,h=g[4],p=r.locale,p||(p=r.locale="undefined"==typeof navigator?"root":(navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage||"root").toLowerCase()),d=p.split("-")),u.isBuild){for(y.push(f),n(i,"root",y,v,h),s=0;s<d.length;s++)c=d[s],j+=(j?"-":"")+c,n(i,j,y,v,h);i(y,function(){l()})}else i([f],function(n){var a,t=[];for(o("root",n,t,y,v,h),s=0;s<d.length;s++)a=d[s],j+=(j?"-":"")+a,o(j,n,t,y,v,h);i(y,function(){var o,a,r;for(o=t.length-1;o>-1&&t[o];o--)r=t[o],a=n[r],!0!==a&&1!==a||(a=i(v+r+"/"+h)),e(w,a);l(w)})})}}})}();
//# sourceMappingURL=i18n.js.map