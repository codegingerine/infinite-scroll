(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{14:function(e,t,n){"use strict";var r=n(12),o=n.n(r)()((function(e){return e[1]}));o.push([e.i,"html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;vertical-align:baseline}body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-ms-text-size-adjust:none;-moz-text-size-adjust:none;-o-text-size-adjust:none;-webkit-text-size-adjust:none}#root{position:relative;overflow:hidden}*{box-sizing:border-box}*:after,*:before{box-sizing:border-box}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:none}table{border-collapse:collapse;border-spacing:0}a{text-decoration:none;outline:none;cursor:pointer}input{outline:none;-webkit-appearance:none}button{cursor:pointer;outline:none}\n",""]),t.a=o},15:function(e,t,n){"use strict";var r=n(12),o=n.n(r)()((function(e){return e[1]}));o.push([e.i,"html,body{height:100%}body{font-family:'Raleway', sans-serif;font-size:16px}\n",""]),t.a=o},39:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(20),i=n.n(a),l=n(25),c=n(1),s=n(21),p=n(4),u=n.n(p),d=n(2),f=d.a.main.withConfig({displayName:"MainWrapperstyled__MainStyled",componentId:"sc-1spu6w1-0"})(["position:relative;display:flex;flex-direction:column;align-items:center;flex-wrap:wrap;height:100%;min-height:100vh;width:100%;padding:40px 0;overflow:hidden;transition:all 0.2s ease;"]),m=d.a.div.withConfig({displayName:"MainWrapperstyled__MainContainerStyled",componentId:"sc-1spu6w1-1"})(["width:1000px;display:flex;flex-direction:column;padding:20px 0;"]),y=d.a.div.withConfig({displayName:"MainWrapperstyled__TitleWrapperStyled",componentId:"sc-1spu6w1-2"})(["padding-bottom:40px;"]),h=d.a.h1.withConfig({displayName:"MainWrapperstyled__TitleStyled",componentId:"sc-1spu6w1-3"})(["display:inline-block;font-size:23px;font-weight:700;text-transform:uppercase;border-bottom:8px solid #9e1c1c;padding-bottom:4px;"]),b=function(e){var t=e.children,n=e.title;return o.a.createElement(f,null,o.a.createElement(m,null,o.a.createElement(y,null,o.a.createElement(h,null,n)),t))};b.propTypes={children:u.a.any.isRequired,title:u.a.string.isRequired};var g=b,w=n(40),v=d.a.a.withConfig({displayName:"ImageBoxstyled__ImageBoxStyled",componentId:"sc-1xzba9r-0"})(["display:flex;justify-content:center;align-items:center;width:300px;height:190px;margin-bottom:10px;overflow:hidden;"]),x=d.a.img.withConfig({displayName:"ImageBoxstyled__ImageStyled",componentId:"sc-1xzba9r-1"})(["width:auto;max-width:350px;min-height:190px;"]),S=function(e){var t=e.href,n=e.imgSrc,r=e.alt,a=e.className;return o.a.createElement(v,{className:a,href:t},o.a.createElement(x,{src:n,alt:r}))};S.propTypes={href:u.a.string.isRequired,imgSrc:u.a.string.isRequired,alt:u.a.string.isRequired};var _=S,E=Object(d.a)(_).withConfig({displayName:"Teaserstyled__ImageBoxStyled",componentId:"sc-314m21-0"})(["opacity:.9;transition:opacity .2s ease;"]),j=d.a.div.withConfig({displayName:"Teaserstyled__TeaserStyled",componentId:"sc-314m21-1"})(["width:30%;margin-bottom:30px;&:hover{","{opacity:1;}}"],E),I=d.a.h4.withConfig({displayName:"Teaserstyled__TitleStyled",componentId:"sc-314m21-2"})(["color:#111;font-weight:700;"]),T=d.a.a.withConfig({displayName:"Teaserstyled__LinkStyled",componentId:"sc-314m21-3"})([""]),k=d.a.span.withConfig({displayName:"Teaserstyled__DateStyled",componentId:"sc-314m21-4"})(["display:block;color:#8a8a8a;text-transform:uppercase;margin-top:3px;"]),O=function(e){for(var t=e.imgSrc,n=e.alt,r=e.postUrl,a=e.postTitle,i=e.postDate,l=arguments.length,c=new Array(l>1?l-1:0),s=1;s<l;s++)c[s-1]=arguments[s];return o.a.createElement(j,c,o.a.createElement(E,{imgSrc:t,href:r,alt:n}),o.a.createElement(T,{href:r},o.a.createElement(I,null,a)),o.a.createElement(k,null,i))};O.propTypes={postUrl:u.a.string.isRequired,postTitle:u.a.string.isRequired,postDate:u.a.string.isRequired};var q=O,C=d.a.div.withConfig({displayName:"Liststyled__ListWrapper",componentId:"sc-1v6zx1x-0"})(["display:flex;flex-wrap:wrap;justify-content:space-between;border-top:1px solid #cacaca;padding-top:20px;"]),R=function(e){var t=e.listMapped;return o.a.createElement(C,null,t.map((function(e){var t=e.title,n=e.url,r=e.thumb,a=e.date;return o.a.createElement(q,{key:Object(w.a)(),imgSrc:r,alt:t,postUrl:n,postTitle:t,postDate:a})})))};R.propTypes={listMapped:u.a.array.isRequired};var N=R,M=d.a.div.withConfig({displayName:"LoadMorestyled__LoadMoreWrapperStyled",componentId:"py5dik-0"})([""]),z=d.a.p.withConfig({displayName:"LoadMorestyled__LoadMoreTxtStyled",componentId:"py5dik-1"})([""]),A=o.a.forwardRef((function(e,t){var n=e.loadingTxt;return o.a.createElement(M,{ref:t},o.a.createElement(z,null,n))}));function L(e){return function(e){if(Array.isArray(e))return P(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||D(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||D(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){if(e){if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(e,t):void 0}}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var B=function(){var e=W(Object(r.useState)([]),2),t=e[0],n=e[1],a=W(Object(r.useState)(!0),2),i=a[0],l=a[1],c=W(Object(r.useState)(50),2),p=c[0];c[1];Object(r.useEffect)((function(){u()}),[]);var u=function(){fetch("https://pastebin.pl/view/raw/e1658aa0").then((function(e){return e.json()})).then((function(e){n((function(t){return[].concat(L(t),L(e.posts.filter((function(e,n){return n>t.length&&n<=t.length+p}))))}))}))};return Object(r.useEffect)((function(){(t.length+p)%p!=0&&l(!1)})),o.a.createElement(g,{title:"Feed"},o.a.createElement(s.a,{dataLength:t.length,next:u,hasMore:!0,loader:i&&o.a.createElement(A,{loadingTxt:"Wczytuję artykuły..."})},o.a.createElement(N,{listMapped:t})))},U=n(11),J=n.n(U),F=n(14),$={insert:"head",singleton:!1},G=(J()(F.a,$),F.a.locals,n(15)),H={insert:"head",singleton:!1};J()(G.a,H),G.a.locals;function K(e){return(K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function X(e,t){return(X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=ee(e);if(t){var o=ee(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Z(this,n)}}function Z(e,t){return!t||"object"!==K(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ee(e){return(ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var te=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&X(e,t)}(i,e);var t,n,r,a=Y(i);function i(){return Q(this,i),a.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){return o.a.createElement(l.a,null,o.a.createElement(c.c,null,o.a.createElement(c.a,{component:B,exact:!0,path:"/"})))}}])&&V(t.prototype,n),r&&V(t,r),i}(r.Component),ne=document.getElementById("react-app");i.a.render(o.a.createElement(te,null),ne)}}]);