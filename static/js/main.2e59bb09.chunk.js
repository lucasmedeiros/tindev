(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,a){},114:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(56),l=a.n(c),o=(a(69),a(9)),u=a(13),s=a(23),i=a.n(s),m=function(e,t){return e?t(e):null},p=(a(70),a(149)),f=new p.a(JSON.parse(m("tindev_user",function(e){var t=localStorage.getItem(e);return t||null}))),E={login:function(e){var t,a;t="tindev_user",a=JSON.stringify(e),m(t,function(e){localStorage.setItem(e,a)}),f.next(e)},logout:function(){var e;m(e="tindev_user",function(t){return localStorage.removeItem(e),t}),f.next(null)},currentUser:f.asObservable(),get currentUserValue(){return f.value}};var v=function(e){var t=e.history;return Object(n.useLayoutEffect)(function(){m(E.currentUserValue,function(e){t.push("/dev")})}),r.a.createElement("section",{className:"login-container"},r.a.createElement("article",{className:"login-center"},r.a.createElement("img",{src:i.a,alt:"Logo da Tindev"}),r.a.createElement("a",{href:"https://tindev-backend-lucasmedeiros.herokuapp.com/auth/login"},"Logar com GITHUB!")))},d=a(5),h=a.n(d),b=a(11),g=a(10),k=a(57),N=a.n(k),w=a(58),O=a.n(w),j=a(59),x=a.n(j),y=a(60),_="https://tindev-backend-lucasmedeiros.herokuapp.com",S=a.n(y).a.create({baseURL:_}),U=(a(113),a(114),function(e){var t=e.matchDev,a=e.dismissView;return r.a.createElement("section",{className:"match-container"},r.a.createElement("p",{className:"match-title"},"Deu Match!"),r.a.createElement("div",{className:"match-image"},r.a.createElement("img",{src:t.avatar,alt:"match"})),r.a.createElement("strong",{className:"match-name"},t.name),r.a.createElement("p",{className:"match-bio"},t.bio),r.a.createElement("button",{type:"button",onClick:a},"fechar"))}),C=a(24);var L=function(){var e=Object(n.useState)([]),t=Object(g.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),o=Object(g.a)(l,2),u=o[0],s=o[1],i=Object(n.useState)(null),m=Object(g.a)(i,2),p=m[0],f=m[1],v=E.currentUserValue._id;Object(n.useEffect)(function(){!function(){var e=Object(b.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get("/devs",{headers:{user:v}});case 2:t=e.sent,c(t.data),s(!1);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[v]),Object(n.useEffect)(function(){N()(_,{query:{user:v}}).on("match",function(e){f(e)})},[v]);var d=function(e){c(a.filter(function(t){return t._id!==e}))},k=function(){var e=Object(b.a)(h.a.mark(function e(t){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.post("devs/".concat(t,"/likes"),null,{headers:{user:v}});case 2:d(t);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(b.a)(h.a.mark(function e(t){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.post("devs/".concat(t,"/dislikes"),null,{headers:{user:v}});case 2:d(t);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("main",null,r.a.createElement("section",{className:"main-container"},u?r.a.createElement(C.ClipLoader,{css:{marginTop:"100px"},sizeUnit:"px",size:40,color:"#999",loading:u}):a.length>0?r.a.createElement("ul",null,a.map(function(e){return r.a.createElement("li",{key:e._id},r.a.createElement("img",{src:e.avatar,alt:e.name}),r.a.createElement("footer",null,r.a.createElement("strong",null,e.name,r.a.createElement("span",null,"(",e.user,")")),r.a.createElement("p",null,e.bio||"---")),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{type:"button",onClick:function(){return w(e._id)}},r.a.createElement("img",{src:O.a,alt:"Dislike"})),r.a.createElement("button",{type:"button",onClick:function(){return k(e._id)}},r.a.createElement("img",{src:x.a,alt:"Like"}))))})):r.a.createElement("div",{className:"empty"},r.a.createElement("p",null,"N\xe3o h\xe1 usu\xe1rios dispon\xedveis no momento :(")),p&&r.a.createElement(U,{dismissView:function(){return f(null)},matchDev:p})))};var V=function(e){var t=e.history,a=e.match;return Object(n.useEffect)(function(){function e(){return(e=Object(b.a)(h.a.mark(function e(){var n,r,c;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.params.accessToken,r={token:n},e.prev=2,e.next=5,S.post("/devs",r);case 5:c=e.sent,E.login(c.data),t.push("/dev"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0),t.push("/");case 14:case"end":return e.stop()}},e,null,[[2,10]])}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),r.a.createElement("div",null)};var T=function(e){var t=e.history;return Object(n.useEffect)(function(){E.logout(),t.push("/")}),r.a.createElement("div",null)};a(137);var I=function(e){var t=e.click;return r.a.createElement("button",{className:"toggle-button",onClick:t},r.a.createElement("div",{className:"toggle-button-line"}),r.a.createElement("div",{className:"toggle-button-line"}),r.a.createElement("div",{className:"toggle-button-line"}))};a(138);var z=function(e){var t=e.className;return r.a.createElement("div",{className:t},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/matches"},"Matches")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/logout"},"Logout"))))};var D=function(e){var t=e.drawerClickHandler;return r.a.createElement("header",{className:"toolbar"},r.a.createElement("nav",null,r.a.createElement("div",{className:"toolbar-toggle-button"},r.a.createElement(I,{click:t})),r.a.createElement("div",{className:"toolbar-logo"},r.a.createElement(o.b,{to:"/"},r.a.createElement("img",{src:i.a,alt:"Tindev"}))),r.a.createElement("div",{className:"spacer"}),r.a.createElement(z,{className:"toolbar-items"})))};a(143);var J=function(e){var t=e.shown?["drawer","open"]:["drawer"];return r.a.createElement("nav",{className:t.join(" ")},r.a.createElement(z,null))};a(144);var H=function(e){var t=e.click,a=e.shown?["backdrop","open"]:["drawer"];return r.a.createElement("div",{className:a.join(" "),onClick:t})};var q=function(e){var t=e.children,a=Object(n.useState)(!1),c=Object(g.a)(a,2),l=c[0],o=c[1];return r.a.createElement("main",null,r.a.createElement(D,{drawerClickHandler:function(){o(!l)}}),r.a.createElement(J,{shown:l}),r.a.createElement(H,{shown:l,click:function(){o(!1)}}),t)};a(145);var A=function(e){var t=e.location;return r.a.createElement("section",{className:"page-404-container"},r.a.createElement("header",{className:"page-404-header"},r.a.createElement("h1",null,"404"),r.a.createElement("h3",null,"Provavelmente n\xe3o era essa a p\xe1gina que voc\xea procurava")),r.a.createElement("p",{className:"page-404-description"},"Nenhum resultado encontrado para ",r.a.createElement("code",null,t.pathname),". Essa p\xe1gina pode ter sido removida, ou nunca ter existido... \xaf\\_(\u30c4)_/\xaf"),r.a.createElement(o.b,{to:"/",className:"go-back"},"Voltar ao in\xedcio"))},B=a(63);var M=function(e){var t=e.component,a=e.layout,n=Object(B.a)(e,["component","layout"]);return r.a.createElement(u.b,Object.assign({},n,{render:function(e){return E.currentUserValue?r.a.createElement(a,null,r.a.createElement(t,e)):r.a.createElement(u.a,{to:{pathname:"/",state:{from:e.location}}})}}))};a(146);var G=function(){var e=Object(n.useState)([]),t=Object(g.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),o=Object(g.a)(l,2),u=o[0],s=o[1],i=E.currentUserValue._id;return Object(n.useEffect)(function(){!function(){var e=Object(b.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(i),e.next=3,S.get("devs/".concat(i,"/matches"),{headers:{user:i}});case 3:t=e.sent,c(t.data),s(!1);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[i]),r.a.createElement("section",{className:"matches-container"},u?r.a.createElement(C.ClipLoader,{css:{marginTop:"100px"},sizeUnit:"px",size:40,color:"#999",loading:u}):a.length>0?r.a.createElement("article",null,a.map(function(e){return r.a.createElement("a",{key:e._id,href:"https://github.com/".concat(e.user),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:e.avatar,alt:e.name}),r.a.createElement("footer",null,r.a.createElement("strong",null,e.name,r.a.createElement("span",null,"(",e.user,")")),r.a.createElement("p",null,e.bio||"---")))})):r.a.createElement("div",{className:"empty-matches"},r.a.createElement("p",null,"Ainda n\xe3o aconteceu nenhum match... :(")))};var P=function(){return r.a.createElement(o.a,null,r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0,component:v}),r.a.createElement(u.b,{path:"/auth/:accessToken",component:V}),r.a.createElement(u.b,{path:"/logout",component:T}),r.a.createElement(M,{path:"/dev",exact:!0,layout:q,component:L}),r.a.createElement(M,{path:"/matches",exact:!0,layout:q,component:G}),r.a.createElement(u.b,{component:A})))};var R=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(P,null))};l.a.render(r.a.createElement(R,null),document.getElementById("root"))},23:function(e,t,a){e.exports=a.p+"static/media/logo.6a01ceef.svg"},58:function(e,t,a){e.exports=a.p+"static/media/dislike.d4ec34e8.svg"},59:function(e,t,a){e.exports=a.p+"static/media/like.542059a4.svg"},64:function(e,t,a){e.exports=a(147)},69:function(e,t,a){},70:function(e,t,a){},94:function(e,t){}},[[64,1,2]]]);
//# sourceMappingURL=main.2e59bb09.chunk.js.map