import{T as n}from"./TextField.022b7552.js";import{j as o}from"./jsx-runtime.5cca37ce.js";import"./clsx.3b79bc83.js";/* empty css                            */import"./vanilla-extract-recipes-createRuntimeFn.esm.57f0c9b7.js";import"./DropdownMenu.c5b5e631.js";import"./react-spring-web.esm.bbeed26a.js";import"./index.2dc55c8f.js";import"./iframe.35bd8c41.js";import"./YoutubeIcon.4c10ee70.js";import"./Paragraph.fbcc3f37.js";const f={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{base:{startLoc:{col:50,line:14},endLoc:{col:80,line:14},startBody:{col:50,line:14},endBody:{col:80,line:14}},filled:{startLoc:{col:50,line:14},endLoc:{col:80,line:14},startBody:{col:50,line:14},endBody:{col:80,line:14}},disabled:{startLoc:{col:50,line:14},endLoc:{col:80,line:14},startBody:{col:50,line:14},endBody:{col:80,line:14}},error:{startLoc:{col:50,line:14},endLoc:{col:80,line:14},startBody:{col:50,line:14},endBody:{col:80,line:14}},"error-filled":{startLoc:{col:50,line:14},endLoc:{col:80,line:14},startBody:{col:50,line:14},endBody:{col:80,line:14}}}}},title:"UI/Inputs/TextArea",component:n,argTypes:{disabled:{type:"boolean"}}},e=r=>o(n,{...r}),t=e.bind({});t.args={label:"First Name",name:"first_name",placeholder:"write"};const a=e.bind({});a.args={label:"First Name",name:"first_name",value:"Konstantin"};const l=e.bind({});l.args={label:"First Name",name:"first_name",disabled:!0};const s=e.bind({});s.args={label:"Last Name",name:"last_name",errorText:"Error message lorem ipsum"};const i=e.bind({});i.args={label:"Last Name",name:"last_name",value:"AAAAAAAA",errorText:"Error message lorem ipsum"};const B=["Base","Filled","Disabled","Error","ErrorFilled"];export{t as Base,l as Disabled,s as Error,i as ErrorFilled,a as Filled,B as __namedExportsOrder,f as default};
//# sourceMappingURL=TextArea.stories.b644fdb1.js.map