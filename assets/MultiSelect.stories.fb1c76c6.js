import{r,j as a}from"./jsx-runtime.15c2e751.js";import{M as o}from"./TextField.af23df97.js";import"./iframe.c03e647a.js";import"./clsx.3b79bc83.js";/* empty css                            */import"./vanilla-extract-recipes-createRuntimeFn.esm.e37fdae4.js";import"./DropdownMenu.02c0f2ef.js";import"./react-spring-web.esm.0cda44e1.js";import"./index.b628021e.js";import"./YoutubeIcon.5b6c4d16.js";import"./Chip.5913c79b.js";import"./Paragraph.23377f1e.js";const L={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { MultiSelect } from '../../components/inputs';

export default {
  title: 'UI/Inputs/MultiSelect',
  component: MultiSelect,
  argTypes: {
    disabled: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof MultiSelect>;

const options = [
  {
    title: 'Test option 1',
    value: '1',
  },
  {
    title: 'Test option 2',
    value: '2',
  },
  {
    title: 'Test option 3',
    value: '3',
  },
  {
    title: 'Test option 4',
    value: '4',
  },
  {
    title: 'Test option 5',
    value: '5',
  },
  {
    title: 'Test option 6',
    value: '6',
  },
  {
    title: 'Test option 7',
    value: '7',
  },
  {
    title: 'Test option 8',
    value: '8',
  },
  {
    title: 'Test option 9',
    value: '9',
  },
  {
    title: 'Test option 10',
    value: '10',
  },
];

const Template: ComponentStory<typeof MultiSelect> = args => {
  const [selected, setSelected] = useState<string[]>(args.selectedOptions as string[]);
  return (
    <MultiSelect
      options={options}
      onChangeSelect={values => setSelected(values)}
      label={args.label}
      border={args.border}
      selectedOptions={selected}
      disabled={args.disabled}
      errorText={args.errorText}
      fullWidth={args.fullWidth}
    />
  );
};

export const Base = Template.bind({});
Base.args = {
  selectedOptions: [],
  onChangeSelect: console.debug,
  options,
  border: 'grey',
  label: 'Title',
};

export const Disabled = Template.bind({});
Disabled.args = {
  selectedOptions: [],
  onChangeSelect: console.debug,
  label: 'Title',
  options,
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  selectedOptions: [],
  onChangeSelect: console.debug,
  label: 'Title',
  options,
  errorText: 'Error message text',
  border: 'grey',
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  selectedOptions: [],
  onChangeSelect: console.debug,
  options,
  border: 'grey',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  selectedOptions: [],
  onChangeSelect: console.debug,
  options,
  border: 'grey',
  fullWidth: true,
  name: 'select',
};
`,locationsMap:{base:{startLoc:{col:53,line:58},endLoc:{col:1,line:72},startBody:{col:53,line:58},endBody:{col:1,line:72}},disabled:{startLoc:{col:53,line:58},endLoc:{col:1,line:72},startBody:{col:53,line:58},endBody:{col:1,line:72}},error:{startLoc:{col:53,line:58},endLoc:{col:1,line:72},startBody:{col:53,line:58},endBody:{col:1,line:72}},"without-label":{startLoc:{col:53,line:58},endLoc:{col:1,line:72},startBody:{col:53,line:58},endBody:{col:1,line:72}},"full-width":{startLoc:{col:53,line:58},endLoc:{col:1,line:72},startBody:{col:53,line:58},endBody:{col:1,line:72}}}}},title:"UI/Inputs/MultiSelect",component:o,argTypes:{disabled:{type:"boolean"}}},t=[{title:"Test option 1",value:"1"},{title:"Test option 2",value:"2"},{title:"Test option 3",value:"3"},{title:"Test option 4",value:"4"},{title:"Test option 5",value:"5"},{title:"Test option 6",value:"6"},{title:"Test option 7",value:"7"},{title:"Test option 8",value:"8"},{title:"Test option 9",value:"9"},{title:"Test option 10",value:"10"}],n=e=>{const[l,s]=r.exports.useState(e.selectedOptions);return a(o,{options:t,onChangeSelect:i=>s(i),label:e.label,border:e.border,selectedOptions:l,disabled:e.disabled,errorText:e.errorText,fullWidth:e.fullWidth})},c=n.bind({});c.args={selectedOptions:[],onChangeSelect:console.debug,options:t,border:"grey",label:"Title"};const d=n.bind({});d.args={selectedOptions:[],onChangeSelect:console.debug,label:"Title",options:t,disabled:!0};const p=n.bind({});p.args={selectedOptions:[],onChangeSelect:console.debug,label:"Title",options:t,errorText:"Error message text",border:"grey"};const u=n.bind({});u.args={selectedOptions:[],onChangeSelect:console.debug,options:t,border:"grey"};const b=n.bind({});b.args={selectedOptions:[],onChangeSelect:console.debug,options:t,border:"grey",fullWidth:!0,name:"select"};const W=["Base","Disabled","Error","WithoutLabel","FullWidth"];export{c as Base,d as Disabled,p as Error,b as FullWidth,u as WithoutLabel,W as __namedExportsOrder,L as default};
//# sourceMappingURL=MultiSelect.stories.fb1c76c6.js.map
