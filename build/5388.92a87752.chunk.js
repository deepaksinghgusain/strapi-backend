"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[5388],{15388:(Ft,z,s)=>{s.r(z),s.d(z,{default:()=>kt});var t=s(92132),m=s(94061),$=s(85963),it=s(58805),Z=s(88353),lt=s(4198),rt=s(55356),x=s(83997),V=s(35513),X=s(26127),w=s(90361),K=s(33363),dt=s(40216),_=s(85829),d=s(91356),ct=s(46270),pt=s(54514),ht=s(68802),gt=s(77701),ut=s(41231),G=s(41909),B=s(5194),mt=s(50612),C=s(2600),_t=s(412),H=s(56336),J=s(39404),R=s(54894),N=s(17703),I=s(21272),r=s(27995),f=s(63891),zt=s(14718),Zt=s(40754),Vt=s(48940),Xt=s(77160),wt=s(21835),Gt=s(17024),Ht=s(51187),Jt=s(48656),Qt=s(94710),Yt=s(14311),qt=s(82437),te=s(89102),ee=s(5409),se=s(35336),ne=s(71547),oe=s(58692),ae=s(71210),ie=s(5790),le=s(35223),re=s(45635);const ft=(0,f.default)(m.a)`
  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};

    tr {
      border-top: 0;
    }
  }

  tr {
    border-top: 1px solid ${({theme:e})=>e.colors.neutral150};

    & td,
    & th {
      padding: ${({theme:e})=>e.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({theme:e})=>e.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({theme:e})=>e.colors.neutral600};
    outline-offset: -4px;
  }
`,Q=f.default.tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 ${(0,d.pxToRem)(20)};
      position: relative;

      &::before {
        content: '';
        width: ${(0,d.pxToRem)(4)};
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 1.625rem;
        border-radius: 4px;

        ${({isFromDynamicZone:e,isChildOfDynamicZone:n,theme:o})=>n?`background-color: ${o.colors.primary200};`:e?`background-color: ${o.colors.primary200};`:`background: ${o.colors.neutral150};`}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`,Y=({customRowComponent:e,component:n,isFromDynamicZone:o=!1,isNestedInDZComponent:a=!1,firstLoopComponentUid:c})=>{const{modifiedData:l}=(0,r.u)(),{schema:{attributes:h}}=C(l,["components",n],{schema:{attributes:[]}});return(0,t.jsx)(Q,{isChildOfDynamicZone:o,className:"component-row",children:(0,t.jsx)("td",{colSpan:12,children:(0,t.jsx)(tt,{customRowComponent:e,items:h,targetUid:n,firstLoopComponentUid:c||n,editTarget:"components",isFromDynamicZone:o,isNestedInDZComponent:a,isSub:!0,secondLoopComponentUid:c?n:null})})})},xt=({isActive:e=!1,icon:n="cube"})=>(0,t.jsx)(x.s,{alignItems:"center",background:e?"primary200":"neutral200",justifyContent:"center",height:8,width:8,borderRadius:"50%",children:(0,t.jsx)(it.I,{as:r.C[n]||r.C.cube,height:5,width:5})}),q=(0,f.default)(m.a)`
  position: absolute;
  display: none;
  top: 5px;
  right: ${(0,d.pxToRem)(8)};

  svg {
    width: ${(0,d.pxToRem)(10)};
    height: ${(0,d.pxToRem)(10)};

    path {
      fill: ${({theme:e})=>e.colors.primary600};
    }
  }
`,Et=(0,f.default)(x.s)`
  width: ${(0,d.pxToRem)(140)};
  height: ${(0,d.pxToRem)(80)};
  position: relative;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.neutral100};
  border-radius: ${({theme:e})=>e.borderRadius};
  max-width: 100%;

  &.active,
  &:focus,
  &:hover {
    border: 1px solid ${({theme:e})=>e.colors.primary200};
    background: ${({theme:e})=>e.colors.primary100};

    ${q} {
      display: block;
    }

    ${_.o} {
      color: ${({theme:e})=>e.colors.primary600};
    }

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:e})=>e.colors.primary200};
      color: ${({theme:e})=>e.colors.primary600};

      svg {
        path {
          fill: ${({theme:e})=>e.colors.primary600};
        }
      }
    }
  }
`,Mt=({component:e,dzName:n,index:o,isActive:a=!1,isInDevelopmentMode:c=!1,onClick:l})=>{const{modifiedData:h,removeComponentFromDynamicZone:j}=(0,r.u)(),{schema:{icon:M,displayName:E}}=C(h,["components",e],{schema:{}}),g=i=>{i.stopPropagation(),j(n,o)};return(0,t.jsxs)(Et,{alignItems:"center",direction:"column",className:a?"active":"",borderRadius:"borderRadius",justifyContent:"center",paddingLeft:4,paddingRight:4,shrink:0,onClick:l,role:"tab",tabIndex:a?0:-1,cursor:"pointer","aria-selected":a,"aria-controls":`dz-${n}-panel-${o}`,id:`dz-${n}-tab-${o}`,children:[(0,t.jsx)(xt,{icon:M,isActive:a}),(0,t.jsx)(m.a,{marginTop:1,maxWidth:"100%",children:(0,t.jsx)(_.o,{variant:"pi",fontWeight:"bold",ellipsis:!0,children:E})}),c&&(0,t.jsx)(q,{as:"button",onClick:g,children:(0,t.jsx)(ht.A,{})})]})},yt=(0,f.default)(B.A)`
  width: ${(0,d.pxToRem)(32)};
  height: ${(0,d.pxToRem)(32)};
  padding: ${(0,d.pxToRem)(9)};
  border-radius: ${(0,d.pxToRem)(64)};
  background: ${({theme:e})=>e.colors.primary100};
  path {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`,Ct=(0,f.default)(m.a)`
  height: ${(0,d.pxToRem)(90)};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`,jt=(0,f.default)(x.s)`
  width: 100%;
  overflow-x: auto;
`,Tt=(0,f.default)(m.a)`
  padding-top: ${(0,d.pxToRem)(90)};
`,Dt=(0,f.default)(x.s)`
  flex-shrink: 0;
  width: ${(0,d.pxToRem)(140)};
  height: ${(0,d.pxToRem)(80)};
  justify-content: center;
  align-items: center;
`,Pt=({customRowComponent:e,components:n=[],addComponent:o,name:a,targetUid:c})=>{const{isInDevelopmentMode:l}=(0,r.u)(),[h,j]=(0,I.useState)(0),{formatMessage:M}=(0,R.A)(),E=i=>{h!==i&&j(i)},g=()=>{o(a)};return(0,t.jsx)(Q,{className:"dynamiczone-row",isFromDynamicZone:!0,children:(0,t.jsxs)("td",{colSpan:12,children:[(0,t.jsx)(Ct,{paddingLeft:8,children:(0,t.jsxs)(jt,{gap:2,children:[l&&(0,t.jsx)("button",{type:"button",onClick:g,children:(0,t.jsxs)(Dt,{direction:"column",alignItems:"stretch",gap:1,children:[(0,t.jsx)(yt,{}),(0,t.jsx)(_.o,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:M({id:(0,r.g)("button.component.add"),defaultMessage:"Add a component"})})]})}),(0,t.jsx)(x.s,{role:"tablist",gap:2,children:n.map((i,p)=>(0,t.jsx)(Mt,{dzName:a||"",index:p,component:i,isActive:h===p,isInDevelopmentMode:l,onClick:()=>E(p)},i))})]})}),(0,t.jsx)(Tt,{children:n.map((i,p)=>{const u={customRowComponent:e,component:i};return(0,t.jsx)(m.a,{id:`dz-${a}-panel-${p}`,role:"tabpanel","aria-labelledby":`dz-${a}-tab-${p}`,style:{display:h===p?"block":"none"},children:(0,t.jsx)("table",{children:(0,t.jsx)("tbody",{children:(0,I.createElement)(Y,{...u,isFromDynamicZone:!0,component:c,key:i})})})},i)})})]})})},Ot=(0,f.default)(m.a)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:e,color:n})=>e.colors[`${n}600`]};
  }
