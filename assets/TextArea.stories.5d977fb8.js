import{T as n}from"./TextField.f91f441c.js";import{j as o}from"./jsx-runtime.bfd70386.js";import"./clsx.3b79bc83.js";/* empty css                            */import"./vanilla-extract-recipes-createRuntimeFn.esm.57f0c9b7.js";import"./Paragraph.5907f3e0.js";import"./iframe.b8a8c800.js";const x={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextArea } from '../../components/inputs';

export default {
  title: 'UI/Inputs/TextArea',
  component: TextArea,
  argTypes: {
    disabled: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = args => <TextArea {...args} />;

export const Base = Template.bind({});
Base.args = {
  label: 'First Name',
  name: 'first_name',
  placeholder: 'write',
};

export const Filled = Template.bind({});
Filled.args = {
  label: 'First Name',
  name: 'first_name',
  value: 'Konstantin',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'First Name',
  name: 'first_name',
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  label: 'Last Name',
  name: 'last_name',
  errorText: 'Error message lorem ipsum',
};
export const ErrorFilled = Template.bind({});
ErrorFilled.args = {
  label: 'Last Name',
  name: 'last_name',
  value: 'AAAAAAAA',
  errorText: 'Error message lorem ipsum',
};
`,locationsMap:{base:{startLoc:{col:50,line:14},endLoc:{col:80,line:14},startBody:{col:50,line:14},endBody:{col:80,line:14}},filled:{startLoc:{col:50,line:14},endLoc:{col:80,line:14},startBody:{col:50,line:14},endBody:{col:80,line:14}},disabled:{startLoc:{col:50,line:14},endLoc:{col:80,line:14},startBody:{col:50,line:14},endBody:{col:80,line:14}},error:{startLoc:{col:50,line:14},endLoc:{col:80,line:14},startBody:{col:50,line:14},endBody:{col:80,line:14}},"error-filled":{startLoc:{col:50,line:14},endLoc:{col:80,line:14},startBody:{col:50,line:14},endBody:{col:80,line:14}}}}},title:"UI/Inputs/TextArea",component:n,argTypes:{disabled:{type:"boolean"}}},e=r=>o(n,{...r}),a=e.bind({});a.args={label:"First Name",name:"first_name",placeholder:"write"};const t=e.bind({});t.args={label:"First Name",name:"first_name",value:"Konstantin"};const l=e.bind({});l.args={label:"First Name",name:"first_name",disabled:!0};const s=e.bind({});s.args={label:"Last Name",name:"last_name",errorText:"Error message lorem ipsum"};const i=e.bind({});i.args={label:"Last Name",name:"last_name",value:"AAAAAAAA",errorText:"Error message lorem ipsum"};const y=["Base","Filled","Disabled","Error","ErrorFilled"];export{a as Base,l as Disabled,s as Error,i as ErrorFilled,t as Filled,y as __namedExportsOrder,x as default};
//# sourceMappingURL=TextArea.stories.5d977fb8.js.map
