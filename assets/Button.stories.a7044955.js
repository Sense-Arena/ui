import{B as o}from"./Button.5820994f.js";import{a as l}from"./TrophyIcon.22389680.js";import{j as t}from"./jsx-runtime.26188c27.js";import"./clsx.3b79bc83.js";/* empty css                             */import"./vanilla-extract-recipes-createRuntimeFn.esm.36bbe845.js";import"./iframe.8e3f48fb.js";const f={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../components/button/Button';
import { ArrowRightCircle } from '../icons';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    disabled: {
      type: 'boolean',
    },
    fullWidth: {
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
export const OutlineSecondary = Template.bind({});
OutlineSecondary.args = {
  children: 'Button',
  color: 'outline_secondary',
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

export const FullWidthWithIcon = Template.bind({});
FullWidthWithIcon.args = {
  fullWidth: true,
  mode: 'square',
  children: 'Button',
  icon: <ArrowRightCircle />,
};
`,locationsMap:{primary:{startLoc:{col:48,line:18},endLoc:{col:76,line:18},startBody:{col:48,line:18},endBody:{col:76,line:18}},secondary:{startLoc:{col:48,line:18},endLoc:{col:76,line:18},startBody:{col:48,line:18},endBody:{col:76,line:18}},outline:{startLoc:{col:48,line:18},endLoc:{col:76,line:18},startBody:{col:48,line:18},endBody:{col:76,line:18}},"outline-secondary":{startLoc:{col:48,line:18},endLoc:{col:76,line:18},startBody:{col:48,line:18},endBody:{col:76,line:18}},"primary-big":{startLoc:{col:48,line:18},endLoc:{col:76,line:18},startBody:{col:48,line:18},endBody:{col:76,line:18}},"primary-small":{startLoc:{col:48,line:18},endLoc:{col:76,line:18},startBody:{col:48,line:18},endBody:{col:76,line:18}},disabled:{startLoc:{col:48,line:18},endLoc:{col:76,line:18},startBody:{col:48,line:18},endBody:{col:76,line:18}},"full-width-with-icon":{startLoc:{col:48,line:18},endLoc:{col:76,line:18},startBody:{col:48,line:18},endBody:{col:76,line:18}}}}},title:"UI/Button",component:o,argTypes:{disabled:{type:"boolean"},fullWidth:{type:"boolean"}}},n=e=>t(o,{...e}),r=n.bind({});r.args={children:"Button"};const i=n.bind({});i.args={children:"Button",color:"secondary"};const c=n.bind({});c.args={children:"Button",color:"outline"};const a=n.bind({});a.args={children:"Button",color:"outline_secondary"};const d=n.bind({});d.args={children:"Button",size:"big"};const s=n.bind({});s.args={children:"Button",size:"small"};const m=n.bind({});m.args={children:"Test long description",disabled:!0};const u=n.bind({});u.args={fullWidth:!0,mode:"square",children:"Button",icon:t(l,{})};const S=["Primary","Secondary","Outline","OutlineSecondary","PrimaryBig","PrimarySmall","Disabled","FullWidthWithIcon"];export{m as Disabled,u as FullWidthWithIcon,c as Outline,a as OutlineSecondary,r as Primary,d as PrimaryBig,s as PrimarySmall,i as Secondary,S as __namedExportsOrder,f as default};
//# sourceMappingURL=Button.stories.a7044955.js.map
