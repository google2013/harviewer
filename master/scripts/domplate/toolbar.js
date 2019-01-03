/* See license.txt for terms of usage */


define(["./domplate","../core/lib","../core/trace","./popupMenu"],function(t,n,o,e){function a(){this.buttons=[]}var i=t.domplate,s=t.DIV,l=t.SPAN,r=i({tag:s({class:"toolbar",onclick:"$onClick"}),buttonTag:l({class:"$button|getClassName toolbarButton",title:"$button.tooltiptext",$text:"$button|hasLabel",onclick:"$button|getCommand"},"$button|getLabel"),dropDownTag:l({class:"$button|getClassName toolbarButton dropDown",_repObject:"$button",title:"$button.tooltiptext",$text:"$button|hasLabel",onclick:"$onDropDown"},"$button|getLabel",l({class:"arrow"})),separatorTag:l({class:"toolbarSeparator",style:"color: gray;"},"|"),hasLabel:function(t){return!!t.label},getLabel:function(t){return t.label?t.label:""},getClassName:function(t){return t.className?t.className:""},getCommand:function(t){return t.command?t.command:function(){}},onClick:function(t){var o=$.event.fix(t||window.event);n.cancelEvent(o)},onDropDown:function(t){var o=$.event.fix(t||window.event),a=o.target,i=n.getAncestorByClass(a,"toolbarButton"),s=i.repObject.items;new e({id:"toolbarContextMenu",items:s}).showPopup(i)}});return a.prototype={addButton:function(t){t.tooltiptext||(t.tooltiptext=""),this.buttons.push(t)},removeButton:function(t){for(var n=0;n<this.buttons.length;n++)if(this.buttons[n].id===t){this.buttons.splice(n,1);break}},addButtons:function(t){for(var n=0;n<t.length;n++)this.addButton(t[n])},getButton:function(t){for(var n=0;n<this.buttons.length;n++)if(this.buttons[n].id===t)return this.buttons[n]},render:function(t){if(this.buttons.length){this.element&&(t=this.element.parentNode),this.element=r.tag.replace({},t);for(var n=0;n<this.buttons.length;n++){var o=this.buttons[n],e=o.items?r.dropDownTag:r.buttonTag,a=o.tag?o.tag:e,i=a.append({button:o},this.element);o.initialize&&o.initialize(i),n<this.buttons.length-1&&r.separatorTag.append({},this.element)}return this.element}}},a});
//# sourceMappingURL=toolbar.js.map