(window.webpackJsonp=window.webpackJsonp||[]).push([[73,83],{360:function(t,e,i){"use strict";i.r(e);var o=i(307),n={components:{PreviewResult:o.f,BoundingBox:o.a,DraggableArea:o.d},props:["image","stencilCoordinates","aspectRatio","minAspectRatio","maxAspectRatio"],computed:{style:function(){var t=this.stencilCoordinates,e=t.height,i=t.width,o=t.left,n=t.top;return{position:"absolute",width:"".concat(i,"px"),height:"".concat(e,"px"),left:"".concat(o,"px"),top:"".concat(n,"px")}}},methods:{onMove:function(t){this.$emit("move",t)},onResize:function(t){this.$emit("resize",t)},aspectRatios:function(){return{minimum:this.aspectRatio||this.minAspectRatio,maximum:this.aspectRatio||this.maxAspectRatio}}}},s=i(41),a=Object(s.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{style:this.style},[e("BoundingBox",{on:{resize:this.onResize}},[e("DraggableArea",{on:{move:this.onMove}},[e("PreviewResult",{attrs:{image:this.image,"stencil-coordinates":this.stencilCoordinates}})],1)],1)],1)}),[],!1,null,null,null);e.default=a.exports},647:function(t,e,i){"use strict";i.r(e);var o=i(307),n=i(360),s={components:{Cropper:o.c,SimplestStencil:n.default},data:function(){return{img:"https://images.unsplash.com/photo-1571040895662-2daba5bb466f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"}}},a=i(41),c=Object(a.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("cropper",{attrs:{src:this.img,"stencil-component":this.$options.components.SimplestStencil}})}),[],!1,null,null,null);e.default=c.exports}}]);