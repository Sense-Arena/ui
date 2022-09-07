import{R as o}from"./TextField.5eb3d2c5.js";import{a as t,F as a,j as n}from"./jsx-runtime.926f1b63.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.89755c4d.js";import"./Paragraph.c25ccb47.js";/* empty css                             */import"./styled.5d1ebd31.js";import"./TransitionGroupContext.f217f2f6.js";import"./iframe.5e558cf8.js";const R={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{base:{startLoc:{col:52,line:14},endLoc:{col:1,line:19},startBody:{col:52,line:14},endBody:{col:1,line:19}}}}},title:"UI/Inputs/RadioField",component:o,argTypes:{disabled:{type:"boolean"}}},i=e=>t(a,{children:[n(o,{...e}),n(o,{...e})]}),r=i.bind({});r.args={label:"First Name",radioProps:{name:"first_name"}};const b=["Base"];export{r as Base,b as __namedExportsOrder,R as default};
//# sourceMappingURL=RadioField.stories.16803e71.js.map
