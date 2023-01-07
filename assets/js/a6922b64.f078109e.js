"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8388],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=l.createContext({}),c=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return l.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,v=u["".concat(p,".").concat(m)]||u[m]||s[m]||a;return n?l.createElement(v,i(i({ref:t},d),{},{components:n})):l.createElement(v,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var l=n(7462),r=(n(7294),n(3905));const a={title:"event delegation"},i="event delegation \u4e8b\u4ef6\u4ee3\u7406",o={unversionedId:"JavaScript/event delegation",id:"JavaScript/event delegation",title:"event delegation",description:"\u5148\u770b\u770b\u4ee5\u4e0b\u7684\u4f8b\u5b50",source:"@site/docs/JavaScript/event delegation.md",sourceDirName:"JavaScript",slug:"/JavaScript/event delegation",permalink:"/my-blog/JavaScript/event delegation",draft:!1,tags:[],version:"current",lastUpdatedAt:1671988763,formattedLastUpdatedAt:"Dec 25, 2022",frontMatter:{title:"event delegation"},sidebar:"tutorialSidebar",previous:{title:"closure",permalink:"/my-blog/JavaScript/closure"},next:{title:"JS \u4e2d\u7684 for loop \u65b9\u6cd5",permalink:"/my-blog/JavaScript/for loop"}},p={},c=[{value:"EventListener \u7684\u4e09\u500b\u53c3\u6578",id:"eventlistener-\u7684\u4e09\u500b\u53c3\u6578",level:2},{value:"<code>type</code> \u6307\u5b9a\u4e8b\u4ef6\u540d",id:"type-\u6307\u5b9a\u4e8b\u4ef6\u540d",level:4},{value:"<code>listener</code> \u6307\u5b9a\u4e8b\u4ef6\u89f8\u767c\u6642\u57f7\u884c\u7684\u51fd\u6578",id:"listener-\u6307\u5b9a\u4e8b\u4ef6\u89f8\u767c\u6642\u57f7\u884c\u7684\u51fd\u6578",level:4},{value:"<code>useCapture</code> \u5e03\u6797\u503c(\u9810\u8a2d\u70ba false)\uff0c\u6307\u5b9a\u4e8b\u4ef6\u5728\u6355\u7372\u6216\u5192\u6ce1\u968e\u6bb5\u57f7\u884c",id:"usecapture-\u5e03\u6797\u503c\u9810\u8a2d\u70ba-false\u6307\u5b9a\u4e8b\u4ef6\u5728\u6355\u7372\u6216\u5192\u6ce1\u968e\u6bb5\u57f7\u884c",level:4},{value:"DOM \u7684\u4e8b\u4ef6\u5192\u6ce1\u3001\u4e8b\u4ef6\u6355\u7372",id:"dom-\u7684\u4e8b\u4ef6\u5192\u6ce1\u4e8b\u4ef6\u6355\u7372",level:2},{value:"\u4e8b\u4ef6\u5192\u6ce1\u968e\u6bb5",id:"\u4e8b\u4ef6\u5192\u6ce1\u968e\u6bb5",level:3},{value:"<strong>Note: eventlistener \u9810\u8a2d\u70ba\u5192\u6ce1</strong>",id:"note-eventlistener-\u9810\u8a2d\u70ba\u5192\u6ce1",level:4},{value:"\u4e8b\u4ef6\u6355\u7372\u968e\u6bb5",id:"\u4e8b\u4ef6\u6355\u7372\u968e\u6bb5",level:3},{value:"\u76ee\u6a19\u968e\u6bb5",id:"\u76ee\u6a19\u968e\u6bb5",level:3},{value:"\u4e8b\u4ef6\u4ee3\u7406\u7684\u5be6\u969b\u61c9\u7528",id:"\u4e8b\u4ef6\u4ee3\u7406\u7684\u5be6\u969b\u61c9\u7528",level:2}],d={toc:c};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"event-delegation-\u4e8b\u4ef6\u4ee3\u7406"},"event delegation \u4e8b\u4ef6\u4ee3\u7406"),(0,r.kt)("p",null,"\u5148\u770b\u770b\u4ee5\u4e0b\u7684\u4f8b\u5b50"),(0,r.kt)("p",null,"\u6211\u5011\u5728 button \u5916\u9762\u52a0\u4e0a\u4e00\u500b inner \u5143\u7d20\u548c outer \u5143\u7d20\u4e26\u52a0\u4e0a click \u4e8b\u4ef6\uff0c\u7576\u9ede\u64ca button \u6642\uff0c\u54ea\u500b\u4e8b\u4ef6\u6703\u5148\u88ab\u89f8\u767c\u5462 ?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="/src/index.html"',title:'"/src/index.html"'},'<div class="outer">\n  <div class="inner">\n    <button class="btn">click</button>\n  </div>\n</div>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/src/index.js"',title:'"/src/index.js"'},'function addEvent(classname) {\n  document.querySelector(classname).addEventListener("click", () => {\n    console.log(classname);\n  });\n}\naddEvent(".outer");\naddEvent(".inner");\naddEvent(".btn");\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"eventDelegation",src:n(1378).Z,width:"686",height:"473"})),(0,r.kt)("h2",{id:"eventlistener-\u7684\u4e09\u500b\u53c3\u6578"},"EventListener \u7684\u4e09\u500b\u53c3\u6578"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"addEventListener(type, listener, useCapture);\n")),(0,r.kt)("h4",{id:"type-\u6307\u5b9a\u4e8b\u4ef6\u540d"},(0,r.kt)("inlineCode",{parentName:"h4"},"type")," \u6307\u5b9a\u4e8b\u4ef6\u540d"),(0,r.kt)("h4",{id:"listener-\u6307\u5b9a\u4e8b\u4ef6\u89f8\u767c\u6642\u57f7\u884c\u7684\u51fd\u6578"},(0,r.kt)("inlineCode",{parentName:"h4"},"listener")," \u6307\u5b9a\u4e8b\u4ef6\u89f8\u767c\u6642\u57f7\u884c\u7684\u51fd\u6578"),(0,r.kt)("h4",{id:"usecapture-\u5e03\u6797\u503c\u9810\u8a2d\u70ba-false\u6307\u5b9a\u4e8b\u4ef6\u5728\u6355\u7372\u6216\u5192\u6ce1\u968e\u6bb5\u57f7\u884c"},(0,r.kt)("inlineCode",{parentName:"h4"},"useCapture")," \u5e03\u6797\u503c(\u9810\u8a2d\u70ba false)\uff0c\u6307\u5b9a\u4e8b\u4ef6\u5728\u6355\u7372\u6216\u5192\u6ce1\u968e\u6bb5\u57f7\u884c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"true -\u4e8b\u4ef6\u6703\u5728\u6355\u7372\u968e\u6bb5\u57f7\u884c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"false -\u4e8b\u4ef6\u6703\u5728\u5192\u6ce1\u968e\u6bb5\u57f7\u884c"))),(0,r.kt)("h2",{id:"dom-\u7684\u4e8b\u4ef6\u5192\u6ce1\u4e8b\u4ef6\u6355\u7372"},"DOM \u7684\u4e8b\u4ef6\u5192\u6ce1\u3001\u4e8b\u4ef6\u6355\u7372"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"DOM \u5206\u5225\u6709\u4e8b\u4ef6\u5192\u6ce1\u548c\u4e8b\u4ef6\u6355\u7372\u5169\u500b\u6982\u5ff5\uff0c\u800c\u9019\u5169\u500b\u6982\u5ff5\u90fd\u662f\u70ba\u4e86",(0,r.kt)("strong",{parentName:"p"},"\u89e3\u6c7a\u9801\u9762\u4e2d\u4e8b\u4ef6\u6d41\uff08\u4e8b\u4ef6\u767c\u751f\u9806\u5e8f\uff09\u7684\u554f\u984c"),"\u3002")),(0,r.kt)("h3",{id:"\u4e8b\u4ef6\u5192\u6ce1\u968e\u6bb5"},"\u4e8b\u4ef6\u5192\u6ce1\u968e\u6bb5"),(0,r.kt)("h4",{id:"note-eventlistener-\u9810\u8a2d\u70ba\u5192\u6ce1"},(0,r.kt)("strong",{parentName:"h4"},"Note: eventlistener \u9810\u8a2d\u70ba\u5192\u6ce1")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5fae\u8edf\u63d0\u51fa\u4e86\u4e8b\u4ef6\u5192\u6ce1(event bubbling)\u7684\u4e8b\u4ef6\u6d41\u3002\u4e8b\u4ef6\u5192\u6ce1\u53ef\u4ee5\u6bd4\u55bb\u70ba\u6ce1\u6ce1\u5f9e\u6c34\u5e95\u5192\u51fa\u6c34\u9762\u7684\u904e\u7a0b\u3002\u4e5f\u5c31\u662f\u8aaa\uff0c\u4e8b\u4ef6\u6703\u5f9e\u6700\u5167\u5c64\u7684\u5143\u7d20\u958b\u59cb\u767c\u751f\uff0c\u4e00\u76f4\u5411\u4e0a\u50b3\u64ad\uff0c\u76f4\u5230 document\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u56e0\u6b64\u4e0a\u9762\u7684\u4f8b\u5b50\u5728\u4e8b\u4ef6\u5192\u6ce1\u7684\u6982\u5ff5\u4e0b\u767c\u751f click \u4e8b\u4ef6\u7684\u9806\u5e8f\u61c9\u8a72\u662f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"div btn -> div inner -> div outer -> body -> html -> document\n")),(0,r.kt)("h3",{id:"\u4e8b\u4ef6\u6355\u7372\u968e\u6bb5"},"\u4e8b\u4ef6\u6355\u7372\u968e\u6bb5"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u7db2\u666f\u63d0\u51fa\u53e6\u4e00\u7a2e\u4e8b\u4ef6\u6d41\u540d\u70ba\u4e8b\u4ef6\u6355\u7372(event capturing)\u3002\u8207\u4e8b\u4ef6\u5192\u6ce1\u76f8\u53cd\uff0c\u4e8b\u4ef6\u6703\u5f9e\u6700\u5916\u5c64\u958b\u59cb\u767c\u751f\uff0c\u76f4\u5230\u76ee\u6a19\u5143\u7d20\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u56e0\u6b64\u4e0a\u9762\u7684\u4f8b\u5b50\u5728\u4e8b\u4ef6\u6355\u7372\u7684\u6982\u5ff5\u4e0b\u767c\u751f click \u4e8b\u4ef6\u7684\u9806\u5e8f\u61c9\u8a72\u662f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"document -> html -> body -> div outer -> div inner -> div btn\n")),(0,r.kt)("h3",{id:"\u76ee\u6a19\u968e\u6bb5"},"\u76ee\u6a19\u968e\u6bb5"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u201c target \u5c31\u662f\u4f60\u6240\u9ede\u64ca\u7684\u90a3\u500b\u76ee\u6a19 \u201d"),"\uff0c\u9019\u6642\u5019\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"target"),"\u8eab\u4e0a\u6240\u52a0\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"eventListenr"),"\u6703\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"AT_TARGET"),"\u9019\u4e00\u500b Phase\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u76ee\u6a19\u968e\u6bb5\u6c92\u6709\u5206\u6355\u7372\u6216\u5192\u6ce1\uff0c\u5982\u679c\u540c\u6642\u6709\u5192\u6ce1\u548c\u6355\u7372\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"eventListener")," \u5728\u4e0a\u9762\uff0c\u57f7\u884c\u9806\u5e8f\u5be6\u969b\u6703\u4f9d\u700f\u89bd\u5668\u6709\u6240\u4e0d\u540c\uff0cChrome \u4e0d\u8ad6\u4e8b\u4ef6\u6dfb\u52a0\u7684\u5148\u5f8c\u9806\u5e8f\uff0c\u90fd\u662f\u5148\u6355\u7372\u5f8c\u5192\u6ce1")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"eventFlow",src:n(6770).Z,width:"520",height:"560"})),(0,r.kt)("h2",{id:"\u4e8b\u4ef6\u4ee3\u7406\u7684\u5be6\u969b\u61c9\u7528"},"\u4e8b\u4ef6\u4ee3\u7406\u7684\u5be6\u969b\u61c9\u7528"),(0,r.kt)("p",null,"\u5e95\u4e0b\u7684\u4f8b\u5b50\u6709\u4e00\u500b ul\uff0c\u5e95\u4e0b\u6709\u5f88\u591a\u500b li\uff0c\u5982\u679c\u6bcf\u4e00\u500b li \u90fd\u52a0\u4e0a\u4e00\u500b eventListener\uff0c\u6709 1000 \u500b\uff0c\u7a0b\u5f0f\u5c31\u9700\u8981\u591a\u52a0 1000 \u500b eventListener"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="/src/index.html"',title:'"/src/index.html"'},'<html>\n  <body>\n    <ul id="list">\n      <li data-index="1">1</li>\n      <li data-index="2">2</li>\n      <li data-index="3">3</li>\n      \x3c!-- \u5f88\u591a li \u5143\u7d20 --\x3e\n      <li data-index="1000">1000</li>\n    </ul>\n  </body>\n</html>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/src/index.js"',title:'"/src/index.js"'},'document.getElementById("list").addEventListener("click", (e) => {\n  console.log(e.target.getAttribute("data-index"));\n});\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6211\u5011\u525b\u525b\u5df2\u7d93\u77e5\u9053 ",(0,r.kt)("strong",{parentName:"li"},"(eventLisener \u9810\u8a2d\u70ba\u5192\u6ce1)"),"\uff0c",(0,r.kt)("strong",{parentName:"li"},"\u4efb\u4f55\u9ede\u64ca li (\u5b50\u5143\u4ef6) \u7684\u4e8b\u4ef6\u5176\u5be6\u90fd\u6703\u50b3\u5230 ul (\u5916\u5c64\u5143\u4ef6) \u8eab\u4e0a"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"eventFlow",src:n(2012).Z,width:"352",height:"560"})),(0,r.kt)("p",null,"\u7531\u65bc\u4e8b\u4ef6\u5192\u6ce1\uff0c\u9ede\u64ca ",(0,r.kt)("inlineCode",{parentName:"p"},"li")," \u6642\uff0c\u4e8b\u4ef6\u900f\u904e ",(0,r.kt)("inlineCode",{parentName:"p"},"bubbling phase")," \u50b3\u905e\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"ul")," \uff0c\u6b64\u6642\u5c31\u6703\u89f8\u767c\u7d81\u5b9a\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"ul")," \u4e0a\u7684 click \u4e8b\u4ef6\uff0c\u518d\u900f\u904e ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," \u627e\u5230\u4e8b\u4ef6\u5be6\u969b\u767c\u751f\u7684\u5143\u7d20\uff0c\u56e0\u6b64\u6211\u5011\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"ul")," \u8eab\u4e0a\u639b\u4e00\u500b listener\uff0c\u5c31\u53ef\u4ee5\u9054\u5230\u9810\u671f\u7684\u6548\u679c\u3002"))}s.isMDXComponent=!0},1378:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/event-delegation-5f8ed5bafba87932ed2f267b055ddf91.jpg"},6770:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/eventflow-5e40255623948c97a30822f7b33daba6.png"},2012:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/eventflow2-56468ac03af6829c744eaef99c73908c.png"}}]);