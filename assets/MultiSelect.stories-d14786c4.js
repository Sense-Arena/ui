import{r as o,R as a}from"./index-f1f749bf.js";import{u as P,a as Q,D as X}from"./DropdownMenu-149c68a2.js";import{c as Y}from"./clsx-9a51c995.js";import{F as Z}from"./FieldError-a586e932.js";/* empty css                            */import{c as N}from"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import{C as A}from"./Chip-82df245c.js";import{a as ee,A as te}from"./ArrowUpSLine-4bfd8801.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-23dc7436.js";import"./index-96c5f47c.js";import"./Paragraph-ec332654.js";import"./typography.style.css-542db6e3.js";import"./Stack-2288c72f.js";import"./CloseIcon-8783d259.js";var n={iconStyle:"h4i230c",label:"h4i230b",text:N({defaultClassName:"h4i2309",variantClassNames:{withLabel:{true:"h4i230a"}},defaultVariants:{},compoundVariants:[]}),container:N({defaultClassName:"h4i2300",variantClassNames:{border:{black:"h4i2301",grey:"h4i2302"},disabled:{true:"h4i2303"},error:{true:"h4i2304"},opened:{true:"h4i2305"},fullWidth:{true:"h4i2306"},bRadius:{8:"h4i2307",10:"h4i2308"}},defaultVariants:{bRadius:10,border:"grey"},compoundVariants:[]}),select:"h4i230d",chips:N({defaultClassName:"h4i230e",variantClassNames:{withLabel:{true:"h4i230f"}},defaultVariants:{},compoundVariants:[]}),chip:"h4i230g"};function g({selectedOptions:e,disabled:i,onChangeSelect:l,containerClassName:y,options:v,errorText:V,className:U,border:I,fullWidth:j,bRadius:C,label:c,dataSAId:r,...z}){const[T,S]=o.useState(!1),_=o.useRef(null),E=o.useRef(null),G=o.useCallback(()=>{i||S(t=>!t)},[i]),x=o.useCallback(()=>S(!1),[]);P("keyup",x,"Escape"),Q(_,x,E);const H=o.useCallback(t=>{l==null||l(e.concat(t))},[l]),J=o.useCallback(t=>{l==null||l(e.filter(s=>s!==t))},[l]);return a.createElement("div",{className:U},a.createElement("select",{multiple:!0,"data-sa-id":r&&`${r}-select`,disabled:!0,value:e,className:n.select,...z},e.map(t=>{var s;return a.createElement("option",{key:`option_${t}`,value:t},((s=v.find(d=>d.value===t))==null?void 0:s.title)||"Not found")})),a.createElement("div",{onClick:G,className:Y(n.container({disabled:i,error:!!V,opened:T,border:I,fullWidth:j,bRadius:C}),y),ref:E,"data-sa-id":r},c?a.createElement("span",{className:n.label},c):null,e.length?a.createElement("div",{className:n.chips({withLabel:!!c})},e.map((t,s)=>{var d;return a.createElement(A,{dataSAId:r&&`${r}-chip-${s}`,key:`chip_${t}`,className:n.chip,color:"secondary",onDelete:()=>J(t)},((d=v.find(K=>K.value===t))==null?void 0:d.title)||"Not Found")})):a.createElement("span",{className:n.text({withLabel:!!c})},"Select options"),a.createElement("div",null,T?a.createElement(ee,{className:n.iconStyle}):a.createElement(te,{className:n.iconStyle})),a.createElement(X,{menuRef:_,isOpen:T,mainRef:E,selectItem:H,options:v.filter(t=>!e.some(s=>t.value===s)),bRadius:C,dataSAId:r})),a.createElement(Z,{errorText:V}))}try{g.displayName="MultiSelect",g.__docgenInfo={description:"",displayName:"MultiSelect",props:{selectedOptions:{defaultValue:null,description:"",name:"selectedOptions",required:!0,type:{name:"TOption[]"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"ReactNode"}},onChangeSelect:{defaultValue:null,description:"",name:"onChangeSelect",required:!1,type:{name:"((selected: TOption[], name?: string) => void)"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ title: string; value: TOption; }[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"enum",value:[{value:'"black"'},{value:'"grey"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},bRadius:{defaultValue:null,description:"",name:"bRadius",required:!1,type:{name:"enum",value:[{value:"8"},{value:"10"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},containerClassName:{defaultValue:null,description:"",name:"containerClassName",required:!1,type:{name:"string"}},dataSAId:{defaultValue:null,description:"",name:"dataSAId",required:!1,type:{name:"string"}}}}}catch{}const he={title:"UI/Inputs/MultiSelect",component:g,tags:["autodocs"],argTypes:{disabled:{type:"boolean"}}},u=[{title:"Test option 1",value:"1"},{title:"Test option 2",value:"2"},{title:"Test option 3",value:"3"},{title:"Test option 4",value:"4"},{title:"Test option 5",value:"5"},{title:"Test option 6",value:"6"},{title:"Test option 7",value:"7"},{title:"Test option 8",value:"8"},{title:"Test option 9",value:"9"},{title:"Test option 10",value:"10"}],h=e=>{const[i,l]=o.useState(e.selectedOptions);return a.createElement(g,{options:u,onChangeSelect:y=>l(y),label:e.label,border:e.border,selectedOptions:i,disabled:e.disabled,errorText:e.errorText,fullWidth:e.fullWidth})},p={args:{selectedOptions:[],onChangeSelect:console.debug,options:u,border:"grey",label:"Title"},render:h},m={args:{selectedOptions:[],onChangeSelect:console.debug,label:"Title",options:u,disabled:!0},render:h},f={args:{selectedOptions:[],onChangeSelect:console.debug,label:"Title",options:u,errorText:"Error message text",border:"grey"},render:h},b={args:{selectedOptions:[],onChangeSelect:console.debug,options:u,border:"grey",fullWidth:!0,name:"select"},render:h};var O,q,k;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    selectedOptions: [],
    onChangeSelect: console.debug,
    options,
    border: 'grey',
    label: 'Title'
  },
  render: Template
}`,...(k=(q=p.parameters)==null?void 0:q.docs)==null?void 0:k.source}}};var R,W,w;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    selectedOptions: [],
    onChangeSelect: console.debug,
    label: 'Title',
    options,
    disabled: true
  },
  render: Template
}`,...(w=(W=m.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var D,F,L;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    selectedOptions: [],
    onChangeSelect: console.debug,
    label: 'Title',
    options,
    errorText: 'Error message text',
    border: 'grey'
  },
  render: Template
}`,...(L=(F=f.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var M,$,B;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    selectedOptions: [],
    onChangeSelect: console.debug,
    options,
    border: 'grey',
    fullWidth: true,
    name: 'select'
  },
  render: Template
}`,...(B=($=b.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};const ye=["Base","Disabled","Error","FullWidth"];export{p as Base,m as Disabled,f as Error,b as FullWidth,ye as __namedExportsOrder,he as default};
//# sourceMappingURL=MultiSelect.stories-d14786c4.js.map
