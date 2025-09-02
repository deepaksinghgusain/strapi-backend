"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[8910],{8895:(T,t,e)=>{const o=e(92132),n=i=>o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...i,children:o.jsx("path",{fill:"#212134",fillRule:"evenodd",d:"M23.604 3.514c.528.528.528 1.36 0 1.887l-2.622 2.607-4.99-4.99L18.6.396a1.322 1.322 0 0 1 1.887 0l3.118 3.118ZM0 24v-4.99l14.2-14.2 4.99 4.99L4.99 24H0Z",clipRule:"evenodd"})}),r=n;T.exports=r},13555:(T,t,e)=>{Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});const o=e(92132),n=e(21272),r=({children:i,...l})=>{const b=n.Children.toArray(i).map((d,s)=>n.isValidElement(d)?n.cloneElement(d,{"aria-rowindex":s+2}):d);return o.jsx("tbody",{...l,children:b})};t.RawTbody=r},14096:(T,t,e)=>{Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});const o=e(21272),n=o.createContext({rowIndex:0,colIndex:0,setTableValues(){throw new Error("setTableValues must be initialized via the RawTableContext.Provider")}}),r=()=>o.useContext(n);t.RawTableContext=n,t.useTable=r},14887:(T,t,e)=>{Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});const o=e(87749);t.Breadcrumbs=o.Breadcrumbs,t.Crumb=o.Crumb},22265:(T,t,e)=>{Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});const o=e(92132),n=e(21272),r=e(73725),i=({children:l,...b})=>{const d=n.Children.toArray(l).map((s,y)=>n.isValidElement(s)?n.cloneElement(s,{"aria-colindex":y+1,coords:{col:y+1,row:b["aria-rowindex"]}}):s);return o.jsx(r.Box,{as:"tr",...b,children:d})};t.RawTr=i},33333:(T,t,e)=>{Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});const o=e(92132),n=e(21272),r=({children:i,...l})=>{const b=n.Children.toArray(i).map(d=>n.isValidElement(d)?n.cloneElement(d,{"aria-rowindex":1}):d);return o.jsx("thead",{...l,children:b})};t.RawThead=r},36735:(T,t,e)=>{Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});const o=e(92132),n=e(63891),r=e(22265),b=(s=>s&&s.__esModule?s:{default:s})(n).default(r.RawTr)`
  border-bottom: 1px solid ${({theme:s})=>s.colors.neutral150};

  & td,
  & th {
    padding: ${({theme:s})=>s.spaces[4]};
  }

  & td:first-of-type,
  & th:first-of-type {
    padding: 0 ${({theme:s})=>s.spaces[1]};
  }

  // Resetting padding values and fixing a height
  th {
    padding-top: 0;
    padding-bottom: 0;
    height: ${56/16}rem;
  }
