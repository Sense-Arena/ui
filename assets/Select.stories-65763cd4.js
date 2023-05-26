import{r as n,R as re}from"./index-8db94870.js";import{u as oe,a as ce,D as ie}from"./DropdownMenu-90a6b195.js";import{c as de}from"./clsx-9a51c995.js";import{F as ue}from"./FieldError-db9f8d2a.js";/* empty css                            */import{c as N}from"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import{A as pe,a as me}from"./ArrowUpSLine-e41651c4.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-df04aa12.js";import"./index-8ce4a492.js";import"./Paragraph-12e09905.js";import"./typography.style.css-66a1d45e.js";var s={iconStyle:"f5kloec",label:"f5kloeb",text:N({defaultClassName:"f5kloe9",variantClassNames:{withLabel:{true:"f5kloea"}},defaultVariants:{},compoundVariants:[]}),container:N({defaultClassName:"f5kloe0",variantClassNames:{border:{black:"f5kloe1",grey:"f5kloe2"},disabled:{true:"f5kloe3"},error:{true:"f5kloe4"},opened:{true:"f5kloe5"},fullWidth:{true:"f5kloe6"},bRadius:{8:"f5kloe7",10:"f5kloe8"}},defaultVariants:{bRadius:10,border:"grey"},compoundVariants:[]}),select:"f5kloed"};function y({disabled:a,onChangeSelect:t,selectedOptionLabel:r,containerClassName:l,options:S,errorText:C,className:ae,selectedOption:o,border:ne,fullWidth:te,bRadius:h,label:k,dataSAId:c,...L}){const[O,R]=n.useState(!1),V=n.useRef(null),v=n.useRef(null),le=n.useCallback(()=>{a||R(H=>!H)},[a]),A=n.useCallback(()=>R(!1),[]);oe("keyup",A,"Escape"),ce(V,A,v);const se=n.useCallback(H=>{t==null||t(H,L.name),A()},[t]),E=typeof o=="number"||typeof o=="string"?o:String(o);return React.createElement("div",{className:ae},React.createElement("select",{"data-sa-id":c&&`${c}-select`,disabled:!0,value:E,className:s.select,...L},React.createElement("option",{value:E},r)),React.createElement("div",{onClick:le,className:de(s.container({disabled:a,error:!!C,opened:O,border:ne,fullWidth:te,bRadius:h}),l),ref:v,"data-sa-id":c},k?React.createElement("span",{className:s.label},k):null,React.createElement("span",{className:s.text({withLabel:!!k})},r),React.createElement("div",null,O?React.createElement(pe,{className:s.iconStyle}):React.createElement(me,{className:s.iconStyle})),React.createElement(ie,{menuRef:V,isOpen:O,mainRef:v,selectedOption:o,selectItem:se,options:S,bRadius:h,dataSAId:c})),React.createElement(ue,{errorText:C}))}try{y.displayName="Select",y.__docgenInfo={description:"",displayName:"Select",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"ReactNode"}},onChangeSelect:{defaultValue:null,description:"",name:"onChangeSelect",required:!1,type:{name:"((selected: TOption, name?: string) => void)"}},selectedOptionLabel:{defaultValue:null,description:"",name:"selectedOptionLabel",required:!0,type:{name:"string"}},selectedOption:{defaultValue:null,description:"",name:"selectedOption",required:!0,type:{name:"TOption"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ title: string; value: TOption; }[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"enum",value:[{value:'"black"'},{value:'"grey"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},bRadius:{defaultValue:null,description:"",name:"bRadius",required:!1,type:{name:"enum",value:[{value:"8"},{value:"10"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},containerClassName:{defaultValue:null,description:"",name:"containerClassName",required:!1,type:{name:"string"}},dataSAId:{defaultValue:null,description:"",name:"dataSAId",required:!1,type:{name:"string"}}}}}catch{}const Re={title:"UI/Inputs/Select",component:y,tags:["autodocs"],argTypes:{disabled:{type:"boolean"}}},e=[{title:"1",value:"1"},{title:"2",value:"2"},{title:"3",value:"3"},{title:"4",value:"4"},{title:"5",value:"5"}],fe=()=>{var r;const[a,t]=n.useState(e[0].value);return re.createElement(y,{border:"grey",fullWidth:!0,name:"controlled",selectedOption:a,selectedOptionLabel:((r=e.find(l=>l.value===a))==null?void 0:r.title)??"Select option",options:e,onChangeSelect:(l,S)=>{t(l),console.log(l),console.log(S)}})},i={args:{selectedOption:"1",selectedOptionLabel:"1",onChangeSelect:console.debug,options:e,border:"grey",label:"Title"}},d={args:{selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey",onChangeSelect:console.debug,label:"Title",options:e}},u={args:{selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onChangeSelect:console.debug,label:"Title",options:e,disabled:!0}},p={args:{selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onChangeSelect:console.debug,label:"Title",options:e,errorText:"Error message text",border:"grey"}},m={args:{selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onChangeSelect:console.debug,options:e,border:"grey"}},f={args:{selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onChangeSelect:console.debug,options:e,border:"grey"}},g={args:{selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onChangeSelect:console.debug,options:e,border:"grey",fullWidth:!0,name:"select"}},b=fe.bind({});var T,q,_;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    selectedOption: '1',
    selectedOptionLabel: '1',
    onChangeSelect: console.debug,
    options,
    border: 'grey',
    label: 'Title'
  }
}`,...(_=(q=i.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};var x,W,w;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    selectedOption: '1',
    selectedOptionLabel: 'Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey',
    onChangeSelect: console.debug,
    label: 'Title',
    options
  }
}`,...(w=(W=d.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var D,F,B;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    selectedOption: '1',
    selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
    onChangeSelect: console.debug,
    label: 'Title',
    options,
    disabled: true
  }
}`,...(B=(F=u.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var I,U,$;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    selectedOption: '1',
    selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
    onChangeSelect: console.debug,
    label: 'Title',
    options,
    errorText: 'Error message text',
    border: 'grey'
  }
}`,...($=(U=p.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var M,j,z;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    selectedOption: '1',
    selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
    onChangeSelect: console.debug,
    options,
    border: 'grey'
  }
}`,...(z=(j=m.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var G,J,K;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    selectedOption: '1',
    selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
    onChangeSelect: console.debug,
    options,
    border: 'grey'
  }
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var P,Q,X;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    selectedOption: '1',
    selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
    onChangeSelect: console.debug,
    options,
    border: 'grey',
    fullWidth: true,
    name: 'select'
  }
}`,...(X=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(options[0].value);
  return <Select border="grey" fullWidth name="controlled" selectedOption={value} selectedOptionLabel={options.find(item => item.value === value)?.title ?? 'Select option'} options={options} onChangeSelect={(value, name) => {
    setValue(value);
    console.log(value);
    console.log(name);
  }} />;
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Ve=["Base","LongValue","Disabled","Error","Small","Large","FullWidth","Controlled"];export{i as Base,b as Controlled,u as Disabled,p as Error,g as FullWidth,f as Large,d as LongValue,m as Small,Ve as __namedExportsOrder,Re as default};
//# sourceMappingURL=Select.stories-65763cd4.js.map
