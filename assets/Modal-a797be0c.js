import{r as l,R as e}from"./index-8db94870.js";import{J as h,i as C}from"./index-df04aa12.js";import{r as T}from"./index-8ce4a492.js";/* empty css                            */import{c as z}from"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import{I as P}from"./IconButton-5329e6b8.js";import{c as D}from"./clsx-9a51c995.js";import{C as W}from"./CloseIcon-0550241e.js";import{C as $}from"./Card-80d56879.js";var t={modalContainer:"pmkghl0",modalContent:z({defaultClassName:"pmkghl2",variantClassNames:{size:{s:"pmkghl3",m:"pmkghl4",l:"pmkghl5"}},defaultVariants:{size:"m"},compoundVariants:[]}),modalContentWrapper:"pmkghl1",modalActionContainer:"pmkghl6",modalAction:"pmkghl7",modalActionCloseIcon:"pmkghl8",cardHeader:"pmkghl9"};const v=({children:o,open:a,title:N,action:d,withPadding:V,withDivider:k,className:q,cardClassName:E,withCard:H=!0,size:w,handleClose:s,paddingHeader:m=!0,portalNodeId:b="root",dataSAId:I})=>{const[r,c]=l.useState(a),[_,u]=l.useState(0),[R,A]=l.useState(0);l.useEffect(()=>{r?document.body.style.overflow="hidden":document.body.style.removeProperty("overflow")},[r]);const S=l.useCallback(n=>{if(n){let i=0;const f=document.getElementsByTagName("header");m&&f.length&&(i=f[0].getBoundingClientRect().height,A(i));const g=window.innerHeight-i,y=n.getBoundingClientRect().height;g>y?u(Math.round(g/2-y/2)):u(0)}},[o]),x=h({opacity:a?1:0,config:{duration:300},onStart:()=>{a&&c(!0)},onRest:()=>{a||c(!1)}}),B=h({opacity:a?1:0,transform:`translateY(${a?`${_}px`:"0px"})`,config:{duration:300}}),M=n=>{n.target===n.currentTarget&&s()},p=typeof window>"u"?null:document.getElementById(b)||document.body;return!r||!p?null:T.createPortal(e.createElement(C.div,{style:x,className:D(t.modalContainer,q)},e.createElement("div",{onClick:M,style:{paddingTop:m?R:0},className:t.modalContentWrapper,"data-sa-id":I},e.createElement(C.div,{ref:S,style:B,className:t.modalContent({size:w})},H?e.createElement("div",{className:t.modalActionContainer},e.createElement("div",{className:t.modalAction},d===void 0?e.createElement(P,{onClick:s},e.createElement(W,{className:t.modalActionCloseIcon})):d||null),e.createElement($,{title:N,withPadding:V,withDivider:k,className:E,classNameHeader:t.cardHeader},o)):o))),p)};try{v.displayName="Modal",v.__docgenInfo={description:"",displayName:"Modal",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"ReactNode"}},withPadding:{defaultValue:null,description:"",name:"withPadding",required:!1,type:{name:"boolean"}},withDivider:{defaultValue:null,description:"",name:"withDivider",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},cardClassName:{defaultValue:null,description:"",name:"cardClassName",required:!1,type:{name:"string"}},withCard:{defaultValue:{value:"true"},description:"",name:"withCard",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},handleClose:{defaultValue:null,description:"",name:"handleClose",required:!0,type:{name:"() => void"}},paddingHeader:{defaultValue:{value:"true"},description:"",name:"paddingHeader",required:!1,type:{name:"boolean"}},portalNodeId:{defaultValue:{value:"root"},description:"",name:"portalNodeId",required:!1,type:{name:"string"}},dataSAId:{defaultValue:null,description:"",name:"dataSAId",required:!1,type:{name:"string"}}}}}catch{}export{v as M};
//# sourceMappingURL=Modal-a797be0c.js.map