`,d=s=>o.jsx(b,{...s});t.Tr=d},38807:(T,t,e)=>{Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});const o=e(92132),n=e(21272),r=e(55985),i=e(14096),l=e(54191),b=({colCount:d,rowCount:s,jumpStep:y=3,initialCol:p=0,initialRow:g=0,...f})=>{const a=n.useRef(null),v=n.useRef(!1),[x,m]=n.useState(g),[j,w]=n.useState(p),R=n.useCallback(({colIndex:c,rowIndex:u})=>{w(c),m(u)},[]);n.useEffect(()=>{v.current&&r.focusFocusable(a.current),v.current||(v.current=!0)},[j,x]);const S=c=>{switch(c.key){case l.KeyboardKeys.RIGHT:{c.preventDefault(),w(u=>u<d-1?u+1:u);break}case l.KeyboardKeys.LEFT:{c.preventDefault(),w(u=>u>0?u-1:u);break}case l.KeyboardKeys.UP:{c.preventDefault(),m(u=>u>0?u-1:u);break}case l.KeyboardKeys.DOWN:{c.preventDefault(),m(u=>u<s-1?u+1:u);break}case l.KeyboardKeys.HOME:{c.preventDefault(),c.ctrlKey&&m(0),w(0);break}case l.KeyboardKeys.END:{c.preventDefault(),c.ctrlKey&&m(s-1),w(d-1);break}case l.KeyboardKeys.PAGE_DOWN:{c.preventDefault(),m(u=>u+y<s?u+y:s-1);break}case l.KeyboardKeys.PAGE_UP:{c.preventDefault(),m(u=>u-y>0?u-y:0);break}}},h=n.useMemo(()=>({rowIndex:x,colIndex:j,setTableValues:R}),[j,x,R]);return o.jsx(i.RawTableContext.Provider,{value:h,children:o.jsx("table",{role:"grid",ref:a,"aria-rowcount":s,"aria-colcount":d,onKeyDown:S,...f})})};t.RawTable=b},44575:(T,t,e)=>{Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});const o=e(92132),n=e(21272),r=e(14096),i=e(11193),l=e(54191),b=e(73725),d=y=>o.jsx(s,{...y,as:"th"}),s=({coords:y={col:0,row:0},as:p="td",...g})=>{const f=n.useRef(null),{rowIndex:a,colIndex:v,setTableValues:x}=r.useTable(),[m,j]=n.useState(!1),w=h=>{const c=i.getFocusableNodes(f.current,!0);if(c.length===0||c.length===1&&i.getFocusableNodesWithKeyboardNav(c).length===0)return;if(c.length>1&&!c.find(N=>N.tagName!=="BUTTON")){h.preventDefault();const N=c.findIndex(K=>K===document.activeElement);if(h.key===l.KeyboardKeys.RIGHT){const K=c[N+1];K&&(h.stopPropagation(),K.focus())}else if(h.key===l.KeyboardKeys.LEFT){const K=c[N-1];K&&(h.stopPropagation(),K.focus())}return}const u=h.key===l.KeyboardKeys.ENTER;if(u&&!m)j(!0);else if((h.key===l.KeyboardKeys.ESCAPE||u)&&m){if(u&&document.activeElement?.tagName==="A")return;j(!1),f.current.focus()}else m&&h.stopPropagation()},R=a===y.row-1&&v===y.col-1;n.useLayoutEffect(()=>{const h=i.getFocusableNodes(f.current,!0);h.length===0||h.length===1&&i.getFocusableNodesWithKeyboardNav(h).length!==0||h.length>1&&Boolean(h.find(c=>c.tagName!=="BUTTON"))?(f.current.setAttribute("tabIndex",!m&&R?"0":"-1"),h.forEach((c,u)=>{c.setAttribute("tabIndex",m?"0":"-1"),m&&u===0&&c.focus()})):h.forEach(c=>{c.setAttribute("tabIndex",R?"0":"-1")})},[m,R]);const S=n.useCallback(()=>{const h=i.getFocusableNodes(f.current,!0);h.length>=1&&(i.getFocusableNodesWithKeyboardNav(h).length!==0||!h.find(c=>c.tagName!=="BUTTON"))&&j(!0),x({rowIndex:y.row-1,colIndex:y.col-1})},[y,x]);return n.useLayoutEffect(()=>{const h=f.current;return i.getFocusableNodes(h,!0).forEach(u=>{u.addEventListener("focus",S)}),()=>{i.getFocusableNodes(h,!0).forEach(N=>{N.removeEventListener("focus",S)})}},[S]),o.jsx(b.Box,{role:"gridcell",as:p,ref:f,onKeyDown:w,...g})};t.RawTd=s,t.RawTh=d},52120:(T,t,e)=>{Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});const o=e(19717);t.VisuallyHidden=o.VisuallyHidden},55985:(T,t)=>{Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});const e=o=>{const n=o.querySelector('[tabindex="0"]');n&&n.focus()};t.focusFocusable=e},58425:(T,t,e)=>{Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});const o=e(92132),n=e(63891),r=e(13555),b=(s=>s&&s.__esModule?s:{default:s})(n).default(r.RawTbody)`
  & tr:last-of-type {
    border-bottom: none;
  }
`,d=({children:s,...y})=>o.jsx(b,{...y,children:s});t.Tbody=d},59957:(T,t,e)=>{Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});const o=e(92132),n=e(63891),r=e(44575),i=e(69909),b=(g=>g&&g.__esModule?g:{default:g})(n),d=b.default(r.RawTd)`
  vertical-align: middle;
  text-align: left;
  color: ${({theme:g})=>g.colors.neutral600};
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`,s=b.default.span`
  svg {
    height: ${4/16}rem;
  }
`,y=({children:g,action:f,...a})=>o.jsx(d,{as:r.RawTh,...a,children:o.jsxs(i.Flex,{children:[g,o.jsx(s,{children:f})]})}),p=({children:g,...f})=>o.jsx(d,{...f,children:g});t.Td=p,t.Th=y},84198:(T,t,e)=>{Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});const o=e(92132),n=e(63891),r=e(73725),i=e(31781),l=e(69909),b=e(48941),s=(f=>f&&f.__esModule?f:{default:f})(n),y=s.default(r.Box)`
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
    fill: ${({theme:f})=>f.colors.primary600};
  }
