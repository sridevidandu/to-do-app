(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{21:function(e,t,n){e.exports=n(33)},26:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),i=(n(26),n(27),n(19)),l=n(1),u=n(14),m=n(15),s=n(18),d=function(e){var t=e.items;return r.a.createElement("div",null,r.a.createElement(s.a,{duration:500,easing:"ease-in-out"},t.map((function(t){return r.a.createElement("div",{className:"list",key:t.key},r.a.createElement("div",{className:"item"},r.a.createElement("input",{type:"text",id:t.key,value:t.text,onChange:function(n){return e.editItem(n.target.value,t.key)}}),r.a.createElement("span",{className:"fa fa-trash-o","aria-hidden":"true",onClick:function(){return e.deleteItem(t.key)}})))}))))};var f=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)({text:"",key:""}),i=Object(m.a)(c,2),l=i[0],s=i[1];return r.a.createElement("div",{className:"homepage"},r.a.createElement("header",null,r.a.createElement("form",{id:"to-do-form",onSubmit:function(e){e.preventDefault(),console.log("List Item :",l),l.text&&o([].concat(Object(u.a)(n),[l]))}},r.a.createElement("input",{type:"text",placeholder:"Enter here",value:l.text,onChange:function(e){return function(e){s({text:e.target.value,key:Date.now()}),console.log()}(e)}}),r.a.createElement("button",{type:"Submit"}," Add ")),r.a.createElement(d,{items:n,deleteItem:function(e){var t=n.filter((function(t){return t.key!==e}));o(Object(u.a)(t))},editItem:function(e,t){var a=n.map((function(n){return n.key===t&&(n.text=e),n}));o(a)}})))};var v=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(l.a,{exact:!0,path:"/",component:f})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.c7e17cbe.chunk.js.map