(window.webpackJsonp=window.webpackJsonp||[]).push([[11,47,64,65],{303:function(t,e,a){},304:function(t,e,a){t.exports=a.p+"assets/img/link.03ea4d17.svg"},305:function(t,e,a){"use strict";a(303)},306:function(t,e,a){"use strict";a.r(e);var s={props:{href:{type:String,default:""},noBorder:{type:Boolean,default:!1}}},r=(a(305),a(41)),n=Object(r.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"example-wrapper",class:{"example-wrapper--no-border":this.noBorder}},[this._t("default"),this._v(" "),this.href?e("a",{staticClass:"example-wrapper__icon",attrs:{href:this.href,title:"Full Source",target:"_blank",rel:"nofollow noopener"}},[e("img",{attrs:{src:a(304)}})]):this._e()],2)}),[],!1,null,null,null);e.default=n.exports},311:function(t,e,a){},312:function(t,e,a){},318:function(t,e,a){"use strict";a(311)},319:function(t,e,a){"use strict";a(312)},325:function(t,e,a){"use strict";a.r(e);a(318);var s=a(41),r=Object(s.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vertical-buttons"},[this._t("default")],2)}),[],!1,null,null,null);e.default=r.exports},326:function(t,e,a){"use strict";a.r(e);a(319);var s=a(41),r=Object(s.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",t._b({staticClass:"square-button",on:{click:function(e){return t.$emit("click",e)}}},"div",t.$attrs,!1),[t._t("default")],2)}),[],!1,null,null,null);e.default=r.exports},419:function(t,e,a){},537:function(t,e,a){"use strict";a(419)},611:function(t,e,a){"use strict";a.r(e);var s=a(307),r=a(306),n=a(325),i=a(326),l={components:{Cropper:s.c,ExampleWrapper:r.default,VerticalButtons:n.default,SquareButton:i.default},data:function(){return{image:"https://images.unsplash.com/photo-1596473322597-91d5b6938b8a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",adjustStencil:!1}}},c=(a(537),a(41)),u=Object(c.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("example-wrapper",{staticClass:"adjust-stencil-example",attrs:{href:"https://github.com/Norserium/vue-advanced-cropper/blob/master/example/docs/.vuepress/components/adjust-stencil-example.vue"}},[a("cropper",{ref:"cropper",attrs:{src:t.image,"resize-image":{adjustStencil:t.adjustStencil},"default-boundaries":"fill","image-restriction":"fit-area","default-size":{width:594,height:400},"default-position":{left:19,top:209},"default-visible-area":{width:594,height:450,left:19,top:183}}}),t._v(" "),a("label",{staticClass:"adjust-stencil-example__adjust"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.adjustStencil,expression:"adjustStencil"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.adjustStencil)?t._i(t.adjustStencil,null)>-1:t.adjustStencil},on:{change:[function(e){var a=t.adjustStencil,s=e.target,r=!!s.checked;if(Array.isArray(a)){var n=t._i(a,null);s.checked?n<0&&(t.adjustStencil=a.concat([null])):n>-1&&(t.adjustStencil=a.slice(0,n).concat(a.slice(n+1)))}else t.adjustStencil=r},function(e){return t.$refs.cropper.reset()}]}}),t._v("\n\t\tAdjust stencil\n\t")])],1)}),[],!1,null,null,null);e.default=u.exports}}]);