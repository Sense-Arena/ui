import{r as m,j as l}from"./jsx-runtime.13473e5a.js";import{a as y,c as D}from"./react-spring-web.esm.10288f53.js";/* empty css                            */import{c}from"./vanilla-extract-recipes-createRuntimeFn.esm.e37fdae4.js";const C=(e,r,n)=>{m.exports.useEffect(()=>{const t=a=>{var o;!e.current||e.current.contains(a.target)||((o=n==null?void 0:n.current)==null?void 0:o.contains(a.target))||r()};return document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),()=>{document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}},[e,r])},R=(e,r,n)=>{m.exports.useEffect(()=>{const t=a=>{a instanceof KeyboardEvent&&a.key===n?r(a):n||r(a)};return document.addEventListener(e,t),()=>document.removeEventListener(e,t)},[e,n,r])};var E=c({defaultClassName:"_1mot4r16",variantClassNames:{selected:{true:"_1mot4r17"}},defaultVariants:{},compoundVariants:[]}),w=c({defaultClassName:"_1mot4r10",variantClassNames:{size:{s:"_1mot4r11",m:"_1mot4r12",l:"_1mot4r13"},bRadius:{8:"_1mot4r14",10:"_1mot4r15"}},defaultVariants:{size:"m",bRadius:10},compoundVariants:[]});function i({isOpen:e,mainRef:r,options:n,selectedOption:t,selectItem:a,size:o,bRadius:p,menuRef:f,dataSAId:s}){var d;const v=y({opacity:e?1:0,config:{duration:250}});return e?l(D.div,{style:{...v,width:(d=r.current)==null?void 0:d.getClientRects()[0].width},className:w({size:o,bRadius:p}),ref:f,onClick:u=>u.stopPropagation(),children:n.map((u,_)=>l("div",{onClick:()=>a(u.value),className:E({selected:u.value===t}),"data-sa-id":s?`${s}-child-${_}`:void 0,children:u.title},String(u.value)))}):null}try{i.displayName="DropDownMenu",i.__docgenInfo={description:"",displayName:"DropDownMenu",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},mainRef:{defaultValue:null,description:"",name:"mainRef",required:!0,type:{name:"RefObject<HTMLDivElement>"}},menuRef:{defaultValue:null,description:"",name:"menuRef",required:!0,type:{name:"RefObject<HTMLDivElement>"}},selectedOption:{defaultValue:null,description:"",name:"selectedOption",required:!0,type:{name:"TOption"}},selectItem:{defaultValue:null,description:"",name:"selectItem",required:!0,type:{name:"(value: TOption) => void"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ title: string; value: TOption; }[]"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},bRadius:{defaultValue:null,description:"",name:"bRadius",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"8"},{value:"10"}]}},dataSAId:{defaultValue:null,description:"",name:"dataSAId",required:!1,type:{name:"string | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/dropdown-menu/DropdownMenu.tsx#DropDownMenu"]={docgenInfo:i.__docgenInfo,name:"DropDownMenu",path:"src/components/dropdown-menu/DropdownMenu.tsx#DropDownMenu"})}catch{}export{i as D,C as a,R as u};
//# sourceMappingURL=DropdownMenu.6cedf3c4.js.map
