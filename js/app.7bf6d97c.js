(function(e){function t(t){for(var r,o,i=t[0],s=t[1],l=t[2],c=0,f=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c456702a"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"3079c8ca"}[e]+".css",a=s.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var l=u[i],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===r||c===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){l=f[i],c=l.getAttribute("data-href");if(c===r||c===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],d.parentNode.removeChild(d),n(u)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var f=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/tfg-fomo/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=c;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},4218:function(e,t,n){e.exports=n.p+"img/notyet.2db864a7.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)},a=[],u=(n("034f"),n("2877")),i={},s=Object(u["a"])(i,o,a,!1,null,null,null),l=s.exports,c=n("2f62");r["default"].use(c["a"]);var f=new c["a"].Store({state:{},mutations:{},actions:{},modules:{}}),d=n("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home",class:e.$mq},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),e._m(0),r("h3",[e._v("¿Quieres saber cómo puedes salvar el futuro de la humanidad? ")]),r("b-button",{on:{click:function(t){return e.onClick()}}},[e._v("¡SI!")]),r("b-modal",{ref:"my-modal",attrs:{size:"lg","hide-footer":"","hide-header":"","no-close-on-backdrop":!0,centered:""}},[r("div",{staticClass:"d-block text-center"},[r("img",{staticStyle:{"max-width":"100%","margin-bottom":"20px"},attrs:{src:e.image}}),r("h3",[e._v("Antes de empezar a jugar, te pido que completes este cuestionario. "),r("a",{attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLSc6ZoZ_CBpYMcCkhM-4tKUJz_v55OR9JOMW6xfrMwra8IVO7w/viewform",target:"_blank"}},[r("img",{staticStyle:{height:"36px"},attrs:{src:n("de22")}})])]),r("p",[e._v("Una vez hayas terminado el cuestionario, dale al siguiente botón.")]),r("b-button",{attrs:{variant:"light"}},[r("router-link",{staticStyle:{color:"black"},attrs:{id:"link",to:"/play"}},[e._v("Ahora si, ¿empezamos?")])],1)],1)])],1)},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("El lado oscuro de las redes sociales - "),n("span",{staticStyle:{"font-size":"28px"}},[e._v("FoMO")])])}],h=n("4218"),b=n.n(h),g=(n("de22"),{name:"Home",data(){return{image:b.a}},methods:{onClick(){this.$refs["my-modal"].show()}}}),v=g,y=(n("f7a3"),Object(u["a"])(v,p,m,!1,null,"e602f0a6",null)),_=y.exports;r["default"].use(d["a"]);const w=[{path:"/",name:"Home",component:_},{path:"/play",name:"Play",component:function(){return n.e("about").then(n.bind(null,"8363"))}},{path:"/solution",name:"Solution",component:function(){return n.e("about").then(n.bind(null,"1bc4"))}}],k=new d["a"]({mode:"history",routes:w});var x=k,O=n("5f5b"),S=n("b1e0"),j=n("5247"),C=n.n(j),E=n("e956"),P=n.n(E),A=n("890b"),M=n.n(A),T=n("660e");n("f9e3"),n("2dd8");r["default"].use(O["a"]),r["default"].use(S["a"]),r["default"].use(C.a),r["default"].use(P.a),r["default"].use(M.a),r["default"].use(T["a"],{breakpoints:{mobil:450,tablet:1024,laptop:1/0}}),r["default"].config.productionTip=!1,new r["default"]({store:f,router:x,render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,t,n){},"9a60":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},de22:function(e,t,n){e.exports=n.p+"img/googleforms.b84e9898.png"},f7a3:function(e,t,n){"use strict";n("9a60")}});
//# sourceMappingURL=app.7bf6d97c.js.map