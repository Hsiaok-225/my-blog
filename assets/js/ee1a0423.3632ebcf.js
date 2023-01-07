"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2067],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>d});var a=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var u=a.createContext({}),p=function(e){var n=a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=p(e.components);return a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(r),d=t,k=s["".concat(u,".").concat(d)]||s[d]||m[d]||l;return r?a.createElement(k,o(o({ref:n},c),{},{components:r})):a.createElement(k,o({ref:n},c))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:t,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},8254:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(7462),t=(r(7294),r(3905));const l={title:"array method"},o=void 0,i={unversionedId:"JavaScript/array method",id:"JavaScript/array method",title:"array method",description:"Array.sort() \u6392\u5e8f",source:"@site/docs/JavaScript/array method.md",sourceDirName:"JavaScript",slug:"/JavaScript/array method",permalink:"/my-blog/JavaScript/array method",draft:!1,tags:[],version:"current",lastUpdatedAt:1673098279,formattedLastUpdatedAt:"Jan 7, 2023",frontMatter:{title:"array method"},sidebar:"tutorialSidebar",previous:{title:"\u8a2d\u7f6e cors",permalink:"/my-blog/Express/CORS"},next:{title:"closure",permalink:"/my-blog/JavaScript/closure"}},u={},p=[{value:"Array.sort() \u6392\u5e8f",id:"arraysort-\u6392\u5e8f",level:2},{value:"\u9810\u8a2d\u6392\u5e8f",id:"\u9810\u8a2d\u6392\u5e8f",level:3},{value:"compareFunction \u600e\u9ebc\u770b",id:"comparefunction-\u600e\u9ebc\u770b",level:3},{value:"sort \u662f\u7528\u54ea\u7a2e\u6392\u5e8f\u6f14\u7b97\u6cd5",id:"sort-\u662f\u7528\u54ea\u7a2e\u6392\u5e8f\u6f14\u7b97\u6cd5",level:3},{value:"Array.join() \u5b57\u4e32\u8655\u7406 - 1",id:"arrayjoin-\u5b57\u4e32\u8655\u7406---1",level:2},{value:"Array.replaceAll() \u5b57\u4e32\u8655\u7406 - 2",id:"arrayreplaceall-\u5b57\u4e32\u8655\u7406---2",level:2},{value:"Array.every() \u6e2c\u8a66",id:"arrayevery-\u6e2c\u8a66",level:2},{value:"Array.from() \u65b0\u5efa\u9663\u5217",id:"arrayfrom-\u65b0\u5efa\u9663\u5217",level:2},{value:"\u5efa\u7acb\u6709 10 \u500b\u503c\u7684\u9663\u5217",id:"\u5efa\u7acb\u6709-10-\u500b\u503c\u7684\u9663\u5217",level:4}],c={toc:p};function m(e){let{components:n,...r}=e;return(0,t.kt)("wrapper",(0,a.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"arraysort-\u6392\u5e8f"},"Array.sort() \u6392\u5e8f"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"\u56de\u50b3\u6392\u5e8f\u5f8c\u7684\u9663\u5217")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u6703\u6539\u8b8a\u539f\u9663\u5217"),(0,t.kt)("li",{parentName:"ul"},"\u4f9d\u64da\u5143\u7d20\u7684 UniCode \u7de8\u78bc\u7684\u5927\u5c0f\u9032\u884c\u6392\u5e8f"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"\u6709\u6642\u5019\u9700\u8981\u5148\u5c0d\u9663\u5217\u505a\u6392\u5e8f\u8655\u7406"))),(0,t.kt)("p",null,"\u7531 compareFunction \u5b9a\u7fa9\u6392\u5e8f\u7684\u9806\u5e8f\uff0c\u9810\u8a2d\u70ba\u4f9d\u7167 UniCode \u7684\u5927\u5c0f\u9032\u884c\u6392\u5e8f"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"// \u63a5\u6536\u4e00\u500b callback function\nArray.sort(compareFunction);\n")),(0,t.kt)("h3",{id:"\u9810\u8a2d\u6392\u5e8f"},"\u9810\u8a2d\u6392\u5e8f"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"// \u6e2c\u8a66\u5b57\u4e32\u6392\u5e8f\nconst stringArray = [\"b\", \"P\", \"a\", \"c\"];\nconsole.log(arr.sort()); // [ 'P', 'a', 'b', 'c' ]\n\n// \u67e5\u770b\u4e00\u4e0b\u6bcf\u500b\u5143\u7d20\u7684 UniCode\nstringArray.forEach((e) => {\n  console.log(e, e.charCodeAt(0)); //  b 98, P 80, a 97, c 99\n});\n\n// \u6e2c\u8a66\u6578\u5b57\u6392\u5e8f\nconst numberArray = [40, 1, 5, 200];\nnumberArray.sort(); // [ 1, 200, 40, 5 ]\n\n// \u9019\u908a\u8981\u628a Number \u8f49\u6210 String\nnumberArray.forEach((number) => {\n  console.log(number, String(number).charCodeAt(0)); // 40 52, 1 49, 5 53, 200 50\n});\n")),(0,t.kt)("h3",{id:"comparefunction-\u600e\u9ebc\u770b"},"compareFunction \u600e\u9ebc\u770b"),(0,t.kt)("p",null,"\u4f9d\u64da MDN \u7684\u898f\u7bc4\uff0ccompareFn \u7684\u898f\u5247\u662f\u9019\u6a23\u7684:"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"compareFn \u6703\u50b3\u5165 a \u548c b\uff0c\u7136\u5f8c return \u4e00\u500b value")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,t.kt)("inlineCode",{parentName:"li"},"return value > 0"),", \u628a a \u6392\u5e8f\u5728 b \u4e4b\u5f8c ",(0,t.kt)("inlineCode",{parentName:"li"},"[b, a]")),(0,t.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,t.kt)("inlineCode",{parentName:"li"},"return value < 0"),", \u628a a \u6392\u5e8f\u5728 b \u4e4b\u524d ",(0,t.kt)("inlineCode",{parentName:"li"},"[a, b]")),(0,t.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,t.kt)("inlineCode",{parentName:"li"},"return value = 0"),", \u7dad\u6301\u539f\u4f86\u7684\u9806\u5e8f\u4e0d\u8b8a")),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",{parentName:"tr",align:null},"compareFn(a, b)\xa0return value"),(0,t.kt)("th",{parentName:"tr",align:null},"sort order"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"> 0"),(0,t.kt)("td",{parentName:"tr",align:null},"sort\xa0a\xa0after\xa0b")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"< 0"),(0,t.kt)("td",{parentName:"tr",align:null},"sort\xa0a\xa0before\xa0b")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"=== 0"),(0,t.kt)("td",{parentName:"tr",align:null},"keep original order of\xa0a\xa0and\xa0b")))),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"// compareFn \u4f9d\u64da\u4ee5\u4e0b\u898f\u5247:\n\nfunction compare(a, b) {\n  // \u5982\u679c a < b \u7684\u8a71\n  if (a < b) {\n    return -1; // \u8b93 a \u6392\u5728 b \u4e4b\u524d [a, b]\n  }\n  // \u5982\u679c a > b \u7684\u8a71\n  if (a > b) {\n    return 1; // \u8b93 a \u6392\u5728 b \u4e4b\u5f8c [b, a]\n  }\n  // a = b\n  return 0; // \u7dad\u6301\u539f\u672c\u4f4d\u7f6e\n}\n")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"\u57fa\u65bc\u6578\u5b57\u7684\u6392\u5e8f"),": \u4f9d\u539f\u672c ",(0,t.kt)("inlineCode",{parentName:"p"},"compareFn \u898f\u5247")," \u5c31\u6703\u662f\u7531\u5c0f\u5230\u5927\u6392"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"// \u76f4\u63a5\u4f7f\u7528 compareFn \u9810\u8a2d\u898f\u5247\nconst numbers = [2, 5, 100, 4];\nconst sortedNumbers = numbers.sort((a, b) => {\n  if (a < b) {\n    return -1;\n  }\n  if (a > b) {\n    return 1;\n  }\n  return 0;\n});\nconsole.log(sortedNumbers); // [ 2, 4, 5, 100 ]\n\n// \u5c0f\u5230\u5927\u6392\u5e8f\u7684\u7c21\u5beb\nfunction compareNumbers(a, b) {\n  return a - b; // [2, 5] return -3, \u6392\u5e8f\u5b8c [2, 5]\n}\narr.sort((a, b) => a - b);\n\n// \u5927\u5230\u5c0f\u6392\u5e8f\u7684\u7c21\u5beb\nfunction compareNumbers(a, b) {\n  return b - a; // [2, 5] return 3, \u6392\u5e8f\u5b8c [5, 2]\n}\narr.sort((a, b) => b - a);\n")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"\u5c0d\u7269\u4ef6\u5c6c\u6027\u505a\u6392\u5e8f")),(0,t.kt)("p",null,"String \u7684\u6bd4\u8f03\u53ef\u4ee5\u53c3\u8003: ",(0,t.kt)("a",{parentName:"p",href:"https://www.freecodecamp.org/news/javascript-string-comparison-how-to-compare-strings-in-js/"},"How to Compare Strings in JS")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"const items = [\n  { name: \"Edward\", value: 21 },\n  { name: \"Sharpe\", value: 37 },\n  { name: \"And\", value: 45 },\n  { name: \"The\", value: -12 },\n  { name: \"Magnetic\", value: 13 },\n  { name: \"Zeros\", value: 37 },\n];\n\n// sort by value\nitems.sort((a, b) => a.value - b.value);\n\n// sort by name\uff0c\u5f9e\u7b2c\u4e00\u500b\u5b57\u6bcd\u7684 UniCode \u958b\u59cb\u6bd4\u8f03(\u76f8\u540c\u6bd4\u7b2c\u4e8c\u500b\u5b57\u6bcd\u7684)\nitems.sort((a, b) => {\n  const nameA = a.name.toUpperCase(); // ignore upper and lowercase\n  const nameB = b.name.toUpperCase(); // ignore upper and lowercase\n  if (nameA < nameB) {\n    return -1;\n  }\n  if (nameA > nameB) {\n    return 1;\n  }\n\n  // names must be equal\n  return 0;\n});\n\nconsole.log(items);\n/* \nOutput:\n[\n  { name: 'And', value: 45 },\n  { name: 'Edward', value: 21 },\n  { name: 'Magnetic', value: 13 },\n  { name: 'Sharpe', value: 37 },\n  { name: 'The', value: -12 },\n  { name: 'Zeros', value: 37 }\n]\n*/\n")),(0,t.kt)("h3",{id:"sort-\u662f\u7528\u54ea\u7a2e\u6392\u5e8f\u6f14\u7b97\u6cd5"},"sort \u662f\u7528\u54ea\u7a2e\u6392\u5e8f\u6f14\u7b97\u6cd5"),(0,t.kt)("p",null,"updating..."),(0,t.kt)("h2",{id:"arrayjoin-\u5b57\u4e32\u8655\u7406---1"},"Array.join() \u5b57\u4e32\u8655\u7406 - 1"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"\u5c07\u9663\u5217\u6216 ",(0,t.kt)("inlineCode",{parentName:"p"},"array-like")," \u7684\u5143\u7d20\u5408\u4f75\u4e26\u56de\u50b3\u4e00\u500b\u5b57\u4e32")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"arr.join([separator]); // \u5982\u679c\u6c92\u50b3\u53c3\u6578\u7684\u8a71\uff0c\u9810\u8a2d\u7528\u82f1\u6587\u9017\u865f , \u9694\u958b\n")),(0,t.kt)("p",null,"MDN \u7bc4\u4f8b:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'var a = ["Wind", "Rain", "Fire"];\n\n// separator \u662f\u7a7a\u5b57\u4e32\uff0c\u5408\u4f75\u5f8c\uff0c\u5143\u7d20\u9593\u4e0d\u6703\u6709\u4efb\u4f55\u5b57\u5143\na.join(""); // \'WindRainFire\'\n\n// \u7528\u9017\u865f\u548c\u7a7a\u767d\u9694\u958b\na.join(", "); // \'Wind, Rain, Fire\'\n\na.join(" + "); // \'Wind + Rain + Fire\'\n\n// \u6c92\u50b3\u4efb\u4f55\u53c3\u6578\uff0c\u7528\u9017\u865f\u9694\u958b\na.join(); // \'Wind,Rain,Fire\'\n')),(0,t.kt)("h2",{id:"arrayreplaceall-\u5b57\u4e32\u8655\u7406---2"},"Array.replaceAll() \u5b57\u4e32\u8655\u7406 - 2"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Updating...")),(0,t.kt)("h2",{id:"arrayevery-\u6e2c\u8a66"},"Array.every() \u6e2c\u8a66"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"\u6e2c\u8a66\u9663\u5217\u4e2d\u7684\u6240\u6709\u5143\u7d20\u662f\u5426\u90fd\u901a\u904e callback \u8a2d\u5b9a\u7684\u689d\u4ef6\uff0c\u4e26\u56de\u50b3 Boolean")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'Array.every(callback);\n\n// MDN example:\nconst arr = [1, 30, 39, 29, 10, 13];\nconst isBelowThreshold = (currentValue) => currentValue < 40;\nconsole.log(arr.every(isBelowThreshold)); // true\n\n// \u6e2c\u8a66\u5b57\u4e32\u662f\u5426\u542b\u6709 a-z\nfunction isPangram(string) {\n  string = string.toLowerCase();\n  let newarr = "abcdefghijklmnopqrstuvwxyz".split(""); // [a-z]\n  return newarr.every((letter) => string.includes(letter)); // \u5143\u7d20\u5168\u90e8\u7b26\u5408\u689d\u4ef6\u624d return true\uff0c\u5426\u5247 return false\n}\n\nconsole.log(isPangram("The quick brown fox")); // false\nconsole.log(isPangram("The quick brown fox jumps over the lazy dog")); // true\n')),(0,t.kt)("h2",{id:"arrayfrom-\u65b0\u5efa\u9663\u5217"},"Array.from() \u65b0\u5efa\u9663\u5217"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u65b0\u5efa\u4e00\u500b\u9663\u5217 (\u5e38\u7528)"),(0,t.kt)("li",{parentName:"ul"},"\u5c07 array-like \u6216 iterable \u7269\u4ef6\u8f49\u70ba\u4e00\u822c\u9663\u5217")),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"\u57fa\u65bc ",(0,t.kt)("inlineCode",{parentName:"p"},"iterable")," \u6216 ",(0,t.kt)("inlineCode",{parentName:"p"},"array-like")," \u7269\u4ef6\uff0c\u56de\u50b3\u6dfa\u62f7\u8c9d\u7684 Array instance")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'// \u8a9e\u6cd5\nArray.from(arrayLike);\n\n// \u53ef\u63a5\u6536 map Function \u4f5c\u70ba\u7b2c\u4e8c\u500b\u53c3\u6578\u8655\u7406 arrayLike object\nArray.from(arrayLike, mapFn);\nArray.from(arrayLike, (element, index) => {\n  //\n});\n\n// example:\nconsole.log(Array.from("foo")); // ["f", "o", "o"]\nconsole.log(Array.from([1, 2, 3], (x) => x + x)); // [2, 4, 6]\n')),(0,t.kt)("h4",{id:"\u5efa\u7acb\u6709-10-\u500b\u503c\u7684\u9663\u5217"},"\u5efa\u7acb\u6709 10 \u500b\u503c\u7684\u9663\u5217"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"// Array(n) \u5efa\u7acb\u6709 n \u500b\u7a7a\u503c(empty)\u7684 array\nArray.from(Array(10).keys());\nArray.from(Array(10), (e, i) => i + 1)\nArray.from({length: 10}, (e, i) => i + 1)\n\n// Spread Operator\n[...Array(10).keys()]\n// \u4ee5\u4e0a\u7d50\u679c\u5747\u70ba [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\n")))}m.isMDXComponent=!0}}]);