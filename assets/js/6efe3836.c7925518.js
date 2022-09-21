"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[431],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(r),m=a,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},1769:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:7},i="\u70ba\u4ec0\u9ebc\u9700\u8981 Redux ?",c={unversionedId:"Redux/Why-Redux",id:"Redux/Why-Redux",title:"\u70ba\u4ec0\u9ebc\u9700\u8981 Redux ?",description:"- \u7576\u72c0\u614b\u8b8a\u8907\u96dc\u5f8c redux \u53ef\u4ee5\u66f4\u597d\u7ba1\u7406\u72c0\u614b\u548c\u5143\u4ef6\u7684\u95dc\u4fc2",source:"@site/docs/Redux/Why-Redux.md",sourceDirName:"Redux",slug:"/Redux/Why-Redux",permalink:"/my-blog/docs/Redux/Why-Redux",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Learning React",permalink:"/my-blog/docs/React/Learn-React"}},u={},p=[{value:"Redux \u548c React Component \u4e4b\u9593\u7684\u95dc\u4fc2",id:"redux-\u548c-react-component-\u4e4b\u9593\u7684\u95dc\u4fc2",level:2}],l={toc:p};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u70ba\u4ec0\u9ebc\u9700\u8981-redux-"},"\u70ba\u4ec0\u9ebc\u9700\u8981 Redux ?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7576\u72c0\u614b\u8b8a\u8907\u96dc\u5f8c redux \u53ef\u4ee5\u66f4\u597d\u7ba1\u7406\u72c0\u614b\u548c\u5143\u4ef6\u7684\u95dc\u4fc2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6613\u8ffd\u8e64\u662f\u54ea\u500b component dispatch action \u4fee\u6539 state, \u8b93 debug \u66f4\u5bb9\u6613")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u89e3\u6c7a\u90e8\u5206 context \u6548\u80fd( performance )\u4e0d\u4f73\u7684\u554f\u984c"))),(0,a.kt)("h2",{id:"redux-\u548c-react-component-\u4e4b\u9593\u7684\u95dc\u4fc2"},"Redux \u548c React Component \u4e4b\u9593\u7684\u95dc\u4fc2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"redux \u6709\u81ea\u5df1\u7684 state"),(0,a.kt)("li",{parentName:"ul"},"\u900f\u904e React component (trigger)\u767c dispatch action \u51fa\u53bb\u7d66 Reducer \u57f7\u884c, \u66f4\u65b0 store \u7684 state")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Redux-Diagram",src:r(7308).Z,width:"1873",height:"873"}),"\n",(0,a.kt)("em",{parentName:"p"},"\u4f86\u6e90: \u7a00\u571f\u6398\u91d1")))}d.isMDXComponent=!0},7308:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/redux-diagram-7d03701f0aed666304df20a79001c1f3.png"}}]);