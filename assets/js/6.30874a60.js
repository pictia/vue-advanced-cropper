(window.webpackJsonp=window.webpackJsonp||[]).push([[6,38,45,47,48,50,51,52],{100:function(t,e,i){i(101),t.exports=i(24).Object.keys},101:function(t,e,i){var n=i(89),r=i(88);i(62)("keys",function(){return function(t){return r(n(t))}})},102:function(t,e,i){t.exports=i(103)},103:function(t,e,i){i(104);var n=i(24).Object;t.exports=function(t,e,i){return n.defineProperty(t,e,i)}},104:function(t,e,i){var n=i(57);n(n.S+n.F*!i(72),"Object",{defineProperty:i(60).f})},105:function(t,e,i){"use strict";i.d(e,"e",function(){return r}),i.d(e,"b",function(){return o}),i.d(e,"c",function(){return a}),i.d(e,"a",function(){return h}),i.d(e,"d",function(){return u});var n=i(14);function r(t,e,i){var r=Object(n.a)({},e.directions);return t.width+r.right<0&&(r.right=-t.width),t.width+r.left<0&&(r.left=-t.width),t.height+r.bottom<0&&(r.bottom=-t.height),t.height+r.top<0&&(r.top=-t.height),i&&(t.width+t.left+r.right>i.width+i.left&&(r.right=i.width+i.left-t.width-t.left),t.height+t.top+r.bottom>i.height+i.top&&(r.bottom=i.height+i.top-t.height-t.top),t.left-r.left<i.left&&(r.left=t.left-i.left),t.top-r.top<i.top&&(r.top=t.top-i.top)),{width:t.width+r.left+r.right,height:t.height+r.top+r.bottom,left:t.left-r.left,top:t.top-r.top}}function o(t,e,i){var r=Object(n.a)({},e.directions);r.left&&(r.right=r.left),r.right&&(r.left=r.right),r.top&&(r.bottom=r.top),r.bottom&&(r.top=r.bottom);var o=Math.min(i.width,Math.max(0,t.width+r.left+r.right)),a=Math.min(i.height,Math.max(0,t.height+r.top+r.bottom));return{width:o,height:a,left:i.width/2-o/2,top:i.height/2-a/2}}function a(t){if(t)return{left:0,top:0,width:t.clientWidth,height:t.clientHeight}}function h(t,e){return e?{width:t.width+"px",height:t.height+"px",left:t.left-e.left+"px",top:t.top-e.top+"px"}:{width:t.width+"px",height:t.height+"px",left:t.left+"px",top:t.top+"px"}}function u(){return{width:0,height:0,left:0,top:0}}},106:function(t,e,i){"use strict";var n=i(40);i.n(n).a},107:function(t,e,i){"use strict";var n=i(41);i.n(n).a},108:function(t,e,i){"use strict";var n=i(42);i.n(n).a},109:function(t,e,i){"use strict";var n=i(43);i.n(n).a},110:function(t,e,i){t.exports=i.p+"assets/img/play.11231c08.svg"},111:function(t,e,i){"use strict";var n=i(44);i.n(n).a},112:function(t,e,i){"use strict";var n=i(45);i.n(n).a},113:function(t,e,i){"use strict";var n=i(46);i.n(n).a},121:function(t,e,i){"use strict";var n=i(94),r=i.n(n),o=i(97),a=i.n(o),h=i(99),u=i.n(h),c=i(102),l=i.n(c);function s(t,e,i){return e in t?l()(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function f(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=u()(i);"function"==typeof a.a&&(n=n.concat(a()(i).filter(function(t){return r()(i,t).enumerable}))),n.forEach(function(e){s(t,e,i[e])})}return t}i.d(e,"a",function(){return f})},127:function(t,e,i){"use strict";i.r(e);i(125);var n=[{name:"area",text:"Area"},{name:"stencil",text:"Stencil"},{name:"cropper",text:"Cropper"},{name:"stretcher",text:"Stretcher"},{name:"visibleArea",text:"Visible area"},{name:"boundaries",text:"Boundaries"}],r={props:n.map(function(t){return t.name}),data:function(){return{types:[].concat(n)}}},o=(i(108),i(1)),a=Object(o.a)(r,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"legend"},t._l(t.types,function(e){return t.$props[e.name]?i("div",{staticClass:"legend__element"},[i("div",{staticClass:"legend__square",class:"legend__square--"+e.name}),t._v(" "),i("div",{staticClass:"legend__label",class:"legend__label--"+e.name},[t._v("\n\t\t\t"+t._s(e.text||e.name)+"\n\t\t")])]):t._e()}),0)},[],!1,null,null,null);e.default=a.exports},128:function(t,e,i){"use strict";i.r(e);var n={props:["label"]},r=(i(109),i(1)),o=Object(r.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"group"},[this.label?e("div",{staticClass:"group__label"},[this._v("\n\t\t"+this._s(this.label)+"\n\t")]):this._e(),this._v(" "),this._t("default")],2)},[],!1,null,null,null);e.default=o.exports},129:function(t,e,i){"use strict";i.r(e);i(54);var n={model:{event:"change",prop:"value"},props:{label:{type:String},type:{type:String,default:"text"},value:{type:[String,Number]}},methods:{handleFocus:function(){this.$emit("focus")},handleBlur:function(){this.$emit("blur")}},computed:{internalValue:{get:function(){return this.value},set:function(t){this.$emit("change",t)}}}},r=(i(112),i(1)),o=Object(r.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{staticClass:"group-input"},[t.label?i("span",{staticClass:"group-input__label"},[t._v("\n\t\t"+t._s(t.label)+"\n\t")]):t._e(),t._v(" "),"checkbox"===t.type?i("input",{directives:[{name:"model",rawName:"v-model",value:t.internalValue,expression:"internalValue"}],staticClass:"group-input__input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.internalValue)?t._i(t.internalValue,null)>-1:t.internalValue},on:{blur:t.handleBlur,focus:t.handleFocus,change:function(e){var i=t.internalValue,n=e.target,r=!!n.checked;if(Array.isArray(i)){var o=t._i(i,null);n.checked?o<0&&(t.internalValue=i.concat([null])):o>-1&&(t.internalValue=i.slice(0,o).concat(i.slice(o+1)))}else t.internalValue=r}}}):"radio"===t.type?i("input",{directives:[{name:"model",rawName:"v-model",value:t.internalValue,expression:"internalValue"}],staticClass:"group-input__input",attrs:{type:"radio"},domProps:{checked:t._q(t.internalValue,null)},on:{blur:t.handleBlur,focus:t.handleFocus,change:function(e){t.internalValue=null}}}):i("input",{directives:[{name:"model",rawName:"v-model",value:t.internalValue,expression:"internalValue"}],staticClass:"group-input__input",attrs:{type:t.type},domProps:{value:t.internalValue},on:{blur:t.handleBlur,focus:t.handleFocus,input:function(e){e.target.composing||(t.internalValue=e.target.value)}}})])},[],!1,null,null,null);e.default=o.exports},13:function(t,e,i){"use strict";i.d(e,"q",function(){return o}),i.d(e,"d",function(){return a}),i.d(e,"i",function(){return h}),i.d(e,"j",function(){return u}),i.d(e,"a",function(){return c}),i.d(e,"l",function(){return l}),i.d(e,"b",function(){return s}),i.d(e,"c",function(){return f}),i.d(e,"p",function(){return d}),i.d(e,"o",function(){return p}),i.d(e,"e",function(){return m}),i.d(e,"h",function(){return g}),i.d(e,"f",function(){return v}),i.d(e,"g",function(){return b}),i.d(e,"n",function(){return w}),i.d(e,"m",function(){return _}),i.d(e,"k",function(){return x});var n=i(14),r=i(63);function o(t){return{left:t.left,top:t.top,right:t.left+t.width,bottom:t.top+t.height}}function a(t,e){return{left:t.left-e.left,top:t.top-e.top}}function h(t){return{left:t.left+t.width/2,top:t.top+t.height/2}}function u(t,e){var i={left:0,top:0,right:0,bottom:0};return r.a.forEach(function(n){var r=e[n],a=o(t)[n];i[n]=void 0!==r&&void 0!==a?"left"===n||"top"===n?Math.max(0,r-a):Math.max(0,a-r):0}),i}function c(t,e){return{left:t.left-e.left,top:t.top-e.top,width:t.width+e.left+e.right,height:t.height+e.top+e.bottom}}function l(t){return{left:-t.left,top:-t.top}}function s(t,e){return Object(n.a)(Object(n.a)({},t),{left:t.left+e.left,top:t.top+e.top})}function f(t,e,i,n){if(i){var r=h(t);return{width:t.width*e,height:t.height*e,left:t.left+t.width*(1-e)/2+(i.left-r.left)*(n||1-e),top:t.top+t.height*(1-e)/2+(i.top-r.top)*(n||1-e)}}return{width:t.width*e,height:t.height*e,left:t.left+t.width*(1-e)/2,top:t.top+t.height*(1-e)/2}}function d(t){return t.width/t.height}function p(t,e){return Math.min(void 0!==e.right&&void 0!==e.left?(e.right-e.left)/t.width:1/0,void 0!==e.bottom&&void 0!==e.top?(e.bottom-e.top)/t.height:1/0)}function m(t,e){var i={left:0,top:0},n=u(t,e);return n.left&&n.left>0?i.left=n.left:n.right&&n.right>0&&(i.left=-n.right),n.top&&n.top>0?i.top=n.top:n.bottom&&n.bottom>0&&(i.top=-n.bottom),i}function g(t,e){var i;return e.minimum&&t<e.minimum?i=e.minimum:e.maximum&&t>e.maximum&&(i=e.maximum),i}function v(t,e){var i=d(t),n=d(e);return e.width<1/0&&e.height<1/0?i>n?{width:e.width,height:e.width/i}:{width:e.height*i,height:e.height}:e.width<1/0?{width:e.width,height:e.width/i}:e.height<1/0?{width:e.height*i,height:e.height}:t}function b(t,e){return s(t,m(t,e))}function w(t){return{width:void 0!==t.right&&void 0!==t.left?t.right-t.left:1/0,height:void 0!==t.bottom&&void 0!==t.top?t.bottom-t.top:1/0}}function _(t,e,i){void 0===i&&(i=!0);var n={};return r.a.forEach(function(r){var o=t[r],a=e[r];void 0!==o&&void 0!==a?n[r]="left"===r||"top"===r?i?Math.max(o,a):Math.min(o,a):i?Math.min(o,a):Math.max(o,a):void 0!==a?n[r]=a:void 0!==o&&(n[r]=o)}),n}function x(t,e){return _(t,e,!0)}},130:function(t,e,i){"use strict";i.r(e);var n={props:["visible"]},r=(i(113),i(1)),o=Object(r.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"stretcher",class:{"stretcher--visible":this.visible}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],staticClass:"stretcher__horizontal-line"}),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],staticClass:"stretcher__vertical-line"})])},[],!1,null,null,null);e.default=o.exports},131:function(t,e,i){"use strict";i.r(e);i(106);var n=i(1),r=Object(n.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"algorithm-wrapper"},[e("div",{staticClass:"algorithm-wrapper__content"},[this._t("content")],2),this._v(" "),e("div",{staticClass:"algorithm-wrapper__panel"},[this._t("panel")],2)])},[],!1,null,null,null);e.default=r.exports},132:function(t,e,i){"use strict";i.r(e);i(107);var n=i(1),r=Object(n.a)({},function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"static-cropper"},[this._t("default")],2)},[],!1,null,null,null);e.default=r.exports},133:function(t,e,i){"use strict";i.r(e);i(111);var n=i(1),r=Object(n.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._b({staticClass:"run-button",on:{click:function(e){return t.$emit("click",e)}}},"div",t.$attrs,!1),[n("img",{attrs:{src:i(110)}})])},[],!1,null,null,null);e.default=r.exports},14:function(t,e,i){"use strict";i.d(e,"a",function(){return n});var n=function(){return(n=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)}},140:function(t,e,i){"use strict";var n=i(64);i.n(n).a},141:function(t,e,i){"use strict";var n=i(65);i.n(n).a},142:function(t,e,i){"use strict";var n=i(66);i.n(n).a},146:function(t,e,i){"use strict";var n=i(14),r=(function(){}(),function(){}(),function(){return function(t){this.type="move",this.directions=t}}()),o=(function(){function t(t,e,i,n,r){this.type="drag",this.nativeEvent=t,this.position=i,this.previousPosition=n,this.element=e,this.anchor=r}t.prototype.shift=function(){var t=this.element,e=this.anchor,i=this.position,n=t.getBoundingClientRect(),r=n.left,o=n.top;return{left:i.left-r-e.left,top:i.top-o-e.top}}}(),i(13));function a(t){var e=t.size,i=t.aspectRatio,n=t.ignoreMinimum,r=t.sizeRestrictions;return Boolean((e.correctRatio||Object(o.p)(e)>=i.minimum&&Object(o.p)(e)<=i.maximum)&&e.height<=r.maxHeight&&e.width<=r.maxWidth&&e.width&&e.height&&(n||e.height>=r.minHeight&&e.width>=r.minWidth))}function h(t,e){return Math.pow(t.width-e.width,2)+Math.pow(t.height-e.height,2)}function u(t){var e=t.width,i=t.height,n=t.sizeRestrictions,r={minimum:t.aspectRatio&&t.aspectRatio.minimum||0,maximum:t.aspectRatio&&t.aspectRatio.maximum||1/0},o={width:Math.max(n.minWidth,Math.min(n.maxWidth,e)),height:Math.max(n.minHeight,Math.min(n.maxHeight,i))};function u(t,o){return void 0===o&&(o=!1),t.reduce(function(t,u){return a({size:u,aspectRatio:r,sizeRestrictions:n,ignoreMinimum:o})&&(!t||h(u,{width:e,height:i})<h(t,{width:e,height:i}))?u:t},null)}var c=[];r&&[r.minimum,r.maximum].forEach(function(t){t&&c.push({width:o.width,height:o.width/t,correctRatio:!0},{width:o.height*t,height:o.height,correctRatio:!0})}),a({size:o,aspectRatio:r,sizeRestrictions:n})&&c.push(o);var l=u(c)||u(c,!0);return l&&{width:l.width,height:l.height}}function c(t){var e=t.event,i=t.coordinates,n=t.positionRestrictions,r=void 0===n?{}:n,a=Object(o.b)(i,e.directions);return Object(o.b)(a,Object(o.e)(a,r))}function l(t){var e=t.cropper,i=t.imageSize,n=e.clientHeight,r=e.clientWidth,o=n,a=i.width*n/i.height;return a>r&&(a=r,o=i.height*r/i.width),{width:a,height:o}}function s(t){var e=t.cropper;return{width:e.clientWidth,height:e.clientHeight}}function f(t){var e=t.stretcher,i=t.imageSize,n=Object(o.p)(i);e.style.width=i.width+"px",e.style.height=e.clientWidth/n+"px",e.style.width=e.clientWidth+"px"}var d=i(63);function p(t){var e=t.sizeRestrictions,i=t.imageSize,r=t.boundaries,a=t.positionRestrictions,h=t.imageRestriction,u=void 0===h?"none":h,c=Object(n.a)(Object(n.a)({},e),{minWidth:void 0!==e.minWidth?e.minWidth:0,minHeight:void 0!==e.minHeight?e.minHeight:0,maxWidth:void 0!==e.maxWidth?e.maxWidth:1/0,maxHeight:void 0!==e.maxHeight?e.maxHeight:1/0});if(void 0!==a.left&&void 0!==a.right&&(c.maxWidth=Math.min(c.maxWidth,a.right-a.left)),void 0!==a.bottom&&void 0!==a.top&&(c.maxHeight=Math.min(c.maxHeight,a.bottom-a.top)),"none"!==u){var l=Object(o.f)(r,i),s="area"===u?l.width:i.width,f="area"===u?l.height:i.height;(!c.maxWidth||c.maxWidth>s)&&(c.maxWidth=s),(!c.maxHeight||c.maxHeight>f)&&(c.maxHeight=f)}return c.minWidth>c.maxWidth&&(c.minWidth=c.maxWidth,c.widthFrozen=!0),c.minHeight>c.maxHeight&&(c.minHeight=c.maxHeight,c.heightFrozen=!0),c}function m(t){var e=t.directions,i=t.coordinates,r=t.positionRestrictions,a=void 0===r?{}:r,h=t.sizeRestrictions,u=t.preserveRatio,c=t.compensate,l=Object(n.a)({},e),s=Object(o.a)(i,l).width,f=Object(o.a)(i,l).height;s<0&&(l.left<0&&l.right<0?(l.left=-(i.width-h.minWidth)/(l.left/l.right),l.right=-(i.width-h.minWidth)/(l.right/l.left)):l.left<0?l.left=-(i.width-h.minWidth):l.right<0&&(l.right=-(i.width-h.minWidth))),f<0&&(l.top<0&&l.bottom<0?(l.top=-(i.height-h.minHeight)/(l.top/l.bottom),l.bottom=-(i.height-h.minHeight)/(l.bottom/l.top)):l.top<0?l.top=-(i.height-h.minHeight):l.bottom<0&&(l.bottom=-(i.height-h.minHeight)));var p=Object(o.j)(Object(o.a)(i,l),a);c&&(p.left&&p.left>0&&0===p.right?(l.right+=p.left,l.left-=p.left):p.right&&p.right>0&&0===p.left&&(l.left+=p.right,l.right-=p.right),p.top&&p.top>0&&0===p.bottom?(l.bottom+=p.top,l.top-=p.top):p.bottom&&p.bottom>0&&0===p.top&&(l.top+=p.bottom,l.bottom-=p.bottom),p=Object(o.j)(Object(o.a)(i,l),a));var m={width:1/0,height:1/0,left:1/0,right:1/0,top:1/0,bottom:1/0};if(d.a.forEach(function(t){var e=p[t];e&&l[t]&&(m[t]=Math.max(0,1-e/l[t]))}),u){var g=Math.min.apply(Math,d.a.map(function(t){return m[t]}));g!==1/0&&d.a.forEach(function(t){l[t]*=g})}else d.a.forEach(function(t){m[t]!==1/0&&(l[t]*=m[t])});if(s=Object(o.a)(i,l).width,f=Object(o.a)(i,l).height,l.right+l.left&&(s>h.maxWidth?m.width=(h.maxWidth-i.width)/(l.right+l.left):s<h.minWidth&&(m.width=(h.minWidth-i.width)/(l.right+l.left))),l.bottom+l.top&&(f>h.maxHeight?m.height=(h.maxHeight-i.height)/(l.bottom+l.top):f<h.minHeight&&(m.height=(h.minHeight-i.height)/(l.bottom+l.top))),u){var v=Math.min(m.width,m.height);v!==1/0&&d.a.forEach(function(t){l[t]*=v})}else m.width!==1/0&&d.b.forEach(function(t){l[t]*=m.width}),m.height!==1/0&&d.d.forEach(function(t){l[t]*=m.height});return l}function g(t,e,i){return 0==e&&0==i?t/2:0==e?0:0==i?t:t*Math.abs(e/(e+i))}function v(t){var e=t.event,i=t.coordinates,a=t.aspectRatio,h=t.positionRestrictions,u=t.sizeRestrictions,l=Object(n.a)(Object(n.a)({},i),{right:i.left+i.width,bottom:i.top+i.height}),s=e.params||{},f=Object(n.a)({},e.directions),p=s.allowedDirections||{left:!0,right:!0,bottom:!0,top:!0};u.widthFrozen&&(f.left=0,f.right=0),u.heightFrozen&&(f.top=0,f.bottom=0),d.a.forEach(function(t){p[t]||(f[t]=0)}),f=m({coordinates:l,directions:f,sizeRestrictions:u,positionRestrictions:h});var v=Object(o.a)(l,f).width,b=Object(o.a)(l,f).height,w=s.preserveRatio?Object(o.p)(l):Object(o.h)(v/b,a);if(w){var _=s.respectDirection;if(_||(_=l.width>=l.height||1===w?"width":"height"),"width"===_){var x=v/w-l.height;if(p.top&&p.bottom){var O=f.top,j=f.bottom;f.bottom=g(x,j,O),f.top=g(x,O,j)}else p.bottom?f.bottom=x:p.top?f.top=x:p.right?f.right=0:p.left&&(f.left=0)}else if("height"===_){var y=l.width-b*w;if(p.left&&p.right){var R=f.left,W=f.right;f.left=-g(y,R,W),f.right=-g(y,W,R)}else p.left?f.left=-y:p.right?f.right=-y:p.top?f.top=0:p.bottom&&(f.bottom=0)}f=m({directions:f,coordinates:l,sizeRestrictions:u,positionRestrictions:h,preserveRatio:!0,compensate:s.compensate})}return v=Object(o.a)(l,f).width,b=Object(o.a)(l,f).height,(w=s.preserveRatio?Object(o.p)(l):Object(o.h)(v/b,a))&&Math.abs(w-v/b)>.001&&d.a.forEach(function(t){p[t]||(f[t]=0)}),c({event:new r({left:-f.left,top:-f.top}),coordinates:{width:i.width+f.right+f.left,height:i.height+f.top+f.bottom,left:i.left,top:i.top},positionRestrictions:h})}i.d(e,"a",function(){return u}),i.d(e,"c",function(){return l}),i.d(e,"b",function(){return s}),i.d(e,"d",function(){return f}),i.d(e,"e",function(){return p}),i.d(e,"f",function(){return v})},151:function(t,e,i){"use strict";i.r(e);var n={components:{BoundingBox:i(12).a}},r=(i(140),i(1)),o=Object(r.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("bounding-box",this._g(this._b({staticClass:"dynamic-cropper",attrs:{"lines-classes":{default:"dynamic-cropper__line"},"handlers-classes":{default:"dynamic-cropper__handler"}}},"bounding-box",this.$attrs,!1),this.$listeners),[this._t("default")],2)},[],!1,null,null,null);e.default=o.exports},152:function(t,e,i){"use strict";i.r(e);i(54);var n={model:{event:"change",prop:"value"},props:{label:{type:String},value:{type:[String,Number]}},methods:{handleFocus:function(){this.$emit("focus")},handleBlur:function(){this.$emit("blur")}},computed:{internalValue:{get:function(){return this.value},set:function(t){this.$emit("change",t)}}}},r=(i(142),i(1)),o=Object(r.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{staticClass:"group-select"},[t.label?i("span",{staticClass:"group-select__label"},[t._v("\n\t\t"+t._s(t.label)+"\n\t")]):t._e(),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.internalValue,expression:"internalValue"}],staticClass:"group-select__input",on:{blur:t.handleBlur,focus:t.handleFocus,change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.internalValue=e.target.multiple?i:i[0]}}},[t._t("default")],2)])},[],!1,null,null,null);e.default=o.exports},155:function(t,e,i){"use strict";i.r(e);i(141);var n=i(1),r=Object(n.a)({},function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"static-boundaries"},[this._t("default")],2)},[],!1,null,null,null);e.default=r.exports},189:function(t,e,i){},381:function(t,e,i){"use strict";var n=i(189);i.n(n).a},40:function(t,e,i){},41:function(t,e,i){},42:function(t,e,i){},43:function(t,e,i){},435:function(t,e,i){"use strict";i.r(e);var n=i(121),r=i(12),o=i(146),a=i(105),h=i(131),u=i(151),c=i(132),l=i(155),s=i(127),f=i(128),d=i(133),p=i(129),m=i(152),g=i(130),v={components:{DynamicCropper:u.default,Cropper:r.c,AlgorithmWrapper:h.default,BoundingBox:r.a,StaticCropper:c.default,StaticBoundaries:l.default,RunButton:d.default,GroupInput:p.default,GroupSelect:m.default,Group:f.default,ElementsLegend:s.default,Stretcher:g.default},data:function(){return{cropper:Object(a.d)(),boundaries:null,algorithm:"fit",image:{width:100,height:100}}},mounted:function(){var t=this.$refs.container;t&&(this.cropper.width=t.clientWidth,this.cropper.height=t.clientHeight)},computed:{areaStyle:function(){return Object(a.a)(this.cropper)},boundariesStyle:function(){return this.boundaries?Object(a.a)(Object(n.a)({},this.boundaries,{width:this.boundaries.width-4,height:this.boundaries.height-4})):{display:"none"}}},methods:{onResizeArea:function(t){this.cropper=Object(a.b)(this.cropper,t,Object(a.c)(this.$refs.container)),this.boundaries=null},runAlgorithm:function(){var t=this.$refs.cropper;t&&("fill"===this.algorithm?this.boundaries=Object(o.b)({cropper:t.$el,imageSize:this.image}):this.boundaries=Object(o.c)({cropper:t.$el,imageSize:this.image}))}}},b=(i(381),i(1)),w=Object(b.a)(v,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("algorithm-wrapper",{staticClass:"algorithms-default-boundaries",scopedSlots:t._u([{key:"content",fn:function(){return[i("div",{ref:"container",staticClass:"algorithms-default-boundaries__area"},[i("dynamic-cropper",{ref:"cropper",staticClass:"algorithms-default-boundaries__cropper",style:t.areaStyle,on:{resize:t.onResizeArea}},[i("static-boundaries",{staticClass:"algorithms-default-boundaries__boundaries",style:t.boundariesStyle})],1)],1),t._v(" "),i("run-button",{on:{click:t.runAlgorithm}})]},proxy:!0},{key:"panel",fn:function(){return[i("group",{attrs:{label:"Image"}},[i("group-input",{attrs:{type:"number",label:"Width"},model:{value:t.image.width,callback:function(e){t.$set(t.image,"width",e)},expression:"image.width"}}),t._v(" "),i("group-input",{attrs:{type:"number",label:"Height"},model:{value:t.image.height,callback:function(e){t.$set(t.image,"height",e)},expression:"image.height"}})],1),t._v(" "),i("group",[i("group-select",{attrs:{label:"Algorithm"},model:{value:t.algorithm,callback:function(e){t.algorithm=e},expression:"algorithm"}},[i("option",{attrs:{value:"fill"}},[t._v("Fill Boundaries")]),t._v(" "),i("option",{attrs:{value:"fit"}},[t._v("Fit Boundaries")])])],1),t._v(" "),i("group",[i("elements-legend",{attrs:{cropper:!0,boundaries:!0}})],1)]},proxy:!0}])})},[],!1,null,null,null);e.default=w.exports},44:function(t,e,i){},45:function(t,e,i){},46:function(t,e,i){},62:function(t,e,i){var n=i(57),r=i(24),o=i(81);t.exports=function(t,e){var i=(r.Object||{})[t]||Object[t],a={};a[t]=e(i),n(n.S+n.F*o(function(){i(1)}),"Object",a)}},63:function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return r}),i.d(e,"d",function(){return o}),i.d(e,"c",function(){return a});var n=["left","right","top","bottom"],r=["left","right"],o=["top","bottom"],a=["left","top"]},64:function(t,e,i){},65:function(t,e,i){},66:function(t,e,i){},94:function(t,e,i){t.exports=i(95)},95:function(t,e,i){i(96);var n=i(24).Object;t.exports=function(t,e){return n.getOwnPropertyDescriptor(t,e)}},96:function(t,e,i){var n=i(73),r=i(139).f;i(62)("getOwnPropertyDescriptor",function(){return function(t,e){return r(n(t),e)}})},97:function(t,e,i){t.exports=i(98)},98:function(t,e,i){i(138),t.exports=i(24).Object.getOwnPropertySymbols},99:function(t,e,i){t.exports=i(100)}}]);