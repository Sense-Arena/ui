import{r as N,R as e}from"./index-4g5l5LRQ.js";import{c as H}from"./clsx-4u0nZvpz.js";import{F as J}from"./FieldError-5DECY4kA.js";/* empty css                            */import{c as u}from"./createRuntimeFn-f8e161c6.esm-AdCGDnTf.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./Paragraph-xMeaH9kz.js";import"./typography.style.css-6S19li7W.js";var p={containerStyle:u({defaultClassName:"_1fewrzq0",variantClassNames:{border:{black:"_1fewrzq1",grey:"_1fewrzq2"},error:{true:"_1fewrzq3"},disabled:{true:"_1fewrzq4",false:"_1fewrzq5"},bRadius:{8:"_1fewrzq6",10:"_1fewrzq7"}},defaultVariants:{border:"grey",bRadius:10},compoundVariants:[]}),labelStyle:u({defaultClassName:"_1fewrzq8",variantClassNames:{variant:{simple:"_1fewrzq9",focused:"_1fewrzqa"},disabled:{true:"_1fewrzqb"}},defaultVariants:{},compoundVariants:[]}),inputStyle:u({defaultClassName:"_1fewrzqc",variantClassNames:{variant:{simple:"_1fewrzqd",focused:"_1fewrzqe"},disabled:{true:"_1fewrzqf",false:"_1fewrzqg"}},defaultVariants:{},compoundVariants:[]})};const f=({errorText:m,className:I,label:O,onFocus:o,onBlur:i,disabled:a=!1,value:d,border:k,bRadius:D,containerClassName:G,dataSAId:L,...U})=>{const[_,b]=N.useState(d?"focused":"simple"),g=N.useId(),j=c=>{b("focused"),o==null||o(c)},B=c=>{d||b("simple"),i==null||i(c)};return e.createElement("div",{className:I},e.createElement("div",{className:H(p.containerStyle({disabled:a,error:!!m,border:k,bRadius:D}),G),"data-sa-id":L},e.createElement("label",{htmlFor:g,className:p.labelStyle({variant:_,disabled:a})},O),e.createElement("textarea",{className:p.inputStyle({disabled:a,variant:_}),onFocus:j,onBlur:B,disabled:a,value:d,...U,id:g})),e.createElement(J,{errorText:m}))};try{f.displayName="TextArea",f.__docgenInfo={description:"",displayName:"TextArea",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"ReactNode"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"enum",value:[{value:'"black"'},{value:'"grey"'}]}},bRadius:{defaultValue:null,description:"",name:"bRadius",required:!1,type:{name:"enum",value:[{value:"8"},{value:"10"}]}},containerClassName:{defaultValue:null,description:"",name:"containerClassName",required:!1,type:{name:"string"}},dataSAId:{defaultValue:null,description:"",name:"dataSAId",required:!1,type:{name:"string"}}}}}catch{}const $={title:"UI/Inputs/TextArea",component:f,tags:["autodocs"],argTypes:{disabled:{type:"boolean"}}},r={args:{label:"First Name",name:"first_name",placeholder:"write"}},s={args:{label:"First Name",name:"first_name",value:"GON"}},t={args:{label:"First Name",name:"first_name",disabled:!0}},l={args:{label:"First Name",name:"first_name",errorText:"Error message lorem ipsum"}},n={args:{label:"First Name",name:"first_name",value:"AAAAAAAA",errorText:"Error message lorem ipsum"}};var q,y,A;r.parameters={...r.parameters,docs:{...(q=r.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    name: 'first_name',
    placeholder: 'write'
  }
}`,...(A=(y=r.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var w,v,z;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    name: 'first_name',
    value: 'GON'
  }
}`,...(z=(v=s.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var S,E,F;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    name: 'first_name',
    disabled: true
  }
}`,...(F=(E=t.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var x,V,T;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    name: 'first_name',
    errorText: 'Error message lorem ipsum'
  }
}`,...(T=(V=l.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var C,R,h;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    name: 'first_name',
    value: 'AAAAAAAA',
    errorText: 'Error message lorem ipsum'
  }
}`,...(h=(R=n.parameters)==null?void 0:R.docs)==null?void 0:h.source}}};const ee=["Base","Filled","Disabled","Error","ErrorFilled"];export{r as Base,t as Disabled,l as Error,n as ErrorFilled,s as Filled,ee as __namedExportsOrder,$ as default};
//# sourceMappingURL=TextArea.stories-a92zTw-G.js.map
