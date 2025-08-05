(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[3884],{7233:(H,Y,p)=>{var s=p(97449);function _(K,U,N,v){return s(K,function(j,I,Z){U(v,j,N(j),Z)}),v}H.exports=_},63884:(H,Y,p)=>{"use strict";p.d(Y,{P:()=>Bs});var s=p(92132),_=p(21272),K=p(57237),U=p(44604),N=p(60888),v=p(50215),j=p(94061),I=p(85963),Z=p(4181),ce=p(90151),ue=p(68074),Ve=p(61485),we=p(99248),He=p(67030),Fe=p(6239),E=p(83997),Ge=p(76079),_e=p(12408),q=p(24093),Je=p(12081),k=p(85829),ye=p(91356),je=p(88761),pe=p(51187),b=p(2600),ie=p(412),ee=p(77965),V=p(48940),R=p(54894),F=p(78803),Xe=p(89032),Ye=p(59080),he=p(94710),Oe=p(35223),S=p(63891),Ze=p(9005),ze=p(44895),Qe=p(74312),qe=p(20415),es=p(37679),ss=p(60043),ts=p(39404);const[ns,os]=(0,Xe.q)("PermissionsDataManager"),z=()=>os("usePermissionsDataManager"),Ee=e=>Array.isArray(e)?e.reduce((t,o)=>(Array.isArray(o)?t.push(...Ee(o)):t.push(o),t),[]):[],J=e=>(0,F.F)(e)?Ee(Object.values(e).map(t=>(0,F.F)(t)?J(t):t)):[],Ae=(e,t,o)=>e.find(n=>n.action===t&&n.subject===o),is=e=>{const t=be(e.plugins),o=be(e.settings),n=Me(e.collectionTypes),r=Me(e.singleTypes);return[...t,...o,...n,...r]},be=e=>Object.values(e).reduce((t,o)=>{const n=Object.values(o).reduce((r,a)=>{const d=Object.entries(a).reduce((i,[l,{conditions:c,properties:{enabled:u}}])=>(u&&i.push({action:l,subject:null,conditions:ge(c),properties:{}}),i),[]);return[...r,...d]},[]);return[...t,...n]},[]),Me=e=>Object.entries(e).reduce((o,n)=>{const[r,a]=n,d=Object.entries(a).reduce((i,l)=>{const[c,u]=l;if(!J(u).some(m=>m))return i;if(!u?.properties?.enabled){const m=Object.entries(u.properties).reduce((C,x)=>{const[h,f]=x;return C.properties[h]=Pe(f),C},{action:c,subject:r,conditions:ge(u.conditions),properties:{}});return[...i,m]}return u.properties.enabled&&i.push({action:c,subject:r,properties:{},conditions:ge(u.conditions)}),i},[]);return[...o,...d]},[]),Pe=(e,t="")=>Object.entries(e).reduce((o,n)=>{const[r,a]=n;return(0,F.F)(a)?[...o,...Pe(a,`${t}${r}.`)]:(a&&!(0,F.F)(a)&&o.push(`${t}${r}`),o)},[]),ge=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),Te=(e,t=[])=>e.reduce((o,n)=>(o[n.id]=t.indexOf(n.id)!==-1,o),{}),ve=(e,t,o=[])=>e.reduce((n,{categoryId:r,childrenForm:a})=>{const d=a.reduce((i,l)=>(i[l.subCategoryId]=l.actions.reduce((c,u)=>{const g=Ae(o,u.action,null);return c[u.action]={properties:{enabled:g!==void 0},conditions:Te(t,g?.conditions??[])},c},{}),i),{});return n[r]=d,n},{}),rs=(e,t,o)=>{const n=({children:r=[]},a,d="")=>r.reduce((i,l)=>{if(l.children)return{...i,[l.value]:n(l,a,`${d}${l.value}.`)};const c=a.indexOf(`${d}${l.value}`)!==-1;return i[l.value]=c,i},{});return e.reduce((r,a)=>{const d=t.properties.find(({value:i})=>i===a);if(d){const i=o?.properties[d.value]??[],l=n(d,i);r.properties[a]=l}return r},{properties:{}})},Se=({subjects:e,actions:t=[]},o,n=[])=>t.reduce((r,a)=>{const d=a.subjects.reduce((l,c)=>{const u=e.find(({uid:g})=>g===c)||null;return u&&(l[c]=u),l},{});if(ee(d))return r;const i=Object.keys(d).reduce((l,c)=>{const{actionId:u,applyToProperties:g}=a,x=d[c].properties.map(({value:M})=>M).every(M=>(g||[]).indexOf(M)===-1),h=Ae(n,u,c),f=Te(o,h?.conditions??[]);if(l[c]||(l[c]={}),ee(g)||x)return l[c][u]={properties:{enabled:h!==void 0},conditions:f},l;const y=rs(g,d[c],h);return l[c][u]={...y,conditions:f},l},{});return Ye(r,i)},{}),De=(e,t)=>Object.entries(he(e,t)).map(([o,n])=>({category:o,categoryId:o.split(" ").join("-"),childrenForm:Object.entries(he(n,"subCategory")).map(([r,a])=>({subCategoryName:r,subCategoryId:r.split(" ").join("-"),actions:a}))})),re=e=>Object.keys(e).reduce((t,o)=>{const n=e[o];if((0,F.F)(n)&&!ie(n,"conditions"))return{...t,[o]:re(n)};if((0,F.F)(n)&&ie(n,"conditions")&&!J(Oe(n,"conditions")).some(a=>a)){const a=Object.keys(n.conditions).reduce((d,i)=>(d[i]=!1,d),{});return{...t,[o]:{...n,conditions:a}}}return t[o]=n,t},{}),se=(e,t,o=!1)=>Object.keys(e).reduce((n,r)=>{const a=e[r];return r==="conditions"&&!o?(n[r]=a,n):(0,F.F)(a)?{...n,[r]:se(a,t,r==="fields")}:(n[r]=t,n)},{}),w=`${120/16}rem`,me=`${200/16}rem`,ae=`${53/16}rem`,fe=e=>e?Object.entries(e).reduce((t,[o,n])=>(o!=="conditions"&&(t[o]=n),t),{}):null,X=e=>{const t=fe(e),o=J(t);if(!o.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const n=o.every(a=>a),r=o.some(a=>a)&&!n;return{hasAllActionsSelected:n,hasSomeActionsSelected:r}},le=e=>e.charAt(0).toUpperCase()+e.slice(1),$e=(0,S.default)(E.s)`
  padding-right: ${({theme:e})=>e.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({isCollapsable:e})=>e&&"cursor: pointer;"}
`,Ce=S.default.div`
  width: ${w};
`,Le=()=>(0,s.jsx)(j.a,{color:"danger700",paddingLeft:1,children:"*"}),Re=({checkboxName:e="",children:t,isActive:o=!1,isCollapsable:n=!1,isFormDisabled:r=!1,label:a,onChange:d,onClick:i,someChecked:l=!1,value:c})=>{const{formatMessage:u}=(0,R.A)();return(0,s.jsxs)(E.s,{alignItems:"center",paddingLeft:6,width:me,shrink:0,children:[(0,s.jsx)(j.a,{paddingRight:2,children:(0,s.jsx)(v.J,{name:e,"aria-label":u({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:a}),disabled:r,onValueChange:g=>d({target:{name:e,value:g}}),indeterminate:l,value:c})}),(0,s.jsxs)($e,{title:a,alignItems:"center",isCollapsable:n,...n&&{onClick:i,"aria-expanded":o,onKeyDown:({key:g})=>(g==="Enter"||g===" ")&&i(),tabIndex:0,role:"button"},children:[(0,s.jsx)(k.o,{fontWeight:o?"bold":void 0,textColor:o?"primary600":"neutral800",ellipsis:!0,children:le(a)}),t]})]})},as=({availableActions:e=[],childrenForm:t=[],isFormDisabled:o,label:n,pathToData:r,propertyName:a})=>{const d=(0,_.useMemo)(()=>e.map(i=>{const l=Array.isArray(i.applyToProperties)&&i.applyToProperties.indexOf(a)!==-1&&i.isDisplayed;return{label:i.label,actionId:i.actionId,isActionRelatedToCurrentProperty:l}}),[e,a]);return(0,s.jsxs)(E.s,{display:"inline-flex",direction:"column",minWidth:0,children:[(0,s.jsx)(fs,{label:n,headers:d}),(0,s.jsx)(j.a,{children:t.map(({children:i,label:l,value:c,required:u},g)=>(0,s.jsx)(ls,{childrenForm:i,label:l,isFormDisabled:o,name:c,required:u,propertyActions:d,pathToData:r,propertyName:a,isOdd:g%2===0},c))})]})},ls=({childrenForm:e=[],label:t,isFormDisabled:o=!1,name:n,required:r=!1,pathToData:a,propertyActions:d,propertyName:i,isOdd:l=!1})=>{const{formatMessage:c}=(0,R.A)(),[u,g]=_.useState(null),{modifiedData:m,onChangeCollectionTypeLeftActionRowCheckbox:C,onChangeParentCheckbox:x,onChangeSimpleCheckbox:h}=z(),f=u===n,y=(0,_.useMemo)(()=>Array.isArray(e)?e:[],[e]),M=y.length>0,D=_.useCallback(()=>{M&&g(P=>P===n?null:n)},[M,n]),O=({target:{value:P}})=>{C(a,i,n,P)},{hasAllActionsSelected:A,hasSomeActionsSelected:T}=(0,_.useMemo)(()=>ds(d,m,a,i,n),[d,m,a,i,n]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(cs,{alignItems:"center",isCollapsable:M,isActive:f,background:l?"neutral100":"neutral0",children:(0,s.jsxs)(E.s,{children:[(0,s.jsxs)(Re,{onChange:O,onClick:D,isCollapsable:M,isFormDisabled:o,label:t,someChecked:T,value:A,isActive:f,children:[r&&(0,s.jsx)(Le,{}),(0,s.jsx)(te,{$isActive:f})]}),(0,s.jsx)(E.s,{children:d.map(({label:P,isActionRelatedToCurrentProperty:L,actionId:B})=>{if(!L)return(0,s.jsx)(Ce,{},P);const $=[...a.split(".."),B,"properties",i,n];if(!M){const W=b(m,$,!1);return(0,s.jsx)(E.s,{width:w,position:"relative",justifyContent:"center",alignItems:"center",children:(0,s.jsx)(v.J,{disabled:o,name:$.join(".."),"aria-label":c({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${n} ${P}`}),onValueChange:Ks=>{h({target:{name:$.join(".."),value:Ks}})},value:W})},B)}const Q=b(m,$,{}),{hasAllActionsSelected:G,hasSomeActionsSelected:oe}=X(Q);return(0,s.jsx)(E.s,{width:w,position:"relative",justifyContent:"center",alignItems:"center",children:(0,s.jsx)(v.J,{disabled:o,name:$.join(".."),onValueChange:W=>{x({target:{name:$.join(".."),value:W}})},"aria-label":c({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${n} ${P}`}),value:G,indeterminate:oe})},P)})})]})}),f&&(0,s.jsx)(Be,{childrenForm:y,isFormDisabled:o,parentName:n,pathToDataFromActionRow:a,propertyName:i,propertyActions:d,recursiveLevel:0})]})},ds=(e,t,o,n,r)=>{const d=e.reduce((i,l)=>(l.isActionRelatedToCurrentProperty&&i.push(l.actionId),i),[]).reduce((i,l)=>{const c=b(t,[...o.split(".."),l,"properties",n,r],!1);return i[l]=c,i},{});return X(d)},cs=(0,S.default)(E.s)`
  height: ${ae};
  flex: 1;

  ${({isCollapsable:e,theme:t})=>e&&`
      ${te} {
        display: block;
        color: ${t.colors.neutral100};
      }
      &:hover {
        ${ne(t)}
      }
  `}
  ${({isActive:e,theme:t})=>e&&ne(t)};
`,te=(0,S.default)(Ze.A)`
  display: none;
  width: ${10/16}rem;
  transform: rotate(${({$isActive:e})=>e?"180":"0"}deg);
  margin-left: ${({theme:e})=>e.spaces[2]};
`,Be=({childrenForm:e=[],isFormDisabled:t,recursiveLevel:o,pathToDataFromActionRow:n,propertyActions:r,parentName:a,propertyName:d})=>{const{formatMessage:i}=(0,R.A)(),{modifiedData:l,onChangeParentCheckbox:c,onChangeSimpleCheckbox:u}=z(),[g,m]=_.useState(null),C=h=>{m(f=>f===h?null:h)},x=(0,_.useMemo)(()=>g?e.find(({value:h})=>h===g):null,[g,e]);return(0,s.jsxs)(j.a,{paddingLeft:"2rem",children:[(0,s.jsx)(hs,{}),e.map(({label:h,value:f,required:y,children:M},D)=>{const O=D+1<e.length,A=Array.isArray(M),T=g===f;return(0,s.jsxs)(us,{isVisible:O,children:[(0,s.jsxs)(E.s,{height:ae,children:[(0,s.jsx)(gs,{children:(0,s.jsx)(ms,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"primary200",children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})})}),(0,s.jsxs)(E.s,{style:{flex:1},children:[(0,s.jsx)(ps,{level:o,isActive:T,isCollapsable:A,children:(0,s.jsxs)($e,{alignItems:"center",isCollapsable:A,...A&&{onClick:()=>C(f),"aria-expanded":T,onKeyDown:({key:P})=>(P==="Enter"||P===" ")&&C(f),tabIndex:0,role:"button"},title:h,children:[(0,s.jsx)(k.o,{ellipsis:!0,children:le(h)}),y&&(0,s.jsx)(Le,{}),(0,s.jsx)(te,{$isActive:T})]})}),(0,s.jsx)(E.s,{style:{flex:1},children:r.map(({actionId:P,label:L,isActionRelatedToCurrentProperty:B})=>{if(!B)return(0,s.jsx)(Ce,{},P);const $=[...n.split(".."),P,"properties",d,...a.split(".."),f],Q=b(l,$,!1);if(!M)return(0,s.jsx)(E.s,{position:"relative",width:w,justifyContent:"center",alignItems:"center",children:(0,s.jsx)(v.J,{disabled:t,name:$.join(".."),"aria-label":i({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${h} ${L}`}),onValueChange:W=>{u({target:{name:$.join(".."),value:W}})},value:Q})},L);const{hasAllActionsSelected:G,hasSomeActionsSelected:oe}=X(Q);return(0,s.jsx)(E.s,{position:"relative",width:w,justifyContent:"center",alignItems:"center",children:(0,s.jsx)(v.J,{disabled:t,name:$.join(".."),"aria-label":i({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${h} ${L}`}),onValueChange:W=>{c({target:{name:$.join(".."),value:W}})},value:G,indeterminate:oe},L)},L)})})]})]}),x&&T&&(0,s.jsx)(j.a,{paddingBottom:2,children:(0,s.jsx)(Be,{isFormDisabled:t,parentName:`${a}..${f}`,pathToDataFromActionRow:n,propertyActions:r,propertyName:d,recursiveLevel:o+1,childrenForm:x.children})})]},f)})]})},us=(0,S.default)(j.a)`
  border-left: ${({isVisible:e,theme:t})=>e?`4px solid ${t.colors.primary200}`:"4px solid transparent"};
`,ps=(0,S.default)(E.s)`
  padding-left: ${({theme:e})=>e.spaces[4]};
  width: ${({level:e})=>145-e*36}px;

  ${({isCollapsable:e,theme:t})=>e&&`
      ${te} {
        display: block;
        color: ${t.colors.neutral100};
      }
      &:hover {
        ${ne(t)}
      }
  `}
  ${({isActive:e,theme:t})=>e&&ne(t)};
`,hs=S.default.div`
  padding-top: ${({theme:e})=>e.spaces[2]};
  margin-top: ${({theme:e})=>e.spaces[2]};
  width: ${4/16}rem;
  background-color: ${({theme:e})=>e.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,gs=(0,S.default)(j.a)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:e})=>e.colors.primary200};
    display: block;
  }
`,ms=S.default.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:e,color:t})=>e.colors[t]};
  }
