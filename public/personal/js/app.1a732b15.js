(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/personal/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"4de4e":function(t,e,n){"use strict";n("d402")},"56d7":function(t,e,n){"use strict";n.r(e);n("96cf");var r=n("1da1"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"page"}},[n("div",{staticClass:"loading"},[n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1),n("div",{attrs:{id:"header"}},[n("div",{attrs:{id:"logo"}},[n("img",{attrs:{src:t.$root.avatar,alt:""}}),n("h1",[n("a",{attrs:{href:"#"}},[t._v(t._s(t.$root.personal_name))])])]),n("div",{attrs:{id:"menu"}},[n("ul",[n("router-link",{attrs:{to:"/"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.href,a=e.isExactActive;return[n("li",{class:[a&&"current_page_item"]},[n("a",{attrs:{href:r}},[t._v("首頁")])])]}}])}),n("router-link",{attrs:{to:"/Work"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.href,a=e.isExactActive;return[n("li",{class:[a&&"current_page_item"]},[n("a",{attrs:{href:r}},[t._v("作品專區")])])]}}])}),n("router-link",{attrs:{to:"/Contact"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.href,a=e.isExactActive;return[n("li",{class:[a&&"current_page_item"]},[n("a",{attrs:{href:r}},[t._v("聯絡我")])])]}}])})],1)])]),n("router-view")],1)},i=[],s={},c=s,u=(n("4de4e"),n("2877")),l=n("6544"),p=n.n(l),f=n("490a"),d=Object(u["a"])(c,o,i,!1,null,"0097f5c3",null),_=d.exports;p()(d,{VProgressCircular:f["a"]});var v=n("f309");a["a"].use(v["a"]);var h=new v["a"]({}),m=n("2f62");a["a"].use(m["a"]);var b=new m["a"].Store({state:{},mutations:{},actions:{},modules:{}}),g=n("8c4f"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"main"}},[n("div",{attrs:{id:"welcome"},domProps:{innerHTML:t._s(t.$root.webs.home_page.page_content)}}),n("div",{attrs:{id:"featured"}},[t._m(0),n("ul",{staticClass:"style1"},t._l(t.$root.works,(function(e,r){return n("li",{key:r,staticClass:"first"},[n("p",{staticClass:"date"},[n("a",{attrs:{href:"#"}},[t._v(" "+t._s(e.job_start_date)+" "+t._s(null!=e.job_end_date?e.job_end_date:"")+" ")])]),n("h3",[t._v(t._s(e.job_company)+" - "+t._s(e.job_title))]),n("p",[t._v(t._s(e.job_content))])])})),0)]),t._m(1)])},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("h2",[t._v("工作經歷")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"copyright"}},[n("span",[t._v("© Untitled. All rights reserved. | Photos by "),n("a",{attrs:{href:"http://fotogrph.com/"}},[t._v("Fotogrph")])]),n("span",[t._v("Design by "),n("a",{attrs:{href:"http://templated.co",rel:"nofollow"}},[t._v("TEMPLATED")]),t._v(".")])])}],x={},j=x,k=Object(u["a"])(j,w,y,!1,null,null,null),$=k.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"main"}},[n("div",{attrs:{id:"welcome"},domProps:{innerHTML:t._s(t.$root.webs.work_page.page_content)}})])},E=[],P={},C=P,S=Object(u["a"])(C,O,E,!1,null,null,null),W=S.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"main"}},[n("div",{attrs:{id:"welcome"},domProps:{innerHTML:t._s(t.$root.webs.contact_page.page_content)}})])},T=[],G={},A=G,I=Object(u["a"])(A,M,T,!1,null,null,null),L=I.exports;a["a"].use(g["a"]);var H=[{path:"/",name:"Home",component:$},{path:"/Work",name:"Work",component:W},{path:"/Contact",name:"Contact",component:L}],q=new g["a"]({routes:H}),D=q,J=n("bc3a"),R=n.n(J);a["a"].config.productionTip=!1,a["a"].prototype.$axios=R.a,R.a.interceptors.response.use((function(t){return t.data}),(function(t){return t.response})),new a["a"]({vuetify:h,store:b,router:D,axios:R.a,render:function(t){return t(_)},data:function(){return{title:"",ico:"",avatar:"http://localhost:8081/images/pic02.jpg",personal_name:"Privy",webs:{home_page:{page_content:""},work_page:{page_content:""},contact_page:{page_content:""}},works:[]}},created:function(){this.Init()},watch:{title:function(){document.title=this.title},ico:function(){document.querySelector("link[rel=icon]").href=this.ico}},methods:{Init:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.GetWebInfo();case 2:return e.next=4,t.GetExperience();case 4:return e.next=6,t.GetWebContent();case 6:return e.next=8,document.querySelector(".loading").classList.add("close");case 8:case"end":return e.stop()}}),e)})))()},GetWebInfo:function(){var t=this;this.$axios.get("/WebInfo").then((function(e){t.title=e.data.web_name,t.ico=e.data.web_ico,t.avatar=e.data.avatar,t.personal_name=e.data.personal_name}))},GetExperience:function(){var t=this;this.$axios.get("/Experience").then((function(e){t.works=e.data}))},GetWebContent:function(){var t=this;this.$axios.get("/WebContent").then((function(e){t.webs=e.data}))}}}).$mount("#app")},d402:function(t,e,n){}});
//# sourceMappingURL=app.1a732b15.js.map