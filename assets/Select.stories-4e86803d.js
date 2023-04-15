import{r as t,R as e}from"./index-f1f749bf.js";import{u as oe,a as ce,D as ie}from"./DropdownMenu-149c68a2.js";import{c as de}from"./clsx-9a51c995.js";import{F as ue}from"./FieldError-a586e932.js";/* empty css                            */import{c as q}from"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import{a as pe,A as me}from"./ArrowUpSLine-4bfd8801.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-23dc7436.js";import"./index-96c5f47c.js";import"./Paragraph-ec332654.js";import"./typography.style.css-542db6e3.js";var r={iconStyle:"f5kloec",label:"f5kloeb",text:q({defaultClassName:"f5kloe9",variantClassNames:{withLabel:{true:"f5kloea"}},defaultVariants:{},compoundVariants:[]}),container:q({defaultClassName:"f5kloe0",variantClassNames:{border:{black:"f5kloe1",grey:"f5kloe2"},disabled:{true:"f5kloe3"},error:{true:"f5kloe4"},opened:{true:"f5kloe5"},fullWidth:{true:"f5kloe6"},bRadius:{8:"f5kloe7",10:"f5kloe8"}},defaultVariants:{bRadius:10,border:"grey"},compoundVariants:[]}),select:"f5kloed"};function S({disabled:a,onChangeSelect:l,selectedOptionLabel:o,containerClassName:s,options:k,errorText:h,className:ae,selectedOption:c,border:te,fullWidth:le,bRadius:L,label:O,dataSAId:i,...V}){const[v,E]=t.useState(!1),N=t.useRef(null),A=t.useRef(null),se=t.useCallback(()=>{a||E(C=>!C)},[a]),H=t.useCallback(()=>E(!1),[]);oe("keyup",H,"Escape"),ce(N,H,A);const re=t.useCallback(C=>{l==null||l(C,V.name),H()},[l]),T=typeof c=="number"||typeof c=="string"?c:String(c);return e.createElement("div",{className:ae},e.createElement("select",{"data-sa-id":i&&`${i}-select`,disabled:!0,value:T,className:r.select,...V},e.createElement("option",{value:T},o)),e.createElement("div",{onClick:se,className:de(r.container({disabled:a,error:!!h,opened:v,border:te,fullWidth:le,bRadius:L}),s),ref:A,"data-sa-id":i},O?e.createElement("span",{className:r.label},O):null,e.createElement("span",{className:r.text({withLabel:!!O})},o),e.createElement("div",null,v?e.createElement(pe,{className:r.iconStyle}):e.createElement(me,{className:r.iconStyle})),e.createElement(ie,{menuRef:N,isOpen:v,mainRef:A,selectedOption:c,selectItem:re,options:k,bRadius:L,dataSAId:i})),e.createElement(ue,{errorText:h}))}try{S.displayName="Select",S.__docgenInfo={description:"",displayName:"Select",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"ReactNode"}},onChangeSelect:{defaultValue:null,description:"",name:"onChangeSelect",required:!1,type:{name:"((selected: TOption, name?: string) => void)"}},selectedOptionLabel:{defaultValue:null,description:"",name:"selectedOptionLabel",required:!0,type:{name:"string"}},selectedOption:{defaultValue:null,description:"",name:"selectedOption",required:!0,type:{name:"TOption"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ title: string; value: TOption; }[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"enum",value:[{value:'"black"'},{value:'"grey"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},bRadius:{defaultValue:null,description:"",name:"bRadius",required:!1,type:{name:"enum",value:[{value:"8"},{value:"10"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},containerClassName:{defaultValue:null,description:"",name:"containerClassName",required:!1,type:{name:"string"}},dataSAId:{defaultValue:null,description:"",name:"dataSAId",required:!1,type:{name:"string"}}}}}catch{}const Ve={title:"UI/Inputs/Select",component:S,tags:["autodocs"],argTypes:{disabled:{type:"boolean"}}},n=[{title:"1",value:"1"},{title:"2",value:"2"},{title:"3",value:"3"},{title:"4",value:"4"},{title:"5",value:"5"}],fe=()=>{var o;const[a,l]=t.useState(n[0].value);return e.createElement(S,{border:"grey",fullWidth:!0,name:"controlled",selectedOption:a,selectedOptionLabel:((o=n.find(s=>s.value===a))==null?void 0:o.title)??"Select option",options:n,onChangeSelect:(s,k)=>{l(s),console.log(s),console.log(k)}})},d={args:{selectedOption:"1",selectedOptionLabel:"1",onChangeSelect:console.debug,options:n,border:"grey",label:"Title"}},u={args:{selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey",onChangeSelect:console.debug,label:"Title",options:n}},p={args:{selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onChangeSelect:console.debug,label:"Title",options:n,disabled:!0}},m={args:{selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onChangeSelect:console.debug,label:"Title",options:n,errorText:"Error message text",border:"grey"}},f={args:{selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onChangeSelect:console.debug,options:n,border:"grey"}},g={args:{selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onChangeSelect:console.debug,options:n,border:"grey"}},b={args:{selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onChangeSelect:console.debug,options:n,border:"grey",fullWidth:!0,name:"select"}},y=fe.bind({});var _,x,R;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    selectedOption: '1',
    selectedOptionLabel: '1',
    onChangeSelect: console.debug,
    options,
    border: 'grey',
    label: 'Title'
  }
}`,...(R=(x=d.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var W,w,D;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
//# sourceMappingURL=Select.stories-4e86803d.js.map
