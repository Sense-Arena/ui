import{a as C,c as N}from"./react-spring-web.esm-1363debf.js";import{r as o}from"./index-73a32e48.js";import{r as B}from"./index-30ece529.js";/* empty css                            */import{c as E}from"./vanilla-extract-recipes-createRuntimeFn.esm-d30eb010.js";import{j as e,a as O}from"./jsx-runtime-7c09b6e1.js";import{I as z}from"./IconButton-7f70b8fa.js";import{c as P}from"./clsx-9a51c995.js";import{C as j}from"./CloseIcon-0ea56413.js";import{C as Y}from"./Card-b2bf8833.js";var a={modalContainer:"pmkghl0",modalContent:E({defaultClassName:"pmkghl2",variantClassNames:{size:{s:"pmkghl3",m:"pmkghl4",l:"pmkghl5"}},defaultVariants:{size:"m"},compoundVariants:[]}),modalContentWrapper:"pmkghl1",modalActionContainer:"pmkghl6",modalAction:"pmkghl7",modalActionCloseIcon:"pmkghl8",cardHeader:"pmkghl9"};const i=({children:l,open:t,title:v,action:s,withPadding:_,className:S,cardClassName:k,withCard:x=!0,size:V,handleClose:m,paddingHeader:c=!0,portalNodeId:H="root",dataSAId:I})=>{const[d,u]=o.exports.useState(t),[q,p]=o.exports.useState(0),[A,M]=o.exports.useState(0);o.exports.useEffect(()=>{d?document.body.style.overflow="hidden":document.body.style.removeProperty("overflow")},[d]);const R=o.exports.useCallback(n=>{if(n){let r=0;const g=document.getElementsByTagName("header");c&&g.length&&(r=g[0].getBoundingClientRect().height,M(r));const h=window.innerHeight-r,y=n.getBoundingClientRect().height;h>y?p(Math.round(h/2-y/2)):p(0)}},[l]),b=C({opacity:t?1:0,config:{duration:300},onStart:()=>{t&&u(!0)},onRest:()=>{t||u(!1)}}),w=C({opacity:t?1:0,transform:`translateY(${t?`${q}px`:"0px"})`,config:{duration:300}}),T=n=>{n.target===n.currentTarget&&m()},f=typeof window>"u"?null:document.getElementById(H)||document.body;return!d||!f?null:B.exports.createPortal(e(N.div,{style:b,className:P(a.modalContainer,S),children:e("div",{onClick:T,style:{paddingTop:c?A:0},className:a.modalContentWrapper,"data-sa-id":I,children:e(N.div,{ref:R,style:w,className:a.modalContent({size:V}),children:x?O("div",{className:a.modalActionContainer,children:[e("div",{className:a.modalAction,children:s===void 0?e(z,{onClick:m,children:e(j,{className:a.modalActionCloseIcon})}):s||null}),e(Y,{title:v,withPadding:_,className:k,classNameHeader:a.cardHeader,children:l})]}):l})})}),f)};try{i.displayName="Modal",i.__docgenInfo={description:"",displayName:"Modal",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"ReactNode"}},withPadding:{defaultValue:null,description:"",name:"withPadding",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},cardClassName:{defaultValue:null,description:"",name:"cardClassName",required:!1,type:{name:"string | undefined"}},withCard:{defaultValue:{value:"true"},description:"",name:"withCard",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},handleClose:{defaultValue:null,description:"",name:"handleClose",required:!0,type:{name:"() => void"}},paddingHeader:{defaultValue:{value:"true"},description:"",name:"paddingHeader",required:!1,type:{name:"boolean | undefined"}},portalNodeId:{defaultValue:{value:"root"},description:"",name:"portalNodeId",required:!1,type:{name:"string | undefined"}},dataSAId:{defaultValue:null,description:"",name:"dataSAId",required:!1,type:{name:"string | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/modal/Modal.tsx#Modal"]={docgenInfo:i.__docgenInfo,name:"Modal",path:"src/components/modal/Modal.tsx#Modal"})}catch{}export{i as M};
//# sourceMappingURL=Modal-51a462c9.js.map
