(()=>{var e={763:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});var i=t(645),r=t.n(i)()((function(e){return e[1]}));r.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Goldman&display=swap);"]),r.push([e.id,'nav{background:#d3d4d9;display:flex;justify-content:space-between;font-family:"Goldman";color:#001413}nav ul>li,nav div{padding-left:2rem;padding-right:2rem}nav div{font-size:2.5rem;padding-top:.8rem;padding-bottom:.8rem}nav ul{list-style-type:none;margin:0;padding:0;display:inline-block;font-size:1.7rem}nav ul li{display:inline-flex;height:100%;flex-direction:column;justify-content:center;cursor:pointer}nav ul li:hover{color:#e6af2d;background:#001413}#nav-logo-red{color:#a2310b}.nav-li-clicked:hover{color:#001413;background:#e6af2d}',""]);const o=r},489:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});var i=t(645),r=t.n(i)()((function(e){return e[1]}));r.push([e.id,"aside{display:inline-flex;flex-direction:column;background:#001413;height:100%}aside div{padding:1rem 2rem;color:#e6af2d;border-bottom-style:solid;border-color:#d3d4d9;border-width:.05px;cursor:pointer}aside div:hover{color:#001413;background:#e6af2d}.side-div-clicked{color:#e6af2d;background:#d3d4d9}",""]);const o=r},843:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});var i=t(645),r=t.n(i)()((function(e){return e[1]}));r.push([e.id,"body{margin:0;font-size:1.3rem}main{height:90vh}",""]);const o=r},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);i&&r[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},571:e=>{e.exports='<header> <nav> <div> <span>Tech News</span> <span id="nav-logo-red">Asia</span> </div> <ul id="right-nav-wrapper"> <li>Home</li> <li>Contact</li> </ul> </nav> </header> '},384:e=>{e.exports="<aside> <div>China</div> <div>India</div> <div>Singapore</div> <div>Malaysia</div> <div>Philippines</div> <div>Indonesia</div> <div>Vietnam</div> <div>Thailand</div> </aside> "},379:(e,n,t)=>{"use strict";var i,r=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function a(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function d(e,n){for(var t={},i=[],r=0;r<e.length;r++){var d=e[r],c=n.base?d[0]+n.base:d[0],s=t[c]||0,l="".concat(c," ").concat(s);t[c]=s+1;var u=a(l),v={css:d[1],media:d[2],sourceMap:d[3]};-1!==u?(o[u].references++,o[u].updater(v)):o.push({identifier:l,updater:h(v,n),references:1}),i.push(l)}return i}function c(e){var n=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=t.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){n.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(n);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var s,l=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function u(e,n,t,i){var r=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=l(n,r);else{var o=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}function v(e,n,t){var i=t.css,r=t.media,o=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var f=null,p=0;function h(e,n){var t,i,r;if(n.singleton){var o=p++;t=f||(f=c(n)),i=u.bind(null,t,o,!1),r=u.bind(null,t,o,!0)}else t=c(n),i=v.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var t=d(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<t.length;i++){var r=a(t[i]);o[r].references--}for(var c=d(e,n),s=0;s<t.length;s++){var l=a(t[s]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}t=c}}}}},n={};function t(i){if(n[i])return n[i].exports;var r=n[i]={id:i,exports:{}};return e[i](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{"use strict";var e=t(379),n=t.n(e),i=t(843);n()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var r=t(763);n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;var o=t(571),a=t.n(o);const d=(e,n)=>{e.addEventListener("click",(e=>{let t=e.target;t.classList.add(n),setTimeout((()=>{t.classList.remove(n)}),200)}))},c=()=>{console.log("articleLoad activated")};var s=t(489);n()(s.Z,{insert:"head",singleton:!1}),s.Z.locals;var l=t(384),u=t.n(l);(()=>{document.body.insertAdjacentHTML("afterbegin",a());let e=document.querySelectorAll("nav li");e.forEach((e=>{d(e,"nav-li-clicked")})),e[0].addEventListener("click",c),e[1].addEventListener("click",c)})(),document.querySelector("main").insertAdjacentHTML("afterbegin",u()),document.querySelectorAll("aside div").forEach((e=>{d(e,"side-div-clicked")}))})()})();