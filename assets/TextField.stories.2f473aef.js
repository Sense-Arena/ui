import{a as n}from"./TextField.25f8acc7.js";import{j as o}from"./jsx-runtime.d9808ae3.js";import"./clsx.3b79bc83.js";import"./Paragraph.a7f49144.js";/* empty css                             */import"./vanilla-extract-recipes-createRuntimeFn.esm.36bbe845.js";import"./styled.4b1ab959.js";import"./TransitionGroupContext.6a5b1e81.js";import"./iframe.3f93d591.js";const g={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextField } from '../../components/inputs';

export default {
  title: 'UI/Inputs/TextField',
  component: TextField,
  argTypes: {
    disabled: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = args => <TextField {...args} />;

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
`,locationsMap:{base:{startLoc:{col:51,line:14},endLoc:{col:82,line:14},startBody:{col:51,line:14},endBody:{col:82,line:14}},filled:{startLoc:{col:51,line:14},endLoc:{col:82,line:14},startBody:{col:51,line:14},endBody:{col:82,line:14}},disabled:{startLoc:{col:51,line:14},endLoc:{col:82,line:14},startBody:{col:51,line:14},endBody:{col:82,line:14}},error:{startLoc:{col:51,line:14},endLoc:{col:82,line:14},startBody:{col:51,line:14},endBody:{col:82,line:14}},"error-filled":{startLoc:{col:51,line:14},endLoc:{col:82,line:14},startBody:{col:51,line:14},endBody:{col:82,line:14}}}}},title:"UI/Inputs/TextField",component:n,argTypes:{disabled:{type:"boolean"}}},e=r=>o(n,{...r}),t=e.bind({});t.args={label:"First Name",name:"first_name",placeholder:"write"};const l=e.bind({});l.args={label:"First Name",name:"first_name",value:"Konstantin"};const a=e.bind({});a.args={label:"First Name",name:"first_name",disabled:!0};const s=e.bind({});s.args={label:"Last Name",name:"last_name",errorText:"Error message lorem ipsum"};const i=e.bind({});i.args={label:"Last Name",name:"last_name",value:"AAAAAAAA",errorText:"Error message lorem ipsum"};const u=["Base","Filled","Disabled","Error","ErrorFilled"];export{t as Base,a as Disabled,s as Error,i as ErrorFilled,l as Filled,u as __namedExportsOrder,g as default};
//# sourceMappingURL=TextField.stories.2f473aef.js.map
