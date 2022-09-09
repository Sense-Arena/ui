import{T as n}from"./TextField.e9b60cff.js";import{j as o}from"./jsx-runtime.5d846f11.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.89755c4d.js";import"./Paragraph.5fee3b97.js";/* empty css                             */import"./styled.0e6b743a.js";import"./TransitionGroupContext.a2861d94.js";import"./iframe.44efcd93.js";const y={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{base:{startLoc:{col:50,line:14},endLoc:{col:80,line:14},startBody:{col:50,line:14},endBody:{col:80,line:14}},filled:{startLoc:{col:50,line:14},endLoc:{col:80,line:14},startBody:{col:50,line:14},endBody:{col:80,line:14}},disabled:{startLoc:{col:50,line:14},endLoc:{col:80,line:14},startBody:{col:50,line:14},endBody:{col:80,line:14}},error:{startLoc:{col:50,line:14},endLoc:{col:80,line:14},startBody:{col:50,line:14},endBody:{col:80,line:14}},"error-filled":{startLoc:{col:50,line:14},endLoc:{col:80,line:14},startBody:{col:50,line:14},endBody:{col:80,line:14}}}}},title:"UI/Inputs/TextArea",component:n,argTypes:{disabled:{type:"boolean"}}},e=r=>o(n,{...r}),a=e.bind({});a.args={label:"First Name",name:"first_name",placeholder:"write"};const t=e.bind({});t.args={label:"First Name",name:"first_name",value:"Konstantin"};const l=e.bind({});l.args={label:"First Name",name:"first_name",disabled:!0};const s=e.bind({});s.args={label:"Last Name",name:"last_name",errorText:"Error message lorem ipsum"};const i=e.bind({});i.args={label:"Last Name",name:"last_name",value:"AAAAAAAA",errorText:"Error message lorem ipsum"};const g=["Base","Filled","Disabled","Error","ErrorFilled"];export{a as Base,l as Disabled,s as Error,i as ErrorFilled,t as Filled,g as __namedExportsOrder,y as default};
//# sourceMappingURL=TextArea.stories.0d056062.js.map