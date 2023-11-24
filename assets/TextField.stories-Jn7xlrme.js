import{r as F,R as e}from"./index-4g5l5LRQ.js";import{c as ee}from"./clsx-4u0nZvpz.js";import{F as ae}from"./FieldError-9hkGzNn9.js";/* empty css                            */import{c as g}from"./createRuntimeFn-f8e161c6.esm-AdCGDnTf.js";import{S as U}from"./SearchIcon-11BPQWk6.js";import{I as re}from"./IconButton-B0mJ7UEW.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./Paragraph-KE75Y3vx.js";import"./typography.style.css-H62P5Ui0.js";import"./Spinner-xQQlIf9B.js";var te=g({defaultClassName:"_1dipjr50",variantClassNames:{border:{black:"_1dipjr51",grey:"_1dipjr52"},error:{true:"_1dipjr53"},disabled:{true:"_1dipjr54",false:"_1dipjr55"},withEndAdornment:{true:"_1dipjr56",false:"_1dipjr57"},bRadius:{8:"_1dipjr58",10:"_1dipjr59"}},defaultVariants:{border:"grey",bRadius:10},compoundVariants:[]}),se="_1dipjr5b",ne="_1dipjr5c",le="_1dipjr5a",ie=g({defaultClassName:"_1dipjr5h",variantClassNames:{variant:{simple:"_1dipjr5i",focused:"_1dipjr5j"},disabled:{true:"_1dipjr5k",false:"_1dipjr5l"},withIcon:{true:"_1dipjr5m"},bRadius:{8:"_1dipjr5n",10:"_1dipjr5o"}},defaultVariants:{bRadius:10},compoundVariants:[]}),oe=g({defaultClassName:"_1dipjr5d",variantClassNames:{variant:{simple:"_1dipjr5e",focused:"_1dipjr5f"},disabled:{true:"_1dipjr5g"}},defaultVariants:{},compoundVariants:[]});const b=({errorText:m,className:z,label:G,onFocus:d,onBlur:c,disabled:a=!1,value:p,border:J,endAdornment:u,endIcon:f,bRadius:N,containerClassName:P,inputRef:Q,dataSAId:X,...Y})=>{const[j,E]=F.useState(p?"focused":"simple"),v=F.useId(),Z=_=>{E("focused"),d==null||d(_)},$=_=>{p||E("simple"),c==null||c(_)};return e.createElement("div",{className:z},e.createElement("div",{className:ee(te({disabled:a,error:!!m,border:J,withEndAdornment:!!u,bRadius:N}),P),"data-sa-id":X},e.createElement("div",{className:le},e.createElement("label",{htmlFor:v,className:oe({variant:j,disabled:a})},G),e.createElement("input",{className:ie({disabled:a,variant:j,withIcon:!!f,bRadius:N}),onFocus:Z,onBlur:$,disabled:a,value:p,ref:Q,...Y,id:v})),u?e.createElement("div",{className:se},u):null,f?e.createElement("div",{className:ne},f):null),e.createElement(ae,{errorText:m}))};try{b.displayName="TextField",b.__docgenInfo={description:"",displayName:"TextField",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"ReactNode"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"enum",value:[{value:'"black"'},{value:'"grey"'}]}},endAdornment:{defaultValue:null,description:"",name:"endAdornment",required:!1,type:{name:"ReactNode"}},endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"ReactNode"}},bRadius:{defaultValue:null,description:"",name:"bRadius",required:!1,type:{name:"enum",value:[{value:"8"},{value:"10"}]}},containerClassName:{defaultValue:null,description:"",name:"containerClassName",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"RefObject<HTMLInputElement>"}},dataSAId:{defaultValue:null,description:"",name:"dataSAId",required:!1,type:{name:"string"}}}}}catch{}const Ee={title:"UI/Inputs/TextField",component:b,tags:["autodocs"],argTypes:{disabled:{type:"boolean"}}},r={args:{label:"First Name",name:"first_name",placeholder:"write"}},t={args:{label:"First Name",name:"first_name",endIcon:e.createElement(U,null)}},s={args:{label:"First Name",name:"first_name",endAdornment:e.createElement(re,null,e.createElement(U,null))}},n={args:{label:"First Name",name:"first_name",placeholder:"write",value:"Konstantin"}},l={args:{label:"First Name",name:"first_name",disabled:!0}},i={args:{label:"First Name",name:"first_name",errorText:"Error message lorem ipsum"}},o={args:{label:"First Name",name:"first_name",value:"AAAAAAAA",errorText:"Error message lorem ipsum"}};var A,I,y;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    name: 'first_name',
    placeholder: 'write'
  }
}`,...(y=(I=r.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var h,S,V;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    name: 'first_name',
    endIcon: <SearchIcon />
  }
}`,...(V=(S=t.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var R,x,T;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    name: 'first_name',
    endAdornment: <IconButton>
        <SearchIcon />
      </IconButton>
  }
}`,...(T=(x=s.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var q,w,C;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    name: 'first_name',
    placeholder: 'write',
    value: 'Konstantin'
  }
}`,...(C=(w=n.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var B,W,k;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    name: 'first_name',
    disabled: true
  }
}`,...(k=(W=l.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var D,K,L;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    name: 'first_name',
    errorText: 'Error message lorem ipsum'
  }
}`,...(L=(K=i.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var O,H,M;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    name: 'first_name',
    value: 'AAAAAAAA',
    errorText: 'Error message lorem ipsum'
  }
}`,...(M=(H=o.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};const ve=["Base","WithIcon","WithIconButton","Filled","Disabled","Error","ErrorFilled"];export{r as Base,l as Disabled,i as Error,o as ErrorFilled,n as Filled,t as WithIcon,s as WithIconButton,ve as __namedExportsOrder,Ee as default};
//# sourceMappingURL=TextField.stories-Jn7xlrme.js.map
