import{a as n}from"./TextField.5eb3d2c5.js";import{j as o}from"./jsx-runtime.926f1b63.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.89755c4d.js";import"./Paragraph.c25ccb47.js";/* empty css                             */import"./styled.5d1ebd31.js";import"./TransitionGroupContext.f217f2f6.js";import"./iframe.5e558cf8.js";const y={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{base:{startLoc:{col:51,line:14},endLoc:{col:82,line:14},startBody:{col:51,line:14},endBody:{col:82,line:14}},filled:{startLoc:{col:51,line:14},endLoc:{col:82,line:14},startBody:{col:51,line:14},endBody:{col:82,line:14}},disabled:{startLoc:{col:51,line:14},endLoc:{col:82,line:14},startBody:{col:51,line:14},endBody:{col:82,line:14}},error:{startLoc:{col:51,line:14},endLoc:{col:82,line:14},startBody:{col:51,line:14},endBody:{col:82,line:14}},"error-filled":{startLoc:{col:51,line:14},endLoc:{col:82,line:14},startBody:{col:51,line:14},endBody:{col:82,line:14}}}}},title:"UI/Inputs/TextField",component:n,argTypes:{disabled:{type:"boolean"}}},e=r=>o(n,{...r}),t=e.bind({});t.args={label:"First Name",name:"first_name",placeholder:"write"};const l=e.bind({});l.args={label:"First Name",name:"first_name",value:"Konstantin"};const a=e.bind({});a.args={label:"First Name",name:"first_name",disabled:!0};const s=e.bind({});s.args={label:"Last Name",name:"last_name",errorText:"Error message lorem ipsum"};const i=e.bind({});i.args={label:"Last Name",name:"last_name",value:"AAAAAAAA",errorText:"Error message lorem ipsum"};const g=["Base","Filled","Disabled","Error","ErrorFilled"];export{t as Base,a as Disabled,s as Error,i as ErrorFilled,l as Filled,g as __namedExportsOrder,y as default};
//# sourceMappingURL=TextField.stories.f25303c9.js.map
