/* empty css                             */import{c as A}from"./vanilla-extract-recipes-createRuntimeFn.esm.36bbe845.js";import{H as R}from"./Paragraph.ba27ec6d.js";import{c as x}from"./clsx.3b79bc83.js";import{r as V,j as a,a as g,F as D}from"./jsx-runtime.cb6849a5.js";import{g as I,a as y,s as C,_ as o,b as L,u as T,c as W,d as $,e as B}from"./styled.569f305d.js";var c={section:"tl31ld0",paddingY:"tl31ld1",paddingX:"tl31ld2",sectionContent:A({defaultClassName:"",variantClassNames:{withPadding:{true:"tl31ld2 tl31ld1"}},defaultVariants:{},compoundVariants:[]}),header:"tl31ld4 tl31ld2",action:"tl31ld5"};function O(t){return I("MuiDivider",t)}y("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const S=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],q=t=>{const{absolute:e,children:i,classes:n,flexItem:s,light:l,orientation:r,textAlign:d,variant:p}=t;return B({root:["root",e&&"absolute",p,l&&"light",r==="vertical"&&"vertical",s&&"flexItem",i&&"withChildren",i&&r==="vertical"&&"withChildrenVertical",d==="right"&&r!=="vertical"&&"textAlignRight",d==="left"&&r!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",r==="vertical"&&"wrapperVertical"]},O,n)},M=C("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:i}=t;return[e.root,i.absolute&&e.absolute,e[i.variant],i.light&&e.light,i.orientation==="vertical"&&e.vertical,i.flexItem&&e.flexItem,i.children&&e.withChildren,i.children&&i.orientation==="vertical"&&e.withChildrenVertical,i.textAlign==="right"&&i.orientation!=="vertical"&&e.textAlignRight,i.textAlign==="left"&&i.orientation!=="vertical"&&e.textAlignLeft]}})(({theme:t,ownerState:e})=>o({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},e.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},e.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:L(t.palette.divider,.08)},e.variant==="inset"&&{marginLeft:72},e.variant==="middle"&&e.orientation==="horizontal"&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},e.variant==="middle"&&e.orientation==="vertical"&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},e.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},e.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme:t,ownerState:e})=>o({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme:t,ownerState:e})=>o({},e.children&&e.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(t.vars||t).palette.divider}`,transform:"translateX(0%)"}}),({ownerState:t})=>o({},t.textAlign==="right"&&t.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},t.textAlign==="left"&&t.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),P=C("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,e)=>{const{ownerState:i}=t;return[e.wrapper,i.orientation==="vertical"&&e.wrapperVertical]}})(({theme:t,ownerState:e})=>o({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},e.orientation==="vertical"&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`})),j=V.exports.forwardRef(function(e,i){const n=T({props:e,name:"MuiDivider"}),{absolute:s=!1,children:l,className:r,component:d=l?"div":"hr",flexItem:p=!1,light:u=!1,orientation:b="horizontal",role:m=d!=="hr"?"separator":void 0,textAlign:_="center",variant:w="fullWidth"}=n,N=W(n,S),h=o({},n,{absolute:s,component:d,flexItem:p,light:u,orientation:b,role:m,textAlign:_,variant:w}),v=q(h);return a(M,o({as:d,className:$(v.root,r),role:m,ref:i,ownerState:h},N,{children:l?a(P,{className:v.wrapper,ownerState:h,children:l}):null}))}),E=j,f=({children:t,title:e,action:i,withPadding:n=!0,className:s,classNameHeader:l,...r})=>g("section",{...r,className:x(c.section,s),children:[e||i?g(D,{children:[g("div",{className:x(c.header,l),children:[a("div",{children:typeof e=="string"?a(R,{root:"h3",children:e}):e}),i?a("div",{className:c.action,children:i}):null]}),a("div",{className:c.paddingX,children:a(E,{})})]}):null,a("div",{className:c.sectionContent({withPadding:n}),children:t})]});try{f.displayName="Card",f.__docgenInfo={description:"",displayName:"Card",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"ReactNode"}},withPadding:{defaultValue:{value:"true"},description:"",name:"withPadding",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},classNameHeader:{defaultValue:null,description:"",name:"classNameHeader",required:!1,type:{name:"string | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/card/Card.tsx#Card"]={docgenInfo:f.__docgenInfo,name:"Card",path:"src/components/card/Card.tsx#Card"})}catch{}export{f as C};
//# sourceMappingURL=Card.4eee3071.js.map
