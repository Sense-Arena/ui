import{r as g}from"./index-8db94870.js";import{c as B}from"./clsx-9a51c995.js";import{F as H}from"./FieldError-db9f8d2a.js";/* empty css                            */import{c}from"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import"./_commonjsHelpers-042e6b4d.js";import"./Paragraph-12e09905.js";import"./typography.style.css-66a1d45e.js";var u={containerStyle:c({defaultClassName:"_1fewrzq0",variantClassNames:{border:{black:"_1fewrzq1",grey:"_1fewrzq2"},error:{true:"_1fewrzq3"},disabled:{true:"_1fewrzq4",false:"_1fewrzq5"},bRadius:{8:"_1fewrzq6",10:"_1fewrzq7"}},defaultVariants:{border:"grey",bRadius:10},compoundVariants:[]}),labelStyle:c({defaultClassName:"_1fewrzq8",variantClassNames:{variant:{simple:"_1fewrzq9",focused:"_1fewrzqa"},disabled:{true:"_1fewrzqb"}},defaultVariants:{},compoundVariants:[]}),inputStyle:c({defaultClassName:"_1fewrzqc",variantClassNames:{variant:{simple:"_1fewrzqd",focused:"_1fewrzqe"},disabled:{true:"_1fewrzqf",false:"_1fewrzqg"}},defaultVariants:{},compoundVariants:[]})};const p=({errorText:n,className:h,label:I,onFocus:m,onBlur:o,disabled:e=!1,value:i,border:O,bRadius:k,containerClassName:D,dataSAId:G,...L})=>{const[f,_]=g.useState(i?"focused":"simple"),b=g.useId(),U=d=>{_("focused"),m==null||m(d)},j=d=>{i||_("simple"),o==null||o(d)};return React.createElement("div",{className:h},React.createElement("div",{className:B(u.containerStyle({disabled:e,error:!!n,border:O,bRadius:k}),D),"data-sa-id":G},React.createElement("label",{htmlFor:b,className:u.labelStyle({variant:f,disabled:e})},I),React.createElement("textarea",{className:u.inputStyle({disabled:e,variant:f}),onFocus:U,onBlur:j,disabled:e,value:i,...L,id:b})),React.createElement(H,{errorText:n}))};try{p.displayName="TextArea",p.__docgenInfo={description:"",displayName:"TextArea",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"ReactNode"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"enum",value:[{value:'"black"'},{value:'"grey"'}]}},bRadius:{defaultValue:null,description:"",name:"bRadius",required:!1,type:{name:"enum",value:[{value:"8"},{value:"10"}]}},containerClassName:{defaultValue:null,description:"",name:"containerClassName",required:!1,type:{name:"string"}},dataSAId:{defaultValue:null,description:"",name:"dataSAId",required:!1,type:{name:"string"}}}}}catch{}const Z={title:"UI/Inputs/TextArea",component:p,tags:["autodocs"],argTypes:{disabled:{type:"boolean"}}},a={args:{label:"First Name",name:"first_name",placeholder:"write"}},r={args:{label:"First Name",name:"first_name",value:"GON"}},s={args:{label:"First Name",name:"first_name",disabled:!0}},t={args:{label:"First Name",name:"first_name",errorText:"Error message lorem ipsum"}},l={args:{label:"First Name",name:"first_name",value:"AAAAAAAA",errorText:"Error message lorem ipsum"}};var N,q,y;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    name: 'first_name',
    placeholder: 'write'
  }
}`,...(y=(q=a.parameters)==null?void 0:q.docs)==null?void 0:y.source}}};var A,v,w;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    name: 'first_name',
    value: 'GON'
  }
}`,...(w=(v=r.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var z,S,x;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    name: 'first_name',
    disabled: true
  }
}`,...(x=(S=s.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var E,F,V;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    name: 'first_name',
    errorText: 'Error message lorem ipsum'
  }
}`,...(V=(F=t.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var R,T,C;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    name: 'first_name',
    value: 'AAAAAAAA',
    errorText: 'Error message lorem ipsum'
  }
}`,...(C=(T=l.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const $=["Base","Filled","Disabled","Error","ErrorFilled"];export{a as Base,s as Disabled,t as Error,l as ErrorFilled,r as Filled,$ as __namedExportsOrder,Z as default};
//# sourceMappingURL=TextArea.stories-d21b0bb9.js.map
