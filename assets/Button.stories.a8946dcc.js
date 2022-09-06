import{B as o}from"./Button.0f712964.js";import{j as e}from"./jsx-runtime.881626c7.js";import"./clsx.3b79bc83.js";/* empty css                             */import"./vanilla-extract-recipes-createRuntimeFn.esm.36bbe845.js";import"./iframe.1f0da806.js";const b={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../components/button/Button';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    disabled: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};
export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
  color: 'secondary',
};
export const Outline = Template.bind({});
Outline.args = {
  children: 'Button',
  color: 'outline',
};
export const PrimaryBig = Template.bind({});
PrimaryBig.args = {
  children: 'Button',
  size: 'big',
};
export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  children: 'Button',
  size: 'small',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Test long description',
  disabled: true,
};
`,locationsMap:{primary:{startLoc:{col:48,line:14},endLoc:{col:76,line:14},startBody:{col:48,line:14},endBody:{col:76,line:14}},secondary:{startLoc:{col:48,line:14},endLoc:{col:76,line:14},startBody:{col:48,line:14},endBody:{col:76,line:14}},outline:{startLoc:{col:48,line:14},endLoc:{col:76,line:14},startBody:{col:48,line:14},endBody:{col:76,line:14}},"primary-big":{startLoc:{col:48,line:14},endLoc:{col:76,line:14},startBody:{col:48,line:14},endBody:{col:76,line:14}},"primary-small":{startLoc:{col:48,line:14},endLoc:{col:76,line:14},startBody:{col:48,line:14},endBody:{col:76,line:14}},disabled:{startLoc:{col:48,line:14},endLoc:{col:76,line:14},startBody:{col:48,line:14},endBody:{col:76,line:14}}}}},title:"UI/Button",component:o,argTypes:{disabled:{type:"boolean"}}},n=t=>e(o,{...t}),r=n.bind({});r.args={children:"Button"};const l=n.bind({});l.args={children:"Button",color:"secondary"};const i=n.bind({});i.args={children:"Button",color:"outline"};const a=n.bind({});a.args={children:"Button",size:"big"};const c=n.bind({});c.args={children:"Button",size:"small"};const s=n.bind({});s.args={children:"Test long description",disabled:!0};const g=["Primary","Secondary","Outline","PrimaryBig","PrimarySmall","Disabled"];export{s as Disabled,i as Outline,r as Primary,a as PrimaryBig,c as PrimarySmall,l as Secondary,g as __namedExportsOrder,b as default};
//# sourceMappingURL=Button.stories.a8946dcc.js.map
