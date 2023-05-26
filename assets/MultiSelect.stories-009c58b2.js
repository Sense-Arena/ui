import{r as n,R as K}from"./index-8db94870.js";import{u as P,a as Q,D as X}from"./DropdownMenu-90a6b195.js";import{c as Y}from"./clsx-9a51c995.js";import{F as Z}from"./FieldError-db9f8d2a.js";/* empty css                            */import{c as R}from"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import{C as A}from"./Chip-d94b7d0c.js";import{A as ee,a as te}from"./ArrowUpSLine-e41651c4.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-df04aa12.js";import"./index-8ce4a492.js";import"./Paragraph-12e09905.js";import"./typography.style.css-66a1d45e.js";import"./Stack-e9f46c1f.js";import"./CloseIcon-35eeda3e.js";var s={iconStyle:"h4i230c",label:"h4i230b",text:R({defaultClassName:"h4i2309",variantClassNames:{withLabel:{true:"h4i230a"}},defaultVariants:{},compoundVariants:[]}),container:R({defaultClassName:"h4i2300",variantClassNames:{border:{black:"h4i2301",grey:"h4i2302"},disabled:{true:"h4i2303"},error:{true:"h4i2304"},opened:{true:"h4i2305"},fullWidth:{true:"h4i2306"},bRadius:{8:"h4i2307",10:"h4i2308"}},defaultVariants:{bRadius:10,border:"grey"},compoundVariants:[]}),select:"h4i230d",chips:R({defaultClassName:"h4i230e",variantClassNames:{withLabel:{true:"h4i230f"}},defaultVariants:{},compoundVariants:[]}),chip:"h4i230g"};function b({selectedOptions:e,disabled:o,onChangeSelect:a,containerClassName:h,options:y,errorText:E,className:B,border:U,fullWidth:I,bRadius:N,label:c,dataSAId:l,...j}){const[v,V]=n.useState(!1),C=n.useRef(null),T=n.useRef(null),z=n.useCallback(()=>{o||V(t=>!t)},[o]),S=n.useCallback(()=>V(!1),[]);P("keyup",S,"Escape"),Q(C,S,T);const G=n.useCallback(t=>{a==null||a(e.concat(t))},[a]),H=n.useCallback(t=>{a==null||a(e.filter(r=>r!==t))},[a]);return React.createElement("div",{className:B},React.createElement("select",{multiple:!0,"data-sa-id":l&&`${l}-select`,disabled:!0,value:e,className:s.select,...j},e.map(t=>{var r;return React.createElement("option",{key:`option_${t}`,value:t},((r=y.find(u=>u.value===t))==null?void 0:r.title)||"Not found")})),React.createElement("div",{onClick:z,className:Y(s.container({disabled:o,error:!!E,opened:v,border:U,fullWidth:I,bRadius:N}),h),ref:T,"data-sa-id":l},c?React.createElement("span",{className:s.label},c):null,e.length?React.createElement("div",{className:s.chips({withLabel:!!c})},e.map((t,r)=>{var u;return React.createElement(A,{dataSAId:l&&`${l}-chip-${r}`,key:`chip_${t}`,className:s.chip,color:"secondary",onDelete:()=>H(t)},((u=y.find(J=>J.value===t))==null?void 0:u.title)||"Not Found")})):React.createElement("span",{className:s.text({withLabel:!!c})},"Select options"),React.createElement("div",null,v?React.createElement(ee,{className:s.iconStyle}):React.createElement(te,{className:s.iconStyle})),React.createElement(X,{menuRef:C,isOpen:v,mainRef:T,selectItem:G,options:y.filter(t=>!e.some(r=>t.value===r)),bRadius:N,dataSAId:l})),React.createElement(Z,{errorText:E}))}try{b.displayName="MultiSelect",b.__docgenInfo={description:"",displayName:"MultiSelect",props:{selectedOptions:{defaultValue:null,description:"",name:"selectedOptions",required:!0,type:{name:"TOption[]"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"ReactNode"}},onChangeSelect:{defaultValue:null,description:"",name:"onChangeSelect",required:!1,type:{name:"((selected: TOption[], name?: string) => void)"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ title: string; value: TOption; }[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"enum",value:[{value:'"black"'},{value:'"grey"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},bRadius:{defaultValue:null,description:"",name:"bRadius",required:!1,type:{name:"enum",value:[{value:"8"},{value:"10"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},containerClassName:{defaultValue:null,description:"",name:"containerClassName",required:!1,type:{name:"string"}},dataSAId:{defaultValue:null,description:"",name:"dataSAId",required:!1,type:{name:"string"}}}}}catch{}const he={title:"UI/Inputs/MultiSelect",component:b,tags:["autodocs"],argTypes:{disabled:{type:"boolean"}}},i=[{title:"Test option 1",value:"1"},{title:"Test option 2",value:"2"},{title:"Test option 3",value:"3"},{title:"Test option 4",value:"4"},{title:"Test option 5",value:"5"},{title:"Test option 6",value:"6"},{title:"Test option 7",value:"7"},{title:"Test option 8",value:"8"},{title:"Test option 9",value:"9"},{title:"Test option 10",value:"10"}],g=e=>{const[o,a]=n.useState(e.selectedOptions);return K.createElement(b,{options:i,onChangeSelect:h=>a(h),label:e.label,border:e.border,selectedOptions:o,disabled:e.disabled,errorText:e.errorText,fullWidth:e.fullWidth})},d={args:{selectedOptions:[],onChangeSelect:console.debug,options:i,border:"grey",label:"Title"},render:g},p={args:{selectedOptions:[],onChangeSelect:console.debug,label:"Title",options:i,disabled:!0},render:g},m={args:{selectedOptions:[],onChangeSelect:console.debug,label:"Title",options:i,errorText:"Error message text",border:"grey"},render:g},f={args:{selectedOptions:[],onChangeSelect:console.debug,options:i,border:"grey",fullWidth:!0,name:"select"},render:g};var _,x,O;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    selectedOptions: [],
    onChangeSelect: console.debug,
    options,
    border: 'grey',
    label: 'Title'
  },
  render: Template
}`,...(O=(x=d.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var q,k,W;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    selectedOptions: [],
    onChangeSelect: console.debug,
    label: 'Title',
    options,
    disabled: true
  },
  render: Template
}`,...(W=(k=p.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var w,D,F;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    selectedOptions: [],
    onChangeSelect: console.debug,
    label: 'Title',
    options,
    errorText: 'Error message text',
    border: 'grey'
  },
  render: Template
}`,...(F=(D=m.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var $,L,M;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    selectedOptions: [],
    onChangeSelect: console.debug,
    options,
    border: 'grey',
    fullWidth: true,
    name: 'select'
  },
  render: Template
}`,...(M=(L=f.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const ye=["Base","Disabled","Error","FullWidth"];export{d as Base,p as Disabled,m as Error,f as FullWidth,ye as __namedExportsOrder,he as default};
//# sourceMappingURL=MultiSelect.stories-009c58b2.js.map
