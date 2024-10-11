import{j as t,b as g,d as w,g as W,e as E,a as D,f as P,r,h as F,u as f,i as S,O as U}from"./index-D0WfsdIb.js";import{P as q,u as G}from"./index-ChoNn5uV.js";import{J as H,u as J}from"./index-DgdveYHB.js";import{S as Q,B as K,a as h,U as X,T as C,C as Y,R as I,D as _,L as Z,i as oo,M as eo}from"./index-B0E16Z61.js";import{u as to}from"./useDispatch-DkP78ten.js";import{B as so}from"./Box-CBeweqIK.js";import{_ as c,a as k}from"./useForkRef-CF61RznM.js";import{G as ao,e as no,a as N,g as O,s as j,f as A,u as B,b as R,d as T,h as io,T as ro,B as lo}from"./ButtonBase-DRrItzvB.js";import"./iconBase-regwSDtz.js";import"./index-UMPKK3DI.js";function co(o){return o==null||Object.keys(o).length===0}function uo(o){const{styles:e,defaultTheme:s={}}=o,a=typeof e=="function"?n=>e(co(n)?s:n):e;return t.jsx(ao,{styles:a})}function po({styles:o,themeId:e,defaultTheme:s={}}){const a=no(s),n=typeof o=="function"?o(e&&a[e]||a):o;return t.jsx(uo,{styles:n})}const $=o=>{let e;return o<1?e=5.11916*o**2:e=4.5*Math.log(o+1)+2,(e/100).toFixed(2)};function vo(o){return O("MuiPaper",o)}N("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const go=["className","component","elevation","square","variant"],mo=o=>{const{square:e,elevation:s,variant:a,classes:n}=o,i={root:["root",a,!e&&"rounded",a==="elevation"&&`elevation${s}`]};return T(i,vo,n)},xo=j("div",{name:"MuiPaper",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:s}=o;return[e.root,e[s.variant],!s.square&&e.rounded,s.variant==="elevation"&&e[`elevation${s.elevation}`]]}})(({theme:o,ownerState:e})=>{var s;return c({backgroundColor:(o.vars||o).palette.background.paper,color:(o.vars||o).palette.text.primary,transition:o.transitions.create("box-shadow")},!e.square&&{borderRadius:o.shape.borderRadius},e.variant==="outlined"&&{border:`1px solid ${(o.vars||o).palette.divider}`},e.variant==="elevation"&&c({boxShadow:(o.vars||o).shadows[e.elevation]},!o.vars&&o.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${A("#fff",$(e.elevation))}, ${A("#fff",$(e.elevation))})`},o.vars&&{backgroundImage:(s=o.vars.overlays)==null?void 0:s[e.elevation]}))}),fo=g.forwardRef(function(e,s){const a=B({props:e,name:"MuiPaper"}),{className:n,component:i="div",elevation:d=1,square:u=!1,variant:l="elevation"}=a,v=k(a,go),p=c({},a,{component:i,elevation:d,square:u,variant:l}),m=mo(p);return t.jsx(xo,c({as:i,ownerState:p,className:R(m.root,n),ref:s},v))});function bo(o){return t.jsx(po,c({},o,{defaultTheme:io,themeId:ro}))}function yo(o){return O("MuiBottomNavigation",o)}N("MuiBottomNavigation",["root"]);const ho=["children","className","component","onChange","showLabels","value"],Co=o=>{const{classes:e}=o;return T({root:["root"]},yo,e)},jo=j("div",{name:"MuiBottomNavigation",slot:"Root",overridesResolver:(o,e)=>e.root})(({theme:o})=>({display:"flex",justifyContent:"center",height:56,backgroundColor:(o.vars||o).palette.background.paper})),Bo=g.forwardRef(function(e,s){const a=B({props:e,name:"MuiBottomNavigation"}),{children:n,className:i,component:d="div",onChange:u,showLabels:l=!1,value:v}=a,p=k(a,ho),m=c({},a,{component:d,showLabels:l}),b=Co(m);return t.jsx(jo,c({as:d,className:R(b.root,i),ref:s,ownerState:m},p,{children:g.Children.map(n,(x,y)=>{if(!g.isValidElement(x))return null;const L=x.props.value===void 0?y:x.props.value;return g.cloneElement(x,{selected:L===v,showLabel:x.props.showLabel!==void 0?x.props.showLabel:l,value:L,onChange:u})})}))});function Mo(o){return O("MuiBottomNavigationAction",o)}const z=N("MuiBottomNavigationAction",["root","iconOnly","selected","label"]),So=["className","icon","label","onChange","onClick","selected","showLabel","value"],ko=o=>{const{classes:e,showLabel:s,selected:a}=o;return T({root:["root",!s&&!a&&"iconOnly",a&&"selected"],label:["label",!s&&!a&&"iconOnly",a&&"selected"]},Mo,e)},No=j(lo,{name:"MuiBottomNavigationAction",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:s}=o;return[e.root,!s.showLabel&&!s.selected&&e.iconOnly]}})(({theme:o,ownerState:e})=>c({transition:o.transitions.create(["color","padding-top"],{duration:o.transitions.duration.short}),padding:"0px 12px",minWidth:80,maxWidth:168,color:(o.vars||o).palette.text.secondary,flexDirection:"column",flex:"1"},!e.showLabel&&!e.selected&&{paddingTop:14},!e.showLabel&&!e.selected&&!e.label&&{paddingTop:0},{[`&.${z.selected}`]:{color:(o.vars||o).palette.primary.main}})),Oo=j("span",{name:"MuiBottomNavigationAction",slot:"Label",overridesResolver:(o,e)=>e.label})(({theme:o,ownerState:e})=>c({fontFamily:o.typography.fontFamily,fontSize:o.typography.pxToRem(12),opacity:1,transition:"font-size 0.2s, opacity 0.2s",transitionDelay:"0.1s"},!e.showLabel&&!e.selected&&{opacity:0,transitionDelay:"0s"},{[`&.${z.selected}`]:{fontSize:o.typography.pxToRem(14)}})),Ro=g.forwardRef(function(e,s){const a=B({props:e,name:"MuiBottomNavigationAction"}),{className:n,icon:i,label:d,onChange:u,onClick:l,value:v}=a,p=k(a,So),m=a,b=ko(m),x=y=>{u&&u(y,v),l&&l(y)};return t.jsxs(No,c({ref:s,className:R(b.root,n),focusRipple:!0,onClick:x,ownerState:m},p,{children:[i,t.jsx(Oo,{className:b.label,ownerState:m,children:d})]}))}),To=(o,e)=>c({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},e&&!o.vars&&{colorScheme:o.palette.mode}),Lo=o=>c({color:(o.vars||o).palette.text.primary},o.typography.body1,{backgroundColor:(o.vars||o).palette.background.default,"@media print":{backgroundColor:(o.vars||o).palette.common.white}}),Ao=(o,e=!1)=>{var s;const a={};e&&o.colorSchemes&&Object.entries(o.colorSchemes).forEach(([d,u])=>{var l;a[o.getColorSchemeSelector(d).replace(/\s*&/,"")]={colorScheme:(l=u.palette)==null?void 0:l.mode}});let n=c({html:To(o,e),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:o.typography.fontWeightBold},body:c({margin:0},Lo(o),{"&::backdrop":{backgroundColor:(o.vars||o).palette.background.default}})},a);const i=(s=o.components)==null||(s=s.MuiCssBaseline)==null?void 0:s.styleOverrides;return i&&(n=[n,i]),n};function $o(o){const e=B({props:o,name:"MuiCssBaseline"}),{children:s,enableColorScheme:a=!1}=e;return t.jsxs(g.Fragment,{children:[t.jsx(bo,{styles:n=>Ao(n,a)}),s]})}const wo=({children:o})=>{const e=w(W);return t.jsx(H,{url:"https://talk-and-travel.online:443/ws/",connectHeaders:{Authorization:`Bearer ${e}`},children:o})},Do=()=>{const{userName:o}=w(E)||{},e=D(),s=to(),a=P(),{handleDeactivateStopmClient:n}=J(),i=a.pathname,d=()=>{e(r.ACCOUNT)},u=()=>{e(r.ROOMS)},l=()=>{e(r.DMS)},v=()=>{s(F()).then(()=>{e(r.MAIN)}).catch(p=>{console.error("Logout failed:",p.message)}),n()};return t.jsx(Q,{children:t.jsxs(K,{children:[t.jsxs(h,{onClick:d,$isActive:i===r.ACCOUNT,children:[t.jsx(X,{}),t.jsx(C,{children:o})]}),t.jsxs(Y,{children:[t.jsxs(h,{onClick:u,$isActive:i===r.ROOMS,children:[t.jsx(I,{}),t.jsx(C,{children:"Rooms"})]}),t.jsxs(h,{onClick:l,$isActive:i===r.DMS,children:[t.jsx(_,{}),t.jsx(C,{children:"DMs"})]})]}),t.jsxs(h,{onClick:v,children:[t.jsx(Z,{}),t.jsx(C,{children:"LogOut"})]})]})})},Po=f.div.withConfig({displayName:"DesktopLayoutStyled",componentId:"sc-1t3hhe6-0"})(["display:grid;grid-template-columns:90px 1fr;background-color:var(--outlet-background-color);@media ","{grid-template-columns:120px 1fr;}"],S.laptop),Uo=()=>t.jsxs(Po,{children:[t.jsx(Do,{}),t.jsx(U,{})]}),Io=f.div.withConfig({displayName:"MobileLayoutStyled",componentId:"sc-13n1m0c-0"})(["display:grid;grid-template-columns:1fr;background-color:var(--outlet-background-color);"]),_o=f(so).withConfig({displayName:"TapBarStyled",componentId:"sc-ucebdg-0"})(["display:",";z-index:1;@media ","{display:none;}"],({$isChatVisible:o})=>o?"none":"block",S.tablet),M=f(Ro).withConfig({displayName:"TapBarStyled__TapBarButton",componentId:"sc-ucebdg-1"})(["flex-direction:row;color:",";svg{stroke:currentColor;}.Mui-selected{color:currentColor;font-weight:",";svg{stroke:currentColor;}}&:hover{color:var(--color-blue-3);svg{stroke:currentColor;}}"],({$isActive:o})=>o?"var(--color-brand-blue)":"var(--color-grey-9)",({$isActive:o})=>o?"700":"400"),zo=f(eo).withConfig({displayName:"TapBarStyled__MoreIcon",componentId:"sc-ucebdg-2"})(["",";"],oo("24px","24px","12px")),V=({isChatVisible:o})=>{const s=P().pathname,a=g.useRef(null),n=D(),d=(p=>{switch(p){case r.DMS:return 0;case r.ROOMS:return 1;case r.ACCOUNT:return 2;default:return 1}})(s),u=()=>{n(r.ACCOUNT)},l=()=>{n(r.ROOMS)},v=()=>{n(r.DMS)};return t.jsxs(_o,{sx:{pb:7},ref:a,$isChatVisible:o,children:[t.jsx($o,{}),t.jsx(fo,{sx:{position:"fixed",bottom:0,left:0,right:0},elevation:3,children:t.jsxs(Bo,{showLabels:!0,value:d,children:[t.jsx(M,{label:"DMs",icon:t.jsx(_,{}),sx:{flexDirection:"row"},onClick:v,$isActive:s===r.DMS}),t.jsx(M,{label:"Rooms",icon:t.jsx(I,{}),sx:{flexDirection:"row"},onClick:l,$isActive:s===r.ROOMS}),t.jsx(M,{label:"More",icon:t.jsx(zo,{}),sx:{flexDirection:"row"},onClick:u,$isActive:s===r.ACCOUNT})]})})]})};V.propTypes={isChatVisible:q.bool};const Vo=()=>{const[o,e]=g.useState(!1);return t.jsxs(Io,{children:[t.jsx(U,{context:{isChatVisible:o,setIsChatVisible:e}}),t.jsx(V,{isChatVisible:o})]})},Yo=()=>{const o=G({query:S.tablet});return t.jsx(wo,{children:o?t.jsx(Uo,{}):t.jsx(Vo,{})})};export{Yo as default};
