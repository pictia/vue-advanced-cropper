(window.webpackJsonp=window.webpackJsonp||[]).push([[6,27,48,49,50,66],{314:function(t,e,s){},327:function(t,e,s){t.exports=s.p+"assets/img/handler.d2843e4e.svg"},328:function(t,e,s){"use strict";s(314)},330:function(t,e,s){"use strict";s.r(e);var a=s(307),i={name:"CircleStencil",components:{PreviewResult:a.f,DraggableArea:a.d,DraggableElement:a.e},props:{image:{type:Object},resultCoordinates:{type:Object},stencilCoordinates:{type:Object}},computed:{style:function(){var t=this.stencilCoordinates,e=t.height,s=t.width,a=t.left,i=t.top;return{width:"".concat(s,"px"),height:"".concat(e,"px"),left:"".concat(a,"px"),top:"".concat(i,"px")}}},methods:{onMove:function(t){this.$emit("move",t)},onHandlerMove:function(t){var e=t.shift(),s=e.left/2,i=-e.top/2;this.$emit("resize",new a.h({left:s,right:s,top:i,bottom:i},{compensate:!0}))},aspectRatios:function(){return{minimum:1,maximum:1}}}},n=(s(328),s(41)),r=Object(n.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"circle-stencil",style:this.style},[e("draggable-element",{staticClass:"circle-stencil__handler",on:{drag:this.onHandlerMove}},[e("img",{staticClass:"circle-stencil__icon",attrs:{src:s(327),alt:""}})]),this._v(" "),e("draggable-area",{on:{move:this.onMove}},[e("preview-result",{staticClass:"circle-stencil__preview",attrs:{image:this.image,"stencil-coordinates":this.stencilCoordinates}})],1)],1)}),[],!1,null,null,null);e.default=r.exports},331:function(t,e,s){t.exports=s.p+"assets/img/resize-event.d2e43b3d.svg"},346:function(t,e,s){},347:function(t,e,s){},348:function(t,e,s){},349:function(t,e,s){},369:function(t,e,s){t.exports=s.p+"assets/img/move-event.f6987e0e.svg"},370:function(t,e,s){t.exports=s.p+"assets/img/example-stencil-elements.3424a625.svg"},381:function(t,e,s){t.exports=s.p+"assets/img/logo.b4409112.svg"},382:function(t,e,s){t.exports=s.p+"assets/img/image.1616fde2.jpg"},383:function(t,e,s){"use strict";s(346)},384:function(t,e,s){t.exports=s.p+"assets/img/image.e3fb8d3e.jpg"},385:function(t,e,s){"use strict";s(347)},386:function(t,e,s){t.exports=s.p+"assets/img/source.17b53cf9.svg"},387:function(t,e,s){"use strict";s(348)},388:function(t,e,s){"use strict";s(349)},434:function(t,e,s){},435:function(t,e,s){},460:function(t,e,s){"use strict";s.r(e);var a=s(307),i=s(330),n={name:"CircleExample",components:{Cropper:a.c},data:function(){return{stencil:i.default}}},r=(s(383),s(41)),o=Object(r.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("Cropper",{staticClass:"circle-example",attrs:{src:s(382),"stencil-component":this.stencil}})}),[],!1,null,null,null);e.default=o.exports},461:function(t,e,s){"use strict";s.r(e);var a={name:"CommonExample",components:{Cropper:s(307).c}},i=(s(385),s(41)),n=Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("Cropper",{staticClass:"common-example",attrs:{src:s(384),"stencil-props":{aspectRatio:10/12,class:"common-example__stencil",previewClass:"common-example__preview",linesClasses:{default:"common-example__line",hover:"common-example__line--hover"},handlersClasses:{default:"common-example__handler",over:"common-example__handler--hover"}}}})}),[],!1,null,null,null);e.default=n.exports},462:function(t,e,s){"use strict";s.r(e);var a={name:"ExampleWrapper",props:{href:{type:String}}},i=(s(387),s(41)),n=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-example-wrapper"},[e("a",{staticClass:"home-example-wrapper__code-link",attrs:{href:this.href}},[e("img",{attrs:{src:s(386)}})]),this._v(" "),this._t("default")],2)}),[],!1,null,null,null);e.default=n.exports},463:function(t,e,s){"use strict";s.r(e);var a={name:"HomeButton",props:{icon:{type:String,required:!0},text:{type:String,required:!0},caption:{type:String},action:{type:Boolean,default:!1}}},i=(s(388),s(41)),n=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:"home-button "+(this.action?"home-button--action":"")},[e("div",{staticClass:"home-button__icon-part"},[e("img",{staticClass:"home-button__icon",attrs:{src:this.icon}})]),this._v(" "),e("div",{staticClass:"home-button__text-part"},[e("div",{staticClass:"home-button__text"},[this._v("\n      "+this._s(this.text)+"\n    ")]),this._v(" "),e("div",{staticClass:"home-button__caption"},[this._v("\n      "+this._s(this.caption)+"\n    ")])])])}),[],!1,null,null,null);e.default=n.exports},557:function(t,e,s){t.exports=s.p+"assets/img/logo.1390f372.svg"},558:function(t,e,s){t.exports=s.p+"assets/img/photo.59242653.jpeg"},559:function(t,e,s){t.exports=s.p+"assets/img/example-cropper.d3639a11.svg"},560:function(t,e,s){t.exports=s.p+"assets/img/example-stencil.ca877ef0.svg"},561:function(t,e,s){t.exports=s.p+"assets/img/presentation-bottom-border.a1d4accf.svg"},562:function(t,e,s){t.exports=s.p+"assets/img/gray-bottom-border.ec9a37dd.svg"},563:function(t,e,s){t.exports=s.p+"assets/img/white-bottom-border.cad5c704.svg"},564:function(t,e,s){"use strict";s(434)},565:function(t,e,s){"use strict";s(435)},628:function(t,e,s){"use strict";s.r(e);var a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navigation"},[s("div",{staticClass:"navigation__frameworks"},[s("a",{staticClass:"navigation__link navigation__link--active",attrs:{href:"/"}},[t._v(" Vue ")]),t._v(" "),s("span",{staticClass:"navigation__link navigation__link--blocked",attrs:{href:"/"}},[t._v("\n\t\t\t\tReact\n\t\t\t\t"),s("span",{staticClass:"tooltip"},[t._v(" I plan to port this library after the end of beta testing Vue library ")])])]),t._v(" "),s("div",{staticClass:"navigation__sections"},[s("a",{staticClass:"navigation__link navigation__link--active",attrs:{href:"/#"}},[t._v(" Home ")]),t._v(" "),s("a",{staticClass:"navigation__link",attrs:{href:"/vue-advanced-cropper/introduction/getting-started.html"}},[t._v(" Docs ")]),t._v(" "),s("a",{staticClass:"navigation__link",attrs:{href:"http://github.com/Norserium/vue-advanced-cropper/",target:"_blank"}},[t._v("\n\t\t\t\tGithub\n\t\t\t")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"presentation__title-wrapper"},[e("h1",{staticClass:"presentation__title"},[this._v("Advanced Cropper")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"presentation__border"},[e("img",{attrs:{src:s(561),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-border section-border--hide-mobile"},[e("img",{attrs:{src:s(562)}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"feature-section"},[a("div",{staticClass:"container container--narrow"},[a("h1",{staticClass:"title"},[t._v("Features")]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"feature"},[a("div",{staticClass:"feature__title"},[t._v("Fully Customisable")]),t._v(" "),a("div",{staticClass:"feature__text"},[t._v("\n\t\t\t\t\t\tCustomise almost any aspect of the cropper component, or use it right out of the box.\n\t\t\t\t\t")])]),t._v(" "),a("div",{staticClass:"feature"},[a("div",{staticClass:"feature__title"},[t._v("Mobile Support")]),t._v(" "),a("div",{staticClass:"feature__text"},[t._v("\n\t\t\t\t\t\tVue Advanced Cropper supports desktop and mobile devices alike. Built in support for touch\n\t\t\t\t\t\tevents, cropper resizing, etc.\n\t\t\t\t\t")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"feature"},[a("div",{staticClass:"feature__title"},[t._v("Canvas / Coordinates")]),t._v(" "),a("div",{staticClass:"feature__text"},[t._v("\n\t\t\t\t\t\tThis Cropper can be used to create a canvas with a cropped area or just coordinates relative\n\t\t\t\t\t\tto the original image to crop it server-side in the future.\n\t\t\t\t\t")])]),t._v(" "),a("div",{staticClass:"feature"},[a("div",{staticClass:"feature__title"},[t._v("Advanced Features")]),t._v(" "),a("div",{staticClass:"feature__text"},[t._v("\n\t\t\t\t\t\tSet minimum and maximum aspect ratios, customizie minimum and maximum height and width, etc.\n\t\t\t\t\t")])])])]),t._v(" "),a("div",{staticClass:"section-border"},[a("img",{attrs:{src:s(563),alt:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("p",[this._v("\n\t\t\t\t\tAfter you\n\t\t\t\t\t"),e("a",{attrs:{href:"/vue-advanced-cropper/introduction/getting-started.html#package-installation"}},[this._v("have installed")]),this._v("\n\t\t\t\t\tthe cropper, it's very easy to integrate it in your website. The minimum working example of the\n\t\t\t\t\tcropper is presented below.\n\t\t\t\t")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("p",[this._v("\n\t\t\t\t\tThe goal of this library to give developers an opportunity create any cropper component easily\n\t\t\t\t\tand effortless. To achieve this goal, the cropper is divided into two main parts: the broadly\n\t\t\t\t\tcustomizable "),e("b",[this._v("cropper")]),this._v(" and the arbitrary component "),e("b",[this._v("stencil")]),this._v(".\n\t\t\t\t")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col"},[s("p",[s("b",[t._v("Cropper")]),t._v("\n\t\t\t\t\t\tis the root component of this library. It contains the coordinates of the currently cropped\n\t\t\t\t\t\tarea (left, top, width, height) relative to the original image coordinates. These\n\t\t\t\t\t\tcoordinates can be imagined like a box. That's responsible for:\n\t\t\t\t\t")]),t._v(" "),s("ul",[s("li",[t._v("resizing and moving the box")]),t._v(" "),s("li",[t._v("displaying the cropped image and fitting it to the container")]),t._v(" "),s("li",[t._v("setting default coordinates")]),t._v(" "),s("li",[t._v("cropping canvas area")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("p",[this._v("\n\t\t\t\t\tThe Cropper operates the abstract box that represents the currently cropped area, but it only\n\t\t\t\t\tabstracts a couple of coordinates. Visualizing the cropped area and giving the user the ability\n\t\t\t\t\tto interact with the cropper is what the "),e("b",[this._v("stencil")]),this._v(" component is used for.\n\t\t\t\t")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col"},[s("p",[t._v("\n\t\t\t\t\t\tThe Stencil can literally be any arbitrary component, but in order for it to make sense\n\t\t\t\t\t\tthere are some requirements:\n\t\t\t\t\t")]),t._v(" "),s("ul",[s("li",[t._v("\n\t\t\t\t\t\t\tit should be inscibed to box is represented by coordinates ("),s("b",[t._v("width")]),t._v(", "),s("b",[t._v("height")]),t._v(",\n\t\t\t\t\t\t\t"),s("b",[t._v("left")]),t._v(", "),s("b",[t._v("top")]),t._v(")\n\t\t\t\t\t\t")]),t._v(" "),s("li",[t._v("\n\t\t\t\t\t\t\tif the stencil has aspect ratios it should have an "),s("b",[t._v("aspectRatios")]),t._v(" method to inform\n\t\t\t\t\t\t\tthe cropper resize algorithm (this method should return an object with minimum and\n\t\t\t\t\t\t\tmaximum aspect ratio values)\n\t\t\t\t\t\t")]),t._v(" "),s("li",[t._v("it should emit "),s("b",[t._v("resize")]),t._v(" and "),s("b",[t._v("move")]),t._v(" events")]),t._v(" "),s("li",[t._v("it should display the cropped part of a image")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("p",[this._v("\n\t\t\t\t\tResize and move events are very flexible and allow you to create almost any moving and\n\t\t\t\t\tespecially resizng logic (more details\n\t\t\t\t\t"),e("a",{staticClass:"link",attrs:{href:"/vue-advanced-cropper/events/move-event.html"}},[this._v("here")]),this._v(")\n\t\t\t\t")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("p",[this._v("\n\t\t\t\t\tThe typical stencil components are represented below. They include handlers that emit resize\n\t\t\t\t\tevents, a movable area that emits move events, and a cropped image preview.\n\t\t\t\t")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("p",[this._v("\n\t\t\t\t\tThere are default customizable components out of the box that allow you to create your first\n\t\t\t\t\tcropper component within five minutes.\n\t\t\t\t")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("p",[this._v("\n\t\t\t\t\tThat’s pretty much all you need to know to get started. Below there are a couple different\n\t\t\t\t\tstencil examples to show what you can create.\n\t\t\t\t")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer__contacts"},[e("div",{staticClass:"footer__name"},[this._v("Norserium")]),this._v(" "),e("a",{staticClass:"footer__email",attrs:{href:"mailto:norserium@gmail.com",rel:"nofollow"}},[this._v(" norserium@gmail.com ")])])}],i=s(307),n=s(460),r=s(461),o=s(462),c={name:"Home",components:{HomeButton:s(463).default,ExampleWrapper:o.default,Cropper:i.c,CommonExample:r.default,CircleExample:n.default},data:function(){return{manager:"npm"}}},l=(s(564),s(565),s(41)),v=Object(l.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-page"},[t._m(0),t._v(" "),a("div",{staticClass:"presentation"},[a("div",{staticClass:"container container--centered"},[a("img",{staticClass:"presentation__logo",attrs:{src:s(557)}}),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"presentation__subtitle"},[t._v("\n\t\t\t\tThe flexible Vue cropper component that gives you the opportunity to create almost any cropper that\n\t\t\t\tyou desire. Identically easy to use and customize.\n\t\t\t")]),t._v(" "),a("div",{staticClass:"presentation__install"},[t._v("\n\t\t\t\t"+t._s("npm"===t.manager?"npm install -S vue-advanced-cropper@release":"yarn add vue-advanced-cropper@release")+"\n\t\t\t\t"),a("div",{staticClass:"presentation__package-managers"},[a("span",{class:"presentation__package-manager "+("yarn"===t.manager?"presentation__package-manager--active":""),on:{click:function(e){t.manager="yarn"}}},[t._v("\n\t\t\t\t\t\tyarn\n\t\t\t\t\t")]),t._v("\n\t\t\t\t\t/\n\t\t\t\t\t"),a("span",{class:"presentation__package-manager "+("npm"===t.manager?"presentation__package-manager--active":""),on:{click:function(e){t.manager="npm"}}},[t._v("\n\t\t\t\t\t\tnpm\n\t\t\t\t\t")])])])]),t._v(" "),t._m(2)]),t._v(" "),a("div",{staticClass:"demo-section"},[a("div",{staticClass:"container container--centered"},[a("cropper",{staticClass:"demo-cropper",attrs:{src:s(558),"image-class":"demo-cropper__image","min-width":20,"min-height":20,"stencil-props":{maxAspectRatio:16/9,minAspectRatio:9/16,linesClasses:{default:"demo-cropper__line",hover:"demo-cropper__line--hover"},handlersClasses:{default:"demo-cropper__handler",hover:"demo-cropper__handler--hover"}},"default-boundaries":"fit"}})],1),t._v(" "),t._m(3)]),t._v(" "),t._m(4),t._v(" "),a("div",{staticClass:"concept-section"},[a("div",{staticClass:"container container--narrow"},[a("h1",{staticClass:"title"},[t._v("Minimum Example")]),t._v(" "),t._m(5),t._v(" "),a("div",[a("Content",{attrs:{"slot-key":"minimum-example"}})],1)]),t._v(" "),a("div",{staticClass:"container container--narrow"},[a("h1",{staticClass:"title"},[t._v("Concepts")]),t._v(" "),t._m(6),t._v(" "),a("h2",{staticClass:"subtitle"},[t._v("What is the cropper?")]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"example-cropper"},[a("img",{attrs:{src:s(559)}})])]),t._v(" "),t._m(7)]),t._v(" "),a("h2",{staticClass:"subtitle"},[t._v("What is the stencil?")]),t._v(" "),t._m(8),t._v(" "),a("div",{staticClass:"shift"}),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"example-stencil"},[a("img",{attrs:{src:s(560)}})])]),t._v(" "),t._m(9)]),t._v(" "),t._m(10),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"example-event"},[a("img",{attrs:{src:s(331)}})])]),t._v(" "),a("div",{staticClass:"col"},[a("div",{staticClass:"example-event"},[a("img",{attrs:{src:s(369)}})])])]),t._v(" "),t._m(11),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"example-stencil-elements"},[a("img",{attrs:{src:s(370)}})])]),t._v(" "),t._m(12),t._v(" "),a("div",[a("Content",{attrs:{"slot-key":"custom-stencil"}})],1),t._v(" "),t._m(13),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("ExampleWrapper",[a("CircleExample")],1)],1),t._v(" "),a("div",{staticClass:"col"},[a("ExampleWrapper",[a("CommonExample")],1)],1)])])]),t._v(" "),a("div",{staticClass:"footer"},[a("div",{staticClass:"footer__center-block"},[a("img",{staticClass:"footer__logo",attrs:{src:s(381)}}),t._v(" "),t._m(14)])])])}),a,!1,null,null,null);e.default=v.exports}}]);