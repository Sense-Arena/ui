import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import"./vars.css.ts.vanilla-BOXTzfgW.js";import{n as r,t as i}from"./createRuntimeFn-62c9670f.esm-DfHgPyBA.js";import{n as a,t as o}from"./clsx-CRapKfbA.js";import{n as s,t as c}from"./FieldError-BXbxFQnh.js";var l;function u(){return(u=e((()=>{r(),l={containerStyle:i({defaultClassName:`_1fewrzq0`,variantClassNames:{border:{black:`_1fewrzq1`,grey:`_1fewrzq2`},error:{true:`_1fewrzq3`},disabled:{true:`_1fewrzq4`,false:`_1fewrzq5`},bRadius:{8:`_1fewrzq6`,10:`_1fewrzq7`}},defaultVariants:{border:`grey`,bRadius:10},compoundVariants:[]}),labelStyle:i({defaultClassName:`_1fewrzq8`,variantClassNames:{variant:{simple:`_1fewrzq9`,focused:`_1fewrzqa`},disabled:{true:`_1fewrzqb`}},defaultVariants:{},compoundVariants:[]}),inputStyle:i({defaultClassName:`_1fewrzqc`,variantClassNames:{variant:{simple:`_1fewrzqd`,focused:`_1fewrzqe`},disabled:{true:`_1fewrzqf`,false:`_1fewrzqg`}},defaultVariants:{},compoundVariants:[]})}})))()}var d,f,p;function m(){return(m=e((()=>{d=t(),a(),s(),u(),f=n(),p=({errorText:e,className:t,label:n,onFocus:r,onBlur:i,disabled:a=!1,value:s,border:u,bRadius:p,containerClassName:m,dataSAId:h,...g})=>{let[_,v]=(0,d.useState)(s?`focused`:`simple`),y=(0,d.useId)();return(0,f.jsxs)(`div`,{className:t,children:[(0,f.jsxs)(`div`,{className:o(l.containerStyle({disabled:a,error:!!e,border:u,bRadius:p}),m),"data-sa-id":h,children:[(0,f.jsx)(`label`,{htmlFor:y,className:l.labelStyle({variant:_,disabled:a}),children:n}),(0,f.jsx)(`textarea`,{className:l.inputStyle({disabled:a,variant:_}),onFocus:e=>{v(`focused`),r?.(e)},onBlur:e=>{s||v(`simple`),i?.(e)},disabled:a,value:s,...g,id:y})]}),(0,f.jsx)(c,{errorText:e})]})},p.__docgenInfo={description:``,methods:[],displayName:`TextArea`,props:{label:{required:!0,tsType:{name:`string`},description:``},errorText:{required:!1,tsType:{name:`ReactNode`},description:``},border:{required:!1,tsType:{name:`union`,raw:`'black' | 'grey'`,elements:[{name:`literal`,value:`'black'`},{name:`literal`,value:`'grey'`}]},description:``},bRadius:{required:!1,tsType:{name:`union`,raw:`8 | 10`,elements:[{name:`literal`,value:`8`},{name:`literal`,value:`10`}]},description:``},containerClassName:{required:!1,tsType:{name:`string`},description:``},dataSAId:{required:!1,tsType:{name:`string`},description:``},disabled:{defaultValue:{value:`false`,computed:!1},required:!1}}}})))()}var h,g,_,v,y,b,x;function S(){return(S=e((()=>{m(),h={title:`UI/Inputs/TextArea`,component:p,tags:[`autodocs`],argTypes:{disabled:{type:`boolean`}}},g={args:{label:`First Name`,name:`first_name`,placeholder:`write`}},_={args:{label:`First Name`,name:`first_name`,value:`GON`}},v={args:{label:`First Name`,name:`first_name`,disabled:!0}},y={args:{label:`First Name`,name:`first_name`,errorText:`Error message lorem ipsum`}},b={args:{label:`First Name`,name:`first_name`,value:`AAAAAAAA`,errorText:`Error message lorem ipsum`}},x=[`Base`,`Filled`,`Disabled`,`Error`,`ErrorFilled`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    name: 'first_name',
    placeholder: 'write'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    name: 'first_name',
    value: 'GON'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    name: 'first_name',
    disabled: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    name: 'first_name',
    errorText: 'Error message lorem ipsum'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    name: 'first_name',
    value: 'AAAAAAAA',
    errorText: 'Error message lorem ipsum'
  }
}`,...b.parameters?.docs?.source}}}})))()}S();export{g as Base,v as Disabled,y as Error,b as ErrorFilled,_ as Filled,x as __namedExportsOrder,h as default};