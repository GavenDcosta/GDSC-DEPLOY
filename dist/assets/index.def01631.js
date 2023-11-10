(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const Ne={_origin:"https://api.emailjs.com"},ln=(t,e,n)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class ie{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const cn=(t,e,n={})=>new Promise((a,i)=>{const r=new XMLHttpRequest;r.addEventListener("load",({target:s})=>{const o=new ie(s);o.status===200||o.text==="OK"?a(o):i(o)}),r.addEventListener("error",({target:s})=>{i(new ie(s))}),r.open("POST",Ne._origin+t,!0),Object.keys(n).forEach(s=>{r.setRequestHeader(s,n[s])}),r.send(e)}),fn=(t,e,n,a)=>{const i=a||Ne._userID;ln(i,t,e);const r={lib_version:"3.11.0",user_id:i,service_id:t,template_id:e,template_params:n};return cn("/api/v1.0/email/send",JSON.stringify(r),{"Content-type":"application/json"})};function un(t){return/^[a-zA-Z\s]*$/.test(t)}function mn(t){return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t)}function dn(t){return/^\d{10}$/.test(t)}function re(t){return t.trim()!==""}function hn(){document.getElementById("contactForm").addEventListener("submit",function(e){e.preventDefault();const n=document.getElementById("submit-btn");n.disabled=!0,n.textContent="sending...";const a=document.getElementById("fname").value,i=document.getElementById("email").value,r=document.getElementById("phone").value,s=document.getElementById("subject").value,o=document.getElementById("message").value;if(!un(a)){alert("Invalid name");return}if(!mn(i)){alert("Invalid email");return}if(r&&!dn(r)){alert("Invalid phone number");return}if(!re(s)){alert("Empty subject");return}if(!re(o)){alert("Empty Message");return}fn("service_iwaf9sf","template_8u7dloa",{name:a,email:i,phone:r,subject:s,message:o},"MQ9I_fpRmdhwduRPj").then(function(c){alert("We will reach out to you as soon as possible",c.status,c.text),n.disabled=!1,n.textContent="Submit Message"}).catch(function(c){alert("Failed to generate an email please try again later",c),n.disabled=!1,n.textContent="Submit Message"})})}function se(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,a)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?se(Object(n),!0).forEach(function(a){M(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function At(t){return At=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},At(t)}function gn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function oe(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function pn(t,e,n){return e&&oe(t.prototype,e),n&&oe(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function M(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function $t(t,e){return bn(t)||wn(t,e)||ze(t,e)||xn()}function ot(t){return vn(t)||yn(t)||ze(t)||kn()}function vn(t){if(Array.isArray(t))return It(t)}function bn(t){if(Array.isArray(t))return t}function yn(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function wn(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],i=!0,r=!1,s,o;try{for(n=n.call(t);!(i=(s=n.next()).done)&&(a.push(s.value),!(e&&a.length===e));i=!0);}catch(c){r=!0,o=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(r)throw o}}return a}}function ze(t,e){if(!!t){if(typeof t=="string")return It(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return It(t,e)}}function It(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function kn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var le=function(){},Ut={},Ie={},Ye=null,_e={mark:le,measure:le};try{typeof window<"u"&&(Ut=window),typeof document<"u"&&(Ie=document),typeof MutationObserver<"u"&&(Ye=MutationObserver),typeof performance<"u"&&(_e=performance)}catch{}var An=Ut.navigator||{},ce=An.userAgent,fe=ce===void 0?"":ce,F=Ut,C=Ie,ue=Ye,ut=_e;F.document;var R=!!C.documentElement&&!!C.head&&typeof C.addEventListener=="function"&&typeof C.createElement=="function",De=~fe.indexOf("MSIE")||~fe.indexOf("Trident/"),mt,dt,ht,gt,pt,Y="___FONT_AWESOME___",Yt=16,Re="fa",je="svg-inline--fa",U="data-fa-i2svg",_t="data-fa-pseudo-element",En="data-fa-pseudo-element-pending",Gt="data-prefix",qt="data-icon",me="fontawesome-i2svg",Cn="async",Sn=["HTML","HEAD","STYLE","SCRIPT"],Xe=function(){try{return!0}catch{return!1}}(),E="classic",S="sharp",Vt=[E,S];function lt(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[E]}})}var nt=lt((mt={},M(mt,E,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),M(mt,S,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),mt)),at=lt((dt={},M(dt,E,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),M(dt,S,{solid:"fass",regular:"fasr",light:"fasl"}),dt)),it=lt((ht={},M(ht,E,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),M(ht,S,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),ht)),Tn=lt((gt={},M(gt,E,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),M(gt,S,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),gt)),Mn=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Fe="fa-layers-text",Pn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,On=lt((pt={},M(pt,E,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),M(pt,S,{900:"fass",400:"fasr",300:"fasl"}),pt)),He=[1,2,3,4,5,6,7,8,9,10],Ln=He.concat([11,12,13,14,15,16,17,18,19,20]),Nn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],B={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},rt=new Set;Object.keys(at[E]).map(rt.add.bind(rt));Object.keys(at[S]).map(rt.add.bind(rt));var zn=[].concat(Vt,ot(rt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",B.GROUP,B.SWAP_OPACITY,B.PRIMARY,B.SECONDARY]).concat(He.map(function(t){return"".concat(t,"x")})).concat(Ln.map(function(t){return"w-".concat(t)})),tt=F.FontAwesomeConfig||{};function In(t){var e=C.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Yn(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(C&&typeof C.querySelector=="function"){var _n=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];_n.forEach(function(t){var e=$t(t,2),n=e[0],a=e[1],i=Yn(In(n));i!=null&&(tt[a]=i)})}var We={styleDefault:"solid",familyDefault:"classic",cssPrefix:Re,replacementClass:je,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};tt.familyPrefix&&(tt.cssPrefix=tt.familyPrefix);var J=v(v({},We),tt);J.autoReplaceSvg||(J.observeMutations=!1);var y={};Object.keys(We).forEach(function(t){Object.defineProperty(y,t,{enumerable:!0,set:function(n){J[t]=n,et.forEach(function(a){return a(y)})},get:function(){return J[t]}})});Object.defineProperty(y,"familyPrefix",{enumerable:!0,set:function(e){J.cssPrefix=e,et.forEach(function(n){return n(y)})},get:function(){return J.cssPrefix}});F.FontAwesomeConfig=y;var et=[];function Dn(t){return et.push(t),function(){et.splice(et.indexOf(t),1)}}var X=Yt,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Rn(t){if(!(!t||!R)){var e=C.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=C.head.childNodes,a=null,i=n.length-1;i>-1;i--){var r=n[i],s=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=r)}return C.head.insertBefore(e,a),t}}var jn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function st(){for(var t=12,e="";t-- >0;)e+=jn[Math.random()*62|0];return e}function Z(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Kt(t){return t.classList?Z(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Be(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Xn(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Be(t[n]),'" ')},"").trim()}function St(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Jt(t){return t.size!==I.size||t.x!==I.x||t.y!==I.y||t.rotate!==I.rotate||t.flipX||t.flipY}function Fn(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(r," ").concat(s," ").concat(o)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:i,inner:c,path:l}}function Hn(t){var e=t.transform,n=t.width,a=n===void 0?Yt:n,i=t.height,r=i===void 0?Yt:i,s=t.startCentered,o=s===void 0?!1:s,c="";return o&&De?c+="translate(".concat(e.x/X-a/2,"em, ").concat(e.y/X-r/2,"em) "):o?c+="translate(calc(-50% + ".concat(e.x/X,"em), calc(-50% + ").concat(e.y/X,"em)) "):c+="translate(".concat(e.x/X,"em, ").concat(e.y/X,"em) "),c+="scale(".concat(e.size/X*(e.flipX?-1:1),", ").concat(e.size/X*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var Wn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function $e(){var t=Re,e=je,n=y.cssPrefix,a=y.replacementClass,i=Wn;if(n!==t||a!==e){var r=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");i=i.replace(r,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(a))}return i}var de=!1;function Ot(){y.autoAddCss&&!de&&(Rn($e()),de=!0)}var Bn={mixout:function(){return{dom:{css:$e,insertCss:Ot}}},hooks:function(){return{beforeDOMElementCreation:function(){Ot()},beforeI2svg:function(){Ot()}}}},_=F||{};_[Y]||(_[Y]={});_[Y].styles||(_[Y].styles={});_[Y].hooks||(_[Y].hooks={});_[Y].shims||(_[Y].shims=[]);var L=_[Y],Ue=[],$n=function t(){C.removeEventListener("DOMContentLoaded",t),Et=1,Ue.map(function(e){return e()})},Et=!1;R&&(Et=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState),Et||C.addEventListener("DOMContentLoaded",$n));function Un(t){!R||(Et?setTimeout(t,0):Ue.push(t))}function ct(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,i=t.children,r=i===void 0?[]:i;return typeof t=="string"?Be(t):"<".concat(e," ").concat(Xn(a),">").concat(r.map(ct).join(""),"</").concat(e,">")}function he(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Gn=function(e,n){return function(a,i,r,s){return e.call(n,a,i,r,s)}},Lt=function(e,n,a,i){var r=Object.keys(e),s=r.length,o=i!==void 0?Gn(n,i):n,c,l,d;for(a===void 0?(c=1,d=e[r[0]]):(c=0,d=a);c<s;c++)l=r[c],d=o(d,e[l],l,e);return d};function qn(t){for(var e=[],n=0,a=t.length;n<a;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<a){var r=t.charCodeAt(n++);(r&64512)==56320?e.push(((i&1023)<<10)+(r&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Dt(t){var e=qn(t);return e.length===1?e[0].toString(16):null}function Vn(t,e){var n=t.length,a=t.charCodeAt(e),i;return a>=55296&&a<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(a-55296)*1024+i-56320+65536:a}function ge(t){return Object.keys(t).reduce(function(e,n){var a=t[n],i=!!a.icon;return i?e[a.iconName]=a.icon:e[n]=a,e},{})}function Rt(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,i=a===void 0?!1:a,r=ge(e);typeof L.hooks.addPack=="function"&&!i?L.hooks.addPack(t,ge(e)):L.styles[t]=v(v({},L.styles[t]||{}),r),t==="fas"&&Rt("fa",e)}var vt,bt,yt,q=L.styles,Kn=L.shims,Jn=(vt={},M(vt,E,Object.values(it[E])),M(vt,S,Object.values(it[S])),vt),Zt=null,Ge={},qe={},Ve={},Ke={},Je={},Zn=(bt={},M(bt,E,Object.keys(nt[E])),M(bt,S,Object.keys(nt[S])),bt);function Qn(t){return~zn.indexOf(t)}function ta(t,e){var n=e.split("-"),a=n[0],i=n.slice(1).join("-");return a===t&&i!==""&&!Qn(i)?i:null}var Ze=function(){var e=function(r){return Lt(q,function(s,o,c){return s[c]=Lt(o,r,{}),s},{})};Ge=e(function(i,r,s){if(r[3]&&(i[r[3]]=s),r[2]){var o=r[2].filter(function(c){return typeof c=="number"});o.forEach(function(c){i[c.toString(16)]=s})}return i}),qe=e(function(i,r,s){if(i[s]=s,r[2]){var o=r[2].filter(function(c){return typeof c=="string"});o.forEach(function(c){i[c]=s})}return i}),Je=e(function(i,r,s){var o=r[2];return i[s]=s,o.forEach(function(c){i[c]=s}),i});var n="far"in q||y.autoFetchSvg,a=Lt(Kn,function(i,r){var s=r[0],o=r[1],c=r[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(i.names[s]={prefix:o,iconName:c}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:o,iconName:c}),i},{names:{},unicodes:{}});Ve=a.names,Ke=a.unicodes,Zt=Tt(y.styleDefault,{family:y.familyDefault})};Dn(function(t){Zt=Tt(t.styleDefault,{family:y.familyDefault})});Ze();function Qt(t,e){return(Ge[t]||{})[e]}function ea(t,e){return(qe[t]||{})[e]}function $(t,e){return(Je[t]||{})[e]}function Qe(t){return Ve[t]||{prefix:null,iconName:null}}function na(t){var e=Ke[t],n=Qt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function H(){return Zt}var te=function(){return{prefix:null,iconName:null,rest:[]}};function Tt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?E:n,i=nt[a][t],r=at[a][t]||at[a][i],s=t in L.styles?t:null;return r||s||null}var pe=(yt={},M(yt,E,Object.keys(it[E])),M(yt,S,Object.keys(it[S])),yt);function Mt(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,i=a===void 0?!1:a,r=(e={},M(e,E,"".concat(y.cssPrefix,"-").concat(E)),M(e,S,"".concat(y.cssPrefix,"-").concat(S)),e),s=null,o=E;(t.includes(r[E])||t.some(function(l){return pe[E].includes(l)}))&&(o=E),(t.includes(r[S])||t.some(function(l){return pe[S].includes(l)}))&&(o=S);var c=t.reduce(function(l,d){var g=ta(y.cssPrefix,d);if(q[d]?(d=Jn[o].includes(d)?Tn[o][d]:d,s=d,l.prefix=d):Zn[o].indexOf(d)>-1?(s=d,l.prefix=Tt(d,{family:o})):g?l.iconName=g:d!==y.replacementClass&&d!==r[E]&&d!==r[S]&&l.rest.push(d),!i&&l.prefix&&l.iconName){var p=s==="fa"?Qe(l.iconName):{},b=$(l.prefix,l.iconName);p.prefix&&(s=null),l.iconName=p.iconName||b||l.iconName,l.prefix=p.prefix||l.prefix,l.prefix==="far"&&!q.far&&q.fas&&!y.autoFetchSvg&&(l.prefix="fas")}return l},te());return(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(c.prefix="fad"),!c.prefix&&o===S&&(q.fass||y.autoFetchSvg)&&(c.prefix="fass",c.iconName=$(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||s==="fa")&&(c.prefix=H()||"fas"),c}var aa=function(){function t(){gn(this,t),this.definitions={}}return pn(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=v(v({},n.definitions[o]||{}),s[o]),Rt(o,s[o]);var c=it[E][o];c&&Rt(c,s[o]),Ze()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var i=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(i).map(function(r){var s=i[r],o=s.prefix,c=s.iconName,l=s.icon,d=l[2];n[o]||(n[o]={}),d.length>0&&d.forEach(function(g){typeof g=="string"&&(n[o][g]=l)}),n[o][c]=l}),n}}]),t}(),ve=[],V={},K={},ia=Object.keys(K);function ra(t,e){var n=e.mixoutsTo;return ve=t,V={},Object.keys(K).forEach(function(a){ia.indexOf(a)===-1&&delete K[a]}),ve.forEach(function(a){var i=a.mixout?a.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),At(i[s])==="object"&&Object.keys(i[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=i[s][o]})}),a.hooks){var r=a.hooks();Object.keys(r).forEach(function(s){V[s]||(V[s]=[]),V[s].push(r[s])})}a.provides&&a.provides(K)}),n}function jt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),i=2;i<n;i++)a[i-2]=arguments[i];var r=V[t]||[];return r.forEach(function(s){e=s.apply(null,[e].concat(a))}),e}function G(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var i=V[t]||[];i.forEach(function(r){r.apply(null,n)})}function D(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return K[t]?K[t].apply(null,e):void 0}function Xt(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||H();if(!!e)return e=$(n,e)||e,he(tn.definitions,n,e)||he(L.styles,n,e)}var tn=new aa,sa=function(){y.autoReplaceSvg=!1,y.observeMutations=!1,G("noAuto")},oa={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?(G("beforeI2svg",e),D("pseudoElements2svg",e),D("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;y.autoReplaceSvg===!1&&(y.autoReplaceSvg=!0),y.observeMutations=!0,Un(function(){ca({autoReplaceSvgRoot:n}),G("watch",e)})}},la={icon:function(e){if(e===null)return null;if(At(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:$(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=Tt(e[0]);return{prefix:a,iconName:$(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(y.cssPrefix,"-"))>-1||e.match(Mn))){var i=Mt(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||H(),iconName:$(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var r=H();return{prefix:r,iconName:$(r,e)||e}}}},O={noAuto:sa,config:y,dom:oa,parse:la,library:tn,findIconDefinition:Xt,toHtml:ct},ca=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?C:n;(Object.keys(L.styles).length>0||y.autoFetchSvg)&&R&&y.autoReplaceSvg&&O.dom.i2svg({node:a})};function Pt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return ct(a)})}}),Object.defineProperty(t,"node",{get:function(){if(!!R){var a=C.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function fa(t){var e=t.children,n=t.main,a=t.mask,i=t.attributes,r=t.styles,s=t.transform;if(Jt(s)&&n.found&&!a.found){var o=n.width,c=n.height,l={x:o/c/2,y:.5};i.style=St(v(v({},r),{},{"transform-origin":"".concat(l.x+s.x/16,"em ").concat(l.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function ua(t){var e=t.prefix,n=t.iconName,a=t.children,i=t.attributes,r=t.symbol,s=r===!0?"".concat(e,"-").concat(y.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:v(v({},i),{},{id:s}),children:a}]}]}function ee(t){var e=t.icons,n=e.main,a=e.mask,i=t.prefix,r=t.iconName,s=t.transform,o=t.symbol,c=t.title,l=t.maskId,d=t.titleId,g=t.extra,p=t.watchable,b=p===void 0?!1:p,u=a.found?a:n,f=u.width,m=u.height,h=i==="fak",k=[y.replacementClass,r?"".concat(y.cssPrefix,"-").concat(r):""].filter(function(N){return g.classes.indexOf(N)===-1}).filter(function(N){return N!==""||!!N}).concat(g.classes).join(" "),x={children:[],attributes:v(v({},g.attributes),{},{"data-prefix":i,"data-icon":r,class:k,role:g.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f," ").concat(m)})},w=h&&!~g.classes.indexOf("fa-fw")?{width:"".concat(f/m*16*.0625,"em")}:{};b&&(x.attributes[U]=""),c&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(d||st())},children:[c]}),delete x.attributes.title);var A=v(v({},x),{},{prefix:i,iconName:r,main:n,mask:a,maskId:l,transform:s,symbol:o,styles:v(v({},w),g.styles)}),T=a.found&&n.found?D("generateAbstractMask",A)||{children:[],attributes:{}}:D("generateAbstractIcon",A)||{children:[],attributes:{}},P=T.children,j=T.attributes;return A.children=P,A.attributes=j,o?ua(A):fa(A)}function be(t){var e=t.content,n=t.width,a=t.height,i=t.transform,r=t.title,s=t.extra,o=t.watchable,c=o===void 0?!1:o,l=v(v(v({},s.attributes),r?{title:r}:{}),{},{class:s.classes.join(" ")});c&&(l[U]="");var d=v({},s.styles);Jt(i)&&(d.transform=Hn({transform:i,startCentered:!0,width:n,height:a}),d["-webkit-transform"]=d.transform);var g=St(d);g.length>0&&(l.style=g);var p=[];return p.push({tag:"span",attributes:l,children:[e]}),r&&p.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),p}function ma(t){var e=t.content,n=t.title,a=t.extra,i=v(v(v({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),r=St(a.styles);r.length>0&&(i.style=r);var s=[];return s.push({tag:"span",attributes:i,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var Nt=L.styles;function Ft(t){var e=t[0],n=t[1],a=t.slice(4),i=$t(a,1),r=i[0],s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(y.cssPrefix,"-").concat(B.GROUP)},children:[{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(B.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(B.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}var da={found:!1,width:512,height:512};function ha(t,e){!Xe&&!y.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ht(t,e){var n=e;return e==="fa"&&y.styleDefault!==null&&(e=H()),new Promise(function(a,i){if(D("missingIconAbstract"),n==="fa"){var r=Qe(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&Nt[e]&&Nt[e][t]){var s=Nt[e][t];return a(Ft(s))}ha(t,e),a(v(v({},da),{},{icon:y.showMissingIcons&&t?D("missingIconAbstract")||{}:{}}))})}var ye=function(){},Wt=y.measurePerformance&&ut&&ut.mark&&ut.measure?ut:{mark:ye,measure:ye},Q='FA "6.4.2"',ga=function(e){return Wt.mark("".concat(Q," ").concat(e," begins")),function(){return en(e)}},en=function(e){Wt.mark("".concat(Q," ").concat(e," ends")),Wt.measure("".concat(Q," ").concat(e),"".concat(Q," ").concat(e," begins"),"".concat(Q," ").concat(e," ends"))},ne={begin:ga,end:en},kt=function(){};function we(t){var e=t.getAttribute?t.getAttribute(U):null;return typeof e=="string"}function pa(t){var e=t.getAttribute?t.getAttribute(Gt):null,n=t.getAttribute?t.getAttribute(qt):null;return e&&n}function va(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(y.replacementClass)}function ba(){if(y.autoReplaceSvg===!0)return xt.replace;var t=xt[y.autoReplaceSvg];return t||xt.replace}function ya(t){return C.createElementNS("http://www.w3.org/2000/svg",t)}function wa(t){return C.createElement(t)}function nn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?ya:wa:n;if(typeof t=="string")return C.createTextNode(t);var i=a(t.tag);Object.keys(t.attributes||[]).forEach(function(s){i.setAttribute(s,t.attributes[s])});var r=t.children||[];return r.forEach(function(s){i.appendChild(nn(s,{ceFn:a}))}),i}function ka(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var xt={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(nn(i),n)}),n.getAttribute(U)===null&&y.keepOriginalSource){var a=C.createComment(ka(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~Kt(n).indexOf(y.replacementClass))return xt.replace(e);var i=new RegExp("".concat(y.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var r=a[0].attributes.class.split(" ").reduce(function(o,c){return c===y.replacementClass||c.match(i)?o.toSvg.push(c):o.toNode.push(c),o},{toNode:[],toSvg:[]});a[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",r.toNode.join(" "))}var s=a.map(function(o){return ct(o)}).join(`
`);n.setAttribute(U,""),n.innerHTML=s}};function ke(t){t()}function an(t,e){var n=typeof e=="function"?e:kt;if(t.length===0)n();else{var a=ke;y.mutateApproach===Cn&&(a=F.requestAnimationFrame||ke),a(function(){var i=ba(),r=ne.begin("mutate");t.map(i),r(),n()})}}var ae=!1;function rn(){ae=!0}function Bt(){ae=!1}var Ct=null;function xe(t){if(!!ue&&!!y.observeMutations){var e=t.treeCallback,n=e===void 0?kt:e,a=t.nodeCallback,i=a===void 0?kt:a,r=t.pseudoElementsCallback,s=r===void 0?kt:r,o=t.observeMutationsRoot,c=o===void 0?C:o;Ct=new ue(function(l){if(!ae){var d=H();Z(l).forEach(function(g){if(g.type==="childList"&&g.addedNodes.length>0&&!we(g.addedNodes[0])&&(y.searchPseudoElements&&s(g.target),n(g.target)),g.type==="attributes"&&g.target.parentNode&&y.searchPseudoElements&&s(g.target.parentNode),g.type==="attributes"&&we(g.target)&&~Nn.indexOf(g.attributeName))if(g.attributeName==="class"&&pa(g.target)){var p=Mt(Kt(g.target)),b=p.prefix,u=p.iconName;g.target.setAttribute(Gt,b||d),u&&g.target.setAttribute(qt,u)}else va(g.target)&&i(g.target)})}}),R&&Ct.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function xa(){!Ct||Ct.disconnect()}function Aa(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,i){var r=i.split(":"),s=r[0],o=r.slice(1);return s&&o.length>0&&(a[s]=o.join(":").trim()),a},{})),n}function Ea(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",i=Mt(Kt(t));return i.prefix||(i.prefix=H()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&a.length>0&&(i.iconName=ea(i.prefix,t.innerText)||Qt(i.prefix,Dt(t.innerText))),!i.iconName&&y.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function Ca(t){var e=Z(t.attributes).reduce(function(i,r){return i.name!=="class"&&i.name!=="style"&&(i[r.name]=r.value),i},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return y.autoA11y&&(n?e["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(a||st()):(e["aria-hidden"]="true",e.focusable="false")),e}function Sa(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ae(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ea(t),a=n.iconName,i=n.prefix,r=n.rest,s=Ca(t),o=jt("parseNodeAttributes",{},t),c=e.styleParser?Aa(t):[];return v({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:c,attributes:s}},o)}var Ta=L.styles;function sn(t){var e=y.autoReplaceSvg==="nest"?Ae(t,{styleParser:!1}):Ae(t);return~e.extra.classes.indexOf(Fe)?D("generateLayersText",t,e):D("generateSvgReplacementMutation",t,e)}var W=new Set;Vt.map(function(t){W.add("fa-".concat(t))});Object.keys(nt[E]).map(W.add.bind(W));Object.keys(nt[S]).map(W.add.bind(W));W=ot(W);function Ee(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();var n=C.documentElement.classList,a=function(g){return n.add("".concat(me,"-").concat(g))},i=function(g){return n.remove("".concat(me,"-").concat(g))},r=y.autoFetchSvg?W:Vt.map(function(d){return"fa-".concat(d)}).concat(Object.keys(Ta));r.includes("fa")||r.push("fa");var s=[".".concat(Fe,":not([").concat(U,"])")].concat(r.map(function(d){return".".concat(d,":not([").concat(U,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=Z(t.querySelectorAll(s))}catch{}if(o.length>0)a("pending"),i("complete");else return Promise.resolve();var c=ne.begin("onTree"),l=o.reduce(function(d,g){try{var p=sn(g);p&&d.push(p)}catch(b){Xe||b.name==="MissingIcon"&&console.error(b)}return d},[]);return new Promise(function(d,g){Promise.all(l).then(function(p){an(p,function(){a("active"),a("complete"),i("pending"),typeof e=="function"&&e(),c(),d()})}).catch(function(p){c(),g(p)})})}function Ma(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;sn(t).then(function(n){n&&an([n],e)})}function Pa(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:Xt(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Xt(i||{})),t(a,v(v({},n),{},{mask:i}))}}var Oa=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,i=a===void 0?I:a,r=n.symbol,s=r===void 0?!1:r,o=n.mask,c=o===void 0?null:o,l=n.maskId,d=l===void 0?null:l,g=n.title,p=g===void 0?null:g,b=n.titleId,u=b===void 0?null:b,f=n.classes,m=f===void 0?[]:f,h=n.attributes,k=h===void 0?{}:h,x=n.styles,w=x===void 0?{}:x;if(!!e){var A=e.prefix,T=e.iconName,P=e.icon;return Pt(v({type:"icon"},e),function(){return G("beforeDOMElementCreation",{iconDefinition:e,params:n}),y.autoA11y&&(p?k["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(u||st()):(k["aria-hidden"]="true",k.focusable="false")),ee({icons:{main:Ft(P),mask:c?Ft(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:T,transform:v(v({},I),i),symbol:s,title:p,maskId:d,titleId:u,extra:{attributes:k,styles:w,classes:m}})})}},La={mixout:function(){return{icon:Pa(Oa)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ee,n.nodeCallback=Ma,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,i=a===void 0?C:a,r=n.callback,s=r===void 0?function(){}:r;return Ee(i,s)},e.generateSvgReplacementMutation=function(n,a){var i=a.iconName,r=a.title,s=a.titleId,o=a.prefix,c=a.transform,l=a.symbol,d=a.mask,g=a.maskId,p=a.extra;return new Promise(function(b,u){Promise.all([Ht(i,o),d.iconName?Ht(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(f){var m=$t(f,2),h=m[0],k=m[1];b([n,ee({icons:{main:h,mask:k},prefix:o,iconName:i,transform:c,symbol:l,maskId:g,title:r,titleId:s,extra:p,watchable:!0})])}).catch(u)})},e.generateAbstractIcon=function(n){var a=n.children,i=n.attributes,r=n.main,s=n.transform,o=n.styles,c=St(o);c.length>0&&(i.style=c);var l;return Jt(s)&&(l=D("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),a.push(l||r.icon),{children:a,attributes:i}}}},Na={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=a.classes,r=i===void 0?[]:i;return Pt({type:"layer"},function(){G("beforeDOMElementCreation",{assembler:n,params:a});var s=[];return n(function(o){Array.isArray(o)?o.map(function(c){s=s.concat(c.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(y.cssPrefix,"-layers")].concat(ot(r)).join(" ")},children:s}]})}}}},za={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=a.title,r=i===void 0?null:i,s=a.classes,o=s===void 0?[]:s,c=a.attributes,l=c===void 0?{}:c,d=a.styles,g=d===void 0?{}:d;return Pt({type:"counter",content:n},function(){return G("beforeDOMElementCreation",{content:n,params:a}),ma({content:n.toString(),title:r,extra:{attributes:l,styles:g,classes:["".concat(y.cssPrefix,"-layers-counter")].concat(ot(o))}})})}}}},Ia={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=a.transform,r=i===void 0?I:i,s=a.title,o=s===void 0?null:s,c=a.classes,l=c===void 0?[]:c,d=a.attributes,g=d===void 0?{}:d,p=a.styles,b=p===void 0?{}:p;return Pt({type:"text",content:n},function(){return G("beforeDOMElementCreation",{content:n,params:a}),be({content:n,transform:v(v({},I),r),title:o,extra:{attributes:g,styles:b,classes:["".concat(y.cssPrefix,"-layers-text")].concat(ot(l))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var i=a.title,r=a.transform,s=a.extra,o=null,c=null;if(De){var l=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();o=d.width/l,c=d.height/l}return y.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,be({content:n.innerHTML,width:o,height:c,transform:r,title:i,extra:s,watchable:!0})])}}},Ya=new RegExp('"',"ug"),Ce=[1105920,1112319];function _a(t){var e=t.replace(Ya,""),n=Vn(e,0),a=n>=Ce[0]&&n<=Ce[1],i=e.length===2?e[0]===e[1]:!1;return{value:Dt(i?e[0]:e),isSecondary:a||i}}function Se(t,e){var n="".concat(En).concat(e.replace(":","-"));return new Promise(function(a,i){if(t.getAttribute(n)!==null)return a();var r=Z(t.children),s=r.filter(function(P){return P.getAttribute(_t)===e})[0],o=F.getComputedStyle(t,e),c=o.getPropertyValue("font-family").match(Pn),l=o.getPropertyValue("font-weight"),d=o.getPropertyValue("content");if(s&&!c)return t.removeChild(s),a();if(c&&d!=="none"&&d!==""){var g=o.getPropertyValue("content"),p=~["Sharp"].indexOf(c[2])?S:E,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?at[p][c[2].toLowerCase()]:On[p][l],u=_a(g),f=u.value,m=u.isSecondary,h=c[0].startsWith("FontAwesome"),k=Qt(b,f),x=k;if(h){var w=na(f);w.iconName&&w.prefix&&(k=w.iconName,b=w.prefix)}if(k&&!m&&(!s||s.getAttribute(Gt)!==b||s.getAttribute(qt)!==x)){t.setAttribute(n,x),s&&t.removeChild(s);var A=Sa(),T=A.extra;T.attributes[_t]=e,Ht(k,b).then(function(P){var j=ee(v(v({},A),{},{icons:{main:P,mask:te()},prefix:b,iconName:x,extra:T,watchable:!0})),N=C.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(N,t.firstChild):t.appendChild(N),N.outerHTML=j.map(function(ft){return ct(ft)}).join(`
`),t.removeAttribute(n),a()}).catch(i)}else a()}else a()})}function Da(t){return Promise.all([Se(t,"::before"),Se(t,"::after")])}function Ra(t){return t.parentNode!==document.head&&!~Sn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(_t)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Te(t){if(!!R)return new Promise(function(e,n){var a=Z(t.querySelectorAll("*")).filter(Ra).map(Da),i=ne.begin("searchPseudoElements");rn(),Promise.all(a).then(function(){i(),Bt(),e()}).catch(function(){i(),Bt(),n()})})}var ja={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Te,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,i=a===void 0?C:a;y.searchPseudoElements&&Te(i)}}},Me=!1,Xa={mixout:function(){return{dom:{unwatch:function(){rn(),Me=!0}}}},hooks:function(){return{bootstrap:function(){xe(jt("mutationObserverCallbacks",{}))},noAuto:function(){xa()},watch:function(n){var a=n.observeMutationsRoot;Me?Bt():xe(jt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Pe=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,i){var r=i.toLowerCase().split("-"),s=r[0],o=r.slice(1).join("-");if(s&&o==="h")return a.flipX=!0,a;if(s&&o==="v")return a.flipY=!0,a;if(o=parseFloat(o),isNaN(o))return a;switch(s){case"grow":a.size=a.size+o;break;case"shrink":a.size=a.size-o;break;case"left":a.x=a.x-o;break;case"right":a.x=a.x+o;break;case"up":a.y=a.y-o;break;case"down":a.y=a.y+o;break;case"rotate":a.rotate=a.rotate+o;break}return a},n)},Fa={mixout:function(){return{parse:{transform:function(n){return Pe(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var i=a.getAttribute("data-fa-transform");return i&&(n.transform=Pe(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,i=n.transform,r=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(r/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),d="rotate(".concat(i.rotate," 0 0)"),g={transform:"".concat(c," ").concat(l," ").concat(d)},p={transform:"translate(".concat(s/2*-1," -256)")},b={outer:o,inner:g,path:p};return{tag:"g",attributes:v({},b.outer),children:[{tag:"g",attributes:v({},b.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:v(v({},a.icon.attributes),b.path)}]}]}}}},zt={x:0,y:0,width:"100%",height:"100%"};function Oe(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Ha(t){return t.tag==="g"?t.children:[t]}var Wa={hooks:function(){return{parseNodeAttributes:function(n,a){var i=a.getAttribute("data-fa-mask"),r=i?Mt(i.split(" ").map(function(s){return s.trim()})):te();return r.prefix||(r.prefix=H()),n.mask=r,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,i=n.attributes,r=n.main,s=n.mask,o=n.maskId,c=n.transform,l=r.width,d=r.icon,g=s.width,p=s.icon,b=Fn({transform:c,containerWidth:g,iconWidth:l}),u={tag:"rect",attributes:v(v({},zt),{},{fill:"white"})},f=d.children?{children:d.children.map(Oe)}:{},m={tag:"g",attributes:v({},b.inner),children:[Oe(v({tag:d.tag,attributes:v(v({},d.attributes),b.path)},f))]},h={tag:"g",attributes:v({},b.outer),children:[m]},k="mask-".concat(o||st()),x="clip-".concat(o||st()),w={tag:"mask",attributes:v(v({},zt),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[u,h]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:Ha(p)},w]};return a.push(A,{tag:"rect",attributes:v({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(k,")")},zt)}),{children:a,attributes:i}}}},Ba={provides:function(e){var n=!1;F.matchMedia&&(n=F.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],i={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:v(v({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=v(v({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:v(v({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:v(v({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:v(v({},s),{},{values:"1;0;1;1;0;1;"})}),a.push(o),a.push({tag:"path",attributes:v(v({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:v(v({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:v(v({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:v(v({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},$a={hooks:function(){return{parseNodeAttributes:function(n,a){var i=a.getAttribute("data-fa-symbol"),r=i===null?!1:i===""?!0:i;return n.symbol=r,n}}}},Ua=[Bn,La,Na,za,Ia,ja,Xa,Fa,Wa,Ba,$a];ra(Ua,{mixoutsTo:O});O.noAuto;O.config;var Ga=O.library,qa=O.dom;O.parse;O.findIconDefinition;O.toHtml;O.icon;O.layer;O.text;O.counter;var Va={prefix:"fas",iconName:"laptop",icon:[640,512,[128187],"f109","M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z"]},Ka={prefix:"fas",iconName:"cloud",icon:[640,512,[9729],"f0c2","M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"]},Ja={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Za={prefix:"fas",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"]},Qa={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"]},ti={prefix:"fas",iconName:"chevron-up",icon:[512,512,[],"f077","M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},ei={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"]},ni={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},ai={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},ii={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},ri={prefix:"fas",iconName:"mobile",icon:[384,512,[128241,"mobile-android","mobile-phone"],"f3ce","M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},si={prefix:"fas",iconName:"user-lock",icon:[640,512,[],"f502","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H392.6c-5.4-9.4-8.6-20.3-8.6-32V352c0-2.1 .1-4.2 .3-6.3c-31-26-71-41.7-114.6-41.7H178.3zM528 240c17.7 0 32 14.3 32 32v48H496V272c0-17.7 14.3-32 32-32zm-80 32v48c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32V272c0-44.2-35.8-80-80-80s-80 35.8-80 80z"]},oi={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]},li={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},ci={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},fi={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};function ui(){Ga.add(Qa,Za,oi,ti,ni,Ja,si,ei,ri,Ka,Va,ai,ii,fi,ci,li),qa.watch()}var Le=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wt(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var on={exports:{}};(function(t,e){(function(n){t.exports=n()})(function(){return function n(a,i,r){function s(l,d){if(!i[l]){if(!a[l]){var g=typeof wt=="function"&&wt;if(!d&&g)return g(l,!0);if(o)return o(l,!0);var p=new Error("Cannot find module '"+l+"'");throw p.code="MODULE_NOT_FOUND",p}var b=i[l]={exports:{}};a[l][0].call(b.exports,function(u){var f=a[l][1][u];return s(f||u)},b,b.exports,n,a,i,r)}return i[l].exports}for(var o=typeof wt=="function"&&wt,c=0;c<r.length;c++)s(r[c]);return s}({1:[function(n,a,i){var r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function c(d){if(d==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(d)}function l(){try{if(!Object.assign)return!1;var d=new String("abc");if(d[5]="de",Object.getOwnPropertyNames(d)[0]==="5")return!1;for(var g={},p=0;p<10;p++)g["_"+String.fromCharCode(p)]=p;var b=Object.getOwnPropertyNames(g).map(function(f){return g[f]});if(b.join("")!=="0123456789")return!1;var u={};return"abcdefghijklmnopqrst".split("").forEach(function(f){u[f]=f}),Object.keys(Object.assign({},u)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}a.exports=l()?Object.assign:function(d,g){for(var p,b=c(d),u,f=1;f<arguments.length;f++){p=Object(arguments[f]);for(var m in p)s.call(p,m)&&(b[m]=p[m]);if(r){u=r(p);for(var h=0;h<u.length;h++)o.call(p,u[h])&&(b[u[h]]=p[u[h]])}}return b}},{}],2:[function(n,a,i){(function(r){(function(){var s,o,c,l,d,g;typeof performance<"u"&&performance!==null&&performance.now?a.exports=function(){return performance.now()}:typeof r<"u"&&r!==null&&r.hrtime?(a.exports=function(){return(s()-d)/1e6},o=r.hrtime,s=function(){var p;return p=o(),p[0]*1e9+p[1]},l=s(),g=r.uptime()*1e9,d=l-g):Date.now?(a.exports=function(){return Date.now()-c},c=Date.now()):(a.exports=function(){return new Date().getTime()-c},c=new Date().getTime())}).call(this)}).call(this,n("_process"))},{_process:3}],3:[function(n,a,i){var r=a.exports={},s,o;function c(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?s=setTimeout:s=c}catch{s=c}try{typeof clearTimeout=="function"?o=clearTimeout:o=l}catch{o=l}})();function d(w){if(s===setTimeout)return setTimeout(w,0);if((s===c||!s)&&setTimeout)return s=setTimeout,setTimeout(w,0);try{return s(w,0)}catch{try{return s.call(null,w,0)}catch{return s.call(this,w,0)}}}function g(w){if(o===clearTimeout)return clearTimeout(w);if((o===l||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(w);try{return o(w)}catch{try{return o.call(null,w)}catch{return o.call(this,w)}}}var p=[],b=!1,u,f=-1;function m(){!b||!u||(b=!1,u.length?p=u.concat(p):f=-1,p.length&&h())}function h(){if(!b){var w=d(m);b=!0;for(var A=p.length;A;){for(u=p,p=[];++f<A;)u&&u[f].run();f=-1,A=p.length}u=null,b=!1,g(w)}}r.nextTick=function(w){var A=new Array(arguments.length-1);if(arguments.length>1)for(var T=1;T<arguments.length;T++)A[T-1]=arguments[T];p.push(new k(w,A)),p.length===1&&!b&&d(h)};function k(w,A){this.fun=w,this.array=A}k.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={};function x(){}r.on=x,r.addListener=x,r.once=x,r.off=x,r.removeListener=x,r.removeAllListeners=x,r.emit=x,r.prependListener=x,r.prependOnceListener=x,r.listeners=function(w){return[]},r.binding=function(w){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(w){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},{}],4:[function(n,a,i){(function(r){for(var s=n("performance-now"),o=typeof window>"u"?r:window,c=["moz","webkit"],l="AnimationFrame",d=o["request"+l],g=o["cancel"+l]||o["cancelRequest"+l],p=0;!d&&p<c.length;p++)d=o[c[p]+"Request"+l],g=o[c[p]+"Cancel"+l]||o[c[p]+"CancelRequest"+l];if(!d||!g){var b=0,u=0,f=[],m=1e3/60;d=function(h){if(f.length===0){var k=s(),x=Math.max(0,m-(k-b));b=x+k,setTimeout(function(){var w=f.slice(0);f.length=0;for(var A=0;A<w.length;A++)if(!w[A].cancelled)try{w[A].callback(b)}catch(T){setTimeout(function(){throw T},0)}},Math.round(x))}return f.push({handle:++u,callback:h,cancelled:!1}),u},g=function(h){for(var k=0;k<f.length;k++)f[k].handle===h&&(f[k].cancelled=!0)}}a.exports=function(h){return d.call(o,h)},a.exports.cancel=function(){g.apply(o,arguments)},a.exports.polyfill=function(){o.requestAnimationFrame=d,o.cancelAnimationFrame=g}}).call(this,typeof Le<"u"?Le:typeof self<"u"?self:typeof window<"u"?window:{})},{"performance-now":2}],5:[function(n,a,i){var r=function(){function b(u,f){for(var m=0;m<f.length;m++){var h=f[m];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(u,h.key,h)}}return function(u,f,m){return f&&b(u.prototype,f),m&&b(u,m),u}}();function s(b,u){if(!(b instanceof u))throw new TypeError("Cannot call a class as a function")}var o=n("raf"),c=n("object-assign"),l={propertyCache:{},vendors:[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],clamp:function(u,f,m){return f<m?u<f?f:u>m?m:u:u<m?m:u>f?f:u},data:function(u,f){return l.deserialize(u.getAttribute("data-"+f))},deserialize:function(u){return u==="true"?!0:u==="false"?!1:u==="null"?null:!isNaN(parseFloat(u))&&isFinite(u)?parseFloat(u):u},camelCase:function(u){return u.replace(/-+(.)?/g,function(f,m){return m?m.toUpperCase():""})},accelerate:function(u){l.css(u,"transform","translate3d(0,0,0) rotate(0.0001deg)"),l.css(u,"transform-style","preserve-3d"),l.css(u,"backface-visibility","hidden")},transformSupport:function(u){for(var f=document.createElement("div"),m=!1,h=null,k=!1,x=null,w=null,A=0,T=l.vendors.length;A<T;A++)if(l.vendors[A]!==null?(x=l.vendors[A][0]+"transform",w=l.vendors[A][1]+"Transform"):(x="transform",w="transform"),f.style[w]!==void 0){m=!0;break}switch(u){case"2D":k=m;break;case"3D":if(m){var P=document.body||document.createElement("body"),j=document.documentElement,N=j.style.overflow,ft=!1;document.body||(ft=!0,j.style.overflow="hidden",j.appendChild(P),P.style.overflow="hidden",P.style.background=""),P.appendChild(f),f.style[w]="translate3d(1px,1px,1px)",h=window.getComputedStyle(f).getPropertyValue(x),k=h!==void 0&&h.length>0&&h!=="none",j.style.overflow=N,P.removeChild(f),ft&&(P.removeAttribute("style"),P.parentNode.removeChild(P))}break}return k},css:function(u,f,m){var h=l.propertyCache[f];if(!h){for(var k=0,x=l.vendors.length;k<x;k++)if(l.vendors[k]!==null?h=l.camelCase(l.vendors[k][1]+"-"+f):h=f,u.style[h]!==void 0){l.propertyCache[f]=h;break}}u.style[h]=m}},d=30,g={relativeInput:!1,clipRelativeInput:!1,inputElement:null,hoverOnly:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5,pointerEvents:!1,precision:1,onReady:null,selector:null},p=function(){function b(u,f){s(this,b),this.element=u;var m={calibrateX:l.data(this.element,"calibrate-x"),calibrateY:l.data(this.element,"calibrate-y"),invertX:l.data(this.element,"invert-x"),invertY:l.data(this.element,"invert-y"),limitX:l.data(this.element,"limit-x"),limitY:l.data(this.element,"limit-y"),scalarX:l.data(this.element,"scalar-x"),scalarY:l.data(this.element,"scalar-y"),frictionX:l.data(this.element,"friction-x"),frictionY:l.data(this.element,"friction-y"),originX:l.data(this.element,"origin-x"),originY:l.data(this.element,"origin-y"),pointerEvents:l.data(this.element,"pointer-events"),precision:l.data(this.element,"precision"),relativeInput:l.data(this.element,"relative-input"),clipRelativeInput:l.data(this.element,"clip-relative-input"),hoverOnly:l.data(this.element,"hover-only"),inputElement:document.querySelector(l.data(this.element,"input-element")),selector:l.data(this.element,"selector")};for(var h in m)m[h]===null&&delete m[h];c(this,g,m,f),this.inputElement||(this.inputElement=this.element),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depthsX=[],this.depthsY=[],this.raf=null,this.bounds=null,this.elementPositionX=0,this.elementPositionY=0,this.elementWidth=0,this.elementHeight=0,this.elementCenterX=0,this.elementCenterY=0,this.elementRangeX=0,this.elementRangeY=0,this.calibrationX=0,this.calibrationY=0,this.inputX=0,this.inputY=0,this.motionX=0,this.motionY=0,this.velocityX=0,this.velocityY=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onDeviceMotion=this.onDeviceMotion.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onMotionTimer=this.onMotionTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.windowWidth=null,this.windowHeight=null,this.windowCenterX=null,this.windowCenterY=null,this.windowRadiusX=null,this.windowRadiusY=null,this.portrait=!1,this.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),this.motionSupport=!!window.DeviceMotionEvent&&!this.desktop,this.orientationSupport=!!window.DeviceOrientationEvent&&!this.desktop,this.orientationStatus=0,this.motionStatus=0,this.initialise()}return r(b,[{key:"initialise",value:function(){this.transform2DSupport===void 0&&(this.transform2DSupport=l.transformSupport("2D"),this.transform3DSupport=l.transformSupport("3D")),this.transform3DSupport&&l.accelerate(this.element);var f=window.getComputedStyle(this.element);f.getPropertyValue("position")==="static"&&(this.element.style.position="relative"),this.pointerEvents||(this.element.style.pointerEvents="none"),this.updateLayers(),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)}},{key:"doReadyCallback",value:function(){this.onReady&&this.onReady()}},{key:"updateLayers",value:function(){this.selector?this.layers=this.element.querySelectorAll(this.selector):this.layers=this.element.children,this.layers.length||console.warn("ParallaxJS: Your scene does not have any layers."),this.depthsX=[],this.depthsY=[];for(var f=0;f<this.layers.length;f++){var m=this.layers[f];this.transform3DSupport&&l.accelerate(m),m.style.position=f?"absolute":"relative",m.style.display="block",m.style.left=0,m.style.top=0;var h=l.data(m,"depth")||0;this.depthsX.push(l.data(m,"depth-x")||h),this.depthsY.push(l.data(m,"depth-y")||h)}}},{key:"updateDimensions",value:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.windowCenterX=this.windowWidth*this.originX,this.windowCenterY=this.windowHeight*this.originY,this.windowRadiusX=Math.max(this.windowCenterX,this.windowWidth-this.windowCenterX),this.windowRadiusY=Math.max(this.windowCenterY,this.windowHeight-this.windowCenterY)}},{key:"updateBounds",value:function(){this.bounds=this.inputElement.getBoundingClientRect(),this.elementPositionX=this.bounds.left,this.elementPositionY=this.bounds.top,this.elementWidth=this.bounds.width,this.elementHeight=this.bounds.height,this.elementCenterX=this.elementWidth*this.originX,this.elementCenterY=this.elementHeight*this.originY,this.elementRangeX=Math.max(this.elementCenterX,this.elementWidth-this.elementCenterX),this.elementRangeY=Math.max(this.elementCenterY,this.elementHeight-this.elementCenterY)}},{key:"queueCalibration",value:function(f){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,f)}},{key:"enable",value:function(){this.enabled||(this.enabled=!0,this.orientationSupport?(this.portrait=!1,window.addEventListener("deviceorientation",this.onDeviceOrientation),this.detectionTimer=setTimeout(this.onOrientationTimer,this.supportDelay)):this.motionSupport?(this.portrait=!1,window.addEventListener("devicemotion",this.onDeviceMotion),this.detectionTimer=setTimeout(this.onMotionTimer,this.supportDelay)):(this.calibrationX=0,this.calibrationY=0,this.portrait=!1,window.addEventListener("mousemove",this.onMouseMove),this.doReadyCallback()),window.addEventListener("resize",this.onWindowResize),this.raf=o(this.onAnimationFrame))}},{key:"disable",value:function(){!this.enabled||(this.enabled=!1,this.orientationSupport?window.removeEventListener("deviceorientation",this.onDeviceOrientation):this.motionSupport?window.removeEventListener("devicemotion",this.onDeviceMotion):window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("resize",this.onWindowResize),o.cancel(this.raf))}},{key:"calibrate",value:function(f,m){this.calibrateX=f===void 0?this.calibrateX:f,this.calibrateY=m===void 0?this.calibrateY:m}},{key:"invert",value:function(f,m){this.invertX=f===void 0?this.invertX:f,this.invertY=m===void 0?this.invertY:m}},{key:"friction",value:function(f,m){this.frictionX=f===void 0?this.frictionX:f,this.frictionY=m===void 0?this.frictionY:m}},{key:"scalar",value:function(f,m){this.scalarX=f===void 0?this.scalarX:f,this.scalarY=m===void 0?this.scalarY:m}},{key:"limit",value:function(f,m){this.limitX=f===void 0?this.limitX:f,this.limitY=m===void 0?this.limitY:m}},{key:"origin",value:function(f,m){this.originX=f===void 0?this.originX:f,this.originY=m===void 0?this.originY:m}},{key:"setInputElement",value:function(f){this.inputElement=f,this.updateDimensions()}},{key:"setPosition",value:function(f,m,h){m=m.toFixed(this.precision)+"px",h=h.toFixed(this.precision)+"px",this.transform3DSupport?l.css(f,"transform","translate3d("+m+","+h+",0)"):this.transform2DSupport?l.css(f,"transform","translate("+m+","+h+")"):(f.style.left=m,f.style.top=h)}},{key:"onOrientationTimer",value:function(){this.orientationSupport&&this.orientationStatus===0?(this.disable(),this.orientationSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onMotionTimer",value:function(){this.motionSupport&&this.motionStatus===0?(this.disable(),this.motionSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onCalibrationTimer",value:function(){this.calibrationFlag=!0}},{key:"onWindowResize",value:function(){this.updateDimensions()}},{key:"onAnimationFrame",value:function(){this.updateBounds();var f=this.inputX-this.calibrationX,m=this.inputY-this.calibrationY;(Math.abs(f)>this.calibrationThreshold||Math.abs(m)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.motionX=this.calibrateX?m:this.inputY,this.motionY=this.calibrateY?f:this.inputX):(this.motionX=this.calibrateX?f:this.inputX,this.motionY=this.calibrateY?m:this.inputY),this.motionX*=this.elementWidth*(this.scalarX/100),this.motionY*=this.elementHeight*(this.scalarY/100),isNaN(parseFloat(this.limitX))||(this.motionX=l.clamp(this.motionX,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.motionY=l.clamp(this.motionY,-this.limitY,this.limitY)),this.velocityX+=(this.motionX-this.velocityX)*this.frictionX,this.velocityY+=(this.motionY-this.velocityY)*this.frictionY;for(var h=0;h<this.layers.length;h++){var k=this.layers[h],x=this.depthsX[h],w=this.depthsY[h],A=this.velocityX*(x*(this.invertX?-1:1)),T=this.velocityY*(w*(this.invertY?-1:1));this.setPosition(k,A,T)}this.raf=o(this.onAnimationFrame)}},{key:"rotate",value:function(f,m){var h=(f||0)/d,k=(m||0)/d,x=this.windowHeight>this.windowWidth;this.portrait!==x&&(this.portrait=x,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.calibrationX=h,this.calibrationY=k),this.inputX=h,this.inputY=k}},{key:"onDeviceOrientation",value:function(f){var m=f.beta,h=f.gamma;m!==null&&h!==null&&(this.orientationStatus=1,this.rotate(m,h))}},{key:"onDeviceMotion",value:function(f){var m=f.rotationRate.beta,h=f.rotationRate.gamma;m!==null&&h!==null&&(this.motionStatus=1,this.rotate(m,h))}},{key:"onMouseMove",value:function(f){var m=f.clientX,h=f.clientY;if(this.hoverOnly&&(m<this.elementPositionX||m>this.elementPositionX+this.elementWidth||h<this.elementPositionY||h>this.elementPositionY+this.elementHeight)){this.inputX=0,this.inputY=0;return}this.relativeInput?(this.clipRelativeInput&&(m=Math.max(m,this.elementPositionX),m=Math.min(m,this.elementPositionX+this.elementWidth),h=Math.max(h,this.elementPositionY),h=Math.min(h,this.elementPositionY+this.elementHeight)),this.elementRangeX&&this.elementRangeY&&(this.inputX=(m-this.elementPositionX-this.elementCenterX)/this.elementRangeX,this.inputY=(h-this.elementPositionY-this.elementCenterY)/this.elementRangeY)):this.windowRadiusX&&this.windowRadiusY&&(this.inputX=(m-this.windowCenterX)/this.windowRadiusX,this.inputY=(h-this.windowCenterY)/this.windowRadiusY)}},{key:"destroy",value:function(){this.disable(),clearTimeout(this.calibrationTimer),clearTimeout(this.detectionTimer),this.element.removeAttribute("style");for(var f=0;f<this.layers.length;f++)this.layers[f].removeAttribute("style");delete this.element,delete this.layers}},{key:"version",value:function(){return"3.1.0"}}]),b}();a.exports=p},{"object-assign":1,raf:4}]},{},[5])(5)})})(on);const mi=on.exports;function di(){var t=document.getElementById("scene");new mi(t,{clipRelativeInput:!0})}const hi=[{name:"Shrikrishna Umbare",position:"Lead",about:"I'm Shrikrishna Umbare, leading GDSC at DBIT. Let's dive into tech and innovate together!",image:"./img/Team/ShrikrishnaUmbare_Lead.jpg",socials:[{name:"instagram",link:"https://www.instagram.com/shri__krishna__142/"},{name:"github",link:"https://github.com/shri142"},{name:"linkedin",link:"https://www.linkedin.com/in/shrikrishna-umbare/"}]},{name:"Sahil Singh",position:"Co-Lead",about:"Motivated and Passionate full stack Web Developer. I also like watching anime and doing calisthenics.",image:"./img/Team/Sahil_CoLead.jpg",socials:[{name:"instagram",link:"https://www.instagram.com/printf_sahil_/"},{name:"github",link:"https://github.com/Sahil5111"},{name:"linkedin",link:"https://www.linkedin.com/in/sahilsingh03122003/"}]},{name:"Omesh Barhate",position:"Co-Lead",about:"Motivated and Passionate Backend Web Developer.",image:"./img/Team/Omesh_CoLead.jpg",socials:[{name:"github",link:"https://github.com/omesh-barhate"},{name:"linkedin",link:"https://www.linkedin.com/in/omesh-barhate/"}]},{name:"Dushyant Bhagwat",position:"Secretary",about:"I am a motivated and confident team member with a tech-savvy and enthusiastic approach.",image:"./img/Team/Dushyant_Secretary.jpg",socials:[{name:"instagram",link:"https://instagram.com/dushyantbhagwat?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"},{name:"github",link:"https://github.com/Dushyantbhagwat"},{name:"linkedin",link:"https://www.linkedin.com/in/dushyant-bhagwat-144917287"}]},{name:"Prasad Alai",position:"Event Head",about:"Exploring the realms of Web Development. You can find me making films, when I'm not immersed in Lines of Code",image:"./img/Team/PrasadAlai_EventHead.jpg",socials:[{name:"instagram",link:"https://www.instagram.com/prasad_6603/"},{name:"github",link:"https://github.com/321prasad0058"},{name:"linkedin",link:"https://in.linkedin.com/in/prasad-alai-52879a255"}]},{name:"Aditya Samant",position:"Pr Head",about:"Motivated and eager-to-learn software engineering student, with special interest in Web-development and AI-ML",image:"./img/Team/AdityaSamant_PrHead.jpg",socials:[{name:"instagram",link:"https://instagram.com/aditya__1473?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"},{name:"linkedin",link:"https://www.linkedin.com/in/aditya-samant-a18b65233"}]},{name:"Anushka Emily Joseph",position:"Design Head",about:"Enthusiastic about art and designing. Driven by the desire to learn and improve technical proficiency.",image:"./img/Team/AnushkaEmily_DesignHead.jpg",socials:[{name:"instagram",link:"https://instagram.com/anushka_emily?utm_source=qr&igshid=NGExMmI2YTkyZg=="}]},{name:"Shantanu Mande",position:"Sponsorship Head",about:"Eager to learn new technologies.I also like Drawing",image:"./img/Team/ShantanuMande_SponsorshipHead.jpg",socials:[{name:"instagram",link:"https://www.instagram.com/shantanumande/"},{name:"linkedin",link:"https://www.linkedin.com/in/shantanu-mande-11b04b285/"}]},{name:"Yashas Khot",position:"Cloud Expert",about:"Motivated and Ardent Back-End Developer",image:"./img/Team/YashasKhot_CloudExpert.jpg",socials:[{name:"instagram",link:"https://www.instagram.com/yashas1256/?igshid=ZDdkNTZiNTM%3D"},{name:"github",link:"https://github.com/yashaskhot"},{name:"linkedin",link:"https://www.linkedin.com/in/yashaskhot/"}]},{name:"Gaven D'costa",position:"Web Expert",about:"Motivated and Ardent full stack Web Developer. I also like watching anime and lifting weights",image:"./img/Team/GavenDcosta_WebExpert.jpg",socials:[{name:"instagram",link:"https://www.instagram.com/gavendcosta/"},{name:"github",link:"https://github.com/GavenDcosta"},{name:"linkedin",link:"https://www.linkedin.com/in/gaven-dcosta-b18165239/"}]},{name:"Jess John",position:"App Expert",about:"Eager and passionate about exploring MERN stack and Flutter development",image:"./img/Team/JessJohn_AppExpert.jpg",socials:[{name:"instagram",link:"https://www.instagram.com/jesspacito_6174/"},{name:"github",link:"https://github.com/jessjohn1539"},{name:"linkedin",link:"https://www.linkedin.com/in/jessjohn1539/"}]},{name:"Melwin Lewis",position:"App Expert",about:"Avid Video Game Player and Tech Enthusiast, likes to discover new things",image:"./img/Team/Melwin_AppExpert.jpg",socials:[{name:"github",link:"https://github.com/MasteroidM"},{name:"linkedin",link:"https://www.linkedin.com/in/melwin-lewis-6a91a4199/"}]},{name:"Aarol D'souza",position:"DSA Expert",about:"An Enthusiastic, Tech-savant, and Goal-Driven Individual aspiring to bring revolutionary changes in tech. through my Development and Problem Solving Skills!",image:"./img/Team/AarolDSouza_DSAExpert.jpg",socials:[{name:"instagram",link:"https://www.instagram.com/aarol.dsouza/"},{name:"github",link:"https://github.com/AarDG10"},{name:"linkedin",link:"https://www.linkedin.com/in/aarol-d-souza-a25893259/"}]},{name:"Vaishnavi Nagave",position:"DSA Expert",about:"Dedicated and passionate about solving problems through data structures and algorithms",image:"./img/Team/VaishnaviNagave_DsaExpert.jpg",socials:[{name:"github",link:"https://github.com/vaishnavim614"},{name:"linkedin",link:"https://www.linkedin.com/in/vaishnavi-nagave-550477260/"}]},{name:"Ehtesham Siddiqui",position:"General Advisor",about:"With an entrepreneurial mindset, I enthusiastically embrace new ideas, aiming to drive positive transformation in society's future.",image:"./img/Team/Ethesham_GeneralAdvisor.jpg",socials:[{name:"linkedin",link:"https://www.linkedin.com/in/ehtesham-siddiqui03/"}]},{name:"Alston Fernandes",position:"Technical Advisor",about:"Passionate about web and app development",image:"./img/Team/Alston_TechAdvisor.jpg",socials:[{name:"instagram",link:"https://www.instagram.com/fernands_alston/"},{name:"linkedin",link:"https://www.linkedin.com/in/alston-fernandes-b28720220//"}]},{name:"Raj Chaudhari",position:"Event Advisor",about:"Your Event Advisor: Turning visions into unforgettable experiences.",image:"./img/Team/RajChaudhari_EventAdvisor.jpg",socials:[{name:"instagram",link:"https://www.instagram.com/iamrajchaudhari_108_/"},{name:"linkedin",link:"https://www.linkedin.com/in/raj-chaudhari2151/"}]},{name:"Likla Sinha",position:"Design Advisor",about:"Motivated Interactive Designer Figma | Abode Illustrator | Adobe Photoshop | Adobe InDesign |",image:"./img/Team/LiklaSinha_DesignAdvisor.jpg",socials:[{name:"linkedin",link:"https://www.linkedin.com/in/likla-sinha-bb6244202/"}]},{name:"Yash Dharmadhikari",position:"Design Advisor",about:"Design Advisor: Elevating visuals and user experiences with creativity and expertise.",image:"./img/Team/YashDharmadhikari_DesignAdvisor.jpg",socials:[{name:"linkedin",link:"https://www.linkedin.com/in/yash-dharmadhikari-340baa229/"}]},{name:"Vipul Belhekar",position:"Sponsorship Advisor",about:"Sponsor Advisor: Connecting opportunities, funding growth, and fueling success.",image:"./img/Team/VipulBelhekar_SponsorshipAdvisor.jpg",socials:[{name:"instagram",link:"https://www.instagram.com/vipulbelhekar_/"},{name:"linkedin",link:"https://www.linkedin.com/in/vipul-belhekar-96b7941aa/"}]},{name:"Erica Prasad",position:"Co-Ordinator",about:"I'm here to support our leads. As a Coordinator, my role is to help make their vision a reality, ensuring smooth execution every step of the way.",image:"./img/Team/EricaPrasad_Co-Ordinator.jpg",socials:[{name:"instagram",link:"https://instagram.com/erica_prasad?utm_source=qr&igshid=MThlNWY1MzQwNA=="},{name:"github",link:"https://github.com/EricaPrasad"},{name:"linkedin",link:"https://www.linkedin.com/in/erica-prasad-92ab64255/"}]},{name:"Harsh Chaudhari",position:"Co-Ordinator",about:"I'm here to support our leads. As a Coordinator, my role is to help make their vision a reality, ensuring smooth execution every step of the way.",image:"./img/Team/HarshChaudhari_SE_Co-Ordinator.jpg",socials:[{name:"instagram",link:"https://www.instagram.com/harsh_chaudhari_212/"},{name:"github",link:"https://github.com/Harshh212"},{name:"linkedin",link:"https://www.linkedin.com/in/harsh-chaudhari-a8570725b/"}]},{name:"Swayam Dalvi",position:"Co-Ordinator",about:"I'm here to support our leads. As a Coordinator, my role is to help make their vision a reality, ensuring smooth execution every step of the way.",image:"./img/Team/Swayam_Co-Ordinator.jpg",socials:[{name:"linkedin",link:"https://www.linkedin.com/in/swayam-dalvi-223483260/"}]},{name:"Moin Khan",position:"Co-Ordinator",about:"I'm here to support our leads. As a Coordinator, my role is to help make their vision a reality, ensuring smooth execution every step of the way.",image:"./img/Team/Moin_Co-Ordinator.jpg",socials:[{name:"instagram",link:"https://www.instagram.com/moink_17/"},{name:"github",link:"https://github.com/moink7"},{name:"linkedin",link:"https://www.linkedin.com/in/moin-khan-746a45276/"}]}];function gi(){const t=document.querySelector("#cardPos");hi.forEach(e=>{let n="";e.socials.forEach(a=>{n+=`<a target="_blank"  socials href="${a.link}">
      <i class="fab fa-${a.name} socials" style="padding:10px;"></i>
      </a>`}),t.innerHTML+=`<div class="col-md-4 col-sm-6 col-xs-12" data-aos="zoom-in" data-aos-duration="500">
        <article class="material-card Blue">
          <h2>
            <span>${e.name}</span>
            <strong>
              <i class="fa fa-fw fa-star"></i>
              ${e.position}
            </strong>
          </h2>
          <div class="mc-content">
            <div class="img-container" style="background-image:url('${e.image}');">
            </div>
            <div class="mc-description">
            ${e.about}
            </div>
          </div>
          <a class="mc-btn-action">
            <i class="fa fa-bars"></i>
          </a>
          <div class="mc-footer">
            <h4>
              Socials
            </h4>
            ${n}
          </div>
        </article>
      </div>`})}class z{constructor(e,n={}){if(!(e instanceof Node))throw"Can't initialize VanillaTilt because "+e+" is not a Node.";this.width=null,this.height=null,this.clientWidth=null,this.clientHeight=null,this.left=null,this.top=null,this.gammazero=null,this.betazero=null,this.lastgammazero=null,this.lastbetazero=null,this.transitionTimeout=null,this.updateCall=null,this.event=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=e,this.settings=this.extendSettings(n),this.reverse=this.settings.reverse?-1:1,this.resetToStart=z.isSettingTrue(this.settings["reset-to-start"]),this.glare=z.isSettingTrue(this.settings.glare),this.glarePrerender=z.isSettingTrue(this.settings["glare-prerender"]),this.fullPageListening=z.isSettingTrue(this.settings["full-page-listening"]),this.gyroscope=z.isSettingTrue(this.settings.gyroscope),this.gyroscopeSamples=this.settings.gyroscopeSamples,this.elementListener=this.getElementListener(),this.glare&&this.prepareGlare(),this.fullPageListening&&this.updateClientSize(),this.addEventListeners(),this.reset(),this.resetToStart===!1&&(this.settings.startX=0,this.settings.startY=0)}static isSettingTrue(e){return e===""||e===!0||e===1}getElementListener(){if(this.fullPageListening)return window.document;if(typeof this.settings["mouse-event-element"]=="string"){const e=document.querySelector(this.settings["mouse-event-element"]);if(e)return e}return this.settings["mouse-event-element"]instanceof Node?this.settings["mouse-event-element"]:this.element}addEventListeners(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onWindowResizeBind=this.onWindowResize.bind(this),this.onDeviceOrientationBind=this.onDeviceOrientation.bind(this),this.elementListener.addEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.addEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.addEventListener("mousemove",this.onMouseMoveBind),(this.glare||this.fullPageListening)&&window.addEventListener("resize",this.onWindowResizeBind),this.gyroscope&&window.addEventListener("deviceorientation",this.onDeviceOrientationBind)}removeEventListeners(){this.elementListener.removeEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.removeEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.removeEventListener("mousemove",this.onMouseMoveBind),this.gyroscope&&window.removeEventListener("deviceorientation",this.onDeviceOrientationBind),(this.glare||this.fullPageListening)&&window.removeEventListener("resize",this.onWindowResizeBind)}destroy(){clearTimeout(this.transitionTimeout),this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.element.style.willChange="",this.element.style.transition="",this.element.style.transform="",this.resetGlare(),this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null}onDeviceOrientation(e){if(e.gamma===null||e.beta===null)return;this.updateElementPosition(),this.gyroscopeSamples>0&&(this.lastgammazero=this.gammazero,this.lastbetazero=this.betazero,this.gammazero===null?(this.gammazero=e.gamma,this.betazero=e.beta):(this.gammazero=(e.gamma+this.lastgammazero)/2,this.betazero=(e.beta+this.lastbetazero)/2),this.gyroscopeSamples-=1);const n=this.settings.gyroscopeMaxAngleX-this.settings.gyroscopeMinAngleX,a=this.settings.gyroscopeMaxAngleY-this.settings.gyroscopeMinAngleY,i=n/this.width,r=a/this.height,s=e.gamma-(this.settings.gyroscopeMinAngleX+this.gammazero),o=e.beta-(this.settings.gyroscopeMinAngleY+this.betazero),c=s/i,l=o/r;this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.event={clientX:c+this.left,clientY:l+this.top},this.updateCall=requestAnimationFrame(this.updateBind)}onMouseEnter(){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()}onMouseMove(e){this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.event=e,this.updateCall=requestAnimationFrame(this.updateBind)}onMouseLeave(){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)}reset(){this.onMouseEnter(),this.fullPageListening?this.event={clientX:(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.clientWidth,clientY:(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.clientHeight}:this.event={clientX:this.left+(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.width,clientY:this.top+(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.height};let e=this.settings.scale;this.settings.scale=1,this.update(),this.settings.scale=e,this.resetGlare()}resetGlare(){this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")}getValues(){let e,n;this.fullPageListening?(e=this.event.clientX/this.clientWidth,n=this.event.clientY/this.clientHeight):(e=(this.event.clientX-this.left)/this.width,n=(this.event.clientY-this.top)/this.height),e=Math.min(Math.max(e,0),1),n=Math.min(Math.max(n,0),1);let a=(this.reverse*(this.settings.max-e*this.settings.max*2)).toFixed(2),i=(this.reverse*(n*this.settings.max*2-this.settings.max)).toFixed(2),r=Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI);return{tiltX:a,tiltY:i,percentageX:e*100,percentageY:n*100,angle:r}}updateElementPosition(){let e=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=e.left,this.top=e.top}update(){let e=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+(this.settings.axis==="x"?0:e.tiltY)+"deg) rotateY("+(this.settings.axis==="y"?0:e.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform=`rotate(${e.angle}deg) translate(-50%, -50%)`,this.glareElement.style.opacity=`${e.percentageY*this.settings["max-glare"]/100}`),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:e})),this.updateCall=null}prepareGlare(){if(!this.glarePrerender){const e=document.createElement("div");e.classList.add("js-tilt-glare");const n=document.createElement("div");n.classList.add("js-tilt-glare-inner"),e.appendChild(n),this.element.appendChild(e)}this.glareElementWrapper=this.element.querySelector(".js-tilt-glare"),this.glareElement=this.element.querySelector(".js-tilt-glare-inner"),!this.glarePrerender&&(Object.assign(this.glareElementWrapper.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden","pointer-events":"none","border-radius":"inherit"}),Object.assign(this.glareElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}),this.updateGlareSize())}updateGlareSize(){if(this.glare){const e=(this.element.offsetWidth>this.element.offsetHeight?this.element.offsetWidth:this.element.offsetHeight)*2;Object.assign(this.glareElement.style,{width:`${e}px`,height:`${e}px`})}}updateClientSize(){this.clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.clientHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}onWindowResize(){this.updateGlareSize(),this.updateClientSize()}setTransition(){clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition=`opacity ${this.settings.speed}ms ${this.settings.easing}`),this.transitionTimeout=setTimeout(()=>{this.element.style.transition="",this.glare&&(this.glareElement.style.transition="")},this.settings.speed)}extendSettings(e){let n={reverse:!1,max:15,startX:0,startY:0,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1,speed:300,transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,"full-page-listening":!1,"mouse-event-element":null,reset:!0,"reset-to-start":!0,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45,gyroscopeSamples:10},a={};for(var i in n)if(i in e)a[i]=e[i];else if(this.element.hasAttribute("data-tilt-"+i)){let r=this.element.getAttribute("data-tilt-"+i);try{a[i]=JSON.parse(r)}catch{a[i]=r}}else a[i]=n[i];return a}static init(e,n){e instanceof Node&&(e=[e]),e instanceof NodeList&&(e=[].slice.call(e)),e instanceof Array&&e.forEach(a=>{"vanillaTilt"in a||(a.vanillaTilt=new z(a,n))})}}typeof document<"u"&&(window.VanillaTilt=z,z.init(document.querySelectorAll("[data-tilt]")));function pi(){document.querySelectorAll(".card-tilt-js").forEach(e=>{z.init(e,{max:12,perspective:1e3,scale:1.05,speed:500,easing:"cubic-bezier(.03,.98,.52,.99)"})})}function vi(){var t=document.getElementById("nav-check"),e=document.querySelector("label[for='nav-check']");t.addEventListener("change",function(){t.checked?e.innerHTML=' <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="2" d="M3,3 L21,21 M3,21 L21,3"></path></svg> ':e.innerHTML=' <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg> '})}ui();di();pi();gi();hn();vi();
