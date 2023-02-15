"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[1389],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),f=a,k=s["".concat(o,".").concat(f)]||s[f]||m[f]||l;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=f;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7887:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={title:"\u7ec4\u4ef6\u57fa\u7840",sidebar_position:1,last_update:{date:"2023/02/09",author:"\u5362\u8fb0\u5029"}},i="\u7ec4\u4ef6\u57fa\u7840",c={unversionedId:"react/\u7ec4\u4ef6\u57fa\u7840",id:"react/\u7ec4\u4ef6\u57fa\u7840",title:"\u7ec4\u4ef6\u57fa\u7840",description:"React \u4e8b\u4ef6\u673a\u5236",source:"@site/interview/react/\u7ec4\u4ef6\u57fa\u7840.md",sourceDirName:"react",slug:"/react/\u7ec4\u4ef6\u57fa\u7840",permalink:"/interview/react/\u7ec4\u4ef6\u57fa\u7840",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u7ec4\u4ef6\u57fa\u7840",sidebar_position:1,last_update:{date:"2023/02/09",author:"\u5362\u8fb0\u5029"}},sidebar:"tutorialSidebar",previous:{title:"React",permalink:"/interview/category/react"}},o={},p=[{value:"React \u4e8b\u4ef6\u673a\u5236",id:"react-\u4e8b\u4ef6\u673a\u5236",level:2},{value:"React\u7684\u4e8b\u4ef6\u548c\u666e\u901a\u7684HTML\u4e8b\u4ef6\u6709\u4ec0\u4e48\u4e0d\u540c\uff1f",id:"react\u7684\u4e8b\u4ef6\u548c\u666e\u901a\u7684html\u4e8b\u4ef6\u6709\u4ec0\u4e48\u4e0d\u540c",level:2},{value:"React \u7ec4\u4ef6\u4e2d\u600e\u4e48\u505a\u4e8b\u4ef6\u4ee3\u7406\uff1f\u5b83\u7684\u539f\u7406\u662f\u4ec0\u4e48\uff1f",id:"react-\u7ec4\u4ef6\u4e2d\u600e\u4e48\u505a\u4e8b\u4ef6\u4ee3\u7406\u5b83\u7684\u539f\u7406\u662f\u4ec0\u4e48",level:2},{value:"\u5bf9React-Fiber\u7684\u7406\u89e3\uff0c\u5b83\u89e3\u51b3\u4e86\u4ec0\u4e48\u95ee\u9898\uff1f",id:"\u5bf9react-fiber\u7684\u7406\u89e3\u5b83\u89e3\u51b3\u4e86\u4ec0\u4e48\u95ee\u9898",level:2},{value:"\u9ad8\u9636\u7ec4\u4ef6\u548c\u9ad8\u9636\u51fd\u6570\u662f\u4ec0\u4e48\uff1f",id:"\u9ad8\u9636\u7ec4\u4ef6\u548c\u9ad8\u9636\u51fd\u6570\u662f\u4ec0\u4e48",level:2}],u={toc:p},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7ec4\u4ef6\u57fa\u7840"},"\u7ec4\u4ef6\u57fa\u7840"),(0,a.kt)("h2",{id:"react-\u4e8b\u4ef6\u673a\u5236"},"React \u4e8b\u4ef6\u673a\u5236"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<div onClick={this.handleClick.bind(this)}>\u70b9\u6211</div>")),(0,a.kt)("p",null,"React\u4e2d\u7684\u4e8b\u4ef6\u662f\u4e00\u4e2a\u5408\u6210\u4e8b\u4ef6\uff08SyntheticEvent\uff09\uff0c\u5408\u6210\u4e8b\u4ef6\u6307\u7684\u662freact\u7528js\u6a21\u62df\u4e86\u4e00\u4e2aDom\u4e8b\u4ef6\u6d41\uff08\u7c7b\u4f3c\uff0cfiber\u6811\u6a21\u62dfDom\u6811\u7ed3\u6784\uff09 \u5408\u6210\u4e8b\u4ef6\u7684\u4e8b\u4ef6\u6d41\u5728fiber\u6811\u4e2d\u53d1\u751f\u6355\u83b7\u548c\u5192\u6ce1\u3002"),(0,a.kt)("p",null,"React \u6839\u636e ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/DOM-Level-3-Events/"},"W3C \u89c4\u8303"),"\u6765\u5b9a\u4e49\u8fd9\u4e9b\u5408\u6210\u4e8b\u4ef6\uff0c\u5b83\u7684\u4ea7\u751f\u4e3b\u8981\u6709\u4e24\u65b9\u9762\u539f\u56e0\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7edf\u4e00\u89e3\u51b3\u4e86\u8de8\u6d4f\u89c8\u5668\u7684\u517c\u5bb9\u6027\u95ee\u9898"),(0,a.kt)("li",{parentName:"ol"},"\u907f\u514d\u8fd9\u7c7bDOM\u4e8b\u4ef6\u6ee5\u7528\uff0c\u5982\u679cDOM\u4e0a\u7ed1\u5b9a\u4e86\u8fc7\u591a\u7684\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\uff0c\u6574\u4e2a\u9875\u9762\u54cd\u5e94\u4ee5\u53ca\u5185\u5b58\u5360\u7528\u53ef\u80fd\u90fd\u4f1a\u53d7\u5230\u5f71\u54cd")),(0,a.kt)("p",null,"React\u5e76\u4e0d\u662f\u5c06click\u4e8b\u4ef6\u7ed1\u5728\u8be5 div \u7684\u771f\u5b9eDOM\u4e0a\uff0c\u800c\u662f\u5728document\u5904\u76d1\u542c\u6240\u6709\u652f\u6301\u7684\u4e8b\u4ef6\uff0c\u5f53\u4e8b\u4ef6\u53d1\u751f\u5e76\u5192\u6ce1\u81f3document\u5904\u65f6\uff0cReact\u5c06\u4e8b\u4ef6\u5185\u5bb9\u5c01\u88c5\u5e76\u4ea4\u7531\u771f\u6b63\u7684\u5904\u7406\u51fd\u6570\u8fd0\u884c\u3002 \u5176\u4e2d\uff0c\u7531\u4e8eevent\u5bf9\u8c61\u662f\u590d\u7528\u7684\uff0c\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u6267\u884c\u5b8c\u540e\uff0c\u5c5e\u6027\u4f1a\u88ab\u6e05\u7a7a\uff0c\u6240\u4ee5event\u7684\u5c5e\u6027\u65e0\u6cd5\u88ab\u5f02\u6b65\u8bbf\u95ee\uff0c\u8be6\u60c5\u8bf7\u67e5\u9605",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/events.html#event-pooling"},"event-pooling")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic4.zhimg.com/80/v2-67fa69f1513f5904c774bb64dec5a933_1440w.webp",alt:null})),(0,a.kt)("h2",{id:"react\u7684\u4e8b\u4ef6\u548c\u666e\u901a\u7684html\u4e8b\u4ef6\u6709\u4ec0\u4e48\u4e0d\u540c"},"React\u7684\u4e8b\u4ef6\u548c\u666e\u901a\u7684HTML\u4e8b\u4ef6\u6709\u4ec0\u4e48\u4e0d\u540c\uff1f"),(0,a.kt)("p",null,"\u533a\u522b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u4e8b\u4ef6\u540d\u79f0\u547d\u540d\u65b9\u5f0f\uff0c\u539f\u751f\u4e8b\u4ef6\u4e3a\u5168\u5c0f\u5199\uff0creact \u4e8b\u4ef6\u91c7\u7528\u5c0f\u9a7c\u5cf0\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u4e8b\u4ef6\u51fd\u6570\u5904\u7406\u8bed\u6cd5\uff0c\u539f\u751f\u4e8b\u4ef6\u4e3a\u5b57\u7b26\u4e32\uff0creact \u4e8b\u4ef6\u4e3a\u51fd\u6570\uff1b"),(0,a.kt)("li",{parentName:"ul"},"react \u4e8b\u4ef6\u4e0d\u80fd\u91c7\u7528 return false \u7684\u65b9\u5f0f\u6765\u963b\u6b62\u6d4f\u89c8\u5668\u7684\u9ed8\u8ba4\u884c\u4e3a\uff0c\u800c\u5fc5\u987b\u8981\u5730\u660e\u786e\u5730\u8c03\u7528preventDefault()\u6765\u963b\u6b62\u9ed8\u8ba4\u884c\u4e3a\u3002")),(0,a.kt)("p",null,"\u5408\u6210\u4e8b\u4ef6\u662f react \u6a21\u62df\u539f\u751f DOM \u4e8b\u4ef6\u6240\u6709\u80fd\u529b\u7684\u4e00\u4e2a\u4e8b\u4ef6\u5bf9\u8c61\uff0c\u5176\u4f18\u70b9\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u517c\u5bb9\u6240\u6709\u6d4f\u89c8\u5668\uff0c\u66f4\u597d\u7684\u8de8\u5e73\u53f0\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5c06\u4e8b\u4ef6\u7edf\u4e00\u5b58\u653e\u5728\u4e00\u4e2a\u6570\u7ec4\uff0c\u907f\u514d\u9891\u7e41\u7684\u65b0\u589e\u4e0e\u5220\u9664\uff08\u5783\u573e\u56de\u6536\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u65b9\u4fbf react \u7edf\u4e00\u7ba1\u7406\u548c\u4e8b\u52a1\u673a\u5236\u3002")),(0,a.kt)("p",null,"\u4e8b\u4ef6\u7684\u6267\u884c\u987a\u5e8f\u4e3a\u539f\u751f\u4e8b\u4ef6\u5148\u6267\u884c\uff0c\u5408\u6210\u4e8b\u4ef6\u540e\u6267\u884c\uff0c\u5408\u6210\u4e8b\u4ef6\u4f1a\u6cbf\u7740fiber\u6811\u6a21\u62df\u7684dom\u6811\u53d1\u751f\u6355\u83b7\u548c\u5192\u6ce1\uff0c\u6700\u7ec8\u4f1a\u5192\u6ce1\u5230 render \u9009\u62e9\u7684\u5bb9\u5668\u8282\u70b9\u4e0a\u3002"),(0,a.kt)("h2",{id:"react-\u7ec4\u4ef6\u4e2d\u600e\u4e48\u505a\u4e8b\u4ef6\u4ee3\u7406\u5b83\u7684\u539f\u7406\u662f\u4ec0\u4e48"},"React \u7ec4\u4ef6\u4e2d\u600e\u4e48\u505a\u4e8b\u4ef6\u4ee3\u7406\uff1f\u5b83\u7684\u539f\u7406\u662f\u4ec0\u4e48\uff1f"),(0,a.kt)("p",null,"React\u57fa\u4e8eVirtual DOM\u5b9e\u73b0\u4e86\u4e00\u4e2aSyntheticEvent\u5c42\uff08\u5408\u6210\u4e8b\u4ef6\u5c42\uff09\uff0c\u5b9a\u4e49\u7684\u4e8b\u4ef6\u5904\u7406\u5668\u4f1a\u63a5\u6536\u5230\u4e00\u4e2a\u5408\u6210\u4e8b\u4ef6\u5bf9\u8c61\u7684\u5b9e\u4f8b\uff0c\u5b83\u7b26\u5408W3C\u6807\u51c6\uff0c\u4e14\u4e0e\u539f\u751f\u7684\u6d4f\u89c8\u5668\u4e8b\u4ef6\u62e5\u6709\u540c\u6837\u7684\u63a5\u53e3\uff0c\u652f\u6301\u5192\u6ce1\u673a\u5236\uff0c\u6240\u6709\u7684\u4e8b\u4ef6\u90fd\u81ea\u52a8\u7ed1\u5b9a\u5728\u6700\u5916\u5c42\u4e0a\u3002"),(0,a.kt)("p",null,"\u5728React\u5e95\u5c42\uff0c\u4e3b\u8981\u5bf9\u5408\u6210\u4e8b\u4ef6\u505a\u4e86\u4e24\u4ef6\u4e8b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4e8b\u4ef6\u59d4\u6d3e\uff1a")," React\u4f1a\u628a\u6240\u6709\u7684\u4e8b\u4ef6\u7ed1\u5b9a\u5230\u7ed3\u6784\u7684\u6700\u5916\u5c42\uff0c\u4f7f\u7528\u7edf\u4e00\u7684\u4e8b\u4ef6\u76d1\u542c\u5668\uff0c\u8fd9\u4e2a\u4e8b\u4ef6\u76d1\u542c\u5668\u4e0a\u7ef4\u6301\u4e86\u4e00\u4e2a\u6620\u5c04\u6765\u4fdd\u5b58\u6240\u6709\u7ec4\u4ef6\u5185\u90e8\u4e8b\u4ef6\u76d1\u542c\u548c\u5904\u7406\u51fd\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u81ea\u52a8\u7ed1\u5b9a\uff1a")," React\u7ec4\u4ef6\u4e2d\uff0c\u6bcf\u4e2a\u65b9\u6cd5\u7684\u4e0a\u4e0b\u6587\u90fd\u4f1a\u6307\u5411\u8be5\u7ec4\u4ef6\u7684\u5b9e\u4f8b\uff0c\u5373\u81ea\u52a8\u7ed1\u5b9athis\u4e3a\u5f53\u524d\u7ec4\u4ef6\u3002")),(0,a.kt)("h2",{id:"\u5bf9react-fiber\u7684\u7406\u89e3\u5b83\u89e3\u51b3\u4e86\u4ec0\u4e48\u95ee\u9898"},"\u5bf9React-Fiber\u7684\u7406\u89e3\uff0c\u5b83\u89e3\u51b3\u4e86\u4ec0\u4e48\u95ee\u9898\uff1f"),(0,a.kt)("p",null,"React V15 \u5728\u6e32\u67d3\u65f6\uff0c\u4f1a\u9012\u5f52\u6bd4\u5bf9 VirtualDOM \u6811\uff0c\u627e\u51fa\u9700\u8981\u53d8\u52a8\u7684\u8282\u70b9\uff0c\u7136\u540e\u540c\u6b65\u66f4\u65b0\u5b83\u4eec\uff0c \u4e00\u6c14\u5475\u6210\u3002\u8fd9\u4e2a\u8fc7\u7a0b\u671f\u95f4\uff0c React \u4f1a\u5360\u636e\u6d4f\u89c8\u5668\u8d44\u6e90\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u7528\u6237\u89e6\u53d1\u7684\u4e8b\u4ef6\u5f97\u4e0d\u5230\u54cd\u5e94\uff0c\u5e76\u4e14\u4f1a\u5bfc\u81f4\u6389\u5e27\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u5bfc\u81f4\u7528\u6237\u611f\u89c9\u5230\u5361\u987f"),"\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u7ed9\u7528\u6237\u5236\u9020\u4e00\u79cd\u5e94\u7528\u5f88\u5feb\u7684\u201c\u5047\u8c61\u201d\uff0c\u4e0d\u80fd\u8ba9\u4e00\u4e2a\u4efb\u52a1\u957f\u671f\u9738\u5360\u7740\u8d44\u6e90\u3002 \u53ef\u4ee5\u5c06\u6d4f\u89c8\u5668\u7684\u6e32\u67d3\u3001\u5e03\u5c40\u3001\u7ed8\u5236\u3001\u8d44\u6e90\u52a0\u8f7d(\u4f8b\u5982 HTML \u89e3\u6790)\u3001\u4e8b\u4ef6\u54cd\u5e94\u3001\u811a\u672c\u6267\u884c\u89c6\u4f5c\u64cd\u4f5c\u7cfb\u7edf\u7684\u201c\u8fdb\u7a0b\u201d\uff0c\u9700\u8981\u901a\u8fc7\u67d0\u4e9b\u8c03\u5ea6\u7b56\u7565\u5408\u7406\u5730\u5206\u914d CPU \u8d44\u6e90\uff0c\u4ece\u800c\u63d0\u9ad8\u6d4f\u89c8\u5668\u7684\u7528\u6237\u54cd\u5e94\u901f\u7387, \u540c\u65f6\u517c\u987e\u4efb\u52a1\u6267\u884c\u6548\u7387\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5 React \u901a\u8fc7Fiber \u67b6\u6784\uff0c\u8ba9\u8fd9\u4e2a\u6267\u884c\u8fc7\u7a0b\u53d8\u6210\u53ef\u88ab\u4e2d\u65ad\u3002\u201c\u9002\u65f6\u201d\u5730\u8ba9\u51fa CPU \u6267\u884c\u6743\uff0c\u9664\u4e86\u53ef\u4ee5\u8ba9\u6d4f\u89c8\u5668\u53ca\u65f6\u5730\u54cd\u5e94\u7528\u6237\u7684\u4ea4\u4e92\uff0c\u8fd8\u6709\u5176\u4ed6\u597d\u5904:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5206\u6279\u5ef6\u65f6\u5bf9DOM\u8fdb\u884c\u64cd\u4f5c\uff0c\u907f\u514d\u4e00\u6b21\u6027\u64cd\u4f5c\u5927\u91cf DOM \u8282\u70b9\uff0c\u53ef\u4ee5\u5f97\u5230\u66f4\u597d\u7684\u7528\u6237\u4f53\u9a8c\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u7ed9\u6d4f\u89c8\u5668\u4e00\u70b9\u5598\u606f\u7684\u673a\u4f1a\uff0c\u5b83\u4f1a\u5bf9\u4ee3\u7801\u8fdb\u884c\u7f16\u8bd1\u4f18\u5316\uff08JIT\uff09\u53ca\u8fdb\u884c\u70ed\u4ee3\u7801\u4f18\u5316\uff0c\u6216\u8005\u5bf9 reflow \u8fdb\u884c\u4fee\u6b63\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6838\u5fc3\u601d\u60f3:")," Fiber \u4e5f\u79f0\u534f\u7a0b\u6216\u8005\u7ea4\u7a0b\u3002\u5b83\u548c\u7ebf\u7a0b\u5e76\u4e0d\u4e00\u6837\uff0c\u534f\u7a0b\u672c\u8eab\u662f\u6ca1\u6709\u5e76\u53d1\u6216\u8005\u5e76\u884c\u80fd\u529b\u7684\uff08\u9700\u8981\u914d\u5408\u7ebf\u7a0b\uff09\uff0c\u5b83\u53ea\u662f\u4e00\u79cd\u63a7\u5236\u6d41\u7a0b\u7684\u8ba9\u51fa\u673a\u5236\u3002\u8ba9\u51fa CPU \u7684\u6267\u884c\u6743\uff0c\u8ba9 CPU \u80fd\u5728\u8fd9\u6bb5\u65f6\u95f4\u6267\u884c\u5176\u4ed6\u7684\u64cd\u4f5c\u3002\u6e32\u67d3\u7684\u8fc7\u7a0b\u53ef\u4ee5\u88ab\u4e2d\u65ad\uff0c\u53ef\u4ee5\u5c06\u63a7\u5236\u6743\u4ea4\u56de\u6d4f\u89c8\u5668\uff0c\u8ba9\u4f4d\u7ed9\u9ad8\u4f18\u5148\u7ea7\u7684\u4efb\u52a1\uff0c\u6d4f\u89c8\u5668\u7a7a\u95f2\u540e\u518d\u6062\u590d\u6e32\u67d3\u3002"),(0,a.kt)("h2",{id:"\u9ad8\u9636\u7ec4\u4ef6\u548c\u9ad8\u9636\u51fd\u6570\u662f\u4ec0\u4e48"},"\u9ad8\u9636\u7ec4\u4ef6\u548c\u9ad8\u9636\u51fd\u6570\u662f\u4ec0\u4e48\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u9ad8\u9636\u51fd\u6570:")," \u51fd\u6570\u63a5\u53d7\u4e00\u4e2a\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\uff0c\u6216\u8005\u5c06\u51fd\u6570\u4f5c\u4e3a\u8fd4\u56de\u503c\u7684\u51fd\u6570\u5c31\u662f\u9ad8\u9636\u51fd\u6570\u3002map\u3001some\u3001every\u3001filter\u3001reduce\u3001find\u3001forEach\u7b49\u90fd\u5c5e\u4e8e\u9ad8\u9636\u51fd\u6570\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u9ad8\u9636\u7ec4\u4ef6:")," \u63a5\u53d7\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u8fd4\u56de\u4e00\u4e2a\u65b0\u7ec4\u5efa\u7684\u7ec4\u4ef6\u5c31\u662f\u9ad8\u9636\u7ec4\u4ef6\uff0c\u672c\u8d28\u4e0a\u548c\u9ad8\u9636\u51fd\u6570\u7684\u610f\u601d\u4e00\u6837\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"\u9ad8\u9636\u7ec4\u4ef6\u662f\u7528\u6765\u590d\u7528react\u4ee3\u7801\u7684\u4e00\u79cd\u65b9\u5f0f")))}m.isMDXComponent=!0}}]);