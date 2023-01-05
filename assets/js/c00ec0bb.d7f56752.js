"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1605],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9392:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"AJAX \u975e\u540c\u6b65\u8acb\u6c42"},l=void 0,i={unversionedId:"\u7db2\u8def\u76f8\u95dc/AJAX",id:"\u7db2\u8def\u76f8\u95dc/AJAX",title:"AJAX \u975e\u540c\u6b65\u8acb\u6c42",description:"Asymchronous JavaScript And XML",source:"@site/docs\\\u7db2\u8def\u76f8\u95dc\\AJAX.md",sourceDirName:"\u7db2\u8def\u76f8\u95dc",slug:"/\u7db2\u8def\u76f8\u95dc/AJAX",permalink:"/my-blog/\u7db2\u8def\u76f8\u95dc/AJAX",draft:!1,tags:[],version:"current",lastUpdatedAt:1672346287,formattedLastUpdatedAt:"Dec 29, 2022",frontMatter:{title:"AJAX \u975e\u540c\u6b65\u8acb\u6c42"},sidebar:"tutorialSidebar",previous:{title:"React \u7684\u6838\u5fc3\u6982\u5ff5",permalink:"/my-blog/React/React \u7684\u6838\u5fc3\u6982\u5ff5"},next:{title:"CORS \u8de8\u4f86\u6e90\u8cc7\u6e90\u5171\u7528",permalink:"/my-blog/\u7db2\u8def\u76f8\u95dc/cors"}},c={},p=[{value:"Asymchronous JavaScript And XML",id:"asymchronous-javascript-and-xml",level:2},{value:"\u4f7f\u7528 AJAX \u5be6\u73fe\u975e\u540c\u6b65\u8acb\u6c42",id:"\u4f7f\u7528-ajax-\u5be6\u73fe\u975e\u540c\u6b65\u8acb\u6c42",level:3},{value:"XML \u53e6\u4e00\u7a2e\u8cc7\u6599\u683c\u5f0f",id:"xml-\u53e6\u4e00\u7a2e\u8cc7\u6599\u683c\u5f0f",level:2}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"asymchronous-javascript-and-xml"},"Asymchronous JavaScript And XML"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4efb\u4f55 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u975e\u540c\u6b65")," \u8207\u4f3a\u670d\u5668\u4ea4\u63db\u8cc7\u6599\u7684\u65b9\u5f0f")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 form \u8868\u55ae\u8ddf server \u4ea4\u63db\u8cc7\u6599\u6642\uff0c\u6703\u9020\u6210\u6bcf\u6b21\u90fd\u91cd\u6574\u7db2\u9801"),(0,a.kt)("li",{parentName:"ul"},"\u900f\u904e JS \u4f86\u767c request \u5230 server \u4ea4\u63db\u8cc7\u6599\u4e0d\u9700\u8981\u63db\u9801")),(0,a.kt)("h3",{id:"\u4f7f\u7528-ajax-\u5be6\u73fe\u975e\u540c\u6b65\u8acb\u6c42"},"\u4f7f\u7528 AJAX \u5be6\u73fe\u975e\u540c\u6b65\u8acb\u6c42"),(0,a.kt)("p",null,"\u5be6\u969b\u7528 javaScript \u767c\u9001 request \u5230 server \u6642\uff0c\u6211\u5011\u7d93\u5e38\u6703\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"axios")," \u7b49\u65b9\u6cd5"),(0,a.kt)("h2",{id:"xml-\u53e6\u4e00\u7a2e\u8cc7\u6599\u683c\u5f0f"},"XML \u53e6\u4e00\u7a2e\u8cc7\u6599\u683c\u5f0f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Extensible Markup Language")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-XML"},'<?xml version="1.0"?>\n<CAT>\n  <NAME>\u5c41\u8c93</NAME>\n  <BREED>\u82f1\u570b\u77ed\u6bdb</BREED>\n  <AGE>6</AGE>\n  <ALTERED>yes</ALTERED>\n  <DECLAWED>no</DECLAWED>\n  <LICENSE>Izz138bod</LICENSE>\n  <OWNER>\u5c0f\u660e</OWNER>\n</CAT>\n')))}s.isMDXComponent=!0}}]);