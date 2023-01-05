"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1557],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>y});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(t),y=o,b=d["".concat(i,".").concat(y)]||d[y]||u[y]||a;return t?n.createElement(b,s(s({ref:r},c),{},{components:t})):n.createElement(b,s({ref:r},c))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,s[1]=p;for(var l=2;l<a;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2581:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=t(7462),o=(t(7294),t(3905));const a={sidebar_position:7},s="\u5728 express \u89e3\u6790 req.body",p={unversionedId:"Express/request.body",id:"Express/request.body",title:"\u5728 express \u89e3\u6790 req.body",description:"\u9700\u5148\u8a2d\u7f6e\u5e95\u4e0b\u5169\u500b middleware \u624d\u80fd\u62ff\u5230\u524d\u7aef request body \u7684\u8cc7\u6599",source:"@site/docs/Express/request.body.md",sourceDirName:"Express",slug:"/Express/request.body",permalink:"/my-blog/Express/request.body",draft:!1,tags:[],version:"current",lastUpdatedAt:1672346287,formattedLastUpdatedAt:"Dec 29, 2022",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u95dc\u65bc",permalink:"/my-blog/"},next:{title:"\u8a2d\u7f6e cors",permalink:"/my-blog/Express/CORS"}},i={},l=[],c={toc:l};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5728-express-\u89e3\u6790-reqbody"},"\u5728 express \u89e3\u6790 req.body"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u9700\u5148\u8a2d\u7f6e\u5e95\u4e0b\u5169\u500b middleware \u624d\u80fd\u62ff\u5230\u524d\u7aef request body \u7684\u8cc7\u6599")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"express.json()"),(0,o.kt)("li",{parentName:"ul"},"express.urlencoded()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// middleware to read body, parse it and place results in req.body\n\n// \u8655\u7406 JSON \u683c\u5f0f\napp.use(express.json()); // for application/json\n\n// \u8655\u7406 form \u8868\u55ae\u683c\u5f0f\napp.use(express.urlencoded()); // for application/x-www-form-urlencoded\n")))}u.isMDXComponent=!0}}]);