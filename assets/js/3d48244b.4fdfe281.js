"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8926],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>m});var a=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function r(n,e){if(null==n)return{};var t,a,o=function(n,e){if(null==n)return{};var t,a,o={},l=Object.keys(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var s=a.createContext({}),c=function(n){var e=a.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=c(n.components);return a.createElement(s.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,o=n.mdxType,l=n.originalType,s=n.parentName,u=r(n,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return t?a.createElement(f,i(i({ref:e},u),{},{components:t})):a.createElement(f,i({ref:e},u))}));function m(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var l=t.length,i=new Array(l);i[0]=d;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=n,r.mdxType="string"==typeof n?n:o,i[1]=r;for(var c=2;c<l;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3016:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var a=t(7462),o=(t(7294),t(3905));const l={title:"This"},i="\u7269\u4ef6\u5c0e\u5411\u8207 This \u7684\u610f\u7fa9",r={unversionedId:"JavaScript/This",id:"JavaScript/This",title:"This",description:"\u5404\u7a2e\u60c5\u6cc1\u4e0b this \u7684\u9810\u8a2d\u503c",source:"@site/docs/JavaScript/This.md",sourceDirName:"JavaScript",slug:"/JavaScript/This",permalink:"/my-blog/JavaScript/This",draft:!1,tags:[],version:"current",frontMatter:{title:"This"},sidebar:"tutorialSidebar",previous:{title:"Promise",permalink:"/my-blog/JavaScript/Promise"},next:{title:"array method",permalink:"/my-blog/JavaScript/array method"}},s={},c=[{value:"\u5404\u7a2e\u60c5\u6cc1\u4e0b this \u7684\u9810\u8a2d\u503c",id:"\u5404\u7a2e\u60c5\u6cc1\u4e0b-this-\u7684\u9810\u8a2d\u503c",level:2},{value:"\u5728\u7269\u4ef6\u5c0e\u5411 ( OOP ) \u548c obj \u4e2d\u4f7f\u7528",id:"\u5728\u7269\u4ef6\u5c0e\u5411--oop--\u548c-obj-\u4e2d\u4f7f\u7528",level:3},{value:"\u5728 Function \u4e2d\u4f7f\u7528, \u6307\u5411\u5168\u57df\u74b0\u5883 window/global/undefined",id:"\u5728-function-\u4e2d\u4f7f\u7528-\u6307\u5411\u5168\u57df\u74b0\u5883-windowglobalundefined",level:3},{value:"\u7bad\u982d\u51fd\u5f0f ( arrow function ) \u7684 this",id:"\u7bad\u982d\u51fd\u5f0f--arrow-function--\u7684-this",level:3},{value:"\u5728 DOM \u74b0\u5883\u4e2d\u7684 this",id:"\u5728-dom-\u74b0\u5883\u4e2d\u7684-this",level:3},{value:"\u547c\u53eb function \u7684\u65b9\u6cd5 .call( ) .apply( )",id:"\u547c\u53eb-function-\u7684\u65b9\u6cd5-call--apply-",level:2},{value:".bind( ) \u5f37\u5236\u7d81\u5b9a this",id:"bind--\u5f37\u5236\u7d81\u5b9a-this",level:2}],u={toc:c};function p(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u7269\u4ef6\u5c0e\u5411\u8207-this-\u7684\u610f\u7fa9"},"\u7269\u4ef6\u5c0e\u5411\u8207 This \u7684\u610f\u7fa9"),(0,o.kt)("h2",{id:"\u5404\u7a2e\u60c5\u6cc1\u4e0b-this-\u7684\u9810\u8a2d\u503c"},"\u5404\u7a2e\u60c5\u6cc1\u4e0b this \u7684\u9810\u8a2d\u503c"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"OOP(\u7269\u4ef6\u5c0e\u5411)\u3001obj")," ",(0,o.kt)("inlineCode",{parentName:"li"},"\u6307\u5411 class \u6216 obj \u672c\u8eab")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Function")," ",(0,o.kt)("inlineCode",{parentName:"li"},"\u6307\u5411\u5168\u57df\u74b0\u5883 window, global(strict\u6a21\u5f0f\u4e0b \u2192 undefined)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Arrow Function")," ",(0,o.kt)("inlineCode",{parentName:"li"},"this \u70ba\u4e00\u958b\u59cb\u5b9a\u7fa9\u7684\u503c")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"DOM (eventListener)")," ",(0,o.kt)("inlineCode",{parentName:"li"},"DOM element"))),(0,o.kt)("h3",{id:"\u5728\u7269\u4ef6\u5c0e\u5411--oop--\u548c-obj-\u4e2d\u4f7f\u7528"},"\u5728\u7269\u4ef6\u5c0e\u5411 ( OOP ) \u548c obj \u4e2d\u4f7f\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u5728\u7269\u4ef6\u5c0e\u5411(OOP)\u6642, \u6307\u5411 class \u672c\u8eab\nclass Cat {\n  constructor(name) {\n    this.name = name;\n  }\n  sayMeow() {\n    console.log(this);\n    console.log(this.name, \"meow\");\n  }\n}\n\nlet fatCat = new Cat(\"fatCat\");\nfatCat.sayMeow(); // Cat {name:'fatCat'} 'fatCat meow'\n\n//\u5728\u7269\u4ef6(obj)\u4e2d\u4f7f\u7528, \u6307\u5411 obj \u672c\u8eab\nconst obj = {\n  name: \"apple\",\n  sayName: function () {\n    console.log(this.name);\n  },\n};\n\nobj.sayName(); // 'apple'\n")),(0,o.kt)("h3",{id:"\u5728-function-\u4e2d\u4f7f\u7528-\u6307\u5411\u5168\u57df\u74b0\u5883-windowglobalundefined"},"\u5728 Function \u4e2d\u4f7f\u7528, \u6307\u5411\u5168\u57df\u74b0\u5883 window/global/undefined"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function func() {\n  function a() {\n    console.log(this);\n  }\n  a();\n}\nfunc();\n// \u700f\u89bd\u5668 > window\n// node.js > global\n// use strict > undefined\n")),(0,o.kt)("h3",{id:"\u7bad\u982d\u51fd\u5f0f--arrow-function--\u7684-this"},"\u7bad\u982d\u51fd\u5f0f ( arrow function ) \u7684 this"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8207\u600e\u9ebc\u547c\u53eb\u7121\u95dc"),(0,o.kt)("li",{parentName:"ul"},"\u8ddf this \u5728\u54ea\u88e1\u88ab\u5b9a\u7fa9\u6709\u95dc\u4fc2, \u985e\u4f3c scope \u7684\u884c\u70ba ( \u6703\u662f this \u6700\u4e00\u958b\u59cb\u88ab\u5b9a\u7fa9\u7684\u6642\u5019\u7684 this \u7684\u503c )")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// \u4e00\u822c function \u7684 this\nclass Test {\n  run() {\n    console.log("run this", this); // run this Test{}\n    setTimeout(function () {\n      console.log(this);\n    }, 1000); // Window\n  }\n}\nlet a = new Test();\na.run();\n\n// arrow function \u7684 this\nclass Test {\n  run() {\n    console.log("run this", this); // run this Test{}, this \u5728\u9019\u884c\u88ab\u5b9a\u7fa9\n    setTimeout(() => {\n      console.log(this);\n    }, 1000); // Test{}\n  }\n}\nlet a = new Test();\na.run();\n')),(0,o.kt)("h3",{id:"\u5728-dom-\u74b0\u5883\u4e2d\u7684-this"},"\u5728 DOM \u74b0\u5883\u4e2d\u7684 this"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'document.querySelector("#obj").addEventListener("Click", () => {\n  console.log(this);\n});\n// \'DOM obj\'\n// ex: \u9ede button\uff0cthis \u6703\u662f\u9ede\u5230\u7684 button\n')),(0,o.kt)("h2",{id:"\u547c\u53eb-function-\u7684\u65b9\u6cd5-call--apply-"},"\u547c\u53eb function \u7684\u65b9\u6cd5 .call( ) .apply( )"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"call \u548c apply \u65b9\u6cd5\u7b2c\u4e00\u500b\u50b3\u7684\u503c\u5c31\u6703\u662f this \u7684\u503c")),(0,o.kt)("p",null,".call( )"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// .call() \u6703\u628a this \u7684\u503c\u63db\u6210\u50b3\u5165\u7684\u53c3\u6578\nfunction test() {\n  console.log(this); // 123\n}\n\ntest.call(123); // .call() \u88e1\u9762\u7b2c\u4e00\u500b\u50b3\u7684\u503c\u5c31\u6703\u662f this \u7684\u503c\n\n// function \u63a5\u6536\u5176\u4ed6\u53c3\u6578\u6642\nfunction test(a, b, c) {\n  console.log(this); // Output: 123\n  console.log(a, b, c); // Output: 1,2,3\n}\n")),(0,o.kt)("p",null,".apply( )"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// call \u548c apply \u65b9\u6cd5\u7684\u5dee\u7570\ntest.call(123, 1, 2, 3); // \u7528\u9017\u865f\u4f86\u5206\u9694\u53c3\u6578\ntest.apply(123, [1, 2, 3]); // \u7b2c\u4e8c\u500b\u53c3\u6578\u662f\u9663\u5217\n")),(0,o.kt)("h2",{id:"bind--\u5f37\u5236\u7d81\u5b9a-this"},".bind( ) \u5f37\u5236\u7d81\u5b9a this"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Function.bind()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'"use strict";\n\nconst obj = {\n  a: 1,\n  test: function () {\n    console.log(this);\n  },\n};\nconst bindTest = obj.test.bind("anything"); // bind \u56de\u50b3 bindTest function, call \u548c apply \u5247\u662f\u76f4\u63a5\u547c\u53eb\nbindTest(); // Output: anything\n')))}p.isMDXComponent=!0}}]);