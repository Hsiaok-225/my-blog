"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4845],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,g=f["".concat(l,".").concat(m)]||f[m]||u[m]||s;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},822:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const s={title:"\u8a2d\u7f6e cors"},a=void 0,i={unversionedId:"Express/CORS",id:"Express/CORS",title:"\u8a2d\u7f6e cors",description:"corsOptions Setting",source:"@site/docs/Express/CORS.md",sourceDirName:"Express",slug:"/Express/CORS",permalink:"/my-blog/Express/CORS",draft:!1,tags:[],version:"current",lastUpdatedAt:1672346287,formattedLastUpdatedAt:"Dec 29, 2022",frontMatter:{title:"\u8a2d\u7f6e cors"},sidebar:"tutorialSidebar",previous:{title:"\u5728 express \u89e3\u6790 req.body",permalink:"/my-blog/Express/request.body"},next:{title:"Closure",permalink:"/my-blog/JavaScript/Closure"}},l={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/server/index.js"',title:'"/server/index.js"'},'var express = require("express");\nvar cors = require("cors");\nvar app = express();\n\nvar corsOptions = {\n  origin: "http://example.com", // allowlist\n  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204\n};\n\napp.get("/products/:id", cors(corsOptions), function (req, res, next) {\n  res.json({ msg: "This is CORS-enabled for only example.com." });\n});\n\napp.listen(80, function () {\n  console.log("CORS-enabled web server listening on port 80");\n});\n')),(0,o.kt)("p",null,"corsOptions Setting"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let allowlist = [\n  "https://www.google.com/",\n  "http://127.0.0.1:5500",\n  "http://localhost:3500",\n];\nconst corsOptions = {\n  origin: (origin, callback) => {\n    if (allowlist.indexOf(origin) !== -1) {\n      console.log("allow");\n      callback(null, true);\n    } else {\n      callback(new Error("Not allowed by CORS"));\n    }\n  },\n  optionSuccessStatus: 200,\n};\n\n// Configuration Options\n{\n  "origin": "*",\n  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",\n  "preflightContinue": false,\n  "optionsSuccessStatus": 204\n}\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/expressjs/cors#configuring-cors"},"README Configuring CORS")))}u.isMDXComponent=!0}}]);