`,vt=(0,f.default)(m.a)`
  border-radius: 0 0 ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.25rem;
`,At=({children:e,icon:n,color:o,...a})=>(0,t.jsx)(vt,{paddingBottom:4,paddingTop:4,as:"button",type:"button",...a,children:(0,t.jsxs)(x.s,{children:[(0,t.jsx)(Ot,{color:o,"aria-hidden":!0,background:`${o}200`,children:n}),(0,t.jsx)(m.a,{paddingLeft:3,children:(0,t.jsx)(_.o,{variant:"pi",fontWeight:"bold",textColor:`${o}600`,children:e})})]})}),tt=({addComponentToDZ:e,customRowComponent:n,editTarget:o,firstLoopComponentUid:a,isFromDynamicZone:c=!1,isMain:l=!1,isNestedInDZComponent:h=!1,isSub:j=!1,items:M=[],secondLoopComponentUid:E,targetUid:g})=>{const{formatMessage:i}=(0,R.A)(),{trackUsage:p}=(0,d.useTracking)(),{isInDevelopmentMode:u,modifiedData:A,isInContentTypeView:D}=(0,r.u)(),{onOpenModalAddField:O}=(0,r.a)(),T=()=>{p("hasClickedCTBAddFieldBanner"),O({forTarget:o,targetUid:g})};return g?M.length===0&&l?(0,t.jsxs)(V.X,{colCount:2,rowCount:2,children:[(0,t.jsx)(X.d,{children:(0,t.jsxs)(w.Tr,{children:[(0,t.jsx)(K.Th,{children:(0,t.jsx)(_.o,{variant:"sigma",textColor:"neutral600",children:i({id:"global.name",defaultMessage:"Name"})})}),(0,t.jsx)(K.Th,{children:(0,t.jsx)(_.o,{variant:"sigma",textColor:"neutral600",children:i({id:"global.type",defaultMessage:"Type"})})})]})}),(0,t.jsx)(d.EmptyBodyTable,{action:(0,t.jsx)($.$,{onClick:T,size:"L",startIcon:(0,t.jsx)(B.A,{}),variant:"secondary",children:i({id:(0,r.g)("table.button.no-fields"),defaultMessage:"Add new field"})}),colSpan:2,content:D?{id:(0,r.g)("table.content.no-fields.collection-type"),defaultMessage:"Add your first field to this Collection-Type"}:{id:(0,r.g)("table.content.no-fields.component"),defaultMessage:"Add your first field to this component"}})]}):(0,t.jsxs)(ft,{children:[(0,t.jsx)(m.a,{paddingLeft:6,paddingRight:l?6:0,...l&&{style:{overflowX:"auto"}},children:(0,t.jsxs)("table",{children:[l&&(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(_.o,{variant:"sigma",textColor:"neutral600",children:i({id:"global.name",defaultMessage:"Name"})})}),(0,t.jsx)("th",{colSpan:2,children:(0,t.jsx)(_.o,{variant:"sigma",textColor:"neutral600",children:i({id:"global.type",defaultMessage:"Type"})})})]})}),(0,t.jsx)("tbody",{children:M.map(P=>{const{type:b}=P,L=n;return(0,t.jsxs)(I.Fragment,{children:[(0,t.jsx)(L,{...P,isNestedInDZComponent:h,targetUid:g,editTarget:o,firstLoopComponentUid:a,isFromDynamicZone:c,secondLoopComponentUid:E}),b==="component"&&(0,t.jsx)(Y,{...P,customRowComponent:n,targetUid:g,isNestedInDZComponent:c,editTarget:o,firstLoopComponentUid:a}),b==="dynamiczone"&&(0,t.jsx)(Pt,{...P,customRowComponent:n,addComponent:e,targetUid:g})]},P.name)})})]})}),l&&u&&(0,t.jsx)(dt.S,{icon:(0,t.jsx)(B.A,{}),onClick:T,children:i({id:(0,r.g)(`form.button.add.field.to.${A.contentType?A.contentType.schema.kind:o||"collectionType"}`),defaultMessage:"Add another field"})}),j&&u&&!c&&(0,t.jsx)(At,{icon:(0,t.jsx)(B.A,{}),onClick:T,color:c?"primary":"neutral",children:i({id:(0,r.g)("form.button.add.field.to.component"),defaultMessage:"Add another field"})})]}):(0,t.jsxs)(V.X,{colCount:2,rowCount:2,children:[(0,t.jsx)(X.d,{children:(0,t.jsxs)(w.Tr,{children:[(0,t.jsx)(K.Th,{children:(0,t.jsx)(_.o,{variant:"sigma",textColor:"neutral600",children:i({id:"global.name",defaultMessage:"Name"})})}),(0,t.jsx)(K.Th,{children:(0,t.jsx)(_.o,{variant:"sigma",textColor:"neutral600",children:i({id:"global.type",defaultMessage:"Type"})})})]})}),(0,t.jsx)(d.EmptyBodyTable,{colSpan:2,content:{id:(0,r.g)("table.content.create-first-content-type"),defaultMessage:"Create your first Collection-Type"}})]})},bt=(0,f.default)(m.a)`
  position: absolute;
  left: -1.125rem;
  top: 0px;

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:e,color:n})=>e.colors[n]};
    display: block;
  }
