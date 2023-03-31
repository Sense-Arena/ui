import{r as o,R as a}from"./index-f1f749bf.js";import{u as P,a as Q,D as X}from"./DropdownMenu-149c68a2.js";import{c as Y}from"./clsx-9a51c995.js";import{F as Z}from"./FieldError-ae9537c7.js";/* empty css                            */import{c as V}from"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import{C as A}from"./Chip-5b04a766.js";import{a as ee,A as te}from"./ArrowUpSLine-4bfd8801.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-23dc7436.js";import"./index-96c5f47c.js";import"./Paragraph-be4b1855.js";import"./typography.style.css-9b63b927.js";import"./Stack-2288c72f.js";import"./CloseIcon-8783d259.js";var n={iconStyle:"h4i230c",label:"h4i230b",text:V({defaultClassName:"h4i2309",variantClassNames:{withLabel:{true:"h4i230a"}},defaultVariants:{},compoundVariants:[]}),container:V({defaultClassName:"h4i2300",variantClassNames:{border:{black:"h4i2301",grey:"h4i2302"},disabled:{true:"h4i2303"},error:{true:"h4i2304"},opened:{true:"h4i2305"},fullWidth:{true:"h4i2306"},bRadius:{8:"h4i2307",10:"h4i2308"}},defaultVariants:{bRadius:10,border:"grey"},compoundVariants:[]}),select:"h4i230d",chips:V({defaultClassName:"h4i230e",variantClassNames:{withLabel:{true:"h4i230f"}},defaultVariants:{},compoundVariants:[]}),chip:"h4i230g"};function h({selectedOptions:e,disabled:i,onChangeSelect:l,containerClassName:v,options:T,errorText:C,className:U,border:I,fullWidth:j,bRadius:S,label:c,dataSAId:r,...z}){const[E,_]=o.useState(!1),x=o.useRef(null),N=o.useRef(null),G=o.useCallback(()=>{i||_(t=>!t)},[i]),d=o.useCallback(()=>_(!1),[]);P("keyup",d,"Escape"),Q(x,d,N);const H=o.useCallback(t=>{l==null||l(e.concat(t)),d()},[l]),J=o.useCallback(t=>{l==null||l(e.filter(s=>s!==t)),d()},[l]);return a.createElement("div",{className:U},a.createElement("select",{multiple:!0,"data-sa-id":r&&`${r}-select`,disabled:!0,value:e,className:n.select,...z},e.map(t=>{var s;return a.createElement("option",{key:`option_${t}`,value:t},((s=T.find(p=>p.value===t))==null?void 0:s.title)||"Not found")})),a.createElement("div",{onClick:G,className:Y(n.container({disabled:i,error:!!C,opened:E,border:I,fullWidth:j,bRadius:S}),v),ref:N,"data-sa-id":r},c?a.createElement("span",{className:n.label},c):null,e.length?a.createElement("div",{className:n.chips({withLabel:!!c})},e.map((t,s)=>{var p;return a.createElement(A,{dataSAId:r&&`${r}-chip-${s}`,key:`chip_${t}`,className:n.chip,color:"secondary",onDelete:()=>J(t)},((p=T.find(K=>K.value===t))==null?void 0:p.title)||"Not Found")})):a.createElement("span",{className:n.text({withLabel:!!c})},"Select options"),a.createElement("div",null,E?a.createElement(ee,{className:n.iconStyle}):a.createElement(te,{className:n.iconStyle})),a.createElement(X,{menuRef:x,isOpen:E,mainRef:N,selectItem:H,options:T.filter(t=>!e.some(s=>t.value===s)),bRadius:S,dataSAId:r})),a.createElement(Z,{errorText:C}))}try{h.displayName="MultiSelect",h.__docgenInfo={description:"",displayName:"MultiSelect",props:{selectedOptions:{defaultValue:null,description:"",name:"selectedOptions",required:!0,type:{name:"TOption[]"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"ReactNode"}},onChangeSelect:{defaultValue:null,description:"",name:"onChangeSelect",required:!1,type:{name:"((selected: TOption[], name?: string) => void)"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ title: string; value: TOption; }[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"enum",value:[{value:'"black"'},{value:'"grey"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},bRadius:{defaultValue:null,description:"",name:"bRadius",required:!1,type:{name:"enum",value:[{value:"8"},{value:"10"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},containerClassName:{defaultValue:null,description:"",name:"containerClassName",required:!1,type:{name:"string"}},dataSAId:{defaultValue:null,description:"",name:"dataSAId",required:!1,type:{name:"string"}}}}}catch{}const he={title:"UI/Inputs/MultiSelect",component:h,tags:["autodocs"],argTypes:{disabled:{type:"boolean"}}},u=[{title:"Test option 1",value:"1"},{title:"Test option 2",value:"2"},{title:"Test option 3",value:"3"},{title:"Test option 4",value:"4"},{title:"Test option 5",value:"5"},{title:"Test option 6",value:"6"},{title:"Test option 7",value:"7"},{title:"Test option 8",value:"8"},{title:"Test option 9",value:"9"},{title:"Test option 10",value:"10"}],y=e=>{const[i,l]=o.useState(e.selectedOptions);return a.createElement(h,{options:u,onChangeSelect:v=>l(v),label:e.label,border:e.border,selectedOptions:i,disabled:e.disabled,errorText:e.errorText,fullWidth:e.fullWidth})},m={args:{selectedOptions:[],onChangeSelect:console.debug,options:u,border:"grey",label:"Title"},render:y},f={args:{selectedOptions:[],onChangeSelect:console.debug,label:"Title",options:u,disabled:!0},render:y},b={args:{selectedOptions:[],onChangeSelect:console.debug,label:"Title",options:u,errorText:"Error message text",border:"grey"},render:y},g={args:{selectedOptions:[],onChangeSelect:console.debug,options:u,border:"grey",fullWidth:!0,name:"select"},render:y};var O,q,k;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    selectedOptions: [],
    onChangeSelect: console.debug,
    options,
    border: 'grey',
    label: 'Title'
  },
  render: Template
}`,...(k=(q=m.parameters)==null?void 0:q.docs)==null?void 0:k.source}}};var R,W,w;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    selectedOptions: [],
    onChangeSelect: console.debug,
    label: 'Title',
    options,
    disabled: true
  },
  render: Template
}`,...(w=(W=f.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var D,F,L;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    selectedOptions: [],
    onChangeSelect: console.debug,
    label: 'Title',
    options,
    errorText: 'Error message text',
    border: 'grey'
  },
  render: Template
}`,...(L=(F=b.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var M,$,B;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    selectedOptions: [],
    onChangeSelect: console.debug,
    options,
    border: 'grey',
    fullWidth: true,
    name: 'select'
  },
  render: Template
}`,...(B=($=g.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};const ye=["Base","Disabled","Error","FullWidth"];export{m as Base,f as Disabled,b as Error,g as FullWidth,ye as __namedExportsOrder,he as default};
//# sourceMappingURL=MultiSelect.stories-844c4c0b.js.map
