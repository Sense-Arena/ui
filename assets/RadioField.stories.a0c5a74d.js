import{r as i,a as c,j as e}from"./jsx-runtime.9fa17b56.js";import{R as t}from"./TextField.6242b1f5.js";import{S as s,a as r}from"./Stack.7c60dae5.js";import"./iframe.f651ff74.js";import"./clsx.3b79bc83.js";/* empty css                            */import"./vanilla-extract-recipes-createRuntimeFn.esm.57f0c9b7.js";import"./DropdownMenu.a04ad56c.js";import"./react-spring-web.esm.b2922507.js";import"./index.f8d70d15.js";import"./YoutubeIcon.4365fa84.js";import"./Paragraph.0e097981.js";const b={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { RadioField } from '../../components/inputs';
import { Stack, StackItem } from '../../components/stack/Stack';

export default {
  title: 'UI/Inputs/RadioField',
  component: RadioField,
  argTypes: {
    disabled: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof RadioField>;

const Template: ComponentStory<typeof RadioField> = args => {
  const [checked, setChecked] = useState(1);
  return (
    <Stack direction="row">
      <StackItem direction="row" spacing={1}>
        <RadioField {...args} checked={checked === 0} onChange={() => setChecked(0)} />
      </StackItem>
      <StackItem direction="row" spacing={1}>
        <RadioField {...args} checked={checked === 1} onChange={() => setChecked(1)} />
      </StackItem>
    </Stack>
  );
};

export const Base = Template.bind({});
Base.args = {
  label: 'First Name',
  radioProps: {
    name: 'first_name',
  },
};
`,locationsMap:{base:{startLoc:{col:52,line:16},endLoc:{col:1,line:28},startBody:{col:52,line:16},endBody:{col:1,line:28}}}}},title:"UI/Inputs/RadioField",component:t,argTypes:{disabled:{type:"boolean"}}},d=o=>{const[n,a]=i.exports.useState(1);return c(s,{direction:"row",children:[e(r,{direction:"row",spacing:1,children:e(t,{...o,checked:n===0,onChange:()=>a(0)})}),e(r,{direction:"row",spacing:1,children:e(t,{...o,checked:n===1,onChange:()=>a(1)})})]})},p=d.bind({});p.args={label:"First Name",radioProps:{name:"first_name"}};const I=["Base"];export{p as Base,I as __namedExportsOrder,b as default};
//# sourceMappingURL=RadioField.stories.a0c5a74d.js.map
