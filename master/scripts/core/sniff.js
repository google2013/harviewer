/* See license.txt for terms of usage */


define(["./trace"],function(e){var t={},i="undefined"!=typeof navigator,r="undefined"!=typeof window,o=i?navigator.userAgent.toLowerCase():"";return t.isFirefox=/firefox/.test(o),t.isOpera=/opera/.test(o),t.isWebkit=/webkit/.test(o),t.isSafari=/webkit/.test(o),t.isIE=/msie/.test(o)&&!/opera/.test(o),t.isIE6=i&&/msie 6/i.test(navigator.appVersion),t.browserVersion=(o.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],t.isIElt8=t.isIE&&t.browserVersion-0<8,t.supportsSelectElementText=r&&(window.getSelection&&window.document.createRange||window.document.body.createTextRange),t});
//# sourceMappingURL=sniff.js.map