(window.webpackJsonp=window.webpackJsonp||[]).push([[150,151],{"6acW":function(n,t,e){var r=e("dt0z"),o=e("gQMU");n.exports=function(n){return o(r(n).toLowerCase())}},KxBF:function(n,t){n.exports=function(n,t,e){var r=-1,o=n.length;t<0&&(t=-t>o?0:o+t),(e=e>o?o:e)<0&&(e+=o),o=t>e?0:e-t>>>0,t>>>=0;for(var a=Array(o);++r<o;)a[r]=n[r+t];return a}},QahQ:function(n,t,e){"use strict";e("2Spj");var r=e("RIqP"),o=e.n(r),a=e("lwsE"),i=e.n(a),c=e("W8MJ"),u=e.n(c),s=e("a1gu"),l=e.n(s),p=e("Nsbk"),f=e.n(p),d=e("PJYZ"),h=e.n(d),v=e("7W2i"),m=e.n(v),y=e("pVnL"),b=e.n(y),g=e("lSNA"),k=e.n(g),w=e("cDcd"),x=e.n(w),S=e("/MKj"),A=e("17x9"),C=e.n(A),M=e("jNdJ"),O=function(n){function t(){var n,e;i()(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return e=l()(this,(n=f()(t)).call.apply(n,[this].concat(o))),k()(h()(e),"state",{adSeen:!1}),k()(h()(e),"onAdSeen",(function(n){!e.state.adSeen&&n.intersectionRatio>=1&&e.setState({adSeen:!0},(function(){e.metrics("View")}))})),e}return m()(t,n),u()(t,[{key:"metrics",value:function(n){var t=this.props,e=t.sendMetrics,r=t.adUnit;e&&e(n,r)}},{key:"render",value:function(){var n=this.props,t=n.children,e=n.component,r=n.slot,a=n.adUnit,i=n.minItems,c=(a&&a.metadata||this.props).position,u=x.a.Children.toArray(t);if(u.length<i||!a)return t;var s={root:null,rootMargin:"0px",threshold:1,onChange:this.onAdSeen};return x.a.createElement(w.Fragment,null,[].concat(o()(u.slice(0,c)),[x.a.createElement(M.a,b()({key:"NativeAd-".concat(r,"-").concat(c)},s),x.a.createElement(e,{promoMeta:a,ref:this.onAdLoad,onClick:this.metrics.bind(this,"Click"),onClose:this.props.onClose}))],o()(u.slice(c,u.length))))}}]),t}(w.PureComponent);k()(O,"propTypes",{component:C.a.node.isRequired,slot:C.a.string.isRequired,position:C.a.number,sendMetrics:C.a.func,minItems:C.a.number,adUnit:C.a.shape({ad_unit_type:C.a.string,heading:C.a.string,subtitle:C.a.string,cta_link:C.a.string,cta_text:C.a.string,metadata:C.a.shape({position:C.a.number,background:C.a.string,ctas_arr:C.a.array})}),onClick:C.a.func,children:C.a.oneOfType([C.a.arrayOf(C.a.node),C.a.node])}),k()(O,"defaultProps",{minItems:0,position:0,children:null});t.a=Object(S.b)((function(n,t){var e=t.slot,r="hackerrankx"===n.metadata.productNamespace?n.work.nativeAds:n.community.nativeAds;return{adUnit:r&&r[e]}}))(O)},hHhE:function(n,t,e){var r=e("XKFU");r(r.S,"Object",{create:e("Kuth")})},jNdJ:function(n,t,e){"use strict";e("VRzm");var r=e("PJYZ"),o=e.n(r),a=e("lwsE"),i=e.n(a),c=e("W8MJ"),u=e.n(c),s=e("a1gu"),l=e.n(s),p=e("Nsbk"),f=e.n(p),d=e("7W2i"),h=e.n(d),v=e("w13Q"),m=e("QILm"),y=e.n(m),b=e("lSNA"),g=e.n(b),k=e("cDcd"),w=e.n(k);var x=function(n){function t(){return i()(this,t),l()(this,f()(t).apply(this,arguments))}return h()(t,n),u()(t,[{key:"render",value:function(){return this.props.children}}]),t}(k.PureComponent),S=function(n){function t(){var n,e;i()(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return e=l()(this,(n=f()(t)).call.apply(n,[this].concat(a))),g()(o()(e),"state",{observer:null}),g()(o()(e),"hasUnmounted",!1),e}return h()(t,n),u()(t,[{key:"loadObserverModules",value:function(){return new Promise((function(n,t){var r;r=t,Promise.all([e.e(7),e.e(86)]).then(function(t){void 0===window.IntersectionObserver&&(e("T39b"),e("9AAn"),e("Wr5T"));var r=e("fadw").default;n(r)}.bind(null,e)).catch(r)}))}},{key:"componentDidMount",value:function(){var n=this;this.loadObserverModules().then((function(t){n.hasUnmounted||n.setState({observer:t})}))}},{key:"componentWillUnmount",value:function(){this.hasUnmounted=!0}},{key:"render",value:function(){var n=this.props,t=n.children,e=y()(n,["children"]),r=this.state.observer,o=r||k.Fragment,a=r?e:{};return w.a.createElement(o,a,w.a.createElement(x,null,w.a.Children.only(t)))}}]),t}(k.PureComponent);t.a=S,Object(v.d)("hackerrank_r_intersection_observer.js")},oShl:function(n,t,e){var r=e("Nsbk"),o=e("SksO"),a=e("xfeJ"),i=e("sXyB");function c(t){var e="function"==typeof Map?new Map:void 0;return n.exports=c=function(n){if(null===n||!a(n))return n;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(n))return e.get(n);e.set(n,t)}function t(){return i(n,arguments,r(this).constructor)}return t.prototype=Object.create(n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),o(t,n)},c(t)}n.exports=c},sXyB:function(n,t,e){var r=e("SksO");function o(t,e,a){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}()?n.exports=o=function(n,t,e){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(n,o));return e&&r(a,e.prototype),a}:n.exports=o=Reflect.construct,o.apply(null,arguments)}n.exports=o},u6S6:function(n,t,e){var r=e("6acW"),o=e("sgoq")((function(n,t,e){return t=t.toLowerCase(),n+(e?r(t):t)}));n.exports=o},wy8a:function(n,t,e){var r=e("KxBF");n.exports=function(n,t,e){var o=n.length;return e=void 0===e?o:e,!t&&e>=o?n:r(n,t,e)}},xfeJ:function(n,t){n.exports=function(n){return-1!==Function.toString.call(n).indexOf("[native code]")}}}]);
//# sourceMappingURL=https://preview.hackerrank.com/fcore-assets/sourcemaps/hackerrank_r_vendors~challenge_list-08d235bed9.js.map