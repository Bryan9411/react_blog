(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(28),i=c.n(a),l=(c(36),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,63)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))}),o=(c(37),c(38),c(3)),r=c(8),j=c(2),d=Object(n.createContext)(null),b=Object(n.createContext)(null),u="token",h=function(e){localStorage.setItem(u,e)},O=function(){return localStorage.getItem(u)},m=c(14),x=c.n(m),p="https://lidemy-api.herokuapp.com",f=function(){var e=O();return fetch("".concat(p,"/me"),{headers:{authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()}))},v=c(0);function N(e){var t=e.handleClose,c=Object(n.useState)(""),s=Object(o.a)(c,2),a=s[0],i=s[1],l=Object(n.useState)(""),r=Object(o.a)(l,2),d=r[0],u=r[1],h=Object(n.useState)(),m=Object(o.a)(h,2),x=m[0],f=m[1],N=Object(n.useContext)(b),g=(N.isLoading,N.setIsLoading),y=Object(j.f)();return Object(v.jsxs)("div",{className:"new-post",children:[Object(v.jsx)("p",{className:"title has-text-centered",children:"New Post"}),Object(v.jsxs)("form",{className:"new-post-form",onSubmit:function(e){e.preventDefault(),g(!0),function(e,t){var c=O();return fetch("".concat(p,"/posts"),{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer ".concat(c)},body:JSON.stringify({title:e,body:t})}).then((function(e){return e.json()}))}(a,d).then((function(c){if(0===c.ok)return f(c.message.toString());g(!1),t(e),y.push("/")}))},children:[Object(v.jsx)("div",{className:"field",children:Object(v.jsxs)("div",{className:"control",children:[Object(v.jsx)("label",{className:"label left",children:"Title"}),Object(v.jsx)("input",{className:"input",type:"text",name:"title",onChange:function(e){i(e.target.value)},value:a})]})}),Object(v.jsx)("div",{className:"field",children:Object(v.jsxs)("div",{className:"control",children:[Object(v.jsx)("label",{className:"label left",children:"Content"}),Object(v.jsx)("textarea",{className:"textarea",name:"content",onChange:function(e){u(e.target.value)},value:d})]})}),Object(v.jsx)("br",{}),Object(v.jsxs)("div",{className:"field is-grouped is-grouped-centered",children:[Object(v.jsx)("div",{className:"control",children:Object(v.jsx)("button",{className:"button is-primary",children:"Submit"})}),Object(v.jsx)("div",{className:"control",children:Object(v.jsx)("button",{className:"button",type:"button",onClick:t,children:"Cancel"})})]}),x&&Object(v.jsx)("div",{className:"post-errorMessage",children:"\u6b04\u4f4d\u4e0d\u5f97\u70ba\u7a7a"})]})]})}function g(e){var t=e.isPanel,c=e.setIsPanel,n=function(e){e.preventDefault(),c(!1)};return Object(v.jsxs)("div",{className:{true:"panel-wrapper active",false:"panel-wrapper"}[t],children:[Object(v.jsx)("div",{className:"over-layer",onClick:n}),Object(v.jsx)("div",{className:"panel",children:Object(v.jsxs)("div",{className:"head",children:[Object(v.jsx)("span",{className:"close",onClick:n,children:"x"}),Object(v.jsx)(N,{handleClose:n})]})})]})}function y(){var e=Object(n.useContext)(d),t=e.user,c=e.setUser,s=Object(n.useContext)(b),a=(s.isLoading,s.setIsLoading),i=Object(n.useState)(!1),l=Object(o.a)(i,2),u=l[0],O=l[1],m=Object(j.f)();return Object(v.jsxs)("div",{className:"header",children:[Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("div",{className:"start",children:Object(v.jsx)(r.b,{to:"/",children:"Home"})}),Object(v.jsxs)("div",{className:"end",children:[!t&&Object(v.jsx)(r.b,{to:"/login",children:"\u767b\u5165"}),!t&&Object(v.jsx)(r.b,{to:"/register",children:"\u8a3b\u518a"}),t&&Object(v.jsx)(r.b,{onClick:function(e){h(""),c(null),a(!0),m.push("/"),a(!1)},children:"\u767b\u51fa"}),t&&Object(v.jsx)(r.b,{onClick:function(e){e.preventDefault(),O(!0)},children:"\u767c\u4f48\u6587\u7ae0"})]})]}),u&&Object(v.jsx)(g,{isPanel:u,setIsPanel:O})]})}function C(e){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(y,{}),e.children]})}function k(e){var t=e.post;return Object(v.jsxs)("div",{className:"article",children:[Object(v.jsx)("h5",{children:new Date(t.createdAt).toLocaleString()}),Object(v.jsx)(r.b,{className:"title",to:"/posts/".concat(t.id),children:t.title}),Object(v.jsx)("p",{className:"content",children:t.body}),Object(v.jsx)(r.b,{className:"read-more ",to:"/posts/".concat(t.id),children:"Read more"})]})}var S=function(e){var t=e.checked,c=e.onChange;return Object(v.jsxs)("span",{className:"toggle-control",children:[Object(v.jsx)("input",{className:"dmcheck",type:"checkbox",checked:t,onChange:c,id:"dmcheck"}),Object(v.jsx)("label",{htmlFor:"dmcheck"})]})},w=c(30),L=function(){var e=Object(w.a)(!1);return Object(v.jsxs)("div",{className:"dark-mode-toggle",children:[Object(v.jsx)("button",{type:"button",onClick:e.disable,children:"\u2600"}),Object(v.jsx)(S,{checked:e.value,onChange:e.toggle}),Object(v.jsx)("button",{type:"button",onClick:e.enable,children:"\u263e"})]})};function P(){return Object(v.jsxs)("div",{className:"tool-box",children:[Object(v.jsx)("div",{className:"logo",children:"Welcome to my blog !!"}),Object(v.jsx)("div",{className:"search-box",children:Object(v.jsx)("div",{className:"field has-addons"})}),Object(v.jsx)("div",{to:"/cart",className:"cart-box",children:Object(v.jsx)(L,{})})]})}var T=c.p+"static/media/avatar.bd629eee.png";function I(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){x.a.get("".concat(p,"/posts?_sort=createdAt&_order=desc")).then((function(e){return e.data})).then((function(e){s(e)}))}),[c]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(P,{}),Object(v.jsxs)("div",{className:"article-container",children:[Object(v.jsxs)("div",{className:"article-logo",children:[Object(v.jsx)("div",{className:"img",children:Object(v.jsx)("img",{src:T,alt:"Lidemy"})}),Object(v.jsx)("h5",{children:"About"}),Object(v.jsx)("div",{className:"title",children:"Lidemy"}),Object(v.jsxs)("p",{className:"content",children:["\u4e00\u500b\u70ba\u521d\u5b78\u8005\u800c\u751f\u7684\u7dda\u4e0a\u7a0b\u5f0f\u8ab2\u7a0b\u5e73\u53f0",Object(v.jsx)("a",{href:"https://lidemy.com/",children:"https://lidemy.com/"})]})]}),Object(v.jsx)("div",{className:"articles",children:c&&c.map((function(e){return Object(v.jsx)(k,{post:e},e.id)}))})]})]})}function D(){return Object(v.jsx)(C,{children:Object(v.jsx)(I,{})})}function F(){var e=Object(n.useContext)(d).setUser,t=Object(n.useState)(""),c=Object(o.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)(""),l=Object(o.a)(i,2),r=l[0],b=l[1],u=Object(n.useState)(),O=Object(o.a)(u,2),m=O[0],x=O[1],N=Object(j.f)();return Object(v.jsx)(C,{children:Object(v.jsx)("div",{className:"login-wrapper",children:Object(v.jsxs)("form",{className:"box login-box",onSubmit:function(t){t.preventDefault(),x(null),function(e,t){return fetch("".concat(p,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:e,password:t})}).then((function(e){return e.json()}))}(s,r).then((function(t){if(0===t.ok)return x(t.message);h(t.token),f().then((function(t){if(1!==t.ok)return h(null),x(t.toString());e(t.data),N.push("/")}))}))},children:[Object(v.jsxs)("div",{className:"field",children:[Object(v.jsx)("label",{className:"label",children:"Username"}),Object(v.jsx)("div",{className:"control",children:Object(v.jsx)("input",{className:"input",type:"text",placeholder:"Text input",name:"usename",value:s,onChange:function(e){var t=e.target.value;a(t)}})})]}),Object(v.jsxs)("div",{className:"field",children:[Object(v.jsx)("label",{className:"label",children:"Password"}),Object(v.jsx)("div",{className:"control",children:Object(v.jsx)("input",{className:"input",type:"password",placeholder:"Text input",name:"password",value:r,onChange:function(e){b("Lidemy")}})})]}),Object(v.jsx)("div",{className:"control",children:Object(v.jsx)("button",{className:"button is-fullwidth is-primary",children:"Login"})}),m&&Object(v.jsx)("div",{className:"errorMessage ",children:m})]})})})}function U(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),i=Object(o.a)(a,2),l=i[0],r=i[1],b=Object(n.useState)(""),u=Object(o.a)(b,2),O=u[0],m=u[1],x=Object(n.useState)(""),N=Object(o.a)(x,2),g=N[0],y=N[1],k=Object(j.f)(),S=Object(n.useContext)(d).setUser;return Object(v.jsx)(C,{children:Object(v.jsx)("div",{className:"login-wrapper",children:Object(v.jsxs)("form",{className:"box login-box",onSubmit:function(e){e.preventDefault(),function(e,t,c){return fetch("".concat(p,"/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:e,username:t,password:c})}).then((function(e){return e.json()}))}(c,l,O).then((function(e){1!==e.ok&&y(e.message),h(e.token),f().then((function(e){1!==e.ok?y(e.message):(S(e.data),k.push("./login"))}))}))},children:[Object(v.jsxs)("div",{className:"field",children:[Object(v.jsx)("label",{className:"label",children:"Nickname"}),Object(v.jsx)("div",{className:"control",children:Object(v.jsx)("input",{className:"input",type:"text",placeholder:"Text input",name:"nickname",value:c,onChange:function(e){s(e.target.value)}})})]}),Object(v.jsxs)("div",{className:"field",children:[Object(v.jsx)("label",{className:"label",children:"Username"}),Object(v.jsx)("div",{className:"control",children:Object(v.jsx)("input",{className:"input",type:"text",placeholder:"Text input",name:"usename",value:l,onChange:function(e){r(e.target.value)}})})]}),Object(v.jsxs)("div",{className:"field",children:[Object(v.jsx)("label",{className:"label",children:"Password"}),Object(v.jsx)("div",{className:"control",children:Object(v.jsx)("input",{className:"input",type:"password",placeholder:"Text input",name:"password",value:O,onChange:function(e){m("Lidemy")}})})]}),Object(v.jsx)("div",{className:"control",children:Object(v.jsx)("button",{className:"button is-fullwidth is-primary",children:"Register"})}),g&&Object(v.jsx)("div",{className:"errorMessage ",children:g})]})})})}function A(e){return Object(v.jsx)("div",{className:"not-found",children:Object(v.jsx)("h2",{children:"Not Found Page"})})}function E(e){var t=e.isEdit,c=e.post,s=e.handleClose,a=Object(n.useState)(""),i=Object(o.a)(a,2),l=i[0],r=i[1],d=Object(j.f)();return Object(v.jsx)("form",{onSubmit:function(e){e.preventDefault(),function(e,t,c){var n=O();return fetch("".concat(p,"/posts/").concat(e),{method:"PATCH",headers:{authorization:"Bearer ".concat(n),"content-type":"application/json"},body:JSON.stringify({title:t,body:c})}).then((function(e){return e.json()}))}(c.id,c.title,l).then((function(e){s(),d.push("/posts/".concat(e.id))}))},children:Object(v.jsxs)("div",{className:{true:"modal block",false:"modal"}[t],children:[Object(v.jsx)("div",{className:"modal-background",onClick:function(){s()}}),Object(v.jsxs)("div",{className:"modal-card vertical-center",children:[Object(v.jsxs)("header",{className:"modal-card-head ",children:[Object(v.jsxs)("p",{className:"modal-card-title title-flow",children:["Title: ",c.title]}),Object(v.jsx)("button",{className:"delete","aria-label":"close",onClick:function(){s()}})]}),Object(v.jsx)("textarea",{className:"modal-card-body text-height",onChange:function(e){r(e.target.value)},defaultValue:c.body}),Object(v.jsxs)("footer",{className:"modal-card-foot",children:[Object(v.jsx)("button",{className:"button is-success",children:"Update"}),Object(v.jsx)("button",{type:"button",className:"button",onClick:function(){s()},children:"Cancel"})]})]})]})})}function J(e){var t=e.post,c=e.slug,s=e.setIsLoading,a=Object(n.useContext)(d).user,i=Object(j.f)(),l=Object(n.useState)(!1),r=Object(o.a)(l,2),b=r[0],u=r[1];return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"post-container",children:Object(v.jsxs)("div",{className:"article",children:[Object(v.jsxs)("div",{className:"control",children:[Object(v.jsx)("div",{className:"date",children:Object(v.jsx)("h5",{children:new Date(t.createdAt).toLocaleString()})}),a&&Object(v.jsxs)("div",{className:"control-button",children:[Object(v.jsx)("button",{className:"button is-danger",type:"button",onClick:function(){var e;s(!0),e=c,x.a.delete("".concat(p,"/posts/").concat(e)).then((function(e){return e.data})),s(!1),i.push("/")},children:"\u522a\u9664"}),Object(v.jsx)("button",{className:"button is-primary",type:"button",onClick:function(){u(!0)},children:"\u7de8\u8f2f"})]})]}),Object(v.jsx)("h1",{className:"title",children:t.title}),Object(v.jsx)("p",{className:"content",children:t.body}),b&&Object(v.jsx)(E,{isEdit:b,handleClose:function(){u(!1)},post:t})]})})})}function B(){var e=Object(n.useContext)(b),t=(e.isLoading,e.setIsLoading),c=Object(n.useState)([]),s=Object(o.a)(c,2),a=s[0],i=s[1],l=Object(j.g)().slug;return Object(n.useEffect)((function(){var e;t(!0),(e=l,x.a.get("".concat(p,"/posts/").concat(e,"?_expand=user")).then((function(e){return e.data}))).then((function(e){return i(e)})),t(!1)}),[l,t,a]),Object(v.jsx)(C,{children:Object(v.jsxs)("div",{className:"article-container",children:[Object(v.jsxs)("div",{className:"article-logo",children:[Object(v.jsx)("div",{className:"img",children:Object(v.jsx)("img",{src:T,alt:"Lidemy"})}),Object(v.jsx)("h5",{children:"About"}),Object(v.jsx)("div",{className:"title",children:"Lidemy"}),Object(v.jsxs)("p",{className:"content",children:["\u4e00\u500b\u70ba\u521d\u5b78\u8005\u800c\u751f\u7684\u7dda\u4e0a\u7a0b\u5f0f\u8ab2\u7a0b\u5e73\u53f0",Object(v.jsx)("a",{href:"https://lidemy.com/",children:"https://lidemy.com/"})]})]}),Object(v.jsx)("div",{className:"articles",children:Object(v.jsx)(J,{post:a,slug:l,setIsLoading:t},a.id)})]})})}function M(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!1),i=Object(o.a)(a,2),l=i[0],u=i[1];return Object(n.useEffect)((function(){O()&&f().then((function(e){e.ok&&s(e.data)}))}),[]),Object(v.jsx)(d.Provider,{value:{user:c,setUser:s},children:Object(v.jsx)(r.a,{children:Object(v.jsx)(b.Provider,{value:{isLoading:l,setIsLoading:u},children:Object(v.jsxs)(j.c,{children:[Object(v.jsx)(j.a,{path:"/",component:D,exact:!0}),Object(v.jsx)(j.a,{path:"/login",component:F}),Object(v.jsx)(j.a,{path:"/register",component:U}),Object(v.jsx)(j.a,{path:"/posts/:slug",component:B}),Object(v.jsx)(j.a,{component:A})]})})})})}i.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(M,{})}),document.getElementById("root")),l()}},[[62,1,2]]]);
//# sourceMappingURL=main.07a40152.chunk.js.map