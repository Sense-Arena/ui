import{r as t,R as e}from"./index-4g5l5LRQ.js";import{u as se,a as ce,D as ie}from"./DropdownMenu-wVv4mA10.js";import{c as de}from"./clsx-4u0nZvpz.js";import{F as ue}from"./FieldError-cofjZQMh.js";/* empty css                            */import{c as q}from"./createRuntimeFn-f8e161c6.esm-AdCGDnTf.js";import{A as pe,a as me}from"./ArrowUpSLine-faGQf4Hn.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./react-spring_web.modern-IyEJQO88.js";import"./index-jmm5gWkb.js";import"./Paragraph-WeHltDAf.js";import"./typography.style.css--5v0yray.js";var o={iconStyle:"f5kloec",label:"f5kloeb",text:q({defaultClassName:"f5kloe9",variantClassNames:{withLabel:{true:"f5kloea"}},defaultVariants:{},compoundVariants:[]}),container:q({defaultClassName:"f5kloe0",variantClassNames:{border:{black:"f5kloe1",grey:"f5kloe2"},disabled:{true:"f5kloe3"},error:{true:"f5kloe4"},opened:{true:"f5kloe5"},fullWidth:{true:"f5kloe6"},bRadius:{8:"f5kloe7",10:"f5kloe8"}},defaultVariants:{bRadius:10,border:"grey"},compoundVariants:[]}),select:"f5kloed"};function S({disabled:a,onChangeSelect:l,selectedOptionLabel:s,containerClassName:r,options:k,errorText:h,className:ae,selectedOption:c,border:te,fullWidth:le,bRadius:L,label:O,dataSAId:i,...V}){const[v,E]=t.useState(!1),N=t.useRef(null),A=t.useRef(null),re=t.useCallback(()=>{a||E(C=>!C)},[a]),H=t.useCallback(()=>E(!1),[]);se("keyup",H,"Escape"),ce(N,H,A);const oe=t.useCallback(C=>{l==null||l(C,V.name),H()},[l]),T=typeof c=="number"||typeof c=="string"?c:String(c);return e.createElement("div",{className:ae},e.createElement("select",{"data-sa-id":i&&`${i}-select`,disabled:!0,value:T,className:o.select,...V},e.createElement("option",{value:T},s)),e.createElement("div",{onClick:re,className:de(o.container({disabled:a,error:!!h,opened:v,border:te,fullWidth:le,bRadius:L}),r),ref:A,"data-sa-id":i},O?e.createElement("span",{className:o.label},O):null,e.createElement("span",{className:o.text({withLabel:!!O})},s),e.createElement("div",null,v?e.createElement(pe,{className:o.iconStyle}):e.createElement(me,{className:o.iconStyle})),e.createElement(ie,{menuRef:N,isOpen:v,mainRef:A,selectedOption:c,selectItem:oe,options:k,bRadius:L,dataSAId:i})),e.createElement(ue,{errorText:h}))}try{S.displayName="Select",S.__docgenInfo={description:"",displayName:"Select",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"ReactNode"}},onChangeSelect:{defaultValue:null,description:"",name:"onChangeSelect",required:!1,type:{name:"((selected: TOption, name?: string) => void)"}},selectedOptionLabel:{defaultValue:null,description:"",name:"selectedOptionLabel",required:!0,type:{name:"string"}},selectedOption:{defaultValue:null,description:"",name:"selectedOption",required:!0,type:{name:"TOption"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ title: string; value: TOption; }[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"enum",value:[{value:'"black"'},{value:'"grey"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},bRadius:{defaultValue:null,description:"",name:"bRadius",required:!1,type:{name:"enum",value:[{value:"8"},{value:"10"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},containerClassName:{defaultValue:null,description:"",name:"containerClassName",required:!1,type:{name:"string"}},dataSAId:{defaultValue:null,description:"",name:"dataSAId",required:!1,type:{name:"string"}}}}}catch{}const Ve={title:"UI/Inputs/Select",component:S,tags:["autodocs"],argTypes:{disabled:{type:"boolean"}}},n=[{title:"1",value:"1"},{title:"2",value:"2"},{title:"3",value:"3"},{title:"4",value:"4"},{title:"5",value:"5"}],fe=()=>{var s;const[a,l]=t.useState(n[0].value);return e.createElement(S,{border:"grey",fullWidth:!0,name:"controlled",selectedOption:a,selectedOptionLabel:((s=n.find(r=>r.value===a))==null?void 0:s.title)??"Select option",options:n,onChangeSelect:(r,k)=>{l(r),console.log(r),console.log(k)}})},d={args:{selectedOption:"1",selectedOptionLabel:"1",onChangeSelect:console.debug,options:n,border:"grey",label:"Title"}},u={args:{selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey",onChangeSelect:console.debug,label:"Title",options:n}},p={args:{selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onChangeSelect:console.debug,label:"Title",options:n,disabled:!0}},m={args:{selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onChangeSelect:console.debug,label:"Title",options:n,errorText:"Error message text",border:"grey"}},f={args:{selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onChangeSelect:console.debug,options:n,border:"grey"}},g={args:{selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onChangeSelect:console.debug,options:n,border:"grey"}},b={args:{selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onChangeSelect:console.debug,options:n,border:"grey",fullWidth:!0,name:"select"}},y=fe.bind({});var x,R,_;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    selectedOption: '1',
    selectedOptionLabel: '1',
    onChangeSelect: console.debug,
    options,
    border: 'grey',
    label: 'Title'
  }
}`,...(_=(R=d.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var W,w,D;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    selectedOption: '1',
    selectedOptionLabel: 'Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey',
    onChangeSelect: console.debug,
    label: 'Title',
    options
  }
}`,...(D=(w=u.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var F,B,I;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    selectedOption: '1',
    selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
    onChangeSelect: console.debug,
    label: 'Title',
    options,
    disabled: true
  }
}`,...(I=(B=p.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var U,M,$;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    selectedOption: '1',
    selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
    onChangeSelect: console.debug,
    label: 'Title',
    options,
    errorText: 'Error message text',
    border: 'grey'
  }
}`,...($=(M=m.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var j,z,G;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    selectedOption: '1',
    selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
    onChangeSelect: console.debug,
    options,
    border: 'grey'
  }
}`,...(G=(z=f.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,K,P;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    selectedOption: '1',
    selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
    onChangeSelect: console.debug,
    options,
    border: 'grey'
  }
}`,...(P=(K=g.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var Q,X,Y;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    selectedOption: '1',
    selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
    onChangeSelect: console.debug,
    options,
    border: 'grey',
    fullWidth: true,
    name: 'select'
  }
}`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(options[0].value);
  return <Select border="grey" fullWidth name="controlled" selectedOption={value} selectedOptionLabel={options.find(item => item.value === value)?.title ?? 'Select option'} options={options} onChangeSelect={(value, name) => {
    setValue(value);
    console.log(value);
    console.log(name);
  }} />;
}`,...(ne=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};const Ee=["Base","LongValue","Disabled","Error","Small","Large","FullWidth","Controlled"];export{d as Base,y as Controlled,p as Disabled,m as Error,b as FullWidth,g as Large,u as LongValue,f as Small,Ee as __namedExportsOrder,Ve as default};
//# sourceMappingURL=Select.stories-SVvAF6iG.js.map
