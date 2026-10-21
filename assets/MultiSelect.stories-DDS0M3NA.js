import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import"./vars.css.ts.vanilla-BOXTzfgW.js";import{n as i,t as a}from"./createRuntimeFn-62c9670f.esm-DfHgPyBA.js";import{n as o,t as s}from"./clsx-CRapKfbA.js";import{Ct as c,Lt as l,n as u}from"./icons-DcJEo7GH.js";import{n as d,t as f}from"./Chip-CTPLCXfJ.js";import{a as p,i as m,n as h,o as g,r as _,t as v}from"./DropdownMenu-BdhT8OnQ.js";import{n as y,t as b}from"./FieldError-BXbxFQnh.js";var x;function S(){return(S=t((()=>{i(),x={iconStyle:`h4i230c`,label:`h4i230b`,text:a({defaultClassName:`h4i2309`,variantClassNames:{withLabel:{true:`h4i230a`}},defaultVariants:{},compoundVariants:[]}),container:a({defaultClassName:`h4i2300`,variantClassNames:{border:{black:`h4i2301`,grey:`h4i2302`},disabled:{true:`h4i2303`},error:{true:`h4i2304`},opened:{true:`h4i2305`},fullWidth:{true:`h4i2306`},bRadius:{8:`h4i2307`,10:`h4i2308`}},defaultVariants:{bRadius:10,border:`grey`},compoundVariants:[]}),select:`h4i230d`,chips:a({defaultClassName:`h4i230e`,variantClassNames:{withLabel:{true:`h4i230f`}},defaultVariants:{},compoundVariants:[]}),chip:`h4i230g`}})))()}function C({selectedOptions:e,disabled:t,onChangeSelect:n,containerClassName:r,options:i,errorText:a,className:o,border:u,fullWidth:d,bRadius:p,label:h,dataSAId:_,...y}){let[S,C]=(0,w.useState)(!1),E=(0,w.useRef)(null),D=(0,w.useRef)(null),O=(0,w.useCallback)(()=>{t||C(e=>!e)},[t]),k=(0,w.useCallback)(()=>C(!1),[]);m(`keyup`,k,`Escape`),g(E,k,D);let A=(0,w.useCallback)(t=>{n?.(e.concat(t))},[n]),j=(0,w.useCallback)(t=>{n?.(e.filter(e=>e!==t))},[n]);return(0,T.jsxs)(`div`,{className:o,children:[(0,T.jsx)(`select`,{multiple:!0,"data-sa-id":_&&`${_}-select`,disabled:!0,value:e,className:x.select,...y,children:e.map(e=>(0,T.jsx)(`option`,{value:e,children:i.find(t=>t.value===e)?.title||`Not found`},`option_${e}`))}),(0,T.jsxs)(`div`,{onClick:O,className:s(x.container({disabled:t,error:!!a,opened:S,border:u,fullWidth:d,bRadius:p}),r),ref:D,"data-sa-id":_,children:[h?(0,T.jsx)(`span`,{className:x.label,children:h}):null,e.length?(0,T.jsx)(`div`,{className:x.chips({withLabel:!!h}),children:e.map((e,t)=>(0,T.jsx)(f,{dataSAId:_&&`${_}-chip-${t}`,className:x.chip,color:`secondary`,onDelete:()=>j(e),children:i.find(t=>t.value===e)?.title||`Not Found`},`chip_${e}`))}):(0,T.jsx)(`span`,{className:x.text({withLabel:!!h}),children:`Select options`}),(0,T.jsx)(`div`,{children:S?(0,T.jsx)(c,{className:x.iconStyle}):(0,T.jsx)(l,{className:x.iconStyle})}),(0,T.jsx)(v,{menuRef:E,isOpen:S,mainRef:D,selectItem:A,options:i.filter(t=>!e.some(e=>t.value===e)),bRadius:p,dataSAId:_})]}),(0,T.jsx)(b,{errorText:a})]})}var w,T;function E(){return(E=t((()=>{w=n(),p(),_(),u(),o(),d(),h(),y(),S(),T=r(),C.__docgenInfo={description:``,methods:[],displayName:`MultiSelect`,props:{selectedOptions:{required:!0,tsType:{name:`Array`,elements:[{name:`TOption`}],raw:`TOption[]`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},errorText:{required:!1,tsType:{name:`ReactNode`},description:``},onChangeSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(selected: TOption[], name?: string) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`TOption`}],raw:`TOption[]`},name:`selected`},{type:{name:`string`},name:`name`}],return:{name:`void`}}},description:``},options:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  title: string;
  value: TOption;
}`,signature:{properties:[{key:`title`,value:{name:`string`,required:!0}},{key:`value`,value:{name:`TOption`,required:!0}}]}}],raw:`{
  title: string;
  value: TOption;
}[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``},border:{required:!1,tsType:{name:`union`,raw:`'black' | 'grey'`,elements:[{name:`literal`,value:`'black'`},{name:`literal`,value:`'grey'`}]},description:``},fullWidth:{required:!1,tsType:{name:`boolean`},description:``},bRadius:{required:!1,tsType:{name:`union`,raw:`8 | 10`,elements:[{name:`literal`,value:`8`},{name:`literal`,value:`10`}]},description:``},label:{required:!1,tsType:{name:`string`},description:``},containerClassName:{required:!1,tsType:{name:`string`},description:``},dataSAId:{required:!1,tsType:{name:`string`},description:``}}}})))()}var D,O,k,A,j,M,N,P,F,I;function L(){return(L=t((()=>{D=e(n()),E(),O=r(),k={title:`UI/Inputs/MultiSelect`,component:C,tags:[`autodocs`],argTypes:{disabled:{type:`boolean`}}},A=[{title:`Test option 1`,value:`1`},{title:`Test option 2`,value:`2`},{title:`Test option 3`,value:`3`},{title:`Test option 4`,value:`4`},{title:`Test option 5`,value:`5`},{title:`Test option 6`,value:`6`},{title:`Test option 7`,value:`7`},{title:`Test option 8`,value:`8`},{title:`Test option 9`,value:`9`},{title:`Test option 10`,value:`10`}],j=e=>{let[t,n]=(0,D.useState)(e.selectedOptions);return(0,O.jsx)(C,{options:A,onChangeSelect:e=>n(e),label:e.label,border:e.border,selectedOptions:t,disabled:e.disabled,errorText:e.errorText,fullWidth:e.fullWidth})},M={args:{selectedOptions:[],onChangeSelect:console.debug,options:A,border:`grey`,label:`Title`},render:j},N={args:{selectedOptions:[],onChangeSelect:console.debug,label:`Title`,options:A,disabled:!0},render:j},P={args:{selectedOptions:[],onChangeSelect:console.debug,label:`Title`,options:A,errorText:`Error message text`,border:`grey`},render:j},F={args:{selectedOptions:[],onChangeSelect:console.debug,options:A,border:`grey`,fullWidth:!0,name:`select`},render:j},I=[`Base`,`Disabled`,`Error`,`FullWidth`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    selectedOptions: [],
    onChangeSelect: console.debug,
    options,
    border: 'grey',
    label: 'Title'
  },
  render: Template
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    selectedOptions: [],
    onChangeSelect: console.debug,
    label: 'Title',
    options,
    disabled: true
  },
  render: Template
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    selectedOptions: [],
    onChangeSelect: console.debug,
    label: 'Title',
    options,
    errorText: 'Error message text',
    border: 'grey'
  },
  render: Template
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    selectedOptions: [],
    onChangeSelect: console.debug,
    options,
    border: 'grey',
    fullWidth: true,
    name: 'select'
  },
  render: Template
}`,...F.parameters?.docs?.source}}}})))()}L();export{M as Base,N as Disabled,P as Error,F as FullWidth,I as __namedExportsOrder,k as default};