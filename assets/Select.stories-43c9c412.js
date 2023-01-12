import{r as t}from"./index-73a32e48.js";import{a as C,j as e}from"./jsx-runtime-7c09b6e1.js";import{u as B,a as _,D as N}from"./DropdownMenu-b3e1e405.js";import{c as E}from"./clsx-9a51c995.js";import{F as R}from"./FieldError-1b018ab9.js";/* empty css                            */import{c as h}from"./vanilla-extract-recipes-createRuntimeFn.esm-d30eb010.js";import{a as q,A as W}from"./ArrowUpSLine-326a8f7e.js";import"./es.object.get-own-property-descriptor-d5205e32.js";import"./react-spring-web.esm-1363debf.js";import"./index-30ece529.js";import"./Paragraph-ff822137.js";import"./typography.style.css-b45ec07e.js";var r={iconStyle:"f5kloec",label:"f5kloeb",text:h({defaultClassName:"f5kloe9",variantClassNames:{withLabel:{true:"f5kloea"}},defaultVariants:{},compoundVariants:[]}),container:h({defaultClassName:"f5kloe0",variantClassNames:{border:{black:"f5kloe1",grey:"f5kloe2"},disabled:{true:"f5kloe3"},error:{true:"f5kloe4"},opened:{true:"f5kloe5"},fullWidth:{true:"f5kloe6"},bRadius:{8:"f5kloe7",10:"f5kloe8"}},defaultVariants:{bRadius:10,border:"grey"},compoundVariants:[]}),select:"f5kloed"};function c({disabled:l,onChangeSelect:a,selectedOptionLabel:i,containerClassName:s,options:u,errorText:g,className:A,selectedOption:d,border:T,fullWidth:x,bRadius:S,label:p,...k}){const[m,L]=t.exports.useState(!1),O=t.exports.useRef(null),f=t.exports.useRef(null),H=t.exports.useCallback(()=>{l||L(y=>!y)},[l]),b=t.exports.useCallback(()=>L(!1),[]);B("keyup",b,"Escape"),_(O,b,f);const V=t.exports.useCallback(y=>{a==null||a(y,k.name),b()},[a]),v=typeof d=="number"||typeof d=="string"?d:String(d);return C("div",{className:A,children:[e("select",{disabled:!0,value:v,className:r.select,...k,children:e("option",{value:v,children:i})}),C("div",{onClick:H,className:E(r.container({disabled:l,error:!!g,opened:m,border:T,fullWidth:x,bRadius:S}),s),ref:f,children:[p?e("span",{className:r.label,children:p}):null,e("span",{className:r.text({withLabel:!!p}),children:i}),e("div",{children:m?e(q,{className:r.iconStyle}):e(W,{className:r.iconStyle})}),e(N,{menuRef:O,isOpen:m,mainRef:f,selectedOption:d,selectItem:V,options:u,size:"l",bRadius:S})]}),e(R,{errorText:g})]})}try{c.displayName="Select",c.__docgenInfo={description:"",displayName:"Select",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"ReactNode"}},onChangeSelect:{defaultValue:null,description:"",name:"onChangeSelect",required:!1,type:{name:"((selected: TOption, name?: string | undefined) => void) | undefined"}},selectedOptionLabel:{defaultValue:null,description:"",name:"selectedOptionLabel",required:!0,type:{name:"string"}},selectedOption:{defaultValue:null,description:"",name:"selectedOption",required:!0,type:{name:"TOption"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ title: string; value: TOption; }[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"black"'},{value:'"grey"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean | undefined"}},bRadius:{defaultValue:null,description:"",name:"bRadius",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"8"},{value:"10"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},containerClassName:{defaultValue:null,description:"",name:"containerClassName",required:!1,type:{name:"string | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/inputs/Select.tsx#Select"]={docgenInfo:c.__docgenInfo,name:"Select",path:"src/components/inputs/Select.tsx#Select"})}catch{}const oe={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from '../../components/inputs';
import { useState } from 'react';

export default {
  title: 'UI/Inputs/Select',
  component: Select,
  argTypes: {
    disabled: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof Select>;

const options = [
  {
    title: '1',
    value: '1',
  },
  {
    title: '2',
    value: '2',
  },
  {
    title: '3',
    value: '3',
  },
  {
    title: '4',
    value: '4',
  },
  {
    title: '5',
    value: '5',
  },
];

const Template: ComponentStory<typeof Select> = args => <Select {...args} />;

const ControlledTemplate: ComponentStory<typeof Select> = () => {
  const [value, setValue] = useState(options[0].value);
  return (
    <Select
      border="grey"
      fullWidth
      name="controlled"
      selectedOption={value}
      selectedOptionLabel={options.find(item => item.value === value)?.title ?? 'Select option'}
      options={options}
      onChangeSelect={(value, name) => {
        setValue(value);
        console.log(value);
        console.log(name);
      }}
    />
  );
};

export const Base = Template.bind({});
Base.args = {
  selectedOption: '1',
  selectedOptionLabel: '1',
  onChangeSelect: console.debug,
  options,
  border: 'grey',
  label: 'Title',
};
export const LongValue = Template.bind({});
LongValue.args = {
  selectedOption: '1',
  selectedOptionLabel:
    'Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey',
  onChangeSelect: console.debug,
  label: 'Title',
  options,
};

export const Disabled = Template.bind({});
Disabled.args = {
  selectedOption: '1',
  selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
  onChangeSelect: console.debug,
  label: 'Title',
  options,
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  selectedOption: '1',
  selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
  onChangeSelect: console.debug,
  label: 'Title',
  options,
  errorText: 'Error message text',
  border: 'grey',
};

export const Small = Template.bind({});
Small.args = {
  selectedOption: '1',
  selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
  onChangeSelect: console.debug,
  options,
  border: 'grey',
};

export const Large = Template.bind({});
Large.args = {
  selectedOption: '1',
  selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
  onChangeSelect: console.debug,
  options,
  border: 'grey',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  selectedOption: '1',
  selectedOptionLabel: 'Sense Arena Hockey dsfsdkf ',
  onChangeSelect: console.debug,
  options,
  border: 'grey',
  fullWidth: true,
  name: 'select',
};

export const Controlled = ControlledTemplate.bind({});
`,locationsMap:{base:{startLoc:{col:48,line:38},endLoc:{col:76,line:38},startBody:{col:48,line:38},endBody:{col:76,line:38}},"long-value":{startLoc:{col:48,line:38},endLoc:{col:76,line:38},startBody:{col:48,line:38},endBody:{col:76,line:38}},disabled:{startLoc:{col:48,line:38},endLoc:{col:76,line:38},startBody:{col:48,line:38},endBody:{col:76,line:38}},error:{startLoc:{col:48,line:38},endLoc:{col:76,line:38},startBody:{col:48,line:38},endBody:{col:76,line:38}},small:{startLoc:{col:48,line:38},endLoc:{col:76,line:38},startBody:{col:48,line:38},endBody:{col:76,line:38}},large:{startLoc:{col:48,line:38},endLoc:{col:76,line:38},startBody:{col:48,line:38},endBody:{col:76,line:38}},"full-width":{startLoc:{col:48,line:38},endLoc:{col:76,line:38},startBody:{col:48,line:38},endBody:{col:76,line:38}},controlled:{startLoc:{col:58,line:40},endLoc:{col:1,line:57},startBody:{col:58,line:40},endBody:{col:1,line:57}}}}},title:"UI/Inputs/Select",component:c,argTypes:{disabled:{type:"boolean"}}},n=[{title:"1",value:"1"},{title:"2",value:"2"},{title:"3",value:"3"},{title:"4",value:"4"},{title:"5",value:"5"}],o=l=>e(c,{...l}),D=()=>{var i;const[l,a]=t.exports.useState(n[0].value);return e(c,{border:"grey",fullWidth:!0,name:"controlled",selectedOption:l,selectedOptionLabel:((i=n.find(s=>s.value===l))==null?void 0:i.title)??"Select option",options:n,onChangeSelect:(s,u)=>{a(s),console.log(s),console.log(u)}})},F=o.bind({});F.args={selectedOption:"1",selectedOptionLabel:"1",onChangeSelect:console.debug,options:n,border:"grey",label:"Title"};const I=o.bind({});I.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey",onChangeSelect:console.debug,label:"Title",options:n};const w=o.bind({});w.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onChangeSelect:console.debug,label:"Title",options:n,disabled:!0};const M=o.bind({});M.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onChangeSelect:console.debug,label:"Title",options:n,errorText:"Error message text",border:"grey"};const j=o.bind({});j.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onChangeSelect:console.debug,options:n,border:"grey"};const U=o.bind({});U.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onChangeSelect:console.debug,options:n,border:"grey"};const K=o.bind({});K.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onChangeSelect:console.debug,options:n,border:"grey",fullWidth:!0,name:"select"};const ae=D.bind({}),se=["Base","LongValue","Disabled","Error","Small","Large","FullWidth","Controlled"];export{F as Base,ae as Controlled,w as Disabled,M as Error,K as FullWidth,U as Large,I as LongValue,j as Small,se as __namedExportsOrder,oe as default};
//# sourceMappingURL=Select.stories-43c9c412.js.map
