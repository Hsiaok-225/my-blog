"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2574],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>d});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function u(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c=r.createContext({}),i=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):u(u({},e),n)),t},p=function(n){var e=i(n.components);return r.createElement(c.Provider,{value:e},n.children)},s={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,c=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),m=i(t),d=o,y=m["".concat(c,".").concat(d)]||m[d]||s[d]||a;return t?r.createElement(y,u(u({ref:e},p),{},{components:t})):r.createElement(y,u({ref:e},p))}));function d(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,u=new Array(a);u[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=n,l.mdxType="string"==typeof n?n:o,u[1]=l;for(var i=2;i<a;i++)u[i]=t[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8630:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>u,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var r=t(7462),o=(t(7294),t(3905));const a={title:"Closure"},u="Closure \u9589\u5305",l={unversionedId:"JavaScript/Closure",id:"JavaScript/Closure",title:"Closure",description:"\u7279\u6027\u548c\u7528\u9014:",source:"@site/docs/JavaScript/Closure.md",sourceDirName:"JavaScript",slug:"/JavaScript/Closure",permalink:"/my-blog/JavaScript/Closure",draft:!1,tags:[],version:"current",frontMatter:{title:"Closure"},sidebar:"tutorialSidebar",previous:{title:"\u8a2d\u7f6e cors",permalink:"/my-blog/Express/CORS"},next:{title:"Promise",permalink:"/my-blog/JavaScript/Promise"}},c={},i=[{value:"\u7279\u6027\u548c\u7528\u9014:",id:"\u7279\u6027\u548c\u7528\u9014",level:2},{value:"Function \u5167\u7684\u8b8a\u6578\u7121\u6cd5\u76f4\u63a5\u5f9e\u5916\u90e8\u5b58\u53d6",id:"function-\u5167\u7684\u8b8a\u6578\u7121\u6cd5\u76f4\u63a5\u5f9e\u5916\u90e8\u5b58\u53d6",level:3},{value:"\u8b8a\u6578\u7684\u503c\u6703\u88ab keep \u4f4f",id:"\u8b8a\u6578\u7684\u503c\u6703\u88ab-keep-\u4f4f",level:3}],p={toc:i};function s(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"closure-\u9589\u5305"},"Closure \u9589\u5305"),(0,o.kt)("h2",{id:"\u7279\u6027\u548c\u7528\u9014"},"\u7279\u6027\u548c\u7528\u9014:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Function \u5167\u7684\u8b8a\u6578\u7121\u6cd5\u76f4\u63a5\u5f9e\u5916\u90e8\u5b58\u53d6")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. \u8b8a\u6578\u7684\u503c\u6703\u88ab keep \u4f4f (\u5728\u57f7\u884c\u5b8c\u4ee5\u524d\u4e0d\u6703\u88ab JS \u7684\u5783\u573e\u56de\u6536\u6a5f\u5236\u91cb\u653e)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3. \u5728 Function \u5167 return \u4e00\u500b Function\uff0c\u9019\u5c31\u662f\u9589\u5305\u7684\u6982\u5ff5")),(0,o.kt)("h3",{id:"function-\u5167\u7684\u8b8a\u6578\u7121\u6cd5\u76f4\u63a5\u5f9e\u5916\u90e8\u5b58\u53d6"},"Function \u5167\u7684\u8b8a\u6578\u7121\u6cd5\u76f4\u63a5\u5f9e\u5916\u90e8\u5b58\u53d6"),(0,o.kt)("p",null,"\u95dc\u65bc\u7b2c\u4e00\u9ede\uff0c\u4e5f\u662f\u6211\u5011\u6bd4\u8f03\u5e38\u4f7f\u7528\u5230\u7684\u90e8\u5206\uff0c\u5229\u7528 Closure \u7684\u7279\u6027\u8b93\u51fd\u5f0f\u64c1\u6709\u79c1\u6709\u8b8a\u6578\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u53ea\u6709\u900f\u904e function \u5167\u5b9a\u7fa9\u597d\u7684 method \u624d\u80fd\u5c0d\u8b8a\u6578\u505a\u64cd\u4f5c"),"\uff0c\u4e5f\u907f\u514d\u5728\u5168\u57df\u4e2d\u96a8\u610f\u5ba3\u544a\u8b8a\u6578\uff0c\u9020\u6210\u5168\u57df\u7684\u6c59\u67d3\u7522\u751f\u610f\u6599\u4e4b\u5916\u7684\u7d50\u679c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u7121\u6cd5\u76f4\u63a5\u5728 function \u5916\u9762\u4fee\u6539 myMoney \u8b8a\u6578\nfunction bank(money) {\n  var myMoney = money;\n  return {\n    increment: function (num) {\n      myMoney += num;\n    },\n    decrement: function (num) {\n      myMoney -= num;\n    },\n    getMyMoney: function () {\n      return myMoney;\n    },\n  };\n}\n\nconst myWallet = bank(100); // myMoney = 100\nmyWallet.increment(50); // myMoney += 50\nmyWallet.decrement(100); // myMoney -= 100\nconsole.log(myWallet.getMyMoney()); // 50\n")),(0,o.kt)("h3",{id:"\u8b8a\u6578\u7684\u503c\u6703\u88ab-keep-\u4f4f"},"\u8b8a\u6578\u7684\u503c\u6703\u88ab keep \u4f4f"),(0,o.kt)("p",null,"\u95dc\u65bc\u7b2c\u4e8c\u9ede\uff0c\u5e95\u4e0b\u6211\u5011\u7528\u8b8a\u6578 addCount \u4f86\u63a5\u6536 handleCount\uff0c\u7576\u6211\u5011\u6bcf\u6b21\u547c\u53eb addCount \u7684\u6642\u5019 count \u7684\u503c\u6703\u4e0d\u65b7\u5f80\u4e0a\u589e\u52a0\uff0c\u4e5f\u5c31\u662f\u8aaa ",(0,o.kt)("strong",{parentName:"p"},"count \u7684\u503c\u6703\u88ab keep \u5728\u51fd\u5f0f\u5167\u76f4\u5230\u7a0b\u5f0f\u88ab\u57f7\u884c\u5b8c\u7562"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function handleCount() {\n  var count = 10; // \u88ab keep \u4f4f\n\n  function increment() {\n    count++;\n    console.log(count);\n  }\n  return increment;\n}\n\nconst addCount = handleCount();\n\naddCount(); // 11\naddCount(); // 12\naddCount(); // 13\n")),(0,o.kt)("p",null,"\u7576\u6211\u5011\u57f7\u884c\u5230\u5e95\u4e0b\u9019\u884c\u7684\u6642\u5019\uff0cincrement function \u88ab\u5b58\u5728 addCount \u5167\uff0c\u800c increment function \u7684 Scope Chain \u6703\u662f ","[incrementEC.AO, handleCountEC.AO, globalEC.VO]","\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u6240\u4ee5 JS \u5e95\u5c64\u7684\u5783\u573e\u56de\u6536\u6a5f\u5236\u4e0d\u80fd\u56de\u6536( pop \u6389 ) handleCountEC.AO \u548c globalEC.VO")," \uff0c\u4e5f\u5c31\u662f\u70ba\u4ec0\u9ebc count \u7684\u503c\u6703\u88ab\u4fdd\u5b58\u4f4f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const addCount = handleCount(); // addCount = function increment(){}\n")),(0,o.kt)("p",null,"\u9019\u6a23\u7684\u60c5\u6cc1\u4e0b\u9700\u8981\u53e6\u5916\u6ce8\u610f\u7684\u662f\uff0c\u7576 function \u5167\u6709\u5ba3\u544a\u4e00\u500b\u9f90\u5927\u7684\u7269\u4ef6\uff0c\u5118\u7ba1\u6211\u5011\u5728 increment \u5167\u6c92\u6709\u7528\u5230 hugeObj\uff0c\u4ed6\u7684\u503c\u9084\u662f\u6703\u88ab keep \u4f4f\uff0c\u4e0d\u6703\u88ab\u91cb\u653e\u6389 ( hugeObj \u548c count \u90fd\u662f handleCountEC.AO \u7684\u4e00\u90e8\u4efd )\uff0c\u662f\u4f7f\u7528 Closure \u6642\u8981\u7559\u610f\u7684\u5730\u65b9\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function handleCount() {\n  var count = 10;\n  var hugeObj = {\n    // something...\n  }\n  function increment() { /\n    count++;\n    console.log(count);\n  }\n  return increment;\n}\n\nconst addCount = handleCount();\n\naddCount();\n")))}s.isMDXComponent=!0}}]);