`,fs=({headers:e=[],label:t})=>{const{formatMessage:o}=(0,R.A)();return(0,s.jsxs)(E.s,{children:[(0,s.jsx)(E.s,{width:me,height:ae,shrink:0,alignItems:"center",paddingLeft:6,children:(0,s.jsx)(k.o,{variant:"sigma",textColor:"neutral500",children:o({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:t})})}),e.map(n=>n.isActionRelatedToCurrentProperty?(0,s.jsx)(E.s,{width:w,shrink:0,justifyContent:"center",children:(0,s.jsx)(k.o,{variant:"sigma",textColor:"neutral500",children:o({id:`Settings.roles.form.permissions.${n.label.toLowerCase()}`,defaultMessage:n.label})})},n.label):(0,s.jsx)(E.s,{width:w,shrink:0},n.label))]})},ne=e=>(0,S.css)`
  ${k.o} {
    color: ${e.colors.primary600};
    font-weight: ${e.fontWeights.bold};
  }
  ${te} {
    display: block;

    path {
      fill: ${e.colors.primary600};
    }
  }
`,Cs=({onClick:e,className:t,hasConditions:o=!1,variant:n="tertiary"})=>{const{formatMessage:r}=(0,R.A)();return(0,s.jsx)(xs,{hasConditions:o,className:t,children:(0,s.jsx)(I.$,{variant:n,startIcon:(0,s.jsx)(qe.A,{}),onClick:e,children:r({id:"global.settings",defaultMessage:"Settings"})})})},xs=(0,S.default)(j.a)`
  ${({hasConditions:e,disabled:t,theme:o})=>e&&`
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: ${20/16}rem;;
      background: ${t?o.colors.neutral100:o.colors.primary600};
    }
  `}
