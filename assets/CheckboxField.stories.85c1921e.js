import{r as d,a as l,j as e}from"./jsx-runtime.13473e5a.js";import{C as t}from"./TextField.834126e2.js";import{S as m,a as s}from"./Stack.c9a0f234.js";import"./iframe.f0292316.js";import"./clsx.3b79bc83.js";/* empty css                            */import"./vanilla-extract-recipes-createRuntimeFn.esm.e37fdae4.js";import"./DropdownMenu.6cedf3c4.js";import"./react-spring-web.esm.10288f53.js";import"./index.9eb90350.js";import"./YoutubeIcon.d833495c.js";import"./Paragraph.4e7e05c0.js";const _={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { CheckboxField } from '../../components/inputs';
import { Stack, StackItem } from '../../components/stack/Stack';

export default {
  title: 'UI/Inputs/CheckboxField',
  component: CheckboxField,
  argTypes: {
    disabled: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof CheckboxField>;

const Template: ComponentStory<typeof CheckboxField> = args => {
  const [{ firstChecked, secondChecked }, setChecked] = useState({ firstChecked: true, secondChecked: true });
  return (
    <Stack direction="column">
      <StackItem direction="column" spacing={1}>
        <CheckboxField {...args} checked={firstChecked} onChange={c => setChecked({ firstChecked: c, secondChecked })} />
      </StackItem>
      <StackItem direction="column" spacing={1}>
        <CheckboxField {...args} checked={secondChecked} onChange={c => setChecked({ firstChecked, secondChecked: c })} />
      </StackItem>
    </Stack>
  );
};

export const Field = Template.bind({});
Field.args = {
  label: 'First Name',
  inputProps: {
    name: 'first_name',
  },
};
export const Row = Template.bind({});
Row.args = {
  label: 'First Name',
  inputProps: {
    name: 'first_name',
  },
  variant: 'row',
};
`,locationsMap:{field:{startLoc:{col:55,line:16},endLoc:{col:1,line:28},startBody:{col:55,line:16},endBody:{col:1,line:28}},row:{startLoc:{col:55,line:16},endLoc:{col:1,line:28},startBody:{col:55,line:16},endBody:{col:1,line:28}}}}},title:"UI/Inputs/CheckboxField",component:t,argTypes:{disabled:{type:"boolean"}}},a=o=>{const[{firstChecked:c,secondChecked:r},i]=d.exports.useState({firstChecked:!0,secondChecked:!0});return l(m,{direction:"column",children:[e(s,{direction:"column",spacing:1,children:e(t,{...o,checked:c,onChange:n=>i({firstChecked:n,secondChecked:r})})}),e(s,{direction:"column",spacing:1,children:e(t,{...o,checked:r,onChange:n=>i({firstChecked:c,secondChecked:n})})})]})},p=a.bind({});p.args={label:"First Name",inputProps:{name:"first_name"}};const k=a.bind({});k.args={label:"First Name",inputProps:{name:"first_name"},variant:"row"};const T=["Field","Row"];export{p as Field,k as Row,T as __namedExportsOrder,_ as default};
//# sourceMappingURL=CheckboxField.stories.85c1921e.js.map
