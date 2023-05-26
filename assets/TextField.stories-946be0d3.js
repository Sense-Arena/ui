import{r as F,R as _}from"./index-8db94870.js";import{c as ee}from"./clsx-9a51c995.js";import{F as ae}from"./FieldError-db9f8d2a.js";/* empty css                            */import{c as g}from"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import{S as U}from"./SearchIcon-d10bf173.js";import{I as re}from"./IconButton-9740043b.js";import"./_commonjsHelpers-042e6b4d.js";import"./Paragraph-12e09905.js";import"./typography.style.css-66a1d45e.js";import"./Spinner-4fe984f5.js";var te=g({defaultClassName:"_1dipjr50",variantClassNames:{border:{black:"_1dipjr51",grey:"_1dipjr52"},error:{true:"_1dipjr53"},disabled:{true:"_1dipjr54",false:"_1dipjr55"},withEndAdornment:{true:"_1dipjr56",false:"_1dipjr57"},bRadius:{8:"_1dipjr58",10:"_1dipjr59"}},defaultVariants:{border:"grey",bRadius:10},compoundVariants:[]}),se="_1dipjr5b",ne="_1dipjr5c",le="_1dipjr5a",ie=g({defaultClassName:"_1dipjr5h",variantClassNames:{variant:{simple:"_1dipjr5i",focused:"_1dipjr5j"},disabled:{true:"_1dipjr5k",false:"_1dipjr5l"},withIcon:{true:"_1dipjr5m"},bRadius:{8:"_1dipjr5n",10:"_1dipjr5o"}},defaultVariants:{bRadius:10},compoundVariants:[]}),oe=g({defaultClassName:"_1dipjr5d",variantClassNames:{variant:{simple:"_1dipjr5e",focused:"_1dipjr5f"},disabled:{true:"_1dipjr5g"}},defaultVariants:{},compoundVariants:[]});const b=({errorText:o,className:$,label:z,onFocus:m,onBlur:d,disabled:e=!1,value:c,border:G,endAdornment:p,endIcon:u,bRadius:N,containerClassName:J,inputRef:P,dataSAId:Q,...X})=>{const[j,v]=F.useState(c?"focused":"simple"),E=F.useId(),Y=f=>{v("focused"),m==null||m(f)},Z=f=>{c||v("simple"),d==null||d(f)};return React.createElement("div",{className:$},React.createElement("div",{className:ee(te({disabled:e,error:!!o,border:G,withEndAdornment:!!p,bRadius:N}),J),"data-sa-id":Q},React.createElement("div",{className:le},React.createElement("label",{htmlFor:E,className:oe({variant:j,disabled:e})},z),React.createElement("input",{className:ie({disabled:e,variant:j,withIcon:!!u,bRadius:N}),onFocus:Y,onBlur:Z,disabled:e,value:c,ref:P,...X,id:E})),p?React.createElement("div",{className:se},p):null,u?React.createElement("div",{className:ne},u):null),React.createElement(ae,{errorText:o}))};try{b.displayName="TextField",b.__docgenInfo={description:"",displayName:"TextField",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"ReactNode"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"enum",value:[{value:'"black"'},{value:'"grey"'}]}},endAdornment:{defaultValue:null,description:"",name:"endAdornment",required:!1,type:{name:"ReactNode"}},endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"ReactNode"}},bRadius:{defaultValue:null,description:"",name:"bRadius",required:!1,type:{name:"enum",value:[{value:"8"},{value:"10"}]}},containerClassName:{defaultValue:null,description:"",name:"containerClassName",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"RefObject<HTMLInputElement>"}},dataSAId:{defaultValue:null,description:"",name:"dataSAId",required:!1,type:{name:"string"}}}}}catch{}const ve={title:"UI/Inputs/TextField",component:b,tags:["autodocs"],argTypes:{disabled:{type:"boolean"}}},a={args:{label:"First Name",name:"first_name",placeholder:"write"}},r={args:{label:"First Name",name:"first_name",endIcon:_.createElement(U,null)}},t={args:{label:"First Name",name:"first_name",endAdornment:_.createElement(re,null,_.createElement(U,null))}},s={args:{label:"First Name",name:"first_name",placeholder:"write",value:"Konstantin"}},n={args:{label:"First Name",name:"first_name",disabled:!0}},l={args:{label:"First Name",name:"first_name",errorText:"Error message lorem ipsum"}},i={args:{label:"First Name",name:"first_name",value:"AAAAAAAA",errorText:"Error message lorem ipsum"}};var A,I,R;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    name: 'first_name',
    placeholder: 'write'
  }
}`,...(R=(I=a.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var y,h,S;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    name: 'first_name',
    endIcon: <SearchIcon />
  }
}`,...(S=(h=r.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var V,x,T;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    name: 'first_name',
    endAdornment: <IconButton>
        <SearchIcon />
      </IconButton>
  }
}`,...(T=(x=t.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var q,w,C;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    name: 'first_name',
    placeholder: 'write',
    value: 'Konstantin'
  }
}`,...(C=(w=s.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var B,W,k;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    name: 'first_name',
    disabled: true
  }
}`,...(k=(W=n.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var D,K,L;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    name: 'first_name',
    errorText: 'Error message lorem ipsum'
  }
}`,...(L=(K=l.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var O,H,M;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    name: 'first_name',
    value: 'AAAAAAAA',
    errorText: 'Error message lorem ipsum'
  }
}`,...(M=(H=i.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};const Ee=["Base","WithIcon","WithIconButton","Filled","Disabled","Error","ErrorFilled"];export{a as Base,n as Disabled,l as Error,i as ErrorFilled,s as Filled,r as WithIcon,t as WithIconButton,Ee as __namedExportsOrder,ve as default};
//# sourceMappingURL=TextField.stories-946be0d3.js.map