`,de=(0,S.default)(Cs)``,Ie=({actions:e=[],headerBreadCrumbs:t=[],isFormDisabled:o,onClosed:n,onToggle:r})=>{const{formatMessage:a}=(0,R.A)(),{availableConditions:d,modifiedData:i,onChangeConditions:l}=z(),c=_.useMemo(()=>Object.entries(he(d,"category")),[d]),u=e.filter(({isDisplayed:h,hasSomeActionsSelected:f,hasAllActionsSelected:y})=>h&&Boolean(f||y)),[g,m]=_.useState(_s(u,i,c)),C=(h,f)=>{m((0,je.Ay)(y=>{y[h]||(y[h]={}),y[h].default||(y[h].default={}),y[h].default=f}))},x=()=>{const h=Object.entries(g).reduce((f,y)=>{const[M,D]=y,O=Object.values(D).reduce((A,T)=>({...A,...T}),{});return f[M]=O,f},{});l(h),r()};return(0,s.jsxs)(Ve.k,{labelledBy:"condition-modal-breadcrumbs",onClose:n,children:[(0,s.jsx)(we.r,{children:(0,s.jsx)(es.B,{id:"condition-modal-breadcrumbs",label:t.join(", "),children:t.map((h,f,y)=>(0,s.jsx)(ss.m,{isCurrent:f===y.length-1,children:ts(a({id:h,defaultMessage:h}))},h))})}),(0,s.jsxs)(Fe.c,{children:[u.length===0&&(0,s.jsx)(k.o,{children:a({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})}),(0,s.jsx)("ul",{children:u.map(({actionId:h,label:f,pathToConditionsObject:y},M)=>{const D=y.join("..");return(0,s.jsx)(ys,{arrayOfOptionsGroupedByCategory:c,label:f,isFormDisabled:o,isGrey:M%2===0,name:D,onChange:C,value:b(g,D,{})},h)})})]}),(0,s.jsx)(He.j,{startActions:(0,s.jsx)(I.$,{variant:"tertiary",onClick:r,children:a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,s.jsx)(I.$,{onClick:x,children:a({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"})})})]})},_s=(e,t,o)=>e.reduce((n,r)=>{const a=b(t,[...r.pathToConditionsObject,"conditions"],{}),d=o.reduce((i,l)=>{const[c,u]=l,g=u.reduce((m,C)=>(m[C.id]=b(a,C.id,!1),m),{});return i[c]=g,i},{});return n[r.pathToConditionsObject.join("..")]=d,n},{}),ys=({arrayOfOptionsGroupedByCategory:e,isFormDisabled:t=!1,isGrey:o=!1,label:n,name:r,onChange:a,value:d})=>{const{formatMessage:i}=(0,R.A)(),l=c=>{a&&a(r,Es(e,c))};return(0,s.jsxs)(E.s,{as:"li",background:o?"neutral100":"neutral0",paddingBottom:3,paddingTop:3,children:[(0,s.jsxs)(E.s,{paddingLeft:6,style:{width:180},children:[(0,s.jsxs)(k.o,{variant:"sigma",textColor:"neutral600",children:[i({id:"Settings.permissions.conditions.can",defaultMessage:"Can"}),"\xA0"]}),(0,s.jsx)(k.o,{variant:"sigma",title:n,textColor:"primary600",ellipsis:!0,children:i({id:`Settings.roles.form.permissions.${n.toLowerCase()}`,defaultMessage:n})}),(0,s.jsxs)(k.o,{variant:"sigma",textColor:"neutral600",children:["\xA0",i({id:"Settings.permissions.conditions.when",defaultMessage:"When"})]})]}),(0,s.jsx)(j.a,{style:{maxWidth:430,width:"100%"},children:(0,s.jsx)(Ge.B,{id:r,customizeContent:(c=[])=>`${c.length} currently selected`,onChange:l,value:js(d),options:Os(e),disabled:t})})]})},js=e=>Object.values(e).map(t=>Object.entries(t).filter(([,o])=>o).map(([o])=>o)).flat(),Os=e=>e.reduce((t,[o,n])=>(t.push({label:le(o),children:n.map(r=>({label:r.displayName,value:r.id}))}),t),[]),Es=(e,t)=>e.map(([,o])=>o).flat().reduce((o,n)=>({[n.id]:t.includes(n.id),...o}),{}),As=({actions:e=[],isFormDisabled:t,pathToData:o,subjects:n=[]})=>{const[r,a]=_.useState(null),d=i=>()=>{a(r===i?null:i)};return(0,s.jsx)(s.Fragment,{children:n.map(({uid:i,label:l,properties:c},u)=>{const g=r===i,m=e.map(C=>({...C,isDisplayed:Array.isArray(C.subjects)&&C.subjects.indexOf(i)!==-1}));return(0,s.jsxs)(E.s,{direction:"column",display:"inline-flex",minWidth:"100%",borderColor:"primary600",borderWidth:g?1:0,children:[(0,s.jsx)(bs,{availableActions:m,isActive:g,isGrey:u%2===0,isFormDisabled:t,label:l,onClickToggle:d(i),pathToData:[o,i].join("..")}),g&&c.map(({label:C,value:x,children:h})=>(0,s.jsx)(as,{availableActions:m,childrenForm:h,isFormDisabled:t,label:C,pathToData:[o,i].join(".."),propertyName:x},x))]},i)})})},bs=({availableActions:e=[],isActive:t=!1,isGrey:o=!1,isFormDisabled:n=!1,label:r,onClickToggle:a,pathToData:d})=>{const[i,l]=_.useState(!1),{formatMessage:c}=(0,R.A)(),{modifiedData:u,onChangeParentCheckbox:g,onChangeSimpleCheckbox:m}=z(),C=()=>{l(A=>!A)},x=()=>{l(!1)},h=b(u,d.split(".."),{}),f=_.useMemo(()=>Object.keys(h).reduce((A,T)=>(A[T]=Oe(h[T],"conditions"),A),{}),[h]),{hasAllActionsSelected:y,hasSomeActionsSelected:M}=X(f),D=_.useMemo(()=>Ms(e,u,d),[e,u,d]),O=D.some(A=>A.hasConditions);return(0,s.jsxs)(Ps,{isActive:t,children:[(0,s.jsxs)(ke,{height:ae,flex:1,alignItems:"center",background:o?"neutral100":"neutral0",children:[(0,s.jsx)(Re,{isCollapsable:!0,isFormDisabled:n,label:r,checkboxName:d,onChange:g,onClick:a,someChecked:M,value:y,isActive:t,children:(0,s.jsx)(Ke,{paddingLeft:2,children:t?(0,s.jsx)(Qe.A,{}):(0,s.jsx)(ze.A,{})})}),(0,s.jsx)(E.s,{style:{flex:1},children:D.map(({actionId:A,hasSomeActionsSelected:T,isDisplayed:P,...L})=>{if(!P)return(0,s.jsx)(Ce,{},A);const{hasConditions:B,hasAllActionsSelected:$,isParentCheckbox:Q,checkboxName:G,label:oe}=L;return Q?(0,s.jsxs)(We,{justifyContent:"center",alignItems:"center",children:[B&&(0,s.jsx)(j.a,{as:"span",position:"absolute",top:"-6px",left:"37px",width:"6px",height:"6px",borderRadius:"20px",background:"primary600"}),(0,s.jsx)(v.J,{disabled:n,name:G,"aria-label":c({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${oe} ${r}`}),onValueChange:W=>{g({target:{name:G,value:W}})},indeterminate:T,value:$})]},A):(0,s.jsxs)(We,{justifyContent:"center",alignItems:"center",children:[B&&(0,s.jsx)(j.a,{as:"span",position:"absolute",top:"-6px",left:"37px",width:"6px",height:"6px",borderRadius:"20px",background:"primary600"}),(0,s.jsx)(v.J,{disabled:n,indeterminate:B,name:G,onValueChange:W=>{m({target:{name:G,value:W}})},value:$})]},A)})}),i&&(0,s.jsx)(Ie,{headerBreadCrumbs:[r,"Settings.permissions.conditions.conditions"],actions:D,isFormDisabled:n,onClosed:x,onToggle:C})]}),(0,s.jsx)(j.a,{transform:"translateY(10px)",right:"9px",position:"absolute",children:(0,s.jsx)(de,{onClick:C,hasConditions:O})})]})},Ms=(e,t,o)=>e.map(({actionId:n,isDisplayed:r,applyToProperties:a,label:d})=>{if(!r)return{actionId:n,hasSomeActionsSelected:!1,isDisplayed:r};const i=[...o.split(".."),n],l=ee(a)?[...i,"properties","enabled"]:i,c=b(t,[...i,"conditions"],null),u={actionId:n,checkboxName:l.join(".."),hasConditions:J(c).some(x=>x),isDisplayed:r,label:d,pathToConditionsObject:i};if(ee(a)){const x=b(t,l,!1);return{...u,hasAllActionsSelected:x,hasSomeActionsSelected:x,isParentCheckbox:!1}}const g=b(t,l,null),{hasAllActionsSelected:m,hasSomeActionsSelected:C}=X(g);return{...u,hasAllActionsSelected:m,hasSomeActionsSelected:C,isParentCheckbox:!0}}),xe=(e,t)=>`
  ${ke} {
    background-color: ${e.colors.primary100};
    color: ${e.colors.primary600};
    border-radius: ${t?"2px 2px 0 0":"2px"};
  }
  ${Ke} {
    display: flex;
  }
  ${de} {
    display: block;
  }
  &:hover {
    ${ne(e)}
  }

  &:focus-within {
    ${()=>xe(e,t)}
  }
`,ke=(0,S.default)(E.s)`
  border: 1px solid transparent;
`,Ps=S.default.div`
  display: inline-flex;
  min-width: 100%;

  ${de} {
    display: none;
  }
  ${({isActive:e,theme:t})=>e&&xe(t,e)}
  &:hover {
    ${({theme:e,isActive:t})=>xe(e,t)}
  }
`,We=(0,S.default)(E.s)`
  width: ${w};
  position: relative;
`,Ke=(0,S.default)(j.a)`
  display: none;
  svg {
    width: 11px;
  }
  * {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`,Ts=({actions:e=[],isFormDisabled:t,kind:o})=>{const{formatMessage:n}=(0,R.A)(),{modifiedData:r,onChangeCollectionTypeGlobalActionCheckbox:a}=z(),d=e.filter(({subjects:l})=>l&&l.length),i=_.useMemo(()=>{const l=d.map(({actionId:m})=>m),c=r[o],u=l.reduce((m,C)=>(Object.keys(c).forEach(x=>{const h=b(c,[x,C]),f={[x]:fe(h)};m[C]?m[C]={...m[C],...f}:m[C]=f}),m),{});return Object.keys(u).reduce((m,C)=>(m[C]=X(u[C]),m),{})},[r,d,o]);return(0,s.jsx)(j.a,{paddingBottom:4,paddingTop:6,style:{paddingLeft:me},children:(0,s.jsx)(E.s,{gap:0,children:d.map(({label:l,actionId:c})=>(0,s.jsxs)(E.s,{shrink:0,width:w,direction:"column",alignItems:"center",justifyContent:"center",gap:3,children:[(0,s.jsx)(k.o,{variant:"sigma",textColor:"neutral500",children:n({id:`Settings.roles.form.permissions.${l.toLowerCase()}`,defaultMessage:l})}),(0,s.jsx)(v.J,{disabled:t,onValueChange:u=>{a(o,c,u)},name:c,"aria-label":n({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:n({id:`Settings.roles.form.permissions.${l.toLowerCase()}`,defaultMessage:l})}),value:b(i,[c,"hasAllActionsSelected"],!1),indeterminate:b(i,[c,"hasSomeActionsSelected"],!1)})]},c))})})},Ue=({isFormDisabled:e,kind:t,layout:{actions:o,subjects:n}})=>{const r=[...n].sort((a,d)=>a.label.localeCompare(d.label));return(0,s.jsxs)(vs,{background:"neutral0",children:[(0,s.jsx)(Ts,{actions:o,kind:t,isFormDisabled:e}),(0,s.jsx)(As,{actions:o,isFormDisabled:e,pathToData:t,subjects:r})]})},vs=(0,S.default)(j.a)`
  overflow-x: auto;
`,Ne=({layout:e,...t})=>{const[o,n]=_.useState(null),r=a=>{n(a===o?null:a)};return(0,s.jsx)(j.a,{padding:6,background:"neutral0",children:e.map(({category:a,categoryId:d,childrenForm:i},l)=>(0,s.jsx)(Ss,{childrenForm:i,isOpen:o===a,isWhite:l%2===1,name:a,onOpenCategory:r,pathToData:[t.kind,d],...t},a))})},Ss=({childrenForm:e,kind:t,name:o,isOpen:n=!1,isFormDisabled:r=!1,isWhite:a,onOpenCategory:d,pathToData:i})=>{const{formatMessage:l}=(0,R.A)(),c=()=>{d(o)},u=o.split("::").pop()??"";return(0,s.jsxs)(K.n,{expanded:n,onToggle:c,id:`accordion-${o}`,variant:a?"primary":"secondary",children:[(0,s.jsx)(N.P,{title:le(u),description:`${l({id:"Settings.permissions.category",defaultMessage:u},{category:u})} ${t==="plugins"?"plugin":t}`}),(0,s.jsx)(U.u,{children:(0,s.jsx)(j.a,{padding:6,children:e.map(({actions:g,subCategoryName:m,subCategoryId:C})=>(0,s.jsx)(Ds,{actions:g,categoryName:u,isFormDisabled:r,subCategoryName:m,pathToData:[...i,C]},m))})})]})},Ds=({actions:e=[],categoryName:t,isFormDisabled:o,subCategoryName:n,pathToData:r})=>{const[a,d]=_.useState(!1),{modifiedData:i,onChangeParentCheckbox:l,onChangeSimpleCheckbox:c}=z(),{formatMessage:u}=(0,R.A)(),g=b(i,r,{}),m=_.useMemo(()=>Object.keys(g).reduce((O,A)=>(O[A]=fe(g[A]),O),{}),[g]),{hasAllActionsSelected:C,hasSomeActionsSelected:x}=X(m),h=()=>{d(O=>!O)},f=()=>{d(!1)},y=_.useMemo(()=>e.map(O=>{const A=[...r,O.action,"properties","enabled"],T=b(i,A,!1),P=b(i,[...r,O.action,"conditions"],{}),L=J(P).some(B=>B);return{...O,isDisplayed:T,checkboxName:A.join(".."),hasSomeActionsSelected:T,value:T,hasConditions:L,label:O.displayName,actionId:O.action,pathToConditionsObject:[...r,O.action]}}),[e,i,r]),M=b(i,[...r],{}),D=J(Object.entries(M).reduce((O,A)=>{const[T,{conditions:P}]=A;return O[T]=P,O},{})).some(O=>O);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(j.a,{children:[(0,s.jsxs)(E.s,{justifyContent:"space-between",alignItems:"center",children:[(0,s.jsx)(j.a,{paddingRight:4,children:(0,s.jsx)(k.o,{variant:"sigma",textColor:"neutral600",children:n})}),(0,s.jsx)($s,{flex:1}),(0,s.jsx)(j.a,{paddingLeft:4,children:(0,s.jsx)(Z.S,{name:r.join(".."),disabled:o,onValueChange:O=>{l({target:{name:r.join(".."),value:O}})},indeterminate:x,value:C,children:u({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),(0,s.jsxs)(E.s,{paddingTop:6,paddingBottom:6,children:[(0,s.jsx)(ce.x,{gap:2,style:{flex:1},children:y.map(({checkboxName:O,value:A,action:T,displayName:P,hasConditions:L})=>(0,s.jsx)(ue.E,{col:3,children:(0,s.jsx)(Ls,{disabled:o,hasConditions:L,children:(0,s.jsx)(Z.S,{name:O,disabled:o,onValueChange:B=>{c({target:{name:O,value:B}})},value:A,children:P})})},T))}),(0,s.jsx)(de,{hasConditions:D,onClick:h})]})]}),a&&(0,s.jsx)(Ie,{headerBreadCrumbs:[t,n],actions:y,isFormDisabled:o,onClosed:f,onToggle:h})]})},$s=(0,S.default)(j.a)`
  align-self: center;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
`,Ls=S.default.div`
  position: relative;
  word-break: keep-all;
  ${({hasConditions:e,disabled:t,theme:o})=>e&&`
    &:before {
      content: '';
      position: absolute;
      top: ${-4/16}rem;
      left: ${-8/16}rem;
      width: ${6/16}rem;
      height: ${6/16}rem;
      border-radius: ${20/16}rem;
      background: ${t?o.colors.neutral100:o.colors.primary600};
    }
  `}
`,Rs=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}],Bs=_.forwardRef(({layout:e,isFormDisabled:t,permissions:o=[]},n)=>{const[{initialData:r,layouts:a,modifiedData:d},i]=_.useReducer(ks,Is,()=>Ws(e,o)),{formatMessage:l}=(0,R.A)();_.useImperativeHandle(n,()=>({getPermissions(){const x=(0,ye.difference)(r.collectionTypes,d.collectionTypes),h=(0,ye.difference)(r.singleTypes,d.singleTypes),f={...x,...h};let y;return ee(f)?y=!1:y=Object.values(f).some((M={})=>Object.values(M).some(D=>ie(D,"conditions"))),{permissionsToSend:is(d),didUpdateConditions:y}},resetForm(){i({type:"RESET_FORM"})},setFormAfterSubmit(){i({type:"SET_FORM_AFTER_SUBMIT"})}}));const c=(x,h,f,y)=>{i({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:x,propertyName:h,rowName:f,value:y})},u=(x,h,f)=>{i({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:x,actionId:h,value:f})},g=x=>{i({type:"ON_CHANGE_CONDITIONS",conditions:x})},m=_.useCallback(({target:{name:x,value:h}})=>{i({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:x,value:h})},[]),C=_.useCallback(({target:{name:x,value:h}})=>{i({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:x,value:h})},[]);return(0,s.jsx)(ns,{availableConditions:e.conditions,modifiedData:d,onChangeConditions:g,onChangeSimpleCheckbox:m,onChangeParentCheckbox:C,onChangeCollectionTypeLeftActionRowCheckbox:c,onChangeCollectionTypeGlobalActionCheckbox:u,children:(0,s.jsxs)(Je.f,{id:"tabs",label:l({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"}),children:[(0,s.jsx)(_e.t,{children:Rs.map(x=>(0,s.jsx)(_e.o,{children:l({id:x.labelId,defaultMessage:x.defaultMessage})},x.id))}),(0,s.jsxs)(q.T,{style:{position:"relative"},children:[(0,s.jsx)(q.K,{children:(0,s.jsx)(Ue,{layout:a.collectionTypes,kind:"collectionTypes",isFormDisabled:t})}),(0,s.jsx)(q.K,{children:(0,s.jsx)(Ue,{layout:a.singleTypes,kind:"singleTypes",isFormDisabled:t})}),(0,s.jsx)(q.K,{children:(0,s.jsx)(Ne,{layout:a.plugins,kind:"plugins",isFormDisabled:t})}),(0,s.jsx)(q.K,{children:(0,s.jsx)(Ne,{layout:a.settings,kind:"settings",isFormDisabled:t})})]})]})})}),Is={initialData:{},modifiedData:{},layouts:{}},ks=(e,t)=>(0,je.Ay)(e,o=>{switch(t.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:n,actionId:r,value:a}=t,d=["modifiedData",n];Object.keys(b(e,d)).forEach(i=>{const l=b(e,[...d,i,r],void 0);if(l){let c=se(l,a);if(!a&&c.conditions){const u=se(c.conditions,!1);c={...c,conditions:u}}V(o,[...d,i,r],c)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:n,propertyName:r,rowName:a,value:d}=t;let i=pe(e.modifiedData);const l=n.split(".."),c=b(i,l,{});Object.keys(c).forEach(u=>{if(ie(c[u],`properties.${r}`)){const g=b(c,[u,"properties",r,a]),m=[...l,u,"properties",r,a];if(!(0,F.F)(g))V(i,m,d);else{const C=se(g,d);V(i,m,C)}}}),d||(i=re(i)),V(o,"modifiedData",i);break}case"ON_CHANGE_CONDITIONS":{Object.entries(t.conditions).forEach(n=>{const[r,a]=n;V(o,["modifiedData",...r.split(".."),"conditions"],a)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let n=pe(e.modifiedData);V(n,[...t.keys.split("..")],t.value),t.value||(n=re(n)),V(o,"modifiedData",n);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:n,value:r}=t,a=[...n.split("..")];let d=pe(e.modifiedData);const i=b(d,a,{}),l=se(i,r);V(d,a,l),r||(d=re(d)),V(o,["modifiedData"],d);break}case"RESET_FORM":{o.modifiedData=e.initialData;break}case"SET_FORM_AFTER_SUBMIT":{o.initialData=e.modifiedData;break}default:return o}}),Ws=(e,t)=>{const{conditions:o,sections:{collectionTypes:n,singleTypes:r,plugins:a,settings:d}}=e,i={collectionTypes:n,singleTypes:r,plugins:De(a,"plugin"),settings:De(d,"category")},l={collectionTypes:Se(n,o,t),singleTypes:Se(r,o,t),plugins:ve(i.plugins,o,t),settings:ve(i.settings,o,t)};return{initialData:l,modifiedData:l,layouts:i}}},88532:(H,Y,p)=>{var s=p(94445),_=p(7233),K=p(45353),U=p(82261);function N(v,j){return function(I,Z){var ce=U(I)?s:_,ue=j?j():{};return ce(I,v,K(Z,2),ue)}}H.exports=N},94445:H=>{function Y(p,s,_,K){for(var U=-1,N=p==null?0:p.length;++U<N;){var v=p[U];s(K,v,_(v),p)}return K}H.exports=Y},94710:(H,Y,p)=>{var s=p(95292),_=p(88532),K=Object.prototype,U=K.hasOwnProperty,N=_(function(v,j,I){U.call(v,I)?v[I].push(j):s(v,I,[j])});H.exports=N}}]);