`,p=s.default(r.Box)`
  border-radius: 0 0 ${({theme:f})=>f.borderRadius} ${({theme:f})=>f.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,g=({children:f,icon:a,...v})=>o.jsxs("div",{children:[o.jsx(i.Divider,{}),o.jsx(p,{as:"button",background:"primary100",padding:5,...v,children:o.jsxs(l.Flex,{children:[o.jsx(y,{"aria-hidden":!0,background:"primary200",children:a}),o.jsx(r.Box,{paddingLeft:3,children:o.jsx(b.Typography,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:f})})]})})]});t.TFooter=g},87749:(T,t,e)=>{Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});const o=e(92132),n=e(94790),r=e(63891),i=e(19717),l=e(69909),b=e(73725),d=e(48941),p=(a=>a&&a.__esModule?a:{default:a})(r).default(l.Flex)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:a})=>a.colors.neutral500};
    }
  }
  :last-of-type ${b.Box} {
    display: none;
  }
  :last-of-type ${d.Typography} {
    color: ${({theme:a})=>a.colors.neutral800};
    font-weight: ${({theme:a})=>a.fontWeights.bold};
  }
`,g=({children:a})=>o.jsxs(p,{inline:!0,as:"li",children:[o.jsx(d.Typography,{variant:"pi",textColor:"neutral600",children:a}),o.jsx(b.Box,{"aria-hidden":!0,paddingLeft:3,paddingRight:3,children:o.jsx(n.ChevronRight,{})})]});g.displayName="Crumb";const f=({children:a,label:v,...x})=>o.jsxs(l.Flex,{...x,children:[o.jsx(i.VisuallyHidden,{children:v}),o.jsx("ol",{"aria-hidden":!0,children:a})]});f.displayName="Breadcrumbs",t.Breadcrumbs=f,t.Crumb=g},90265:(T,t,e)=>{Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});const o=e(90281),n=e(58425),r=e(91387),i=e(36735),l=e(59957),b=e(84198);t.Table=o.Table,t.Tbody=n.Tbody,t.Thead=r.Thead,t.Tr=i.Tr,t.Td=l.Td,t.Th=l.Th,t.TFooter=b.TFooter},90281:(T,t,e)=>{Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});const o=e(92132),n=e(21272),r=e(63891),i=e(38807),l=e(73725),d=(a=>a&&a.__esModule?a:{default:a})(r),s=d.default(l.Box)`
  overflow: hidden;
  border: 1px solid ${({theme:a})=>a.colors.neutral150};
`,y=d.default(i.RawTable)`
  width: 100%;
  white-space: nowrap;
`,p=d.default(l.Box)`
  &:before {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:a})=>a==="both"||a==="left"?"''":void 0};
    box-shadow: ${({theme:a})=>a.shadows.tableShadow};
    width: ${({theme:a})=>a.spaces[2]};
    left: 0;
  }

  &:after {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:a})=>a==="both"||a==="right"?"''":void 0};
    box-shadow: ${({theme:a})=>a.shadows.tableShadow};
    width: ${({theme:a})=>a.spaces[2]};
    right: 0;
    top: 0;
  }
`,g=d.default(l.Box)`
  overflow-x: auto;
`,f=({footer:a,...v})=>{const x=n.useRef(null),[m,j]=n.useState(),w=R=>{const S=R.target.scrollWidth-R.target.clientWidth;if(R.target.scrollLeft===0){j("right");return}if(R.target.scrollLeft===S){j("left");return}R.target.scrollLeft>0&&j("both")};return n.useEffect(()=>{x.current.scrollWidth>x.current.clientWidth&&j("right")},[]),o.jsxs(s,{shadow:"tableShadow",hasRadius:!0,background:"neutral0",children:[o.jsx(p,{overflowing:m,position:"relative",children:o.jsx(g,{ref:x,onScroll:w,paddingLeft:6,paddingRight:6,children:o.jsx(y,{...v})})}),a]})};t.Table=f},91387:(T,t,e)=>{Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});const o=e(92132),n=e(63891),r=e(33333),b=(s=>s&&s.__esModule?s:{default:s})(n).default(r.RawThead)`
  border-bottom: 1px solid ${({theme:s})=>s.colors.neutral150};
`,d=({children:s,...y})=>o.jsx(b,{...y,children:s});t.Thead=d}}]);
