"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[276],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(r),m=a,y=s["".concat(i,".").concat(m)]||s[m]||d[m]||o;return r?n.createElement(y,c(c({ref:t},p),{},{components:r})):n.createElement(y,c({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=s;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,c[1]=u;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2425:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={title:"why redux"},c="\u70ba\u4ec0\u9ebc\u9700\u8981 Redux ?",u={unversionedId:"Redux/why redux",id:"Redux/why redux",title:"why redux",description:"- \u7576\u72c0\u614b\u8b8a\u8907\u96dc\u5f8c redux \u53ef\u4ee5\u66f4\u597d\u7ba1\u7406\u72c0\u614b\u548c\u5143\u4ef6\u7684\u95dc\u4fc2",source:"@site/docs/Redux/why redux.md",sourceDirName:"Redux",slug:"/Redux/why redux",permalink:"/my-blog/Redux/why redux",draft:!1,tags:[],version:"current",lastUpdatedAt:1671988763,formattedLastUpdatedAt:"Dec 25, 2022",frontMatter:{title:"why redux"},sidebar:"tutorialSidebar",previous:{title:"why react",permalink:"/my-blog/React/why react"}},i={},l=[{value:"Redux \u548c React Component \u4e4b\u9593\u7684\u95dc\u4fc2",id:"redux-\u548c-react-component-\u4e4b\u9593\u7684\u95dc\u4fc2",level:2}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u70ba\u4ec0\u9ebc\u9700\u8981-redux-"},"\u70ba\u4ec0\u9ebc\u9700\u8981 Redux ?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7576\u72c0\u614b\u8b8a\u8907\u96dc\u5f8c redux \u53ef\u4ee5\u66f4\u597d\u7ba1\u7406\u72c0\u614b\u548c\u5143\u4ef6\u7684\u95dc\u4fc2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6613\u8ffd\u8e64\u662f\u54ea\u500b component dispatch action \u4fee\u6539 state, \u8b93 debug \u66f4\u5bb9\u6613")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u89e3\u6c7a\u90e8\u5206 context \u6548\u80fd( performance )\u4e0d\u4f73\u7684\u554f\u984c"))),(0,a.kt)("h2",{id:"redux-\u548c-react-component-\u4e4b\u9593\u7684\u95dc\u4fc2"},"Redux \u548c React Component \u4e4b\u9593\u7684\u95dc\u4fc2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"redux \u6709\u81ea\u5df1\u7684 state"),(0,a.kt)("li",{parentName:"ul"},"\u900f\u904e React component (trigger)\u767c dispatch action \u51fa\u53bb\u7d66 Reducer \u57f7\u884c, \u66f4\u65b0 store \u7684 state")))}d.isMDXComponent=!0}}]);