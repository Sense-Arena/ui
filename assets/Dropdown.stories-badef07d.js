import{r as n}from"./index-8db94870.js";import{u as Z,a as $,D as ee}from"./DropdownMenu-90a6b195.js";import{c as ne}from"./clsx-9a51c995.js";/* empty css                            */import{c as se}from"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import{A as ae,a as re}from"./ArrowUpSLine-e41651c4.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-df04aa12.js";import"./index-8ce4a492.js";var oe=se({defaultClassName:"_16ov49e0",variantClassNames:{border:{black:"_16ov49e1",grey:"_16ov49e2"},disabled:{true:"_16ov49e3"},error:{true:"_16ov49e4"},opened:{true:"_16ov49e5"},fullWidth:{true:"_16ov49e6"},size:{s:"_16ov49e7",m:"_16ov49e8",l:"_16ov49e9"},bRadius:{8:"_16ov49ea",10:"_16ov49eb"}},defaultVariants:{size:"m",bRadius:10},compoundVariants:[]}),v="_16ov49ed",te="_16ov49ec";function b({disabled:s,onSelect:a,selectedOptionLabel:U,options:M,error:j,className:G,selectedOption:J,border:K,fullWidth:P,size:Q,bRadius:y,dataSAId:g}){const[u,S]=n.useState(!1),k=n.useRef(null),p=n.useRef(null),X=n.useCallback(()=>{s||S(f=>!f)},[s]),m=n.useCallback(()=>S(!1),[]);Z("keyup",m,"Escape"),$(k,m,p);const Y=n.useCallback(f=>{a==null||a(f),m()},[a]);return React.createElement("div",{onClick:X,className:ne(oe({disabled:s,error:j,opened:u,border:K,fullWidth:P,size:Q,bRadius:y}),G),ref:p,"data-sa-id":g},React.createElement("span",{className:te},U),React.createElement("div",null,u?React.createElement(ae,{className:v}):React.createElement(re,{className:v})),React.createElement(ee,{menuRef:k,isOpen:u,mainRef:p,selectedOption:J,selectItem:Y,options:M,bRadius:y,dataSAId:g}))}try{b.displayName="Dropdown",b.__docgenInfo={description:"",displayName:"Dropdown",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((selected: TOption) => void)"}},selectedOptionLabel:{defaultValue:null,description:"",name:"selectedOptionLabel",required:!0,type:{name:"ReactNode"}},selectedOption:{defaultValue:null,description:"",name:"selectedOption",required:!0,type:{name:"TOption"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ title: string; value: TOption; }[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"enum",value:[{value:'"black"'},{value:'"grey"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},bRadius:{defaultValue:null,description:"",name:"bRadius",required:!1,type:{name:"enum",value:[{value:"8"},{value:"10"}]}},dataSAId:{defaultValue:null,description:"",name:"dataSAId",required:!1,type:{name:"string"}}}}}catch{}const ye={title:"UI/Dropdown",component:b,tags:["autodocs"],argTypes:{disabled:{type:"boolean"}}},e=[{title:"1",value:"1"},{title:"2",value:"2"},{title:"3",value:"3"},{title:"4",value:"4"},{title:"5",value:"5"}],r={args:{selectedOption:"1",selectedOptionLabel:"1",onSelect:console.debug,options:e,border:"grey"}},o={args:{selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey",onSelect:console.debug,options:e}},t={args:{selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onSelect:console.debug,options:e,disabled:!0}},l={args:{selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onSelect:console.debug,options:e,error:!0,border:"grey"}},c={args:{selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onSelect:console.debug,options:e,border:"grey",size:"s"}},d={args:{selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onSelect:console.debug,options:e,border:"grey",size:"l"}},i={args:{selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onSelect:console.debug,options:e,border:"grey",size:"l",fullWidth:!0}};var O,A,H;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    selectedOption: '1',
    selectedOptionLabel: '1',
    onSelect: console.debug,
    options,
    border: 'grey'
  }
}`,...(H=(A=r.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var _,L,V;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    selectedOption: '1',
    selectedOptionLabel: 'Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey',
    onSelect: console.debug,
    options
  }
}`,...(V=(L=o.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var R,q,E;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    selectedOption: '1',
    selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
    onSelect: console.debug,
    options,
    disabled: true
  }
}`,...(E=(q=t.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var N,z,D;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    selectedOption: '1',
    selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
    onSelect: console.debug,
    options,
    error: true,
    border: 'grey'
  }
}`,...(D=(z=l.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var w,h,C;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    selectedOption: '1',
    selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
    onSelect: console.debug,
    options,
    border: 'grey',
    size: 's'
  }
}`,...(C=(h=c.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var W,x,I;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    selectedOption: '1',
    selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
    onSelect: console.debug,
    options,
    border: 'grey',
    size: 'l'
  }
}`,...(I=(x=d.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var T,F,B;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    selectedOption: '1',
    selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
    onSelect: console.debug,
    options,
    border: 'grey',
    size: 'l',
    fullWidth: true
  }
}`,...(B=(F=i.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};const ge=["Base","LongValue","Disabled","Error","Small","Large","FullWidth"];export{r as Base,t as Disabled,l as Error,i as FullWidth,d as Large,o as LongValue,c as Small,ge as __namedExportsOrder,ye as default};
//# sourceMappingURL=Dropdown.stories-badef07d.js.map
