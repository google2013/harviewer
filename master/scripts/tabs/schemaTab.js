/* See license.txt for terms of usage */


define(["../domplate/domplate","../domplate/tabView","../core/lib","i18n!../nls/harViewer","../core/trace"],function(e,t,a,i,r){function o(){}var c=e.CODE,n=e.PRE;return o.prototype={id:"Schema",label:i.schemaTabLabel,bodyTag:n(c("class","javascript")),onUpdateBody:function(e,t){$.ajax({url:"scripts/preview/harSchema.js",context:this,dataType:"text",success:function(e){var a=t.firstChild;a.innerHTML=e,hljs.highlightBlock(a);var i=a;a.classList.contains("hljs")&&i.setAttribute("highlighted",!0)},error:function(e,t,a){r.error("SchemaTab.onUpdateBody; ERROR ",e,t,a)}})}},o});
//# sourceMappingURL=schemaTab.js.map