`,Rt=f.default.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:e,color:n})=>e.colors[n]};
  }
`,$t=e=>(0,t.jsx)(bt,{children:(0,t.jsx)(Rt,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"})})}),Bt=({type:e,customField:n=null,repeatable:o=!1})=>{const{formatMessage:a}=(0,R.A)();let c=e;return["integer","biginteger","float","decimal"].includes(e)?c="number":["string"].includes(e)&&(c="text"),n?(0,t.jsx)(_.o,{children:a({id:(0,r.g)("attribute.customField"),defaultMessage:"Custom field"})}):(0,t.jsxs)(_.o,{children:[a({id:(0,r.g)(`attribute.${c}`),defaultMessage:e}),"\xA0",o&&a({id:(0,r.g)("component.repeatable"),defaultMessage:"(repeatable)"})]})},It=({content:e})=>(0,t.jsx)(t.Fragment,{children:J(e)}),Lt=(0,f.default)(m.a)`
  position: relative;
`,Wt=(0,I.memo)(({configurable:e=!0,customField:n=null,editTarget:o,firstLoopComponentUid:a=null,isFromDynamicZone:c=!1,name:l,onClick:h,relation:j="",repeatable:M=!1,secondLoopComponentUid:E=null,target:g=null,targetUid:i=null,type:p})=>{const{contentTypes:u,isInDevelopmentMode:A,removeAttribute:D}=(0,r.u)(),{formatMessage:O}=(0,R.A)(),T=p==="relation"&&j.includes("morph"),P=["integer","biginteger","float","decimal"].includes(p)?"number":p,b=C(u,[g],{}),L=C(b,["schema","displayName"],""),W=C(b,"plugin"),F=g?"relation":P,U=()=>{T||e!==!1&&h(o,E||a||i,l,p,n)};let v;return E&&a?v=2:a?v=1:v=0,(0,t.jsxs)(Lt,{as:"tr",...(0,d.onRowClick)({fn:U,condition:A&&e&&!T}),children:[(0,t.jsxs)("td",{style:{position:"relative"},children:[v!==0&&(0,t.jsx)($t,{color:c?"primary200":"neutral150"}),(0,t.jsxs)(x.s,{paddingLeft:2,gap:4,children:[(0,t.jsx)(r.A,{type:F,customField:n}),(0,t.jsx)(_.o,{fontWeight:"bold",children:l})]})]}),(0,t.jsx)("td",{children:g?(0,t.jsxs)(_.o,{children:[O({id:(0,r.g)(`modelPage.attribute.${T?"relation-polymorphic":"relationWith"}`),defaultMessage:"Relation with"}),"\xA0",(0,t.jsxs)("span",{style:{fontStyle:"italic"},children:[(0,t.jsx)(It,{content:L}),"\xA0",W&&`(${O({id:(0,r.g)("from"),defaultMessage:"from"})}: ${W})`]})]}):(0,t.jsx)(Bt,{type:p,customField:n,repeatable:M})}),(0,t.jsx)("td",{children:A?(0,t.jsx)(x.s,{justifyContent:"flex-end",...d.stopPropagation,children:e?(0,t.jsxs)(x.s,{gap:1,children:[!T&&(0,t.jsx)(Z.K,{onClick:U,label:`${O({id:"app.utils.edit",defaultMessage:"Edit"})} ${l}`,noBorder:!0,icon:(0,t.jsx)(G.A,{})}),(0,t.jsx)(Z.K,{onClick:S=>{S.stopPropagation(),D(o,l,E||a||"")},label:`${O({id:"global.delete",defaultMessage:"Delete"})} ${l}`,noBorder:!0,icon:(0,t.jsx)(mt.A,{})})]}):(0,t.jsx)(ut.A,{})}):(0,t.jsx)(m.a,{height:(0,d.pxToRem)(32)})})]})}),Kt=e=>{let n;switch(e){case"date":case"datetime":case"time":case"timestamp":n="date";break;case"integer":case"biginteger":case"decimal":case"float":n="number";break;case"string":case"text":n="text";break;case"":n="relation";break;default:n=e}return n},Ut={collectionTypesConfigurations:[{action:"plugin::content-manager.collection-types.configure-view",subject:null}],componentsConfigurations:[{action:"plugin::content-manager.components.configure-layout",subject:null}],singleTypesConfigurations:[{action:"plugin::content-manager.single-types.configure-view",subject:null}]},St=(0,I.memo)(({disabled:e,isTemporary:n=!1,isInContentTypeView:o=!0,contentTypeKind:a="collectionType",targetUid:c=""})=>{const{formatMessage:l}=(0,R.A)(),{push:h}=(0,N.W6)(),{collectionTypesConfigurations:j,componentsConfigurations:M,singleTypesConfigurations:E}=Ut,g=l({id:"content-type-builder.form.button.configure-view",defaultMessage:"Configure the view"});let i=j;const p=()=>(n||h(o?`/content-manager/collection-types/${c}/configurations/edit`:`/content-manager/components/${c}/configurations/edit`),!1);return o&&a==="singleType"&&(i=E),o||(i=M),(0,t.jsx)(d.CheckPermissions,{permissions:i,children:(0,t.jsx)($.$,{startIcon:(0,t.jsx)(gt.A,{}),variant:"tertiary",onClick:p,disabled:n||e,children:g})})}),kt=()=>{const{initialData:e,modifiedData:n,isInDevelopmentMode:o,isInContentTypeView:a,submitData:c}=(0,r.u)(),{formatMessage:l}=(0,R.A)(),{trackUsage:h}=(0,d.useTracking)(),j=(0,N.W5)("/plugins/content-type-builder/:kind/:currentUID"),{onOpenModalAddComponentsToDZ:M,onOpenModalAddField:E,onOpenModalEditField:g,onOpenModalEditSchema:i,onOpenModalEditCustomField:p}=(0,r.a)(),u=a?"contentType":"component",A=[u,"schema","attributes"],D=C(n,[u,"uid"]),O=C(n,[u,"isTemporary"],!1),T=C(n,[u,"schema","kind"],null),P=C(n,A,[]),b=_t(e,[u,"plugin"]),L=!H(n,e),W=a?"contentType":"component",F=y=>{M({dynamicZoneTarget:y,targetUid:D})},U=async(y,et,st,nt,ot)=>{const at=Kt(nt);ot?p({forTarget:y,targetUid:et,attributeName:st,attributeType:at,customFieldUid:ot}):g({forTarget:y,targetUid:et,attributeName:st,attributeType:at,step:nt==="component"?"2":null})};let v=C(n,[u,"schema","displayName"],"");const S=C(n,[u,"schema","kind"],""),k=j?.params.currentUID==="create-content-type";!v&&k&&(v=l({id:(0,r.g)("button.model.create"),defaultMessage:"Create new collection type"}));const Nt=()=>{const y=S||u;y==="collectionType"&&h("willEditNameOfContentType"),y==="singleType"&&h("willEditNameOfSingleType"),i({modalType:u,forTarget:u,targetUid:D,kind:y})};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(N.XG,{message:y=>y.hash==="#back"?!1:l({id:(0,r.g)("prompt.unsaved")}),when:L}),(0,t.jsx)(rt.Q,{id:"title",primaryAction:o&&(0,t.jsxs)(x.s,{gap:2,children:[!k&&(0,t.jsx)($.$,{startIcon:(0,t.jsx)(B.A,{}),variant:"secondary",onClick:()=>{E({forTarget:W,targetUid:D})},children:l({id:(0,r.g)("button.attributes.add.another"),defaultMessage:"Add another field"})}),(0,t.jsx)($.$,{startIcon:(0,t.jsx)(pt.A,{}),onClick:async()=>await c(),type:"submit",disabled:H(n,e),children:l({id:"global.save",defaultMessage:"Save"})})]}),secondaryAction:o&&!b&&!k&&(0,t.jsx)($.$,{startIcon:(0,t.jsx)(G.A,{}),variant:"tertiary",onClick:Nt,children:l({id:"app.utils.edit",defaultMessage:"Edit"})}),title:J(v),subtitle:l({id:(0,r.g)("listView.headerLayout.description"),defaultMessage:"Build the data architecture of your content"}),navigationAction:(0,t.jsx)(d.Link,{startIcon:(0,t.jsx)(ct.A,{}),to:"/plugins/content-type-builder/",children:l({id:"global.back",defaultMessage:"Back"})})}),(0,t.jsx)(lt.s,{children:(0,t.jsxs)(x.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsx)(x.s,{justifyContent:"flex-end",children:(0,t.jsx)(x.s,{gap:2,children:(0,t.jsx)(St,{targetUid:D,isTemporary:O,isInContentTypeView:a,contentTypeKind:T,disabled:k},"link-to-cm-settings-view")})}),(0,t.jsx)(m.a,{background:"neutral0",shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(tt,{items:P,customRowComponent:y=>(0,t.jsx)(Wt,{...y,onClick:U}),addComponentToDZ:F,targetUid:D,editTarget:W,isMain:!0})})]})})]})}}}]);
