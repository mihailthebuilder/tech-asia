(()=>{var e={286:(e,n,i)=>{"use strict";i.d(n,{Z:()=>a});var t=i(645),r=i.n(t)()((function(e){return e[1]}));r.push([e.id,"",""]);const a=r},763:(e,n,i)=>{"use strict";i.d(n,{Z:()=>a});var t=i(645),r=i.n(t)()((function(e){return e[1]}));r.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Goldman&display=swap);"]),r.push([e.id,'nav{background:#d3d4d9;display:flex;justify-content:space-between;font-family:"Goldman";color:#001413}nav ul>li,nav div{padding-left:2rem;padding-right:2rem}nav div{font-size:2.5rem;padding-top:.8rem;padding-bottom:.8rem}nav ul{list-style-type:none;margin:0;padding:0;display:inline-block;font-size:1.7rem}nav ul li{display:inline-flex;height:100%;flex-direction:column;justify-content:center;cursor:pointer}nav ul li:hover{color:#e6af2d;background:#001413}#nav-logo-red{color:#a2310b}.nav-li-clicked:hover{color:#001413;background:#e6af2d}',""]);const a=r},489:(e,n,i)=>{"use strict";i.d(n,{Z:()=>a});var t=i(645),r=i.n(t)()((function(e){return e[1]}));r.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap);"]),r.push([e.id,'aside{display:inline-flex;flex-direction:column;background:#001413;height:100%;font-family:"Roboto Condensed",sans-serif}aside div{padding:1rem 2rem;color:#e6af2d;border-bottom-style:solid;border-color:#d3d4d9;border-width:.05px;cursor:pointer}aside div:hover{color:#001413;background:#e6af2d}.side-div-clicked:hover{color:#e6af2d;background:#6c0604}',""]);const a=r},843:(e,n,i)=>{"use strict";i.d(n,{Z:()=>a});var t=i(645),r=i.n(t)()((function(e){return e[1]}));r.push([e.id,"body{margin:0;font-size:1.3rem}main{height:90vh;display:flex;flex-direction:row}",""]);const a=r},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var i=e(n);return n[2]?"@media ".concat(n[2]," {").concat(i,"}"):i})).join("")},n.i=function(e,i,t){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(t)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(r[o]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);t&&r[d[0]]||(i&&(d[2]?d[2]="".concat(i," and ").concat(d[2]):d[2]=i),n.push(d))}},n}},326:e=>{e.exports='<section class="article-section" id="china"> <div id="subheading"> <span>Doris Yu | </span> <span>18 Nov 2020</span> </div> <h1>Baidu to acquire Joyy’s livestreaming service in $3.6b deal</h1> <p> Chinese search engine Baidu announced that it has entered into an agreement to acquire Joyy’s domestic livestreaming business YY Live in a US$3.6 billion deal. </p> </section> <section class="article-section" id="india"> <div id="subheading"> <span>TEST TEST | </span> <span>TEST TEST</span> </div> </section> '},571:e=>{e.exports='<header> <nav> <div> <span>Tech News</span> <span id="nav-logo-red">Asia</span> </div> <ul id="right-nav-wrapper"> <li>Home</li> <li>Contact</li> </ul> </nav> </header> '},384:e=>{e.exports='<aside> <div linkTo="china">China</div> <div linkTo="india">India</div> <div linkTo="singapore">Singapore</div> <div linkTo="malaysia">Malaysia</div> <div linkTo="philippines">Philippines</div> <div linkTo="indonesia">Indonesia</div> <div linkTo="vietnam">Vietnam</div> <div linkTo="thailand">Thailand</div> </aside> '},379:(e,n,i)=>{"use strict";var t,r=function(){var e={};return function(n){if(void 0===e[n]){var i=document.querySelector(n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}e[n]=i}return e[n]}}(),a=[];function o(e){for(var n=-1,i=0;i<a.length;i++)if(a[i].identifier===e){n=i;break}return n}function s(e,n){for(var i={},t=[],r=0;r<e.length;r++){var s=e[r],d=n.base?s[0]+n.base:s[0],c=i[d]||0,l="".concat(d," ").concat(c);i[d]=c+1;var u=o(l),v={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(a[u].references++,a[u].updater(v)):a.push({identifier:l,updater:h(v,n),references:1}),t.push(l)}return t}function d(e){var n=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var a=i.nc;a&&(t.nonce=a)}if(Object.keys(t).forEach((function(e){n.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(n);else{var o=r(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var c,l=(c=[],function(e,n){return c[e]=n,c.filter(Boolean).join("\n")});function u(e,n,i,t){var r=i?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=l(n,r);else{var a=document.createTextNode(r),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(a,o[n]):e.appendChild(a)}}function v(e,n,i){var t=i.css,r=i.media,a=i.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var p=null,f=0;function h(e,n){var i,t,r;if(n.singleton){var a=f++;i=p||(p=d(n)),t=u.bind(null,i,a,!1),r=u.bind(null,i,a,!0)}else i=d(n),t=v.bind(null,i,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var i=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<i.length;t++){var r=o(i[t]);a[r].references--}for(var d=s(e,n),c=0;c<i.length;c++){var l=o(i[c]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}i=d}}}}},n={};function i(t){if(n[t])return n[t].exports;var r=n[t]={id:t,exports:{}};return e[t](r,r.exports,i),r.exports}i.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return i.d(n,{a:n}),n},i.d=(e,n)=>{for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},i.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{"use strict";var e=i(379),n=i.n(e),t=i(843);n()(t.Z,{insert:"head",singleton:!1}),t.Z.locals;var r=i(763);n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;var a=i(571),o=i.n(a);const s=(e,n)=>{e.addEventListener("click",(e=>{let i=e.target;i.classList.add(n),setTimeout((()=>{i.classList.remove(n)}),200)}))};var d=i(286);n()(d.Z,{insert:"head",singleton:!1}),d.Z.locals;var c=i(326),l=i.n(c);const u=(e="china")=>{let n=document.querySelector("main>section");n&&n.remove();let i=(new DOMParser).parseFromString(l(),"text/html");document.querySelector("main").appendChild(i.getElementById(e))};var v=i(489);n()(v.Z,{insert:"head",singleton:!1}),v.Z.locals;var p=i(384),f=i.n(p);(()=>{document.body.insertAdjacentHTML("afterbegin",o());let e=document.querySelectorAll("nav li");e.forEach((e=>{s(e,"nav-li-clicked")})),e[0].addEventListener("click",u())})(),document.querySelector("main").insertAdjacentHTML("afterbegin",f()),document.querySelectorAll("aside div").forEach((e=>{s(e,"side-div-clicked"),e.addEventListener("click",(e=>{u(e.target.getAttribute("linkTo"))}))}))})()})();