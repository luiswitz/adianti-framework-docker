

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js from "lib/jquery/jquery-plugins.txt" begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


/* Merging order :

- lib/jquery/jquery.scrollto.min.js
- lib/jquery/jquery.blockUI.min.js
- lib/jquery/jquery.editinplace.min.js
- lib/jquery/jquery.autocomplete.min.js
- lib/jquery/jquery.imask.min.js
- lib/jquery/jquery.treeview.min.js
- lib/jquery/jquery.dataTables.min.js
- lib/jquery/dataTables.responsive.min.js
- lib/jquery/select2.js
- lib/jquery/moment.min.js
- lib/jquery/fullcalendar.js

*/


/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: lib/jquery/jquery.scrollto.min.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: lib/jquery/jquery.blockUI.min.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


!function(){"use strict";function a(a){function i(e,i){var k,m,q=e==window,r=i&&void 0!==i.message?i.message:void 0;if(i=a.extend({},a.blockUI.defaults,i||{}),!i.ignoreIfBlocked||!a(e).data("blockUI.isBlocked")){if(i.overlayCSS=a.extend({},a.blockUI.defaults.overlayCSS,i.overlayCSS||{}),k=a.extend({},a.blockUI.defaults.css,i.css||{}),i.onOverlayClick&&(i.overlayCSS.cursor="pointer"),m=a.extend({},a.blockUI.defaults.themedCSS,i.themedCSS||{}),r=void 0===r?i.message:r,q&&g&&j(window,{fadeOut:0}),r&&"string"!=typeof r&&(r.parentNode||r.jquery)){var s=r.jquery?r[0]:r,t={};a(e).data("blockUI.history",t),t.el=s,t.parent=s.parentNode,t.display=s.style.display,t.position=s.style.position,t.parent&&t.parent.removeChild(s)}a(e).data("blockUI.onUnblock",i.onUnblock);var v,w,x,y,u=i.baseZ;v=c||i.forceIframe?a('<iframe class="blockUI" style="z-index:'+u++ +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+i.iframeSrc+'"></iframe>'):a('<div class="blockUI" style="display:none"></div>'),w=i.theme?a('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+u++ +';display:none"></div>'):a('<div class="blockUI blockOverlay" style="z-index:'+u++ +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),i.theme&&q?(y='<div class="blockUI '+i.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(u+10)+';display:none;position:fixed">',i.title&&(y+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(i.title||"&nbsp;")+"</div>"),y+='<div class="ui-widget-content ui-dialog-content"></div>',y+="</div>"):i.theme?(y='<div class="blockUI '+i.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(u+10)+';display:none;position:absolute">',i.title&&(y+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(i.title||"&nbsp;")+"</div>"),y+='<div class="ui-widget-content ui-dialog-content"></div>',y+="</div>"):y=q?'<div class="blockUI '+i.blockMsgClass+' blockPage" style="z-index:'+(u+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+i.blockMsgClass+' blockElement" style="z-index:'+(u+10)+';display:none;position:absolute"></div>',x=a(y),r&&(i.theme?(x.css(m),x.addClass("ui-widget-content")):x.css(k)),i.theme||w.css(i.overlayCSS),w.css("position",q?"fixed":"absolute"),(c||i.forceIframe)&&v.css("opacity",0);var z=[v,w,x],A=q?a("body"):a(e);a.each(z,function(){this.appendTo(A)}),i.theme&&i.draggable&&a.fn.draggable&&x.draggable({handle:".ui-dialog-titlebar",cancel:"li"});var B=f&&(!a.support.boxModel||a("object,embed",q?null:e).length>0);if(d||B){if(q&&i.allowBodyStretch&&a.support.boxModel&&a("html,body").css("height","100%"),(d||!a.support.boxModel)&&!q)var C=p(e,"borderTopWidth"),D=p(e,"borderLeftWidth"),E=C?"(0 - "+C+")":0,F=D?"(0 - "+D+")":0;a.each(z,function(a,b){var c=b[0].style;if(c.position="absolute",2>a)q?c.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+i.quirksmodeOffsetHack+') + "px"'):c.setExpression("height",'this.parentNode.offsetHeight + "px"'),q?c.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):c.setExpression("width",'this.parentNode.offsetWidth + "px"'),F&&c.setExpression("left",F),E&&c.setExpression("top",E);else if(i.centerY)q&&c.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),c.marginTop=0;else if(!i.centerY&&q){var d=i.css&&i.css.top?parseInt(i.css.top,10):0,e="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+d+') + "px"';c.setExpression("top",e)}})}if(r&&(i.theme?x.find(".ui-widget-content").append(r):x.append(r),(r.jquery||r.nodeType)&&a(r).show()),(c||i.forceIframe)&&i.showOverlay&&v.show(),i.fadeIn){var G=i.onBlock?i.onBlock:b,H=i.showOverlay&&!r?G:b,I=r?G:b;i.showOverlay&&w._fadeIn(i.fadeIn,H),r&&x._fadeIn(i.fadeIn,I)}else i.showOverlay&&w.show(),r&&x.show(),i.onBlock&&i.onBlock();if(l(1,e,i),q?(g=x[0],h=a(i.focusableElements,g),i.focusInput&&setTimeout(n,20)):o(x[0],i.centerX,i.centerY),i.timeout){var J=setTimeout(function(){q?a.unblockUI(i):a(e).unblock(i)},i.timeout);a(e).data("blockUI.timeout",J)}}}function j(b,c){var d,e=b==window,f=a(b),i=f.data("blockUI.history"),j=f.data("blockUI.timeout");j&&(clearTimeout(j),f.removeData("blockUI.timeout")),c=a.extend({},a.blockUI.defaults,c||{}),l(0,b,c),null===c.onUnblock&&(c.onUnblock=f.data("blockUI.onUnblock"),f.removeData("blockUI.onUnblock"));var m;m=e?a("body").children().filter(".blockUI").add("body > .blockUI"):f.find(">.blockUI"),c.cursorReset&&(m.length>1&&(m[1].style.cursor=c.cursorReset),m.length>2&&(m[2].style.cursor=c.cursorReset)),e&&(g=h=null),c.fadeOut?(d=m.length,m.stop().fadeOut(c.fadeOut,function(){0===--d&&k(m,i,c,b)})):k(m,i,c,b)}function k(b,c,d,e){var f=a(e);if(!f.data("blockUI.isBlocked")){b.each(function(){this.parentNode&&this.parentNode.removeChild(this)}),c&&c.el&&(c.el.style.display=c.display,c.el.style.position=c.position,c.parent&&c.parent.appendChild(c.el),f.removeData("blockUI.history")),f.data("blockUI.static")&&f.css("position","static"),"function"==typeof d.onUnblock&&d.onUnblock(e,d);var g=a(document.body),h=g.width(),i=g[0].style.width;g.width(h-1).width(h),g[0].style.width=i}}function l(b,c,d){var e=c==window,f=a(c);if((b||(!e||g)&&(e||f.data("blockUI.isBlocked")))&&(f.data("blockUI.isBlocked",b),e&&d.bindEvents&&(!b||d.showOverlay))){var h="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";b?a(document).bind(h,d,m):a(document).unbind(h,m)}}function m(b){if("keydown"===b.type&&b.keyCode&&9==b.keyCode&&g&&b.data.constrainTabKey){var c=h,d=!b.shiftKey&&b.target===c[c.length-1],e=b.shiftKey&&b.target===c[0];if(d||e)return setTimeout(function(){n(e)},10),!1}var f=b.data,i=a(b.target);return i.hasClass("blockOverlay")&&f.onOverlayClick&&f.onOverlayClick(b),i.parents("div."+f.blockMsgClass).length>0?!0:0===i.parents().children().filter("div.blockUI").length}function n(a){if(h){var b=h[a===!0?h.length-1:0];b&&b.focus()}}function o(a,b,c){var d=a.parentNode,e=a.style,f=(d.offsetWidth-a.offsetWidth)/2-p(d,"borderLeftWidth"),g=(d.offsetHeight-a.offsetHeight)/2-p(d,"borderTopWidth");b&&(e.left=f>0?f+"px":"0"),c&&(e.top=g>0?g+"px":"0")}function p(b,c){return parseInt(a.css(b,c),10)||0}a.fn._fadeIn=a.fn.fadeIn;var b=a.noop||function(){},c=/MSIE/.test(navigator.userAgent),d=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent);document.documentMode||0;var f=a.isFunction(document.createElement("div").style.setExpression);a.blockUI=function(a){i(window,a)},a.unblockUI=function(a){j(window,a)},a.growlUI=function(b,c,d,e){var f=a('<div class="growlUI"></div>');b&&f.append("<h1>"+b+"</h1>"),c&&f.append("<h2>"+c+"</h2>"),void 0===d&&(d=3e3);var g=function(b){b=b||{},a.blockUI({message:f,fadeIn:"undefined"!=typeof b.fadeIn?b.fadeIn:700,fadeOut:"undefined"!=typeof b.fadeOut?b.fadeOut:1e3,timeout:"undefined"!=typeof b.timeout?b.timeout:d,centerY:!1,showOverlay:!1,onUnblock:e,css:a.blockUI.defaults.growlCSS})};g(),f.css("opacity"),f.mouseover(function(){g({fadeIn:0,timeout:3e4});var b=a(".blockMsg");b.stop(),b.fadeTo(300,1)}).mouseout(function(){a(".blockMsg").fadeOut(1e3)})},a.fn.block=function(b){if(this[0]===window)return a.blockUI(b),this;var c=a.extend({},a.blockUI.defaults,b||{});return this.each(function(){var b=a(this);c.ignoreIfBlocked&&b.data("blockUI.isBlocked")||b.unblock({fadeOut:0})}),this.each(function(){"static"==a.css(this,"position")&&(this.style.position="relative",a(this).data("blockUI.static",!0)),this.style.zoom=1,i(this,b)})},a.fn.unblock=function(b){return this[0]===window?(a.unblockUI(b),this):this.each(function(){j(this,b)})},a.blockUI.version=2.66,a.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var g=null,h=[]}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],a):a(jQuery)}();

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: lib/jquery/jquery.editinplace.min.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


!function(a){function c(a,b){this.settings=a,this.dom=b,this.originalValue=null,this.didInsertDefaultText=!1,this.shouldDelayReinit=!1}function d(a){if(!a.url&&!a.callback)throw new Error("Need to set either url: or callback: option for the inline editor to work.")}function e(a){if(""!==a){var b=new Image;b.src=a}}function f(a){return a.replace(/^\s+/,"").replace(/\s+$/,"")}function g(a){return void 0===a||null===a?!1:0===a.length?!1:!0}jQuery.browser={},jQuery.browser.mozilla=/mozilla/.test(navigator.userAgent.toLowerCase())&&!/webkit/.test(navigator.userAgent.toLowerCase()),jQuery.browser.webkit=/webkit/.test(navigator.userAgent.toLowerCase()),jQuery.browser.opera=/opera/.test(navigator.userAgent.toLowerCase()),jQuery.browser.msie=/msie/.test(navigator.userAgent.toLowerCase()),a.fn.editInPlace=function(b){var f=a.extend({},a.fn.editInPlace.defaults,b);return d(f),e(f.saving_image),this.each(function(){var b=a(this);b.data("editInPlace")||(b.data("editInPlace",!0),new c(f,b).init())})},a.fn.editInPlace.defaults={url:"",bg_over:"#ffc",bg_out:"transparent",hover_class:"",show_buttons:!1,save_button:'<button class="inplace_save">Save</button>',cancel_button:'<button class="inplace_cancel">Cancel</button>',params:"",field_type:"text",default_text:"(Click here to add text)",use_html:!1,textarea_rows:10,textarea_cols:25,select_text:"Choose new value",select_options:"",text_size:null,saving_text:void 0,saving_image:"",saving_animation_color:"transparent",value_required:!1,element_id:"element_id",update_value:"update_value",original_value:"original_value",original_html:"original_html",save_if_nothing_changed:!1,on_blur:"save",cancel:"",callback:null,callback_skip_dom_reset:!1,success:null,error:null,error_sink:function(a,b){alert(b)},preinit:null,postclose:null,delegate:null},a.extend(c.prototype,{init:function(){this.setDefaultTextIfNeccessary(),this.connectOpeningEvents()},reinit:function(){this.shouldDelayReinit||(this.triggerCallback(this.settings.postclose,this.dom),this.triggerDelegateCall("didCloseEditInPlace"),this.markEditorAsInactive(),this.connectOpeningEvents())},setDefaultTextIfNeccessary:function(){""===this.dom.html()&&(this.dom.html(this.settings.default_text),this.didInsertDefaultText=!0)},connectOpeningEvents:function(){var a=this;this.dom.bind("mouseenter.editInPlace",function(){a.addHoverEffect()}).bind("mouseleave.editInPlace",function(){a.removeHoverEffect()}).bind("click.editInPlace",function(b){a.openEditor(b)})},disconnectOpeningEvents:function(){this.dom.unbind(".editInPlace")},addHoverEffect:function(){this.settings.hover_class?this.dom.addClass(this.settings.hover_class):this.dom.css("background-color",this.settings.bg_over)},removeHoverEffect:function(){this.settings.hover_class?this.dom.removeClass(this.settings.hover_class):this.dom.css("background-color",this.settings.bg_out)},openEditor:function(a){this.shouldOpenEditor(a)&&(this.disconnectOpeningEvents(),this.removeHoverEffect(),this.removeInsertedDefaultTextIfNeccessary(),this.saveOriginalValue(),this.markEditorAsActive(),this.replaceContentWithEditor(),this.setInitialValue(),this.workAroundMissingBlurBug(),this.connectClosingEventsToEditor(),this.triggerDelegateCall("didOpenEditInPlace"))},shouldOpenEditor:function(a){return this.isClickedObjectCancelled(a.target)?!1:!1===this.triggerCallback(this.settings.preinit,this.dom)?!1:!1===this.triggerDelegateCall("shouldOpenEditInPlace",!0,a)?!1:!0},removeInsertedDefaultTextIfNeccessary:function(){this.didInsertDefaultText&&this.dom.html()===this.settings.default_text&&(this.dom.html(""),this.didInsertDefaultText=!1)},isClickedObjectCancelled:function(b){if(!this.settings.cancel)return!1;var c=a(b).parents().andSelf(),d=c.filter(this.settings.cancel);return 0!==d.length},saveOriginalValue:function(){this.originalValue=this.settings.use_html?this.dom.html():f(this.dom.text())},restoreOriginalValue:function(){this.setClosedEditorContent(this.originalValue)},setClosedEditorContent:function(a){this.settings.use_html?this.dom.html(a):this.dom.text(a)},workAroundMissingBlurBug:function(){var a=this.dom.find(":input");this.dom.parents(":last").find(".editInPlace-active :input").not(a).blur()},replaceContentWithEditor:function(){var a=this.settings.show_buttons?this.settings.save_button+" "+this.settings.cancel_button:"",b=this.createEditorElement();this.dom.html('<form class="inplace_form" style="display: inline; margin: 0; padding: 0;"></form>').find("form").append(b).append(a)},createEditorElement:function(){if(-1===a.inArray(this.settings.field_type,["text","textarea","select"]))throw"Unknown field_type <fnord>, supported are 'text', 'textarea' and 'select'";var b=null;return"select"===this.settings.field_type?b=this.createSelectEditor():"text"===this.settings.field_type?b=a('<input type="text" '+this.inputNameAndClass()+' size="'+this.settings.text_size+'" />'):"textarea"===this.settings.field_type&&(b=a("<textarea "+this.inputNameAndClass()+' rows="'+this.settings.textarea_rows+'" '+' cols="'+this.settings.textarea_cols+'" />')),b},setInitialValue:function(){var a=this.triggerDelegateCall("willOpenEditInPlace",this.originalValue),b=this.dom.find(":input");b.val(a),b.val()!==a&&b.val("")},inputNameAndClass:function(){return' name="inplace_value" class="inplace_field" '},createSelectEditor:function(){var b=a("<select"+this.inputNameAndClass()+">"+'<option disabled="true" value="">'+this.settings.select_text+"</option>"+"</select>"),c=this.settings.select_options;a.isArray(c)||(c=c.split(","));for(var d=0;d<c.length;d++){var e=c[d];a.isArray(e)||(e=e.split(":"));var g=f(e[1]||e[0]),h=f(e[0]),i=a("<option>").val(g).text(h);b.append(i)}return b},connectClosingEventsToEditor:function(){function c(a){return b.handleCancelEditor(a),!1}function d(a){return b.handleSaveEditor(a),!1}var b=this,e=this.dom.find("form");e.find(".inplace_field").focus().select(),e.find(".inplace_cancel").click(c),e.find(".inplace_save").click(d),this.settings.show_buttons||("save"===this.settings.on_blur?e.find(".inplace_field").blur(d):e.find(".inplace_field").blur(c),(a.browser.mozilla||a.browser.msie)&&this.bindSubmitOnEnterInInput()),e.keyup(function(a){var b=27;return b===a.which?c():void 0}),a.browser.safari&&this.bindSubmitOnEnterInInput(),e.submit(d)},bindSubmitOnEnterInInput:function(){if("textarea"!==this.settings.field_type){var a=this;this.dom.find(":input").keyup(function(b){var c=13;return c===b.which?a.dom.find("form").submit():void 0})}},handleCancelEditor:function(a){if(!1!==this.triggerDelegateCall("shouldCloseEditInPlace",!0,a)){var b=this.dom.find(":input").val();b=this.triggerDelegateCall("willCloseEditInPlace",b),this.restoreOriginalValue(),this.reinit()}},handleSaveEditor:function(a){if(!1!==this.triggerDelegateCall("shouldCloseEditInPlace",!0,a)){var b=this.dom.find(":input").val();if(b=this.triggerDelegateCall("willCloseEditInPlace",b),this.isDisabledDefaultSelectChoice()||this.isUnchangedInput(b))return this.handleCancelEditor(a),void 0;if(this.didForgetRequiredText(b))return this.handleCancelEditor(a),this.reportError("Error: You must enter a value to save this field"),void 0;this.showSaving(b),this.settings.callback?this.handleSubmitToCallback(b):this.handleSubmitToServer(b)}},didForgetRequiredText:function(a){return this.settings.value_required&&(""===a||void 0===a||null===a)},isDisabledDefaultSelectChoice:function(){return this.dom.find("option").eq(0).is(":selected:disabled")},isUnchangedInput:function(a){return!this.settings.save_if_nothing_changed&&this.originalValue===a},showSaving:function(b){if(!this.settings.callback||!this.settings.callback_skip_dom_reset){var c=b;g(this.settings.saving_text)&&(c=this.settings.saving_text),g(this.settings.saving_image)&&(c=a("<img />").attr("src",this.settings.saving_image).attr("alt",c)),this.dom.html(c)}},handleSubmitToCallback:function(a){this.enableOrDisableAnimationCallbacks(!0,!1);var b=this.triggerCallback(this.settings.callback,this.id(),a,this.originalValue,this.settings.params,this.savingAnimationCallbacks());this.settings.callback_skip_dom_reset||(void 0===b?(this.reportError("Error: Failed to save value: "+a),this.restoreOriginalValue()):this.dom.html(b)),this.didCallNoCallbacks()&&(this.enableOrDisableAnimationCallbacks(!1,!1),this.reinit())},handleSubmitToServer:function(b){var c=this.settings.update_value+"="+encodeURIComponent(b)+"&"+this.settings.element_id+"="+this.dom.attr("id")+(this.settings.params?"&"+this.settings.params:"")+"&"+this.settings.original_html+"="+encodeURIComponent(this.originalValue)+"&"+this.settings.original_value+"="+encodeURIComponent(this.originalValue);this.enableOrDisableAnimationCallbacks(!0,!1),this.didStartSaving();var d=this;a.ajax({url:d.settings.url,type:"POST",data:c,dataType:"html",complete:function(){d.didEndSaving()},success:function(a){var b=a||d.settings.default_text;d.dom.html(b),d.triggerCallback(d.settings.success,a)},error:function(a){d.dom.html(d.originalHTML),d.settings.error?d.triggerCallback(d.settings.error,a):d.reportError("Failed to save value: "+a.responseText||"Unspecified Error")}})},triggerCallback:function(a){if(a){var b=Array.prototype.slice.call(arguments,1);return a.apply(this.dom[0],b)}},triggerDelegateCall:function(b,c,d){if(!this.settings.delegate||!a.isFunction(this.settings.delegate[b]))return c;var e=this.settings.delegate[b](this.dom,this.settings,d);return void 0===e?c:e},reportError:function(a){this.triggerCallback(this.settings.error_sink,this.id(),a)},id:function(){return this.dom.attr("id")},markEditorAsActive:function(){this.dom.addClass("editInPlace-active")},markEditorAsInactive:function(){this.dom.removeClass("editInPlace-active")},savingAnimationCallbacks:function(){var a=this;return{didStartSaving:function(){a.didStartSaving()},didEndSaving:function(){a.didEndSaving()}}},enableOrDisableAnimationCallbacks:function(a,b){this.didStartSaving.enabled=a,this.didEndSaving.enabled=b},didCallNoCallbacks:function(){return this.didStartSaving.enabled&&!this.didEndSaving.enabled},assertCanCall:function(a){if(!this[a].enabled)throw new Error("Cannot call "+a+" now. See documentation for details.")},didStartSaving:function(){this.assertCanCall("didStartSaving"),this.shouldDelayReinit=!0,this.enableOrDisableAnimationCallbacks(!1,!0),this.startSavingAnimation()},didEndSaving:function(){this.assertCanCall("didEndSaving"),this.shouldDelayReinit=!1,this.enableOrDisableAnimationCallbacks(!1,!1),this.reinit(),this.stopSavingAnimation()},startSavingAnimation:function(){var a=this;this.dom.animate({backgroundColor:this.settings.saving_animation_color},400).animate({backgroundColor:"transparent"},400,"swing",function(){setTimeout(function(){a.startSavingAnimation()},10)})},stopSavingAnimation:function(){this.dom.stop(!0).css({backgroundColor:""})},missingCommaErrorPreventer:""})}(jQuery);

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: lib/jquery/jquery.autocomplete.min.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


/**
*  Ajax Autocomplete for jQuery, version 1.2.14
*  (c) 2014 Tomas Kirda
*
*  Ajax Autocomplete for jQuery is freely distributable under the terms of an MIT-style license.
*  For details, see the web site: https://github.com/devbridge/jQuery-Autocomplete
*/
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports&&"function"==typeof require?require("jquery"):jQuery)}(function(a){"use strict";function b(c,d){var e=function(){},f=this,g={ajaxSettings:{},autoSelectFirst:!1,appendTo:document.body,serviceUrl:null,lookup:null,onSelect:null,width:"auto",minChars:1,maxHeight:300,deferRequestBy:0,params:{},formatResult:b.formatResult,delimiter:null,zIndex:9999,type:"GET",noCache:!1,onSearchStart:e,onSearchComplete:e,onSearchError:e,containerClass:"autocomplete-suggestions",tabDisabled:!1,dataType:"text",currentRequest:null,triggerSelectOnValidInput:!0,preventBadQueries:!0,lookupFilter:function(a,b,c){return-1!==a.value.toLowerCase().indexOf(c)},paramName:"query",transformResult:function(b){return"string"==typeof b?a.parseJSON(b):b},showNoSuggestionNotice:!1,noSuggestionNotice:"No results",orientation:"bottom",forceFixPosition:!1};f.element=c,f.el=a(c),f.suggestions=[],f.badQueries=[],f.selectedIndex=-1,f.currentValue=f.element.value,f.intervalId=0,f.cachedResponse={},f.onChangeInterval=null,f.onChange=null,f.isLocal=!1,f.suggestionsContainer=null,f.noSuggestionsContainer=null,f.options=a.extend({},g,d),f.classes={selected:"autocomplete-selected",suggestion:"autocomplete-suggestion"},f.hint=null,f.hintValue="",f.selection=null,f.initialize(),f.setOptions(d)}var c=function(){return{escapeRegExChars:function(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},createNode:function(a){var b=document.createElement("div");return b.className=a,b.style.position="absolute",b.style.display="none",b}}}(),d={ESC:27,TAB:9,RETURN:13,LEFT:37,UP:38,RIGHT:39,DOWN:40};b.utils=c,a.Autocomplete=b,b.formatResult=function(a,b){var d="("+c.escapeRegExChars(b)+")";return a.value.replace(new RegExp(d,"gi"),"<strong>$1</strong>")},b.prototype={killerFn:null,initialize:function(){var c,d=this,e="."+d.classes.suggestion,f=d.classes.selected,g=d.options;d.element.setAttribute("autocomplete","off"),d.killerFn=function(b){0===a(b.target).closest("."+d.options.containerClass).length&&(d.killSuggestions(),d.disableKillerFn())},d.noSuggestionsContainer=a('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0),d.suggestionsContainer=b.utils.createNode(g.containerClass),c=a(d.suggestionsContainer),c.appendTo(g.appendTo),"auto"!==g.width&&c.width(g.width),c.on("mouseover.autocomplete",e,function(){d.activate(a(this).data("index"))}),c.on("mouseout.autocomplete",function(){d.selectedIndex=-1,c.children("."+f).removeClass(f)}),c.on("click.autocomplete",e,function(){d.select(a(this).data("index"))}),d.fixPositionCapture=function(){d.visible&&d.fixPosition()},a(window).on("resize.autocomplete",d.fixPositionCapture),d.el.on("keydown.autocomplete",function(a){d.onKeyPress(a)}),d.el.on("keyup.autocomplete",function(a){d.onKeyUp(a)}),d.el.on("blur.autocomplete",function(){d.onBlur()}),d.el.on("focus.autocomplete",function(){d.onFocus()}),d.el.on("change.autocomplete",function(a){d.onKeyUp(a)})},onFocus:function(){var a=this;a.fixPosition(),a.options.minChars<=a.el.val().length&&a.onValueChange()},onBlur:function(){this.enableKillerFn()},setOptions:function(b){var c=this,d=c.options;a.extend(d,b),c.isLocal=a.isArray(d.lookup),c.isLocal&&(d.lookup=c.verifySuggestionsFormat(d.lookup)),d.orientation=c.validateOrientation(d.orientation,"bottom"),a(c.suggestionsContainer).css({"max-height":d.maxHeight+"px",width:d.width+"px","z-index":d.zIndex})},clearCache:function(){this.cachedResponse={},this.badQueries=[]},clear:function(){this.clearCache(),this.currentValue="",this.suggestions=[]},disable:function(){var a=this;a.disabled=!0,clearInterval(a.onChangeInterval),a.currentRequest&&a.currentRequest.abort()},enable:function(){this.disabled=!1},fixPosition:function(){var b=this,c=a(b.suggestionsContainer),d=c.parent().get(0);if(d===document.body||b.options.forceFixPosition){var e=b.options.orientation,f=c.outerHeight(),g=b.el.outerHeight(),h=b.el.offset(),i={top:h.top,left:h.left};if("auto"==e){var j=a(window).height(),k=a(window).scrollTop(),l=-k+h.top-f,m=k+j-(h.top+g+f);e=Math.max(l,m)===l?"top":"bottom"}if(i.top+="top"===e?-f:g,d!==document.body){var n,o=c.css("opacity");b.visible||c.css("opacity",0).show(),n=c.offsetParent().offset(),i.top-=n.top,i.left-=n.left,b.visible||c.css("opacity",o).hide()}"auto"===b.options.width&&(i.width=b.el.outerWidth()-2+"px"),c.css(i)}},enableKillerFn:function(){var b=this;a(document).on("click.autocomplete",b.killerFn)},disableKillerFn:function(){var b=this;a(document).off("click.autocomplete",b.killerFn)},killSuggestions:function(){var a=this;a.stopKillSuggestions(),a.intervalId=window.setInterval(function(){a.hide(),a.stopKillSuggestions()},50)},stopKillSuggestions:function(){window.clearInterval(this.intervalId)},isCursorAtEnd:function(){var a,b=this,c=b.el.val().length,d=b.element.selectionStart;return"number"==typeof d?d===c:document.selection?(a=document.selection.createRange(),a.moveStart("character",-c),c===a.text.length):!0},onKeyPress:function(a){var b=this;if(!b.disabled&&!b.visible&&a.which===d.DOWN&&b.currentValue)return void b.suggest();if(!b.disabled&&b.visible){switch(a.which){case d.ESC:b.el.val(b.currentValue),b.hide();break;case d.RIGHT:if(b.hint&&b.options.onHint&&b.isCursorAtEnd()){b.selectHint();break}return;case d.TAB:if(b.hint&&b.options.onHint)return void b.selectHint();case d.RETURN:if(-1===b.selectedIndex)return void b.hide();if(b.select(b.selectedIndex),a.which===d.TAB&&b.options.tabDisabled===!1)return;break;case d.UP:b.moveUp();break;case d.DOWN:b.moveDown();break;default:return}a.stopImmediatePropagation(),a.preventDefault()}},onKeyUp:function(a){var b=this;if(!b.disabled){switch(a.which){case d.UP:case d.DOWN:return}clearInterval(b.onChangeInterval),b.currentValue!==b.el.val()&&(b.findBestHint(),b.options.deferRequestBy>0?b.onChangeInterval=setInterval(function(){b.onValueChange()},b.options.deferRequestBy):b.onValueChange())}},onValueChange:function(){var b,c=this,d=c.options,e=c.el.val(),f=c.getQuery(e);return c.selection&&c.currentValue!==f&&(c.selection=null,(d.onInvalidateSelection||a.noop).call(c.element)),clearInterval(c.onChangeInterval),c.currentValue=e,c.selectedIndex=-1,d.triggerSelectOnValidInput&&(b=c.findSuggestionIndex(f),-1!==b)?void c.select(b):void(f.length<d.minChars?c.hide():c.getSuggestions(f))},findSuggestionIndex:function(b){var c=this,d=-1,e=b.toLowerCase();return a.each(c.suggestions,function(a,b){return b.value.toLowerCase()===e?(d=a,!1):void 0}),d},getQuery:function(b){var c,d=this.options.delimiter;return d?(c=b.split(d),a.trim(c[c.length-1])):b},getSuggestionsLocal:function(b){var c,d=this,e=d.options,f=b.toLowerCase(),g=e.lookupFilter,h=parseInt(e.lookupLimit,10);return c={suggestions:a.grep(e.lookup,function(a){return g(a,b,f)})},h&&c.suggestions.length>h&&(c.suggestions=c.suggestions.slice(0,h)),c},getSuggestions:function(b){var c,d,e,f,g=this,h=g.options,i=h.serviceUrl;if(h.params[h.paramName]=b,d=h.ignoreParams?null:h.params,h.onSearchStart.call(g.element,h.params)!==!1){if(a.isFunction(g.lookup))return void g.lookup(b,function(a){g.suggestions=a.suggestions,g.suggest(),h.onSearchComplete.call(g.element,b,a.suggestions)});g.isLocal?c=g.getSuggestionsLocal(b):(a.isFunction(i)&&(i=i.call(g.element,b)),e=i+"?"+a.param(d||{}),c=g.cachedResponse[e]),c&&a.isArray(c.suggestions)?(g.suggestions=c.suggestions,g.suggest(),h.onSearchComplete.call(g.element,b,c.suggestions)):g.isBadQuery(b)?h.onSearchComplete.call(g.element,b,[]):(g.currentRequest&&g.currentRequest.abort(),f={url:i,data:d,type:h.type,dataType:h.dataType},a.extend(f,h.ajaxSettings),g.currentRequest=a.ajax(f).done(function(a){var c;g.currentRequest=null,c=h.transformResult(a),g.processResponse(c,b,e),h.onSearchComplete.call(g.element,b,c.suggestions)}).fail(function(a,c,d){h.onSearchError.call(g.element,b,a,c,d)}))}},isBadQuery:function(a){if(!this.options.preventBadQueries)return!1;for(var b=this.badQueries,c=b.length;c--;)if(0===a.indexOf(b[c]))return!0;return!1},hide:function(){var b=this;b.visible=!1,b.selectedIndex=-1,clearInterval(b.onChangeInterval),a(b.suggestionsContainer).hide(),b.signalHint(null)},suggest:function(){if(0===this.suggestions.length)return void(this.options.showNoSuggestionNotice?this.noSuggestions():this.hide());var b,c,d=this,e=d.options,f=e.groupBy,g=e.formatResult,h=d.getQuery(d.currentValue),i=d.classes.suggestion,j=d.classes.selected,k=a(d.suggestionsContainer),l=a(d.noSuggestionsContainer),m=e.beforeRender,n="",o=function(a){var c=a.data[f];return b===c?"":(b=c,'<div class="autocomplete-group"><strong>'+b+"</strong></div>")};return e.triggerSelectOnValidInput&&(c=d.findSuggestionIndex(h),-1!==c)?void d.select(c):(a.each(d.suggestions,function(a,b){f&&(n+=o(b,h,a)),n+='<div class="'+i+'" data-index="'+a+'">'+g(b,h)+"</div>"}),this.adjustContainerWidth(),l.detach(),k.html(n),a.isFunction(m)&&m.call(d.element,k),d.fixPosition(),k.show(),e.autoSelectFirst&&(d.selectedIndex=0,k.scrollTop(0),k.children().first().addClass(j)),d.visible=!0,void d.findBestHint())},noSuggestions:function(){var b=this,c=a(b.suggestionsContainer),d=a(b.noSuggestionsContainer);this.adjustContainerWidth(),d.detach(),c.empty(),c.append(d),b.fixPosition(),c.show(),b.visible=!0},adjustContainerWidth:function(){var b,c=this,d=c.options,e=a(c.suggestionsContainer);"auto"===d.width&&(b=c.el.outerWidth()-2,e.width(b>0?b:300))},findBestHint:function(){var b=this,c=b.el.val().toLowerCase(),d=null;c&&(a.each(b.suggestions,function(a,b){var e=0===b.value.toLowerCase().indexOf(c);return e&&(d=b),!e}),b.signalHint(d))},signalHint:function(b){var c="",d=this;b&&(c=d.currentValue+b.value.substr(d.currentValue.length)),d.hintValue!==c&&(d.hintValue=c,d.hint=b,(this.options.onHint||a.noop)(c))},verifySuggestionsFormat:function(b){return b.length&&"string"==typeof b[0]?a.map(b,function(a){return{value:a,data:null}}):b},validateOrientation:function(b,c){return b=a.trim(b||"").toLowerCase(),-1===a.inArray(b,["auto","bottom","top"])&&(b=c),b},processResponse:function(a,b,c){var d=this,e=d.options;a.suggestions=d.verifySuggestionsFormat(a.suggestions),e.noCache||(d.cachedResponse[c]=a,e.preventBadQueries&&0===a.suggestions.length&&d.badQueries.push(b)),b===d.getQuery(d.currentValue)&&(d.suggestions=a.suggestions,d.suggest())},activate:function(b){var c,d=this,e=d.classes.selected,f=a(d.suggestionsContainer),g=f.find("."+d.classes.suggestion);return f.find("."+e).removeClass(e),d.selectedIndex=b,-1!==d.selectedIndex&&g.length>d.selectedIndex?(c=g.get(d.selectedIndex),a(c).addClass(e),c):null},selectHint:function(){var b=this,c=a.inArray(b.hint,b.suggestions);b.select(c)},select:function(a){var b=this;b.hide(),b.onSelect(a)},moveUp:function(){var b=this;if(-1!==b.selectedIndex)return 0===b.selectedIndex?(a(b.suggestionsContainer).children().first().removeClass(b.classes.selected),b.selectedIndex=-1,b.el.val(b.currentValue),void b.findBestHint()):void b.adjustScroll(b.selectedIndex-1)},moveDown:function(){var a=this;a.selectedIndex!==a.suggestions.length-1&&a.adjustScroll(a.selectedIndex+1)},adjustScroll:function(b){var c=this,d=c.activate(b);if(d){var e,f,g,h=a(d).outerHeight();e=d.offsetTop,f=a(c.suggestionsContainer).scrollTop(),g=f+c.options.maxHeight-h,f>e?a(c.suggestionsContainer).scrollTop(e):e>g&&a(c.suggestionsContainer).scrollTop(e-c.options.maxHeight+h),c.el.val(c.getValue(c.suggestions[b].value)),c.signalHint(null)}},onSelect:function(b){var c=this,d=c.options.onSelect,e=c.suggestions[b];c.currentValue=c.getValue(e.value),c.currentValue!==c.el.val()&&c.el.val(c.currentValue),c.signalHint(null),c.suggestions=[],c.selection=e,a.isFunction(d)&&d.call(c.element,e)},getValue:function(a){var b,c,d=this,e=d.options.delimiter;return e?(b=d.currentValue,c=b.split(e),1===c.length?a:b.substr(0,b.length-c[c.length-1].length)+a):a},dispose:function(){var b=this;b.el.off(".autocomplete").removeData("autocomplete"),b.disableKillerFn(),a(window).off("resize.autocomplete",b.fixPositionCapture),a(b.suggestionsContainer).remove()}},a.fn.autocomplete=a.fn.devbridgeAutocomplete=function(c,d){var e="autocomplete";return 0===arguments.length?this.first().data(e):this.each(function(){var f=a(this),g=f.data(e);"string"==typeof c?g&&"function"==typeof g[c]&&g[c](d):(g&&g.dispose&&g.dispose(),g=new b(this,c),f.data(e,g))})}});

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: lib/jquery/jquery.imask.min.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


/*!
 * jQuery iMask Plugin v0.7.0
 *
 * Licensed under the MIT License
 * Authors: Mark Kahn
 *          Fabio Zendhi Nagao (http://zend.lojcomm.com.br)
 *
 * Date: Wed Aug 24 10:50:49 2011 -0700
 */(function(a){function d(a){this.range=a.getSelectionRange(),this.len=a.domNode.value.length,this.obj=a,this[0]=this.range[0],this[1]=this.range[1]}var b=function(a){return!!a||a===0},c=function(){this.initialize.apply(this,arguments)};c.prototype={options:{maskEmptyChr:" ",validNumbers:"1234567890",validAlphas:"abcdefghijklmnopqrstuvwxyz",validAlphaNums:"abcdefghijklmnopqrstuvwxyz1234567890",groupDigits:3,decDigits:2,currencySymbol:"",groupSymbol:",",decSymbol:".",showMask:!0,stripMask:!1,lastFocus:0,number:{stripMask:!1,showMask:!1}},initialize:function(b,c){this.node=b,this.domNode=b[0],this.options=a.extend({},this.options,this.options[c.type]||{},c);var d=this;c.type=="number"&&this.node.css("text-align","right"),this.node.bind("mousedown click",function(a){a.stopPropagation(),a.preventDefault()}).bind("mouseup",function(){d.onMouseUp.apply(d,arguments)}).bind("keydown",function(){d.onKeyDown.apply(d,arguments)}).bind("keypress",function(){d.onKeyPress.apply(d,arguments)}).bind("focus",function(){d.onFocus.apply(d,arguments)}).bind("blur",function(){d.onBlur.apply(d,arguments)})},isFixed:function(){return this.options.type=="fixed"},isNumber:function(){return this.options.type=="number"},onMouseUp:function(a){a.stopPropagation(),a.preventDefault();if(this.isFixed()){var b=this.getSelectionStart();this.setSelection(b,b+1)}else this.isNumber()&&this.setEnd()},onKeyDown:function(a){if(!(a.ctrlKey||a.altKey||a.metaKey))if(a.which==13)this.node.blur();else if(a.which!=9)if(this.options.type=="fixed"){a.preventDefault();var b=this.getSelectionStart();switch(a.which){case 8:this.updateSelection(this.options.maskEmptyChr),this.selectPrevious();break;case 36:this.selectFirst();break;case 35:this.selectLast();break;case 37:case 38:this.selectPrevious();break;case 39:case 40:this.selectNext();break;case 46:this.updateSelection(this.options.maskEmptyChr),this.selectNext();break;default:var c=this.chrFromEv(a);this.isViableInput(b,c)?(this.updateSelection(a.shiftKey?c.toUpperCase():c),this.node.trigger("valid",a,this.node),this.selectNext()):this.node.trigger("invalid",a,this.node)}}else if(this.options.type=="number")switch(a.which){case 35:case 36:case 37:case 38:case 39:case 40:break;case 8:case 46:var e=this;setTimeout(function(){e.formatNumber()},1);break;default:a.preventDefault();var c=this.chrFromEv(a);if(this.isViableInput(b,c)){var f=new d(this),g=this.sanityTest(f.replaceWith(c));g!==!1&&(this.updateSelection(c),this.formatNumber()),this.node.trigger("valid",a,this.node)}else this.node.trigger("invalid",a,this.node)}},allowKeys:{8:1,9:1,13:1,35:1,36:1,37:1,38:1,39:1,40:1,46:1},onKeyPress:function(a){var b=a.which||a.keyCode;!this.allowKeys[b]&&!(a.ctrlKey||a.altKey||a.metaKey)&&(a.preventDefault(),a.stopPropagation())},onFocus:function(a){a.stopPropagation(),a.preventDefault(),this.options.showMask&&(this.domNode.value=this.wearMask(this.domNode.value)),this.sanityTest(this.domNode.value);var b=this;setTimeout(function(){b[b.options.type==="fixed"?"selectFirst":"setEnd"]()},1)},onBlur:function(a){a.stopPropagation(),a.preventDefault(),this.options.stripMask&&(this.domNode.value=this.stripMask())},selectAll:function(){this.setSelection(0,this.domNode.value.length)},selectFirst:function(){for(var a=0,b=this.options.mask.length;a<b;a++)if(this.isInputPosition(a)){this.setSelection(a,a+1);return}},selectLast:function(){for(var a=this.options.mask.length-1;a>=0;a--)if(this.isInputPosition(a)){this.setSelection(a,a+1);return}},selectPrevious:function(a){b(a)||(a=this.getSelectionStart()),a>0?this.isInputPosition(a-1)?this.setSelection(a-1,a):this.selectPrevious(a-1):this.selectFirst()},selectNext:function(a){b(a)||(a=this.getSelectionEnd());this.isNumber()?this.setSelection(a+1,a+1):a<this.options.mask.length?this.isInputPosition(a)?this.setSelection(a,a+1):this.selectNext(a+1):this.selectLast()},setSelection:function(a,b){a=a.valueOf(),!b&&a.splice&&(b=a[1],a=a[0]);if(this.domNode.setSelectionRange)this.domNode.focus(),this.domNode.setSelectionRange(a,b);else if(this.domNode.createTextRange){var c=this.domNode.createTextRange();c.collapse(),c.moveStart("character",a),c.moveEnd("character",b-a),c.select()}},updateSelection:function(a){var b=this.domNode.value,c=new d(this),e=c.replaceWith(a);this.domNode.value=e,c[0]===c[1]?this.setSelection(c[0]+1,c[0]+1):this.setSelection(c)},setEnd:function(){var a=this.domNode.value.length;this.setSelection(a,a)},getSelectionRange:function(){return[this.getSelectionStart(),this.getSelectionEnd()]},getSelectionStart:function(){var a=0,b=this.domNode.selectionStart;if(b)typeof b=="number"&&(a=b);else if(document.selection){var c=document.selection.createRange().duplicate();c.moveEnd("character",this.domNode.value.length),a=this.domNode.value.lastIndexOf(c.text),c.text==""&&(a=this.domNode.value.length)}return a},getSelectionEnd:function(){var a=0,b=this.domNode.selectionEnd;if(b)typeof b=="number"&&(a=b);else if(document.selection){var c=document.selection.createRange().duplicate();c.moveStart("character",-this.domNode.value.length),a=c.text.length}return a},isInputPosition:function(a){var b=this.options.mask.toLowerCase(),c=b.charAt(a);return!!~"9ax".indexOf(c)},sanityTest:function(b,c){var e=this.options.sanity;if(e instanceof RegExp)return e.test(b);if(a.isFunction(e)){var f=e(b,c);if(typeof f=="boolean")return f;if(typeof f!="undefined"){if(this.isFixed()){var c=this.getSelectionStart();this.domNode.value=this.wearMask(f),this.setSelection(c,c+1),this.selectNext()}else if(this.isNumber()){var g=new d(this);this.domNode.value=f,this.setSelection(g),this.formatNumber()}return!1}}},isViableInput:function(){return this[this.isFixed()?"isViableFixedInput":"isViableNumericInput"].apply(this,arguments)},isViableFixedInput:function(a,b){var c=this.options.mask.toLowerCase(),d=c.charAt(a),e=this.domNode.value.split("");e.splice(a,1,b),e=e.join("");var f=this.sanityTest(e,a);return typeof f=="boolean"?f:({9:this.options.validNumbers,a:this.options.validAlphas,x:this.options.validAlphaNums}[d]||"").indexOf(b)<0?!1:!0},isViableNumericInput:function(a,b){return!!~this.options.validNumbers.indexOf(b)},wearMask:function(a){var b=this.options.mask.toLowerCase(),c="",d={9:"validNumbers",a:"validAlphas",x:"validAlphaNums"};for(var e=0,f=0,g=b.length;e<g;e++)switch(b.charAt(e)){case"9":case"a":case"x":c+=this.options[d[b.charAt(e)]].indexOf(a.charAt(f).toLowerCase())>=0&&a.charAt(f)!=""?a.charAt(f++):this.options.maskEmptyChr;break;default:c+=b.charAt(e),a.charAt(f)==b.charAt(e)&&f++}return c},stripMask:function(){var a=this.domNode.value;if(""==a)return"";var b="";if(this.isFixed())for(var c=0,d=a.length;c<d;c++)a.charAt(c)!=this.options.maskEmptyChr&&this.isInputPosition(c)&&(b+=a.charAt(c));else if(this.isNumber())for(var c=0,d=a.length;c<d;c++)this.options.validNumbers.indexOf(a.charAt(c))>=0&&(b+=a.charAt(c));return b},chrFromEv:function(a){var b="",c=a.which;c>=96&&c<=105&&(c-=48),b=String.fromCharCode(c).toLowerCase();return b},formatNumber:function(){var a=this.domNode.value.length,b=this.stripMask(),c=b.replace(/^0+/,""),e=new d(this);b=c,c="";for(var f=b.length,g=this.options.decDigits;f<=g;f++)c+="0";c+=b,b=c.substr(c.length-this.options.decDigits),c=c.substring(0,c.length-this.options.decDigits);var h=new RegExp("(\\d+)(\\d{"+this.options.groupDigits+"})");while(h.test(c))c=c.replace(h,"$1"+this.options.groupSymbol+"$2");this.domNode.value=this.options.currencySymbol+c+this.options.decSymbol+b,this.setSelection(e)},getObjForm:function(){return this.node.getClosest("form")},submitForm:function(){var a=this.getObjForm();a.trigger("submit")}},d.prototype={valueOf:function(){var a=this.len-this.obj.domNode.value.length;return[this.range[0]-a,this.range[1]-a]},replaceWith:function(a){var b=this.obj.domNode.value,c=this.valueOf();return b.substr(0,c[0])+a+b.substr(c[1])}},a.fn.iMask=function(b){this.each(function(){new c(a(this),b)})}})(jQuery)

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: lib/jquery/jquery.treeview.min.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


!function(a){a.extend(a.fn,{swapClass:function(a,b){var c=this.filter("."+a);return this.filter("."+b).removeClass(b).addClass(a),c.removeClass(a).addClass(b),this},replaceClass:function(a,b){return this.filter("."+a).removeClass(a).addClass(b).end()},hoverClass:function(b){return b=b||"hover",this.hover(function(){a(this).addClass(b)},function(){a(this).removeClass(b)})},heightToggle:function(a,b){a?this.animate({height:"toggle"},a,b):this.each(function(){jQuery(this)[jQuery(this).is(":hidden")?"show":"hide"](),b&&b.apply(this,arguments)})},heightHide:function(a,b){a?this.animate({height:"hide"},a,b):(this.hide(),b&&this.each(b))},prepareBranches:function(a){return a.prerendered||(this.filter(":last-child:not(ul)").addClass(b.last),this.filter((a.collapsed?"":"."+b.closed)+":not(."+b.open+")").find(">ul").hide()),this.filter(":has(>ul)")},applyClasses:function(c,d){if(this.filter(":has(>ul):not(:has(>a))").find(">span").unbind("click.treeview").bind("click.treeview",function(b){this==b.target&&d.apply(a(this).next())}).add(a("a",this)).hoverClass(),!c.prerendered){this.filter(":has(>ul:hidden)").addClass(b.expandable).replaceClass(b.last,b.lastExpandable),this.not(":has(>ul:hidden)").addClass(b.collapsable).replaceClass(b.last,b.lastCollapsable);var e=this.find("div."+b.hitarea);e.length||(e=this.prepend('<div class="'+b.hitarea+'"/>').find("div."+b.hitarea)),e.removeClass().addClass(b.hitarea).each(function(){var b="";a.each(a(this).parent().attr("class").split(" "),function(){b+=this+"-hitarea "}),a(this).addClass(b)})}this.find("div."+b.hitarea).click(d)},treeview:function(c){function e(c,d){function e(d){return function(){return f.apply(a("div."+b.hitarea,c).filter(function(){return d?a(this).parent("."+d).length:!0})),!1}}a("a:eq(0)",d).click(e(b.collapsable)),a("a:eq(1)",d).click(e(b.expandable)),a("a:eq(2)",d).click(e())}function f(){a(this).parent().find(">.hitarea").swapClass(b.collapsableHitarea,b.expandableHitarea).swapClass(b.lastCollapsableHitarea,b.lastExpandableHitarea).end().swapClass(b.collapsable,b.expandable).swapClass(b.lastCollapsable,b.lastExpandable).find(">ul").heightToggle(c.animated,c.toggle),c.unique&&a(this).parent().siblings().find(">.hitarea").replaceClass(b.collapsableHitarea,b.expandableHitarea).replaceClass(b.lastCollapsableHitarea,b.lastExpandableHitarea).end().replaceClass(b.collapsable,b.expandable).replaceClass(b.lastCollapsable,b.lastExpandable).find(">ul").heightHide(c.animated,c.toggle)}function g(){var d=[];i.each(function(b,c){d[b]=a(c).is(":has(>ul:visible)")?1:0}),a.cookie(c.cookieId,d.join(""),c.cookieOptions)}function h(){var b=a.cookie(c.cookieId);if(b){var d=b.split("");i.each(function(b,c){a(c).find(">ul")[parseInt(d[b])?"show":"hide"]()})}}if(c=a.extend({cookieId:"treeview"},c),c.toggle){var d=c.toggle;c.toggle=function(){return d.apply(a(this).parent()[0],arguments)}}this.data("toggler",f),this.addClass("treeview");var i=this.find("li").prepareBranches(c);switch(c.persist){case"cookie":var j=c.toggle;c.toggle=function(){g(),j&&j.apply(this,arguments)},h();break;case"location":var k=this.find("a").filter(function(){return this.href.toLowerCase()==location.href.toLowerCase()});if(k.length){var l=k.addClass("selected").parents("ul, li").add(k.next()).show();c.prerendered&&l.filter("li").swapClass(b.collapsable,b.expandable).swapClass(b.lastCollapsable,b.lastExpandable).find(">.hitarea").swapClass(b.collapsableHitarea,b.expandableHitarea).swapClass(b.lastCollapsableHitarea,b.lastExpandableHitarea)}}return i.applyClasses(c,f),c.control&&(e(this,c.control),a(c.control).show()),this}}),a.treeview={};var b=a.treeview.classes={open:"open",closed:"closed",expandable:"expandable",expandableHitarea:"expandable-hitarea",lastExpandableHitarea:"lastExpandable-hitarea",collapsable:"collapsable",collapsableHitarea:"collapsable-hitarea",lastCollapsableHitarea:"lastCollapsable-hitarea",lastCollapsable:"lastCollapsable",lastExpandable:"lastExpandable",last:"last",hitarea:"hitarea"}}(jQuery);

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: lib/jquery/jquery.dataTables.min.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


/*! DataTables 1.10.7
 * ©2008-2015 SpryMedia Ltd - datatables.net/license
 */
(function(Ea,Q,k){var P=function(h){function W(a){var b,c,e={};h.each(a,function(d){if((b=d.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(b[1]+" "))c=d.replace(b[0],b[2].toLowerCase()),e[c]=d,"o"===b[1]&&W(a[d])});a._hungarianMap=e}function H(a,b,c){a._hungarianMap||W(a);var e;h.each(b,function(d){e=a._hungarianMap[d];if(e!==k&&(c||b[e]===k))"o"===e.charAt(0)?(b[e]||(b[e]={}),h.extend(!0,b[e],b[d]),H(a[e],b[e],c)):b[e]=b[d]})}function P(a){var b=m.defaults.oLanguage,c=a.sZeroRecords;
!a.sEmptyTable&&(c&&"No data available in table"===b.sEmptyTable)&&E(a,a,"sZeroRecords","sEmptyTable");!a.sLoadingRecords&&(c&&"Loading..."===b.sLoadingRecords)&&E(a,a,"sZeroRecords","sLoadingRecords");a.sInfoThousands&&(a.sThousands=a.sInfoThousands);(a=a.sDecimal)&&db(a)}function eb(a){A(a,"ordering","bSort");A(a,"orderMulti","bSortMulti");A(a,"orderClasses","bSortClasses");A(a,"orderCellsTop","bSortCellsTop");A(a,"order","aaSorting");A(a,"orderFixed","aaSortingFixed");A(a,"paging","bPaginate");
A(a,"pagingType","sPaginationType");A(a,"pageLength","iDisplayLength");A(a,"searching","bFilter");if(a=a.aoSearchCols)for(var b=0,c=a.length;b<c;b++)a[b]&&H(m.models.oSearch,a[b])}function fb(a){A(a,"orderable","bSortable");A(a,"orderData","aDataSort");A(a,"orderSequence","asSorting");A(a,"orderDataType","sortDataType");var b=a.aDataSort;b&&!h.isArray(b)&&(a.aDataSort=[b])}function gb(a){var a=a.oBrowser,b=h("<div/>").css({position:"absolute",top:0,left:0,height:1,width:1,overflow:"hidden"}).append(h("<div/>").css({position:"absolute",
top:1,left:1,width:100,overflow:"scroll"}).append(h('<div class="test"/>').css({width:"100%",height:10}))).appendTo("body"),c=b.find(".test");a.bScrollOversize=100===c[0].offsetWidth;a.bScrollbarLeft=1!==Math.round(c.offset().left);b.remove()}function hb(a,b,c,e,d,f){var g,j=!1;c!==k&&(g=c,j=!0);for(;e!==d;)a.hasOwnProperty(e)&&(g=j?b(g,a[e],e,a):a[e],j=!0,e+=f);return g}function Fa(a,b){var c=m.defaults.column,e=a.aoColumns.length,c=h.extend({},m.models.oColumn,c,{nTh:b?b:Q.createElement("th"),sTitle:c.sTitle?
c.sTitle:b?b.innerHTML:"",aDataSort:c.aDataSort?c.aDataSort:[e],mData:c.mData?c.mData:e,idx:e});a.aoColumns.push(c);c=a.aoPreSearchCols;c[e]=h.extend({},m.models.oSearch,c[e]);ka(a,e,h(b).data())}function ka(a,b,c){var b=a.aoColumns[b],e=a.oClasses,d=h(b.nTh);if(!b.sWidthOrig){b.sWidthOrig=d.attr("width")||null;var f=(d.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);f&&(b.sWidthOrig=f[1])}c!==k&&null!==c&&(fb(c),H(m.defaults.column,c),c.mDataProp!==k&&!c.mData&&(c.mData=c.mDataProp),c.sType&&
(b._sManualType=c.sType),c.className&&!c.sClass&&(c.sClass=c.className),h.extend(b,c),E(b,c,"sWidth","sWidthOrig"),c.iDataSort!==k&&(b.aDataSort=[c.iDataSort]),E(b,c,"aDataSort"));var g=b.mData,j=R(g),i=b.mRender?R(b.mRender):null,c=function(a){return"string"===typeof a&&-1!==a.indexOf("@")};b._bAttrSrc=h.isPlainObject(g)&&(c(g.sort)||c(g.type)||c(g.filter));b.fnGetData=function(a,b,c){var e=j(a,b,k,c);return i&&b?i(e,b,a,c):e};b.fnSetData=function(a,b,c){return S(g)(a,b,c)};"number"!==typeof g&&
(a._rowReadObject=!0);a.oFeatures.bSort||(b.bSortable=!1,d.addClass(e.sSortableNone));a=-1!==h.inArray("asc",b.asSorting);c=-1!==h.inArray("desc",b.asSorting);!b.bSortable||!a&&!c?(b.sSortingClass=e.sSortableNone,b.sSortingClassJUI=""):a&&!c?(b.sSortingClass=e.sSortableAsc,b.sSortingClassJUI=e.sSortJUIAscAllowed):!a&&c?(b.sSortingClass=e.sSortableDesc,b.sSortingClassJUI=e.sSortJUIDescAllowed):(b.sSortingClass=e.sSortable,b.sSortingClassJUI=e.sSortJUI)}function X(a){if(!1!==a.oFeatures.bAutoWidth){var b=
a.aoColumns;Ga(a);for(var c=0,e=b.length;c<e;c++)b[c].nTh.style.width=b[c].sWidth}b=a.oScroll;(""!==b.sY||""!==b.sX)&&Y(a);w(a,null,"column-sizing",[a])}function la(a,b){var c=Z(a,"bVisible");return"number"===typeof c[b]?c[b]:null}function $(a,b){var c=Z(a,"bVisible"),c=h.inArray(b,c);return-1!==c?c:null}function aa(a){return Z(a,"bVisible").length}function Z(a,b){var c=[];h.map(a.aoColumns,function(a,d){a[b]&&c.push(d)});return c}function Ha(a){var b=a.aoColumns,c=a.aoData,e=m.ext.type.detect,d,
f,g,j,i,h,l,q,n;d=0;for(f=b.length;d<f;d++)if(l=b[d],n=[],!l.sType&&l._sManualType)l.sType=l._sManualType;else if(!l.sType){g=0;for(j=e.length;g<j;g++){i=0;for(h=c.length;i<h;i++){n[i]===k&&(n[i]=x(a,i,d,"type"));q=e[g](n[i],a);if(!q&&g!==e.length-1)break;if("html"===q)break}if(q){l.sType=q;break}}l.sType||(l.sType="string")}}function ib(a,b,c,e){var d,f,g,j,i,o,l=a.aoColumns;if(b)for(d=b.length-1;0<=d;d--){o=b[d];var q=o.targets!==k?o.targets:o.aTargets;h.isArray(q)||(q=[q]);f=0;for(g=q.length;f<
g;f++)if("number"===typeof q[f]&&0<=q[f]){for(;l.length<=q[f];)Fa(a);e(q[f],o)}else if("number"===typeof q[f]&&0>q[f])e(l.length+q[f],o);else if("string"===typeof q[f]){j=0;for(i=l.length;j<i;j++)("_all"==q[f]||h(l[j].nTh).hasClass(q[f]))&&e(j,o)}}if(c){d=0;for(a=c.length;d<a;d++)e(d,c[d])}}function K(a,b,c,e){var d=a.aoData.length,f=h.extend(!0,{},m.models.oRow,{src:c?"dom":"data"});f._aData=b;a.aoData.push(f);for(var b=a.aoColumns,f=0,g=b.length;f<g;f++)c&&Ia(a,d,f,x(a,d,f)),b[f].sType=null;a.aiDisplayMaster.push(d);
(c||!a.oFeatures.bDeferRender)&&Ja(a,d,c,e);return d}function ma(a,b){var c;b instanceof h||(b=h(b));return b.map(function(b,d){c=na(a,d);return K(a,c.data,d,c.cells)})}function x(a,b,c,e){var d=a.iDraw,f=a.aoColumns[c],g=a.aoData[b]._aData,j=f.sDefaultContent,c=f.fnGetData(g,e,{settings:a,row:b,col:c});if(c===k)return a.iDrawError!=d&&null===j&&(I(a,0,"Requested unknown parameter "+("function"==typeof f.mData?"{function}":"'"+f.mData+"'")+" for row "+b,4),a.iDrawError=d),j;if((c===g||null===c)&&
null!==j)c=j;else if("function"===typeof c)return c.call(g);return null===c&&"display"==e?"":c}function Ia(a,b,c,e){a.aoColumns[c].fnSetData(a.aoData[b]._aData,e,{settings:a,row:b,col:c})}function Ka(a){return h.map(a.match(/(\\.|[^\.])+/g),function(a){return a.replace(/\\./g,".")})}function R(a){if(h.isPlainObject(a)){var b={};h.each(a,function(a,c){c&&(b[a]=R(c))});return function(a,c,f,g){var j=b[c]||b._;return j!==k?j(a,c,f,g):a}}if(null===a)return function(a){return a};if("function"===typeof a)return function(b,
c,f,g){return a(b,c,f,g)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var c=function(a,b,f){var g,j;if(""!==f){j=Ka(f);for(var i=0,h=j.length;i<h;i++){f=j[i].match(ba);g=j[i].match(T);if(f){j[i]=j[i].replace(ba,"");""!==j[i]&&(a=a[j[i]]);g=[];j.splice(0,i+1);j=j.join(".");i=0;for(h=a.length;i<h;i++)g.push(c(a[i],b,j));a=f[0].substring(1,f[0].length-1);a=""===a?g:g.join(a);break}else if(g){j[i]=j[i].replace(T,"");a=a[j[i]]();continue}if(null===a||a[j[i]]===
k)return k;a=a[j[i]]}}return a};return function(b,d){return c(b,d,a)}}return function(b){return b[a]}}function S(a){if(h.isPlainObject(a))return S(a._);if(null===a)return function(){};if("function"===typeof a)return function(b,e,d){a(b,"set",e,d)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var b=function(a,e,d){var d=Ka(d),f;f=d[d.length-1];for(var g,j,i=0,h=d.length-1;i<h;i++){g=d[i].match(ba);j=d[i].match(T);if(g){d[i]=d[i].replace(ba,"");a[d[i]]=[];
f=d.slice();f.splice(0,i+1);g=f.join(".");j=0;for(h=e.length;j<h;j++)f={},b(f,e[j],g),a[d[i]].push(f);return}j&&(d[i]=d[i].replace(T,""),a=a[d[i]](e));if(null===a[d[i]]||a[d[i]]===k)a[d[i]]={};a=a[d[i]]}if(f.match(T))a[f.replace(T,"")](e);else a[f.replace(ba,"")]=e};return function(c,e){return b(c,e,a)}}return function(b,e){b[a]=e}}function La(a){return D(a.aoData,"_aData")}function oa(a){a.aoData.length=0;a.aiDisplayMaster.length=0;a.aiDisplay.length=0}function pa(a,b,c){for(var e=-1,d=0,f=a.length;d<
f;d++)a[d]==b?e=d:a[d]>b&&a[d]--; -1!=e&&c===k&&a.splice(e,1)}function ca(a,b,c,e){var d=a.aoData[b],f,g=function(c,f){for(;c.childNodes.length;)c.removeChild(c.firstChild);c.innerHTML=x(a,b,f,"display")};if("dom"===c||(!c||"auto"===c)&&"dom"===d.src)d._aData=na(a,d,e,e===k?k:d._aData).data;else{var j=d.anCells;if(j)if(e!==k)g(j[e],e);else{c=0;for(f=j.length;c<f;c++)g(j[c],c)}}d._aSortData=null;d._aFilterData=null;g=a.aoColumns;if(e!==k)g[e].sType=null;else{c=0;for(f=g.length;c<f;c++)g[c].sType=null;
Ma(d)}}function na(a,b,c,e){var d=[],f=b.firstChild,g,j=0,i,o=a.aoColumns,l=a._rowReadObject,e=e||l?{}:[],q=function(a,b){if("string"===typeof a){var c=a.indexOf("@");-1!==c&&(c=a.substring(c+1),S(a)(e,b.getAttribute(c)))}},a=function(a){if(c===k||c===j)g=o[j],i=h.trim(a.innerHTML),g&&g._bAttrSrc?(S(g.mData._)(e,i),q(g.mData.sort,a),q(g.mData.type,a),q(g.mData.filter,a)):l?(g._setter||(g._setter=S(g.mData)),g._setter(e,i)):e[j]=i;j++};if(f)for(;f;){b=f.nodeName.toUpperCase();if("TD"==b||"TH"==b)a(f),
d.push(f);f=f.nextSibling}else{d=b.anCells;f=0;for(b=d.length;f<b;f++)a(d[f])}return{data:e,cells:d}}function Ja(a,b,c,e){var d=a.aoData[b],f=d._aData,g=[],j,i,h,l,q;if(null===d.nTr){j=c||Q.createElement("tr");d.nTr=j;d.anCells=g;j._DT_RowIndex=b;Ma(d);l=0;for(q=a.aoColumns.length;l<q;l++){h=a.aoColumns[l];i=c?e[l]:Q.createElement(h.sCellType);g.push(i);if(!c||h.mRender||h.mData!==l)i.innerHTML=x(a,b,l,"display");h.sClass&&(i.className+=" "+h.sClass);h.bVisible&&!c?j.appendChild(i):!h.bVisible&&c&&
i.parentNode.removeChild(i);h.fnCreatedCell&&h.fnCreatedCell.call(a.oInstance,i,x(a,b,l),f,b,l)}w(a,"aoRowCreatedCallback",null,[j,f,b])}d.nTr.setAttribute("role","row")}function Ma(a){var b=a.nTr,c=a._aData;if(b){c.DT_RowId&&(b.id=c.DT_RowId);if(c.DT_RowClass){var e=c.DT_RowClass.split(" ");a.__rowc=a.__rowc?Na(a.__rowc.concat(e)):e;h(b).removeClass(a.__rowc.join(" ")).addClass(c.DT_RowClass)}c.DT_RowAttr&&h(b).attr(c.DT_RowAttr);c.DT_RowData&&h(b).data(c.DT_RowData)}}function jb(a){var b,c,e,d,
f,g=a.nTHead,j=a.nTFoot,i=0===h("th, td",g).length,o=a.oClasses,l=a.aoColumns;i&&(d=h("<tr/>").appendTo(g));b=0;for(c=l.length;b<c;b++)f=l[b],e=h(f.nTh).addClass(f.sClass),i&&e.appendTo(d),a.oFeatures.bSort&&(e.addClass(f.sSortingClass),!1!==f.bSortable&&(e.attr("tabindex",a.iTabIndex).attr("aria-controls",a.sTableId),Oa(a,f.nTh,b))),f.sTitle!=e.html()&&e.html(f.sTitle),Pa(a,"header")(a,e,f,o);i&&da(a.aoHeader,g);h(g).find(">tr").attr("role","row");h(g).find(">tr>th, >tr>td").addClass(o.sHeaderTH);
h(j).find(">tr>th, >tr>td").addClass(o.sFooterTH);if(null!==j){a=a.aoFooter[0];b=0;for(c=a.length;b<c;b++)f=l[b],f.nTf=a[b].cell,f.sClass&&h(f.nTf).addClass(f.sClass)}}function ea(a,b,c){var e,d,f,g=[],j=[],i=a.aoColumns.length,o;if(b){c===k&&(c=!1);e=0;for(d=b.length;e<d;e++){g[e]=b[e].slice();g[e].nTr=b[e].nTr;for(f=i-1;0<=f;f--)!a.aoColumns[f].bVisible&&!c&&g[e].splice(f,1);j.push([])}e=0;for(d=g.length;e<d;e++){if(a=g[e].nTr)for(;f=a.firstChild;)a.removeChild(f);f=0;for(b=g[e].length;f<b;f++)if(o=
i=1,j[e][f]===k){a.appendChild(g[e][f].cell);for(j[e][f]=1;g[e+i]!==k&&g[e][f].cell==g[e+i][f].cell;)j[e+i][f]=1,i++;for(;g[e][f+o]!==k&&g[e][f].cell==g[e][f+o].cell;){for(c=0;c<i;c++)j[e+c][f+o]=1;o++}h(g[e][f].cell).attr("rowspan",i).attr("colspan",o)}}}}function M(a){var b=w(a,"aoPreDrawCallback","preDraw",[a]);if(-1!==h.inArray(!1,b))C(a,!1);else{var b=[],c=0,e=a.asStripeClasses,d=e.length,f=a.oLanguage,g=a.iInitDisplayStart,j="ssp"==B(a),i=a.aiDisplay;a.bDrawing=!0;g!==k&&-1!==g&&(a._iDisplayStart=
j?g:g>=a.fnRecordsDisplay()?0:g,a.iInitDisplayStart=-1);var g=a._iDisplayStart,o=a.fnDisplayEnd();if(a.bDeferLoading)a.bDeferLoading=!1,a.iDraw++,C(a,!1);else if(j){if(!a.bDestroying&&!kb(a))return}else a.iDraw++;if(0!==i.length){f=j?a.aoData.length:o;for(j=j?0:g;j<f;j++){var l=i[j],q=a.aoData[l];null===q.nTr&&Ja(a,l);l=q.nTr;if(0!==d){var n=e[c%d];q._sRowStripe!=n&&(h(l).removeClass(q._sRowStripe).addClass(n),q._sRowStripe=n)}w(a,"aoRowCallback",null,[l,q._aData,c,j]);b.push(l);c++}}else c=f.sZeroRecords,
1==a.iDraw&&"ajax"==B(a)?c=f.sLoadingRecords:f.sEmptyTable&&0===a.fnRecordsTotal()&&(c=f.sEmptyTable),b[0]=h("<tr/>",{"class":d?e[0]:""}).append(h("<td />",{valign:"top",colSpan:aa(a),"class":a.oClasses.sRowEmpty}).html(c))[0];w(a,"aoHeaderCallback","header",[h(a.nTHead).children("tr")[0],La(a),g,o,i]);w(a,"aoFooterCallback","footer",[h(a.nTFoot).children("tr")[0],La(a),g,o,i]);e=h(a.nTBody);e.children().detach();e.append(h(b));w(a,"aoDrawCallback","draw",[a]);a.bSorted=!1;a.bFiltered=!1;a.bDrawing=
!1}}function N(a,b){var c=a.oFeatures,e=c.bFilter;c.bSort&&lb(a);e?fa(a,a.oPreviousSearch):a.aiDisplay=a.aiDisplayMaster.slice();!0!==b&&(a._iDisplayStart=0);a._drawHold=b;M(a);a._drawHold=!1}function mb(a){var b=a.oClasses,c=h(a.nTable),c=h("<div/>").insertBefore(c),e=a.oFeatures,d=h("<div/>",{id:a.sTableId+"_wrapper","class":b.sWrapper+(a.nTFoot?"":" "+b.sNoFooter)});a.nHolding=c[0];a.nTableWrapper=d[0];a.nTableReinsertBefore=a.nTable.nextSibling;for(var f=a.sDom.split(""),g,j,i,o,l,q,n=0;n<f.length;n++){g=
null;j=f[n];if("<"==j){i=h("<div/>")[0];o=f[n+1];if("'"==o||'"'==o){l="";for(q=2;f[n+q]!=o;)l+=f[n+q],q++;"H"==l?l=b.sJUIHeader:"F"==l&&(l=b.sJUIFooter);-1!=l.indexOf(".")?(o=l.split("."),i.id=o[0].substr(1,o[0].length-1),i.className=o[1]):"#"==l.charAt(0)?i.id=l.substr(1,l.length-1):i.className=l;n+=q}d.append(i);d=h(i)}else if(">"==j)d=d.parent();else if("l"==j&&e.bPaginate&&e.bLengthChange)g=nb(a);else if("f"==j&&e.bFilter)g=ob(a);else if("r"==j&&e.bProcessing)g=pb(a);else if("t"==j)g=qb(a);else if("i"==
j&&e.bInfo)g=rb(a);else if("p"==j&&e.bPaginate)g=sb(a);else if(0!==m.ext.feature.length){i=m.ext.feature;q=0;for(o=i.length;q<o;q++)if(j==i[q].cFeature){g=i[q].fnInit(a);break}}g&&(i=a.aanFeatures,i[j]||(i[j]=[]),i[j].push(g),d.append(g))}c.replaceWith(d)}function da(a,b){var c=h(b).children("tr"),e,d,f,g,j,i,o,l,q,n;a.splice(0,a.length);f=0;for(i=c.length;f<i;f++)a.push([]);f=0;for(i=c.length;f<i;f++){e=c[f];for(d=e.firstChild;d;){if("TD"==d.nodeName.toUpperCase()||"TH"==d.nodeName.toUpperCase()){l=
1*d.getAttribute("colspan");q=1*d.getAttribute("rowspan");l=!l||0===l||1===l?1:l;q=!q||0===q||1===q?1:q;g=0;for(j=a[f];j[g];)g++;o=g;n=1===l?!0:!1;for(j=0;j<l;j++)for(g=0;g<q;g++)a[f+g][o+j]={cell:d,unique:n},a[f+g].nTr=e}d=d.nextSibling}}}function qa(a,b,c){var e=[];c||(c=a.aoHeader,b&&(c=[],da(c,b)));for(var b=0,d=c.length;b<d;b++)for(var f=0,g=c[b].length;f<g;f++)if(c[b][f].unique&&(!e[f]||!a.bSortCellsTop))e[f]=c[b][f].cell;return e}function ra(a,b,c){w(a,"aoServerParams","serverParams",[b]);
if(b&&h.isArray(b)){var e={},d=/(.*?)\[\]$/;h.each(b,function(a,b){var c=b.name.match(d);c?(c=c[0],e[c]||(e[c]=[]),e[c].push(b.value)):e[b.name]=b.value});b=e}var f,g=a.ajax,j=a.oInstance,i=function(b){w(a,null,"xhr",[a,b,a.jqXHR]);c(b)};if(h.isPlainObject(g)&&g.data){f=g.data;var o=h.isFunction(f)?f(b,a):f,b=h.isFunction(f)&&o?o:h.extend(!0,b,o);delete g.data}o={data:b,success:function(b){var c=b.error||b.sError;c&&I(a,0,c);a.json=b;i(b)},dataType:"json",cache:!1,type:a.sServerMethod,error:function(b,
c){var f=w(a,null,"xhr",[a,null,a.jqXHR]);-1===h.inArray(!0,f)&&("parsererror"==c?I(a,0,"Invalid JSON response",1):4===b.readyState&&I(a,0,"Ajax error",7));C(a,!1)}};a.oAjaxData=b;w(a,null,"preXhr",[a,b]);a.fnServerData?a.fnServerData.call(j,a.sAjaxSource,h.map(b,function(a,b){return{name:b,value:a}}),i,a):a.sAjaxSource||"string"===typeof g?a.jqXHR=h.ajax(h.extend(o,{url:g||a.sAjaxSource})):h.isFunction(g)?a.jqXHR=g.call(j,b,i,a):(a.jqXHR=h.ajax(h.extend(o,g)),g.data=f)}function kb(a){return a.bAjaxDataGet?
(a.iDraw++,C(a,!0),ra(a,tb(a),function(b){ub(a,b)}),!1):!0}function tb(a){var b=a.aoColumns,c=b.length,e=a.oFeatures,d=a.oPreviousSearch,f=a.aoPreSearchCols,g,j=[],i,o,l,q=U(a);g=a._iDisplayStart;i=!1!==e.bPaginate?a._iDisplayLength:-1;var n=function(a,b){j.push({name:a,value:b})};n("sEcho",a.iDraw);n("iColumns",c);n("sColumns",D(b,"sName").join(","));n("iDisplayStart",g);n("iDisplayLength",i);var k={draw:a.iDraw,columns:[],order:[],start:g,length:i,search:{value:d.sSearch,regex:d.bRegex}};for(g=
0;g<c;g++)o=b[g],l=f[g],i="function"==typeof o.mData?"function":o.mData,k.columns.push({data:i,name:o.sName,searchable:o.bSearchable,orderable:o.bSortable,search:{value:l.sSearch,regex:l.bRegex}}),n("mDataProp_"+g,i),e.bFilter&&(n("sSearch_"+g,l.sSearch),n("bRegex_"+g,l.bRegex),n("bSearchable_"+g,o.bSearchable)),e.bSort&&n("bSortable_"+g,o.bSortable);e.bFilter&&(n("sSearch",d.sSearch),n("bRegex",d.bRegex));e.bSort&&(h.each(q,function(a,b){k.order.push({column:b.col,dir:b.dir});n("iSortCol_"+a,b.col);
n("sSortDir_"+a,b.dir)}),n("iSortingCols",q.length));b=m.ext.legacy.ajax;return null===b?a.sAjaxSource?j:k:b?j:k}function ub(a,b){var c=sa(a,b),e=b.sEcho!==k?b.sEcho:b.draw,d=b.iTotalRecords!==k?b.iTotalRecords:b.recordsTotal,f=b.iTotalDisplayRecords!==k?b.iTotalDisplayRecords:b.recordsFiltered;if(e){if(1*e<a.iDraw)return;a.iDraw=1*e}oa(a);a._iRecordsTotal=parseInt(d,10);a._iRecordsDisplay=parseInt(f,10);e=0;for(d=c.length;e<d;e++)K(a,c[e]);a.aiDisplay=a.aiDisplayMaster.slice();a.bAjaxDataGet=!1;
M(a);a._bInitComplete||ta(a,b);a.bAjaxDataGet=!0;C(a,!1)}function sa(a,b){var c=h.isPlainObject(a.ajax)&&a.ajax.dataSrc!==k?a.ajax.dataSrc:a.sAjaxDataProp;return"data"===c?b.aaData||b[c]:""!==c?R(c)(b):b}function ob(a){var b=a.oClasses,c=a.sTableId,e=a.oLanguage,d=a.oPreviousSearch,f=a.aanFeatures,g='<input type="search" class="'+b.sFilterInput+'"/>',j=e.sSearch,j=j.match(/_INPUT_/)?j.replace("_INPUT_",g):j+g,b=h("<div/>",{id:!f.f?c+"_filter":null,"class":b.sFilter}).append(h("<label/>").append(j)),
f=function(){var b=!this.value?"":this.value;b!=d.sSearch&&(fa(a,{sSearch:b,bRegex:d.bRegex,bSmart:d.bSmart,bCaseInsensitive:d.bCaseInsensitive}),a._iDisplayStart=0,M(a))},g=null!==a.searchDelay?a.searchDelay:"ssp"===B(a)?400:0,i=h("input",b).val(d.sSearch).attr("placeholder",e.sSearchPlaceholder).bind("keyup.DT search.DT input.DT paste.DT cut.DT",g?ua(f,g):f).bind("keypress.DT",function(a){if(13==a.keyCode)return!1}).attr("aria-controls",c);h(a.nTable).on("search.dt.DT",function(b,c){if(a===c)try{i[0]!==
Q.activeElement&&i.val(d.sSearch)}catch(f){}});return b[0]}function fa(a,b,c){var e=a.oPreviousSearch,d=a.aoPreSearchCols,f=function(a){e.sSearch=a.sSearch;e.bRegex=a.bRegex;e.bSmart=a.bSmart;e.bCaseInsensitive=a.bCaseInsensitive};Ha(a);if("ssp"!=B(a)){vb(a,b.sSearch,c,b.bEscapeRegex!==k?!b.bEscapeRegex:b.bRegex,b.bSmart,b.bCaseInsensitive);f(b);for(b=0;b<d.length;b++)wb(a,d[b].sSearch,b,d[b].bEscapeRegex!==k?!d[b].bEscapeRegex:d[b].bRegex,d[b].bSmart,d[b].bCaseInsensitive);xb(a)}else f(b);a.bFiltered=
!0;w(a,null,"search",[a])}function xb(a){for(var b=m.ext.search,c=a.aiDisplay,e,d,f=0,g=b.length;f<g;f++){for(var j=[],i=0,h=c.length;i<h;i++)d=c[i],e=a.aoData[d],b[f](a,e._aFilterData,d,e._aData,i)&&j.push(d);c.length=0;c.push.apply(c,j)}}function wb(a,b,c,e,d,f){if(""!==b)for(var g=a.aiDisplay,e=Qa(b,e,d,f),d=g.length-1;0<=d;d--)b=a.aoData[g[d]]._aFilterData[c],e.test(b)||g.splice(d,1)}function vb(a,b,c,e,d,f){var e=Qa(b,e,d,f),d=a.oPreviousSearch.sSearch,f=a.aiDisplayMaster,g;0!==m.ext.search.length&&
(c=!0);g=yb(a);if(0>=b.length)a.aiDisplay=f.slice();else{if(g||c||d.length>b.length||0!==b.indexOf(d)||a.bSorted)a.aiDisplay=f.slice();b=a.aiDisplay;for(c=b.length-1;0<=c;c--)e.test(a.aoData[b[c]]._sFilterRow)||b.splice(c,1)}}function Qa(a,b,c,e){a=b?a:va(a);c&&(a="^(?=.*?"+h.map(a.match(/"[^"]+"|[^ ]+/g)||[""],function(a){if('"'===a.charAt(0))var b=a.match(/^"(.*)"$/),a=b?b[1]:a;return a.replace('"',"")}).join(")(?=.*?")+").*$");return RegExp(a,e?"i":"")}function va(a){return a.replace(Yb,"\\$1")}
function yb(a){var b=a.aoColumns,c,e,d,f,g,j,i,h,l=m.ext.type.search;c=!1;e=0;for(f=a.aoData.length;e<f;e++)if(h=a.aoData[e],!h._aFilterData){j=[];d=0;for(g=b.length;d<g;d++)c=b[d],c.bSearchable?(i=x(a,e,d,"filter"),l[c.sType]&&(i=l[c.sType](i)),null===i&&(i=""),"string"!==typeof i&&i.toString&&(i=i.toString())):i="",i.indexOf&&-1!==i.indexOf("&")&&(wa.innerHTML=i,i=Zb?wa.textContent:wa.innerText),i.replace&&(i=i.replace(/[\r\n]/g,"")),j.push(i);h._aFilterData=j;h._sFilterRow=j.join("  ");c=!0}return c}
function zb(a){return{search:a.sSearch,smart:a.bSmart,regex:a.bRegex,caseInsensitive:a.bCaseInsensitive}}function Ab(a){return{sSearch:a.search,bSmart:a.smart,bRegex:a.regex,bCaseInsensitive:a.caseInsensitive}}function rb(a){var b=a.sTableId,c=a.aanFeatures.i,e=h("<div/>",{"class":a.oClasses.sInfo,id:!c?b+"_info":null});c||(a.aoDrawCallback.push({fn:Bb,sName:"information"}),e.attr("role","status").attr("aria-live","polite"),h(a.nTable).attr("aria-describedby",b+"_info"));return e[0]}function Bb(a){var b=
a.aanFeatures.i;if(0!==b.length){var c=a.oLanguage,e=a._iDisplayStart+1,d=a.fnDisplayEnd(),f=a.fnRecordsTotal(),g=a.fnRecordsDisplay(),j=g?c.sInfo:c.sInfoEmpty;g!==f&&(j+=" "+c.sInfoFiltered);j+=c.sInfoPostFix;j=Cb(a,j);c=c.fnInfoCallback;null!==c&&(j=c.call(a.oInstance,a,e,d,f,g,j));h(b).html(j)}}function Cb(a,b){var c=a.fnFormatNumber,e=a._iDisplayStart+1,d=a._iDisplayLength,f=a.fnRecordsDisplay(),g=-1===d;return b.replace(/_START_/g,c.call(a,e)).replace(/_END_/g,c.call(a,a.fnDisplayEnd())).replace(/_MAX_/g,
c.call(a,a.fnRecordsTotal())).replace(/_TOTAL_/g,c.call(a,f)).replace(/_PAGE_/g,c.call(a,g?1:Math.ceil(e/d))).replace(/_PAGES_/g,c.call(a,g?1:Math.ceil(f/d)))}function ga(a){var b,c,e=a.iInitDisplayStart,d=a.aoColumns,f;c=a.oFeatures;if(a.bInitialised){mb(a);jb(a);ea(a,a.aoHeader);ea(a,a.aoFooter);C(a,!0);c.bAutoWidth&&Ga(a);b=0;for(c=d.length;b<c;b++)f=d[b],f.sWidth&&(f.nTh.style.width=s(f.sWidth));N(a);d=B(a);"ssp"!=d&&("ajax"==d?ra(a,[],function(c){var f=sa(a,c);for(b=0;b<f.length;b++)K(a,f[b]);
a.iInitDisplayStart=e;N(a);C(a,!1);ta(a,c)},a):(C(a,!1),ta(a)))}else setTimeout(function(){ga(a)},200)}function ta(a,b){a._bInitComplete=!0;b&&X(a);w(a,"aoInitComplete","init",[a,b])}function Ra(a,b){var c=parseInt(b,10);a._iDisplayLength=c;Sa(a);w(a,null,"length",[a,c])}function nb(a){for(var b=a.oClasses,c=a.sTableId,e=a.aLengthMenu,d=h.isArray(e[0]),f=d?e[0]:e,e=d?e[1]:e,d=h("<select/>",{name:c+"_length","aria-controls":c,"class":b.sLengthSelect}),g=0,j=f.length;g<j;g++)d[0][g]=new Option(e[g],
f[g]);var i=h("<div><label/></div>").addClass(b.sLength);a.aanFeatures.l||(i[0].id=c+"_length");i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_",d[0].outerHTML));h("select",i).val(a._iDisplayLength).bind("change.DT",function(){Ra(a,h(this).val());M(a)});h(a.nTable).bind("length.dt.DT",function(b,c,f){a===c&&h("select",i).val(f)});return i[0]}function sb(a){var b=a.sPaginationType,c=m.ext.pager[b],e="function"===typeof c,d=function(a){M(a)},b=h("<div/>").addClass(a.oClasses.sPaging+b)[0],
f=a.aanFeatures;e||c.fnInit(a,b,d);f.p||(b.id=a.sTableId+"_paginate",a.aoDrawCallback.push({fn:function(a){if(e){var b=a._iDisplayStart,i=a._iDisplayLength,h=a.fnRecordsDisplay(),l=-1===i,b=l?0:Math.ceil(b/i),i=l?1:Math.ceil(h/i),h=c(b,i),q,l=0;for(q=f.p.length;l<q;l++)Pa(a,"pageButton")(a,f.p[l],l,h,b,i)}else c.fnUpdate(a,d)},sName:"pagination"}));return b}function Ta(a,b,c){var e=a._iDisplayStart,d=a._iDisplayLength,f=a.fnRecordsDisplay();0===f||-1===d?e=0:"number"===typeof b?(e=b*d,e>f&&(e=0)):
"first"==b?e=0:"previous"==b?(e=0<=d?e-d:0,0>e&&(e=0)):"next"==b?e+d<f&&(e+=d):"last"==b?e=Math.floor((f-1)/d)*d:I(a,0,"Unknown paging action: "+b,5);b=a._iDisplayStart!==e;a._iDisplayStart=e;b&&(w(a,null,"page",[a]),c&&M(a));return b}function pb(a){return h("<div/>",{id:!a.aanFeatures.r?a.sTableId+"_processing":null,"class":a.oClasses.sProcessing}).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]}function C(a,b){a.oFeatures.bProcessing&&h(a.aanFeatures.r).css("display",b?"block":"none");w(a,
null,"processing",[a,b])}function qb(a){var b=h(a.nTable);b.attr("role","grid");var c=a.oScroll;if(""===c.sX&&""===c.sY)return a.nTable;var e=c.sX,d=c.sY,f=a.oClasses,g=b.children("caption"),j=g.length?g[0]._captionSide:null,i=h(b[0].cloneNode(!1)),o=h(b[0].cloneNode(!1)),l=b.children("tfoot");c.sX&&"100%"===b.attr("width")&&b.removeAttr("width");l.length||(l=null);c=h("<div/>",{"class":f.sScrollWrapper}).append(h("<div/>",{"class":f.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,
width:e?!e?null:s(e):"100%"}).append(h("<div/>",{"class":f.sScrollHeadInner}).css({"box-sizing":"content-box",width:c.sXInner||"100%"}).append(i.removeAttr("id").css("margin-left",0).append("top"===j?g:null).append(b.children("thead"))))).append(h("<div/>",{"class":f.sScrollBody}).css({overflow:"auto",height:!d?null:s(d),width:!e?null:s(e)}).append(b));l&&c.append(h("<div/>",{"class":f.sScrollFoot}).css({overflow:"hidden",border:0,width:e?!e?null:s(e):"100%"}).append(h("<div/>",{"class":f.sScrollFootInner}).append(o.removeAttr("id").css("margin-left",
0).append("bottom"===j?g:null).append(b.children("tfoot")))));var b=c.children(),q=b[0],f=b[1],n=l?b[2]:null;if(e)h(f).on("scroll.DT",function(){var a=this.scrollLeft;q.scrollLeft=a;l&&(n.scrollLeft=a)});a.nScrollHead=q;a.nScrollBody=f;a.nScrollFoot=n;a.aoDrawCallback.push({fn:Y,sName:"scrolling"});return c[0]}function Y(a){var b=a.oScroll,c=b.sX,e=b.sXInner,d=b.sY,f=b.iBarWidth,g=h(a.nScrollHead),j=g[0].style,i=g.children("div"),o=i[0].style,l=i.children("table"),i=a.nScrollBody,q=h(i),n=i.style,
k=h(a.nScrollFoot).children("div"),p=k.children("table"),m=h(a.nTHead),r=h(a.nTable),t=r[0],O=t.style,L=a.nTFoot?h(a.nTFoot):null,ha=a.oBrowser,w=ha.bScrollOversize,v,u,y,x,z,A=[],B=[],C=[],D,E=function(a){a=a.style;a.paddingTop="0";a.paddingBottom="0";a.borderTopWidth="0";a.borderBottomWidth="0";a.height=0};r.children("thead, tfoot").remove();z=m.clone().prependTo(r);v=m.find("tr");y=z.find("tr");z.find("th, td").removeAttr("tabindex");L&&(x=L.clone().prependTo(r),u=L.find("tr"),x=x.find("tr"));
c||(n.width="100%",g[0].style.width="100%");h.each(qa(a,z),function(b,c){D=la(a,b);c.style.width=a.aoColumns[D].sWidth});L&&G(function(a){a.style.width=""},x);b.bCollapse&&""!==d&&(n.height=q[0].offsetHeight+m[0].offsetHeight+"px");g=r.outerWidth();if(""===c){if(O.width="100%",w&&(r.find("tbody").height()>i.offsetHeight||"scroll"==q.css("overflow-y")))O.width=s(r.outerWidth()-f)}else""!==e?O.width=s(e):g==q.width()&&q.height()<r.height()?(O.width=s(g-f),r.outerWidth()>g-f&&(O.width=s(g))):O.width=
s(g);g=r.outerWidth();G(E,y);G(function(a){C.push(a.innerHTML);A.push(s(h(a).css("width")))},y);G(function(a,b){a.style.width=A[b]},v);h(y).height(0);L&&(G(E,x),G(function(a){B.push(s(h(a).css("width")))},x),G(function(a,b){a.style.width=B[b]},u),h(x).height(0));G(function(a,b){a.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+C[b]+"</div>";a.style.width=A[b]},y);L&&G(function(a,b){a.innerHTML="";a.style.width=B[b]},x);if(r.outerWidth()<g){u=i.scrollHeight>i.offsetHeight||
"scroll"==q.css("overflow-y")?g+f:g;if(w&&(i.scrollHeight>i.offsetHeight||"scroll"==q.css("overflow-y")))O.width=s(u-f);(""===c||""!==e)&&I(a,1,"Possible column misalignment",6)}else u="100%";n.width=s(u);j.width=s(u);L&&(a.nScrollFoot.style.width=s(u));!d&&w&&(n.height=s(t.offsetHeight+f));d&&b.bCollapse&&(n.height=s(d),b=c&&t.offsetWidth>i.offsetWidth?f:0,t.offsetHeight<i.offsetHeight&&(n.height=s(t.offsetHeight+b)));b=r.outerWidth();l[0].style.width=s(b);o.width=s(b);l=r.height()>i.clientHeight||
"scroll"==q.css("overflow-y");ha="padding"+(ha.bScrollbarLeft?"Left":"Right");o[ha]=l?f+"px":"0px";L&&(p[0].style.width=s(b),k[0].style.width=s(b),k[0].style[ha]=l?f+"px":"0px");q.scroll();if((a.bSorted||a.bFiltered)&&!a._drawHold)i.scrollTop=0}function G(a,b,c){for(var e=0,d=0,f=b.length,g,j;d<f;){g=b[d].firstChild;for(j=c?c[d].firstChild:null;g;)1===g.nodeType&&(c?a(g,j,e):a(g,e),e++),g=g.nextSibling,j=c?j.nextSibling:null;d++}}function Ga(a){var b=a.nTable,c=a.aoColumns,e=a.oScroll,d=e.sY,f=e.sX,
g=e.sXInner,j=c.length,e=Z(a,"bVisible"),i=h("th",a.nTHead),o=b.getAttribute("width"),l=b.parentNode,k=!1,n,m;(n=b.style.width)&&-1!==n.indexOf("%")&&(o=n);for(n=0;n<e.length;n++)m=c[e[n]],null!==m.sWidth&&(m.sWidth=Db(m.sWidthOrig,l),k=!0);if(!k&&!f&&!d&&j==aa(a)&&j==i.length)for(n=0;n<j;n++)c[n].sWidth=s(i.eq(n).width());else{j=h(b).clone().css("visibility","hidden").removeAttr("id");j.find("tbody tr").remove();var p=h("<tr/>").appendTo(j.find("tbody"));j.find("tfoot th, tfoot td").css("width",
"");i=qa(a,j.find("thead")[0]);for(n=0;n<e.length;n++)m=c[e[n]],i[n].style.width=null!==m.sWidthOrig&&""!==m.sWidthOrig?s(m.sWidthOrig):"";if(a.aoData.length)for(n=0;n<e.length;n++)k=e[n],m=c[k],h(Eb(a,k)).clone(!1).append(m.sContentPadding).appendTo(p);j.appendTo(l);f&&g?j.width(g):f?(j.css("width","auto"),j.width()<l.offsetWidth&&j.width(l.offsetWidth)):d?j.width(l.offsetWidth):o&&j.width(o);Fb(a,j[0]);if(f){for(n=g=0;n<e.length;n++)m=c[e[n]],d=h(i[n]).outerWidth(),g+=null===m.sWidthOrig?d:parseInt(m.sWidth,
10)+d-h(i[n]).width();j.width(s(g));b.style.width=s(g)}for(n=0;n<e.length;n++)if(m=c[e[n]],d=h(i[n]).width())m.sWidth=s(d);b.style.width=s(j.css("width"));j.remove()}o&&(b.style.width=s(o));if((o||f)&&!a._reszEvt)b=function(){h(Ea).bind("resize.DT-"+a.sInstance,ua(function(){X(a)}))},a.oBrowser.bScrollOversize?setTimeout(b,1E3):b(),a._reszEvt=!0}function ua(a,b){var c=b!==k?b:200,e,d;return function(){var b=this,g=+new Date,j=arguments;e&&g<e+c?(clearTimeout(d),d=setTimeout(function(){e=k;a.apply(b,
j)},c)):(e=g,a.apply(b,j))}}function Db(a,b){if(!a)return 0;var c=h("<div/>").css("width",s(a)).appendTo(b||Q.body),e=c[0].offsetWidth;c.remove();return e}function Fb(a,b){var c=a.oScroll;if(c.sX||c.sY)c=!c.sX?c.iBarWidth:0,b.style.width=s(h(b).outerWidth()-c)}function Eb(a,b){var c=Gb(a,b);if(0>c)return null;var e=a.aoData[c];return!e.nTr?h("<td/>").html(x(a,c,b,"display"))[0]:e.anCells[b]}function Gb(a,b){for(var c,e=-1,d=-1,f=0,g=a.aoData.length;f<g;f++)c=x(a,f,b,"display")+"",c=c.replace($b,""),
c.length>e&&(e=c.length,d=f);return d}function s(a){return null===a?"0px":"number"==typeof a?0>a?"0px":a+"px":a.match(/\d$/)?a+"px":a}function Hb(){var a=m.__scrollbarWidth;if(a===k){var b=h("<p/>").css({position:"absolute",top:0,left:0,width:"100%",height:150,padding:0,overflow:"scroll",visibility:"hidden"}).appendTo("body"),a=b[0].offsetWidth-b[0].clientWidth;m.__scrollbarWidth=a;b.remove()}return a}function U(a){var b,c,e=[],d=a.aoColumns,f,g,j,i;b=a.aaSortingFixed;c=h.isPlainObject(b);var o=[];
f=function(a){a.length&&!h.isArray(a[0])?o.push(a):o.push.apply(o,a)};h.isArray(b)&&f(b);c&&b.pre&&f(b.pre);f(a.aaSorting);c&&b.post&&f(b.post);for(a=0;a<o.length;a++){i=o[a][0];f=d[i].aDataSort;b=0;for(c=f.length;b<c;b++)g=f[b],j=d[g].sType||"string",o[a]._idx===k&&(o[a]._idx=h.inArray(o[a][1],d[g].asSorting)),e.push({src:i,col:g,dir:o[a][1],index:o[a]._idx,type:j,formatter:m.ext.type.order[j+"-pre"]})}return e}function lb(a){var b,c,e=[],d=m.ext.type.order,f=a.aoData,g=0,j,i=a.aiDisplayMaster,h;
Ha(a);h=U(a);b=0;for(c=h.length;b<c;b++)j=h[b],j.formatter&&g++,Ib(a,j.col);if("ssp"!=B(a)&&0!==h.length){b=0;for(c=i.length;b<c;b++)e[i[b]]=b;g===h.length?i.sort(function(a,b){var c,d,g,j,i=h.length,k=f[a]._aSortData,m=f[b]._aSortData;for(g=0;g<i;g++)if(j=h[g],c=k[j.col],d=m[j.col],c=c<d?-1:c>d?1:0,0!==c)return"asc"===j.dir?c:-c;c=e[a];d=e[b];return c<d?-1:c>d?1:0}):i.sort(function(a,b){var c,g,j,i,k=h.length,m=f[a]._aSortData,r=f[b]._aSortData;for(j=0;j<k;j++)if(i=h[j],c=m[i.col],g=r[i.col],i=d[i.type+
"-"+i.dir]||d["string-"+i.dir],c=i(c,g),0!==c)return c;c=e[a];g=e[b];return c<g?-1:c>g?1:0})}a.bSorted=!0}function Jb(a){for(var b,c,e=a.aoColumns,d=U(a),a=a.oLanguage.oAria,f=0,g=e.length;f<g;f++){c=e[f];var j=c.asSorting;b=c.sTitle.replace(/<.*?>/g,"");var i=c.nTh;i.removeAttribute("aria-sort");c.bSortable&&(0<d.length&&d[0].col==f?(i.setAttribute("aria-sort","asc"==d[0].dir?"ascending":"descending"),c=j[d[0].index+1]||j[0]):c=j[0],b+="asc"===c?a.sSortAscending:a.sSortDescending);i.setAttribute("aria-label",
b)}}function Ua(a,b,c,e){var d=a.aaSorting,f=a.aoColumns[b].asSorting,g=function(a,b){var c=a._idx;c===k&&(c=h.inArray(a[1],f));return c+1<f.length?c+1:b?null:0};"number"===typeof d[0]&&(d=a.aaSorting=[d]);c&&a.oFeatures.bSortMulti?(c=h.inArray(b,D(d,"0")),-1!==c?(b=g(d[c],!0),null===b&&1===d.length&&(b=0),null===b?d.splice(c,1):(d[c][1]=f[b],d[c]._idx=b)):(d.push([b,f[0],0]),d[d.length-1]._idx=0)):d.length&&d[0][0]==b?(b=g(d[0]),d.length=1,d[0][1]=f[b],d[0]._idx=b):(d.length=0,d.push([b,f[0]]),d[0]._idx=
0);N(a);"function"==typeof e&&e(a)}function Oa(a,b,c,e){var d=a.aoColumns[c];Va(b,{},function(b){!1!==d.bSortable&&(a.oFeatures.bProcessing?(C(a,!0),setTimeout(function(){Ua(a,c,b.shiftKey,e);"ssp"!==B(a)&&C(a,!1)},0)):Ua(a,c,b.shiftKey,e))})}function xa(a){var b=a.aLastSort,c=a.oClasses.sSortColumn,e=U(a),d=a.oFeatures,f,g;if(d.bSort&&d.bSortClasses){d=0;for(f=b.length;d<f;d++)g=b[d].src,h(D(a.aoData,"anCells",g)).removeClass(c+(2>d?d+1:3));d=0;for(f=e.length;d<f;d++)g=e[d].src,h(D(a.aoData,"anCells",
g)).addClass(c+(2>d?d+1:3))}a.aLastSort=e}function Ib(a,b){var c=a.aoColumns[b],e=m.ext.order[c.sSortDataType],d;e&&(d=e.call(a.oInstance,a,b,$(a,b)));for(var f,g=m.ext.type.order[c.sType+"-pre"],j=0,i=a.aoData.length;j<i;j++)if(c=a.aoData[j],c._aSortData||(c._aSortData=[]),!c._aSortData[b]||e)f=e?d[j]:x(a,j,b,"sort"),c._aSortData[b]=g?g(f):f}function ya(a){if(a.oFeatures.bStateSave&&!a.bDestroying){var b={time:+new Date,start:a._iDisplayStart,length:a._iDisplayLength,order:h.extend(!0,[],a.aaSorting),
search:zb(a.oPreviousSearch),columns:h.map(a.aoColumns,function(b,e){return{visible:b.bVisible,search:zb(a.aoPreSearchCols[e])}})};w(a,"aoStateSaveParams","stateSaveParams",[a,b]);a.oSavedState=b;a.fnStateSaveCallback.call(a.oInstance,a,b)}}function Kb(a){var b,c,e=a.aoColumns;if(a.oFeatures.bStateSave){var d=a.fnStateLoadCallback.call(a.oInstance,a);if(d&&d.time&&(b=w(a,"aoStateLoadParams","stateLoadParams",[a,d]),-1===h.inArray(!1,b)&&(b=a.iStateDuration,!(0<b&&d.time<+new Date-1E3*b)&&e.length===
d.columns.length))){a.oLoadedState=h.extend(!0,{},d);d.start!==k&&(a._iDisplayStart=d.start,a.iInitDisplayStart=d.start);d.length!==k&&(a._iDisplayLength=d.length);d.order!==k&&(a.aaSorting=[],h.each(d.order,function(b,c){a.aaSorting.push(c[0]>=e.length?[0,c[1]]:c)}));d.search!==k&&h.extend(a.oPreviousSearch,Ab(d.search));b=0;for(c=d.columns.length;b<c;b++){var f=d.columns[b];f.visible!==k&&(e[b].bVisible=f.visible);f.search!==k&&h.extend(a.aoPreSearchCols[b],Ab(f.search))}w(a,"aoStateLoaded","stateLoaded",
[a,d])}}}function za(a){var b=m.settings,a=h.inArray(a,D(b,"nTable"));return-1!==a?b[a]:null}function I(a,b,c,e){c="DataTables warning: "+(null!==a?"table id="+a.sTableId+" - ":"")+c;e&&(c+=". For more information about this error, please see http://datatables.net/tn/"+e);if(b)Ea.console&&console.log&&console.log(c);else if(b=m.ext,b=b.sErrMode||b.errMode,w(a,null,"error",[a,e,c]),"alert"==b)alert(c);else{if("throw"==b)throw Error(c);"function"==typeof b&&b(a,e,c)}}function E(a,b,c,e){h.isArray(c)?
h.each(c,function(c,f){h.isArray(f)?E(a,b,f[0],f[1]):E(a,b,f)}):(e===k&&(e=c),b[c]!==k&&(a[e]=b[c]))}function Lb(a,b,c){var e,d;for(d in b)b.hasOwnProperty(d)&&(e=b[d],h.isPlainObject(e)?(h.isPlainObject(a[d])||(a[d]={}),h.extend(!0,a[d],e)):a[d]=c&&"data"!==d&&"aaData"!==d&&h.isArray(e)?e.slice():e);return a}function Va(a,b,c){h(a).bind("click.DT",b,function(b){a.blur();c(b)}).bind("keypress.DT",b,function(a){13===a.which&&(a.preventDefault(),c(a))}).bind("selectstart.DT",function(){return!1})}function z(a,
b,c,e){c&&a[b].push({fn:c,sName:e})}function w(a,b,c,e){var d=[];b&&(d=h.map(a[b].slice().reverse(),function(b){return b.fn.apply(a.oInstance,e)}));null!==c&&(b=h.Event(c+".dt"),h(a.nTable).trigger(b,e),d.push(b.result));return d}function Sa(a){var b=a._iDisplayStart,c=a.fnDisplayEnd(),e=a._iDisplayLength;b>=c&&(b=c-e);b-=b%e;if(-1===e||0>b)b=0;a._iDisplayStart=b}function Pa(a,b){var c=a.renderer,e=m.ext.renderer[b];return h.isPlainObject(c)&&c[b]?e[c[b]]||e._:"string"===typeof c?e[c]||e._:e._}function B(a){return a.oFeatures.bServerSide?
"ssp":a.ajax||a.sAjaxSource?"ajax":"dom"}function Wa(a,b){var c=[],c=Mb.numbers_length,e=Math.floor(c/2);b<=c?c=V(0,b):a<=e?(c=V(0,c-2),c.push("ellipsis"),c.push(b-1)):(a>=b-1-e?c=V(b-(c-2),b):(c=V(a-e+2,a+e-1),c.push("ellipsis"),c.push(b-1)),c.splice(0,0,"ellipsis"),c.splice(0,0,0));c.DT_el="span";return c}function db(a){h.each({num:function(b){return Aa(b,a)},"num-fmt":function(b){return Aa(b,a,Xa)},"html-num":function(b){return Aa(b,a,Ba)},"html-num-fmt":function(b){return Aa(b,a,Ba,Xa)}},function(b,
c){u.type.order[b+a+"-pre"]=c;b.match(/^html\-/)&&(u.type.search[b+a]=u.type.search.html)})}function Nb(a){return function(){var b=[za(this[m.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return m.ext.internal[a].apply(this,b)}}var m,u,t,r,v,Ya={},Ob=/[\r\n]/g,Ba=/<.*?>/g,ac=/^[\w\+\-]/,bc=/[\w\+\-]$/,Yb=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)","g"),Xa=/[',$\u00a3\u20ac\u00a5%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,J=function(a){return!a||!0===a||
"-"===a?!0:!1},Pb=function(a){var b=parseInt(a,10);return!isNaN(b)&&isFinite(a)?b:null},Qb=function(a,b){Ya[b]||(Ya[b]=RegExp(va(b),"g"));return"string"===typeof a&&"."!==b?a.replace(/\./g,"").replace(Ya[b],"."):a},Za=function(a,b,c){var e="string"===typeof a;if(J(a))return!0;b&&e&&(a=Qb(a,b));c&&e&&(a=a.replace(Xa,""));return!isNaN(parseFloat(a))&&isFinite(a)},Rb=function(a,b,c){return J(a)?!0:!(J(a)||"string"===typeof a)?null:Za(a.replace(Ba,""),b,c)?!0:null},D=function(a,b,c){var e=[],d=0,f=a.length;
if(c!==k)for(;d<f;d++)a[d]&&a[d][b]&&e.push(a[d][b][c]);else for(;d<f;d++)a[d]&&e.push(a[d][b]);return e},ia=function(a,b,c,e){var d=[],f=0,g=b.length;if(e!==k)for(;f<g;f++)a[b[f]][c]&&d.push(a[b[f]][c][e]);else for(;f<g;f++)d.push(a[b[f]][c]);return d},V=function(a,b){var c=[],e;b===k?(b=0,e=a):(e=b,b=a);for(var d=b;d<e;d++)c.push(d);return c},Sb=function(a){for(var b=[],c=0,e=a.length;c<e;c++)a[c]&&b.push(a[c]);return b},Na=function(a){var b=[],c,e,d=a.length,f,g=0;e=0;a:for(;e<d;e++){c=a[e];for(f=
0;f<g;f++)if(b[f]===c)continue a;b.push(c);g++}return b},A=function(a,b,c){a[b]!==k&&(a[c]=a[b])},ba=/\[.*?\]$/,T=/\(\)$/,wa=h("<div>")[0],Zb=wa.textContent!==k,$b=/<.*?>/g;m=function(a){this.$=function(a,b){return this.api(!0).$(a,b)};this._=function(a,b){return this.api(!0).rows(a,b).data()};this.api=function(a){return a?new t(za(this[u.iApiIndex])):new t(this)};this.fnAddData=function(a,b){var c=this.api(!0),e=h.isArray(a)&&(h.isArray(a[0])||h.isPlainObject(a[0]))?c.rows.add(a):c.row.add(a);(b===
k||b)&&c.draw();return e.flatten().toArray()};this.fnAdjustColumnSizing=function(a){var b=this.api(!0).columns.adjust(),c=b.settings()[0],e=c.oScroll;a===k||a?b.draw(!1):(""!==e.sX||""!==e.sY)&&Y(c)};this.fnClearTable=function(a){var b=this.api(!0).clear();(a===k||a)&&b.draw()};this.fnClose=function(a){this.api(!0).row(a).child.hide()};this.fnDeleteRow=function(a,b,c){var e=this.api(!0),a=e.rows(a),d=a.settings()[0],h=d.aoData[a[0][0]];a.remove();b&&b.call(this,d,h);(c===k||c)&&e.draw();return h};
this.fnDestroy=function(a){this.api(!0).destroy(a)};this.fnDraw=function(a){this.api(!0).draw(a)};this.fnFilter=function(a,b,c,e,d,h){d=this.api(!0);null===b||b===k?d.search(a,c,e,h):d.column(b).search(a,c,e,h);d.draw()};this.fnGetData=function(a,b){var c=this.api(!0);if(a!==k){var e=a.nodeName?a.nodeName.toLowerCase():"";return b!==k||"td"==e||"th"==e?c.cell(a,b).data():c.row(a).data()||null}return c.data().toArray()};this.fnGetNodes=function(a){var b=this.api(!0);return a!==k?b.row(a).node():b.rows().nodes().flatten().toArray()};
this.fnGetPosition=function(a){var b=this.api(!0),c=a.nodeName.toUpperCase();return"TR"==c?b.row(a).index():"TD"==c||"TH"==c?(a=b.cell(a).index(),[a.row,a.columnVisible,a.column]):null};this.fnIsOpen=function(a){return this.api(!0).row(a).child.isShown()};this.fnOpen=function(a,b,c){return this.api(!0).row(a).child(b,c).show().child()[0]};this.fnPageChange=function(a,b){var c=this.api(!0).page(a);(b===k||b)&&c.draw(!1)};this.fnSetColumnVis=function(a,b,c){a=this.api(!0).column(a).visible(b);(c===
k||c)&&a.columns.adjust().draw()};this.fnSettings=function(){return za(this[u.iApiIndex])};this.fnSort=function(a){this.api(!0).order(a).draw()};this.fnSortListener=function(a,b,c){this.api(!0).order.listener(a,b,c)};this.fnUpdate=function(a,b,c,e,d){var h=this.api(!0);c===k||null===c?h.row(b).data(a):h.cell(b,c).data(a);(d===k||d)&&h.columns.adjust();(e===k||e)&&h.draw();return 0};this.fnVersionCheck=u.fnVersionCheck;var b=this,c=a===k,e=this.length;c&&(a={});this.oApi=this.internal=u.internal;for(var d in m.ext.internal)d&&
(this[d]=Nb(d));this.each(function(){var d={},d=1<e?Lb(d,a,!0):a,g=0,j,i=this.getAttribute("id"),o=!1,l=m.defaults,q=h(this);if("table"!=this.nodeName.toLowerCase())I(null,0,"Non-table node initialisation ("+this.nodeName+")",2);else{eb(l);fb(l.column);H(l,l,!0);H(l.column,l.column,!0);H(l,h.extend(d,q.data()));var n=m.settings,g=0;for(j=n.length;g<j;g++){var r=n[g];if(r.nTable==this||r.nTHead.parentNode==this||r.nTFoot&&r.nTFoot.parentNode==this){g=d.bRetrieve!==k?d.bRetrieve:l.bRetrieve;if(c||g)return r.oInstance;
if(d.bDestroy!==k?d.bDestroy:l.bDestroy){r.oInstance.fnDestroy();break}else{I(r,0,"Cannot reinitialise DataTable",3);return}}if(r.sTableId==this.id){n.splice(g,1);break}}if(null===i||""===i)this.id=i="DataTables_Table_"+m.ext._unique++;var p=h.extend(!0,{},m.models.oSettings,{sDestroyWidth:q[0].style.width,sInstance:i,sTableId:i});p.nTable=this;p.oApi=b.internal;p.oInit=d;n.push(p);p.oInstance=1===b.length?b:q.dataTable();eb(d);d.oLanguage&&P(d.oLanguage);d.aLengthMenu&&!d.iDisplayLength&&(d.iDisplayLength=
h.isArray(d.aLengthMenu[0])?d.aLengthMenu[0][0]:d.aLengthMenu[0]);d=Lb(h.extend(!0,{},l),d);E(p.oFeatures,d,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));E(p,d,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback",
"renderer","searchDelay",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"],["bJQueryUI","bJUI"]]);E(p.oScroll,d,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);E(p.oLanguage,d,"fnInfoCallback");z(p,"aoDrawCallback",d.fnDrawCallback,"user");z(p,"aoServerParams",d.fnServerParams,"user");z(p,"aoStateSaveParams",d.fnStateSaveParams,"user");z(p,"aoStateLoadParams",
d.fnStateLoadParams,"user");z(p,"aoStateLoaded",d.fnStateLoaded,"user");z(p,"aoRowCallback",d.fnRowCallback,"user");z(p,"aoRowCreatedCallback",d.fnCreatedRow,"user");z(p,"aoHeaderCallback",d.fnHeaderCallback,"user");z(p,"aoFooterCallback",d.fnFooterCallback,"user");z(p,"aoInitComplete",d.fnInitComplete,"user");z(p,"aoPreDrawCallback",d.fnPreDrawCallback,"user");i=p.oClasses;d.bJQueryUI?(h.extend(i,m.ext.oJUIClasses,d.oClasses),d.sDom===l.sDom&&"lfrtip"===l.sDom&&(p.sDom='<"H"lfr>t<"F"ip>'),p.renderer)?
h.isPlainObject(p.renderer)&&!p.renderer.header&&(p.renderer.header="jqueryui"):p.renderer="jqueryui":h.extend(i,m.ext.classes,d.oClasses);q.addClass(i.sTable);if(""!==p.oScroll.sX||""!==p.oScroll.sY)p.oScroll.iBarWidth=Hb();!0===p.oScroll.sX&&(p.oScroll.sX="100%");p.iInitDisplayStart===k&&(p.iInitDisplayStart=d.iDisplayStart,p._iDisplayStart=d.iDisplayStart);null!==d.iDeferLoading&&(p.bDeferLoading=!0,g=h.isArray(d.iDeferLoading),p._iRecordsDisplay=g?d.iDeferLoading[0]:d.iDeferLoading,p._iRecordsTotal=
g?d.iDeferLoading[1]:d.iDeferLoading);var t=p.oLanguage;h.extend(!0,t,d.oLanguage);""!==t.sUrl&&(h.ajax({dataType:"json",url:t.sUrl,success:function(a){P(a);H(l.oLanguage,a);h.extend(true,t,a);ga(p)},error:function(){ga(p)}}),o=!0);null===d.asStripeClasses&&(p.asStripeClasses=[i.sStripeOdd,i.sStripeEven]);var g=p.asStripeClasses,s=q.children("tbody").find("tr").eq(0);-1!==h.inArray(!0,h.map(g,function(a){return s.hasClass(a)}))&&(h("tbody tr",this).removeClass(g.join(" ")),p.asDestroyStripes=g.slice());
n=[];g=this.getElementsByTagName("thead");0!==g.length&&(da(p.aoHeader,g[0]),n=qa(p));if(null===d.aoColumns){r=[];g=0;for(j=n.length;g<j;g++)r.push(null)}else r=d.aoColumns;g=0;for(j=r.length;g<j;g++)Fa(p,n?n[g]:null);ib(p,d.aoColumnDefs,r,function(a,b){ka(p,a,b)});if(s.length){var u=function(a,b){return a.getAttribute("data-"+b)!==null?b:null};h.each(na(p,s[0]).cells,function(a,b){var c=p.aoColumns[a];if(c.mData===a){var d=u(b,"sort")||u(b,"order"),e=u(b,"filter")||u(b,"search");if(d!==null||e!==
null){c.mData={_:a+".display",sort:d!==null?a+".@data-"+d:k,type:d!==null?a+".@data-"+d:k,filter:e!==null?a+".@data-"+e:k};ka(p,a)}}})}var v=p.oFeatures;d.bStateSave&&(v.bStateSave=!0,Kb(p,d),z(p,"aoDrawCallback",ya,"state_save"));if(d.aaSorting===k){n=p.aaSorting;g=0;for(j=n.length;g<j;g++)n[g][1]=p.aoColumns[g].asSorting[0]}xa(p);v.bSort&&z(p,"aoDrawCallback",function(){if(p.bSorted){var a=U(p),b={};h.each(a,function(a,c){b[c.src]=c.dir});w(p,null,"order",[p,a,b]);Jb(p)}});z(p,"aoDrawCallback",
function(){(p.bSorted||B(p)==="ssp"||v.bDeferRender)&&xa(p)},"sc");gb(p);g=q.children("caption").each(function(){this._captionSide=q.css("caption-side")});j=q.children("thead");0===j.length&&(j=h("<thead/>").appendTo(this));p.nTHead=j[0];j=q.children("tbody");0===j.length&&(j=h("<tbody/>").appendTo(this));p.nTBody=j[0];j=q.children("tfoot");if(0===j.length&&0<g.length&&(""!==p.oScroll.sX||""!==p.oScroll.sY))j=h("<tfoot/>").appendTo(this);0===j.length||0===j.children().length?q.addClass(i.sNoFooter):
0<j.length&&(p.nTFoot=j[0],da(p.aoFooter,p.nTFoot));if(d.aaData)for(g=0;g<d.aaData.length;g++)K(p,d.aaData[g]);else(p.bDeferLoading||"dom"==B(p))&&ma(p,h(p.nTBody).children("tr"));p.aiDisplay=p.aiDisplayMaster.slice();p.bInitialised=!0;!1===o&&ga(p)}});b=null;return this};var Tb=[],y=Array.prototype,cc=function(a){var b,c,e=m.settings,d=h.map(e,function(a){return a.nTable});if(a){if(a.nTable&&a.oApi)return[a];if(a.nodeName&&"table"===a.nodeName.toLowerCase())return b=h.inArray(a,d),-1!==b?[e[b]]:
null;if(a&&"function"===typeof a.settings)return a.settings().toArray();"string"===typeof a?c=h(a):a instanceof h&&(c=a)}else return[];if(c)return c.map(function(){b=h.inArray(this,d);return-1!==b?e[b]:null}).toArray()};t=function(a,b){if(!(this instanceof t))return new t(a,b);var c=[],e=function(a){(a=cc(a))&&c.push.apply(c,a)};if(h.isArray(a))for(var d=0,f=a.length;d<f;d++)e(a[d]);else e(a);this.context=Na(c);b&&this.push.apply(this,b.toArray?b.toArray():b);this.selector={rows:null,cols:null,opts:null};
t.extend(this,this,Tb)};m.Api=t;t.prototype={any:function(){return 0!==this.flatten().length},concat:y.concat,context:[],each:function(a){for(var b=0,c=this.length;b<c;b++)a.call(this,this[b],b,this);return this},eq:function(a){var b=this.context;return b.length>a?new t(b[a],this[a]):null},filter:function(a){var b=[];if(y.filter)b=y.filter.call(this,a,this);else for(var c=0,e=this.length;c<e;c++)a.call(this,this[c],c,this)&&b.push(this[c]);return new t(this.context,b)},flatten:function(){var a=[];
return new t(this.context,a.concat.apply(a,this.toArray()))},join:y.join,indexOf:y.indexOf||function(a,b){for(var c=b||0,e=this.length;c<e;c++)if(this[c]===a)return c;return-1},iterator:function(a,b,c,e){var d=[],f,g,h,i,o,l=this.context,q,n,m=this.selector;"string"===typeof a&&(e=c,c=b,b=a,a=!1);g=0;for(h=l.length;g<h;g++){var p=new t(l[g]);if("table"===b)f=c.call(p,l[g],g),f!==k&&d.push(f);else if("columns"===b||"rows"===b)f=c.call(p,l[g],this[g],g),f!==k&&d.push(f);else if("column"===b||"column-rows"===
b||"row"===b||"cell"===b){n=this[g];"column-rows"===b&&(q=Ca(l[g],m.opts));i=0;for(o=n.length;i<o;i++)f=n[i],f="cell"===b?c.call(p,l[g],f.row,f.column,g,i):c.call(p,l[g],f,g,i,q),f!==k&&d.push(f)}}return d.length||e?(a=new t(l,a?d.concat.apply([],d):d),b=a.selector,b.rows=m.rows,b.cols=m.cols,b.opts=m.opts,a):this},lastIndexOf:y.lastIndexOf||function(a,b){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(a){var b=[];if(y.map)b=y.map.call(this,a,this);else for(var c=
0,e=this.length;c<e;c++)b.push(a.call(this,this[c],c));return new t(this.context,b)},pluck:function(a){return this.map(function(b){return b[a]})},pop:y.pop,push:y.push,reduce:y.reduce||function(a,b){return hb(this,a,b,0,this.length,1)},reduceRight:y.reduceRight||function(a,b){return hb(this,a,b,this.length-1,-1,-1)},reverse:y.reverse,selector:null,shift:y.shift,sort:y.sort,splice:y.splice,toArray:function(){return y.slice.call(this)},to$:function(){return h(this)},toJQuery:function(){return h(this)},
unique:function(){return new t(this.context,Na(this))},unshift:y.unshift};t.extend=function(a,b,c){if(c.length&&b&&(b instanceof t||b.__dt_wrapper)){var e,d,f,g=function(a,b,c){return function(){var d=b.apply(a,arguments);t.extend(d,d,c.methodExt);return d}};e=0;for(d=c.length;e<d;e++)f=c[e],b[f.name]="function"===typeof f.val?g(a,f.val,f):h.isPlainObject(f.val)?{}:f.val,b[f.name].__dt_wrapper=!0,t.extend(a,b[f.name],f.propExt)}};t.register=r=function(a,b){if(h.isArray(a))for(var c=0,e=a.length;c<
e;c++)t.register(a[c],b);else for(var d=a.split("."),f=Tb,g,j,c=0,e=d.length;c<e;c++){g=(j=-1!==d[c].indexOf("()"))?d[c].replace("()",""):d[c];var i;a:{i=0;for(var o=f.length;i<o;i++)if(f[i].name===g){i=f[i];break a}i=null}i||(i={name:g,val:{},methodExt:[],propExt:[]},f.push(i));c===e-1?i.val=b:f=j?i.methodExt:i.propExt}};t.registerPlural=v=function(a,b,c){t.register(a,c);t.register(b,function(){var a=c.apply(this,arguments);return a===this?this:a instanceof t?a.length?h.isArray(a[0])?new t(a.context,
a[0]):a[0]:k:a})};r("tables()",function(a){var b;if(a){b=t;var c=this.context;if("number"===typeof a)a=[c[a]];else var e=h.map(c,function(a){return a.nTable}),a=h(e).filter(a).map(function(){var a=h.inArray(this,e);return c[a]}).toArray();b=new b(a)}else b=this;return b});r("table()",function(a){var a=this.tables(a),b=a.context;return b.length?new t(b[0]):a});v("tables().nodes()","table().node()",function(){return this.iterator("table",function(a){return a.nTable},1)});v("tables().body()","table().body()",
function(){return this.iterator("table",function(a){return a.nTBody},1)});v("tables().header()","table().header()",function(){return this.iterator("table",function(a){return a.nTHead},1)});v("tables().footer()","table().footer()",function(){return this.iterator("table",function(a){return a.nTFoot},1)});v("tables().containers()","table().container()",function(){return this.iterator("table",function(a){return a.nTableWrapper},1)});r("draw()",function(a){return this.iterator("table",function(b){N(b,
!1===a)})});r("page()",function(a){return a===k?this.page.info().page:this.iterator("table",function(b){Ta(b,a)})});r("page.info()",function(){if(0===this.context.length)return k;var a=this.context[0],b=a._iDisplayStart,c=a._iDisplayLength,e=a.fnRecordsDisplay(),d=-1===c;return{page:d?0:Math.floor(b/c),pages:d?1:Math.ceil(e/c),start:b,end:a.fnDisplayEnd(),length:c,recordsTotal:a.fnRecordsTotal(),recordsDisplay:e}});r("page.len()",function(a){return a===k?0!==this.context.length?this.context[0]._iDisplayLength:
k:this.iterator("table",function(b){Ra(b,a)})});var Ub=function(a,b,c){if(c){var e=new t(a);e.one("draw",function(){c(e.ajax.json())})}"ssp"==B(a)?N(a,b):(C(a,!0),ra(a,[],function(c){oa(a);for(var c=sa(a,c),e=0,g=c.length;e<g;e++)K(a,c[e]);N(a,b);C(a,!1)}))};r("ajax.json()",function(){var a=this.context;if(0<a.length)return a[0].json});r("ajax.params()",function(){var a=this.context;if(0<a.length)return a[0].oAjaxData});r("ajax.reload()",function(a,b){return this.iterator("table",function(c){Ub(c,
!1===b,a)})});r("ajax.url()",function(a){var b=this.context;if(a===k){if(0===b.length)return k;b=b[0];return b.ajax?h.isPlainObject(b.ajax)?b.ajax.url:b.ajax:b.sAjaxSource}return this.iterator("table",function(b){h.isPlainObject(b.ajax)?b.ajax.url=a:b.ajax=a})});r("ajax.url().load()",function(a,b){return this.iterator("table",function(c){Ub(c,!1===b,a)})});var $a=function(a,b,c,e,d){var f=[],g,j,i,o,l,q;i=typeof b;if(!b||"string"===i||"function"===i||b.length===k)b=[b];i=0;for(o=b.length;i<o;i++){j=
b[i]&&b[i].split?b[i].split(","):[b[i]];l=0;for(q=j.length;l<q;l++)(g=c("string"===typeof j[l]?h.trim(j[l]):j[l]))&&g.length&&f.push.apply(f,g)}a=u.selector[a];if(a.length){i=0;for(o=a.length;i<o;i++)f=a[i](e,d,f)}return f},ab=function(a){a||(a={});a.filter&&a.search===k&&(a.search=a.filter);return h.extend({search:"none",order:"current",page:"all"},a)},bb=function(a){for(var b=0,c=a.length;b<c;b++)if(0<a[b].length)return a[0]=a[b],a[0].length=1,a.length=1,a.context=[a.context[b]],a;a.length=0;return a},
Ca=function(a,b){var c,e,d,f=[],g=a.aiDisplay;c=a.aiDisplayMaster;var j=b.search;e=b.order;d=b.page;if("ssp"==B(a))return"removed"===j?[]:V(0,c.length);if("current"==d){c=a._iDisplayStart;for(e=a.fnDisplayEnd();c<e;c++)f.push(g[c])}else if("current"==e||"applied"==e)f="none"==j?c.slice():"applied"==j?g.slice():h.map(c,function(a){return-1===h.inArray(a,g)?a:null});else if("index"==e||"original"==e){c=0;for(e=a.aoData.length;c<e;c++)"none"==j?f.push(c):(d=h.inArray(c,g),(-1===d&&"removed"==j||0<=d&&
"applied"==j)&&f.push(c))}return f};r("rows()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=ab(b),c=this.iterator("table",function(c){var d=b;return $a("row",a,function(a){var b=Pb(a);if(b!==null&&!d)return[b];var j=Ca(c,d);if(b!==null&&h.inArray(b,j)!==-1)return[b];if(!a)return j;if(typeof a==="function")return h.map(j,function(b){var d=c.aoData[b];return a(b,d._aData,d.nTr)?b:null});b=Sb(ia(c.aoData,j,"nTr"));return a.nodeName&&h.inArray(a,b)!==-1?[a._DT_RowIndex]:h(b).filter(a).map(function(){return this._DT_RowIndex}).toArray()},
c,d)},1);c.selector.rows=a;c.selector.opts=b;return c});r("rows().nodes()",function(){return this.iterator("row",function(a,b){return a.aoData[b].nTr||k},1)});r("rows().data()",function(){return this.iterator(!0,"rows",function(a,b){return ia(a.aoData,b,"_aData")},1)});v("rows().cache()","row().cache()",function(a){return this.iterator("row",function(b,c){var e=b.aoData[c];return"search"===a?e._aFilterData:e._aSortData},1)});v("rows().invalidate()","row().invalidate()",function(a){return this.iterator("row",
function(b,c){ca(b,c,a)})});v("rows().indexes()","row().index()",function(){return this.iterator("row",function(a,b){return b},1)});v("rows().remove()","row().remove()",function(){var a=this;return this.iterator("row",function(b,c,e){var d=b.aoData;d.splice(c,1);for(var f=0,g=d.length;f<g;f++)null!==d[f].nTr&&(d[f].nTr._DT_RowIndex=f);h.inArray(c,b.aiDisplay);pa(b.aiDisplayMaster,c);pa(b.aiDisplay,c);pa(a[e],c,!1);Sa(b)})});r("rows.add()",function(a){var b=this.iterator("table",function(b){var c,
f,g,h=[];f=0;for(g=a.length;f<g;f++)c=a[f],c.nodeName&&"TR"===c.nodeName.toUpperCase()?h.push(ma(b,c)[0]):h.push(K(b,c));return h},1),c=this.rows(-1);c.pop();c.push.apply(c,b.toArray());return c});r("row()",function(a,b){return bb(this.rows(a,b))});r("row().data()",function(a){var b=this.context;if(a===k)return b.length&&this.length?b[0].aoData[this[0]]._aData:k;b[0].aoData[this[0]]._aData=a;ca(b[0],this[0],"data");return this});r("row().node()",function(){var a=this.context;return a.length&&this.length?
a[0].aoData[this[0]].nTr||null:null});r("row.add()",function(a){a instanceof h&&a.length&&(a=a[0]);var b=this.iterator("table",function(b){return a.nodeName&&"TR"===a.nodeName.toUpperCase()?ma(b,a)[0]:K(b,a)});return this.row(b[0])});var cb=function(a,b){var c=a.context;c.length&&(c=c[0].aoData[b!==k?b:a[0]],c._details&&(c._details.remove(),c._detailsShow=k,c._details=k))},Vb=function(a,b){var c=a.context;if(c.length&&a.length){var e=c[0].aoData[a[0]];if(e._details){(e._detailsShow=b)?e._details.insertAfter(e.nTr):
e._details.detach();var d=c[0],f=new t(d),g=d.aoData;f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");0<D(g,"_details").length&&(f.on("draw.dt.DT_details",function(a,b){d===b&&f.rows({page:"current"}).eq(0).each(function(a){a=g[a];a._detailsShow&&a._details.insertAfter(a.nTr)})}),f.on("column-visibility.dt.DT_details",function(a,b){if(d===b)for(var c,e=aa(b),f=0,h=g.length;f<h;f++)c=g[f],c._details&&c._details.children("td[colspan]").attr("colspan",e)}),f.on("destroy.dt.DT_details",
function(a,b){if(d===b)for(var c=0,e=g.length;c<e;c++)g[c]._details&&cb(f,c)}))}}};r("row().child()",function(a,b){var c=this.context;if(a===k)return c.length&&this.length?c[0].aoData[this[0]]._details:k;if(!0===a)this.child.show();else if(!1===a)cb(this);else if(c.length&&this.length){var e=c[0],c=c[0].aoData[this[0]],d=[],f=function(a,b){if(h.isArray(a)||a instanceof h)for(var c=0,k=a.length;c<k;c++)f(a[c],b);else a.nodeName&&"tr"===a.nodeName.toLowerCase()?d.push(a):(c=h("<tr><td/></tr>").addClass(b),
h("td",c).addClass(b).html(a)[0].colSpan=aa(e),d.push(c[0]))};f(a,b);c._details&&c._details.remove();c._details=h(d);c._detailsShow&&c._details.insertAfter(c.nTr)}return this});r(["row().child.show()","row().child().show()"],function(){Vb(this,!0);return this});r(["row().child.hide()","row().child().hide()"],function(){Vb(this,!1);return this});r(["row().child.remove()","row().child().remove()"],function(){cb(this);return this});r("row().child.isShown()",function(){var a=this.context;return a.length&&
this.length?a[0].aoData[this[0]]._detailsShow||!1:!1});var dc=/^(.+):(name|visIdx|visible)$/,Wb=function(a,b,c,e,d){for(var c=[],e=0,f=d.length;e<f;e++)c.push(x(a,d[e],b));return c};r("columns()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=ab(b),c=this.iterator("table",function(c){var d=a,f=b,g=c.aoColumns,j=D(g,"sName"),i=D(g,"nTh");return $a("column",d,function(a){var b=Pb(a);if(a==="")return V(g.length);if(b!==null)return[b>=0?b:g.length+b];if(typeof a==="function"){var d=Ca(c,
f);return h.map(g,function(b,f){return a(f,Wb(c,f,0,0,d),i[f])?f:null})}var k=typeof a==="string"?a.match(dc):"";if(k)switch(k[2]){case "visIdx":case "visible":b=parseInt(k[1],10);if(b<0){var m=h.map(g,function(a,b){return a.bVisible?b:null});return[m[m.length+b]]}return[la(c,b)];case "name":return h.map(j,function(a,b){return a===k[1]?b:null})}else return h(i).filter(a).map(function(){return h.inArray(this,i)}).toArray()},c,f)},1);c.selector.cols=a;c.selector.opts=b;return c});v("columns().header()",
"column().header()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTh},1)});v("columns().footer()","column().footer()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTf},1)});v("columns().data()","column().data()",function(){return this.iterator("column-rows",Wb,1)});v("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].mData},1)});v("columns().cache()","column().cache()",
function(a){return this.iterator("column-rows",function(b,c,e,d,f){return ia(b.aoData,f,"search"===a?"_aFilterData":"_aSortData",c)},1)});v("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(a,b,c,e,d){return ia(a.aoData,d,"anCells",b)},1)});v("columns().visible()","column().visible()",function(a,b){return this.iterator("column",function(c,e){if(a===k)return c.aoColumns[e].bVisible;var d=c.aoColumns,f=d[e],g=c.aoData,j,i,m;if(a!==k&&f.bVisible!==a){if(a){var l=
h.inArray(!0,D(d,"bVisible"),e+1);j=0;for(i=g.length;j<i;j++)m=g[j].nTr,d=g[j].anCells,m&&m.insertBefore(d[e],d[l]||null)}else h(D(c.aoData,"anCells",e)).detach();f.bVisible=a;ea(c,c.aoHeader);ea(c,c.aoFooter);if(b===k||b)X(c),(c.oScroll.sX||c.oScroll.sY)&&Y(c);w(c,null,"column-visibility",[c,e,a]);ya(c)}})});v("columns().indexes()","column().index()",function(a){return this.iterator("column",function(b,c){return"visible"===a?$(b,c):c},1)});r("columns.adjust()",function(){return this.iterator("table",
function(a){X(a)},1)});r("column.index()",function(a,b){if(0!==this.context.length){var c=this.context[0];if("fromVisible"===a||"toData"===a)return la(c,b);if("fromData"===a||"toVisible"===a)return $(c,b)}});r("column()",function(a,b){return bb(this.columns(a,b))});r("cells()",function(a,b,c){h.isPlainObject(a)&&(a.row===k?(c=a,a=null):(c=b,b=null));h.isPlainObject(b)&&(c=b,b=null);if(null===b||b===k)return this.iterator("table",function(b){var d=a,e=ab(c),f=b.aoData,g=Ca(b,e),i=Sb(ia(f,g,"anCells")),
j=h([].concat.apply([],i)),l,m=b.aoColumns.length,o,r,t,s,u,v;return $a("cell",d,function(a){var c=typeof a==="function";if(a===null||a===k||c){o=[];r=0;for(t=g.length;r<t;r++){l=g[r];for(s=0;s<m;s++){u={row:l,column:s};if(c){v=b.aoData[l];a(u,x(b,l,s),v.anCells?v.anCells[s]:null)&&o.push(u)}else o.push(u)}}return o}return h.isPlainObject(a)?[a]:j.filter(a).map(function(a,b){l=b.parentNode._DT_RowIndex;return{row:l,column:h.inArray(b,f[l].anCells)}}).toArray()},b,e)});var e=this.columns(b,c),d=this.rows(a,
c),f,g,j,i,m,l=this.iterator("table",function(a,b){f=[];g=0;for(j=d[b].length;g<j;g++){i=0;for(m=e[b].length;i<m;i++)f.push({row:d[b][g],column:e[b][i]})}return f},1);h.extend(l.selector,{cols:b,rows:a,opts:c});return l});v("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(a,b,c){return(a=a.aoData[b].anCells)?a[c]:k},1)});r("cells().data()",function(){return this.iterator("cell",function(a,b,c){return x(a,b,c)},1)});v("cells().cache()","cell().cache()",function(a){a=
"search"===a?"_aFilterData":"_aSortData";return this.iterator("cell",function(b,c,e){return b.aoData[c][a][e]},1)});v("cells().render()","cell().render()",function(a){return this.iterator("cell",function(b,c,e){return x(b,c,e,a)},1)});v("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(a,b,c){return{row:b,column:c,columnVisible:$(a,c)}},1)});v("cells().invalidate()","cell().invalidate()",function(a){return this.iterator("cell",function(b,c,e){ca(b,c,a,e)})});r("cell()",
function(a,b,c){return bb(this.cells(a,b,c))});r("cell().data()",function(a){var b=this.context,c=this[0];if(a===k)return b.length&&c.length?x(b[0],c[0].row,c[0].column):k;Ia(b[0],c[0].row,c[0].column,a);ca(b[0],c[0].row,"data",c[0].column);return this});r("order()",function(a,b){var c=this.context;if(a===k)return 0!==c.length?c[0].aaSorting:k;"number"===typeof a?a=[[a,b]]:h.isArray(a[0])||(a=Array.prototype.slice.call(arguments));return this.iterator("table",function(b){b.aaSorting=a.slice()})});
r("order.listener()",function(a,b,c){return this.iterator("table",function(e){Oa(e,a,b,c)})});r(["columns().order()","column().order()"],function(a){var b=this;return this.iterator("table",function(c,e){var d=[];h.each(b[e],function(b,c){d.push([c,a])});c.aaSorting=d})});r("search()",function(a,b,c,e){var d=this.context;return a===k?0!==d.length?d[0].oPreviousSearch.sSearch:k:this.iterator("table",function(d){d.oFeatures.bFilter&&fa(d,h.extend({},d.oPreviousSearch,{sSearch:a+"",bRegex:null===b?!1:
b,bSmart:null===c?!0:c,bCaseInsensitive:null===e?!0:e}),1)})});v("columns().search()","column().search()",function(a,b,c,e){return this.iterator("column",function(d,f){var g=d.aoPreSearchCols;if(a===k)return g[f].sSearch;d.oFeatures.bFilter&&(h.extend(g[f],{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===e?!0:e}),fa(d,d.oPreviousSearch,1))})});r("state()",function(){return this.context.length?this.context[0].oSavedState:null});r("state.clear()",function(){return this.iterator("table",
function(a){a.fnStateSaveCallback.call(a.oInstance,a,{})})});r("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null});r("state.save()",function(){return this.iterator("table",function(a){ya(a)})});m.versionCheck=m.fnVersionCheck=function(a){for(var b=m.version.split("."),a=a.split("."),c,e,d=0,f=a.length;d<f;d++)if(c=parseInt(b[d],10)||0,e=parseInt(a[d],10)||0,c!==e)return c>e;return!0};m.isDataTable=m.fnIsDataTable=function(a){var b=h(a).get(0),c=!1;h.each(m.settings,
function(a,d){var f=d.nScrollHead?h("table",d.nScrollHead)[0]:null,g=d.nScrollFoot?h("table",d.nScrollFoot)[0]:null;if(d.nTable===b||f===b||g===b)c=!0});return c};m.tables=m.fnTables=function(a){return h.map(m.settings,function(b){if(!a||a&&h(b.nTable).is(":visible"))return b.nTable})};m.util={throttle:ua,escapeRegex:va};m.camelToHungarian=H;r("$()",function(a,b){var c=this.rows(b).nodes(),c=h(c);return h([].concat(c.filter(a).toArray(),c.find(a).toArray()))});h.each(["on","one","off"],function(a,
b){r(b+"()",function(){var a=Array.prototype.slice.call(arguments);a[0].match(/\.dt\b/)||(a[0]+=".dt");var e=h(this.tables().nodes());e[b].apply(e,a);return this})});r("clear()",function(){return this.iterator("table",function(a){oa(a)})});r("settings()",function(){return new t(this.context,this.context)});r("init()",function(){var a=this.context;return a.length?a[0].oInit:null});r("data()",function(){return this.iterator("table",function(a){return D(a.aoData,"_aData")}).flatten()});r("destroy()",
function(a){a=a||!1;return this.iterator("table",function(b){var c=b.nTableWrapper.parentNode,e=b.oClasses,d=b.nTable,f=b.nTBody,g=b.nTHead,j=b.nTFoot,i=h(d),f=h(f),k=h(b.nTableWrapper),l=h.map(b.aoData,function(a){return a.nTr}),q;b.bDestroying=!0;w(b,"aoDestroyCallback","destroy",[b]);a||(new t(b)).columns().visible(!0);k.unbind(".DT").find(":not(tbody *)").unbind(".DT");h(Ea).unbind(".DT-"+b.sInstance);d!=g.parentNode&&(i.children("thead").detach(),i.append(g));j&&d!=j.parentNode&&(i.children("tfoot").detach(),
i.append(j));i.detach();k.detach();b.aaSorting=[];b.aaSortingFixed=[];xa(b);h(l).removeClass(b.asStripeClasses.join(" "));h("th, td",g).removeClass(e.sSortable+" "+e.sSortableAsc+" "+e.sSortableDesc+" "+e.sSortableNone);b.bJUI&&(h("th span."+e.sSortIcon+", td span."+e.sSortIcon,g).detach(),h("th, td",g).each(function(){var a=h("div."+e.sSortJUIWrapper,this);h(this).append(a.contents());a.detach()}));!a&&c&&c.insertBefore(d,b.nTableReinsertBefore);f.children().detach();f.append(l);i.css("width",b.sDestroyWidth).removeClass(e.sTable);
(q=b.asDestroyStripes.length)&&f.children().each(function(a){h(this).addClass(b.asDestroyStripes[a%q])});c=h.inArray(b,m.settings);-1!==c&&m.settings.splice(c,1)})});h.each(["column","row","cell"],function(a,b){r(b+"s().every()",function(a){return this.iterator(b,function(e,d,f){a.call((new t(e))[b](d,f))})})});r("i18n()",function(a,b,c){var e=this.context[0],a=R(a)(e.oLanguage);a===k&&(a=b);c!==k&&h.isPlainObject(a)&&(a=a[c]!==k?a[c]:a._);return a.replace("%d",c)});m.version="1.10.7";m.settings=
[];m.models={};m.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0};m.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null};m.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",
sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null};m.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bJQueryUI:!1,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,
fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(a){try{return JSON.parse((-1===a.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+a.sInstance+"_"+location.pathname))}catch(b){}},fnStateLoadParams:null,
fnStateLoaded:null,fnStateSaveCallback:function(a,b){try{(-1===a.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+a.sInstance+"_"+location.pathname,JSON.stringify(b))}catch(c){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},
sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:h.extend({},m.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,
sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null};W(m.defaults);m.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};W(m.defaults.column);m.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,
bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],
sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,
bAjaxDataGet:!0,jqXHR:null,json:k,oAjaxData:k,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,bJUI:null,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==B(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==B(this)?1*this._iRecordsDisplay:
this.aiDisplay.length},fnDisplayEnd:function(){var a=this._iDisplayLength,b=this._iDisplayStart,c=b+a,e=this.aiDisplay.length,d=this.oFeatures,f=d.bPaginate;return d.bServerSide?!1===f||-1===a?b+e:Math.min(b+a,this._iRecordsDisplay):!f||c>e||-1===a?e:c},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{}};m.ext=u={buttons:{},classes:{},errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},
header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:m.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:m.version};h.extend(u,{afnFiltering:u.search,aTypes:u.type.detect,ofnSearch:u.type.search,oSort:u.type.order,afnSortData:u.order,aoFeatures:u.feature,oApi:u.internal,oStdClasses:u.classes,oPagination:u.pager});h.extend(m.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",
sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",
sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""});var Da="",Da="",F=Da+"ui-state-default",ja=Da+"css_right ui-icon ui-icon-",Xb=Da+"fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";h.extend(m.ext.oJUIClasses,
m.ext.classes,{sPageButton:"fg-button ui-button "+F,sPageButtonActive:"ui-state-disabled",sPageButtonDisabled:"ui-state-disabled",sPaging:"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",sSortAsc:F+" sorting_asc",sSortDesc:F+" sorting_desc",sSortable:F+" sorting",sSortableAsc:F+" sorting_asc_disabled",sSortableDesc:F+" sorting_desc_disabled",sSortableNone:F+" sorting_disabled",sSortJUIAsc:ja+"triangle-1-n",sSortJUIDesc:ja+"triangle-1-s",sSortJUI:ja+"carat-2-n-s",
sSortJUIAscAllowed:ja+"carat-1-n",sSortJUIDescAllowed:ja+"carat-1-s",sSortJUIWrapper:"DataTables_sort_wrapper",sSortIcon:"DataTables_sort_icon",sScrollHead:"dataTables_scrollHead "+F,sScrollFoot:"dataTables_scrollFoot "+F,sHeaderTH:F,sFooterTH:F,sJUIHeader:Xb+" ui-corner-tl ui-corner-tr",sJUIFooter:Xb+" ui-corner-bl ui-corner-br"});var Mb=m.ext.pager;h.extend(Mb,{simple:function(){return["previous","next"]},full:function(){return["first","previous","next","last"]},simple_numbers:function(a,b){return["previous",
Wa(a,b),"next"]},full_numbers:function(a,b){return["first","previous",Wa(a,b),"next","last"]},_numbers:Wa,numbers_length:7});h.extend(!0,m.ext.renderer,{pageButton:{_:function(a,b,c,e,d,f){var g=a.oClasses,j=a.oLanguage.oPaginate,i,k,l=0,m=function(b,e){var n,r,t,s,u=function(b){Ta(a,b.data.action,true)};n=0;for(r=e.length;n<r;n++){s=e[n];if(h.isArray(s)){t=h("<"+(s.DT_el||"div")+"/>").appendTo(b);m(t,s)}else{k=i="";switch(s){case "ellipsis":b.append('<span class="ellipsis">&#x2026;</span>');break;
case "first":i=j.sFirst;k=s+(d>0?"":" "+g.sPageButtonDisabled);break;case "previous":i=j.sPrevious;k=s+(d>0?"":" "+g.sPageButtonDisabled);break;case "next":i=j.sNext;k=s+(d<f-1?"":" "+g.sPageButtonDisabled);break;case "last":i=j.sLast;k=s+(d<f-1?"":" "+g.sPageButtonDisabled);break;default:i=s+1;k=d===s?g.sPageButtonActive:""}if(i){t=h("<a>",{"class":g.sPageButton+" "+k,"aria-controls":a.sTableId,"data-dt-idx":l,tabindex:a.iTabIndex,id:c===0&&typeof s==="string"?a.sTableId+"_"+s:null}).html(i).appendTo(b);
Va(t,{action:s},u);l++}}}},n;try{n=h(Q.activeElement).data("dt-idx")}catch(r){}m(h(b).empty(),e);n&&h(b).find("[data-dt-idx="+n+"]").focus()}}});h.extend(m.ext.type.detect,[function(a,b){var c=b.oLanguage.sDecimal;return Za(a,c)?"num"+c:null},function(a){if(a&&!(a instanceof Date)&&(!ac.test(a)||!bc.test(a)))return null;var b=Date.parse(a);return null!==b&&!isNaN(b)||J(a)?"date":null},function(a,b){var c=b.oLanguage.sDecimal;return Za(a,c,!0)?"num-fmt"+c:null},function(a,b){var c=b.oLanguage.sDecimal;
return Rb(a,c)?"html-num"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Rb(a,c,!0)?"html-num-fmt"+c:null},function(a){return J(a)||"string"===typeof a&&-1!==a.indexOf("<")?"html":null}]);h.extend(m.ext.type.search,{html:function(a){return J(a)?a:"string"===typeof a?a.replace(Ob," ").replace(Ba,""):""},string:function(a){return J(a)?a:"string"===typeof a?a.replace(Ob," "):a}});var Aa=function(a,b,c,e){if(0!==a&&(!a||"-"===a))return-Infinity;b&&(a=Qb(a,b));a.replace&&(c&&(a=a.replace(c,"")),
e&&(a=a.replace(e,"")));return 1*a};h.extend(u.type.order,{"date-pre":function(a){return Date.parse(a)||0},"html-pre":function(a){return J(a)?"":a.replace?a.replace(/<.*?>/g,"").toLowerCase():a+""},"string-pre":function(a){return J(a)?"":"string"===typeof a?a.toLowerCase():!a.toString?"":a.toString()},"string-asc":function(a,b){return a<b?-1:a>b?1:0},"string-desc":function(a,b){return a<b?1:a>b?-1:0}});db("");h.extend(!0,m.ext.renderer,{header:{_:function(a,b,c,e){h(a.nTable).on("order.dt.DT",function(d,
f,g,h){if(a===f){d=c.idx;b.removeClass(c.sSortingClass+" "+e.sSortAsc+" "+e.sSortDesc).addClass(h[d]=="asc"?e.sSortAsc:h[d]=="desc"?e.sSortDesc:c.sSortingClass)}})},jqueryui:function(a,b,c,e){h("<div/>").addClass(e.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(e.sSortIcon+" "+c.sSortingClassJUI)).appendTo(b);h(a.nTable).on("order.dt.DT",function(d,f,g,h){if(a===f){d=c.idx;b.removeClass(e.sSortAsc+" "+e.sSortDesc).addClass(h[d]=="asc"?e.sSortAsc:h[d]=="desc"?e.sSortDesc:c.sSortingClass);
b.find("span."+e.sSortIcon).removeClass(e.sSortJUIAsc+" "+e.sSortJUIDesc+" "+e.sSortJUI+" "+e.sSortJUIAscAllowed+" "+e.sSortJUIDescAllowed).addClass(h[d]=="asc"?e.sSortJUIAsc:h[d]=="desc"?e.sSortJUIDesc:c.sSortingClassJUI)}})}}});m.render={number:function(a,b,c,e){return{display:function(d){if("number"!==typeof d&&"string"!==typeof d)return d;var f=0>d?"-":"",d=Math.abs(parseFloat(d)),g=parseInt(d,10),d=c?b+(d-g).toFixed(c).substring(2):"";return f+(e||"")+g.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
a)+d}}}};h.extend(m.ext.internal,{_fnExternApiFunc:Nb,_fnBuildAjax:ra,_fnAjaxUpdate:kb,_fnAjaxParameters:tb,_fnAjaxUpdateDraw:ub,_fnAjaxDataSrc:sa,_fnAddColumn:Fa,_fnColumnOptions:ka,_fnAdjustColumnSizing:X,_fnVisibleToColumnIndex:la,_fnColumnIndexToVisible:$,_fnVisbleColumns:aa,_fnGetColumns:Z,_fnColumnTypes:Ha,_fnApplyColumnDefs:ib,_fnHungarianMap:W,_fnCamelToHungarian:H,_fnLanguageCompat:P,_fnBrowserDetect:gb,_fnAddData:K,_fnAddTr:ma,_fnNodeToDataIndex:function(a,b){return b._DT_RowIndex!==k?b._DT_RowIndex:
null},_fnNodeToColumnIndex:function(a,b,c){return h.inArray(c,a.aoData[b].anCells)},_fnGetCellData:x,_fnSetCellData:Ia,_fnSplitObjNotation:Ka,_fnGetObjectDataFn:R,_fnSetObjectDataFn:S,_fnGetDataMaster:La,_fnClearTable:oa,_fnDeleteIndex:pa,_fnInvalidate:ca,_fnGetRowElements:na,_fnCreateTr:Ja,_fnBuildHead:jb,_fnDrawHead:ea,_fnDraw:M,_fnReDraw:N,_fnAddOptionsHtml:mb,_fnDetectHeader:da,_fnGetUniqueThs:qa,_fnFeatureHtmlFilter:ob,_fnFilterComplete:fa,_fnFilterCustom:xb,_fnFilterColumn:wb,_fnFilter:vb,_fnFilterCreateSearch:Qa,
_fnEscapeRegex:va,_fnFilterData:yb,_fnFeatureHtmlInfo:rb,_fnUpdateInfo:Bb,_fnInfoMacros:Cb,_fnInitialise:ga,_fnInitComplete:ta,_fnLengthChange:Ra,_fnFeatureHtmlLength:nb,_fnFeatureHtmlPaginate:sb,_fnPageChange:Ta,_fnFeatureHtmlProcessing:pb,_fnProcessingDisplay:C,_fnFeatureHtmlTable:qb,_fnScrollDraw:Y,_fnApplyToChildren:G,_fnCalculateColumnWidths:Ga,_fnThrottle:ua,_fnConvertToWidth:Db,_fnScrollingWidthAdjust:Fb,_fnGetWidestNode:Eb,_fnGetMaxLenString:Gb,_fnStringToCss:s,_fnScrollBarWidth:Hb,_fnSortFlatten:U,
_fnSort:lb,_fnSortAria:Jb,_fnSortListener:Ua,_fnSortAttachListener:Oa,_fnSortingClasses:xa,_fnSortData:Ib,_fnSaveState:ya,_fnLoadState:Kb,_fnSettingsFromNode:za,_fnLog:I,_fnMap:E,_fnBindAction:Va,_fnCallbackReg:z,_fnCallbackFire:w,_fnLengthOverflow:Sa,_fnRenderer:Pa,_fnDataSource:B,_fnRowAttributes:Ma,_fnCalculateEnd:function(){}});h.fn.dataTable=m;h.fn.dataTableSettings=m.settings;h.fn.dataTableExt=m.ext;h.fn.DataTable=function(a){return h(this).dataTable(a).api()};h.each(m,function(a,b){h.fn.DataTable[a]=
b});return h.fn.dataTable};"function"===typeof define&&define.amd?define("datatables",["jquery"],P):"object"===typeof exports?module.exports=P(require("jquery")):jQuery&&!jQuery.fn.dataTable&&P(jQuery)})(window,document);


/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: lib/jquery/dataTables.responsive.min.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


/*!
 Responsive 1.0.6
 2014-2015 SpryMedia Ltd - datatables.net/license
*/
(function(n,p){var o=function(e,k){var h=function(d,a){if(!k.versionCheck||!k.versionCheck("1.10.1"))throw"DataTables Responsive requires DataTables 1.10.1 or newer";this.s={dt:new k.Api(d),columns:[]};this.s.dt.settings()[0].responsive||(a&&"string"===typeof a.details&&(a.details={type:a.details}),this.c=e.extend(!0,{},h.defaults,k.defaults.responsive,a),d.responsive=this,this._constructor())};h.prototype={_constructor:function(){var d=this,a=this.s.dt;a.settings()[0]._responsive=this;e(n).on("resize.dtr orientationchange.dtr",
a.settings()[0].oApi._fnThrottle(function(){d._resize()}));a.on("destroy.dtr",function(){e(n).off("resize.dtr orientationchange.dtr draw.dtr")});this.c.breakpoints.sort(function(a,c){return a.width<c.width?1:a.width>c.width?-1:0});this._classLogic();this._resizeAuto();var c=this.c.details;c.type&&(d._detailsInit(),this._detailsVis(),a.on("column-visibility.dtr",function(){d._detailsVis()}),a.on("draw.dtr",function(){a.rows({page:"current"}).iterator("row",function(b,c){var f=a.row(c);if(f.child.isShown()){var i=
d.c.details.renderer(a,c);f.child(i,"child").show()}})}),e(a.table().node()).addClass("dtr-"+c.type));this._resize()},_columnsVisiblity:function(d){var a=this.s.dt,c=this.s.columns,b,g,f=e.map(c,function(a){return a.auto&&null===a.minWidth?!1:!0===a.auto?"-":-1!==e.inArray(d,a.includeIn)}),i=0;b=0;for(g=f.length;b<g;b++)!0===f[b]&&(i+=c[b].minWidth);b=a.settings()[0].oScroll;b=b.sY||b.sX?b.iBarWidth:0;a=a.table().container().offsetWidth-b-i;b=0;for(g=f.length;b<g;b++)c[b].control&&(a-=c[b].minWidth);
i=!1;b=0;for(g=f.length;b<g;b++)"-"===f[b]&&!c[b].control&&(i||0>a-c[b].minWidth?(i=!0,f[b]=!1):f[b]=!0,a-=c[b].minWidth);a=!1;b=0;for(g=c.length;b<g;b++)if(!c[b].control&&!c[b].never&&!f[b]){a=!0;break}b=0;for(g=c.length;b<g;b++)c[b].control&&(f[b]=a);-1===e.inArray(!0,f)&&(f[0]=!0);return f},_classLogic:function(){var d=this,a=this.c.breakpoints,c=this.s.dt.columns().eq(0).map(function(a){a=this.column(a).header().className;return{className:a,includeIn:[],auto:!1,control:!1,never:a.match(/\bnever\b/)?
!0:!1}}),b=function(a,b){var d=c[a].includeIn;-1===e.inArray(b,d)&&d.push(b)},g=function(f,g,e,j){if(e)if("max-"===e){j=d._find(g).width;g=0;for(e=a.length;g<e;g++)a[g].width<=j&&b(f,a[g].name)}else if("min-"===e){j=d._find(g).width;g=0;for(e=a.length;g<e;g++)a[g].width>=j&&b(f,a[g].name)}else{if("not-"===e){g=0;for(e=a.length;g<e;g++)-1===a[g].name.indexOf(j)&&b(f,a[g].name)}}else c[f].includeIn.push(g)};c.each(function(b,c){for(var d=b.className.split(" "),j=!1,h=0,k=d.length;h<k;h++){var l=e.trim(d[h]);
if("all"===l){j=!0;b.includeIn=e.map(a,function(a){return a.name});return}if("none"===l||"never"===l){j=!0;return}if("control"===l){j=!0;b.control=!0;return}e.each(a,function(a,b){var d=b.name.split("-"),e=l.match(RegExp("(min\\-|max\\-|not\\-)?("+d[0]+")(\\-[_a-zA-Z0-9])?"));e&&(j=!0,e[2]===d[0]&&e[3]==="-"+d[1]?g(c,b.name,e[1],e[2]+e[3]):e[2]===d[0]&&!e[3]&&g(c,b.name,e[1],e[2]))})}j||(b.auto=!0)});this.s.columns=c},_detailsInit:function(){var d=this,a=this.s.dt,c=this.c.details;"inline"===c.type&&
(c.target="td:first-child");var b=c.target;e(a.table().body()).on("click","string"===typeof b?b:"td",function(){if(e(a.table().node()).hasClass("collapsed")&&a.row(e(this).closest("tr")).length){if(typeof b==="number"){var c=b<0?a.columns().eq(0).length+b:b;if(a.cell(this).index().column!==c)return}c=a.row(e(this).closest("tr"));if(c.child.isShown()){c.child(false);e(c.node()).removeClass("parent")}else{var f=d.c.details.renderer(a,c[0]);c.child(f,"child").show();e(c.node()).addClass("parent")}}})},
_detailsVis:function(){var d=this,a=this.s.dt,c=a.columns().indexes().filter(function(b){var c=a.column(b);return c.visible()?null:e(c.header()).hasClass("never")?null:b}),b=!0;if(0===c.length||1===c.length&&this.s.columns[c[0]].control)b=!1;b?a.rows({page:"current"}).eq(0).each(function(b){b=a.row(b);if(b.child()){var c=d.c.details.renderer(a,b[0]);!1===c?b.child.hide():b.child(c,"child").show()}}):a.rows({page:"current"}).eq(0).each(function(b){a.row(b).child.hide()})},_find:function(d){for(var a=
this.c.breakpoints,c=0,b=a.length;c<b;c++)if(a[c].name===d)return a[c]},_resize:function(){var d=this.s.dt,a=e(n).width(),c=this.c.breakpoints,b=c[0].name,g=this.s.columns,f;for(f=c.length-1;0<=f;f--)if(a<=c[f].width){b=c[f].name;break}var i=this._columnsVisiblity(b),c=!1;f=0;for(a=g.length;f<a;f++)if(!1===i[f]&&!g[f].never){c=!0;break}e(d.table().node()).toggleClass("collapsed",c);d.columns().eq(0).each(function(a,b){d.column(a).visible(i[b])})},_resizeAuto:function(){var d=this.s.dt,a=this.s.columns;
if(this.c.auto&&-1!==e.inArray(!0,e.map(a,function(a){return a.auto}))){d.table().node();var c=d.table().node().cloneNode(!1),b=e(d.table().header().cloneNode(!1)).appendTo(c),g=e(d.table().body().cloneNode(!1)).appendTo(c);e(d.table().footer()).clone(!1).appendTo(c);d.rows({page:"current"}).indexes().flatten().each(function(a){var b=d.row(a).node().cloneNode(!0);d.columns(":hidden").flatten().length&&e(b).append(d.cells(a,":hidden").nodes().to$().clone());e(b).appendTo(g)});var f=d.columns().header().to$().clone(!1);
e("<tr/>").append(f).appendTo(b);"inline"===this.c.details.type&&e(c).addClass("dtr-inline collapsed");c=e("<div/>").css({width:1,height:1,overflow:"hidden"}).append(c);c.find("th.never, td.never").remove();c.insertBefore(d.table().node());d.columns().eq(0).each(function(b){a[b].minWidth=f[b].offsetWidth||0});c.remove()}}};h.breakpoints=[{name:"desktop",width:Infinity},{name:"tablet-l",width:1024},{name:"tablet-p",width:768},{name:"mobile-l",width:480},{name:"mobile-p",width:320}];h.defaults={breakpoints:h.breakpoints,
auto:!0,details:{renderer:function(d,a){var c=d.cells(a,":hidden").eq(0).map(function(a){var c=e(d.column(a.column).header()),a=d.cell(a).index();if(c.hasClass("control")||c.hasClass("never"))return"";var f=d.settings()[0],f=f.oApi._fnGetCellData(f,a.row,a.column,"display");(c=c.text())&&(c+=":");return'<li data-dtr-index="'+a.column+'"><span class="dtr-title">'+c+'</span> <span class="dtr-data">'+f+"</span></li>"}).toArray().join("");return c?e('<ul data-dtr-index="'+a+'"/>').append(c):!1},target:0,
type:"inline"}};var m=e.fn.dataTable.Api;m.register("responsive()",function(){return this});m.register("responsive.index()",function(d){d=e(d);return{column:d.data("dtr-index"),row:d.parent().data("dtr-index")}});m.register("responsive.rebuild()",function(){return this.iterator("table",function(d){d._responsive&&d._responsive._classLogic()})});m.register("responsive.recalc()",function(){return this.iterator("table",function(d){d._responsive&&(d._responsive._resizeAuto(),d._responsive._resize())})});
h.version="1.0.6";e.fn.dataTable.Responsive=h;e.fn.DataTable.Responsive=h;e(p).on("init.dt.dtr",function(d,a){if("dt"===d.namespace&&(e(a.nTable).hasClass("responsive")||e(a.nTable).hasClass("dt-responsive")||a.oInit.responsive||k.defaults.responsive)){var c=a.oInit.responsive;!1!==c&&new h(a,e.isPlainObject(c)?c:{})}});return h};"function"===typeof define&&define.amd?define(["jquery","datatables"],o):"object"===typeof exports?o(require("jquery"),require("datatables")):jQuery&&!jQuery.fn.dataTable.Responsive&&
o(jQuery,jQuery.fn.dataTable)})(window,document);


/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: lib/jquery/select2.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


/*!
 * Select2 4.0.5
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = function (root, jQuery) {
      if (jQuery === undefined) {
        // require('jQuery') returns a factory that requires window to
        // build a jQuery instance, we normalize how we use modules
        // that require this pattern but the window provided is a noop
        // if it's defined (how jquery works)
        if (typeof window !== 'undefined') {
          jQuery = require('jquery');
        }
        else {
          jQuery = require('jquery')(root);
        }
      }
      factory(jQuery);
      return jQuery;
    };
  } else {
    // Browser globals
    factory(jQuery);
  }
} (function (jQuery) {
  // This is needed so we can catch the AMD loader configuration and use it
  // The inner file should be wrapped (by `banner.start.js`) in a function that
  // returns the AMD loader references.
  var S2 =(function () {
  // Restore the Select2 AMD loader so it can be used
  // Needed mostly in the language files, where the loader is not inserted
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
    var S2 = jQuery.fn.select2.amd;
  }
var S2;(function () { if (!S2 || !S2.requirejs) {
if (!S2) { S2 = {}; } else { require = S2; }
/**
 * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/almond/LICENSE
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
    var main, req, makeMap, handlers,
        defined = {},
        waiting = {},
        config = {},
        defining = {},
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [].slice,
        jsSuffixRegExp = /\.js$/;

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */
    function normalize(name, baseName) {
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
            foundI, foundStarMap, starI, i, j, part, normalizedBaseParts,
            baseParts = baseName && baseName.split("/"),
            map = config.map,
            starMap = (map && map['*']) || {};

        //Adjust any relative paths.
        if (name) {
            name = name.split('/');
            lastIndex = name.length - 1;

            // If wanting node ID compatibility, strip .js from end
            // of IDs. Have to do this here, and not in nameToUrl
            // because node allows either .js or non .js to map
            // to same file.
            if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
            }

            // Starts with a '.' so need the baseName
            if (name[0].charAt(0) === '.' && baseParts) {
                //Convert baseName to array, and lop off the last part,
                //so that . matches that 'directory' and not name of the baseName's
                //module. For instance, baseName of 'one/two/three', maps to
                //'one/two/three.js', but we want the directory, 'one/two' for
                //this normalization.
                normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
                name = normalizedBaseParts.concat(name);
            }

            //start trimDots
            for (i = 0; i < name.length; i++) {
                part = name[i];
                if (part === '.') {
                    name.splice(i, 1);
                    i -= 1;
                } else if (part === '..') {
                    // If at the start, or previous value is still ..,
                    // keep them so that when converted to a path it may
                    // still work when converted to a path, even though
                    // as an ID it is less than ideal. In larger point
                    // releases, may be better to just kick out an error.
                    if (i === 0 || (i === 1 && name[2] === '..') || name[i - 1] === '..') {
                        continue;
                    } else if (i > 0) {
                        name.splice(i - 1, 2);
                        i -= 2;
                    }
                }
            }
            //end trimDots

            name = name.join('/');
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
            nameParts = name.split('/');

            for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1) {
                        mapValue = map[baseParts.slice(0, j).join('/')];

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue) {
                            mapValue = mapValue[nameSegment];
                            if (mapValue) {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                            }
                        }
                    }
                }

                if (foundMap) {
                    break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                    foundStarMap = starMap[nameSegment];
                    starI = i;
                }
            }

            if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
            }

            if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
            }
        }

        return name;
    }

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            var args = aps.call(arguments, 0);

            //If first arg is not require('string'), and there is only
            //one arg, it is the array form without a callback. Insert
            //a null so that the following concat is correct.
            if (typeof args[0] !== 'string' && args.length === 1) {
                args.push(null);
            }
            return req.apply(undef, args.concat([relName, forceSync]));
        };
    }

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(depName) {
        return function (value) {
            defined[depName] = value;
        };
    }

    function callDep(name) {
        if (hasProp(waiting, name)) {
            var args = waiting[name];
            delete waiting[name];
            defining[name] = true;
            main.apply(undef, args);
        }

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
            throw new Error('No ' + name);
        }
        return defined[name];
    }

    //Turns a plugin!resource to [plugin, resource]
    //with the plugin being undefined if the name
    //did not have a plugin prefix.
    function splitPrefix(name) {
        var prefix,
            index = name ? name.indexOf('!') : -1;
        if (index > -1) {
            prefix = name.substring(0, index);
            name = name.substring(index + 1, name.length);
        }
        return [prefix, name];
    }

    //Creates a parts array for a relName where first part is plugin ID,
    //second part is resource ID. Assumes relName has already been normalized.
    function makeRelParts(relName) {
        return relName ? splitPrefix(relName) : [];
    }

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    makeMap = function (name, relParts) {
        var plugin,
            parts = splitPrefix(name),
            prefix = parts[0],
            relResourceName = relParts[1];

        name = parts[1];

        if (prefix) {
            prefix = normalize(prefix, relResourceName);
            plugin = callDep(prefix);
        }

        //Normalize according
        if (prefix) {
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relResourceName));
            } else {
                name = normalize(name, relResourceName);
            }
        } else {
            name = normalize(name, relResourceName);
            parts = splitPrefix(name);
            prefix = parts[0];
            name = parts[1];
            if (prefix) {
                plugin = callDep(prefix);
            }
        }

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            pr: prefix,
            p: plugin
        };
    };

    function makeConfig(name) {
        return function () {
            return (config && config.config && config.config[name]) || {};
        };
    }

    handlers = {
        require: function (name) {
            return makeRequire(name);
        },
        exports: function (name) {
            var e = defined[name];
            if (typeof e !== 'undefined') {
                return e;
            } else {
                return (defined[name] = {});
            }
        },
        module: function (name) {
            return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
            };
        }
    };

    main = function (name, deps, callback, relName) {
        var cjsModule, depName, ret, map, i, relParts,
            args = [],
            callbackType = typeof callback,
            usingExports;

        //Use name if no relName
        relName = relName || name;
        relParts = makeRelParts(relName);

        //Call the callback to define the module, if necessary.
        if (callbackType === 'undefined' || callbackType === 'function') {
            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module] if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
            for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relParts);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i] = handlers.require(name);
                } else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i] = handlers.exports(name);
                    usingExports = true;
                } else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) ||
                           hasProp(waiting, depName) ||
                           hasProp(defining, depName)) {
                    args[i] = callDep(depName);
                } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i] = defined[depName];
                } else {
                    throw new Error(name + ' missing ' + depName);
                }
            }

            ret = callback ? callback.apply(defined[name], args) : undefined;

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                        cjsModule.exports !== defined[name]) {
                    defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                    //Use the return value from the function.
                    defined[name] = ret;
                }
            }
        } else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name] = callback;
        }
    };

    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
        if (typeof deps === "string") {
            if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
            }
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, makeRelParts(callback)).f);
        } else if (!deps.splice) {
            //deps is a config object, not an array.
            config = deps;
            if (config.deps) {
                req(config.deps, config.callback);
            }
            if (!callback) {
                return;
            }

            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
            } else {
                deps = undef;
            }
        }

        //Support require(['a'])
        callback = callback || function () {};

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function') {
            relName = forceSync;
            forceSync = alt;
        }

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
        } else {
            //Using a non-zero value because of concern for what old browsers
            //do, and latest browsers "upgrade" to 4 if lower value is used:
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something
            //that works in almond on the global level, but not guaranteed and
            //unlikely to work in other AMD implementations.
            setTimeout(function () {
                main(undef, deps, callback, relName);
            }, 4);
        }

        return req;
    };

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg) {
        return req(cfg);
    };

    /**
     * Expose module registry for debugging and tooling
     */
    requirejs._defined = defined;

    define = function (name, deps, callback) {
        if (typeof name !== 'string') {
            throw new Error('See almond README: incorrect module build, no module name');
        }

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [];
        }

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
            waiting[name] = [name, deps, callback];
        }
    };

    define.amd = {
        jQuery: true
    };
}());

S2.requirejs = requirejs;S2.require = require;S2.define = define;
}
}());
S2.define("almond", function(){});

/* global jQuery:false, $:false */
S2.define('jquery',[],function () {
  var _$ = jQuery || $;

  if (_$ == null && console && console.error) {
    console.error(
      'Select2: An instance of jQuery or a jQuery-compatible library was not ' +
      'found. Make sure that you are including jQuery before Select2 on your ' +
      'web page.'
    );
  }

  return _$;
});

S2.define('select2/utils',[
  'jquery'
], function ($) {
  var Utils = {};

  Utils.Extend = function (ChildClass, SuperClass) {
    var __hasProp = {}.hasOwnProperty;

    function BaseConstructor () {
      this.constructor = ChildClass;
    }

    for (var key in SuperClass) {
      if (__hasProp.call(SuperClass, key)) {
        ChildClass[key] = SuperClass[key];
      }
    }

    BaseConstructor.prototype = SuperClass.prototype;
    ChildClass.prototype = new BaseConstructor();
    ChildClass.__super__ = SuperClass.prototype;

    return ChildClass;
  };

  function getMethods (theClass) {
    var proto = theClass.prototype;

    var methods = [];

    for (var methodName in proto) {
      var m = proto[methodName];

      if (typeof m !== 'function') {
        continue;
      }

      if (methodName === 'constructor') {
        continue;
      }

      methods.push(methodName);
    }

    return methods;
  }

  Utils.Decorate = function (SuperClass, DecoratorClass) {
    var decoratedMethods = getMethods(DecoratorClass);
    var superMethods = getMethods(SuperClass);

    function DecoratedClass () {
      var unshift = Array.prototype.unshift;

      var argCount = DecoratorClass.prototype.constructor.length;

      var calledConstructor = SuperClass.prototype.constructor;

      if (argCount > 0) {
        unshift.call(arguments, SuperClass.prototype.constructor);

        calledConstructor = DecoratorClass.prototype.constructor;
      }

      calledConstructor.apply(this, arguments);
    }

    DecoratorClass.displayName = SuperClass.displayName;

    function ctr () {
      this.constructor = DecoratedClass;
    }

    DecoratedClass.prototype = new ctr();

    for (var m = 0; m < superMethods.length; m++) {
        var superMethod = superMethods[m];

        DecoratedClass.prototype[superMethod] =
          SuperClass.prototype[superMethod];
    }

    var calledMethod = function (methodName) {
      // Stub out the original method if it's not decorating an actual method
      var originalMethod = function () {};

      if (methodName in DecoratedClass.prototype) {
        originalMethod = DecoratedClass.prototype[methodName];
      }

      var decoratedMethod = DecoratorClass.prototype[methodName];

      return function () {
        var unshift = Array.prototype.unshift;

        unshift.call(arguments, originalMethod);

        return decoratedMethod.apply(this, arguments);
      };
    };

    for (var d = 0; d < decoratedMethods.length; d++) {
      var decoratedMethod = decoratedMethods[d];

      DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
    }

    return DecoratedClass;
  };

  var Observable = function () {
    this.listeners = {};
  };

  Observable.prototype.on = function (event, callback) {
    this.listeners = this.listeners || {};

    if (event in this.listeners) {
      this.listeners[event].push(callback);
    } else {
      this.listeners[event] = [callback];
    }
  };

  Observable.prototype.trigger = function (event) {
    var slice = Array.prototype.slice;
    var params = slice.call(arguments, 1);

    this.listeners = this.listeners || {};

    // Params should always come in as an array
    if (params == null) {
      params = [];
    }

    // If there are no arguments to the event, use a temporary object
    if (params.length === 0) {
      params.push({});
    }

    // Set the `_type` of the first object to the event
    params[0]._type = event;

    if (event in this.listeners) {
      this.invoke(this.listeners[event], slice.call(arguments, 1));
    }

    if ('*' in this.listeners) {
      this.invoke(this.listeners['*'], arguments);
    }
  };

  Observable.prototype.invoke = function (listeners, params) {
    for (var i = 0, len = listeners.length; i < len; i++) {
      listeners[i].apply(this, params);
    }
  };

  Utils.Observable = Observable;

  Utils.generateChars = function (length) {
    var chars = '';

    for (var i = 0; i < length; i++) {
      var randomChar = Math.floor(Math.random() * 36);
      chars += randomChar.toString(36);
    }

    return chars;
  };

  Utils.bind = function (func, context) {
    return function () {
      func.apply(context, arguments);
    };
  };

  Utils._convertData = function (data) {
    for (var originalKey in data) {
      var keys = originalKey.split('-');

      var dataLevel = data;

      if (keys.length === 1) {
        continue;
      }

      for (var k = 0; k < keys.length; k++) {
        var key = keys[k];

        // Lowercase the first letter
        // By default, dash-separated becomes camelCase
        key = key.substring(0, 1).toLowerCase() + key.substring(1);

        if (!(key in dataLevel)) {
          dataLevel[key] = {};
        }

        if (k == keys.length - 1) {
          dataLevel[key] = data[originalKey];
        }

        dataLevel = dataLevel[key];
      }

      delete data[originalKey];
    }

    return data;
  };

  Utils.hasScroll = function (index, el) {
    // Adapted from the function created by @ShadowScripter
    // and adapted by @BillBarry on the Stack Exchange Code Review website.
    // The original code can be found at
    // http://codereview.stackexchange.com/q/13338
    // and was designed to be used with the Sizzle selector engine.

    var $el = $(el);
    var overflowX = el.style.overflowX;
    var overflowY = el.style.overflowY;

    //Check both x and y declarations
    if (overflowX === overflowY &&
        (overflowY === 'hidden' || overflowY === 'visible')) {
      return false;
    }

    if (overflowX === 'scroll' || overflowY === 'scroll') {
      return true;
    }

    return ($el.innerHeight() < el.scrollHeight ||
      $el.innerWidth() < el.scrollWidth);
  };

  Utils.escapeMarkup = function (markup) {
    var replaceMap = {
      '\\': '&#92;',
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#39;',
      '/': '&#47;'
    };

    // Do not try to escape the markup if it's not a string
    if (typeof markup !== 'string') {
      return markup;
    }

    return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
      return replaceMap[match];
    });
  };

  // Append an array of jQuery nodes to a given element.
  Utils.appendMany = function ($element, $nodes) {
    // jQuery 1.7.x does not support $.fn.append() with an array
    // Fall back to a jQuery object collection using $.fn.add()
    if ($.fn.jquery.substr(0, 3) === '1.7') {
      var $jqNodes = $();

      $.map($nodes, function (node) {
        $jqNodes = $jqNodes.add(node);
      });

      $nodes = $jqNodes;
    }

    $element.append($nodes);
  };

  return Utils;
});

S2.define('select2/results',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Results ($element, options, dataAdapter) {
    this.$element = $element;
    this.data = dataAdapter;
    this.options = options;

    Results.__super__.constructor.call(this);
  }

  Utils.Extend(Results, Utils.Observable);

  Results.prototype.render = function () {
    var $results = $(
      '<ul class="select2-results__options" role="tree"></ul>'
    );

    if (this.options.get('multiple')) {
      $results.attr('aria-multiselectable', 'true');
    }

    this.$results = $results;

    return $results;
  };

  Results.prototype.clear = function () {
    this.$results.empty();
  };

  Results.prototype.displayMessage = function (params) {
    var escapeMarkup = this.options.get('escapeMarkup');

    this.clear();
    this.hideLoading();

    var $message = $(
      '<li role="treeitem" aria-live="assertive"' +
      ' class="select2-results__option"></li>'
    );

    var message = this.options.get('translations').get(params.message);

    $message.append(
      escapeMarkup(
        message(params.args)
      )
    );

    $message[0].className += ' select2-results__message';

    this.$results.append($message);
  };

  Results.prototype.hideMessages = function () {
    this.$results.find('.select2-results__message').remove();
  };

  Results.prototype.append = function (data) {
    this.hideLoading();

    var $options = [];

    if (data.results == null || data.results.length === 0) {
      if (this.$results.children().length === 0) {
        this.trigger('results:message', {
          message: 'noResults'
        });
      }

      return;
    }

    data.results = this.sort(data.results);

    for (var d = 0; d < data.results.length; d++) {
      var item = data.results[d];

      var $option = this.option(item);

      $options.push($option);
    }

    this.$results.append($options);
  };

  Results.prototype.position = function ($results, $dropdown) {
    var $resultsContainer = $dropdown.find('.select2-results');
    $resultsContainer.append($results);
  };

  Results.prototype.sort = function (data) {
    var sorter = this.options.get('sorter');

    return sorter(data);
  };

  Results.prototype.highlightFirstItem = function () {
    var $options = this.$results
      .find('.select2-results__option[aria-selected]');

    var $selected = $options.filter('[aria-selected=true]');

    // Check if there are any selected options
    if ($selected.length > 0) {
      // If there are selected options, highlight the first
      $selected.first().trigger('mouseenter');
    } else {
      // If there are no selected options, highlight the first option
      // in the dropdown
      $options.first().trigger('mouseenter');
    }

    this.ensureHighlightVisible();
  };

  Results.prototype.setClasses = function () {
    var self = this;

    this.data.current(function (selected) {
      var selectedIds = $.map(selected, function (s) {
        return s.id.toString();
      });

      var $options = self.$results
        .find('.select2-results__option[aria-selected]');

      $options.each(function () {
        var $option = $(this);

        var item = $.data(this, 'data');

        // id needs to be converted to a string when comparing
        var id = '' + item.id;

        if ((item.element != null && item.element.selected) ||
            (item.element == null && $.inArray(id, selectedIds) > -1)) {
          $option.attr('aria-selected', 'true');
        } else {
          $option.attr('aria-selected', 'false');
        }
      });

    });
  };

  Results.prototype.showLoading = function (params) {
    this.hideLoading();

    var loadingMore = this.options.get('translations').get('searching');

    var loading = {
      disabled: true,
      loading: true,
      text: loadingMore(params)
    };
    var $loading = this.option(loading);
    $loading.className += ' loading-results';

    this.$results.prepend($loading);
  };

  Results.prototype.hideLoading = function () {
    this.$results.find('.loading-results').remove();
  };

  Results.prototype.option = function (data) {
    var option = document.createElement('li');
    option.className = 'select2-results__option';

    var attrs = {
      'role': 'treeitem',
      'aria-selected': 'false'
    };

    if (data.disabled) {
      delete attrs['aria-selected'];
      attrs['aria-disabled'] = 'true';
    }

    if (data.id == null) {
      delete attrs['aria-selected'];
    }

    if (data._resultId != null) {
      option.id = data._resultId;
    }

    if (data.title) {
      option.title = data.title;
    }

    if (data.children) {
      attrs.role = 'group';
      attrs['aria-label'] = data.text;
      delete attrs['aria-selected'];
    }

    for (var attr in attrs) {
      var val = attrs[attr];

      option.setAttribute(attr, val);
    }

    if (data.children) {
      var $option = $(option);

      var label = document.createElement('strong');
      label.className = 'select2-results__group';

      var $label = $(label);
      this.template(data, label);

      var $children = [];

      for (var c = 0; c < data.children.length; c++) {
        var child = data.children[c];

        var $child = this.option(child);

        $children.push($child);
      }

      var $childrenContainer = $('<ul></ul>', {
        'class': 'select2-results__options select2-results__options--nested'
      });

      $childrenContainer.append($children);

      $option.append(label);
      $option.append($childrenContainer);
    } else {
      this.template(data, option);
    }

    $.data(option, 'data', data);

    return option;
  };

  Results.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-results';

    this.$results.attr('id', id);

    container.on('results:all', function (params) {
      self.clear();
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
        self.highlightFirstItem();
      }
    });

    container.on('results:append', function (params) {
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
      }
    });

    container.on('query', function (params) {
      self.hideMessages();
      self.showLoading(params);
    });

    container.on('select', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();
      self.highlightFirstItem();
    });

    container.on('unselect', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();
      self.highlightFirstItem();
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expended="true"
      self.$results.attr('aria-expanded', 'true');
      self.$results.attr('aria-hidden', 'false');

      self.setClasses();
      self.ensureHighlightVisible();
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expended="false"
      self.$results.attr('aria-expanded', 'false');
      self.$results.attr('aria-hidden', 'true');
      self.$results.removeAttr('aria-activedescendant');
    });

    container.on('results:toggle', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      $highlighted.trigger('mouseup');
    });

    container.on('results:select', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      var data = $highlighted.data('data');

      if ($highlighted.attr('aria-selected') == 'true') {
        self.trigger('close', {});
      } else {
        self.trigger('select', {
          data: data
        });
      }
    });

    container.on('results:previous', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('[aria-selected]');

      var currentIndex = $options.index($highlighted);

      // If we are already at te top, don't move further
      if (currentIndex === 0) {
        return;
      }

      var nextIndex = currentIndex - 1;

      // If none are highlighted, highlight the first
      if ($highlighted.length === 0) {
        nextIndex = 0;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top;
      var nextTop = $next.offset().top;
      var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextTop - currentOffset < 0) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:next', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('[aria-selected]');

      var currentIndex = $options.index($highlighted);

      var nextIndex = currentIndex + 1;

      // If we are at the last option, stay there
      if (nextIndex >= $options.length) {
        return;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var nextBottom = $next.offset().top + $next.outerHeight(false);
      var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextBottom > currentOffset) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:focus', function (params) {
      params.element.addClass('select2-results__option--highlighted');
    });

    container.on('results:message', function (params) {
      self.displayMessage(params);
    });

    if ($.fn.mousewheel) {
      this.$results.on('mousewheel', function (e) {
        var top = self.$results.scrollTop();

        var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;

        var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
        var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

        if (isAtTop) {
          self.$results.scrollTop(0);

          e.preventDefault();
          e.stopPropagation();
        } else if (isAtBottom) {
          self.$results.scrollTop(
            self.$results.get(0).scrollHeight - self.$results.height()
          );

          e.preventDefault();
          e.stopPropagation();
        }
      });
    }

    this.$results.on('mouseup', '.select2-results__option[aria-selected]',
      function (evt) {
      var $this = $(this);

      var data = $this.data('data');

      if ($this.attr('aria-selected') === 'true') {
        if (self.options.get('multiple')) {
          self.trigger('unselect', {
            originalEvent: evt,
            data: data
          });
        } else {
          self.trigger('close', {});
        }

        return;
      }

      self.trigger('select', {
        originalEvent: evt,
        data: data
      });
    });

    this.$results.on('mouseenter', '.select2-results__option[aria-selected]',
      function (evt) {
      var data = $(this).data('data');

      self.getHighlightedResults()
          .removeClass('select2-results__option--highlighted');

      self.trigger('results:focus', {
        data: data,
        element: $(this)
      });
    });
  };

  Results.prototype.getHighlightedResults = function () {
    var $highlighted = this.$results
    .find('.select2-results__option--highlighted');

    return $highlighted;
  };

  Results.prototype.destroy = function () {
    this.$results.remove();
  };

  Results.prototype.ensureHighlightVisible = function () {
    var $highlighted = this.getHighlightedResults();

    if ($highlighted.length === 0) {
      return;
    }

    var $options = this.$results.find('[aria-selected]');

    var currentIndex = $options.index($highlighted);

    var currentOffset = this.$results.offset().top;
    var nextTop = $highlighted.offset().top;
    var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);

    var offsetDelta = nextTop - currentOffset;
    nextOffset -= $highlighted.outerHeight(false) * 2;

    if (currentIndex <= 2) {
      this.$results.scrollTop(0);
    } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
      this.$results.scrollTop(nextOffset);
    }
  };

  Results.prototype.template = function (result, container) {
    var template = this.options.get('templateResult');
    var escapeMarkup = this.options.get('escapeMarkup');

    var content = template(result, container);

    if (content == null) {
      container.style.display = 'none';
    } else if (typeof content === 'string') {
      container.innerHTML = escapeMarkup(content);
    } else {
      $(container).append(content);
    }
  };

  return Results;
});

S2.define('select2/keys',[

], function () {
  var KEYS = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    DELETE: 46
  };

  return KEYS;
});

S2.define('select2/selection/base',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function BaseSelection ($element, options) {
    this.$element = $element;
    this.options = options;

    BaseSelection.__super__.constructor.call(this);
  }

  Utils.Extend(BaseSelection, Utils.Observable);

  BaseSelection.prototype.render = function () {
    var $selection = $(
      '<span class="select2-selection" role="combobox" ' +
      ' aria-haspopup="true" aria-expanded="false">' +
      '</span>'
    );

    this._tabindex = 0;

    if (this.$element.data('old-tabindex') != null) {
      this._tabindex = this.$element.data('old-tabindex');
    } else if (this.$element.attr('tabindex') != null) {
      this._tabindex = this.$element.attr('tabindex');
    }

    $selection.attr('title', this.$element.attr('title'));
    $selection.attr('tabindex', this._tabindex);

    this.$selection = $selection;

    return $selection;
  };

  BaseSelection.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-container';
    var resultsId = container.id + '-results';

    this.container = container;

    this.$selection.on('focus', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('blur', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      if (evt.which === KEYS.SPACE) {
        evt.preventDefault();
      }
    });

    container.on('results:focus', function (params) {
      self.$selection.attr('aria-activedescendant', params.data._resultId);
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expanded="true"
      self.$selection.attr('aria-expanded', 'true');
      self.$selection.attr('aria-owns', resultsId);

      self._attachCloseHandler(container);
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expanded="false"
      self.$selection.attr('aria-expanded', 'false');
      self.$selection.removeAttr('aria-activedescendant');
      self.$selection.removeAttr('aria-owns');

      self.$selection.focus();

      self._detachCloseHandler(container);
    });

    container.on('enable', function () {
      self.$selection.attr('tabindex', self._tabindex);
    });

    container.on('disable', function () {
      self.$selection.attr('tabindex', '-1');
    });
  };

  BaseSelection.prototype._handleBlur = function (evt) {
    var self = this;

    // This needs to be delayed as the active element is the body when the tab
    // key is pressed, possibly along with others.
    window.setTimeout(function () {
      // Don't trigger `blur` if the focus is still in the selection
      if (
        (document.activeElement == self.$selection[0]) ||
        ($.contains(self.$selection[0], document.activeElement))
      ) {
        return;
      }

      self.trigger('blur', evt);
    }, 1);
  };

  BaseSelection.prototype._attachCloseHandler = function (container) {
    var self = this;

    $(document.body).on('mousedown.select2.' + container.id, function (e) {
      var $target = $(e.target);

      var $select = $target.closest('.select2');

      var $all = $('.select2.select2-container--open');

      $all.each(function () {
        var $this = $(this);

        if (this == $select[0]) {
          return;
        }

        var $element = $this.data('element');

        $element.select2('close');
      });
    });
  };

  BaseSelection.prototype._detachCloseHandler = function (container) {
    $(document.body).off('mousedown.select2.' + container.id);
  };

  BaseSelection.prototype.position = function ($selection, $container) {
    var $selectionContainer = $container.find('.selection');
    $selectionContainer.append($selection);
  };

  BaseSelection.prototype.destroy = function () {
    this._detachCloseHandler(this.container);
  };

  BaseSelection.prototype.update = function (data) {
    throw new Error('The `update` method must be defined in child classes.');
  };

  return BaseSelection;
});

S2.define('select2/selection/single',[
  'jquery',
  './base',
  '../utils',
  '../keys'
], function ($, BaseSelection, Utils, KEYS) {
  function SingleSelection () {
    SingleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(SingleSelection, BaseSelection);

  SingleSelection.prototype.render = function () {
    var $selection = SingleSelection.__super__.render.call(this);

    $selection.addClass('select2-selection--single');

    $selection.html(
      '<span class="select2-selection__rendered"></span>' +
      '<span class="select2-selection__arrow" role="presentation">' +
        '<b role="presentation"></b>' +
      '</span>'
    );

    return $selection;
  };

  SingleSelection.prototype.bind = function (container, $container) {
    var self = this;

    SingleSelection.__super__.bind.apply(this, arguments);

    var id = container.id + '-container';

    this.$selection.find('.select2-selection__rendered').attr('id', id);
    this.$selection.attr('aria-labelledby', id);

    this.$selection.on('mousedown', function (evt) {
      // Only respond to left clicks
      if (evt.which !== 1) {
        return;
      }

      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on('focus', function (evt) {
      // User focuses on the container
    });

    this.$selection.on('blur', function (evt) {
      // User exits the container
    });

    container.on('focus', function (evt) {
      if (!container.isOpen()) {
        self.$selection.focus();
      }
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });
  };

  SingleSelection.prototype.clear = function () {
    this.$selection.find('.select2-selection__rendered').empty();
  };

  SingleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  SingleSelection.prototype.selectionContainer = function () {
    return $('<span></span>');
  };

  SingleSelection.prototype.update = function (data) {
    if (data.length === 0) {
      this.clear();
      return;
    }

    var selection = data[0];

    var $rendered = this.$selection.find('.select2-selection__rendered');
    var formatted = this.display(selection, $rendered);

    $rendered.empty().append(formatted);
    $rendered.prop('title', selection.title || selection.text);
  };

  return SingleSelection;
});

S2.define('select2/selection/multiple',[
  'jquery',
  './base',
  '../utils'
], function ($, BaseSelection, Utils) {
  function MultipleSelection ($element, options) {
    MultipleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(MultipleSelection, BaseSelection);

  MultipleSelection.prototype.render = function () {
    var $selection = MultipleSelection.__super__.render.call(this);

    $selection.addClass('select2-selection--multiple');

    $selection.html(
      '<ul class="select2-selection__rendered"></ul>'
    );

    return $selection;
  };

  MultipleSelection.prototype.bind = function (container, $container) {
    var self = this;

    MultipleSelection.__super__.bind.apply(this, arguments);

    this.$selection.on('click', function (evt) {
      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on(
      'click',
      '.select2-selection__choice__remove',
      function (evt) {
        // Ignore the event if it is disabled
        if (self.options.get('disabled')) {
          return;
        }

        var $remove = $(this);
        var $selection = $remove.parent();

        var data = $selection.data('data');

        self.trigger('unselect', {
          originalEvent: evt,
          data: data
        });
      }
    );
  };

  MultipleSelection.prototype.clear = function () {
    this.$selection.find('.select2-selection__rendered').empty();
  };

  MultipleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  MultipleSelection.prototype.selectionContainer = function () {
    var $container = $(
      '<li class="select2-selection__choice">' +
        '<span class="select2-selection__choice__remove" role="presentation">' +
          '&times;' +
        '</span>' +
      '</li>'
    );

    return $container;
  };

  MultipleSelection.prototype.update = function (data) {
    this.clear();

    if (data.length === 0) {
      return;
    }

    var $selections = [];

    for (var d = 0; d < data.length; d++) {
      var selection = data[d];

      var $selection = this.selectionContainer();
      var formatted = this.display(selection, $selection);

      $selection.append(formatted);
      $selection.prop('title', selection.title || selection.text);

      $selection.data('data', selection);

      $selections.push($selection);
    }

    var $rendered = this.$selection.find('.select2-selection__rendered');

    Utils.appendMany($rendered, $selections);
  };

  return MultipleSelection;
});

S2.define('select2/selection/placeholder',[
  '../utils'
], function (Utils) {
  function Placeholder (decorated, $element, options) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options);
  }

  Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
    var $placeholder = this.selectionContainer();

    $placeholder.html(this.display(placeholder));
    $placeholder.addClass('select2-selection__placeholder')
                .removeClass('select2-selection__choice');

    return $placeholder;
  };

  Placeholder.prototype.update = function (decorated, data) {
    var singlePlaceholder = (
      data.length == 1 && data[0].id != this.placeholder.id
    );
    var multipleSelections = data.length > 1;

    if (multipleSelections || singlePlaceholder) {
      return decorated.call(this, data);
    }

    this.clear();

    var $placeholder = this.createPlaceholder(this.placeholder);

    this.$selection.find('.select2-selection__rendered').append($placeholder);
  };

  return Placeholder;
});

S2.define('select2/selection/allowClear',[
  'jquery',
  '../keys'
], function ($, KEYS) {
  function AllowClear () { }

  AllowClear.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    if (this.placeholder == null) {
      if (this.options.get('debug') && window.console && console.error) {
        console.error(
          'Select2: The `allowClear` option should be used in combination ' +
          'with the `placeholder` option.'
        );
      }
    }

    this.$selection.on('mousedown', '.select2-selection__clear',
      function (evt) {
        self._handleClear(evt);
    });

    container.on('keypress', function (evt) {
      self._handleKeyboardClear(evt, container);
    });
  };

  AllowClear.prototype._handleClear = function (_, evt) {
    // Ignore the event if it is disabled
    if (this.options.get('disabled')) {
      return;
    }

    var $clear = this.$selection.find('.select2-selection__clear');

    // Ignore the event if nothing has been selected
    if ($clear.length === 0) {
      return;
    }

    evt.stopPropagation();

    var data = $clear.data('data');

    for (var d = 0; d < data.length; d++) {
      var unselectData = {
        data: data[d]
      };

      // Trigger the `unselect` event, so people can prevent it from being
      // cleared.
      this.trigger('unselect', unselectData);

      // If the event was prevented, don't clear it out.
      if (unselectData.prevented) {
        return;
      }
    }

    this.$element.val(this.placeholder.id).trigger('change');

    this.trigger('toggle', {});
  };

  AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
    if (container.isOpen()) {
      return;
    }

    if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
      this._handleClear(evt);
    }
  };

  AllowClear.prototype.update = function (decorated, data) {
    decorated.call(this, data);

    if (this.$selection.find('.select2-selection__placeholder').length > 0 ||
        data.length === 0) {
      return;
    }

    var $remove = $(
      '<span class="select2-selection__clear">' +
        '&times;' +
      '</span>'
    );
    $remove.data('data', data);

    this.$selection.find('.select2-selection__rendered').prepend($remove);
  };

  return AllowClear;
});

S2.define('select2/selection/search',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function Search (decorated, $element, options) {
    decorated.call(this, $element, options);
  }

  Search.prototype.render = function (decorated) {
    var $search = $(
      '<li class="select2-search select2-search--inline">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="none"' +
        ' spellcheck="false" role="textbox" aria-autocomplete="list" />' +
      '</li>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    var $rendered = decorated.call(this);

    this._transferTabIndex();

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('open', function () {
      self.$search.trigger('focus');
    });

    container.on('close', function () {
      self.$search.val('');
      self.$search.removeAttr('aria-activedescendant');
      self.$search.trigger('focus');
    });

    container.on('enable', function () {
      self.$search.prop('disabled', false);

      self._transferTabIndex();
    });

    container.on('disable', function () {
      self.$search.prop('disabled', true);
    });

    container.on('focus', function (evt) {
      self.$search.trigger('focus');
    });

    container.on('results:focus', function (params) {
      self.$search.attr('aria-activedescendant', params.id);
    });

    this.$selection.on('focusin', '.select2-search--inline', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('focusout', '.select2-search--inline', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', '.select2-search--inline', function (evt) {
      evt.stopPropagation();

      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();

      var key = evt.which;

      if (key === KEYS.BACKSPACE && self.$search.val() === '') {
        var $previousChoice = self.$searchContainer
          .prev('.select2-selection__choice');

        if ($previousChoice.length > 0) {
          var item = $previousChoice.data('data');

          self.searchRemoveChoice(item);

          evt.preventDefault();
        }
      }
    });

    // Try to detect the IE version should the `documentMode` property that
    // is stored on the document. This is only implemented in IE and is
    // slightly cleaner than doing a user agent check.
    // This property is not available in Edge, but Edge also doesn't have
    // this bug.
    var msie = document.documentMode;
    var disableInputEvents = msie && msie <= 11;

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$selection.on(
      'input.searchcheck',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents) {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        // Unbind the duplicated `keyup` event
        self.$selection.off('keyup.search');
      }
    );

    this.$selection.on(
      'keyup.search input.search',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents && evt.type === 'input') {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        var key = evt.which;

        // We can freely ignore events from modifier keys
        if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
          return;
        }

        // Tabbing will be handled during the `keydown` phase
        if (key == KEYS.TAB) {
          return;
        }

        self.handleSearch(evt);
      }
    );
  };

  /**
   * This method will transfer the tabindex attribute from the rendered
   * selection to the search box. This allows for the search box to be used as
   * the primary focus instead of the selection container.
   *
   * @private
   */
  Search.prototype._transferTabIndex = function (decorated) {
    this.$search.attr('tabindex', this.$selection.attr('tabindex'));
    this.$selection.attr('tabindex', '-1');
  };

  Search.prototype.createPlaceholder = function (decorated, placeholder) {
    this.$search.attr('placeholder', placeholder.text);
  };

  Search.prototype.update = function (decorated, data) {
    var searchHadFocus = this.$search[0] == document.activeElement;

    this.$search.attr('placeholder', '');

    decorated.call(this, data);

    this.$selection.find('.select2-selection__rendered')
                   .append(this.$searchContainer);

    this.resizeSearch();
    if (searchHadFocus) {
      this.$search.focus();
    }
  };

  Search.prototype.handleSearch = function () {
    this.resizeSearch();

    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.searchRemoveChoice = function (decorated, item) {
    this.trigger('unselect', {
      data: item
    });

    this.$search.val(item.text);
    this.handleSearch();
  };

  Search.prototype.resizeSearch = function () {
    this.$search.css('width', '25px');

    var width = '';

    if (this.$search.attr('placeholder') !== '') {
      width = this.$selection.find('.select2-selection__rendered').innerWidth();
    } else {
      var minimumWidth = this.$search.val().length + 1;

      width = (minimumWidth * 0.75) + 'em';
    }

    this.$search.css('width', width);
  };

  return Search;
});

S2.define('select2/selection/eventRelay',[
  'jquery'
], function ($) {
  function EventRelay () { }

  EventRelay.prototype.bind = function (decorated, container, $container) {
    var self = this;
    var relayEvents = [
      'open', 'opening',
      'close', 'closing',
      'select', 'selecting',
      'unselect', 'unselecting'
    ];

    var preventableEvents = ['opening', 'closing', 'selecting', 'unselecting'];

    decorated.call(this, container, $container);

    container.on('*', function (name, params) {
      // Ignore events that should not be relayed
      if ($.inArray(name, relayEvents) === -1) {
        return;
      }

      // The parameters should always be an object
      params = params || {};

      // Generate the jQuery event for the Select2 event
      var evt = $.Event('select2:' + name, {
        params: params
      });

      self.$element.trigger(evt);

      // Only handle preventable events if it was one
      if ($.inArray(name, preventableEvents) === -1) {
        return;
      }

      params.prevented = evt.isDefaultPrevented();
    });
  };

  return EventRelay;
});

S2.define('select2/translation',[
  'jquery',
  'require'
], function ($, require) {
  function Translation (dict) {
    this.dict = dict || {};
  }

  Translation.prototype.all = function () {
    return this.dict;
  };

  Translation.prototype.get = function (key) {
    return this.dict[key];
  };

  Translation.prototype.extend = function (translation) {
    this.dict = $.extend({}, translation.all(), this.dict);
  };

  // Static functions

  Translation._cache = {};

  Translation.loadPath = function (path) {
    if (!(path in Translation._cache)) {
      var translations = require(path);

      Translation._cache[path] = translations;
    }

    return new Translation(Translation._cache[path]);
  };

  return Translation;
});

S2.define('select2/diacritics',[

], function () {
  var diacritics = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u24CC': 'W',
    '\uFF37': 'W',
    '\u1E80': 'W',
    '\u1E82': 'W',
    '\u0174': 'W',
    '\u1E86': 'W',
    '\u1E84': 'W',
    '\u1E88': 'W',
    '\u2C72': 'W',
    '\u24CD': 'X',
    '\uFF38': 'X',
    '\u1E8A': 'X',
    '\u1E8C': 'X',
    '\u24CE': 'Y',
    '\uFF39': 'Y',
    '\u1EF2': 'Y',
    '\u00DD': 'Y',
    '\u0176': 'Y',
    '\u1EF8': 'Y',
    '\u0232': 'Y',
    '\u1E8E': 'Y',
    '\u0178': 'Y',
    '\u1EF6': 'Y',
    '\u1EF4': 'Y',
    '\u01B3': 'Y',
    '\u024E': 'Y',
    '\u1EFE': 'Y',
    '\u24CF': 'Z',
    '\uFF3A': 'Z',
    '\u0179': 'Z',
    '\u1E90': 'Z',
    '\u017B': 'Z',
    '\u017D': 'Z',
    '\u1E92': 'Z',
    '\u1E94': 'Z',
    '\u01B5': 'Z',
    '\u0224': 'Z',
    '\u2C7F': 'Z',
    '\u2C6B': 'Z',
    '\uA762': 'Z',
    '\u24D0': 'a',
    '\uFF41': 'a',
    '\u1E9A': 'a',
    '\u00E0': 'a',
    '\u00E1': 'a',
    '\u00E2': 'a',
    '\u1EA7': 'a',
    '\u1EA5': 'a',
    '\u1EAB': 'a',
    '\u1EA9': 'a',
    '\u00E3': 'a',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u1EB1': 'a',
    '\u1EAF': 'a',
    '\u1EB5': 'a',
    '\u1EB3': 'a',
    '\u0227': 'a',
    '\u01E1': 'a',
    '\u00E4': 'a',
    '\u01DF': 'a',
    '\u1EA3': 'a',
    '\u00E5': 'a',
    '\u01FB': 'a',
    '\u01CE': 'a',
    '\u0201': 'a',
    '\u0203': 'a',
    '\u1EA1': 'a',
    '\u1EAD': 'a',
    '\u1EB7': 'a',
    '\u1E01': 'a',
    '\u0105': 'a',
    '\u2C65': 'a',
    '\u0250': 'a',
    '\uA733': 'aa',
    '\u00E6': 'ae',
    '\u01FD': 'ae',
    '\u01E3': 'ae',
    '\uA735': 'ao',
    '\uA737': 'au',
    '\uA739': 'av',
    '\uA73B': 'av',
    '\uA73D': 'ay',
    '\u24D1': 'b',
    '\uFF42': 'b',
    '\u1E03': 'b',
    '\u1E05': 'b',
    '\u1E07': 'b',
    '\u0180': 'b',
    '\u0183': 'b',
    '\u0253': 'b',
    '\u24D2': 'c',
    '\uFF43': 'c',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010B': 'c',
    '\u010D': 'c',
    '\u00E7': 'c',
    '\u1E09': 'c',
    '\u0188': 'c',
    '\u023C': 'c',
    '\uA73F': 'c',
    '\u2184': 'c',
    '\u24D3': 'd',
    '\uFF44': 'd',
    '\u1E0B': 'd',
    '\u010F': 'd',
    '\u1E0D': 'd',
    '\u1E11': 'd',
    '\u1E13': 'd',
    '\u1E0F': 'd',
    '\u0111': 'd',
    '\u018C': 'd',
    '\u0256': 'd',
    '\u0257': 'd',
    '\uA77A': 'd',
    '\u01F3': 'dz',
    '\u01C6': 'dz',
    '\u24D4': 'e',
    '\uFF45': 'e',
    '\u00E8': 'e',
    '\u00E9': 'e',
    '\u00EA': 'e',
    '\u1EC1': 'e',
    '\u1EBF': 'e',
    '\u1EC5': 'e',
    '\u1EC3': 'e',
    '\u1EBD': 'e',
    '\u0113': 'e',
    '\u1E15': 'e',
    '\u1E17': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u00EB': 'e',
    '\u1EBB': 'e',
    '\u011B': 'e',
    '\u0205': 'e',
    '\u0207': 'e',
    '\u1EB9': 'e',
    '\u1EC7': 'e',
    '\u0229': 'e',
    '\u1E1D': 'e',
    '\u0119': 'e',
    '\u1E19': 'e',
    '\u1E1B': 'e',
    '\u0247': 'e',
    '\u025B': 'e',
    '\u01DD': 'e',
    '\u24D5': 'f',
    '\uFF46': 'f',
    '\u1E1F': 'f',
    '\u0192': 'f',
    '\uA77C': 'f',
    '\u24D6': 'g',
    '\uFF47': 'g',
    '\u01F5': 'g',
    '\u011D': 'g',
    '\u1E21': 'g',
    '\u011F': 'g',
    '\u0121': 'g',
    '\u01E7': 'g',
    '\u0123': 'g',
    '\u01E5': 'g',
    '\u0260': 'g',
    '\uA7A1': 'g',
    '\u1D79': 'g',
    '\uA77F': 'g',
    '\u24D7': 'h',
    '\uFF48': 'h',
    '\u0125': 'h',
    '\u1E23': 'h',
    '\u1E27': 'h',
    '\u021F': 'h',
    '\u1E25': 'h',
    '\u1E29': 'h',
    '\u1E2B': 'h',
    '\u1E96': 'h',
    '\u0127': 'h',
    '\u2C68': 'h',
    '\u2C76': 'h',
    '\u0265': 'h',
    '\u0195': 'hv',
    '\u24D8': 'i',
    '\uFF49': 'i',
    '\u00EC': 'i',
    '\u00ED': 'i',
    '\u00EE': 'i',
    '\u0129': 'i',
    '\u012B': 'i',
    '\u012D': 'i',
    '\u00EF': 'i',
    '\u1E2F': 'i',
    '\u1EC9': 'i',
    '\u01D0': 'i',
    '\u0209': 'i',
    '\u020B': 'i',
    '\u1ECB': 'i',
    '\u012F': 'i',
    '\u1E2D': 'i',
    '\u0268': 'i',
    '\u0131': 'i',
    '\u24D9': 'j',
    '\uFF4A': 'j',
    '\u0135': 'j',
    '\u01F0': 'j',
    '\u0249': 'j',
    '\u24DA': 'k',
    '\uFF4B': 'k',
    '\u1E31': 'k',
    '\u01E9': 'k',
    '\u1E33': 'k',
    '\u0137': 'k',
    '\u1E35': 'k',
    '\u0199': 'k',
    '\u2C6A': 'k',
    '\uA741': 'k',
    '\uA743': 'k',
    '\uA745': 'k',
    '\uA7A3': 'k',
    '\u24DB': 'l',
    '\uFF4C': 'l',
    '\u0140': 'l',
    '\u013A': 'l',
    '\u013E': 'l',
    '\u1E37': 'l',
    '\u1E39': 'l',
    '\u013C': 'l',
    '\u1E3D': 'l',
    '\u1E3B': 'l',
    '\u017F': 'l',
    '\u0142': 'l',
    '\u019A': 'l',
    '\u026B': 'l',
    '\u2C61': 'l',
    '\uA749': 'l',
    '\uA781': 'l',
    '\uA747': 'l',
    '\u01C9': 'lj',
    '\u24DC': 'm',
    '\uFF4D': 'm',
    '\u1E3F': 'm',
    '\u1E41': 'm',
    '\u1E43': 'm',
    '\u0271': 'm',
    '\u026F': 'm',
    '\u24DD': 'n',
    '\uFF4E': 'n',
    '\u01F9': 'n',
    '\u0144': 'n',
    '\u00F1': 'n',
    '\u1E45': 'n',
    '\u0148': 'n',
    '\u1E47': 'n',
    '\u0146': 'n',
    '\u1E4B': 'n',
    '\u1E49': 'n',
    '\u019E': 'n',
    '\u0272': 'n',
    '\u0149': 'n',
    '\uA791': 'n',
    '\uA7A5': 'n',
    '\u01CC': 'nj',
    '\u24DE': 'o',
    '\uFF4F': 'o',
    '\u00F2': 'o',
    '\u00F3': 'o',
    '\u00F4': 'o',
    '\u1ED3': 'o',
    '\u1ED1': 'o',
    '\u1ED7': 'o',
    '\u1ED5': 'o',
    '\u00F5': 'o',
    '\u1E4D': 'o',
    '\u022D': 'o',
    '\u1E4F': 'o',
    '\u014D': 'o',
    '\u1E51': 'o',
    '\u1E53': 'o',
    '\u014F': 'o',
    '\u022F': 'o',
    '\u0231': 'o',
    '\u00F6': 'o',
    '\u022B': 'o',
    '\u1ECF': 'o',
    '\u0151': 'o',
    '\u01D2': 'o',
    '\u020D': 'o',
    '\u020F': 'o',
    '\u01A1': 'o',
    '\u1EDD': 'o',
    '\u1EDB': 'o',
    '\u1EE1': 'o',
    '\u1EDF': 'o',
    '\u1EE3': 'o',
    '\u1ECD': 'o',
    '\u1ED9': 'o',
    '\u01EB': 'o',
    '\u01ED': 'o',
    '\u00F8': 'o',
    '\u01FF': 'o',
    '\u0254': 'o',
    '\uA74B': 'o',
    '\uA74D': 'o',
    '\u0275': 'o',
    '\u01A3': 'oi',
    '\u0223': 'ou',
    '\uA74F': 'oo',
    '\u24DF': 'p',
    '\uFF50': 'p',
    '\u1E55': 'p',
    '\u1E57': 'p',
    '\u01A5': 'p',
    '\u1D7D': 'p',
    '\uA751': 'p',
    '\uA753': 'p',
    '\uA755': 'p',
    '\u24E0': 'q',
    '\uFF51': 'q',
    '\u024B': 'q',
    '\uA757': 'q',
    '\uA759': 'q',
    '\u24E1': 'r',
    '\uFF52': 'r',
    '\u0155': 'r',
    '\u1E59': 'r',
    '\u0159': 'r',
    '\u0211': 'r',
    '\u0213': 'r',
    '\u1E5B': 'r',
    '\u1E5D': 'r',
    '\u0157': 'r',
    '\u1E5F': 'r',
    '\u024D': 'r',
    '\u027D': 'r',
    '\uA75B': 'r',
    '\uA7A7': 'r',
    '\uA783': 'r',
    '\u24E2': 's',
    '\uFF53': 's',
    '\u00DF': 's',
    '\u015B': 's',
    '\u1E65': 's',
    '\u015D': 's',
    '\u1E61': 's',
    '\u0161': 's',
    '\u1E67': 's',
    '\u1E63': 's',
    '\u1E69': 's',
    '\u0219': 's',
    '\u015F': 's',
    '\u023F': 's',
    '\uA7A9': 's',
    '\uA785': 's',
    '\u1E9B': 's',
    '\u24E3': 't',
    '\uFF54': 't',
    '\u1E6B': 't',
    '\u1E97': 't',
    '\u0165': 't',
    '\u1E6D': 't',
    '\u021B': 't',
    '\u0163': 't',
    '\u1E71': 't',
    '\u1E6F': 't',
    '\u0167': 't',
    '\u01AD': 't',
    '\u0288': 't',
    '\u2C66': 't',
    '\uA787': 't',
    '\uA729': 'tz',
    '\u24E4': 'u',
    '\uFF55': 'u',
    '\u00F9': 'u',
    '\u00FA': 'u',
    '\u00FB': 'u',
    '\u0169': 'u',
    '\u1E79': 'u',
    '\u016B': 'u',
    '\u1E7B': 'u',
    '\u016D': 'u',
    '\u00FC': 'u',
    '\u01DC': 'u',
    '\u01D8': 'u',
    '\u01D6': 'u',
    '\u01DA': 'u',
    '\u1EE7': 'u',
    '\u016F': 'u',
    '\u0171': 'u',
    '\u01D4': 'u',
    '\u0215': 'u',
    '\u0217': 'u',
    '\u01B0': 'u',
    '\u1EEB': 'u',
    '\u1EE9': 'u',
    '\u1EEF': 'u',
    '\u1EED': 'u',
    '\u1EF1': 'u',
    '\u1EE5': 'u',
    '\u1E73': 'u',
    '\u0173': 'u',
    '\u1E77': 'u',
    '\u1E75': 'u',
    '\u0289': 'u',
    '\u24E5': 'v',
    '\uFF56': 'v',
    '\u1E7D': 'v',
    '\u1E7F': 'v',
    '\u028B': 'v',
    '\uA75F': 'v',
    '\u028C': 'v',
    '\uA761': 'vy',
    '\u24E6': 'w',
    '\uFF57': 'w',
    '\u1E81': 'w',
    '\u1E83': 'w',
    '\u0175': 'w',
    '\u1E87': 'w',
    '\u1E85': 'w',
    '\u1E98': 'w',
    '\u1E89': 'w',
    '\u2C73': 'w',
    '\u24E7': 'x',
    '\uFF58': 'x',
    '\u1E8B': 'x',
    '\u1E8D': 'x',
    '\u24E8': 'y',
    '\uFF59': 'y',
    '\u1EF3': 'y',
    '\u00FD': 'y',
    '\u0177': 'y',
    '\u1EF9': 'y',
    '\u0233': 'y',
    '\u1E8F': 'y',
    '\u00FF': 'y',
    '\u1EF7': 'y',
    '\u1E99': 'y',
    '\u1EF5': 'y',
    '\u01B4': 'y',
    '\u024F': 'y',
    '\u1EFF': 'y',
    '\u24E9': 'z',
    '\uFF5A': 'z',
    '\u017A': 'z',
    '\u1E91': 'z',
    '\u017C': 'z',
    '\u017E': 'z',
    '\u1E93': 'z',
    '\u1E95': 'z',
    '\u01B6': 'z',
    '\u0225': 'z',
    '\u0240': 'z',
    '\u2C6C': 'z',
    '\uA763': 'z',
    '\u0386': '\u0391',
    '\u0388': '\u0395',
    '\u0389': '\u0397',
    '\u038A': '\u0399',
    '\u03AA': '\u0399',
    '\u038C': '\u039F',
    '\u038E': '\u03A5',
    '\u03AB': '\u03A5',
    '\u038F': '\u03A9',
    '\u03AC': '\u03B1',
    '\u03AD': '\u03B5',
    '\u03AE': '\u03B7',
    '\u03AF': '\u03B9',
    '\u03CA': '\u03B9',
    '\u0390': '\u03B9',
    '\u03CC': '\u03BF',
    '\u03CD': '\u03C5',
    '\u03CB': '\u03C5',
    '\u03B0': '\u03C5',
    '\u03C9': '\u03C9',
    '\u03C2': '\u03C3'
  };

  return diacritics;
});

S2.define('select2/data/base',[
  '../utils'
], function (Utils) {
  function BaseAdapter ($element, options) {
    BaseAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(BaseAdapter, Utils.Observable);

  BaseAdapter.prototype.current = function (callback) {
    throw new Error('The `current` method must be defined in child classes.');
  };

  BaseAdapter.prototype.query = function (params, callback) {
    throw new Error('The `query` method must be defined in child classes.');
  };

  BaseAdapter.prototype.bind = function (container, $container) {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.destroy = function () {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.generateResultId = function (container, data) {
    var id = container.id + '-result-';

    id += Utils.generateChars(4);

    if (data.id != null) {
      id += '-' + data.id.toString();
    } else {
      id += '-' + Utils.generateChars(4);
    }
    return id;
  };

  return BaseAdapter;
});

S2.define('select2/data/select',[
  './base',
  '../utils',
  'jquery'
], function (BaseAdapter, Utils, $) {
  function SelectAdapter ($element, options) {
    this.$element = $element;
    this.options = options;

    SelectAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(SelectAdapter, BaseAdapter);

  SelectAdapter.prototype.current = function (callback) {
    var data = [];
    var self = this;

    this.$element.find(':selected').each(function () {
      var $option = $(this);

      var option = self.item($option);

      data.push(option);
    });

    callback(data);
  };

  SelectAdapter.prototype.select = function (data) {
    var self = this;

    data.selected = true;

    // If data.element is a DOM node, use it instead
    if ($(data.element).is('option')) {
      data.element.selected = true;

      this.$element.trigger('change');

      return;
    }

    if (this.$element.prop('multiple')) {
      this.current(function (currentData) {
        var val = [];

        data = [data];
        data.push.apply(data, currentData);

        for (var d = 0; d < data.length; d++) {
          var id = data[d].id;

          if ($.inArray(id, val) === -1) {
            val.push(id);
          }
        }

        self.$element.val(val);
        self.$element.trigger('change');
      });
    } else {
      var val = data.id;

      this.$element.val(val);
      this.$element.trigger('change');
    }
  };

  SelectAdapter.prototype.unselect = function (data) {
    var self = this;

    if (!this.$element.prop('multiple')) {
      return;
    }

    data.selected = false;

    if ($(data.element).is('option')) {
      data.element.selected = false;

      this.$element.trigger('change');

      return;
    }

    this.current(function (currentData) {
      var val = [];

      for (var d = 0; d < currentData.length; d++) {
        var id = currentData[d].id;

        if (id !== data.id && $.inArray(id, val) === -1) {
          val.push(id);
        }
      }

      self.$element.val(val);

      self.$element.trigger('change');
    });
  };

  SelectAdapter.prototype.bind = function (container, $container) {
    var self = this;

    this.container = container;

    container.on('select', function (params) {
      self.select(params.data);
    });

    container.on('unselect', function (params) {
      self.unselect(params.data);
    });
  };

  SelectAdapter.prototype.destroy = function () {
    // Remove anything added to child elements
    this.$element.find('*').each(function () {
      // Remove any custom data set by Select2
      $.removeData(this, 'data');
    });
  };

  SelectAdapter.prototype.query = function (params, callback) {
    var data = [];
    var self = this;

    var $options = this.$element.children();

    $options.each(function () {
      var $option = $(this);

      if (!$option.is('option') && !$option.is('optgroup')) {
        return;
      }

      var option = self.item($option);

      var matches = self.matches(params, option);

      if (matches !== null) {
        data.push(matches);
      }
    });

    callback({
      results: data
    });
  };

  SelectAdapter.prototype.addOptions = function ($options) {
    Utils.appendMany(this.$element, $options);
  };

  SelectAdapter.prototype.option = function (data) {
    var option;

    if (data.children) {
      option = document.createElement('optgroup');
      option.label = data.text;
    } else {
      option = document.createElement('option');

      if (option.textContent !== undefined) {
        option.textContent = data.text;
      } else {
        option.innerText = data.text;
      }
    }

    if (data.id !== undefined) {
      option.value = data.id;
    }

    if (data.disabled) {
      option.disabled = true;
    }

    if (data.selected) {
      option.selected = true;
    }

    if (data.title) {
      option.title = data.title;
    }

    var $option = $(option);

    var normalizedData = this._normalizeItem(data);
    normalizedData.element = option;

    // Override the option's data with the combined data
    $.data(option, 'data', normalizedData);

    return $option;
  };

  SelectAdapter.prototype.item = function ($option) {
    var data = {};

    data = $.data($option[0], 'data');

    if (data != null) {
      return data;
    }

    if ($option.is('option')) {
      data = {
        id: $option.val(),
        text: $option.text(),
        disabled: $option.prop('disabled'),
        selected: $option.prop('selected'),
        title: $option.prop('title')
      };
    } else if ($option.is('optgroup')) {
      data = {
        text: $option.prop('label'),
        children: [],
        title: $option.prop('title')
      };

      var $children = $option.children('option');
      var children = [];

      for (var c = 0; c < $children.length; c++) {
        var $child = $($children[c]);

        var child = this.item($child);

        children.push(child);
      }

      data.children = children;
    }

    data = this._normalizeItem(data);
    data.element = $option[0];

    $.data($option[0], 'data', data);

    return data;
  };

  SelectAdapter.prototype._normalizeItem = function (item) {
    if (!$.isPlainObject(item)) {
      item = {
        id: item,
        text: item
      };
    }

    item = $.extend({}, {
      text: ''
    }, item);

    var defaults = {
      selected: false,
      disabled: false
    };

    if (item.id != null) {
      item.id = item.id.toString();
    }

    if (item.text != null) {
      item.text = item.text.toString();
    }

    if (item._resultId == null && item.id && this.container != null) {
      item._resultId = this.generateResultId(this.container, item);
    }

    return $.extend({}, defaults, item);
  };

  SelectAdapter.prototype.matches = function (params, data) {
    var matcher = this.options.get('matcher');

    return matcher(params, data);
  };

  return SelectAdapter;
});

S2.define('select2/data/array',[
  './select',
  '../utils',
  'jquery'
], function (SelectAdapter, Utils, $) {
  function ArrayAdapter ($element, options) {
    var data = options.get('data') || [];

    ArrayAdapter.__super__.constructor.call(this, $element, options);

    this.addOptions(this.convertToOptions(data));
  }

  Utils.Extend(ArrayAdapter, SelectAdapter);

  ArrayAdapter.prototype.select = function (data) {
    var $option = this.$element.find('option').filter(function (i, elm) {
      return elm.value == data.id.toString();
    });

    if ($option.length === 0) {
      $option = this.option(data);

      this.addOptions($option);
    }

    ArrayAdapter.__super__.select.call(this, data);
  };

  ArrayAdapter.prototype.convertToOptions = function (data) {
    var self = this;

    var $existing = this.$element.find('option');
    var existingIds = $existing.map(function () {
      return self.item($(this)).id;
    }).get();

    var $options = [];

    // Filter out all items except for the one passed in the argument
    function onlyItem (item) {
      return function () {
        return $(this).val() == item.id;
      };
    }

    for (var d = 0; d < data.length; d++) {
      var item = this._normalizeItem(data[d]);

      // Skip items which were pre-loaded, only merge the data
      if ($.inArray(item.id, existingIds) >= 0) {
        var $existingOption = $existing.filter(onlyItem(item));

        var existingData = this.item($existingOption);
        var newData = $.extend(true, {}, item, existingData);

        var $newOption = this.option(newData);

        $existingOption.replaceWith($newOption);

        continue;
      }

      var $option = this.option(item);

      if (item.children) {
        var $children = this.convertToOptions(item.children);

        Utils.appendMany($option, $children);
      }

      $options.push($option);
    }

    return $options;
  };

  return ArrayAdapter;
});

S2.define('select2/data/ajax',[
  './array',
  '../utils',
  'jquery'
], function (ArrayAdapter, Utils, $) {
  function AjaxAdapter ($element, options) {
    this.ajaxOptions = this._applyDefaults(options.get('ajax'));

    if (this.ajaxOptions.processResults != null) {
      this.processResults = this.ajaxOptions.processResults;
    }

    AjaxAdapter.__super__.constructor.call(this, $element, options);
  }

  Utils.Extend(AjaxAdapter, ArrayAdapter);

  AjaxAdapter.prototype._applyDefaults = function (options) {
    var defaults = {
      data: function (params) {
        return $.extend({}, params, {
          q: params.term
        });
      },
      transport: function (params, success, failure) {
        var $request = $.ajax(params);

        $request.then(success);
        $request.fail(failure);

        return $request;
      }
    };

    return $.extend({}, defaults, options, true);
  };

  AjaxAdapter.prototype.processResults = function (results) {
    return results;
  };

  AjaxAdapter.prototype.query = function (params, callback) {
    var matches = [];
    var self = this;

    if (this._request != null) {
      // JSONP requests cannot always be aborted
      if ($.isFunction(this._request.abort)) {
        this._request.abort();
      }

      this._request = null;
    }

    var options = $.extend({
      type: 'GET'
    }, this.ajaxOptions);

    if (typeof options.url === 'function') {
      options.url = options.url.call(this.$element, params);
    }

    if (typeof options.data === 'function') {
      options.data = options.data.call(this.$element, params);
    }

    function request () {
      var $request = options.transport(options, function (data) {
        var results = self.processResults(data, params);

        if (self.options.get('debug') && window.console && console.error) {
          // Check to make sure that the response included a `results` key.
          if (!results || !results.results || !$.isArray(results.results)) {
            console.error(
              'Select2: The AJAX results did not return an array in the ' +
              '`results` key of the response.'
            );
          }
        }

        callback(results);
      }, function () {
        // Attempt to detect if a request was aborted
        // Only works if the transport exposes a status property
        if ($request.status && $request.status === '0') {
          return;
        }

        self.trigger('results:message', {
          message: 'errorLoading'
        });
      });

      self._request = $request;
    }

    if (this.ajaxOptions.delay && params.term != null) {
      if (this._queryTimeout) {
        window.clearTimeout(this._queryTimeout);
      }

      this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
    } else {
      request();
    }
  };

  return AjaxAdapter;
});

S2.define('select2/data/tags',[
  'jquery'
], function ($) {
  function Tags (decorated, $element, options) {
    var tags = options.get('tags');

    var createTag = options.get('createTag');

    if (createTag !== undefined) {
      this.createTag = createTag;
    }

    var insertTag = options.get('insertTag');

    if (insertTag !== undefined) {
        this.insertTag = insertTag;
    }

    decorated.call(this, $element, options);

    if ($.isArray(tags)) {
      for (var t = 0; t < tags.length; t++) {
        var tag = tags[t];
        var item = this._normalizeItem(tag);

        var $option = this.option(item);

        this.$element.append($option);
      }
    }
  }

  Tags.prototype.query = function (decorated, params, callback) {
    var self = this;

    this._removeOldTags();

    if (params.term == null || params.page != null) {
      decorated.call(this, params, callback);
      return;
    }

    function wrapper (obj, child) {
      var data = obj.results;

      for (var i = 0; i < data.length; i++) {
        var option = data[i];

        var checkChildren = (
          option.children != null &&
          !wrapper({
            results: option.children
          }, true)
        );

        var optionText = (option.text || '').toUpperCase();
        var paramsTerm = (params.term || '').toUpperCase();

        var checkText = optionText === paramsTerm;

        if (checkText || checkChildren) {
          if (child) {
            return false;
          }

          obj.data = data;
          callback(obj);

          return;
        }
      }

      if (child) {
        return true;
      }

      var tag = self.createTag(params);

      if (tag != null) {
        var $option = self.option(tag);
        $option.attr('data-select2-tag', true);

        self.addOptions([$option]);

        self.insertTag(data, tag);
      }

      obj.results = data;

      callback(obj);
    }

    decorated.call(this, params, wrapper);
  };

  Tags.prototype.createTag = function (decorated, params) {
    var term = $.trim(params.term);

    if (term === '') {
      return null;
    }

    return {
      id: term,
      text: term
    };
  };

  Tags.prototype.insertTag = function (_, data, tag) {
    data.unshift(tag);
  };

  Tags.prototype._removeOldTags = function (_) {
    var tag = this._lastTag;

    var $options = this.$element.find('option[data-select2-tag]');

    $options.each(function () {
      if (this.selected) {
        return;
      }

      $(this).remove();
    });
  };

  return Tags;
});

S2.define('select2/data/tokenizer',[
  'jquery'
], function ($) {
  function Tokenizer (decorated, $element, options) {
    var tokenizer = options.get('tokenizer');

    if (tokenizer !== undefined) {
      this.tokenizer = tokenizer;
    }

    decorated.call(this, $element, options);
  }

  Tokenizer.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    this.$search =  container.dropdown.$search || container.selection.$search ||
      $container.find('.select2-search__field');
  };

  Tokenizer.prototype.query = function (decorated, params, callback) {
    var self = this;

    function createAndSelect (data) {
      // Normalize the data object so we can use it for checks
      var item = self._normalizeItem(data);

      // Check if the data object already exists as a tag
      // Select it if it doesn't
      var $existingOptions = self.$element.find('option').filter(function () {
        return $(this).val() === item.id;
      });

      // If an existing option wasn't found for it, create the option
      if (!$existingOptions.length) {
        var $option = self.option(item);
        $option.attr('data-select2-tag', true);

        self._removeOldTags();
        self.addOptions([$option]);
      }

      // Select the item, now that we know there is an option for it
      select(item);
    }

    function select (data) {
      self.trigger('select', {
        data: data
      });
    }

    params.term = params.term || '';

    var tokenData = this.tokenizer(params, this.options, createAndSelect);

    if (tokenData.term !== params.term) {
      // Replace the search term if we have the search box
      if (this.$search.length) {
        this.$search.val(tokenData.term);
        this.$search.focus();
      }

      params.term = tokenData.term;
    }

    decorated.call(this, params, callback);
  };

  Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
    var separators = options.get('tokenSeparators') || [];
    var term = params.term;
    var i = 0;

    var createTag = this.createTag || function (params) {
      return {
        id: params.term,
        text: params.term
      };
    };

    while (i < term.length) {
      var termChar = term[i];

      if ($.inArray(termChar, separators) === -1) {
        i++;

        continue;
      }

      var part = term.substr(0, i);
      var partParams = $.extend({}, params, {
        term: part
      });

      var data = createTag(partParams);

      if (data == null) {
        i++;
        continue;
      }

      callback(data);

      // Reset the term to not include the tokenized portion
      term = term.substr(i + 1) || '';
      i = 0;
    }

    return {
      term: term
    };
  };

  return Tokenizer;
});

S2.define('select2/data/minimumInputLength',[

], function () {
  function MinimumInputLength (decorated, $e, options) {
    this.minimumInputLength = options.get('minimumInputLength');

    decorated.call(this, $e, options);
  }

  MinimumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (params.term.length < this.minimumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooShort',
        args: {
          minimum: this.minimumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MinimumInputLength;
});

S2.define('select2/data/maximumInputLength',[

], function () {
  function MaximumInputLength (decorated, $e, options) {
    this.maximumInputLength = options.get('maximumInputLength');

    decorated.call(this, $e, options);
  }

  MaximumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (this.maximumInputLength > 0 &&
        params.term.length > this.maximumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooLong',
        args: {
          maximum: this.maximumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MaximumInputLength;
});

S2.define('select2/data/maximumSelectionLength',[

], function (){
  function MaximumSelectionLength (decorated, $e, options) {
    this.maximumSelectionLength = options.get('maximumSelectionLength');

    decorated.call(this, $e, options);
  }

  MaximumSelectionLength.prototype.query =
    function (decorated, params, callback) {
      var self = this;

      this.current(function (currentData) {
        var count = currentData != null ? currentData.length : 0;
        if (self.maximumSelectionLength > 0 &&
          count >= self.maximumSelectionLength) {
          self.trigger('results:message', {
            message: 'maximumSelected',
            args: {
              maximum: self.maximumSelectionLength
            }
          });
          return;
        }
        decorated.call(self, params, callback);
      });
  };

  return MaximumSelectionLength;
});

S2.define('select2/dropdown',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Dropdown ($element, options) {
    this.$element = $element;
    this.options = options;

    Dropdown.__super__.constructor.call(this);
  }

  Utils.Extend(Dropdown, Utils.Observable);

  Dropdown.prototype.render = function () {
    var $dropdown = $(
      '<span class="select2-dropdown">' +
        '<span class="select2-results"></span>' +
      '</span>'
    );

    $dropdown.attr('dir', this.options.get('dir'));

    this.$dropdown = $dropdown;

    return $dropdown;
  };

  Dropdown.prototype.bind = function () {
    // Should be implemented in subclasses
  };

  Dropdown.prototype.position = function ($dropdown, $container) {
    // Should be implmented in subclasses
  };

  Dropdown.prototype.destroy = function () {
    // Remove the dropdown from the DOM
    this.$dropdown.remove();
  };

  return Dropdown;
});

S2.define('select2/dropdown/search',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function Search () { }

  Search.prototype.render = function (decorated) {
    var $rendered = decorated.call(this);

    var $search = $(
      '<span class="select2-search select2-search--dropdown">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="none"' +
        ' spellcheck="false" role="textbox" />' +
      '</span>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    $rendered.prepend($search);

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    this.$search.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();
    });

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$search.on('input', function (evt) {
      // Unbind the duplicated `keyup` event
      $(this).off('keyup');
    });

    this.$search.on('keyup input', function (evt) {
      self.handleSearch(evt);
    });

    container.on('open', function () {
      self.$search.attr('tabindex', 0);

      self.$search.focus();

      window.setTimeout(function () {
        self.$search.focus();
      }, 0);
    });

    container.on('close', function () {
      self.$search.attr('tabindex', -1);

      self.$search.val('');
    });

    container.on('focus', function () {
      if (!container.isOpen()) {
        self.$search.focus();
      }
    });

    container.on('results:all', function (params) {
      if (params.query.term == null || params.query.term === '') {
        var showSearch = self.showSearch(params);

        if (showSearch) {
          self.$searchContainer.removeClass('select2-search--hide');
        } else {
          self.$searchContainer.addClass('select2-search--hide');
        }
      }
    });
  };

  Search.prototype.handleSearch = function (evt) {
    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.showSearch = function (_, params) {
    return true;
  };

  return Search;
});

S2.define('select2/dropdown/hidePlaceholder',[

], function () {
  function HidePlaceholder (decorated, $element, options, dataAdapter) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options, dataAdapter);
  }

  HidePlaceholder.prototype.append = function (decorated, data) {
    data.results = this.removePlaceholder(data.results);

    decorated.call(this, data);
  };

  HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  HidePlaceholder.prototype.removePlaceholder = function (_, data) {
    var modifiedData = data.slice(0);

    for (var d = data.length - 1; d >= 0; d--) {
      var item = data[d];

      if (this.placeholder.id === item.id) {
        modifiedData.splice(d, 1);
      }
    }

    return modifiedData;
  };

  return HidePlaceholder;
});

S2.define('select2/dropdown/infiniteScroll',[
  'jquery'
], function ($) {
  function InfiniteScroll (decorated, $element, options, dataAdapter) {
    this.lastParams = {};

    decorated.call(this, $element, options, dataAdapter);

    this.$loadingMore = this.createLoadingMore();
    this.loading = false;
  }

  InfiniteScroll.prototype.append = function (decorated, data) {
    this.$loadingMore.remove();
    this.loading = false;

    decorated.call(this, data);

    if (this.showLoadingMore(data)) {
      this.$results.append(this.$loadingMore);
    }
  };

  InfiniteScroll.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('query', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    container.on('query:append', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    this.$results.on('scroll', function () {
      var isLoadMoreVisible = $.contains(
        document.documentElement,
        self.$loadingMore[0]
      );

      if (self.loading || !isLoadMoreVisible) {
        return;
      }

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var loadingMoreOffset = self.$loadingMore.offset().top +
        self.$loadingMore.outerHeight(false);

      if (currentOffset + 50 >= loadingMoreOffset) {
        self.loadMore();
      }
    });
  };

  InfiniteScroll.prototype.loadMore = function () {
    this.loading = true;

    var params = $.extend({}, {page: 1}, this.lastParams);

    params.page++;

    this.trigger('query:append', params);
  };

  InfiniteScroll.prototype.showLoadingMore = function (_, data) {
    return data.pagination && data.pagination.more;
  };

  InfiniteScroll.prototype.createLoadingMore = function () {
    var $option = $(
      '<li ' +
      'class="select2-results__option select2-results__option--load-more"' +
      'role="treeitem" aria-disabled="true"></li>'
    );

    var message = this.options.get('translations').get('loadingMore');

    $option.html(message(this.lastParams));

    return $option;
  };

  return InfiniteScroll;
});

S2.define('select2/dropdown/attachBody',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function AttachBody (decorated, $element, options) {
    this.$dropdownParent = options.get('dropdownParent') || $(document.body);

    decorated.call(this, $element, options);
  }

  AttachBody.prototype.bind = function (decorated, container, $container) {
    var self = this;

    var setupResultsEvents = false;

    decorated.call(this, container, $container);

    container.on('open', function () {
      self._showDropdown();
      self._attachPositioningHandler(container);

      if (!setupResultsEvents) {
        setupResultsEvents = true;

        container.on('results:all', function () {
          self._positionDropdown();
          self._resizeDropdown();
        });

        container.on('results:append', function () {
          self._positionDropdown();
          self._resizeDropdown();
        });
      }
    });

    container.on('close', function () {
      self._hideDropdown();
      self._detachPositioningHandler(container);
    });

    this.$dropdownContainer.on('mousedown', function (evt) {
      evt.stopPropagation();
    });
  };

  AttachBody.prototype.destroy = function (decorated) {
    decorated.call(this);

    this.$dropdownContainer.remove();
  };

  AttachBody.prototype.position = function (decorated, $dropdown, $container) {
    // Clone all of the container classes
    $dropdown.attr('class', $container.attr('class'));

    $dropdown.removeClass('select2');
    $dropdown.addClass('select2-container--open');

    $dropdown.css({
      position: 'absolute',
      top: -999999
    });

    this.$container = $container;
  };

  AttachBody.prototype.render = function (decorated) {
    var $container = $('<span></span>');

    var $dropdown = decorated.call(this);
    $container.append($dropdown);

    this.$dropdownContainer = $container;

    return $container;
  };

  AttachBody.prototype._hideDropdown = function (decorated) {
    this.$dropdownContainer.detach();
  };

  AttachBody.prototype._attachPositioningHandler =
      function (decorated, container) {
    var self = this;

    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.each(function () {
      $(this).data('select2-scroll-position', {
        x: $(this).scrollLeft(),
        y: $(this).scrollTop()
      });
    });

    $watchers.on(scrollEvent, function (ev) {
      var position = $(this).data('select2-scroll-position');
      $(this).scrollTop(position.y);
    });

    $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,
      function (e) {
      self._positionDropdown();
      self._resizeDropdown();
    });
  };

  AttachBody.prototype._detachPositioningHandler =
      function (decorated, container) {
    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.off(scrollEvent);

    $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
  };

  AttachBody.prototype._positionDropdown = function () {
    var $window = $(window);

    var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');
    var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');

    var newDirection = null;

    var offset = this.$container.offset();

    offset.bottom = offset.top + this.$container.outerHeight(false);

    var container = {
      height: this.$container.outerHeight(false)
    };

    container.top = offset.top;
    container.bottom = offset.top + container.height;

    var dropdown = {
      height: this.$dropdown.outerHeight(false)
    };

    var viewport = {
      top: $window.scrollTop(),
      bottom: $window.scrollTop() + $window.height()
    };

    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);

    var css = {
      left: offset.left,
      top: container.bottom
    };

    // Determine what the parent element is to use for calciulating the offset
    var $offsetParent = this.$dropdownParent;

    // For statically positoned elements, we need to get the element
    // that is determining the offset
    if ($offsetParent.css('position') === 'static') {
      $offsetParent = $offsetParent.offsetParent();
    }

    var parentOffset = $offsetParent.offset();

    css.top -= parentOffset.top;
    css.left -= parentOffset.left;

    if (!isCurrentlyAbove && !isCurrentlyBelow) {
      newDirection = 'below';
    }

    if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
      newDirection = 'above';
    } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
      newDirection = 'below';
    }

    if (newDirection == 'above' ||
      (isCurrentlyAbove && newDirection !== 'below')) {
      css.top = container.top - parentOffset.top - dropdown.height;
    }

    if (newDirection != null) {
      this.$dropdown
        .removeClass('select2-dropdown--below select2-dropdown--above')
        .addClass('select2-dropdown--' + newDirection);
      this.$container
        .removeClass('select2-container--below select2-container--above')
        .addClass('select2-container--' + newDirection);
    }

    this.$dropdownContainer.css(css);
  };

  AttachBody.prototype._resizeDropdown = function () {
    var css = {
      width: this.$container.outerWidth(false) + 'px'
    };

    if (this.options.get('dropdownAutoWidth')) {
      css.minWidth = css.width;
      css.position = 'relative';
      css.width = 'auto';
    }

    this.$dropdown.css(css);
  };

  AttachBody.prototype._showDropdown = function (decorated) {
    this.$dropdownContainer.appendTo(this.$dropdownParent);

    this._positionDropdown();
    this._resizeDropdown();
  };

  return AttachBody;
});

S2.define('select2/dropdown/minimumResultsForSearch',[

], function () {
  function countResults (data) {
    var count = 0;

    for (var d = 0; d < data.length; d++) {
      var item = data[d];

      if (item.children) {
        count += countResults(item.children);
      } else {
        count++;
      }
    }

    return count;
  }

  function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {
    this.minimumResultsForSearch = options.get('minimumResultsForSearch');

    if (this.minimumResultsForSearch < 0) {
      this.minimumResultsForSearch = Infinity;
    }

    decorated.call(this, $element, options, dataAdapter);
  }

  MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
    if (countResults(params.data.results) < this.minimumResultsForSearch) {
      return false;
    }

    return decorated.call(this, params);
  };

  return MinimumResultsForSearch;
});

S2.define('select2/dropdown/selectOnClose',[

], function () {
  function SelectOnClose () { }

  SelectOnClose.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('close', function (params) {
      self._handleSelectOnClose(params);
    });
  };

  SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
    if (params && params.originalSelect2Event != null) {
      var event = params.originalSelect2Event;

      // Don't select an item if the close event was triggered from a select or
      // unselect event
      if (event._type === 'select' || event._type === 'unselect') {
        return;
      }
    }

    var $highlightedResults = this.getHighlightedResults();

    // Only select highlighted results
    if ($highlightedResults.length < 1) {
      return;
    }

    var data = $highlightedResults.data('data');

    // Don't re-select already selected resulte
    if (
      (data.element != null && data.element.selected) ||
      (data.element == null && data.selected)
    ) {
      return;
    }

    this.trigger('select', {
        data: data
    });
  };

  return SelectOnClose;
});

S2.define('select2/dropdown/closeOnSelect',[

], function () {
  function CloseOnSelect () { }

  CloseOnSelect.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('select', function (evt) {
      self._selectTriggered(evt);
    });

    container.on('unselect', function (evt) {
      self._selectTriggered(evt);
    });
  };

  CloseOnSelect.prototype._selectTriggered = function (_, evt) {
    var originalEvent = evt.originalEvent;

    // Don't close if the control key is being held
    if (originalEvent && originalEvent.ctrlKey) {
      return;
    }

    this.trigger('close', {
      originalEvent: originalEvent,
      originalSelect2Event: evt
    });
  };

  return CloseOnSelect;
});

S2.define('select2/i18n/en',[],function () {
  // English
  return {
    errorLoading: function () {
      return 'The results could not be loaded.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Please delete ' + overChars + ' character';

      if (overChars != 1) {
        message += 's';
      }

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Please enter ' + remainingChars + ' or more characters';

      return message;
    },
    loadingMore: function () {
      return 'Loading more results…';
    },
    maximumSelected: function (args) {
      var message = 'You can only select ' + args.maximum + ' item';

      if (args.maximum != 1) {
        message += 's';
      }

      return message;
    },
    noResults: function () {
      return 'No results found';
    },
    searching: function () {
      return 'Searching…';
    }
  };
});

S2.define('select2/defaults',[
  'jquery',
  'require',

  './results',

  './selection/single',
  './selection/multiple',
  './selection/placeholder',
  './selection/allowClear',
  './selection/search',
  './selection/eventRelay',

  './utils',
  './translation',
  './diacritics',

  './data/select',
  './data/array',
  './data/ajax',
  './data/tags',
  './data/tokenizer',
  './data/minimumInputLength',
  './data/maximumInputLength',
  './data/maximumSelectionLength',

  './dropdown',
  './dropdown/search',
  './dropdown/hidePlaceholder',
  './dropdown/infiniteScroll',
  './dropdown/attachBody',
  './dropdown/minimumResultsForSearch',
  './dropdown/selectOnClose',
  './dropdown/closeOnSelect',

  './i18n/en'
], function ($, require,

             ResultsList,

             SingleSelection, MultipleSelection, Placeholder, AllowClear,
             SelectionSearch, EventRelay,

             Utils, Translation, DIACRITICS,

             SelectData, ArrayData, AjaxData, Tags, Tokenizer,
             MinimumInputLength, MaximumInputLength, MaximumSelectionLength,

             Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,
             AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,

             EnglishTranslation) {
  function Defaults () {
    this.reset();
  }

  Defaults.prototype.apply = function (options) {
    options = $.extend(true, {}, this.defaults, options);

    if (options.dataAdapter == null) {
      if (options.ajax != null) {
        options.dataAdapter = AjaxData;
      } else if (options.data != null) {
        options.dataAdapter = ArrayData;
      } else {
        options.dataAdapter = SelectData;
      }

      if (options.minimumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MinimumInputLength
        );
      }

      if (options.maximumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumInputLength
        );
      }

      if (options.maximumSelectionLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumSelectionLength
        );
      }

      if (options.tags) {
        options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
      }

      if (options.tokenSeparators != null || options.tokenizer != null) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Tokenizer
        );
      }

      if (options.query != null) {
        var Query = require(options.amdBase + 'compat/query');

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Query
        );
      }

      if (options.initSelection != null) {
        var InitSelection = require(options.amdBase + 'compat/initSelection');

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          InitSelection
        );
      }
    }

    if (options.resultsAdapter == null) {
      options.resultsAdapter = ResultsList;

      if (options.ajax != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          InfiniteScroll
        );
      }

      if (options.placeholder != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          HidePlaceholder
        );
      }

      if (options.selectOnClose) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          SelectOnClose
        );
      }
    }

    if (options.dropdownAdapter == null) {
      if (options.multiple) {
        options.dropdownAdapter = Dropdown;
      } else {
        var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);

        options.dropdownAdapter = SearchableDropdown;
      }

      if (options.minimumResultsForSearch !== 0) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          MinimumResultsForSearch
        );
      }

      if (options.closeOnSelect) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          CloseOnSelect
        );
      }

      if (
        options.dropdownCssClass != null ||
        options.dropdownCss != null ||
        options.adaptDropdownCssClass != null
      ) {
        var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');

        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          DropdownCSS
        );
      }

      options.dropdownAdapter = Utils.Decorate(
        options.dropdownAdapter,
        AttachBody
      );
    }

    if (options.selectionAdapter == null) {
      if (options.multiple) {
        options.selectionAdapter = MultipleSelection;
      } else {
        options.selectionAdapter = SingleSelection;
      }

      // Add the placeholder mixin if a placeholder was specified
      if (options.placeholder != null) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          Placeholder
        );
      }

      if (options.allowClear) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          AllowClear
        );
      }

      if (options.multiple) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          SelectionSearch
        );
      }

      if (
        options.containerCssClass != null ||
        options.containerCss != null ||
        options.adaptContainerCssClass != null
      ) {
        var ContainerCSS = require(options.amdBase + 'compat/containerCss');

        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          ContainerCSS
        );
      }

      options.selectionAdapter = Utils.Decorate(
        options.selectionAdapter,
        EventRelay
      );
    }

    if (typeof options.language === 'string') {
      // Check if the language is specified with a region
      if (options.language.indexOf('-') > 0) {
        // Extract the region information if it is included
        var languageParts = options.language.split('-');
        var baseLanguage = languageParts[0];

        options.language = [options.language, baseLanguage];
      } else {
        options.language = [options.language];
      }
    }

    if ($.isArray(options.language)) {
      var languages = new Translation();
      options.language.push('en');

      var languageNames = options.language;

      for (var l = 0; l < languageNames.length; l++) {
        var name = languageNames[l];
        var language = {};

        try {
          // Try to load it with the original name
          language = Translation.loadPath(name);
        } catch (e) {
          try {
            // If we couldn't load it, check if it wasn't the full path
            name = this.defaults.amdLanguageBase + name;
            language = Translation.loadPath(name);
          } catch (ex) {
            // The translation could not be loaded at all. Sometimes this is
            // because of a configuration problem, other times this can be
            // because of how Select2 helps load all possible translation files.
            if (options.debug && window.console && console.warn) {
              console.warn(
                'Select2: The language file for "' + name + '" could not be ' +
                'automatically loaded. A fallback will be used instead.'
              );
            }

            continue;
          }
        }

        languages.extend(language);
      }

      options.translations = languages;
    } else {
      var baseTranslation = Translation.loadPath(
        this.defaults.amdLanguageBase + 'en'
      );
      var customTranslation = new Translation(options.language);

      customTranslation.extend(baseTranslation);

      options.translations = customTranslation;
    }

    return options;
  };

  Defaults.prototype.reset = function () {
    function stripDiacritics (text) {
      // Used 'uni range + named function' from http://jsperf.com/diacritics/18
      function match(a) {
        return DIACRITICS[a] || a;
      }

      return text.replace(/[^\u0000-\u007E]/g, match);
    }

    function matcher (params, data) {
      // Always return the object if there is nothing to compare
      if ($.trim(params.term) === '') {
        return data;
      }

      // Do a recursive check for options with children
      if (data.children && data.children.length > 0) {
        // Clone the data object if there are children
        // This is required as we modify the object to remove any non-matches
        var match = $.extend(true, {}, data);

        // Check each child of the option
        for (var c = data.children.length - 1; c >= 0; c--) {
          var child = data.children[c];

          var matches = matcher(params, child);

          // If there wasn't a match, remove the object in the array
          if (matches == null) {
            match.children.splice(c, 1);
          }
        }

        // If any children matched, return the new object
        if (match.children.length > 0) {
          return match;
        }

        // If there were no matching children, check just the plain object
        return matcher(params, match);
      }

      var original = stripDiacritics(data.text).toUpperCase();
      var term = stripDiacritics(params.term).toUpperCase();

      // Check if the text contains the term
      if (original.indexOf(term) > -1) {
        return data;
      }

      // If it doesn't contain the term, don't return anything
      return null;
    }

    this.defaults = {
      amdBase: './',
      amdLanguageBase: './i18n/',
      closeOnSelect: true,
      debug: false,
      dropdownAutoWidth: false,
      escapeMarkup: Utils.escapeMarkup,
      language: EnglishTranslation,
      matcher: matcher,
      minimumInputLength: 0,
      maximumInputLength: 0,
      maximumSelectionLength: 0,
      minimumResultsForSearch: 0,
      selectOnClose: false,
      sorter: function (data) {
        return data;
      },
      templateResult: function (result) {
        return result.text;
      },
      templateSelection: function (selection) {
        return selection.text;
      },
      theme: 'default',
      width: 'resolve'
    };
  };

  Defaults.prototype.set = function (key, value) {
    var camelKey = $.camelCase(key);

    var data = {};
    data[camelKey] = value;

    var convertedData = Utils._convertData(data);

    $.extend(this.defaults, convertedData);
  };

  var defaults = new Defaults();

  return defaults;
});

S2.define('select2/options',[
  'require',
  'jquery',
  './defaults',
  './utils'
], function (require, $, Defaults, Utils) {
  function Options (options, $element) {
    this.options = options;

    if ($element != null) {
      this.fromElement($element);
    }

    this.options = Defaults.apply(this.options);

    if ($element && $element.is('input')) {
      var InputCompat = require(this.get('amdBase') + 'compat/inputData');

      this.options.dataAdapter = Utils.Decorate(
        this.options.dataAdapter,
        InputCompat
      );
    }
  }

  Options.prototype.fromElement = function ($e) {
    var excludedData = ['select2'];

    if (this.options.multiple == null) {
      this.options.multiple = $e.prop('multiple');
    }

    if (this.options.disabled == null) {
      this.options.disabled = $e.prop('disabled');
    }

    if (this.options.language == null) {
      if ($e.prop('lang')) {
        this.options.language = $e.prop('lang').toLowerCase();
      } else if ($e.closest('[lang]').prop('lang')) {
        this.options.language = $e.closest('[lang]').prop('lang');
      }
    }

    if (this.options.dir == null) {
      if ($e.prop('dir')) {
        this.options.dir = $e.prop('dir');
      } else if ($e.closest('[dir]').prop('dir')) {
        this.options.dir = $e.closest('[dir]').prop('dir');
      } else {
        this.options.dir = 'ltr';
      }
    }

    $e.prop('disabled', this.options.disabled);
    $e.prop('multiple', this.options.multiple);

    if ($e.data('select2Tags')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-select2-tags` attribute has been changed to ' +
          'use the `data-data` and `data-tags="true"` attributes and will be ' +
          'removed in future versions of Select2.'
        );
      }

      $e.data('data', $e.data('select2Tags'));
      $e.data('tags', true);
    }

    if ($e.data('ajaxUrl')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-ajax-url` attribute has been changed to ' +
          '`data-ajax--url` and support for the old attribute will be removed' +
          ' in future versions of Select2.'
        );
      }

      $e.attr('ajax--url', $e.data('ajaxUrl'));
      $e.data('ajax--url', $e.data('ajaxUrl'));
    }

    var dataset = {};

    // Prefer the element's `dataset` attribute if it exists
    // jQuery 1.x does not correctly handle data attributes with multiple dashes
    if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
      dataset = $.extend(true, {}, $e[0].dataset, $e.data());
    } else {
      dataset = $e.data();
    }

    var data = $.extend(true, {}, dataset);

    data = Utils._convertData(data);

    for (var key in data) {
      if ($.inArray(key, excludedData) > -1) {
        continue;
      }

      if ($.isPlainObject(this.options[key])) {
        $.extend(this.options[key], data[key]);
      } else {
        this.options[key] = data[key];
      }
    }

    return this;
  };

  Options.prototype.get = function (key) {
    return this.options[key];
  };

  Options.prototype.set = function (key, val) {
    this.options[key] = val;
  };

  return Options;
});

S2.define('select2/core',[
  'jquery',
  './options',
  './utils',
  './keys'
], function ($, Options, Utils, KEYS) {
  var Select2 = function ($element, options) {
    if ($element.data('select2') != null) {
      $element.data('select2').destroy();
    }

    this.$element = $element;

    this.id = this._generateId($element);

    options = options || {};

    this.options = new Options(options, $element);

    Select2.__super__.constructor.call(this);

    // Set up the tabindex

    var tabindex = $element.attr('tabindex') || 0;
    $element.data('old-tabindex', tabindex);
    $element.attr('tabindex', '-1');

    // Set up containers and adapters

    var DataAdapter = this.options.get('dataAdapter');
    this.dataAdapter = new DataAdapter($element, this.options);

    var $container = this.render();

    this._placeContainer($container);

    var SelectionAdapter = this.options.get('selectionAdapter');
    this.selection = new SelectionAdapter($element, this.options);
    this.$selection = this.selection.render();

    this.selection.position(this.$selection, $container);

    var DropdownAdapter = this.options.get('dropdownAdapter');
    this.dropdown = new DropdownAdapter($element, this.options);
    this.$dropdown = this.dropdown.render();

    this.dropdown.position(this.$dropdown, $container);

    var ResultsAdapter = this.options.get('resultsAdapter');
    this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
    this.$results = this.results.render();

    this.results.position(this.$results, this.$dropdown);

    // Bind events

    var self = this;

    // Bind the container to all of the adapters
    this._bindAdapters();

    // Register any DOM event handlers
    this._registerDomEvents();

    // Register any internal event handlers
    this._registerDataEvents();
    this._registerSelectionEvents();
    this._registerDropdownEvents();
    this._registerResultsEvents();
    this._registerEvents();

    // Set the initial state
    this.dataAdapter.current(function (initialData) {
      self.trigger('selection:update', {
        data: initialData
      });
    });

    // Hide the original select
    $element.addClass('select2-hidden-accessible');
    $element.attr('aria-hidden', 'true');

    // Synchronize any monitored attributes
    this._syncAttributes();

    $element.data('select2', this);
  };

  Utils.Extend(Select2, Utils.Observable);

  Select2.prototype._generateId = function ($element) {
    var id = '';

    if ($element.attr('id') != null) {
      id = $element.attr('id');
    } else if ($element.attr('name') != null) {
      id = $element.attr('name') + '-' + Utils.generateChars(2);
    } else {
      id = Utils.generateChars(4);
    }

    id = id.replace(/(:|\.|\[|\]|,)/g, '');
    id = 'select2-' + id;

    return id;
  };

  Select2.prototype._placeContainer = function ($container) {
    $container.insertAfter(this.$element);

    var width = this._resolveWidth(this.$element, this.options.get('width'));

    if (width != null) {
      $container.css('width', width);
    }
  };

  Select2.prototype._resolveWidth = function ($element, method) {
    var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

    if (method == 'resolve') {
      var styleWidth = this._resolveWidth($element, 'style');

      if (styleWidth != null) {
        return styleWidth;
      }

      return this._resolveWidth($element, 'element');
    }

    if (method == 'element') {
      var elementWidth = $element.outerWidth(false);

      if (elementWidth <= 0) {
        return 'auto';
      }

      return elementWidth + 'px';
    }

    if (method == 'style') {
      var style = $element.attr('style');

      if (typeof(style) !== 'string') {
        return null;
      }

      var attrs = style.split(';');

      for (var i = 0, l = attrs.length; i < l; i = i + 1) {
        var attr = attrs[i].replace(/\s/g, '');
        var matches = attr.match(WIDTH);

        if (matches !== null && matches.length >= 1) {
          return matches[1];
        }
      }

      return null;
    }

    return method;
  };

  Select2.prototype._bindAdapters = function () {
    this.dataAdapter.bind(this, this.$container);
    this.selection.bind(this, this.$container);

    this.dropdown.bind(this, this.$container);
    this.results.bind(this, this.$container);
  };

  Select2.prototype._registerDomEvents = function () {
    var self = this;

    this.$element.on('change.select2', function () {
      self.dataAdapter.current(function (data) {
        self.trigger('selection:update', {
          data: data
        });
      });
    });

    this.$element.on('focus.select2', function (evt) {
      self.trigger('focus', evt);
    });

    this._syncA = Utils.bind(this._syncAttributes, this);
    this._syncS = Utils.bind(this._syncSubtree, this);

    if (this.$element[0].attachEvent) {
      this.$element[0].attachEvent('onpropertychange', this._syncA);
    }

    var observer = window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver
    ;

    if (observer != null) {
      this._observer = new observer(function (mutations) {
        $.each(mutations, self._syncA);
        $.each(mutations, self._syncS);
      });
      this._observer.observe(this.$element[0], {
        attributes: true,
        childList: true,
        subtree: false
      });
    } else if (this.$element[0].addEventListener) {
      this.$element[0].addEventListener(
        'DOMAttrModified',
        self._syncA,
        false
      );
      this.$element[0].addEventListener(
        'DOMNodeInserted',
        self._syncS,
        false
      );
      this.$element[0].addEventListener(
        'DOMNodeRemoved',
        self._syncS,
        false
      );
    }
  };

  Select2.prototype._registerDataEvents = function () {
    var self = this;

    this.dataAdapter.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerSelectionEvents = function () {
    var self = this;
    var nonRelayEvents = ['toggle', 'focus'];

    this.selection.on('toggle', function () {
      self.toggleDropdown();
    });

    this.selection.on('focus', function (params) {
      self.focus(params);
    });

    this.selection.on('*', function (name, params) {
      if ($.inArray(name, nonRelayEvents) !== -1) {
        return;
      }

      self.trigger(name, params);
    });
  };

  Select2.prototype._registerDropdownEvents = function () {
    var self = this;

    this.dropdown.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerResultsEvents = function () {
    var self = this;

    this.results.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerEvents = function () {
    var self = this;

    this.on('open', function () {
      self.$container.addClass('select2-container--open');
    });

    this.on('close', function () {
      self.$container.removeClass('select2-container--open');
    });

    this.on('enable', function () {
      self.$container.removeClass('select2-container--disabled');
    });

    this.on('disable', function () {
      self.$container.addClass('select2-container--disabled');
    });

    this.on('blur', function () {
      self.$container.removeClass('select2-container--focus');
    });

    this.on('query', function (params) {
      if (!self.isOpen()) {
        self.trigger('open', {});
      }

      this.dataAdapter.query(params, function (data) {
        self.trigger('results:all', {
          data: data,
          query: params
        });
      });
    });

    this.on('query:append', function (params) {
      this.dataAdapter.query(params, function (data) {
        self.trigger('results:append', {
          data: data,
          query: params
        });
      });
    });

    this.on('keypress', function (evt) {
      var key = evt.which;

      if (self.isOpen()) {
        if (key === KEYS.ESC || key === KEYS.TAB ||
            (key === KEYS.UP && evt.altKey)) {
          self.close();

          evt.preventDefault();
        } else if (key === KEYS.ENTER) {
          self.trigger('results:select', {});

          evt.preventDefault();
        } else if ((key === KEYS.SPACE && evt.ctrlKey)) {
          self.trigger('results:toggle', {});

          evt.preventDefault();
        } else if (key === KEYS.UP) {
          self.trigger('results:previous', {});

          evt.preventDefault();
        } else if (key === KEYS.DOWN) {
          self.trigger('results:next', {});

          evt.preventDefault();
        }
      } else {
        if (key === KEYS.ENTER || key === KEYS.SPACE ||
            (key === KEYS.DOWN && evt.altKey)) {
          self.open();

          evt.preventDefault();
        }
      }
    });
  };

  Select2.prototype._syncAttributes = function () {
    this.options.set('disabled', this.$element.prop('disabled'));

    if (this.options.get('disabled')) {
      if (this.isOpen()) {
        this.close();
      }

      this.trigger('disable', {});
    } else {
      this.trigger('enable', {});
    }
  };

  Select2.prototype._syncSubtree = function (evt, mutations) {
    var changed = false;
    var self = this;

    // Ignore any mutation events raised for elements that aren't options or
    // optgroups. This handles the case when the select element is destroyed
    if (
      evt && evt.target && (
        evt.target.nodeName !== 'OPTION' && evt.target.nodeName !== 'OPTGROUP'
      )
    ) {
      return;
    }

    if (!mutations) {
      // If mutation events aren't supported, then we can only assume that the
      // change affected the selections
      changed = true;
    } else if (mutations.addedNodes && mutations.addedNodes.length > 0) {
      for (var n = 0; n < mutations.addedNodes.length; n++) {
        var node = mutations.addedNodes[n];

        if (node.selected) {
          changed = true;
        }
      }
    } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
      changed = true;
    }

    // Only re-pull the data if we think there is a change
    if (changed) {
      this.dataAdapter.current(function (currentData) {
        self.trigger('selection:update', {
          data: currentData
        });
      });
    }
  };

  /**
   * Override the trigger method to automatically trigger pre-events when
   * there are events that can be prevented.
   */
  Select2.prototype.trigger = function (name, args) {
    var actualTrigger = Select2.__super__.trigger;
    var preTriggerMap = {
      'open': 'opening',
      'close': 'closing',
      'select': 'selecting',
      'unselect': 'unselecting'
    };

    if (args === undefined) {
      args = {};
    }

    if (name in preTriggerMap) {
      var preTriggerName = preTriggerMap[name];
      var preTriggerArgs = {
        prevented: false,
        name: name,
        args: args
      };

      actualTrigger.call(this, preTriggerName, preTriggerArgs);

      if (preTriggerArgs.prevented) {
        args.prevented = true;

        return;
      }
    }

    actualTrigger.call(this, name, args);
  };

  Select2.prototype.toggleDropdown = function () {
    if (this.options.get('disabled')) {
      return;
    }

    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  };

  Select2.prototype.open = function () {
    if (this.isOpen()) {
      return;
    }

    this.trigger('query', {});
  };

  Select2.prototype.close = function () {
    if (!this.isOpen()) {
      return;
    }

    this.trigger('close', {});
  };

  Select2.prototype.isOpen = function () {
    return this.$container.hasClass('select2-container--open');
  };

  Select2.prototype.hasFocus = function () {
    return this.$container.hasClass('select2-container--focus');
  };

  Select2.prototype.focus = function (data) {
    // No need to re-trigger focus events if we are already focused
    if (this.hasFocus()) {
      return;
    }

    this.$container.addClass('select2-container--focus');
    this.trigger('focus', {});
  };

  Select2.prototype.enable = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("enable")` method has been deprecated and will' +
        ' be removed in later Select2 versions. Use $element.prop("disabled")' +
        ' instead.'
      );
    }

    if (args == null || args.length === 0) {
      args = [true];
    }

    var disabled = !args[0];

    this.$element.prop('disabled', disabled);
  };

  Select2.prototype.data = function () {
    if (this.options.get('debug') &&
        arguments.length > 0 && window.console && console.warn) {
      console.warn(
        'Select2: Data can no longer be set using `select2("data")`. You ' +
        'should consider setting the value instead using `$element.val()`.'
      );
    }

    var data = [];

    this.dataAdapter.current(function (currentData) {
      data = currentData;
    });

    return data;
  };

  Select2.prototype.val = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("val")` method has been deprecated and will be' +
        ' removed in later Select2 versions. Use $element.val() instead.'
      );
    }

    if (args == null || args.length === 0) {
      return this.$element.val();
    }

    var newVal = args[0];

    if ($.isArray(newVal)) {
      newVal = $.map(newVal, function (obj) {
        return obj.toString();
      });
    }

    this.$element.val(newVal).trigger('change');
  };

  Select2.prototype.destroy = function () {
    this.$container.remove();

    if (this.$element[0].detachEvent) {
      this.$element[0].detachEvent('onpropertychange', this._syncA);
    }

    if (this._observer != null) {
      this._observer.disconnect();
      this._observer = null;
    } else if (this.$element[0].removeEventListener) {
      this.$element[0]
        .removeEventListener('DOMAttrModified', this._syncA, false);
      this.$element[0]
        .removeEventListener('DOMNodeInserted', this._syncS, false);
      this.$element[0]
        .removeEventListener('DOMNodeRemoved', this._syncS, false);
    }

    this._syncA = null;
    this._syncS = null;

    this.$element.off('.select2');
    this.$element.attr('tabindex', this.$element.data('old-tabindex'));

    this.$element.removeClass('select2-hidden-accessible');
    this.$element.attr('aria-hidden', 'false');
    this.$element.removeData('select2');

    this.dataAdapter.destroy();
    this.selection.destroy();
    this.dropdown.destroy();
    this.results.destroy();

    this.dataAdapter = null;
    this.selection = null;
    this.dropdown = null;
    this.results = null;
  };

  Select2.prototype.render = function () {
    var $container = $(
      '<span class="select2 select2-container">' +
        '<span class="selection"></span>' +
        '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
      '</span>'
    );

    $container.attr('dir', this.options.get('dir'));

    this.$container = $container;

    this.$container.addClass('select2-container--' + this.options.get('theme'));

    $container.data('element', this.$element);

    return $container;
  };

  return Select2;
});

S2.define('jquery-mousewheel',[
  'jquery'
], function ($) {
  // Used to shim jQuery.mousewheel for non-full builds.
  return $;
});

S2.define('jquery.select2',[
  'jquery',
  'jquery-mousewheel',

  './select2/core',
  './select2/defaults'
], function ($, _, Select2, Defaults) {
  if ($.fn.select2 == null) {
    // All methods that should return the element
    var thisMethods = ['open', 'close', 'destroy'];

    $.fn.select2 = function (options) {
      options = options || {};

      if (typeof options === 'object') {
        this.each(function () {
          var instanceOptions = $.extend(true, {}, options);

          var instance = new Select2($(this), instanceOptions);
        });

        return this;
      } else if (typeof options === 'string') {
        var ret;
        var args = Array.prototype.slice.call(arguments, 1);

        this.each(function () {
          var instance = $(this).data('select2');

          if (instance == null && window.console && console.error) {
            console.error(
              'The select2(\'' + options + '\') method was called on an ' +
              'element that is not using Select2.'
            );
          }

          ret = instance[options].apply(instance, args);
        });

        // Check if we should be returning `this`
        if ($.inArray(options, thisMethods) > -1) {
          return this;
        }

        return ret;
      } else {
        throw new Error('Invalid arguments for Select2: ' + options);
      }
    };
  }

  if ($.fn.select2.defaults == null) {
    $.fn.select2.defaults = Defaults;
  }

  return Select2;
});

  // Return the AMD loader configuration so it can be used outside of this file
  return {
    define: S2.define,
    require: S2.require
  };
}());

  // Autoload the jQuery bindings
  // We know that all of the modules exist above this, so we're safe
  var select2 = S2.require('jquery.select2');

  // Hold the AMD module references on the jQuery function that was just loaded
  // This allows Select2 to use the internal loader outside of this file, such
  // as in the language files.
  jQuery.fn.select2.amd = S2;

  // Return the Select2 instance for anyone who is importing it.
  return select2;
}));


/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: lib/jquery/moment.min.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//! moment.js
//! version : 2.9.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a){function b(a,b,c){switch(arguments.length){case 2:return null!=a?a:b;case 3:return null!=a?a:null!=b?b:c;default:throw new Error("Implement me")}}function c(a,b){return Bb.call(a,b)}function d(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function e(a){vb.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)}function f(a,b){var c=!0;return o(function(){return c&&(e(a),c=!1),b.apply(this,arguments)},b)}function g(a,b){sc[a]||(e(b),sc[a]=!0)}function h(a,b){return function(c){return r(a.call(this,c),b)}}function i(a,b){return function(c){return this.localeData().ordinal(a.call(this,c),b)}}function j(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");return 0>b-f?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)}function k(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&12>b&&(b+=12),d||12!==b||(b=0),b):b}function l(){}function m(a,b){b!==!1&&H(a),p(this,a),this._d=new Date(+a._d),uc===!1&&(uc=!0,vb.updateOffset(this),uc=!1)}function n(a){var b=A(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=vb.localeData(),this._bubble()}function o(a,b){for(var d in b)c(b,d)&&(a[d]=b[d]);return c(b,"toString")&&(a.toString=b.toString),c(b,"valueOf")&&(a.valueOf=b.valueOf),a}function p(a,b){var c,d,e;if("undefined"!=typeof b._isAMomentObject&&(a._isAMomentObject=b._isAMomentObject),"undefined"!=typeof b._i&&(a._i=b._i),"undefined"!=typeof b._f&&(a._f=b._f),"undefined"!=typeof b._l&&(a._l=b._l),"undefined"!=typeof b._strict&&(a._strict=b._strict),"undefined"!=typeof b._tzm&&(a._tzm=b._tzm),"undefined"!=typeof b._isUTC&&(a._isUTC=b._isUTC),"undefined"!=typeof b._offset&&(a._offset=b._offset),"undefined"!=typeof b._pf&&(a._pf=b._pf),"undefined"!=typeof b._locale&&(a._locale=b._locale),Kb.length>0)for(c in Kb)d=Kb[c],e=b[d],"undefined"!=typeof e&&(a[d]=e);return a}function q(a){return 0>a?Math.ceil(a):Math.floor(a)}function r(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function s(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function t(a,b){var c;return b=M(b,a),a.isBefore(b)?c=s(a,b):(c=s(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c}function u(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(g(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=vb.duration(c,d),v(this,e,a),this}}function v(a,b,c,d){var e=b._milliseconds,f=b._days,g=b._months;d=null==d?!0:d,e&&a._d.setTime(+a._d+e*c),f&&pb(a,"Date",ob(a,"Date")+f*c),g&&nb(a,ob(a,"Month")+g*c),d&&vb.updateOffset(a,f||g)}function w(a){return"[object Array]"===Object.prototype.toString.call(a)}function x(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function y(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&C(a[d])!==C(b[d]))&&g++;return g+f}function z(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=lc[a]||mc[b]||b}return a}function A(a){var b,d,e={};for(d in a)c(a,d)&&(b=z(d),b&&(e[b]=a[d]));return e}function B(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}vb[b]=function(e,f){var g,h,i=vb._locale[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=vb().utc().set(d,a);return i.call(vb._locale,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function C(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function D(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function E(a,b,c){return jb(vb([a,11,31+b-c]),b,c).week}function F(a){return G(a)?366:365}function G(a){return a%4===0&&a%100!==0||a%400===0}function H(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[Db]<0||a._a[Db]>11?Db:a._a[Eb]<1||a._a[Eb]>D(a._a[Cb],a._a[Db])?Eb:a._a[Fb]<0||a._a[Fb]>24||24===a._a[Fb]&&(0!==a._a[Gb]||0!==a._a[Hb]||0!==a._a[Ib])?Fb:a._a[Gb]<0||a._a[Gb]>59?Gb:a._a[Hb]<0||a._a[Hb]>59?Hb:a._a[Ib]<0||a._a[Ib]>999?Ib:-1,a._pf._overflowDayOfYear&&(Cb>b||b>Eb)&&(b=Eb),a._pf.overflow=b)}function I(b){return null==b._isValid&&(b._isValid=!isNaN(b._d.getTime())&&b._pf.overflow<0&&!b._pf.empty&&!b._pf.invalidMonth&&!b._pf.nullInput&&!b._pf.invalidFormat&&!b._pf.userInvalidated,b._strict&&(b._isValid=b._isValid&&0===b._pf.charsLeftOver&&0===b._pf.unusedTokens.length&&b._pf.bigHour===a)),b._isValid}function J(a){return a?a.toLowerCase().replace("_","-"):a}function K(a){for(var b,c,d,e,f=0;f<a.length;){for(e=J(a[f]).split("-"),b=e.length,c=J(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=L(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&y(e,c,!0)>=b-1)break;b--}f++}return null}function L(a){var b=null;if(!Jb[a]&&Lb)try{b=vb.locale(),require("./locale/"+a),vb.locale(b)}catch(c){}return Jb[a]}function M(a,b){var c,d;return b._isUTC?(c=b.clone(),d=(vb.isMoment(a)||x(a)?+a:+vb(a))-+c,c._d.setTime(+c._d+d),vb.updateOffset(c,!1),c):vb(a).local()}function N(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function O(a){var b,c,d=a.match(Pb);for(b=0,c=d.length;c>b;b++)d[b]=rc[d[b]]?rc[d[b]]:N(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function P(a,b){return a.isValid()?(b=Q(b,a.localeData()),nc[b]||(nc[b]=O(b)),nc[b](a)):a.localeData().invalidDate()}function Q(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Qb.lastIndex=0;d>=0&&Qb.test(a);)a=a.replace(Qb,c),Qb.lastIndex=0,d-=1;return a}function R(a,b){var c,d=b._strict;switch(a){case"Q":return _b;case"DDDD":return bc;case"YYYY":case"GGGG":case"gggg":return d?cc:Tb;case"Y":case"G":case"g":return ec;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return d?dc:Ub;case"S":if(d)return _b;case"SS":if(d)return ac;case"SSS":if(d)return bc;case"DDD":return Sb;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Wb;case"a":case"A":return b._locale._meridiemParse;case"x":return Zb;case"X":return $b;case"Z":case"ZZ":return Xb;case"T":return Yb;case"SSSS":return Vb;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return d?ac:Rb;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Rb;case"Do":return d?b._locale._ordinalParse:b._locale._ordinalParseLenient;default:return c=new RegExp($(Z(a.replace("\\","")),"i"))}}function S(a){a=a||"";var b=a.match(Xb)||[],c=b[b.length-1]||[],d=(c+"").match(jc)||["-",0,0],e=+(60*d[1])+C(d[2]);return"+"===d[0]?e:-e}function T(a,b,c){var d,e=c._a;switch(a){case"Q":null!=b&&(e[Db]=3*(C(b)-1));break;case"M":case"MM":null!=b&&(e[Db]=C(b)-1);break;case"MMM":case"MMMM":d=c._locale.monthsParse(b,a,c._strict),null!=d?e[Db]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[Eb]=C(b));break;case"Do":null!=b&&(e[Eb]=C(parseInt(b.match(/\d{1,2}/)[0],10)));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=C(b));break;case"YY":e[Cb]=vb.parseTwoDigitYear(b);break;case"YYYY":case"YYYYY":case"YYYYYY":e[Cb]=C(b);break;case"a":case"A":c._meridiem=b;break;case"h":case"hh":c._pf.bigHour=!0;case"H":case"HH":e[Fb]=C(b);break;case"m":case"mm":e[Gb]=C(b);break;case"s":case"ss":e[Hb]=C(b);break;case"S":case"SS":case"SSS":case"SSSS":e[Ib]=C(1e3*("0."+b));break;case"x":c._d=new Date(C(b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=S(b);break;case"dd":case"ddd":case"dddd":d=c._locale.weekdaysParse(b),null!=d?(c._w=c._w||{},c._w.d=d):c._pf.invalidWeekday=b;break;case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":a=a.substr(0,1);case"gggg":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=C(b));break;case"gg":case"GG":c._w=c._w||{},c._w[a]=vb.parseTwoDigitYear(b)}}function U(a){var c,d,e,f,g,h,i;c=a._w,null!=c.GG||null!=c.W||null!=c.E?(g=1,h=4,d=b(c.GG,a._a[Cb],jb(vb(),1,4).year),e=b(c.W,1),f=b(c.E,1)):(g=a._locale._week.dow,h=a._locale._week.doy,d=b(c.gg,a._a[Cb],jb(vb(),g,h).year),e=b(c.w,1),null!=c.d?(f=c.d,g>f&&++e):f=null!=c.e?c.e+g:g),i=kb(d,e,f,h,g),a._a[Cb]=i.year,a._dayOfYear=i.dayOfYear}function V(a){var c,d,e,f,g=[];if(!a._d){for(e=X(a),a._w&&null==a._a[Eb]&&null==a._a[Db]&&U(a),a._dayOfYear&&(f=b(a._a[Cb],e[Cb]),a._dayOfYear>F(f)&&(a._pf._overflowDayOfYear=!0),d=fb(f,0,a._dayOfYear),a._a[Db]=d.getUTCMonth(),a._a[Eb]=d.getUTCDate()),c=0;3>c&&null==a._a[c];++c)a._a[c]=g[c]=e[c];for(;7>c;c++)a._a[c]=g[c]=null==a._a[c]?2===c?1:0:a._a[c];24===a._a[Fb]&&0===a._a[Gb]&&0===a._a[Hb]&&0===a._a[Ib]&&(a._nextDay=!0,a._a[Fb]=0),a._d=(a._useUTC?fb:eb).apply(null,g),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[Fb]=24)}}function W(a){var b;a._d||(b=A(a._i),a._a=[b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],V(a))}function X(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function Y(b){if(b._f===vb.ISO_8601)return void ab(b);b._a=[],b._pf.empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=Q(b._f,b._locale).match(Pb)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(R(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&b._pf.unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),j+=d.length),rc[f]?(d?b._pf.empty=!1:b._pf.unusedTokens.push(f),T(f,d,b)):b._strict&&!d&&b._pf.unusedTokens.push(f);b._pf.charsLeftOver=i-j,h.length>0&&b._pf.unusedInput.push(h),b._pf.bigHour===!0&&b._a[Fb]<=12&&(b._pf.bigHour=a),b._a[Fb]=k(b._locale,b._a[Fb],b._meridiem),V(b),H(b)}function Z(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function $(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function _(a){var b,c,e,f,g;if(0===a._f.length)return a._pf.invalidFormat=!0,void(a._d=new Date(0/0));for(f=0;f<a._f.length;f++)g=0,b=p({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._pf=d(),b._f=a._f[f],Y(b),I(b)&&(g+=b._pf.charsLeftOver,g+=10*b._pf.unusedTokens.length,b._pf.score=g,(null==e||e>g)&&(e=g,c=b));o(a,c||b)}function ab(a){var b,c,d=a._i,e=fc.exec(d);if(e){for(a._pf.iso=!0,b=0,c=hc.length;c>b;b++)if(hc[b][1].exec(d)){a._f=hc[b][0]+(e[6]||" ");break}for(b=0,c=ic.length;c>b;b++)if(ic[b][1].exec(d)){a._f+=ic[b][0];break}d.match(Xb)&&(a._f+="Z"),Y(a)}else a._isValid=!1}function bb(a){ab(a),a._isValid===!1&&(delete a._isValid,vb.createFromInputFallback(a))}function cb(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function db(b){var c,d=b._i;d===a?b._d=new Date:x(d)?b._d=new Date(+d):null!==(c=Mb.exec(d))?b._d=new Date(+c[1]):"string"==typeof d?bb(b):w(d)?(b._a=cb(d.slice(0),function(a){return parseInt(a,10)}),V(b)):"object"==typeof d?W(b):"number"==typeof d?b._d=new Date(d):vb.createFromInputFallback(b)}function eb(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function fb(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function gb(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function hb(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function ib(a,b,c){var d=vb.duration(a).abs(),e=Ab(d.as("s")),f=Ab(d.as("m")),g=Ab(d.as("h")),h=Ab(d.as("d")),i=Ab(d.as("M")),j=Ab(d.as("y")),k=e<oc.s&&["s",e]||1===f&&["m"]||f<oc.m&&["mm",f]||1===g&&["h"]||g<oc.h&&["hh",g]||1===h&&["d"]||h<oc.d&&["dd",h]||1===i&&["M"]||i<oc.M&&["MM",i]||1===j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,hb.apply({},k)}function jb(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=vb(a).add(f,"d"),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function kb(a,b,c,d,e){var f,g,h=fb(a,0,1).getUTCDay();return h=0===h?7:h,c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:F(a-1)+g}}function lb(b){var c,d=b._i,e=b._f;return b._locale=b._locale||vb.localeData(b._l),null===d||e===a&&""===d?vb.invalid({nullInput:!0}):("string"==typeof d&&(b._i=d=b._locale.preparse(d)),vb.isMoment(d)?new m(d,!0):(e?w(e)?_(b):Y(b):db(b),c=new m(b),c._nextDay&&(c.add(1,"d"),c._nextDay=a),c))}function mb(a,b){var c,d;if(1===b.length&&w(b[0])&&(b=b[0]),!b.length)return vb();for(c=b[0],d=1;d<b.length;++d)b[d][a](c)&&(c=b[d]);return c}function nb(a,b){var c;return"string"==typeof b&&(b=a.localeData().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),D(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function ob(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function pb(a,b,c){return"Month"===b?nb(a,c):a._d["set"+(a._isUTC?"UTC":"")+b](c)}function qb(a,b){return function(c){return null!=c?(pb(this,a,c),vb.updateOffset(this,b),this):ob(this,a)}}function rb(a){return 400*a/146097}function sb(a){return 146097*a/400}function tb(a){vb.duration.fn[a]=function(){return this._data[a]}}function ub(a){"undefined"==typeof ender&&(wb=zb.moment,zb.moment=a?f("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",vb):vb)}for(var vb,wb,xb,yb="2.9.0",zb="undefined"==typeof global||"undefined"!=typeof window&&window!==global.window?this:global,Ab=Math.round,Bb=Object.prototype.hasOwnProperty,Cb=0,Db=1,Eb=2,Fb=3,Gb=4,Hb=5,Ib=6,Jb={},Kb=[],Lb="undefined"!=typeof module&&module&&module.exports,Mb=/^\/?Date\((\-?\d+)/i,Nb=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Ob=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,Pb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,Qb=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Rb=/\d\d?/,Sb=/\d{1,3}/,Tb=/\d{1,4}/,Ub=/[+\-]?\d{1,6}/,Vb=/\d+/,Wb=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Xb=/Z|[\+\-]\d\d:?\d\d/gi,Yb=/T/i,Zb=/[\+\-]?\d+/,$b=/[\+\-]?\d+(\.\d{1,3})?/,_b=/\d/,ac=/\d\d/,bc=/\d{3}/,cc=/\d{4}/,dc=/[+-]?\d{6}/,ec=/[+-]?\d+/,fc=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,gc="YYYY-MM-DDTHH:mm:ssZ",hc=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],ic=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],jc=/([\+\-]|\d\d)/gi,kc=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),lc={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},mc={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},nc={},oc={s:45,m:45,h:22,d:26,M:11},pc="DDD w W M D d".split(" "),qc="M D H h m s w W".split(" "),rc={M:function(){return this.month()+1},MMM:function(a){return this.localeData().monthsShort(this,a)},MMMM:function(a){return this.localeData().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.localeData().weekdaysMin(this,a)},ddd:function(a){return this.localeData().weekdaysShort(this,a)},dddd:function(a){return this.localeData().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return r(this.year()%100,2)},YYYY:function(){return r(this.year(),4)},YYYYY:function(){return r(this.year(),5)},YYYYYY:function(){var a=this.year(),b=a>=0?"+":"-";return b+r(Math.abs(a),6)},gg:function(){return r(this.weekYear()%100,2)},gggg:function(){return r(this.weekYear(),4)},ggggg:function(){return r(this.weekYear(),5)},GG:function(){return r(this.isoWeekYear()%100,2)},GGGG:function(){return r(this.isoWeekYear(),4)},GGGGG:function(){return r(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return C(this.milliseconds()/100)},SS:function(){return r(C(this.milliseconds()/10),2)},SSS:function(){return r(this.milliseconds(),3)},SSSS:function(){return r(this.milliseconds(),3)},Z:function(){var a=this.utcOffset(),b="+";return 0>a&&(a=-a,b="-"),b+r(C(a/60),2)+":"+r(C(a)%60,2)},ZZ:function(){var a=this.utcOffset(),b="+";return 0>a&&(a=-a,b="-"),b+r(C(a/60),2)+r(C(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},x:function(){return this.valueOf()},X:function(){return this.unix()},Q:function(){return this.quarter()}},sc={},tc=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"],uc=!1;pc.length;)xb=pc.pop(),rc[xb+"o"]=i(rc[xb],xb);for(;qc.length;)xb=qc.pop(),rc[xb+xb]=h(rc[xb],2);rc.DDDD=h(rc.DDD,3),o(l.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a,b,c){var d,e,f;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){if(e=vb.utc([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=vb([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b,c){var d=this._calendar[a];return"function"==typeof d?d.apply(b,[c]):d},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",_ordinalParse:/\d{1,2}/,preparse:function(a){return a},postformat:function(a){return a},week:function(a){return jb(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},firstDayOfWeek:function(){return this._week.dow},firstDayOfYear:function(){return this._week.doy},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),vb=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._i=b,g._f=c,g._l=e,g._strict=f,g._isUTC=!1,g._pf=d(),lb(g)},vb.suppressDeprecationWarnings=!1,vb.createFromInputFallback=f("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),vb.min=function(){var a=[].slice.call(arguments,0);return mb("isBefore",a)},vb.max=function(){var a=[].slice.call(arguments,0);return mb("isAfter",a)},vb.utc=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._useUTC=!0,g._isUTC=!0,g._l=e,g._i=b,g._f=c,g._strict=f,g._pf=d(),lb(g).utc()},vb.unix=function(a){return vb(1e3*a)},vb.duration=function(a,b){var d,e,f,g,h=a,i=null;return vb.isDuration(a)?h={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(h={},b?h[b]=a:h.milliseconds=a):(i=Nb.exec(a))?(d="-"===i[1]?-1:1,h={y:0,d:C(i[Eb])*d,h:C(i[Fb])*d,m:C(i[Gb])*d,s:C(i[Hb])*d,ms:C(i[Ib])*d}):(i=Ob.exec(a))?(d="-"===i[1]?-1:1,f=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*d},h={y:f(i[2]),M:f(i[3]),d:f(i[4]),h:f(i[5]),m:f(i[6]),s:f(i[7]),w:f(i[8])}):null==h?h={}:"object"==typeof h&&("from"in h||"to"in h)&&(g=t(vb(h.from),vb(h.to)),h={},h.ms=g.milliseconds,h.M=g.months),e=new n(h),vb.isDuration(a)&&c(a,"_locale")&&(e._locale=a._locale),e},vb.version=yb,vb.defaultFormat=gc,vb.ISO_8601=function(){},vb.momentProperties=Kb,vb.updateOffset=function(){},vb.relativeTimeThreshold=function(b,c){return oc[b]===a?!1:c===a?oc[b]:(oc[b]=c,!0)},vb.lang=f("moment.lang is deprecated. Use moment.locale instead.",function(a,b){return vb.locale(a,b)}),vb.locale=function(a,b){var c;return a&&(c="undefined"!=typeof b?vb.defineLocale(a,b):vb.localeData(a),c&&(vb.duration._locale=vb._locale=c)),vb._locale._abbr},vb.defineLocale=function(a,b){return null!==b?(b.abbr=a,Jb[a]||(Jb[a]=new l),Jb[a].set(b),vb.locale(a),Jb[a]):(delete Jb[a],null)},vb.langData=f("moment.langData is deprecated. Use moment.localeData instead.",function(a){return vb.localeData(a)}),vb.localeData=function(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return vb._locale;if(!w(a)){if(b=L(a))return b;a=[a]}return K(a)},vb.isMoment=function(a){return a instanceof m||null!=a&&c(a,"_isAMomentObject")},vb.isDuration=function(a){return a instanceof n};for(xb=tc.length-1;xb>=0;--xb)B(tc[xb]);vb.normalizeUnits=function(a){return z(a)},vb.invalid=function(a){var b=vb.utc(0/0);return null!=a?o(b._pf,a):b._pf.userInvalidated=!0,b},vb.parseZone=function(){return vb.apply(null,arguments).parseZone()},vb.parseTwoDigitYear=function(a){return C(a)+(C(a)>68?1900:2e3)},vb.isDate=x,o(vb.fn=m.prototype,{clone:function(){return vb(this)},valueOf:function(){return+this._d-6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a=vb(this).utc();return 0<a.year()&&a.year()<=9999?"function"==typeof Date.prototype.toISOString?this.toDate().toISOString():P(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):P(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return I(this)},isDSTShifted:function(){return this._a?this.isValid()&&y(this._a,(this._isUTC?vb.utc(this._a):vb(this._a)).toArray())>0:!1},parsingFlags:function(){return o({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(a){return this.utcOffset(0,a)},local:function(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(this._dateUtcOffset(),"m")),this},format:function(a){var b=P(this,a||vb.defaultFormat);return this.localeData().postformat(b)},add:u(1,"add"),subtract:u(-1,"subtract"),diff:function(a,b,c){var d,e,f=M(a,this),g=6e4*(f.utcOffset()-this.utcOffset());return b=z(b),"year"===b||"month"===b||"quarter"===b?(e=j(this,f),"quarter"===b?e/=3:"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:q(e)},from:function(a,b){return vb.duration({to:this,from:a}).locale(this.locale()).humanize(!b)},fromNow:function(a){return this.from(vb(),a)},calendar:function(a){var b=a||vb(),c=M(b,this).startOf("day"),d=this.diff(c,"days",!0),e=-6>d?"sameElse":-1>d?"lastWeek":0>d?"lastDay":1>d?"sameDay":2>d?"nextDay":7>d?"nextWeek":"sameElse";return this.format(this.localeData().calendar(e,this,vb(b)))},isLeapYear:function(){return G(this.year())},isDST:function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=gb(a,this.localeData()),this.add(a-b,"d")):b},month:qb("Month",!0),startOf:function(a){switch(a=z(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(b){return b=z(b),b===a||"millisecond"===b?this:this.startOf(b).add(1,"isoWeek"===b?"week":b).subtract(1,"ms")},isAfter:function(a,b){var c;return b=z("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=vb.isMoment(a)?a:vb(a),+this>+a):(c=vb.isMoment(a)?+a:+vb(a),c<+this.clone().startOf(b))},isBefore:function(a,b){var c;return b=z("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=vb.isMoment(a)?a:vb(a),+a>+this):(c=vb.isMoment(a)?+a:+vb(a),+this.clone().endOf(b)<c)},isBetween:function(a,b,c){return this.isAfter(a,c)&&this.isBefore(b,c)},isSame:function(a,b){var c;return b=z(b||"millisecond"),"millisecond"===b?(a=vb.isMoment(a)?a:vb(a),+this===+a):(c=+vb(a),+this.clone().startOf(b)<=c&&c<=+this.clone().endOf(b))},min:f("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(a){return a=vb.apply(null,arguments),this>a?this:a}),max:f("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(a){return a=vb.apply(null,arguments),a>this?this:a}),zone:f("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",function(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}),utcOffset:function(a,b){var c,d=this._offset||0;return null!=a?("string"==typeof a&&(a=S(a)),Math.abs(a)<16&&(a=60*a),!this._isUTC&&b&&(c=this._dateUtcOffset()),this._offset=a,this._isUTC=!0,null!=c&&this.add(c,"m"),d!==a&&(!b||this._changeInProgress?v(this,vb.duration(a-d,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,vb.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?d:this._dateUtcOffset()},isLocal:function(){return!this._isUTC},isUtcOffset:function(){return this._isUTC},isUtc:function(){return this._isUTC&&0===this._offset},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(S(this._i)),this},hasAlignedHourOffset:function(a){return a=a?vb(a).utcOffset():0,(this.utcOffset()-a)%60===0},daysInMonth:function(){return D(this.year(),this.month())},dayOfYear:function(a){var b=Ab((vb(this).startOf("day")-vb(this).startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")},quarter:function(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)},weekYear:function(a){var b=jb(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==a?b:this.add(a-b,"y")},isoWeekYear:function(a){var b=jb(this,1,4).year;return null==a?b:this.add(a-b,"y")},week:function(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")},isoWeek:function(a){var b=jb(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")},weekday:function(a){var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},isoWeeksInYear:function(){return E(this.year(),1,4)},weeksInYear:function(){var a=this.localeData()._week;return E(this.year(),a.dow,a.doy)},get:function(a){return a=z(a),this[a]()},set:function(a,b){var c;if("object"==typeof a)for(c in a)this.set(c,a[c]);else a=z(a),"function"==typeof this[a]&&this[a](b);return this},locale:function(b){var c;return b===a?this._locale._abbr:(c=vb.localeData(b),null!=c&&(this._locale=c),this)},lang:f("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(b){return b===a?this.localeData():this.locale(b)}),localeData:function(){return this._locale},_dateUtcOffset:function(){return 15*-Math.round(this._d.getTimezoneOffset()/15)}}),vb.fn.millisecond=vb.fn.milliseconds=qb("Milliseconds",!1),vb.fn.second=vb.fn.seconds=qb("Seconds",!1),vb.fn.minute=vb.fn.minutes=qb("Minutes",!1),vb.fn.hour=vb.fn.hours=qb("Hours",!0),vb.fn.date=qb("Date",!0),vb.fn.dates=f("dates accessor is deprecated. Use date instead.",qb("Date",!0)),vb.fn.year=qb("FullYear",!0),vb.fn.years=f("years accessor is deprecated. Use year instead.",qb("FullYear",!0)),vb.fn.days=vb.fn.day,vb.fn.months=vb.fn.month,vb.fn.weeks=vb.fn.week,vb.fn.isoWeeks=vb.fn.isoWeek,vb.fn.quarters=vb.fn.quarter,vb.fn.toJSON=vb.fn.toISOString,vb.fn.isUTC=vb.fn.isUtc,o(vb.duration.fn=n.prototype,{_bubble:function(){var a,b,c,d=this._milliseconds,e=this._days,f=this._months,g=this._data,h=0;g.milliseconds=d%1e3,a=q(d/1e3),g.seconds=a%60,b=q(a/60),g.minutes=b%60,c=q(b/60),g.hours=c%24,e+=q(c/24),h=q(rb(e)),e-=q(sb(h)),f+=q(e/30),e%=30,h+=q(f/12),f%=12,g.days=e,g.months=f,g.years=h},abs:function(){return this._milliseconds=Math.abs(this._milliseconds),this._days=Math.abs(this._days),this._months=Math.abs(this._months),this._data.milliseconds=Math.abs(this._data.milliseconds),this._data.seconds=Math.abs(this._data.seconds),this._data.minutes=Math.abs(this._data.minutes),this._data.hours=Math.abs(this._data.hours),this._data.months=Math.abs(this._data.months),this._data.years=Math.abs(this._data.years),this},weeks:function(){return q(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*C(this._months/12)
},humanize:function(a){var b=ib(this,!a,this.localeData());return a&&(b=this.localeData().pastFuture(+this,b)),this.localeData().postformat(b)},add:function(a,b){var c=vb.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=vb.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=z(a),this[a.toLowerCase()+"s"]()},as:function(a){var b,c;if(a=z(a),"month"===a||"year"===a)return b=this._days+this._milliseconds/864e5,c=this._months+12*rb(b),"month"===a?c:c/12;switch(b=this._days+Math.round(sb(this._months/12)),a){case"week":return b/7+this._milliseconds/6048e5;case"day":return b+this._milliseconds/864e5;case"hour":return 24*b+this._milliseconds/36e5;case"minute":return 24*b*60+this._milliseconds/6e4;case"second":return 24*b*60*60+this._milliseconds/1e3;case"millisecond":return Math.floor(24*b*60*60*1e3)+this._milliseconds;default:throw new Error("Unknown unit "+a)}},lang:vb.fn.lang,locale:vb.fn.locale,toIsoString:f("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",function(){return this.toISOString()}),toISOString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"},localeData:function(){return this._locale},toJSON:function(){return this.toISOString()}}),vb.duration.fn.toString=vb.duration.fn.toISOString;for(xb in kc)c(kc,xb)&&tb(xb.toLowerCase());vb.duration.fn.asMilliseconds=function(){return this.as("ms")},vb.duration.fn.asSeconds=function(){return this.as("s")},vb.duration.fn.asMinutes=function(){return this.as("m")},vb.duration.fn.asHours=function(){return this.as("h")},vb.duration.fn.asDays=function(){return this.as("d")},vb.duration.fn.asWeeks=function(){return this.as("weeks")},vb.duration.fn.asMonths=function(){return this.as("M")},vb.duration.fn.asYears=function(){return this.as("y")},vb.locale("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===C(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),Lb?module.exports=vb:"function"==typeof define&&define.amd?(define(function(a,b,c){return c.config&&c.config()&&c.config().noGlobal===!0&&(zb.moment=wb),vb}),ub(!0)):ub()}).call(this);

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: lib/jquery/fullcalendar.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


/*!
 * FullCalendar v3.4.0
 * Docs & License: https://fullcalendar.io/
 * (c) 2017 Adam Shaw
 */

(function(factory) {
	if (typeof define === 'function' && define.amd) {
		define([ 'jquery', 'moment' ], factory);
	}
	else if (typeof exports === 'object') { // Node/CommonJS
		module.exports = factory(require('jquery'), require('moment'));
	}
	else {
		factory(jQuery, moment);
	}
})(function($, moment) {

;;

var FC = $.fullCalendar = {
	version: "3.4.0",
	// When introducing internal API incompatibilities (where fullcalendar plugins would break),
	// the minor version of the calendar should be upped (ex: 2.7.2 -> 2.8.0)
	// and the below integer should be incremented.
	internalApiVersion: 9
};
var fcViews = FC.views = {};


$.fn.fullCalendar = function(options) {
	var args = Array.prototype.slice.call(arguments, 1); // for a possible method call
	var res = this; // what this function will return (this jQuery object by default)

	this.each(function(i, _element) { // loop each DOM element involved
		var element = $(_element);
		var calendar = element.data('fullCalendar'); // get the existing calendar object (if any)
		var singleRes; // the returned value of this single method call

		// a method call
		if (typeof options === 'string') {
			if (calendar && $.isFunction(calendar[options])) {
				singleRes = calendar[options].apply(calendar, args);
				if (!i) {
					res = singleRes; // record the first method call result
				}
				if (options === 'destroy') { // for the destroy method, must remove Calendar object data
					element.removeData('fullCalendar');
				}
			}
		}
		// a new calendar initialization
		else if (!calendar) { // don't initialize twice
			calendar = new Calendar(element, options);
			element.data('fullCalendar', calendar);
			calendar.render();
		}
	});

	return res;
};


var complexOptions = [ // names of options that are objects whose properties should be combined
	'header',
	'footer',
	'buttonText',
	'buttonIcons',
	'themeButtonIcons'
];


// Merges an array of option objects into a single object
function mergeOptions(optionObjs) {
	return mergeProps(optionObjs, complexOptions);
}

;;

// exports
FC.intersectRanges = intersectRanges;
FC.applyAll = applyAll;
FC.debounce = debounce;
FC.isInt = isInt;
FC.htmlEscape = htmlEscape;
FC.cssToStr = cssToStr;
FC.proxy = proxy;
FC.capitaliseFirstLetter = capitaliseFirstLetter;


/* FullCalendar-specific DOM Utilities
----------------------------------------------------------------------------------------------------------------------*/


// Given the scrollbar widths of some other container, create borders/margins on rowEls in order to match the left
// and right space that was offset by the scrollbars. A 1-pixel border first, then margin beyond that.
function compensateScroll(rowEls, scrollbarWidths) {
	if (scrollbarWidths.left) {
		rowEls.css({
			'border-left-width': 1,
			'margin-left': scrollbarWidths.left - 1
		});
	}
	if (scrollbarWidths.right) {
		rowEls.css({
			'border-right-width': 1,
			'margin-right': scrollbarWidths.right - 1
		});
	}
}


// Undoes compensateScroll and restores all borders/margins
function uncompensateScroll(rowEls) {
	rowEls.css({
		'margin-left': '',
		'margin-right': '',
		'border-left-width': '',
		'border-right-width': ''
	});
}


// Make the mouse cursor express that an event is not allowed in the current area
function disableCursor() {
	$('body').addClass('fc-not-allowed');
}


// Returns the mouse cursor to its original look
function enableCursor() {
	$('body').removeClass('fc-not-allowed');
}


// Given a total available height to fill, have `els` (essentially child rows) expand to accomodate.
// By default, all elements that are shorter than the recommended height are expanded uniformly, not considering
// any other els that are already too tall. if `shouldRedistribute` is on, it considers these tall rows and 
// reduces the available height.
function distributeHeight(els, availableHeight, shouldRedistribute) {

	// *FLOORING NOTE*: we floor in certain places because zoom can give inaccurate floating-point dimensions,
	// and it is better to be shorter than taller, to avoid creating unnecessary scrollbars.

	var minOffset1 = Math.floor(availableHeight / els.length); // for non-last element
	var minOffset2 = Math.floor(availableHeight - minOffset1 * (els.length - 1)); // for last element *FLOORING NOTE*
	var flexEls = []; // elements that are allowed to expand. array of DOM nodes
	var flexOffsets = []; // amount of vertical space it takes up
	var flexHeights = []; // actual css height
	var usedHeight = 0;

	undistributeHeight(els); // give all elements their natural height

	// find elements that are below the recommended height (expandable).
	// important to query for heights in a single first pass (to avoid reflow oscillation).
	els.each(function(i, el) {
		var minOffset = i === els.length - 1 ? minOffset2 : minOffset1;
		var naturalOffset = $(el).outerHeight(true);

		if (naturalOffset < minOffset) {
			flexEls.push(el);
			flexOffsets.push(naturalOffset);
			flexHeights.push($(el).height());
		}
		else {
			// this element stretches past recommended height (non-expandable). mark the space as occupied.
			usedHeight += naturalOffset;
		}
	});

	// readjust the recommended height to only consider the height available to non-maxed-out rows.
	if (shouldRedistribute) {
		availableHeight -= usedHeight;
		minOffset1 = Math.floor(availableHeight / flexEls.length);
		minOffset2 = Math.floor(availableHeight - minOffset1 * (flexEls.length - 1)); // *FLOORING NOTE*
	}

	// assign heights to all expandable elements
	$(flexEls).each(function(i, el) {
		var minOffset = i === flexEls.length - 1 ? minOffset2 : minOffset1;
		var naturalOffset = flexOffsets[i];
		var naturalHeight = flexHeights[i];
		var newHeight = minOffset - (naturalOffset - naturalHeight); // subtract the margin/padding

		if (naturalOffset < minOffset) { // we check this again because redistribution might have changed things
			$(el).height(newHeight);
		}
	});
}


// Undoes distrubuteHeight, restoring all els to their natural height
function undistributeHeight(els) {
	els.height('');
}


// Given `els`, a jQuery set of <td> cells, find the cell with the largest natural width and set the widths of all the
// cells to be that width.
// PREREQUISITE: if you want a cell to take up width, it needs to have a single inner element w/ display:inline
function matchCellWidths(els) {
	var maxInnerWidth = 0;

	els.find('> *').each(function(i, innerEl) {
		var innerWidth = $(innerEl).outerWidth();
		if (innerWidth > maxInnerWidth) {
			maxInnerWidth = innerWidth;
		}
	});

	maxInnerWidth++; // sometimes not accurate of width the text needs to stay on one line. insurance

	els.width(maxInnerWidth);

	return maxInnerWidth;
}


// Given one element that resides inside another,
// Subtracts the height of the inner element from the outer element.
function subtractInnerElHeight(outerEl, innerEl) {
	var both = outerEl.add(innerEl);
	var diff;

	// effin' IE8/9/10/11 sometimes returns 0 for dimensions. this weird hack was the only thing that worked
	both.css({
		position: 'relative', // cause a reflow, which will force fresh dimension recalculation
		left: -1 // ensure reflow in case the el was already relative. negative is less likely to cause new scroll
	});
	diff = outerEl.outerHeight() - innerEl.outerHeight(); // grab the dimensions
	both.css({ position: '', left: '' }); // undo hack

	return diff;
}


/* Element Geom Utilities
----------------------------------------------------------------------------------------------------------------------*/

FC.getOuterRect = getOuterRect;
FC.getClientRect = getClientRect;
FC.getContentRect = getContentRect;
FC.getScrollbarWidths = getScrollbarWidths;


// borrowed from https://github.com/jquery/jquery-ui/blob/1.11.0/ui/core.js#L51
function getScrollParent(el) {
	var position = el.css('position'),
		scrollParent = el.parents().filter(function() {
			var parent = $(this);
			return (/(auto|scroll)/).test(
				parent.css('overflow') + parent.css('overflow-y') + parent.css('overflow-x')
			);
		}).eq(0);

	return position === 'fixed' || !scrollParent.length ? $(el[0].ownerDocument || document) : scrollParent;
}


// Queries the outer bounding area of a jQuery element.
// Returns a rectangle with absolute coordinates: left, right (exclusive), top, bottom (exclusive).
// Origin is optional.
function getOuterRect(el, origin) {
	var offset = el.offset();
	var left = offset.left - (origin ? origin.left : 0);
	var top = offset.top - (origin ? origin.top : 0);

	return {
		left: left,
		right: left + el.outerWidth(),
		top: top,
		bottom: top + el.outerHeight()
	};
}


// Queries the area within the margin/border/scrollbars of a jQuery element. Does not go within the padding.
// Returns a rectangle with absolute coordinates: left, right (exclusive), top, bottom (exclusive).
// Origin is optional.
// WARNING: given element can't have borders
// NOTE: should use clientLeft/clientTop, but very unreliable cross-browser.
function getClientRect(el, origin) {
	var offset = el.offset();
	var scrollbarWidths = getScrollbarWidths(el);
	var left = offset.left + getCssFloat(el, 'border-left-width') + scrollbarWidths.left - (origin ? origin.left : 0);
	var top = offset.top + getCssFloat(el, 'border-top-width') + scrollbarWidths.top - (origin ? origin.top : 0);

	return {
		left: left,
		right: left + el[0].clientWidth, // clientWidth includes padding but NOT scrollbars
		top: top,
		bottom: top + el[0].clientHeight // clientHeight includes padding but NOT scrollbars
	};
}


// Queries the area within the margin/border/padding of a jQuery element. Assumed not to have scrollbars.
// Returns a rectangle with absolute coordinates: left, right (exclusive), top, bottom (exclusive).
// Origin is optional.
function getContentRect(el, origin) {
	var offset = el.offset(); // just outside of border, margin not included
	var left = offset.left + getCssFloat(el, 'border-left-width') + getCssFloat(el, 'padding-left') -
		(origin ? origin.left : 0);
	var top = offset.top + getCssFloat(el, 'border-top-width') + getCssFloat(el, 'padding-top') -
		(origin ? origin.top : 0);

	return {
		left: left,
		right: left + el.width(),
		top: top,
		bottom: top + el.height()
	};
}


// Returns the computed left/right/top/bottom scrollbar widths for the given jQuery element.
// WARNING: given element can't have borders (which will cause offsetWidth/offsetHeight to be larger).
// NOTE: should use clientLeft/clientTop, but very unreliable cross-browser.
function getScrollbarWidths(el) {
	var leftRightWidth = el[0].offsetWidth - el[0].clientWidth;
	var bottomWidth = el[0].offsetHeight - el[0].clientHeight;
	var widths;

	leftRightWidth = sanitizeScrollbarWidth(leftRightWidth);
	bottomWidth = sanitizeScrollbarWidth(bottomWidth);

	widths = { left: 0, right: 0, top: 0, bottom: bottomWidth };

	if (getIsLeftRtlScrollbars() && el.css('direction') == 'rtl') { // is the scrollbar on the left side?
		widths.left = leftRightWidth;
	}
	else {
		widths.right = leftRightWidth;
	}

	return widths;
}


// The scrollbar width computations in getScrollbarWidths are sometimes flawed when it comes to
// retina displays, rounding, and IE11. Massage them into a usable value.
function sanitizeScrollbarWidth(width) {
	width = Math.max(0, width); // no negatives
	width = Math.round(width);
	return width;
}


// Logic for determining if, when the element is right-to-left, the scrollbar appears on the left side

var _isLeftRtlScrollbars = null;

function getIsLeftRtlScrollbars() { // responsible for caching the computation
	if (_isLeftRtlScrollbars === null) {
		_isLeftRtlScrollbars = computeIsLeftRtlScrollbars();
	}
	return _isLeftRtlScrollbars;
}

function computeIsLeftRtlScrollbars() { // creates an offscreen test element, then removes it
	var el = $('<div><div/></div>')
		.css({
			position: 'absolute',
			top: -1000,
			left: 0,
			border: 0,
			padding: 0,
			overflow: 'scroll',
			direction: 'rtl'
		})
		.appendTo('body');
	var innerEl = el.children();
	var res = innerEl.offset().left > el.offset().left; // is the inner div shifted to accommodate a left scrollbar?
	el.remove();
	return res;
}


// Retrieves a jQuery element's computed CSS value as a floating-point number.
// If the queried value is non-numeric (ex: IE can return "medium" for border width), will just return zero.
function getCssFloat(el, prop) {
	return parseFloat(el.css(prop)) || 0;
}


/* Mouse / Touch Utilities
----------------------------------------------------------------------------------------------------------------------*/

FC.preventDefault = preventDefault;


// Returns a boolean whether this was a left mouse click and no ctrl key (which means right click on Mac)
function isPrimaryMouseButton(ev) {
	return ev.which == 1 && !ev.ctrlKey;
}


function getEvX(ev) {
	var touches = ev.originalEvent.touches;

	// on mobile FF, pageX for touch events is present, but incorrect,
	// so, look at touch coordinates first.
	if (touches && touches.length) {
		return touches[0].pageX;
	}

	return ev.pageX;
}


function getEvY(ev) {
	var touches = ev.originalEvent.touches;

	// on mobile FF, pageX for touch events is present, but incorrect,
	// so, look at touch coordinates first.
	if (touches && touches.length) {
		return touches[0].pageY;
	}

	return ev.pageY;
}


function getEvIsTouch(ev) {
	return /^touch/.test(ev.type);
}


function preventSelection(el) {
	el.addClass('fc-unselectable')
		.on('selectstart', preventDefault);
}


function allowSelection(el) {
	el.removeClass('fc-unselectable')
		.off('selectstart', preventDefault);
}


// Stops a mouse/touch event from doing it's native browser action
function preventDefault(ev) {
	ev.preventDefault();
}


/* General Geometry Utils
----------------------------------------------------------------------------------------------------------------------*/

FC.intersectRects = intersectRects;

// Returns a new rectangle that is the intersection of the two rectangles. If they don't intersect, returns false
function intersectRects(rect1, rect2) {
	var res = {
		left: Math.max(rect1.left, rect2.left),
		right: Math.min(rect1.right, rect2.right),
		top: Math.max(rect1.top, rect2.top),
		bottom: Math.min(rect1.bottom, rect2.bottom)
	};

	if (res.left < res.right && res.top < res.bottom) {
		return res;
	}
	return false;
}


// Returns a new point that will have been moved to reside within the given rectangle
function constrainPoint(point, rect) {
	return {
		left: Math.min(Math.max(point.left, rect.left), rect.right),
		top: Math.min(Math.max(point.top, rect.top), rect.bottom)
	};
}


// Returns a point that is the center of the given rectangle
function getRectCenter(rect) {
	return {
		left: (rect.left + rect.right) / 2,
		top: (rect.top + rect.bottom) / 2
	};
}


// Subtracts point2's coordinates from point1's coordinates, returning a delta
function diffPoints(point1, point2) {
	return {
		left: point1.left - point2.left,
		top: point1.top - point2.top
	};
}


/* Object Ordering by Field
----------------------------------------------------------------------------------------------------------------------*/

FC.parseFieldSpecs = parseFieldSpecs;
FC.compareByFieldSpecs = compareByFieldSpecs;
FC.compareByFieldSpec = compareByFieldSpec;
FC.flexibleCompare = flexibleCompare;


function parseFieldSpecs(input) {
	var specs = [];
	var tokens = [];
	var i, token;

	if (typeof input === 'string') {
		tokens = input.split(/\s*,\s*/);
	}
	else if (typeof input === 'function') {
		tokens = [ input ];
	}
	else if ($.isArray(input)) {
		tokens = input;
	}

	for (i = 0; i < tokens.length; i++) {
		token = tokens[i];

		if (typeof token === 'string') {
			specs.push(
				token.charAt(0) == '-' ?
					{ field: token.substring(1), order: -1 } :
					{ field: token, order: 1 }
			);
		}
		else if (typeof token === 'function') {
			specs.push({ func: token });
		}
	}

	return specs;
}


function compareByFieldSpecs(obj1, obj2, fieldSpecs) {
	var i;
	var cmp;

	for (i = 0; i < fieldSpecs.length; i++) {
		cmp = compareByFieldSpec(obj1, obj2, fieldSpecs[i]);
		if (cmp) {
			return cmp;
		}
	}

	return 0;
}


function compareByFieldSpec(obj1, obj2, fieldSpec) {
	if (fieldSpec.func) {
		return fieldSpec.func(obj1, obj2);
	}
	return flexibleCompare(obj1[fieldSpec.field], obj2[fieldSpec.field]) *
		(fieldSpec.order || 1);
}


function flexibleCompare(a, b) {
	if (!a && !b) {
		return 0;
	}
	if (b == null) {
		return -1;
	}
	if (a == null) {
		return 1;
	}
	if ($.type(a) === 'string' || $.type(b) === 'string') {
		return String(a).localeCompare(String(b));
	}
	return a - b;
}


/* FullCalendar-specific Misc Utilities
----------------------------------------------------------------------------------------------------------------------*/


// Computes the intersection of the two ranges. Will return fresh date clones in a range.
// Returns undefined if no intersection.
// Expects all dates to be normalized to the same timezone beforehand.
// TODO: move to date section?
function intersectRanges(subjectRange, constraintRange) {
	var subjectStart = subjectRange.start;
	var subjectEnd = subjectRange.end;
	var constraintStart = constraintRange.start;
	var constraintEnd = constraintRange.end;
	var segStart, segEnd;
	var isStart, isEnd;

	if (subjectEnd > constraintStart && subjectStart < constraintEnd) { // in bounds at all?

		if (subjectStart >= constraintStart) {
			segStart = subjectStart.clone();
			isStart = true;
		}
		else {
			segStart = constraintStart.clone();
			isStart =  false;
		}

		if (subjectEnd <= constraintEnd) {
			segEnd = subjectEnd.clone();
			isEnd = true;
		}
		else {
			segEnd = constraintEnd.clone();
			isEnd = false;
		}

		return {
			start: segStart,
			end: segEnd,
			isStart: isStart,
			isEnd: isEnd
		};
	}
}


/* Date Utilities
----------------------------------------------------------------------------------------------------------------------*/

FC.computeGreatestUnit = computeGreatestUnit;
FC.divideRangeByDuration = divideRangeByDuration;
FC.divideDurationByDuration = divideDurationByDuration;
FC.multiplyDuration = multiplyDuration;
FC.durationHasTime = durationHasTime;

var dayIDs = [ 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat' ];
var unitsDesc = [ 'year', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond' ]; // descending


// Diffs the two moments into a Duration where full-days are recorded first, then the remaining time.
// Moments will have their timezones normalized.
function diffDayTime(a, b) {
	return moment.duration({
		days: a.clone().stripTime().diff(b.clone().stripTime(), 'days'),
		ms: a.time() - b.time() // time-of-day from day start. disregards timezone
	});
}


// Diffs the two moments via their start-of-day (regardless of timezone). Produces whole-day durations.
function diffDay(a, b) {
	return moment.duration({
		days: a.clone().stripTime().diff(b.clone().stripTime(), 'days')
	});
}


// Diffs two moments, producing a duration, made of a whole-unit-increment of the given unit. Uses rounding.
function diffByUnit(a, b, unit) {
	return moment.duration(
		Math.round(a.diff(b, unit, true)), // returnFloat=true
		unit
	);
}


// Computes the unit name of the largest whole-unit period of time.
// For example, 48 hours will be "days" whereas 49 hours will be "hours".
// Accepts start/end, a range object, or an original duration object.
function computeGreatestUnit(start, end) {
	var i, unit;
	var val;

	for (i = 0; i < unitsDesc.length; i++) {
		unit = unitsDesc[i];
		val = computeRangeAs(unit, start, end);

		if (val >= 1 && isInt(val)) {
			break;
		}
	}

	return unit; // will be "milliseconds" if nothing else matches
}


// like computeGreatestUnit, but has special abilities to interpret the source input for clues
function computeDurationGreatestUnit(duration, durationInput) {
	var unit = computeGreatestUnit(duration);

	// prevent days:7 from being interpreted as a week
	if (unit === 'week' && typeof durationInput === 'object' && durationInput.days) {
		unit = 'day';
	}

	return unit;
}


// Computes the number of units (like "hours") in the given range.
// Range can be a {start,end} object, separate start/end args, or a Duration.
// Results are based on Moment's .as() and .diff() methods, so results can depend on internal handling
// of month-diffing logic (which tends to vary from version to version).
function computeRangeAs(unit, start, end) {

	if (end != null) { // given start, end
		return end.diff(start, unit, true);
	}
	else if (moment.isDuration(start)) { // given duration
		return start.as(unit);
	}
	else { // given { start, end } range object
		return start.end.diff(start.start, unit, true);
	}
}


// Intelligently divides a range (specified by a start/end params) by a duration
function divideRangeByDuration(start, end, dur) {
	var months;

	if (durationHasTime(dur)) {
		return (end - start) / dur;
	}
	months = dur.asMonths();
	if (Math.abs(months) >= 1 && isInt(months)) {
		return end.diff(start, 'months', true) / months;
	}
	return end.diff(start, 'days', true) / dur.asDays();
}


// Intelligently divides one duration by another
function divideDurationByDuration(dur1, dur2) {
	var months1, months2;

	if (durationHasTime(dur1) || durationHasTime(dur2)) {
		return dur1 / dur2;
	}
	months1 = dur1.asMonths();
	months2 = dur2.asMonths();
	if (
		Math.abs(months1) >= 1 && isInt(months1) &&
		Math.abs(months2) >= 1 && isInt(months2)
	) {
		return months1 / months2;
	}
	return dur1.asDays() / dur2.asDays();
}


// Intelligently multiplies a duration by a number
function multiplyDuration(dur, n) {
	var months;

	if (durationHasTime(dur)) {
		return moment.duration(dur * n);
	}
	months = dur.asMonths();
	if (Math.abs(months) >= 1 && isInt(months)) {
		return moment.duration({ months: months * n });
	}
	return moment.duration({ days: dur.asDays() * n });
}


function cloneRange(range) {
	return {
		start: range.start.clone(),
		end: range.end.clone()
	};
}


// Trims the beginning and end of inner range to be completely within outerRange.
// Returns a new range object.
function constrainRange(innerRange, outerRange) {
	innerRange = cloneRange(innerRange);

	if (outerRange.start) {
		// needs to be inclusively before outerRange's end
		innerRange.start = constrainDate(innerRange.start, outerRange);
	}

	if (outerRange.end) {
		innerRange.end = minMoment(innerRange.end, outerRange.end);
	}

	return innerRange;
}


// If the given date is not within the given range, move it inside.
// (If it's past the end, make it one millisecond before the end).
// Always returns a new moment.
function constrainDate(date, range) {
	date = date.clone();

	if (range.start) {
		date = maxMoment(date, range.start);
	}

	if (range.end && date >= range.end) {
		date = range.end.clone().subtract(1);
	}

	return date;
}


function isDateWithinRange(date, range) {
	return (!range.start || date >= range.start) &&
		(!range.end || date < range.end);
}


// TODO: deal with repeat code in intersectRanges
// constraintRange can have unspecified start/end, an open-ended range.
function doRangesIntersect(subjectRange, constraintRange) {
	return (!constraintRange.start || subjectRange.end >= constraintRange.start) &&
		(!constraintRange.end || subjectRange.start < constraintRange.end);
}


function isRangeWithinRange(innerRange, outerRange) {
	return (!outerRange.start || innerRange.start >= outerRange.start) &&
		(!outerRange.end || innerRange.end <= outerRange.end);
}


function isRangesEqual(range0, range1) {
	return ((range0.start && range1.start && range0.start.isSame(range1.start)) || (!range0.start && !range1.start)) &&
		((range0.end && range1.end && range0.end.isSame(range1.end)) || (!range0.end && !range1.end));
}


// Returns the moment that's earlier in time. Always a copy.
function minMoment(mom1, mom2) {
	return (mom1.isBefore(mom2) ? mom1 : mom2).clone();
}


// Returns the moment that's later in time. Always a copy.
function maxMoment(mom1, mom2) {
	return (mom1.isAfter(mom2) ? mom1 : mom2).clone();
}


// Returns a boolean about whether the given duration has any time parts (hours/minutes/seconds/ms)
function durationHasTime(dur) {
	return Boolean(dur.hours() || dur.minutes() || dur.seconds() || dur.milliseconds());
}


function isNativeDate(input) {
	return  Object.prototype.toString.call(input) === '[object Date]' || input instanceof Date;
}


// Returns a boolean about whether the given input is a time string, like "06:40:00" or "06:00"
function isTimeString(str) {
	return /^\d+\:\d+(?:\:\d+\.?(?:\d{3})?)?$/.test(str);
}


/* Logging and Debug
----------------------------------------------------------------------------------------------------------------------*/

FC.log = function() {
	var console = window.console;

	if (console && console.log) {
		return console.log.apply(console, arguments);
	}
};

FC.warn = function() {
	var console = window.console;

	if (console && console.warn) {
		return console.warn.apply(console, arguments);
	}
	else {
		return FC.log.apply(FC, arguments);
	}
};


/* General Utilities
----------------------------------------------------------------------------------------------------------------------*/

var hasOwnPropMethod = {}.hasOwnProperty;


// Merges an array of objects into a single object.
// The second argument allows for an array of property names who's object values will be merged together.
function mergeProps(propObjs, complexProps) {
	var dest = {};
	var i, name;
	var complexObjs;
	var j, val;
	var props;

	if (complexProps) {
		for (i = 0; i < complexProps.length; i++) {
			name = complexProps[i];
			complexObjs = [];

			// collect the trailing object values, stopping when a non-object is discovered
			for (j = propObjs.length - 1; j >= 0; j--) {
				val = propObjs[j][name];

				if (typeof val === 'object') {
					complexObjs.unshift(val);
				}
				else if (val !== undefined) {
					dest[name] = val; // if there were no objects, this value will be used
					break;
				}
			}

			// if the trailing values were objects, use the merged value
			if (complexObjs.length) {
				dest[name] = mergeProps(complexObjs);
			}
		}
	}

	// copy values into the destination, going from last to first
	for (i = propObjs.length - 1; i >= 0; i--) {
		props = propObjs[i];

		for (name in props) {
			if (!(name in dest)) { // if already assigned by previous props or complex props, don't reassign
				dest[name] = props[name];
			}
		}
	}

	return dest;
}


// Create an object that has the given prototype. Just like Object.create
function createObject(proto) {
	var f = function() {};
	f.prototype = proto;
	return new f();
}
FC.createObject = createObject;


function copyOwnProps(src, dest) {
	for (var name in src) {
		if (hasOwnProp(src, name)) {
			dest[name] = src[name];
		}
	}
}


function hasOwnProp(obj, name) {
	return hasOwnPropMethod.call(obj, name);
}


// Is the given value a non-object non-function value?
function isAtomic(val) {
	return /undefined|null|boolean|number|string/.test($.type(val));
}


function applyAll(functions, thisObj, args) {
	if ($.isFunction(functions)) {
		functions = [ functions ];
	}
	if (functions) {
		var i;
		var ret;
		for (i=0; i<functions.length; i++) {
			ret = functions[i].apply(thisObj, args) || ret;
		}
		return ret;
	}
}


function firstDefined() {
	for (var i=0; i<arguments.length; i++) {
		if (arguments[i] !== undefined) {
			return arguments[i];
		}
	}
}


function htmlEscape(s) {
	return (s + '').replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/'/g, '&#039;')
		.replace(/"/g, '&quot;')
		.replace(/\n/g, '<br />');
}


function stripHtmlEntities(text) {
	return text.replace(/&.*?;/g, '');
}


// Given a hash of CSS properties, returns a string of CSS.
// Uses property names as-is (no camel-case conversion). Will not make statements for null/undefined values.
function cssToStr(cssProps) {
	var statements = [];

	$.each(cssProps, function(name, val) {
		if (val != null) {
			statements.push(name + ':' + val);
		}
	});

	return statements.join(';');
}


// Given an object hash of HTML attribute names to values,
// generates a string that can be injected between < > in HTML
function attrsToStr(attrs) {
	var parts = [];

	$.each(attrs, function(name, val) {
		if (val != null) {
			parts.push(name + '="' + htmlEscape(val) + '"');
		}
	});

	return parts.join(' ');
}


function capitaliseFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}


function compareNumbers(a, b) { // for .sort()
	return a - b;
}


function isInt(n) {
	return n % 1 === 0;
}


// Returns a method bound to the given object context.
// Just like one of the jQuery.proxy signatures, but without the undesired behavior of treating the same method with
// different contexts as identical when binding/unbinding events.
function proxy(obj, methodName) {
	var method = obj[methodName];

	return function() {
		return method.apply(obj, arguments);
	};
}


// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
// https://github.com/jashkenas/underscore/blob/1.6.0/underscore.js#L714
function debounce(func, wait, immediate) {
	var timeout, args, context, timestamp, result;

	var later = function() {
		var last = +new Date() - timestamp;
		if (last < wait) {
			timeout = setTimeout(later, wait - last);
		}
		else {
			timeout = null;
			if (!immediate) {
				result = func.apply(context, args);
				context = args = null;
			}
		}
	};

	return function() {
		context = this;
		args = arguments;
		timestamp = +new Date();
		var callNow = immediate && !timeout;
		if (!timeout) {
			timeout = setTimeout(later, wait);
		}
		if (callNow) {
			result = func.apply(context, args);
			context = args = null;
		}
		return result;
	};
}

;;

/*
GENERAL NOTE on moments throughout the *entire rest* of the codebase:
All moments are assumed to be ambiguously-zoned unless otherwise noted,
with the NOTABLE EXCEOPTION of start/end dates that live on *Event Objects*.
Ambiguously-TIMED moments are assumed to be ambiguously-zoned by nature.
*/

var ambigDateOfMonthRegex = /^\s*\d{4}-\d\d$/;
var ambigTimeOrZoneRegex =
	/^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/;
var newMomentProto = moment.fn; // where we will attach our new methods
var oldMomentProto = $.extend({}, newMomentProto); // copy of original moment methods

// tell momentjs to transfer these properties upon clone
var momentProperties = moment.momentProperties;
momentProperties.push('_fullCalendar');
momentProperties.push('_ambigTime');
momentProperties.push('_ambigZone');


// Creating
// -------------------------------------------------------------------------------------------------

// Creates a new moment, similar to the vanilla moment(...) constructor, but with
// extra features (ambiguous time, enhanced formatting). When given an existing moment,
// it will function as a clone (and retain the zone of the moment). Anything else will
// result in a moment in the local zone.
FC.moment = function() {
	return makeMoment(arguments);
};

// Sames as FC.moment, but forces the resulting moment to be in the UTC timezone.
FC.moment.utc = function() {
	var mom = makeMoment(arguments, true);

	// Force it into UTC because makeMoment doesn't guarantee it
	// (if given a pre-existing moment for example)
	if (mom.hasTime()) { // don't give ambiguously-timed moments a UTC zone
		mom.utc();
	}

	return mom;
};

// Same as FC.moment, but when given an ISO8601 string, the timezone offset is preserved.
// ISO8601 strings with no timezone offset will become ambiguously zoned.
FC.moment.parseZone = function() {
	return makeMoment(arguments, true, true);
};

// Builds an enhanced moment from args. When given an existing moment, it clones. When given a
// native Date, or called with no arguments (the current time), the resulting moment will be local.
// Anything else needs to be "parsed" (a string or an array), and will be affected by:
//    parseAsUTC - if there is no zone information, should we parse the input in UTC?
//    parseZone - if there is zone information, should we force the zone of the moment?
function makeMoment(args, parseAsUTC, parseZone) {
	var input = args[0];
	var isSingleString = args.length == 1 && typeof input === 'string';
	var isAmbigTime;
	var isAmbigZone;
	var ambigMatch;
	var mom;

	if (moment.isMoment(input) || isNativeDate(input) || input === undefined) {
		mom = moment.apply(null, args);
	}
	else { // "parsing" is required
		isAmbigTime = false;
		isAmbigZone = false;

		if (isSingleString) {
			if (ambigDateOfMonthRegex.test(input)) {
				// accept strings like '2014-05', but convert to the first of the month
				input += '-01';
				args = [ input ]; // for when we pass it on to moment's constructor
				isAmbigTime = true;
				isAmbigZone = true;
			}
			else if ((ambigMatch = ambigTimeOrZoneRegex.exec(input))) {
				isAmbigTime = !ambigMatch[5]; // no time part?
				isAmbigZone = true;
			}
		}
		else if ($.isArray(input)) {
			// arrays have no timezone information, so assume ambiguous zone
			isAmbigZone = true;
		}
		// otherwise, probably a string with a format

		if (parseAsUTC || isAmbigTime) {
			mom = moment.utc.apply(moment, args);
		}
		else {
			mom = moment.apply(null, args);
		}

		if (isAmbigTime) {
			mom._ambigTime = true;
			mom._ambigZone = true; // ambiguous time always means ambiguous zone
		}
		else if (parseZone) { // let's record the inputted zone somehow
			if (isAmbigZone) {
				mom._ambigZone = true;
			}
			else if (isSingleString) {
				mom.utcOffset(input); // if not a valid zone, will assign UTC
			}
		}
	}

	mom._fullCalendar = true; // flag for extended functionality

	return mom;
}


// Week Number
// -------------------------------------------------------------------------------------------------


// Returns the week number, considering the locale's custom week number calcuation
// `weeks` is an alias for `week`
newMomentProto.week = newMomentProto.weeks = function(input) {
	var weekCalc = this._locale._fullCalendar_weekCalc;

	if (input == null && typeof weekCalc === 'function') { // custom function only works for getter
		return weekCalc(this);
	}
	else if (weekCalc === 'ISO') {
		return oldMomentProto.isoWeek.apply(this, arguments); // ISO getter/setter
	}

	return oldMomentProto.week.apply(this, arguments); // local getter/setter
};


// Time-of-day
// -------------------------------------------------------------------------------------------------

// GETTER
// Returns a Duration with the hours/minutes/seconds/ms values of the moment.
// If the moment has an ambiguous time, a duration of 00:00 will be returned.
//
// SETTER
// You can supply a Duration, a Moment, or a Duration-like argument.
// When setting the time, and the moment has an ambiguous time, it then becomes unambiguous.
newMomentProto.time = function(time) {

	// Fallback to the original method (if there is one) if this moment wasn't created via FullCalendar.
	// `time` is a generic enough method name where this precaution is necessary to avoid collisions w/ other plugins.
	if (!this._fullCalendar) {
		return oldMomentProto.time.apply(this, arguments);
	}

	if (time == null) { // getter
		return moment.duration({
			hours: this.hours(),
			minutes: this.minutes(),
			seconds: this.seconds(),
			milliseconds: this.milliseconds()
		});
	}
	else { // setter

		this._ambigTime = false; // mark that the moment now has a time

		if (!moment.isDuration(time) && !moment.isMoment(time)) {
			time = moment.duration(time);
		}

		// The day value should cause overflow (so 24 hours becomes 00:00:00 of next day).
		// Only for Duration times, not Moment times.
		var dayHours = 0;
		if (moment.isDuration(time)) {
			dayHours = Math.floor(time.asDays()) * 24;
		}

		// We need to set the individual fields.
		// Can't use startOf('day') then add duration. In case of DST at start of day.
		return this.hours(dayHours + time.hours())
			.minutes(time.minutes())
			.seconds(time.seconds())
			.milliseconds(time.milliseconds());
	}
};

// Converts the moment to UTC, stripping out its time-of-day and timezone offset,
// but preserving its YMD. A moment with a stripped time will display no time
// nor timezone offset when .format() is called.
newMomentProto.stripTime = function() {

	if (!this._ambigTime) {

		this.utc(true); // keepLocalTime=true (for keeping *date* value)

		// set time to zero
		this.set({
			hours: 0,
			minutes: 0,
			seconds: 0,
			ms: 0
		});

		// Mark the time as ambiguous. This needs to happen after the .utc() call, which might call .utcOffset(),
		// which clears all ambig flags.
		this._ambigTime = true;
		this._ambigZone = true; // if ambiguous time, also ambiguous timezone offset
	}

	return this; // for chaining
};

// Returns if the moment has a non-ambiguous time (boolean)
newMomentProto.hasTime = function() {
	return !this._ambigTime;
};


// Timezone
// -------------------------------------------------------------------------------------------------

// Converts the moment to UTC, stripping out its timezone offset, but preserving its
// YMD and time-of-day. A moment with a stripped timezone offset will display no
// timezone offset when .format() is called.
newMomentProto.stripZone = function() {
	var wasAmbigTime;

	if (!this._ambigZone) {

		wasAmbigTime = this._ambigTime;

		this.utc(true); // keepLocalTime=true (for keeping date and time values)

		// the above call to .utc()/.utcOffset() unfortunately might clear the ambig flags, so restore
		this._ambigTime = wasAmbigTime || false;

		// Mark the zone as ambiguous. This needs to happen after the .utc() call, which might call .utcOffset(),
		// which clears the ambig flags.
		this._ambigZone = true;
	}

	return this; // for chaining
};

// Returns of the moment has a non-ambiguous timezone offset (boolean)
newMomentProto.hasZone = function() {
	return !this._ambigZone;
};


// implicitly marks a zone
newMomentProto.local = function(keepLocalTime) {

	// for when converting from ambiguously-zoned to local,
	// keep the time values when converting from UTC -> local
	oldMomentProto.local.call(this, this._ambigZone || keepLocalTime);

	// ensure non-ambiguous
	// this probably already happened via local() -> utcOffset(), but don't rely on Moment's internals
	this._ambigTime = false;
	this._ambigZone = false;

	return this; // for chaining
};


// implicitly marks a zone
newMomentProto.utc = function(keepLocalTime) {

	oldMomentProto.utc.call(this, keepLocalTime);

	// ensure non-ambiguous
	// this probably already happened via utc() -> utcOffset(), but don't rely on Moment's internals
	this._ambigTime = false;
	this._ambigZone = false;

	return this;
};


// implicitly marks a zone (will probably get called upon .utc() and .local())
newMomentProto.utcOffset = function(tzo) {

	if (tzo != null) { // setter
		// these assignments needs to happen before the original zone method is called.
		// I forget why, something to do with a browser crash.
		this._ambigTime = false;
		this._ambigZone = false;
	}

	return oldMomentProto.utcOffset.apply(this, arguments);
};


// Formatting
// -------------------------------------------------------------------------------------------------

newMomentProto.format = function() {

	if (this._fullCalendar && arguments[0]) { // an enhanced moment? and a format string provided?
		return formatDate(this, arguments[0]); // our extended formatting
	}
	if (this._ambigTime) {
		return oldMomentFormat(englishMoment(this), 'YYYY-MM-DD');
	}
	if (this._ambigZone) {
		return oldMomentFormat(englishMoment(this), 'YYYY-MM-DD[T]HH:mm:ss');
	}
	if (this._fullCalendar) { // enhanced non-ambig moment?
		// moment.format() doesn't ensure english, but we want to.
		return oldMomentFormat(englishMoment(this));
	}

	return oldMomentProto.format.apply(this, arguments);
};

newMomentProto.toISOString = function() {

	if (this._ambigTime) {
		return oldMomentFormat(englishMoment(this), 'YYYY-MM-DD');
	}
	if (this._ambigZone) {
		return oldMomentFormat(englishMoment(this), 'YYYY-MM-DD[T]HH:mm:ss');
	}
	if (this._fullCalendar) { // enhanced non-ambig moment?
		// depending on browser, moment might not output english. ensure english.
		// https://github.com/moment/moment/blob/2.18.1/src/lib/moment/format.js#L22
		return oldMomentProto.toISOString.apply(englishMoment(this), arguments);
	}

	return oldMomentProto.toISOString.apply(this, arguments);
};

function englishMoment(mom) {
	if (mom.locale() !== 'en') {
		return mom.clone().locale('en');
	}
	return mom;
}

;;
(function() {

// exports
FC.formatDate = formatDate;
FC.formatRange = formatRange;
FC.oldMomentFormat = oldMomentFormat;
FC.queryMostGranularFormatUnit = queryMostGranularFormatUnit;


// Config
// ---------------------------------------------------------------------------------------------------------------------

/*
Inserted between chunks in the fake ("intermediate") formatting string.
Important that it passes as whitespace (\s) because moment often identifies non-standalone months
via a regexp with an \s.
*/
var PART_SEPARATOR = '\u000b'; // vertical tab

/*
Inserted as the first character of a literal-text chunk to indicate that the literal text is not actually literal text,
but rather, a "special" token that has custom rendering (see specialTokens map).
*/
var SPECIAL_TOKEN_MARKER = '\u001f'; // information separator 1

/*
Inserted at the beginning and end of a span of text that must have non-zero numeric characters.
Handling of these markers is done in a post-processing step at the very end of text rendering.
*/
var MAYBE_MARKER = '\u001e'; // information separator 2
var MAYBE_REGEXP = new RegExp(MAYBE_MARKER + '([^' + MAYBE_MARKER + ']*)' + MAYBE_MARKER, 'g'); // must be global

/*
Addition formatting tokens we want recognized
*/
var specialTokens = {
	t: function(date) { // "a" or "p"
		return oldMomentFormat(date, 'a').charAt(0);
	},
	T: function(date) { // "A" or "P"
		return oldMomentFormat(date, 'A').charAt(0);
	}
};

/*
The first characters of formatting tokens for units that are 1 day or larger.
`value` is for ranking relative size (lower means bigger).
`unit` is a normalized unit, used for comparing moments.
*/
var largeTokenMap = {
	Y: { value: 1, unit: 'year' },
	M: { value: 2, unit: 'month' },
	W: { value: 3, unit: 'week' }, // ISO week
	w: { value: 3, unit: 'week' }, // local week
	D: { value: 4, unit: 'day' }, // day of month
	d: { value: 4, unit: 'day' } // day of week
};


// Single Date Formatting
// ---------------------------------------------------------------------------------------------------------------------

/*
Formats `date` with a Moment formatting string, but allow our non-zero areas and special token
*/
function formatDate(date, formatStr) {
	return renderFakeFormatString(
		getParsedFormatString(formatStr).fakeFormatString,
		date
	);
}

/*
Call this if you want Moment's original format method to be used
*/
function oldMomentFormat(mom, formatStr) {
	return oldMomentProto.format.call(mom, formatStr); // oldMomentProto defined in moment-ext.js
}


// Date Range Formatting
// -------------------------------------------------------------------------------------------------
// TODO: make it work with timezone offset

/*
Using a formatting string meant for a single date, generate a range string, like
"Sep 2 - 9 2013", that intelligently inserts a separator where the dates differ.
If the dates are the same as far as the format string is concerned, just return a single
rendering of one date, without any separator.
*/
function formatRange(date1, date2, formatStr, separator, isRTL) {
	var localeData;

	date1 = FC.moment.parseZone(date1);
	date2 = FC.moment.parseZone(date2);

	localeData = date1.localeData();

	// Expand localized format strings, like "LL" -> "MMMM D YYYY".
	// BTW, this is not important for `formatDate` because it is impossible to put custom tokens
	// or non-zero areas in Moment's localized format strings.
	formatStr = localeData.longDateFormat(formatStr) || formatStr;

	return renderParsedFormat(
		getParsedFormatString(formatStr),
		date1,
		date2,
		separator || ' - ',
		isRTL
	);
}

/*
Renders a range with an already-parsed format string.
*/
function renderParsedFormat(parsedFormat, date1, date2, separator, isRTL) {
	var sameUnits = parsedFormat.sameUnits;
	var unzonedDate1 = date1.clone().stripZone(); // for same-unit comparisons
	var unzonedDate2 = date2.clone().stripZone(); // "

	var renderedParts1 = renderFakeFormatStringParts(parsedFormat.fakeFormatString, date1);
	var renderedParts2 = renderFakeFormatStringParts(parsedFormat.fakeFormatString, date2);

	var leftI;
	var leftStr = '';
	var rightI;
	var rightStr = '';
	var middleI;
	var middleStr1 = '';
	var middleStr2 = '';
	var middleStr = '';

	// Start at the leftmost side of the formatting string and continue until you hit a token
	// that is not the same between dates.
	for (
		leftI = 0;
		leftI < sameUnits.length && (!sameUnits[leftI] || unzonedDate1.isSame(unzonedDate2, sameUnits[leftI]));
		leftI++
	) {
		leftStr += renderedParts1[leftI];
	}

	// Similarly, start at the rightmost side of the formatting string and move left
	for (
		rightI = sameUnits.length - 1;
		rightI > leftI && (!sameUnits[rightI] || unzonedDate1.isSame(unzonedDate2, sameUnits[rightI]));
		rightI--
	) {
		// If current chunk is on the boundary of unique date-content, and is a special-case
		// date-formatting postfix character, then don't consume it. Consider it unique date-content.
		// TODO: make configurable
		if (rightI - 1 === leftI && renderedParts1[rightI] === '.') {
			break;
		}

		rightStr = renderedParts1[rightI] + rightStr;
	}

	// The area in the middle is different for both of the dates.
	// Collect them distinctly so we can jam them together later.
	for (middleI = leftI; middleI <= rightI; middleI++) {
		middleStr1 += renderedParts1[middleI];
		middleStr2 += renderedParts2[middleI];
	}

	if (middleStr1 || middleStr2) {
		if (isRTL) {
			middleStr = middleStr2 + separator + middleStr1;
		}
		else {
			middleStr = middleStr1 + separator + middleStr2;
		}
	}

	return processMaybeMarkers(
		leftStr + middleStr + rightStr
	);
}


// Format String Parsing
// ---------------------------------------------------------------------------------------------------------------------

var parsedFormatStrCache = {};

/*
Returns a parsed format string, leveraging a cache.
*/
function getParsedFormatString(formatStr) {
	return parsedFormatStrCache[formatStr] ||
		(parsedFormatStrCache[formatStr] = parseFormatString(formatStr));
}

/*
Parses a format string into the following:
- fakeFormatString: a momentJS formatting string, littered with special control characters that get post-processed.
- sameUnits: for every part in fakeFormatString, if the part is a token, the value will be a unit string (like "day"),
  that indicates how similar a range's start & end must be in order to share the same formatted text.
  If not a token, then the value is null.
  Always a flat array (not nested liked "chunks").
*/
function parseFormatString(formatStr) {
	var chunks = chunkFormatString(formatStr);
	
	return {
		fakeFormatString: buildFakeFormatString(chunks),
		sameUnits: buildSameUnits(chunks)
	};
}

/*
Break the formatting string into an array of chunks.
A 'maybe' chunk will have nested chunks.
*/
function chunkFormatString(formatStr) {
	var chunks = [];
	var match;

	// TODO: more descrimination
	// \4 is a backreference to the first character of a multi-character set.
	var chunker = /\[([^\]]*)\]|\(([^\)]*)\)|(LTS|LT|(\w)\4*o?)|([^\w\[\(]+)/g;

	while ((match = chunker.exec(formatStr))) {
		if (match[1]) { // a literal string inside [ ... ]
			chunks.push.apply(chunks, // append
				splitStringLiteral(match[1])
			);
		}
		else if (match[2]) { // non-zero formatting inside ( ... )
			chunks.push({ maybe: chunkFormatString(match[2]) });
		}
		else if (match[3]) { // a formatting token
			chunks.push({ token: match[3] });
		}
		else if (match[5]) { // an unenclosed literal string
			chunks.push.apply(chunks, // append
				splitStringLiteral(match[5])
			);
		}
	}

	return chunks;
}

/*
Potentially splits a literal-text string into multiple parts. For special cases.
*/
function splitStringLiteral(s) {
	if (s === '. ') {
		return [ '.', ' ' ]; // for locales with periods bound to the end of each year/month/date
	}
	else {
		return [ s ];
	}
}

/*
Given chunks parsed from a real format string, generate a fake (aka "intermediate") format string with special control
characters that will eventually be given to moment for formatting, and then post-processed.
*/
function buildFakeFormatString(chunks) {
	var parts = [];
	var i, chunk;

	for (i = 0; i < chunks.length; i++) {
		chunk = chunks[i];

		if (typeof chunk === 'string') {
			parts.push('[' + chunk + ']');
		}
		else if (chunk.token) {
			if (chunk.token in specialTokens) {
				parts.push(
					SPECIAL_TOKEN_MARKER + // useful during post-processing
					'[' + chunk.token + ']' // preserve as literal text
				);
			}
			else {
				parts.push(chunk.token); // unprotected text implies a format string
			}
		}
		else if (chunk.maybe) {
			parts.push(
				MAYBE_MARKER + // useful during post-processing
				buildFakeFormatString(chunk.maybe) +
				MAYBE_MARKER
			);
		}
	}

	return parts.join(PART_SEPARATOR);
}

/*
Given parsed chunks from a real formatting string, generates an array of unit strings (like "day") that indicate
in which regard two dates must be similar in order to share range formatting text.
The `chunks` can be nested (because of "maybe" chunks), however, the returned array will be flat.
*/
function buildSameUnits(chunks) {
	var units = [];
	var i, chunk;
	var tokenInfo;

	for (i = 0; i < chunks.length; i++) {
		chunk = chunks[i];

		if (chunk.token) {
			tokenInfo = largeTokenMap[chunk.token.charAt(0)];
			units.push(tokenInfo ? tokenInfo.unit : 'second'); // default to a very strict same-second
		}
		else if (chunk.maybe) {
			units.push.apply(units, // append
				buildSameUnits(chunk.maybe)
			);
		}
		else {
			units.push(null);
		}
	}

	return units;
}


// Rendering to text
// ---------------------------------------------------------------------------------------------------------------------

/*
Formats a date with a fake format string, post-processes the control characters, then returns.
*/
function renderFakeFormatString(fakeFormatString, date) {
	return processMaybeMarkers(
		renderFakeFormatStringParts(fakeFormatString, date).join('')
	);
}

/*
Formats a date into parts that will have been post-processed, EXCEPT for the "maybe" markers.
*/
function renderFakeFormatStringParts(fakeFormatString, date) {
	var parts = [];
	var fakeRender = oldMomentFormat(date, fakeFormatString);
	var fakeParts = fakeRender.split(PART_SEPARATOR);
	var i, fakePart;

	for (i = 0; i < fakeParts.length; i++) {
		fakePart = fakeParts[i];

		if (fakePart.charAt(0) === SPECIAL_TOKEN_MARKER) {
			parts.push(
				// the literal string IS the token's name.
				// call special token's registered function.
				specialTokens[fakePart.substring(1)](date)
			);
		}
		else {
			parts.push(fakePart);
		}
	}

	return parts;
}

/*
Accepts an almost-finally-formatted string and processes the "maybe" control characters, returning a new string.
*/
function processMaybeMarkers(s) {
	return s.replace(MAYBE_REGEXP, function(m0, m1) { // regex assumed to have 'g' flag
		if (m1.match(/[1-9]/)) { // any non-zero numeric characters?
			return m1;
		}
		else {
			return '';
		}
	});
}


// Misc Utils
// -------------------------------------------------------------------------------------------------

/*
Returns a unit string, either 'year', 'month', 'day', or null for the most granular formatting token in the string.
*/
function queryMostGranularFormatUnit(formatStr) {
	var chunks = chunkFormatString(formatStr);
	var i, chunk;
	var candidate;
	var best;

	for (i = 0; i < chunks.length; i++) {
		chunk = chunks[i];

		if (chunk.token) {
			candidate = largeTokenMap[chunk.token.charAt(0)];
			if (candidate) {
				if (!best || candidate.value > best.value) {
					best = candidate;
				}
			}
		}
	}

	if (best) {
		return best.unit;
	}

	return null;
};

})();

// quick local references
var formatDate = FC.formatDate;
var formatRange = FC.formatRange;
var oldMomentFormat = FC.oldMomentFormat;

;;

FC.Class = Class; // export

// Class that all other classes will inherit from
function Class() { }


// Called on a class to create a subclass.
// Last argument contains instance methods. Any argument before the last are considered mixins.
Class.extend = function() {
	var len = arguments.length;
	var i;
	var members;

	for (i = 0; i < len; i++) {
		members = arguments[i];
		if (i < len - 1) { // not the last argument?
			mixIntoClass(this, members);
		}
	}

	return extendClass(this, members || {}); // members will be undefined if no arguments
};


// Adds new member variables/methods to the class's prototype.
// Can be called with another class, or a plain object hash containing new members.
Class.mixin = function(members) {
	mixIntoClass(this, members);
};


function extendClass(superClass, members) {
	var subClass;

	// ensure a constructor for the subclass, forwarding all arguments to the super-constructor if it doesn't exist
	if (hasOwnProp(members, 'constructor')) {
		subClass = members.constructor;
	}
	if (typeof subClass !== 'function') {
		subClass = members.constructor = function() {
			superClass.apply(this, arguments);
		};
	}

	// build the base prototype for the subclass, which is an new object chained to the superclass's prototype
	subClass.prototype = createObject(superClass.prototype);

	// copy each member variable/method onto the the subclass's prototype
	copyOwnProps(members, subClass.prototype);

	// copy over all class variables/methods to the subclass, such as `extend` and `mixin`
	copyOwnProps(superClass, subClass);

	return subClass;
}


function mixIntoClass(theClass, members) {
	copyOwnProps(members, theClass.prototype);
}
;;

var Model = Class.extend(EmitterMixin, ListenerMixin, {

	_props: null,
	_watchers: null,
	_globalWatchArgs: null,

	constructor: function() {
		this._watchers = {};
		this._props = {};
		this.applyGlobalWatchers();
	},

	applyGlobalWatchers: function() {
		var argSets = this._globalWatchArgs || [];
		var i;

		for (i = 0; i < argSets.length; i++) {
			this.watch.apply(this, argSets[i]);
		}
	},

	has: function(name) {
		return name in this._props;
	},

	get: function(name) {
		if (name === undefined) {
			return this._props;
		}

		return this._props[name];
	},

	set: function(name, val) {
		var newProps;

		if (typeof name === 'string') {
			newProps = {};
			newProps[name] = val === undefined ? null : val;
		}
		else {
			newProps = name;
		}

		this.setProps(newProps);
	},

	reset: function(newProps) {
		var oldProps = this._props;
		var changeset = {}; // will have undefined's to signal unsets
		var name;

		for (name in oldProps) {
			changeset[name] = undefined;
		}

		for (name in newProps) {
			changeset[name] = newProps[name];
		}

		this.setProps(changeset);
	},

	unset: function(name) { // accepts a string or array of strings
		var newProps = {};
		var names;
		var i;

		if (typeof name === 'string') {
			names = [ name ];
		}
		else {
			names = name;
		}

		for (i = 0; i < names.length; i++) {
			newProps[names[i]] = undefined;
		}

		this.setProps(newProps);
	},

	setProps: function(newProps) {
		var changedProps = {};
		var changedCnt = 0;
		var name, val;

		for (name in newProps) {
			val = newProps[name];

			// a change in value?
			// if an object, don't check equality, because might have been mutated internally.
			// TODO: eventually enforce immutability.
			if (
				typeof val === 'object' ||
				val !== this._props[name]
			) {
				changedProps[name] = val;
				changedCnt++;
			}
		}

		if (changedCnt) {

			this.trigger('before:batchChange', changedProps);

			for (name in changedProps) {
				val = changedProps[name];

				this.trigger('before:change', name, val);
				this.trigger('before:change:' + name, val);
			}

			for (name in changedProps) {
				val = changedProps[name];

				if (val === undefined) {
					delete this._props[name];
				}
				else {
					this._props[name] = val;
				}

				this.trigger('change:' + name, val);
				this.trigger('change', name, val);
			}

			this.trigger('batchChange', changedProps);
		}
	},

	watch: function(name, depList, startFunc, stopFunc) {
		var _this = this;

		this.unwatch(name);

		this._watchers[name] = this._watchDeps(depList, function(deps) {
			var res = startFunc.call(_this, deps);

			if (res && res.then) {
				_this.unset(name); // put in an unset state while resolving
				res.then(function(val) {
					_this.set(name, val);
				});
			}
			else {
				_this.set(name, res);
			}
		}, function() {
			_this.unset(name);

			if (stopFunc) {
				stopFunc.call(_this);
			}
		});
	},

	unwatch: function(name) {
		var watcher = this._watchers[name];

		if (watcher) {
			delete this._watchers[name];
			watcher.teardown();
		}
	},

	_watchDeps: function(depList, startFunc, stopFunc) {
		var _this = this;
		var queuedChangeCnt = 0;
		var depCnt = depList.length;
		var satisfyCnt = 0;
		var values = {}; // what's passed as the `deps` arguments
		var bindTuples = []; // array of [ eventName, handlerFunc ] arrays
		var isCallingStop = false;

		function onBeforeDepChange(depName, val, isOptional) {
			queuedChangeCnt++;
			if (queuedChangeCnt === 1) { // first change to cause a "stop" ?
				if (satisfyCnt === depCnt) { // all deps previously satisfied?
					isCallingStop = true;
					stopFunc();
					isCallingStop = false;
				}
			}
		}

		function onDepChange(depName, val, isOptional) {

			if (val === undefined) { // unsetting a value?

				// required dependency that was previously set?
				if (!isOptional && values[depName] !== undefined) {
					satisfyCnt--;
				}

				delete values[depName];
			}
			else { // setting a value?

				// required dependency that was previously unset?
				if (!isOptional && values[depName] === undefined) {
					satisfyCnt++;
				}

				values[depName] = val;
			}

			queuedChangeCnt--;
			if (!queuedChangeCnt) { // last change to cause a "start"?

				// now finally satisfied or satisfied all along?
				if (satisfyCnt === depCnt) {

					// if the stopFunc initiated another value change, ignore it.
					// it will be processed by another change event anyway.
					if (!isCallingStop) {
						startFunc(values);
					}
				}
			}
		}

		// intercept for .on() that remembers handlers
		function bind(eventName, handler) {
			_this.on(eventName, handler);
			bindTuples.push([ eventName, handler ]);
		}

		// listen to dependency changes
		depList.forEach(function(depName) {
			var isOptional = false;

			if (depName.charAt(0) === '?') { // TODO: more DRY
				depName = depName.substring(1);
				isOptional = true;
			}

			bind('before:change:' + depName, function(val) {
				onBeforeDepChange(depName, val, isOptional);
			});

			bind('change:' + depName, function(val) {
				onDepChange(depName, val, isOptional);
			});
		});

		// process current dependency values
		depList.forEach(function(depName) {
			var isOptional = false;

			if (depName.charAt(0) === '?') { // TODO: more DRY
				depName = depName.substring(1);
				isOptional = true;
			}

			if (_this.has(depName)) {
				values[depName] = _this.get(depName);
				satisfyCnt++;
			}
			else if (isOptional) {
				satisfyCnt++;
			}
		});

		// initially satisfied
		if (satisfyCnt === depCnt) {
			startFunc(values);
		}

		return {
			teardown: function() {
				// remove all handlers
				for (var i = 0; i < bindTuples.length; i++) {
					_this.off(bindTuples[i][0], bindTuples[i][1]);
				}
				bindTuples = null;

				// was satisfied, so call stopFunc
				if (satisfyCnt === depCnt) {
					stopFunc();
				}
			},
			flash: function() {
				if (satisfyCnt === depCnt) {
					stopFunc();
					startFunc(values);
				}
			}
		};
	},

	flash: function(name) {
		var watcher = this._watchers[name];

		if (watcher) {
			watcher.flash();
		}
	}

});


Model.watch = function(/* same arguments as this.watch() */) {
	var proto = this.prototype;

	if (!proto._globalWatchArgs) {
		proto._globalWatchArgs = [];
	}

	proto._globalWatchArgs.push(arguments);
};


FC.Model = Model;


;;

var Promise = {

	construct: function(executor) {
		var deferred = $.Deferred();
		var promise = deferred.promise();

		if (typeof executor === 'function') {
			executor(
				function(val) { // resolve
					deferred.resolve(val);
					attachImmediatelyResolvingThen(promise, val);
				},
				function() { // reject
					deferred.reject();
					attachImmediatelyRejectingThen(promise);
				}
			);
		}

		return promise;
	},

	resolve: function(val) {
		var deferred = $.Deferred().resolve(val);
		var promise = deferred.promise();

		attachImmediatelyResolvingThen(promise, val);

		return promise;
	},

	reject: function() {
		var deferred = $.Deferred().reject();
		var promise = deferred.promise();

		attachImmediatelyRejectingThen(promise);

		return promise;
	}

};


function attachImmediatelyResolvingThen(promise, val) {
	promise.then = function(onResolve) {
		if (typeof onResolve === 'function') {
			onResolve(val);
		}
		return promise; // for chaining
	};
}


function attachImmediatelyRejectingThen(promise) {
	promise.then = function(onResolve, onReject) {
		if (typeof onReject === 'function') {
			onReject();
		}
		return promise; // for chaining
	};
}


FC.Promise = Promise;

;;

var TaskQueue = Class.extend(EmitterMixin, {

	q: null,
	isPaused: false,
	isRunning: false,


	constructor: function() {
		this.q = [];
	},


	queue: function(/* taskFunc, taskFunc... */) {
		this.q.push.apply(this.q, arguments); // append
		this.tryStart();
	},


	pause: function() {
		this.isPaused = true;
	},


	resume: function() {
		this.isPaused = false;
		this.tryStart();
	},


	tryStart: function() {
		if (!this.isRunning && this.canRunNext()) {
			this.isRunning = true;
			this.trigger('start');
			this.runNext();
		}
	},


	canRunNext: function() {
		return !this.isPaused && this.q.length;
	},


	runNext: function() { // does not check canRunNext
		this.runTask(this.q.shift());
	},


	runTask: function(task) {
		this.runTaskFunc(task);
	},


	runTaskFunc: function(taskFunc) {
		var _this = this;
		var res = taskFunc();

		if (res && res.then) {
			res.then(done);
		}
		else {
			done();
		}

		function done() {
			if (_this.canRunNext()) {
				_this.runNext();
			}
			else {
				_this.isRunning = false;
				_this.trigger('stop');
			}
		}
	}

});

FC.TaskQueue = TaskQueue;

;;

var RenderQueue = TaskQueue.extend({

	waitsByNamespace: null,
	waitNamespace: null,
	waitId: null,


	constructor: function(waitsByNamespace) {
		TaskQueue.call(this); // super-constructor

		this.waitsByNamespace = waitsByNamespace || {};
	},


	queue: function(taskFunc, namespace, type) {
		var task = {
			func: taskFunc,
			namespace: namespace,
			type: type
		};
		var waitMs;

		if (namespace) {
			waitMs = this.waitsByNamespace[namespace];
		}

		if (this.waitNamespace) {
			if (namespace === this.waitNamespace && waitMs != null) {
				this.delayWait(waitMs);
			}
			else {
				this.clearWait();
				this.tryStart();
			}
		}

		if (this.compoundTask(task)) { // appended to queue?

			if (!this.waitNamespace && waitMs != null) {
				this.startWait(namespace, waitMs);
			}
			else {
				this.tryStart();
			}
		}
	},


	startWait: function(namespace, waitMs) {
		this.waitNamespace = namespace;
		this.spawnWait(waitMs);
	},


	delayWait: function(waitMs) {
		clearTimeout(this.waitId);
		this.spawnWait(waitMs);
	},


	spawnWait: function(waitMs) {
		var _this = this;

		this.waitId = setTimeout(function() {
			_this.waitNamespace = null;
			_this.tryStart();
		}, waitMs);
	},


	clearWait: function() {
		if (this.waitNamespace) {
			clearTimeout(this.waitId);
			this.waitId = null;
			this.waitNamespace = null;
		}
	},


	canRunNext: function() {
		if (!TaskQueue.prototype.canRunNext.apply(this, arguments)) {
			return false;
		}

		// waiting for a certain namespace to stop receiving tasks?
		if (this.waitNamespace) {

			// if there was a different namespace task in the meantime,
			// that forces all previously-waiting tasks to suddenly execute.
			// TODO: find a way to do this in constant time.
			for (var q = this.q, i = 0; i < q.length; i++) {
				if (q[i].namespace !== this.waitNamespace) {
					return true; // allow execution
				}
			}

			return false;
		}

		return true;
	},


	runTask: function(task) {
		this.runTaskFunc(task.func);
	},


	compoundTask: function(newTask) {
		var q = this.q;
		var shouldAppend = true;
		var i, task;

		if (newTask.namespace) {

			if (newTask.type === 'destroy' || newTask.type === 'init') {

				// remove all add/remove ops with same namespace, regardless of order
				for (i = q.length - 1; i >= 0; i--) {
					task = q[i];

					if (
						task.namespace === newTask.namespace &&
						(task.type === 'add' || task.type === 'remove')
					) {
						q.splice(i, 1); // remove task
					}
				}

				if (newTask.type === 'destroy') {
					// eat away final init/destroy operation
					if (q.length) {
						task = q[q.length - 1]; // last task

						if (task.namespace === newTask.namespace) {

							// the init and our destroy cancel each other out
							if (task.type === 'init') {
								shouldAppend = false;
								q.pop();
							}
							// prefer to use the destroy operation that's already present
							else if (task.type === 'destroy') {
								shouldAppend = false;
							}
						}
					}
				}
				else if (newTask.type === 'init') {
					// eat away final init operation
					if (q.length) {
						task = q[q.length - 1]; // last task

						if (
							task.namespace === newTask.namespace &&
							task.type === 'init'
						) {
							// our init operation takes precedence
							q.pop();
						}
					}
				}
			}
		}

		if (shouldAppend) {
			q.push(newTask);
		}

		return shouldAppend;
	}

});

FC.RenderQueue = RenderQueue;

;;

var EmitterMixin = FC.EmitterMixin = {

	// jQuery-ification via $(this) allows a non-DOM object to have
	// the same event handling capabilities (including namespaces).


	on: function(types, handler) {
		$(this).on(types, this._prepareIntercept(handler));
		return this; // for chaining
	},


	one: function(types, handler) {
		$(this).one(types, this._prepareIntercept(handler));
		return this; // for chaining
	},


	_prepareIntercept: function(handler) {
		// handlers are always called with an "event" object as their first param.
		// sneak the `this` context and arguments into the extra parameter object
		// and forward them on to the original handler.
		var intercept = function(ev, extra) {
			return handler.apply(
				extra.context || this,
				extra.args || []
			);
		};

		// mimick jQuery's internal "proxy" system (risky, I know)
		// causing all functions with the same .guid to appear to be the same.
		// https://github.com/jquery/jquery/blob/2.2.4/src/core.js#L448
		// this is needed for calling .off with the original non-intercept handler.
		if (!handler.guid) {
			handler.guid = $.guid++;
		}
		intercept.guid = handler.guid;

		return intercept;
	},


	off: function(types, handler) {
		$(this).off(types, handler);

		return this; // for chaining
	},


	trigger: function(types) {
		var args = Array.prototype.slice.call(arguments, 1); // arguments after the first

		// pass in "extra" info to the intercept
		$(this).triggerHandler(types, { args: args });

		return this; // for chaining
	},


	triggerWith: function(types, context, args) {

		// `triggerHandler` is less reliant on the DOM compared to `trigger`.
		// pass in "extra" info to the intercept.
		$(this).triggerHandler(types, { context: context, args: args });

		return this; // for chaining
	}

};

;;

/*
Utility methods for easily listening to events on another object,
and more importantly, easily unlistening from them.
*/
var ListenerMixin = FC.ListenerMixin = (function() {
	var guid = 0;
	var ListenerMixin = {

		listenerId: null,

		/*
		Given an `other` object that has on/off methods, bind the given `callback` to an event by the given name.
		The `callback` will be called with the `this` context of the object that .listenTo is being called on.
		Can be called:
			.listenTo(other, eventName, callback)
		OR
			.listenTo(other, {
				eventName1: callback1,
				eventName2: callback2
			})
		*/
		listenTo: function(other, arg, callback) {
			if (typeof arg === 'object') { // given dictionary of callbacks
				for (var eventName in arg) {
					if (arg.hasOwnProperty(eventName)) {
						this.listenTo(other, eventName, arg[eventName]);
					}
				}
			}
			else if (typeof arg === 'string') {
				other.on(
					arg + '.' + this.getListenerNamespace(), // use event namespacing to identify this object
					$.proxy(callback, this) // always use `this` context
						// the usually-undesired jQuery guid behavior doesn't matter,
						// because we always unbind via namespace
				);
			}
		},

		/*
		Causes the current object to stop listening to events on the `other` object.
		`eventName` is optional. If omitted, will stop listening to ALL events on `other`.
		*/
		stopListeningTo: function(other, eventName) {
			other.off((eventName || '') + '.' + this.getListenerNamespace());
		},

		/*
		Returns a string, unique to this object, to be used for event namespacing
		*/
		getListenerNamespace: function() {
			if (this.listenerId == null) {
				this.listenerId = guid++;
			}
			return '_listener' + this.listenerId;
		}

	};
	return ListenerMixin;
})();
;;

/* A rectangular panel that is absolutely positioned over other content
------------------------------------------------------------------------------------------------------------------------
Options:
	- className (string)
	- content (HTML string or jQuery element set)
	- parentEl
	- top
	- left
	- right (the x coord of where the right edge should be. not a "CSS" right)
	- autoHide (boolean)
	- show (callback)
	- hide (callback)
*/

var Popover = Class.extend(ListenerMixin, {

	isHidden: true,
	options: null,
	el: null, // the container element for the popover. generated by this object
	margin: 10, // the space required between the popover and the edges of the scroll container


	constructor: function(options) {
		this.options = options || {};
	},


	// Shows the popover on the specified position. Renders it if not already
	show: function() {
		if (this.isHidden) {
			if (!this.el) {
				this.render();
			}
			this.el.show();
			this.position();
			this.isHidden = false;
			this.trigger('show');
		}
	},


	// Hides the popover, through CSS, but does not remove it from the DOM
	hide: function() {
		if (!this.isHidden) {
			this.el.hide();
			this.isHidden = true;
			this.trigger('hide');
		}
	},


	// Creates `this.el` and renders content inside of it
	render: function() {
		var _this = this;
		var options = this.options;

		this.el = $('<div class="fc-popover"/>')
			.addClass(options.className || '')
			.css({
				// position initially to the top left to avoid creating scrollbars
				top: 0,
				left: 0
			})
			.append(options.content)
			.appendTo(options.parentEl);

		// when a click happens on anything inside with a 'fc-close' className, hide the popover
		this.el.on('click', '.fc-close', function() {
			_this.hide();
		});

		if (options.autoHide) {
			this.listenTo($(document), 'mousedown', this.documentMousedown);
		}
	},


	// Triggered when the user clicks *anywhere* in the document, for the autoHide feature
	documentMousedown: function(ev) {
		// only hide the popover if the click happened outside the popover
		if (this.el && !$(ev.target).closest(this.el).length) {
			this.hide();
		}
	},


	// Hides and unregisters any handlers
	removeElement: function() {
		this.hide();

		if (this.el) {
			this.el.remove();
			this.el = null;
		}

		this.stopListeningTo($(document), 'mousedown');
	},


	// Positions the popover optimally, using the top/left/right options
	position: function() {
		var options = this.options;
		var origin = this.el.offsetParent().offset();
		var width = this.el.outerWidth();
		var height = this.el.outerHeight();
		var windowEl = $(window);
		var viewportEl = getScrollParent(this.el);
		var viewportTop;
		var viewportLeft;
		var viewportOffset;
		var top; // the "position" (not "offset") values for the popover
		var left; //

		// compute top and left
		top = options.top || 0;
		if (options.left !== undefined) {
			left = options.left;
		}
		else if (options.right !== undefined) {
			left = options.right - width; // derive the left value from the right value
		}
		else {
			left = 0;
		}

		if (viewportEl.is(window) || viewportEl.is(document)) { // normalize getScrollParent's result
			viewportEl = windowEl;
			viewportTop = 0; // the window is always at the top left
			viewportLeft = 0; // (and .offset() won't work if called here)
		}
		else {
			viewportOffset = viewportEl.offset();
			viewportTop = viewportOffset.top;
			viewportLeft = viewportOffset.left;
		}

		// if the window is scrolled, it causes the visible area to be further down
		viewportTop += windowEl.scrollTop();
		viewportLeft += windowEl.scrollLeft();

		// constrain to the view port. if constrained by two edges, give precedence to top/left
		if (options.viewportConstrain !== false) {
			top = Math.min(top, viewportTop + viewportEl.outerHeight() - height - this.margin);
			top = Math.max(top, viewportTop + this.margin);
			left = Math.min(left, viewportLeft + viewportEl.outerWidth() - width - this.margin);
			left = Math.max(left, viewportLeft + this.margin);
		}

		this.el.css({
			top: top - origin.top,
			left: left - origin.left
		});
	},


	// Triggers a callback. Calls a function in the option hash of the same name.
	// Arguments beyond the first `name` are forwarded on.
	// TODO: better code reuse for this. Repeat code
	trigger: function(name) {
		if (this.options[name]) {
			this.options[name].apply(this, Array.prototype.slice.call(arguments, 1));
		}
	}

});

;;

/*
A cache for the left/right/top/bottom/width/height values for one or more elements.
Works with both offset (from topleft document) and position (from offsetParent).

options:
- els
- isHorizontal
- isVertical
*/
var CoordCache = FC.CoordCache = Class.extend({

	els: null, // jQuery set (assumed to be siblings)
	forcedOffsetParentEl: null, // options can override the natural offsetParent
	origin: null, // {left,top} position of offsetParent of els
	boundingRect: null, // constrain cordinates to this rectangle. {left,right,top,bottom} or null
	isHorizontal: false, // whether to query for left/right/width
	isVertical: false, // whether to query for top/bottom/height

	// arrays of coordinates (offsets from topleft of document)
	lefts: null,
	rights: null,
	tops: null,
	bottoms: null,


	constructor: function(options) {
		this.els = $(options.els);
		this.isHorizontal = options.isHorizontal;
		this.isVertical = options.isVertical;
		this.forcedOffsetParentEl = options.offsetParent ? $(options.offsetParent) : null;
	},


	// Queries the els for coordinates and stores them.
	// Call this method before using and of the get* methods below.
	build: function() {
		var offsetParentEl = this.forcedOffsetParentEl;
		if (!offsetParentEl && this.els.length > 0) {
			offsetParentEl = this.els.eq(0).offsetParent();
		}

		this.origin = offsetParentEl ?
			offsetParentEl.offset() :
			null;

		this.boundingRect = this.queryBoundingRect();

		if (this.isHorizontal) {
			this.buildElHorizontals();
		}
		if (this.isVertical) {
			this.buildElVerticals();
		}
	},


	// Destroys all internal data about coordinates, freeing memory
	clear: function() {
		this.origin = null;
		this.boundingRect = null;
		this.lefts = null;
		this.rights = null;
		this.tops = null;
		this.bottoms = null;
	},


	// When called, if coord caches aren't built, builds them
	ensureBuilt: function() {
		if (!this.origin) {
			this.build();
		}
	},


	// Populates the left/right internal coordinate arrays
	buildElHorizontals: function() {
		var lefts = [];
		var rights = [];

		this.els.each(function(i, node) {
			var el = $(node);
			var left = el.offset().left;
			var width = el.outerWidth();

			lefts.push(left);
			rights.push(left + width);
		});

		this.lefts = lefts;
		this.rights = rights;
	},


	// Populates the top/bottom internal coordinate arrays
	buildElVerticals: function() {
		var tops = [];
		var bottoms = [];

		this.els.each(function(i, node) {
			var el = $(node);
			var top = el.offset().top;
			var height = el.outerHeight();

			tops.push(top);
			bottoms.push(top + height);
		});

		this.tops = tops;
		this.bottoms = bottoms;
	},


	// Given a left offset (from document left), returns the index of the el that it horizontally intersects.
	// If no intersection is made, returns undefined.
	getHorizontalIndex: function(leftOffset) {
		this.ensureBuilt();

		var lefts = this.lefts;
		var rights = this.rights;
		var len = lefts.length;
		var i;

		for (i = 0; i < len; i++) {
			if (leftOffset >= lefts[i] && leftOffset < rights[i]) {
				return i;
			}
		}
	},


	// Given a top offset (from document top), returns the index of the el that it vertically intersects.
	// If no intersection is made, returns undefined.
	getVerticalIndex: function(topOffset) {
		this.ensureBuilt();

		var tops = this.tops;
		var bottoms = this.bottoms;
		var len = tops.length;
		var i;

		for (i = 0; i < len; i++) {
			if (topOffset >= tops[i] && topOffset < bottoms[i]) {
				return i;
			}
		}
	},


	// Gets the left offset (from document left) of the element at the given index
	getLeftOffset: function(leftIndex) {
		this.ensureBuilt();
		return this.lefts[leftIndex];
	},


	// Gets the left position (from offsetParent left) of the element at the given index
	getLeftPosition: function(leftIndex) {
		this.ensureBuilt();
		return this.lefts[leftIndex] - this.origin.left;
	},


	// Gets the right offset (from document left) of the element at the given index.
	// This value is NOT relative to the document's right edge, like the CSS concept of "right" would be.
	getRightOffset: function(leftIndex) {
		this.ensureBuilt();
		return this.rights[leftIndex];
	},


	// Gets the right position (from offsetParent left) of the element at the given index.
	// This value is NOT relative to the offsetParent's right edge, like the CSS concept of "right" would be.
	getRightPosition: function(leftIndex) {
		this.ensureBuilt();
		return this.rights[leftIndex] - this.origin.left;
	},


	// Gets the width of the element at the given index
	getWidth: function(leftIndex) {
		this.ensureBuilt();
		return this.rights[leftIndex] - this.lefts[leftIndex];
	},


	// Gets the top offset (from document top) of the element at the given index
	getTopOffset: function(topIndex) {
		this.ensureBuilt();
		return this.tops[topIndex];
	},


	// Gets the top position (from offsetParent top) of the element at the given position
	getTopPosition: function(topIndex) {
		this.ensureBuilt();
		return this.tops[topIndex] - this.origin.top;
	},

	// Gets the bottom offset (from the document top) of the element at the given index.
	// This value is NOT relative to the offsetParent's bottom edge, like the CSS concept of "bottom" would be.
	getBottomOffset: function(topIndex) {
		this.ensureBuilt();
		return this.bottoms[topIndex];
	},


	// Gets the bottom position (from the offsetParent top) of the element at the given index.
	// This value is NOT relative to the offsetParent's bottom edge, like the CSS concept of "bottom" would be.
	getBottomPosition: function(topIndex) {
		this.ensureBuilt();
		return this.bottoms[topIndex] - this.origin.top;
	},


	// Gets the height of the element at the given index
	getHeight: function(topIndex) {
		this.ensureBuilt();
		return this.bottoms[topIndex] - this.tops[topIndex];
	},


	// Bounding Rect
	// TODO: decouple this from CoordCache

	// Compute and return what the elements' bounding rectangle is, from the user's perspective.
	// Right now, only returns a rectangle if constrained by an overflow:scroll element.
	// Returns null if there are no elements
	queryBoundingRect: function() {
		var scrollParentEl;

		if (this.els.length > 0) {
			scrollParentEl = getScrollParent(this.els.eq(0));

			if (!scrollParentEl.is(document)) {
				return getClientRect(scrollParentEl);
			}
		}

		return null;
	},

	isPointInBounds: function(leftOffset, topOffset) {
		return this.isLeftInBounds(leftOffset) && this.isTopInBounds(topOffset);
	},

	isLeftInBounds: function(leftOffset) {
		return !this.boundingRect || (leftOffset >= this.boundingRect.left && leftOffset < this.boundingRect.right);
	},

	isTopInBounds: function(topOffset) {
		return !this.boundingRect || (topOffset >= this.boundingRect.top && topOffset < this.boundingRect.bottom);
	}

});

;;

/* Tracks a drag's mouse movement, firing various handlers
----------------------------------------------------------------------------------------------------------------------*/
// TODO: use Emitter

var DragListener = FC.DragListener = Class.extend(ListenerMixin, {

	options: null,
	subjectEl: null,

	// coordinates of the initial mousedown
	originX: null,
	originY: null,

	// the wrapping element that scrolls, or MIGHT scroll if there's overflow.
	// TODO: do this for wrappers that have overflow:hidden as well.
	scrollEl: null,

	isInteracting: false,
	isDistanceSurpassed: false,
	isDelayEnded: false,
	isDragging: false,
	isTouch: false,
	isGeneric: false, // initiated by 'dragstart' (jqui)

	delay: null,
	delayTimeoutId: null,
	minDistance: null,

	shouldCancelTouchScroll: true,
	scrollAlwaysKills: false,


	constructor: function(options) {
		this.options = options || {};
	},


	// Interaction (high-level)
	// -----------------------------------------------------------------------------------------------------------------


	startInteraction: function(ev, extraOptions) {

		if (ev.type === 'mousedown') {
			if (GlobalEmitter.get().shouldIgnoreMouse()) {
				return;
			}
			else if (!isPrimaryMouseButton(ev)) {
				return;
			}
			else {
				ev.preventDefault(); // prevents native selection in most browsers
			}
		}

		if (!this.isInteracting) {

			// process options
			extraOptions = extraOptions || {};
			this.delay = firstDefined(extraOptions.delay, this.options.delay, 0);
			this.minDistance = firstDefined(extraOptions.distance, this.options.distance, 0);
			this.subjectEl = this.options.subjectEl;

			preventSelection($('body'));

			this.isInteracting = true;
			this.isTouch = getEvIsTouch(ev);
			this.isGeneric = ev.type === 'dragstart';
			this.isDelayEnded = false;
			this.isDistanceSurpassed = false;

			this.originX = getEvX(ev);
			this.originY = getEvY(ev);
			this.scrollEl = getScrollParent($(ev.target));

			this.bindHandlers();
			this.initAutoScroll();
			this.handleInteractionStart(ev);
			this.startDelay(ev);

			if (!this.minDistance) {
				this.handleDistanceSurpassed(ev);
			}
		}
	},


	handleInteractionStart: function(ev) {
		this.trigger('interactionStart', ev);
	},


	endInteraction: function(ev, isCancelled) {
		if (this.isInteracting) {
			this.endDrag(ev);

			if (this.delayTimeoutId) {
				clearTimeout(this.delayTimeoutId);
				this.delayTimeoutId = null;
			}

			this.destroyAutoScroll();
			this.unbindHandlers();

			this.isInteracting = false;
			this.handleInteractionEnd(ev, isCancelled);

			allowSelection($('body'));
		}
	},


	handleInteractionEnd: function(ev, isCancelled) {
		this.trigger('interactionEnd', ev, isCancelled || false);
	},


	// Binding To DOM
	// -----------------------------------------------------------------------------------------------------------------


	bindHandlers: function() {
		// some browsers (Safari in iOS 10) don't allow preventDefault on touch events that are bound after touchstart,
		// so listen to the GlobalEmitter singleton, which is always bound, instead of the document directly.
		var globalEmitter = GlobalEmitter.get();

		if (this.isGeneric) {
			this.listenTo($(document), { // might only work on iOS because of GlobalEmitter's bind :(
				drag: this.handleMove,
				dragstop: this.endInteraction
			});
		}
		else if (this.isTouch) {
			this.listenTo(globalEmitter, {
				touchmove: this.handleTouchMove,
				touchend: this.endInteraction,
				scroll: this.handleTouchScroll
			});
		}
		else {
			this.listenTo(globalEmitter, {
				mousemove: this.handleMouseMove,
				mouseup: this.endInteraction
			});
		}

		this.listenTo(globalEmitter, {
			selectstart: preventDefault, // don't allow selection while dragging
			contextmenu: preventDefault // long taps would open menu on Chrome dev tools
		});
	},


	unbindHandlers: function() {
		this.stopListeningTo(GlobalEmitter.get());
		this.stopListeningTo($(document)); // for isGeneric
	},


	// Drag (high-level)
	// -----------------------------------------------------------------------------------------------------------------


	// extraOptions ignored if drag already started
	startDrag: function(ev, extraOptions) {
		this.startInteraction(ev, extraOptions); // ensure interaction began

		if (!this.isDragging) {
			this.isDragging = true;
			this.handleDragStart(ev);
		}
	},


	handleDragStart: function(ev) {
		this.trigger('dragStart', ev);
	},


	handleMove: function(ev) {
		var dx = getEvX(ev) - this.originX;
		var dy = getEvY(ev) - this.originY;
		var minDistance = this.minDistance;
		var distanceSq; // current distance from the origin, squared

		if (!this.isDistanceSurpassed) {
			distanceSq = dx * dx + dy * dy;
			if (distanceSq >= minDistance * minDistance) { // use pythagorean theorem
				this.handleDistanceSurpassed(ev);
			}
		}

		if (this.isDragging) {
			this.handleDrag(dx, dy, ev);
		}
	},


	// Called while the mouse is being moved and when we know a legitimate drag is taking place
	handleDrag: function(dx, dy, ev) {
		this.trigger('drag', dx, dy, ev);
		this.updateAutoScroll(ev); // will possibly cause scrolling
	},


	endDrag: function(ev) {
		if (this.isDragging) {
			this.isDragging = false;
			this.handleDragEnd(ev);
		}
	},


	handleDragEnd: function(ev) {
		this.trigger('dragEnd', ev);
	},


	// Delay
	// -----------------------------------------------------------------------------------------------------------------


	startDelay: function(initialEv) {
		var _this = this;

		if (this.delay) {
			this.delayTimeoutId = setTimeout(function() {
				_this.handleDelayEnd(initialEv);
			}, this.delay);
		}
		else {
			this.handleDelayEnd(initialEv);
		}
	},


	handleDelayEnd: function(initialEv) {
		this.isDelayEnded = true;

		if (this.isDistanceSurpassed) {
			this.startDrag(initialEv);
		}
	},


	// Distance
	// -----------------------------------------------------------------------------------------------------------------


	handleDistanceSurpassed: function(ev) {
		this.isDistanceSurpassed = true;

		if (this.isDelayEnded) {
			this.startDrag(ev);
		}
	},


	// Mouse / Touch
	// -----------------------------------------------------------------------------------------------------------------


	handleTouchMove: function(ev) {

		// prevent inertia and touchmove-scrolling while dragging
		if (this.isDragging && this.shouldCancelTouchScroll) {
			ev.preventDefault();
		}

		this.handleMove(ev);
	},


	handleMouseMove: function(ev) {
		this.handleMove(ev);
	},


	// Scrolling (unrelated to auto-scroll)
	// -----------------------------------------------------------------------------------------------------------------


	handleTouchScroll: function(ev) {
		// if the drag is being initiated by touch, but a scroll happens before
		// the drag-initiating delay is over, cancel the drag
		if (!this.isDragging || this.scrollAlwaysKills) {
			this.endInteraction(ev, true); // isCancelled=true
		}
	},


	// Utils
	// -----------------------------------------------------------------------------------------------------------------


	// Triggers a callback. Calls a function in the option hash of the same name.
	// Arguments beyond the first `name` are forwarded on.
	trigger: function(name) {
		if (this.options[name]) {
			this.options[name].apply(this, Array.prototype.slice.call(arguments, 1));
		}
		// makes _methods callable by event name. TODO: kill this
		if (this['_' + name]) {
			this['_' + name].apply(this, Array.prototype.slice.call(arguments, 1));
		}
	}


});

;;
/*
this.scrollEl is set in DragListener
*/
DragListener.mixin({

	isAutoScroll: false,

	scrollBounds: null, // { top, bottom, left, right }
	scrollTopVel: null, // pixels per second
	scrollLeftVel: null, // pixels per second
	scrollIntervalId: null, // ID of setTimeout for scrolling animation loop

	// defaults
	scrollSensitivity: 30, // pixels from edge for scrolling to start
	scrollSpeed: 200, // pixels per second, at maximum speed
	scrollIntervalMs: 50, // millisecond wait between scroll increment


	initAutoScroll: function() {
		var scrollEl = this.scrollEl;

		this.isAutoScroll =
			this.options.scroll &&
			scrollEl &&
			!scrollEl.is(window) &&
			!scrollEl.is(document);

		if (this.isAutoScroll) {
			// debounce makes sure rapid calls don't happen
			this.listenTo(scrollEl, 'scroll', debounce(this.handleDebouncedScroll, 100));
		}
	},


	destroyAutoScroll: function() {
		this.endAutoScroll(); // kill any animation loop

		// remove the scroll handler if there is a scrollEl
		if (this.isAutoScroll) {
			this.stopListeningTo(this.scrollEl, 'scroll'); // will probably get removed by unbindHandlers too :(
		}
	},


	// Computes and stores the bounding rectangle of scrollEl
	computeScrollBounds: function() {
		if (this.isAutoScroll) {
			this.scrollBounds = getOuterRect(this.scrollEl);
			// TODO: use getClientRect in future. but prevents auto scrolling when on top of scrollbars
		}
	},


	// Called when the dragging is in progress and scrolling should be updated
	updateAutoScroll: function(ev) {
		var sensitivity = this.scrollSensitivity;
		var bounds = this.scrollBounds;
		var topCloseness, bottomCloseness;
		var leftCloseness, rightCloseness;
		var topVel = 0;
		var leftVel = 0;

		if (bounds) { // only scroll if scrollEl exists

			// compute closeness to edges. valid range is from 0.0 - 1.0
			topCloseness = (sensitivity - (getEvY(ev) - bounds.top)) / sensitivity;
			bottomCloseness = (sensitivity - (bounds.bottom - getEvY(ev))) / sensitivity;
			leftCloseness = (sensitivity - (getEvX(ev) - bounds.left)) / sensitivity;
			rightCloseness = (sensitivity - (bounds.right - getEvX(ev))) / sensitivity;

			// translate vertical closeness into velocity.
			// mouse must be completely in bounds for velocity to happen.
			if (topCloseness >= 0 && topCloseness <= 1) {
				topVel = topCloseness * this.scrollSpeed * -1; // negative. for scrolling up
			}
			else if (bottomCloseness >= 0 && bottomCloseness <= 1) {
				topVel = bottomCloseness * this.scrollSpeed;
			}

			// translate horizontal closeness into velocity
			if (leftCloseness >= 0 && leftCloseness <= 1) {
				leftVel = leftCloseness * this.scrollSpeed * -1; // negative. for scrolling left
			}
			else if (rightCloseness >= 0 && rightCloseness <= 1) {
				leftVel = rightCloseness * this.scrollSpeed;
			}
		}

		this.setScrollVel(topVel, leftVel);
	},


	// Sets the speed-of-scrolling for the scrollEl
	setScrollVel: function(topVel, leftVel) {

		this.scrollTopVel = topVel;
		this.scrollLeftVel = leftVel;

		this.constrainScrollVel(); // massages into realistic values

		// if there is non-zero velocity, and an animation loop hasn't already started, then START
		if ((this.scrollTopVel || this.scrollLeftVel) && !this.scrollIntervalId) {
			this.scrollIntervalId = setInterval(
				proxy(this, 'scrollIntervalFunc'), // scope to `this`
				this.scrollIntervalMs
			);
		}
	},


	// Forces scrollTopVel and scrollLeftVel to be zero if scrolling has already gone all the way
	constrainScrollVel: function() {
		var el = this.scrollEl;

		if (this.scrollTopVel < 0) { // scrolling up?
			if (el.scrollTop() <= 0) { // already scrolled all the way up?
				this.scrollTopVel = 0;
			}
		}
		else if (this.scrollTopVel > 0) { // scrolling down?
			if (el.scrollTop() + el[0].clientHeight >= el[0].scrollHeight) { // already scrolled all the way down?
				this.scrollTopVel = 0;
			}
		}

		if (this.scrollLeftVel < 0) { // scrolling left?
			if (el.scrollLeft() <= 0) { // already scrolled all the left?
				this.scrollLeftVel = 0;
			}
		}
		else if (this.scrollLeftVel > 0) { // scrolling right?
			if (el.scrollLeft() + el[0].clientWidth >= el[0].scrollWidth) { // already scrolled all the way right?
				this.scrollLeftVel = 0;
			}
		}
	},


	// This function gets called during every iteration of the scrolling animation loop
	scrollIntervalFunc: function() {
		var el = this.scrollEl;
		var frac = this.scrollIntervalMs / 1000; // considering animation frequency, what the vel should be mult'd by

		// change the value of scrollEl's scroll
		if (this.scrollTopVel) {
			el.scrollTop(el.scrollTop() + this.scrollTopVel * frac);
		}
		if (this.scrollLeftVel) {
			el.scrollLeft(el.scrollLeft() + this.scrollLeftVel * frac);
		}

		this.constrainScrollVel(); // since the scroll values changed, recompute the velocities

		// if scrolled all the way, which causes the vels to be zero, stop the animation loop
		if (!this.scrollTopVel && !this.scrollLeftVel) {
			this.endAutoScroll();
		}
	},


	// Kills any existing scrolling animation loop
	endAutoScroll: function() {
		if (this.scrollIntervalId) {
			clearInterval(this.scrollIntervalId);
			this.scrollIntervalId = null;

			this.handleScrollEnd();
		}
	},


	// Get called when the scrollEl is scrolled (NOTE: this is delayed via debounce)
	handleDebouncedScroll: function() {
		// recompute all coordinates, but *only* if this is *not* part of our scrolling animation
		if (!this.scrollIntervalId) {
			this.handleScrollEnd();
		}
	},


	// Called when scrolling has stopped, whether through auto scroll, or the user scrolling
	handleScrollEnd: function() {
	}

});
;;

/* Tracks mouse movements over a component and raises events about which hit the mouse is over.
------------------------------------------------------------------------------------------------------------------------
options:
- subjectEl
- subjectCenter
*/

var HitDragListener = DragListener.extend({

	component: null, // converts coordinates to hits
		// methods: hitsNeeded, hitsNotNeeded, queryHit

	origHit: null, // the hit the mouse was over when listening started
	hit: null, // the hit the mouse is over
	coordAdjust: null, // delta that will be added to the mouse coordinates when computing collisions


	constructor: function(component, options) {
		DragListener.call(this, options); // call the super-constructor

		this.component = component;
	},


	// Called when drag listening starts (but a real drag has not necessarily began).
	// ev might be undefined if dragging was started manually.
	handleInteractionStart: function(ev) {
		var subjectEl = this.subjectEl;
		var subjectRect;
		var origPoint;
		var point;

		this.component.hitsNeeded();
		this.computeScrollBounds(); // for autoscroll

		if (ev) {
			origPoint = { left: getEvX(ev), top: getEvY(ev) };
			point = origPoint;

			// constrain the point to bounds of the element being dragged
			if (subjectEl) {
				subjectRect = getOuterRect(subjectEl); // used for centering as well
				point = constrainPoint(point, subjectRect);
			}

			this.origHit = this.queryHit(point.left, point.top);

			// treat the center of the subject as the collision point?
			if (subjectEl && this.options.subjectCenter) {

				// only consider the area the subject overlaps the hit. best for large subjects.
				// TODO: skip this if hit didn't supply left/right/top/bottom
				if (this.origHit) {
					subjectRect = intersectRects(this.origHit, subjectRect) ||
						subjectRect; // in case there is no intersection
				}

				point = getRectCenter(subjectRect);
			}

			this.coordAdjust = diffPoints(point, origPoint); // point - origPoint
		}
		else {
			this.origHit = null;
			this.coordAdjust = null;
		}

		// call the super-method. do it after origHit has been computed
		DragListener.prototype.handleInteractionStart.apply(this, arguments);
	},


	// Called when the actual drag has started
	handleDragStart: function(ev) {
		var hit;

		DragListener.prototype.handleDragStart.apply(this, arguments); // call the super-method

		// might be different from this.origHit if the min-distance is large
		hit = this.queryHit(getEvX(ev), getEvY(ev));

		// report the initial hit the mouse is over
		// especially important if no min-distance and drag starts immediately
		if (hit) {
			this.handleHitOver(hit);
		}
	},


	// Called when the drag moves
	handleDrag: function(dx, dy, ev) {
		var hit;

		DragListener.prototype.handleDrag.apply(this, arguments); // call the super-method

		hit = this.queryHit(getEvX(ev), getEvY(ev));

		if (!isHitsEqual(hit, this.hit)) { // a different hit than before?
			if (this.hit) {
				this.handleHitOut();
			}
			if (hit) {
				this.handleHitOver(hit);
			}
		}
	},


	// Called when dragging has been stopped
	handleDragEnd: function() {
		this.handleHitDone();
		DragListener.prototype.handleDragEnd.apply(this, arguments); // call the super-method
	},


	// Called when a the mouse has just moved over a new hit
	handleHitOver: function(hit) {
		var isOrig = isHitsEqual(hit, this.origHit);

		this.hit = hit;

		this.trigger('hitOver', this.hit, isOrig, this.origHit);
	},


	// Called when the mouse has just moved out of a hit
	handleHitOut: function() {
		if (this.hit) {
			this.trigger('hitOut', this.hit);
			this.handleHitDone();
			this.hit = null;
		}
	},


	// Called after a hitOut. Also called before a dragStop
	handleHitDone: function() {
		if (this.hit) {
			this.trigger('hitDone', this.hit);
		}
	},


	// Called when the interaction ends, whether there was a real drag or not
	handleInteractionEnd: function() {
		DragListener.prototype.handleInteractionEnd.apply(this, arguments); // call the super-method

		this.origHit = null;
		this.hit = null;

		this.component.hitsNotNeeded();
	},


	// Called when scrolling has stopped, whether through auto scroll, or the user scrolling
	handleScrollEnd: function() {
		DragListener.prototype.handleScrollEnd.apply(this, arguments); // call the super-method

		// hits' absolute positions will be in new places after a user's scroll.
		// HACK for recomputing.
		if (this.isDragging) {
			this.component.releaseHits();
			this.component.prepareHits();
		}
	},


	// Gets the hit underneath the coordinates for the given mouse event
	queryHit: function(left, top) {

		if (this.coordAdjust) {
			left += this.coordAdjust.left;
			top += this.coordAdjust.top;
		}

		return this.component.queryHit(left, top);
	}

});


// Returns `true` if the hits are identically equal. `false` otherwise. Must be from the same component.
// Two null values will be considered equal, as two "out of the component" states are the same.
function isHitsEqual(hit0, hit1) {

	if (!hit0 && !hit1) {
		return true;
	}

	if (hit0 && hit1) {
		return hit0.component === hit1.component &&
			isHitPropsWithin(hit0, hit1) &&
			isHitPropsWithin(hit1, hit0); // ensures all props are identical
	}

	return false;
}


// Returns true if all of subHit's non-standard properties are within superHit
function isHitPropsWithin(subHit, superHit) {
	for (var propName in subHit) {
		if (!/^(component|left|right|top|bottom)$/.test(propName)) {
			if (subHit[propName] !== superHit[propName]) {
				return false;
			}
		}
	}
	return true;
}

;;

/*
Listens to document and window-level user-interaction events, like touch events and mouse events,
and fires these events as-is to whoever is observing a GlobalEmitter.
Best when used as a singleton via GlobalEmitter.get()

Normalizes mouse/touch events. For examples:
- ignores the the simulated mouse events that happen after a quick tap: mousemove+mousedown+mouseup+click
- compensates for various buggy scenarios where a touchend does not fire
*/

FC.touchMouseIgnoreWait = 500;

var GlobalEmitter = Class.extend(ListenerMixin, EmitterMixin, {

	isTouching: false,
	mouseIgnoreDepth: 0,
	handleScrollProxy: null,


	bind: function() {
		var _this = this;

		this.listenTo($(document), {
			touchstart: this.handleTouchStart,
			touchcancel: this.handleTouchCancel,
			touchend: this.handleTouchEnd,
			mousedown: this.handleMouseDown,
			mousemove: this.handleMouseMove,
			mouseup: this.handleMouseUp,
			click: this.handleClick,
			selectstart: this.handleSelectStart,
			contextmenu: this.handleContextMenu
		});

		// because we need to call preventDefault
		// because https://www.chromestatus.com/features/5093566007214080
		// TODO: investigate performance because this is a global handler
		window.addEventListener(
			'touchmove',
			this.handleTouchMoveProxy = function(ev) {
				_this.handleTouchMove($.Event(ev));
			},
			{ passive: false } // allows preventDefault()
		);

		// attach a handler to get called when ANY scroll action happens on the page.
		// this was impossible to do with normal on/off because 'scroll' doesn't bubble.
		// http://stackoverflow.com/a/32954565/96342
		window.addEventListener(
			'scroll',
			this.handleScrollProxy = function(ev) {
				_this.handleScroll($.Event(ev));
			},
			true // useCapture
		);
	},

	unbind: function() {
		this.stopListeningTo($(document));

		window.removeEventListener(
			'touchmove',
			this.handleTouchMoveProxy
		);

		window.removeEventListener(
			'scroll',
			this.handleScrollProxy,
			true // useCapture
		);
	},


	// Touch Handlers
	// -----------------------------------------------------------------------------------------------------------------

	handleTouchStart: function(ev) {

		// if a previous touch interaction never ended with a touchend, then implicitly end it,
		// but since a new touch interaction is about to begin, don't start the mouse ignore period.
		this.stopTouch(ev, true); // skipMouseIgnore=true

		this.isTouching = true;
		this.trigger('touchstart', ev);
	},

	handleTouchMove: function(ev) {
		if (this.isTouching) {
			this.trigger('touchmove', ev);
		}
	},

	handleTouchCancel: function(ev) {
		if (this.isTouching) {
			this.trigger('touchcancel', ev);

			// Have touchcancel fire an artificial touchend. That way, handlers won't need to listen to both.
			// If touchend fires later, it won't have any effect b/c isTouching will be false.
			this.stopTouch(ev);
		}
	},

	handleTouchEnd: function(ev) {
		this.stopTouch(ev);
	},


	// Mouse Handlers
	// -----------------------------------------------------------------------------------------------------------------

	handleMouseDown: function(ev) {
		if (!this.shouldIgnoreMouse()) {
			this.trigger('mousedown', ev);
		}
	},

	handleMouseMove: function(ev) {
		if (!this.shouldIgnoreMouse()) {
			this.trigger('mousemove', ev);
		}
	},

	handleMouseUp: function(ev) {
		if (!this.shouldIgnoreMouse()) {
			this.trigger('mouseup', ev);
		}
	},

	handleClick: function(ev) {
		if (!this.shouldIgnoreMouse()) {
			this.trigger('click', ev);
		}
	},


	// Misc Handlers
	// -----------------------------------------------------------------------------------------------------------------

	handleSelectStart: function(ev) {
		this.trigger('selectstart', ev);
	},

	handleContextMenu: function(ev) {
		this.trigger('contextmenu', ev);
	},

	handleScroll: function(ev) {
		this.trigger('scroll', ev);
	},


	// Utils
	// -----------------------------------------------------------------------------------------------------------------

	stopTouch: function(ev, skipMouseIgnore) {
		if (this.isTouching) {
			this.isTouching = false;
			this.trigger('touchend', ev);

			if (!skipMouseIgnore) {
				this.startTouchMouseIgnore();
			}
		}
	},

	startTouchMouseIgnore: function() {
		var _this = this;
		var wait = FC.touchMouseIgnoreWait;

		if (wait) {
			this.mouseIgnoreDepth++;
			setTimeout(function() {
				_this.mouseIgnoreDepth--;
			}, wait);
		}
	},

	shouldIgnoreMouse: function() {
		return this.isTouching || Boolean(this.mouseIgnoreDepth);
	}

});


// Singleton
// ---------------------------------------------------------------------------------------------------------------------

(function() {
	var globalEmitter = null;
	var neededCount = 0;


	// gets the singleton
	GlobalEmitter.get = function() {

		if (!globalEmitter) {
			globalEmitter = new GlobalEmitter();
			globalEmitter.bind();
		}

		return globalEmitter;
	};


	// called when an object knows it will need a GlobalEmitter in the near future.
	GlobalEmitter.needed = function() {
		GlobalEmitter.get(); // ensures globalEmitter
		neededCount++;
	};


	// called when the object that originally called needed() doesn't need a GlobalEmitter anymore.
	GlobalEmitter.unneeded = function() {
		neededCount--;

		if (!neededCount) { // nobody else needs it
			globalEmitter.unbind();
			globalEmitter = null;
		}
	};

})();

;;

/* Creates a clone of an element and lets it track the mouse as it moves
----------------------------------------------------------------------------------------------------------------------*/

var MouseFollower = Class.extend(ListenerMixin, {

	options: null,

	sourceEl: null, // the element that will be cloned and made to look like it is dragging
	el: null, // the clone of `sourceEl` that will track the mouse
	parentEl: null, // the element that `el` (the clone) will be attached to

	// the initial position of el, relative to the offset parent. made to match the initial offset of sourceEl
	top0: null,
	left0: null,

	// the absolute coordinates of the initiating touch/mouse action
	y0: null,
	x0: null,

	// the number of pixels the mouse has moved from its initial position
	topDelta: null,
	leftDelta: null,

	isFollowing: false,
	isHidden: false,
	isAnimating: false, // doing the revert animation?

	constructor: function(sourceEl, options) {
		this.options = options = options || {};
		this.sourceEl = sourceEl;
		this.parentEl = options.parentEl ? $(options.parentEl) : sourceEl.parent(); // default to sourceEl's parent
	},


	// Causes the element to start following the mouse
	start: function(ev) {
		if (!this.isFollowing) {
			this.isFollowing = true;

			this.y0 = getEvY(ev);
			this.x0 = getEvX(ev);
			this.topDelta = 0;
			this.leftDelta = 0;

			if (!this.isHidden) {
				this.updatePosition();
			}

			if (getEvIsTouch(ev)) {
				this.listenTo($(document), 'touchmove', this.handleMove);
			}
			else {
				this.listenTo($(document), 'mousemove', this.handleMove);
			}
		}
	},


	// Causes the element to stop following the mouse. If shouldRevert is true, will animate back to original position.
	// `callback` gets invoked when the animation is complete. If no animation, it is invoked immediately.
	stop: function(shouldRevert, callback) {
		var _this = this;
		var revertDuration = this.options.revertDuration;

		function complete() { // might be called by .animate(), which might change `this` context
			_this.isAnimating = false;
			_this.removeElement();

			_this.top0 = _this.left0 = null; // reset state for future updatePosition calls

			if (callback) {
				callback();
			}
		}

		if (this.isFollowing && !this.isAnimating) { // disallow more than one stop animation at a time
			this.isFollowing = false;

			this.stopListeningTo($(document));

			if (shouldRevert && revertDuration && !this.isHidden) { // do a revert animation?
				this.isAnimating = true;
				this.el.animate({
					top: this.top0,
					left: this.left0
				}, {
					duration: revertDuration,
					complete: complete
				});
			}
			else {
				complete();
			}
		}
	},


	// Gets the tracking element. Create it if necessary
	getEl: function() {
		var el = this.el;

		if (!el) {
			el = this.el = this.sourceEl.clone()
				.addClass(this.options.additionalClass || '')
				.css({
					position: 'absolute',
					visibility: '', // in case original element was hidden (commonly through hideEvents())
					display: this.isHidden ? 'none' : '', // for when initially hidden
					margin: 0,
					right: 'auto', // erase and set width instead
					bottom: 'auto', // erase and set height instead
					width: this.sourceEl.width(), // explicit height in case there was a 'right' value
					height: this.sourceEl.height(), // explicit width in case there was a 'bottom' value
					opacity: this.options.opacity || '',
					zIndex: this.options.zIndex
				});

			// we don't want long taps or any mouse interaction causing selection/menus.
			// would use preventSelection(), but that prevents selectstart, causing problems.
			el.addClass('fc-unselectable');

			el.appendTo(this.parentEl);
		}

		return el;
	},


	// Removes the tracking element if it has already been created
	removeElement: function() {
		if (this.el) {
			this.el.remove();
			this.el = null;
		}
	},


	// Update the CSS position of the tracking element
	updatePosition: function() {
		var sourceOffset;
		var origin;

		this.getEl(); // ensure this.el

		// make sure origin info was computed
		if (this.top0 === null) {
			sourceOffset = this.sourceEl.offset();
			origin = this.el.offsetParent().offset();
			this.top0 = sourceOffset.top - origin.top;
			this.left0 = sourceOffset.left - origin.left;
		}

		this.el.css({
			top: this.top0 + this.topDelta,
			left: this.left0 + this.leftDelta
		});
	},


	// Gets called when the user moves the mouse
	handleMove: function(ev) {
		this.topDelta = getEvY(ev) - this.y0;
		this.leftDelta = getEvX(ev) - this.x0;

		if (!this.isHidden) {
			this.updatePosition();
		}
	},


	// Temporarily makes the tracking element invisible. Can be called before following starts
	hide: function() {
		if (!this.isHidden) {
			this.isHidden = true;
			if (this.el) {
				this.el.hide();
			}
		}
	},


	// Show the tracking element after it has been temporarily hidden
	show: function() {
		if (this.isHidden) {
			this.isHidden = false;
			this.updatePosition();
			this.getEl().show();
		}
	}

});

;;

/* An abstract class comprised of a "grid" of areas that each represent a specific datetime
----------------------------------------------------------------------------------------------------------------------*/

var Grid = FC.Grid = Class.extend(ListenerMixin, {

	// self-config, overridable by subclasses
	hasDayInteractions: true, // can user click/select ranges of time?

	view: null, // a View object
	isRTL: null, // shortcut to the view's isRTL option

	start: null,
	end: null,

	el: null, // the containing element
	elsByFill: null, // a hash of jQuery element sets used for rendering each fill. Keyed by fill name.

	// derived from options
	eventTimeFormat: null,
	displayEventTime: null,
	displayEventEnd: null,

	minResizeDuration: null, // TODO: hack. set by subclasses. minumum event resize duration

	// if defined, holds the unit identified (ex: "year" or "month") that determines the level of granularity
	// of the date areas. if not defined, assumes to be day and time granularity.
	// TODO: port isTimeScale into same system?
	largeUnit: null,

	dayClickListener: null,
	daySelectListener: null,
	segDragListener: null,
	segResizeListener: null,
	externalDragListener: null,


	constructor: function(view) {
		this.view = view;
		this.isRTL = view.opt('isRTL');
		this.elsByFill = {};

		this.dayClickListener = this.buildDayClickListener();
		this.daySelectListener = this.buildDaySelectListener();
	},


	/* Options
	------------------------------------------------------------------------------------------------------------------*/


	// Generates the format string used for event time text, if not explicitly defined by 'timeFormat'
	computeEventTimeFormat: function() {
		return this.view.opt('smallTimeFormat');
	},


	// Determines whether events should have their end times displayed, if not explicitly defined by 'displayEventTime'.
	// Only applies to non-all-day events.
	computeDisplayEventTime: function() {
		return true;
	},


	// Determines whether events should have their end times displayed, if not explicitly defined by 'displayEventEnd'
	computeDisplayEventEnd: function() {
		return true;
	},


	/* Dates
	------------------------------------------------------------------------------------------------------------------*/


	// Tells the grid about what period of time to display.
	// Any date-related internal data should be generated.
	setRange: function(range) {
		this.start = range.start.clone();
		this.end = range.end.clone();

		this.rangeUpdated();
		this.processRangeOptions();
	},


	// Called when internal variables that rely on the range should be updated
	rangeUpdated: function() {
	},


	// Updates values that rely on options and also relate to range
	processRangeOptions: function() {
		var view = this.view;
		var displayEventTime;
		var displayEventEnd;

		this.eventTimeFormat =
			view.opt('eventTimeFormat') ||
			view.opt('timeFormat') || // deprecated
			this.computeEventTimeFormat();

		displayEventTime = view.opt('displayEventTime');
		if (displayEventTime == null) {
			displayEventTime = this.computeDisplayEventTime(); // might be based off of range
		}

		displayEventEnd = view.opt('displayEventEnd');
		if (displayEventEnd == null) {
			displayEventEnd = this.computeDisplayEventEnd(); // might be based off of range
		}

		this.displayEventTime = displayEventTime;
		this.displayEventEnd = displayEventEnd;
	},


	// Converts a span (has unzoned start/end and any other grid-specific location information)
	// into an array of segments (pieces of events whose format is decided by the grid).
	spanToSegs: function(span) {
		// subclasses must implement
	},


	// Diffs the two dates, returning a duration, based on granularity of the grid
	// TODO: port isTimeScale into this system?
	diffDates: function(a, b) {
		if (this.largeUnit) {
			return diffByUnit(a, b, this.largeUnit);
		}
		else {
			return diffDayTime(a, b);
		}
	},


	/* Hit Area
	------------------------------------------------------------------------------------------------------------------*/

	hitsNeededDepth: 0, // necessary because multiple callers might need the same hits

	hitsNeeded: function() {
		if (!(this.hitsNeededDepth++)) {
			this.prepareHits();
		}
	},

	hitsNotNeeded: function() {
		if (this.hitsNeededDepth && !(--this.hitsNeededDepth)) {
			this.releaseHits();
		}
	},


	// Called before one or more queryHit calls might happen. Should prepare any cached coordinates for queryHit
	prepareHits: function() {
	},


	// Called when queryHit calls have subsided. Good place to clear any coordinate caches.
	releaseHits: function() {
	},


	// Given coordinates from the topleft of the document, return data about the date-related area underneath.
	// Can return an object with arbitrary properties (although top/right/left/bottom are encouraged).
	// Must have a `grid` property, a reference to this current grid. TODO: avoid this
	// The returned object will be processed by getHitSpan and getHitEl.
	queryHit: function(leftOffset, topOffset) {
	},


	// like getHitSpan, but returns null if the resulting span's range is invalid
	getSafeHitSpan: function(hit) {
		var hitSpan = this.getHitSpan(hit);

		if (!isRangeWithinRange(hitSpan, this.view.activeRange)) {
			return null;
		}

		return hitSpan;
	},


	// Given position-level information about a date-related area within the grid,
	// should return an object with at least a start/end date. Can provide other information as well.
	getHitSpan: function(hit) {
	},


	// Given position-level information about a date-related area within the grid,
	// should return a jQuery element that best represents it. passed to dayClick callback.
	getHitEl: function(hit) {
	},


	/* Rendering
	------------------------------------------------------------------------------------------------------------------*/


	// Sets the container element that the grid should render inside of.
	// Does other DOM-related initializations.
	setElement: function(el) {
		this.el = el;

		if (this.hasDayInteractions) {
			preventSelection(el);

			this.bindDayHandler('touchstart', this.dayTouchStart);
			this.bindDayHandler('mousedown', this.dayMousedown);
		}

		// attach event-element-related handlers. in Grid.events
		// same garbage collection note as above.
		this.bindSegHandlers();

		this.bindGlobalHandlers();
	},


	bindDayHandler: function(name, handler) {
		var _this = this;

		// attach a handler to the grid's root element.
		// jQuery will take care of unregistering them when removeElement gets called.
		this.el.on(name, function(ev) {
			if (
				!$(ev.target).is(
					_this.segSelector + ',' + // directly on an event element
					_this.segSelector + ' *,' + // within an event element
					'.fc-more,' + // a "more.." link
					'a[data-goto]' // a clickable nav link
				)
			) {
				return handler.call(_this, ev);
			}
		});
	},


	// Removes the grid's container element from the DOM. Undoes any other DOM-related attachments.
	// DOES NOT remove any content beforehand (doesn't clear events or call unrenderDates), unlike View
	removeElement: function() {
		this.unbindGlobalHandlers();
		this.clearDragListeners();

		this.el.remove();

		// NOTE: we don't null-out this.el for the same reasons we don't do it within View::removeElement
	},


	// Renders the basic structure of grid view before any content is rendered
	renderSkeleton: function() {
		// subclasses should implement
	},


	// Renders the grid's date-related content (like areas that represent days/times).
	// Assumes setRange has already been called and the skeleton has already been rendered.
	renderDates: function() {
		// subclasses should implement
	},


	// Unrenders the grid's date-related content
	unrenderDates: function() {
		// subclasses should implement
	},


	/* Handlers
	------------------------------------------------------------------------------------------------------------------*/


	// Binds DOM handlers to elements that reside outside the grid, such as the document
	bindGlobalHandlers: function() {
		this.listenTo($(document), {
			dragstart: this.externalDragStart, // jqui
			sortstart: this.externalDragStart // jqui
		});
	},


	// Unbinds DOM handlers from elements that reside outside the grid
	unbindGlobalHandlers: function() {
		this.stopListeningTo($(document));
	},


	// Process a mousedown on an element that represents a day. For day clicking and selecting.
	dayMousedown: function(ev) {
		var view = this.view;

		// HACK
		// This will still work even though bindDayHandler doesn't use GlobalEmitter.
		if (GlobalEmitter.get().shouldIgnoreMouse()) {
			return;
		}

		this.dayClickListener.startInteraction(ev);

		if (view.opt('selectable')) {
			this.daySelectListener.startInteraction(ev, {
				distance: view.opt('selectMinDistance')
			});
		}
	},


	dayTouchStart: function(ev) {
		var view = this.view;
		var selectLongPressDelay;

		// On iOS (and Android?) when a new selection is initiated overtop another selection,
		// the touchend never fires because the elements gets removed mid-touch-interaction (my theory).
		// HACK: simply don't allow this to happen.
		// ALSO: prevent selection when an *event* is already raised.
		if (view.isSelected || view.selectedEvent) {
			return;
		}

		selectLongPressDelay = view.opt('selectLongPressDelay');
		if (selectLongPressDelay == null) {
			selectLongPressDelay = view.opt('longPressDelay'); // fallback
		}

		this.dayClickListener.startInteraction(ev);

		if (view.opt('selectable')) {
			this.daySelectListener.startInteraction(ev, {
				delay: selectLongPressDelay
			});
		}
	},


	// Creates a listener that tracks the user's drag across day elements, for day clicking.
	buildDayClickListener: function() {
		var _this = this;
		var view = this.view;
		var dayClickHit; // null if invalid dayClick

		var dragListener = new HitDragListener(this, {
			scroll: view.opt('dragScroll'),
			interactionStart: function() {
				dayClickHit = dragListener.origHit;
			},
			hitOver: function(hit, isOrig, origHit) {
				// if user dragged to another cell at any point, it can no longer be a dayClick
				if (!isOrig) {
					dayClickHit = null;
				}
			},
			hitOut: function() { // called before mouse moves to a different hit OR moved out of all hits
				dayClickHit = null;
			},
			interactionEnd: function(ev, isCancelled) {
				var hitSpan;

				if (!isCancelled && dayClickHit) {
					hitSpan = _this.getSafeHitSpan(dayClickHit);

					if (hitSpan) {
						view.triggerDayClick(hitSpan, _this.getHitEl(dayClickHit), ev);
					}
				}
			}
		});

		// because dayClickListener won't be called with any time delay, "dragging" will begin immediately,
		// which will kill any touchmoving/scrolling. Prevent this.
		dragListener.shouldCancelTouchScroll = false;

		dragListener.scrollAlwaysKills = true;

		return dragListener;
	},


	// Creates a listener that tracks the user's drag across day elements, for day selecting.
	buildDaySelectListener: function() {
		var _this = this;
		var view = this.view;
		var selectionSpan; // null if invalid selection

		var dragListener = new HitDragListener(this, {
			scroll: view.opt('dragScroll'),
			interactionStart: function() {
				selectionSpan = null;
			},
			dragStart: function() {
				view.unselect(); // since we could be rendering a new selection, we want to clear any old one
			},
			hitOver: function(hit, isOrig, origHit) {
				var origHitSpan;
				var hitSpan;

				if (origHit) { // click needs to have started on a hit

					origHitSpan = _this.getSafeHitSpan(origHit);
					hitSpan = _this.getSafeHitSpan(hit);

					if (origHitSpan && hitSpan) {
						selectionSpan = _this.computeSelection(origHitSpan, hitSpan);
					}
					else {
						selectionSpan = null;
					}

					if (selectionSpan) {
						_this.renderSelection(selectionSpan);
					}
					else if (selectionSpan === false) {
						disableCursor();
					}
				}
			},
			hitOut: function() { // called before mouse moves to a different hit OR moved out of all hits
				selectionSpan = null;
				_this.unrenderSelection();
			},
			hitDone: function() { // called after a hitOut OR before a dragEnd
				enableCursor();
			},
			interactionEnd: function(ev, isCancelled) {
				if (!isCancelled && selectionSpan) {
					// the selection will already have been rendered. just report it
					view.reportSelection(selectionSpan, ev);
				}
			}
		});

		return dragListener;
	},


	// Kills all in-progress dragging.
	// Useful for when public API methods that result in re-rendering are invoked during a drag.
	// Also useful for when touch devices misbehave and don't fire their touchend.
	clearDragListeners: function() {
		this.dayClickListener.endInteraction();
		this.daySelectListener.endInteraction();

		if (this.segDragListener) {
			this.segDragListener.endInteraction(); // will clear this.segDragListener
		}
		if (this.segResizeListener) {
			this.segResizeListener.endInteraction(); // will clear this.segResizeListener
		}
		if (this.externalDragListener) {
			this.externalDragListener.endInteraction(); // will clear this.externalDragListener
		}
	},


	/* Event Helper
	------------------------------------------------------------------------------------------------------------------*/
	// TODO: should probably move this to Grid.events, like we did event dragging / resizing


	// Renders a mock event at the given event location, which contains zoned start/end properties.
	// Returns all mock event elements.
	renderEventLocationHelper: function(eventLocation, sourceSeg) {
		var fakeEvent = this.fabricateHelperEvent(eventLocation, sourceSeg);

		return this.renderHelper(fakeEvent, sourceSeg); // do the actual rendering
	},


	// Builds a fake event given zoned event date properties and a segment is should be inspired from.
	// The range's end can be null, in which case the mock event that is rendered will have a null end time.
	// `sourceSeg` is the internal segment object involved in the drag. If null, something external is dragging.
	fabricateHelperEvent: function(eventLocation, sourceSeg) {
		var fakeEvent = sourceSeg ? createObject(sourceSeg.event) : {}; // mask the original event object if possible

		fakeEvent.start = eventLocation.start.clone();
		fakeEvent.end = eventLocation.end ? eventLocation.end.clone() : null;
		fakeEvent.allDay = null; // force it to be freshly computed by normalizeEventDates
		this.view.calendar.normalizeEventDates(fakeEvent);

		// this extra className will be useful for differentiating real events from mock events in CSS
		fakeEvent.className = (fakeEvent.className || []).concat('fc-helper');

		// if something external is being dragged in, don't render a resizer
		if (!sourceSeg) {
			fakeEvent.editable = false;
		}

		return fakeEvent;
	},


	// Renders a mock event. Given zoned event date properties.
	// Must return all mock event elements.
	renderHelper: function(eventLocation, sourceSeg) {
		// subclasses must implement
	},


	// Unrenders a mock event
	unrenderHelper: function() {
		// subclasses must implement
	},


	/* Selection
	------------------------------------------------------------------------------------------------------------------*/


	// Renders a visual indication of a selection. Will highlight by default but can be overridden by subclasses.
	// Given a span (unzoned start/end and other misc data)
	renderSelection: function(span) {
		this.renderHighlight(span);
	},


	// Unrenders any visual indications of a selection. Will unrender a highlight by default.
	unrenderSelection: function() {
		this.unrenderHighlight();
	},


	// Given the first and last date-spans of a selection, returns another date-span object.
	// Subclasses can override and provide additional data in the span object. Will be passed to renderSelection().
	// Will return false if the selection is invalid and this should be indicated to the user.
	// Will return null/undefined if a selection invalid but no error should be reported.
	computeSelection: function(span0, span1) {
		var span = this.computeSelectionSpan(span0, span1);

		if (span && !this.view.calendar.isSelectionSpanAllowed(span)) {
			return false;
		}

		return span;
	},


	// Given two spans, must return the combination of the two.
	// TODO: do this separation of concerns (combining VS validation) for event dnd/resize too.
	computeSelectionSpan: function(span0, span1) {
		var dates = [ span0.start, span0.end, span1.start, span1.end ];

		dates.sort(compareNumbers); // sorts chronologically. works with Moments

		return { start: dates[0].clone(), end: dates[3].clone() };
	},


	/* Highlight
	------------------------------------------------------------------------------------------------------------------*/


	// Renders an emphasis on the given date range. Given a span (unzoned start/end and other misc data)
	renderHighlight: function(span) {
		this.renderFill('highlight', this.spanToSegs(span));
	},


	// Unrenders the emphasis on a date range
	unrenderHighlight: function() {
		this.unrenderFill('highlight');
	},


	// Generates an array of classNames for rendering the highlight. Used by the fill system.
	highlightSegClasses: function() {
		return [ 'fc-highlight' ];
	},


	/* Business Hours
	------------------------------------------------------------------------------------------------------------------*/


	renderBusinessHours: function() {
	},


	unrenderBusinessHours: function() {
	},


	/* Now Indicator
	------------------------------------------------------------------------------------------------------------------*/


	getNowIndicatorUnit: function() {
	},


	renderNowIndicator: function(date) {
	},


	unrenderNowIndicator: function() {
	},


	/* Fill System (highlight, background events, business hours)
	--------------------------------------------------------------------------------------------------------------------
	TODO: remove this system. like we did in TimeGrid
	*/


	// Renders a set of rectangles over the given segments of time.
	// MUST RETURN a subset of segs, the segs that were actually rendered.
	// Responsible for populating this.elsByFill. TODO: better API for expressing this requirement
	renderFill: function(type, segs) {
		// subclasses must implement
	},


	// Unrenders a specific type of fill that is currently rendered on the grid
	unrenderFill: function(type) {
		var el = this.elsByFill[type];

		if (el) {
			el.remove();
			delete this.elsByFill[type];
		}
	},


	// Renders and assigns an `el` property for each fill segment. Generic enough to work with different types.
	// Only returns segments that successfully rendered.
	// To be harnessed by renderFill (implemented by subclasses).
	// Analagous to renderFgSegEls.
	renderFillSegEls: function(type, segs) {
		var _this = this;
		var segElMethod = this[type + 'SegEl'];
		var html = '';
		var renderedSegs = [];
		var i;

		if (segs.length) {

			// build a large concatenation of segment HTML
			for (i = 0; i < segs.length; i++) {
				html += this.fillSegHtml(type, segs[i]);
			}

			// Grab individual elements from the combined HTML string. Use each as the default rendering.
			// Then, compute the 'el' for each segment.
			$(html).each(function(i, node) {
				var seg = segs[i];
				var el = $(node);

				// allow custom filter methods per-type
				if (segElMethod) {
					el = segElMethod.call(_this, seg, el);
				}

				if (el) { // custom filters did not cancel the render
					el = $(el); // allow custom filter to return raw DOM node

					// correct element type? (would be bad if a non-TD were inserted into a table for example)
					if (el.is(_this.fillSegTag)) {
						seg.el = el;
						renderedSegs.push(seg);
					}
				}
			});
		}

		return renderedSegs;
	},


	fillSegTag: 'div', // subclasses can override


	// Builds the HTML needed for one fill segment. Generic enough to work with different types.
	fillSegHtml: function(type, seg) {

		// custom hooks per-type
		var classesMethod = this[type + 'SegClasses'];
		var cssMethod = this[type + 'SegCss'];

		var classes = classesMethod ? classesMethod.call(this, seg) : [];
		var css = cssToStr(cssMethod ? cssMethod.call(this, seg) : {});

		return '<' + this.fillSegTag +
			(classes.length ? ' class="' + classes.join(' ') + '"' : '') +
			(css ? ' style="' + css + '"' : '') +
			' />';
	},



	/* Generic rendering utilities for subclasses
	------------------------------------------------------------------------------------------------------------------*/


	// Computes HTML classNames for a single-day element
	getDayClasses: function(date, noThemeHighlight) {
		var view = this.view;
		var classes = [];
		var today;

		if (!isDateWithinRange(date, view.activeRange)) {
			classes.push('fc-disabled-day'); // TODO: jQuery UI theme?
		}
		else {
			classes.push('fc-' + dayIDs[date.day()]);

			if (
				view.currentRangeAs('months') == 1 && // TODO: somehow get into MonthView
				date.month() != view.currentRange.start.month()
			) {
				classes.push('fc-other-month');
			}

			today = view.calendar.getNow();

			if (date.isSame(today, 'day')) {
				classes.push('fc-today');

				if (noThemeHighlight !== true) {
					classes.push(view.highlightStateClass);
				}
			}
			else if (date < today) {
				classes.push('fc-past');
			}
			else {
				classes.push('fc-future');
			}
		}

		return classes;
	}

});

;;

/* Event-rendering and event-interaction methods for the abstract Grid class
----------------------------------------------------------------------------------------------------------------------

Data Types:
	event - { title, id, start, (end), whatever }
	location - { start, (end), allDay }
	rawEventRange - { start, end }
	eventRange - { start, end, isStart, isEnd }
	eventSpan - { start, end, isStart, isEnd, whatever }
	eventSeg - { event, whatever }
	seg - { whatever }
*/

Grid.mixin({

	// self-config, overridable by subclasses
	segSelector: '.fc-event-container > *', // what constitutes an event element?

	mousedOverSeg: null, // the segment object the user's mouse is over. null if over nothing
	isDraggingSeg: false, // is a segment being dragged? boolean
	isResizingSeg: false, // is a segment being resized? boolean
	isDraggingExternal: false, // jqui-dragging an external element? boolean
	segs: null, // the *event* segments currently rendered in the grid. TODO: rename to `eventSegs`


	// Renders the given events onto the grid
	renderEvents: function(events) {
		var bgEvents = [];
		var fgEvents = [];
		var i;

		for (i = 0; i < events.length; i++) {
			(isBgEvent(events[i]) ? bgEvents : fgEvents).push(events[i]);
		}

		this.segs = [].concat( // record all segs
			this.renderBgEvents(bgEvents),
			this.renderFgEvents(fgEvents)
		);
	},


	renderBgEvents: function(events) {
		var segs = this.eventsToSegs(events);

		// renderBgSegs might return a subset of segs, segs that were actually rendered
		return this.renderBgSegs(segs) || segs;
	},


	renderFgEvents: function(events) {
		var segs = this.eventsToSegs(events);

		// renderFgSegs might return a subset of segs, segs that were actually rendered
		return this.renderFgSegs(segs) || segs;
	},


	// Unrenders all events currently rendered on the grid
	unrenderEvents: function() {
		this.handleSegMouseout(); // trigger an eventMouseout if user's mouse is over an event
		this.clearDragListeners();

		this.unrenderFgSegs();
		this.unrenderBgSegs();

		this.segs = null;
	},


	// Retrieves all rendered segment objects currently rendered on the grid
	getEventSegs: function() {
		return this.segs || [];
	},


	/* Foreground Segment Rendering
	------------------------------------------------------------------------------------------------------------------*/


	// Renders foreground event segments onto the grid. May return a subset of segs that were rendered.
	renderFgSegs: function(segs) {
		// subclasses must implement
	},


	// Unrenders all currently rendered foreground segments
	unrenderFgSegs: function() {
		// subclasses must implement
	},


	// Renders and assigns an `el` property for each foreground event segment.
	// Only returns segments that successfully rendered.
	// A utility that subclasses may use.
	renderFgSegEls: function(segs, disableResizing) {
		var view = this.view;
		var html = '';
		var renderedSegs = [];
		var i;

		if (segs.length) { // don't build an empty html string

			// build a large concatenation of event segment HTML
			for (i = 0; i < segs.length; i++) {
				html += this.fgSegHtml(segs[i], disableResizing);
			}

			// Grab individual elements from the combined HTML string. Use each as the default rendering.
			// Then, compute the 'el' for each segment. An el might be null if the eventRender callback returned false.
			$(html).each(function(i, node) {
				var seg = segs[i];
				var el = view.resolveEventEl(seg.event, $(node));

				if (el) {
					el.data('fc-seg', seg); // used by handlers
					seg.el = el;
					renderedSegs.push(seg);
				}
			});
		}

		return renderedSegs;
	},


	// Generates the HTML for the default rendering of a foreground event segment. Used by renderFgSegEls()
	fgSegHtml: function(seg, disableResizing) {
		// subclasses should implement
	},


	/* Background Segment Rendering
	------------------------------------------------------------------------------------------------------------------*/


	// Renders the given background event segments onto the grid.
	// Returns a subset of the segs that were actually rendered.
	renderBgSegs: function(segs) {
		return this.renderFill('bgEvent', segs);
	},


	// Unrenders all the currently rendered background event segments
	unrenderBgSegs: function() {
		this.unrenderFill('bgEvent');
	},


	// Renders a background event element, given the default rendering. Called by the fill system.
	bgEventSegEl: function(seg, el) {
		return this.view.resolveEventEl(seg.event, el); // will filter through eventRender
	},


	// Generates an array of classNames to be used for the default rendering of a background event.
	// Called by fillSegHtml.
	bgEventSegClasses: function(seg) {
		var event = seg.event;
		var source = event.source || {};

		return [ 'fc-bgevent' ].concat(
			event.className,
			source.className || []
		);
	},


	// Generates a semicolon-separated CSS string to be used for the default rendering of a background event.
	// Called by fillSegHtml.
	bgEventSegCss: function(seg) {
		return {
			'background-color': this.getSegSkinCss(seg)['background-color']
		};
	},


	// Generates an array of classNames to be used for the rendering business hours overlay. Called by the fill system.
	// Called by fillSegHtml.
	businessHoursSegClasses: function(seg) {
		return [ 'fc-nonbusiness', 'fc-bgevent' ];
	},


	/* Business Hours
	------------------------------------------------------------------------------------------------------------------*/


	// Compute business hour segs for the grid's current date range.
	// Caller must ask if whole-day business hours are needed.
	// If no `businessHours` configuration value is specified, assumes the calendar default.
	buildBusinessHourSegs: function(wholeDay, businessHours) {
		return this.eventsToSegs(
			this.buildBusinessHourEvents(wholeDay, businessHours)
		);
	},


	// Compute business hour *events* for the grid's current date range.
	// Caller must ask if whole-day business hours are needed.
	// If no `businessHours` configuration value is specified, assumes the calendar default.
	buildBusinessHourEvents: function(wholeDay, businessHours) {
		var calendar = this.view.calendar;
		var events;

		if (businessHours == null) {
			// fallback
			// access from calendawr. don't access from view. doesn't update with dynamic options.
			businessHours = calendar.opt('businessHours');
		}

		events = calendar.computeBusinessHourEvents(wholeDay, businessHours);

		// HACK. Eventually refactor business hours "events" system.
		// If no events are given, but businessHours is activated, this means the entire visible range should be
		// marked as *not* business-hours, via inverse-background rendering.
		if (!events.length && businessHours) {
			events = [
				$.extend({}, BUSINESS_HOUR_EVENT_DEFAULTS, {
					start: this.view.activeRange.end, // guaranteed out-of-range
					end: this.view.activeRange.end,   // "
					dow: null
				})
			];
		}

		return events;
	},


	/* Handlers
	------------------------------------------------------------------------------------------------------------------*/


	// Attaches event-element-related handlers for *all* rendered event segments of the view.
	bindSegHandlers: function() {
		this.bindSegHandlersToEl(this.el);
	},


	// Attaches event-element-related handlers to an arbitrary container element. leverages bubbling.
	bindSegHandlersToEl: function(el) {
		this.bindSegHandlerToEl(el, 'touchstart', this.handleSegTouchStart);
		this.bindSegHandlerToEl(el, 'mouseenter', this.handleSegMouseover);
		this.bindSegHandlerToEl(el, 'mouseleave', this.handleSegMouseout);
		this.bindSegHandlerToEl(el, 'mousedown', this.handleSegMousedown);
		this.bindSegHandlerToEl(el, 'click', this.handleSegClick);
	},


	// Executes a handler for any a user-interaction on a segment.
	// Handler gets called with (seg, ev), and with the `this` context of the Grid
	bindSegHandlerToEl: function(el, name, handler) {
		var _this = this;

		el.on(name, this.segSelector, function(ev) {
			var seg = $(this).data('fc-seg'); // grab segment data. put there by View::renderEvents

			// only call the handlers if there is not a drag/resize in progress
			if (seg && !_this.isDraggingSeg && !_this.isResizingSeg) {
				return handler.call(_this, seg, ev); // context will be the Grid
			}
		});
	},


	handleSegClick: function(seg, ev) {
		var res = this.view.publiclyTrigger('eventClick', seg.el[0], seg.event, ev); // can return `false` to cancel
		if (res === false) {
			ev.preventDefault();
		}
	},


	// Updates internal state and triggers handlers for when an event element is moused over
	handleSegMouseover: function(seg, ev) {
		if (
			!GlobalEmitter.get().shouldIgnoreMouse() &&
			!this.mousedOverSeg
		) {
			this.mousedOverSeg = seg;
			if (this.view.isEventResizable(seg.event)) {
				seg.el.addClass('fc-allow-mouse-resize');
			}
			this.view.publiclyTrigger('eventMouseover', seg.el[0], seg.event, ev);
		}
	},


	// Updates internal state and triggers handlers for when an event element is moused out.
	// Can be given no arguments, in which case it will mouseout the segment that was previously moused over.
	handleSegMouseout: function(seg, ev) {
		ev = ev || {}; // if given no args, make a mock mouse event

		if (this.mousedOverSeg) {
			seg = seg || this.mousedOverSeg; // if given no args, use the currently moused-over segment
			this.mousedOverSeg = null;
			if (this.view.isEventResizable(seg.event)) {
				seg.el.removeClass('fc-allow-mouse-resize');
			}
			this.view.publiclyTrigger('eventMouseout', seg.el[0], seg.event, ev);
		}
	},


	handleSegMousedown: function(seg, ev) {
		var isResizing = this.startSegResize(seg, ev, { distance: 5 });

		if (!isResizing && this.view.isEventDraggable(seg.event)) {
			this.buildSegDragListener(seg)
				.startInteraction(ev, {
					distance: 5
				});
		}
	},


	handleSegTouchStart: function(seg, ev) {
		var view = this.view;
		var event = seg.event;
		var isSelected = view.isEventSelected(event);
		var isDraggable = view.isEventDraggable(event);
		var isResizable = view.isEventResizable(event);
		var isResizing = false;
		var dragListener;
		var eventLongPressDelay;

		if (isSelected && isResizable) {
			// only allow resizing of the event is selected
			isResizing = this.startSegResize(seg, ev);
		}

		if (!isResizing && (isDraggable || isResizable)) { // allowed to be selected?

			eventLongPressDelay = view.opt('eventLongPressDelay');
			if (eventLongPressDelay == null) {
				eventLongPressDelay = view.opt('longPressDelay'); // fallback
			}

			dragListener = isDraggable ?
				this.buildSegDragListener(seg) :
				this.buildSegSelectListener(seg); // seg isn't draggable, but still needs to be selected

			dragListener.startInteraction(ev, { // won't start if already started
				delay: isSelected ? 0 : eventLongPressDelay // do delay if not already selected
			});
		}
	},


	// returns boolean whether resizing actually started or not.
	// assumes the seg allows resizing.
	// `dragOptions` are optional.
	startSegResize: function(seg, ev, dragOptions) {
		if ($(ev.target).is('.fc-resizer')) {
			this.buildSegResizeListener(seg, $(ev.target).is('.fc-start-resizer'))
				.startInteraction(ev, dragOptions);
			return true;
		}
		return false;
	},



	/* Event Dragging
	------------------------------------------------------------------------------------------------------------------*/


	// Builds a listener that will track user-dragging on an event segment.
	// Generic enough to work with any type of Grid.
	// Has side effect of setting/unsetting `segDragListener`
	buildSegDragListener: function(seg) {
		var _this = this;
		var view = this.view;
		var el = seg.el;
		var event = seg.event;
		var isDragging;
		var mouseFollower; // A clone of the original element that will move with the mouse
		var dropLocation; // zoned event date properties

		if (this.segDragListener) {
			return this.segDragListener;
		}

		// Tracks mouse movement over the *view's* coordinate map. Allows dragging and dropping between subcomponents
		// of the view.
		var dragListener = this.segDragListener = new HitDragListener(view, {
			scroll: view.opt('dragScroll'),
			subjectEl: el,
			subjectCenter: true,
			interactionStart: function(ev) {
				seg.component = _this; // for renderDrag
				isDragging = false;
				mouseFollower = new MouseFollower(seg.el, {
					additionalClass: 'fc-dragging',
					parentEl: view.el,
					opacity: dragListener.isTouch ? null : view.opt('dragOpacity'),
					revertDuration: view.opt('dragRevertDuration'),
					zIndex: 2 // one above the .fc-view
				});
				mouseFollower.hide(); // don't show until we know this is a real drag
				mouseFollower.start(ev);
			},
			dragStart: function(ev) {
				if (dragListener.isTouch && !view.isEventSelected(event)) {
					// if not previously selected, will fire after a delay. then, select the event
					view.selectEvent(event);
				}
				isDragging = true;
				_this.handleSegMouseout(seg, ev); // ensure a mouseout on the manipulated event has been reported
				_this.segDragStart(seg, ev);
				view.hideEvent(event); // hide all event segments. our mouseFollower will take over
			},
			hitOver: function(hit, isOrig, origHit) {
				var isAllowed = true;
				var origHitSpan;
				var hitSpan;
				var dragHelperEls;

				// starting hit could be forced (DayGrid.limit)
				if (seg.hit) {
					origHit = seg.hit;
				}

				// hit might not belong to this grid, so query origin grid
				origHitSpan = origHit.component.getSafeHitSpan(origHit);
				hitSpan = hit.component.getSafeHitSpan(hit);

				if (origHitSpan && hitSpan) {
					dropLocation = _this.computeEventDrop(origHitSpan, hitSpan, event);
					isAllowed = dropLocation && _this.isEventLocationAllowed(dropLocation, event);
				}
				else {
					isAllowed = false;
				}

				if (!isAllowed) {
					dropLocation = null;
					disableCursor();
				}

				// if a valid drop location, have the subclass render a visual indication
				if (dropLocation && (dragHelperEls = view.renderDrag(dropLocation, seg))) {

					dragHelperEls.addClass('fc-dragging');
					if (!dragListener.isTouch) {
						_this.applyDragOpacity(dragHelperEls);
					}

					mouseFollower.hide(); // if the subclass is already using a mock event "helper", hide our own
				}
				else {
					mouseFollower.show(); // otherwise, have the helper follow the mouse (no snapping)
				}

				if (isOrig) {
					dropLocation = null; // needs to have moved hits to be a valid drop
				}
			},
			hitOut: function() { // called before mouse moves to a different hit OR moved out of all hits
				view.unrenderDrag(); // unrender whatever was done in renderDrag
				mouseFollower.show(); // show in case we are moving out of all hits
				dropLocation = null;
			},
			hitDone: function() { // Called after a hitOut OR before a dragEnd
				enableCursor();
			},
			interactionEnd: function(ev) {
				delete seg.component; // prevent side effects

				// do revert animation if hasn't changed. calls a callback when finished (whether animation or not)
				mouseFollower.stop(!dropLocation, function() {
					if (isDragging) {
						view.unrenderDrag();
						_this.segDragStop(seg, ev);
					}

					if (dropLocation) {
						// no need to re-show original, will rerender all anyways. esp important if eventRenderWait
						view.reportSegDrop(seg, dropLocation, _this.largeUnit, el, ev);
					}
					else {
						view.showEvent(event);
					}
				});
				_this.segDragListener = null;
			}
		});

		return dragListener;
	},


	// seg isn't draggable, but let's use a generic DragListener
	// simply for the delay, so it can be selected.
	// Has side effect of setting/unsetting `segDragListener`
	buildSegSelectListener: function(seg) {
		var _this = this;
		var view = this.view;
		var event = seg.event;

		if (this.segDragListener) {
			return this.segDragListener;
		}

		var dragListener = this.segDragListener = new DragListener({
			dragStart: function(ev) {
				if (dragListener.isTouch && !view.isEventSelected(event)) {
					// if not previously selected, will fire after a delay. then, select the event
					view.selectEvent(event);
				}
			},
			interactionEnd: function(ev) {
				_this.segDragListener = null;
			}
		});

		return dragListener;
	},


	// Called before event segment dragging starts
	segDragStart: function(seg, ev) {
		this.isDraggingSeg = true;
		this.view.publiclyTrigger('eventDragStart', seg.el[0], seg.event, ev, {}); // last argument is jqui dummy
	},


	// Called after event segment dragging stops
	segDragStop: function(seg, ev) {
		this.isDraggingSeg = false;
		this.view.publiclyTrigger('eventDragStop', seg.el[0], seg.event, ev, {}); // last argument is jqui dummy
	},


	// Given the spans an event drag began, and the span event was dropped, calculates the new zoned start/end/allDay
	// values for the event. Subclasses may override and set additional properties to be used by renderDrag.
	// A falsy returned value indicates an invalid drop.
	// DOES NOT consider overlap/constraint.
	computeEventDrop: function(startSpan, endSpan, event) {
		var calendar = this.view.calendar;
		var dragStart = startSpan.start;
		var dragEnd = endSpan.start;
		var delta;
		var dropLocation; // zoned event date properties

		if (dragStart.hasTime() === dragEnd.hasTime()) {
			delta = this.diffDates(dragEnd, dragStart);

			// if an all-day event was in a timed area and it was dragged to a different time,
			// guarantee an end and adjust start/end to have times
			if (event.allDay && durationHasTime(delta)) {
				dropLocation = {
					start: event.start.clone(),
					end: calendar.getEventEnd(event), // will be an ambig day
					allDay: false // for normalizeEventTimes
				};
				calendar.normalizeEventTimes(dropLocation);
			}
			// othewise, work off existing values
			else {
				dropLocation = pluckEventDateProps(event);
			}

			dropLocation.start.add(delta);
			if (dropLocation.end) {
				dropLocation.end.add(delta);
			}
		}
		else {
			// if switching from day <-> timed, start should be reset to the dropped date, and the end cleared
			dropLocation = {
				start: dragEnd.clone(),
				end: null, // end should be cleared
				allDay: !dragEnd.hasTime()
			};
		}

		return dropLocation;
	},


	// Utility for apply dragOpacity to a jQuery set
	applyDragOpacity: function(els) {
		var opacity = this.view.opt('dragOpacity');

		if (opacity != null) {
			els.css('opacity', opacity);
		}
	},


	/* External Element Dragging
	------------------------------------------------------------------------------------------------------------------*/


	// Called when a jQuery UI drag is initiated anywhere in the DOM
	externalDragStart: function(ev, ui) {
		var view = this.view;
		var el;
		var accept;

		if (view.opt('droppable')) { // only listen if this setting is on
			el = $((ui ? ui.item : null) || ev.target);

			// Test that the dragged element passes the dropAccept selector or filter function.
			// FYI, the default is "*" (matches all)
			accept = view.opt('dropAccept');
			if ($.isFunction(accept) ? accept.call(el[0], el) : el.is(accept)) {
				if (!this.isDraggingExternal) { // prevent double-listening if fired twice
					this.listenToExternalDrag(el, ev, ui);
				}
			}
		}
	},


	// Called when a jQuery UI drag starts and it needs to be monitored for dropping
	listenToExternalDrag: function(el, ev, ui) {
		var _this = this;
		var view = this.view;
		var meta = getDraggedElMeta(el); // extra data about event drop, including possible event to create
		var dropLocation; // a null value signals an unsuccessful drag

		// listener that tracks mouse movement over date-associated pixel regions
		var dragListener = _this.externalDragListener = new HitDragListener(this, {
			interactionStart: function() {
				_this.isDraggingExternal = true;
			},
			hitOver: function(hit) {
				var isAllowed = true;
				var hitSpan = hit.component.getSafeHitSpan(hit); // hit might not belong to this grid

				if (hitSpan) {
					dropLocation = _this.computeExternalDrop(hitSpan, meta);
					isAllowed = dropLocation && _this.isExternalLocationAllowed(dropLocation, meta.eventProps);
				}
				else {
					isAllowed = false;
				}

				if (!isAllowed) {
					dropLocation = null;
					disableCursor();
				}

				if (dropLocation) {
					_this.renderDrag(dropLocation); // called without a seg parameter
				}
			},
			hitOut: function() {
				dropLocation = null; // signal unsuccessful
			},
			hitDone: function() { // Called after a hitOut OR before a dragEnd
				enableCursor();
				_this.unrenderDrag();
			},
			interactionEnd: function(ev) {
				if (dropLocation) { // element was dropped on a valid hit
					view.reportExternalDrop(meta, dropLocation, el, ev, ui);
				}
				_this.isDraggingExternal = false;
				_this.externalDragListener = null;
			}
		});

		dragListener.startDrag(ev); // start listening immediately
	},


	// Given a hit to be dropped upon, and misc data associated with the jqui drag (guaranteed to be a plain object),
	// returns the zoned start/end dates for the event that would result from the hypothetical drop. end might be null.
	// Returning a null value signals an invalid drop hit.
	// DOES NOT consider overlap/constraint.
	computeExternalDrop: function(span, meta) {
		var calendar = this.view.calendar;
		var dropLocation = {
			start: calendar.applyTimezone(span.start), // simulate a zoned event start date
			end: null
		};

		// if dropped on an all-day span, and element's metadata specified a time, set it
		if (meta.startTime && !dropLocation.start.hasTime()) {
			dropLocation.start.time(meta.startTime);
		}

		if (meta.duration) {
			dropLocation.end = dropLocation.start.clone().add(meta.duration);
		}

		return dropLocation;
	},



	/* Drag Rendering (for both events and an external elements)
	------------------------------------------------------------------------------------------------------------------*/


	// Renders a visual indication of an event or external element being dragged.
	// `dropLocation` contains hypothetical start/end/allDay values the event would have if dropped. end can be null.
	// `seg` is the internal segment object that is being dragged. If dragging an external element, `seg` is null.
	// A truthy returned value indicates this method has rendered a helper element.
	// Must return elements used for any mock events.
	renderDrag: function(dropLocation, seg) {
		// subclasses must implement
	},


	// Unrenders a visual indication of an event or external element being dragged
	unrenderDrag: function() {
		// subclasses must implement
	},


	/* Resizing
	------------------------------------------------------------------------------------------------------------------*/


	// Creates a listener that tracks the user as they resize an event segment.
	// Generic enough to work with any type of Grid.
	buildSegResizeListener: function(seg, isStart) {
		var _this = this;
		var view = this.view;
		var calendar = view.calendar;
		var el = seg.el;
		var event = seg.event;
		var eventEnd = calendar.getEventEnd(event);
		var isDragging;
		var resizeLocation; // zoned event date properties. falsy if invalid resize

		// Tracks mouse movement over the *grid's* coordinate map
		var dragListener = this.segResizeListener = new HitDragListener(this, {
			scroll: view.opt('dragScroll'),
			subjectEl: el,
			interactionStart: function() {
				isDragging = false;
			},
			dragStart: function(ev) {
				isDragging = true;
				_this.handleSegMouseout(seg, ev); // ensure a mouseout on the manipulated event has been reported
				_this.segResizeStart(seg, ev);
			},
			hitOver: function(hit, isOrig, origHit) {
				var isAllowed = true;
				var origHitSpan = _this.getSafeHitSpan(origHit);
				var hitSpan = _this.getSafeHitSpan(hit);

				if (origHitSpan && hitSpan) {
					resizeLocation = isStart ?
						_this.computeEventStartResize(origHitSpan, hitSpan, event) :
						_this.computeEventEndResize(origHitSpan, hitSpan, event);

					isAllowed = resizeLocation && _this.isEventLocationAllowed(resizeLocation, event);
				}
				else {
					isAllowed = false;
				}

				if (!isAllowed) {
					resizeLocation = null;
					disableCursor();
				}
				else {
					if (
						resizeLocation.start.isSame(event.start.clone().stripZone()) &&
						resizeLocation.end.isSame(eventEnd.clone().stripZone())
					) {
						// no change. (FYI, event dates might have zones)
						resizeLocation = null;
					}
				}

				if (resizeLocation) {
					view.hideEvent(event);
					_this.renderEventResize(resizeLocation, seg);
				}
			},
			hitOut: function() { // called before mouse moves to a different hit OR moved out of all hits
				resizeLocation = null;
				view.showEvent(event); // for when out-of-bounds. show original
			},
			hitDone: function() { // resets the rendering to show the original event
				_this.unrenderEventResize();
				enableCursor();
			},
			interactionEnd: function(ev) {
				if (isDragging) {
					_this.segResizeStop(seg, ev);
				}

				if (resizeLocation) { // valid date to resize to?
					// no need to re-show original, will rerender all anyways. esp important if eventRenderWait
					view.reportSegResize(seg, resizeLocation, _this.largeUnit, el, ev);
				}
				else {
					view.showEvent(event);
				}
				_this.segResizeListener = null;
			}
		});

		return dragListener;
	},


	// Called before event segment resizing starts
	segResizeStart: function(seg, ev) {
		this.isResizingSeg = true;
		this.view.publiclyTrigger('eventResizeStart', seg.el[0], seg.event, ev, {}); // last argument is jqui dummy
	},


	// Called after event segment resizing stops
	segResizeStop: function(seg, ev) {
		this.isResizingSeg = false;
		this.view.publiclyTrigger('eventResizeStop', seg.el[0], seg.event, ev, {}); // last argument is jqui dummy
	},


	// Returns new date-information for an event segment being resized from its start
	computeEventStartResize: function(startSpan, endSpan, event) {
		return this.computeEventResize('start', startSpan, endSpan, event);
	},


	// Returns new date-information for an event segment being resized from its end
	computeEventEndResize: function(startSpan, endSpan, event) {
		return this.computeEventResize('end', startSpan, endSpan, event);
	},


	// Returns new zoned date information for an event segment being resized from its start OR end
	// `type` is either 'start' or 'end'.
	// DOES NOT consider overlap/constraint.
	computeEventResize: function(type, startSpan, endSpan, event) {
		var calendar = this.view.calendar;
		var delta = this.diffDates(endSpan[type], startSpan[type]);
		var resizeLocation; // zoned event date properties
		var defaultDuration;

		// build original values to work from, guaranteeing a start and end
		resizeLocation = {
			start: event.start.clone(),
			end: calendar.getEventEnd(event),
			allDay: event.allDay
		};

		// if an all-day event was in a timed area and was resized to a time, adjust start/end to have times
		if (resizeLocation.allDay && durationHasTime(delta)) {
			resizeLocation.allDay = false;
			calendar.normalizeEventTimes(resizeLocation);
		}

		resizeLocation[type].add(delta); // apply delta to start or end

		// if the event was compressed too small, find a new reasonable duration for it
		if (!resizeLocation.start.isBefore(resizeLocation.end)) {

			defaultDuration =
				this.minResizeDuration || // TODO: hack
				(event.allDay ?
					calendar.defaultAllDayEventDuration :
					calendar.defaultTimedEventDuration);

			if (type == 'start') { // resizing the start?
				resizeLocation.start = resizeLocation.end.clone().subtract(defaultDuration);
			}
			else { // resizing the end?
				resizeLocation.end = resizeLocation.start.clone().add(defaultDuration);
			}
		}

		return resizeLocation;
	},


	// Renders a visual indication of an event being resized.
	// `range` has the updated dates of the event. `seg` is the original segment object involved in the drag.
	// Must return elements used for any mock events.
	renderEventResize: function(range, seg) {
		// subclasses must implement
	},


	// Unrenders a visual indication of an event being resized.
	unrenderEventResize: function() {
		// subclasses must implement
	},


	/* Rendering Utils
	------------------------------------------------------------------------------------------------------------------*/


	// Compute the text that should be displayed on an event's element.
	// `range` can be the Event object itself, or something range-like, with at least a `start`.
	// If event times are disabled, or the event has no time, will return a blank string.
	// If not specified, formatStr will default to the eventTimeFormat setting,
	// and displayEnd will default to the displayEventEnd setting.
	getEventTimeText: function(range, formatStr, displayEnd) {

		if (formatStr == null) {
			formatStr = this.eventTimeFormat;
		}

		if (displayEnd == null) {
			displayEnd = this.displayEventEnd;
		}

		if (this.displayEventTime && range.start.hasTime()) {
			if (displayEnd && range.end) {
				return this.view.formatRange(range, formatStr);
			}
			else {
				return range.start.format(formatStr);
			}
		}

		return '';
	},


	// Generic utility for generating the HTML classNames for an event segment's element
	getSegClasses: function(seg, isDraggable, isResizable) {
		var view = this.view;
		var classes = [
			'fc-event',
			seg.isStart ? 'fc-start' : 'fc-not-start',
			seg.isEnd ? 'fc-end' : 'fc-not-end'
		].concat(this.getSegCustomClasses(seg));

		if (isDraggable) {
			classes.push('fc-draggable');
		}
		if (isResizable) {
			classes.push('fc-resizable');
		}

		// event is currently selected? attach a className.
		if (view.isEventSelected(seg.event)) {
			classes.push('fc-selected');
		}

		return classes;
	},


	// List of classes that were defined by the caller of the API in some way
	getSegCustomClasses: function(seg) {
		var event = seg.event;

		return [].concat(
			event.className, // guaranteed to be an array
			event.source ? event.source.className : []
		);
	},


	// Utility for generating event skin-related CSS properties
	getSegSkinCss: function(seg) {
		return {
			'background-color': this.getSegBackgroundColor(seg),
			'border-color': this.getSegBorderColor(seg),
			color: this.getSegTextColor(seg)
		};
	},


	// Queries for caller-specified color, then falls back to default
	getSegBackgroundColor: function(seg) {
		return seg.event.backgroundColor ||
			seg.event.color ||
			this.getSegDefaultBackgroundColor(seg);
	},


	getSegDefaultBackgroundColor: function(seg) {
		var source = seg.event.source || {};

		return source.backgroundColor ||
			source.color ||
			this.view.opt('eventBackgroundColor') ||
			this.view.opt('eventColor');
	},


	// Queries for caller-specified color, then falls back to default
	getSegBorderColor: function(seg) {
		return seg.event.borderColor ||
			seg.event.color ||
			this.getSegDefaultBorderColor(seg);
	},


	getSegDefaultBorderColor: function(seg) {
		var source = seg.event.source || {};

		return source.borderColor ||
			source.color ||
			this.view.opt('eventBorderColor') ||
			this.view.opt('eventColor');
	},


	// Queries for caller-specified color, then falls back to default
	getSegTextColor: function(seg) {
		return seg.event.textColor ||
			this.getSegDefaultTextColor(seg);
	},


	getSegDefaultTextColor: function(seg) {
		var source = seg.event.source || {};

		return source.textColor ||
			this.view.opt('eventTextColor');
	},


	/* Event Location Validation
	------------------------------------------------------------------------------------------------------------------*/


	isEventLocationAllowed: function(eventLocation, event) {
		if (this.isEventLocationInRange(eventLocation)) {
			var calendar = this.view.calendar;
			var eventSpans = this.eventToSpans(eventLocation);
			var i;

			if (eventSpans.length) {
				for (i = 0; i < eventSpans.length; i++) {
					if (!calendar.isEventSpanAllowed(eventSpans[i], event)) {
						return false;
					}
				}

				return true;
			}
		}

		return false;
	},


	isExternalLocationAllowed: function(eventLocation, metaProps) { // FOR the external element
		if (this.isEventLocationInRange(eventLocation)) {
			var calendar = this.view.calendar;
			var eventSpans = this.eventToSpans(eventLocation);
			var i;

			if (eventSpans.length) {
				for (i = 0; i < eventSpans.length; i++) {
					if (!calendar.isExternalSpanAllowed(eventSpans[i], eventLocation, metaProps)) {
						return false;
					}
				}

				return true;
			}
		}

		return false;
	},


	isEventLocationInRange: function(eventLocation) {
		return isRangeWithinRange(
			this.eventToRawRange(eventLocation),
			this.view.validRange
		);
	},


	/* Converting events -> eventRange -> eventSpan -> eventSegs
	------------------------------------------------------------------------------------------------------------------*/


	// Generates an array of segments for the given single event
	// Can accept an event "location" as well (which only has start/end and no allDay)
	eventToSegs: function(event) {
		return this.eventsToSegs([ event ]);
	},


	// Generates spans (always unzoned) for the given event.
	// Does not do any inverting for inverse-background events.
	// Can accept an event "location" as well (which only has start/end and no allDay)
	eventToSpans: function(event) {
		var eventRange = this.eventToRange(event); // { start, end, isStart, isEnd }

		if (eventRange) {
			return this.eventRangeToSpans(eventRange, event);
		}
		else { // out of view's valid range
			return [];
		}
	},



	// Converts an array of event objects into an array of event segment objects.
	// A custom `segSliceFunc` may be given for arbitrarily slicing up events.
	// Doesn't guarantee an order for the resulting array.
	eventsToSegs: function(allEvents, segSliceFunc) {
		var _this = this;
		var eventsById = groupEventsById(allEvents);
		var segs = [];

		$.each(eventsById, function(id, events) {
			var visibleEvents = [];
			var eventRanges = [];
			var eventRange; // { start, end, isStart, isEnd }
			var i;

			for (i = 0; i < events.length; i++) {
				eventRange = _this.eventToRange(events[i]); // might be null if completely out of range

				if (eventRange) {
					eventRanges.push(eventRange);
					visibleEvents.push(events[i]);
				}
			}

			// inverse-background events (utilize only the first event in calculations)
			if (isInverseBgEvent(events[0])) {
				eventRanges = _this.invertRanges(eventRanges); // will lose isStart/isEnd

				for (i = 0; i < eventRanges.length; i++) {
					segs.push.apply(segs, // append to
						_this.eventRangeToSegs(eventRanges[i], events[0], segSliceFunc)
					);
				}
			}
			// normal event ranges
			else {
				for (i = 0; i < eventRanges.length; i++) {
					segs.push.apply(segs, // append to
						_this.eventRangeToSegs(eventRanges[i], visibleEvents[i], segSliceFunc)
					);
				}
			}
		});

		return segs;
	},


	// Generates the unzoned start/end dates an event appears to occupy
	// Can accept an event "location" as well (which only has start/end and no allDay)
	// returns { start, end, isStart, isEnd }
	// If the event is completely outside of the grid's valid range, will return undefined.
	eventToRange: function(event) {
		return this.refineRawEventRange(
			this.eventToRawRange(event)
		);
	},


	// Ensures the given range is within the view's activeRange and is correctly localized.
	// Always returns a result
	refineRawEventRange: function(rawRange) {
		var view = this.view;
		var calendar = view.calendar;
		var range = intersectRanges(rawRange, view.activeRange);

		if (range) { // otherwise, event doesn't have valid range

			// hack: dynamic locale change forgets to upate stored event localed
			calendar.localizeMoment(range.start);
			calendar.localizeMoment(range.end);

			return range;
		}
	},


	// not constrained to valid dates
	// not given localizeMoment hack
	eventToRawRange: function(event) {
		var calendar = this.view.calendar;
		var start = event.start.clone().stripZone();
		var end = (
				event.end ?
					event.end.clone() :
					// derive the end from the start and allDay. compute allDay if necessary
					calendar.getDefaultEventEnd(
						event.allDay != null ?
							event.allDay :
							!event.start.hasTime(),
						event.start
					)
			).stripZone();

		return { start: start, end: end };
	},


	// Given an event's range (unzoned start/end), and the event itself,
	// slice into segments (using the segSliceFunc function if specified)
	// eventRange - { start, end, isStart, isEnd }
	eventRangeToSegs: function(eventRange, event, segSliceFunc) {
		var eventSpans = this.eventRangeToSpans(eventRange, event);
		var segs = [];
		var i;

		for (i = 0; i < eventSpans.length; i++) {
			segs.push.apply(segs, // append to
				this.eventSpanToSegs(eventSpans[i], event, segSliceFunc)
			);
		}

		return segs;
	},


	// Given an event's unzoned date range, return an array of eventSpan objects.
	// eventSpan - { start, end, isStart, isEnd, otherthings... }
	// Subclasses can override.
	// Subclasses are obligated to forward eventRange.isStart/isEnd to the resulting spans.
	eventRangeToSpans: function(eventRange, event) {
		return [ $.extend({}, eventRange) ]; // copy into a single-item array
	},


	// Given an event's span (unzoned start/end and other misc data), and the event itself,
	// slices into segments and attaches event-derived properties to them.
	// eventSpan - { start, end, isStart, isEnd, otherthings... }
	eventSpanToSegs: function(eventSpan, event, segSliceFunc) {
		var segs = segSliceFunc ? segSliceFunc(eventSpan) : this.spanToSegs(eventSpan);
		var i, seg;

		for (i = 0; i < segs.length; i++) {
			seg = segs[i];

			// the eventSpan's isStart/isEnd takes precedence over the seg's
			if (!eventSpan.isStart) {
				seg.isStart = false;
			}
			if (!eventSpan.isEnd) {
				seg.isEnd = false;
			}

			seg.event = event;
			seg.eventStartMS = +eventSpan.start; // TODO: not the best name after making spans unzoned
			seg.eventDurationMS = eventSpan.end - eventSpan.start;
		}

		return segs;
	},


	// Produces a new array of range objects that will cover all the time NOT covered by the given ranges.
	// SIDE EFFECT: will mutate the given array and will use its date references.
	invertRanges: function(ranges) {
		var view = this.view;
		var viewStart = view.activeRange.start.clone(); // need a copy
		var viewEnd = view.activeRange.end.clone(); // need a copy
		var inverseRanges = [];
		var start = viewStart; // the end of the previous range. the start of the new range
		var i, range;

		// ranges need to be in order. required for our date-walking algorithm
		ranges.sort(compareRanges);

		for (i = 0; i < ranges.length; i++) {
			range = ranges[i];

			// add the span of time before the event (if there is any)
			if (range.start > start) { // compare millisecond time (skip any ambig logic)
				inverseRanges.push({
					start: start,
					end: range.start
				});
			}

			if (range.end > start) {
				start = range.end;
			}
		}

		// add the span of time after the last event (if there is any)
		if (start < viewEnd) { // compare millisecond time (skip any ambig logic)
			inverseRanges.push({
				start: start,
				end: viewEnd
			});
		}

		return inverseRanges;
	},


	sortEventSegs: function(segs) {
		segs.sort(proxy(this, 'compareEventSegs'));
	},


	// A cmp function for determining which segments should take visual priority
	compareEventSegs: function(seg1, seg2) {
		return seg1.eventStartMS - seg2.eventStartMS || // earlier events go first
			seg2.eventDurationMS - seg1.eventDurationMS || // tie? longer events go first
			seg2.event.allDay - seg1.event.allDay || // tie? put all-day events first (booleans cast to 0/1)
			compareByFieldSpecs(seg1.event, seg2.event, this.view.eventOrderSpecs);
	}

});


/* Utilities
----------------------------------------------------------------------------------------------------------------------*/


function pluckEventDateProps(event) {
	return {
		start: event.start.clone(),
		end: event.end ? event.end.clone() : null,
		allDay: event.allDay // keep it the same
	};
}
FC.pluckEventDateProps = pluckEventDateProps;


function isBgEvent(event) { // returns true if background OR inverse-background
	var rendering = getEventRendering(event);
	return rendering === 'background' || rendering === 'inverse-background';
}
FC.isBgEvent = isBgEvent; // export


function isInverseBgEvent(event) {
	return getEventRendering(event) === 'inverse-background';
}


function getEventRendering(event) {
	return firstDefined((event.source || {}).rendering, event.rendering);
}


function groupEventsById(events) {
	var eventsById = {};
	var i, event;

	for (i = 0; i < events.length; i++) {
		event = events[i];
		(eventsById[event._id] || (eventsById[event._id] = [])).push(event);
	}

	return eventsById;
}


// A cmp function for determining which non-inverted "ranges" (see above) happen earlier
function compareRanges(range1, range2) {
	return range1.start - range2.start; // earlier ranges go first
}


/* External-Dragging-Element Data
----------------------------------------------------------------------------------------------------------------------*/

// Require all HTML5 data-* attributes used by FullCalendar to have this prefix.
// A value of '' will query attributes like data-event. A value of 'fc' will query attributes like data-fc-event.
FC.dataAttrPrefix = '';

// Given a jQuery element that might represent a dragged FullCalendar event, returns an intermediate data structure
// to be used for Event Object creation.
// A defined `.eventProps`, even when empty, indicates that an event should be created.
function getDraggedElMeta(el) {
	var prefix = FC.dataAttrPrefix;
	var eventProps; // properties for creating the event, not related to date/time
	var startTime; // a Duration
	var duration;
	var stick;

	if (prefix) { prefix += '-'; }
	eventProps = el.data(prefix + 'event') || null;

	if (eventProps) {
		if (typeof eventProps === 'object') {
			eventProps = $.extend({}, eventProps); // make a copy
		}
		else { // something like 1 or true. still signal event creation
			eventProps = {};
		}

		// pluck special-cased date/time properties
		startTime = eventProps.start;
		if (startTime == null) { startTime = eventProps.time; } // accept 'time' as well
		duration = eventProps.duration;
		stick = eventProps.stick;
		delete eventProps.start;
		delete eventProps.time;
		delete eventProps.duration;
		delete eventProps.stick;
	}

	// fallback to standalone attribute values for each of the date/time properties
	if (startTime == null) { startTime = el.data(prefix + 'start'); }
	if (startTime == null) { startTime = el.data(prefix + 'time'); } // accept 'time' as well
	if (duration == null) { duration = el.data(prefix + 'duration'); }
	if (stick == null) { stick = el.data(prefix + 'stick'); }

	// massage into correct data types
	startTime = startTime != null ? moment.duration(startTime) : null;
	duration = duration != null ? moment.duration(duration) : null;
	stick = Boolean(stick);

	return { eventProps: eventProps, startTime: startTime, duration: duration, stick: stick };
}


;;

/*
A set of rendering and date-related methods for a visual component comprised of one or more rows of day columns.
Prerequisite: the object being mixed into needs to be a *Grid*
*/
var DayTableMixin = FC.DayTableMixin = {

	breakOnWeeks: false, // should create a new row for each week?
	dayDates: null, // whole-day dates for each column. left to right
	dayIndices: null, // for each day from start, the offset
	daysPerRow: null,
	rowCnt: null,
	colCnt: null,
	colHeadFormat: null,


	// Populates internal variables used for date calculation and rendering
	updateDayTable: function() {
		var view = this.view;
		var date = this.start.clone();
		var dayIndex = -1;
		var dayIndices = [];
		var dayDates = [];
		var daysPerRow;
		var firstDay;
		var rowCnt;

		while (date.isBefore(this.end)) { // loop each day from start to end
			if (view.isHiddenDay(date)) {
				dayIndices.push(dayIndex + 0.5); // mark that it's between indices
			}
			else {
				dayIndex++;
				dayIndices.push(dayIndex);
				dayDates.push(date.clone());
			}
			date.add(1, 'days');
		}

		if (this.breakOnWeeks) {
			// count columns until the day-of-week repeats
			firstDay = dayDates[0].day();
			for (daysPerRow = 1; daysPerRow < dayDates.length; daysPerRow++) {
				if (dayDates[daysPerRow].day() == firstDay) {
					break;
				}
			}
			rowCnt = Math.ceil(dayDates.length / daysPerRow);
		}
		else {
			rowCnt = 1;
			daysPerRow = dayDates.length;
		}

		this.dayDates = dayDates;
		this.dayIndices = dayIndices;
		this.daysPerRow = daysPerRow;
		this.rowCnt = rowCnt;

		this.updateDayTableCols();
	},


	// Computes and assigned the colCnt property and updates any options that may be computed from it
	updateDayTableCols: function() {
		this.colCnt = this.computeColCnt();
		this.colHeadFormat = this.view.opt('columnFormat') || this.computeColHeadFormat();
	},


	// Determines how many columns there should be in the table
	computeColCnt: function() {
		return this.daysPerRow;
	},


	// Computes the ambiguously-timed moment for the given cell
	getCellDate: function(row, col) {
		return this.dayDates[
				this.getCellDayIndex(row, col)
			].clone();
	},


	// Computes the ambiguously-timed date range for the given cell
	getCellRange: function(row, col) {
		var start = this.getCellDate(row, col);
		var end = start.clone().add(1, 'days');

		return { start: start, end: end };
	},


	// Returns the number of day cells, chronologically, from the first of the grid (0-based)
	getCellDayIndex: function(row, col) {
		return row * this.daysPerRow + this.getColDayIndex(col);
	},


	// Returns the numner of day cells, chronologically, from the first cell in *any given row*
	getColDayIndex: function(col) {
		if (this.isRTL) {
			return this.colCnt - 1 - col;
		}
		else {
			return col;
		}
	},


	// Given a date, returns its chronolocial cell-index from the first cell of the grid.
	// If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
	// If before the first offset, returns a negative number.
	// If after the last offset, returns an offset past the last cell offset.
	// Only works for *start* dates of cells. Will not work for exclusive end dates for cells.
	getDateDayIndex: function(date) {
		var dayIndices = this.dayIndices;
		var dayOffset = date.diff(this.start, 'days');

		if (dayOffset < 0) {
			return dayIndices[0] - 1;
		}
		else if (dayOffset >= dayIndices.length) {
			return dayIndices[dayIndices.length - 1] + 1;
		}
		else {
			return dayIndices[dayOffset];
		}
	},


	/* Options
	------------------------------------------------------------------------------------------------------------------*/


	// Computes a default column header formatting string if `colFormat` is not explicitly defined
	computeColHeadFormat: function() {
		// if more than one week row, or if there are a lot of columns with not much space,
		// put just the day numbers will be in each cell
		if (this.rowCnt > 1 || this.colCnt > 10) {
			return 'ddd'; // "Sat"
		}
		// multiple days, so full single date string WON'T be in title text
		else if (this.colCnt > 1) {
			return this.view.opt('dayOfMonthFormat'); // "Sat 12/10"
		}
		// single day, so full single date string will probably be in title text
		else {
			return 'dddd'; // "Saturday"
		}
	},


	/* Slicing
	------------------------------------------------------------------------------------------------------------------*/


	// Slices up a date range into a segment for every week-row it intersects with
	sliceRangeByRow: function(range) {
		var daysPerRow = this.daysPerRow;
		var normalRange = this.view.computeDayRange(range); // make whole-day range, considering nextDayThreshold
		var rangeFirst = this.getDateDayIndex(normalRange.start); // inclusive first index
		var rangeLast = this.getDateDayIndex(normalRange.end.clone().subtract(1, 'days')); // inclusive last index
		var segs = [];
		var row;
		var rowFirst, rowLast; // inclusive day-index range for current row
		var segFirst, segLast; // inclusive day-index range for segment

		for (row = 0; row < this.rowCnt; row++) {
			rowFirst = row * daysPerRow;
			rowLast = rowFirst + daysPerRow - 1;

			// intersect segment's offset range with the row's
			segFirst = Math.max(rangeFirst, rowFirst);
			segLast = Math.min(rangeLast, rowLast);

			// deal with in-between indices
			segFirst = Math.ceil(segFirst); // in-between starts round to next cell
			segLast = Math.floor(segLast); // in-between ends round to prev cell

			if (segFirst <= segLast) { // was there any intersection with the current row?
				segs.push({
					row: row,

					// normalize to start of row
					firstRowDayIndex: segFirst - rowFirst,
					lastRowDayIndex: segLast - rowFirst,

					// must be matching integers to be the segment's start/end
					isStart: segFirst === rangeFirst,
					isEnd: segLast === rangeLast
				});
			}
		}

		return segs;
	},


	// Slices up a date range into a segment for every day-cell it intersects with.
	// TODO: make more DRY with sliceRangeByRow somehow.
	sliceRangeByDay: function(range) {
		var daysPerRow = this.daysPerRow;
		var normalRange = this.view.computeDayRange(range); // make whole-day range, considering nextDayThreshold
		var rangeFirst = this.getDateDayIndex(normalRange.start); // inclusive first index
		var rangeLast = this.getDateDayIndex(normalRange.end.clone().subtract(1, 'days')); // inclusive last index
		var segs = [];
		var row;
		var rowFirst, rowLast; // inclusive day-index range for current row
		var i;
		var segFirst, segLast; // inclusive day-index range for segment

		for (row = 0; row < this.rowCnt; row++) {
			rowFirst = row * daysPerRow;
			rowLast = rowFirst + daysPerRow - 1;

			for (i = rowFirst; i <= rowLast; i++) {

				// intersect segment's offset range with the row's
				segFirst = Math.max(rangeFirst, i);
				segLast = Math.min(rangeLast, i);

				// deal with in-between indices
				segFirst = Math.ceil(segFirst); // in-between starts round to next cell
				segLast = Math.floor(segLast); // in-between ends round to prev cell

				if (segFirst <= segLast) { // was there any intersection with the current row?
					segs.push({
						row: row,

						// normalize to start of row
						firstRowDayIndex: segFirst - rowFirst,
						lastRowDayIndex: segLast - rowFirst,

						// must be matching integers to be the segment's start/end
						isStart: segFirst === rangeFirst,
						isEnd: segLast === rangeLast
					});
				}
			}
		}

		return segs;
	},


	/* Header Rendering
	------------------------------------------------------------------------------------------------------------------*/


	renderHeadHtml: function() {
		var view = this.view;

		return '' +
			'<div class="fc-row ' + view.widgetHeaderClass + '">' +
				'<table>' +
					'<thead>' +
						this.renderHeadTrHtml() +
					'</thead>' +
				'</table>' +
			'</div>';
	},


	renderHeadIntroHtml: function() {
		return this.renderIntroHtml(); // fall back to generic
	},


	renderHeadTrHtml: function() {
		return '' +
			'<tr>' +
				(this.isRTL ? '' : this.renderHeadIntroHtml()) +
				this.renderHeadDateCellsHtml() +
				(this.isRTL ? this.renderHeadIntroHtml() : '') +
			'</tr>';
	},


	renderHeadDateCellsHtml: function() {
		var htmls = [];
		var col, date;

		for (col = 0; col < this.colCnt; col++) {
			date = this.getCellDate(0, col);
			htmls.push(this.renderHeadDateCellHtml(date));
		}

		return htmls.join('');
	},


	// TODO: when internalApiVersion, accept an object for HTML attributes
	// (colspan should be no different)
	renderHeadDateCellHtml: function(date, colspan, otherAttrs) {
		var view = this.view;
		var isDateValid = isDateWithinRange(date, view.activeRange); // TODO: called too frequently. cache somehow.
		var classNames = [
			'fc-day-header',
			view.widgetHeaderClass
		];
		var innerHtml = htmlEscape(date.format(this.colHeadFormat));

		// if only one row of days, the classNames on the header can represent the specific days beneath
		if (this.rowCnt === 1) {
			classNames = classNames.concat(
				// includes the day-of-week class
				// noThemeHighlight=true (don't highlight the header)
				this.getDayClasses(date, true)
			);
		}
		else {
			classNames.push('fc-' + dayIDs[date.day()]); // only add the day-of-week class
		}

		return '' +
            '<th class="' + classNames.join(' ') + '"' +
				((isDateValid && this.rowCnt) === 1 ?
					' data-date="' + date.format('YYYY-MM-DD') + '"' :
					'') +
				(colspan > 1 ?
					' colspan="' + colspan + '"' :
					'') +
				(otherAttrs ?
					' ' + otherAttrs :
					'') +
				'>' +
				(isDateValid ?
					// don't make a link if the heading could represent multiple days, or if there's only one day (forceOff)
					view.buildGotoAnchorHtml(
						{ date: date, forceOff: this.rowCnt > 1 || this.colCnt === 1 },
						innerHtml
					) :
					// if not valid, display text, but no link
					innerHtml
				) +
			'</th>';
	},


	/* Background Rendering
	------------------------------------------------------------------------------------------------------------------*/


	renderBgTrHtml: function(row) {
		return '' +
			'<tr>' +
				(this.isRTL ? '' : this.renderBgIntroHtml(row)) +
				this.renderBgCellsHtml(row) +
				(this.isRTL ? this.renderBgIntroHtml(row) : '') +
			'</tr>';
	},


	renderBgIntroHtml: function(row) {
		return this.renderIntroHtml(); // fall back to generic
	},


	renderBgCellsHtml: function(row) {
		var htmls = [];
		var col, date;

		for (col = 0; col < this.colCnt; col++) {
			date = this.getCellDate(row, col);
			htmls.push(this.renderBgCellHtml(date));
		}

		return htmls.join('');
	},


	renderBgCellHtml: function(date, otherAttrs) {
		var view = this.view;
		var isDateValid = isDateWithinRange(date, view.activeRange); // TODO: called too frequently. cache somehow.
		var classes = this.getDayClasses(date);

		classes.unshift('fc-day', view.widgetContentClass);

		return '<td class="' + classes.join(' ') + '"' +
			(isDateValid ?
				' data-date="' + date.format('YYYY-MM-DD') + '"' : // if date has a time, won't format it
				'') +
			(otherAttrs ?
				' ' + otherAttrs :
				'') +
			'></td>';
	},


	/* Generic
	------------------------------------------------------------------------------------------------------------------*/


	// Generates the default HTML intro for any row. User classes should override
	renderIntroHtml: function() {
	},


	// TODO: a generic method for dealing with <tr>, RTL, intro
	// when increment internalApiVersion
	// wrapTr (scheduler)


	/* Utils
	------------------------------------------------------------------------------------------------------------------*/


	// Applies the generic "intro" and "outro" HTML to the given cells.
	// Intro means the leftmost cell when the calendar is LTR and the rightmost cell when RTL. Vice-versa for outro.
	bookendCells: function(trEl) {
		var introHtml = this.renderIntroHtml();

		if (introHtml) {
			if (this.isRTL) {
				trEl.append(introHtml);
			}
			else {
				trEl.prepend(introHtml);
			}
		}
	}

};

;;

/* A component that renders a grid of whole-days that runs horizontally. There can be multiple rows, one per week.
----------------------------------------------------------------------------------------------------------------------*/

var DayGrid = FC.DayGrid = Grid.extend(DayTableMixin, {

	numbersVisible: false, // should render a row for day/week numbers? set by outside view. TODO: make internal
	bottomCoordPadding: 0, // hack for extending the hit area for the last row of the coordinate grid

	rowEls: null, // set of fake row elements
	cellEls: null, // set of whole-day elements comprising the row's background
	helperEls: null, // set of cell skeleton elements for rendering the mock event "helper"

	rowCoordCache: null,
	colCoordCache: null,


	// Renders the rows and columns into the component's `this.el`, which should already be assigned.
	// isRigid determins whether the individual rows should ignore the contents and be a constant height.
	// Relies on the view's colCnt and rowCnt. In the future, this component should probably be self-sufficient.
	renderDates: function(isRigid) {
		var view = this.view;
		var rowCnt = this.rowCnt;
		var colCnt = this.colCnt;
		var html = '';
		var row;
		var col;

		for (row = 0; row < rowCnt; row++) {
			html += this.renderDayRowHtml(row, isRigid);
		}
		this.el.html(html);

		this.rowEls = this.el.find('.fc-row');
		this.cellEls = this.el.find('.fc-day, .fc-disabled-day');

		this.rowCoordCache = new CoordCache({
			els: this.rowEls,
			isVertical: true
		});
		this.colCoordCache = new CoordCache({
			els: this.cellEls.slice(0, this.colCnt), // only the first row
			isHorizontal: true
		});

		// trigger dayRender with each cell's element
		for (row = 0; row < rowCnt; row++) {
			for (col = 0; col < colCnt; col++) {
				view.publiclyTrigger(
					'dayRender',
					null,
					this.getCellDate(row, col),
					this.getCellEl(row, col)
				);
			}
		}
	},


	unrenderDates: function() {
		this.removeSegPopover();
	},


	renderBusinessHours: function() {
		var segs = this.buildBusinessHourSegs(true); // wholeDay=true
		this.renderFill('businessHours', segs, 'bgevent');
	},


	unrenderBusinessHours: function() {
		this.unrenderFill('businessHours');
	},


	// Generates the HTML for a single row, which is a div that wraps a table.
	// `row` is the row number.
	renderDayRowHtml: function(row, isRigid) {
		var view = this.view;
		var classes = [ 'fc-row', 'fc-week', view.widgetContentClass ];

		if (isRigid) {
			classes.push('fc-rigid');
		}

		return '' +
			'<div class="' + classes.join(' ') + '">' +
				'<div class="fc-bg">' +
					'<table>' +
						this.renderBgTrHtml(row) +
					'</table>' +
				'</div>' +
				'<div class="fc-content-skeleton">' +
					'<table>' +
						(this.numbersVisible ?
							'<thead>' +
								this.renderNumberTrHtml(row) +
							'</thead>' :
							''
							) +
					'</table>' +
				'</div>' +
			'</div>';
	},


	/* Grid Number Rendering
	------------------------------------------------------------------------------------------------------------------*/


	renderNumberTrHtml: function(row) {
		return '' +
			'<tr>' +
				(this.isRTL ? '' : this.renderNumberIntroHtml(row)) +
				this.renderNumberCellsHtml(row) +
				(this.isRTL ? this.renderNumberIntroHtml(row) : '') +
			'</tr>';
	},


	renderNumberIntroHtml: function(row) {
		return this.renderIntroHtml();
	},


	renderNumberCellsHtml: function(row) {
		var htmls = [];
		var col, date;

		for (col = 0; col < this.colCnt; col++) {
			date = this.getCellDate(row, col);
			htmls.push(this.renderNumberCellHtml(date));
		}

		return htmls.join('');
	},


	// Generates the HTML for the <td>s of the "number" row in the DayGrid's content skeleton.
	// The number row will only exist if either day numbers or week numbers are turned on.
	renderNumberCellHtml: function(date) {
		var view = this.view;
		var html = '';
		var isDateValid = isDateWithinRange(date, view.activeRange); // TODO: called too frequently. cache somehow.
		var isDayNumberVisible = view.dayNumbersVisible && isDateValid;
		var classes;
		var weekCalcFirstDoW;

		if (!isDayNumberVisible && !view.cellWeekNumbersVisible) {
			// no numbers in day cell (week number must be along the side)
			return '<td/>'; //  will create an empty space above events :(
		}

		classes = this.getDayClasses(date);
		classes.unshift('fc-day-top');

		if (view.cellWeekNumbersVisible) {
			// To determine the day of week number change under ISO, we cannot
			// rely on moment.js methods such as firstDayOfWeek() or weekday(),
			// because they rely on the locale's dow (possibly overridden by
			// our firstDay option), which may not be Monday. We cannot change
			// dow, because that would affect the calendar start day as well.
			if (date._locale._fullCalendar_weekCalc === 'ISO') {
				weekCalcFirstDoW = 1;  // Monday by ISO 8601 definition
			}
			else {
				weekCalcFirstDoW = date._locale.firstDayOfWeek();
			}
		}

		html += '<td class="' + classes.join(' ') + '"' +
			(isDateValid ?
				' data-date="' + date.format() + '"' :
				''
				) +
			'>';

		if (view.cellWeekNumbersVisible && (date.day() == weekCalcFirstDoW)) {
			html += view.buildGotoAnchorHtml(
				{ date: date, type: 'week' },
				{ 'class': 'fc-week-number' },
				date.format('w') // inner HTML
			);
		}

		if (isDayNumberVisible) {
			html += view.buildGotoAnchorHtml(
				date,
				{ 'class': 'fc-day-number' },
				date.date() // inner HTML
			);
		}

		html += '</td>';

		return html;
	},


	/* Options
	------------------------------------------------------------------------------------------------------------------*/


	// Computes a default event time formatting string if `timeFormat` is not explicitly defined
	computeEventTimeFormat: function() {
		return this.view.opt('extraSmallTimeFormat'); // like "6p" or "6:30p"
	},


	// Computes a default `displayEventEnd` value if one is not expliclty defined
	computeDisplayEventEnd: function() {
		return this.colCnt == 1; // we'll likely have space if there's only one day
	},


	/* Dates
	------------------------------------------------------------------------------------------------------------------*/


	rangeUpdated: function() {
		this.updateDayTable();
	},


	// Slices up the given span (unzoned start/end with other misc data) into an array of segments
	spanToSegs: function(span) {
		var segs = this.sliceRangeByRow(span);
		var i, seg;

		for (i = 0; i < segs.length; i++) {
			seg = segs[i];
			if (this.isRTL) {
				seg.leftCol = this.daysPerRow - 1 - seg.lastRowDayIndex;
				seg.rightCol = this.daysPerRow - 1 - seg.firstRowDayIndex;
			}
			else {
				seg.leftCol = seg.firstRowDayIndex;
				seg.rightCol = seg.lastRowDayIndex;
			}
		}

		return segs;
	},


	/* Hit System
	------------------------------------------------------------------------------------------------------------------*/


	prepareHits: function() {
		this.colCoordCache.build();
		this.rowCoordCache.build();
		this.rowCoordCache.bottoms[this.rowCnt - 1] += this.bottomCoordPadding; // hack
	},


	releaseHits: function() {
		this.colCoordCache.clear();
		this.rowCoordCache.clear();
	},


	queryHit: function(leftOffset, topOffset) {
		if (this.colCoordCache.isLeftInBounds(leftOffset) && this.rowCoordCache.isTopInBounds(topOffset)) {
			var col = this.colCoordCache.getHorizontalIndex(leftOffset);
			var row = this.rowCoordCache.getVerticalIndex(topOffset);

			if (row != null && col != null) {
				return this.getCellHit(row, col);
			}
		}
	},


	getHitSpan: function(hit) {
		return this.getCellRange(hit.row, hit.col);
	},


	getHitEl: function(hit) {
		return this.getCellEl(hit.row, hit.col);
	},


	/* Cell System
	------------------------------------------------------------------------------------------------------------------*/
	// FYI: the first column is the leftmost column, regardless of date


	getCellHit: function(row, col) {
		return {
			row: row,
			col: col,
			component: this, // needed unfortunately :(
			left: this.colCoordCache.getLeftOffset(col),
			right: this.colCoordCache.getRightOffset(col),
			top: this.rowCoordCache.getTopOffset(row),
			bottom: this.rowCoordCache.getBottomOffset(row)
		};
	},


	getCellEl: function(row, col) {
		return this.cellEls.eq(row * this.colCnt + col);
	},


	/* Event Drag Visualization
	------------------------------------------------------------------------------------------------------------------*/
	// TODO: move to DayGrid.event, similar to what we did with Grid's drag methods


	// Renders a visual indication of an event or external element being dragged.
	// `eventLocation` has zoned start and end (optional)
	renderDrag: function(eventLocation, seg) {
		var eventSpans = this.eventToSpans(eventLocation);
		var i;

		// always render a highlight underneath
		for (i = 0; i < eventSpans.length; i++) {
			this.renderHighlight(eventSpans[i]);
		}

		// if a segment from the same calendar but another component is being dragged, render a helper event
		if (seg && seg.component !== this) {
			return this.renderEventLocationHelper(eventLocation, seg); // returns mock event elements
		}
	},


	// Unrenders any visual indication of a hovering event
	unrenderDrag: function() {
		this.unrenderHighlight();
		this.unrenderHelper();
	},


	/* Event Resize Visualization
	------------------------------------------------------------------------------------------------------------------*/


	// Renders a visual indication of an event being resized
	renderEventResize: function(eventLocation, seg) {
		var eventSpans = this.eventToSpans(eventLocation);
		var i;

		for (i = 0; i < eventSpans.length; i++) {
			this.renderHighlight(eventSpans[i]);
		}

		return this.renderEventLocationHelper(eventLocation, seg); // returns mock event elements
	},


	// Unrenders a visual indication of an event being resized
	unrenderEventResize: function() {
		this.unrenderHighlight();
		this.unrenderHelper();
	},


	/* Event Helper
	------------------------------------------------------------------------------------------------------------------*/


	// Renders a mock "helper" event. `sourceSeg` is the associated internal segment object. It can be null.
	renderHelper: function(event, sourceSeg) {
		var helperNodes = [];
		var segs = this.eventToSegs(event);
		var rowStructs;

		segs = this.renderFgSegEls(segs); // assigns each seg's el and returns a subset of segs that were rendered
		rowStructs = this.renderSegRows(segs);

		// inject each new event skeleton into each associated row
		this.rowEls.each(function(row, rowNode) {
			var rowEl = $(rowNode); // the .fc-row
			var skeletonEl = $('<div class="fc-helper-skeleton"><table/></div>'); // will be absolutely positioned
			var skeletonTop;

			// If there is an original segment, match the top position. Otherwise, put it at the row's top level
			if (sourceSeg && sourceSeg.row === row) {
				skeletonTop = sourceSeg.el.position().top;
			}
			else {
				skeletonTop = rowEl.find('.fc-content-skeleton tbody').position().top;
			}

			skeletonEl.css('top', skeletonTop)
				.find('table')
					.append(rowStructs[row].tbodyEl);

			rowEl.append(skeletonEl);
			helperNodes.push(skeletonEl[0]);
		});

		return ( // must return the elements rendered
			this.helperEls = $(helperNodes) // array -> jQuery set
		);
	},


	// Unrenders any visual indication of a mock helper event
	unrenderHelper: function() {
		if (this.helperEls) {
			this.helperEls.remove();
			this.helperEls = null;
		}
	},


	/* Fill System (highlight, background events, business hours)
	------------------------------------------------------------------------------------------------------------------*/


	fillSegTag: 'td', // override the default tag name


	// Renders a set of rectangles over the given segments of days.
	// Only returns segments that successfully rendered.
	renderFill: function(type, segs, className) {
		var nodes = [];
		var i, seg;
		var skeletonEl;

		segs = this.renderFillSegEls(type, segs); // assignes `.el` to each seg. returns successfully rendered segs

		for (i = 0; i < segs.length; i++) {
			seg = segs[i];
			skeletonEl = this.renderFillRow(type, seg, className);
			this.rowEls.eq(seg.row).append(skeletonEl);
			nodes.push(skeletonEl[0]);
		}

		this.elsByFill[type] = $(nodes);

		return segs;
	},


	// Generates the HTML needed for one row of a fill. Requires the seg's el to be rendered.
	renderFillRow: function(type, seg, className) {
		var colCnt = this.colCnt;
		var startCol = seg.leftCol;
		var endCol = seg.rightCol + 1;
		var skeletonEl;
		var trEl;

		className = className || type.toLowerCase();

		skeletonEl = $(
			'<div class="fc-' + className + '-skeleton">' +
				'<table><tr/></table>' +
			'</div>'
		);
		trEl = skeletonEl.find('tr');

		if (startCol > 0) {
			trEl.append('<td colspan="' + startCol + '"/>');
		}

		trEl.append(
			seg.el.attr('colspan', endCol - startCol)
		);

		if (endCol < colCnt) {
			trEl.append('<td colspan="' + (colCnt - endCol) + '"/>');
		}

		this.bookendCells(trEl);

		return skeletonEl;
	}

});

;;

/* Event-rendering methods for the DayGrid class
----------------------------------------------------------------------------------------------------------------------*/

DayGrid.mixin({

	rowStructs: null, // an array of objects, each holding information about a row's foreground event-rendering


	// Unrenders all events currently rendered on the grid
	unrenderEvents: function() {
		this.removeSegPopover(); // removes the "more.." events popover
		Grid.prototype.unrenderEvents.apply(this, arguments); // calls the super-method
	},


	// Retrieves all rendered segment objects currently rendered on the grid
	getEventSegs: function() {
		return Grid.prototype.getEventSegs.call(this) // get the segments from the super-method
			.concat(this.popoverSegs || []); // append the segments from the "more..." popover
	},


	// Renders the given background event segments onto the grid
	renderBgSegs: function(segs) {

		// don't render timed background events
		var allDaySegs = $.grep(segs, function(seg) {
			return seg.event.allDay;
		});

		return Grid.prototype.renderBgSegs.call(this, allDaySegs); // call the super-method
	},


	// Renders the given foreground event segments onto the grid
	renderFgSegs: function(segs) {
		var rowStructs;

		// render an `.el` on each seg
		// returns a subset of the segs. segs that were actually rendered
		segs = this.renderFgSegEls(segs);

		rowStructs = this.rowStructs = this.renderSegRows(segs);

		// append to each row's content skeleton
		this.rowEls.each(function(i, rowNode) {
			$(rowNode).find('.fc-content-skeleton > table').append(
				rowStructs[i].tbodyEl
			);
		});

		return segs; // return only the segs that were actually rendered
	},


	// Unrenders all currently rendered foreground event segments
	unrenderFgSegs: function() {
		var rowStructs = this.rowStructs || [];
		var rowStruct;

		while ((rowStruct = rowStructs.pop())) {
			rowStruct.tbodyEl.remove();
		}

		this.rowStructs = null;
	},


	// Uses the given events array to generate <tbody> elements that should be appended to each row's content skeleton.
	// Returns an array of rowStruct objects (see the bottom of `renderSegRow`).
	// PRECONDITION: each segment shoud already have a rendered and assigned `.el`
	renderSegRows: function(segs) {
		var rowStructs = [];
		var segRows;
		var row;

		segRows = this.groupSegRows(segs); // group into nested arrays

		// iterate each row of segment groupings
		for (row = 0; row < segRows.length; row++) {
			rowStructs.push(
				this.renderSegRow(row, segRows[row])
			);
		}

		return rowStructs;
	},


	// Builds the HTML to be used for the default element for an individual segment
	fgSegHtml: function(seg, disableResizing) {
		var view = this.view;
		var event = seg.event;
		var isDraggable = view.isEventDraggable(event);
		var isResizableFromStart = !disableResizing && event.allDay &&
			seg.isStart && view.isEventResizableFromStart(event);
		var isResizableFromEnd = !disableResizing && event.allDay &&
			seg.isEnd && view.isEventResizableFromEnd(event);
		var classes = this.getSegClasses(seg, isDraggable, isResizableFromStart || isResizableFromEnd);
		var skinCss = cssToStr(this.getSegSkinCss(seg));
		var timeHtml = '';
		var timeText;
		var titleHtml;

		classes.unshift('fc-day-grid-event', 'fc-h-event');

		// Only display a timed events time if it is the starting segment
		if (seg.isStart) {
			timeText = this.getEventTimeText(event);
			if (timeText) {
				timeHtml = '<span class="fc-time">' + htmlEscape(timeText) + '</span>';
			}
		}

		titleHtml =
			'<span class="fc-title">' +
				(htmlEscape(event.title || '') || '&nbsp;') + // we always want one line of height
			'</span>';
		
		return '<a class="' + classes.join(' ') + '"' +
				(event.url ?
					' href="' + htmlEscape(event.url) + '"' :
					''
					) +
				(skinCss ?
					' style="' + skinCss + '"' :
					''
					) +
			'>' +
				'<div class="fc-content">' +
					(this.isRTL ?
						titleHtml + ' ' + timeHtml : // put a natural space in between
						timeHtml + ' ' + titleHtml   //
						) +
				'</div>' +
				(isResizableFromStart ?
					'<div class="fc-resizer fc-start-resizer" />' :
					''
					) +
				(isResizableFromEnd ?
					'<div class="fc-resizer fc-end-resizer" />' :
					''
					) +
			'</a>';
	},


	// Given a row # and an array of segments all in the same row, render a <tbody> element, a skeleton that contains
	// the segments. Returns object with a bunch of internal data about how the render was calculated.
	// NOTE: modifies rowSegs
	renderSegRow: function(row, rowSegs) {
		var colCnt = this.colCnt;
		var segLevels = this.buildSegLevels(rowSegs); // group into sub-arrays of levels
		var levelCnt = Math.max(1, segLevels.length); // ensure at least one level
		var tbody = $('<tbody/>');
		var segMatrix = []; // lookup for which segments are rendered into which level+col cells
		var cellMatrix = []; // lookup for all <td> elements of the level+col matrix
		var loneCellMatrix = []; // lookup for <td> elements that only take up a single column
		var i, levelSegs;
		var col;
		var tr;
		var j, seg;
		var td;

		// populates empty cells from the current column (`col`) to `endCol`
		function emptyCellsUntil(endCol) {
			while (col < endCol) {
				// try to grab a cell from the level above and extend its rowspan. otherwise, create a fresh cell
				td = (loneCellMatrix[i - 1] || [])[col];
				if (td) {
					td.attr(
						'rowspan',
						parseInt(td.attr('rowspan') || 1, 10) + 1
					);
				}
				else {
					td = $('<td/>');
					tr.append(td);
				}
				cellMatrix[i][col] = td;
				loneCellMatrix[i][col] = td;
				col++;
			}
		}

		for (i = 0; i < levelCnt; i++) { // iterate through all levels
			levelSegs = segLevels[i];
			col = 0;
			tr = $('<tr/>');

			segMatrix.push([]);
			cellMatrix.push([]);
			loneCellMatrix.push([]);

			// levelCnt might be 1 even though there are no actual levels. protect against this.
			// this single empty row is useful for styling.
			if (levelSegs) {
				for (j = 0; j < levelSegs.length; j++) { // iterate through segments in level
					seg = levelSegs[j];

					emptyCellsUntil(seg.leftCol);

					// create a container that occupies or more columns. append the event element.
					td = $('<td class="fc-event-container"/>').append(seg.el);
					if (seg.leftCol != seg.rightCol) {
						td.attr('colspan', seg.rightCol - seg.leftCol + 1);
					}
					else { // a single-column segment
						loneCellMatrix[i][col] = td;
					}

					while (col <= seg.rightCol) {
						cellMatrix[i][col] = td;
						segMatrix[i][col] = seg;
						col++;
					}

					tr.append(td);
				}
			}

			emptyCellsUntil(colCnt); // finish off the row
			this.bookendCells(tr);
			tbody.append(tr);
		}

		return { // a "rowStruct"
			row: row, // the row number
			tbodyEl: tbody,
			cellMatrix: cellMatrix,
			segMatrix: segMatrix,
			segLevels: segLevels,
			segs: rowSegs
		};
	},


	// Stacks a flat array of segments, which are all assumed to be in the same row, into subarrays of vertical levels.
	// NOTE: modifies segs
	buildSegLevels: function(segs) {
		var levels = [];
		var i, seg;
		var j;

		// Give preference to elements with certain criteria, so they have
		// a chance to be closer to the top.
		this.sortEventSegs(segs);
		
		for (i = 0; i < segs.length; i++) {
			seg = segs[i];

			// loop through levels, starting with the topmost, until the segment doesn't collide with other segments
			for (j = 0; j < levels.length; j++) {
				if (!isDaySegCollision(seg, levels[j])) {
					break;
				}
			}
			// `j` now holds the desired subrow index
			seg.level = j;

			// create new level array if needed and append segment
			(levels[j] || (levels[j] = [])).push(seg);
		}

		// order segments left-to-right. very important if calendar is RTL
		for (j = 0; j < levels.length; j++) {
			levels[j].sort(compareDaySegCols);
		}

		return levels;
	},


	// Given a flat array of segments, return an array of sub-arrays, grouped by each segment's row
	groupSegRows: function(segs) {
		var segRows = [];
		var i;

		for (i = 0; i < this.rowCnt; i++) {
			segRows.push([]);
		}

		for (i = 0; i < segs.length; i++) {
			segRows[segs[i].row].push(segs[i]);
		}

		return segRows;
	}

});


// Computes whether two segments' columns collide. They are assumed to be in the same row.
function isDaySegCollision(seg, otherSegs) {
	var i, otherSeg;

	for (i = 0; i < otherSegs.length; i++) {
		otherSeg = otherSegs[i];

		if (
			otherSeg.leftCol <= seg.rightCol &&
			otherSeg.rightCol >= seg.leftCol
		) {
			return true;
		}
	}

	return false;
}


// A cmp function for determining the leftmost event
function compareDaySegCols(a, b) {
	return a.leftCol - b.leftCol;
}

;;

/* Methods relate to limiting the number events for a given day on a DayGrid
----------------------------------------------------------------------------------------------------------------------*/
// NOTE: all the segs being passed around in here are foreground segs

DayGrid.mixin({

	segPopover: null, // the Popover that holds events that can't fit in a cell. null when not visible
	popoverSegs: null, // an array of segment objects that the segPopover holds. null when not visible


	removeSegPopover: function() {
		if (this.segPopover) {
			this.segPopover.hide(); // in handler, will call segPopover's removeElement
		}
	},


	// Limits the number of "levels" (vertically stacking layers of events) for each row of the grid.
	// `levelLimit` can be false (don't limit), a number, or true (should be computed).
	limitRows: function(levelLimit) {
		var rowStructs = this.rowStructs || [];
		var row; // row #
		var rowLevelLimit;

		for (row = 0; row < rowStructs.length; row++) {
			this.unlimitRow(row);

			if (!levelLimit) {
				rowLevelLimit = false;
			}
			else if (typeof levelLimit === 'number') {
				rowLevelLimit = levelLimit;
			}
			else {
				rowLevelLimit = this.computeRowLevelLimit(row);
			}

			if (rowLevelLimit !== false) {
				this.limitRow(row, rowLevelLimit);
			}
		}
	},


	// Computes the number of levels a row will accomodate without going outside its bounds.
	// Assumes the row is "rigid" (maintains a constant height regardless of what is inside).
	// `row` is the row number.
	computeRowLevelLimit: function(row) {
		var rowEl = this.rowEls.eq(row); // the containing "fake" row div
		var rowHeight = rowEl.height(); // TODO: cache somehow?
		var trEls = this.rowStructs[row].tbodyEl.children();
		var i, trEl;
		var trHeight;

		function iterInnerHeights(i, childNode) {
			trHeight = Math.max(trHeight, $(childNode).outerHeight());
		}

		// Reveal one level <tr> at a time and stop when we find one out of bounds
		for (i = 0; i < trEls.length; i++) {
			trEl = trEls.eq(i).removeClass('fc-limited'); // reset to original state (reveal)

			// with rowspans>1 and IE8, trEl.outerHeight() would return the height of the largest cell,
			// so instead, find the tallest inner content element.
			trHeight = 0;
			trEl.find('> td > :first-child').each(iterInnerHeights);

			if (trEl.position().top + trHeight > rowHeight) {
				return i;
			}
		}

		return false; // should not limit at all
	},


	// Limits the given grid row to the maximum number of levels and injects "more" links if necessary.
	// `row` is the row number.
	// `levelLimit` is a number for the maximum (inclusive) number of levels allowed.
	limitRow: function(row, levelLimit) {
		var _this = this;
		var rowStruct = this.rowStructs[row];
		var moreNodes = []; // array of "more" <a> links and <td> DOM nodes
		var col = 0; // col #, left-to-right (not chronologically)
		var levelSegs; // array of segment objects in the last allowable level, ordered left-to-right
		var cellMatrix; // a matrix (by level, then column) of all <td> jQuery elements in the row
		var limitedNodes; // array of temporarily hidden level <tr> and segment <td> DOM nodes
		var i, seg;
		var segsBelow; // array of segment objects below `seg` in the current `col`
		var totalSegsBelow; // total number of segments below `seg` in any of the columns `seg` occupies
		var colSegsBelow; // array of segment arrays, below seg, one for each column (offset from segs's first column)
		var td, rowspan;
		var segMoreNodes; // array of "more" <td> cells that will stand-in for the current seg's cell
		var j;
		var moreTd, moreWrap, moreLink;

		// Iterates through empty level cells and places "more" links inside if need be
		function emptyCellsUntil(endCol) { // goes from current `col` to `endCol`
			while (col < endCol) {
				segsBelow = _this.getCellSegs(row, col, levelLimit);
				if (segsBelow.length) {
					td = cellMatrix[levelLimit - 1][col];
					moreLink = _this.renderMoreLink(row, col, segsBelow);
					moreWrap = $('<div/>').append(moreLink);
					td.append(moreWrap);
					moreNodes.push(moreWrap[0]);
				}
				col++;
			}
		}

		if (levelLimit && levelLimit < rowStruct.segLevels.length) { // is it actually over the limit?
			levelSegs = rowStruct.segLevels[levelLimit - 1];
			cellMatrix = rowStruct.cellMatrix;

			limitedNodes = rowStruct.tbodyEl.children().slice(levelLimit) // get level <tr> elements past the limit
				.addClass('fc-limited').get(); // hide elements and get a simple DOM-nodes array

			// iterate though segments in the last allowable level
			for (i = 0; i < levelSegs.length; i++) {
				seg = levelSegs[i];
				emptyCellsUntil(seg.leftCol); // process empty cells before the segment

				// determine *all* segments below `seg` that occupy the same columns
				colSegsBelow = [];
				totalSegsBelow = 0;
				while (col <= seg.rightCol) {
					segsBelow = this.getCellSegs(row, col, levelLimit);
					colSegsBelow.push(segsBelow);
					totalSegsBelow += segsBelow.length;
					col++;
				}

				if (totalSegsBelow) { // do we need to replace this segment with one or many "more" links?
					td = cellMatrix[levelLimit - 1][seg.leftCol]; // the segment's parent cell
					rowspan = td.attr('rowspan') || 1;
					segMoreNodes = [];

					// make a replacement <td> for each column the segment occupies. will be one for each colspan
					for (j = 0; j < colSegsBelow.length; j++) {
						moreTd = $('<td class="fc-more-cell"/>').attr('rowspan', rowspan);
						segsBelow = colSegsBelow[j];
						moreLink = this.renderMoreLink(
							row,
							seg.leftCol + j,
							[ seg ].concat(segsBelow) // count seg as hidden too
						);
						moreWrap = $('<div/>').append(moreLink);
						moreTd.append(moreWrap);
						segMoreNodes.push(moreTd[0]);
						moreNodes.push(moreTd[0]);
					}

					td.addClass('fc-limited').after($(segMoreNodes)); // hide original <td> and inject replacements
					limitedNodes.push(td[0]);
				}
			}

			emptyCellsUntil(this.colCnt); // finish off the level
			rowStruct.moreEls = $(moreNodes); // for easy undoing later
			rowStruct.limitedEls = $(limitedNodes); // for easy undoing later
		}
	},


	// Reveals all levels and removes all "more"-related elements for a grid's row.
	// `row` is a row number.
	unlimitRow: function(row) {
		var rowStruct = this.rowStructs[row];

		if (rowStruct.moreEls) {
			rowStruct.moreEls.remove();
			rowStruct.moreEls = null;
		}

		if (rowStruct.limitedEls) {
			rowStruct.limitedEls.removeClass('fc-limited');
			rowStruct.limitedEls = null;
		}
	},


	// Renders an <a> element that represents hidden event element for a cell.
	// Responsible for attaching click handler as well.
	renderMoreLink: function(row, col, hiddenSegs) {
		var _this = this;
		var view = this.view;

		return $('<a class="fc-more"/>')
			.text(
				this.getMoreLinkText(hiddenSegs.length)
			)
			.on('click', function(ev) {
				var clickOption = view.opt('eventLimitClick');
				var date = _this.getCellDate(row, col);
				var moreEl = $(this);
				var dayEl = _this.getCellEl(row, col);
				var allSegs = _this.getCellSegs(row, col);

				// rescope the segments to be within the cell's date
				var reslicedAllSegs = _this.resliceDaySegs(allSegs, date);
				var reslicedHiddenSegs = _this.resliceDaySegs(hiddenSegs, date);

				if (typeof clickOption === 'function') {
					// the returned value can be an atomic option
					clickOption = view.publiclyTrigger('eventLimitClick', null, {
						date: date,
						dayEl: dayEl,
						moreEl: moreEl,
						segs: reslicedAllSegs,
						hiddenSegs: reslicedHiddenSegs
					}, ev);
				}

				if (clickOption === 'popover') {
					_this.showSegPopover(row, col, moreEl, reslicedAllSegs);
				}
				else if (typeof clickOption === 'string') { // a view name
					view.calendar.zoomTo(date, clickOption);
				}
			});
	},


	// Reveals the popover that displays all events within a cell
	showSegPopover: function(row, col, moreLink, segs) {
		var _this = this;
		var view = this.view;
		var moreWrap = moreLink.parent(); // the <div> wrapper around the <a>
		var topEl; // the element we want to match the top coordinate of
		var options;

		if (this.rowCnt == 1) {
			topEl = view.el; // will cause the popover to cover any sort of header
		}
		else {
			topEl = this.rowEls.eq(row); // will align with top of row
		}

		options = {
			className: 'fc-more-popover',
			content: this.renderSegPopoverContent(row, col, segs),
			parentEl: this.view.el, // attach to root of view. guarantees outside of scrollbars.
			top: topEl.offset().top,
			autoHide: true, // when the user clicks elsewhere, hide the popover
			viewportConstrain: view.opt('popoverViewportConstrain'),
			hide: function() {
				// kill everything when the popover is hidden
				// notify events to be removed
				if (_this.popoverSegs) {
					var seg;
					for (var i = 0; i < _this.popoverSegs.length; ++i) {
						seg = _this.popoverSegs[i];
						view.publiclyTrigger('eventDestroy', seg.event, seg.event, seg.el);
					}
				}
				_this.segPopover.removeElement();
				_this.segPopover = null;
				_this.popoverSegs = null;
			}
		};

		// Determine horizontal coordinate.
		// We use the moreWrap instead of the <td> to avoid border confusion.
		if (this.isRTL) {
			options.right = moreWrap.offset().left + moreWrap.outerWidth() + 1; // +1 to be over cell border
		}
		else {
			options.left = moreWrap.offset().left - 1; // -1 to be over cell border
		}

		this.segPopover = new Popover(options);
		this.segPopover.show();

		// the popover doesn't live within the grid's container element, and thus won't get the event
		// delegated-handlers for free. attach event-related handlers to the popover.
		this.bindSegHandlersToEl(this.segPopover.el);
	},


	// Builds the inner DOM contents of the segment popover
	renderSegPopoverContent: function(row, col, segs) {
		var view = this.view;
		var isTheme = view.opt('theme');
		var title = this.getCellDate(row, col).format(view.opt('dayPopoverFormat'));
		var content = $(
			'<div class="fc-header ' + view.widgetHeaderClass + '">' +
				'<span class="fc-close ' +
					(isTheme ? 'ui-icon ui-icon-closethick' : 'fc-icon fc-icon-x') +
				'"></span>' +
				'<span class="fc-title">' +
					htmlEscape(title) +
				'</span>' +
				'<div class="fc-clear"/>' +
			'</div>' +
			'<div class="fc-body ' + view.widgetContentClass + '">' +
				'<div class="fc-event-container"></div>' +
			'</div>'
		);
		var segContainer = content.find('.fc-event-container');
		var i;

		// render each seg's `el` and only return the visible segs
		segs = this.renderFgSegEls(segs, true); // disableResizing=true
		this.popoverSegs = segs;

		for (i = 0; i < segs.length; i++) {

			// because segments in the popover are not part of a grid coordinate system, provide a hint to any
			// grids that want to do drag-n-drop about which cell it came from
			this.hitsNeeded();
			segs[i].hit = this.getCellHit(row, col);
			this.hitsNotNeeded();

			segContainer.append(segs[i].el);
		}

		return content;
	},


	// Given the events within an array of segment objects, reslice them to be in a single day
	resliceDaySegs: function(segs, dayDate) {

		// build an array of the original events
		var events = $.map(segs, function(seg) {
			return seg.event;
		});

		var dayStart = dayDate.clone();
		var dayEnd = dayStart.clone().add(1, 'days');
		var dayRange = { start: dayStart, end: dayEnd };

		// slice the events with a custom slicing function
		segs = this.eventsToSegs(
			events,
			function(range) {
				var seg = intersectRanges(range, dayRange); // undefind if no intersection
				return seg ? [ seg ] : []; // must return an array of segments
			}
		);

		// force an order because eventsToSegs doesn't guarantee one
		this.sortEventSegs(segs);

		return segs;
	},


	// Generates the text that should be inside a "more" link, given the number of events it represents
	getMoreLinkText: function(num) {
		var opt = this.view.opt('eventLimitText');

		if (typeof opt === 'function') {
			return opt(num);
		}
		else {
			return '+' + num + ' ' + opt;
		}
	},


	// Returns segments within a given cell.
	// If `startLevel` is specified, returns only events including and below that level. Otherwise returns all segs.
	getCellSegs: function(row, col, startLevel) {
		var segMatrix = this.rowStructs[row].segMatrix;
		var level = startLevel || 0;
		var segs = [];
		var seg;

		while (level < segMatrix.length) {
			seg = segMatrix[level][col];
			if (seg) {
				segs.push(seg);
			}
			level++;
		}

		return segs;
	}

});

;;

/* A component that renders one or more columns of vertical time slots
----------------------------------------------------------------------------------------------------------------------*/
// We mixin DayTable, even though there is only a single row of days

var TimeGrid = FC.TimeGrid = Grid.extend(DayTableMixin, {

	slotDuration: null, // duration of a "slot", a distinct time segment on given day, visualized by lines
	snapDuration: null, // granularity of time for dragging and selecting
	snapsPerSlot: null,
	labelFormat: null, // formatting string for times running along vertical axis
	labelInterval: null, // duration of how often a label should be displayed for a slot

	colEls: null, // cells elements in the day-row background
	slatContainerEl: null, // div that wraps all the slat rows
	slatEls: null, // elements running horizontally across all columns
	nowIndicatorEls: null,

	colCoordCache: null,
	slatCoordCache: null,


	constructor: function() {
		Grid.apply(this, arguments); // call the super-constructor

		this.processOptions();
	},


	// Renders the time grid into `this.el`, which should already be assigned.
	// Relies on the view's colCnt. In the future, this component should probably be self-sufficient.
	renderDates: function() {
		this.el.html(this.renderHtml());
		this.colEls = this.el.find('.fc-day, .fc-disabled-day');
		this.slatContainerEl = this.el.find('.fc-slats');
		this.slatEls = this.slatContainerEl.find('tr');

		this.colCoordCache = new CoordCache({
			els: this.colEls,
			isHorizontal: true
		});
		this.slatCoordCache = new CoordCache({
			els: this.slatEls,
			isVertical: true
		});

		this.renderContentSkeleton();
	},


	// Renders the basic HTML skeleton for the grid
	renderHtml: function() {
		return '' +
			'<div class="fc-bg">' +
				'<table>' +
					this.renderBgTrHtml(0) + // row=0
				'</table>' +
			'</div>' +
			'<div class="fc-slats">' +
				'<table>' +
					this.renderSlatRowHtml() +
				'</table>' +
			'</div>';
	},


	// Generates the HTML for the horizontal "slats" that run width-wise. Has a time axis on a side. Depends on RTL.
	renderSlatRowHtml: function() {
		var view = this.view;
		var isRTL = this.isRTL;
		var html = '';
		var slotTime = moment.duration(+this.view.minTime); // wish there was .clone() for durations
		var slotDate; // will be on the view's first day, but we only care about its time
		var isLabeled;
		var axisHtml;

		// Calculate the time for each slot
		while (slotTime < this.view.maxTime) {
			slotDate = this.start.clone().time(slotTime);
			isLabeled = isInt(divideDurationByDuration(slotTime, this.labelInterval));

			axisHtml =
				'<td class="fc-axis fc-time ' + view.widgetContentClass + '" ' + view.axisStyleAttr() + '>' +
					(isLabeled ?
						'<span>' + // for matchCellWidths
							htmlEscape(slotDate.format(this.labelFormat)) +
						'</span>' :
						''
						) +
				'</td>';

			html +=
				'<tr data-time="' + slotDate.format('HH:mm:ss') + '"' +
					(isLabeled ? '' : ' class="fc-minor"') +
					'>' +
					(!isRTL ? axisHtml : '') +
					'<td class="' + view.widgetContentClass + '"/>' +
					(isRTL ? axisHtml : '') +
				"</tr>";

			slotTime.add(this.slotDuration);
		}

		return html;
	},


	/* Options
	------------------------------------------------------------------------------------------------------------------*/


	// Parses various options into properties of this object
	processOptions: function() {
		var view = this.view;
		var slotDuration = view.opt('slotDuration');
		var snapDuration = view.opt('snapDuration');
		var input;

		slotDuration = moment.duration(slotDuration);
		snapDuration = snapDuration ? moment.duration(snapDuration) : slotDuration;

		this.slotDuration = slotDuration;
		this.snapDuration = snapDuration;
		this.snapsPerSlot = slotDuration / snapDuration; // TODO: ensure an integer multiple?

		this.minResizeDuration = snapDuration; // hack

		// might be an array value (for TimelineView).
		// if so, getting the most granular entry (the last one probably).
		input = view.opt('slotLabelFormat');
		if ($.isArray(input)) {
			input = input[input.length - 1];
		}

		this.labelFormat =
			input ||
			view.opt('smallTimeFormat'); // the computed default

		input = view.opt('slotLabelInterval');
		this.labelInterval = input ?
			moment.duration(input) :
			this.computeLabelInterval(slotDuration);
	},


	// Computes an automatic value for slotLabelInterval
	computeLabelInterval: function(slotDuration) {
		var i;
		var labelInterval;
		var slotsPerLabel;

		// find the smallest stock label interval that results in more than one slots-per-label
		for (i = AGENDA_STOCK_SUB_DURATIONS.length - 1; i >= 0; i--) {
			labelInterval = moment.duration(AGENDA_STOCK_SUB_DURATIONS[i]);
			slotsPerLabel = divideDurationByDuration(labelInterval, slotDuration);
			if (isInt(slotsPerLabel) && slotsPerLabel > 1) {
				return labelInterval;
			}
		}

		return moment.duration(slotDuration); // fall back. clone
	},


	// Computes a default event time formatting string if `timeFormat` is not explicitly defined
	computeEventTimeFormat: function() {
		return this.view.opt('noMeridiemTimeFormat'); // like "6:30" (no AM/PM)
	},


	// Computes a default `displayEventEnd` value if one is not expliclty defined
	computeDisplayEventEnd: function() {
		return true;
	},


	/* Hit System
	------------------------------------------------------------------------------------------------------------------*/


	prepareHits: function() {
		this.colCoordCache.build();
		this.slatCoordCache.build();
	},


	releaseHits: function() {
		this.colCoordCache.clear();
		// NOTE: don't clear slatCoordCache because we rely on it for computeTimeTop
	},


	queryHit: function(leftOffset, topOffset) {
		var snapsPerSlot = this.snapsPerSlot;
		var colCoordCache = this.colCoordCache;
		var slatCoordCache = this.slatCoordCache;

		if (colCoordCache.isLeftInBounds(leftOffset) && slatCoordCache.isTopInBounds(topOffset)) {
			var colIndex = colCoordCache.getHorizontalIndex(leftOffset);
			var slatIndex = slatCoordCache.getVerticalIndex(topOffset);

			if (colIndex != null && slatIndex != null) {
				var slatTop = slatCoordCache.getTopOffset(slatIndex);
				var slatHeight = slatCoordCache.getHeight(slatIndex);
				var partial = (topOffset - slatTop) / slatHeight; // floating point number between 0 and 1
				var localSnapIndex = Math.floor(partial * snapsPerSlot); // the snap # relative to start of slat
				var snapIndex = slatIndex * snapsPerSlot + localSnapIndex;
				var snapTop = slatTop + (localSnapIndex / snapsPerSlot) * slatHeight;
				var snapBottom = slatTop + ((localSnapIndex + 1) / snapsPerSlot) * slatHeight;

				return {
					col: colIndex,
					snap: snapIndex,
					component: this, // needed unfortunately :(
					left: colCoordCache.getLeftOffset(colIndex),
					right: colCoordCache.getRightOffset(colIndex),
					top: snapTop,
					bottom: snapBottom
				};
			}
		}
	},


	getHitSpan: function(hit) {
		var start = this.getCellDate(0, hit.col); // row=0
		var time = this.computeSnapTime(hit.snap); // pass in the snap-index
		var end;

		start.time(time);
		end = start.clone().add(this.snapDuration);

		return { start: start, end: end };
	},


	getHitEl: function(hit) {
		return this.colEls.eq(hit.col);
	},


	/* Dates
	------------------------------------------------------------------------------------------------------------------*/


	rangeUpdated: function() {
		this.updateDayTable();
	},


	// Given a row number of the grid, representing a "snap", returns a time (Duration) from its start-of-day
	computeSnapTime: function(snapIndex) {
		return moment.duration(this.view.minTime + this.snapDuration * snapIndex);
	},


	// Slices up the given span (unzoned start/end with other misc data) into an array of segments
	spanToSegs: function(span) {
		var segs = this.sliceRangeByTimes(span);
		var i;

		for (i = 0; i < segs.length; i++) {
			if (this.isRTL) {
				segs[i].col = this.daysPerRow - 1 - segs[i].dayIndex;
			}
			else {
				segs[i].col = segs[i].dayIndex;
			}
		}

		return segs;
	},


	sliceRangeByTimes: function(range) {
		var segs = [];
		var seg;
		var dayIndex;
		var dayDate;
		var dayRange;

		for (dayIndex = 0; dayIndex < this.daysPerRow; dayIndex++) {
			dayDate = this.dayDates[dayIndex].clone().time(0); // TODO: better API for this?
			dayRange = {
				start: dayDate.clone().add(this.view.minTime), // don't use .time() because it sux with negatives
				end: dayDate.clone().add(this.view.maxTime)
			};
			seg = intersectRanges(range, dayRange); // both will be ambig timezone
			if (seg) {
				seg.dayIndex = dayIndex;
				segs.push(seg);
			}
		}

		return segs;
	},


	/* Coordinates
	------------------------------------------------------------------------------------------------------------------*/


	updateSize: function(isResize) { // NOT a standard Grid method
		this.slatCoordCache.build();

		if (isResize) {
			this.updateSegVerticals(
				[].concat(this.fgSegs || [], this.bgSegs || [], this.businessSegs || [])
			);
		}
	},


	getTotalSlatHeight: function() {
		return this.slatContainerEl.outerHeight();
	},


	// Computes the top coordinate, relative to the bounds of the grid, of the given date.
	// A `startOfDayDate` must be given for avoiding ambiguity over how to treat midnight.
	computeDateTop: function(date, startOfDayDate) {
		return this.computeTimeTop(
			moment.duration(
				date - startOfDayDate.clone().stripTime()
			)
		);
	},


	// Computes the top coordinate, relative to the bounds of the grid, of the given time (a Duration).
	computeTimeTop: function(time) {
		var len = this.slatEls.length;
		var slatCoverage = (time - this.view.minTime) / this.slotDuration; // floating-point value of # of slots covered
		var slatIndex;
		var slatRemainder;

		// compute a floating-point number for how many slats should be progressed through.
		// from 0 to number of slats (inclusive)
		// constrained because minTime/maxTime might be customized.
		slatCoverage = Math.max(0, slatCoverage);
		slatCoverage = Math.min(len, slatCoverage);

		// an integer index of the furthest whole slat
		// from 0 to number slats (*exclusive*, so len-1)
		slatIndex = Math.floor(slatCoverage);
		slatIndex = Math.min(slatIndex, len - 1);

		// how much further through the slatIndex slat (from 0.0-1.0) must be covered in addition.
		// could be 1.0 if slatCoverage is covering *all* the slots
		slatRemainder = slatCoverage - slatIndex;

		return this.slatCoordCache.getTopPosition(slatIndex) +
			this.slatCoordCache.getHeight(slatIndex) * slatRemainder;
	},



	/* Event Drag Visualization
	------------------------------------------------------------------------------------------------------------------*/


	// Renders a visual indication of an event being dragged over the specified date(s).
	// A returned value of `true` signals that a mock "helper" event has been rendered.
	renderDrag: function(eventLocation, seg) {
		var eventSpans;
		var i;

		if (seg) { // if there is event information for this drag, render a helper event

			// returns mock event elements
			// signal that a helper has been rendered
			return this.renderEventLocationHelper(eventLocation, seg);
		}
		else { // otherwise, just render a highlight
			eventSpans = this.eventToSpans(eventLocation);

			for (i = 0; i < eventSpans.length; i++) {
				this.renderHighlight(eventSpans[i]);
			}
		}
	},


	// Unrenders any visual indication of an event being dragged
	unrenderDrag: function() {
		this.unrenderHelper();
		this.unrenderHighlight();
	},


	/* Event Resize Visualization
	------------------------------------------------------------------------------------------------------------------*/


	// Renders a visual indication of an event being resized
	renderEventResize: function(eventLocation, seg) {
		return this.renderEventLocationHelper(eventLocation, seg); // returns mock event elements
	},


	// Unrenders any visual indication of an event being resized
	unrenderEventResize: function() {
		this.unrenderHelper();
	},


	/* Event Helper
	------------------------------------------------------------------------------------------------------------------*/


	// Renders a mock "helper" event. `sourceSeg` is the original segment object and might be null (an external drag)
	renderHelper: function(event, sourceSeg) {
		return this.renderHelperSegs(this.eventToSegs(event), sourceSeg); // returns mock event elements
	},


	// Unrenders any mock helper event
	unrenderHelper: function() {
		this.unrenderHelperSegs();
	},


	/* Business Hours
	------------------------------------------------------------------------------------------------------------------*/


	renderBusinessHours: function() {
		this.renderBusinessSegs(
			this.buildBusinessHourSegs()
		);
	},


	unrenderBusinessHours: function() {
		this.unrenderBusinessSegs();
	},


	/* Now Indicator
	------------------------------------------------------------------------------------------------------------------*/


	getNowIndicatorUnit: function() {
		return 'minute'; // will refresh on the minute
	},


	renderNowIndicator: function(date) {
		// seg system might be overkill, but it handles scenario where line needs to be rendered
		//  more than once because of columns with the same date (resources columns for example)
		var segs = this.spanToSegs({ start: date, end: date });
		var top = this.computeDateTop(date, date);
		var nodes = [];
		var i;

		// render lines within the columns
		for (i = 0; i < segs.length; i++) {
			nodes.push($('<div class="fc-now-indicator fc-now-indicator-line"></div>')
				.css('top', top)
				.appendTo(this.colContainerEls.eq(segs[i].col))[0]);
		}

		// render an arrow over the axis
		if (segs.length > 0) { // is the current time in view?
			nodes.push($('<div class="fc-now-indicator fc-now-indicator-arrow"></div>')
				.css('top', top)
				.appendTo(this.el.find('.fc-content-skeleton'))[0]);
		}

		this.nowIndicatorEls = $(nodes);
	},


	unrenderNowIndicator: function() {
		if (this.nowIndicatorEls) {
			this.nowIndicatorEls.remove();
			this.nowIndicatorEls = null;
		}
	},


	/* Selection
	------------------------------------------------------------------------------------------------------------------*/


	// Renders a visual indication of a selection. Overrides the default, which was to simply render a highlight.
	renderSelection: function(span) {
		if (this.view.opt('selectHelper')) { // this setting signals that a mock helper event should be rendered

			// normally acceps an eventLocation, span has a start/end, which is good enough
			this.renderEventLocationHelper(span);
		}
		else {
			this.renderHighlight(span);
		}
	},


	// Unrenders any visual indication of a selection
	unrenderSelection: function() {
		this.unrenderHelper();
		this.unrenderHighlight();
	},


	/* Highlight
	------------------------------------------------------------------------------------------------------------------*/


	renderHighlight: function(span) {
		this.renderHighlightSegs(this.spanToSegs(span));
	},


	unrenderHighlight: function() {
		this.unrenderHighlightSegs();
	}

});

;;

/* Methods for rendering SEGMENTS, pieces of content that live on the view
 ( this file is no longer just for events )
----------------------------------------------------------------------------------------------------------------------*/

TimeGrid.mixin({

	colContainerEls: null, // containers for each column

	// inner-containers for each column where different types of segs live
	fgContainerEls: null,
	bgContainerEls: null,
	helperContainerEls: null,
	highlightContainerEls: null,
	businessContainerEls: null,

	// arrays of different types of displayed segments
	fgSegs: null,
	bgSegs: null,
	helperSegs: null,
	highlightSegs: null,
	businessSegs: null,


	// Renders the DOM that the view's content will live in
	renderContentSkeleton: function() {
		var cellHtml = '';
		var i;
		var skeletonEl;

		for (i = 0; i < this.colCnt; i++) {
			cellHtml +=
				'<td>' +
					'<div class="fc-content-col">' +
						'<div class="fc-event-container fc-helper-container"></div>' +
						'<div class="fc-event-container"></div>' +
						'<div class="fc-highlight-container"></div>' +
						'<div class="fc-bgevent-container"></div>' +
						'<div class="fc-business-container"></div>' +
					'</div>' +
				'</td>';
		}

		skeletonEl = $(
			'<div class="fc-content-skeleton">' +
				'<table>' +
					'<tr>' + cellHtml + '</tr>' +
				'</table>' +
			'</div>'
		);

		this.colContainerEls = skeletonEl.find('.fc-content-col');
		this.helperContainerEls = skeletonEl.find('.fc-helper-container');
		this.fgContainerEls = skeletonEl.find('.fc-event-container:not(.fc-helper-container)');
		this.bgContainerEls = skeletonEl.find('.fc-bgevent-container');
		this.highlightContainerEls = skeletonEl.find('.fc-highlight-container');
		this.businessContainerEls = skeletonEl.find('.fc-business-container');

		this.bookendCells(skeletonEl.find('tr')); // TODO: do this on string level
		this.el.append(skeletonEl);
	},


	/* Foreground Events
	------------------------------------------------------------------------------------------------------------------*/


	renderFgSegs: function(segs) {
		segs = this.renderFgSegsIntoContainers(segs, this.fgContainerEls);
		this.fgSegs = segs;
		return segs; // needed for Grid::renderEvents
	},


	unrenderFgSegs: function() {
		this.unrenderNamedSegs('fgSegs');
	},


	/* Foreground Helper Events
	------------------------------------------------------------------------------------------------------------------*/


	renderHelperSegs: function(segs, sourceSeg) {
		var helperEls = [];
		var i, seg;
		var sourceEl;

		segs = this.renderFgSegsIntoContainers(segs, this.helperContainerEls);

		// Try to make the segment that is in the same row as sourceSeg look the same
		for (i = 0; i < segs.length; i++) {
			seg = segs[i];
			if (sourceSeg && sourceSeg.col === seg.col) {
				sourceEl = sourceSeg.el;
				seg.el.css({
					left: sourceEl.css('left'),
					right: sourceEl.css('right'),
					'margin-left': sourceEl.css('margin-left'),
					'margin-right': sourceEl.css('margin-right')
				});
			}
			helperEls.push(seg.el[0]);
		}

		this.helperSegs = segs;

		return $(helperEls); // must return rendered helpers
	},


	unrenderHelperSegs: function() {
		this.unrenderNamedSegs('helperSegs');
	},


	/* Background Events
	------------------------------------------------------------------------------------------------------------------*/


	renderBgSegs: function(segs) {
		segs = this.renderFillSegEls('bgEvent', segs); // TODO: old fill system
		this.updateSegVerticals(segs);
		this.attachSegsByCol(this.groupSegsByCol(segs), this.bgContainerEls);
		this.bgSegs = segs;
		return segs; // needed for Grid::renderEvents
	},


	unrenderBgSegs: function() {
		this.unrenderNamedSegs('bgSegs');
	},


	/* Highlight
	------------------------------------------------------------------------------------------------------------------*/


	renderHighlightSegs: function(segs) {
		segs = this.renderFillSegEls('highlight', segs); // TODO: old fill system
		this.updateSegVerticals(segs);
		this.attachSegsByCol(this.groupSegsByCol(segs), this.highlightContainerEls);
		this.highlightSegs = segs;
	},


	unrenderHighlightSegs: function() {
		this.unrenderNamedSegs('highlightSegs');
	},


	/* Business Hours
	------------------------------------------------------------------------------------------------------------------*/


	renderBusinessSegs: function(segs) {
		segs = this.renderFillSegEls('businessHours', segs); // TODO: old fill system
		this.updateSegVerticals(segs);
		this.attachSegsByCol(this.groupSegsByCol(segs), this.businessContainerEls);
		this.businessSegs = segs;
	},


	unrenderBusinessSegs: function() {
		this.unrenderNamedSegs('businessSegs');
	},


	/* Seg Rendering Utils
	------------------------------------------------------------------------------------------------------------------*/


	// Given a flat array of segments, return an array of sub-arrays, grouped by each segment's col
	groupSegsByCol: function(segs) {
		var segsByCol = [];
		var i;

		for (i = 0; i < this.colCnt; i++) {
			segsByCol.push([]);
		}

		for (i = 0; i < segs.length; i++) {
			segsByCol[segs[i].col].push(segs[i]);
		}

		return segsByCol;
	},


	// Given segments grouped by column, insert the segments' elements into a parallel array of container
	// elements, each living within a column.
	attachSegsByCol: function(segsByCol, containerEls) {
		var col;
		var segs;
		var i;

		for (col = 0; col < this.colCnt; col++) { // iterate each column grouping
			segs = segsByCol[col];

			for (i = 0; i < segs.length; i++) {
				containerEls.eq(col).append(segs[i].el);
			}
		}
	},


	// Given the name of a property of `this` object, assumed to be an array of segments,
	// loops through each segment and removes from DOM. Will null-out the property afterwards.
	unrenderNamedSegs: function(propName) {
		var segs = this[propName];
		var i;

		if (segs) {
			for (i = 0; i < segs.length; i++) {
				segs[i].el.remove();
			}
			this[propName] = null;
		}
	},



	/* Foreground Event Rendering Utils
	------------------------------------------------------------------------------------------------------------------*/


	// Given an array of foreground segments, render a DOM element for each, computes position,
	// and attaches to the column inner-container elements.
	renderFgSegsIntoContainers: function(segs, containerEls) {
		var segsByCol;
		var col;

		segs = this.renderFgSegEls(segs); // will call fgSegHtml
		segsByCol = this.groupSegsByCol(segs);

		for (col = 0; col < this.colCnt; col++) {
			this.updateFgSegCoords(segsByCol[col]);
		}

		this.attachSegsByCol(segsByCol, containerEls);

		return segs;
	},


	// Renders the HTML for a single event segment's default rendering
	fgSegHtml: function(seg, disableResizing) {
		var view = this.view;
		var event = seg.event;
		var isDraggable = view.isEventDraggable(event);
		var isResizableFromStart = !disableResizing && seg.isStart && view.isEventResizableFromStart(event);
		var isResizableFromEnd = !disableResizing && seg.isEnd && view.isEventResizableFromEnd(event);
		var classes = this.getSegClasses(seg, isDraggable, isResizableFromStart || isResizableFromEnd);
		var skinCss = cssToStr(this.getSegSkinCss(seg));
		var timeText;
		var fullTimeText; // more verbose time text. for the print stylesheet
		var startTimeText; // just the start time text

		classes.unshift('fc-time-grid-event', 'fc-v-event');

		if (view.isMultiDayEvent(event)) { // if the event appears to span more than one day...
			// Don't display time text on segments that run entirely through a day.
			// That would appear as midnight-midnight and would look dumb.
			// Otherwise, display the time text for the *segment's* times (like 6pm-midnight or midnight-10am)
			if (seg.isStart || seg.isEnd) {
				timeText = this.getEventTimeText(seg);
				fullTimeText = this.getEventTimeText(seg, 'LT');
				startTimeText = this.getEventTimeText(seg, null, false); // displayEnd=false
			}
		} else {
			// Display the normal time text for the *event's* times
			timeText = this.getEventTimeText(event);
			fullTimeText = this.getEventTimeText(event, 'LT');
			startTimeText = this.getEventTimeText(event, null, false); // displayEnd=false
		}

		return '<a class="' + classes.join(' ') + '"' +
			(event.url ?
				' href="' + htmlEscape(event.url) + '"' :
				''
				) +
			(skinCss ?
				' style="' + skinCss + '"' :
				''
				) +
			'>' +
				'<div class="fc-content">' +
					(timeText ?
						'<div class="fc-time"' +
						' data-start="' + htmlEscape(startTimeText) + '"' +
						' data-full="' + htmlEscape(fullTimeText) + '"' +
						'>' +
							'<span>' + htmlEscape(timeText) + '</span>' +
						'</div>' :
						''
						) +
					(event.title ?
						'<div class="fc-title">' +
							htmlEscape(event.title) +
						'</div>' :
						''
						) +
				'</div>' +
				'<div class="fc-bg"/>' +
				/* TODO: write CSS for this
				(isResizableFromStart ?
					'<div class="fc-resizer fc-start-resizer" />' :
					''
					) +
				*/
				(isResizableFromEnd ?
					'<div class="fc-resizer fc-end-resizer" />' :
					''
					) +
			'</a>';
	},


	/* Seg Position Utils
	------------------------------------------------------------------------------------------------------------------*/


	// Refreshes the CSS top/bottom coordinates for each segment element.
	// Works when called after initial render, after a window resize/zoom for example.
	updateSegVerticals: function(segs) {
		this.computeSegVerticals(segs);
		this.assignSegVerticals(segs);
	},


	// For each segment in an array, computes and assigns its top and bottom properties
	computeSegVerticals: function(segs) {
		var i, seg;
		var dayDate;

		for (i = 0; i < segs.length; i++) {
			seg = segs[i];
			dayDate = this.dayDates[seg.dayIndex];

			seg.top = this.computeDateTop(seg.start, dayDate);
			seg.bottom = this.computeDateTop(seg.end, dayDate);
		}
	},


	// Given segments that already have their top/bottom properties computed, applies those values to
	// the segments' elements.
	assignSegVerticals: function(segs) {
		var i, seg;

		for (i = 0; i < segs.length; i++) {
			seg = segs[i];
			seg.el.css(this.generateSegVerticalCss(seg));
		}
	},


	// Generates an object with CSS properties for the top/bottom coordinates of a segment element
	generateSegVerticalCss: function(seg) {
		return {
			top: seg.top,
			bottom: -seg.bottom // flipped because needs to be space beyond bottom edge of event container
		};
	},


	/* Foreground Event Positioning Utils
	------------------------------------------------------------------------------------------------------------------*/


	// Given segments that are assumed to all live in the *same column*,
	// compute their verical/horizontal coordinates and assign to their elements.
	updateFgSegCoords: function(segs) {
		this.computeSegVerticals(segs); // horizontals relies on this
		this.computeFgSegHorizontals(segs); // compute horizontal coordinates, z-index's, and reorder the array
		this.assignSegVerticals(segs);
		this.assignFgSegHorizontals(segs);
	},


	// Given an array of segments that are all in the same column, sets the backwardCoord and forwardCoord on each.
	// NOTE: Also reorders the given array by date!
	computeFgSegHorizontals: function(segs) {
		var levels;
		var level0;
		var i;

		this.sortEventSegs(segs); // order by certain criteria
		levels = buildSlotSegLevels(segs);
		computeForwardSlotSegs(levels);

		if ((level0 = levels[0])) {

			for (i = 0; i < level0.length; i++) {
				computeSlotSegPressures(level0[i]);
			}

			for (i = 0; i < level0.length; i++) {
				this.computeFgSegForwardBack(level0[i], 0, 0);
			}
		}
	},


	// Calculate seg.forwardCoord and seg.backwardCoord for the segment, where both values range
	// from 0 to 1. If the calendar is left-to-right, the seg.backwardCoord maps to "left" and
	// seg.forwardCoord maps to "right" (via percentage). Vice-versa if the calendar is right-to-left.
	//
	// The segment might be part of a "series", which means consecutive segments with the same pressure
	// who's width is unknown until an edge has been hit. `seriesBackwardPressure` is the number of
	// segments behind this one in the current series, and `seriesBackwardCoord` is the starting
	// coordinate of the first segment in the series.
	computeFgSegForwardBack: function(seg, seriesBackwardPressure, seriesBackwardCoord) {
		var forwardSegs = seg.forwardSegs;
		var i;

		if (seg.forwardCoord === undefined) { // not already computed

			if (!forwardSegs.length) {

				// if there are no forward segments, this segment should butt up against the edge
				seg.forwardCoord = 1;
			}
			else {

				// sort highest pressure first
				this.sortForwardSegs(forwardSegs);

				// this segment's forwardCoord will be calculated from the backwardCoord of the
				// highest-pressure forward segment.
				this.computeFgSegForwardBack(forwardSegs[0], seriesBackwardPressure + 1, seriesBackwardCoord);
				seg.forwardCoord = forwardSegs[0].backwardCoord;
			}

			// calculate the backwardCoord from the forwardCoord. consider the series
			seg.backwardCoord = seg.forwardCoord -
				(seg.forwardCoord - seriesBackwardCoord) / // available width for series
				(seriesBackwardPressure + 1); // # of segments in the series

			// use this segment's coordinates to computed the coordinates of the less-pressurized
			// forward segments
			for (i=0; i<forwardSegs.length; i++) {
				this.computeFgSegForwardBack(forwardSegs[i], 0, seg.forwardCoord);
			}
		}
	},


	sortForwardSegs: function(forwardSegs) {
		forwardSegs.sort(proxy(this, 'compareForwardSegs'));
	},


	// A cmp function for determining which forward segment to rely on more when computing coordinates.
	compareForwardSegs: function(seg1, seg2) {
		// put higher-pressure first
		return seg2.forwardPressure - seg1.forwardPressure ||
			// put segments that are closer to initial edge first (and favor ones with no coords yet)
			(seg1.backwardCoord || 0) - (seg2.backwardCoord || 0) ||
			// do normal sorting...
			this.compareEventSegs(seg1, seg2);
	},


	// Given foreground event segments that have already had their position coordinates computed,
	// assigns position-related CSS values to their elements.
	assignFgSegHorizontals: function(segs) {
		var i, seg;

		for (i = 0; i < segs.length; i++) {
			seg = segs[i];
			seg.el.css(this.generateFgSegHorizontalCss(seg));

			// if the height is short, add a className for alternate styling
			if (seg.bottom - seg.top < 30) {
				seg.el.addClass('fc-short');
			}
		}
	},


	// Generates an object with CSS properties/values that should be applied to an event segment element.
	// Contains important positioning-related properties that should be applied to any event element, customized or not.
	generateFgSegHorizontalCss: function(seg) {
		var shouldOverlap = this.view.opt('slotEventOverlap');
		var backwardCoord = seg.backwardCoord; // the left side if LTR. the right side if RTL. floating-point
		var forwardCoord = seg.forwardCoord; // the right side if LTR. the left side if RTL. floating-point
		var props = this.generateSegVerticalCss(seg); // get top/bottom first
		var left; // amount of space from left edge, a fraction of the total width
		var right; // amount of space from right edge, a fraction of the total width

		if (shouldOverlap) {
			// double the width, but don't go beyond the maximum forward coordinate (1.0)
			forwardCoord = Math.min(1, backwardCoord + (forwardCoord - backwardCoord) * 2);
		}

		if (this.isRTL) {
			left = 1 - forwardCoord;
			right = backwardCoord;
		}
		else {
			left = backwardCoord;
			right = 1 - forwardCoord;
		}

		props.zIndex = seg.level + 1; // convert from 0-base to 1-based
		props.left = left * 100 + '%';
		props.right = right * 100 + '%';

		if (shouldOverlap && seg.forwardPressure) {
			// add padding to the edge so that forward stacked events don't cover the resizer's icon
			props[this.isRTL ? 'marginLeft' : 'marginRight'] = 10 * 2; // 10 is a guesstimate of the icon's width
		}

		return props;
	}

});


// Builds an array of segments "levels". The first level will be the leftmost tier of segments if the calendar is
// left-to-right, or the rightmost if the calendar is right-to-left. Assumes the segments are already ordered by date.
function buildSlotSegLevels(segs) {
	var levels = [];
	var i, seg;
	var j;

	for (i=0; i<segs.length; i++) {
		seg = segs[i];

		// go through all the levels and stop on the first level where there are no collisions
		for (j=0; j<levels.length; j++) {
			if (!computeSlotSegCollisions(seg, levels[j]).length) {
				break;
			}
		}

		seg.level = j;

		(levels[j] || (levels[j] = [])).push(seg);
	}

	return levels;
}


// For every segment, figure out the other segments that are in subsequent
// levels that also occupy the same vertical space. Accumulate in seg.forwardSegs
function computeForwardSlotSegs(levels) {
	var i, level;
	var j, seg;
	var k;

	for (i=0; i<levels.length; i++) {
		level = levels[i];

		for (j=0; j<level.length; j++) {
			seg = level[j];

			seg.forwardSegs = [];
			for (k=i+1; k<levels.length; k++) {
				computeSlotSegCollisions(seg, levels[k], seg.forwardSegs);
			}
		}
	}
}


// Figure out which path forward (via seg.forwardSegs) results in the longest path until
// the furthest edge is reached. The number of segments in this path will be seg.forwardPressure
function computeSlotSegPressures(seg) {
	var forwardSegs = seg.forwardSegs;
	var forwardPressure = 0;
	var i, forwardSeg;

	if (seg.forwardPressure === undefined) { // not already computed

		for (i=0; i<forwardSegs.length; i++) {
			forwardSeg = forwardSegs[i];

			// figure out the child's maximum forward path
			computeSlotSegPressures(forwardSeg);

			// either use the existing maximum, or use the child's forward pressure
			// plus one (for the forwardSeg itself)
			forwardPressure = Math.max(
				forwardPressure,
				1 + forwardSeg.forwardPressure
			);
		}

		seg.forwardPressure = forwardPressure;
	}
}


// Find all the segments in `otherSegs` that vertically collide with `seg`.
// Append into an optionally-supplied `results` array and return.
function computeSlotSegCollisions(seg, otherSegs, results) {
	results = results || [];

	for (var i=0; i<otherSegs.length; i++) {
		if (isSlotSegCollision(seg, otherSegs[i])) {
			results.push(otherSegs[i]);
		}
	}

	return results;
}


// Do these segments occupy the same vertical space?
function isSlotSegCollision(seg1, seg2) {
	return seg1.bottom > seg2.top && seg1.top < seg2.bottom;
}

;;

/* An abstract class from which other views inherit from
----------------------------------------------------------------------------------------------------------------------*/

var View = FC.View = Model.extend({

	type: null, // subclass' view name (string)
	name: null, // deprecated. use `type` instead
	title: null, // the text that will be displayed in the header's title

	calendar: null, // owner Calendar object
	viewSpec: null,
	options: null, // hash containing all options. already merged with view-specific-options
	el: null, // the view's containing element. set by Calendar

	renderQueue: null,
	batchRenderDepth: 0,
	isDatesRendered: false,
	isEventsRendered: false,
	isBaseRendered: false, // related to viewRender/viewDestroy triggers

	queuedScroll: null,

	isRTL: false,
	isSelected: false, // boolean whether a range of time is user-selected or not
	selectedEvent: null,

	eventOrderSpecs: null, // criteria for ordering events when they have same date/time

	// classNames styled by jqui themes
	widgetHeaderClass: null,
	widgetContentClass: null,
	highlightStateClass: null,

	// for date utils, computed from options
	nextDayThreshold: null,
	isHiddenDayHash: null,

	// now indicator
	isNowIndicatorRendered: null,
	initialNowDate: null, // result first getNow call
	initialNowQueriedMs: null, // ms time the getNow was called
	nowIndicatorTimeoutID: null, // for refresh timing of now indicator
	nowIndicatorIntervalID: null, // "


	constructor: function(calendar, viewSpec) {
		Model.prototype.constructor.call(this);

		this.calendar = calendar;
		this.viewSpec = viewSpec;

		// shortcuts
		this.type = viewSpec.type;
		this.options = viewSpec.options;

		// .name is deprecated
		this.name = this.type;

		this.nextDayThreshold = moment.duration(this.opt('nextDayThreshold'));
		this.initThemingProps();
		this.initHiddenDays();
		this.isRTL = this.opt('isRTL');

		this.eventOrderSpecs = parseFieldSpecs(this.opt('eventOrder'));

		this.renderQueue = this.buildRenderQueue();
		this.initAutoBatchRender();

		this.initialize();
	},


	buildRenderQueue: function() {
		var _this = this;
		var renderQueue = new RenderQueue({
			event: this.opt('eventRenderWait')
		});

		renderQueue.on('start', function() {
			_this.freezeHeight();
			_this.addScroll(_this.queryScroll());
		});

		renderQueue.on('stop', function() {
			_this.thawHeight();
			_this.popScroll();
		});

		return renderQueue;
	},


	initAutoBatchRender: function() {
		var _this = this;

		this.on('before:change', function() {
			_this.startBatchRender();
		});

		this.on('change', function() {
			_this.stopBatchRender();
		});
	},


	startBatchRender: function() {
		if (!(this.batchRenderDepth++)) {
			this.renderQueue.pause();
		}
	},


	stopBatchRender: function() {
		if (!(--this.batchRenderDepth)) {
			this.renderQueue.resume();
		}
	},


	// A good place for subclasses to initialize member variables
	initialize: function() {
		// subclasses can implement
	},


	// Retrieves an option with the given name
	opt: function(name) {
		return this.options[name];
	},


	// Triggers handlers that are view-related. Modifies args before passing to calendar.
	publiclyTrigger: function(name, thisObj) { // arguments beyond thisObj are passed along
		var calendar = this.calendar;

		return calendar.publiclyTrigger.apply(
			calendar,
			[name, thisObj || this].concat(
				Array.prototype.slice.call(arguments, 2), // arguments beyond thisObj
				[ this ] // always make the last argument a reference to the view. TODO: deprecate
			)
		);
	},


	/* Title and Date Formatting
	------------------------------------------------------------------------------------------------------------------*/


	// Sets the view's title property to the most updated computed value
	updateTitle: function() {
		this.title = this.computeTitle();
		this.calendar.setToolbarsTitle(this.title);
	},


	// Computes what the title at the top of the calendar should be for this view
	computeTitle: function() {
		var range;

		// for views that span a large unit of time, show the proper interval, ignoring stray days before and after
		if (/^(year|month)$/.test(this.currentRangeUnit)) {
			range = this.currentRange;
		}
		else { // for day units or smaller, use the actual day range
			range = this.activeRange;
		}

		return this.formatRange(
			{
				// in case currentRange has a time, make sure timezone is correct
				start: this.calendar.applyTimezone(range.start),
				end: this.calendar.applyTimezone(range.end)
			},
			this.opt('titleFormat') || this.computeTitleFormat(),
			this.opt('titleRangeSeparator')
		);
	},


	// Generates the format string that should be used to generate the title for the current date range.
	// Attempts to compute the most appropriate format if not explicitly specified with `titleFormat`.
	computeTitleFormat: function() {
		if (this.currentRangeUnit == 'year') {
			return 'YYYY';
		}
		else if (this.currentRangeUnit == 'month') {
			return this.opt('monthYearFormat'); // like "September 2014"
		}
		else if (this.currentRangeAs('days') > 1) {
			return 'll'; // multi-day range. shorter, like "Sep 9 - 10 2014"
		}
		else {
			return 'LL'; // one day. longer, like "September 9 2014"
		}
	},


	// Utility for formatting a range. Accepts a range object, formatting string, and optional separator.
	// Displays all-day ranges naturally, with an inclusive end. Takes the current isRTL into account.
	// The timezones of the dates within `range` will be respected.
	formatRange: function(range, formatStr, separator) {
		var end = range.end;

		if (!end.hasTime()) { // all-day?
			end = end.clone().subtract(1); // convert to inclusive. last ms of previous day
		}

		return formatRange(range.start, end, formatStr, separator, this.opt('isRTL'));
	},


	getAllDayHtml: function() {
		return this.opt('allDayHtml') || htmlEscape(this.opt('allDayText'));
	},


	/* Navigation
	------------------------------------------------------------------------------------------------------------------*/


	// Generates HTML for an anchor to another view into the calendar.
	// Will either generate an <a> tag or a non-clickable <span> tag, depending on enabled settings.
	// `gotoOptions` can either be a moment input, or an object with the form:
	// { date, type, forceOff }
	// `type` is a view-type like "day" or "week". default value is "day".
	// `attrs` and `innerHtml` are use to generate the rest of the HTML tag.
	buildGotoAnchorHtml: function(gotoOptions, attrs, innerHtml) {
		var date, type, forceOff;
		var finalOptions;

		if ($.isPlainObject(gotoOptions)) {
			date = gotoOptions.date;
			type = gotoOptions.type;
			forceOff = gotoOptions.forceOff;
		}
		else {
			date = gotoOptions; // a single moment input
		}
		date = FC.moment(date); // if a string, parse it

		finalOptions = { // for serialization into the link
			date: date.format('YYYY-MM-DD'),
			type: type || 'day'
		};

		if (typeof attrs === 'string') {
			innerHtml = attrs;
			attrs = null;
		}

		attrs = attrs ? ' ' + attrsToStr(attrs) : ''; // will have a leading space
		innerHtml = innerHtml || '';

		if (!forceOff && this.opt('navLinks')) {
			return '<a' + attrs +
				' data-goto="' + htmlEscape(JSON.stringify(finalOptions)) + '">' +
				innerHtml +
				'</a>';
		}
		else {
			return '<span' + attrs + '>' +
				innerHtml +
				'</span>';
		}
	},


	// Rendering Non-date-related Content
	// -----------------------------------------------------------------------------------------------------------------


	// Sets the container element that the view should render inside of, does global DOM-related initializations,
	// and renders all the non-date-related content inside.
	setElement: function(el) {
		this.el = el;
		this.bindGlobalHandlers();
		this.bindBaseRenderHandlers();
		this.renderSkeleton();
	},


	// Removes the view's container element from the DOM, clearing any content beforehand.
	// Undoes any other DOM-related attachments.
	removeElement: function() {
		this.unsetDate();
		this.unrenderSkeleton();

		this.unbindGlobalHandlers();
		this.unbindBaseRenderHandlers();

		this.el.remove();
		// NOTE: don't null-out this.el in case the View was destroyed within an API callback.
		// We don't null-out the View's other jQuery element references upon destroy,
		//  so we shouldn't kill this.el either.
	},


	// Renders the basic structure of the view before any content is rendered
	renderSkeleton: function() {
		// subclasses should implement
	},


	// Unrenders the basic structure of the view
	unrenderSkeleton: function() {
		// subclasses should implement
	},


	// Date Setting/Unsetting
	// -----------------------------------------------------------------------------------------------------------------


	setDate: function(date) {
		var currentDateProfile = this.get('dateProfile');
		var newDateProfile = this.buildDateProfile(date, null, true); // forceToValid=true

		if (
			!currentDateProfile ||
			!isRangesEqual(currentDateProfile.activeRange, newDateProfile.activeRange)
		) {
			this.set('dateProfile', newDateProfile);
		}

		return newDateProfile.date;
	},


	unsetDate: function() {
		this.unset('dateProfile');
	},


	// Date Rendering
	// -----------------------------------------------------------------------------------------------------------------


	requestDateRender: function(dateProfile) {
		var _this = this;

		this.renderQueue.queue(function() {
			_this.executeDateRender(dateProfile);
		}, 'date', 'init');
	},


	requestDateUnrender: function() {
		var _this = this;

		this.renderQueue.queue(function() {
			_this.executeDateUnrender();
		}, 'date', 'destroy');
	},


	// Event Data
	// -----------------------------------------------------------------------------------------------------------------


	fetchInitialEvents: function(dateProfile) {
		return this.calendar.requestEvents(
			dateProfile.activeRange.start,
			dateProfile.activeRange.end
		);
	},


	bindEventChanges: function() {
		this.listenTo(this.calendar, 'eventsReset', this.resetEvents);
	},


	unbindEventChanges: function() {
		this.stopListeningTo(this.calendar, 'eventsReset');
	},


	setEvents: function(events) {
		this.set('currentEvents', events);
		this.set('hasEvents', true);
	},


	unsetEvents: function() {
		this.unset('currentEvents');
		this.unset('hasEvents');
	},


	resetEvents: function(events) {
		this.startBatchRender();
		this.unsetEvents();
		this.setEvents(events);
		this.stopBatchRender();
	},


	// Event Rendering
	// -----------------------------------------------------------------------------------------------------------------


	requestEventsRender: function(events) {
		var _this = this;

		this.renderQueue.queue(function() {
			_this.executeEventsRender(events);
		}, 'event', 'init');
	},


	requestEventsUnrender: function() {
		var _this = this;

		this.renderQueue.queue(function() {
			_this.executeEventsUnrender();
		}, 'event', 'destroy');
	},


	// Date High-level Rendering
	// -----------------------------------------------------------------------------------------------------------------


	// if dateProfile not specified, uses current
	executeDateRender: function(dateProfile, skipScroll) {

		this.setDateProfileForRendering(dateProfile);
		this.updateTitle();
		this.calendar.updateToolbarButtons();

		if (this.render) {
			this.render(); // TODO: deprecate
		}

		this.renderDates();
		this.updateSize();
		this.renderBusinessHours(); // might need coordinates, so should go after updateSize()
		this.startNowIndicator();

		if (!skipScroll) {
			this.addScroll(this.computeInitialDateScroll());
		}

		this.isDatesRendered = true;
		this.trigger('datesRendered');
	},


	executeDateUnrender: function() {

		this.unselect();
		this.stopNowIndicator();

		this.trigger('before:datesUnrendered');

		this.unrenderBusinessHours();
		this.unrenderDates();

		if (this.destroy) {
			this.destroy(); // TODO: deprecate
		}

		this.isDatesRendered = false;
	},


	// Date Low-level Rendering
	// -----------------------------------------------------------------------------------------------------------------


	// date-cell content only
	renderDates: function() {
		// subclasses should implement
	},


	// date-cell content only
	unrenderDates: function() {
		// subclasses should override
	},


	// Determing when the "meat" of the view is rendered (aka the base)
	// -----------------------------------------------------------------------------------------------------------------


	bindBaseRenderHandlers: function() {
		var _this = this;

		this.on('datesRendered.baseHandler', function() {
			_this.onBaseRender();
		});

		this.on('before:datesUnrendered.baseHandler', function() {
			_this.onBeforeBaseUnrender();
		});
	},


	unbindBaseRenderHandlers: function() {
		this.off('.baseHandler');
	},


	onBaseRender: function() {
		this.applyScreenState();
		this.publiclyTrigger('viewRender', this, this, this.el);
	},


	onBeforeBaseUnrender: function() {
		this.applyScreenState();
		this.publiclyTrigger('viewDestroy', this, this, this.el);
	},


	// Misc view rendering utils
	// -----------------------------------------------------------------------------------------------------------------


	// Binds DOM handlers to elements that reside outside the view container, such as the document
	bindGlobalHandlers: function() {
		this.listenTo(GlobalEmitter.get(), {
			touchstart: this.processUnselect,
			mousedown: this.handleDocumentMousedown
		});
	},


	// Unbinds DOM handlers from elements that reside outside the view container
	unbindGlobalHandlers: function() {
		this.stopListeningTo(GlobalEmitter.get());
	},


	// Initializes internal variables related to theming
	initThemingProps: function() {
		var tm = this.opt('theme') ? 'ui' : 'fc';

		this.widgetHeaderClass = tm + '-widget-header';
		this.widgetContentClass = tm + '-widget-content';
		this.highlightStateClass = tm + '-state-highlight';
	},


	/* Business Hours
	------------------------------------------------------------------------------------------------------------------*/


	// Renders business-hours onto the view. Assumes updateSize has already been called.
	renderBusinessHours: function() {
		// subclasses should implement
	},


	// Unrenders previously-rendered business-hours
	unrenderBusinessHours: function() {
		// subclasses should implement
	},


	/* Now Indicator
	------------------------------------------------------------------------------------------------------------------*/


	// Immediately render the current time indicator and begins re-rendering it at an interval,
	// which is defined by this.getNowIndicatorUnit().
	// TODO: somehow do this for the current whole day's background too
	startNowIndicator: function() {
		var _this = this;
		var unit;
		var update;
		var delay; // ms wait value

		if (this.opt('nowIndicator')) {
			unit = this.getNowIndicatorUnit();
			if (unit) {
				update = proxy(this, 'updateNowIndicator'); // bind to `this`

				this.initialNowDate = this.calendar.getNow();
				this.initialNowQueriedMs = +new Date();
				this.renderNowIndicator(this.initialNowDate);
				this.isNowIndicatorRendered = true;

				// wait until the beginning of the next interval
				delay = this.initialNowDate.clone().startOf(unit).add(1, unit) - this.initialNowDate;
				this.nowIndicatorTimeoutID = setTimeout(function() {
					_this.nowIndicatorTimeoutID = null;
					update();
					delay = +moment.duration(1, unit);
					delay = Math.max(100, delay); // prevent too frequent
					_this.nowIndicatorIntervalID = setInterval(update, delay); // update every interval
				}, delay);
			}
		}
	},


	// rerenders the now indicator, computing the new current time from the amount of time that has passed
	// since the initial getNow call.
	updateNowIndicator: function() {
		if (this.isNowIndicatorRendered) {
			this.unrenderNowIndicator();
			this.renderNowIndicator(
				this.initialNowDate.clone().add(new Date() - this.initialNowQueriedMs) // add ms
			);
		}
	},


	// Immediately unrenders the view's current time indicator and stops any re-rendering timers.
	// Won't cause side effects if indicator isn't rendered.
	stopNowIndicator: function() {
		if (this.isNowIndicatorRendered) {

			if (this.nowIndicatorTimeoutID) {
				clearTimeout(this.nowIndicatorTimeoutID);
				this.nowIndicatorTimeoutID = null;
			}
			if (this.nowIndicatorIntervalID) {
				clearTimeout(this.nowIndicatorIntervalID);
				this.nowIndicatorIntervalID = null;
			}

			this.unrenderNowIndicator();
			this.isNowIndicatorRendered = false;
		}
	},


	// Returns a string unit, like 'second' or 'minute' that defined how often the current time indicator
	// should be refreshed. If something falsy is returned, no time indicator is rendered at all.
	getNowIndicatorUnit: function() {
		// subclasses should implement
	},


	// Renders a current time indicator at the given datetime
	renderNowIndicator: function(date) {
		// subclasses should implement
	},


	// Undoes the rendering actions from renderNowIndicator
	unrenderNowIndicator: function() {
		// subclasses should implement
	},


	/* Dimensions
	------------------------------------------------------------------------------------------------------------------*/


	// Refreshes anything dependant upon sizing of the container element of the grid
	updateSize: function(isResize) {
		var scroll;

		if (isResize) {
			scroll = this.queryScroll();
		}

		this.updateHeight(isResize);
		this.updateWidth(isResize);
		this.updateNowIndicator();

		if (isResize) {
			this.applyScroll(scroll);
		}
	},


	// Refreshes the horizontal dimensions of the calendar
	updateWidth: function(isResize) {
		// subclasses should implement
	},


	// Refreshes the vertical dimensions of the calendar
	updateHeight: function(isResize) {
		var calendar = this.calendar; // we poll the calendar for height information

		this.setHeight(
			calendar.getSuggestedViewHeight(),
			calendar.isHeightAuto()
		);
	},


	// Updates the vertical dimensions of the calendar to the specified height.
	// if `isAuto` is set to true, height becomes merely a suggestion and the view should use its "natural" height.
	setHeight: function(height, isAuto) {
		// subclasses should implement
	},


	/* Scroller
	------------------------------------------------------------------------------------------------------------------*/


	addForcedScroll: function(scroll) {
		this.addScroll(
			$.extend(scroll, { isForced: true })
		);
	},


	addScroll: function(scroll) {
		var queuedScroll = this.queuedScroll || (this.queuedScroll = {});

		if (!queuedScroll.isForced) {
			$.extend(queuedScroll, scroll);
		}
	},


	popScroll: function() {
		this.applyQueuedScroll();
		this.queuedScroll = null;
	},


	applyQueuedScroll: function() {
		if (this.queuedScroll) {
			this.applyScroll(this.queuedScroll);
		}
	},


	queryScroll: function() {
		var scroll = {};

		if (this.isDatesRendered) {
			$.extend(scroll, this.queryDateScroll());
		}

		return scroll;
	},


	applyScroll: function(scroll) {
		if (this.isDatesRendered) {
			this.applyDateScroll(scroll);
		}
	},


	computeInitialDateScroll: function() {
		return {}; // subclasses must implement
	},


	queryDateScroll: function() {
		return {}; // subclasses must implement
	},


	applyDateScroll: function(scroll) {
		; // subclasses must implement
	},


	/* Height Freezing
	------------------------------------------------------------------------------------------------------------------*/


	freezeHeight: function() {
		this.calendar.freezeContentHeight();
	},


	thawHeight: function() {
		this.calendar.thawContentHeight();
	},


	// Event High-level Rendering
	// -----------------------------------------------------------------------------------------------------------------


	executeEventsRender: function(events) {
		this.renderEvents(events);
		this.isEventsRendered = true;

		this.onEventsRender();
	},


	executeEventsUnrender: function() {
		this.onBeforeEventsUnrender();

		if (this.destroyEvents) {
			this.destroyEvents(); // TODO: deprecate
		}

		this.unrenderEvents();
		this.isEventsRendered = false;
	},


	// Event Rendering Triggers
	// -----------------------------------------------------------------------------------------------------------------


	// Signals that all events have been rendered
	onEventsRender: function() {
		this.applyScreenState();

		this.renderedEventSegEach(function(seg) {
			this.publiclyTrigger('eventAfterRender', seg.event, seg.event, seg.el);
		});
		this.publiclyTrigger('eventAfterAllRender');
	},


	// Signals that all event elements are about to be removed
	onBeforeEventsUnrender: function() {
		this.applyScreenState();

		this.renderedEventSegEach(function(seg) {
			this.publiclyTrigger('eventDestroy', seg.event, seg.event, seg.el);
		});
	},


	applyScreenState: function() {
		this.thawHeight();
		this.freezeHeight();
		this.applyQueuedScroll();
	},


	// Event Low-level Rendering
	// -----------------------------------------------------------------------------------------------------------------


	// Renders the events onto the view.
	renderEvents: function(events) {
		// subclasses should implement
	},


	// Removes event elements from the view.
	unrenderEvents: function() {
		// subclasses should implement
	},


	// Event Rendering Utils
	// -----------------------------------------------------------------------------------------------------------------


	// Given an event and the default element used for rendering, returns the element that should actually be used.
	// Basically runs events and elements through the eventRender hook.
	resolveEventEl: function(event, el) {
		var custom = this.publiclyTrigger('eventRender', event, event, el);

		if (custom === false) { // means don't render at all
			el = null;
		}
		else if (custom && custom !== true) {
			el = $(custom);
		}

		return el;
	},


	// Hides all rendered event segments linked to the given event
	showEvent: function(event) {
		this.renderedEventSegEach(function(seg) {
			seg.el.css('visibility', '');
		}, event);
	},


	// Shows all rendered event segments linked to the given event
	hideEvent: function(event) {
		this.renderedEventSegEach(function(seg) {
			seg.el.css('visibility', 'hidden');
		}, event);
	},


	// Iterates through event segments that have been rendered (have an el). Goes through all by default.
	// If the optional `event` argument is specified, only iterates through segments linked to that event.
	// The `this` value of the callback function will be the view.
	renderedEventSegEach: function(func, event) {
		var segs = this.getEventSegs();
		var i;

		for (i = 0; i < segs.length; i++) {
			if (!event || segs[i].event._id === event._id) {
				if (segs[i].el) {
					func.call(this, segs[i]);
				}
			}
		}
	},


	// Retrieves all the rendered segment objects for the view
	getEventSegs: function() {
		// subclasses must implement
		return [];
	},


	/* Event Drag-n-Drop
	------------------------------------------------------------------------------------------------------------------*/


	// Computes if the given event is allowed to be dragged by the user
	isEventDraggable: function(event) {
		return this.isEventStartEditable(event);
	},


	isEventStartEditable: function(event) {
		return firstDefined(
			event.startEditable,
			(event.source || {}).startEditable,
			this.opt('eventStartEditable'),
			this.isEventGenerallyEditable(event)
		);
	},


	isEventGenerallyEditable: function(event) {
		return firstDefined(
			event.editable,
			(event.source || {}).editable,
			this.opt('editable')
		);
	},


	// Must be called when an event in the view is dropped onto new location.
	// `dropLocation` is an object that contains the new zoned start/end/allDay values for the event.
	reportSegDrop: function(seg, dropLocation, largeUnit, el, ev) {
		var calendar = this.calendar;
		var mutateResult = calendar.mutateSeg(seg, dropLocation, largeUnit);
		var undoFunc = function() {
			mutateResult.undo();
			calendar.reportEventChange();
		};

		this.triggerEventDrop(seg.event, mutateResult.dateDelta, undoFunc, el, ev);
		calendar.reportEventChange(); // will rerender events
	},


	// Triggers event-drop handlers that have subscribed via the API
	triggerEventDrop: function(event, dateDelta, undoFunc, el, ev) {
		this.publiclyTrigger('eventDrop', el[0], event, dateDelta, undoFunc, ev, {}); // {} = jqui dummy
	},


	/* External Element Drag-n-Drop
	------------------------------------------------------------------------------------------------------------------*/


	// Must be called when an external element, via jQuery UI, has been dropped onto the calendar.
	// `meta` is the parsed data that has been embedded into the dragging event.
	// `dropLocation` is an object that contains the new zoned start/end/allDay values for the event.
	reportExternalDrop: function(meta, dropLocation, el, ev, ui) {
		var eventProps = meta.eventProps;
		var eventInput;
		var event;

		// Try to build an event object and render it. TODO: decouple the two
		if (eventProps) {
			eventInput = $.extend({}, eventProps, dropLocation);
			event = this.calendar.renderEvent(eventInput, meta.stick)[0]; // renderEvent returns an array
		}

		this.triggerExternalDrop(event, dropLocation, el, ev, ui);
	},


	// Triggers external-drop handlers that have subscribed via the API
	triggerExternalDrop: function(event, dropLocation, el, ev, ui) {

		// trigger 'drop' regardless of whether element represents an event
		this.publiclyTrigger('drop', el[0], dropLocation.start, ev, ui);

		if (event) {
			this.publiclyTrigger('eventReceive', null, event); // signal an external event landed
		}
	},


	/* Drag-n-Drop Rendering (for both events and external elements)
	------------------------------------------------------------------------------------------------------------------*/


	// Renders a visual indication of a event or external-element drag over the given drop zone.
	// If an external-element, seg will be `null`.
	// Must return elements used for any mock events.
	renderDrag: function(dropLocation, seg) {
		// subclasses must implement
	},


	// Unrenders a visual indication of an event or external-element being dragged.
	unrenderDrag: function() {
		// subclasses must implement
	},


	/* Event Resizing
	------------------------------------------------------------------------------------------------------------------*/


	// Computes if the given event is allowed to be resized from its starting edge
	isEventResizableFromStart: function(event) {
		return this.opt('eventResizableFromStart') && this.isEventResizable(event);
	},


	// Computes if the given event is allowed to be resized from its ending edge
	isEventResizableFromEnd: function(event) {
		return this.isEventResizable(event);
	},


	// Computes if the given event is allowed to be resized by the user at all
	isEventResizable: function(event) {
		var source = event.source || {};

		return firstDefined(
			event.durationEditable,
			source.durationEditable,
			this.opt('eventDurationEditable'),
			event.editable,
			source.editable,
			this.opt('editable')
		);
	},


	// Must be called when an event in the view has been resized to a new length
	reportSegResize: function(seg, resizeLocation, largeUnit, el, ev) {
		var calendar = this.calendar;
		var mutateResult = calendar.mutateSeg(seg, resizeLocation, largeUnit);
		var undoFunc = function() {
			mutateResult.undo();
			calendar.reportEventChange();
		};

		this.triggerEventResize(seg.event, mutateResult.durationDelta, undoFunc, el, ev);
		calendar.reportEventChange(); // will rerender events
	},


	// Triggers event-resize handlers that have subscribed via the API
	triggerEventResize: function(event, durationDelta, undoFunc, el, ev) {
		this.publiclyTrigger('eventResize', el[0], event, durationDelta, undoFunc, ev, {}); // {} = jqui dummy
	},


	/* Selection (time range)
	------------------------------------------------------------------------------------------------------------------*/


	// Selects a date span on the view. `start` and `end` are both Moments.
	// `ev` is the native mouse event that begin the interaction.
	select: function(span, ev) {
		this.unselect(ev);
		this.renderSelection(span);
		this.reportSelection(span, ev);
	},


	// Renders a visual indication of the selection
	renderSelection: function(span) {
		// subclasses should implement
	},


	// Called when a new selection is made. Updates internal state and triggers handlers.
	reportSelection: function(span, ev) {
		this.isSelected = true;
		this.triggerSelect(span, ev);
	},


	// Triggers handlers to 'select'
	triggerSelect: function(span, ev) {
		this.publiclyTrigger(
			'select',
			null,
			this.calendar.applyTimezone(span.start), // convert to calendar's tz for external API
			this.calendar.applyTimezone(span.end), // "
			ev
		);
	},


	// Undoes a selection. updates in the internal state and triggers handlers.
	// `ev` is the native mouse event that began the interaction.
	unselect: function(ev) {
		if (this.isSelected) {
			this.isSelected = false;
			if (this.destroySelection) {
				this.destroySelection(); // TODO: deprecate
			}
			this.unrenderSelection();
			this.publiclyTrigger('unselect', null, ev);
		}
	},


	// Unrenders a visual indication of selection
	unrenderSelection: function() {
		// subclasses should implement
	},


	/* Event Selection
	------------------------------------------------------------------------------------------------------------------*/


	selectEvent: function(event) {
		if (!this.selectedEvent || this.selectedEvent !== event) {
			this.unselectEvent();
			this.renderedEventSegEach(function(seg) {
				seg.el.addClass('fc-selected');
			}, event);
			this.selectedEvent = event;
		}
	},


	unselectEvent: function() {
		if (this.selectedEvent) {
			this.renderedEventSegEach(function(seg) {
				seg.el.removeClass('fc-selected');
			}, this.selectedEvent);
			this.selectedEvent = null;
		}
	},


	isEventSelected: function(event) {
		// event references might change on refetchEvents(), while selectedEvent doesn't,
		// so compare IDs
		return this.selectedEvent && this.selectedEvent._id === event._id;
	},


	/* Mouse / Touch Unselecting (time range & event unselection)
	------------------------------------------------------------------------------------------------------------------*/
	// TODO: move consistently to down/start or up/end?
	// TODO: don't kill previous selection if touch scrolling


	handleDocumentMousedown: function(ev) {
		if (isPrimaryMouseButton(ev)) {
			this.processUnselect(ev);
		}
	},


	processUnselect: function(ev) {
		this.processRangeUnselect(ev);
		this.processEventUnselect(ev);
	},


	processRangeUnselect: function(ev) {
		var ignore;

		// is there a time-range selection?
		if (this.isSelected && this.opt('unselectAuto')) {
			// only unselect if the clicked element is not identical to or inside of an 'unselectCancel' element
			ignore = this.opt('unselectCancel');
			if (!ignore || !$(ev.target).closest(ignore).length) {
				this.unselect(ev);
			}
		}
	},


	processEventUnselect: function(ev) {
		if (this.selectedEvent) {
			if (!$(ev.target).closest('.fc-selected').length) {
				this.unselectEvent();
			}
		}
	},


	/* Day Click
	------------------------------------------------------------------------------------------------------------------*/


	// Triggers handlers to 'dayClick'
	// Span has start/end of the clicked area. Only the start is useful.
	triggerDayClick: function(span, dayEl, ev) {
		this.publiclyTrigger(
			'dayClick',
			dayEl,
			this.calendar.applyTimezone(span.start), // convert to calendar's timezone for external API
			ev
		);
	},


	/* Date Utils
	------------------------------------------------------------------------------------------------------------------*/


	// Returns the date range of the full days the given range visually appears to occupy.
	// Returns a new range object.
	computeDayRange: function(range) {
		var startDay = range.start.clone().stripTime(); // the beginning of the day the range starts
		var end = range.end;
		var endDay = null;
		var endTimeMS;

		if (end) {
			endDay = end.clone().stripTime(); // the beginning of the day the range exclusively ends
			endTimeMS = +end.time(); // # of milliseconds into `endDay`

			// If the end time is actually inclusively part of the next day and is equal to or
			// beyond the next day threshold, adjust the end to be the exclusive end of `endDay`.
			// Otherwise, leaving it as inclusive will cause it to exclude `endDay`.
			if (endTimeMS && endTimeMS >= this.nextDayThreshold) {
				endDay.add(1, 'days');
			}
		}

		// If no end was specified, or if it is within `startDay` but not past nextDayThreshold,
		// assign the default duration of one day.
		if (!end || endDay <= startDay) {
			endDay = startDay.clone().add(1, 'days');
		}

		return { start: startDay, end: endDay };
	},


	// Does the given event visually appear to occupy more than one day?
	isMultiDayEvent: function(event) {
		var range = this.computeDayRange(event); // event is range-ish

		return range.end.diff(range.start, 'days') > 1;
	}

});


View.watch('displayingDates', [ 'dateProfile' ], function(deps) {
	this.requestDateRender(deps.dateProfile);
}, function() {
	this.requestDateUnrender();
});


View.watch('initialEvents', [ 'dateProfile' ], function(deps) {
	return this.fetchInitialEvents(deps.dateProfile);
});


View.watch('bindingEvents', [ 'initialEvents' ], function(deps) {
	this.setEvents(deps.initialEvents);
	this.bindEventChanges();
}, function() {
	this.unbindEventChanges();
	this.unsetEvents();
});


View.watch('displayingEvents', [ 'displayingDates', 'hasEvents' ], function() {
	this.requestEventsRender(this.get('currentEvents')); // if there were event mutations after initialEvents
}, function() {
	this.requestEventsUnrender();
});

;;

View.mixin({

	// range the view is formally responsible for.
	// for example, a month view might have 1st-31st, excluding padded dates
	currentRange: null,
	currentRangeUnit: null, // name of largest unit being displayed, like "month" or "week"

	// date range with a rendered skeleton
	// includes not-active days that need some sort of DOM
	renderRange: null,

	// dates that display events and accept drag-n-drop
	activeRange: null,

	// constraint for where prev/next operations can go and where events can be dragged/resized to.
	// an object with optional start and end properties.
	validRange: null,

	// how far the current date will move for a prev/next operation
	dateIncrement: null,

	minTime: null, // Duration object that denotes the first visible time of any given day
	maxTime: null, // Duration object that denotes the exclusive visible end time of any given day
	usesMinMaxTime: false, // whether minTime/maxTime will affect the activeRange. Views must opt-in.

	// DEPRECATED
	start: null, // use activeRange.start
	end: null, // use activeRange.end
	intervalStart: null, // use currentRange.start
	intervalEnd: null, // use currentRange.end


	/* Date Range Computation
	------------------------------------------------------------------------------------------------------------------*/


	setDateProfileForRendering: function(dateProfile) {
		this.currentRange = dateProfile.currentRange;
		this.currentRangeUnit = dateProfile.currentRangeUnit;
		this.renderRange = dateProfile.renderRange;
		this.activeRange = dateProfile.activeRange;
		this.validRange = dateProfile.validRange;
		this.dateIncrement = dateProfile.dateIncrement;
		this.minTime = dateProfile.minTime;
		this.maxTime = dateProfile.maxTime;

		// DEPRECATED, but we need to keep it updated
		this.start = dateProfile.activeRange.start;
		this.end = dateProfile.activeRange.end;
		this.intervalStart = dateProfile.currentRange.start;
		this.intervalEnd = dateProfile.currentRange.end;
	},


	// Builds a structure with info about what the dates/ranges will be for the "prev" view.
	buildPrevDateProfile: function(date) {
		var prevDate = date.clone().startOf(this.currentRangeUnit).subtract(this.dateIncrement);

		return this.buildDateProfile(prevDate, -1);
	},


	// Builds a structure with info about what the dates/ranges will be for the "next" view.
	buildNextDateProfile: function(date) {
		var nextDate = date.clone().startOf(this.currentRangeUnit).add(this.dateIncrement);

		return this.buildDateProfile(nextDate, 1);
	},


	// Builds a structure holding dates/ranges for rendering around the given date.
	// Optional direction param indicates whether the date is being incremented/decremented
	// from its previous value. decremented = -1, incremented = 1 (default).
	buildDateProfile: function(date, direction, forceToValid) {
		var validRange = this.buildValidRange();
		var minTime = null;
		var maxTime = null;
		var currentInfo;
		var renderRange;
		var activeRange;
		var isValid;

		if (forceToValid) {
			date = constrainDate(date, validRange);
		}

		currentInfo = this.buildCurrentRangeInfo(date, direction);
		renderRange = this.buildRenderRange(currentInfo.range, currentInfo.unit);
		activeRange = cloneRange(renderRange);

		if (!this.opt('showNonCurrentDates')) {
			activeRange = constrainRange(activeRange, currentInfo.range);
		}

		minTime = moment.duration(this.opt('minTime'));
		maxTime = moment.duration(this.opt('maxTime'));
		this.adjustActiveRange(activeRange, minTime, maxTime);

		activeRange = constrainRange(activeRange, validRange);
		date = constrainDate(date, activeRange);

		// it's invalid if the originally requested date is not contained,
		// or if the range is completely outside of the valid range.
		isValid = doRangesIntersect(currentInfo.range, validRange);

		return {
			validRange: validRange,
			currentRange: currentInfo.range,
			currentRangeUnit: currentInfo.unit,
			activeRange: activeRange,
			renderRange: renderRange,
			minTime: minTime,
			maxTime: maxTime,
			isValid: isValid,
			date: date,
			dateIncrement: this.buildDateIncrement(currentInfo.duration)
				// pass a fallback (might be null) ^
		};
	},


	// Builds an object with optional start/end properties.
	// Indicates the minimum/maximum dates to display.
	buildValidRange: function() {
		return this.getRangeOption('validRange', this.calendar.getNow()) || {};
	},


	// Builds a structure with info about the "current" range, the range that is
	// highlighted as being the current month for example.
	// See buildDateProfile for a description of `direction`.
	// Guaranteed to have `range` and `unit` properties. `duration` is optional.
	buildCurrentRangeInfo: function(date, direction) {
		var duration = null;
		var unit = null;
		var range = null;
		var dayCount;

		if (this.viewSpec.duration) {
			duration = this.viewSpec.duration;
			unit = this.viewSpec.durationUnit;
			range = this.buildRangeFromDuration(date, direction, duration, unit);
		}
		else if ((dayCount = this.opt('dayCount'))) {
			unit = 'day';
			range = this.buildRangeFromDayCount(date, direction, dayCount);
		}
		else if ((range = this.buildCustomVisibleRange(date))) {
			unit = computeGreatestUnit(range.start, range.end);
		}
		else {
			duration = this.getFallbackDuration();
			unit = computeGreatestUnit(duration);
			range = this.buildRangeFromDuration(date, direction, duration, unit);
		}

		this.normalizeCurrentRange(range, unit); // modifies in-place

		return { duration: duration, unit: unit, range: range };
	},


	getFallbackDuration: function() {
		return moment.duration({ days: 1 });
	},


	// If the range has day units or larger, remove times. Otherwise, ensure times.
	normalizeCurrentRange: function(range, unit) {

		if (/^(year|month|week|day)$/.test(unit)) { // whole-days?
			range.start.stripTime();
			range.end.stripTime();
		}
		else { // needs to have a time?
			if (!range.start.hasTime()) {
				range.start.time(0); // give 00:00 time
			}
			if (!range.end.hasTime()) {
				range.end.time(0); // give 00:00 time
			}
		}
	},


	// Mutates the given activeRange to have time values (un-ambiguate)
	// if the minTime or maxTime causes the range to expand.
	// TODO: eventually activeRange should *always* have times.
	adjustActiveRange: function(range, minTime, maxTime) {
		var hasSpecialTimes = false;

		if (this.usesMinMaxTime) {

			if (minTime < 0) {
				range.start.time(0).add(minTime);
				hasSpecialTimes = true;
			}

			if (maxTime > 24 * 60 * 60 * 1000) { // beyond 24 hours?
				range.end.time(maxTime - (24 * 60 * 60 * 1000));
				hasSpecialTimes = true;
			}

			if (hasSpecialTimes) {
				if (!range.start.hasTime()) {
					range.start.time(0);
				}
				if (!range.end.hasTime()) {
					range.end.time(0);
				}
			}
		}
	},


	// Builds the "current" range when it is specified as an explicit duration.
	// `unit` is the already-computed computeGreatestUnit value of duration.
	buildRangeFromDuration: function(date, direction, duration, unit) {
		var alignment = this.opt('dateAlignment');
		var start = date.clone();
		var end;
		var dateIncrementInput;
		var dateIncrementDuration;

		// if the view displays a single day or smaller
		if (duration.as('days') <= 1) {
			if (this.isHiddenDay(start)) {
				start = this.skipHiddenDays(start, direction);
				start.startOf('day');
			}
		}

		// compute what the alignment should be
		if (!alignment) {
			dateIncrementInput = this.opt('dateIncrement');

			if (dateIncrementInput) {
				dateIncrementDuration = moment.duration(dateIncrementInput);

				// use the smaller of the two units
				if (dateIncrementDuration < duration) {
					alignment = computeDurationGreatestUnit(dateIncrementDuration, dateIncrementInput);
				}
				else {
					alignment = unit;
				}
			}
			else {
				alignment = unit;
			}
		}

		start.startOf(alignment);
		end = start.clone().add(duration);

		return { start: start, end: end };
	},


	// Builds the "current" range when a dayCount is specified.
	buildRangeFromDayCount: function(date, direction, dayCount) {
		var customAlignment = this.opt('dateAlignment');
		var runningCount = 0;
		var start = date.clone();
		var end;

		if (customAlignment) {
			start.startOf(customAlignment);
		}

		start.startOf('day');
		start = this.skipHiddenDays(start, direction);

		end = start.clone();
		do {
			end.add(1, 'day');
			if (!this.isHiddenDay(end)) {
				runningCount++;
			}
		} while (runningCount < dayCount);

		return { start: start, end: end };
	},


	// Builds a normalized range object for the "visible" range,
	// which is a way to define the currentRange and activeRange at the same time.
	buildCustomVisibleRange: function(date) {
		var visibleRange = this.getRangeOption(
			'visibleRange',
			this.calendar.moment(date) // correct zone. also generates new obj that avoids mutations
		);

		if (visibleRange && (!visibleRange.start || !visibleRange.end)) {
			return null;
		}

		return visibleRange;
	},


	// Computes the range that will represent the element/cells for *rendering*,
	// but which may have voided days/times.
	buildRenderRange: function(currentRange, currentRangeUnit) {
		// cut off days in the currentRange that are hidden
		return this.trimHiddenDays(currentRange);
	},


	// Compute the duration value that should be added/substracted to the current date
	// when a prev/next operation happens.
	buildDateIncrement: function(fallback) {
		var dateIncrementInput = this.opt('dateIncrement');
		var customAlignment;

		if (dateIncrementInput) {
			return moment.duration(dateIncrementInput);
		}
		else if ((customAlignment = this.opt('dateAlignment'))) {
			return moment.duration(1, customAlignment);
		}
		else if (fallback) {
			return fallback;
		}
		else {
			return moment.duration({ days: 1 });
		}
	},


	// Remove days from the beginning and end of the range that are computed as hidden.
	trimHiddenDays: function(inputRange) {
		return {
			start: this.skipHiddenDays(inputRange.start),
			end: this.skipHiddenDays(inputRange.end, -1, true) // exclusively move backwards
		};
	},


	// Compute the number of the give units in the "current" range.
	// Will return a floating-point number. Won't round.
	currentRangeAs: function(unit) {
		var currentRange = this.currentRange;
		return currentRange.end.diff(currentRange.start, unit, true);
	},


	// Arguments after name will be forwarded to a hypothetical function value
	// WARNING: passed-in arguments will be given to generator functions as-is and can cause side-effects.
	// Always clone your objects if you fear mutation.
	getRangeOption: function(name) {
		var val = this.opt(name);

		if (typeof val === 'function') {
			val = val.apply(
				null,
				Array.prototype.slice.call(arguments, 1)
			);
		}

		if (val) {
			return this.calendar.parseRange(val);
		}
	},


	/* Hidden Days
	------------------------------------------------------------------------------------------------------------------*/


	// Initializes internal variables related to calculating hidden days-of-week
	initHiddenDays: function() {
		var hiddenDays = this.opt('hiddenDays') || []; // array of day-of-week indices that are hidden
		var isHiddenDayHash = []; // is the day-of-week hidden? (hash with day-of-week-index -> bool)
		var dayCnt = 0;
		var i;

		if (this.opt('weekends') === false) {
			hiddenDays.push(0, 6); // 0=sunday, 6=saturday
		}

		for (i = 0; i < 7; i++) {
			if (
				!(isHiddenDayHash[i] = $.inArray(i, hiddenDays) !== -1)
			) {
				dayCnt++;
			}
		}

		if (!dayCnt) {
			throw 'invalid hiddenDays'; // all days were hidden? bad.
		}

		this.isHiddenDayHash = isHiddenDayHash;
	},


	// Is the current day hidden?
	// `day` is a day-of-week index (0-6), or a Moment
	isHiddenDay: function(day) {
		if (moment.isMoment(day)) {
			day = day.day();
		}
		return this.isHiddenDayHash[day];
	},


	// Incrementing the current day until it is no longer a hidden day, returning a copy.
	// DOES NOT CONSIDER validRange!
	// If the initial value of `date` is not a hidden day, don't do anything.
	// Pass `isExclusive` as `true` if you are dealing with an end date.
	// `inc` defaults to `1` (increment one day forward each time)
	skipHiddenDays: function(date, inc, isExclusive) {
		var out = date.clone();
		inc = inc || 1;
		while (
			this.isHiddenDayHash[(out.day() + (isExclusive ? inc : 0) + 7) % 7]
		) {
			out.add(inc, 'days');
		}
		return out;
	}

});

;;

/*
Embodies a div that has potential scrollbars
*/
var Scroller = FC.Scroller = Class.extend({

	el: null, // the guaranteed outer element
	scrollEl: null, // the element with the scrollbars
	overflowX: null,
	overflowY: null,


	constructor: function(options) {
		options = options || {};
		this.overflowX = options.overflowX || options.overflow || 'auto';
		this.overflowY = options.overflowY || options.overflow || 'auto';
	},


	render: function() {
		this.el = this.renderEl();
		this.applyOverflow();
	},


	renderEl: function() {
		return (this.scrollEl = $('<div class="fc-scroller"></div>'));
	},


	// sets to natural height, unlocks overflow
	clear: function() {
		this.setHeight('auto');
		this.applyOverflow();
	},


	destroy: function() {
		this.el.remove();
	},


	// Overflow
	// -----------------------------------------------------------------------------------------------------------------


	applyOverflow: function() {
		this.scrollEl.css({
			'overflow-x': this.overflowX,
			'overflow-y': this.overflowY
		});
	},


	// Causes any 'auto' overflow values to resolves to 'scroll' or 'hidden'.
	// Useful for preserving scrollbar widths regardless of future resizes.
	// Can pass in scrollbarWidths for optimization.
	lockOverflow: function(scrollbarWidths) {
		var overflowX = this.overflowX;
		var overflowY = this.overflowY;

		scrollbarWidths = scrollbarWidths || this.getScrollbarWidths();

		if (overflowX === 'auto') {
			overflowX = (
					scrollbarWidths.top || scrollbarWidths.bottom || // horizontal scrollbars?
					// OR scrolling pane with massless scrollbars?
					this.scrollEl[0].scrollWidth - 1 > this.scrollEl[0].clientWidth
						// subtract 1 because of IE off-by-one issue
				) ? 'scroll' : 'hidden';
		}

		if (overflowY === 'auto') {
			overflowY = (
					scrollbarWidths.left || scrollbarWidths.right || // vertical scrollbars?
					// OR scrolling pane with massless scrollbars?
					this.scrollEl[0].scrollHeight - 1 > this.scrollEl[0].clientHeight
						// subtract 1 because of IE off-by-one issue
				) ? 'scroll' : 'hidden';
		}

		this.scrollEl.css({ 'overflow-x': overflowX, 'overflow-y': overflowY });
	},


	// Getters / Setters
	// -----------------------------------------------------------------------------------------------------------------


	setHeight: function(height) {
		this.scrollEl.height(height);
	},


	getScrollTop: function() {
		return this.scrollEl.scrollTop();
	},


	setScrollTop: function(top) {
		this.scrollEl.scrollTop(top);
	},


	getClientWidth: function() {
		return this.scrollEl[0].clientWidth;
	},


	getClientHeight: function() {
		return this.scrollEl[0].clientHeight;
	},


	getScrollbarWidths: function() {
		return getScrollbarWidths(this.scrollEl);
	}

});

;;
function Iterator(items) {
    this.items = items || [];
}


/* Calls a method on every item passing the arguments through */
Iterator.prototype.proxyCall = function(methodName) {
    var args = Array.prototype.slice.call(arguments, 1);
    var results = [];

    this.items.forEach(function(item) {
        results.push(item[methodName].apply(item, args));
    });

    return results;
};

;;

/* Toolbar with buttons and title
----------------------------------------------------------------------------------------------------------------------*/

function Toolbar(calendar, toolbarOptions) {
	var t = this;

	// exports
	t.setToolbarOptions = setToolbarOptions;
	t.render = render;
	t.removeElement = removeElement;
	t.updateTitle = updateTitle;
	t.activateButton = activateButton;
	t.deactivateButton = deactivateButton;
	t.disableButton = disableButton;
	t.enableButton = enableButton;
	t.getViewsWithButtons = getViewsWithButtons;
	t.el = null; // mirrors local `el`

	// locals
	var el;
	var viewsWithButtons = [];
	var tm;

	// method to update toolbar-specific options, not calendar-wide options
	function setToolbarOptions(newToolbarOptions) {
		toolbarOptions = newToolbarOptions;
	}

	// can be called repeatedly and will rerender
	function render() {
		var sections = toolbarOptions.layout;

		tm = calendar.opt('theme') ? 'ui' : 'fc';

		if (sections) {
			if (!el) {
				el = this.el = $("<div class='fc-toolbar "+ toolbarOptions.extraClasses + "'/>");
			}
			else {
				el.empty();
			}
			el.append(renderSection('left'))
				.append(renderSection('right'))
				.append(renderSection('center'))
				.append('<div class="fc-clear"/>');
		}
		else {
			removeElement();
		}
	}


	function removeElement() {
		if (el) {
			el.remove();
			el = t.el = null;
		}
	}


	function renderSection(position) {
		var sectionEl = $('<div class="fc-' + position + '"/>');
		var buttonStr = toolbarOptions.layout[position];
		var calendarCustomButtons = calendar.opt('customButtons') || {};
		var calendarButtonText = calendar.opt('buttonText') || {};

		if (buttonStr) {
			$.each(buttonStr.split(' '), function(i) {
				var groupChildren = $();
				var isOnlyButtons = true;
				var groupEl;

				$.each(this.split(','), function(j, buttonName) {
					var customButtonProps;
					var viewSpec;
					var buttonClick;
					var overrideText; // text explicitly set by calendar's constructor options. overcomes icons
					var defaultText;
					var themeIcon;
					var normalIcon;
					var innerHtml;
					var classes;
					var button; // the element

					if (buttonName == 'title') {
						groupChildren = groupChildren.add($('<h2>&nbsp;</h2>')); // we always want it to take up height
						isOnlyButtons = false;
					}
					else {
						if ((customButtonProps = calendarCustomButtons[buttonName])) {
							buttonClick = function(ev) {
								if (customButtonProps.click) {
									customButtonProps.click.call(button[0], ev);
								}
							};
							overrideText = ''; // icons will override text
							defaultText = customButtonProps.text;
						}
						else if ((viewSpec = calendar.getViewSpec(buttonName))) {
							buttonClick = function() {
								calendar.changeView(buttonName);
							};
							viewsWithButtons.push(buttonName);
							overrideText = viewSpec.buttonTextOverride;
							defaultText = viewSpec.buttonTextDefault;
						}
						else if (calendar[buttonName]) { // a calendar method
							buttonClick = function() {
								calendar[buttonName]();
							};
							overrideText = (calendar.overrides.buttonText || {})[buttonName];
							defaultText = calendarButtonText[buttonName]; // everything else is considered default
						}

						if (buttonClick) {

							themeIcon =
								customButtonProps ?
									customButtonProps.themeIcon :
									calendar.opt('themeButtonIcons')[buttonName];

							normalIcon =
								customButtonProps ?
									customButtonProps.icon :
									calendar.opt('buttonIcons')[buttonName];

							if (overrideText) {
								innerHtml = htmlEscape(overrideText);
							}
							else if (themeIcon && calendar.opt('theme')) {
								innerHtml = "<span class='ui-icon ui-icon-" + themeIcon + "'></span>";
							}
							else if (normalIcon && !calendar.opt('theme')) {
								innerHtml = "<span class='fc-icon fc-icon-" + normalIcon + "'></span>";
							}
							else {
								innerHtml = htmlEscape(defaultText);
							}

							classes = [
								'fc-' + buttonName + '-button',
								tm + '-button',
								tm + '-state-default'
							];

							button = $( // type="button" so that it doesn't submit a form
								'<button type="button" class="' + classes.join(' ') + '">' +
									innerHtml +
								'</button>'
								)
								.click(function(ev) {
									// don't process clicks for disabled buttons
									if (!button.hasClass(tm + '-state-disabled')) {

										buttonClick(ev);

										// after the click action, if the button becomes the "active" tab, or disabled,
										// it should never have a hover class, so remove it now.
										if (
											button.hasClass(tm + '-state-active') ||
											button.hasClass(tm + '-state-disabled')
										) {
											button.removeClass(tm + '-state-hover');
										}
									}
								})
								.mousedown(function() {
									// the *down* effect (mouse pressed in).
									// only on buttons that are not the "active" tab, or disabled
									button
										.not('.' + tm + '-state-active')
										.not('.' + tm + '-state-disabled')
										.addClass(tm + '-state-down');
								})
								.mouseup(function() {
									// undo the *down* effect
									button.removeClass(tm + '-state-down');
								})
								.hover(
									function() {
										// the *hover* effect.
										// only on buttons that are not the "active" tab, or disabled
										button
											.not('.' + tm + '-state-active')
											.not('.' + tm + '-state-disabled')
											.addClass(tm + '-state-hover');
									},
									function() {
										// undo the *hover* effect
										button
											.removeClass(tm + '-state-hover')
											.removeClass(tm + '-state-down'); // if mouseleave happens before mouseup
									}
								);

							groupChildren = groupChildren.add(button);
						}
					}
				});

				if (isOnlyButtons) {
					groupChildren
						.first().addClass(tm + '-corner-left').end()
						.last().addClass(tm + '-corner-right').end();
				}

				if (groupChildren.length > 1) {
					groupEl = $('<div/>');
					if (isOnlyButtons) {
						groupEl.addClass('fc-button-group');
					}
					groupEl.append(groupChildren);
					sectionEl.append(groupEl);
				}
				else {
					sectionEl.append(groupChildren); // 1 or 0 children
				}
			});
		}

		return sectionEl;
	}


	function updateTitle(text) {
		if (el) {
			el.find('h2').text(text);
		}
	}


	function activateButton(buttonName) {
		if (el) {
			el.find('.fc-' + buttonName + '-button')
				.addClass(tm + '-state-active');
		}
	}


	function deactivateButton(buttonName) {
		if (el) {
			el.find('.fc-' + buttonName + '-button')
				.removeClass(tm + '-state-active');
		}
	}


	function disableButton(buttonName) {
		if (el) {
			el.find('.fc-' + buttonName + '-button')
				.prop('disabled', true)
				.addClass(tm + '-state-disabled');
		}
	}


	function enableButton(buttonName) {
		if (el) {
			el.find('.fc-' + buttonName + '-button')
				.prop('disabled', false)
				.removeClass(tm + '-state-disabled');
		}
	}


	function getViewsWithButtons() {
		return viewsWithButtons;
	}

}

;;

var Calendar = FC.Calendar = Class.extend(EmitterMixin, {

	view: null, // current View object
	viewsByType: null, // holds all instantiated view instances, current or not
	currentDate: null, // unzoned moment. private (public API should use getDate instead)
	loadingLevel: 0, // number of simultaneous loading tasks


	constructor: function(el, overrides) {

		// declare the current calendar instance relies on GlobalEmitter. needed for garbage collection.
		// unneeded() is called in destroy.
		GlobalEmitter.needed();

		this.el = el;
		this.viewsByType = {};
		this.viewSpecCache = {};

		this.initOptionsInternals(overrides);
		this.initMomentInternals(); // needs to happen after options hash initialized
		this.initCurrentDate();

		EventManager.call(this); // needs options immediately
		this.initialize();
	},


	// Subclasses can override this for initialization logic after the constructor has been called
	initialize: function() {
	},


	// Public API
	// -----------------------------------------------------------------------------------------------------------------


	getCalendar: function() {
		return this;
	},


	getView: function() {
		return this.view;
	},


	publiclyTrigger: function(name, thisObj) {
		var args = Array.prototype.slice.call(arguments, 2);
		var optHandler = this.opt(name);

		thisObj = thisObj || this.el[0];
		this.triggerWith(name, thisObj, args); // Emitter's method

		if (optHandler) {
			return optHandler.apply(thisObj, args);
		}
	},


	// View
	// -----------------------------------------------------------------------------------------------------------------


	// Given a view name for a custom view or a standard view, creates a ready-to-go View object
	instantiateView: function(viewType) {
		var spec = this.getViewSpec(viewType);

		return new spec['class'](this, spec);
	},


	// Returns a boolean about whether the view is okay to instantiate at some point
	isValidViewType: function(viewType) {
		return Boolean(this.getViewSpec(viewType));
	},


	changeView: function(viewName, dateOrRange) {

		if (dateOrRange) {

			if (dateOrRange.start && dateOrRange.end) { // a range
				this.recordOptionOverrides({ // will not rerender
					visibleRange: dateOrRange
				});
			}
			else { // a date
				this.currentDate = this.moment(dateOrRange).stripZone(); // just like gotoDate
			}
		}

		this.renderView(viewName);
	},


	// Forces navigation to a view for the given date.
	// `viewType` can be a specific view name or a generic one like "week" or "day".
	zoomTo: function(newDate, viewType) {
		var spec;

		viewType = viewType || 'day'; // day is default zoom
		spec = this.getViewSpec(viewType) || this.getUnitViewSpec(viewType);

		this.currentDate = newDate.clone();
		this.renderView(spec ? spec.type : null);
	},


	// Current Date
	// -----------------------------------------------------------------------------------------------------------------


	initCurrentDate: function() {
		var defaultDateInput = this.opt('defaultDate');

		// compute the initial ambig-timezone date
		if (defaultDateInput != null) {
			this.currentDate = this.moment(defaultDateInput).stripZone();
		}
		else {
			this.currentDate = this.getNow(); // getNow already returns unzoned
		}
	},


	prev: function() {
		var prevInfo = this.view.buildPrevDateProfile(this.currentDate);

		if (prevInfo.isValid) {
			this.currentDate = prevInfo.date;
			this.renderView();
		}
	},


	next: function() {
		var nextInfo = this.view.buildNextDateProfile(this.currentDate);

		if (nextInfo.isValid) {
			this.currentDate = nextInfo.date;
			this.renderView();
		}
	},


	prevYear: function() {
		this.currentDate.add(-1, 'years');
		this.renderView();
	},


	nextYear: function() {
		this.currentDate.add(1, 'years');
		this.renderView();
	},


	today: function() {
		this.currentDate = this.getNow(); // should deny like prev/next?
		this.renderView();
	},


	gotoDate: function(zonedDateInput) {
		this.currentDate = this.moment(zonedDateInput).stripZone();
		this.renderView();
	},


	incrementDate: function(delta) {
		this.currentDate.add(moment.duration(delta));
		this.renderView();
	},


	// for external API
	getDate: function() {
		return this.applyTimezone(this.currentDate); // infuse the calendar's timezone
	},


	// Loading Triggering
	// -----------------------------------------------------------------------------------------------------------------


	// Should be called when any type of async data fetching begins
	pushLoading: function() {
		if (!(this.loadingLevel++)) {
			this.publiclyTrigger('loading', null, true, this.view);
		}
	},


	// Should be called when any type of async data fetching completes
	popLoading: function() {
		if (!(--this.loadingLevel)) {
			this.publiclyTrigger('loading', null, false, this.view);
		}
	},


	// Selection
	// -----------------------------------------------------------------------------------------------------------------


	// this public method receives start/end dates in any format, with any timezone
	select: function(zonedStartInput, zonedEndInput) {
		this.view.select(
			this.buildSelectSpan.apply(this, arguments)
		);
	},


	unselect: function() { // safe to be called before renderView
		if (this.view) {
			this.view.unselect();
		}
	},


	// Given arguments to the select method in the API, returns a span (unzoned start/end and other info)
	buildSelectSpan: function(zonedStartInput, zonedEndInput) {
		var start = this.moment(zonedStartInput).stripZone();
		var end;

		if (zonedEndInput) {
			end = this.moment(zonedEndInput).stripZone();
		}
		else if (start.hasTime()) {
			end = start.clone().add(this.defaultTimedEventDuration);
		}
		else {
			end = start.clone().add(this.defaultAllDayEventDuration);
		}

		return { start: start, end: end };
	},


	// Misc
	// -----------------------------------------------------------------------------------------------------------------


	// will return `null` if invalid range
	parseRange: function(rangeInput) {
		var start = null;
		var end = null;

		if (rangeInput.start) {
			start = this.moment(rangeInput.start).stripZone();
		}

		if (rangeInput.end) {
			end = this.moment(rangeInput.end).stripZone();
		}

		if (!start && !end) {
			return null;
		}

		if (start && end && end.isBefore(start)) {
			return null;
		}

		return { start: start, end: end };
	},


	rerenderEvents: function() { // API method. destroys old events if previously rendered.
		if (this.elementVisible()) {
			this.reportEventChange(); // will re-trasmit events to the view, causing a rerender
		}
	}

});

;;
/*
Options binding/triggering system.
*/
Calendar.mixin({

	dirDefaults: null, // option defaults related to LTR or RTL
	localeDefaults: null, // option defaults related to current locale
	overrides: null, // option overrides given to the fullCalendar constructor
	dynamicOverrides: null, // options set with dynamic setter method. higher precedence than view overrides.
	optionsModel: null, // all defaults combined with overrides


	initOptionsInternals: function(overrides) {
		this.overrides = $.extend({}, overrides); // make a copy
		this.dynamicOverrides = {};
		this.optionsModel = new Model();

		this.populateOptionsHash();
	},


	// public getter/setter
	option: function(name, value) {
		var newOptionHash;

		if (typeof name === 'string') {
			if (value === undefined) { // getter
				return this.optionsModel.get(name);
			}
			else { // setter for individual option
				newOptionHash = {};
				newOptionHash[name] = value;
				this.setOptions(newOptionHash);
			}
		}
		else if (typeof name === 'object') { // compound setter with object input
			this.setOptions(name);
		}
	},


	// private getter
	opt: function(name) {
		return this.optionsModel.get(name);
	},


	setOptions: function(newOptionHash) {
		var optionCnt = 0;
		var optionName;

		this.recordOptionOverrides(newOptionHash);

		for (optionName in newOptionHash) {
			optionCnt++;
		}

		// special-case handling of single option change.
		// if only one option change, `optionName` will be its name.
		if (optionCnt === 1) {
			if (optionName === 'height' || optionName === 'contentHeight' || optionName === 'aspectRatio') {
				this.updateSize(true); // true = allow recalculation of height
				return;
			}
			else if (optionName === 'defaultDate') {
				return; // can't change date this way. use gotoDate instead
			}
			else if (optionName === 'businessHours') {
				if (this.view) {
					this.view.unrenderBusinessHours();
					this.view.renderBusinessHours();
				}
				return;
			}
			else if (optionName === 'timezone') {
				this.rezoneArrayEventSources();
				this.refetchEvents();
				return;
			}
		}

		// catch-all. rerender the header and footer and rebuild/rerender the current view
		this.renderHeader();
		this.renderFooter();

		// even non-current views will be affected by this option change. do before rerender
		// TODO: detangle
		this.viewsByType = {};

		this.reinitView();
	},


	// Computes the flattened options hash for the calendar and assigns to `this.options`.
	// Assumes this.overrides and this.dynamicOverrides have already been initialized.
	populateOptionsHash: function() {
		var locale, localeDefaults;
		var isRTL, dirDefaults;
		var rawOptions;

		locale = firstDefined( // explicit locale option given?
			this.dynamicOverrides.locale,
			this.overrides.locale
		);
		localeDefaults = localeOptionHash[locale];
		if (!localeDefaults) { // explicit locale option not given or invalid?
			locale = Calendar.defaults.locale;
			localeDefaults = localeOptionHash[locale] || {};
		}

		isRTL = firstDefined( // based on options computed so far, is direction RTL?
			this.dynamicOverrides.isRTL,
			this.overrides.isRTL,
			localeDefaults.isRTL,
			Calendar.defaults.isRTL
		);
		dirDefaults = isRTL ? Calendar.rtlDefaults : {};

		this.dirDefaults = dirDefaults;
		this.localeDefaults = localeDefaults;

		rawOptions = mergeOptions([ // merge defaults and overrides. lowest to highest precedence
			Calendar.defaults, // global defaults
			dirDefaults,
			localeDefaults,
			this.overrides,
			this.dynamicOverrides
		]);
		populateInstanceComputableOptions(rawOptions); // fill in gaps with computed options

		this.optionsModel.reset(rawOptions);
	},


	// stores the new options internally, but does not rerender anything.
	recordOptionOverrides: function(newOptionHash) {
		var optionName;

		for (optionName in newOptionHash) {
			this.dynamicOverrides[optionName] = newOptionHash[optionName];
		}

		this.viewSpecCache = {}; // the dynamic override invalidates the options in this cache, so just clear it
		this.populateOptionsHash(); // this.options needs to be recomputed after the dynamic override
	}

});

;;

Calendar.mixin({

	defaultAllDayEventDuration: null,
	defaultTimedEventDuration: null,
	localeData: null,


	initMomentInternals: function() {
		var _this = this;

		this.defaultAllDayEventDuration = moment.duration(this.opt('defaultAllDayEventDuration'));
		this.defaultTimedEventDuration = moment.duration(this.opt('defaultTimedEventDuration'));

		// Called immediately, and when any of the options change.
		// Happens before any internal objects rebuild or rerender, because this is very core.
		this.optionsModel.watch('buildingMomentLocale', [
			'?locale', '?monthNames', '?monthNamesShort', '?dayNames', '?dayNamesShort',
			'?firstDay', '?weekNumberCalculation'
		], function(opts) {
			var weekNumberCalculation = opts.weekNumberCalculation;
			var firstDay = opts.firstDay;
			var _week;

			// normalize
			if (weekNumberCalculation === 'iso') {
				weekNumberCalculation = 'ISO'; // normalize
			}

			var localeData = createObject( // make a cheap copy
				getMomentLocaleData(opts.locale) // will fall back to en
			);

			if (opts.monthNames) {
				localeData._months = opts.monthNames;
			}
			if (opts.monthNamesShort) {
				localeData._monthsShort = opts.monthNamesShort;
			}
			if (opts.dayNames) {
				localeData._weekdays = opts.dayNames;
			}
			if (opts.dayNamesShort) {
				localeData._weekdaysShort = opts.dayNamesShort;
			}

			if (firstDay == null && weekNumberCalculation === 'ISO') {
				firstDay = 1;
			}
			if (firstDay != null) {
				_week = createObject(localeData._week); // _week: { dow: # }
				_week.dow = firstDay;
				localeData._week = _week;
			}

			if ( // whitelist certain kinds of input
				weekNumberCalculation === 'ISO' ||
				weekNumberCalculation === 'local' ||
				typeof weekNumberCalculation === 'function'
			) {
				localeData._fullCalendar_weekCalc = weekNumberCalculation; // moment-ext will know what to do with it
			}

			_this.localeData = localeData;

			// If the internal current date object already exists, move to new locale.
			// We do NOT need to do this technique for event dates, because this happens when converting to "segments".
			if (_this.currentDate) {
				_this.localizeMoment(_this.currentDate); // sets to localeData
			}
		});
	},


	// Builds a moment using the settings of the current calendar: timezone and locale.
	// Accepts anything the vanilla moment() constructor accepts.
	moment: function() {
		var mom;

		if (this.opt('timezone') === 'local') {
			mom = FC.moment.apply(null, arguments);

			// Force the moment to be local, because FC.moment doesn't guarantee it.
			if (mom.hasTime()) { // don't give ambiguously-timed moments a local zone
				mom.local();
			}
		}
		else if (this.opt('timezone') === 'UTC') {
			mom = FC.moment.utc.apply(null, arguments); // process as UTC
		}
		else {
			mom = FC.moment.parseZone.apply(null, arguments); // let the input decide the zone
		}

		this.localizeMoment(mom); // TODO

		return mom;
	},


	// Updates the given moment's locale settings to the current calendar locale settings.
	localizeMoment: function(mom) {
		mom._locale = this.localeData;
	},


	// Returns a boolean about whether or not the calendar knows how to calculate
	// the timezone offset of arbitrary dates in the current timezone.
	getIsAmbigTimezone: function() {
		return this.opt('timezone') !== 'local' && this.opt('timezone') !== 'UTC';
	},


	// Returns a copy of the given date in the current timezone. Has no effect on dates without times.
	applyTimezone: function(date) {
		if (!date.hasTime()) {
			return date.clone();
		}

		var zonedDate = this.moment(date.toArray());
		var timeAdjust = date.time() - zonedDate.time();
		var adjustedZonedDate;

		// Safari sometimes has problems with this coersion when near DST. Adjust if necessary. (bug #2396)
		if (timeAdjust) { // is the time result different than expected?
			adjustedZonedDate = zonedDate.clone().add(timeAdjust); // add milliseconds
			if (date.time() - adjustedZonedDate.time() === 0) { // does it match perfectly now?
				zonedDate = adjustedZonedDate;
			}
		}

		return zonedDate;
	},


	// Returns a moment for the current date, as defined by the client's computer or from the `now` option.
	// Will return an moment with an ambiguous timezone.
	getNow: function() {
		var now = this.opt('now');
		if (typeof now === 'function') {
			now = now();
		}
		return this.moment(now).stripZone();
	},


	// Produces a human-readable string for the given duration.
	// Side-effect: changes the locale of the given duration.
	humanizeDuration: function(duration) {
		return duration.locale(this.opt('locale')).humanize();
	},



	// Event-Specific Date Utilities. TODO: move
	// -----------------------------------------------------------------------------------------------------------------


	// Get an event's normalized end date. If not present, calculate it from the defaults.
	getEventEnd: function(event) {
		if (event.end) {
			return event.end.clone();
		}
		else {
			return this.getDefaultEventEnd(event.allDay, event.start);
		}
	},


	// Given an event's allDay status and start date, return what its fallback end date should be.
	// TODO: rename to computeDefaultEventEnd
	getDefaultEventEnd: function(allDay, zonedStart) {
		var end = zonedStart.clone();

		if (allDay) {
			end.stripTime().add(this.defaultAllDayEventDuration);
		}
		else {
			end.add(this.defaultTimedEventDuration);
		}

		if (this.getIsAmbigTimezone()) {
			end.stripZone(); // we don't know what the tzo should be
		}

		return end;
	}

});

;;

Calendar.mixin({

	viewSpecCache: null, // cache of view definitions (initialized in Calendar.js)


	// Gets information about how to create a view. Will use a cache.
	getViewSpec: function(viewType) {
		var cache = this.viewSpecCache;

		return cache[viewType] || (cache[viewType] = this.buildViewSpec(viewType));
	},


	// Given a duration singular unit, like "week" or "day", finds a matching view spec.
	// Preference is given to views that have corresponding buttons.
	getUnitViewSpec: function(unit) {
		var viewTypes;
		var i;
		var spec;

		if ($.inArray(unit, unitsDesc) != -1) {

			// put views that have buttons first. there will be duplicates, but oh well
			viewTypes = this.header.getViewsWithButtons(); // TODO: include footer as well?
			$.each(FC.views, function(viewType) { // all views
				viewTypes.push(viewType);
			});

			for (i = 0; i < viewTypes.length; i++) {
				spec = this.getViewSpec(viewTypes[i]);
				if (spec) {
					if (spec.singleUnit == unit) {
						return spec;
					}
				}
			}
		}
	},


	// Builds an object with information on how to create a given view
	buildViewSpec: function(requestedViewType) {
		var viewOverrides = this.overrides.views || {};
		var specChain = []; // for the view. lowest to highest priority
		var defaultsChain = []; // for the view. lowest to highest priority
		var overridesChain = []; // for the view. lowest to highest priority
		var viewType = requestedViewType;
		var spec; // for the view
		var overrides; // for the view
		var durationInput;
		var duration;
		var unit;

		// iterate from the specific view definition to a more general one until we hit an actual View class
		while (viewType) {
			spec = fcViews[viewType];
			overrides = viewOverrides[viewType];
			viewType = null; // clear. might repopulate for another iteration

			if (typeof spec === 'function') { // TODO: deprecate
				spec = { 'class': spec };
			}

			if (spec) {
				specChain.unshift(spec);
				defaultsChain.unshift(spec.defaults || {});
				durationInput = durationInput || spec.duration;
				viewType = viewType || spec.type;
			}

			if (overrides) {
				overridesChain.unshift(overrides); // view-specific option hashes have options at zero-level
				durationInput = durationInput || overrides.duration;
				viewType = viewType || overrides.type;
			}
		}

		spec = mergeProps(specChain);
		spec.type = requestedViewType;
		if (!spec['class']) {
			return false;
		}

		// fall back to top-level `duration` option
		durationInput = durationInput ||
			this.dynamicOverrides.duration ||
			this.overrides.duration;

		if (durationInput) {
			duration = moment.duration(durationInput);

			if (duration.valueOf()) { // valid?

				unit = computeDurationGreatestUnit(duration, durationInput);

				spec.duration = duration;
				spec.durationUnit = unit;

				// view is a single-unit duration, like "week" or "day"
				// incorporate options for this. lowest priority
				if (duration.as(unit) === 1) {
					spec.singleUnit = unit;
					overridesChain.unshift(viewOverrides[unit] || {});
				}
			}
		}

		spec.defaults = mergeOptions(defaultsChain);
		spec.overrides = mergeOptions(overridesChain);

		this.buildViewSpecOptions(spec);
		this.buildViewSpecButtonText(spec, requestedViewType);

		return spec;
	},


	// Builds and assigns a view spec's options object from its already-assigned defaults and overrides
	buildViewSpecOptions: function(spec) {
		spec.options = mergeOptions([ // lowest to highest priority
			Calendar.defaults, // global defaults
			spec.defaults, // view's defaults (from ViewSubclass.defaults)
			this.dirDefaults,
			this.localeDefaults, // locale and dir take precedence over view's defaults!
			this.overrides, // calendar's overrides (options given to constructor)
			spec.overrides, // view's overrides (view-specific options)
			this.dynamicOverrides // dynamically set via setter. highest precedence
		]);
		populateInstanceComputableOptions(spec.options);
	},


	// Computes and assigns a view spec's buttonText-related options
	buildViewSpecButtonText: function(spec, requestedViewType) {

		// given an options object with a possible `buttonText` hash, lookup the buttonText for the
		// requested view, falling back to a generic unit entry like "week" or "day"
		function queryButtonText(options) {
			var buttonText = options.buttonText || {};
			return buttonText[requestedViewType] ||
				// view can decide to look up a certain key
				(spec.buttonTextKey ? buttonText[spec.buttonTextKey] : null) ||
				// a key like "month"
				(spec.singleUnit ? buttonText[spec.singleUnit] : null);
		}

		// highest to lowest priority
		spec.buttonTextOverride =
			queryButtonText(this.dynamicOverrides) ||
			queryButtonText(this.overrides) || // constructor-specified buttonText lookup hash takes precedence
			spec.overrides.buttonText; // `buttonText` for view-specific options is a string

		// highest to lowest priority. mirrors buildViewSpecOptions
		spec.buttonTextDefault =
			queryButtonText(this.localeDefaults) ||
			queryButtonText(this.dirDefaults) ||
			spec.defaults.buttonText || // a single string. from ViewSubclass.defaults
			queryButtonText(Calendar.defaults) ||
			(spec.duration ? this.humanizeDuration(spec.duration) : null) || // like "3 days"
			requestedViewType; // fall back to given view name
	}

});

;;

Calendar.mixin({

	el: null,
	contentEl: null,
	suggestedViewHeight: null,
	windowResizeProxy: null,
	ignoreWindowResize: 0,


	render: function() {
		if (!this.contentEl) {
			this.initialRender();
		}
		else if (this.elementVisible()) {
			// mainly for the public API
			this.calcSize();
			this.renderView();
		}
	},


	initialRender: function() {
		var _this = this;
		var el = this.el;

		el.addClass('fc');

		// event delegation for nav links
		el.on('click.fc', 'a[data-goto]', function(ev) {
			var anchorEl = $(this);
			var gotoOptions = anchorEl.data('goto'); // will automatically parse JSON
			var date = _this.moment(gotoOptions.date);
			var viewType = gotoOptions.type;

			// property like "navLinkDayClick". might be a string or a function
			var customAction = _this.view.opt('navLink' + capitaliseFirstLetter(viewType) + 'Click');

			if (typeof customAction === 'function') {
				customAction(date, ev);
			}
			else {
				if (typeof customAction === 'string') {
					viewType = customAction;
				}
				_this.zoomTo(date, viewType);
			}
		});

		// called immediately, and upon option change
		this.optionsModel.watch('applyingThemeClasses', [ '?theme' ], function(opts) {
			el.toggleClass('ui-widget', opts.theme);
			el.toggleClass('fc-unthemed', !opts.theme);
		});

		// called immediately, and upon option change.
		// HACK: locale often affects isRTL, so we explicitly listen to that too.
		this.optionsModel.watch('applyingDirClasses', [ '?isRTL', '?locale' ], function(opts) {
			el.toggleClass('fc-ltr', !opts.isRTL);
			el.toggleClass('fc-rtl', opts.isRTL);
		});

		this.contentEl = $("<div class='fc-view-container'/>").prependTo(el);

		this.initToolbars();
		this.renderHeader();
		this.renderFooter();
		this.renderView(this.opt('defaultView'));

		if (this.opt('handleWindowResize')) {
			$(window).resize(
				this.windowResizeProxy = debounce( // prevents rapid calls
					this.windowResize.bind(this),
					this.opt('windowResizeDelay')
				)
			);
		}
	},


	destroy: function() {

		if (this.view) {
			this.view.removeElement();

			// NOTE: don't null-out this.view in case API methods are called after destroy.
			// It is still the "current" view, just not rendered.
		}

		this.toolbarsManager.proxyCall('removeElement');
		this.contentEl.remove();
		this.el.removeClass('fc fc-ltr fc-rtl fc-unthemed ui-widget');

		this.el.off('.fc'); // unbind nav link handlers

		if (this.windowResizeProxy) {
			$(window).unbind('resize', this.windowResizeProxy);
			this.windowResizeProxy = null;
		}

		GlobalEmitter.unneeded();
	},


	elementVisible: function() {
		return this.el.is(':visible');
	},



	// View Rendering
	// -----------------------------------------------------------------------------------


	// Renders a view because of a date change, view-type change, or for the first time.
	// If not given a viewType, keep the current view but render different dates.
	// Accepts an optional scroll state to restore to.
	renderView: function(viewType, forcedScroll) {

		this.ignoreWindowResize++;

		var needsClearView = this.view && viewType && this.view.type !== viewType;

		// if viewType is changing, remove the old view's rendering
		if (needsClearView) {
			this.freezeContentHeight(); // prevent a scroll jump when view element is removed
			this.clearView();
		}

		// if viewType changed, or the view was never created, create a fresh view
		if (!this.view && viewType) {
			this.view =
				this.viewsByType[viewType] ||
				(this.viewsByType[viewType] = this.instantiateView(viewType));

			this.view.setElement(
				$("<div class='fc-view fc-" + viewType + "-view' />").appendTo(this.contentEl)
			);
			this.toolbarsManager.proxyCall('activateButton', viewType);
		}

		if (this.view) {

			if (forcedScroll) {
				this.view.addForcedScroll(forcedScroll);
			}

			if (this.elementVisible()) {
				this.currentDate = this.view.setDate(this.currentDate);
			}
		}

		if (needsClearView) {
			this.thawContentHeight();
		}

		this.ignoreWindowResize--;
	},


	// Unrenders the current view and reflects this change in the Header.
	// Unregsiters the `view`, but does not remove from viewByType hash.
	clearView: function() {
		this.toolbarsManager.proxyCall('deactivateButton', this.view.type);
		this.view.removeElement();
		this.view = null;
	},


	// Destroys the view, including the view object. Then, re-instantiates it and renders it.
	// Maintains the same scroll state.
	// TODO: maintain any other user-manipulated state.
	reinitView: function() {
		this.ignoreWindowResize++;
		this.freezeContentHeight();

		var viewType = this.view.type;
		var scrollState = this.view.queryScroll();
		this.clearView();
		this.calcSize();
		this.renderView(viewType, scrollState);

		this.thawContentHeight();
		this.ignoreWindowResize--;
	},


	// Resizing
	// -----------------------------------------------------------------------------------


	getSuggestedViewHeight: function() {
		if (this.suggestedViewHeight === null) {
			this.calcSize();
		}
		return this.suggestedViewHeight;
	},


	isHeightAuto: function() {
		return this.opt('contentHeight') === 'auto' || this.opt('height') === 'auto';
	},


	updateSize: function(shouldRecalc) {
		if (this.elementVisible()) {

			if (shouldRecalc) {
				this._calcSize();
			}

			this.ignoreWindowResize++;
			this.view.updateSize(true); // isResize=true. will poll getSuggestedViewHeight() and isHeightAuto()
			this.ignoreWindowResize--;

			return true; // signal success
		}
	},


	calcSize: function() {
		if (this.elementVisible()) {
			this._calcSize();
		}
	},


	_calcSize: function() { // assumes elementVisible
		var contentHeightInput = this.opt('contentHeight');
		var heightInput = this.opt('height');

		if (typeof contentHeightInput === 'number') { // exists and not 'auto'
			this.suggestedViewHeight = contentHeightInput;
		}
		else if (typeof contentHeightInput === 'function') { // exists and is a function
			this.suggestedViewHeight = contentHeightInput();
		}
		else if (typeof heightInput === 'number') { // exists and not 'auto'
			this.suggestedViewHeight = heightInput - this.queryToolbarsHeight();
		}
		else if (typeof heightInput === 'function') { // exists and is a function
			this.suggestedViewHeight = heightInput() - this.queryToolbarsHeight();
		}
		else if (heightInput === 'parent') { // set to height of parent element
			this.suggestedViewHeight = this.el.parent().height() - this.queryToolbarsHeight();
		}
		else {
			this.suggestedViewHeight = Math.round(
				this.contentEl.width() /
				Math.max(this.opt('aspectRatio'), .5)
			);
		}
	},


	windowResize: function(ev) {
		if (
			!this.ignoreWindowResize &&
			ev.target === window && // so we don't process jqui "resize" events that have bubbled up
			this.view.renderRange // view has already been rendered
		) {
			if (this.updateSize(true)) {
				this.view.publiclyTrigger('windowResize', this.el[0]);
			}
		}
	},


	/* Height "Freezing"
	-----------------------------------------------------------------------------*/


	freezeContentHeight: function() {
		this.contentEl.css({
			width: '100%',
			height: this.contentEl.height(),
			overflow: 'hidden'
		});
	},


	thawContentHeight: function() {
		this.contentEl.css({
			width: '',
			height: '',
			overflow: ''
		});
	}

});

;;

Calendar.mixin({

	header: null,
	footer: null,
	toolbarsManager: null,


	initToolbars: function() {
		this.header = new Toolbar(this, this.computeHeaderOptions());
		this.footer = new Toolbar(this, this.computeFooterOptions());
		this.toolbarsManager = new Iterator([ this.header, this.footer ]);
	},


	computeHeaderOptions: function() {
		return {
			extraClasses: 'fc-header-toolbar',
			layout: this.opt('header')
		};
	},


	computeFooterOptions: function() {
		return {
			extraClasses: 'fc-footer-toolbar',
			layout: this.opt('footer')
		};
	},


	// can be called repeatedly and Header will rerender
	renderHeader: function() {
		var header = this.header;

		header.setToolbarOptions(this.computeHeaderOptions());
		header.render();

		if (header.el) {
			this.el.prepend(header.el);
		}
	},


	// can be called repeatedly and Footer will rerender
	renderFooter: function() {
		var footer = this.footer;

		footer.setToolbarOptions(this.computeFooterOptions());
		footer.render();

		if (footer.el) {
			this.el.append(footer.el);
		}
	},


	setToolbarsTitle: function(title) {
		this.toolbarsManager.proxyCall('updateTitle', title);
	},


	updateToolbarButtons: function() {
		var now = this.getNow();
		var view = this.view;
		var todayInfo = view.buildDateProfile(now);
		var prevInfo = view.buildPrevDateProfile(this.currentDate);
		var nextInfo = view.buildNextDateProfile(this.currentDate);

		this.toolbarsManager.proxyCall(
			(todayInfo.isValid && !isDateWithinRange(now, view.currentRange)) ?
				'enableButton' :
				'disableButton',
			'today'
		);

		this.toolbarsManager.proxyCall(
			prevInfo.isValid ?
				'enableButton' :
				'disableButton',
			'prev'
		);

		this.toolbarsManager.proxyCall(
			nextInfo.isValid ?
				'enableButton' :
				'disableButton',
			'next'
		);
	},


	queryToolbarsHeight: function() {
		return this.toolbarsManager.items.reduce(function(accumulator, toolbar) {
			var toolbarHeight = toolbar.el ? toolbar.el.outerHeight(true) : 0; // includes margin
			return accumulator + toolbarHeight;
		}, 0);
	}

});

;;

Calendar.defaults = {

	titleRangeSeparator: ' \u2013 ', // en dash
	monthYearFormat: 'MMMM YYYY', // required for en. other locales rely on datepicker computable option

	defaultTimedEventDuration: '02:00:00',
	defaultAllDayEventDuration: { days: 1 },
	forceEventDuration: false,
	nextDayThreshold: '09:00:00', // 9am

	// display
	defaultView: 'month',
	aspectRatio: 1.35,
	header: {
		left: 'title',
		center: '',
		right: 'today prev,next'
	},
	weekends: true,
	weekNumbers: false,

	weekNumberTitle: 'W',
	weekNumberCalculation: 'local',
	
	//editable: false,

	//nowIndicator: false,

	scrollTime: '06:00:00',
	minTime: '00:00:00',
	maxTime: '24:00:00',
	showNonCurrentDates: true,
	
	// event ajax
	lazyFetching: true,
	startParam: 'start',
	endParam: 'end',
	timezoneParam: 'timezone',

	timezone: false,

	//allDayDefault: undefined,

	// locale
	isRTL: false,
	buttonText: {
		prev: "prev",
		next: "next",
		prevYear: "prev year",
		nextYear: "next year",
		year: 'year', // TODO: locale files need to specify this
		today: 'today',
		month: 'month',
		week: 'week',
		day: 'day'
	},

	buttonIcons: {
		prev: 'left-single-arrow',
		next: 'right-single-arrow',
		prevYear: 'left-double-arrow',
		nextYear: 'right-double-arrow'
	},

	allDayText: 'all-day',
	
	// jquery-ui theming
	theme: false,
	themeButtonIcons: {
		prev: 'circle-triangle-w',
		next: 'circle-triangle-e',
		prevYear: 'seek-prev',
		nextYear: 'seek-next'
	},

	//eventResizableFromStart: false,
	dragOpacity: .75,
	dragRevertDuration: 500,
	dragScroll: true,
	
	//selectable: false,
	unselectAuto: true,
	//selectMinDistance: 0,
	
	dropAccept: '*',

	eventOrder: 'title',
	//eventRenderWait: null,

	eventLimit: false,
	eventLimitText: 'more',
	eventLimitClick: 'popover',
	dayPopoverFormat: 'LL',
	
	handleWindowResize: true,
	windowResizeDelay: 100, // milliseconds before an updateSize happens

	longPressDelay: 1000
	
};


Calendar.englishDefaults = { // used by locale.js
	dayPopoverFormat: 'dddd, MMMM D'
};


Calendar.rtlDefaults = { // right-to-left defaults
	header: { // TODO: smarter solution (first/center/last ?)
		left: 'next,prev today',
		center: '',
		right: 'title'
	},
	buttonIcons: {
		prev: 'right-single-arrow',
		next: 'left-single-arrow',
		prevYear: 'right-double-arrow',
		nextYear: 'left-double-arrow'
	},
	themeButtonIcons: {
		prev: 'circle-triangle-e',
		next: 'circle-triangle-w',
		nextYear: 'seek-prev',
		prevYear: 'seek-next'
	}
};

;;

var localeOptionHash = FC.locales = {}; // initialize and expose


// TODO: document the structure and ordering of a FullCalendar locale file


// Initialize jQuery UI datepicker translations while using some of the translations
// Will set this as the default locales for datepicker.
FC.datepickerLocale = function(localeCode, dpLocaleCode, dpOptions) {

	// get the FullCalendar internal option hash for this locale. create if necessary
	var fcOptions = localeOptionHash[localeCode] || (localeOptionHash[localeCode] = {});

	// transfer some simple options from datepicker to fc
	fcOptions.isRTL = dpOptions.isRTL;
	fcOptions.weekNumberTitle = dpOptions.weekHeader;

	// compute some more complex options from datepicker
	$.each(dpComputableOptions, function(name, func) {
		fcOptions[name] = func(dpOptions);
	});

	// is jQuery UI Datepicker is on the page?
	if ($.datepicker) {

		// Register the locale data.
		// FullCalendar and MomentJS use locale codes like "pt-br" but Datepicker
		// does it like "pt-BR" or if it doesn't have the locale, maybe just "pt".
		// Make an alias so the locale can be referenced either way.
		$.datepicker.regional[dpLocaleCode] =
			$.datepicker.regional[localeCode] = // alias
				dpOptions;

		// Alias 'en' to the default locale data. Do this every time.
		$.datepicker.regional.en = $.datepicker.regional[''];

		// Set as Datepicker's global defaults.
		$.datepicker.setDefaults(dpOptions);
	}
};


// Sets FullCalendar-specific translations. Will set the locales as the global default.
FC.locale = function(localeCode, newFcOptions) {
	var fcOptions;
	var momOptions;

	// get the FullCalendar internal option hash for this locale. create if necessary
	fcOptions = localeOptionHash[localeCode] || (localeOptionHash[localeCode] = {});

	// provided new options for this locales? merge them in
	if (newFcOptions) {
		fcOptions = localeOptionHash[localeCode] = mergeOptions([ fcOptions, newFcOptions ]);
	}

	// compute locale options that weren't defined.
	// always do this. newFcOptions can be undefined when initializing from i18n file,
	// so no way to tell if this is an initialization or a default-setting.
	momOptions = getMomentLocaleData(localeCode); // will fall back to en
	$.each(momComputableOptions, function(name, func) {
		if (fcOptions[name] == null) {
			fcOptions[name] = func(momOptions, fcOptions);
		}
	});

	// set it as the default locale for FullCalendar
	Calendar.defaults.locale = localeCode;
};


// NOTE: can't guarantee any of these computations will run because not every locale has datepicker
// configs, so make sure there are English fallbacks for these in the defaults file.
var dpComputableOptions = {

	buttonText: function(dpOptions) {
		return {
			// the translations sometimes wrongly contain HTML entities
			prev: stripHtmlEntities(dpOptions.prevText),
			next: stripHtmlEntities(dpOptions.nextText),
			today: stripHtmlEntities(dpOptions.currentText)
		};
	},

	// Produces format strings like "MMMM YYYY" -> "September 2014"
	monthYearFormat: function(dpOptions) {
		return dpOptions.showMonthAfterYear ?
			'YYYY[' + dpOptions.yearSuffix + '] MMMM' :
			'MMMM YYYY[' + dpOptions.yearSuffix + ']';
	}

};

var momComputableOptions = {

	// Produces format strings like "ddd M/D" -> "Fri 9/15"
	dayOfMonthFormat: function(momOptions, fcOptions) {
		var format = momOptions.longDateFormat('l'); // for the format like "M/D/YYYY"

		// strip the year off the edge, as well as other misc non-whitespace chars
		format = format.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g, '');

		if (fcOptions.isRTL) {
			format += ' ddd'; // for RTL, add day-of-week to end
		}
		else {
			format = 'ddd ' + format; // for LTR, add day-of-week to beginning
		}
		return format;
	},

	// Produces format strings like "h:mma" -> "6:00pm"
	mediumTimeFormat: function(momOptions) { // can't be called `timeFormat` because collides with option
		return momOptions.longDateFormat('LT')
			.replace(/\s*a$/i, 'a'); // convert AM/PM/am/pm to lowercase. remove any spaces beforehand
	},

	// Produces format strings like "h(:mm)a" -> "6pm" / "6:30pm"
	smallTimeFormat: function(momOptions) {
		return momOptions.longDateFormat('LT')
			.replace(':mm', '(:mm)')
			.replace(/(\Wmm)$/, '($1)') // like above, but for foreign locales
			.replace(/\s*a$/i, 'a'); // convert AM/PM/am/pm to lowercase. remove any spaces beforehand
	},

	// Produces format strings like "h(:mm)t" -> "6p" / "6:30p"
	extraSmallTimeFormat: function(momOptions) {
		return momOptions.longDateFormat('LT')
			.replace(':mm', '(:mm)')
			.replace(/(\Wmm)$/, '($1)') // like above, but for foreign locales
			.replace(/\s*a$/i, 't'); // convert to AM/PM/am/pm to lowercase one-letter. remove any spaces beforehand
	},

	// Produces format strings like "ha" / "H" -> "6pm" / "18"
	hourFormat: function(momOptions) {
		return momOptions.longDateFormat('LT')
			.replace(':mm', '')
			.replace(/(\Wmm)$/, '') // like above, but for foreign locales
			.replace(/\s*a$/i, 'a'); // convert AM/PM/am/pm to lowercase. remove any spaces beforehand
	},

	// Produces format strings like "h:mm" -> "6:30" (with no AM/PM)
	noMeridiemTimeFormat: function(momOptions) {
		return momOptions.longDateFormat('LT')
			.replace(/\s*a$/i, ''); // remove trailing AM/PM
	}

};


// options that should be computed off live calendar options (considers override options)
// TODO: best place for this? related to locale?
// TODO: flipping text based on isRTL is a bad idea because the CSS `direction` might want to handle it
var instanceComputableOptions = {

	// Produces format strings for results like "Mo 16"
	smallDayDateFormat: function(options) {
		return options.isRTL ?
			'D dd' :
			'dd D';
	},

	// Produces format strings for results like "Wk 5"
	weekFormat: function(options) {
		return options.isRTL ?
			'w[ ' + options.weekNumberTitle + ']' :
			'[' + options.weekNumberTitle + ' ]w';
	},

	// Produces format strings for results like "Wk5"
	smallWeekFormat: function(options) {
		return options.isRTL ?
			'w[' + options.weekNumberTitle + ']' :
			'[' + options.weekNumberTitle + ']w';
	}

};

// TODO: make these computable properties in optionsModel
function populateInstanceComputableOptions(options) {
	$.each(instanceComputableOptions, function(name, func) {
		if (options[name] == null) {
			options[name] = func(options);
		}
	});
}


// Returns moment's internal locale data. If doesn't exist, returns English.
function getMomentLocaleData(localeCode) {
	return moment.localeData(localeCode) || moment.localeData('en');
}


// Initialize English by forcing computation of moment-derived options.
// Also, sets it as the default.
FC.locale('en', Calendar.englishDefaults);

;;

FC.sourceNormalizers = [];
FC.sourceFetchers = [];

var ajaxDefaults = {
	dataType: 'json',
	cache: false
};

var eventGUID = 1;


function EventManager() { // assumed to be a calendar
	var t = this;


	// exports
	t.requestEvents = requestEvents;
	t.reportEventChange = reportEventChange;
	t.isFetchNeeded = isFetchNeeded;
	t.fetchEvents = fetchEvents;
	t.fetchEventSources = fetchEventSources;
	t.refetchEvents = refetchEvents;
	t.refetchEventSources = refetchEventSources;
	t.getEventSources = getEventSources;
	t.getEventSourceById = getEventSourceById;
	t.addEventSource = addEventSource;
	t.removeEventSource = removeEventSource;
	t.removeEventSources = removeEventSources;
	t.updateEvent = updateEvent;
	t.updateEvents = updateEvents;
	t.renderEvent = renderEvent;
	t.renderEvents = renderEvents;
	t.removeEvents = removeEvents;
	t.clientEvents = clientEvents;
	t.mutateEvent = mutateEvent;
	t.normalizeEventDates = normalizeEventDates;
	t.normalizeEventTimes = normalizeEventTimes;


	// locals
	var stickySource = { events: [] };
	var sources = [ stickySource ];
	var rangeStart, rangeEnd;
	var pendingSourceCnt = 0; // outstanding fetch requests, max one per source
	var cache = []; // holds events that have already been expanded
	var prunedCache; // like cache, but only events that intersect with rangeStart/rangeEnd


	$.each(
		(t.opt('events') ? [ t.opt('events') ] : []).concat(t.opt('eventSources') || []),
		function(i, sourceInput) {
			var source = buildEventSource(sourceInput);
			if (source) {
				sources.push(source);
			}
		}
	);



	function requestEvents(start, end) {
		if (!t.opt('lazyFetching') || isFetchNeeded(start, end)) {
			return fetchEvents(start, end);
		}
		else {
			return Promise.resolve(prunedCache);
		}
	}


	function reportEventChange() {
		prunedCache = filterEventsWithinRange(cache);
		t.trigger('eventsReset', prunedCache);
	}


	function filterEventsWithinRange(events) {
		var filteredEvents = [];
		var i, event;

		for (i = 0; i < events.length; i++) {
			event = events[i];

			if (
				event.start.clone().stripZone() < rangeEnd &&
				t.getEventEnd(event).stripZone() > rangeStart
			) {
				filteredEvents.push(event);
			}
		}

		return filteredEvents;
	}


	t.getEventCache = function() {
		return cache;
	};



	/* Fetching
	-----------------------------------------------------------------------------*/


	// start and end are assumed to be unzoned
	function isFetchNeeded(start, end) {
		return !rangeStart || // nothing has been fetched yet?
			start < rangeStart || end > rangeEnd; // is part of the new range outside of the old range?
	}


	function fetchEvents(start, end) {
		rangeStart = start;
		rangeEnd = end;
		return refetchEvents();
	}


	// poorly named. fetches all sources with current `rangeStart` and `rangeEnd`.
	function refetchEvents() {
		return fetchEventSources(sources, 'reset');
	}


	// poorly named. fetches a subset of event sources.
	function refetchEventSources(matchInputs) {
		return fetchEventSources(getEventSourcesByMatchArray(matchInputs));
	}


	// expects an array of event source objects (the originals, not copies)
	// `specialFetchType` is an optimization parameter that affects purging of the event cache.
	function fetchEventSources(specificSources, specialFetchType) {
		var i, source;

		if (specialFetchType === 'reset') {
			cache = [];
		}
		else if (specialFetchType !== 'add') {
			cache = excludeEventsBySources(cache, specificSources);
		}

		for (i = 0; i < specificSources.length; i++) {
			source = specificSources[i];

			// already-pending sources have already been accounted for in pendingSourceCnt
			if (source._status !== 'pending') {
				pendingSourceCnt++;
			}

			source._fetchId = (source._fetchId || 0) + 1;
			source._status = 'pending';
		}

		for (i = 0; i < specificSources.length; i++) {
			source = specificSources[i];
			tryFetchEventSource(source, source._fetchId);
		}

		if (pendingSourceCnt) {
			return Promise.construct(function(resolve) {
				t.one('eventsReceived', resolve); // will send prunedCache
			});
		}
		else { // executed all synchronously, or no sources at all
			return Promise.resolve(prunedCache);
		}
	}


	// fetches an event source and processes its result ONLY if it is still the current fetch.
	// caller is responsible for incrementing pendingSourceCnt first.
	function tryFetchEventSource(source, fetchId) {
		_fetchEventSource(source, function(eventInputs) {
			var isArraySource = $.isArray(source.events);
			var i, eventInput;
			var abstractEvent;

			if (
				// is this the source's most recent fetch?
				// if not, rely on an upcoming fetch of this source to decrement pendingSourceCnt
				fetchId === source._fetchId &&
				// event source no longer valid?
				source._status !== 'rejected'
			) {
				source._status = 'resolved';

				if (eventInputs) {
					for (i = 0; i < eventInputs.length; i++) {
						eventInput = eventInputs[i];

						if (isArraySource) { // array sources have already been convert to Event Objects
							abstractEvent = eventInput;
						}
						else {
							abstractEvent = buildEventFromInput(eventInput, source);
						}

						if (abstractEvent) { // not false (an invalid event)
							cache.push.apply( // append
								cache,
								expandEvent(abstractEvent) // add individual expanded events to the cache
							);
						}
					}
				}

				decrementPendingSourceCnt();
			}
		});
	}


	function rejectEventSource(source) {
		var wasPending = source._status === 'pending';

		source._status = 'rejected';

		if (wasPending) {
			decrementPendingSourceCnt();
		}
	}


	function decrementPendingSourceCnt() {
		pendingSourceCnt--;
		if (!pendingSourceCnt) {
			reportEventChange(cache); // updates prunedCache
			t.trigger('eventsReceived', prunedCache);
		}
	}


	function _fetchEventSource(source, callback) {
		var i;
		var fetchers = FC.sourceFetchers;
		var res;

		for (i=0; i<fetchers.length; i++) {
			res = fetchers[i].call(
				t, // this, the Calendar object
				source,
				rangeStart.clone(),
				rangeEnd.clone(),
				t.opt('timezone'),
				callback
			);

			if (res === true) {
				// the fetcher is in charge. made its own async request
				return;
			}
			else if (typeof res == 'object') {
				// the fetcher returned a new source. process it
				_fetchEventSource(res, callback);
				return;
			}
		}

		var events = source.events;
		if (events) {
			if ($.isFunction(events)) {
				t.pushLoading();
				events.call(
					t, // this, the Calendar object
					rangeStart.clone(),
					rangeEnd.clone(),
					t.opt('timezone'),
					function(events) {
						callback(events);
						t.popLoading();
					}
				);
			}
			else if ($.isArray(events)) {
				callback(events);
			}
			else {
				callback();
			}
		}else{
			var url = source.url;
			if (url) {
				var success = source.success;
				var error = source.error;
				var complete = source.complete;

				// retrieve any outbound GET/POST $.ajax data from the options
				var customData;
				if ($.isFunction(source.data)) {
					// supplied as a function that returns a key/value object
					customData = source.data();
				}
				else {
					// supplied as a straight key/value object
					customData = source.data;
				}

				// use a copy of the custom data so we can modify the parameters
				// and not affect the passed-in object.
				var data = $.extend({}, customData || {});

				var startParam = firstDefined(source.startParam, t.opt('startParam'));
				var endParam = firstDefined(source.endParam, t.opt('endParam'));
				var timezoneParam = firstDefined(source.timezoneParam, t.opt('timezoneParam'));

				if (startParam) {
					data[startParam] = rangeStart.format();
				}
				if (endParam) {
					data[endParam] = rangeEnd.format();
				}
				if (t.opt('timezone') && t.opt('timezone') != 'local') {
					data[timezoneParam] = t.opt('timezone');
				}

				t.pushLoading();
				$.ajax($.extend({}, ajaxDefaults, source, {
					data: data,
					success: function(events) {
						events = events || [];
						var res = applyAll(success, this, arguments);
						if ($.isArray(res)) {
							events = res;
						}
						callback(events);
					},
					error: function() {
						applyAll(error, this, arguments);
						callback();
					},
					complete: function() {
						applyAll(complete, this, arguments);
						t.popLoading();
					}
				}));
			}else{
				callback();
			}
		}
	}



	/* Sources
	-----------------------------------------------------------------------------*/


	function addEventSource(sourceInput) {
		var source = buildEventSource(sourceInput);
		if (source) {
			sources.push(source);
			fetchEventSources([ source ], 'add'); // will eventually call reportEventChange
		}
	}


	function buildEventSource(sourceInput) { // will return undefined if invalid source
		var normalizers = FC.sourceNormalizers;
		var source;
		var i;

		if ($.isFunction(sourceInput) || $.isArray(sourceInput)) {
			source = { events: sourceInput };
		}
		else if (typeof sourceInput === 'string') {
			source = { url: sourceInput };
		}
		else if (typeof sourceInput === 'object') {
			source = $.extend({}, sourceInput); // shallow copy
		}

		if (source) {

			// TODO: repeat code, same code for event classNames
			if (source.className) {
				if (typeof source.className === 'string') {
					source.className = source.className.split(/\s+/);
				}
				// otherwise, assumed to be an array
			}
			else {
				source.className = [];
			}

			// for array sources, we convert to standard Event Objects up front
			if ($.isArray(source.events)) {
				source.origArray = source.events; // for removeEventSource
				source.events = $.map(source.events, function(eventInput) {
					return buildEventFromInput(eventInput, source);
				});
			}

			for (i=0; i<normalizers.length; i++) {
				normalizers[i].call(t, source);
			}

			return source;
		}
	}


	function removeEventSource(matchInput) {
		removeSpecificEventSources(
			getEventSourcesByMatch(matchInput)
		);
	}


	// if called with no arguments, removes all.
	function removeEventSources(matchInputs) {
		if (matchInputs == null) {
			removeSpecificEventSources(sources, true); // isAll=true
		}
		else {
			removeSpecificEventSources(
				getEventSourcesByMatchArray(matchInputs)
			);
		}
	}


	function removeSpecificEventSources(targetSources, isAll) {
		var i;

		// cancel pending requests
		for (i = 0; i < targetSources.length; i++) {
			rejectEventSource(targetSources[i]);
		}

		if (isAll) { // an optimization
			sources = [];
			cache = [];
		}
		else {
			// remove from persisted source list
			sources = $.grep(sources, function(source) {
				for (i = 0; i < targetSources.length; i++) {
					if (source === targetSources[i]) {
						return false; // exclude
					}
				}
				return true; // include
			});

			cache = excludeEventsBySources(cache, targetSources);
		}

		reportEventChange();
	}


	function getEventSources() {
		return sources.slice(1); // returns a shallow copy of sources with stickySource removed
	}


	function getEventSourceById(id) {
		return $.grep(sources, function(source) {
			return source.id && source.id === id;
		})[0];
	}


	// like getEventSourcesByMatch, but accepts multple match criteria (like multiple IDs)
	function getEventSourcesByMatchArray(matchInputs) {

		// coerce into an array
		if (!matchInputs) {
			matchInputs = [];
		}
		else if (!$.isArray(matchInputs)) {
			matchInputs = [ matchInputs ];
		}

		var matchingSources = [];
		var i;

		// resolve raw inputs to real event source objects
		for (i = 0; i < matchInputs.length; i++) {
			matchingSources.push.apply( // append
				matchingSources,
				getEventSourcesByMatch(matchInputs[i])
			);
		}

		return matchingSources;
	}


	// matchInput can either by a real event source object, an ID, or the function/URL for the source.
	// returns an array of matching source objects.
	function getEventSourcesByMatch(matchInput) {
		var i, source;

		// given an proper event source object
		for (i = 0; i < sources.length; i++) {
			source = sources[i];
			if (source === matchInput) {
				return [ source ];
			}
		}

		// an ID match
		source = getEventSourceById(matchInput);
		if (source) {
			return [ source ];
		}

		return $.grep(sources, function(source) {
			return isSourcesEquivalent(matchInput, source);
		});
	}


	function isSourcesEquivalent(source1, source2) {
		return source1 && source2 && getSourcePrimitive(source1) == getSourcePrimitive(source2);
	}


	function getSourcePrimitive(source) {
		return (
			(typeof source === 'object') ? // a normalized event source?
				(source.origArray || source.googleCalendarId || source.url || source.events) : // get the primitive
				null
		) ||
		source; // the given argument *is* the primitive
	}


	// util
	// returns a filtered array without events that are part of any of the given sources
	function excludeEventsBySources(specificEvents, specificSources) {
		return $.grep(specificEvents, function(event) {
			for (var i = 0; i < specificSources.length; i++) {
				if (event.source === specificSources[i]) {
					return false; // exclude
				}
			}
			return true; // keep
		});
	}



	/* Manipulation
	-----------------------------------------------------------------------------*/


	// Only ever called from the externally-facing API
	function updateEvent(event) {
		updateEvents([ event ]);
	}


	// Only ever called from the externally-facing API
	function updateEvents(events) {
		var i, event;

		for (i = 0; i < events.length; i++) {
			event = events[i];

			// massage start/end values, even if date string values
			event.start = t.moment(event.start);
			if (event.end) {
				event.end = t.moment(event.end);
			}
			else {
				event.end = null;
			}

			mutateEvent(event, getMiscEventProps(event)); // will handle start/end/allDay normalization
		}

		reportEventChange(); // reports event modifications (so we can redraw)
	}


	// Returns a hash of misc event properties that should be copied over to related events.
	function getMiscEventProps(event) {
		var props = {};

		$.each(event, function(name, val) {
			if (isMiscEventPropName(name)) {
				if (val !== undefined && isAtomic(val)) { // a defined non-object
					props[name] = val;
				}
			}
		});

		return props;
	}

	// non-date-related, non-id-related, non-secret
	function isMiscEventPropName(name) {
		return !/^_|^(id|allDay|start|end)$/.test(name);
	}


	// returns the expanded events that were created
	function renderEvent(eventInput, stick) {
		return renderEvents([ eventInput ], stick);
	}


	// returns the expanded events that were created
	function renderEvents(eventInputs, stick) {
		var renderedEvents = [];
		var renderableEvents;
		var abstractEvent;
		var i, j, event;

		for (i = 0; i < eventInputs.length; i++) {
			abstractEvent = buildEventFromInput(eventInputs[i]);

			if (abstractEvent) { // not false (a valid input)
				renderableEvents = expandEvent(abstractEvent);

				for (j = 0; j < renderableEvents.length; j++) {
					event = renderableEvents[j];

					if (!event.source) {
						if (stick) {
							stickySource.events.push(event);
							event.source = stickySource;
						}
						cache.push(event);
					}
				}

				renderedEvents = renderedEvents.concat(renderableEvents);
			}
		}

		if (renderedEvents.length) { // any new events rendered?
			reportEventChange();
		}

		return renderedEvents;
	}


	function removeEvents(filter) {
		var eventID;
		var i;

		if (filter == null) { // null or undefined. remove all events
			filter = function() { return true; }; // will always match
		}
		else if (!$.isFunction(filter)) { // an event ID
			eventID = filter + '';
			filter = function(event) {
				return event._id == eventID;
			};
		}

		// Purge event(s) from our local cache
		cache = $.grep(cache, filter, true); // inverse=true

		// Remove events from array sources.
		// This works because they have been converted to official Event Objects up front.
		// (and as a result, event._id has been calculated).
		for (i=0; i<sources.length; i++) {
			if ($.isArray(sources[i].events)) {
				sources[i].events = $.grep(sources[i].events, filter, true);
			}
		}

		reportEventChange();
	}


	function clientEvents(filter) {
		if ($.isFunction(filter)) {
			return $.grep(cache, filter);
		}
		else if (filter != null) { // not null, not undefined. an event ID
			filter += '';
			return $.grep(cache, function(e) {
				return e._id == filter;
			});
		}
		return cache; // else, return all
	}


	// Makes sure all array event sources have their internal event objects
	// converted over to the Calendar's current timezone.
	t.rezoneArrayEventSources = function() {
		var i;
		var events;
		var j;

		for (i = 0; i < sources.length; i++) {
			events = sources[i].events;
			if ($.isArray(events)) {

				for (j = 0; j < events.length; j++) {
					rezoneEventDates(events[j]);
				}
			}
		}
	};

	function rezoneEventDates(event) {
		event.start = t.moment(event.start);
		if (event.end) {
			event.end = t.moment(event.end);
		}
		backupEventDates(event);
	}


	/* Event Normalization
	-----------------------------------------------------------------------------*/


	// Given a raw object with key/value properties, returns an "abstract" Event object.
	// An "abstract" event is an event that, if recurring, will not have been expanded yet.
	// Will return `false` when input is invalid.
	// `source` is optional
	function buildEventFromInput(input, source) {
		var calendarEventDataTransform = t.opt('eventDataTransform');
		var out = {};
		var start, end;
		var allDay;

		if (calendarEventDataTransform) {
			input = calendarEventDataTransform(input);
		}
		if (source && source.eventDataTransform) {
			input = source.eventDataTransform(input);
		}

		// Copy all properties over to the resulting object.
		// The special-case properties will be copied over afterwards.
		$.extend(out, input);

		if (source) {
			out.source = source;
		}

		out._id = input._id || (input.id === undefined ? '_fc' + eventGUID++ : input.id + '');

		if (input.className) {
			if (typeof input.className == 'string') {
				out.className = input.className.split(/\s+/);
			}
			else { // assumed to be an array
				out.className = input.className;
			}
		}
		else {
			out.className = [];
		}

		start = input.start || input.date; // "date" is an alias for "start"
		end = input.end;

		// parse as a time (Duration) if applicable
		if (isTimeString(start)) {
			start = moment.duration(start);
		}
		if (isTimeString(end)) {
			end = moment.duration(end);
		}

		if (input.dow || moment.isDuration(start) || moment.isDuration(end)) {

			// the event is "abstract" (recurring) so don't calculate exact start/end dates just yet
			out.start = start ? moment.duration(start) : null; // will be a Duration or null
			out.end = end ? moment.duration(end) : null; // will be a Duration or null
			out._recurring = true; // our internal marker
		}
		else {

			if (start) {
				start = t.moment(start);
				if (!start.isValid()) {
					return false;
				}
			}

			if (end) {
				end = t.moment(end);
				if (!end.isValid()) {
					end = null; // let defaults take over
				}
			}

			allDay = input.allDay;
			if (allDay === undefined) { // still undefined? fallback to default
				allDay = firstDefined(
					source ? source.allDayDefault : undefined,
					t.opt('allDayDefault')
				);
				// still undefined? normalizeEventDates will calculate it
			}

			assignDatesToEvent(start, end, allDay, out);
		}

		t.normalizeEvent(out); // hook for external use. a prototype method

		return out;
	}
	t.buildEventFromInput = buildEventFromInput;


	// Normalizes and assigns the given dates to the given partially-formed event object.
	// NOTE: mutates the given start/end moments. does not make a copy.
	function assignDatesToEvent(start, end, allDay, event) {
		event.start = start;
		event.end = end;
		event.allDay = allDay;
		normalizeEventDates(event);
		backupEventDates(event);
	}


	// Ensures proper values for allDay/start/end. Accepts an Event object, or a plain object with event-ish properties.
	// NOTE: Will modify the given object.
	function normalizeEventDates(eventProps) {

		normalizeEventTimes(eventProps);

		if (eventProps.end && !eventProps.end.isAfter(eventProps.start)) {
			eventProps.end = null;
		}

		if (!eventProps.end) {
			if (t.opt('forceEventDuration')) {
				eventProps.end = t.getDefaultEventEnd(eventProps.allDay, eventProps.start);
			}
			else {
				eventProps.end = null;
			}
		}
	}


	// Ensures the allDay property exists and the timeliness of the start/end dates are consistent
	function normalizeEventTimes(eventProps) {
		if (eventProps.allDay == null) {
			eventProps.allDay = !(eventProps.start.hasTime() || (eventProps.end && eventProps.end.hasTime()));
		}

		if (eventProps.allDay) {
			eventProps.start.stripTime();
			if (eventProps.end) {
				// TODO: consider nextDayThreshold here? If so, will require a lot of testing and adjustment
				eventProps.end.stripTime();
			}
		}
		else {
			if (!eventProps.start.hasTime()) {
				eventProps.start = t.applyTimezone(eventProps.start.time(0)); // will assign a 00:00 time
			}
			if (eventProps.end && !eventProps.end.hasTime()) {
				eventProps.end = t.applyTimezone(eventProps.end.time(0)); // will assign a 00:00 time
			}
		}
	}


	// If the given event is a recurring event, break it down into an array of individual instances.
	// If not a recurring event, return an array with the single original event.
	// If given a falsy input (probably because of a failed buildEventFromInput call), returns an empty array.
	// HACK: can override the recurring window by providing custom rangeStart/rangeEnd (for businessHours).
	function expandEvent(abstractEvent, _rangeStart, _rangeEnd) {
		var events = [];
		var dowHash;
		var dow;
		var i;
		var date;
		var startTime, endTime;
		var start, end;
		var event;

		_rangeStart = _rangeStart || rangeStart;
		_rangeEnd = _rangeEnd || rangeEnd;

		if (abstractEvent) {
			if (abstractEvent._recurring) {

				// make a boolean hash as to whether the event occurs on each day-of-week
				if ((dow = abstractEvent.dow)) {
					dowHash = {};
					for (i = 0; i < dow.length; i++) {
						dowHash[dow[i]] = true;
					}
				}

				// iterate through every day in the current range
				date = _rangeStart.clone().stripTime(); // holds the date of the current day
				while (date.isBefore(_rangeEnd)) {

					if (!dowHash || dowHash[date.day()]) { // if everyday, or this particular day-of-week

						startTime = abstractEvent.start; // the stored start and end properties are times (Durations)
						endTime = abstractEvent.end; // "
						start = date.clone();
						end = null;

						if (startTime) {
							start = start.time(startTime);
						}
						if (endTime) {
							end = date.clone().time(endTime);
						}

						event = $.extend({}, abstractEvent); // make a copy of the original
						assignDatesToEvent(
							start, end,
							!startTime && !endTime, // allDay?
							event
						);
						events.push(event);
					}

					date.add(1, 'days');
				}
			}
			else {
				events.push(abstractEvent); // return the original event. will be a one-item array
			}
		}

		return events;
	}
	t.expandEvent = expandEvent;



	/* Event Modification Math
	-----------------------------------------------------------------------------------------*/


	// Modifies an event and all related events by applying the given properties.
	// Special date-diffing logic is used for manipulation of dates.
	// If `props` does not contain start/end dates, the updated values are assumed to be the event's current start/end.
	// All date comparisons are done against the event's pristine _start and _end dates.
	// Returns an object with delta information and a function to undo all operations.
	// For making computations in a granularity greater than day/time, specify largeUnit.
	// NOTE: The given `newProps` might be mutated for normalization purposes.
	function mutateEvent(event, newProps, largeUnit) {
		var miscProps = {};
		var oldProps;
		var clearEnd;
		var startDelta;
		var endDelta;
		var durationDelta;
		var undoFunc;

		// diffs the dates in the appropriate way, returning a duration
		function diffDates(date1, date0) { // date1 - date0
			if (largeUnit) {
				return diffByUnit(date1, date0, largeUnit);
			}
			else if (newProps.allDay) {
				return diffDay(date1, date0);
			}
			else {
				return diffDayTime(date1, date0);
			}
		}

		newProps = newProps || {};

		// normalize new date-related properties
		if (!newProps.start) {
			newProps.start = event.start.clone();
		}
		if (newProps.end === undefined) {
			newProps.end = event.end ? event.end.clone() : null;
		}
		if (newProps.allDay == null) { // is null or undefined?
			newProps.allDay = event.allDay;
		}
		normalizeEventDates(newProps);

		// create normalized versions of the original props to compare against
		// need a real end value, for diffing
		oldProps = {
			start: event._start.clone(),
			end: event._end ? event._end.clone() : t.getDefaultEventEnd(event._allDay, event._start),
			allDay: newProps.allDay // normalize the dates in the same regard as the new properties
		};
		normalizeEventDates(oldProps);

		// need to clear the end date if explicitly changed to null
		clearEnd = event._end !== null && newProps.end === null;

		// compute the delta for moving the start date
		startDelta = diffDates(newProps.start, oldProps.start);

		// compute the delta for moving the end date
		if (newProps.end) {
			endDelta = diffDates(newProps.end, oldProps.end);
			durationDelta = endDelta.subtract(startDelta);
		}
		else {
			durationDelta = null;
		}

		// gather all non-date-related properties
		$.each(newProps, function(name, val) {
			if (isMiscEventPropName(name)) {
				if (val !== undefined) {
					miscProps[name] = val;
				}
			}
		});

		// apply the operations to the event and all related events
		undoFunc = mutateEvents(
			clientEvents(event._id), // get events with this ID
			clearEnd,
			newProps.allDay,
			startDelta,
			durationDelta,
			miscProps
		);

		return {
			dateDelta: startDelta,
			durationDelta: durationDelta,
			undo: undoFunc
		};
	}


	// Modifies an array of events in the following ways (operations are in order):
	// - clear the event's `end`
	// - convert the event to allDay
	// - add `dateDelta` to the start and end
	// - add `durationDelta` to the event's duration
	// - assign `miscProps` to the event
	//
	// Returns a function that can be called to undo all the operations.
	//
	// TODO: don't use so many closures. possible memory issues when lots of events with same ID.
	//
	function mutateEvents(events, clearEnd, allDay, dateDelta, durationDelta, miscProps) {
		var isAmbigTimezone = t.getIsAmbigTimezone();
		var undoFunctions = [];

		// normalize zero-length deltas to be null
		if (dateDelta && !dateDelta.valueOf()) { dateDelta = null; }
		if (durationDelta && !durationDelta.valueOf()) { durationDelta = null; }

		$.each(events, function(i, event) {
			var oldProps;
			var newProps;

			// build an object holding all the old values, both date-related and misc.
			// for the undo function.
			oldProps = {
				start: event.start.clone(),
				end: event.end ? event.end.clone() : null,
				allDay: event.allDay
			};
			$.each(miscProps, function(name) {
				oldProps[name] = event[name];
			});

			// new date-related properties. work off the original date snapshot.
			// ok to use references because they will be thrown away when backupEventDates is called.
			newProps = {
				start: event._start,
				end: event._end,
				allDay: allDay // normalize the dates in the same regard as the new properties
			};
			normalizeEventDates(newProps); // massages start/end/allDay

			// strip or ensure the end date
			if (clearEnd) {
				newProps.end = null;
			}
			else if (durationDelta && !newProps.end) { // the duration translation requires an end date
				newProps.end = t.getDefaultEventEnd(newProps.allDay, newProps.start);
			}

			if (dateDelta) {
				newProps.start.add(dateDelta);
				if (newProps.end) {
					newProps.end.add(dateDelta);
				}
			}

			if (durationDelta) {
				newProps.end.add(durationDelta); // end already ensured above
			}

			// if the dates have changed, and we know it is impossible to recompute the
			// timezone offsets, strip the zone.
			if (
				isAmbigTimezone &&
				!newProps.allDay &&
				(dateDelta || durationDelta)
			) {
				newProps.start.stripZone();
				if (newProps.end) {
					newProps.end.stripZone();
				}
			}

			$.extend(event, miscProps, newProps); // copy over misc props, then date-related props
			backupEventDates(event); // regenerate internal _start/_end/_allDay

			undoFunctions.push(function() {
				$.extend(event, oldProps);
				backupEventDates(event); // regenerate internal _start/_end/_allDay
			});
		});

		return function() {
			for (var i = 0; i < undoFunctions.length; i++) {
				undoFunctions[i]();
			}
		};
	}

}


// returns an undo function
Calendar.prototype.mutateSeg = function(seg, newProps) {
	return this.mutateEvent(seg.event, newProps);
};


// hook for external libs to manipulate event properties upon creation.
// should manipulate the event in-place.
Calendar.prototype.normalizeEvent = function(event) {
};


// Does the given span (start, end, and other location information)
// fully contain the other?
Calendar.prototype.spanContainsSpan = function(outerSpan, innerSpan) {
	var eventStart = outerSpan.start.clone().stripZone();
	var eventEnd = this.getEventEnd(outerSpan).stripZone();

	return innerSpan.start >= eventStart && innerSpan.end <= eventEnd;
};


// Returns a list of events that the given event should be compared against when being considered for a move to
// the specified span. Attached to the Calendar's prototype because EventManager is a mixin for a Calendar.
Calendar.prototype.getPeerEvents = function(span, event) {
	var cache = this.getEventCache();
	var peerEvents = [];
	var i, otherEvent;

	for (i = 0; i < cache.length; i++) {
		otherEvent = cache[i];
		if (
			!event ||
			event._id !== otherEvent._id // don't compare the event to itself or other related [repeating] events
		) {
			peerEvents.push(otherEvent);
		}
	}

	return peerEvents;
};


// updates the "backup" properties, which are preserved in order to compute diffs later on.
function backupEventDates(event) {
	event._allDay = event.allDay;
	event._start = event.start.clone();
	event._end = event.end ? event.end.clone() : null;
}


/* Overlapping / Constraining
-----------------------------------------------------------------------------------------*/


// Determines if the given event can be relocated to the given span (unzoned start/end with other misc data)
Calendar.prototype.isEventSpanAllowed = function(span, event) {
	var source = event.source || {};
	var eventAllowFunc = this.opt('eventAllow');

	var constraint = firstDefined(
		event.constraint,
		source.constraint,
		this.opt('eventConstraint')
	);

	var overlap = firstDefined(
		event.overlap,
		source.overlap,
		this.opt('eventOverlap')
	);

	return this.isSpanAllowed(span, constraint, overlap, event) &&
		(!eventAllowFunc || eventAllowFunc(span, event) !== false);
};


// Determines if an external event can be relocated to the given span (unzoned start/end with other misc data)
Calendar.prototype.isExternalSpanAllowed = function(eventSpan, eventLocation, eventProps) {
	var eventInput;
	var event;

	// note: very similar logic is in View's reportExternalDrop
	if (eventProps) {
		eventInput = $.extend({}, eventProps, eventLocation);
		event = this.expandEvent(
			this.buildEventFromInput(eventInput)
		)[0];
	}

	if (event) {
		return this.isEventSpanAllowed(eventSpan, event);
	}
	else { // treat it as a selection

		return this.isSelectionSpanAllowed(eventSpan);
	}
};


// Determines the given span (unzoned start/end with other misc data) can be selected.
Calendar.prototype.isSelectionSpanAllowed = function(span) {
	var selectAllowFunc = this.opt('selectAllow');

	return this.isSpanAllowed(span, this.opt('selectConstraint'), this.opt('selectOverlap')) &&
		(!selectAllowFunc || selectAllowFunc(span) !== false);
};


// Returns true if the given span (caused by an event drop/resize or a selection) is allowed to exist
// according to the constraint/overlap settings.
// `event` is not required if checking a selection.
Calendar.prototype.isSpanAllowed = function(span, constraint, overlap, event) {
	var constraintEvents;
	var anyContainment;
	var peerEvents;
	var i, peerEvent;
	var peerOverlap;

	// the range must be fully contained by at least one of produced constraint events
	if (constraint != null) {

		// not treated as an event! intermediate data structure
		// TODO: use ranges in the future
		constraintEvents = this.constraintToEvents(constraint);
		if (constraintEvents) { // not invalid

			anyContainment = false;
			for (i = 0; i < constraintEvents.length; i++) {
				if (this.spanContainsSpan(constraintEvents[i], span)) {
					anyContainment = true;
					break;
				}
			}

			if (!anyContainment) {
				return false;
			}
		}
	}

	peerEvents = this.getPeerEvents(span, event);

	for (i = 0; i < peerEvents.length; i++)  {
		peerEvent = peerEvents[i];

		// there needs to be an actual intersection before disallowing anything
		if (this.eventIntersectsRange(peerEvent, span)) {

			// evaluate overlap for the given range and short-circuit if necessary
			if (overlap === false) {
				return false;
			}
			// if the event's overlap is a test function, pass the peer event in question as the first param
			else if (typeof overlap === 'function' && !overlap(peerEvent, event)) {
				return false;
			}

			// if we are computing if the given range is allowable for an event, consider the other event's
			// EventObject-specific or Source-specific `overlap` property
			if (event) {
				peerOverlap = firstDefined(
					peerEvent.overlap,
					(peerEvent.source || {}).overlap
					// we already considered the global `eventOverlap`
				);
				if (peerOverlap === false) {
					return false;
				}
				// if the peer event's overlap is a test function, pass the subject event as the first param
				if (typeof peerOverlap === 'function' && !peerOverlap(event, peerEvent)) {
					return false;
				}
			}
		}
	}

	return true;
};


// Given an event input from the API, produces an array of event objects. Possible event inputs:
// 'businessHours'
// An event ID (number or string)
// An object with specific start/end dates or a recurring event (like what businessHours accepts)
Calendar.prototype.constraintToEvents = function(constraintInput) {

	if (constraintInput === 'businessHours') {
		return this.getCurrentBusinessHourEvents();
	}

	if (typeof constraintInput === 'object') {
		if (constraintInput.start != null) { // needs to be event-like input
			return this.expandEvent(this.buildEventFromInput(constraintInput));
		}
		else {
			return null; // invalid
		}
	}

	return this.clientEvents(constraintInput); // probably an ID
};


// Does the event's date range intersect with the given range?
// start/end already assumed to have stripped zones :(
Calendar.prototype.eventIntersectsRange = function(event, range) {
	var eventStart = event.start.clone().stripZone();
	var eventEnd = this.getEventEnd(event).stripZone();

	return range.start < eventEnd && range.end > eventStart;
};


/* Business Hours
-----------------------------------------------------------------------------------------*/

var BUSINESS_HOUR_EVENT_DEFAULTS = {
	id: '_fcBusinessHours', // will relate events from different calls to expandEvent
	start: '09:00',
	end: '17:00',
	dow: [ 1, 2, 3, 4, 5 ], // monday - friday
	rendering: 'inverse-background'
	// classNames are defined in businessHoursSegClasses
};

// Return events objects for business hours within the current view.
// Abuse of our event system :(
Calendar.prototype.getCurrentBusinessHourEvents = function(wholeDay) {
	return this.computeBusinessHourEvents(wholeDay, this.opt('businessHours'));
};

// Given a raw input value from options, return events objects for business hours within the current view.
Calendar.prototype.computeBusinessHourEvents = function(wholeDay, input) {
	if (input === true) {
		return this.expandBusinessHourEvents(wholeDay, [ {} ]);
	}
	else if ($.isPlainObject(input)) {
		return this.expandBusinessHourEvents(wholeDay, [ input ]);
	}
	else if ($.isArray(input)) {
		return this.expandBusinessHourEvents(wholeDay, input, true);
	}
	else {
		return [];
	}
};

// inputs expected to be an array of objects.
// if ignoreNoDow is true, will ignore entries that don't specify a day-of-week (dow) key.
Calendar.prototype.expandBusinessHourEvents = function(wholeDay, inputs, ignoreNoDow) {
	var view = this.getView();
	var events = [];
	var i, input;

	for (i = 0; i < inputs.length; i++) {
		input = inputs[i];

		if (ignoreNoDow && !input.dow) {
			continue;
		}

		// give defaults. will make a copy
		input = $.extend({}, BUSINESS_HOUR_EVENT_DEFAULTS, input);

		// if a whole-day series is requested, clear the start/end times
		if (wholeDay) {
			input.start = null;
			input.end = null;
		}

		events.push.apply(events, // append
			this.expandEvent(
				this.buildEventFromInput(input),
				view.activeRange.start,
				view.activeRange.end
			)
		);
	}

	return events;
};

;;

/* An abstract class for the "basic" views, as well as month view. Renders one or more rows of day cells.
----------------------------------------------------------------------------------------------------------------------*/
// It is a manager for a DayGrid subcomponent, which does most of the heavy lifting.
// It is responsible for managing width/height.

var BasicView = FC.BasicView = View.extend({

	scroller: null,

	dayGridClass: DayGrid, // class the dayGrid will be instantiated from (overridable by subclasses)
	dayGrid: null, // the main subcomponent that does most of the heavy lifting

	dayNumbersVisible: false, // display day numbers on each day cell?
	colWeekNumbersVisible: false, // display week numbers along the side?
	cellWeekNumbersVisible: false, // display week numbers in day cell?

	weekNumberWidth: null, // width of all the week-number cells running down the side

	headContainerEl: null, // div that hold's the dayGrid's rendered date header
	headRowEl: null, // the fake row element of the day-of-week header


	initialize: function() {
		this.dayGrid = this.instantiateDayGrid();

		this.scroller = new Scroller({
			overflowX: 'hidden',
			overflowY: 'auto'
		});
	},


	// Generates the DayGrid object this view needs. Draws from this.dayGridClass
	instantiateDayGrid: function() {
		// generate a subclass on the fly with BasicView-specific behavior
		// TODO: cache this subclass
		var subclass = this.dayGridClass.extend(basicDayGridMethods);

		return new subclass(this);
	},


	// Computes the date range that will be rendered.
	buildRenderRange: function(currentRange, currentRangeUnit) {
		var renderRange = View.prototype.buildRenderRange.apply(this, arguments);

		// year and month views should be aligned with weeks. this is already done for week
		if (/^(year|month)$/.test(currentRangeUnit)) {
			renderRange.start.startOf('week');

			// make end-of-week if not already
			if (renderRange.end.weekday()) {
				renderRange.end.add(1, 'week').startOf('week'); // exclusively move backwards
			}
		}

		return this.trimHiddenDays(renderRange);
	},


	// Renders the view into `this.el`, which should already be assigned
	renderDates: function() {

		this.dayGrid.breakOnWeeks = /year|month|week/.test(this.currentRangeUnit); // do before Grid::setRange
		this.dayGrid.setRange(this.renderRange);

		this.dayNumbersVisible = this.dayGrid.rowCnt > 1; // TODO: make grid responsible
		if (this.opt('weekNumbers')) {
			if (this.opt('weekNumbersWithinDays')) {
				this.cellWeekNumbersVisible = true;
				this.colWeekNumbersVisible = false;
			}
			else {
				this.cellWeekNumbersVisible = false;
				this.colWeekNumbersVisible = true;
			};
		}
		this.dayGrid.numbersVisible = this.dayNumbersVisible ||
			this.cellWeekNumbersVisible || this.colWeekNumbersVisible;

		this.el.addClass('fc-basic-view').html(this.renderSkeletonHtml());
		this.renderHead();

		this.scroller.render();
		var dayGridContainerEl = this.scroller.el.addClass('fc-day-grid-container');
		var dayGridEl = $('<div class="fc-day-grid" />').appendTo(dayGridContainerEl);
		this.el.find('.fc-body > tr > td').append(dayGridContainerEl);

		this.dayGrid.setElement(dayGridEl);
		this.dayGrid.renderDates(this.hasRigidRows());
	},


	// render the day-of-week headers
	renderHead: function() {
		this.headContainerEl =
			this.el.find('.fc-head-container')
				.html(this.dayGrid.renderHeadHtml());
		this.headRowEl = this.headContainerEl.find('.fc-row');
	},


	// Unrenders the content of the view. Since we haven't separated skeleton rendering from date rendering,
	// always completely kill the dayGrid's rendering.
	unrenderDates: function() {
		this.dayGrid.unrenderDates();
		this.dayGrid.removeElement();
		this.scroller.destroy();
	},


	renderBusinessHours: function() {
		this.dayGrid.renderBusinessHours();
	},


	unrenderBusinessHours: function() {
		this.dayGrid.unrenderBusinessHours();
	},


	// Builds the HTML skeleton for the view.
	// The day-grid component will render inside of a container defined by this HTML.
	renderSkeletonHtml: function() {
		return '' +
			'<table>' +
				'<thead class="fc-head">' +
					'<tr>' +
						'<td class="fc-head-container ' + this.widgetHeaderClass + '"></td>' +
					'</tr>' +
				'</thead>' +
				'<tbody class="fc-body">' +
					'<tr>' +
						'<td class="' + this.widgetContentClass + '"></td>' +
					'</tr>' +
				'</tbody>' +
			'</table>';
	},


	// Generates an HTML attribute string for setting the width of the week number column, if it is known
	weekNumberStyleAttr: function() {
		if (this.weekNumberWidth !== null) {
			return 'style="width:' + this.weekNumberWidth + 'px"';
		}
		return '';
	},


	// Determines whether each row should have a constant height
	hasRigidRows: function() {
		var eventLimit = this.opt('eventLimit');
		return eventLimit && typeof eventLimit !== 'number';
	},


	/* Dimensions
	------------------------------------------------------------------------------------------------------------------*/


	// Refreshes the horizontal dimensions of the view
	updateWidth: function() {
		if (this.colWeekNumbersVisible) {
			// Make sure all week number cells running down the side have the same width.
			// Record the width for cells created later.
			this.weekNumberWidth = matchCellWidths(
				this.el.find('.fc-week-number')
			);
		}
	},


	// Adjusts the vertical dimensions of the view to the specified values
	setHeight: function(totalHeight, isAuto) {
		var eventLimit = this.opt('eventLimit');
		var scrollerHeight;
		var scrollbarWidths;

		// reset all heights to be natural
		this.scroller.clear();
		uncompensateScroll(this.headRowEl);

		this.dayGrid.removeSegPopover(); // kill the "more" popover if displayed

		// is the event limit a constant level number?
		if (eventLimit && typeof eventLimit === 'number') {
			this.dayGrid.limitRows(eventLimit); // limit the levels first so the height can redistribute after
		}

		// distribute the height to the rows
		// (totalHeight is a "recommended" value if isAuto)
		scrollerHeight = this.computeScrollerHeight(totalHeight);
		this.setGridHeight(scrollerHeight, isAuto);

		// is the event limit dynamically calculated?
		if (eventLimit && typeof eventLimit !== 'number') {
			this.dayGrid.limitRows(eventLimit); // limit the levels after the grid's row heights have been set
		}

		if (!isAuto) { // should we force dimensions of the scroll container?

			this.scroller.setHeight(scrollerHeight);
			scrollbarWidths = this.scroller.getScrollbarWidths();

			if (scrollbarWidths.left || scrollbarWidths.right) { // using scrollbars?

				compensateScroll(this.headRowEl, scrollbarWidths);

				// doing the scrollbar compensation might have created text overflow which created more height. redo
				scrollerHeight = this.computeScrollerHeight(totalHeight);
				this.scroller.setHeight(scrollerHeight);
			}

			// guarantees the same scrollbar widths
			this.scroller.lockOverflow(scrollbarWidths);
		}
	},


	// given a desired total height of the view, returns what the height of the scroller should be
	computeScrollerHeight: function(totalHeight) {
		return totalHeight -
			subtractInnerElHeight(this.el, this.scroller.el); // everything that's NOT the scroller
	},


	// Sets the height of just the DayGrid component in this view
	setGridHeight: function(height, isAuto) {
		if (isAuto) {
			undistributeHeight(this.dayGrid.rowEls); // let the rows be their natural height with no expanding
		}
		else {
			distributeHeight(this.dayGrid.rowEls, height, true); // true = compensate for height-hogging rows
		}
	},


	/* Scroll
	------------------------------------------------------------------------------------------------------------------*/


	computeInitialDateScroll: function() {
		return { top: 0 };
	},


	queryDateScroll: function() {
		return { top: this.scroller.getScrollTop() };
	},


	applyDateScroll: function(scroll) {
		if (scroll.top !== undefined) {
			this.scroller.setScrollTop(scroll.top);
		}
	},


	/* Hit Areas
	------------------------------------------------------------------------------------------------------------------*/
	// forward all hit-related method calls to dayGrid


	hitsNeeded: function() {
		this.dayGrid.hitsNeeded();
	},


	hitsNotNeeded: function() {
		this.dayGrid.hitsNotNeeded();
	},


	prepareHits: function() {
		this.dayGrid.prepareHits();
	},


	releaseHits: function() {
		this.dayGrid.releaseHits();
	},


	queryHit: function(left, top) {
		return this.dayGrid.queryHit(left, top);
	},


	getHitSpan: function(hit) {
		return this.dayGrid.getHitSpan(hit);
	},


	getHitEl: function(hit) {
		return this.dayGrid.getHitEl(hit);
	},


	/* Events
	------------------------------------------------------------------------------------------------------------------*/


	// Renders the given events onto the view and populates the segments array
	renderEvents: function(events) {
		this.dayGrid.renderEvents(events);

		this.updateHeight(); // must compensate for events that overflow the row
	},


	// Retrieves all segment objects that are rendered in the view
	getEventSegs: function() {
		return this.dayGrid.getEventSegs();
	},


	// Unrenders all event elements and clears internal segment data
	unrenderEvents: function() {
		this.dayGrid.unrenderEvents();

		// we DON'T need to call updateHeight() because
		// a renderEvents() call always happens after this, which will eventually call updateHeight()
	},


	/* Dragging (for both events and external elements)
	------------------------------------------------------------------------------------------------------------------*/


	// A returned value of `true` signals that a mock "helper" event has been rendered.
	renderDrag: function(dropLocation, seg) {
		return this.dayGrid.renderDrag(dropLocation, seg);
	},


	unrenderDrag: function() {
		this.dayGrid.unrenderDrag();
	},


	/* Selection
	------------------------------------------------------------------------------------------------------------------*/


	// Renders a visual indication of a selection
	renderSelection: function(span) {
		this.dayGrid.renderSelection(span);
	},


	// Unrenders a visual indications of a selection
	unrenderSelection: function() {
		this.dayGrid.unrenderSelection();
	}

});


// Methods that will customize the rendering behavior of the BasicView's dayGrid
var basicDayGridMethods = {


	// Generates the HTML that will go before the day-of week header cells
	renderHeadIntroHtml: function() {
		var view = this.view;

		if (view.colWeekNumbersVisible) {
			return '' +
				'<th class="fc-week-number ' + view.widgetHeaderClass + '" ' + view.weekNumberStyleAttr() + '>' +
					'<span>' + // needed for matchCellWidths
						htmlEscape(view.opt('weekNumberTitle')) +
					'</span>' +
				'</th>';
		}

		return '';
	},


	// Generates the HTML that will go before content-skeleton cells that display the day/week numbers
	renderNumberIntroHtml: function(row) {
		var view = this.view;
		var weekStart = this.getCellDate(row, 0);

		if (view.colWeekNumbersVisible) {
			return '' +
				'<td class="fc-week-number" ' + view.weekNumberStyleAttr() + '>' +
					view.buildGotoAnchorHtml( // aside from link, important for matchCellWidths
						{ date: weekStart, type: 'week', forceOff: this.colCnt === 1 },
						weekStart.format('w') // inner HTML
					) +
				'</td>';
		}

		return '';
	},


	// Generates the HTML that goes before the day bg cells for each day-row
	renderBgIntroHtml: function() {
		var view = this.view;

		if (view.colWeekNumbersVisible) {
			return '<td class="fc-week-number ' + view.widgetContentClass + '" ' +
				view.weekNumberStyleAttr() + '></td>';
		}

		return '';
	},


	// Generates the HTML that goes before every other type of row generated by DayGrid.
	// Affects helper-skeleton and highlight-skeleton rows.
	renderIntroHtml: function() {
		var view = this.view;

		if (view.colWeekNumbersVisible) {
			return '<td class="fc-week-number" ' + view.weekNumberStyleAttr() + '></td>';
		}

		return '';
	}

};

;;

/* A month view with day cells running in rows (one-per-week) and columns
----------------------------------------------------------------------------------------------------------------------*/

var MonthView = FC.MonthView = BasicView.extend({


	// Computes the date range that will be rendered.
	buildRenderRange: function() {
		var renderRange = BasicView.prototype.buildRenderRange.apply(this, arguments);
		var rowCnt;

		// ensure 6 weeks
		if (this.isFixedWeeks()) {
			rowCnt = Math.ceil( // could be partial weeks due to hiddenDays
				renderRange.end.diff(renderRange.start, 'weeks', true) // dontRound=true
			);
			renderRange.end.add(6 - rowCnt, 'weeks');
		}

		return renderRange;
	},


	// Overrides the default BasicView behavior to have special multi-week auto-height logic
	setGridHeight: function(height, isAuto) {

		// if auto, make the height of each row the height that it would be if there were 6 weeks
		if (isAuto) {
			height *= this.rowCnt / 6;
		}

		distributeHeight(this.dayGrid.rowEls, height, !isAuto); // if auto, don't compensate for height-hogging rows
	},


	isFixedWeeks: function() {
		return this.opt('fixedWeekCount');
	}

});

;;

fcViews.basic = {
	'class': BasicView
};

fcViews.basicDay = {
	type: 'basic',
	duration: { days: 1 }
};

fcViews.basicWeek = {
	type: 'basic',
	duration: { weeks: 1 }
};

fcViews.month = {
	'class': MonthView,
	duration: { months: 1 }, // important for prev/next
	defaults: {
		fixedWeekCount: true
	}
};
;;

/* An abstract class for all agenda-related views. Displays one more columns with time slots running vertically.
----------------------------------------------------------------------------------------------------------------------*/
// Is a manager for the TimeGrid subcomponent and possibly the DayGrid subcomponent (if allDaySlot is on).
// Responsible for managing width/height.

var AgendaView = FC.AgendaView = View.extend({

	scroller: null,

	timeGridClass: TimeGrid, // class used to instantiate the timeGrid. subclasses can override
	timeGrid: null, // the main time-grid subcomponent of this view

	dayGridClass: DayGrid, // class used to instantiate the dayGrid. subclasses can override
	dayGrid: null, // the "all-day" subcomponent. if all-day is turned off, this will be null

	axisWidth: null, // the width of the time axis running down the side

	headContainerEl: null, // div that hold's the timeGrid's rendered date header
	noScrollRowEls: null, // set of fake row elements that must compensate when scroller has scrollbars

	// when the time-grid isn't tall enough to occupy the given height, we render an <hr> underneath
	bottomRuleEl: null,

	// indicates that minTime/maxTime affects rendering
	usesMinMaxTime: true,


	initialize: function() {
		this.timeGrid = this.instantiateTimeGrid();

		if (this.opt('allDaySlot')) { // should we display the "all-day" area?
			this.dayGrid = this.instantiateDayGrid(); // the all-day subcomponent of this view
		}

		this.scroller = new Scroller({
			overflowX: 'hidden',
			overflowY: 'auto'
		});
	},


	// Instantiates the TimeGrid object this view needs. Draws from this.timeGridClass
	instantiateTimeGrid: function() {
		var subclass = this.timeGridClass.extend(agendaTimeGridMethods);

		return new subclass(this);
	},


	// Instantiates the DayGrid object this view might need. Draws from this.dayGridClass
	instantiateDayGrid: function() {
		var subclass = this.dayGridClass.extend(agendaDayGridMethods);

		return new subclass(this);
	},


	/* Rendering
	------------------------------------------------------------------------------------------------------------------*/


	// Renders the view into `this.el`, which has already been assigned
	renderDates: function() {

		this.timeGrid.setRange(this.renderRange);

		if (this.dayGrid) {
			this.dayGrid.setRange(this.renderRange);
		}

		this.el.addClass('fc-agenda-view').html(this.renderSkeletonHtml());
		this.renderHead();

		this.scroller.render();
		var timeGridWrapEl = this.scroller.el.addClass('fc-time-grid-container');
		var timeGridEl = $('<div class="fc-time-grid" />').appendTo(timeGridWrapEl);
		this.el.find('.fc-body > tr > td').append(timeGridWrapEl);

		this.timeGrid.setElement(timeGridEl);
		this.timeGrid.renderDates();

		// the <hr> that sometimes displays under the time-grid
		this.bottomRuleEl = $('<hr class="fc-divider ' + this.widgetHeaderClass + '"/>')
			.appendTo(this.timeGrid.el); // inject it into the time-grid

		if (this.dayGrid) {
			this.dayGrid.setElement(this.el.find('.fc-day-grid'));
			this.dayGrid.renderDates();

			// have the day-grid extend it's coordinate area over the <hr> dividing the two grids
			this.dayGrid.bottomCoordPadding = this.dayGrid.el.next('hr').outerHeight();
		}

		this.noScrollRowEls = this.el.find('.fc-row:not(.fc-scroller *)'); // fake rows not within the scroller
	},


	// render the day-of-week headers
	renderHead: function() {
		this.headContainerEl =
			this.el.find('.fc-head-container')
				.html(this.timeGrid.renderHeadHtml());
	},


	// Unrenders the content of the view. Since we haven't separated skeleton rendering from date rendering,
	// always completely kill each grid's rendering.
	unrenderDates: function() {
		this.timeGrid.unrenderDates();
		this.timeGrid.removeElement();

		if (this.dayGrid) {
			this.dayGrid.unrenderDates();
			this.dayGrid.removeElement();
		}

		this.scroller.destroy();
	},


	// Builds the HTML skeleton for the view.
	// The day-grid and time-grid components will render inside containers defined by this HTML.
	renderSkeletonHtml: function() {
		return '' +
			'<table>' +
				'<thead class="fc-head">' +
					'<tr>' +
						'<td class="fc-head-container ' + this.widgetHeaderClass + '"></td>' +
					'</tr>' +
				'</thead>' +
				'<tbody class="fc-body">' +
					'<tr>' +
						'<td class="' + this.widgetContentClass + '">' +
							(this.dayGrid ?
								'<div class="fc-day-grid"/>' +
								'<hr class="fc-divider ' + this.widgetHeaderClass + '"/>' :
								''
								) +
						'</td>' +
					'</tr>' +
				'</tbody>' +
			'</table>';
	},


	// Generates an HTML attribute string for setting the width of the axis, if it is known
	axisStyleAttr: function() {
		if (this.axisWidth !== null) {
			 return 'style="width:' + this.axisWidth + 'px"';
		}
		return '';
	},


	/* Business Hours
	------------------------------------------------------------------------------------------------------------------*/


	renderBusinessHours: function() {
		this.timeGrid.renderBusinessHours();

		if (this.dayGrid) {
			this.dayGrid.renderBusinessHours();
		}
	},


	unrenderBusinessHours: function() {
		this.timeGrid.unrenderBusinessHours();

		if (this.dayGrid) {
			this.dayGrid.unrenderBusinessHours();
		}
	},


	/* Now Indicator
	------------------------------------------------------------------------------------------------------------------*/


	getNowIndicatorUnit: function() {
		return this.timeGrid.getNowIndicatorUnit();
	},


	renderNowIndicator: function(date) {
		this.timeGrid.renderNowIndicator(date);
	},


	unrenderNowIndicator: function() {
		this.timeGrid.unrenderNowIndicator();
	},


	/* Dimensions
	------------------------------------------------------------------------------------------------------------------*/


	updateSize: function(isResize) {
		this.timeGrid.updateSize(isResize);

		View.prototype.updateSize.call(this, isResize); // call the super-method
	},


	// Refreshes the horizontal dimensions of the view
	updateWidth: function() {
		// make all axis cells line up, and record the width so newly created axis cells will have it
		this.axisWidth = matchCellWidths(this.el.find('.fc-axis'));
	},


	// Adjusts the vertical dimensions of the view to the specified values
	setHeight: function(totalHeight, isAuto) {
		var eventLimit;
		var scrollerHeight;
		var scrollbarWidths;

		// reset all dimensions back to the original state
		this.bottomRuleEl.hide(); // .show() will be called later if this <hr> is necessary
		this.scroller.clear(); // sets height to 'auto' and clears overflow
		uncompensateScroll(this.noScrollRowEls);

		// limit number of events in the all-day area
		if (this.dayGrid) {
			this.dayGrid.removeSegPopover(); // kill the "more" popover if displayed

			eventLimit = this.opt('eventLimit');
			if (eventLimit && typeof eventLimit !== 'number') {
				eventLimit = AGENDA_ALL_DAY_EVENT_LIMIT; // make sure "auto" goes to a real number
			}
			if (eventLimit) {
				this.dayGrid.limitRows(eventLimit);
			}
		}

		if (!isAuto) { // should we force dimensions of the scroll container?

			scrollerHeight = this.computeScrollerHeight(totalHeight);
			this.scroller.setHeight(scrollerHeight);
			scrollbarWidths = this.scroller.getScrollbarWidths();

			if (scrollbarWidths.left || scrollbarWidths.right) { // using scrollbars?

				// make the all-day and header rows lines up
				compensateScroll(this.noScrollRowEls, scrollbarWidths);

				// the scrollbar compensation might have changed text flow, which might affect height, so recalculate
				// and reapply the desired height to the scroller.
				scrollerHeight = this.computeScrollerHeight(totalHeight);
				this.scroller.setHeight(scrollerHeight);
			}

			// guarantees the same scrollbar widths
			this.scroller.lockOverflow(scrollbarWidths);

			// if there's any space below the slats, show the horizontal rule.
			// this won't cause any new overflow, because lockOverflow already called.
			if (this.timeGrid.getTotalSlatHeight() < scrollerHeight) {
				this.bottomRuleEl.show();
			}
		}
	},


	// given a desired total height of the view, returns what the height of the scroller should be
	computeScrollerHeight: function(totalHeight) {
		return totalHeight -
			subtractInnerElHeight(this.el, this.scroller.el); // everything that's NOT the scroller
	},


	/* Scroll
	------------------------------------------------------------------------------------------------------------------*/


	// Computes the initial pre-configured scroll state prior to allowing the user to change it
	computeInitialDateScroll: function() {
		var scrollTime = moment.duration(this.opt('scrollTime'));
		var top = this.timeGrid.computeTimeTop(scrollTime);

		// zoom can give weird floating-point values. rather scroll a little bit further
		top = Math.ceil(top);

		if (top) {
			top++; // to overcome top border that slots beyond the first have. looks better
		}

		return { top: top };
	},


	queryDateScroll: function() {
		return { top: this.scroller.getScrollTop() };
	},


	applyDateScroll: function(scroll) {
		if (scroll.top !== undefined) {
			this.scroller.setScrollTop(scroll.top);
		}
	},


	/* Hit Areas
	------------------------------------------------------------------------------------------------------------------*/
	// forward all hit-related method calls to the grids (dayGrid might not be defined)


	hitsNeeded: function() {
		this.timeGrid.hitsNeeded();
		if (this.dayGrid) {
			this.dayGrid.hitsNeeded();
		}
	},


	hitsNotNeeded: function() {
		this.timeGrid.hitsNotNeeded();
		if (this.dayGrid) {
			this.dayGrid.hitsNotNeeded();
		}
	},


	prepareHits: function() {
		this.timeGrid.prepareHits();
		if (this.dayGrid) {
			this.dayGrid.prepareHits();
		}
	},


	releaseHits: function() {
		this.timeGrid.releaseHits();
		if (this.dayGrid) {
			this.dayGrid.releaseHits();
		}
	},


	queryHit: function(left, top) {
		var hit = this.timeGrid.queryHit(left, top);

		if (!hit && this.dayGrid) {
			hit = this.dayGrid.queryHit(left, top);
		}

		return hit;
	},


	getHitSpan: function(hit) {
		// TODO: hit.component is set as a hack to identify where the hit came from
		return hit.component.getHitSpan(hit);
	},


	getHitEl: function(hit) {
		// TODO: hit.component is set as a hack to identify where the hit came from
		return hit.component.getHitEl(hit);
	},


	/* Events
	------------------------------------------------------------------------------------------------------------------*/


	// Renders events onto the view and populates the View's segment array
	renderEvents: function(events) {
		var dayEvents = [];
		var timedEvents = [];
		var daySegs = [];
		var timedSegs;
		var i;

		// separate the events into all-day and timed
		for (i = 0; i < events.length; i++) {
			if (events[i].allDay) {
				dayEvents.push(events[i]);
			}
			else {
				timedEvents.push(events[i]);
			}
		}

		// render the events in the subcomponents
		timedSegs = this.timeGrid.renderEvents(timedEvents);
		if (this.dayGrid) {
			daySegs = this.dayGrid.renderEvents(dayEvents);
		}

		// the all-day area is flexible and might have a lot of events, so shift the height
		this.updateHeight();
	},


	// Retrieves all segment objects that are rendered in the view
	getEventSegs: function() {
		return this.timeGrid.getEventSegs().concat(
			this.dayGrid ? this.dayGrid.getEventSegs() : []
		);
	},


	// Unrenders all event elements and clears internal segment data
	unrenderEvents: function() {

		// unrender the events in the subcomponents
		this.timeGrid.unrenderEvents();
		if (this.dayGrid) {
			this.dayGrid.unrenderEvents();
		}

		// we DON'T need to call updateHeight() because
		// a renderEvents() call always happens after this, which will eventually call updateHeight()
	},


	/* Dragging (for events and external elements)
	------------------------------------------------------------------------------------------------------------------*/


	// A returned value of `true` signals that a mock "helper" event has been rendered.
	renderDrag: function(dropLocation, seg) {
		if (dropLocation.start.hasTime()) {
			return this.timeGrid.renderDrag(dropLocation, seg);
		}
		else if (this.dayGrid) {
			return this.dayGrid.renderDrag(dropLocation, seg);
		}
	},


	unrenderDrag: function() {
		this.timeGrid.unrenderDrag();
		if (this.dayGrid) {
			this.dayGrid.unrenderDrag();
		}
	},


	/* Selection
	------------------------------------------------------------------------------------------------------------------*/


	// Renders a visual indication of a selection
	renderSelection: function(span) {
		if (span.start.hasTime() || span.end.hasTime()) {
			this.timeGrid.renderSelection(span);
		}
		else if (this.dayGrid) {
			this.dayGrid.renderSelection(span);
		}
	},


	// Unrenders a visual indications of a selection
	unrenderSelection: function() {
		this.timeGrid.unrenderSelection();
		if (this.dayGrid) {
			this.dayGrid.unrenderSelection();
		}
	}

});


// Methods that will customize the rendering behavior of the AgendaView's timeGrid
// TODO: move into TimeGrid
var agendaTimeGridMethods = {


	// Generates the HTML that will go before the day-of week header cells
	renderHeadIntroHtml: function() {
		var view = this.view;
		var weekText;

		if (view.opt('weekNumbers')) {
			weekText = this.start.format(view.opt('smallWeekFormat'));

			return '' +
				'<th class="fc-axis fc-week-number ' + view.widgetHeaderClass + '" ' + view.axisStyleAttr() + '>' +
					view.buildGotoAnchorHtml( // aside from link, important for matchCellWidths
						{ date: this.start, type: 'week', forceOff: this.colCnt > 1 },
						htmlEscape(weekText) // inner HTML
					) +
				'</th>';
		}
		else {
			return '<th class="fc-axis ' + view.widgetHeaderClass + '" ' + view.axisStyleAttr() + '></th>';
		}
	},


	// Generates the HTML that goes before the bg of the TimeGrid slot area. Long vertical column.
	renderBgIntroHtml: function() {
		var view = this.view;

		return '<td class="fc-axis ' + view.widgetContentClass + '" ' + view.axisStyleAttr() + '></td>';
	},


	// Generates the HTML that goes before all other types of cells.
	// Affects content-skeleton, helper-skeleton, highlight-skeleton for both the time-grid and day-grid.
	renderIntroHtml: function() {
		var view = this.view;

		return '<td class="fc-axis" ' + view.axisStyleAttr() + '></td>';
	}

};


// Methods that will customize the rendering behavior of the AgendaView's dayGrid
var agendaDayGridMethods = {


	// Generates the HTML that goes before the all-day cells
	renderBgIntroHtml: function() {
		var view = this.view;

		return '' +
			'<td class="fc-axis ' + view.widgetContentClass + '" ' + view.axisStyleAttr() + '>' +
				'<span>' + // needed for matchCellWidths
					view.getAllDayHtml() +
				'</span>' +
			'</td>';
	},


	// Generates the HTML that goes before all other types of cells.
	// Affects content-skeleton, helper-skeleton, highlight-skeleton for both the time-grid and day-grid.
	renderIntroHtml: function() {
		var view = this.view;

		return '<td class="fc-axis" ' + view.axisStyleAttr() + '></td>';
	}

};

;;

var AGENDA_ALL_DAY_EVENT_LIMIT = 5;

// potential nice values for the slot-duration and interval-duration
// from largest to smallest
var AGENDA_STOCK_SUB_DURATIONS = [
	{ hours: 1 },
	{ minutes: 30 },
	{ minutes: 15 },
	{ seconds: 30 },
	{ seconds: 15 }
];

fcViews.agenda = {
	'class': AgendaView,
	defaults: {
		allDaySlot: true,
		slotDuration: '00:30:00',
		slotEventOverlap: true // a bad name. confused with overlap/constraint system
	}
};

fcViews.agendaDay = {
	type: 'agenda',
	duration: { days: 1 }
};

fcViews.agendaWeek = {
	type: 'agenda',
	duration: { weeks: 1 }
};
;;

/*
Responsible for the scroller, and forwarding event-related actions into the "grid"
*/
var ListView = View.extend({

	grid: null,
	scroller: null,

	initialize: function() {
		this.grid = new ListViewGrid(this);
		this.scroller = new Scroller({
			overflowX: 'hidden',
			overflowY: 'auto'
		});
	},

	renderSkeleton: function() {
		this.el.addClass(
			'fc-list-view ' +
			this.widgetContentClass
		);

		this.scroller.render();
		this.scroller.el.appendTo(this.el);

		this.grid.setElement(this.scroller.scrollEl);
	},

	unrenderSkeleton: function() {
		this.scroller.destroy(); // will remove the Grid too
	},

	setHeight: function(totalHeight, isAuto) {
		this.scroller.setHeight(this.computeScrollerHeight(totalHeight));
	},

	computeScrollerHeight: function(totalHeight) {
		return totalHeight -
			subtractInnerElHeight(this.el, this.scroller.el); // everything that's NOT the scroller
	},

	renderDates: function() {
		this.grid.setRange(this.renderRange); // needs to process range-related options
	},

	renderEvents: function(events) {
		this.grid.renderEvents(events);
	},

	unrenderEvents: function() {
		this.grid.unrenderEvents();
	},

	isEventResizable: function(event) {
		return false;
	},

	isEventDraggable: function(event) {
		return false;
	}

});

/*
Responsible for event rendering and user-interaction.
Its "el" is the inner-content of the above view's scroller.
*/
var ListViewGrid = Grid.extend({

	segSelector: '.fc-list-item', // which elements accept event actions
	hasDayInteractions: false, // no day selection or day clicking

	// slices by day
	spanToSegs: function(span) {
		var view = this.view;
		var dayStart = view.renderRange.start.clone().time(0); // timed, so segs get times!
		var dayIndex = 0;
		var seg;
		var segs = [];

		while (dayStart < view.renderRange.end) {

			seg = intersectRanges(span, {
				start: dayStart,
				end: dayStart.clone().add(1, 'day')
			});

			if (seg) {
				seg.dayIndex = dayIndex;
				segs.push(seg);
			}

			dayStart.add(1, 'day');
			dayIndex++;

			// detect when span won't go fully into the next day,
			// and mutate the latest seg to the be the end.
			if (
				seg && !seg.isEnd && span.end.hasTime() &&
				span.end < dayStart.clone().add(this.view.nextDayThreshold)
			) {
				seg.end = span.end.clone();
				seg.isEnd = true;
				break;
			}
		}

		return segs;
	},

	// like "4:00am"
	computeEventTimeFormat: function() {
		return this.view.opt('mediumTimeFormat');
	},

	// for events with a url, the whole <tr> should be clickable,
	// but it's impossible to wrap with an <a> tag. simulate this.
	handleSegClick: function(seg, ev) {
		var url;

		Grid.prototype.handleSegClick.apply(this, arguments); // super. might prevent the default action

		// not clicking on or within an <a> with an href
		if (!$(ev.target).closest('a[href]').length) {
			url = seg.event.url;
			if (url && !ev.isDefaultPrevented()) { // jsEvent not cancelled in handler
				window.location.href = url; // simulate link click
			}
		}
	},

	// returns list of foreground segs that were actually rendered
	renderFgSegs: function(segs) {
		segs = this.renderFgSegEls(segs); // might filter away hidden events

		if (!segs.length) {
			this.renderEmptyMessage();
		}
		else {
			this.renderSegList(segs);
		}

		return segs;
	},

	renderEmptyMessage: function() {
		this.el.html(
			'<div class="fc-list-empty-wrap2">' + // TODO: try less wraps
			'<div class="fc-list-empty-wrap1">' +
			'<div class="fc-list-empty">' +
				htmlEscape(this.view.opt('noEventsMessage')) +
			'</div>' +
			'</div>' +
			'</div>'
		);
	},

	// render the event segments in the view
	renderSegList: function(allSegs) {
		var segsByDay = this.groupSegsByDay(allSegs); // sparse array
		var dayIndex;
		var daySegs;
		var i;
		var tableEl = $('<table class="fc-list-table"><tbody/></table>');
		var tbodyEl = tableEl.find('tbody');

		for (dayIndex = 0; dayIndex < segsByDay.length; dayIndex++) {
			daySegs = segsByDay[dayIndex];
			if (daySegs) { // sparse array, so might be undefined

				// append a day header
				tbodyEl.append(this.dayHeaderHtml(
					this.view.renderRange.start.clone().add(dayIndex, 'days')
				));

				this.sortEventSegs(daySegs);

				for (i = 0; i < daySegs.length; i++) {
					tbodyEl.append(daySegs[i].el); // append event row
				}
			}
		}

		this.el.empty().append(tableEl);
	},

	// Returns a sparse array of arrays, segs grouped by their dayIndex
	groupSegsByDay: function(segs) {
		var segsByDay = []; // sparse array
		var i, seg;

		for (i = 0; i < segs.length; i++) {
			seg = segs[i];
			(segsByDay[seg.dayIndex] || (segsByDay[seg.dayIndex] = []))
				.push(seg);
		}

		return segsByDay;
	},

	// generates the HTML for the day headers that live amongst the event rows
	dayHeaderHtml: function(dayDate) {
		var view = this.view;
		var mainFormat = view.opt('listDayFormat');
		var altFormat = view.opt('listDayAltFormat');

		return '<tr class="fc-list-heading" data-date="' + dayDate.format('YYYY-MM-DD') + '">' +
			'<td class="' + view.widgetHeaderClass + '" colspan="3">' +
				(mainFormat ?
					view.buildGotoAnchorHtml(
						dayDate,
						{ 'class': 'fc-list-heading-main' },
						htmlEscape(dayDate.format(mainFormat)) // inner HTML
					) :
					'') +
				(altFormat ?
					view.buildGotoAnchorHtml(
						dayDate,
						{ 'class': 'fc-list-heading-alt' },
						htmlEscape(dayDate.format(altFormat)) // inner HTML
					) :
					'') +
			'</td>' +
		'</tr>';
	},

	// generates the HTML for a single event row
	fgSegHtml: function(seg) {
		var view = this.view;
		var classes = [ 'fc-list-item' ].concat(this.getSegCustomClasses(seg));
		var bgColor = this.getSegBackgroundColor(seg);
		var event = seg.event;
		var url = event.url;
		var timeHtml;

		if (event.allDay) {
			timeHtml = view.getAllDayHtml();
		}
		else if (view.isMultiDayEvent(event)) { // if the event appears to span more than one day
			if (seg.isStart || seg.isEnd) { // outer segment that probably lasts part of the day
				timeHtml = htmlEscape(this.getEventTimeText(seg));
			}
			else { // inner segment that lasts the whole day
				timeHtml = view.getAllDayHtml();
			}
		}
		else {
			// Display the normal time text for the *event's* times
			timeHtml = htmlEscape(this.getEventTimeText(event));
		}

		if (url) {
			classes.push('fc-has-url');
		}

		return '<tr class="' + classes.join(' ') + '">' +
			(this.displayEventTime ?
				'<td class="fc-list-item-time ' + view.widgetContentClass + '">' +
					(timeHtml || '') +
				'</td>' :
				'') +
			'<td class="fc-list-item-marker ' + view.widgetContentClass + '">' +
				'<span class="fc-event-dot"' +
				(bgColor ?
					' style="background-color:' + bgColor + '"' :
					'') +
				'></span>' +
			'</td>' +
			'<td class="fc-list-item-title ' + view.widgetContentClass + '">' +
				'<a' + (url ? ' href="' + htmlEscape(url) + '"' : '') + '>' +
					htmlEscape(seg.event.title || '') +
				'</a>' +
			'</td>' +
		'</tr>';
	}

});

;;

fcViews.list = {
	'class': ListView,
	buttonTextKey: 'list', // what to lookup in locale files
	defaults: {
		buttonText: 'list', // text to display for English
		listDayFormat: 'LL', // like "January 1, 2016"
		noEventsMessage: 'No events to display'
	}
};

fcViews.listDay = {
	type: 'list',
	duration: { days: 1 },
	defaults: {
		listDayFormat: 'dddd' // day-of-week is all we need. full date is probably in header
	}
};

fcViews.listWeek = {
	type: 'list',
	duration: { weeks: 1 },
	defaults: {
		listDayFormat: 'dddd', // day-of-week is more important
		listDayAltFormat: 'LL'
	}
};

fcViews.listMonth = {
	type: 'list',
	duration: { month: 1 },
	defaults: {
		listDayAltFormat: 'dddd' // day-of-week is nice-to-have
	}
};

fcViews.listYear = {
	type: 'list',
	duration: { year: 1 },
	defaults: {
		listDayAltFormat: 'dddd' // day-of-week is nice-to-have
	}
};

;;

return FC; // export for Node/CommonJS
});