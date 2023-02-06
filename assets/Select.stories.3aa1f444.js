import{S as l}from"./TextField.5fef5bcf.js";import{j as r,r as i}from"./jsx-runtime.d3935788.js";import"./clsx.3b79bc83.js";/* empty css                            */import"./vanilla-extract-recipes-createRuntimeFn.esm.e37fdae4.js";import"./DropdownMenu.8f7fcb51.js";import"./react-spring-web.esm.c7e8fefa.js";import"./index.1464d4fa.js";import"./iframe.4f4ea7f5.js";import"./YoutubeIcon.e9bd2756.js";import"./Chip.65287bd8.js";import"./Paragraph.acfab0eb.js";const E={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{base:{startLoc:{col:48,line:38},endLoc:{col:76,line:38},startBody:{col:48,line:38},endBody:{col:76,line:38}},"long-value":{startLoc:{col:48,line:38},endLoc:{col:76,line:38},startBody:{col:48,line:38},endBody:{col:76,line:38}},disabled:{startLoc:{col:48,line:38},endLoc:{col:76,line:38},startBody:{col:48,line:38},endBody:{col:76,line:38}},error:{startLoc:{col:48,line:38},endLoc:{col:76,line:38},startBody:{col:48,line:38},endBody:{col:76,line:38}},small:{startLoc:{col:48,line:38},endLoc:{col:76,line:38},startBody:{col:48,line:38},endBody:{col:76,line:38}},large:{startLoc:{col:48,line:38},endLoc:{col:76,line:38},startBody:{col:48,line:38},endBody:{col:76,line:38}},"full-width":{startLoc:{col:48,line:38},endLoc:{col:76,line:38},startBody:{col:48,line:38},endBody:{col:76,line:38}},controlled:{startLoc:{col:58,line:40},endLoc:{col:1,line:57},startBody:{col:58,line:40},endBody:{col:1,line:57}}}}},title:"UI/Inputs/Select",component:l,argTypes:{disabled:{type:"boolean"}}},e=[{title:"1",value:"1"},{title:"2",value:"2"},{title:"3",value:"3"},{title:"4",value:"4"},{title:"5",value:"5"}],n=o=>r(l,{...o}),p=()=>{var s,a;const[o,c]=i.exports.useState(e[0].value);return r(l,{border:"grey",fullWidth:!0,name:"controlled",selectedOption:o,selectedOptionLabel:(a=(s=e.find(t=>t.value===o))==null?void 0:s.title)!=null?a:"Select option",options:e,onChangeSelect:(t,d)=>{c(t),console.log(t),console.log(d)}})},b=n.bind({});b.args={selectedOption:"1",selectedOptionLabel:"1",onChangeSelect:console.debug,options:e,border:"grey",label:"Title"};const g=n.bind({});g.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey Sense Arena Hockey",onChangeSelect:console.debug,label:"Title",options:e};const S=n.bind({});S.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onChangeSelect:console.debug,label:"Title",options:e,disabled:!0};const u=n.bind({});u.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onChangeSelect:console.debug,label:"Title",options:e,errorText:"Error message text",border:"grey"};const y=n.bind({});y.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onChangeSelect:console.debug,options:e,border:"grey"};const m=n.bind({});m.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onChangeSelect:console.debug,options:e,border:"grey"};const L=n.bind({});L.args={selectedOption:"1",selectedOptionLabel:"Sense Arena Hockey dsfsdkf ",onChangeSelect:console.debug,options:e,border:"grey",fullWidth:!0,name:"select"};const V=p.bind({}),D=["Base","LongValue","Disabled","Error","Small","Large","FullWidth","Controlled"];export{b as Base,V as Controlled,S as Disabled,u as Error,L as FullWidth,m as Large,g as LongValue,y as Small,D as __namedExportsOrder,E as default};
//# sourceMappingURL=Select.stories.3aa1f444.js.map
