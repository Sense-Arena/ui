import{r as n,R as s}from"./index-f1f749bf.js";import{u as $,a as ee,D as ne}from"./DropdownMenu-149c68a2.js";import{c as se}from"./clsx-9a51c995.js";/* empty css                            */import{c as re}from"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import{a as ae,A as oe}from"./ArrowUpSLine-4bfd8801.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-23dc7436.js";import"./index-96c5f47c.js";var te=re({defaultClassName:"_16ov49e0",variantClassNames:{border:{black:"_16ov49e1",grey:"_16ov49e2"},disabled:{true:"_16ov49e3"},error:{true:"_16ov49e4"},opened:{true:"_16ov49e5"},fullWidth:{true:"_16ov49e6"},size:{s:"_16ov49e7",m:"_16ov49e8",l:"_16ov49e9"},bRadius:{8:"_16ov49ea",10:"_16ov49eb"}},defaultVariants:{size:"m",bRadius:10},compoundVariants:[]}),O="_16ov49ed",le="_16ov49ec";function y({disabled:r,onSelect:a,selectedOptionLabel:M,options:j,error:G,className:J,selectedOption:K,border:P,fullWidth:Q,size:X,bRadius:g,dataSAId:S}){const[p,k]=n.useState(!1),v=n.useRef(null),m=n.useRef(null),Y=n.useCallback(()=>{r||k(b=>!b)},[r]),f=n.useCallback(()=>k(!1),[]);$("keyup",f,"Escape"),ee(v,f,m);const Z=n.useCallback(b=>{a==null||a(b),f()},[a]);return s.createElement("div",{onClick:Y,className:se(te({disabled:r,error:G,opened:p,border:P,fullWidth:Q,size:X,bRadius:g}),J),ref:m,"data-sa-id":S},s.createElement("span",{className:le},M),s.createElement("div",null,p?s.createElement(ae,{className:O}):s.createElement(oe,{className:O})),s.createElement(ne,{menuRef:v,isOpen:p,mainRef:m,selectedOption:K,selectItem:Z,options:j,bRadius:g,dataSAId:S}))}try{y.displayName="Dropdown",y.__docgenInfo={description:"",displayName:"Dropdown",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((selected: TOption) => void)"}},selectedOptionLabel:{defaultValue:null,description:"",name:"selectedOptionLabel",required:!0,type:{name:"ReactNode"}},selectedOption:{defaultValue:null,description:"",name:"selectedOption",required:!0,type:{name:"TOption"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ title: string; value: TOption; }[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"enum",value:[{value:'"black"'},{value:'"grey"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},bRadius:{defaultValue:null,description:"",name:"bRadius",required:!1,type:{name:"enum",value:[{value:"8"},{value:"10"}]}},dataSAId:{defaultValue:null,description:"",name:"dataSAId",required:!1,type:{name:"string"}}}}}catch{}const ge={title:"UI/Dropdown",component:y,tags:["autodocs"],argTypes:{disabled:{type:"boolean"}}},e=[{title:"1",value:"1"},{title:"2",value:"2"},{title:"3",value:"3"},{title:"4",value:"4"},{title:"5",value:"5"}],o={args:{selectedOption:"1",selectedOptionLabel:"1",onSelect:console.debug,options:e,border:"grey"}},t={args:{selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey",onSelect:console.debug,options:e}},l={args:{selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onSelect:console.debug,options:e,disabled:!0}},c={args:{selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onSelect:console.debug,options:e,error:!0,border:"grey"}},d={args:{selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onSelect:console.debug,options:e,border:"grey",size:"s"}},i={args:{selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onSelect:console.debug,options:e,border:"grey",size:"l"}},u={args:{selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onSelect:console.debug,options:e,border:"grey",size:"l",fullWidth:!0}};var A,H,_;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    selectedOption: '1',
    selectedOptionLabel: '1',
    onSelect: console.debug,
    options,
    border: 'grey'
  }
}`,...(_=(H=o.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var L,V,q;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    selectedOption: '1',
    selectedOptionLabel: 'Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey',
    onSelect: console.debug,
    options
  }
}`,...(q=(V=t.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var E,N,R;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    selectedOption: '1',
    selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
    onSelect: console.debug,
    options,
    disabled: true
  }
}`,...(R=(N=l.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var z,D,w;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    selectedOption: '1',
    selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
    onSelect: console.debug,
    options,
    error: true,
    border: 'grey'
  }
}`,...(w=(D=c.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var h,C,W;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    selectedOption: '1',
    selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
    onSelect: console.debug,
    options,
    border: 'grey',
    size: 's'
  }
}`,...(W=(C=d.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var x,I,T;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    selectedOption: '1',
    selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
    onSelect: console.debug,
    options,
    border: 'grey',
    size: 'l'
  }
}`,...(T=(I=i.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var F,B,U;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    selectedOption: '1',
    selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
    onSelect: console.debug,
    options,
    border: 'grey',
    size: 'l',
    fullWidth: true
  }
}`,...(U=(B=u.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};const Se=["Base","LongValue","Disabled","Error","Small","Large","FullWidth"];export{o as Base,l as Disabled,c as Error,u as FullWidth,i as Large,t as LongValue,d as Small,Se as __namedExportsOrder,ge as default};
//# sourceMappingURL=Dropdown.stories-a0fa1696.js.map
