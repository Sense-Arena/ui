import{r as t}from"./index-73a32e48.js";import{a as h,j as e}from"./jsx-runtime-7c09b6e1.js";import{u as _,a as N,D as E}from"./DropdownMenu-b3e1e405.js";import{c as q}from"./clsx-9a51c995.js";import{F as R}from"./FieldError-1b018ab9.js";/* empty css                            */import{c as A}from"./vanilla-extract-recipes-createRuntimeFn.esm-d30eb010.js";import{a as W,A as D}from"./ArrowUpSLine-326a8f7e.js";import"./es.object.get-own-property-descriptor-d5205e32.js";import"./react-spring-web.esm-1363debf.js";import"./index-30ece529.js";import"./Paragraph-ff822137.js";import"./typography.style.css-b45ec07e.js";var r={iconStyle:"f5kloec",label:"f5kloeb",text:A({defaultClassName:"f5kloe9",variantClassNames:{withLabel:{true:"f5kloea"}},defaultVariants:{},compoundVariants:[]}),container:A({defaultClassName:"f5kloe0",variantClassNames:{border:{black:"f5kloe1",grey:"f5kloe2"},disabled:{true:"f5kloe3"},error:{true:"f5kloe4"},opened:{true:"f5kloe5"},fullWidth:{true:"f5kloe6"},bRadius:{8:"f5kloe7",10:"f5kloe8"}},defaultVariants:{bRadius:10,border:"grey"},compoundVariants:[]}),select:"f5kloed"};function c({disabled:l,onChangeSelect:a,selectedOptionLabel:i,containerClassName:s,options:p,errorText:S,className:T,selectedOption:d,border:x,fullWidth:H,bRadius:k,label:m,dataSAId:u,...L}){const[f,O]=t.exports.useState(!1),v=t.exports.useRef(null),b=t.exports.useRef(null),V=t.exports.useCallback(()=>{l||O(g=>!g)},[l]),y=t.exports.useCallback(()=>O(!1),[]);_("keyup",y,"Escape"),N(v,y,b);const B=t.exports.useCallback(g=>{a==null||a(g,L.name),y()},[a]),C=typeof d=="number"||typeof d=="string"?d:String(d);return h("div",{className:T,children:[e("select",{"data-sa-id":u&&`${u}-select`,disabled:!0,value:C,className:r.select,...L,children:e("option",{value:C,children:i})}),h("div",{onClick:V,className:q(r.container({disabled:l,error:!!S,opened:f,border:x,fullWidth:H,bRadius:k}),s),ref:b,"data-sa-id":u,children:[m?e("span",{className:r.label,children:m}):null,e("span",{className:r.text({withLabel:!!m}),children:i}),e("div",{children:f?e(W,{className:r.iconStyle}):e(D,{className:r.iconStyle})}),e(E,{menuRef:v,isOpen:f,mainRef:b,selectedOption:d,selectItem:B,options:p,size:"l",bRadius:k,dataSAId:u})]}),e(R,{errorText:S})]})}try{c.displayName="Select",c.__docgenInfo={description:"",displayName:"Select",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"ReactNode"}},onChangeSelect:{defaultValue:null,description:"",name:"onChangeSelect",required:!1,type:{name:"((selected: TOption, name?: string | undefined) => void) | undefined"}},selectedOptionLabel:{defaultValue:null,description:"",name:"selectedOptionLabel",required:!0,type:{name:"string"}},selectedOption:{defaultValue:null,description:"",name:"selectedOption",required:!0,type:{name:"TOption"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ title: string; value: TOption; }[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"black"'},{value:'"grey"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean | undefined"}},bRadius:{defaultValue:null,description:"",name:"bRadius",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"8"},{value:"10"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | undefined"}},containerClassName:{defaultValue:null,description:"",name:"containerClassName",required:!1,type:{name:"string | undefined"}},dataSAId:{defaultValue:null,description:"",name:"dataSAId",required:!1,type:{name:"string | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/inputs/Select.tsx#Select"]={docgenInfo:c.__docgenInfo,name:"Select",path:"src/components/inputs/Select.tsx#Select"})}catch{}const ae={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{base:{startLoc:{col:48,line:38},endLoc:{col:76,line:38},startBody:{col:48,line:38},endBody:{col:76,line:38}},"long-value":{startLoc:{col:48,line:38},endLoc:{col:76,line:38},startBody:{col:48,line:38},endBody:{col:76,line:38}},disabled:{startLoc:{col:48,line:38},endLoc:{col:76,line:38},startBody:{col:48,line:38},endBody:{col:76,line:38}},error:{startLoc:{col:48,line:38},endLoc:{col:76,line:38},startBody:{col:48,line:38},endBody:{col:76,line:38}},small:{startLoc:{col:48,line:38},endLoc:{col:76,line:38},startBody:{col:48,line:38},endBody:{col:76,line:38}},large:{startLoc:{col:48,line:38},endLoc:{col:76,line:38},startBody:{col:48,line:38},endBody:{col:76,line:38}},"full-width":{startLoc:{col:48,line:38},endLoc:{col:76,line:38},startBody:{col:48,line:38},endBody:{col:76,line:38}},controlled:{startLoc:{col:58,line:40},endLoc:{col:1,line:57},startBody:{col:58,line:40},endBody:{col:1,line:57}}}}},title:"UI/Inputs/Select",component:c,argTypes:{disabled:{type:"boolean"}}},n=[{title:"1",value:"1"},{title:"2",value:"2"},{title:"3",value:"3"},{title:"4",value:"4"},{title:"5",value:"5"}],o=l=>e(c,{...l}),F=()=>{var i;const[l,a]=t.exports.useState(n[0].value);return e(c,{border:"grey",fullWidth:!0,name:"controlled",selectedOption:l,selectedOptionLabel:((i=n.find(s=>s.value===l))==null?void 0:i.title)??"Select option",options:n,onChangeSelect:(s,p)=>{a(s),console.log(s),console.log(p)}})},w=o.bind({});w.args={selectedOption:"1",selectedOptionLabel:"1",onChangeSelect:console.debug,options:n,border:"grey",label:"Title"};const I=o.bind({});I.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey",onChangeSelect:console.debug,label:"Title",options:n};const M=o.bind({});M.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onChangeSelect:console.debug,label:"Title",options:n,disabled:!0};const j=o.bind({});j.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onChangeSelect:console.debug,label:"Title",options:n,errorText:"Error message text",border:"grey"};const U=o.bind({});U.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onChangeSelect:console.debug,options:n,border:"grey"};const K=o.bind({});K.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onChangeSelect:console.debug,options:n,border:"grey"};const Y=o.bind({});Y.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onChangeSelect:console.debug,options:n,border:"grey",fullWidth:!0,name:"select"};const se=F.bind({}),re=["Base","LongValue","Disabled","Error","Small","Large","FullWidth","Controlled"];export{w as Base,se as Controlled,M as Disabled,j as Error,Y as FullWidth,K as Large,I as LongValue,U as Small,re as __namedExportsOrder,ae as default};
//# sourceMappingURL=Select.stories-13f8d8c3.js.map
