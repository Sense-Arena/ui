import{r as i,a as c,j as e}from"./jsx-runtime.13473e5a.js";import{R as t}from"./TextField.834126e2.js";import{S as s,a as r}from"./Stack.c9a0f234.js";import"./iframe.f0292316.js";import"./clsx.3b79bc83.js";/* empty css                            */import"./vanilla-extract-recipes-createRuntimeFn.esm.e37fdae4.js";import"./DropdownMenu.6cedf3c4.js";import"./react-spring-web.esm.10288f53.js";import"./index.9eb90350.js";import"./YoutubeIcon.d833495c.js";import"./Paragraph.4e7e05c0.js";const b={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
//# sourceMappingURL=RadioField.stories.6fff3c37.js.map
