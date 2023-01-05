"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[398],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),s=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),c=s(t),p=r,f=c["".concat(i,".").concat(p)]||c[p]||u[p]||a;return t?o.createElement(f,l(l({ref:n},d),{},{components:t})):o.createElement(f,l({ref:n},d))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=c;var m={};for(var i in n)hasOwnProperty.call(n,i)&&(m[i]=n[i]);m.originalType=e,m.mdxType="string"==typeof e?e:r,l[1]=m;for(var s=2;s<a;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6421:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>m,toc:()=>s});var o=t(7462),r=(t(7294),t(3905));const a={},l=void 0,m={unversionedId:"React/Re-render",id:"React/Re-render",title:"Re-render",description:"\u4ec0\u9ebc\u6642\u5019\u6703\u9020\u6210 re-render",source:"@site/docs/React/Re-render.md",sourceDirName:"React",slug:"/React/Re-render",permalink:"/my-blog/React/Re-render",draft:!1,tags:[],version:"current",lastUpdatedAt:1672939629,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hookflow",permalink:"/my-blog/React/Hookflow"},next:{title:"React \u7684\u6838\u5fc3\u6982\u5ff5",permalink:"/my-blog/React/React \u7684\u6838\u5fc3\u6982\u5ff5"}},i={},s=[{value:"\u4ec0\u9ebc\u6642\u5019\u6703\u9020\u6210 re-render",id:"\u4ec0\u9ebc\u6642\u5019\u6703\u9020\u6210-re-render",level:2},{value:"\u600e\u9ebc\u907f\u514d\u5143\u4ef6\u4e0d\u5fc5\u8981\u7684 re-render",id:"\u600e\u9ebc\u907f\u514d\u5143\u4ef6\u4e0d\u5fc5\u8981\u7684-re-render",level:2},{value:"memo",id:"memo",level:3},{value:"useMemo",id:"usememo",level:3},{value:"\u5be6\u969b\u4f7f\u7528 memo \u548c useMemo",id:"\u5be6\u969b\u4f7f\u7528-memo-\u548c-usememo",level:3}],d={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4ec0\u9ebc\u6642\u5019\u6703\u9020\u6210-re-render"},"\u4ec0\u9ebc\u6642\u5019\u6703\u9020\u6210 re-render"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Parent Component")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"state")," \u6539\u8b8a\uff0cReact \u6703\u8abf\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"Parent Component")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"render \u65b9\u6cd5"),"\uff0c\u4f86\u7522\u751f\u65b0\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Virtual DOM"),"\uff0c\u548c\u4e0a\u4e00\u500b Virtual DOM \u6bd4\u8f03\u5f8c\uff0c\u627e\u5230\u4e0d\u540c\u7684\u5730\u65b9\uff0c\u53cd\u61c9\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"\u771f\u5be6\u7684DOM")," \u4e0a\u9762\uff0c\u9019\u6642\u5019\u5e95\u4e0b\u6240\u6709\u7684 child component \u90fd\u6703\u88ab\u91cd\u65b0 render\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4f46\u5982\u679c child component \u548c\u88ab\u6539\u8b8a\u7684 state \u7121\u95dc\uff0c\u6211\u5011\u4e0d\u5e0c\u671b\u4ed6\u4e5f\u88ab\u91cd\u65b0 render\uff0c\u9020\u6210\u6548\u80fd\u4e0a\u7684\u6d6a\u8cbb\u3002")),(0,r.kt)("h2",{id:"\u600e\u9ebc\u907f\u514d\u5143\u4ef6\u4e0d\u5fc5\u8981\u7684-re-render"},"\u600e\u9ebc\u907f\u514d\u5143\u4ef6\u4e0d\u5fc5\u8981\u7684 re-render"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6211\u5011\u5e0c\u671b\u53ea\u6709\u5143\u4ef6\u672c\u8eab\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"props")," \u6539\u8b8a\u6642\uff0c\u5143\u4ef6\u624d\u6703\u91cd\u65b0 render\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u9019\u908a\u6703\u7528\u5230 React \u63d0\u4f9b\u7684\u5169\u500b Hooks\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"memo")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"useMemo"),"\u3002")),(0,r.kt)("h3",{id:"memo"},"memo"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u53ea\u6709 props \u6539\u8b8a\u624d\u91cd\u65b0 render component")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const MyComponent = React.memo(function MyComponent(props) {\n  /* render using props */\n});\n")),(0,r.kt)("p",null,"\u5148\u770b\u4e00\u4e0b React \u5b98\u65b9\u7684\u7bc4\u4f8b\u548c\u8aaa\u660e:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/*\nIf your component renders the same result given the same props, you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result.\n\n\u5982\u679c render \u7684\u6642\u5019\u4f60\u7684 component \u63a5\u6536\u7684 props \u548c\u539f\u672c\u7684\u4e00\u6a23\uff0c\u4f60\u53ef\u4ee5\u7528 React.memo \u5305\u4f4f component \u900f\u904e\u8a18\u4f4f\u539f\u672c\u7684\u7d50\u679c\u4f86\u63d0\u9ad8\u6548\u80fd\u3002React \u6703\u8df3\u904e\u9019\u500b component\uff0c\u76f4\u63a5\u4f7f\u7528\u4ed6\u4e0a\u4e00\u6b21(\u539f\u672c) render \u7684\u7d50\u679c\u3002\n*/\n\n/*\nReact.memo only checks for prop changes. If your function component wrapped in React.memo has a useState, useReducer or useContext Hook in its implementation, it will still rerender when state or context change.\n\nReact.memo \u53ea\u6709\u5728 props \u6539\u8b8a\u7684\u6642\u5019\u6703\u91cd\u65b0\u57f7\u884c\uff0c\u5982\u679c\u4f60\u7684 component \u88e1\u9762\u6709\u7528\u5230 useState, useReducer, useContext \u7b49 Hook\uff0c\u7576\u9019\u4e9b\u72c0\u614b\u6539\u8b8a\u7684\u6642\u5019 component \u9084\u662f\u6703\u91cd\u65b0 render\u3002\n*/\n\n/*\nBy default it will only shallowly compare complex objects in the props object. If you want control over the comparison, you can also provide a custom comparison function as the second argument.\n\nmemo \u9810\u8a2d\u662f\u7528\u6dfa\u62f7\u8c9d\u4f86\u6bd4\u8f03 object \u7684 props\uff0c\u5982\u679c\u4f60\u60f3\u8981\u5c0d\u9019\u90e8\u5206\u8abf\u6574\uff0c\u53ef\u4ee5\u628a\u81ea\u5b9a\u7fa9\u6bd4\u8f03\u7684 function \u7576\u4f5c\u7b2c\u4e8c\u500b\u53c3\u6578\n*/\n")),(0,r.kt)("h3",{id:"usememo"},"useMemo"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u53ea\u6709 dependencies \u6539\u8b8a\u624d\u91cd\u65b0\u57f7\u884c function")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// \u50b3\u5165\u4e00\u500b function \u548c dependency array\uff0cfunction return \u4e00\u500b value\nconst memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);\n")),(0,r.kt)("p",null,"\u4e00\u6a23\u5148\u770b React \u5b98\u65b9\u7684\u7bc4\u4f8b\u548c\u8aaa\u660e:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'/*\n\n\u56de\u50b3\u4e00\u500b\u88ab\u8a18\u4f4f\u7684\u503c\nReturns a memoized value.\n\n\u5728\u88e1\u9762\u653e\u5165\u4e00\u500b function \u548c dependencies\uff0cuseMemo \u53ea\u6703\u5728 dependencies \u7684\u503c\u6539\u8b8a\u6642\u5c0d\u88ab\u8a18\u4f4f\u7684\u503c\u505a\u91cd\u65b0\u904b\u7b97\uff0c\u907f\u514d\u6bcf\u6b21 render \u6642 function \u90fd\u91cd\u8907\u9032\u884c\u5927\u91cf\u904b\u7b97\u3002\nPass a \u201ccreate\u201d function and an array of dependencies. useMemo will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.\n\n\u8a18\u5f97\uff0c\u5728 useMemo \u88e1\u9762\u7684 function \u6703\u5728 render \u7684\u6642\u5019\u57f7\u884c\uff0c\u4e0d\u8981\u5728\u88e1\u9762\u505a\u53ef\u80fd\u9020\u6210\u975e\u9810\u671f\u884c\u70ba\u7684\u4e8b\uff0c\u50cf side effects \u8acb\u4f7f\u7528 useEffect\u3002\nRemember that the function passed to useMemo runs during rendering. Don\u2019t do anything there that you wouldn\u2019t normally do while rendering. For example, side effects belong in useEffect, not useMemo.\n\n\u5982\u679c\u6c92\u6709 dependencies array\uff0c\u6bcf\u6b21 render \u90fd\u6703\u91cd\u65b0\u8a08\u7b97 value\nIf no array is provided, a new value will be computed on every render.\n\n\u4f60\u53ef\u80fd\u6703\u628a useMemo \u7576\u4f5c\u6548\u80fd\u512a\u5316\u7684\u624b\u6bb5\uff0c\u4f46\u4f7f\u7528 useMemo \u4e0d\u4fdd\u8b49\u662f"\u512a\u5316"\nYou may rely on useMemo as a performance optimization, not as a semantic guarantee.\n\n*/\n')),(0,r.kt)("h3",{id:"\u5be6\u969b\u4f7f\u7528-memo-\u548c-usememo"},"\u5be6\u969b\u4f7f\u7528 memo \u548c useMemo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useState, useMemo } from "react";\n\nexport default function App() {\n  const [count, setCount] = useState(0);\n  const [mode, setMode] = useState("dark");\n\n  // mode \u6539\u8b8a\u6642\u91cd\u65b0\u57f7\u884c useMemo \u5167\u7684 function\n  const memoStyle = useMemo(() => {\n    return mode === "dark"\n      ? { name: "memoChild", mode: "light" }\n      : { name: "memoChild", mode: "dark" };\n  }, [mode]);\n\n  return (\n    <div className="App">\n      <h2>\u91cd\u65b0 render \u6b21\u6578: {count}</h2>\n      {/* \u9ede\u4e0a\u9762\u7684 button \u4e0d\u6703\u8b93 MemoChild \u91cd\u65b0 render\uff0c\u9ede\u4e0b\u9762\u7684\u6703 */}\n      <button onClick={handleCount}>add render times</button>\n      <button onClick={handleMode}>change mode</button>\n\n      <Child style={style} />\n      <MemoChild style={memoStyle} />\n    </div>\n  );\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/memo-usememo-ubnhml"},"CodeSandBox - memo, useMemo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useState, memo, useMemo } from "react";\n\nexport default function App() {\n  const [count, setCount] = useState(0);\n  const [mode, setMode] = useState("dark");\n\n  const handleCount = () => {\n    setCount((prev) => prev + 1); // render \u6b21\u6578 +1\n  };\n  const handleMode = () => {\n    setCount((prev) => prev + 1); // render \u6b21\u6578 +1\n    setMode(mode === "dark" ? "light" : "dark"); // \u66f4\u65b0 mode\n  };\n\n  const style =\n    mode === "dark"\n      ? { name: "Child", mode: "light" }\n      : { name: "Child", mode: "dark" };\n\n  // ** \u53ea\u6709 mode \u6539\u8b8a\u6642\uff0cuseMemo \u5167\u7684 function \u624d\u6703\u91cd\u65b0\u57f7\u884c **\n  const memoStyle = useMemo(() => {\n    return mode === "dark"\n      ? { name: "memoChild", mode: "light" }\n      : { name: "memoChild", mode: "dark" };\n  }, [mode]);\n\n  // \u4e0a\u9762\u7684 button \u8a08\u7b97 render \u6b21\u6578\uff0c\u53e6\u4e00\u500b button \u5207\u63db mode\n  return (\n    <div className="App">\n      <h2>\u91cd\u65b0 render \u6b21\u6578: {count}</h2>\n      <button onClick={handleCount}>add render times</button>\n      <button onClick={handleMode}>change mode</button>\n      // ** **\n      <Child style={style} />\n      <MemoChild style={memoStyle} />\n    </div>\n  );\n}\n\n// ** memo \u5305\u4f4f\u7684 component\uff0c\u53ea\u6709 props \u6539\u8b8a\u624d\u6703\u91cd\u65b0 render **\nconst MemoChild = memo(PropsNotChange);\nfunction PropsNotChange(props) {\n  console.log("MemoChild re-render");\n  return (\n    <div>\n      {props.style.name} mode: {props.style.mode}\n    </div>\n  );\n}\n\nfunction Child(props) {\n  console.log("child re-render");\n  return (\n    <div>\n      {props.style.name} mode:{props.style.mode}\n    </div>\n  );\n}\n')))}u.isMDXComponent=!0}}]);