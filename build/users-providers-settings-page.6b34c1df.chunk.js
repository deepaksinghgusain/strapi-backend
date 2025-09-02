"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[8750],{35900:ft=>{ft.exports=JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"http://github.com/FortAwesome/Font-Awesome/issues"},"author":{"name":"Dave Gandy","email":"dave@fontawesome.com","web":"http://twitter.com/davegandy"},"contributors":[{"name":"Brian Talbot","web":"http://twitter.com/talbs"},{"name":"Travis Chase","web":"http://twitter.com/supercodepoet"},{"name":"Rob Madole","web":"http://twitter.com/robmadole"},{"name":"Geremia Taglialatela","web":"http://twitter.com/gtagliala"},{"name":"Mike Wilkerson","web":"http://twitter.com/mw77"}],"repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"^0.2.36"},"version":"1.2.36","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.es.js","jsnext:main":"index.es.js","style":"styles.css","license":"MIT","types":"./index.d.ts","scripts":{"postinstall":"node attribution.js"}}')},37118:(ft,ct,g)=>{g.r(ct),g.d(ct,{ProvidersPage:()=>Sn,default:()=>Va});var d=g(58827),z=g(21272),Ae=g(54894),P=g(91356),jn=g(412),En=g.n(jn),Cn=g(39404),Mn=g.n(Cn);/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function ee(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ee=function(t){return typeof t}:ee=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ee(e)}function Ln(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ut(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Nn(e,t,n){return t&&ut(e.prototype,t),n&&ut(e,n),e}function Rn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),r.forEach(function(a){Rn(e,a,n[a])})}return e}function ke(e,t){return Fn(e)||Un(e,t)||Yn()}function Te(e){return zn(e)||Dn(e)||$n()}function zn(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function Fn(e){if(Array.isArray(e))return e}function Dn(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function Un(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o=e[Symbol.iterator](),s;!(r=(s=o.next()).done)&&(n.push(s.value),!(t&&n.length===t));r=!0);}catch(l){a=!0,i=l}finally{try{!r&&o.return!=null&&o.return()}finally{if(a)throw i}}return n}function $n(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function Yn(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var dt=function(){},Pe={},mt={},vt=null,gt={mark:dt,measure:dt};try{typeof window<"u"&&(Pe=window),typeof document<"u"&&(mt=document),typeof MutationObserver<"u"&&(vt=MutationObserver),typeof performance<"u"&&(gt=performance)}catch{}var Bn=Pe.navigator||{},pt=Bn.userAgent,ht=pt===void 0?"":pt,q=Pe,O=mt,bt=vt,oe=gt,Ka=!!q.document,D=!!O.documentElement&&!!O.head&&typeof O.addEventListener=="function"&&typeof O.createElement=="function",yt=~ht.indexOf("MSIE")||~ht.indexOf("Trident/"),U="___FONT_AWESOME___",Oe=16,xt="fa",wt="svg-inline--fa",K="data-fa-i2svg",Se="data-fa-pseudo-element",Wn="data-fa-pseudo-element-pending",Hn="data-prefix",Gn="data-icon",At="fontawesome-i2svg",Xn="async",Vn=["HTML","HEAD","STYLE","SCRIPT"],qn=function(){try{return!0}catch{return!1}}(),kt={fas:"solid",far:"regular",fal:"light",fad:"duotone",fab:"brands",fak:"kit",fa:"solid"},Kn={solid:"fas",regular:"far",light:"fal",duotone:"fad",brands:"fab",kit:"fak"},Tt="fa-layers-text",Qn=/Font Awesome ([5 ]*)(Solid|Regular|Light|Duotone|Brands|Free|Pro|Kit).*/i,Jn={900:"fas",400:"far",normal:"far",300:"fal"},Pt=[1,2,3,4,5,6,7,8,9,10],Zn=Pt.concat([11,12,13,14,15,16,17,18,19,20]),_n=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],X={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},er=["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",X.GROUP,X.SWAP_OPACITY,X.PRIMARY,X.SECONDARY].concat(Pt.map(function(e){return"".concat(e,"x")})).concat(Zn.map(function(e){return"w-".concat(e)})),Ot=q.FontAwesomeConfig||{};function tr(e){var t=O.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function nr(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(O&&typeof O.querySelector=="function"){var rr=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];rr.forEach(function(e){var t=ke(e,2),n=t[0],r=t[1],a=nr(tr(n));a!=null&&(Ot[r]=a)})}var ar={familyPrefix:xt,replacementClass:wt,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Ie=h({},ar,Ot);Ie.autoReplaceSvg||(Ie.observeMutations=!1);var v=h({},Ie);q.FontAwesomeConfig=v;var $=q||{};$[U]||($[U]={}),$[U].styles||($[U].styles={}),$[U].hooks||($[U].hooks={}),$[U].shims||($[U].shims=[]);var N=$[U],St=[],ir=function e(){O.removeEventListener("DOMContentLoaded",e),le=1,St.map(function(t){return t()})},le=!1;D&&(le=(O.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(O.readyState),le||O.addEventListener("DOMContentLoaded",ir));function sr(e){D&&(le?setTimeout(e,0):St.push(e))}var je="pending",It="settled",fe="fulfilled",ce="rejected",or=function(){},jt=typeof g.g<"u"&&typeof g.g.process<"u"&&typeof g.g.process.emit=="function",lr=typeof setImmediate>"u"?setTimeout:setImmediate,te=[],Ee;function fr(){for(var e=0;e<te.length;e++)te[e][0](te[e][1]);te=[],Ee=!1}function ue(e,t){te.push([e,t]),Ee||(Ee=!0,lr(fr,0))}function cr(e,t){function n(a){Ce(t,a)}function r(a){ne(t,a)}try{e(n,r)}catch(a){r(a)}}function Et(e){var t=e.owner,n=t._state,r=t._data,a=e[n],i=e.then;if(typeof a=="function"){n=fe;try{r=a(r)}catch(o){ne(i,o)}}Ct(i,r)||(n===fe&&Ce(i,r),n===ce&&ne(i,r))}function Ct(e,t){var n;try{if(e===t)throw new TypeError("A promises callback cannot return that same promise.");if(t&&(typeof t=="function"||ee(t)==="object")){var r=t.then;if(typeof r=="function")return r.call(t,function(a){n||(n=!0,t===a?Mt(e,a):Ce(e,a))},function(a){n||(n=!0,ne(e,a))}),!0}}catch(a){return n||ne(e,a),!0}return!1}function Ce(e,t){(e===t||!Ct(e,t))&&Mt(e,t)}function Mt(e,t){e._state===je&&(e._state=It,e._data=t,ue(ur,e))}function ne(e,t){e._state===je&&(e._state=It,e._data=t,ue(dr,e))}function Lt(e){e._then=e._then.forEach(Et)}function ur(e){e._state=fe,Lt(e)}function dr(e){e._state=ce,Lt(e),!e._handled&&jt&&g.g.process.emit("unhandledRejection",e._data,e)}function mr(e){g.g.process.emit("rejectionHandled",e)}function M(e){if(typeof e!="function")throw new TypeError("Promise resolver "+e+" is not a function");if(!(this instanceof M))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],cr(e,this)}M.prototype={constructor:M,_state:je,_then:null,_data:void 0,_handled:!1,then:function(t,n){var r={owner:this,then:new this.constructor(or),fulfilled:t,rejected:n};return(n||t)&&!this._handled&&(this._handled=!0,this._state===ce&&jt&&ue(mr,this)),this._state===fe||this._state===ce?ue(Et,r):this._then.push(r),r.then},catch:function(t){return this.then(null,t)}},M.all=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.all().");return new M(function(t,n){var r=[],a=0;function i(l){return a++,function(f){r[l]=f,--a||t(r)}}for(var o=0,s;o<e.length;o++)s=e[o],s&&typeof s.then=="function"?s.then(i(o),n):r[o]=s;a||t(r)})},M.race=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.race().");return new M(function(t,n){for(var r=0,a;r<e.length;r++)a=e[r],a&&typeof a.then=="function"?a.then(t,n):t(a)})},M.resolve=function(e){return e&&ee(e)==="object"&&e.constructor===M?e:new M(function(t){t(e)})},M.reject=function(e){return new M(function(t,n){n(e)})};var R=typeof Promise=="function"?Promise:M,H=Oe,Y={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function vr(e){return~er.indexOf(e)}function Nt(e){if(!(!e||!D)){var t=O.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=O.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return O.head.insertBefore(t,r),e}}var gr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function re(){for(var e=12,t="";e-- >0;)t+=gr[Math.random()*62|0];return t}function Q(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Me(e){return e.classList?Q(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function pr(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!vr(a)?a:null}function Rt(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function hr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Rt(e[n]),'" ')},"").trim()}function de(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n],";")},"")}function Le(e){return e.size!==Y.size||e.x!==Y.x||e.y!==Y.y||e.rotate!==Y.rotate||e.flipX||e.flipY}function zt(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function br(e){var t=e.transform,n=e.width,r=n===void 0?Oe:n,a=e.height,i=a===void 0?Oe:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&yt?l+="translate(".concat(t.x/H-r/2,"em, ").concat(t.y/H-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/H,"em), calc(-50% + ").concat(t.y/H,"em)) "):l+="translate(".concat(t.x/H,"em, ").concat(t.y/H,"em) "),l+="scale(".concat(t.size/H*(t.flipX?-1:1),", ").concat(t.size/H*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Ne={x:0,y:0,width:"100%",height:"100%"};function Ft(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function yr(e){return e.tag==="g"?e.children:[e]}function xr(e){var t=e.children,n=e.attributes,r=e.main,a=e.mask,i=e.maskId,o=e.transform,s=r.width,l=r.icon,f=a.width,u=a.icon,m=zt({transform:o,containerWidth:f,iconWidth:s}),p={tag:"rect",attributes:h({},Ne,{fill:"white"})},y=l.children?{children:l.children.map(Ft)}:{},k={tag:"g",attributes:h({},m.inner),children:[Ft(h({tag:l.tag,attributes:h({},l.attributes,m.path)},y))]},w={tag:"g",attributes:h({},m.outer),children:[k]},b="mask-".concat(i||re()),x="clip-".concat(i||re()),T={tag:"mask",attributes:h({},Ne,{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,w]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:yr(u)},T]};return t.push(E,{tag:"rect",attributes:h({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(b,")")},Ne)}),{children:t,attributes:n}}function wr(e){var t=e.children,n=e.attributes,r=e.main,a=e.transform,i=e.styles,o=de(i);if(o.length>0&&(n.style=o),Le(a)){var s=zt({transform:a,containerWidth:r.width,iconWidth:r.width});t.push({tag:"g",attributes:h({},s.outer),children:[{tag:"g",attributes:h({},s.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:h({},r.icon.attributes,s.path)}]}]})}else t.push(r.icon);return{children:t,attributes:n}}function Ar(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Le(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=de(h({},i,{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function kr(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(v.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:h({},a,{id:o}),children:r}]}]}function Re(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,u=e.titleId,m=e.extra,p=e.watchable,y=p===void 0?!1:p,k=r.found?r:n,w=k.width,b=k.height,x=a==="fak",T=x?"":"fa-w-".concat(Math.ceil(w/b*16)),E=[v.replacementClass,i?"".concat(v.familyPrefix,"-").concat(i):"",T].filter(function(_){return m.classes.indexOf(_)===-1}).filter(function(_){return _!==""||!!_}).concat(m.classes).join(" "),C={children:[],attributes:h({},m.attributes,{"data-prefix":a,"data-icon":i,class:E,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(b)})},B=x&&!~m.classes.indexOf("fa-fw")?{width:"".concat(w/b*16*.0625,"em")}:{};y&&(C.attributes[K]=""),l&&C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(u||re())},children:[l]});var I=h({},C,{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:h({},B,m.styles)}),V=r.found&&n.found?xr(I):wr(I),W=V.children,st=V.attributes;return I.children=W,I.attributes=st,s?kr(I):Ar(I)}function Dt(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=h({},o.attributes,i?{title:i}:{},{class:o.classes.join(" ")});l&&(f[K]="");var u=h({},o.styles);Le(a)&&(u.transform=br({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=de(u);m.length>0&&(f.style=m);var p=[];return p.push({tag:"span",attributes:f,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Tr(e){var t=e.content,n=e.title,r=e.extra,a=h({},r.attributes,n?{title:n}:{},{class:r.classes.join(" ")}),i=de(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ut=function(){},ze=v.measurePerformance&&oe&&oe.mark&&oe.measure?oe:{mark:Ut,measure:Ut},ae='FA "5.15.4"',Pr=function(t){return ze.mark("".concat(ae," ").concat(t," begins")),function(){return $t(t)}},$t=function(t){ze.mark("".concat(ae," ").concat(t," ends")),ze.measure("".concat(ae," ").concat(t),"".concat(ae," ").concat(t," begins"),"".concat(ae," ").concat(t," ends"))},Fe={begin:Pr,end:$t},Or=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},De=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Or(n,a):n,l,f,u;for(r===void 0?(l=1,u=t[i[0]]):(l=0,u=r);l<o;l++)f=i[l],u=s(u,t[f],f,t);return u};function Yt(e){for(var t="",n=0;n<e.length;n++){var r=e.charCodeAt(n).toString(16);t+=("000"+r).slice(-4)}return t}function Bt(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Object.keys(t).reduce(function(o,s){var l=t[s],f=!!l.icon;return f?o[l.iconName]=l.icon:o[s]=l,o},{});typeof N.hooks.addPack=="function"&&!a?N.hooks.addPack(e,i):N.styles[e]=h({},N.styles[e]||{},i),e==="fas"&&Bt("fa",t)}var Wt=N.styles,Sr=N.shims,Ht={},Gt={},Xt={},Vt=function(){var t=function(a){return De(Wt,function(i,o,s){return i[s]=De(o,a,{}),i},{})};Ht=t(function(r,a,i){return a[3]&&(r[a[3]]=i),r}),Gt=t(function(r,a,i){var o=a[2];return r[i]=i,o.forEach(function(s){r[s]=i}),r});var n="far"in Wt;Xt=De(Sr,function(r,a){var i=a[0],o=a[1],s=a[2];return o==="far"&&!n&&(o="fas"),r[i]={prefix:o,iconName:s},r},{})};Vt();function qt(e,t){return(Ht[e]||{})[t]}function Ir(e,t){return(Gt[e]||{})[t]}function jr(e){return Xt[e]||{prefix:null,iconName:null}}var Er=N.styles,Ue=function(){return{prefix:null,iconName:null,rest:[]}};function $e(e){return e.reduce(function(t,n){var r=pr(v.familyPrefix,n);if(Er[n])t.prefix=n;else if(v.autoFetchSvg&&Object.keys(kt).indexOf(n)>-1)t.prefix=n;else if(r){var a=t.prefix==="fa"?jr(r):{};t.iconName=a.iconName||r,t.prefix=a.prefix||t.prefix}else n!==v.replacementClass&&n.indexOf("fa-w-")!==0&&t.rest.push(n);return t},Ue())}function Kt(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}function J(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Rt(e):"<".concat(t," ").concat(hr(r),">").concat(i.map(J).join(""),"</").concat(t,">")}var Cr=function(){};function Qt(e){var t=e.getAttribute?e.getAttribute(K):null;return typeof t=="string"}function Mr(){if(v.autoReplaceSvg===!0)return me.replace;var e=me[v.autoReplaceSvg];return e||me.replace}var me={replace:function(t){var n=t[0],r=t[1],a=r.map(function(o){return J(o)}).join(`
`);if(n.parentNode&&n.outerHTML)n.outerHTML=a+(v.keepOriginalSource&&n.tagName.toLowerCase()!=="svg"?"<!-- ".concat(n.outerHTML," Font Awesome fontawesome.com -->"):"");else if(n.parentNode){var i=document.createElement("span");n.parentNode.replaceChild(i,n),i.outerHTML=a}},nest:function(t){var n=t[0],r=t[1];if(~Me(n).indexOf(v.replacementClass))return me.replace(t);var a=new RegExp("".concat(v.familyPrefix,"-.*"));delete r[0].attributes.style,delete r[0].attributes.id;var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===v.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" ");var o=r.map(function(s){return J(s)}).join(`
`);n.setAttribute("class",i.toNode.join(" ")),n.setAttribute(K,""),n.innerHTML=o}};function Jt(e){e()}function Zt(e,t){var n=typeof t=="function"?t:Cr;if(e.length===0)n();else{var r=Jt;v.mutateApproach===Xn&&(r=q.requestAnimationFrame||Jt),r(function(){var a=Mr(),i=Fe.begin("mutate");e.map(a),i(),n()})}}var Ye=!1;function Lr(){Ye=!0}function _t(){Ye=!1}var ve=null;function Nr(e){if(bt&&v.observeMutations){var t=e.treeCallback,n=e.nodeCallback,r=e.pseudoElementsCallback,a=e.observeMutationsRoot,i=a===void 0?O:a;ve=new bt(function(o){Ye||Q(o).forEach(function(s){if(s.type==="childList"&&s.addedNodes.length>0&&!Qt(s.addedNodes[0])&&(v.searchPseudoElements&&r(s.target),t(s.target)),s.type==="attributes"&&s.target.parentNode&&v.searchPseudoElements&&r(s.target.parentNode),s.type==="attributes"&&Qt(s.target)&&~_n.indexOf(s.attributeName))if(s.attributeName==="class"){var l=$e(Me(s.target)),f=l.prefix,u=l.iconName;f&&s.target.setAttribute("data-prefix",f),u&&s.target.setAttribute("data-icon",u)}else n(s.target)})}),D&&ve.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Rr(){ve&&ve.disconnect()}function zr(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Fr(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=$e(Me(e));return t&&n&&(a.prefix=t,a.iconName=n),a.prefix&&r.length>1?a.iconName=Ir(a.prefix,e.innerText):a.prefix&&r.length===1&&(a.iconName=qt(a.prefix,Yt(e.innerText))),a}var en=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n):n};function Dr(e){return en(e.getAttribute("data-fa-transform"))}function Ur(e){var t=e.getAttribute("data-fa-symbol");return t===null?!1:t===""?!0:t}function $r(e){var t=Q(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return v.autoA11y&&(n?t["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(r||re()):(t["aria-hidden"]="true",t.focusable="false")),t}function Yr(e){var t=e.getAttribute("data-fa-mask");return t?$e(t.split(" ").map(function(n){return n.trim()})):Ue()}function Br(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Y,symbol:!1,mask:null,maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Wr(e){var t=Fr(e),n=t.iconName,r=t.prefix,a=t.rest,i=zr(e),o=Dr(e),s=Ur(e),l=$r(e),f=Yr(e);return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:o,symbol:s,mask:f,maskId:e.getAttribute("data-fa-mask-id"),extra:{classes:a,styles:i,attributes:l}}}function ie(e){this.name="MissingIcon",this.message=e||"Icon unavailable",this.stack=new Error().stack}ie.prototype=Object.create(Error.prototype),ie.prototype.constructor=ie;var ge={fill:"currentColor"},tn={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},Hr={tag:"path",attributes:h({},ge,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},Be=h({},tn,{attributeName:"opacity"}),Gr={tag:"circle",attributes:h({},ge,{cx:"256",cy:"364",r:"28"}),children:[{tag:"animate",attributes:h({},tn,{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:h({},Be,{values:"1;0;1;1;0;1;"})}]},Xr={tag:"path",attributes:h({},ge,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:[{tag:"animate",attributes:h({},Be,{values:"1;0;0;0;0;1;"})}]},Vr={tag:"path",attributes:h({},ge,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:h({},Be,{values:"0;0;1;1;0;0;"})}]},qr={tag:"g",children:[Hr,Gr,Xr,Vr]},We=N.styles;function He(e){var t=e[0],n=e[1],r=e.slice(4),a=ke(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(v.familyPrefix,"-").concat(X.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.familyPrefix,"-").concat(X.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(v.familyPrefix,"-").concat(X.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}function Ge(e,t){return new R(function(n,r){var a={found:!1,width:512,height:512,icon:qr};if(e&&t&&We[t]&&We[t][e]){var i=We[t][e];return n(He(i))}e&&t&&!v.showMissingIcons?r(new ie("Icon is missing for prefix ".concat(t," with icon name ").concat(e))):n(a)})}var Kr=N.styles;function Qr(e,t){var n=t.iconName,r=t.title,a=t.titleId,i=t.prefix,o=t.transform,s=t.symbol,l=t.mask,f=t.maskId,u=t.extra;return new R(function(m,p){R.all([Ge(n,i),Ge(l.iconName,l.prefix)]).then(function(y){var k=ke(y,2),w=k[0],b=k[1];m([e,Re({icons:{main:w,mask:b},prefix:i,iconName:n,transform:o,symbol:s,mask:b,maskId:f,title:r,titleId:a,extra:u,watchable:!0})])})})}function Jr(e,t){var n=t.title,r=t.transform,a=t.extra,i=null,o=null;if(yt){var s=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();i=l.width/s,o=l.height/s}return v.autoA11y&&!n&&(a.attributes["aria-hidden"]="true"),R.resolve([e,Dt({content:e.innerHTML,width:i,height:o,transform:r,title:n,extra:a,watchable:!0})])}function nn(e){var t=Wr(e);return~t.extra.classes.indexOf(Tt)?Jr(e,t):Qr(e,t)}function rn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(D){var n=O.documentElement.classList,r=function(m){return n.add("".concat(At,"-").concat(m))},a=function(m){return n.remove("".concat(At,"-").concat(m))},i=v.autoFetchSvg?Object.keys(kt):Object.keys(Kr),o=[".".concat(Tt,":not([").concat(K,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(K,"])")})).join(", ");if(o.length!==0){var s=[];try{s=Q(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return;var l=Fe.begin("onTree"),f=s.reduce(function(u,m){try{var p=nn(m);p&&u.push(p)}catch(y){qn||y instanceof ie&&console.error(y)}return u},[]);return new R(function(u,m){R.all(f).then(function(p){Zt(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(){l(),m()})})}}}function Zr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;nn(e).then(function(n){n&&Zt([n],t)})}function an(e,t){var n="".concat(Wn).concat(t.replace(":","-"));return new R(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Q(e.children),o=i.filter(function(T){return T.getAttribute(Se)===t})[0],s=q.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Qn),f=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),p=~["Solid","Regular","Light","Duotone","Brands","Kit"].indexOf(l[2])?Kn[l[2].toLowerCase()]:Jn[f],y=Yt(m.length===3?m.substr(1,1):m),k=qt(p,y),w=k;if(k&&(!o||o.getAttribute(Hn)!==p||o.getAttribute(Gn)!==w)){e.setAttribute(n,w),o&&e.removeChild(o);var b=Br(),x=b.extra;x.attributes[Se]=t,Ge(k,p).then(function(T){var E=Re(h({},b,{icons:{main:T,mask:Ue()},prefix:p,iconName:w,extra:x,watchable:!0})),C=O.createElement("svg");t===":before"?e.insertBefore(C,e.firstChild):e.appendChild(C),C.outerHTML=E.map(function(B){return J(B)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function _r(e){return R.all([an(e,":before"),an(e,":after")])}function ea(e){return e.parentNode!==document.head&&!~Vn.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Se)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function sn(e){if(D)return new R(function(t,n){var r=Q(e.querySelectorAll("*")).filter(ea).map(_r),a=Fe.begin("searchPseudoElements");Lr(),R.all(r).then(function(){a(),_t(),t()}).catch(function(){a(),_t(),n()})})}var ta=`svg:not(:root).svg-inline--fa {
  overflow: visible;
}

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.225em;
}
.svg-inline--fa.fa-w-1 {
  width: 0.0625em;
}
.svg-inline--fa.fa-w-2 {
  width: 0.125em;
}
.svg-inline--fa.fa-w-3 {
  width: 0.1875em;
}
.svg-inline--fa.fa-w-4 {
  width: 0.25em;
}
.svg-inline--fa.fa-w-5 {
  width: 0.3125em;
}
.svg-inline--fa.fa-w-6 {
  width: 0.375em;
}
.svg-inline--fa.fa-w-7 {
  width: 0.4375em;
}
.svg-inline--fa.fa-w-8 {
  width: 0.5em;
}
.svg-inline--fa.fa-w-9 {
  width: 0.5625em;
}
.svg-inline--fa.fa-w-10 {
  width: 0.625em;
}
.svg-inline--fa.fa-w-11 {
  width: 0.6875em;
}
.svg-inline--fa.fa-w-12 {
  width: 0.75em;
}
.svg-inline--fa.fa-w-13 {
  width: 0.8125em;
}
.svg-inline--fa.fa-w-14 {
  width: 0.875em;
}
.svg-inline--fa.fa-w-15 {
  width: 0.9375em;
}
.svg-inline--fa.fa-w-16 {
  width: 1em;
}
.svg-inline--fa.fa-w-17 {
  width: 1.0625em;
}
.svg-inline--fa.fa-w-18 {
  width: 1.125em;
}
.svg-inline--fa.fa-w-19 {
  width: 1.1875em;
}
.svg-inline--fa.fa-w-20 {
  width: 1.25em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-border {
  height: 1.5em;
}
.svg-inline--fa.fa-li {
  width: 2em;
}
.svg-inline--fa.fa-fw {
  width: 1.25em;
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
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

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
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
  background-color: #ff253a;
  border-radius: 1em;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #fff;
  height: 1.5em;
  line-height: 1;
  max-width: 5em;
  min-width: 1.5em;
  overflow: hidden;
  padding: 0.25em;
  right: 0;
  text-overflow: ellipsis;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: 0;
  right: 0;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: 0;
  left: 0;
  right: auto;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  right: 0;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: 0;
  right: auto;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-lg {
  font-size: 1.3333333333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}

.fa-xs {
  font-size: 0.75em;
}

.fa-sm {
  font-size: 0.875em;
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

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}

.fa-border {
  border: solid 0.08em #eee;
  border-radius: 0.1em;
  padding: 0.2em 0.25em 0.15em;
}

.fa-pull-left {
  float: left;
}

.fa-pull-right {
  float: right;
}

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left {
  margin-right: 0.3em;
}
.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right {
  margin-left: 0.3em;
}

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
          animation: fa-spin 2s infinite linear;
}

.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
          animation: fa-spin 1s infinite steps(8);
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
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-flip-both {
  -webkit-filter: none;
          filter: none;
}

.fa-stack {
  display: inline-block;
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
  color: #fff;
}

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse {
  color: #fff;
}`;function Xe(){var e=xt,t=wt,n=v.familyPrefix,r=v.replacementClass,a=ta;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var na=function(){function e(){Ln(this,e),this.definitions={}}return Nn(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=h({},n.definitions[s]||{},o[s]),Bt(s,o[s]),Vt()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon;n[s]||(n[s]={}),n[s][l]=f}),n}}]),e}();function se(){v.autoAddCss&&!he&&(Nt(Xe()),he=!0)}function pe(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return J(r)})}}),Object.defineProperty(e,"node",{get:function(){if(D){var r=O.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Ve(e){var t=e.prefix,n=t===void 0?"fa":t,r=e.iconName;if(r)return Kt(on.definitions,n,r)||Kt(N.styles,n,r)}function ra(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ve(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Ve(a||{})),e(r,h({},n,{mask:a}))}}var on=new na,aa=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,Rr()},he=!1,ia={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(D){se();var n=t.node,r=n===void 0?O:n,a=t.callback,i=a===void 0?function(){}:a;return v.searchPseudoElements&&sn(r),rn(r,i)}else return R.reject("Operation requires a DOM of some kind.")},css:Xe,insertCss:function(){he||(Nt(Xe()),he=!0)},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=t.observeMutationsRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,sr(function(){ca({autoReplaceSvgRoot:n}),Nr({treeCallback:rn,nodeCallback:Zr,pseudoElementsCallback:sn,observeMutationsRoot:r})})}},be={transform:function(t){return en(t)}},ln=ra(function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?Y:n,a=t.symbol,i=a===void 0?!1:a,o=t.mask,s=o===void 0?null:o,l=t.maskId,f=l===void 0?null:l,u=t.title,m=u===void 0?null:u,p=t.titleId,y=p===void 0?null:p,k=t.classes,w=k===void 0?[]:k,b=t.attributes,x=b===void 0?{}:b,T=t.styles,E=T===void 0?{}:T;if(e){var C=e.prefix,B=e.iconName,I=e.icon;return pe(h({type:"icon"},e),function(){return se(),v.autoA11y&&(m?x["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(y||re()):(x["aria-hidden"]="true",x.focusable="false")),Re({icons:{main:He(I),mask:s?He(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:B,transform:h({},Y,r),symbol:i,title:m,maskId:f,titleId:y,extra:{attributes:x,styles:E,classes:w}})})}}),sa=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Y:r,i=n.title,o=i===void 0?null:i,s=n.classes,l=s===void 0?[]:s,f=n.attributes,u=f===void 0?{}:f,m=n.styles,p=m===void 0?{}:m;return pe({type:"text",content:t},function(){return se(),Dt({content:t,transform:h({},Y,a),title:o,extra:{attributes:u,styles:p,classes:["".concat(v.familyPrefix,"-layers-text")].concat(Te(l))}})})},oa=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.title,a=r===void 0?null:r,i=n.classes,o=i===void 0?[]:i,s=n.attributes,l=s===void 0?{}:s,f=n.styles,u=f===void 0?{}:f;return pe({type:"counter",content:t},function(){return se(),Tr({content:t.toString(),title:a,extra:{attributes:l,styles:u,classes:["".concat(v.familyPrefix,"-layers-counter")].concat(Te(o))}})})},la=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,a=r===void 0?[]:r;return pe({type:"layer"},function(){se();var i=[];return t(function(o){Array.isArray(o)?o.map(function(s){i=i.concat(s.abstract)}):i=i.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(v.familyPrefix,"-layers")].concat(Te(a)).join(" ")},children:i}]})},fa={noAuto:aa,config:v,dom:ia,library:on,parse:be,findIconDefinition:Ve,icon:ln,text:sa,counter:oa,layer:la,toHtml:J},ca=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?O:n;(Object.keys(N.styles).length>0||v.autoFetchSvg)&&D&&v.autoReplaceSvg&&fa.dom.i2svg({node:r})},ua=g(33544),c=g.n(ua);function qe(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function da(e){if(Array.isArray(e))return e}function ma(e){if(Array.isArray(e))return qe(e)}function G(e,t,n){return(t=wa(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function va(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ga(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,o,s=[],l=!0,f=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(u){f=!0,a=u}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(f)throw a}}return s}}function pa(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ha(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?fn(Object(n),!0).forEach(function(r){G(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fn(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ba(e,t){if(e==null)return{};var n,r,a=ya(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function ya(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function cn(e,t){return da(e)||ga(e,t)||un(e,t)||pa()}function Ke(e){return ma(e)||va(e)||un(e)||ha()}function xa(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function wa(e){var t=xa(e,"string");return typeof t=="symbol"?t:t+""}function ye(e){return ye=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ye(e)}function un(e,t){if(e){if(typeof e=="string")return qe(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?qe(e,t):void 0}}var Aa="7.0.0",Qe;try{var ka=g(35900);Qe=ka.version}catch{Qe=typeof process<"u"&&process.env.FA_VERSION||"7.0.0"}function Ta(e){var t=e.beat,n=e.fade,r=e.beatFade,a=e.bounce,i=e.shake,o=e.flash,s=e.spin,l=e.spinPulse,f=e.spinReverse,u=e.pulse,m=e.fixedWidth,p=e.inverse,y=e.border,k=e.listItem,w=e.flip,b=e.size,x=e.rotation,T=e.pull,E=e.swapOpacity,C=e.rotateBy,B=e.widthAuto,I=Pa(Qe,Aa),V=G(G(G(G(G(G({"fa-beat":t,"fa-fade":n,"fa-beat-fade":r,"fa-bounce":a,"fa-shake":i,"fa-flash":o,"fa-spin":s,"fa-spin-reverse":f,"fa-spin-pulse":l,"fa-pulse":u,"fa-fw":m,"fa-inverse":p,"fa-border":y,"fa-li":k,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},"fa-".concat(b),typeof b<"u"&&b!==null),"fa-rotate-".concat(x),typeof x<"u"&&x!==null&&x!==0),"fa-pull-".concat(T),typeof T<"u"&&T!==null),"fa-swap-opacity",E),"fa-rotate-by",I&&C),"fa-width-auto",I&&B);return Object.keys(V).map(function(W){return V[W]?W:null}).filter(function(W){return W})}function Pa(e,t){for(var n=e.split("-"),r=cn(n,2),a=r[0],i=r[1],o=t.split("-"),s=cn(o,2),l=s[0],f=s[1],u=a.split("."),m=l.split("."),p=0;p<Math.max(u.length,m.length);p++){var y=u[p]||"0",k=m[p]||"0",w=parseInt(y,10),b=parseInt(k,10);if(w!==b)return w>b}for(var x=0;x<Math.max(u.length,m.length);x++){var T=u[x]||"0",E=m[x]||"0";if(T!==E&&T.length!==E.length)return T.length<E.length}return i&&!f?!1:(!i&&f,!0)}function Oa(e){return e=e-0,e===e}function dn(e){return Oa(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Sa=["style"];function Ia(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ja(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=dn(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[Ia(a)]=i:t[a]=i,t},{})}function mn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return mn(e,l)}),a=Object.keys(t.attributes||{}).reduce(function(l,f){var u=t.attributes[f];switch(f){case"class":l.attrs.className=u,delete t.attributes.class;break;case"style":l.attrs.style=ja(u);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?l.attrs[f.toLowerCase()]=u:l.attrs[dn(f)]=u}return l},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=ba(n,Sa);return a.attrs.style=F(F({},a.attrs.style),o),e.apply(void 0,[t.tag,F(F({},a.attrs),s)].concat(Ke(r)))}var vn=!1;try{vn=!0}catch{}function Ea(){if(!vn&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function gn(e){if(e&&ye(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(be.icon)return be.icon(e);if(e===null)return null;if(e&&ye(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Je(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?G({},e,t):{}}var pn={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,rotateBy:!1,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1,widthAuto:!1},Ze=z.forwardRef(function(e,t){var n=F(F({},pn),e),r=n.icon,a=n.mask,i=n.symbol,o=n.className,s=n.title,l=n.titleId,f=n.maskId,u=gn(r),m=Je("classes",[].concat(Ke(Ta(n)),Ke((o||"").split(" ")))),p=Je("transform",typeof n.transform=="string"?be.transform(n.transform):n.transform),y=Je("mask",gn(a)),k=ln(u,F(F(F(F({},m),p),y),{},{symbol:i,title:s,titleId:l,maskId:f}));if(!k)return Ea("Could not find icon",u),null;var w=k.abstract,b={ref:t};return Object.keys(n).forEach(function(x){pn.hasOwnProperty(x)||(b[x]=n[x])}),Ca(w[0],b)});Ze.displayName="FontAwesomeIcon",Ze.propTypes={beat:c().bool,border:c().bool,beatFade:c().bool,bounce:c().bool,className:c().string,fade:c().bool,flash:c().bool,mask:c().oneOfType([c().object,c().array,c().string]),maskId:c().string,fixedWidth:c().bool,inverse:c().bool,flip:c().oneOf([!0,!1,"horizontal","vertical","both"]),icon:c().oneOfType([c().object,c().array,c().string]),listItem:c().bool,pull:c().oneOf(["right","left"]),pulse:c().bool,rotation:c().oneOf([0,90,180,270]),rotateBy:c().bool,shake:c().bool,size:c().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:c().bool,spinPulse:c().bool,spinReverse:c().bool,symbol:c().oneOfType([c().bool,c().string]),title:c().string,titleId:c().string,transform:c().oneOfType([c().string,c().object]),swapOpacity:c().bool,widthAuto:c().bool};var Ca=mn.bind(null,z.createElement),_e=g(98133),Ma=g(72178),La=g(69414),L=g(90265),Z=g(58494),hn=g(52120),Na=g(93802),Ra=g(8895),za=g.n(Ra),et=g(74930),A=g(48656),S=g(56914);const bn={id:(0,S.gT)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},yn={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},tt={id:(0,S.gT)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},nt={id:(0,S.gT)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},xn={id:(0,S.gT)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},wn={id:(0,S.gT)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},xe={id:(0,S.gT)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},An={id:(0,S.gT)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},rt={email:{form:[[{intlLabel:nt,name:"enabled",type:"bool",description:tt,size:6}]],schema:A.Ik().shape({enabled:A.lc().required(P.translatedErrors.required)})},providers:{form:[[{intlLabel:nt,name:"enabled",type:"bool",description:tt,size:6,validations:{required:!0}}],[{intlLabel:xn,name:"key",type:"text",placeholder:xe,size:12,validations:{required:!0}}],[{intlLabel:An,name:"secret",type:"text",placeholder:xe,size:12,validations:{required:!0}}],[{intlLabel:bn,placeholder:yn,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:wn,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:A.Ik().shape({enabled:A.lc().required(P.translatedErrors.required),key:A.Yj().when("enabled",{is:!0,then:A.Yj().required(P.translatedErrors.required),otherwise:A.Yj()}),secret:A.Yj().when("enabled",{is:!0,then:A.Yj().required(P.translatedErrors.required),otherwise:A.Yj()}),callback:A.Yj().when("enabled",{is:!0,then:A.Yj().required(P.translatedErrors.required),otherwise:A.Yj()})})},providersWithSubdomain:{form:[[{intlLabel:nt,name:"enabled",type:"bool",description:tt,size:6,validations:{required:!0}}],[{intlLabel:xn,name:"key",type:"text",placeholder:xe,size:12,validations:{required:!0}}],[{intlLabel:An,name:"secret",type:"text",placeholder:xe,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,S.gT)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,S.gT)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:bn,placeholder:yn,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:wn,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:A.Ik().shape({enabled:A.lc().required(P.translatedErrors.required),key:A.Yj().when("enabled",{is:!0,then:A.Yj().required(P.translatedErrors.required),otherwise:A.Yj()}),secret:A.Yj().when("enabled",{is:!0,then:A.Yj().required(P.translatedErrors.required),otherwise:A.Yj()}),subdomain:A.Yj().when("enabled",{is:!0,then:A.Yj().required(P.translatedErrors.required),otherwise:A.Yj()}),callback:A.Yj().when("enabled",{is:!0,then:A.Yj().required(P.translatedErrors.required),otherwise:A.Yj()})})}},Fa=async e=>{try{const{data:t}=await S.SP.get((0,S.X3)("providers"));return t}catch{throw e({type:"warning",message:{id:"notification.error"}}),new Error("error")}},Da=e=>S.SP.put((0,S.X3)("providers"),e);var Ua=g(50707);const $a=e=>(0,Ua.sortBy)(Object.keys(e).reduce((t,n)=>{const{icon:r,enabled:a,subdomain:i}=e[n],o=r==="envelope"?["fas","envelope"]:["fab",r];return i!==void 0?t.push({name:n,icon:o,enabled:a,subdomain:i}):t.push({name:n,icon:o,enabled:a}),t},[]),"name");var kn=g(37421),Tn=g(93995),Ya=g(70505),Pn=g(14887),On=g(4527),we=g(68586),Ba=g(61535),Wa=g(74473),Ha=g(20628);const at=({description:e,disabled:t,intlLabel:n,error:r,name:a,onChange:i,placeholder:o,providerToEditName:s,type:l,value:f})=>{const{formatMessage:u}=(0,Ae.A)(),m=a==="noName"?`${strapi.backendURL}/api/connect/${s}/callback`:f,p=u({id:n.id,defaultMessage:n.defaultMessage},{provider:s,...n.values}),y=e?u({id:e.id,defaultMessage:e.defaultMessage},{provider:s,...e.values}):"";if(l==="bool")return(0,d.jsx)(Wa.ToggleInput,{"aria-label":a,checked:f,disabled:t,hint:y,label:p,name:a,offLabel:u({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:u({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:b=>{i({target:{name:a,value:b.target.checked}})}});const k=o?u({id:o.id,defaultMessage:o.defaultMessage},{...o.values}):"",w=r?u({id:r,defaultMessage:r}):"";return(0,d.jsx)(Ha.TextInput,{"aria-label":a,disabled:t,error:w,label:p,name:a,onChange:i,placeholder:k,type:l,value:m})};at.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},at.propTypes={description:c().shape({id:c().string.isRequired,defaultMessage:c().string.isRequired,values:c().object}),disabled:c().bool,error:c().string,intlLabel:c().shape({id:c().string.isRequired,defaultMessage:c().string.isRequired,values:c().object}).isRequired,name:c().string.isRequired,onChange:c().func.isRequired,placeholder:c().shape({id:c().string.isRequired,defaultMessage:c().string.isRequired,values:c().object}),providerToEditName:c().string.isRequired,type:c().string.isRequired,value:c().oneOfType([c().bool,c().string])};const Ga=at,it=({headerBreadcrumbs:e,initialData:t,isSubmiting:n,layout:r,isOpen:a,onSubmit:i,onToggle:o,providerToEditName:s})=>{const{formatMessage:l}=(0,Ae.A)();return a?(0,d.jsxs)(we.ModalLayout,{onClose:o,labelledBy:"title",children:[(0,d.jsx)(we.ModalHeader,{children:(0,d.jsx)(Pn.Breadcrumbs,{label:e.join(", "),children:e.map(f=>(0,d.jsx)(Pn.Crumb,{children:f},f))})}),(0,d.jsx)(Ba.Formik,{onSubmit:f=>i(f),initialValues:t,validationSchema:r.schema,validateOnChange:!1,children:({errors:f,handleChange:u,values:m})=>(0,d.jsxs)(P.Form,{children:[(0,d.jsx)(we.ModalBody,{children:(0,d.jsx)(Ya.Stack,{spacing:1,children:(0,d.jsx)(On.Grid,{gap:5,children:r.form.map(p=>p.map(y=>(0,d.jsx)(On.GridItem,{col:y.size,xs:12,children:(0,d.jsx)(Ga,{...y,error:f[y.name],onChange:u,value:m[y.name],providerToEditName:s})},y.name)))})})}),(0,d.jsx)(we.ModalFooter,{startActions:(0,d.jsx)(Tn.Button,{variant:"tertiary",onClick:o,type:"button",children:l({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(Tn.Button,{type:"submit",loading:n,children:l({id:"global.save",defaultMessage:"Save"})})})})]})})]}):null};it.defaultProps={initialData:null,providerToEditName:null},it.propTypes={headerBreadcrumbs:c().arrayOf(c().string).isRequired,initialData:c().object,layout:c().shape({form:c().arrayOf(c().array),schema:c().object}).isRequired,isOpen:c().bool.isRequired,isSubmiting:c().bool.isRequired,onSubmit:c().func.isRequired,onToggle:c().func.isRequired,providerToEditName:c().string};const Xa=it,Sn=()=>{const{formatMessage:e}=(0,Ae.A)();(0,P.useFocusWhenNavigate)();const{notifyStatus:t}=(0,La.useNotifyAT)(),n=(0,et.useQueryClient)(),{trackUsage:r}=(0,P.useTracking)(),a=(0,z.useRef)(r),[i,o]=(0,z.useState)(!1),[s,l]=(0,z.useState)(!1),[f,u]=(0,z.useState)(null),m=(0,P.useNotification)(),{lockApp:p,unlockApp:y}=(0,P.useOverlayBlocker)(),k=(0,z.useMemo)(()=>({update:kn.A.updateProviders}),[]),{isLoading:w,allowedActions:{canUpdate:b}}=(0,P.useRBAC)(k),{isLoading:x,data:T,isFetching:E}=(0,et.useQuery)("get-providers",()=>Fa(m),{onSuccess:()=>{t(e({id:(0,S.gT)("Providers.data.loaded"),defaultMessage:"Providers have been loaded"}))},initialData:{}}),C=x||E,B=(0,et.useMutation)(Da,{onSuccess:async()=>{await n.invalidateQueries("get-providers"),m({type:"info",message:{id:(0,S.gT)("notification.success.submit")}}),a.current("didEditAuthenticationProvider"),l(!1),ot(),y()},onError:()=>{m({type:"warning",message:{id:"notification.error"}}),y(),l(!1)},refetchActive:!1}),I=(0,z.useMemo)(()=>$a(T),[T]),V=I.length,W=(0,z.useMemo)(()=>{if(!f)return!1;const j=I.find(lt=>lt.name===f);return En()(j,"subdomain")},[I,f]),st=e({id:(0,S.gT)("HeaderNav.link.providers"),defaultMessage:"Providers"}),_=(0,z.useMemo)(()=>f==="email"?rt.email:W?rt.providersWithSubdomain:rt.providers,[f,W]),ot=()=>{o(j=>!j)},In=j=>{b&&(u(j.name),ot())},qa=async j=>{l(!0),p(),a.current("willEditAuthenticationProvider");const lt={...T,[f]:j};B.mutate({providers:lt})};return(0,d.jsxs)(_e.Layout,{children:[(0,d.jsx)(P.SettingsPageTitle,{name:st}),(0,d.jsxs)(Ma.Main,{children:[(0,d.jsx)(_e.HeaderLayout,{title:e({id:(0,S.gT)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),C||w?(0,d.jsx)(P.LoadingIndicatorPage,{}):(0,d.jsx)(_e.ContentLayout,{children:(0,d.jsxs)(L.Table,{colCount:4,rowCount:V+1,children:[(0,d.jsx)(L.Thead,{children:(0,d.jsxs)(L.Tr,{children:[(0,d.jsx)(L.Th,{children:(0,d.jsx)(Z.Typography,{variant:"sigma",textColor:"neutral600",children:(0,d.jsx)(hn.VisuallyHidden,{children:e({id:(0,S.gT)("Providers.image"),defaultMessage:"Image"})})})}),(0,d.jsx)(L.Th,{children:(0,d.jsx)(Z.Typography,{variant:"sigma",textColor:"neutral600",children:e({id:"global.name",defaultMessage:"Name"})})}),(0,d.jsx)(L.Th,{children:(0,d.jsx)(Z.Typography,{variant:"sigma",textColor:"neutral600",children:e({id:(0,S.gT)("Providers.status"),defaultMessage:"Status"})})}),(0,d.jsx)(L.Th,{children:(0,d.jsx)(Z.Typography,{variant:"sigma",children:(0,d.jsx)(hn.VisuallyHidden,{children:e({id:"global.settings",defaultMessage:"Settings"})})})})]})}),(0,d.jsx)(L.Tbody,{children:I.map(j=>(0,d.jsxs)(L.Tr,{...(0,P.onRowClick)({fn:()=>In(j),condition:b}),children:[(0,d.jsx)(L.Td,{width:"",children:(0,d.jsx)(Ze,{icon:j.icon})}),(0,d.jsx)(L.Td,{width:"45%",children:(0,d.jsx)(Z.Typography,{fontWeight:"semiBold",textColor:"neutral800",children:j.name})}),(0,d.jsx)(L.Td,{width:"65%",children:(0,d.jsx)(Z.Typography,{textColor:j.enabled?"success600":"danger600","data-testid":`enable-${j.name}`,children:j.enabled?e({id:"global.enabled",defaultMessage:"Enabled"}):e({id:"global.disabled",defaultMessage:"Disabled"})})}),(0,d.jsx)(L.Td,{...P.stopPropagation,children:b&&(0,d.jsx)(Na.IconButton,{onClick:()=>In(j),noBorder:!0,icon:(0,d.jsx)(za(),{}),label:"Edit"})})]},j.name))})]})})]}),(0,d.jsx)(Xa,{initialData:T[f],isOpen:i,isSubmiting:s,layout:_,headerBreadcrumbs:[e({id:(0,S.gT)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),Mn()(f)],onToggle:ot,onSubmit:qa,providerToEditName:f})]})},Va=()=>(0,d.jsx)(P.CheckPagePermissions,{permissions:kn.A.readProviders,children:(0,d.jsx)(Sn,{})})}}]);
