import{R as o}from"./TextField.5e126ac8.js";import{a as t,F as a,j as n}from"./jsx-runtime.f2cca6dd.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.89755c4d.js";import"./Paragraph.36be4569.js";/* empty css                             */import"./TransitionGroupContext.3eb3f219.js";import"./iframe.a5be2d30.js";const y={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RadioField } from '../../components/inputs';

export default {
  title: 'UI/Inputs/RadioField',
  component: RadioField,
  argTypes: {
    disabled: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof RadioField>;

const Template: ComponentStory<typeof RadioField> = args => (
  <>
    <RadioField {...args} />
    <RadioField {...args} />
  </>
);

export const Base = Template.bind({});
Base.args = {
  label: 'First Name',
  radioProps: {
    name: 'first_name',
  },
};
`,locationsMap:{base:{startLoc:{col:52,line:14},endLoc:{col:1,line:19},startBody:{col:52,line:14},endBody:{col:1,line:19}}}}},title:"UI/Inputs/RadioField",component:o,argTypes:{disabled:{type:"boolean"}}},i=e=>t(a,{children:[n(o,{...e}),n(o,{...e})]}),s=i.bind({});s.args={label:"First Name",radioProps:{name:"first_name"}};const R=["Base"];export{s as Base,R as __namedExportsOrder,y as default};
//# sourceMappingURL=RadioField.stories.773645e8.js.map
